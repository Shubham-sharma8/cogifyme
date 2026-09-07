"use client";
import React, { useEffect, useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Inbox,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  Send,
  UserCheck,
  Tag,
  AlertCircle,
  MessageSquare,
  Shield,
  Building2,
  Bug,
  Sparkles,
  ExternalLink,
  ChevronRight,
  X,
  Lock,
  RefreshCw,
} from "lucide-react";

interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface TicketResponse {
  id: string;
  ticketId: string;
  authorName: string;
  authorType: string;
  message: string;
  isInternalNote: boolean;
  createdAt: string;
}

interface Ticket {
  id: string;
  referenceCode: string;
  category: "SUGGESTION" | "BUG_REPORT" | "ENTERPRISE" | "CONTACT";
  targetApp: string;
  title: string;
  description: string;
  senderName: string;
  senderEmail: string;
  company: string | null;
  deviceInfo: string | null;
  status: "NEW" | "IN_REVIEW" | "ASSIGNED" | "IN_PROGRESS" | "RESOLVED" | "CLOSED";
  priority: "LOW" | "MEDIUM" | "HIGH" | "URGENT";
  assignedToAdminId: string | null;
  assignedTo?: AdminUser | null;
  isSpam: boolean;
  spamScore: number;
  ipAddress: string | null;
  userAgent: string | null;
  hasResponse: boolean;
  createdAt: string;
  updatedAt: string;
  responses: TicketResponse[];
}

