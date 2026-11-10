/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  ScanText,
  Globe,
  LayoutGrid,
  Trash2,
  CopyCheck,
  FolderKanban,
  FileEdit,
  Info,
  AppWindowMac,
  Palette,
  Code2,
  Check,
  X,
  ChevronDown,
  Copy,
  ExternalLink,
  Sparkles,
  FileText,
  Command,
} from "lucide-react";
import { AppleLogoIcon, GitHubIcon } from "@/components/ui/platform-icons";
import { OtherAppsShowcase } from "@/components/products/other-apps-showcase";
import {
  FINDY_WORKFLOW_TABS,
  NATURAL_QUERY_DEMOS,
  FINDY_WHAT_YOU_GET_LIST,
  FINDY_FEATURE_SPECS,
  FINDY_PRIMARY_BENTO_CARDS,
  FINDY_COMPARISON_ROWS,
  FINDY_SHORTCUTS,
  FINDY_FAQS,
  type FindyWhatYouGetItem,
} from "./findy-data";

const GITHUB_REPO_URL = "https://github.com/Shubham-sharma8/findy";
const GITHUB_RELEASE_URL =
  "https://github.com/Shubham-sharma8/findy/releases/tag/v1.2";
const DIRECT_DMG_HREF = "/Findy.dmg";
const SHA256_HASH =
  "7773b4b2c2bf61fb3b3ee2c63e92f9073654c500b86d0df359cdc1c488259cde";

function FeatureLineIcon({
  type,
}: {
  type: FindyWhatYouGetItem["iconType"];
}) {
  const cls = "w-4 h-4 text-[#111110]/70 dark:text-white/75 shrink-0";
  switch (type) {
    case "search":
      return <Search className={cls} strokeWidth={1.75} />;
    case "ocr":
      return <ScanText className={cls} strokeWidth={1.75} />;
    case "globe":
      return <Globe className={cls} strokeWidth={1.75} />;
    case "treemap":
      return <LayoutGrid className={cls} strokeWidth={1.75} />;
    case "trash":
      return <Trash2 className={cls} strokeWidth={1.75} />;
    case "duplicate":
      return <CopyCheck className={cls} strokeWidth={1.75} />;
    case "shelf":
      return <FolderKanban className={cls} strokeWidth={1.75} />;
    case "rename":
      return <FileEdit className={cls} strokeWidth={1.75} />;
    case "inspector":
      return <Info className={cls} strokeWidth={1.75} />;
    case "menubar":
      return <AppWindowMac className={cls} strokeWidth={1.75} />;
    case "theme":
      return <Palette className={cls} strokeWidth={1.75} />;
    case "opensource":
      return <Code2 className={cls} strokeWidth={1.75} />;
  }
}

