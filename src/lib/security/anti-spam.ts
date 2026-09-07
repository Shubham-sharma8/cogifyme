/**
 * Advanced Multi-Layer Anti-Bot, Anti-Spam & Fake Identity Detection Engine
 * Edge-compatible (no Node.js native dependencies, runs on Cloudflare Workers)
 */

// Known disposable and temporary email domains
const DISPOSABLE_EMAIL_DOMAINS = new Set([
  "mailinator.com",
  "tempmail.com",
  "10minutemail.com",
  "guerrillamail.com",
  "guerrillamailblock.com",
  "throwawaymail.com",
  "yopmail.com",
  "sharklasers.com",
  "dispostable.com",
  "fakeinbox.com",
  "getairmail.com",
  "burnermail.io",
  "temp-mail.org",
  "fakemailgenerator.com",
  "trashmail.com",
  "trashmail.net",
  "mohmal.com",
  "crazymailing.com",
  "maildrop.cc",
  "inboxkitten.com",
  "nada.ltd",
  "tempail.com",
  "mytemp.email",
  "tempinbox.com",
  "dropmail.me",
  "emailondeck.com",
  "generator.email",
  "getnada.com",
  "inboxbear.com",
]);

// High-risk spam phrases and patterns commonly used by automated spammers
const SPAM_KEYWORDS = [
  "crypto giveaway",
  "bitcoin investment",
  "binary options",
  "forex trade",
  "instant loan",
  "viagra",
  "cialis",
  "online casino",
  "slot machine",
  "poker bonus",
  "seo ranking service",
  "buy backlinks",
  "guest posting service",
  "rank 1 on google",
  "cheap traffic",
  "telegram @",
  "t.me/",
  "whatsapp +",
  "wa.me/",
  "earn $",
  "make money fast",
  "passive income guarantee",
  "dating hookup",
  "adult cam",
  "watch free movies",
];

// Common test/fake names
const BLOCKED_NAMES = new Set([
  "asdf",
  "asdf asdf",
  "test",
  "test test",
  "tester",
  "fake",
  "fake name",
  "admin",
  "root",
  "null",
  "undefined",
  "nobody",
  "anonymous",
  "qwerty",
  "john doe",
  "jane doe",
]);

export interface AntiSpamResult {
  isAllowed: boolean;
  spamScore: number; // 0.0 (clean) to 1.0 (blatant spam)
  reasons: string[];
  sanitized: {
    senderName: string;
    senderEmail: string;
    title: string;
    description: string;
    company?: string;
  };
}

/**
 * Strips script tags, javascript: URIs, HTML event handlers, and dangerous injection characters
 */
export function sanitizeInput(str: string): string {
  if (!str) return "";
  return str
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, "")
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "")
    .replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, "")
    .replace(/<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi, "")
    .replace(/javascript:/gi, "")
    .replace(/vbscript:/gi, "")
    .replace(/data:text\/html/gi, "")
    .replace(/on\w+\s*=/gi, "")
    .replace(/<[^>]+>/g, " ") // Strip any remaining HTML tags
    .replace(/\s+/g, " ") // Collapse whitespace
    .trim();
}

/**
 * Checks if a string looks like random gibberish or keyboard mash
 */
function isGibberish(text: string): boolean {
  const clean = text.trim().toLowerCase();
  if (clean.length < 3) return false;

  // Check against known test patterns
  if (BLOCKED_NAMES.has(clean)) return true;

  // Repetitive characters (e.g. "aaaaa", "zzzzzz")
  if (/(.)\1{4,}/.test(clean)) return true;

  // Check vowel-to-consonant ratio for single words longer than 5 chars
  const words = clean.split(/\s+/);
  for (const w of words) {
    if (w.length >= 6 && !/[aeiouy]/.test(w)) {
      return true; // No vowels in 6+ letter word is almost certainly gibberish
    }
  }

  // Common keyboard mash patterns
  const mashPatterns = ["asdf", "hjkl", "qwer", "zxcv", "12345", "67890"];
  for (const pattern of mashPatterns) {
    if (clean.includes(pattern) && clean.length <= pattern.length * 2) {
      return true;
    }
  }

  return false;
}

/**
 * Validates disposable emails and basic RFC email compliance
 */
