import {
  PrismaClient,
  Admin,
  Ticket,
  TicketResponse,
  AuditLog,
  AdminRole,
  AdminStatus,
  TicketStatus,
  TicketPriority,
  TicketCategory,
  ResponseAuthorType,
} from "@prisma/client";
import { getSupabaseAdmin } from "./supabase";

// Global Prisma instance for connection reuse across serverless/worker invocations
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const hasLiveDatabase = Boolean(
  process.env.DATABASE_URL && process.env.DATABASE_URL.includes("postgres")
);

export const prisma =
  globalForPrisma.prisma ??
  (hasLiveDatabase
    ? new PrismaClient({
        log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
      })
    : (null as unknown as PrismaClient));

if (process.env.NODE_ENV !== "production" && hasLiveDatabase && prisma) {
  globalForPrisma.prisma = prisma;
}

// =========================================================================
// In-Memory Fallback & Demo Store (used seamlessly when DATABASE_URL is not set)
// =========================================================================
interface StoreState {
  admins: Admin[];
  tickets: (Ticket & { responses: TicketResponse[] })[];
  auditLogs: AuditLog[];
  resetTokens: { tokenHash: string; adminId: string; expiresAt: Date }[];
}

// Initial seed data
const initialAdmins: Admin[] = [
  {
    id: "admin-super-01",
    email: process.env.DEFAULT_ADMIN_EMAIL || "admin@cogify.me",
    passwordHash: "",
    name: "Super Admin",
    role: "SUPER_ADMIN" as AdminRole,
    status: "ACTIVE" as AdminStatus,
    avatarUrl: null,
    lastLoginAt: new Date(),
    createdAt: new Date("2026-09-01T10:00:00Z"),
    updatedAt: new Date("2026-09-07T12:00:00Z"),
  },
];

