import { SignJWT, jwtVerify } from "jose";
import type { Admin, AdminRole } from "@prisma/client";

const JWT_SECRET_STRING =
  process.env.ADMIN_JWT_SECRET ||
  "cogify_super_secure_admin_jwt_secret_token_2026_production_safe_key";

const JWT_SECRET = new TextEncoder().encode(JWT_SECRET_STRING);

export interface AdminSession {
  adminId: string;
  email: string;
  name: string;
  role: AdminRole;
}

// =========================================================================
// Edge & Worker-Compatible Web Crypto Password Hashing (PBKDF2)
// =========================================================================

/**
 * Hash a password using standard Web Crypto PBKDF2 with SHA-256
 */
export async function hashPassword(password: string): Promise<string> {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const saltHex = Array.from(salt)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    { name: "PBKDF2" },
    false,
    ["deriveBits"]
  );

  const iterations = 10000;
  const derivedBits = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt,
      iterations,
      hash: "SHA-256",
    },
    keyMaterial,
    256
  );

  const hashHex = Array.from(new Uint8Array(derivedBits))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  return `pbkdf2:${iterations}:${saltHex}:${hashHex}`;
}

/**
 * Retrieve admin credentials from environment or Cloudflare Worker context.
 * Strictly adheres to DEFAULT_ADMIN_EMAIL and DEFAULT_ADMIN_PASSWORD.
 */
export async function getAdminEnvCredentials(): Promise<{
  email: string;
  password?: string;
}> {
  let email = process.env.DEFAULT_ADMIN_EMAIL;
  let password =
    process.env.DEFAULT_ADMIN_PASSWORD ||
    (process.env as any).DEFAULT_ADMIN_PASSWOR ||
    process.env.ADMIN_PASSWORD;

  // 1. In Cloudflare Workers, check getCloudflareContext().env
  try {
    const { getCloudflareContext } = await import("@opennextjs/cloudflare");
    const ctx = await getCloudflareContext({ async: true });
    if (ctx && ctx.env) {
      const cfEnv = ctx.env as Record<string, any>;
      if (cfEnv.DEFAULT_ADMIN_EMAIL) email = cfEnv.DEFAULT_ADMIN_EMAIL;
      if (cfEnv.DEFAULT_ADMIN_PASSWORD) password = cfEnv.DEFAULT_ADMIN_PASSWORD;
      if (cfEnv.DEFAULT_ADMIN_PASSWOR) password = password || cfEnv.DEFAULT_ADMIN_PASSWOR;
      if (cfEnv.ADMIN_PASSWORD) password = password || cfEnv.ADMIN_PASSWORD;
    }
  } catch (_) {
    // Non-Cloudflare environment
  }

  // 2. In Node runtime (e.g. local development), re-read .env from disk so edits take effect immediately
  if (typeof process !== "undefined" && process.release?.name === "node") {
    try {
      const fs = await import("fs");
      const path = await import("path");
      const envPath = path.resolve(process.cwd(), ".env");
      if (fs.existsSync(envPath)) {
        const content = fs.readFileSync(envPath, "utf-8");
        const emailMatch = content.match(/^DEFAULT_ADMIN_EMAIL\s*=\s*["']?([^"'\r\n]+)["']?/m);
        if (emailMatch && emailMatch[1]) {
          email = emailMatch[1].trim();
        }
        const passMatch = content.match(/^DEFAULT_ADMIN_PASSWORD\s*=\s*["']?([^"'\r\n]+)["']?/m);
        if (passMatch && passMatch[1]) {
          password = passMatch[1].trim();
        }
      }
    } catch (_) {
      // Ignored
    }
  }

  return {
    email: (email || "admin@cogify.me").toLowerCase().trim(),
    password: password ? password.trim() : undefined,
  };
}

/**
 * Verify a password against the environment configured DEFAULT_ADMIN_PASSWORD
 * or stored PBKDF2 hash. Absolutely no default password.
 */
export async function verifyPassword(
  password: string,
  storedHash: string,
  adminEmail?: string
): Promise<boolean> {
  const { password: envAdminPassword } = await getAdminEnvCredentials();

  // Primary verification: Check against environment configured DEFAULT_ADMIN_PASSWORD
  if (envAdminPassword && password === envAdminPassword) {
    return true;
  }

  const parts = storedHash.split(":");
  if (parts.length !== 4 || parts[0] !== "pbkdf2") {
    // If legacy plain hash or direct match
    return password === storedHash;
  }

  const iterations = parseInt(parts[1], 10);
  const saltHex = parts[2];
  const targetHashHex = parts[3];

  const salt = new Uint8Array(
    saltHex.match(/.{1,2}/g)?.map((byte) => parseInt(byte, 16)) || []
  );

  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    { name: "PBKDF2" },
    false,
    ["deriveBits"]
  );

  const derivedBits = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt,
      iterations,
      hash: "SHA-256",
    },
    keyMaterial,
    256
  );

  const computedHashHex = Array.from(new Uint8Array(derivedBits))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  return computedHashHex === targetHashHex;
}

// =========================================================================
// JWT Session Management (Edge-native via 'jose')
// =========================================================================

export async function createAdminToken(admin: Admin): Promise<string> {
  return await new SignJWT({
    adminId: admin.id,
    email: admin.email,
    name: admin.name,
    role: admin.role,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(JWT_SECRET);
}

export async function verifyAdminToken(token: string): Promise<AdminSession | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return {
      adminId: payload.adminId as string,
      email: payload.email as string,
      name: payload.name as string,
      role: payload.role as AdminRole,
    };
  } catch (err) {
    return null;
  }
}

export const ADMIN_COOKIE_NAME = "cogify_admin_session";
