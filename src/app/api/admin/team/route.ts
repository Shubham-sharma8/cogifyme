import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import {
  verifyAdminToken,
  hashPassword,
  ADMIN_COOKIE_NAME,
} from "@/lib/security/auth";
import { AdminRole, AdminStatus } from "@prisma/client";

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

    const envEmail = (process.env.DEFAULT_ADMIN_EMAIL || "admin@cogify.me").toLowerCase();
    return NextResponse.json({
      admins: [
        {
          id: session.adminId || "admin-super-01",
          email: envEmail,
          name: "Super Admin",
          role: "SUPER_ADMIN",
          status: "ACTIVE",
        },
      ],
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(_req: NextRequest) {
  return NextResponse.json(
    { error: "Team account creation is permanently disabled. Only environment admin is allowed." },
    { status: 403 }
  );
}

export async function PATCH(_req: NextRequest) {
  return NextResponse.json(
    { error: "Team account modification is permanently disabled. Only environment admin is allowed." },
    { status: 403 }
  );
}
