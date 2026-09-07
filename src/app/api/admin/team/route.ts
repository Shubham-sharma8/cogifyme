import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import {
  verifyAdminToken,
  hashPassword,
  ADMIN_COOKIE_NAME,
} from "@/lib/security/auth";
import type { AdminRole, AdminStatus } from "@prisma/client";

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

    const admins = await db.getAllAdmins();
    // Exclude passwordHash from output
    const safeAdmins = admins.map(({ passwordHash, ...rest }) => rest);
    return NextResponse.json({ admins: safeAdmins });
  } catch (error: any) {
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
    const { email, password, name, role = "ADMIN" } = body;

    if (!email || !password || !name) {
      return NextResponse.json(
        { error: "Name, email, and password are required" },
        { status: 400 }
      );
    }

    const existing = await db.getAdminByEmail(email);
    if (existing) {
      return NextResponse.json(
        { error: "An admin with this email address already exists" },
        { status: 409 }
      );
    }

    const passwordHash = await hashPassword(password);
    const newAdmin = await db.createAdmin({
      email,
      name,
      passwordHash,
      role: role as AdminRole,
    });

    const clientIp = req.headers.get("cf-connecting-ip") || "127.0.0.1";
    await db.addAuditLog({
      action: "ADMIN_ACCOUNT_CREATED",
      adminId: session.adminId,
      ipAddress: clientIp,
      details: `Created admin account for ${newAdmin.name} (${newAdmin.email}) with role ${newAdmin.role}`,
    });

    const { passwordHash: _, ...safeAdmin } = newAdmin;
    return NextResponse.json({ success: true, admin: safeAdmin });
  } catch (error: any) {
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
    const { adminId, status } = body;

    if (!adminId || !status) {
      return NextResponse.json({ error: "adminId and status required" }, { status: 400 });
    }

    // Protect against self-suspension
    if (adminId === session.adminId) {
      return NextResponse.json(
        { error: "You cannot change the status of your own account" },
        { status: 400 }
      );
    }

    const updated = await db.updateAdminStatus(adminId, status as AdminStatus);
    if (!updated) {
      return NextResponse.json({ error: "Admin not found" }, { status: 404 });
    }

    const clientIp = req.headers.get("cf-connecting-ip") || "127.0.0.1";
    await db.addAuditLog({
      action: "ADMIN_STATUS_CHANGED",
      adminId: session.adminId,
      ipAddress: clientIp,
      details: `Admin ${updated.email} status changed to ${updated.status}`,
    });

    const { passwordHash: _, ...safeAdmin } = updated;
    return NextResponse.json({ success: true, admin: safeAdmin });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
