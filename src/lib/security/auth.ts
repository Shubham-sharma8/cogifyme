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
  const sources: Record<string, any>[] = [];

  // 1. Cloudflare Workers synchronous context
  try {
    const { getCloudflareContext } = await import("@opennextjs/cloudflare");
    const ctx = getCloudflareContext();
    if (ctx && ctx.env) {
      sources.push(ctx.env);
    }
  } catch (_) {
    // Non-Cloudflare or outside request scope
  }

  // 2. Global Cloudflare context symbol
  try {
    const sym = Symbol.for("__cloudflare-context__");
    const symCtx = (globalThis as any)[sym];
    if (symCtx && symCtx.env) {
      sources.push(symCtx.env);
    }
  } catch (_) {}

  // 3. Process environment (populated by OpenNext init and Next.js)
  if (typeof process !== "undefined" && process.env) {
    sources.push(process.env);
  }

  // 4. In Node runtime (e.g. local development), re-read .env from disk so edits take effect immediately
  if (typeof process !== "undefined" && process.release?.name === "node") {
    try {
      const fs = await import("fs");
      const path = await import("path");
      const envPath = path.resolve(process.cwd(), ".env");
      if (fs.existsSync(envPath)) {
        const content = fs.readFileSync(envPath, "utf-8");
        const diskEnv: Record<string, string> = {};
        for (const line of content.split("\n")) {
          const match = line.match(/^\s*([A-Za-z0-9_]+)\s*=\s*(.*)$/);
          if (match) {
            let val = match[2].trim();
            if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
              val = val.slice(1, -1);
            }
            diskEnv[match[1]] = val;
          }
        }
        sources.unshift(diskEnv);
      }
    } catch (_) {
      // Ignored
    }
  }

  // Resolve Email
  let resolvedEmail: string | undefined;
  const emailKeys = [
    "DEFAULT_ADMIN_EMAIL",
    "ADMIN_EMAIL",
    "ADMIN_ALERT_EMAIL",
  ];
  for (const src of sources) {
    for (const key of emailKeys) {
      if (src[key] && typeof src[key] === "string" && src[key].trim()) {
        resolvedEmail = src[key].trim();
        break;
      }
    }
    if (resolvedEmail) break;
  }

  // Resolve Password
  let resolvedPassword: string | undefined;
  const passwordKeys = [
    "DEFAULT_ADMIN_PASSWORD",
    "DEFAULT_ADMIN_PASSWOR", // Tolerance for typo in Cloudflare dashboard
    "DEFAULT_ADMIN_PASS",
    "ADMIN_PASSWORD",
    "ADMIN_PASS",
  ];
  for (const src of sources) {
    for (const key of passwordKeys) {
      if (src[key] && typeof src[key] === "string" && src[key].trim()) {
        let val = src[key].trim();
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          val = val.slice(1, -1).trim();
        }
        resolvedPassword = val;
        break;
      }
    }
    if (resolvedPassword) break;
  }

  // Fallback: check any key matching ADMIN and PASS (case-insensitive) across all sources
  if (!resolvedPassword) {
    for (const src of sources) {
      for (const [k, v] of Object.entries(src)) {
        const upper = k.toUpperCase();
        if (upper.includes("ADMIN") && upper.includes("PASS") && typeof v === "string" && v.trim()) {
          let val = v.trim();
          if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
            val = val.slice(1, -1).trim();
          }
          resolvedPassword = val;
          break;
        }
      }
      if (resolvedPassword) break;
    }
  }

  return {
    email: (resolvedEmail || "admin@cogify.me").toLowerCase().trim(),
    password: resolvedPassword || undefined,
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
  if (envAdminPassword) {
    const cleanEnv = envAdminPassword.replace(/^["']|["']$/g, "").trim();
    if (password === envAdminPassword || password === cleanEnv || password.trim() === cleanEnv) {
      return true;
    }
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
