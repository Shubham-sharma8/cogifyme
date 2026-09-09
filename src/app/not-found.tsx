import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { BrandLogo } from "@/components/brand/brand-logo";
import { Home, ArrowLeft, Search, Layers, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: "The requested page could not be found on COGIFY.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-xl w-full text-center space-y-8 relative z-10">
        <div className="flex justify-center">
          <div className="relative w-16 h-16 flex items-center justify-center p-3 rounded-2xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 shadow-lg">
            <BrandLogo width={48} height={48} priority />
          </div>
        </div>

        <div className="space-y-3">
          <span className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20">
            Error 404
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-md mx-auto leading-relaxed">
            The link you followed may be broken or the page may have been moved. Explore our core solutions below.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 shadow-md shadow-indigo-600/20"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>

          <Link
            href="/products/emdoc"
            className="px-5 py-2.5 rounded-xl bg-white hover:bg-zinc-100 text-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-200 font-semibold text-xs sm:text-sm border border-zinc-200 dark:border-white/10 transition-colors flex items-center gap-2"
          >
            <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>EmDoc (macOS)</span>
          </Link>

          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-white/5 dark:hover:bg-white/10 text-zinc-700 dark:text-zinc-300 font-medium text-xs sm:text-sm transition-colors flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            <span>Contact Support</span>
          </Link>
        </div>

        <div className="pt-6 border-t border-zinc-200 dark:border-white/5">
          <p className="text-xs text-zinc-500 font-mono">
            COGIFY Technologies • <code className="text-zinc-700 dark:text-zinc-400">cogify.me</code>
          </p>
        </div>
      </div>
    </div>
  );
}
