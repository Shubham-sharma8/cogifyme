import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding Supabase database with Cogify admin and starter data...");

  // 1. Seed Super Admin: Shubham Sharma
  const defaultPasswordHash =
    "pbkdf2:10000:7c3f81e7d23a105c:5430ea453b3bdfbe6c641d42a9b4009cf0b39678e0f63e9c52ce9349884a441e"; // CogifyAdmin2026!

  const superAdmin = await prisma.admin.upsert({
    where: { email: "admin@cogify.me" },
    update: {},
    create: {
      email: "admin@cogify.me",
      passwordHash: defaultPasswordHash,
      name: "Shubham Sharma",
      role: "SUPER_ADMIN",
      status: "ACTIVE",
      lastLoginAt: new Date(),
    },
  });
  console.log(`✓ Super Admin seeded: ${superAdmin.email} (${superAdmin.name})`);

  // 3. Seed Sample Initial Tickets
  const sampleTicket1 = await prisma.ticket.upsert({
    where: { referenceCode: "COG-8492" },
    update: {},
    create: {
      referenceCode: "COG-8492",
      category: "BUG_REPORT",
      targetApp: "EmDoc macOS",
      title: "Thumbnail rendering glitch on encrypted PDF with non-standard fonts",
      description:
        "When loading a 400-page bank statement with embedded CIDFontType2 fonts on macOS Sequoia 15.1, the sidebar thumbnails occasionally show blank white rects until clicked.",
      senderName: "Vikram Mehta",
      senderEmail: "vikram.mehta@example.com",
      company: "Apex Legal Partners",
      deviceInfo: "macOS Sequoia 15.1 • Apple Silicon M3 Max • 36GB RAM",
      status: "ASSIGNED",
      priority: "HIGH",
      assignedToAdminId: superAdmin.id,
      hasResponse: true,
      responses: {
        create: [
          {
            authorAdminId: superAdmin.id,
            authorType: "ADMIN",
            authorName: superAdmin.name,
            message:
              "Thank you for reporting this Vikram. We reproduced the font descriptor fallback bug in our CoreGraphics rasterizer tile pipeline. A patch is already prepared for the 0.2 preview release.",
            isInternalNote: false,
          },
          {
            authorAdminId: superAdmin.id,
            authorType: "ADMIN",
            authorName: superAdmin.name,
            message: "Internal: Fixed in commit a8f9c2d. Tested against Apple Silicon arm64 SIMD rasterizer.",
            isInternalNote: true,
          },
        ],
      },
    },
  });
  console.log(`✓ Sample Ticket 1 seeded: ${sampleTicket1.referenceCode}`);

  const sampleTicket2 = await prisma.ticket.upsert({
    where: { referenceCode: "COG-5120" },
    update: {},
    create: {
      referenceCode: "COG-5120",
      category: "ENTERPRISE",
      targetApp: "Enterprise Replacement Pilot",
      title: "Replace Adobe Acrobat Pro DC enterprise licenses (180 seats)",
      description:
        "We spend over $38,000/year on Adobe Acrobat Pro licenses across our financial compliance division. Seeking a free trial pilot of EmDoc and software audit.",
      senderName: "Marcus Vance",
      senderEmail: "m.vance@vancecapitol.com",
      company: "Vance Capital Group",
      deviceInfo: "Enterprise Managed MDM (Fleet of M2/M3 MacBook Pros)",
      status: "IN_REVIEW",
      priority: "URGENT",
      assignedToAdminId: superAdmin.id,
      hasResponse: true,
      responses: {
        create: [
          {
            authorAdminId: superAdmin.id,
            authorType: "ADMIN",
            authorName: superAdmin.name,
            message:
              "Hello Marcus. We would be thrilled to set up a private, air-gapped pilot of EmDoc for Vance Capital Group. Our team is preparing deployment packages for your MDM profile.",
            isInternalNote: false,
          },
        ],
      },
    },
  });
  console.log(`✓ Sample Ticket 2 seeded: ${sampleTicket2.referenceCode}`);

  const sampleTicket3 = await prisma.ticket.upsert({
    where: { referenceCode: "COG-1944" },
    update: {},
    create: {
      referenceCode: "COG-1944",
      category: "SUGGESTION",
      targetApp: "EmDoc Workstation",
      title: "Batch bates numbering with custom delimiter prefixes",
      description:
        "Would love an option in EmDoc bates numbering to insert custom prefix prefixes like CONFIDENTIAL-PROD-[000001].",
      senderName: "Elena Rostova",
      senderEmail: "elena@rostovalaw.io",
      company: "Rostova Law",
      deviceInfo: "macOS Sonoma 14.5",
      status: "NEW",
      priority: "MEDIUM",
      hasResponse: false,
    },
  });
  console.log(`✓ Sample Ticket 3 seeded: ${sampleTicket3.referenceCode}`);

  // 4. Seed Initial Audit Log
  await prisma.auditLog.create({
    data: {
      action: "DATABASE_SCHEMA_INITIALIZED",
      adminId: superAdmin.id,
      ipAddress: "127.0.0.1",
      userAgent: "Prisma CLI DB Push",
      details: "Supabase database tables successfully synchronized and seeded with default administrator.",
    },
  });
  console.log("✓ Audit log initialized.");

  console.log("\nDatabase seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error("Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
