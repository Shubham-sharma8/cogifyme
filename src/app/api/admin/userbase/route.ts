import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { verifyAdminToken, ADMIN_COOKIE_NAME } from "@/lib/security/auth";

async function requireSuperAdmin(req: NextRequest) {
  const cookie = req.cookies.get(ADMIN_COOKIE_NAME);
  if (!cookie?.value) return null;
  const session = await verifyAdminToken(cookie.value);
  if (!session || session.role !== "SUPER_ADMIN") return null;
  return session;
}

export async function GET(req: NextRequest) {
  try {
    const session = await requireSuperAdmin(req);
    if (!session) {
      return NextResponse.json(
        { error: "Forbidden: Super Admin access required" },
        { status: 403 }
      );
    }

    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search") || undefined;
    const status = searchParams.get("status") || undefined;
    const source = searchParams.get("source") || undefined;
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "50", 10);
    const offset = (page - 1) * limit;
    const shouldBackfill = searchParams.get("backfill") === "true";

    if (shouldBackfill) {
      await db.backfillContactsFromTickets();
    }

    const [{ contacts, total }, stats] = await Promise.all([
      db.getUserContacts({ search, status, source, limit, offset }),
      db.getUserContactStats(),
    ]);

    return NextResponse.json({
      contacts,
      total,
      stats,
      page,
      limit,
    });
  } catch (error: any) {
    console.error("Userbase GET error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await requireSuperAdmin(req);
    if (!session) {
      return NextResponse.json(
        { error: "Forbidden: Super Admin access required" },
        { status: 403 }
      );
    }

    const body = await req.json();
    const { email, name, phone, company, source = "DIRECT", notes, status = "SUBSCRIBED" } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required" },
        { status: 400 }
      );
    }

    const contact = await db.upsertUserContact({
      email,
      name: name || null,
      phone: phone || null,
      company: company || null,
      source,
      notes: notes || null,
      status,
    });

    const clientIp = req.headers.get("cf-connecting-ip") || "127.0.0.1";
    await db.addAuditLog({
      action: "USERBASE_CONTACT_ADDED",
      adminId: session.adminId,
      ipAddress: clientIp,
      details: `Added contact: ${email} (${name || "No name"}) via Admin UI`,
    });

    return NextResponse.json({ success: true, contact });
  } catch (error: any) {
    console.error("Userbase POST error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const session = await requireSuperAdmin(req);
    if (!session) {
      return NextResponse.json(
        { error: "Forbidden: Super Admin access required" },
        { status: 403 }
      );
    }

    const body = await req.json();
    const { id, name, phone, company, source, notes, status } = body;

    if (!id) {
      return NextResponse.json({ error: "Contact ID is required" }, { status: 400 });
    }

    const updated = await db.updateUserContact(id, {
      name,
      phone,
      company,
      source,
      notes,
      status,
    });

    if (!updated) {
      return NextResponse.json({ error: "Contact not found" }, { status: 404 });
    }

    const clientIp = req.headers.get("cf-connecting-ip") || "127.0.0.1";
    await db.addAuditLog({
      action: "USERBASE_CONTACT_UPDATED",
      adminId: session.adminId,
      ipAddress: clientIp,
      details: `Updated contact: ${updated.email} (${updated.name || "No name"})`,
    });

    return NextResponse.json({ success: true, contact: updated });
  } catch (error: any) {
    console.error("Userbase PATCH error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const session = await requireSuperAdmin(req);
    if (!session) {
      return NextResponse.json(
        { error: "Forbidden: Super Admin access required" },
        { status: 403 }
      );
    }

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Contact ID is required" }, { status: 400 });
    }

    const success = await db.deleteUserContact(id);
    if (!success) {
      return NextResponse.json({ error: "Failed to delete contact" }, { status: 404 });
    }

    const clientIp = req.headers.get("cf-connecting-ip") || "127.0.0.1";
    await db.addAuditLog({
      action: "USERBASE_CONTACT_DELETED",
      adminId: session.adminId,
      ipAddress: clientIp,
      details: `Deleted contact ID ${id}`,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Userbase DELETE error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
