/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  BookOpen,
  ShieldCheck,
  Cpu,
  Thermometer,
  TrendingUp,
  MemoryStick,
  Globe,
  Network,
  Pin,
  Lock,
  Database,
  Check,
  X,
  ChevronDown,
  Copy,
  ExternalLink,
} from "lucide-react";
import { AppleLogoIcon, GitHubIcon } from "@/components/ui/platform-icons";
import { OtherAppsShowcase } from "@/components/products/other-apps-showcase";
import {
  TASKYFY_DAEMON_DEMOS,
  TASKYFY_PILLAR_TABS,
  TASKYFY_WHAT_YOU_GET_LIST,
  TASKYFY_COMPARISON_ROWS,
  TASKYFY_SHORTCUTS,
  TASKYFY_FAQS,
  type TaskyfyWhatYouGetItem,
} from "./taskyfy-data";

const GITHUB_REPO_URL = "https://github.com/Shubham-sharma8/taskyfy";
const GITHUB_RELEASE_URL =
  "https://github.com/Shubham-sharma8/taskyfy/releases/tag/v2.0";
const DIRECT_DMG_HREF = "/Taskyfy.dmg";
const SHA256_HASH =
  "85394df089866a052b277bef9090f4d8fd3f0b99398b8bfc2b3563244b7e3464";

function FeatureLineIcon({
  type,
}: {
  type: TaskyfyWhatYouGetItem["iconType"];
}) {
  const cls = "w-4 h-4 text-[#111113]/70 dark:text-white/75 shrink-0";
  switch (type) {
    case "tree":
      return <Activity className={cls} strokeWidth={1.75} />;
    case "book":
      return <BookOpen className={cls} strokeWidth={1.75} />;
    case "shield":
      return <ShieldCheck className={cls} strokeWidth={1.75} />;
    case "cpu":
      return <Cpu className={cls} strokeWidth={1.75} />;
    case "thermometer":
      return <Thermometer className={cls} strokeWidth={1.75} />;
    case "leak":
      return <TrendingUp className={cls} strokeWidth={1.75} />;
    case "ram":
      return <MemoryStick className={cls} strokeWidth={1.75} />;
    case "browser":
      return <Globe className={cls} strokeWidth={1.75} />;
    case "port":
      return <Network className={cls} strokeWidth={1.75} />;
    case "pin":
      return <Pin className={cls} strokeWidth={1.75} />;
    case "lock":
      return <Lock className={cls} strokeWidth={1.75} />;
    case "database":
      return <Database className={cls} strokeWidth={1.75} />;
  }
}