const initialTickets: (Ticket & { responses: TicketResponse[] })[] = [
  {
    id: "t-001",
    referenceCode: "COG-8492",
    category: "BUG_REPORT" as TicketCategory,
    targetApp: "EmDoc macOS",
    title: "Thumbnail rendering glitch on encrypted PDF with non-standard fonts",
    description:
      "When loading a 400-page bank statement with embedded CIDFontType2 fonts on macOS Sequoia 15.1, the sidebar thumbnails occasionally show blank white rects until clicked.",
    senderName: "Vikram Mehta",
    senderEmail: "vikram.mehta@example.com",
    company: "Apex Legal Partners",
    deviceInfo: "macOS Sequoia 15.1 • Apple Silicon M3 Max • 36GB RAM",
    status: "ASSIGNED" as TicketStatus,
    priority: "HIGH" as TicketPriority,
    assignedToAdminId: "admin-super-01",
    isSpam: false,
    spamScore: 0.0,
    ipAddress: "103.21.244.18",
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
    hasResponse: true,
    createdAt: new Date("2026-09-06T14:20:00Z"),
    updatedAt: new Date("2026-09-07T08:15:00Z"),
    responses: [
      {
        id: "resp-001",
        ticketId: "t-001",
        authorAdminId: "admin-super-01",
        authorType: "ADMIN" as ResponseAuthorType,
        authorName: "Shubham Sharma",
        message:
          "Thank you for reporting this Vikram. We reproduced the font descriptor fallback bug in our CoreGraphics rasterizer tile pipeline. A patch is already prepared for the 0.2 preview release.",
        isInternalNote: false,
        createdAt: new Date("2026-09-07T08:15:00Z"),
      },
      {
        id: "resp-002",
        ticketId: "t-001",
        authorAdminId: "admin-super-01",
        authorType: "ADMIN" as ResponseAuthorType,
        authorName: "Shubham Sharma",
        message: "Internal: Fixed in commit a8f9c2d. Tested against Apple Silicon arm64 SIMD rasterizer.",
        isInternalNote: true,
        createdAt: new Date("2026-09-07T08:20:00Z"),
      },
    ],
  },
  {
    id: "t-002",
    referenceCode: "COG-9143",
    category: "SUGGESTION" as TicketCategory,
    targetApp: "EmDoc macOS",
    title: "Batch Watermarking across multiple PDF files simultaneously",
    description:
      "I love the watermark rotation and opacity controls in EmDoc. Could you add a batch queue so I can select 50 confidential client briefs and watermark them in one single batch job?",
    senderName: "Elena Rostova",
    senderEmail: "elena.rostova@designflow.io",
    company: "DesignFlow Studio",
    deviceInfo: "macOS Sonoma 14.5 • MacBook Pro M1 Pro",
    status: "NEW" as TicketStatus,
    priority: "MEDIUM" as TicketPriority,
    assignedToAdminId: null,
    isSpam: false,
    spamScore: 0.0,
    ipAddress: "185.199.108.153",
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
    hasResponse: false,
    createdAt: new Date("2026-09-07T11:45:00Z"),
    updatedAt: new Date("2026-09-07T11:45:00Z"),
    responses: [],
  },
  {
    id: "t-003",
    referenceCode: "COG-6320",
    category: "ENTERPRISE" as TicketCategory,
    targetApp: "Enterprise Tool Replacement",
    title: "Evaluation pilot: Replacing Adobe Acrobat Pro for 240 workstations",
    description:
      "Our accounting firm spends over $48,000/year on Acrobat Pro licenses. We require offline air-gapped PDF redaction, Bates numbering, and page manipulation. Would love to begin a 30-day evaluation pilot and inspect your security audit report.",
    senderName: "Marcus Sterling",
    senderEmail: "m.sterling@sterlingcpa.com",
    company: "Sterling CPA Group LLC",
    deviceInfo: "240 MacBooks (Ventura & Sonoma)",
    status: "IN_REVIEW" as TicketStatus,
    priority: "URGENT" as TicketPriority,
    assignedToAdminId: "admin-super-01",
    isSpam: false,
    spamScore: 0.0,
    ipAddress: "198.51.100.42",
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
    hasResponse: false,
    createdAt: new Date("2026-09-07T09:10:00Z"),
    updatedAt: new Date("2026-09-07T09:30:00Z"),
    responses: [],
  },
  {
    id: "t-004",
    referenceCode: "COG-3910",
    category: "CONTACT" as TicketCategory,
    targetApp: "General Inquiry",
    title: "Inquiring about Windows & Linux native engine ports",
    description:
      "Great work on keeping the memory under 50 MB! Do you have plans to release a native Qt or WinUI port for Windows workstations?",
    senderName: "David Chen",
    senderEmail: "dchen@techlabs.org",
    company: "TechLabs",
    deviceInfo: "Windows 11 / Linux Ubuntu 24.04",
    status: "RESOLVED" as TicketStatus,
    priority: "LOW" as TicketPriority,
    assignedToAdminId: "admin-agent-02",
    isSpam: false,
    spamScore: 0.0,
    ipAddress: "203.0.113.19",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
    hasResponse: true,
    createdAt: new Date("2026-09-05T16:00:00Z"),
    updatedAt: new Date("2026-09-06T10:00:00Z"),
    responses: [
      {
        id: "resp-003",
        ticketId: "t-004",
        authorAdminId: "admin-super-01",
        authorType: "ADMIN" as ResponseAuthorType,
        authorName: "Super Admin",
        message:
          "Hi David, our core document logic is written in ISO C++20 and isolated from macOS Cocoa. After our iOS companion release, Windows is next on our cross-platform roadmap.",
        isInternalNote: false,
        createdAt: new Date("2026-09-06T10:00:00Z"),
      },
    ],
  },
];