function validateEmail(email: string): { isValid: boolean; isDisposable: boolean; domain: string } {
  const normalized = email.trim().toLowerCase();
  const parts = normalized.split("@");
  if (parts.length !== 2) {
    return { isValid: false, isDisposable: false, domain: "" };
  }

  const [, domain] = parts;
  if (!domain || !domain.includes(".")) {
    return { isValid: false, isDisposable: false, domain: "" };
  }

  const isDisposable = DISPOSABLE_EMAIL_DOMAINS.has(domain);
  const isValidRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(normalized);

  return { isValid: isValidRegex, isDisposable, domain };
}

/**
 * Main evaluation pipeline for user submissions
 */
export async function evaluateSubmission(params: {
  senderName: string;
  senderEmail: string;
  title: string;
  description: string;
  company?: string;
  honeypot?: string;
  honeypotWebsite?: string;
  formStartTime?: number;
  turnstileToken?: string;
  ipAddress?: string;
}): Promise<AntiSpamResult> {
  const reasons: string[] = [];
  let spamScore = 0.0;

  // 1. Honeypot traps
  if (params.honeypot && params.honeypot.trim() !== "") {
    spamScore += 1.0;
    reasons.push("Honeypot company trap triggered.");
  }
  if (params.honeypotWebsite && params.honeypotWebsite.trim() !== "") {
    spamScore += 1.0;
    reasons.push("Honeypot website trap triggered.");
  }

  // 2. Submission speed heuristic
  if (params.formStartTime) {
    const elapsedSeconds = (Date.now() - params.formStartTime) / 1000;
    if (elapsedSeconds < 1.8) {
      spamScore += 0.8;
      reasons.push(`Inhuman submission speed: ${elapsedSeconds.toFixed(2)}s (scripted bot).`);
    } else if (elapsedSeconds > 14400) {
      // Form open for > 4 hours
      spamScore += 0.3;
      reasons.push("Stale form submission session.");
    }
  }

  // 3. Email validation & Disposable domain blacklist
  const emailCheck = validateEmail(params.senderEmail);
  if (!emailCheck.isValid) {
    spamScore += 0.9;
    reasons.push("Invalid RFC email format.");
  }
  if (emailCheck.isDisposable) {
    spamScore += 1.0;
    reasons.push(`Disposable/temporary email provider detected (${emailCheck.domain}).`);
  }

  // 4. Name validation & Fake name check
  const trimmedName = params.senderName.trim();
  if (trimmedName.length < 2) {
    spamScore += 0.7;
    reasons.push("Name too short (< 2 characters).");
  } else if (trimmedName.length > 80) {
    spamScore += 0.5;
    reasons.push("Name abnormally long (> 80 characters).");
  } else if (isGibberish(trimmedName)) {
    spamScore += 0.8;
    reasons.push("Gibberish or synthetic keyboard mash detected in name.");
  }

  // 5. Spam Keyword scanning across title & description
  const combinedContent = `${params.title} ${params.description}`.toLowerCase();
  let keywordHits = 0;
  for (const keyword of SPAM_KEYWORDS) {
    if (combinedContent.includes(keyword)) {
      keywordHits++;
      spamScore += 0.35;
      reasons.push(`Spam keyword matched: "${keyword}".`);
    }
  }

  // 6. Excessive Hyperlink analysis (link spam)
  const urlMatches = combinedContent.match(/https?:\/\/[^\s]+/gi) || [];
  if (urlMatches.length >= 3) {
    spamScore += 0.7;
    reasons.push(`Excessive hyperlinks detected (${urlMatches.length} URLs).`);
  }

  // 7. Text Length & Substance Check
  if (params.title.trim().length < 4) {
    spamScore += 0.4;
    reasons.push("Title lacks substance (< 4 characters).");
  }
  if (params.description.trim().length < 8) {
    spamScore += 0.4;
    reasons.push("Description lacks substance (< 8 characters).");
  }

  // Bound spam score between 0.0 and 1.0
  spamScore = Math.min(1.0, Math.max(0.0, Number(spamScore.toFixed(2))));

  // Sanitized outputs
  const sanitized = {
    senderName: sanitizeInput(params.senderName),
    senderEmail: params.senderEmail.trim().toLowerCase(),
    title: sanitizeInput(params.title),
    description: sanitizeInput(params.description),
    company: params.company ? sanitizeInput(params.company) : undefined,
  };

  const isAllowed = spamScore < 0.6 && reasons.length === 0;

  return {
    isAllowed,
    spamScore,
    reasons,
    sanitized,
  };
}