export function TaskyfyLandingView() {
  const [selectedDaemonId, setSelectedDaemonId] = useState<string>(
    TASKYFY_DAEMON_DEMOS[0].id
  );
  const [activeTabId, setActiveTabId] = useState<string>(
    TASKYFY_PILLAR_TABS[0].id
  );
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [copiedSha, setCopiedSha] = useState(false);

  const selectedDaemon =
    TASKYFY_DAEMON_DEMOS.find((d) => d.id === selectedDaemonId) ||
    TASKYFY_DAEMON_DEMOS[0];
  const activeTab =
    TASKYFY_PILLAR_TABS.find((t) => t.id === activeTabId) ||
    TASKYFY_PILLAR_TABS[0];

  const handleCopySha = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(SHA256_HASH);
      setCopiedSha(true);
      setTimeout(() => setCopiedSha(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F6F4] dark:bg-[#0b0b0d] text-[#111113] dark:text-[#f5f5f7] selection:bg-[#16A34A]/20 tabular-nums">
      {/* =====================================================================
          SECTION 0: Floating Top Pill Navbar
          ← cogify | taskyfy | how it works | process tree | memory & ports | open source | faq | download
          ===================================================================== */}
      <header className="sticky top-3 z-50 flex justify-center px-3 pt-3 pointer-events-none">
        <nav
          aria-label="Taskyfy Navigation"
          style={{
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
          className="pointer-events-auto inline-flex items-center gap-0.5 sm:gap-1 p-1.5 rounded-full bg-white/90 dark:bg-[#161618]/90 border border-black/[0.08] dark:border-white/[0.1] shadow-[0_4px_20px_rgba(0,0,0,0.05)] text-[13px] whitespace-nowrap max-w-full overflow-x-auto"
        >
          <Link
            href="/"
            title="Back to Cogify Suite"
            className="h-8 px-2.5 rounded-full inline-flex items-center gap-1 text-[#111113]/55 dark:text-white/55 hover:text-[#111113] dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors text-[12px]"
          >
            <span>← cogify</span>
          </Link>

          <span
            className="h-3.5 w-[1px] bg-black/[0.08] dark:bg-white/10 mx-0.5"
            aria-hidden="true"
          />

          <a
            href="#taskyfy"
            className="h-8 px-3 rounded-full inline-flex items-center gap-1.5 font-semibold bg-[#E8E8E5] dark:bg-white/[0.12] text-[#111113] dark:text-white transition-colors"
          >
            <Image
              src="/brand/Taskyfy/icon.png"
              alt="Taskyfy minimal squircle app icon"
              width={18}
              height={18}
              className="w-4 h-4 rounded object-contain"
            />
            <span>taskyfy</span>
          </a>

          <a
            href="#how-it-works"
            className="h-8 px-2.5 sm:px-3 rounded-full inline-flex items-center text-[#111113]/70 dark:text-white/70 hover:text-[#111113] dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors"
          >
            how it works
          </a>
          <a
            href="#process-tree"
            className="h-8 px-2.5 sm:px-3 rounded-full inline-flex items-center text-[#111113]/70 dark:text-white/70 hover:text-[#111113] dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors"
          >
            process tree
          </a>
          <a
            href="#memory-ports"
            className="h-8 px-2.5 sm:px-3 rounded-full inline-flex items-center text-[#111113]/70 dark:text-white/70 hover:text-[#111113] dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors"
          >
            memory &amp; ports
          </a>
          <a
            href="#open-source"
            className="h-8 px-2.5 sm:px-3 rounded-full inline-flex items-center gap-1 text-[#16A34A] dark:text-emerald-400 font-medium hover:bg-[#16A34A]/10 transition-colors"
          >
            <span>open source</span>
          </a>
          <a
            href="#faq"
            className="h-8 px-2.5 sm:px-3 rounded-full inline-flex items-center text-[#111113]/70 dark:text-white/70 hover:text-[#111113] dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors"
          >
            faq
          </a>
          <a
            href={DIRECT_DMG_HREF}
            className="h-8 px-3.5 rounded-full inline-flex items-center gap-1.5 bg-[#111113] dark:bg-white text-white dark:text-[#111113] font-medium hover:bg-black/85 transition-colors ml-0.5"
          >
            <AppleLogoIcon className="w-3.5 h-3.5 shrink-0" />
            <span>download</span>
          </a>
        </nav>
      </header>

      {/* =====================================================================
          SECTION 1: Hero + Interactive Daemon Encyclopedia Simulator + Hero Screenshot
          ===================================================================== */}
      <section
        id="taskyfy"
        className="pt-14 sm:pt-20 pb-16 sm:pb-24 px-5 max-w-[1080px] mx-auto"
      >
        <div className="max-w-[760px] mx-auto text-center">
          {/* Top Release Pill */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#161618] border border-black/[0.08] dark:border-white/10 text-[12px] text-[#111113]/70 dark:text-white/70 mb-6 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
            <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
            <span className="font-semibold text-[#111113] dark:text-white">
              taskyfy v2.0 (open source · MIT)
            </span>
            <span className="text-[#111113]/30 dark:text-white/30">·</span>
            <span className="text-[#16A34A] dark:text-emerald-400 font-medium">
              &lt; 2.8% active CPU (&lt; 0.3% idle)
            </span>
            <span className="text-[#111113]/30 dark:text-white/30">·</span>
            <span>100% offline SQLite WAL</span>
          </div>

          {/* Headline: meet taskyfy. */}
          <h1 className="text-[44px] sm:text-[64px] md:text-[72px] font-bold tracking-[-0.03em] leading-[1.04] text-[#111113] dark:text-white flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
            <span>meet taskyfy.</span>
            <span className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white dark:bg-[#18181b] border border-black/[0.08] dark:border-white/10 shadow-[0_6px_20px_rgba(0,0,0,0.06)] p-1.5">
              <Image
                src="/brand/Taskyfy/icon.png"
                alt="Taskyfy macOS app icon — minimal charcoal squircle with ECG pulse"
                width={56}
                height={56}
                className="w-full h-full object-contain rounded-xl"
              />
            </span>
          </h1>

          {/* Subheadline with rounded stone pill highlight */}
          <p className="mt-5 text-[20px] sm:text-[26px] leading-[1.38] tracking-[-0.02em] text-[#111113]/80 dark:text-white/80 max-w-[680px] mx-auto font-normal">
            <span className="bg-black/[0.07] dark:bg-white/[0.1] px-3 py-0.5 rounded-xl font-semibold text-[#111113] dark:text-white">
              know everything running on your mac
            </span>{" "}
            in plain english, without slowing it down.
          </p>

          {/* Primary CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap">
            <a
              href={DIRECT_DMG_HREF}
              className="inline-flex items-center justify-center gap-2.5 h-12 px-7 rounded-full bg-[#111113] dark:bg-white text-white dark:text-[#111113] text-[15px] font-medium shadow-[0_10px_28px_rgba(0,0,0,0.14)] hover:bg-black/85 dark:hover:bg-white/90 transition-all"
            >
              <AppleLogoIcon className="w-4 h-4 shrink-0 -mt-0.5" />
              <span>download for mac (v2.0 · 3.2 MB · free)</span>
            </a>
            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-12 px-5 rounded-full bg-white dark:bg-[#161618] border border-black/[0.08] dark:border-white/10 text-[13.5px] font-medium text-[#111113]/85 dark:text-white/85 hover:text-[#111113] dark:hover:text-white hover:border-black/25 transition-colors"
            >
              <GitHubIcon className="w-4 h-4 shrink-0" />
              <span>open source on github (MIT)</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
            <a
              href={GITHUB_RELEASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 h-12 px-5 rounded-full bg-white dark:bg-[#161618] border border-black/[0.08] dark:border-white/10 text-[13px] text-[#111113]/75 dark:text-white/75 hover:text-[#111113] dark:hover:text-white hover:border-black/20 transition-colors"
            >
              <span>v2.0 release notes &amp; .dmg →</span>
            </a>
          </div>

          {/* Trust Micro-Copy */}
          <p className="mt-4 text-[12.5px] text-[#111113]/55 dark:text-white/55 tracking-[-0.01em]">
            100% open source (MIT) · 2-process XPC architecture · 230+ macOS
            daemons explained in plain english · 30-day SQLite WAL history ·
            live port radar · zero telemetry
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

        {/* Hero Image Showcase: 01-taskyfy-overview-hero.png */}
        <figure className="mt-10 sm:mt-12 rounded-[26px] bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/10 p-3 sm:p-4 shadow-[0_20px_60px_rgba(0,0,0,0.06)] overflow-hidden">
          <Image
            src="/brand/Taskyfy/01-taskyfy-overview-hero.png"
            alt="Taskyfy Overview Deck — Apple Silicon P/E cores, Unified Memory pressure, IOKit GPU telemetry, live wattage, and right-hand Process & Security Inspector"
            title="Taskyfy v2.0 — Minimal macOS Telemetry Studio & Plain-English Activity Monitor"
            width={1352}
            height={872}
            priority
            className="w-full h-auto rounded-[18px] object-cover"
          />
          <figcaption className="mt-3 text-center text-[12.5px] text-[#111113]/60 dark:text-white/60">
            Taskyfy Overview Deck — Apple Silicon P/E cores, Unified Memory
            pressure, IOKit GPU telemetry, live wattage, and right-hand{" "}
            <strong className="text-[#111113] dark:text-white">
              Process &amp; Security Inspector (⌘I)
            </strong>
            .
          </figcaption>
        </figure>

        {/* Interactive Plain-English Daemon Encyclopedia Preview */}
        <div className="mt-6 rounded-[26px] bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/10 p-5 sm:p-7 shadow-[0_12px_36px_rgba(0,0,0,0.04)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-black/[0.08] dark:border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A]" />
              <span className="text-[13px] font-semibold text-[#111113] dark:text-white">
                Interactive 230+ Daemon Plain-English Encyclopedia
              </span>
            </div>
            <span className="text-[11.5px] font-mono px-2.5 py-0.5 rounded-full bg-[#16A34A]/10 text-[#16A34A] dark:text-emerald-400 font-medium">
              Click any cryptic daemon below
            </span>
          </div>

          {/* Clickable Daemon Pills */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {TASKYFY_DAEMON_DEMOS.map((daemon) => {
              const active = daemon.id === selectedDaemon.id;
              return (
                <button
                  key={daemon.id}
                  type="button"
                  onClick={() => setSelectedDaemonId(daemon.id)}
                  className={`px-3.5 py-1.5 rounded-full text-[12.5px] font-mono transition-all ${
                    active
                      ? "bg-[#111113] text-white dark:bg-white dark:text-[#111113] font-semibold shadow-xs"
                      : "bg-[#E8E8E5]/70 dark:bg-white/[0.06] text-[#111113]/75 dark:text-white/75 hover:text-[#111113] dark:hover:text-white"
                  }`}
                >
                  {daemon.processName}
                </button>
              );
            })}
          </div>

          {/* Selected Daemon Explanation Card */}
          <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
            <div className="lg:col-span-5 rounded-2xl bg-[#F6F6F4] dark:bg-[#19191d] border border-black/[0.08] dark:border-white/10 p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[16px] font-bold text-[#111113] dark:text-white">
                    {selectedDaemon.processName}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11.5px] font-semibold ${
                      selectedDaemon.verdictTone === "emerald"
                        ? "bg-[#16A34A]/10 text-[#16A34A] dark:text-emerald-400"
                        : "bg-[#D97706]/15 text-[#D97706] dark:text-amber-400"
                    }`}
                  >
                    {selectedDaemon.verdict}
                  </span>
                </div>
                <div className="mt-1 font-mono text-[11px] text-[#111113]/55 dark:text-white/55 break-all">
                  {selectedDaemon.bundleOrBinary}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-black/[0.08] dark:border-white/10 flex items-center justify-between text-[12.5px] font-mono">
                <span className="text-[#D97706] dark:text-amber-400 font-semibold">
                  Spike: {selectedDaemon.cpuSpike}
                </span>
                <span className="text-[#111113]/75 dark:text-white/75">
                  {selectedDaemon.memoryFootprint}
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 rounded-2xl bg-[#F6F6F4] dark:bg-[#19191d] border border-black/[0.08] dark:border-white/10 p-4 space-y-2.5 text-[13.5px]">
              <div>
                <span className="font-semibold text-[#111113] dark:text-white">
                  What it is:{" "}
                </span>
                <span className="text-[#111113]/75 dark:text-white/75">
                  {selectedDaemon.plainEnglishSummary}
                </span>
              </div>
              <div>
                <span className="font-semibold text-[#111113] dark:text-white">
                  Why it spikes:{" "}
                </span>
                <span className="text-[#111113]/75 dark:text-white/75">
                  {selectedDaemon.whyItSpikes}
                </span>
              </div>
              <div className="pt-1">
                <span className="font-semibold text-[#16A34A] dark:text-emerald-400">
                  Recommended Action:{" "}
                </span>
                <span className="text-[#111113]/80 dark:text-white/80 font-medium">
                  {selectedDaemon.recommendedAction}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: Editorial 4-Part Breakdown ([ 1 ] through [ 4 ])
          ===================================================================== */}
      <section
        id="how-it-works"
        className="py-16 sm:py-24 px-5 max-w-[680px] mx-auto"
      >
        {/* [ 1 ] what it is */}
        <div className="space-y-4">
          <div className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-md bg-white dark:bg-white/10 border border-black/[0.08] dark:border-white/15 font-mono text-[12px] text-[#111113]/70 dark:text-white/70">
            [ 1 ]
          </div>
          <h2 className="text-[28px] sm:text-[34px] font-bold tracking-[-0.03em] leading-[1.04]">
            what it is
          </h2>
          <div className="space-y-3.5 text-[17px] sm:text-[18.5px] leading-[1.6] text-[#111113]/80 dark:text-white/80">
            <p className="text-[#111113] dark:text-white font-semibold">
              activity monitor, rebuilt for humans and engineers.
            </p>
            <p>
              macOS Activity Monitor dumps 550+ cryptic background processes
              like{" "}
              <code className="px-1.5 py-0.5 rounded bg-white dark:bg-white/10 border border-black/[0.08] dark:border-white/10 font-mono text-[14.5px]">
                mds_stores
              </code>
              ,{" "}
              <code className="px-1.5 py-0.5 rounded bg-white dark:bg-white/10 border border-black/[0.08] dark:border-white/10 font-mono text-[14.5px]">
                WindowServer
              </code>
              ,{" "}
              <code className="px-1.5 py-0.5 rounded bg-white dark:bg-white/10 border border-black/[0.08] dark:border-white/10 font-mono text-[14.5px]">
                cloudd
              </code>
              , and{" "}
              <code className="px-1.5 py-0.5 rounded bg-white dark:bg-white/10 border border-black/[0.08] dark:border-white/10 font-mono text-[14.5px]">
                kernel_task
              </code>{" "}
              into a flat table with no history and no explanation.
            </p>
            <p>
              Taskyfy groups every helper process under the app that spawned it,
              explains{" "}
              <strong className="text-[#111113] dark:text-white">
                230+ macOS system daemons in plain English
              </strong>
              , tells you whether each process is{" "}
              <strong className="text-[#16A34A] dark:text-emerald-400">
                Safe to Quit
              </strong>
              , and records a{" "}
              <strong className="text-[#111113] dark:text-white">
                30-day SQLite WAL timeline
              </strong>{" "}
              so you can scrub back in time to see what drained your battery or
              spiked your RAM 20 minutes ago.
            </p>
          </div>
        </div>

        {/* [ 2 ] why it's different */}
        <div className="mt-16 space-y-4">
          <div className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-md bg-white dark:bg-white/10 border border-black/[0.08] dark:border-white/15 font-mono text-[12px] text-[#111113]/70 dark:text-white/70">
            [ 2 ]
          </div>
          <h2 className="text-[28px] sm:text-[34px] font-bold tracking-[-0.03em] leading-[1.04]">
            why it&apos;s different
          </h2>
          <div className="space-y-3.5 text-[17px] sm:text-[18.5px] leading-[1.6] text-[#111113]/80 dark:text-white/80">
            <p className="text-[#111113] dark:text-white font-semibold">
              most system monitors use more CPU than the apps they watch.
            </p>
            <p>
              Taskyfy samples system metrics natively at low overhead and
              automatically pauses heavy background polling the moment its
              window is closed:
            </p>
          </div>

          {/* 4 Stat Callout Pills */}
          <div className="pt-2 flex flex-wrap gap-2.5">
            <div className="px-4 py-2.5 rounded-full bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/10 text-[13.5px] font-medium shadow-2xs">
              <strong className="text-[#16A34A] dark:text-emerald-400">
                &lt; 2.8% CPU
              </strong>{" "}
              steady-state (&lt; 0.3% idle)
            </div>
            <div className="px-4 py-2.5 rounded-full bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/10 text-[13.5px] font-medium shadow-2xs">
              <strong className="text-[#111113] dark:text-white">
                230+ daemons
              </strong>{" "}
              in plain english
            </div>
            <div className="px-4 py-2.5 rounded-full bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/10 text-[13.5px] font-medium shadow-2xs">
              <strong className="text-[#111113] dark:text-white">
                30-day
              </strong>{" "}
              local history timeline
            </div>
            <div className="px-4 py-2.5 rounded-full bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/10 text-[13.5px] font-medium shadow-2xs">
              <strong className="text-[#16A34A] dark:text-emerald-400">
                0 bytes
              </strong>{" "}
              network telemetry
            </div>
          </div>
        </div>

        {/* [ 3 ] how it works */}
        <div className="mt-16 space-y-4">
          <div className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-md bg-white dark:bg-white/10 border border-black/[0.08] dark:border-white/15 font-mono text-[12px] text-[#111113]/70 dark:text-white/70">
            [ 3 ]
          </div>
          <h2 className="text-[28px] sm:text-[34px] font-bold tracking-[-0.03em] leading-[1.04]">
            how it works
          </h2>
          <div className="space-y-3 pt-1">
            {[
              {
                step: "01",
                text: "open taskyfy or press ⌥⌘T from any screen. View live Apple Silicon P/E core load, unified memory pressure, GPU utilization, wattage draw, and die temperatures in one minimal white workspace.",
              },
              {
                step: "02",
                text: "click any app or press ⌘K to inspect. See every child helper process, Code Signing & Notarization status, open TCP/UDP ports (:3000, :5432, :8080), 15-minute memory leak trails, and plain-English explanations.",
              },
              {
                step: "03",
                text: "take action in one click. Quit, Force Quit, Pause/Resume (SIGSTOP/SIGCONT), renice process priority, launch your browser's internal Task Manager, or scrub 30 days of historical telemetry.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex items-baseline gap-4 p-4 rounded-2xl bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/10"
              >
                <span className="font-mono text-[13px] font-semibold text-[#111113]/45 dark:text-white/45 shrink-0">
                  {item.step}
                </span>
                <span className="text-[16px] text-[#111113] dark:text-white font-medium leading-[1.5]">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* [ 4 ] what you get */}
        <div className="mt-16 space-y-4">
          <div className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-md bg-white dark:bg-white/10 border border-black/[0.08] dark:border-white/15 font-mono text-[12px] text-[#111113]/70 dark:text-white/70">
            [ 4 ]
          </div>
          <h2 className="text-[28px] sm:text-[34px] font-bold tracking-[-0.03em] leading-[1.04]">
            what you get
          </h2>

          <ul className="divide-y divide-black/[0.08] dark:divide-white/10 rounded-[22px] bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/10 px-5 py-2 shadow-2xs">
            {TASKYFY_WHAT_YOU_GET_LIST.map((item) => (
              <li
                key={item.id}
                className="py-3.5 flex items-center gap-3.5 text-[15px] text-[#111113]/85 dark:text-white/85"
              >
                <FeatureLineIcon type={item.iconType} />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3A: Interactive 8-Tab Studio Switcher (All 8 Real Screenshots)
          ===================================================================== */}
      <section className="py-12 sm:py-20 px-5 max-w-[1080px] mx-auto">
        <div className="text-center max-w-[680px] mx-auto">
          <h2 className="text-[32px] sm:text-[44px] font-bold tracking-[-0.03em] leading-[1.04]">
            seven telemetry panels.{" "}
            <span className="bg-black/[0.07] dark:bg-white/[0.1] px-3 py-0.5 rounded-xl font-semibold">
              one calm studio.
            </span>
          </h2>
          <p className="mt-3 text-[17px] text-[#111113]/65 dark:text-white/65">
            click any studio tab below to inspect real macOS screenshots from
            Taskyfy v2.0.
          </p>

          <div
            role="tablist"
            aria-label="Taskyfy Studio Panels"
            className="mt-7 inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-3xl bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/10 shadow-xs"
          >
            {TASKYFY_PILLAR_TABS.map((tab) => {
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
                      ? "bg-[#111113] text-white dark:bg-white dark:text-[#111113] shadow-xs"
                      : "text-[#111113]/65 dark:text-white/65 hover:text-[#111113] dark:hover:text-white"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`font-mono text-[10.5px] px-1.5 py-0.2 rounded ${
                      isSelected
                        ? "bg-white/20 dark:bg-black/15"
                        : "bg-black/[0.05] dark:bg-white/[0.06]"
                    }`}
                  >
                    {tab.shortcut}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Studio Panel Card */}
        <div className="mt-8 rounded-[28px] bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/10 p-6 sm:p-8 shadow-[0_16px_48px_rgba(0,0,0,0.05)] grid grid-cols-1 lg:grid-cols-12 gap-7 items-center">
          <div className="lg:col-span-5 space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16A34A]/10 text-[#16A34A] dark:text-emerald-400 text-[11.5px] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                <span>{activeTab.badgeText}</span>
              </div>
            </div>

            <h3 className="text-[24px] sm:text-[28px] font-bold tracking-[-0.025em] leading-[1.15]">
              {activeTab.headline}
            </h3>

            <p className="text-[14.5px] leading-[1.6] text-[#111113]/70 dark:text-white/70">
              {activeTab.subline}
            </p>

            {/* 3 Metrics */}
            <div className="grid grid-cols-3 gap-2.5 pt-1">
              {activeTab.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl bg-[#F6F6F4] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/10 p-3"
                >
                  <div className="text-[11px] text-[#111113]/55 dark:text-white/55">
                    {m.label}
                  </div>
                  <div
                    className={`mt-0.5 text-[14.5px] sm:text-[16px] font-semibold tracking-tight ${
                      m.accent
                        ? "text-[#16A34A] dark:text-emerald-400"
                        : "text-[#111113] dark:text-white"
                    }`}
                  >
                    {m.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="rounded-2xl bg-[#F6F6F4] dark:bg-white/[0.03] border border-black/[0.08] dark:border-white/10 p-3.5 space-y-2.5">
              {activeTab.highlights.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start justify-between gap-2 text-[12.5px] py-1 border-b last:border-b-0 border-black/[0.06] dark:border-white/5 pb-2 last:pb-0"
                >
                  <div className="min-w-0">
                    <div className="font-semibold text-[#111113] dark:text-white">
                      {item.title}
                    </div>
                    <div className="text-[11.5px] text-[#111113]/60 dark:text-white/60 leading-[1.45] mt-0.5">
                      {item.detail}
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-[#16A34A]/10 text-[#16A34A] dark:text-emerald-400 text-[10.5px] font-semibold shrink-0">
                    {item.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-[22px] bg-[#F6F6F4] dark:bg-[#1a1a1e] border border-black/[0.08] dark:border-white/10 p-2.5 overflow-hidden">
              <Image
                src={activeTab.visualImage}
                alt={activeTab.visualAlt}
                title={activeTab.headline}
                width={1352}
                height={872}
                loading="lazy"
                className="w-full h-auto rounded-[16px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3B: Visual Feature Deep-Dives (Screenshots 02 through 08)
          ===================================================================== */}
      <section
        id="process-tree"
        className="py-16 sm:py-24 px-5 max-w-[1080px] mx-auto space-y-16"
      >
        {/* Deep-Dive 1: Grouped Processes & Plain-English Encyclopedia (02 + 08) */}
        <div className="rounded-[28px] bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/10 p-6 sm:p-9 shadow-[0_12px_36px_rgba(0,0,0,0.04)]">
          <div className="max-w-[680px]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8E8E5] dark:bg-white/10 text-[12px] font-semibold">
              <span>grouped process tree · 230+ daemon encyclopedia · ⌘K palette</span>
            </div>
            <h2 className="mt-3 text-[28px] sm:text-[38px] font-bold tracking-[-0.03em] leading-[1.06]">
              stop googling{" "}
              <span className="bg-black/[0.07] dark:bg-white/[0.1] px-3 py-0.5 rounded-xl font-semibold">
                what is mds_stores
              </span>{" "}
              at 200% CPU.
            </h2>
            <p className="mt-3 text-[15.5px] leading-[1.6] text-[#111113]/72 dark:text-white/72">
              Activity Monitor scatters Safari, Chrome, Cursor, and Xcode across
              dozens of ungrouped XPC rows. Taskyfy folds every helper under its
              parent app to show the true combined CPU, RAM, and Energy
              footprint — and explains 230+ macOS system processes in plain
              English with a clear{" "}
              <strong className="text-[#16A34A] dark:text-emerald-400">
                Safe to Quit
              </strong>{" "}
              or{" "}
              <strong className="text-[#D97706] dark:text-amber-400">
                System Critical
              </strong>{" "}
              verdict.
            </p>
          </div>

          <div className="mt-7 grid grid-cols-1 lg:grid-cols-2 gap-5">
            <figure className="rounded-[20px] bg-[#F6F6F4] dark:bg-[#1a1a1e] border border-black/[0.08] dark:border-white/10 p-3">
              <Image
                src="/brand/Taskyfy/02-taskyfy-processes-grouped.png"
                alt="Taskyfy Grouped Applications & Process Tree with 230+ Daemon Plain-English Encyclopedia"
                width={1352}
                height={872}
                loading="lazy"
                className="w-full h-auto rounded-[14px]"
              />
              <figcaption className="mt-2.5 text-[12px] text-[#111113]/65 dark:text-white/65 px-1">
                <strong>Grouped Applications &amp; Process Tree</strong> —
                parent apps roll up all helper processes alongside plain-English
                daemon subtitles and the right-hand{" "}
                <code className="font-mono">SecStaticCode</code> Security
                Inspector.
              </figcaption>
            </figure>

            <figure className="rounded-[20px] bg-[#F6F6F4] dark:bg-[#1a1a1e] border border-black/[0.08] dark:border-white/10 p-3">
              <Image
                src="/brand/Taskyfy/08-taskyfy-command-palette.png"
                alt="Taskyfy Instant ⌘K Quick Command Palette & Daemon Search"
                width={1352}
                height={872}
                loading="lazy"
                className="w-full h-auto rounded-[14px]"
              />
              <figcaption className="mt-2.5 text-[12px] text-[#111113]/65 dark:text-white/65 px-1">
                <strong>Instant ⌘K Quick Command Palette</strong> — search any
                running app, PID, listening port (<code className="font-mono">:3000</code>),
                or macOS daemon in the Process Encyclopedia from the keyboard.
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Deep-Dive 2: Memory Leak Hunter, 7-Day RAM Advisor & Live Port Radar (03 + 06) */}
        <div
          id="memory-ports"
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch"
        >
          <article className="rounded-[28px] bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/10 p-6 sm:p-7 flex flex-col justify-between shadow-[0_12px_36px_rgba(0,0,0,0.04)]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16A34A]/10 text-[#16A34A] dark:text-emerald-400 text-[12px] font-semibold">
                <span>7-day RAM advisor · 15-min leak watch · browser relief</span>
              </div>
              <h3 className="mt-3 text-[24px] sm:text-[30px] font-bold tracking-[-0.03em] leading-[1.08]">
                catch slow{" "}
                <span className="bg-black/[0.07] dark:bg-white/[0.1] px-2.5 py-0.5 rounded-xl font-semibold">
                  memory leaks
                </span>{" "}
                &amp; know if you need more RAM.
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.6] text-[#111113]/70 dark:text-white/70">
                Tracks a rolling 15-minute <code className="font-mono">phys_footprint</code>{" "}
                ring buffer per process to flag monotonic memory growth before
                macOS hits swap pressure, summarizes browser tab helper RAM with
                a 1-click native Task Manager launcher, and analyzes 7-day P95
                swap/compression peaks to recommend 8 GB, 16 GB, 32 GB, or 64
                GB.
              </p>
            </div>
            <div className="mt-5 rounded-[18px] bg-[#F6F6F4] dark:bg-[#1a1a1e] border border-black/[0.08] dark:border-white/10 p-2.5">
              <Image
                src="/brand/Taskyfy/03-taskyfy-memory-advisor.png"
                alt="Taskyfy Unified Memory, 7-Day RAM Capacity Advisor, Browser Tab Optimizer & 15-Min Leak Watch"
                width={1352}
                height={872}
                loading="lazy"
                className="w-full h-auto rounded-[12px]"
              />
            </div>
          </article>

          <article className="rounded-[28px] bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/10 p-6 sm:p-7 flex flex-col justify-between shadow-[0_12px_36px_rgba(0,0,0,0.04)]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8E8E5] dark:bg-white/10 text-[12px] font-semibold">
                <span>listening TCP/UDP port radar (:3000) · NVMe disk I/O</span>
              </div>
              <h3 className="mt-3 text-[24px] sm:text-[30px] font-bold tracking-[-0.03em] leading-[1.08]">
                never type{" "}
                <span className="bg-black/[0.07] dark:bg-white/[0.1] px-2.5 py-0.5 rounded-xl font-mono font-semibold text-[21px] sm:text-[25px]">
                  lsof -i :3000
                </span>{" "}
                in terminal again.
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.6] text-[#111113]/70 dark:text-white/70">
                Inspect every active listening TCP/UDP port mapped to its owning
                PID, binary path, and Apple notarization signature — plus live{" "}
                <code className="font-mono">en0</code> upload/download
                throughput and per-application NVMe SSD Read/Write rates. Quit
                or Force Quit stuck localhost servers in one click.
              </p>
            </div>
            <div className="mt-5 rounded-[18px] bg-[#F6F6F4] dark:bg-[#1a1a1e] border border-black/[0.08] dark:border-white/10 p-2.5">
              <Image
                src="/brand/Taskyfy/06-taskyfy-network-port-radar.png"
                alt="Taskyfy Network & NVMe Storage I/O + Live Port & Socket Radar (:3000, LISTEN)"
                width={1352}
                height={872}
                loading="lazy"
                className="w-full h-auto rounded-[12px]"
              />
            </div>
          </article>
        </div>

        {/* Deep-Dive 3: Apple Silicon Thermals, 36+ Die Sensors & Real-Time Wattage (05 + 04) */}
        <div className="rounded-[28px] bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/10 p-6 sm:p-9 shadow-[0_12px_36px_rgba(0,0,0,0.04)]">
          <div className="max-w-[680px]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8E8E5] dark:bg-white/10 text-[12px] font-semibold">
              <span>36+ AppleSMC &amp; IOKit HID die sensors · live system watts</span>
            </div>
            <h2 className="mt-3 text-[28px] sm:text-[38px] font-bold tracking-[-0.03em] leading-[1.06]">
              real-time{" "}
              <span className="bg-black/[0.07] dark:bg-white/[0.1] px-3 py-0.5 rounded-xl font-semibold">
                system wattage
              </span>{" "}
              &amp; 36+ silicon die sensors.
            </h2>
            <p className="mt-3 text-[15.5px] leading-[1.6] text-[#111113]/72 dark:text-white/72">
              Reads calibrated temperature channels directly from AppleSMC and
              IOKit HID across Efficiency cores, Performance cores,{" "}
              <code className="font-mono">Tdie1–Tdie8</code>, PMU rails, NVMe
              NAND storage, and battery cells — paired with live system power
              draw in Watts (<code className="font-mono">W</code>), battery
              health %, cycle count, and per-app CPU wakeups/s.
            </p>
          </div>

          <div className="mt-7 grid grid-cols-1 lg:grid-cols-2 gap-5">
            <figure className="rounded-[20px] bg-[#F6F6F4] dark:bg-[#1a1a1e] border border-black/[0.08] dark:border-white/10 p-3">
              <Image
                src="/brand/Taskyfy/05-taskyfy-sensors-thermals.png"
                alt="Taskyfy Apple Silicon Thermal Envelope, 36+ Hardware Die Sensors & Fan RPM"
                width={1352}
                height={872}
                loading="lazy"
                className="w-full h-auto rounded-[14px]"
              />
              <figcaption className="mt-2.5 text-[12px] text-[#111113]/65 dark:text-white/65 px-1">
                <strong>36+ Hardware Die Sensors &amp; Fan RPM</strong> —
                CPU/SoC core sensors, NVMe NAND controller temperatures, thermal
                headroom (<code className="font-mono">36°C</code>), and cooling
                fan RPM.
              </figcaption>
            </figure>

            <figure className="rounded-[20px] bg-[#F6F6F4] dark:bg-[#1a1a1e] border border-black/[0.08] dark:border-white/10 p-3">
              <Image
                src="/brand/Taskyfy/04-taskyfy-energy-watts.png"
                alt="Taskyfy System Power Draw (Watts), Battery Health, Cycles & Energy Impact"
                width={1352}
                height={872}
                loading="lazy"
                className="w-full h-auto rounded-[14px]"
              />
              <figcaption className="mt-2.5 text-[12px] text-[#111113]/65 dark:text-white/65 px-1">
                <strong>System Power Draw (Watts) &amp; Battery Health</strong>{" "}
                — live wattage (<code className="font-mono">6.2 W</code>), 99%
                battery health, 72 cycles, and per-app wakeups/s Energy Impact.
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Deep-Dive 4: 30-Day SQLite WAL Time Machine (07) */}
        <div className="rounded-[28px] bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/10 p-6 sm:p-9 grid grid-cols-1 lg:grid-cols-12 gap-7 items-center shadow-[0_12px_36px_rgba(0,0,0,0.04)]">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16A34A]/10 text-[#16A34A] dark:text-emerald-400 text-[12px] font-semibold">
              <span>30-day SQLite WAL time machine · JSON &amp; CSV export</span>
            </div>
            <h2 className="text-[26px] sm:text-[34px] font-bold tracking-[-0.03em] leading-[1.06]">
              scrub{" "}
              <span className="bg-black/[0.07] dark:bg-white/[0.1] px-2.5 py-0.5 rounded-xl font-semibold">
                30 days of history
              </span>{" "}
              stored 100% on your mac.
            </h2>
            <p className="text-[15px] leading-[1.6] text-[#111113]/72 dark:text-white/72">
              Activity Monitor forgets everything the instant you close the
              window. Taskyfy writes non-blocking 1-minute rollups to a local
              SQLite3 database in Write-Ahead Logging (<code className="font-mono">WAL</code>)
              mode so you can scrub <strong>1H</strong>, <strong>24H</strong>,{" "}
              <strong>7D</strong>, or <strong>30D</strong> of CPU, Memory, and
              System Power Watts — correlated with a timestamped{" "}
              <strong>Recorded System Events</strong> feed and 1-click{" "}
              <strong>Export JSON / CSV</strong>.
            </p>
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <div className="rounded-2xl bg-[#F6F6F4] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/10 p-3">
                <div className="text-[11px] text-[#111113]/55 dark:text-white/55">
                  Database Mode
                </div>
                <div className="mt-0.5 font-mono text-[14px] font-semibold text-[#16A34A] dark:text-emerald-400">
                  SQLite3 journal_mode=WAL
                </div>
              </div>
              <div className="rounded-2xl bg-[#F6F6F4] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/10 p-3">
                <div className="text-[11px] text-[#111113]/55 dark:text-white/55">
                  Export Formats
                </div>
                <div className="mt-0.5 font-mono text-[14px] font-semibold">
                  1-Click JSON &amp; CSV
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <figure className="rounded-[20px] bg-[#F6F6F4] dark:bg-[#1a1a1e] border border-black/[0.08] dark:border-white/10 p-3">
              <Image
                src="/brand/Taskyfy/07-taskyfy-history-sqlite-wal.png"
                alt="Taskyfy 30-Day SQLite WAL Historical Telemetry & 1-Click JSON/CSV Export"
                width={1352}
                height={872}
                loading="lazy"
                className="w-full h-auto rounded-[14px]"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: Comparison Table ("why taskyfy?")
          ===================================================================== */}
      <section className="py-16 sm:py-24 px-5 max-w-[980px] mx-auto">
        <div className="text-center max-w-[600px] mx-auto">
          <h2 className="text-[32px] sm:text-[44px] font-bold tracking-[-0.03em] leading-[1.06]">
            why taskyfy?
          </h2>
          <p className="mt-2.5 text-[16.5px] text-[#111113]/65 dark:text-white/65">
            how taskyfy compares against macOS Activity Monitor, iStat Menus,
            and terminal monitors.
          </p>
        </div>

        <div className="mt-9 rounded-[26px] bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/10 overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.04)]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[680px]">
              <thead>
                <tr className="border-b border-black/[0.08] dark:border-white/10 bg-[#FAF9F6] dark:bg-white/[0.03] text-[13px]">
                  <th className="py-4 px-5 font-medium text-[#111113]/55 dark:text-white/55 w-[38%]">
                    capability
                  </th>
                  <th className="py-4 px-4 font-semibold text-[#111113] dark:text-white bg-[#16A34A]/[0.06]">
                    <span className="inline-flex items-center gap-1.5">
                      <Image
                        src="/brand/Taskyfy/icon.png"
                        alt="Taskyfy icon"
                        width={18}
                        height={18}
                        className="w-4 h-4 rounded"
                      />
                      <span>taskyfy (free · MIT)</span>
                    </span>
                  </th>
                  <th className="py-4 px-4 font-medium text-[#111113]/60 dark:text-white/60">
                    macOS activity monitor
                  </th>
                  <th className="py-4 px-4 font-medium text-[#111113]/60 dark:text-white/60">
                    istat menus ($11.99)
                  </th>
                  <th className="py-4 px-4 font-medium text-[#111113]/60 dark:text-white/60">
                    btop / htop
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/[0.08] dark:divide-white/10 text-[13.5px]">
                {TASKYFY_COMPARISON_ROWS.map((row) => (
                  <tr key={row.feature}>
                    <td className="py-4 px-5 font-medium text-[#111113] dark:text-white">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 font-semibold text-[#16A34A] dark:text-emerald-400 bg-[#16A34A]/[0.05]">
                      <span className="inline-flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-[#16A34A] shrink-0" />
                        <span>
                          {row.taskyfy.replace("✓", "").trim() || "yes"}
                        </span>
                      </span>
                    </td>
                    <td className="py-4 px-4 text-[#111113]/55 dark:text-white/55">
                      {row.activityMonitor === "✕" ? (
                        <X className="w-4 h-4 text-[#111113]/35 dark:text-white/35" />
                      ) : (
                        row.activityMonitor
                      )}
                    </td>
                    <td className="py-4 px-4 text-[#111113]/55 dark:text-white/55">
                      {row.istatMenus === "✕" ? (
                        <X className="w-4 h-4 text-[#111113]/35 dark:text-white/35" />
                      ) : (
                        row.istatMenus
                      )}
                    </td>
                    <td className="py-4 px-4 text-[#111113]/55 dark:text-white/55">
                      {row.btop === "✕" ? (
                        <X className="w-4 h-4 text-[#111113]/35 dark:text-white/35" />
                      ) : (
                        row.btop
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Keyboard Shortcuts Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {TASKYFY_SHORTCUTS.map((s) => (
            <div
              key={s.shortcut}
              className="rounded-2xl bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/10 p-4 flex items-center justify-between gap-3"
            >
              <div className="min-w-0">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#111113]/45 dark:text-white/45">
                  {s.scope}
                </div>
                <div className="text-[13px] font-medium text-[#111113]/85 dark:text-white/85 mt-0.5">
                  {s.action}
                </div>
              </div>
              <kbd className="px-2.5 py-1 rounded-lg bg-[#E8E8E5]/70 dark:bg-white/10 border border-black/[0.08] dark:border-white/15 font-mono text-[12px] font-semibold text-[#111113] dark:text-white shrink-0">
                {s.shortcut}
              </kbd>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          SECTION 5: Download DMG & Open-Source Card (#open-source)
          ===================================================================== */}
      <section
        id="open-source"
        className="py-12 sm:py-20 px-5 max-w-[1040px] mx-auto"
      >
        <div className="rounded-[28px] bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/10 p-6 sm:p-9 shadow-[0_16px_48px_rgba(0,0,0,0.045)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16A34A]/10 text-[#16A34A] dark:text-emerald-400 text-[12px] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                <span>free &amp; open source forever · v2.0 (MIT)</span>
              </div>

              <h2 className="text-[28px] sm:text-[38px] font-bold tracking-[-0.03em] leading-[1.08]">
                install in 3 seconds.{" "}
                <span className="bg-black/[0.07] dark:bg-white/[0.1] px-2.5 py-0.5 rounded-xl font-semibold">
                  $0 / month forever.
                </span>
              </h2>

              <p className="text-[15.5px] leading-[1.6] text-[#111113]/72 dark:text-white/72">
                Download the signed and Apple-notarized{" "}
                <strong className="text-[#111113] dark:text-white">
                  3.2 MB Universal macOS installer
                </strong>
                , drag Taskyfy into Applications, and open it. Zero
                subscriptions, zero accounts, and 100% local privacy. For
                developers, the complete project is available on{" "}
                <a
                  href={GITHUB_REPO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#111113] dark:text-white underline underline-offset-4"
                >
                  GitHub under the MIT License
                </a>
                .
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={DIRECT_DMG_HREF}
                  className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-[#111113] dark:bg-white text-white dark:text-[#111113] text-[14px] font-semibold hover:bg-black/85 transition-colors"
                >
                  <AppleLogoIcon className="w-4 h-4 -mt-0.5" />
                  <span>Download Taskyfy.dmg (3.2 MB)</span>
                </a>
                <a
                  href={GITHUB_REPO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-[#F6F6F4] dark:bg-white/10 border border-black/[0.08] dark:border-white/10 text-[13.5px] font-medium text-[#111113] dark:text-white hover:bg-black/[0.04] transition-colors"
                >
                  <GitHubIcon className="w-4 h-4" />
                  <span>Open Source on GitHub (MIT)</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-75" />
                </a>
              </div>

              <div className="pt-1 flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopySha}
                  className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-full bg-[#F6F6F4] dark:bg-white/10 border border-black/[0.08] dark:border-white/10 text-[11.5px] font-mono text-[#111113]/70 dark:text-white/70 hover:text-[#111113]"
                >
                  <Copy className="w-3 h-3" />
                  <span>
                    {copiedSha
                      ? "Copied SHA-256!"
                      : "SHA-256: 85394df089866a052b277bef...4b7e3464"}
                  </span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-[#F6F6F4] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/10 p-3">
                <Image
                  src="/brand/Taskyfy/00-dmg-background.png"
                  alt="Taskyfy.dmg installer — drag taskyfy into applications, then open it."
                  width={600}
                  height={400}
                  loading="lazy"
                  className="w-full h-auto rounded-xl border border-black/[0.08] dark:border-white/10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 6: FAQ Accordion ("questions, answered.")
          ===================================================================== */}
      <section
        id="faq"
        className="py-16 sm:py-24 px-5 max-w-[740px] mx-auto"
      >
        <div className="text-center mb-10">
          <h2 className="text-[32px] sm:text-[42px] font-bold tracking-[-0.03em]">
            questions, answered.
          </h2>
          <p className="mt-2 text-[15.5px] text-[#111113]/65 dark:text-white/65">
            everything about Taskyfy, TaskyfyHelper XPC, SQLite WAL history, and
            Apple Silicon sensors.
          </p>
        </div>

        <div className="space-y-2.5">
          {TASKYFY_FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={faq.question}
                className="rounded-[20px] bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/10 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 text-[16px] font-semibold text-[#111113] dark:text-white hover:bg-black/[0.015] dark:hover:bg-white/[0.02] transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 text-[#111113]/50 dark:text-white/50 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-[14.5px] leading-[1.65] text-[#111113]/72 dark:text-white/72 border-t border-black/[0.06] dark:border-white/5 pt-3.5">
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
        <OtherAppsShowcase currentSlug="taskyfy" />
      </div>

      {/* =====================================================================
          SECTION 7: Footer CTA (#download)
          ===================================================================== */}
      <section
        id="download"
        className="pt-12 pb-20 sm:pb-28 px-5 max-w-[820px] mx-auto text-center"
      >
        <div className="rounded-[32px] bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/10 p-8 sm:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#F6F6F4] dark:bg-white/10 border border-black/[0.08] dark:border-white/10 p-2 mb-5">
            <Image
              src="/brand/Taskyfy/icon.png"
              alt="Taskyfy app icon"
              width={56}
              height={56}
              className="w-full h-full object-contain rounded-xl"
            />
          </div>

          <h2 className="text-[34px] sm:text-[50px] font-bold tracking-[-0.03em] leading-[1.04]">
            every metric on your mac.{" "}
            <span className="bg-black/[0.07] dark:bg-white/[0.1] px-3 py-0.5 rounded-xl font-semibold">
              clear
            </span>{" "}
            in a second.
          </h2>
          <p className="mt-3.5 text-[18px] sm:text-[21px] text-[#111113]/70 dark:text-white/70">
            grouped processes, 230+ plain-english daemons, 15-min leak watch,
            and 30-day SQLite WAL history.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap">
            <a
              href={DIRECT_DMG_HREF}
              className="inline-flex items-center justify-center gap-2.5 h-12 px-8 rounded-full bg-[#111113] dark:bg-white text-white dark:text-[#111113] text-[15px] font-medium shadow-[0_10px_28px_rgba(0,0,0,0.16)] hover:bg-black/85 transition-all"
            >
              <AppleLogoIcon className="w-4 h-4 shrink-0 -mt-0.5" />
              <span>download for mac (v2.0 · 3.2 MB)</span>
            </a>
            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 h-12 px-5 rounded-full bg-[#F6F6F4] dark:bg-white/10 border border-black/[0.08] dark:border-white/10 text-[13px] font-medium text-[#111113]/80 dark:text-white/80 hover:text-[#111113] transition-colors"
            >
              <GitHubIcon className="w-4 h-4" />
              <span>Open Source on GitHub (MIT)</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
            <a
              href={GITHUB_RELEASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 h-12 px-5 rounded-full bg-[#F6F6F4] dark:bg-white/10 border border-black/[0.08] dark:border-white/10 text-[13px] font-medium text-[#111113]/75 dark:text-white/75 hover:text-[#111113] transition-colors"
            >
              <span>GitHub Release v2.0 (.dmg) →</span>
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

          <p className="mt-4 text-[12px] text-[#111113]/50 dark:text-white/50">
            macOS 14.0 Sonoma · macOS 15.0 Sequoia · macOS 26 Tahoe · Universal
            Apple Silicon &amp; Intel · Apple Developer ID Signed &amp;
            Notarized · MIT License
          </p>

          <div className="mt-10 pt-6 border-t border-black/[0.08] dark:border-white/10 text-[13px] text-[#111113]/60 dark:text-white/60 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span>
              © 2026 taskyfy · made with ❤️ by{" "}
              <Link
                href="/"
                className="underline underline-offset-4 hover:text-[#111113] dark:hover:text-white"
              >
                cogify.me
              </Link>{" "}
              (
              <a
                href="mailto:connect@cogify.me"
                className="underline underline-offset-4 hover:text-[#111113] dark:hover:text-white"
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
                className="hover:text-[#111113] dark:hover:text-white"
              >
                github (MIT)
              </a>
              <a
                href={GITHUB_RELEASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#111113] dark:hover:text-white"
              >
                v2.0 release
              </a>
              <Link
                href="/products"
                className="hover:text-[#111113] dark:hover:text-white"
              >
                all cogify apps
              </Link>
              <Link
                href="/privacy"
                className="hover:text-[#111113] dark:hover:text-white"
              >
                privacy
              </Link>
              <Link
                href="/terms"
                className="hover:text-[#111113] dark:hover:text-white"
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