function TicketsManagerContent() {
  const searchParams = useSearchParams();
  const initialTicketId = searchParams.get("id");

  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [admins, setAdmins] = useState<AdminUser[]>([]);
  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(initialTicketId);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("ALL");
  const [statusFilter, setStatusFilter] = useState<string>("ALL");
  const [responseFilter, setResponseFilter] = useState<string>("ALL");
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);

  // New response composer state
  const [replyMessage, setReplyMessage] = useState("");
  const [isInternalNote, setIsInternalNote] = useState(false);
  const [submittingReply, setSubmittingReply] = useState(false);

  // Fetch tickets and admin team members
  const fetchTickets = async () => {
    try {
      setSyncing(true);
      const res = await fetch("/api/admin/tickets");
      if (res.ok) {
        const data = await res.json();
        setTickets(data.tickets || []);
      }
    } catch (err) {
      console.error("Failed to fetch tickets:", err);
    } finally {
      setLoading(false);
      setSyncing(false);
    }
  };

  const fetchAdmins = async () => {
    setAdmins([
      { id: "admin-super-01", name: "Super Admin", email: "admin@cogify.me", role: "SUPER_ADMIN" },
    ]);
  };

  useEffect(() => {
    fetchTickets();
    fetchAdmins();
    // Auto-refresh every 12 seconds for real-time updates
    const interval = setInterval(fetchTickets, 12000);
    return () => clearInterval(interval);
  }, []);

  const selectedTicket = useMemo(() => {
    return tickets.find((t) => t.id === selectedTicketId) || null;
  }, [tickets, selectedTicketId]);

  // Handle ticket updates (Status, Priority, Assignment)
  const handleUpdateTicket = async (updates: {
    status?: string;
    priority?: string;
    assignedToAdminId?: string | null;
    isSpam?: boolean;
  }) => {
    if (!selectedTicketId) return;

    try {
      const res = await fetch("/api/admin/tickets", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ticketId: selectedTicketId,
          ...updates,
        }),
      });

      if (res.ok) {
        // Optimistic local state update
        setTickets((prev) =>
          prev.map((t) => {
            if (t.id === selectedTicketId) {
              const assignedAdmin =
                updates.assignedToAdminId !== undefined
                  ? admins.find((a) => a.id === updates.assignedToAdminId) || null
                  : t.assignedTo;
              return {
                ...t,
                ...updates,
                assignedTo: assignedAdmin,
              } as Ticket;
            }
            return t;
          })
        );
      }
    } catch (err) {
      console.error("Failed to update ticket:", err);
    }
  };

  // Submit response or note
  const handleSendResponse = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTicketId || !replyMessage.trim()) return;

    setSubmittingReply(true);
    try {
      const res = await fetch("/api/admin/tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ticketId: selectedTicketId,
          message: replyMessage,
          isInternalNote,
        }),
      });

      if (res.ok) {
        const { response } = await res.json();
        // Update ticket in local state
        setTickets((prev) =>
          prev.map((t) => {
            if (t.id === selectedTicketId) {
              const updatedResponses = [...(t.responses || []), response];
              const updatedHasResponse = !isInternalNote ? true : t.hasResponse;
              const updatedStatus =
                !isInternalNote && (t.status === "NEW" || t.status === "ASSIGNED")
                  ? "IN_PROGRESS"
                  : t.status;
              return {
                ...t,
                hasResponse: updatedHasResponse,
                status: updatedStatus,
                responses: updatedResponses,
              };
            }
            return t;
          })
        );
        setReplyMessage("");
      }
    } catch (err) {
      console.error("Failed to send ticket response:", err);
    } finally {
      setSubmittingReply(false);
    }
  };

  // Filtered tickets
  const filteredTickets = useMemo(() => {
    return tickets.filter((t) => {
      // Category filter
      if (categoryFilter !== "ALL" && t.category !== categoryFilter) return false;
      // Status filter
      if (statusFilter !== "ALL" && t.status !== statusFilter) return false;
      // Response status filter
      if (responseFilter === "AWAITING" && t.hasResponse) return false;
      if (responseFilter === "RESPONDED" && !t.hasResponse) return false;
      // Text query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesRef = t.referenceCode.toLowerCase().includes(q);
        const matchesTitle = t.title.toLowerCase().includes(q);
        const matchesDesc = t.description.toLowerCase().includes(q);
        const matchesEmail = t.senderEmail.toLowerCase().includes(q);
        const matchesName = t.senderName.toLowerCase().includes(q);
        const matchesCompany = t.company?.toLowerCase().includes(q);
        if (!matchesRef && !matchesTitle && !matchesDesc && !matchesEmail && !matchesName && !matchesCompany) {
          return false;
        }
      }
      return true;
    });
  }, [tickets, categoryFilter, statusFilter, responseFilter, searchQuery]);

  return (
    <div className="space-y-6">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Ticket & Inquiry Workstation
          </h1>
          <p className="text-xs text-zinc-500 mt-1">
            Manage feedback requests, assign owners, inspect device specs, and respond with real-time Supabase sync.
          </p>
        </div>

        <button
          onClick={fetchTickets}
          disabled={syncing}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer self-start sm:self-auto"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${syncing ? "animate-spin" : ""}`} />
          <span>Refresh Tickets</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-white/10 shadow-xs space-y-3">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by Ref Code (e.g. COG-8492), customer name, email, or keywords..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 text-xs text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          {/* Quick Filter Selectors */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Category */}
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-3 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 text-xs font-medium text-zinc-800 dark:text-zinc-200 focus:outline-none focus:border-indigo-500"
            >
              <option value="ALL">All Categories</option>
              <option value="SUGGESTION">Suggestions</option>
              <option value="BUG_REPORT">Bug Reports</option>
              <option value="ENTERPRISE">Enterprise Pilots</option>
              <option value="CONTACT">General Contact</option>
            </select>

            {/* Status */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 text-xs font-medium text-zinc-800 dark:text-zinc-200 focus:outline-none focus:border-indigo-500"
            >
              <option value="ALL">All Statuses</option>
              <option value="NEW">New (Unreviewed)</option>
              <option value="IN_REVIEW">In Review</option>
              <option value="ASSIGNED">Assigned</option>
              <option value="IN_PROGRESS">In Progress</option>
              <option value="RESOLVED">Resolved</option>
              <option value="CLOSED">Closed</option>
            </select>

            {/* Response Status */}
            <select
              value={responseFilter}
              onChange={(e) => setResponseFilter(e.target.value)}
              className="px-3 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 text-xs font-medium text-zinc-800 dark:text-zinc-200 focus:outline-none focus:border-indigo-500"
            >
              <option value="ALL">All Responses</option>
              <option value="AWAITING">⚠️ Awaiting Reply</option>
              <option value="RESPONDED">✓ Has Responded</option>
            </select>
          </div>
        </div>

        {/* Counter Info */}
        <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 pt-1 border-t border-zinc-100 dark:border-white/5">
          <span>Showing {filteredTickets.length} of {tickets.length} total tickets</span>
          <span>Cloudflare bot filtration active</span>
        </div>
      </div>

      {/* Main Workspace Layout: List on Left, Active Ticket Details on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left List View */}
        <div className={`space-y-3 ${selectedTicket ? "lg:col-span-5" : "lg:col-span-12"}`}>
          {loading ? (
            <div className="p-12 text-center text-zinc-400 font-mono text-xs">
              Loading tickets from database...
            </div>
          ) : filteredTickets.length === 0 ? (
            <div className="p-12 text-center bg-white dark:bg-zinc-900/60 rounded-3xl border border-zinc-200/80 dark:border-white/10 text-zinc-500 text-xs">
              No tickets match your filter criteria.
            </div>
          ) : (
            filteredTickets.map((t) => {
              const isSelected = t.id === selectedTicketId;
              return (
                <div
                  key={t.id}
                  onClick={() => setSelectedTicketId(t.id)}
                  className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-indigo-50/80 dark:bg-indigo-950/30 border-indigo-500 shadow-md ring-1 ring-indigo-500/20"
                      : "bg-white dark:bg-zinc-900/70 border-zinc-200/80 dark:border-white/10 hover:border-zinc-300 dark:hover:border-zinc-700 shadow-xs"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-indigo-600 dark:text-indigo-400">
                        {t.referenceCode}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 font-mono">
                        {t.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {t.hasResponse ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                          <CheckCircle2 className="w-3 h-3" />
                          Responded
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-amber-600 dark:text-amber-400">
                          <Clock className="w-3 h-3" />
                          Awaiting
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xs font-bold text-zinc-900 dark:text-white line-clamp-1 mb-1">
                    {t.title}
                  </h3>

                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 line-clamp-2 mb-3 leading-relaxed">
                    {t.description}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-zinc-100 dark:border-white/5 text-[10px] text-zinc-400 font-mono">
                    <div className="truncate max-w-[150px]">
                      {t.senderName} {t.company ? `• ${t.company}` : ""}
                    </div>
                    <div>
                      {t.assignedTo ? (
                        <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                          @{t.assignedTo.name.split(" ")[0]}
                        </span>
                      ) : (
                        <span className="text-zinc-400 italic">Unassigned</span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Right Detail Inspection Drawer */}
        {selectedTicket && (
          <div className="lg:col-span-7 bg-white dark:bg-zinc-900/90 border border-zinc-200/80 dark:border-white/10 rounded-3xl shadow-xl p-6 sm:p-8 space-y-6 lg:sticky lg:top-8 animate-fade-in">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-zinc-200/80 dark:border-white/5">
              <div>
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className="text-sm font-mono font-extrabold text-indigo-600 dark:text-indigo-400">
                    {selectedTicket.referenceCode}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold uppercase">
                    {selectedTicket.category}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400">
                    {new Date(selectedTicket.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-zinc-900 dark:text-white leading-snug">
                  {selectedTicket.title}
                </h2>
              </div>

              <button
                onClick={() => setSelectedTicketId(null)}
                className="p-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:text-zinc-800 dark:hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Action Controls: Assignee, Status, Priority */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-white/5">
              {/* Assignee Selection */}
              <div>
                <label className="block text-[10px] font-mono uppercase text-zinc-500 mb-1">
                  Assigned Owner
                </label>
                <select
                  value={selectedTicket.assignedToAdminId || ""}
                  onChange={(e) =>
                    handleUpdateTicket({
                      assignedToAdminId: e.target.value ? e.target.value : null,
                      status: selectedTicket.status === "NEW" ? "ASSIGNED" : selectedTicket.status,
                    })
                  }
                  className="w-full px-2.5 py-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-white/10 text-xs font-semibold text-zinc-900 dark:text-white focus:outline-none focus:border-indigo-500"
                >
                  <option value="">Unassigned</option>
                  {admins.map((adm) => (
                    <option key={adm.id} value={adm.id}>
                      {adm.name} ({adm.role})
                    </option>
                  ))}
                </select>
              </div>

              {/* Status Selection */}
              <div>
                <label className="block text-[10px] font-mono uppercase text-zinc-500 mb-1">
                  Ticket Status
                </label>
                <select
                  value={selectedTicket.status}
                  onChange={(e) => handleUpdateTicket({ status: e.target.value })}
                  className="w-full px-2.5 py-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-white/10 text-xs font-semibold text-zinc-900 dark:text-white focus:outline-none focus:border-indigo-500"
                >
                  <option value="NEW">NEW</option>
                  <option value="IN_REVIEW">IN REVIEW</option>
                  <option value="ASSIGNED">ASSIGNED</option>
                  <option value="IN_PROGRESS">IN PROGRESS</option>
                  <option value="RESOLVED">RESOLVED</option>
                  <option value="CLOSED">CLOSED</option>
                </select>
              </div>

              {/* Priority Selection */}
              <div>
                <label className="block text-[10px] font-mono uppercase text-zinc-500 mb-1">
                  Priority
                </label>
                <select
                  value={selectedTicket.priority}
                  onChange={(e) => handleUpdateTicket({ priority: e.target.value })}
                  className="w-full px-2.5 py-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-white/10 text-xs font-semibold text-zinc-900 dark:text-white focus:outline-none focus:border-indigo-500"
                >
                  <option value="LOW">LOW</option>
                  <option value="MEDIUM">MEDIUM</option>
                  <option value="HIGH">HIGH</option>
                  <option value="URGENT">URGENT</option>
                </select>
              </div>
            </div>

            {/* Sender & Context Metadata Box */}
            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-zinc-50/70 dark:bg-zinc-950/40 border border-zinc-200/60 dark:border-white/5 font-mono text-[11px]">
                <div>
                  <span className="text-zinc-400 block text-[10px] uppercase">Submitter</span>
                  <span className="font-semibold text-zinc-900 dark:text-white">
                    {selectedTicket.senderName}
                  </span>
                  <a
                    href={`mailto:${selectedTicket.senderEmail}`}
                    className="block text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    {selectedTicket.senderEmail}
                  </a>
                </div>
                <div>
                  <span className="text-zinc-400 block text-[10px] uppercase">Company & Target</span>
                  <span className="font-semibold text-zinc-900 dark:text-white block truncate">
                    {selectedTicket.company || "Individual User"}
                  </span>
                  <span className="text-zinc-500 block truncate">{selectedTicket.targetApp}</span>
                </div>
              </div>

              {selectedTicket.deviceInfo && (
                <div className="px-3 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800/40 text-[11px] font-mono text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
                  <span className="text-zinc-400 font-semibold uppercase text-[9px]">Hardware:</span>
                  <span>{selectedTicket.deviceInfo}</span>
                </div>
              )}
            </div>

            {/* Description Body */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase text-zinc-400 font-semibold">
                Submission Message & Payload
              </span>
              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/80 dark:border-white/5 text-xs text-zinc-800 dark:text-zinc-200 leading-relaxed whitespace-pre-wrap font-sans">
                {selectedTicket.description}
              </div>
            </div>

            {/* Response Thread (Past responses & notes) */}
            <div className="space-y-3 pt-2 border-t border-zinc-200/80 dark:border-white/5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  Activity & Communication History
                </span>
                <span className="text-[10px] font-mono text-zinc-500">
                  {selectedTicket.responses?.length || 0} entries
                </span>
              </div>

              <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
                {(!selectedTicket.responses || selectedTicket.responses.length === 0) ? (
                  <div className="p-3 text-center rounded-xl bg-zinc-50 dark:bg-zinc-950/40 border border-dashed border-zinc-200 dark:border-white/10 text-[11px] text-zinc-400 font-mono">
                    No responses or notes recorded yet. Write a response below.
                  </div>
                ) : (
                  selectedTicket.responses.map((resp) => (
                    <div
                      key={resp.id}
                      className={`p-3 rounded-xl text-xs space-y-1 ${
                        resp.isInternalNote
                          ? "bg-amber-50/70 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-amber-950 dark:text-amber-200"
                          : "bg-indigo-50/70 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-950 dark:text-indigo-200"
                      }`}
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono">
                        <div className="flex items-center gap-1.5 font-bold">
                          {resp.isInternalNote && <Lock className="w-3 h-3 text-amber-600" />}
                          <span>{resp.authorName}</span>
                          <span className="opacity-60">
                            ({resp.isInternalNote ? "Internal Team Note" : "✉️ Public Response & Emailed"})
                          </span>
                        </div>
                        <span className="opacity-60">
                          {new Date(resp.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </span>
                      </div>
                      <p className="text-xs leading-relaxed whitespace-pre-wrap">{resp.message}</p>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Response Composer */}
            <form onSubmit={handleSendResponse} className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-zinc-700 dark:text-zinc-300">
                  Write Reply or Note
                </span>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsInternalNote(false)}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-semibold transition-colors cursor-pointer ${
                      !isInternalNote
                        ? "bg-indigo-600 text-white"
                        : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                    }`}
                  >
                    Public Reply
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsInternalNote(true)}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-semibold transition-colors cursor-pointer flex items-center gap-1 ${
                      isInternalNote
                        ? "bg-amber-600 text-white"
                        : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                    }`}
                  >
                    <Lock className="w-2.5 h-2.5" />
                    Internal Note
                  </button>
                </div>
              </div>

              <textarea
                rows={3}
                required
                value={replyMessage}
                onChange={(e) => setReplyMessage(e.target.value)}
                placeholder={
                  isInternalNote
                    ? "Add a private engineering note visible only to Cogify admins..."
                    : `Draft reply to ${selectedTicket.senderName} (${selectedTicket.senderEmail})...`
                }
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-white/10 text-xs text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-indigo-500 resize-none transition-colors"
              />

              <div className="flex items-center justify-between">
                <span className="text-[10px] text-zinc-400 font-mono">
                  {isInternalNote ? (
                    "⚠️ Internal notes are private (Cogify team only)"
                  ) : (
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                      <span>✉️ Dispatches instant email to {selectedTicket.senderEmail}</span>
                    </span>
                  )}
                </span>

                <button
                  type="submit"
                  disabled={submittingReply || !replyMessage.trim()}
                  className={`px-5 py-2 rounded-xl text-white font-semibold text-xs flex items-center gap-1.5 shadow-md transition-all cursor-pointer disabled:opacity-50 ${
                    isInternalNote
                      ? "bg-amber-600 hover:bg-amber-500 shadow-amber-600/30"
                      : "bg-indigo-600 hover:bg-indigo-500 shadow-indigo-600/30"
                  }`}
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>
                    {submittingReply
                      ? "Posting & Emailing..."
                      : isInternalNote
                      ? "Save Internal Note"
                      : "Send & Email Reply"}
                  </span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default function TicketsManagerPage() {
  return (
    <Suspense fallback={<div className="p-8 text-zinc-400 font-mono text-xs">Loading Workstation...</div>}>
      <TicketsManagerContent />
    </Suspense>
  );
}
