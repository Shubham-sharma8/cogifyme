"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Scale,
  CheckCircle2,
  ArrowUpRight,
  Cpu,
  HardDrive,
  DollarSign,
  Sparkles,
  Download,
  ShieldCheck,
  Globe,
} from "lucide-react";
import { COMPARISON_GUIDES } from "@/config/comparisons";

interface ComparisonHubSectionProps {
  compact?: boolean;
}

const WEB_STUDIO_COMPARISONS = [
  {
    name: "Marriage Biodata Maker Studio",
    href: "/biodata",
    liveUrl: "https://biodata.cogify.me",
    badge: "Web Studio • biodata.cogify.me",
    vsLabel: "vs. Canva Pro ($120/yr) & Paid Matrimonial Portals",
    cogifyMetrics: "$0 Forever • 242 Templates • 9 Languages • Zero Server Upload",
    summary:
      "Paid biodata portals charge ₹299–₹999 per PDF download and store your family phone numbers, salary, and horoscope on cloud databases. Cogify's Biodata Studio renders 300-DPI PDF, DOCX & PNG files 100% inside your browser's Canvas/WebAssembly memory with built-in Vedic Kundali & Gun Milan.",
  },
  {
    name: "SSB Stage-2 Practice Studio",
    href: "/ssb",
    liveUrl: "https://ssb.cogify.me",
    badge: "Web Studio • ssb.cogify.me",
    vsLabel: "vs. ₹15,000+ Offline Coaching & Static PDF Workbooks",
    cogifyMetrics: "$0 Forever • 150+ Psych Dossiers • OIR, PPDT, TAT, WAT, SRT & GTO",
    summary:
      "Traditional SSB prep books lack real-time 15-second WAT / 30-second SRT auto-advancing audio-visual timers, while offline coaching academies cost ₹15,000+. Cogify's SSB Studio simulates authentic DIPR psychology timing, GTO group obstacles, and PIQ interviews with 100% local IndexedDB storage.",
  },
];