const initialLogs: AuditLog[] = [
  {
    id: "log-001",
    action: "SYSTEM_INITIALIZED",
    adminId: "admin-super-01",
    ipAddress: "127.0.0.1",
    userAgent: "System Bootstrap",
    details: "Security baseline and anti-bot filters armed.",
    createdAt: new Date("2026-09-01T10:00:00Z"),
  },
  {
    id: "log-002",
    action: "ADMIN_LOGIN_SUCCESS",
    adminId: "admin-super-01",
    ipAddress: "103.21.244.18",
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
    details: "Successful login via Turnstile-verified browser.",
    createdAt: new Date("2026-09-07T08:00:00Z"),
  },
  {
    id: "log-003",
    action: "TICKET_ASSIGNED",
    adminId: "admin-super-01",
    ipAddress: "103.21.244.18",
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
    details: "Ticket COG-8492 assigned to Shubham Sharma.",
    createdAt: new Date("2026-09-07T08:10:00Z"),
  },
  {
    id: "log-004",
    action: "BOT_SUBMISSION_BLOCKED",
    adminId: null,
    ipAddress: "194.26.29.112",
    userAgent: "Python-urllib/3.9",
    details: "Honeypot field filled with automated spam payload. Dropped immediately.",
    createdAt: new Date("2026-09-07T12:05:00Z"),
  },
];

const globalStore = globalThis as unknown as {
  cogifyStore: StoreState | undefined;
};

if (!globalStore.cogifyStore) {
  globalStore.cogifyStore = {
    admins: initialAdmins,
    tickets: initialTickets,
    auditLogs: initialLogs,
    resetTokens: [],
  };
}

export const memoryStore = globalStore.cogifyStore;

// =========================================================================
// Universal DB Service Layer (Seamlessly switches between Prisma & Memory)
// =========================================================================

