import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { verifyAntiBot } from "@/lib/security/turnstile";
import { evaluateSubmission } from "@/lib/security/anti-spam";
import {
  sendTicketConfirmationEmail,
  sendAdminAlertEmail,
} from "@/lib/email/service";
import { TicketCategory, TicketPriority } from "@prisma/client";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      category = "SUGGESTION",
      targetApp = "EmDoc macOS",
      title = "",
      description = "",
      senderName = "",
      senderEmail = "",
      company,
      phone,
      mobile,
      deviceInfo,
      priority = "MEDIUM",
      turnstileToken,
      _hp_company, // Honeypot trap field 1
      _hp_website, // Honeypot trap field 2
      formStartTime,
    } = body;

    // Extract client IP and user agent
    const clientIp =
      req.headers.get("cf-connecting-ip") ||
      req.headers.get("x-real-ip") ||
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      "127.0.0.1";
    const userAgent = req.headers.get("user-agent") || "Unknown Browser";

    // 1. Cloudflare Turnstile Challenge & Speed Verification
    const turnstileCheck = await verifyAntiBot({
      turnstileToken,
      honeypot: _hp_company,
      formStartTime,
      clientIp,
    });

    if (turnstileCheck.isBot) {
      await db.addAuditLog({
        action: "BOT_SUBMISSION_BLOCKED",
        ipAddress: clientIp,
        userAgent,
        details: `Cloudflare Turnstile flagged request: ${turnstileCheck.reason}. Target: ${category}`,
      });

      return NextResponse.json(
        {
          success: false,
          error: "Verification failed. Automated bot traffic intercepted.",
        },
        { status: 403 }
      );
    }

    // 2. Comprehensive Spam, Disposable Email & Fake Name Filter
    const spamEvaluation = await evaluateSubmission({
      senderName,
      senderEmail,
      title: title || `${category} Inquiry`,
      description,
      company,
      honeypot: _hp_company,
      honeypotWebsite: _hp_website,
      formStartTime,
      turnstileToken,
      ipAddress: clientIp,
    });

    if (!spamEvaluation.isAllowed) {
      await db.addAuditLog({
        action: "SPAM_SUBMISSION_BLOCKED",
        ipAddress: clientIp,
        userAgent,
        details: `Spam filter blocked submission (Score: ${spamEvaluation.spamScore}): ${spamEvaluation.reasons.join(
          "; "
        )}. Sender: ${senderEmail}`,
      });

      return NextResponse.json(
        {
          success: false,
          error: `Submission rejected: ${spamEvaluation.reasons[0] || "Invalid submission contents."}`,
        },
        { status: 400 }
      );
    }

    // 3. Map category to Prisma enum
    let mappedCategory: TicketCategory = "SUGGESTION";
    if (category === "BUG_REPORT" || category === "BUG") mappedCategory = "BUG_REPORT";
    else if (category === "ENTERPRISE") mappedCategory = "ENTERPRISE";
    else if (category === "CONTACT") mappedCategory = "CONTACT";

    const { sanitized } = spamEvaluation;

    // 4. Create Ticket in Database / Store with sanitized data
    const ticket = await db.createTicket({
      category: mappedCategory,
      targetApp: targetApp || "EmDoc macOS",
      title: sanitized.title || `${mappedCategory} from ${sanitized.senderName}`,
      description: sanitized.description,
      senderName: sanitized.senderName,
      senderEmail: sanitized.senderEmail,
      company: sanitized.company || undefined,
      deviceInfo: deviceInfo ? String(deviceInfo).slice(0, 200) : undefined,
      priority: (priority as TicketPriority) || "MEDIUM",
      ipAddress: clientIp,
      userAgent,
    });

    // 4b. Auto-capture contact into Userbase table
    try {
      await db.upsertUserContact({
        email: sanitized.senderEmail,
        name: sanitized.senderName,
        phone: phone || mobile || null,
        company: sanitized.company || null,
        source: mappedCategory,
        status: "SUBSCRIBED",
        tags: [mappedCategory.toLowerCase()],
      });
    } catch (contactErr) {
      console.warn("Non-blocking userbase auto-capture error:", contactErr);
    }

    // 5. Automated Email Service: Send Confirmation & Team Alert
    try {
      // Fire confirmation email to submitter
      await sendTicketConfirmationEmail({
        referenceCode: ticket.referenceCode,
        senderName: ticket.senderName,
        senderEmail: ticket.senderEmail,
        category: ticket.category,
        title: ticket.title,
        description: ticket.description,
        targetApp: ticket.targetApp,
      });

      // Fire alert email to Cogify admins
      await sendAdminAlertEmail({
        referenceCode: ticket.referenceCode,
        senderName: ticket.senderName,
        senderEmail: ticket.senderEmail,
        category: ticket.category,
        title: ticket.title,
        description: ticket.description,
        company: ticket.company,
        deviceInfo: ticket.deviceInfo,
        ipAddress: clientIp,
        spamScore: spamEvaluation.spamScore,
      });
    } catch (emailErr) {
      console.error("Non-blocking automated email error:", emailErr);
    }

    // 6. Log audit trail
    await db.addAuditLog({
      action: "TICKET_CREATED",
      ipAddress: clientIp,
      userAgent,
      details: `New ticket created: ${ticket.referenceCode} (${ticket.category}) by ${ticket.senderEmail} [Spam Score: ${spamEvaluation.spamScore}]`,
    });

    return NextResponse.json({
      success: true,
      referenceCode: ticket.referenceCode,
      ticketId: ticket.id,
      message: "Submission received, verified, and confirmation email dispatched.",
    });
  } catch (error: any) {
    console.error("Form submission API error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Internal server error processing request.",
      },
      { status: 500 }
    );
  }
}
