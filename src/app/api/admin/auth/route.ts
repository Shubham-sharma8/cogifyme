import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import {
  hashPassword,
  createAdminToken,
  verifyAdminToken,
  ADMIN_COOKIE_NAME,
} from "@/lib/security/auth";
import { verifyAntiBot } from "@/lib/security/turnstile";

export async function GET(req: NextRequest) {
  try {
    const cookie = req.cookies.get(ADMIN_COOKIE_NAME);
    if (!cookie?.value) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    const session = await verifyAdminToken(cookie.value);
    if (!session) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    const admin = await db.getAdminById(session.adminId);
    if (!admin || admin.status !== "ACTIVE") {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    return NextResponse.json({
      authenticated: true,
      admin: {
        id: admin.id,
        email: admin.email,
        name: admin.name,
        role: admin.role,
        lastLoginAt: admin.lastLoginAt,
      },
    });
  } catch (error: any) {
    return NextResponse.json({ authenticated: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { action = "login" } = body;

    const clientIp =
      req.headers.get("cf-connecting-ip") ||
      req.headers.get("x-real-ip") ||
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      "127.0.0.1";
    const userAgent = req.headers.get("user-agent") || "Unknown Browser";

    // -------------------------------------------------------------
    // ACTION: LOGIN (Strictly DEFAULT_ADMIN_EMAIL & DEFAULT_ADMIN_PASSWORD)
    // -------------------------------------------------------------
    if (action === "login") {
      const { email, password, turnstileToken, _hp_company, formStartTime } = body;

      // Anti-Bot Verification
      const botCheck = await verifyAntiBot({
        turnstileToken,
        honeypot: _hp_company,
        formStartTime,
        clientIp,
      });

      if (botCheck.isBot) {
        await db.addAuditLog({
          action: "BOT_LOGIN_ATTEMPT_BLOCKED",
          ipAddress: clientIp,
          userAgent,
          details: `Blocked automated login attempt for: ${email}. Reason: ${botCheck.reason}`,
        });
        return NextResponse.json(
          { success: false, error: "Bot verification failed." },
          { status: 403 }
        );
      }

      if (!email || !password) {
        return NextResponse.json(
          { success: false, error: "Email and password are required." },
          { status: 400 }
        );
      }

      const envAdminEmail = (process.env.DEFAULT_ADMIN_EMAIL || "admin@cogify.me").toLowerCase().trim();
      const envAdminPassword = process.env.DEFAULT_ADMIN_PASSWORD;

      const inputEmail = String(email).toLowerCase().trim();
      const inputPassword = String(password);

      if (!envAdminPassword) {
        return NextResponse.json(
          { success: false, error: "Server authentication configuration missing (DEFAULT_ADMIN_PASSWORD not set)." },
          { status: 500 }
        );
      }

      // STRICT VALIDATION: Must match env variables exactly
      if (inputEmail !== envAdminEmail || inputPassword !== envAdminPassword) {
        await db.addAuditLog({
          action: "ADMIN_LOGIN_FAILED",
          ipAddress: clientIp,
          userAgent,
          details: `Failed admin login attempt for: ${inputEmail}`,
        });
        return NextResponse.json(
          { success: false, error: "Invalid email or password." },
          { status: 401 }
        );
      }

      // Ensure super admin record exists in DB for foreign keys & audit
      let admin = await db.getAdminByEmail(envAdminEmail);
      if (!admin) {
        const passwordHash = await hashPassword(envAdminPassword);
        admin = await db.createAdmin({
          email: envAdminEmail,
          passwordHash,
          name: "Super Admin",
          role: "SUPER_ADMIN",
        });
      } else {
        try {
          const passwordHash = await hashPassword(envAdminPassword);
          await db.updateAdminPassword(admin.id, passwordHash);
        } catch (syncErr) {
          console.warn("Could not sync password hash:", syncErr);
        }
      }

      // Record successful login
      await db.recordAdminLogin(admin.id);
      await db.addAuditLog({
        action: "ADMIN_LOGIN_SUCCESS",
        adminId: admin.id,
        ipAddress: clientIp,
        userAgent,
        details: `Super Admin (${admin.email}) logged in successfully via environment credentials`,
      });

      // Create JWT session
      const token = await createAdminToken(admin);

      const res = NextResponse.json({
        success: true,
        admin: {
          id: admin.id,
          email: admin.email,
          name: admin.name,
          role: admin.role,
        },
      });

      // Set HTTP-only, secure session cookie
      res.cookies.set({
        name: ADMIN_COOKIE_NAME,
        value: token,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24, // 24 hours
      });

      return res;
    }

    // -------------------------------------------------------------
    // ACTION: LOGOUT
    // -------------------------------------------------------------
    if (action === "logout") {
      const res = NextResponse.json({ success: true, message: "Logged out." });
      res.cookies.delete(ADMIN_COOKIE_NAME);
      return res;
    }

    // All password reset actions are permanently disabled
    return NextResponse.json(
      { success: false, error: "Self-service password resets are permanently disabled. Use DEFAULT_ADMIN_PASSWORD." },
      { status: 403 }
    );
  } catch (error: any) {
    console.error("Admin auth API error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Authentication error" },
      { status: 500 }
    );
  }
}
