"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowUpRight,
  Download,
  ShieldCheck,
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
    badge: "Web Studio · biodata.cogify.me",
    vsLabel: "vs. Canva Pro ($120/yr) & Paid Matrimonial Portals",
    cogifyMetrics: "$0 Forever · 242 Templates · 9 Languages · Zero Server Upload",
    summary:
      "Paid biodata portals charge ₹299–₹999 per PDF download and store your family phone numbers, salary, and horoscope on cloud databases. Cogify's Biodata Studio renders 300-DPI PDF, DOCX & PNG files 100% inside your browser's Canvas/WebAssembly memory with built-in Vedic Kundali & Gun Milan.",
  },
  {
    name: "SSB Stage-2 Practice Studio",
    href: "/ssb",
    liveUrl: "https://ssb.cogify.me",
    badge: "Web Studio · ssb.cogify.me",
    vsLabel: "vs. ₹15,000+ Offline Coaching & Static PDF Workbooks",
    cogifyMetrics: "$0 Forever · 150+ Psych Dossiers · OIR, PPDT, TAT, WAT, SRT & GTO",
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
      className="max-w-[920px] mx-auto px-6 py-14 sm:py-16"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-black/45 dark:text-white/45 mb-2">
            Empirical macOS Benchmark Suite
          </p>
          <h2
            id="comparisons-heading"
            className="text-[28px] sm:text-[36px] font-semibold tracking-[-0.03em] text-black dark:text-white leading-tight"
          >
            Native Swift &amp; C++20 vs.{" "}
            <span className="font-serif-accent text-[1.06em]">bloated subscriptions.</span>
          </h2>
          <p className="text-[14px] sm:text-[15px] text-black/60 dark:text-white/60 mt-2 max-w-2xl leading-relaxed">
            See how Cogify&apos;s lightweight macOS workstations compare against Adobe Acrobat Pro, Little Snitch, iStat Menus, BetterDisplay, Paste, and CleanMyMac X.
          </p>
        </div>

        {compact && (
          <Link
            href="/compare"
            className="helumi-pill px-5 py-2.5 text-[13px] font-medium inline-flex items-center gap-2 shrink-0 self-start md:self-auto"
          >
            <span>All 7 Comparisons</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        )}
      </div>

      {/* Interactive Stack Savings & Resource Calculator */}
      <div className="rounded-[24px] bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/[0.09] p-6 sm:p-8 shadow-sm mb-10 tabular-nums">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-6 border-b border-black/[0.07] dark:border-white/[0.08]">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-black/45 dark:text-white/45 block">
              Interactive Apple Silicon Stack Calculator
            </span>
            <h3 className="text-[17px] sm:text-[19px] font-semibold text-black dark:text-white mt-0.5">
              Toggle the macOS utilities in your daily workflow:
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
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-medium transition-all cursor-pointer ${
                    isSelected
                      ? "bg-black text-white dark:bg-white dark:text-black"
                      : "bg-[#f5f5f5] dark:bg-white/[0.05] text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{guide.appShortName}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3 Real-Time Comparison Readout Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-[18px] bg-[#f5f5f5] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] p-5">
            <div className="text-[11px] font-medium uppercase tracking-wider text-black/45 dark:text-white/45 mb-1.5">
              3-Year Subscription Savings
            </div>
            <div className="text-[24px] sm:text-[28px] font-semibold text-emerald-700 dark:text-emerald-400">
              ${totalThreeYearSavingsUsd.toFixed(0)} Saved
            </div>
            <p className="text-[12px] text-black/60 dark:text-white/60 mt-1">
              Cogify: <strong className="text-black dark:text-white">$0 Forever</strong> vs.{" "}
              <span className="line-through">${totalThreeYearSavingsUsd.toFixed(2)}</span>
            </p>
          </div>

          <div className="rounded-[18px] bg-[#f5f5f5] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] p-5">
            <div className="text-[11px] font-medium uppercase tracking-wider text-black/45 dark:text-white/45 mb-1.5">
              Total Disk Footprint
            </div>
            <div className="text-[24px] sm:text-[28px] font-semibold text-black dark:text-white">
              {totalCogifyDiskMb.toFixed(1)} MB
            </div>
            <p className="text-[12px] text-black/60 dark:text-white/60 mt-1">
              Replaces <strong className="text-black dark:text-white">{totalCompDiskMb.toLocaleString()} MB</strong> of bloated binaries
            </p>
          </div>

          <div className="rounded-[18px] bg-[#f5f5f5] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] p-5">
            <div className="text-[11px] font-medium uppercase tracking-wider text-black/45 dark:text-white/45 mb-1.5">
              Unified Memory Usage
            </div>
            <div className="text-[24px] sm:text-[28px] font-semibold text-black dark:text-white">
              ~{totalCogifyRamMb} MB RAM
            </div>
            <p className="text-[12px] text-black/60 dark:text-white/60 mt-1">
              Saves <strong className="text-emerald-700 dark:text-emerald-400">{(totalCompRamMb - totalCogifyRamMb).toLocaleString()} MB RAM</strong> vs. ~{totalCompRamMb.toLocaleString()} MB
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Quick-Inspect Comparison Preview */}
      <div className="rounded-[24px] bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/[0.09] p-6 sm:p-8 shadow-sm mb-10">
        <div className="flex flex-wrap items-center gap-2 pb-5 mb-6 border-b border-black/[0.07] dark:border-white/[0.08]">
          {COMPARISON_GUIDES.map((guide) => {
            const isActive = guide.slug === activeGuide.slug;
            return (
              <button
                key={guide.slug}
                type="button"
                onClick={() => setActiveGuideSlug(guide.slug)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-[12px] font-medium transition-all cursor-pointer ${
                  isActive
                    ? "bg-black text-white dark:bg-white dark:text-black shadow-xs"
                    : "bg-[#f5f5f5] dark:bg-white/[0.04] text-black/65 dark:text-white/65 hover:text-black dark:hover:text-white"
                }`}
              >
                <Image
                  src={guide.appIcon}
                  alt={guide.appShortName}
                  width={18}
                  height={18}
                  className="w-4.5 h-4.5 rounded object-contain"
                />
                <span>{guide.appShortName}</span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7">
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-black/45 dark:text-white/45">
              {activeGuide.category}
            </span>
            <h3 className="text-[20px] sm:text-[24px] font-semibold tracking-[-0.02em] text-black dark:text-white mt-1">
              {activeGuide.h1Title}
            </h3>
            <p className="text-[14px] text-black/65 dark:text-white/65 leading-relaxed mt-2.5">
              {activeGuide.verdictSummary}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link
                href={`/compare/${activeGuide.slug}`}
                className="helumi-pill px-5 py-2.5 text-[13px] font-medium inline-flex items-center gap-2"
              >
                <span>Read Full {activeGuide.appShortName} Comparison</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href={activeGuide.downloadUrl}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#f5f5f5] dark:bg-white/[0.06] hover:bg-black/[0.07] dark:hover:bg-white/[0.1] text-black dark:text-white text-[13px] font-medium transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download ({activeGuide.cogifySpec.binarySize})</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-[18px] bg-[#f5f5f5] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] p-5 tabular-nums">
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-black/45 dark:text-white/45 mb-3">
              Head-to-Head Snapshot
            </div>
            <div className="space-y-2.5 text-[12px]">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <span className="font-semibold text-black dark:text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  {activeGuide.appShortName} (Cogify)
                </span>
                <span className="font-mono font-semibold text-emerald-700 dark:text-emerald-300">
                  {activeGuide.cogifySpec.binarySize} · {activeGuide.cogifySpec.ramUsage} · $0
                </span>
              </div>

              {activeGuide.competitors.map((comp) => (
                <div
                  key={comp.name}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white dark:bg-[#141417] border border-black/[0.06] dark:border-white/[0.06]"
                >
                  <span className="font-medium text-black/75 dark:text-white/75">
                    {comp.name}
                  </span>
                  <span className="font-mono text-black/50 dark:text-white/50">
                    {comp.binarySize} · {comp.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* All 7 Detailed Comparison Guide Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {COMPARISON_GUIDES.map((guide) => (
          <Link
            key={guide.slug}
            href={`/compare/${guide.slug}`}
            className="group rounded-[22px] bg-white dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.08] hover:border-black/20 dark:hover:border-white/20 p-6 transition-all flex flex-col justify-between shadow-xs"
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
                    <span className="text-[11px] font-medium uppercase tracking-wider text-black/45 dark:text-white/45 block">
                      {guide.category}
                    </span>
                    <span className="text-[12px] font-mono text-black/60 dark:text-white/60 tabular-nums">
                      {guide.cogifySpec.binarySize} · {guide.cogifySpec.ramUsage}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-black/35 dark:text-white/35 group-hover:text-black dark:group-hover:text-white transition-colors shrink-0" />
              </div>

              <h3 className="text-[17px] font-semibold tracking-[-0.015em] text-black dark:text-white leading-snug">
                {guide.h1Title}
              </h3>

              <p className="text-[13px] text-black/60 dark:text-white/60 mt-2 line-clamp-3 leading-relaxed">
                {guide.subtitle}
              </p>
            </div>

            <div className="mt-5 pt-3.5 border-t border-black/[0.06] dark:border-white/[0.07] flex items-center justify-between text-[12px] font-medium">
              <span className="text-emerald-700 dark:text-emerald-400">
                Free Forever vs. {guide.competitors[0].price}
              </span>
              <span className="text-black dark:text-white group-hover:translate-x-0.5 transition-transform">
                Compare Specs →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Real-Time Client-Side Web Studios Comparison Row */}
      {!compact && (
        <div className="mt-12 pt-12 border-t border-black/[0.07] dark:border-white/[0.08]">
          <div className="mb-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-black/45 dark:text-white/45 mb-1">
              Zero-Upload Client-Side Web Studios
            </p>
            <h3 className="text-[22px] font-semibold tracking-[-0.02em] text-black dark:text-white">
              Cogify Web Studios vs. Cloud Subscription Portals
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {WEB_STUDIO_COMPARISONS.map((studio) => (
              <div
                key={studio.name}
                className="rounded-[22px] bg-white dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.08] p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-full bg-[#f5f5f5] dark:bg-white/[0.06] text-black/75 dark:text-white/75 text-[11px] font-medium">
                      {studio.badge}
                    </span>
                    <span className="text-[11px] font-mono text-black/45 dark:text-white/45">
                      {studio.vsLabel}
                    </span>
                  </div>
                  <h4 className="text-[18px] font-semibold text-black dark:text-white">
                    {studio.name}
                  </h4>
                  <p className="text-[12px] font-mono font-medium text-emerald-700 dark:text-emerald-400 mt-1">
                    {studio.cogifyMetrics}
                  </p>
                  <p className="text-[13px] text-black/60 dark:text-white/60 mt-3 leading-relaxed">
                    {studio.summary}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-black/[0.06] dark:border-white/[0.07] flex items-center gap-4 text-[12px] font-medium">
                  <Link
                    href={studio.href}
                    className="text-black dark:text-white hover:underline inline-flex items-center gap-1"
                  >
                    Architecture &amp; Overview <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href={studio.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white inline-flex items-center gap-1"
                  >
                    Launch Live Studio <ArrowUpRight className="w-3.5 h-3.5" />
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
