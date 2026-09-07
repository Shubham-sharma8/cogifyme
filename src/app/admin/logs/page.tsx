"use client";
import React, { useEffect, useState } from "react";
import {
  ShieldCheck,
  ShieldAlert,
  Terminal,
  Activity,
  RefreshCw,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  Lock,
} from "lucide-react";

interface AuditLog {
  id: string;
  action: string;
  adminId: string | null;
  admin?: { name: string; email: string } | null;
  ipAddress: string | null;
  userAgent: string | null;
  details: string | null;
  createdAt: string;
}

export default function AdminLogsPage() {
  const [logs, setLogs] = useState<AuditLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [actionFilter, setActionFilter] = useState("ALL");

  const fetchLogs = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/logs");
      if (res.ok) {
        const data = await res.json();
        setLogs(data.logs || []);
      }
    } catch (err) {
      console.error("Failed to fetch logs:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  const getActionBadge = (action: string) => {
    if (action.includes("BLOCKED") || action.includes("FAILED")) {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 text-[10px] font-mono font-bold">
          <ShieldAlert className="w-3 h-3" />
          {action}
        </span>
      );
    }
    if (action.includes("SUCCESS") || action.includes("COMPLETED")) {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[10px] font-mono font-bold">
          <CheckCircle2 className="w-3 h-3" />
          {action}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 text-[10px] font-mono font-bold">
        <Activity className="w-3 h-3" />
        {action}
      </span>
    );
  };

  const filteredLogs = logs.filter((log) => {
    if (actionFilter !== "ALL" && !log.action.includes(actionFilter)) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchesAction = log.action.toLowerCase().includes(q);
      const matchesDetails = log.details?.toLowerCase().includes(q) || false;
      const matchesIp = log.ipAddress?.toLowerCase().includes(q) || false;
      if (!matchesAction && !matchesDetails && !matchesIp) return false;
    }
    return true;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Cybersecurity & Audit Logs
          </h1>
          <p className="text-xs text-zinc-500 mt-1">
            Real-time immutable audit trail: Cloudflare bot interceptions, honeypot traps, admin logins, and ticket events.
          </p>
        </div>

        <button
          onClick={fetchLogs}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer self-start sm:self-auto"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Refresh Logs</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-white/10 shadow-xs flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by action, details, or IP address..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 text-xs text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>

        <select
          value={actionFilter}
          onChange={(e) => setActionFilter(e.target.value)}
          className="px-3 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 text-xs font-medium text-zinc-800 dark:text-zinc-200 focus:outline-none focus:border-indigo-500"
        >
          <option value="ALL">All Event Types</option>
          <option value="BLOCKED">Bot Blocks & Interceptions</option>
          <option value="LOGIN">Admin Authentication</option>
          <option value="TICKET">Ticket & Response Events</option>
        </select>
      </div>

      {/* Logs Table */}
      <div className="bg-white dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-white/10 rounded-3xl shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-200/60 dark:border-white/5 bg-zinc-50/50 dark:bg-zinc-950/40 text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                <th className="py-3 px-4">Timestamp</th>
                <th className="py-3 px-4">Event Type</th>
                <th className="py-3 px-4">Details & Payload</th>
                <th className="py-3 px-4">IP Address</th>
                <th className="py-3 px-4">Origin / User Agent</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200/60 dark:divide-white/5 text-xs font-mono">
              {loading ? (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-zinc-400">
                    Loading security log entries...
                  </td>
                </tr>
              ) : filteredLogs.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-zinc-400">
                    No log events match your filter.
                  </td>
                </tr>
              ) : (
                filteredLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/30 transition-colors">
                    <td className="py-3.5 px-4 text-zinc-500 whitespace-nowrap text-[11px]">
                      {new Date(log.createdAt).toLocaleString()}
                    </td>
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      {getActionBadge(log.action)}
                    </td>
                    <td className="py-3.5 px-4 font-sans text-xs text-zinc-800 dark:text-zinc-200 max-w-md">
                      {log.details || "—"}
                    </td>
                    <td className="py-3.5 px-4 text-zinc-600 dark:text-zinc-400 text-[11px]">
                      {log.ipAddress || "—"}
                    </td>
                    <td className="py-3.5 px-4 text-zinc-400 text-[11px] truncate max-w-xs">
                      {log.userAgent || "—"}
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
