import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { verifyAdminToken, ADMIN_COOKIE_NAME } from "@/lib/security/auth";
import { sendAdminReplyEmail } from "@/lib/email/service";
import { TicketCategory, TicketStatus, TicketPriority } from "@prisma/client";

async function authenticateAdmin(req: NextRequest) {
  const cookie = req.cookies.get(ADMIN_COOKIE_NAME);
  if (!cookie?.value) return null;
  return await verifyAdminToken(cookie.value);
}

export async function GET(req: NextRequest) {
  try {
    const session = await authenticateAdmin(req);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const metricsOnly = searchParams.get("metrics") === "true";

    if (metricsOnly) {
      const summary = await db.getMetricsSummary();
      return NextResponse.json(summary);
    }

    const category = searchParams.get("category") as TicketCategory | null;
    const status = searchParams.get("status") as TicketStatus | null;
    const search = searchParams.get("q") || undefined;

    const tickets = await db.getTickets({
      category: category || undefined,
      status: status || undefined,
      search,
    });

    return NextResponse.json({ tickets });
  } catch (error: any) {
    console.error("Tickets API GET error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const session = await authenticateAdmin(req);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
    }

    const body = await req.json();
    const { ticketId, status, priority, assignedToAdminId, isSpam } = body;

    if (!ticketId) {
      return NextResponse.json({ error: "Ticket ID required" }, { status: 400 });
    }

    const updated = await db.updateTicket(ticketId, {
      status: status as TicketStatus,
      priority: priority as TicketPriority,
      assignedToAdminId,
      isSpam,
    });

    if (!updated) {
      return NextResponse.json({ error: "Ticket not found" }, { status: 404 });
    }

    const clientIp = req.headers.get("cf-connecting-ip") || "127.0.0.1";
    await db.addAuditLog({
      action: "TICKET_UPDATED",
      adminId: session.adminId,
      ipAddress: clientIp,
      details: `Ticket ${updated.referenceCode} updated: status=${updated.status}, assigned=${updated.assignedToAdminId || "none"}`,
    });

    return NextResponse.json({ success: true, ticket: updated });
  } catch (error: any) {
    console.error("Tickets API PATCH error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await authenticateAdmin(req);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
    }

    const body = await req.json();
    const { ticketId, message, isInternalNote = false } = body;

    if (!ticketId || !message) {
      return NextResponse.json(
        { error: "Ticket ID and response message are required" },
        { status: 400 }
      );
    }

    const response = await db.addTicketResponse({
      ticketId,
      authorAdminId: session.adminId,
      authorType: "ADMIN",
      authorName: session.name,
      message,
      isInternalNote,
    });

    // If public reply, dispatch email to the customer
    let emailDispatched = false;
    if (!isInternalNote) {
      const ticket = await db.getTicketById(ticketId);
      if (ticket && ticket.senderEmail) {
        try {
          const emailResult = await sendAdminReplyEmail({
            customerEmail: ticket.senderEmail,
            customerName: ticket.senderName,
            adminName: session.name,
            ticketReferenceCode: ticket.referenceCode,
            ticketTitle: ticket.title,
            message,
            originalDescription: ticket.description,
          });
          emailDispatched = emailResult.success;
        } catch (emailErr) {
          console.error("Failed to send admin reply email:", emailErr);
        }
      }
    }

    const clientIp = req.headers.get("cf-connecting-ip") || "127.0.0.1";
    await db.addAuditLog({
      action: isInternalNote ? "TICKET_NOTE_ADDED" : "TICKET_RESPONSE_SENT",
      adminId: session.adminId,
      ipAddress: clientIp,
      details: `${isInternalNote ? "Internal note added to" : "Response sent & emailed for"} ticket ${ticketId}`,
    });

    return NextResponse.json({ success: true, response, emailDispatched });
  } catch (error: any) {
    console.error("Tickets API POST error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
