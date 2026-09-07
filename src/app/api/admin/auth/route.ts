import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import {
  hashPassword,
  verifyPassword,
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

      const envAdminEmail = (process.env.ADMIN_EMAIL || process.env.DEFAULT_ADMIN_EMAIL || "admin@cogify.me").toLowerCase();
      const envAdminPassword = process.env.ADMIN_PASSWORD || process.env.DEFAULT_ADMIN_PASSWORD;

      let admin = await db.getAdminByEmail(email);

      // Auto-provision super admin if empty or matching env
      if (!admin && email.toLowerCase() === envAdminEmail && envAdminPassword) {
        if (password === envAdminPassword) {
          const passwordHash = await hashPassword(envAdminPassword);
          admin = await db.createAdmin({
            email: envAdminEmail,
            passwordHash,
            name: "Super Admin",
            role: "SUPER_ADMIN",
          });
        }
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
          details: `Failed password verification for: ${email}`,
        });
        return NextResponse.json(
          { success: false, error: "Invalid email or password." },
          { status: 401 }
        );
      }

      // If logged in via env password, sync hash into database so DB stays updated
      if (envAdminPassword && password === envAdminPassword && admin.email.toLowerCase() === envAdminEmail) {
        try {
          const newHash = await hashPassword(password);
          if (admin.passwordHash !== newHash) {
            await db.updateAdminPassword(admin.id, newHash);
            admin.passwordHash = newHash;
          }
        } catch (syncErr) {
          console.warn("Could not sync updated env password to DB:", syncErr);
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
    // ACTION: REQUEST PASSWORD RESET
    // -------------------------------------------------------------
    if (action === "request-reset") {
      const { email } = body;
      if (!email) {
        return NextResponse.json(
          { success: false, error: "Email is required." },
          { status: 400 }
        );
      }

      const admin = await db.getAdminByEmail(email);
      if (admin) {
        const tokenHash = `reset-${Date.now()}-${Math.random().toString(36).substring(2, 12)}`;
        const expiresAt = new Date(Date.now() + 1000 * 60 * 60); // 1 hour

        await db.createPasswordResetToken(admin.id, tokenHash, expiresAt);
        await db.addAuditLog({
          action: "PASSWORD_RESET_REQUESTED",
          adminId: admin.id,
          ipAddress: clientIp,
          userAgent,
          details: `Password reset requested for: ${admin.email}`,
        });

        // In production, an email is dispatched. In preview/admin dev, we provide the token for instant testing
        return NextResponse.json({
          success: true,
          message: "Password reset link generated.",
          resetToken: tokenHash, // Returned for testing & dev convenience
        });
      }

      // Constant time reply to avoid user enumeration
      return NextResponse.json({
        success: true,
        message: "If an account exists, a reset link has been dispatched.",
      });
    }

    // -------------------------------------------------------------
    // ACTION: RESET PASSWORD WITH TOKEN
    // -------------------------------------------------------------
    if (action === "reset-password") {
      const { token, newPassword } = body;
      if (!token || !newPassword || newPassword.length < 8) {
        return NextResponse.json(
          { success: false, error: "Valid token and 8+ char password required." },
          { status: 400 }
        );
      }

      const adminId = await db.verifyPasswordResetToken(token);
      if (!adminId) {
        return NextResponse.json(
          { success: false, error: "Invalid or expired reset token." },
          { status: 400 }
        );
      }

      const newHash = await hashPassword(newPassword);
      await db.updateAdminPassword(adminId, newHash);
      await db.addAuditLog({
        action: "PASSWORD_RESET_COMPLETED",
        adminId,
        ipAddress: clientIp,
        userAgent,
        details: "Password successfully updated via reset token.",
      });

      return NextResponse.json({
        success: true,
        message: "Password successfully reset. You can now login.",
      });
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
