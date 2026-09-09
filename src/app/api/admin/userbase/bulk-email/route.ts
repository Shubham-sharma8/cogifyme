import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { verifyAdminToken, ADMIN_COOKIE_NAME } from "@/lib/security/auth";
import { sendBulkAnnouncementEmail } from "@/lib/email/service";

async function requireSuperAdmin(req: NextRequest) {
  const cookie = req.cookies.get(ADMIN_COOKIE_NAME);
  if (!cookie?.value) return null;
  const session = await verifyAdminToken(cookie.value);
  if (!session || session.role !== "SUPER_ADMIN") return null;
  return session;
}

export async function POST(req: NextRequest) {
  try {
    const session = await requireSuperAdmin(req);
    if (!session) {
      return NextResponse.json(
        { error: "Forbidden: Super Admin access required to send bulk emails" },
        { status: 403 }
      );
    }

    const body = await req.json();
    const { target = "ALL", contactIds = [], subject, messageHtml } = body;

    if (!subject || !subject.trim()) {
      return NextResponse.json({ error: "Email subject is required" }, { status: 400 });
    }

    if (!messageHtml || !messageHtml.trim()) {
      return NextResponse.json({ error: "Email message body is required" }, { status: 400 });
    }

    // Resolve recipients based on target selection
    let recipients: { id: string; email: string; name?: string | null }[] = [];

    if (target === "SELECTED" && Array.isArray(contactIds) && contactIds.length > 0) {
      const { contacts } = await db.getUserContacts({ limit: 1000 });
      recipients = contacts
        .filter((c) => contactIds.includes(c.id) && c.status === "SUBSCRIBED")
        .map((c) => ({ id: c.id, email: c.email, name: c.name }));
    } else if (target === "ENTERPRISE") {
      const { contacts } = await db.getUserContacts({ source: "ENTERPRISE", status: "SUBSCRIBED", limit: 1000 });
      recipients = contacts.map((c) => ({ id: c.id, email: c.email, name: c.name }));
    } else {
      // ALL subscribed
      const { contacts } = await db.getUserContacts({ status: "SUBSCRIBED", limit: 2000 });
      recipients = contacts.map((c) => ({ id: c.id, email: c.email, name: c.name }));
    }

    if (recipients.length === 0) {
      return NextResponse.json(
        { error: "No subscribed recipients found matching the selected target criteria" },
        { status: 400 }
      );
    }

    let sentCount = 0;
    let failedCount = 0;
    const sentContactIds: string[] = [];

    // Dispatch emails with pacing to respect email rate limits
    for (const recipient of recipients) {
      try {
        const result = await sendBulkAnnouncementEmail({
          to: recipient.email,
          recipientName: recipient.name || undefined,
          subject,
          messageHtml,
        });

        if (result.success) {
          sentCount++;
          sentContactIds.push(recipient.id);
        } else {
          failedCount++;
        }
      } catch (err) {
        console.error(`Failed to dispatch email to ${recipient.email}:`, err);
        failedCount++;
      }
    }

    // Update last emailed timestamps in DB
    if (sentContactIds.length > 0) {
      await db.recordBulkEmailSent(sentContactIds);
    }

    const clientIp = req.headers.get("cf-connecting-ip") || "127.0.0.1";
    await db.addAuditLog({
      action: "BULK_EMAIL_SENT",
      adminId: session.adminId,
      ipAddress: clientIp,
      details: `Dispatched bulk email "${subject}" to ${sentCount} recipient(s) (${failedCount} failed) via Resend. Target: ${target}`,
    });

    return NextResponse.json({
      success: true,
      sentCount,
      failedCount,
      totalRecipients: recipients.length,
    });
  } catch (error: any) {
    console.error("Bulk email API error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
