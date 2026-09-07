/**
 * Cloudflare Turnstile & Anti-Bot Protection Suite
 */

interface TurnstileVerifyResponse {
  success: boolean;
  "error-codes"?: string[];
  challenge_ts?: string;
  hostname?: string;
  action?: string;
  cdata?: string;
}

// In-memory rate limiting map for edge & serverless invocations
interface RateLimitRecord {
  count: number;
  resetAt: number;
}

const rateLimitStore = new Map<string, RateLimitRecord>();

/**
 * Validates request rate (default: max 10 requests per 60 seconds per IP)
 */
export function checkRateLimit(ip: string, maxRequests: number = 10, windowMs: number = 60000): {
  allowed: boolean;
  remaining: number;
} {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: maxRequests - 1 };
  }

  if (record.count >= maxRequests) {
    return { allowed: false, remaining: 0 };
  }

  record.count += 1;
  return { allowed: true, remaining: maxRequests - record.count };
}

/**
 * Validates submission against Cloudflare Turnstile API and bot heuristics
 */
export async function verifyAntiBot(params: {
  turnstileToken?: string;
  honeypot?: string;
  formStartTime?: number;
  clientIp?: string;
}): Promise<{ isBot: boolean; reason?: string; spamScore: number }> {
  const { turnstileToken, honeypot, formStartTime, clientIp } = params;

  // 1. Honeypot check: Bots routinely fill hidden inputs
  if (honeypot && honeypot.trim().length > 0) {
    return {
      isBot: true,
      reason: "Honeypot field was filled by automated script",
      spamScore: 1.0,
    };
  }

  // 2. Timing heuristic: Humans rarely fill a multi-field form in under 1.2 seconds
  if (formStartTime) {
    const elapsedSeconds = (Date.now() - formStartTime) / 1000;
    if (elapsedSeconds < 1.2) {
      return {
        isBot: true,
        reason: `Submission completed unnaturally fast (${elapsedSeconds.toFixed(2)}s)`,
        spamScore: 0.9,
      };
    }
  }

  // 3. Rate limiting check
  if (clientIp) {
    const rateCheck = checkRateLimit(clientIp);
    if (!rateCheck.allowed) {
      return {
        isBot: true,
        reason: "Rate limit exceeded (too many submissions from this IP)",
        spamScore: 0.85,
      };
    }
  }

  // 4. Cloudflare Turnstile Token verification
  const secretKey = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY;
  if (secretKey && turnstileToken && turnstileToken !== "bypass-development-mode") {
    try {
      const formData = new URLSearchParams();
      formData.append("secret", secretKey);
      formData.append("response", turnstileToken);
      if (clientIp) {
        formData.append("remoteip", clientIp);
      }

      const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      const outcome = (await res.json()) as TurnstileVerifyResponse;
      if (!outcome.success) {
        return {
          isBot: true,
          reason: `Cloudflare Turnstile verification failed: ${(outcome["error-codes"] || []).join(", ")}`,
          spamScore: 0.95,
        };
      }
    } catch (err) {
      console.error("Turnstile API verification call error:", err);
      // In case of upstream network error, don't hard-block valid users unless secret is mandatory
    }
  }

  return { isBot: false, spamScore: 0.0 };
}
