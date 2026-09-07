"use client";
import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowLeft, Lock } from "lucide-react";

export default function AdminTeamPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold flex items-center gap-2">
            <Lock className="w-5 h-5 text-indigo-500" />
            Admin Security & Identity
          </h1>
          <p className="text-xs text-zinc-500 mt-1">
            Environment-Locked Single Administrator Architecture
          </p>
        </div>
        <Link
          href="/admin"
          className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Dashboard
        </Link>
      </div>

      <div className="p-6 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 dark:bg-indigo-950/20 space-y-4">
        <div className="flex items-start gap-3">
          <ShieldCheck className="w-6 h-6 text-indigo-500 shrink-0 mt-0.5" />
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Single Administrator Mode (Locked to Environment)
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Secondary agent accounts, invitation workflows, and self-service registration are permanently disabled.
              Authentication is strictly verified against <code className="text-indigo-400 font-mono">DEFAULT_ADMIN_EMAIL</code> and <code className="text-indigo-400 font-mono">DEFAULT_ADMIN_PASSWORD</code>.
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-indigo-500/10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <div className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">Active Super Admin</div>
            <div className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mt-1">Managed via Environment</div>
            <div className="text-xs text-zinc-500 mt-0.5">Role: SUPER_ADMIN (Immutable)</div>
          </div>
          <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <div className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">Secondary Account Creation</div>
            <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-1">Permanently Disabled</div>
            <div className="text-xs text-zinc-500 mt-0.5">Zero external attack surface</div>
          </div>
        </div>
      </div>
    </div>
  );
}