export const db = {
  // --- Admin Methods ---
  async getAdminByEmail(email: string): Promise<Admin | null> {
    const sb = getSupabaseAdmin();
    if (sb) {
      try {
        const { data: admin, error } = await sb
          .from("admins")
          .select("*")
          .eq("email", email.toLowerCase())
          .single();
        if (admin && !error) {
          return admin as unknown as Admin;
        }
      } catch (err) {
        console.warn("Supabase getAdminByEmail fallback:", err);
      }
    }

    if (hasLiveDatabase && prisma) {
      try {
        return await prisma.admin.findUnique({
          where: { email: email.toLowerCase() },
        });
      } catch (err) {
        console.warn("Prisma getAdminByEmail fallback to memory store:", err);
      }
    }
    return (
      memoryStore.admins.find(
        (a) => a.email.toLowerCase() === email.toLowerCase()
      ) || null
    );
  },

  async getAdminById(id: string): Promise<Admin | null> {
    const sb = getSupabaseAdmin();
    if (sb) {
      try {
        const { data: admin, error } = await sb
          .from("admins")
          .select("*")
          .eq("id", id)
          .single();
        if (admin && !error) {
          return admin as unknown as Admin;
        }
      } catch (err) {
        console.warn("Supabase getAdminById fallback:", err);
      }
    }

    if (hasLiveDatabase && prisma) {
      try {
        return await prisma.admin.findUnique({ where: { id } });
      } catch (err) {
        console.warn("Prisma getAdminById fallback to memory store:", err);
      }
    }
    return memoryStore.admins.find((a) => a.id === id) || null;
  },

  async getAllAdmins(): Promise<Admin[]> {
    const sb = getSupabaseAdmin();
    if (sb) {
      try {
        const { data: admins, error } = await sb
          .from("admins")
          .select("*")
          .order("createdAt", { ascending: true });
        if (admins && !error) {
          return admins as unknown as Admin[];
        }
      } catch (err) {
        console.warn("Supabase getAllAdmins fallback:", err);
      }
    }

    if (hasLiveDatabase && prisma) {
      try {
        return await prisma.admin.findMany({
          orderBy: { createdAt: "desc" },
        });
      } catch (err) {
        console.warn("Prisma getAllAdmins fallback to memory store:", err);
      }
    }
    return [...memoryStore.admins];
  },

  async createAdmin(data: {
    email: string;
    passwordHash: string;
    name: string;
    role: AdminRole;
  }): Promise<Admin> {
    const sb = getSupabaseAdmin();
    if (sb) {
      try {
        const adminId = crypto.randomUUID();
        const { data: created, error } = await sb
          .from("admins")
          .insert({
            id: adminId,
            email: data.email.toLowerCase(),
            passwordHash: data.passwordHash,
            name: data.name,
            role: data.role || "AGENT",
            status: "ACTIVE",
            avatarUrl: null,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          })
          .select()
          .single();
        if (created && !error) {
          return created as unknown as Admin;
        }
      } catch (err) {
        console.warn("Supabase createAdmin fallback:", err);
      }
    }

    if (hasLiveDatabase && prisma) {
      try {
        return await prisma.admin.create({
          data: {
            email: data.email.toLowerCase(),
            passwordHash: data.passwordHash,
            name: data.name,
            role: data.role,
          },
        });
      } catch (err) {
        console.warn("Prisma createAdmin fallback to memory store:", err);
      }
    }
    const newAdmin: Admin = {
      id: `admin-${Date.now()}`,
      email: data.email.toLowerCase(),
      passwordHash: data.passwordHash,
      name: data.name,
      role: data.role,
      status: "ACTIVE" as AdminStatus,
      avatarUrl: null,
      lastLoginAt: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    memoryStore.admins.unshift(newAdmin);
    return newAdmin;
  },

  async updateAdminStatus(id: string, status: AdminStatus): Promise<Admin | null> {
    const sb = getSupabaseAdmin();
    if (sb) {
      try {
        const { data: updated, error } = await sb
          .from("admins")
          .update({
            status,
            updatedAt: new Date().toISOString(),
          })
          .eq("id", id)
          .select()
          .single();
        if (updated && !error) {
          return updated as unknown as Admin;
        }
      } catch (err) {
        console.warn("Supabase updateAdminStatus fallback:", err);
      }
    }

    if (hasLiveDatabase && prisma) {
      try {
        return await prisma.admin.update({
          where: { id },
          data: { status },
        });
      } catch (err) {
        console.warn("Prisma updateAdminStatus fallback:", err);
      }
    }
    const admin = memoryStore.admins.find((a) => a.id === id);
    if (admin) {
      admin.status = status;
      admin.updatedAt = new Date();
      return admin;
    }
    return null;
  },

  async updateAdminPassword(id: string, passwordHash: string): Promise<boolean> {
    const sb = getSupabaseAdmin();
    if (sb) {
      try {
        const { error } = await sb
          .from("admins")
          .update({
            passwordHash,
            updatedAt: new Date().toISOString(),
          })
          .eq("id", id);
        if (!error) return true;
      } catch (err) {
        console.warn("Supabase updateAdminPassword fallback:", err);
      }
    }

    if (hasLiveDatabase && prisma) {
      try {
        await prisma.admin.update({
          where: { id },
          data: { passwordHash },
        });
        return true;
      } catch (err) {
        console.warn("Prisma updateAdminPassword fallback:", err);
      }
    }
    const admin = memoryStore.admins.find((a) => a.id === id);
    if (admin) {
      admin.passwordHash = passwordHash;
      admin.updatedAt = new Date();
      return true;
    }
    return false;
  },

  async recordAdminLogin(id: string): Promise<void> {
    const sb = getSupabaseAdmin();
    if (sb) {
      try {
        await sb
          .from("admins")
          .update({
            lastLoginAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          })
          .eq("id", id);
        return;
      } catch (err) {
        console.warn("Supabase recordAdminLogin fallback:", err);
      }
    }

    if (hasLiveDatabase && prisma) {
      try {
        await prisma.admin.update({
          where: { id },
          data: { lastLoginAt: new Date() },
        });
        return;
      } catch (err) {
        console.warn("Prisma recordAdminLogin fallback:", err);
      }
    }
    const admin = memoryStore.admins.find((a) => a.id === id);
    if (admin) {
      admin.lastLoginAt = new Date();
    }
  },

  // --- Password Reset Token Methods ---
  async createPasswordResetToken(adminId: string, tokenHash: string, expiresAt: Date) {
    if (hasLiveDatabase && prisma) {
      try {
        return await prisma.passwordResetToken.create({
          data: { adminId, tokenHash, expiresAt },
        });
      } catch (err) {
        console.warn("Prisma createPasswordResetToken fallback:", err);
      }
    }
    memoryStore.resetTokens.push({ adminId, tokenHash, expiresAt });
  },

  async verifyPasswordResetToken(tokenHash: string): Promise<string | null> {
    if (hasLiveDatabase && prisma) {
      try {
        const token = await prisma.passwordResetToken.findFirst({
          where: {
            tokenHash,
            usedAt: null,
            expiresAt: { gt: new Date() },
          },
        });
        return token?.adminId || null;
      } catch (err) {
        console.warn("Prisma verifyPasswordResetToken fallback:", err);
      }
    }
    const token = memoryStore.resetTokens.find(
      (t) => t.tokenHash === tokenHash && t.expiresAt > new Date()
    );
    return token?.adminId || null;
  },

  // --- Ticket Methods ---
  async getTickets(filter?: {
    category?: TicketCategory;
    status?: TicketStatus;
    search?: string;
  }): Promise<(Ticket & { responses: TicketResponse[]; assignedTo?: Admin | null })[]> {
    const sb = getSupabaseAdmin();
    if (sb) {
      try {
        let query = sb
          .from("tickets")
          .select(`
            *,
            responses:ticket_responses(*)
          `)
          .order("createdAt", { ascending: false });

        if (filter?.category) query = query.eq("category", filter.category);
        if (filter?.status) query = query.eq("status", filter.status);

        const { data: tickets, error } = await query;
        if (tickets && !error) {
          let results = tickets;
          if (filter?.search) {
            const q = filter.search.toLowerCase();
            results = results.filter(
              (t: any) =>
                t.title?.toLowerCase().includes(q) ||
                t.description?.toLowerCase().includes(q) ||
                t.senderEmail?.toLowerCase().includes(q) ||
                t.referenceCode?.toLowerCase().includes(q)
            );
          }
          return results as unknown as (Ticket & { responses: TicketResponse[]; assignedTo?: Admin | null })[];
        }
        if (error) console.error("Supabase getTickets error:", error);
      } catch (err) {
        console.warn("Supabase getTickets fallback:", err);
      }
    }

    if (hasLiveDatabase && prisma) {
      try {
        return await prisma.ticket.findMany({
          where: {
            ...(filter?.category ? { category: filter.category } : {}),
            ...(filter?.status ? { status: filter.status } : {}),
            ...(filter?.search
              ? {
                  OR: [
                    { title: { contains: filter.search, mode: "insensitive" } },
                    { description: { contains: filter.search, mode: "insensitive" } },
                    { senderEmail: { contains: filter.search, mode: "insensitive" } },
                    { referenceCode: { contains: filter.search, mode: "insensitive" } },
                  ],
                }
              : {}),
          },
          include: {
            responses: { orderBy: { createdAt: "asc" } },
            assignedTo: true,
          },
          orderBy: { createdAt: "desc" },
        });
      } catch (err) {
        console.warn("Prisma getTickets fallback:", err);
      }
    }

    let results = [...memoryStore.tickets];
    if (filter?.category) {
      results = results.filter((t) => t.category === filter.category);
    }
    if (filter?.status) {
      results = results.filter((t) => t.status === filter.status);
    }
    if (filter?.search) {
      const q = filter.search.toLowerCase();
      results = results.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.senderEmail.toLowerCase().includes(q) ||
          t.referenceCode.toLowerCase().includes(q)
      );
    }

    // Attach assignedTo admin reference
    return results.map((t) => ({
      ...t,
      assignedTo: memoryStore.admins.find((a) => a.id === t.assignedToAdminId) || null,
    }));
  },

  async getTicketById(id: string) {
    const sb = getSupabaseAdmin();
    if (sb) {
      try {
        const { data: ticket, error } = await sb
          .from("tickets")
          .select(`
            *,
            responses:ticket_responses(*)
          `)
          .eq("id", id)
          .single();
        if (ticket && !error) {
          return ticket as unknown as (Ticket & { responses: TicketResponse[]; assignedTo?: Admin | null });
        }
      } catch (err) {
        console.warn("Supabase getTicketById fallback:", err);
      }
    }

    if (hasLiveDatabase && prisma) {
      try {
        return await prisma.ticket.findUnique({
          where: { id },
          include: {
            responses: { orderBy: { createdAt: "asc" } },
            assignedTo: true,
          },
        });
      } catch (err) {
        console.warn("Prisma getTicketById fallback:", err);
      }
    }
    const ticket = memoryStore.tickets.find((t) => t.id === id);
    if (!ticket) return null;
    return {
      ...ticket,
      assignedTo: memoryStore.admins.find((a) => a.id === ticket.assignedToAdminId) || null,
    };
  },

  async createTicket(data: {
    category: TicketCategory;
    targetApp: string;
    title: string;
    description: string;
    senderName: string;
    senderEmail: string;
    company?: string;
    deviceInfo?: string;
    priority?: TicketPriority;
    ipAddress?: string;
    userAgent?: string;
  }): Promise<Ticket> {
    const referenceCode = `COG-${Math.floor(1000 + Math.random() * 9000)}`;
    const ticketId = crypto.randomUUID();

    const sb = getSupabaseAdmin();
    if (sb) {
      try {
        const { data: created, error } = await sb
          .from("tickets")
          .insert({
            id: ticketId,
            referenceCode,
            category: data.category,
            targetApp: data.targetApp,
            title: data.title,
            description: data.description,
            senderName: data.senderName,
            senderEmail: data.senderEmail,
            company: data.company || null,
            deviceInfo: data.deviceInfo || null,
            status: "NEW",
            priority: data.priority || "MEDIUM",
            isSpam: false,
            spamScore: 0.0,
            ipAddress: data.ipAddress || null,
            userAgent: data.userAgent || null,
            hasResponse: false,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          })
          .select()
          .single();

        if (created && !error) {
          return created as unknown as Ticket;
        }
        if (error) console.error("Supabase createTicket error:", error);
      } catch (err) {
        console.warn("Supabase createTicket fallback:", err);
      }
    }

    if (hasLiveDatabase && prisma) {
      try {
        return await prisma.ticket.create({
          data: {
            id: ticketId,
            referenceCode,
            category: data.category,
            targetApp: data.targetApp,
            title: data.title,
            description: data.description,
            senderName: data.senderName,
            senderEmail: data.senderEmail,
            company: data.company,
            deviceInfo: data.deviceInfo,
            priority: data.priority || "MEDIUM",
            ipAddress: data.ipAddress,
            userAgent: data.userAgent,
          },
        });
      } catch (err) {
        console.warn("Prisma createTicket fallback:", err);
      }
    }

    const newTicket: Ticket & { responses: TicketResponse[] } = {
      id: ticketId,
      referenceCode,
      category: data.category,
      targetApp: data.targetApp,
      title: data.title,
      description: data.description,
      senderName: data.senderName,
      senderEmail: data.senderEmail,
      company: data.company || null,
      deviceInfo: data.deviceInfo || null,
      status: "NEW" as TicketStatus,
      priority: data.priority || ("MEDIUM" as TicketPriority),
      assignedToAdminId: null,
      isSpam: false,
      spamScore: 0.0,
      ipAddress: data.ipAddress || null,
      userAgent: data.userAgent || null,
      hasResponse: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      responses: [],
    };
    memoryStore.tickets.unshift(newTicket);
    return newTicket;
  },

  async updateTicket(
    id: string,
    updates: {
      status?: TicketStatus;
      priority?: TicketPriority;
      assignedToAdminId?: string | null;
      isSpam?: boolean;
    }
  ) {
    const sb = getSupabaseAdmin();
    if (sb) {
      try {
        const { data: updated, error } = await sb
          .from("tickets")
          .update({
            ...updates,
            updatedAt: new Date().toISOString(),
          })
          .eq("id", id)
          .select(`
            *,
            responses:ticket_responses(*)
          `)
          .single();
        if (updated && !error) {
          return updated as unknown as Ticket;
        }
      } catch (err) {
        console.warn("Supabase updateTicket fallback:", err);
      }
    }

    if (hasLiveDatabase && prisma) {
      try {
        return await prisma.ticket.update({
          where: { id },
          data: updates,
          include: { responses: true, assignedTo: true },
        });
      } catch (err) {
        console.warn("Prisma updateTicket fallback:", err);
      }
    }

    const ticket = memoryStore.tickets.find((t) => t.id === id);
    if (ticket) {
      if (updates.status !== undefined) ticket.status = updates.status;
      if (updates.priority !== undefined) ticket.priority = updates.priority;
      if (updates.assignedToAdminId !== undefined)
        ticket.assignedToAdminId = updates.assignedToAdminId;
      if (updates.isSpam !== undefined) ticket.isSpam = updates.isSpam;
      ticket.updatedAt = new Date();
      return ticket;
    }
    return null;
  },

  async addTicketResponse(data: {
    ticketId: string;
    authorAdminId?: string;
    authorType: ResponseAuthorType;
    authorName: string;
    message: string;
    isInternalNote?: boolean;
  }): Promise<TicketResponse> {
    const sb = getSupabaseAdmin();
    if (sb) {
      try {
        const responseId = crypto.randomUUID();
        const { data: response, error } = await sb
          .from("ticket_responses")
          .insert({
            id: responseId,
            ticketId: data.ticketId,
            authorAdminId: data.authorAdminId || null,
            authorType: data.authorType,
            authorName: data.authorName,
            message: data.message,
            isInternalNote: data.isInternalNote || false,
            createdAt: new Date().toISOString(),
          })
          .select()
          .single();

        if (response && !error) {
          if (!data.isInternalNote) {
            await sb.from("tickets").update({
              hasResponse: true,
              status: "IN_PROGRESS",
              updatedAt: new Date().toISOString(),
            }).eq("id", data.ticketId);
          }
          return response as unknown as TicketResponse;
        }
      } catch (err) {
        console.warn("Supabase addTicketResponse fallback:", err);
      }
    }

    if (hasLiveDatabase && prisma) {
      try {
        const response = await prisma.ticketResponse.create({
          data: {
            ticketId: data.ticketId,
            authorAdminId: data.authorAdminId,
            authorType: data.authorType,
            authorName: data.authorName,
            message: data.message,
            isInternalNote: data.isInternalNote || false,
          },
        });
        // Update hasResponse flag on ticket if not internal note
        if (!data.isInternalNote) {
          await prisma.ticket.update({
            where: { id: data.ticketId },
            data: { hasResponse: true, status: "IN_PROGRESS" },
          });
        }
        return response;
      } catch (err) {
        console.warn("Prisma addTicketResponse fallback:", err);
      }
    }

    const newResponse: TicketResponse = {
      id: `resp-${Date.now()}`,
      ticketId: data.ticketId,
      authorAdminId: data.authorAdminId || null,
      authorType: data.authorType,
      authorName: data.authorName,
      message: data.message,
      isInternalNote: data.isInternalNote || false,
      createdAt: new Date(),
    };

    const ticket = memoryStore.tickets.find((t) => t.id === data.ticketId);
    if (ticket) {
      ticket.responses.push(newResponse);
      if (!data.isInternalNote) {
        ticket.hasResponse = true;
        if (ticket.status === "NEW" || ticket.status === "ASSIGNED") {
          ticket.status = "IN_PROGRESS" as TicketStatus;
        }
      }
      ticket.updatedAt = new Date();
    }
    return newResponse;
  },

  // --- Audit Log Methods ---
  async addAuditLog(data: {
    action: string;
    adminId?: string | null;
    ipAddress?: string;
    userAgent?: string;
    details?: string;
  }): Promise<AuditLog> {
    const sb = getSupabaseAdmin();
    if (sb) {
      try {
        const logId = crypto.randomUUID();
        const { data: log, error } = await sb
          .from("audit_logs")
          .insert({
            id: logId,
            action: data.action,
            adminId: data.adminId || null,
            ipAddress: data.ipAddress || null,
            userAgent: data.userAgent || null,
            details: data.details || null,
            createdAt: new Date().toISOString(),
          })
          .select()
          .single();
        if (log && !error) {
          return log as unknown as AuditLog;
        }
      } catch (err) {
        console.warn("Supabase addAuditLog fallback:", err);
      }
    }

    if (hasLiveDatabase && prisma) {
      try {
        return await prisma.auditLog.create({
          data: {
            action: data.action,
            adminId: data.adminId,
            ipAddress: data.ipAddress,
            userAgent: data.userAgent,
            details: data.details,
          },
        });
      } catch (err) {
        console.warn("Prisma addAuditLog fallback:", err);
      }
    }
    const log: AuditLog = {
      id: `log-${Date.now()}-${Math.random().toString(36).substring(7)}`,
      action: data.action,
      adminId: data.adminId || null,
      ipAddress: data.ipAddress || null,
      userAgent: data.userAgent || null,
      details: data.details || null,
      createdAt: new Date(),
    };
    memoryStore.auditLogs.unshift(log);
    return log;
  },

  async getAuditLogs(limit: number = 50): Promise<AuditLog[]> {
    const sb = getSupabaseAdmin();
    if (sb) {
      try {
        const { data: logs, error } = await sb
          .from("audit_logs")
          .select("*")
          .order("createdAt", { ascending: false })
          .limit(limit);
        if (logs && !error) {
          return logs as unknown as AuditLog[];
        }
      } catch (err) {
        console.warn("Supabase getAuditLogs fallback:", err);
      }
    }

    if (hasLiveDatabase && prisma) {
      try {
        return await prisma.auditLog.findMany({
          take: limit,
          orderBy: { createdAt: "desc" },
          include: { admin: true },
        });
      } catch (err) {
        console.warn("Prisma getAuditLogs fallback:", err);
      }
    }
    return memoryStore.auditLogs.slice(0, limit);
  },

  // --- Metrics Summary ---
  async getMetricsSummary() {
    const tickets = await this.getTickets();
    const total = tickets.length;
    const newTickets = tickets.filter((t) => t.status === "NEW").length;
    const inProgress = tickets.filter(
      (t) => t.status === "IN_PROGRESS" || t.status === "ASSIGNED" || t.status === "IN_REVIEW"
    ).length;
    const resolved = tickets.filter((t) => t.status === "RESOLVED" || t.status === "CLOSED").length;
    const awaitingResponse = tickets.filter((t) => !t.hasResponse).length;
    const spamBlocked = memoryStore.auditLogs.filter(
      (l) => l.action === "BOT_SUBMISSION_BLOCKED"
    ).length;

    return {
      total,
      newTickets,
      inProgress,
      resolved,
      awaitingResponse,
      spamBlocked,
      resolutionRate: total > 0 ? Math.round((resolved / total) * 100) : 100,
    };
  },
};