export function FindyLandingView() {
  const [selectedQueryId, setSelectedQueryId] = useState<string>(
    NATURAL_QUERY_DEMOS[0].id
  );
  const [activeTabId, setActiveTabId] = useState<string>(
    FINDY_WORKFLOW_TABS[0].id
  );
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [copiedSha, setCopiedSha] = useState(false);

  const selectedQuery =
    NATURAL_QUERY_DEMOS.find((q) => q.id === selectedQueryId) ||
    NATURAL_QUERY_DEMOS[0];
  const activeTab =
    FINDY_WORKFLOW_TABS.find((t) => t.id === activeTabId) ||
    FINDY_WORKFLOW_TABS[0];

  const handleCopySha = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(SHA256_HASH);
      setCopiedSha(true);
      setTimeout(() => setCopiedSha(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F7F7] dark:bg-[#0b0b0d] text-[#111110] dark:text-[#f5f5f7] selection:bg-emerald-500/20">
      {/* =====================================================================
          SECTION 0: Floating Pill Navigation Bar (Sticky Top Center)
          ===================================================================== */}
      <header className="sticky top-3 z-50 flex justify-center px-3 pt-3 pointer-events-none">
        <nav
          aria-label="Findy Navigation"
          style={{
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
          className="pointer-events-auto inline-flex items-center gap-0.5 sm:gap-1 p-1.5 rounded-full bg-white/90 dark:bg-[#161618]/90 border border-[#E6E6E4] dark:border-white/[0.1] shadow-[0_4px_20px_rgba(0,0,0,0.05)] text-[13px] whitespace-nowrap max-w-full overflow-x-auto"
        >
          <Link
            href="/"
            title="Back to Cogify Suite"
            className="h-8 px-2.5 rounded-full inline-flex items-center gap-1 text-[#111110]/55 dark:text-white/55 hover:text-[#111110] dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors text-[12px]"
          >
            <span>← cogify</span>
          </Link>

          <span
            className="h-3.5 w-[1px] bg-[#E6E6E4] dark:bg-white/10 mx-0.5"
            aria-hidden="true"
          />

          <a
            href="#findy"
            className="h-8 px-3 rounded-full inline-flex items-center gap-1.5 font-semibold bg-[#F2F2F0] dark:bg-white/[0.12] text-[#111110] dark:text-white transition-colors"
          >
            <Image
              src="/brand/Findy/icon-sm.webp"
              alt="Findy macOS app icon"
              width={18}
              height={18}
              className="w-4 h-4 rounded object-contain"
            />
            <span>findy</span>
          </a>

          <a
            href="#workflows"
            className="h-8 px-2.5 sm:px-3 rounded-full inline-flex items-center text-[#111110]/70 dark:text-white/70 hover:text-[#111110] dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors"
          >
            features
          </a>
          <a
            href="#how-it-works"
            className="h-8 px-2.5 sm:px-3 rounded-full inline-flex items-center text-[#111110]/70 dark:text-white/70 hover:text-[#111110] dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors"
          >
            how it works
          </a>
          <a
            href="#shortcuts"
            className="hidden md:inline-flex h-8 px-2.5 sm:px-3 rounded-full items-center text-[#111110]/70 dark:text-white/70 hover:text-[#111110] dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors"
          >
            shortcuts
          </a>
          <a
            href="#open-source"
            className="h-8 px-2.5 sm:px-3 rounded-full inline-flex items-center gap-1 text-emerald-700 dark:text-emerald-300 font-medium hover:bg-emerald-500/10 transition-colors"
          >
            <span>open source</span>
          </a>
          <a
            href="#pricing"
            className="hidden sm:inline-flex h-8 px-3 rounded-full items-center text-[#111110]/70 dark:text-white/70 hover:text-[#111110] dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors"
          >
            pricing
          </a>
          <a
            href="#faq"
            className="h-8 px-2.5 sm:px-3 rounded-full inline-flex items-center text-[#111110]/70 dark:text-white/70 hover:text-[#111110] dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors"
          >
            faq
          </a>
          <a
            href={DIRECT_DMG_HREF}
            className="h-8 px-3.5 rounded-full inline-flex items-center gap-1.5 bg-[#111110] dark:bg-white text-white dark:text-[#111110] font-medium hover:opacity-90 transition-opacity ml-0.5"
          >
            <AppleLogoIcon className="w-3.5 h-3.5 shrink-0" />
            <span>download</span>
          </a>
        </nav>
      </header>

      {/* =====================================================================
          SECTION 1: Hero + Interactive Plain-English Query Parser & Overview
          ===================================================================== */}
      <section
        id="findy"
        className="pt-14 sm:pt-20 pb-16 sm:pb-24 px-5 max-w-[1080px] mx-auto"
      >
        <div className="max-w-[760px] mx-auto text-center">
          {/* Version, On-Device Privacy & Open Source Pill */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#161618] border border-[#E6E6E4] dark:border-white/10 text-[12px] text-[#111110]/70 dark:text-white/70 mb-6 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-[#111110] dark:text-white">
              findy v1.2 (build 2) · 100% on-device
            </span>
            <span className="text-[#111110]/30 dark:text-white/30">·</span>
            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-emerald-700 dark:text-emerald-400 hover:underline"
            >
              <GitHubIcon className="w-3.5 h-3.5" />
              <span>open source (MIT)</span>
            </a>
            <span className="text-[#111110]/30 dark:text-white/30">·</span>
            <a
              href={GITHUB_RELEASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#111110] dark:text-white underline underline-offset-4 hover:opacity-80"
            >
              github release v1.2 →
            </a>
          </div>

          {/* Headline: meet findy */}
          <h1 className="text-[44px] sm:text-[64px] md:text-[72px] font-semibold tracking-[-0.04em] leading-[1.02] text-[#111110] dark:text-white flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
            <span>meet findy</span>
            <span className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white dark:bg-[#18181b] border border-[#E6E6E4] dark:border-white/10 shadow-[0_6px_20px_rgba(0,0,0,0.06)] p-1.5">
              <Image
                src="/brand/Findy/icon.webp"
                alt="Findy macOS app icon — playful folder with magnifying glass"
                width={56}
                height={56}
                className="w-full h-full object-contain rounded-xl"
              />
            </span>
          </h1>

          {/* Subheadline: [ plain-english file search ] & space lens for your mac. */}
          <p className="mt-5 text-[20px] sm:text-[26px] leading-[1.38] tracking-[-0.02em] text-[#111110]/80 dark:text-white/80 max-w-[660px] mx-auto font-normal">
            <span className="marker font-serif italic text-[23px] sm:text-[30px] text-[#111110] dark:text-white px-2.5 py-0.5">
              plain-english file search
            </span>
            , space lens treemap &amp; non-destructive cleanup for your mac.
          </p>

          {/* Primary CTA: [  download for mac ] + Open Source GitHub + GitHub Release */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap">
            <a
              href={DIRECT_DMG_HREF}
              className="inline-flex items-center justify-center gap-2.5 h-12 px-7 rounded-full bg-[#111110] dark:bg-white text-white dark:text-[#111110] text-[15px] font-medium shadow-[0_10px_28px_rgba(0,0,0,0.14)] hover:scale-[1.015] active:scale-[0.99] transition-all"
            >
              <AppleLogoIcon className="w-4 h-4 shrink-0 -mt-0.5" />
              <span>download for mac (v1.2 · 4.5 MB)</span>
            </a>
            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-12 px-5 rounded-full bg-white dark:bg-[#161618] border border-[#E6E6E4] dark:border-white/10 text-[13.5px] font-medium text-[#111110]/85 dark:text-white/85 hover:text-[#111110] dark:hover:text-white hover:border-black/25 transition-colors"
            >
              <GitHubIcon className="w-4 h-4 shrink-0" />
              <span>open source on github</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
            <a
              href={GITHUB_RELEASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 h-12 px-5 rounded-full bg-white dark:bg-[#161618] border border-[#E6E6E4] dark:border-white/10 text-[13px] text-[#111110]/75 dark:text-white/75 hover:text-[#111110] dark:hover:text-white hover:border-black/20 transition-colors"
            >
              <span>v1.2 release notes &amp; .dmg</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>

          {/* Meta Microcopy */}
          <p className="mt-4 text-[12.5px] text-[#111110]/55 dark:text-white/55 tracking-[-0.01em]">
            100% open source (MIT) · plain-english filter chips (⌘K) · space
            lens treemap (⌘4) · trash-safe clean up (⌘5) · sha-256 + vision
            duplicates (⌘6) · downloaded from · file shelf (⌘7) · local vision
            ocr (⌘I)
          </p>

          {/* Featured on TryMacApps Badge */}
          <div className="mt-6 flex justify-center">
            <a
              href="https://www.trymacapps.com"
              target="_blank"
              rel="noopener"
              className="inline-block hover:opacity-90 transition-opacity"
            >
              <img
                src="https://www.trymacapps.com/badge.png"
                alt="Featured on TryMacApps"
                width="200"
                height="67"
              />
            </a>
          </div>
        </div>

        {/* Interactive Hero Simulator: Plain-English Search Query Parser */}
        <div className="mt-12 sm:mt-14 rounded-[26px] bg-white dark:bg-[#141417] border border-[#E6E6E4] dark:border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.06)] p-5 sm:p-7">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E6E6E4] dark:border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57] border border-black/10" />
              <span className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-black/10" />
              <span className="w-3 h-3 rounded-full bg-[#28C840] border border-black/10" />
              <span className="ml-2 text-[12.5px] font-semibold text-[#111110] dark:text-white flex items-center gap-1.5">
                <Search className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>
                  Try Plain-English Search Parser (Sources/Findy/NaturalSearch.swift)
                </span>
              </span>
            </div>
            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
              ⌘K · 100% On-Device Token Parser
            </span>
          </div>

          {/* Clickable Query Pills */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-[12px] font-medium text-[#111110]/55 dark:text-white/55 mr-1">
              Click a natural query:
            </span>
            {NATURAL_QUERY_DEMOS.map((demo) => {
              const active = demo.id === selectedQuery.id;
              return (
                <button
                  key={demo.id}
                  type="button"
                  onClick={() => setSelectedQueryId(demo.id)}
                  className={`px-3.5 py-1.5 rounded-full text-[12.5px] font-mono transition-all ${
                    active
                      ? "bg-[#111110] text-white dark:bg-white dark:text-[#111110] font-semibold shadow-xs"
                      : "bg-[#F7F7F7] dark:bg-white/[0.05] border border-[#E6E6E4] dark:border-white/10 text-[#111110]/75 dark:text-white/75 hover:text-[#111110] dark:hover:text-white"
                  }`}
                >
                  &ldquo;{demo.query}&rdquo;
                </button>
              );
            })}
          </div>

          {/* Active Query Bar + Live "Understood as:" Filter Chips */}
          <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            <div className="lg:col-span-7 rounded-2xl bg-[#F7F7F7] dark:bg-[#19191d] border border-[#E6E6E4] dark:border-white/10 p-4 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#121215] border border-[#E6E6E4] dark:border-white/10">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Search className="w-4 h-4 text-[#111110]/45 dark:text-white/45 shrink-0" />
                    <span className="font-mono text-[14px] font-semibold text-[#111110] dark:text-white truncate">
                      {selectedQuery.query}
                    </span>
                  </div>
                  <kbd className="px-2 py-0.5 rounded bg-[#F7F7F7] dark:bg-white/10 border border-[#E6E6E4] dark:border-white/10 font-mono text-[11px] text-[#111110]/55 dark:text-white/55 shrink-0">
                    ⌘K
                  </kbd>
                </div>

                {/* Understood as: Chips */}
                <div className="mt-3.5 flex flex-wrap items-center gap-2">
                  <span className="text-[11.5px] font-semibold uppercase tracking-wider text-[#111110]/50 dark:text-white/50 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>Understood as:</span>
                  </span>
                  {selectedQuery.chips.map((chip) => (
                    <span
                      key={chip.label}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/12 text-emerald-800 dark:text-emerald-300 border border-emerald-500/25 text-[12px] font-semibold"
                    >
                      <span>{chip.label}</span>
                      <span className="text-[10px] opacity-60">✕</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Generated Spotlight + Local Walker Predicate */}
              <div className="pt-3 border-t border-[#E6E6E4] dark:border-white/10">
                <div className="flex items-center justify-between text-[11px] text-[#111110]/50 dark:text-white/50 mb-1">
                  <span>Compiled Hybrid Spotlight + Local Walker Query</span>
                  <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                    {selectedQuery.resultCount}
                  </span>
                </div>
                <code className="block text-[11.5px] font-mono text-[#111110]/75 dark:text-white/75 bg-white dark:bg-black/30 px-3 py-2 rounded-xl border border-[#E6E6E4] dark:border-white/10 overflow-x-auto">
                  {selectedQuery.spotlightPredicate}
                </code>
              </div>
            </div>

            {/* Right 5 Columns: Instant Matched Results */}
            <div className="lg:col-span-5 rounded-2xl bg-[#F7F7F7] dark:bg-[#19191d] border border-[#E6E6E4] dark:border-white/10 p-4 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#111110]/50 dark:text-white/50 pb-1.5 border-b border-[#E6E6E4] dark:border-white/10">
                  <span>Instant On-Device Matches</span>
                  <span>Space = Quick Look · ⌘I = OCR</span>
                </div>
                {selectedQuery.sampleMatches.map((item) => (
                  <div
                    key={item.name}
                    className="p-2.5 rounded-xl bg-white dark:bg-[#121215] border border-[#E6E6E4] dark:border-white/10 flex items-center justify-between gap-2.5"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <FileText className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <div className="min-w-0">
                        <div className="text-[12.5px] font-semibold text-[#111110] dark:text-white truncate">
                          {item.name}
                        </div>
                        <div className="text-[11px] text-[#111110]/55 dark:text-white/55 truncate">
                          {item.path} · {item.date}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end shrink-0">
                      <span className="font-mono text-[11.5px] font-medium text-[#111110] dark:text-white">
                        {item.size}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/12 text-emerald-700 dark:text-emerald-300 font-semibold">
                        {item.badge}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Full High-Resolution Findy Home Overview Showcase */}
        <figure className="mt-6 rounded-[24px] bg-white dark:bg-[#141417] border border-[#E6E6E4] dark:border-white/10 p-3 sm:p-4 shadow-[0_12px_36px_rgba(0,0,0,0.05)] overflow-hidden">
          <Image
            src="/brand/Findy/01-findy-home-overview.webp"
            alt="Findy Home Overview showing Playful theme category cards, 8 indexed Mac home folders, and 230,275 files indexed on-device"
            title="Findy — Instant Plain-English File Search & Space Lens for macOS"
            width={1440}
            height={1040}
            priority
            className="w-full h-auto rounded-[18px] object-cover"
          />
          <figcaption className="mt-2.5 text-center text-[12px] text-[#111110]/55 dark:text-white/55">
            Findy Home Overview (⌘1) — indexing{" "}
            <strong className="text-[#111110] dark:text-white">
              230,275 files across 8 Mac home folders
            </strong>{" "}
            with instant category cards, Smart Clean Up, and Space Lens.
          </figcaption>
        </figure>
      </section>

      {/* =====================================================================
          SECTION 2: Interactive 8-Tab Workflow Showcase ("every tool your finder is missing.")
          ===================================================================== */}
      <section
        id="workflows"
        className="py-16 sm:py-24 px-5 max-w-[1080px] mx-auto"
      >
        <div className="text-center max-w-[680px] mx-auto">
          <h2 className="text-[32px] sm:text-[44px] font-semibold tracking-[-0.035em] leading-[1.08]">
            every tool your finder is missing.
          </h2>
          <p className="mt-3 text-[17px] sm:text-[19px] text-[#111110]/65 dark:text-white/65">
            search by memory, map disk space, clean clutter safely, and read
            text inside screenshots.
          </p>

          {/* Interactive Tab Pills */}
          <div
            role="tablist"
            aria-label="Findy Core Workflows"
            className="mt-7 inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-3xl bg-white dark:bg-[#141417] border border-[#E6E6E4] dark:border-white/10 shadow-xs"
          >
            {FINDY_WORKFLOW_TABS.map((tab) => {
              const isSelected = tab.id === activeTab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`h-9 px-3.5 rounded-full text-[12.5px] font-medium transition-all inline-flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-[#111110] text-white dark:bg-white dark:text-[#111110] shadow-xs"
                      : "text-[#111110]/65 dark:text-white/65 hover:text-[#111110] dark:hover:text-white"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`font-mono text-[10.5px] px-1.5 py-0.2 rounded ${
                      isSelected
                        ? "bg-white/20 dark:bg-black/15"
                        : "bg-black/[0.04] dark:bg-white/[0.06]"
                    }`}
                  >
                    {tab.shortcut}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Workflow Card */}
        <div className="mt-8 rounded-[28px] bg-white dark:bg-[#141417] border border-[#E6E6E4] dark:border-white/10 p-6 sm:p-8 shadow-[0_16px_48px_rgba(0,0,0,0.05)] grid grid-cols-1 lg:grid-cols-12 gap-7 items-center">
          <div className="lg:col-span-5 space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-[11.5px] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>{activeTab.badgeText}</span>
              </div>
              <a
                href={`${GITHUB_REPO_URL}/blob/main/${activeTab.sourceFile}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#F7F7F7] dark:bg-white/10 border border-[#E6E6E4] dark:border-white/10 font-mono text-[11px] text-[#111110]/70 dark:text-white/70 hover:text-[#111110] dark:hover:text-white"
              >
                <span>{activeTab.sourceFile}</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>

            <h3 className="text-[24px] sm:text-[28px] font-semibold tracking-[-0.025em] leading-[1.18]">
              {activeTab.headline}
            </h3>

            <p className="text-[14.5px] leading-[1.6] text-[#111110]/70 dark:text-white/70">
              {activeTab.subline}
            </p>

            {/* 3 Workflow Metrics */}
            <div className="grid grid-cols-3 gap-2.5 pt-1">
              {activeTab.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl bg-[#F7F7F7] dark:bg-white/[0.04] border border-[#E6E6E4] dark:border-white/10 p-3"
                >
                  <div className="text-[11px] text-[#111110]/55 dark:text-white/55">
                    {m.label}
                  </div>
                  <div
                    className={`mt-0.5 text-[15px] sm:text-[16.5px] font-semibold tracking-tight ${
                      m.accent
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-[#111110] dark:text-white"
                    }`}
                  >
                    {m.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Active Tab Highlights */}
            <div className="rounded-2xl bg-[#F7F7F7] dark:bg-white/[0.03] border border-[#E6E6E4] dark:border-white/10 p-3.5 space-y-2.5">
              {activeTab.highlights.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start justify-between gap-2 text-[12.5px] py-1 border-b last:border-b-0 border-[#E6E6E4]/70 dark:border-white/5 pb-2 last:pb-0"
                >
                  <div className="min-w-0">
                    <div className="font-semibold text-[#111110] dark:text-white">
                      {item.title}
                    </div>
                    <div className="text-[11.5px] text-[#111110]/60 dark:text-white/60 leading-[1.45] mt-0.5">
                      {item.detail}
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/12 text-emerald-700 dark:text-emerald-300 text-[10.5px] font-semibold shrink-0">
                    {item.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: High-Resolution Editorial Screenshot */}
          <div className="lg:col-span-7">
            <div className="rounded-[22px] bg-[#F7F7F7] dark:bg-[#1a1a1e] border border-[#E6E6E4] dark:border-white/10 p-2.5 overflow-hidden">
              <Image
                src={activeTab.visualImage}
                alt={activeTab.visualAlt}
                title={activeTab.headline}
                width={1200}
                height={866}
                loading="lazy"
                className="w-full h-auto rounded-[16px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: Editorial Numbered Walkthrough (1 through 4)
          ===================================================================== */}
      <section
        id="how-it-works"
        className="py-16 sm:py-24 px-5 max-w-[680px] mx-auto"
      >
        {/* [ 1 ] what it is */}
        <div className="space-y-4">
          <div className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-md bg-white dark:bg-white/10 border border-[#E6E6E4] dark:border-white/15 font-mono text-[12px] text-[#111110]/70 dark:text-white/70">
            [ 1 ]
          </div>
          <h2 className="text-[28px] sm:text-[34px] font-semibold tracking-[-0.03em] leading-[1.15]">
            what it is
          </h2>
          <div className="space-y-3.5 text-[17px] sm:text-[18.5px] leading-[1.6] text-[#111110]/80 dark:text-white/80">
            <p className="text-[#111110] dark:text-white font-medium">
              an instant plain-english file search, storage treemap, and
              non-destructive cleanup workspace for macOS.
            </p>
            <p>
              macOS Finder wasn&apos;t built for how we work today, and
              Spotlight hides results inside a tiny floating menu that vanishes
              the moment you click away.
            </p>
            <p>
              <strong className="text-[#111110] dark:text-white">findy</strong>{" "}
              is a{" "}
              <code className="px-1.5 py-0.5 rounded bg-white dark:bg-white/10 border border-[#E6E6E4] dark:border-white/10 font-mono text-[15px]">
                4.5 MB
              </code>{" "}
              native Swift &amp; SwiftUI app that indexes your home folders (
              <code className="font-mono text-[14.5px]">~/Downloads</code>,{" "}
              <code className="font-mono text-[14.5px]">~/Desktop</code>,{" "}
              <code className="font-mono text-[14.5px]">~/Documents</code>,{" "}
              <code className="font-mono text-[14.5px]">~/Pictures</code>,{" "}
              <code className="font-mono text-[14.5px]">~/Movies</code>,{" "}
              <code className="font-mono text-[14.5px]">~/Music</code>,{" "}
              <code className="font-mono text-[14.5px]">/Applications</code>,
              and <code className="font-mono text-[14.5px]">iCloud Drive</code>)
              100% on-device — and is completely open source under the{" "}
              <a
                href={GITHUB_REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 text-[#111110] dark:text-white font-medium"
              >
                MIT License on GitHub
              </a>
              .
            </p>
          </div>
        </div>

        {/* [ 2 ] why it's different */}
        <div className="mt-16 space-y-4">
          <div className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-md bg-white dark:bg-white/10 border border-[#E6E6E4] dark:border-white/15 font-mono text-[12px] text-[#111110]/70 dark:text-white/70">
            [ 2 ]
          </div>
          <h2 className="text-[28px] sm:text-[34px] font-semibold tracking-[-0.03em] leading-[1.15]">
            why it&apos;s different
          </h2>
          <div className="space-y-3.5 text-[17px] sm:text-[18.5px] leading-[1.6] text-[#111110]/80 dark:text-white/80">
            <p>
              most file tools force you to remember exact filenames, and most
              Mac cleaners charge a monthly subscription or risk deleting files
              permanently.
            </p>
            <p>
              findy translates how you naturally think into live{" "}
              <code className="px-1.5 py-0.5 rounded bg-white dark:bg-white/10 border border-[#E6E6E4] dark:border-white/10 font-mono text-[14px]">
                Understood as:
              </code>{" "}
              filter chips, reads text inside screenshots with Apple Vision OCR,
              remembers which website every download came from, and only moves
              clutter to{" "}
              <strong className="text-[#111110] dark:text-white">
                macOS Trash
              </strong>{" "}
              so every action is 100% reversible:
            </p>
          </div>

          {/* 3 Stat Pills */}
          <div className="pt-2 flex flex-wrap gap-2.5">
            <div className="px-4 py-2.5 rounded-full bg-white dark:bg-[#141417] border border-[#E6E6E4] dark:border-white/10 text-[13.5px] font-medium shadow-2xs">
              <strong className="text-emerald-600 dark:text-emerald-400">
                100% on-device
              </strong>{" "}
              Vision OCR &amp; search
            </div>
            <div className="px-4 py-2.5 rounded-full bg-white dark:bg-[#141417] border border-[#E6E6E4] dark:border-white/10 text-[13.5px] font-medium shadow-2xs">
              <strong className="text-[#111110] dark:text-white">4.5 MB</strong>{" "}
              universal native binary
            </div>
            <div className="px-4 py-2.5 rounded-full bg-white dark:bg-[#141417] border border-[#E6E6E4] dark:border-white/10 text-[13.5px] font-medium shadow-2xs">
              <strong className="text-[#111110] dark:text-white">
                0 cloud calls
              </strong>{" "}
              · 0 telemetry
            </div>
          </div>
        </div>

        {/* [ 3 ] how it works */}
        <div className="mt-16 space-y-4">
          <div className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-md bg-white dark:bg-white/10 border border-[#E6E6E4] dark:border-white/15 font-mono text-[12px] text-[#111110]/70 dark:text-white/70">
            [ 3 ]
          </div>
          <h2 className="text-[28px] sm:text-[34px] font-semibold tracking-[-0.03em] leading-[1.15]">
            how it works
          </h2>
          <div className="space-y-3 pt-1">
            {[
              {
                step: "01",
                text: "install findy.dmg in 3 seconds. findy indexes your 8 mac home folders locally using a hybrid Spotlight + concurrent FileManager engine.",
              },
              {
                step: "02",
                text: "press ⌘K (or ⌥Space anywhere) and type how you think — 'pdfs this week over 1mb', 'screenshots from today', or text inside an image.",
              },
              {
                step: "03",
                text: "explore Space Lens (⌘4), reclaim gigabytes in Clean Up (⌘5), deduplicate with SHA-256 + Vision (⌘6), or stage files in File Shelf (⌘7).",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex items-baseline gap-4 p-4 rounded-2xl bg-white dark:bg-[#141417] border border-[#E6E6E4] dark:border-white/10"
              >
                <span className="font-mono text-[13px] font-semibold text-[#111110]/45 dark:text-white/45 shrink-0">
                  {item.step}
                </span>
                <span className="text-[16.5px] text-[#111110] dark:text-white font-medium">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* [ 4 ] what you get */}
        <div className="mt-16 space-y-4">
          <div className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-md bg-white dark:bg-white/10 border border-[#E6E6E4] dark:border-white/15 font-mono text-[12px] text-[#111110]/70 dark:text-white/70">
            [ 4 ]
          </div>
          <h2 className="text-[28px] sm:text-[34px] font-semibold tracking-[-0.03em] leading-[1.15]">
            what you get
          </h2>

          <ul className="divide-y divide-[#E6E6E4] dark:divide-white/10 rounded-[22px] bg-white dark:bg-[#141417] border border-[#E6E6E4] dark:border-white/10 px-5 py-2 shadow-2xs">
            {FINDY_WHAT_YOU_GET_LIST.map((item) => (
              <li
                key={item.id}
                className="py-3.5 flex items-center gap-3.5 text-[15.5px] text-[#111110]/85 dark:text-white/85"
              >
                <FeatureLineIcon type={item.iconType} />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Large Editorial Statement Below List */}
        <div className="mt-20 pt-12 border-t border-[#E6E6E4] dark:border-white/10">
          <h3 className="text-[36px] sm:text-[48px] font-semibold tracking-[-0.035em] leading-[1.08]">
            type how you think.
            <br />
            <span className="marker font-serif italic font-normal px-3 py-0.5">
              zero
            </span>{" "}
            cloud uploads.
          </h3>
          <div className="mt-6 space-y-4 text-[17.5px] leading-[1.6] text-[#111110]/75 dark:text-white/75">
            <p>
              whether you&apos;re hunting for a PDF invoice from last week, a
              screenshot containing an error message, or a file you downloaded
              from Figma three months ago, findy surfaces it in milliseconds.
            </p>
            <p>
              and when your disk fills up, Space Lens and Smart Clean Up show
              you exactly where your gigabytes went — moving clutter safely to
              macOS Trash so nothing is ever lost.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: Bento Grid Showcase (6 Core Visual Cards)
          ===================================================================== */}
      <section className="py-16 sm:py-24 px-5 max-w-[1080px] mx-auto">
        <div className="text-center max-w-[620px] mx-auto">
          <h2 className="text-[34px] sm:text-[46px] font-semibold tracking-[-0.035em] leading-[1.08]">
            six workflows. one 4.5 MB app.
          </h2>
          <p className="mt-3 text-[17px] text-[#111110]/65 dark:text-white/65">
            built natively in Swift &amp; SwiftUI for Apple Silicon and Intel
            Macs.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FINDY_PRIMARY_BENTO_CARDS.map((card) => (
            <article
              key={card.id}
              className="rounded-[24px] bg-white dark:bg-[#141417] border border-[#E6E6E4] dark:border-white/10 p-5 flex flex-col justify-between shadow-[0_8px_28px_rgba(0,0,0,0.035)] hover:shadow-[0_14px_38px_rgba(0,0,0,0.06)] transition-shadow"
            >
              <div>
                <div className="rounded-[16px] bg-[#F7F7F7] dark:bg-[#1a1a1e] border border-[#E6E6E4]/80 dark:border-white/10 overflow-hidden mb-4">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    title={card.title}
                    width={640}
                    height={460}
                    loading="lazy"
                    className="w-full h-48 object-cover object-top"
                  />
                </div>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-[18.5px] font-semibold tracking-[-0.02em]">
                    {card.title}
                  </h3>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#F7F7F7] dark:bg-white/10 border border-[#E6E6E4] dark:border-white/10 text-[#111110]/70 dark:text-white/70 shrink-0">
                    {card.badge}
                  </span>
                </div>
                <p className="mt-2 text-[14px] leading-[1.55] text-[#111110]/68 dark:text-white/68">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================================
          SECTION 5: Complete Feature Breakdown & Keyboard Shortcuts (#shortcuts)
          ===================================================================== */}
      <section
        id="shortcuts"
        className="py-16 sm:py-24 px-5 max-w-[1040px] mx-auto"
      >
        <div className="text-center max-w-[640px] mx-auto">
          <h2 className="text-[32px] sm:text-[44px] font-semibold tracking-[-0.035em] leading-[1.1]">
            keyboard-first down to every shortcut.
          </h2>
          <p className="mt-2.5 text-[16.5px] text-[#111110]/65 dark:text-white/65">
            every feature in findy is mapped to a fast macOS shortcut and open
            Swift source file.
          </p>
        </div>

        {/* 14-Shortcut Grid */}
        <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {FINDY_SHORTCUTS.map((item) => (
            <div
              key={item.shortcut}
              className="rounded-2xl bg-white dark:bg-[#141417] border border-[#E6E6E4] dark:border-white/10 px-4 py-3.5 flex items-center justify-between gap-3 shadow-2xs"
            >
              <span className="text-[13.5px] text-[#111110]/80 dark:text-white/80 font-medium">
                {item.action}
              </span>
              <kbd className="px-2.5 py-1 rounded-lg bg-[#F7F7F7] dark:bg-white/10 border border-[#E6E6E4] dark:border-white/15 font-mono text-[12px] font-semibold text-[#111110] dark:text-white shrink-0">
                {item.shortcut}
              </kbd>
            </div>
          ))}
        </div>

        {/* Complete Feature Architecture & Source Table */}
        <div className="mt-10 rounded-[26px] bg-white dark:bg-[#141417] border border-[#E6E6E4] dark:border-white/10 overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.04)]">
          <div className="px-6 py-4 border-b border-[#E6E6E4] dark:border-white/10 bg-[#FAFAFA] dark:bg-white/[0.03] flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-[13.5px] font-semibold">
              <Command className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Findy v1.2 Complete Feature &amp; Swift Source Map</span>
            </div>
            <a
              href={`${GITHUB_REPO_URL}/tree/main/Sources/Findy`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] font-mono text-emerald-700 dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
            >
              <span>Browse Sources/Findy on GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[680px]">
              <thead>
                <tr className="border-b border-[#E6E6E4] dark:border-white/10 text-[12.5px] text-[#111110]/55 dark:text-white/55">
                  <th className="py-3.5 px-5 font-medium">feature</th>
                  <th className="py-3.5 px-4 font-medium">shortcut</th>
                  <th className="py-3.5 px-4 font-medium">what it does</th>
                  <th className="py-3.5 px-5 font-medium text-right">
                    swift source
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E6E6E4] dark:divide-white/10 text-[13.5px]">
                {FINDY_FEATURE_SPECS.map((spec) => (
                  <tr key={spec.feature}>
                    <td className="py-3.5 px-5 font-semibold text-[#111110] dark:text-white whitespace-nowrap">
                      {spec.feature}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-[12px] text-emerald-700 dark:text-emerald-400 whitespace-nowrap">
                      {spec.shortcut}
                    </td>
                    <td className="py-3.5 px-4 text-[#111110]/70 dark:text-white/70 leading-[1.5]">
                      {spec.description}
                    </td>
                    <td className="py-3.5 px-5 text-right whitespace-nowrap">
                      <a
                        href={spec.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-[12px] text-[#111110]/75 dark:text-white/75 hover:text-emerald-600 dark:hover:text-emerald-400 underline underline-offset-4"
                      >
                        <span>{spec.sourceFile}</span>
                        <ExternalLink className="w-3 h-3 opacity-60" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 6: Comparison Table ("why findy?")
          ===================================================================== */}
      <section className="py-16 sm:py-24 px-5 max-w-[960px] mx-auto">
        <div className="text-center max-w-[580px] mx-auto">
          <h2 className="text-[32px] sm:text-[44px] font-semibold tracking-[-0.035em] leading-[1.1]">
            why findy?
          </h2>
          <p className="mt-2.5 text-[16.5px] text-[#111110]/65 dark:text-white/65">
            how findy compares against macOS Finder, Spotlight, and paid Mac
            cleaner subscriptions.
          </p>
        </div>

        <div className="mt-9 rounded-[26px] bg-white dark:bg-[#141417] border border-[#E6E6E4] dark:border-white/10 overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.04)]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[660px]">
              <thead>
                <tr className="border-b border-[#E6E6E4] dark:border-white/10 bg-[#FAFAFA] dark:bg-white/[0.03] text-[13px]">
                  <th className="py-4 px-5 font-medium text-[#111110]/55 dark:text-white/55 w-[40%]">
                    capability
                  </th>
                  <th className="py-4 px-4 font-semibold text-[#111110] dark:text-white bg-emerald-500/[0.06]">
                    <span className="inline-flex items-center gap-1.5">
                      <Image
                        src="/brand/Findy/icon-sm.webp"
                        alt="Findy icon"
                        width={18}
                        height={18}
                        className="w-4 h-4 rounded"
                      />
                      <span>findy (free · MIT)</span>
                    </span>
                  </th>
                  <th className="py-4 px-4 font-medium text-[#111110]/60 dark:text-white/60">
                    macOS finder
                  </th>
                  <th className="py-4 px-4 font-medium text-[#111110]/60 dark:text-white/60">
                    spotlight
                  </th>
                  <th className="py-4 px-4 font-medium text-[#111110]/60 dark:text-white/60">
                    paid mac cleaners
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E6E6E4] dark:divide-white/10 text-[14px]">
                {FINDY_COMPARISON_ROWS.map((row) => (
                  <tr key={row.feature}>
                    <td className="py-4 px-5 font-medium text-[#111110] dark:text-white">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-500/[0.05]">
                      <span className="inline-flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>
                          {row.findy.replace("✓", "").trim() || "yes"}
                        </span>
                      </span>
                    </td>
                    <td className="py-4 px-4 text-[#111110]/55 dark:text-white/55">
                      {row.finder === "✕" ? (
                        <X className="w-4 h-4 text-[#111110]/35 dark:text-white/35" />
                      ) : (
                        row.finder
                      )}
                    </td>
                    <td className="py-4 px-4 text-[#111110]/55 dark:text-white/55">
                      {row.spotlight === "✕" ? (
                        <X className="w-4 h-4 text-[#111110]/35 dark:text-white/35" />
                      ) : (
                        row.spotlight
                      )}
                    </td>
                    <td className="py-4 px-4 text-[#111110]/55 dark:text-white/55">
                      {row.cleaners === "✕" ? (
                        <X className="w-4 h-4 text-[#111110]/35 dark:text-white/35" />
                      ) : (
                        row.cleaners
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 6B: 100% Open Source in Swift & SwiftUI (#open-source)
          ===================================================================== */}
      <section
        id="open-source"
        className="py-12 sm:py-20 px-5 max-w-[1040px] mx-auto"
      >
        <div className="rounded-[28px] bg-white dark:bg-[#141417] border border-[#E6E6E4] dark:border-white/10 p-6 sm:p-9 shadow-[0_16px_48px_rgba(0,0,0,0.045)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/12 text-emerald-700 dark:text-emerald-300 text-[12px] font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>
                  100% open source · MIT license · native swift &amp; swiftui
                </span>
              </div>

              <h2 className="text-[28px] sm:text-[38px] font-semibold tracking-[-0.03em] leading-[1.12]">
                open source down to the{" "}
                <span className="marker font-serif italic font-normal px-2">
                  file indexer
                </span>
                .
              </h2>

              <p className="text-[15.5px] leading-[1.6] text-[#111110]/72 dark:text-white/72">
                An app that indexes your personal documents, screenshots, and
                downloads should have nothing to hide. Every line of Findy —
                from{" "}
                <code className="font-mono text-[13.5px]">
                  NaturalSearch.swift
                </code>{" "}
                and{" "}
                <code className="font-mono text-[13.5px]">SpaceLens.swift</code>{" "}
                to{" "}
                <code className="font-mono text-[13.5px]">
                  Duplicates.swift
                </code>{" "}
                and{" "}
                <code className="font-mono text-[13.5px]">OCRService.swift</code>{" "}
                — is open source under the MIT License at{" "}
                <a
                  href={GITHUB_REPO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#111110] dark:text-white underline underline-offset-4"
                >
                  github.com/Shubham-sharma8/findy
                </a>
                .
              </p>

              {/* 4 Key Architecture Modules */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {[
                  {
                    target: "NaturalSearch & Library",
                    desc: "Plain-English query parser + hybrid NSMetadataQuery & FileManager indexer",
                  },
                  {
                    target: "SpaceLens & Cleanup",
                    desc: "Squarified treemap, Home folder breakdown & Trash-safe FileManager.trashItem rules",
                  },
                  {
                    target: "Duplicates & OCRService",
                    desc: "3-stage SHA-256 clone detector + Vision feature prints & VNRecognizeTextRequest OCR",
                  },
                  {
                    target: "DownloadSources & FileShelf",
                    desc: "kMDItemWhereFroms binary plist parser, 370×460 menu bar popover & Regex batch rename",
                  },
                ].map((item) => (
                  <div
                    key={item.target}
                    className="rounded-2xl bg-[#F7F7F7] dark:bg-white/[0.04] border border-[#E6E6E4] dark:border-white/10 p-3.5"
                  >
                    <div className="font-mono text-[12.5px] font-semibold text-emerald-700 dark:text-emerald-400">
                      Sources/Findy/{item.target}
                    </div>
                    <div className="mt-1 text-[12px] leading-[1.45] text-[#111110]/68 dark:text-white/68">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={GITHUB_REPO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-[#111110] dark:bg-white text-white dark:text-[#111110] text-[13.5px] font-medium hover:opacity-90 transition-opacity"
                >
                  <GitHubIcon className="w-4 h-4" />
                  <span>Star &amp; Inspect on GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-75" />
                </a>
                <a
                  href={GITHUB_RELEASE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 h-11 px-5 rounded-full bg-[#F7F7F7] dark:bg-white/10 border border-[#E6E6E4] dark:border-white/10 text-[13.5px] font-medium text-[#111110] dark:text-white hover:bg-black/[0.04] dark:hover:bg-white/15 transition-colors"
                >
                  <span>GitHub Release v1.2 (Findy.dmg) →</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#111110] text-white p-5 font-mono text-[12px] leading-[1.7] border border-white/10 shadow-inner">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-[11px] text-white/55">
                  <span>zsh — build findy from source (Swift 5.9+ / 6.0)</span>
                  <span className="text-emerald-400">MIT License</span>
                </div>
                <pre className="overflow-x-auto text-emerald-300">
                  <code>{`git clone https://github.com/Shubham-sharma8/findy.git
cd findy

# Build & run native SwiftUI app
swift build -c release
swift run

# Package universal Findy.app + DMG
./Scripts/package_app.sh`}</code>
                </pre>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
                  <span>0 external dependencies · 0 telemetry</span>
                  <a
                    href={GITHUB_RELEASE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:underline"
                  >
                    Download notarized v1.2 DMG →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 7A: Pricing & DMG Installer Preview (#pricing)
          ===================================================================== */}
      <section
        id="pricing"
        className="py-12 sm:py-16 px-5 max-w-[1040px] mx-auto"
      >
        <div className="rounded-[28px] bg-white dark:bg-[#141417] border border-[#E6E6E4] dark:border-white/10 p-6 sm:p-9 grid grid-cols-1 lg:grid-cols-12 gap-7 items-center shadow-xs">
          <div className="lg:col-span-7 space-y-3.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/12 text-emerald-700 dark:text-emerald-300 text-[12px] font-semibold">
              <span>
                free &amp; open source forever · v1.2 (build 2 · MIT)
              </span>
            </div>
            <h3 className="text-[28px] sm:text-[36px] font-semibold tracking-[-0.03em] leading-[1.12]">
              instant search, space lens &amp; cleanup.{" "}
              <span className="marker font-serif italic font-normal px-2">
                $0 / month
              </span>{" "}
              forever.
            </h3>
            <p className="text-[15px] leading-[1.6] text-[#111110]/70 dark:text-white/70">
              No subscriptions, no &ldquo;scan for free, pay $39/year to clean&rdquo;
              paywalls, and zero background bloatware. Findy is a{" "}
              <strong className="text-[#111110] dark:text-white">
                4.5 MB Universal macOS app
              </strong>{" "}
              signed with Apple Developer ID (
              <code className="font-mono text-[13px]">9TKKPN6F59</code>),
              notarized by Apple, and free forever under the MIT License.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={DIRECT_DMG_HREF}
                className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-[#111110] dark:bg-white text-white dark:text-[#111110] text-[14px] font-medium hover:opacity-90 transition-opacity"
              >
                <AppleLogoIcon className="w-4 h-4 shrink-0 -mt-0.5" />
                <span>download findy v1.2 (4.5 MB · free)</span>
              </a>
              <button
                type="button"
                onClick={handleCopySha}
                className="inline-flex items-center gap-1.5 h-11 px-4 rounded-full bg-[#F7F7F7] dark:bg-white/10 border border-[#E6E6E4] dark:border-white/10 text-[12px] font-mono text-[#111110]/70 dark:text-white/70 hover:text-[#111110]"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>
                  {copiedSha
                    ? "Copied SHA-256!"
                    : "SHA-256: 7773b4b2...259cde"}
                </span>
              </button>
              <a
                href={GITHUB_RELEASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 h-11 px-4 rounded-full bg-[#F7F7F7] dark:bg-white/10 border border-[#E6E6E4] dark:border-white/10 text-[12px] font-medium text-[#111110]/75 dark:text-white/75 hover:text-[#111110]"
              >
                <span>GitHub Release v1.2 →</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Image
              src="/brand/Findy/09-findy-dmg-installer-preview.webp"
              alt="Findy.dmg universal macOS installer — drag Findy.app to Applications in 3 seconds"
              title="Install Findy.dmg on macOS"
              width={680}
              height={490}
              loading="lazy"
              className="w-full h-auto rounded-2xl border border-[#E6E6E4] dark:border-white/10"
            />
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 7B: FAQ Accordion ("questions, answered.")
          ===================================================================== */}
      <section
        id="faq"
        className="py-16 sm:py-24 px-5 max-w-[720px] mx-auto"
      >
        <div className="text-center mb-10">
          <h2 className="text-[32px] sm:text-[42px] font-semibold tracking-[-0.035em]">
            questions, answered.
          </h2>
          <p className="mt-2 text-[15.5px] text-[#111110]/65 dark:text-white/65">
            everything about on-device plain-english search, Space Lens, and
            non-destructive cleanup.
          </p>
        </div>

        <div className="space-y-2.5">
          {FINDY_FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={faq.question}
                className="rounded-[20px] bg-white dark:bg-[#141417] border border-[#E6E6E4] dark:border-white/10 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 text-[16px] font-semibold text-[#111110] dark:text-white hover:bg-black/[0.015] dark:hover:bg-white/[0.02] transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 text-[#111110]/50 dark:text-white/50 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-[14.5px] leading-[1.65] text-[#111110]/72 dark:text-white/72 border-t border-[#E6E6E4]/60 dark:border-white/5 pt-3.5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Sister Apps Cross-Promotion Showcase */}
      <div className="max-w-[980px] mx-auto px-5">
        <OtherAppsShowcase currentSlug="findy" />
      </div>

      {/* =====================================================================
          SECTION 8: Footer CTA ("find any file in a heartbeat.")
          ===================================================================== */}
      <section
        id="download"
        className="pt-12 pb-20 sm:pb-28 px-5 max-w-[820px] mx-auto text-center"
      >
        <div className="rounded-[32px] bg-white dark:bg-[#141417] border border-[#E6E6E4] dark:border-white/10 p-8 sm:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#F7F7F7] dark:bg-white/10 border border-[#E6E6E4] dark:border-white/10 p-2 mb-5">
            <Image
              src="/brand/Findy/icon.webp"
              alt="Findy app icon"
              width={56}
              height={56}
              className="w-full h-full object-contain rounded-xl"
            />
          </div>

          <h2 className="text-[34px] sm:text-[50px] font-semibold tracking-[-0.035em] leading-[1.06]">
            find any file on your mac in a heartbeat.
          </h2>
          <p className="mt-3.5 text-[18px] sm:text-[21px] text-[#111110]/70 dark:text-white/70">
            plain-english search, Space Lens treemap, and Trash-safe cleanup —
            100% on-device.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap">
            <a
              href={DIRECT_DMG_HREF}
              className="inline-flex items-center justify-center gap-2.5 h-12 px-8 rounded-full bg-[#111110] dark:bg-white text-white dark:text-[#111110] text-[15px] font-medium shadow-[0_10px_28px_rgba(0,0,0,0.16)] hover:scale-[1.015] transition-transform"
            >
              <AppleLogoIcon className="w-4 h-4 shrink-0 -mt-0.5" />
              <span>download for mac (v1.2 · 4.5 MB)</span>
            </a>
            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 h-12 px-5 rounded-full bg-[#F7F7F7] dark:bg-white/10 border border-[#E6E6E4] dark:border-white/10 text-[13px] font-medium text-[#111110]/80 dark:text-white/80 hover:text-[#111110] transition-colors"
            >
              <GitHubIcon className="w-4 h-4" />
              <span>Open Source on GitHub (MIT)</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
            <a
              href={GITHUB_RELEASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 h-12 px-5 rounded-full bg-[#F7F7F7] dark:bg-white/10 border border-[#E6E6E4] dark:border-white/10 text-[13px] font-medium text-[#111110]/75 dark:text-white/75 hover:text-[#111110] transition-colors"
            >
              <span>GitHub Release v1.2 (.dmg) →</span>
            </a>
          </div>

          {/* TryMacApps Badge inside Footer CTA */}
          <div className="mt-6 flex justify-center">
            <a
              href="https://www.trymacapps.com"
              target="_blank"
              rel="noopener"
              className="inline-block hover:opacity-90 transition-opacity"
            >
              <img
                src="https://www.trymacapps.com/badge.png"
                alt="Featured on TryMacApps"
                width="200"
                height="67"
              />
            </a>
          </div>

          <p className="mt-4 text-[12px] text-[#111110]/50 dark:text-white/50">
            macOS 14.0 Sonoma · macOS 15.0 Sequoia · macOS 26 Tahoe · Universal
            Apple Silicon &amp; Intel · Apple Developer ID Signed &amp;
            Notarized · MIT License
          </p>

          <div className="mt-10 pt-6 border-t border-[#E6E6E4] dark:border-white/10 text-[13px] text-[#111110]/60 dark:text-white/60 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span>
              © 2026 findy · made with ❤️ by{" "}
              <Link
                href="/"
                className="underline underline-offset-4 hover:text-[#111110] dark:hover:text-white"
              >
                cogify.me
              </Link>{" "}
              (
              <a
                href="mailto:connect@cogify.me"
                className="underline underline-offset-4 hover:text-[#111110] dark:hover:text-white"
              >
                connect@cogify.me
              </a>
              )
            </span>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={GITHUB_REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#111110] dark:hover:text-white"
              >
                github (MIT)
              </a>
              <a
                href={GITHUB_RELEASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#111110] dark:hover:text-white"
              >
                v1.2 release
              </a>
              <Link
                href="/products"
                className="hover:text-[#111110] dark:hover:text-white"
              >
                all cogify apps
              </Link>
              <Link
                href="/privacy"
                className="hover:text-[#111110] dark:hover:text-white"
              >
                privacy
              </Link>
              <Link
                href="/terms"
                className="hover:text-[#111110] dark:hover:text-white"
              >
                terms
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