export function ComparisonHubSection({ compact = false }: ComparisonHubSectionProps) {
  const [selectedSlugs, setSelectedSlugs] = useState<string[]>(
    COMPARISON_GUIDES.map((g) => g.slug)
  );
  const [activeGuideSlug, setActiveGuideSlug] = useState<string>(
    COMPARISON_GUIDES[0].slug
  );

  const toggleSlug = (slug: string) => {
    setSelectedSlugs((prev) =>
      prev.includes(slug)
        ? prev.length > 1
          ? prev.filter((s) => s !== slug)
          : prev
        : [...prev, slug]
    );
  };

  const selectedGuides = COMPARISON_GUIDES.filter((g) =>
    selectedSlugs.includes(g.slug)
  );

  const totalCogifyDiskMb = selectedGuides.reduce(
    (acc, g) => acc + g.cogifySpec.binarySizeMb,
    0
  );
  const totalCompDiskMb = selectedGuides.reduce(
    (acc, g) => acc + g.competitors[0].binarySizeMb,
    0
  );

  const totalCogifyRamMb = selectedGuides.reduce(
    (acc, g) => acc + g.cogifySpec.ramUsageMb,
    0
  );
  const totalCompRamMb = selectedGuides.reduce(
    (acc, g) => acc + g.competitors[0].ramUsageMb,
    0
  );

  const totalThreeYearSavingsUsd = selectedGuides.reduce(
    (acc, g) => acc + g.competitors[0].threeYearCostUsd,
    0
  );

  const activeGuide =
    COMPARISON_GUIDES.find((g) => g.slug === activeGuideSlug) ||
    COMPARISON_GUIDES[0];

  return (
    <section
      id="comparisons"
      aria-labelledby="comparisons-heading"
      className="max-w-6xl mx-auto px-6 py-16 sm:py-20"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-widest mb-3">
            <Scale className="w-3.5 h-3.5" />
            <span>Empirical macOS Benchmark Suite</span>
          </div>
          <h2
            id="comparisons-heading"
            className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-950 dark:text-white text-balance"
          >
            Native Swift &amp; C++20 vs. Bloated Subscriptions
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2 max-w-2xl leading-relaxed">
            See how Cogify&apos;s ultra-lightweight macOS workstations compare against Adobe Acrobat Pro, Little Snitch, iStat Menus, BetterDisplay, Paste, and CleanMyMac X.
          </p>
        </div>

        {compact && (
          <Link
            href="/compare"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-bold shadow-md shadow-indigo-500/20 transition-all shrink-0 self-start md:self-auto"
          >
            <span>Open All 7 Comparison Guides</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        )}
      </div>

      {/* Interactive Stack Savings & Resource Calculator */}
      <div className="rounded-3xl bg-white dark:bg-[#0b0f17] border border-zinc-200/90 dark:border-white/[0.08] p-6 sm:p-8 shadow-sm mb-12 tabular-nums">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-6 border-b border-zinc-200/80 dark:border-white/[0.07]">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 block">
              Interactive Apple Silicon Stack Calculator
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-zinc-950 dark:text-white mt-0.5">
              Toggle the macOS Utilities in Your Daily Workflow:
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {COMPARISON_GUIDES.map((guide) => {
              const isSelected = selectedSlugs.includes(guide.slug);
              return (
                <button
                  key={guide.slug}
                  type="button"
                  onClick={() => toggleSlug(guide.slug)}
                  aria-pressed={isSelected}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                    isSelected
                      ? "bg-indigo-600 text-white shadow-xs"
                      : "bg-zinc-100 dark:bg-white/[0.05] text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-white/[0.1]"
                  }`}
                >
                  <CheckCircle2
                    className={`w-3.5 h-3.5 ${
                      isSelected ? "text-emerald-300" : "text-zinc-400"
                    }`}
                  />
                  <span>{guide.appShortName}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3 Real-Time Comparison Readout Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="rounded-2xl bg-zinc-50 dark:bg-white/[0.025] border border-zinc-200/70 dark:border-white/[0.06] p-5">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
              <span>3-Year Subscription Savings</span>
              <DollarSign className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">
              ${totalThreeYearSavingsUsd.toFixed(0)} Saved
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1.5">
              Cogify Stack: <strong className="text-zinc-900 dark:text-white">$0 Forever</strong> vs.{" "}
              <span className="line-through">${totalThreeYearSavingsUsd.toFixed(2)}</span> commercial licenses
            </p>
          </div>

          <div className="rounded-2xl bg-zinc-50 dark:bg-white/[0.025] border border-zinc-200/70 dark:border-white/[0.06] p-5">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
              <span>Total Disk Footprint</span>
              <HardDrive className="w-4 h-4 text-indigo-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-zinc-950 dark:text-white">
              {totalCogifyDiskMb.toFixed(1)} MB{" "}
              <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                (99% Smaller)
              </span>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1.5">
              Replaces <strong className="text-zinc-900 dark:text-white">{totalCompDiskMb.toLocaleString()} MB</strong> of commercial binaries &amp; daemons
            </p>
          </div>

          <div className="rounded-2xl bg-zinc-50 dark:bg-white/[0.025] border border-zinc-200/70 dark:border-white/[0.06] p-5">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
              <span>Unified Memory Usage</span>
              <Cpu className="w-4 h-4 text-cyan-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-zinc-950 dark:text-white">
              ~{totalCogifyRamMb} MB RAM
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1.5">
              Saves <strong className="text-emerald-600 dark:text-emerald-400">{(totalCompRamMb - totalCogifyRamMb).toLocaleString()} MB RAM</strong> vs. commercial equivalents (~{totalCompRamMb.toLocaleString()} MB)
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Quick-Inspect Comparison Preview */}
      <div className="rounded-3xl bg-white dark:bg-[#0b0f17] border border-zinc-200/90 dark:border-white/[0.08] p-6 sm:p-8 shadow-sm mb-12">
        <div className="flex flex-wrap items-center gap-2 pb-5 mb-6 border-b border-zinc-200/80 dark:border-white/[0.07]">
          {COMPARISON_GUIDES.map((guide) => {
            const isActive = guide.slug === activeGuide.slug;
            return (
              <button
                key={guide.slug}
                type="button"
                onClick={() => setActiveGuideSlug(guide.slug)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                  isActive
                    ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 shadow-sm"
                    : "bg-zinc-100 dark:bg-white/[0.04] text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
                }`}
              >
                <Image
                  src={guide.appIcon}
                  alt={guide.appShortName}
                  width={18}
                  height={18}
                  className="w-4.5 h-4.5 rounded object-contain"
                />
                <span>{guide.appShortName} vs. Competitors</span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              {activeGuide.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-950 dark:text-white mt-1">
              {activeGuide.h1Title}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mt-2.5">
              {activeGuide.verdictSummary}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link
                href={`/compare/${activeGuide.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-bold shadow-sm transition-all"
              >
                <span>Read Full {activeGuide.appShortName} Comparison</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href={activeGuide.downloadUrl}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-100 dark:bg-white/[0.06] hover:bg-zinc-200 dark:hover:bg-white/[0.1] text-zinc-900 dark:text-white text-xs sm:text-sm font-bold transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download ({activeGuide.cogifySpec.binarySize})</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-2xl bg-zinc-50 dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/[0.07] p-5 tabular-nums">
            <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
              Head-to-Head Snapshot
            </div>
            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <span className="font-bold text-zinc-950 dark:text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  {activeGuide.appShortName} (Cogify)
                </span>
                <span className="font-mono font-bold text-emerald-700 dark:text-emerald-300">
                  {activeGuide.cogifySpec.binarySize} • {activeGuide.cogifySpec.ramUsage} • $0
                </span>
              </div>

              {activeGuide.competitors.map((comp) => (
                <div
                  key={comp.name}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white dark:bg-white/[0.03] border border-zinc-200/70 dark:border-white/[0.05]"
                >
                  <span className="font-semibold text-zinc-700 dark:text-zinc-300">
                    {comp.name}
                  </span>
                  <span className="font-mono text-zinc-500 dark:text-zinc-400">
                    {comp.binarySize} • {comp.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* All 7 Detailed Comparison Guide Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {COMPARISON_GUIDES.map((guide) => (
          <Link
            key={guide.slug}
            href={`/compare/${guide.slug}`}
            className="group rounded-3xl bg-white dark:bg-[#0b0f17] border border-zinc-200/90 dark:border-white/[0.08] hover:border-indigo-500/50 dark:hover:border-indigo-400/50 p-6 transition-all flex flex-col justify-between shadow-xs hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-3">
                  <Image
                    src={guide.appIcon}
                    alt={guide.appName}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-xl object-contain"
                  />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block">
                      {guide.category}
                    </span>
                    <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 tabular-nums">
                      {guide.cogifySpec.binarySize} • {guide.cogifySpec.ramUsage}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-indigo-500 transition-colors shrink-0" />
              </div>

              <h3 className="text-lg font-extrabold text-zinc-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
                {guide.h1Title}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2.5 line-clamp-3 leading-relaxed">
                {guide.subtitle}
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-zinc-100 dark:border-white/[0.06] flex items-center justify-between text-xs font-bold">
              <span className="text-emerald-600 dark:text-emerald-400">
                100% Free vs. {guide.competitors[0].price}
              </span>
              <span className="text-indigo-600 dark:text-indigo-400 group-hover:translate-x-0.5 transition-transform">
                Compare Specs →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Real-Time Client-Side Web Studios Comparison Row */}
      {!compact && (
        <div className="mt-12 pt-12 border-t border-zinc-200/80 dark:border-white/[0.06]">
          <div className="mb-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              <Globe className="w-3.5 h-3.5" /> Zero-Upload Client-Side Web Studios
            </span>
            <h3 className="text-2xl font-extrabold text-zinc-950 dark:text-white mt-1">
              Cogify Web Studios vs. Cloud Subscription Portals
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {WEB_STUDIO_COMPARISONS.map((studio) => (
              <div
                key={studio.name}
                className="rounded-3xl bg-white dark:bg-[#0b0f17] border border-zinc-200/90 dark:border-white/[0.08] p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-[11px] font-bold">
                      {studio.badge}
                    </span>
                    <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                      {studio.vsLabel}
                    </span>
                  </div>
                  <h4 className="text-lg font-extrabold text-zinc-950 dark:text-white">
                    {studio.name}
                  </h4>
                  <p className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 mt-1">
                    {studio.cogifyMetrics}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
                    {studio.summary}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-zinc-100 dark:border-white/[0.06] flex items-center gap-4 text-xs font-bold">
                  <Link
                    href={studio.href}
                    className="text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1"
                  >
                    Architecture &amp; Overview <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href={studio.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-700 dark:text-zinc-300 hover:text-indigo-500 inline-flex items-center gap-1"
                  >
                    Launch Live Web Studio <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
