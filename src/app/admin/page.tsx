"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Inbox,
  Clock,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  TrendingUp,
  RefreshCw,
  ArrowRight,
  Sparkles,
  MessageSquare,
  Building2,
  Bug,
  HelpCircle,
} from "lucide-react";

interface Metrics {
  total: number;
  newTickets: number;
  inProgress: number;
  resolved: number;
  awaitingResponse: number;
  spamBlocked: number;
  resolutionRate: number;
}

interface TicketSummary {
  id: string;
  referenceCode: string;
  category: string;
  targetApp: string;
  title: string;
  senderName: string;
  senderEmail: string;
  company: string | null;
  status: string;
  priority: string;
  hasResponse: boolean;
  assignedTo?: { name: string } | null;
  createdAt: string;
}

export default function AdminDashboardPage() {
  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [recentTickets, setRecentTickets] = useState<TicketSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchData = async () => {
    try {
      setIsRefreshing(true);
      const [metricsRes, ticketsRes] = await Promise.all([
        fetch("/api/admin/tickets?metrics=true"),
        fetch("/api/admin/tickets"),
      ]);

      if (metricsRes.ok) {
        const m = await metricsRes.json();
        setMetrics(m);
      }
      if (ticketsRes.ok) {
        const t = await ticketsRes.json();
        setRecentTickets((t.tickets || []).slice(0, 8));
      }
    } catch (err) {
      console.error("Dashboard data fetch error:", err);
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchData();
    // Poll every 15 seconds for live real-time updates
    const interval = setInterval(fetchData, 15000);
    return () => clearInterval(interval);
  }, []);

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "BUG_REPORT":
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 text-[10px] font-semibold">
            <Bug className="w-3 h-3" />
            Bug Report
          </span>
        );
      case "ENTERPRISE":
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 text-[10px] font-semibold">
            <Building2 className="w-3 h-3" />
            Enterprise
          </span>
        );
      case "CONTACT":
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 text-[10px] font-semibold">
            <MessageSquare className="w-3 h-3" />
            Contact
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 text-[10px] font-semibold">
            <Sparkles className="w-3 h-3" />
            Suggestion
          </span>
        );
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "NEW":
        return (
          <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold text-[10px] border border-blue-500/20">
            NEW
          </span>
        );
      case "ASSIGNED":
      case "IN_PROGRESS":
      case "IN_REVIEW":
        return (
          <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold text-[10px] border border-amber-500/20">
            {status.replace("_", " ")}
          </span>
        );
      case "RESOLVED":
      case "CLOSED":
        return (
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold text-[10px] border border-emerald-500/20">
            RESOLVED
          </span>
        );
      default:
        return <span className="text-[10px] text-zinc-500">{status}</span>;
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Engineering & Operations Dashboard
          </h1>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
            Real-time ticketing, user suggestions, enterprise inquiries, and anti-bot surveillance.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchData}
            disabled={isRefreshing}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? "animate-spin" : ""}`} />
            <span>Sync Live DB</span>
          </button>

          <Link
            href="/admin/tickets"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white shadow-md shadow-indigo-600/30 transition-colors"
          >
            <span>Manage All Tickets</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* KPI Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
        {/* Total Tickets */}
        <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/10 shadow-xs">
          <div className="flex items-center justify-between text-zinc-500 mb-2">
            <span className="text-[11px] font-medium">Total Tickets</span>
            <Inbox className="w-4 h-4 text-indigo-500" />
          </div>
          <div className="text-2xl font-extrabold text-zinc-900 dark:text-white">
            {metrics?.total ?? 0}
          </div>
          <span className="text-[10px] text-zinc-400 font-mono">All platforms</span>
        </div>

        {/* New / Unassigned */}
        <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/10 shadow-xs">
          <div className="flex items-center justify-between text-zinc-500 mb-2">
            <span className="text-[11px] font-medium">New Requests</span>
            <Clock className="w-4 h-4 text-blue-500" />
          </div>
          <div className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">
            {metrics?.newTickets ?? 0}
          </div>
          <span className="text-[10px] text-zinc-400 font-mono">Needs triage</span>
        </div>

        {/* Awaiting Response */}
        <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/10 shadow-xs">
          <div className="flex items-center justify-between text-zinc-500 mb-2">
            <span className="text-[11px] font-medium">Awaiting Reply</span>
            <AlertTriangle className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-2xl font-extrabold text-amber-600 dark:text-amber-400">
            {metrics?.awaitingResponse ?? 0}
          </div>
          <span className="text-[10px] text-zinc-400 font-mono">User waiting</span>
        </div>

        {/* In Progress */}
        <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/10 shadow-xs">
          <div className="flex items-center justify-between text-zinc-500 mb-2">
            <span className="text-[11px] font-medium">In Progress</span>
            <TrendingUp className="w-4 h-4 text-purple-500" />
          </div>
          <div className="text-2xl font-extrabold text-purple-600 dark:text-purple-400">
            {metrics?.inProgress ?? 0}
          </div>
          <span className="text-[10px] text-zinc-400 font-mono">Under development</span>
        </div>

        {/* Resolved */}
        <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/10 shadow-xs">
          <div className="flex items-center justify-between text-zinc-500 mb-2">
            <span className="text-[11px] font-medium">Resolved</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">
            {metrics?.resolved ?? 0}
          </div>
          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono">
            {metrics?.resolutionRate ?? 100}% rate
          </span>
        </div>

        {/* Bot Invasions Blocked */}
        <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/10 shadow-xs">
          <div className="flex items-center justify-between text-zinc-500 mb-2">
            <span className="text-[11px] font-medium">Spam Blocked</span>
            <ShieldCheck className="w-4 h-4 text-cyan-500" />
          </div>
          <div className="text-2xl font-extrabold text-cyan-600 dark:text-cyan-400">
            {metrics?.spamBlocked ?? 0}
          </div>
          <span className="text-[10px] text-zinc-400 font-mono">Turnstile + traps</span>
        </div>
      </div>

      {/* Quick Filter Jump Banner */}
      <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/20 border border-indigo-200/80 dark:border-indigo-500/20 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
          <span className="text-xs text-indigo-950 dark:text-indigo-200 font-medium">
            Attention Needed: You have{" "}
            <strong className="text-indigo-600 dark:text-indigo-400">
              {metrics?.awaitingResponse ?? 0} tickets
            </strong>{" "}
            waiting for initial response or engineering follow-up.
          </span>
        </div>
        <Link
          href="/admin/tickets?status=NEW"
          className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors"
        >
          Triage New Tickets
        </Link>
      </div>

      {/* Recent Tickets Table */}
      <div className="bg-white dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-white/10 rounded-3xl shadow-xs overflow-hidden">
        <div className="p-5 border-b border-zinc-200/80 dark:border-white/5 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-zinc-900 dark:text-white">
              Recent Inquiries & Requests
            </h2>
            <span className="text-xs text-zinc-500">
              Real-time feed across EmDoc feedback, Enterprise pilots, and general contacts
            </span>
          </div>
          <Link
            href="/admin/tickets"
            className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
          >
            <span>View all</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-200/60 dark:border-white/5 bg-zinc-50/50 dark:bg-zinc-950/40 text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                <th className="py-3 px-4">Ref Code</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Title & Sender</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Priority</th>
                <th className="py-3 px-4">Response</th>
                <th className="py-3 px-4">Assigned To</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200/60 dark:divide-white/5 text-xs">
              {loading ? (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-zinc-400 font-mono">
                    Loading recent requests...
                  </td>
                </tr>
              ) : recentTickets.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-zinc-400 font-mono">
                    No tickets recorded yet.
                  </td>
                </tr>
              ) : (
                recentTickets.map((ticket) => (
                  <tr
                    key={ticket.id}
                    className="hover:bg-zinc-50/80 dark:hover:bg-zinc-800/40 transition-colors group cursor-pointer"
                    onClick={() => {
                      window.location.href = `/admin/tickets?id=${ticket.id}`;
                    }}
                  >
                    <td className="py-3.5 px-4 font-mono font-bold text-indigo-600 dark:text-indigo-400">
                      {ticket.referenceCode}
                    </td>
                    <td className="py-3.5 px-4">
                      {getCategoryBadge(ticket.category)}
                    </td>
                    <td className="py-3.5 px-4 max-w-xs">
                      <div className="font-semibold text-zinc-900 dark:text-white truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {ticket.title}
                      </div>
                      <div className="text-[11px] text-zinc-500 truncate">
                        {ticket.senderName}
                        {ticket.company ? ` • ${ticket.company}` : ""}
                      </div>
                    </td>
                    <td className="py-3.5 px-4">
                      {getStatusBadge(ticket.status)}
                    </td>
                    <td className="py-3.5 px-4">
                      <span
                        className={`text-[10px] font-mono font-bold uppercase ${
                          ticket.priority === "URGENT"
                            ? "text-red-500"
                            : ticket.priority === "HIGH"
                            ? "text-orange-500"
                            : ticket.priority === "MEDIUM"
                            ? "text-indigo-500"
                            : "text-zinc-500"
                        }`}
                      >
                        {ticket.priority}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      {ticket.hasResponse ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-semibold">
                          <CheckCircle2 className="w-3 h-3" />
                          Responded
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[10px] font-semibold">
                          <Clock className="w-3 h-3" />
                          Awaiting
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-zinc-600 dark:text-zinc-400">
                      {ticket.assignedTo?.name || (
                        <span className="text-zinc-400 italic">Unassigned</span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
