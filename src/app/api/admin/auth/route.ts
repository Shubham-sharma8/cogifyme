import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import {
  hashPassword,
  verifyPassword,
  getAdminEnvCredentials,
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
    // ACTION: LOGIN
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

      const { email: envAdminEmail, password: envAdminPassword } = await getAdminEnvCredentials();
      const inputEmail = email.toLowerCase().trim();
      const cleanEnvPass = envAdminPassword ? envAdminPassword.replace(/^["']|["']$/g, "").trim() : undefined;

      // Direct Master Authentication: If input matches DEFAULT_ADMIN_EMAIL & DEFAULT_ADMIN_PASSWORD
      const isMasterEnvAuth =
        Boolean(envAdminPassword) &&
        Boolean(envAdminEmail) &&
        inputEmail === envAdminEmail &&
        (password === envAdminPassword || (cleanEnvPass && (password === cleanEnvPass || password.trim() === cleanEnvPass)));

      let admin = await db.getAdminByEmail(inputEmail);

      if (isMasterEnvAuth) {
        // Master credentials matched!
        // Find existing super admin in DB, or matching email, or create one
        if (!admin) {
          const allAdmins = await db.getAllAdmins();
          admin = allAdmins.find((a) => a.role === "SUPER_ADMIN") || allAdmins[0] || null;
        }

        const newHash = await hashPassword(password);
        if (!admin) {
          admin = await db.createAdmin({
            email: inputEmail,
            passwordHash: newHash,
            name: "Super Admin",
            role: "SUPER_ADMIN",
          });
        } else {
          // Synchronize database Super Admin record with current active environment credentials
          if (admin.email.toLowerCase() !== inputEmail) {
            await db.updateAdminEmail(admin.id, inputEmail);
            admin.email = inputEmail;
          }
          if (admin.passwordHash !== newHash) {
            await db.updateAdminPassword(admin.id, newHash);
            admin.passwordHash = newHash;
          }
        }
      } else {
        // Standard authentication: check database for admin and verify password
        if (!admin && inputEmail === envAdminEmail) {
          const allAdmins = await db.getAllAdmins();
          admin = allAdmins.find((a) => a.role === "SUPER_ADMIN") || null;
        }

        if (!admin) {
          await db.addAuditLog({
            action: "ADMIN_LOGIN_FAILED",
            ipAddress: clientIp,
            userAgent,
            details: `Login attempt failed: Email not found (${email})`,
          });
          return NextResponse.json(
            { success: false, error: "Invalid email or credentials." },
            { status: 401 }
          );
        }

        if (admin.status !== "ACTIVE") {
          return NextResponse.json(
            { success: false, error: "This admin account is suspended." },
            { status: 403 }
          );
        }

        const isValid = await verifyPassword(password, admin.passwordHash, admin.email);
        if (!isValid) {
          await db.addAuditLog({
            action: "ADMIN_LOGIN_FAILED",
            adminId: admin.id,
            ipAddress: clientIp,
            userAgent,
            details: `Failed password verification for: ${email} [diag: envPassFound=${Boolean(envAdminPassword)}, envPassLen=${cleanEnvPass?.length || 0}, inputPassLen=${password.length}]`,
          });
          return NextResponse.json(
            { success: false, error: "Invalid email or password." },
            { status: 401 }
          );
        }

        // If password matched, sync updated hash
        try {
          const newHash = await hashPassword(password);
          if (admin.passwordHash !== newHash) {
            await db.updateAdminPassword(admin.id, newHash);
            admin.passwordHash = newHash;
          }
        } catch (syncErr) {
          console.warn("Could not sync updated password to DB:", syncErr);
        }
      }

      // Record successful login
      await db.recordAdminLogin(admin.id);
      await db.addAuditLog({
        action: "ADMIN_LOGIN_SUCCESS",
        adminId: admin.id,
        ipAddress: clientIp,
        userAgent,
        details: `Admin ${admin.name} (${admin.email}) logged in successfully`,
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

    // -------------------------------------------------------------
    // ACTION: REQUEST PASSWORD RESET / RESET PASSWORD (DISABLED)
    // -------------------------------------------------------------
    if (action === "request-reset" || action === "reset-password") {
      return NextResponse.json(
        { success: false, error: "Password reset via web is disabled for security." },
        { status: 403 }
      );
    }

    return NextResponse.json({ success: false, error: "Unknown action" }, { status: 400 });
  } catch (error: any) {
    console.error("Admin auth API error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Authentication error" },
      { status: 500 }
    );
  }
}
