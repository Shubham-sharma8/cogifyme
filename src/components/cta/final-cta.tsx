"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink, MessageSquareCode, ShieldCheck, Sparkles } from "lucide-react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { BrandLogo } from "@/components/brand/brand-logo";
import { siteConfig } from "@/config/site";

export const FinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-indigo-50/20 to-zinc-50 dark:from-zinc-950 dark:to-[#06080d] border-t border-zinc-200/80 dark:border-white/5 transition-colors duration-200">
      <BackgroundBeams className="opacity-10 dark:opacity-25" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        <div className="relative w-14 h-14 mb-6 flex items-center justify-center filter drop-shadow-[0_4px_16px_rgba(99,102,241,0.15)] dark:drop-shadow-[0_0_20px_rgba(99,102,241,0.25)]">
          <BrandLogo width={56} height={56} />
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200/80 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-medium mb-6 shadow-xs">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>100% Free Consumer Apps • Native Engineering • Absolute Privacy</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-6 leading-tight max-w-3xl mx-auto">
          Experience native software{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-600 dark:from-indigo-300 dark:via-indigo-100 dark:to-cyan-300">
            built without compromise.
          </span>
        </h2>

        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10">
          Explore all 7 free COGIFY applications on the Apple App Store across macOS, iOS, iPadOS, and Safari — or partner with our engineering team for custom enterprise license replacements.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/products"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all duration-200 shadow-xl shadow-indigo-600/25 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Explore All 7 Free Apps</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={siteConfig.appleDeveloperUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm transition-all duration-200 shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Apple App Store Profile</span>
          </a>

          <Link
            href="/contact"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-100 text-zinc-800 hover:text-zinc-950 border border-zinc-200/90 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-200 dark:border-white/10 font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2"
          >
            <MessageSquareCode className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>Talk to COGIFY</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
