/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HardDrive,
  Lock,
  Layers,
  Film,
  Sparkles,
  RefreshCw,
  RotateCcw,
  Pin,
  Search,
  UploadCloud,
  Wifi,
  ShieldCheck,
  Check,
  X,
  ChevronDown,
  Plus,
  Folder,
  Copy,
  ExternalLink,
} from "lucide-react";
import { AppleLogoIcon } from "@/components/ui/platform-icons";
import { OtherAppsShowcase } from "@/components/products/other-apps-showcase";
import {
  HERO_FINDER_FILES,
  ROLE_SHOWCASE_TABS,
  WHAT_YOU_GET_LIST,
  PRIMARY_BENTO_CARDS,
  EXTENDED_BENTO_CARDS,
  COMPARISON_ROWS,
  HELIUM_FAQS,
  WHATS_NEW_V002_PILLARS,
  type WhatYouGetItem,
} from "./helium-data";

const GITHUB_DMG_URL =
  "https://github.com/Shubham-sharma8/cogifyme/releases/download/helium-v0.0.2/Helium-0.0.2.dmg";
const GITHUB_V001_DMG_URL =
  "https://github.com/Shubham-sharma8/cogifyme/releases/download/helium-v0.0.1/Helium.dmg";
const DIRECT_DMG_HREF = "/Helium.dmg";
const SHA256_HASH =
  "039a4aeb5ff033d5a2cc86e354b8ec19ab9ccff929c0df8f59e67d938c69233e";

function FeatureLineIcon({ type }: { type: WhatYouGetItem["iconType"] }) {
  const cls = "w-4 h-4 text-[#111110]/70 dark:text-white/75 shrink-0";
  switch (type) {
    case "pool":
      return <HardDrive className={cls} strokeWidth={1.75} />;
    case "lock":
      return <Lock className={cls} strokeWidth={1.75} />;
    case "stripe":
      return <Layers className={cls} strokeWidth={1.75} />;
    case "film":
      return <Film className={cls} strokeWidth={1.75} />;
    case "sparkles":
      return <Sparkles className={cls} strokeWidth={1.75} />;
    case "sync":
      return <RefreshCw className={cls} strokeWidth={1.75} />;
    case "undo":
      return <RotateCcw className={cls} strokeWidth={1.75} />;
    case "pin":
      return <Pin className={cls} strokeWidth={1.75} />;
    case "search":
      return <Search className={cls} strokeWidth={1.75} />;
    case "menubar":
      return <UploadCloud className={cls} strokeWidth={1.75} />;
    case "wifi":
      return <Wifi className={cls} strokeWidth={1.75} />;
    case "resume":
      return <ShieldCheck className={cls} strokeWidth={1.75} />;
  }
}

export function HeliumLandingView() {
  const [selectedFileId, setSelectedFileId] = useState<string>(
    HERO_FINDER_FILES[0].id
  );
  const [activeRoleId, setActiveRoleId] = useState<string>(
    ROLE_SHOWCASE_TABS[0].id
  );
  const [extraDrivesCount, setExtraDrivesCount] = useState<number>(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [copiedSha, setCopiedSha] = useState(false);

  const selectedFile =
    HERO_FINDER_FILES.find((f) => f.id === selectedFileId) ||
    HERO_FINDER_FILES[0];
  const activeRole =
    ROLE_SHOWCASE_TABS.find((r) => r.id === activeRoleId) ||
    ROLE_SHOWCASE_TABS[0];

  const totalPoolTb = (11.015 + extraDrivesCount * 2.0).toFixed(2);

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
          aria-label="Helium Navigation"
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
            href="#helium"
            className="h-8 px-3 rounded-full inline-flex items-center gap-1.5 font-semibold bg-[#F2F2F0] dark:bg-white/[0.12] text-[#111110] dark:text-white transition-colors"
          >
            <Image
              src="/brand/Helium/mascot.webp"
              alt="Helium smiling folder mascot icon"
              width={18}
              height={18}
              className="w-4 h-4 object-contain"
            />
            <span>helium</span>
          </a>

          <a
            href="#whats-new"
            className="h-8 px-2.5 sm:px-3 rounded-full inline-flex items-center gap-1 text-emerald-700 dark:text-emerald-300 font-medium hover:bg-emerald-500/10 transition-colors"
          >
            <span>what&apos;s new v0.0.2</span>
          </a>
          <a
            href="#how-it-works"
            className="h-8 px-2.5 sm:px-3 rounded-full inline-flex items-center text-[#111110]/70 dark:text-white/70 hover:text-[#111110] dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors"
          >
            how it works
          </a>
          <a
            href="#drive-pool"
            className="h-8 px-2.5 sm:px-3 rounded-full inline-flex items-center text-[#111110]/70 dark:text-white/70 hover:text-[#111110] dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors"
          >
            drive pool
          </a>
          <a
            href="#love"
            className="hidden sm:inline-flex h-8 px-3 rounded-full items-center text-[#111110]/70 dark:text-white/70 hover:text-[#111110] dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors"
          >
            love
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
          SECTION 1: Hero + Interactive macOS Finder & "Get Info" Mockup
          ===================================================================== */}
      <section
        id="helium"
        className="pt-14 sm:pt-20 pb-16 sm:pb-24 px-5 max-w-[1080px] mx-auto"
      >
        <div className="max-w-[720px] mx-auto text-center">
          {/* Version & Platform Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#161618] border border-[#E6E6E4] dark:border-white/10 text-[12px] text-[#111110]/70 dark:text-white/70 mb-6 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-[#111110] dark:text-white">
              helium v0.0.2 (build 2)
            </span>
            <span className="text-[#111110]/30 dark:text-white/30">·</span>
            <span>25+ cloud &amp; nas presets</span>
            <span className="text-[#111110]/30 dark:text-white/30">·</span>
            <span>macOS 15.4+ &amp; macOS 26 tahoe</span>
          </div>

          {/* Headline: meet helium. */}
          <h1 className="text-[44px] sm:text-[64px] md:text-[72px] font-semibold tracking-[-0.04em] leading-[1.02] text-[#111110] dark:text-white flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
            <span>meet helium</span>
            <span className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white dark:bg-[#18181b] border border-[#E6E6E4] dark:border-white/10 shadow-[0_6px_20px_rgba(0,0,0,0.06)] p-2">
              <Image
                src="/brand/Helium/icon.webp"
                alt="Helium macOS app icon — smiling blue cloud folder"
                width={56}
                height={56}
                className="w-full h-full object-contain"
              />
            </span>
          </h1>

          {/* Subheadline: [ unlimited pooled space ] for your mac, without buying a new ssd. */}
          <p className="mt-5 text-[20px] sm:text-[26px] leading-[1.38] tracking-[-0.02em] text-[#111110]/80 dark:text-white/80 max-w-[600px] mx-auto font-normal">
            <span className="marker font-serif italic text-[23px] sm:text-[30px] text-[#111110] dark:text-white px-2.5 py-0.5">
              unlimited pooled space
            </span>{" "}
            for your mac, without buying a new ssd.
          </p>

          {/* Primary CTA: [  download for mac ] */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={DIRECT_DMG_HREF}
              className="inline-flex items-center justify-center gap-2.5 h-12 px-7 rounded-full bg-[#111110] dark:bg-white text-white dark:text-[#111110] text-[15px] font-medium shadow-[0_10px_28px_rgba(0,0,0,0.14)] hover:scale-[1.015] active:scale-[0.99] transition-all"
            >
              <AppleLogoIcon className="w-4 h-4 shrink-0 -mt-0.5" />
              <span>download for mac (v0.0.2)</span>
            </a>
            <a
              href={GITHUB_DMG_URL}
              className="inline-flex items-center justify-center gap-1.5 h-12 px-5 rounded-full bg-white dark:bg-[#161618] border border-[#E6E6E4] dark:border-white/10 text-[13.5px] text-[#111110]/80 dark:text-white/80 hover:text-[#111110] dark:hover:text-white hover:border-black/20 transition-colors"
            >
              <span>direct github release (v0.0.2 · 8.3 MB .dmg)</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>

          {/* Meta Microcopy */}
          <p className="mt-4 text-[12.5px] text-[#111110]/55 dark:text-white/55 tracking-[-0.01em]">
            free to download · apple notarized · google drive pool + 25+ S3 / R2
            / WebDAV / SFTP / SMB presets · 5-step safe-write · time travel
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

        {/* Interactive Hero Visual: macOS Finder + Floating "Get Info" Inspector */}
        <div className="mt-12 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Left 8 Columns: Realistic Interactive macOS Finder Window */}
          <div className="lg:col-span-8 rounded-[24px] bg-white dark:bg-[#141417] border border-[#E6E6E4] dark:border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.07)] overflow-hidden flex flex-col">
            {/* Finder Window Titlebar */}
            <div className="px-4 py-3 border-b border-[#E6E6E4] dark:border-white/10 bg-[#FAFAFA] dark:bg-[#1a1a1e] flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57] border border-black/10" />
                <span className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-black/10" />
                <span className="w-3 h-3 rounded-full bg-[#28C840] border border-black/10" />
                <span className="ml-2 text-[12.5px] font-semibold text-[#111110] dark:text-white flex items-center gap-1.5">
                  <Image
                    src="/brand/Helium/icon-sm.webp"
                    alt="Helium volume icon"
                    width={16}
                    height={16}
                    className="w-4 h-4 rounded"
                  />
                  <span>Helium › Google Drive Pool</span>
                </span>
              </div>
              <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                /Volumes/Helium · 11 TB Pooled
              </span>
            </div>

            {/* Finder Body: Sidebar + File Table */}
            <div className="grid grid-cols-1 sm:grid-cols-12 flex-1">
              {/* Finder Sidebar */}
              <div className="sm:col-span-4 border-b sm:border-b-0 sm:border-r border-[#E6E6E4] dark:border-white/10 bg-[#F7F7F6] dark:bg-[#17171b] p-3.5 flex flex-col justify-between">
                <div>
                  <div className="text-[10.5px] font-semibold uppercase tracking-wider text-[#111110]/45 dark:text-white/45 px-2 mb-1.5">
                    Locations
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between px-2.5 py-2 rounded-xl text-[12.5px] text-[#111110]/70 dark:text-white/70">
                      <span className="flex items-center gap-2">
                        <HardDrive className="w-3.5 h-3.5 opacity-60" />
                        <span>Macintosh HD</span>
                      </span>
                      <span className="text-[11px] text-[#111110]/45 dark:text-white/45">
                        214 GB free
                      </span>
                    </div>
                    <div className="flex items-center justify-between px-2.5 py-2 rounded-xl bg-white dark:bg-white/10 border border-[#E6E6E4] dark:border-white/10 text-[12.5px] font-semibold text-[#111110] dark:text-white shadow-xs">
                      <span className="flex items-center gap-2">
                        <Image
                          src="/brand/Helium/icon-sm.webp"
                          alt="Helium Finder location icon"
                          width={16}
                          height={16}
                          className="w-4 h-4 rounded"
                        />
                        <span>Helium</span>
                      </span>
                      <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                        11 TB
                      </span>
                    </div>
                  </div>

                  <div className="text-[10.5px] font-semibold uppercase tracking-wider text-[#111110]/45 dark:text-white/45 px-2 mt-5 mb-1.5">
                    Pooled Google Drives
                  </div>
                  <div className="space-y-1.5 text-[11.5px] px-2">
                    <div className="flex items-center justify-between text-[#111110]/75 dark:text-white/75">
                      <span className="truncate">● studio@workspace.io</span>
                      <span className="font-mono text-[10.5px] opacity-65">
                        5.5 TB
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[#111110]/75 dark:text-white/75">
                      <span className="truncate">● archive@workspace.io</span>
                      <span className="font-mono text-[10.5px] opacity-65">
                        5.5 TB
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[#111110]/75 dark:text-white/75">
                      <span className="truncate">● personal@gmail.com</span>
                      <span className="font-mono text-[10.5px] opacity-65">
                        15 GB
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E6E6E4] dark:border-white/10 px-2 text-[11px] text-[#111110]/55 dark:text-white/55">
                  Click any file to inspect in macOS{" "}
                  <strong className="text-[#111110] dark:text-white">
                    Get Info (⌘I)
                  </strong>
                </div>
              </div>

              {/* Finder File List */}
              <div className="sm:col-span-8 p-3.5 flex flex-col justify-between">
                <div>
                  <div className="grid grid-cols-12 px-3 py-1.5 text-[11px] font-medium text-[#111110]/45 dark:text-white/45 border-b border-[#E6E6E4] dark:border-white/10">
                    <div className="col-span-6">Name</div>
                    <div className="col-span-3 text-right">Cloud Size</div>
                    <div className="col-span-3 text-right">On This Mac</div>
                  </div>

                  <div className="divide-y divide-[#E6E6E4]/60 dark:divide-white/5 mt-1">
                    {HERO_FINDER_FILES.map((file) => {
                      const active = file.id === selectedFile.id;
                      return (
                        <button
                          key={file.id}
                          type="button"
                          onClick={() => setSelectedFileId(file.id)}
                          className={`w-full grid grid-cols-12 items-center px-3 py-3 rounded-xl text-left transition-all ${
                            active
                              ? "bg-[#111110] text-white dark:bg-white dark:text-[#111110] shadow-xs"
                              : "hover:bg-black/[0.03] dark:hover:bg-white/[0.04] text-[#111110] dark:text-white"
                          }`}
                        >
                          <div className="col-span-6 flex items-center gap-2.5 min-w-0 pr-2">
                            <Folder
                              className={`w-4 h-4 shrink-0 ${
                                active
                                  ? "text-emerald-400 dark:text-emerald-600"
                                  : "text-sky-500"
                              }`}
                            />
                            <div className="min-w-0">
                              <div className="text-[12.5px] font-medium truncate">
                                {file.name}
                              </div>
                              <div
                                className={`text-[10.5px] truncate ${
                                  active
                                    ? "text-white/70 dark:text-[#111110]/70"
                                    : "text-[#111110]/50 dark:text-white/50"
                                }`}
                              >
                                {file.kind}
                              </div>
                            </div>
                          </div>
                          <div className="col-span-3 text-right font-mono text-[12px]">
                            {file.sizeShort}
                          </div>
                          <div className="col-span-3 flex justify-end">
                            <span
                              className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10.5px] font-semibold ${
                                active
                                  ? "bg-emerald-400/20 text-emerald-300 dark:bg-emerald-600/15 dark:text-emerald-700"
                                  : "bg-emerald-500/12 text-emerald-700 dark:text-emerald-300"
                              }`}
                            >
                              {file.badge}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Finder Bottom Status Bar */}
                <div className="mt-4 pt-2.5 border-t border-[#E6E6E4] dark:border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#111110]/55 dark:text-white/55 px-2">
                  <span>
                    4 items · 11.01 TB available in pool ·{" "}
                    <strong className="text-emerald-700 dark:text-emerald-400">
                      0 B used on Macintosh HD
                    </strong>
                  </span>
                  <span className="font-mono">/Volumes/Helium</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right 4 Columns: Floating macOS "Get Info" Inspector Window */}
          <div className="lg:col-span-4 rounded-[24px] bg-white dark:bg-[#141417] border border-[#E6E6E4] dark:border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.09)] p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#E6E6E4] dark:border-white/10">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                </div>
                <span className="text-[11.5px] font-semibold text-[#111110]/70 dark:text-white/70 truncate max-w-[200px]">
                  {selectedFile.name} Info
                </span>
                <span className="text-[10px] font-mono text-[#111110]/40 dark:text-white/40">
                  ⌘I
                </span>
              </div>

              {/* File Header inside Get Info */}
              <div className="py-4 border-b border-[#E6E6E4] dark:border-white/10 flex items-center gap-3">
                <Image
                  src="/brand/Helium/icon.webp"
                  alt="Helium sparse file icon"
                  width={44}
                  height={44}
                  className="w-11 h-11 rounded-xl object-contain shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <div className="text-[14px] font-semibold text-[#111110] dark:text-white truncate">
                    {selectedFile.name}
                  </div>
                  <div className="text-[11.5px] text-[#111110]/55 dark:text-white/55">
                    {selectedFile.sizeShort} · Modified {selectedFile.modified}
                  </div>
                </div>
              </div>

              {/* General Inspector Key-Values */}
              <div className="py-3.5 space-y-2.5 text-[12px]">
                <div className="text-[10.5px] font-semibold uppercase tracking-wider text-[#111110]/45 dark:text-white/45">
                  General:
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <span className="text-[#111110]/55 dark:text-white/55">
                    Kind:
                  </span>
                  <span className="col-span-2 font-medium text-[#111110] dark:text-white">
                    {selectedFile.kind}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 items-start">
                  <span className="text-[#111110]/55 dark:text-white/55">
                    Size:
                  </span>
                  <div className="col-span-2">
                    <div className="font-mono text-[11.5px] text-[#111110] dark:text-white">
                      {selectedFile.sizeBytes}
                    </div>
                    <div className="mt-1 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 font-semibold text-[11.5px]">
                      <span>({selectedFile.onDisk})</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <span className="text-[#111110]/55 dark:text-white/55">
                    Where:
                  </span>
                  <span className="col-span-2 font-mono text-[11.5px] text-[#111110] dark:text-white">
                    {selectedFile.where}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <span className="text-[#111110]/55 dark:text-white/55">
                    Pool Mode:
                  </span>
                  <span className="col-span-2 text-[11.5px] text-[#111110]/80 dark:text-white/80">
                    {selectedFile.driveOrigin}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <span className="text-[#111110]/55 dark:text-white/55">
                    Details:
                  </span>
                  <span className="col-span-2 text-[11.5px] text-[#111110]/70 dark:text-white/70">
                    {selectedFile.dimensionsOrMeta}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#E6E6E4] dark:border-white/10 flex items-center justify-between text-[11.5px]">
              <span className="text-[#111110]/55 dark:text-white/55">
                Opens in QuickTime / Preview
              </span>
              <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                0.8 s instant stream
              </span>
            </div>
          </div>
        </div>

        {/* Full High-Resolution macOS Finder & Get Info Visual Showcase */}
        <figure className="mt-6 rounded-[24px] bg-white dark:bg-[#141417] border border-[#E6E6E4] dark:border-white/10 p-3 sm:p-4 shadow-[0_12px_36px_rgba(0,0,0,0.05)] overflow-hidden">
          <Image
            src="/brand/Helium/sections/07-hero-finder-zero-bytes.webp"
            alt="Helium mounted at /Volumes/Helium in macOS Finder alongside Get Info inspector showing wedding-film_final.mov at 48.2 GB using Zero bytes on disk"
            title="Helium — /Volumes/Helium in macOS Finder (Zero bytes on disk)"
            width={1440}
            height={900}
            className="w-full h-auto rounded-[18px] object-cover"
          />
          <figcaption className="mt-2.5 text-center text-[12px] text-[#111110]/55 dark:text-white/55">
            /Volumes/Helium in macOS Finder — a 48.2 GB ProRes film, 21.7 GB
            drone reel, and .dmg installers occupying{" "}
            <strong className="text-[#111110] dark:text-white">
              Zero bytes on disk
            </strong>
            .
          </figcaption>
        </figure>
      </section>

      {/* =====================================================================
          SECTION 1B: What's New in Helium v0.0.2 (Build 2)
          ===================================================================== */}
      <section
        id="whats-new"
        className="py-16 sm:py-24 px-5 max-w-[1080px] mx-auto"
      >
        <div className="rounded-[32px] bg-white dark:bg-[#141417] border border-[#E6E6E4] dark:border-white/10 p-6 sm:p-10 shadow-[0_18px_54px_rgba(0,0,0,0.05)]">
          {/* Header Banner */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#E6E6E4] dark:border-white/10">
            <div className="max-w-[680px]">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/12 text-emerald-700 dark:text-emerald-300 text-[12px] font-semibold mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>new release · helium v0.0.2 (build 2) · nov 9, 2026</span>
              </div>
              <h2 className="text-[30px] sm:text-[42px] font-semibold tracking-[-0.035em] leading-[1.1]">
                what&apos;s new in{" "}
                <span className="marker font-serif italic font-normal px-2.5 py-0.5">
                  helium v0.0.2
                </span>
                .
              </h2>
              <p className="mt-3 text-[16px] sm:text-[17.5px] leading-[1.6] text-[#111110]/70 dark:text-white/70">
                Beyond multi-account Google Drive pooling with{" "}
                <strong className="text-[#111110] dark:text-white">
                  64 MiB RAID-0 cross-account striping
                </strong>
                , Build 2 introduces{" "}
                <strong className="text-[#111110] dark:text-white">
                  25+ multi-protocol cloud &amp; NAS presets
                </strong>
                , 5-Step Safe-Write Verification, Scheduled Add-Only Mac Backups (
                <code className="font-mono text-[14px]">⌘⇧K</code>), Time Travel
                Snapshots (<code className="font-mono text-[14px]">⌘⇧Y</code>), a
                Right-Hand File Inspector, and Activity &amp; Health (
                <code className="font-mono text-[14px]">⌘⇧A</code>).
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <a
                href={DIRECT_DMG_HREF}
                className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-[#111110] dark:bg-white text-white dark:text-[#111110] text-[13.5px] font-medium hover:opacity-90 transition-opacity"
              >
                <AppleLogoIcon className="w-4 h-4 shrink-0 -mt-0.5" />
                <span>Download v0.0.2 (8.3 MB)</span>
              </a>
              <a
                href={GITHUB_V001_DMG_URL}
                className="inline-flex items-center gap-1.5 h-11 px-4 rounded-full bg-[#F7F7F7] dark:bg-white/10 border border-[#E6E6E4] dark:border-white/10 text-[12px] text-[#111110]/70 dark:text-white/70 hover:text-[#111110] dark:hover:text-white transition-colors"
              >
                <span>Previous v0.0.1 (5.3 MB)</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>

          {/* 25+ Supported Cloud & Protocol Presets Strip */}
          <div className="py-6 border-b border-[#E6E6E4] dark:border-white/10">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="text-[11.5px] font-mono uppercase tracking-wider text-[#111110]/55 dark:text-white/55 font-semibold">
                25+ Built-In Storage Presets + Smart Endpoint &amp; S3 Region Inference (auto, us-east-1, eu-west-1…)
              </span>
              <span className="text-[11.5px] font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
                OAuth 2.0 PKCE · S3 · WebDAV · SFTP/SSH · SMB · BYOK · External SSD
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                "Google Drive Pool (64 MiB RAID-0)",
                "Amazon S3",
                "Cloudflare R2 (Zero Egress)",
                "Backblaze B2",
                "Wasabi",
                "Hetzner Object Storage",
                "DigitalOcean Spaces",
                "Storj DCS",
                "Tigris",
                "Google Cloud Storage (HMAC)",
                "MinIO / Garage / Ceph",
                "Nextcloud (WebDAV)",
                "ownCloud",
                "Fastmail Files",
                "pCloud",
                "Synology NAS",
                "Hetzner Storage Box (SFTP)",
                "rsync.net (SSH)",
                "Standard SFTP",
                "Local NAS / Time Capsule (_smb._tcp)",
                "Azure Files (SMB)",
                "Dropbox (BYOK OAuth)",
                "Microsoft OneDrive (BYOK)",
                "Box (BYOK)",
                "External USB / Thunderbolt SSD",
              ].map((preset) => (
                <span
                  key={preset}
                  className="px-2.5 py-1 rounded-full bg-[#F7F7F7] dark:bg-white/[0.05] border border-[#E6E6E4] dark:border-white/10 text-[11.5px] font-medium text-[#111110]/80 dark:text-white/80"
                >
                  {preset}
                </span>
              ))}
            </div>
          </div>

          {/* 6 Pillars Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {WHATS_NEW_V002_PILLARS.map((pillar) => (
              <article
                key={pillar.id}
                className="rounded-[24px] bg-[#F7F7F7] dark:bg-white/[0.03] border border-[#E6E6E4] dark:border-white/10 p-5 sm:p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="inline-flex items-center gap-2">
                      <span className="font-mono text-[11.5px] font-semibold px-2 py-0.5 rounded-md bg-white dark:bg-white/10 border border-[#E6E6E4] dark:border-white/15 text-[#111110] dark:text-white">
                        {pillar.number}
                      </span>
                      <span className="text-[11.5px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/12 text-emerald-700 dark:text-emerald-300">
                        {pillar.badge}
                      </span>
                    </div>
                    {pillar.shortcut && (
                      <kbd className="px-2 py-0.5 rounded-md bg-white dark:bg-white/10 border border-[#E6E6E4] dark:border-white/15 font-mono text-[11px] font-semibold text-[#111110]/75 dark:text-white/75">
                        {pillar.shortcut}
                      </kbd>
                    )}
                  </div>

                  <h3 className="text-[20px] sm:text-[22px] font-semibold tracking-[-0.02em] leading-[1.2] text-[#111110] dark:text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-1.5 text-[13.5px] leading-[1.55] text-[#111110]/68 dark:text-white/68">
                    {pillar.subtitle}
                  </p>

                  <ul className="mt-4 space-y-2.5 pt-3 border-t border-[#E6E6E4] dark:border-white/10">
                    {pillar.bullets.map((b) => (
                      <li key={b.heading} className="text-[13px] leading-[1.5]">
                        <div className="font-semibold text-[#111110] dark:text-white flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                          <span>{b.heading}</span>
                        </div>
                        <p className="pl-5 text-[12.5px] text-[#111110]/65 dark:text-white/65 mt-0.5">
                          {b.detail}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          {/* Executable Command Palette (⌃⌥O) Quick Action Chips */}
          <div className="mt-6 rounded-2xl bg-[#F7F7F7] dark:bg-white/[0.03] border border-[#E6E6E4] dark:border-white/10 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-[12px] font-mono font-semibold text-[#111110] dark:text-white flex items-center gap-2">
                <kbd className="px-2 py-0.5 rounded bg-white dark:bg-white/10 border border-[#E6E6E4] dark:border-white/15">
                  ⌃⌥O
                </kbd>
                <span>Executable Command Palette + Privacy Network Contact Map</span>
              </div>
              <p className="text-[12.5px] text-[#111110]/65 dark:text-white/65 mt-1">
                Search files across all pooled drives or trigger instant pool operations—with{" "}
                <strong className="text-emerald-700 dark:text-emerald-400">
                  0 analytics/telemetry contacts
                </strong>{" "}
                and 1-click <strong className="text-[#111110] dark:text-white">Save Redacted Log…</strong>.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                "Take Pool Snapshot",
                "Run All Mac Backups",
                "5-Step Safe-Write Check",
                "Connect S3 / R2 / WebDAV / NAS",
                "Pause / Resume Transfers",
                "Rebalance Pool",
              ].map((cmd) => (
                <span
                  key={cmd}
                  className="px-2.5 py-1 rounded-lg bg-white dark:bg-[#141417] border border-[#E6E6E4] dark:border-white/10 font-mono text-[11px] text-[#111110]/80 dark:text-white/80"
                >
                  ⌘ {cmd}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: Role-Based Interactive Showcase ("built for every kind of work.")
          ===================================================================== */}
      <section className="py-16 sm:py-24 px-5 max-w-[1040px] mx-auto">
        <div className="text-center max-w-[640px] mx-auto">
          <h2 className="text-[32px] sm:text-[44px] font-semibold tracking-[-0.035em] leading-[1.08]">
            built for every kind of work.
          </h2>
          <p className="mt-3 text-[17px] sm:text-[19px] text-[#111110]/65 dark:text-white/65">
            pooled across your google drives, open in a second.
          </p>

          {/* Interactive Tab Pills */}
          <div
            role="tablist"
            aria-label="Helium Workflows by Role"
            className="mt-7 inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-full bg-white dark:bg-[#141417] border border-[#E6E6E4] dark:border-white/10 shadow-xs"
          >
            {ROLE_SHOWCASE_TABS.map((tab) => {
              const isSelected = tab.id === activeRole.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  onClick={() => setActiveRoleId(tab.id)}
                  className={`h-9 px-4 rounded-full text-[13px] font-medium transition-all ${
                    isSelected
                      ? "bg-[#111110] text-white dark:bg-white dark:text-[#111110] shadow-xs"
                      : "text-[#111110]/65 dark:text-white/65 hover:text-[#111110] dark:hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Role Card */}
        <div className="mt-8 rounded-[28px] bg-white dark:bg-[#141417] border border-[#E6E6E4] dark:border-white/10 p-6 sm:p-8 shadow-[0_16px_48px_rgba(0,0,0,0.05)] grid grid-cols-1 lg:grid-cols-12 gap-7 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-[12px] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>{activeRole.badgeText}</span>
            </div>

            <h3 className="text-[24px] sm:text-[28px] font-semibold tracking-[-0.025em] leading-[1.18]">
              {activeRole.headline}
            </h3>

            <p className="text-[15px] leading-[1.6] text-[#111110]/70 dark:text-white/70">
              {activeRole.subline}
            </p>

            {/* 3 Role Metrics */}
            <div className="grid grid-cols-3 gap-2.5 pt-1">
              {activeRole.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl bg-[#F7F7F7] dark:bg-white/[0.04] border border-[#E6E6E4] dark:border-white/10 p-3"
                >
                  <div className="text-[11px] text-[#111110]/55 dark:text-white/55">
                    {m.label}
                  </div>
                  <div
                    className={`mt-0.5 text-[16px] sm:text-[18px] font-semibold tracking-tight ${
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

            {/* Active Role Sample Files */}
            <div className="rounded-2xl bg-[#F7F7F7] dark:bg-white/[0.03] border border-[#E6E6E4] dark:border-white/10 p-3.5 space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#111110]/50 dark:text-white/50 pb-1 border-b border-[#E6E6E4] dark:border-white/10">
                <span>{activeRole.windowTitle}</span>
                <span>{activeRole.windowSubtitle}</span>
              </div>
              {activeRole.files.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between gap-2 text-[12.5px] py-1"
                >
                  <div className="min-w-0">
                    <div className="font-medium text-[#111110] dark:text-white truncate">
                      {item.name}
                    </div>
                    <div className="text-[11px] text-[#111110]/55 dark:text-white/55 truncate">
                      {item.meta}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="font-mono text-[11.5px] text-[#111110]/70 dark:text-white/70">
                      {item.size}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/12 text-emerald-700 dark:text-emerald-300 text-[10.5px] font-semibold">
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Image */}
          <div className="lg:col-span-6">
            <div className="rounded-[22px] bg-[#F7F7F7] dark:bg-[#1a1a1e] border border-[#E6E6E4] dark:border-white/10 p-3 overflow-hidden">
              <Image
                src={activeRole.visualImage}
                alt={activeRole.visualAlt}
                title={activeRole.headline}
                width={900}
                height={680}
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
              a new drive in finder, powered by all your google drives combined.
            </p>
            <p>
              it sits right next to macintosh hd at{" "}
              <code className="px-1.5 py-0.5 rounded bg-white dark:bg-white/10 border border-[#E6E6E4] dark:border-white/10 font-mono text-[15px]">
                /Volumes/Helium
              </code>
              . your files look and open like normal, in the apps you already
              use.
            </p>
            <p>
              but they live in your pooled google drives, so a 50 GB film takes
              zero space on your mac.
            </p>
            <p>
              and with optional zero-knowledge encryption, only you hold the
              key.
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
              icloud and dropbox download the whole file before you can open it
              — and a single google drive caps out fast.
            </p>
            <p>
              helium links unlimited google accounts into one storage pool and
              only streams the bytes you&apos;re using:
            </p>
          </div>

          {/* 3 Stat Pills */}
          <div className="pt-2 flex flex-wrap gap-2.5">
            <div className="px-4 py-2.5 rounded-full bg-white dark:bg-[#141417] border border-[#E6E6E4] dark:border-white/10 text-[13.5px] font-medium shadow-2xs">
              <strong className="text-emerald-600 dark:text-emerald-400">
                0 bytes
              </strong>{" "}
              used on your mac
            </div>
            <div className="px-4 py-2.5 rounded-full bg-white dark:bg-[#141417] border border-[#E6E6E4] dark:border-white/10 text-[13.5px] font-medium shadow-2xs">
              <strong className="text-[#111110] dark:text-white">0.8 s</strong>{" "}
              to open any file
            </div>
            <div className="px-4 py-2.5 rounded-full bg-white dark:bg-[#141417] border border-[#E6E6E4] dark:border-white/10 text-[13.5px] font-medium shadow-2xs">
              <strong className="text-[#111110] dark:text-white">
                N × drives
              </strong>{" "}
              pooled into 1 volume
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
                text: "install helium. link 1 or more google drives in your menu bar.",
              },
              {
                step: "02",
                text: "open the /Volumes/Helium drive in finder.",
              },
              {
                step: "03",
                text: "drag in your biggest files. done.",
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
            {WHAT_YOU_GET_LIST.map((item) => (
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
            your files in the cloud.
            <br />
            <span className="marker font-serif italic font-normal px-3 py-0.5">
              zero
            </span>{" "}
            on your mac.
          </h3>
          <div className="mt-6 space-y-4 text-[17.5px] leading-[1.6] text-[#111110]/75 dark:text-white/75">
            <p>
              helium looks like a normal drive. open a film or disk image and it
              plays right away, because your mac only grabs the part it needs.
            </p>
            <p>
              nothing gets copied to your disk, so your mac keeps its space.
              delete something by mistake? you have 30 days in the helium
              recycle bin to get it back.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: Multi-Account Google Drive Pool Deep Dive
          ("link multiple google drives. [ one massive drive ] in finder.")
          ===================================================================== */}
      <section
        id="drive-pool"
        className="py-16 sm:py-24 px-5 max-w-[1040px] mx-auto"
      >
        <div className="text-center max-w-[720px] mx-auto">
          <h2 className="text-[32px] sm:text-[46px] font-semibold tracking-[-0.035em] leading-[1.1]">
            link multiple google drives.{" "}
            <span className="marker font-serif italic font-normal px-2.5 py-0.5">
              one massive drive
            </span>{" "}
            in finder.
          </h2>
          <p className="mt-4 text-[17px] text-[#111110]/65 dark:text-white/65">
            helium&apos;s storage placement engine combines free 15 GB google
            accounts and workspace terabytes into a single mount at{" "}
            <code className="font-mono text-[15px]">/Volumes/Helium</code>.
          </p>
        </div>

        {/* Interactive Storage Placement Engine Card */}
        <div className="mt-10 rounded-[28px] bg-white dark:bg-[#141417] border border-[#E6E6E4] dark:border-white/10 p-6 sm:p-9 shadow-[0_18px_50px_rgba(0,0,0,0.05)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E6E6E4] dark:border-white/10">
            <div>
              <div className="text-[11.5px] font-mono uppercase tracking-wider text-[#111110]/50 dark:text-white/50">
                Helium Storage Placement Engine · /Volumes/Helium
              </div>
              <div className="mt-1 text-[26px] sm:text-[32px] font-semibold tracking-tight">
                {totalPoolTb} TB Total Unified Pool{" "}
                <span className="text-[14px] font-normal text-emerald-600 dark:text-emerald-400">
                  (0 B on Macintosh HD)
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setExtraDrivesCount((c) => Math.min(c + 1, 6))}
                className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-full bg-[#111110] dark:bg-white text-white dark:text-[#111110] text-[12.5px] font-medium hover:opacity-90 transition-opacity"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>simulate +2 TB google drive</span>
              </button>
              {extraDrivesCount > 0 && (
                <button
                  type="button"
                  onClick={() => setExtraDrivesCount(0)}
                  className="h-9 px-3 rounded-full border border-[#E6E6E4] dark:border-white/10 text-[12px] text-[#111110]/65 dark:text-white/65"
                >
                  reset
                </button>
              )}
            </div>
          </div>

          {/* Segmented Capacity Bar */}
          <div className="mt-6">
            <div className="h-5 w-full rounded-full bg-[#F2F2F0] dark:bg-white/10 p-1 flex gap-1 overflow-hidden">
              <div
                style={{ width: "48%" }}
                className="h-full rounded-l-full bg-emerald-500 transition-all"
                title="Account #1 Primary • 5.5 TB"
              />
              <div
                style={{ width: "44%" }}
                className="h-full bg-sky-500 transition-all"
                title="Account #2 Overflow • 5.5 TB"
              />
              <div
                style={{ width: extraDrivesCount > 0 ? "4%" : "8%" }}
                className="h-full bg-amber-500 rounded-r-full transition-all"
                title="Account #3 Free • 15 GB"
              />
              {extraDrivesCount > 0 && (
                <div
                  style={{ width: `${Math.min(extraDrivesCount * 8, 25)}%` }}
                  className="h-full bg-indigo-500 rounded-r-full transition-all"
                  title={`+${extraDrivesCount} Pooled Overflow Drives`}
                />
              )}
            </div>

            {/* Account Legend Pills */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-2xl bg-[#F7F7F7] dark:bg-white/[0.04] border border-[#E6E6E4] dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <div>
                    <div className="text-[13px] font-semibold">
                      Account #1 Primary
                    </div>
                    <div className="text-[11px] text-[#111110]/55 dark:text-white/55">
                      studio@workspace.io
                    </div>
                  </div>
                </div>
                <span className="font-mono text-[13px] font-semibold">
                  5.5 TB
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#F7F7F7] dark:bg-white/[0.04] border border-[#E6E6E4] dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
                  <div>
                    <div className="text-[13px] font-semibold">
                      Account #2 Overflow
                    </div>
                    <div className="text-[11px] text-[#111110]/55 dark:text-white/55">
                      archive@workspace.io
                    </div>
                  </div>
                </div>
                <span className="font-mono text-[13px] font-semibold">
                  5.5 TB
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#F7F7F7] dark:bg-white/[0.04] border border-[#E6E6E4] dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <div>
                    <div className="text-[13px] font-semibold">
                      Account #3 Free {extraDrivesCount > 0 ? `+ ${extraDrivesCount} Extra` : ""}
                    </div>
                    <div className="text-[11px] text-[#111110]/55 dark:text-white/55">
                      personal@gmail.com
                    </div>
                  </div>
                </div>
                <span className="font-mono text-[13px] font-semibold">
                  {extraDrivesCount > 0
                    ? `15 GB + ${extraDrivesCount * 2} TB`
                    : "15 GB"}
                </span>
              </div>
            </div>
          </div>

          {/* 2 Placement Modes */}
          <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#F7F7F7] dark:bg-white/[0.03] border border-[#E6E6E4] dark:border-white/10 p-5">
              <div className="inline-flex items-center gap-2 font-mono text-[12px] text-emerald-700 dark:text-emerald-400 font-semibold">
                <span>01</span>
                <span>·</span>
                <span>whole-file smart placement</span>
              </div>
              <p className="mt-2 text-[14.5px] leading-[1.55] text-[#111110]/75 dark:text-white/75">
                Places complete files onto the highest-priority drive with
                enough free space so files can also be opened directly in Google
                Drive Web.
              </p>
              <Image
                src="/brand/Helium/visuals/visual-11-pool-multiple-google-drives.webp"
                alt="Helium Whole-File Smart Placement across pooled Google Drive accounts"
                width={640}
                height={400}
                loading="lazy"
                className="mt-4 w-full h-auto rounded-xl border border-[#E6E6E4] dark:border-white/10"
              />
            </div>

            <div className="rounded-2xl bg-[#F7F7F7] dark:bg-white/[0.03] border border-[#E6E6E4] dark:border-white/10 p-5">
              <div className="inline-flex items-center gap-2 font-mono text-[12px] text-sky-700 dark:text-sky-400 font-semibold">
                <span>02</span>
                <span>·</span>
                <span>cross-account segment striping</span>
              </div>
              <p className="mt-2 text-[14.5px] leading-[1.55] text-[#111110]/75 dark:text-white/75">
                Automatically slices massive files (256 MiB segments) across
                multiple linked Google Drives when no single account has enough
                free space, and reassembles them transparently on the fly.
              </p>
              <Image
                src="/brand/Helium/visuals/visual-12-store-files-bigger-than-single-drive.webp"
                alt="Helium Cross-Account Segment Striping splitting a 32 GB file across 3 Google Drives"
                width={640}
                height={400}
                loading="lazy"
                className="mt-4 w-full h-auto rounded-xl border border-[#E6E6E4] dark:border-white/10"
              />
            </div>
          </div>

          {/* 3 Pool Engine Guarantees */}
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#E6E6E4] dark:border-white/10">
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F7F7F7]/70 dark:bg-white/[0.02]">
              <RefreshCw className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <div className="text-[13px] font-semibold">
                  1-Click Pool Rebalancer
                </div>
                <div className="text-[12px] text-[#111110]/60 dark:text-white/60">
                  Evenly redistribute files &amp; segments when you link a new
                  drive.
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F7F7F7]/70 dark:bg-white/[0.02]">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <div className="text-[13px] font-semibold">
                  SHA-256 Segment Integrity Verifier
                </div>
                <div className="text-[12px] text-[#111110]/60 dark:text-white/60">
                  Cryptographic checksum verification on every 256 MiB chunk.
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F7F7F7]/70 dark:bg-white/[0.02]">
              <HardDrive className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <div className="text-[13px] font-semibold">
                  Safe Account Drain &amp; Unlink
                </div>
                <div className="text-[12px] text-[#111110]/60 dark:text-white/60">
                  Automatically migrates segments to remaining drives before
                  unlinking.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 5: Bento Feature Grid ("made for big files.")
          ===================================================================== */}
      <section className="py-16 sm:py-24 px-5 max-w-[1040px] mx-auto">
        {/* "Sound familiar?" Startup Disk Almost Full Callout */}
        <div className="mb-16 rounded-[28px] bg-white dark:bg-[#141417] border border-[#E6E6E4] dark:border-white/10 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center shadow-xs">
          <div className="lg:col-span-5 space-y-3">
            <span className="text-[12px] font-mono uppercase tracking-wider text-rose-600 dark:text-rose-400 font-semibold">
              sound familiar?
            </span>
            <h3 className="text-[28px] sm:text-[34px] font-semibold tracking-[-0.03em] leading-[1.12]">
              &ldquo;Your disk is almost full.&rdquo;
            </h3>
            <p className="text-[15px] leading-[1.6] text-[#111110]/70 dark:text-white/70">
              Apple charges $600 to upgrade a MacBook SSD from 256 GB to 2 TB.
              Helium turns the Google Drives you already own into a fast local
              volume that never fills up your internal disk.
            </p>
          </div>
          <div className="lg:col-span-7">
            <Image
              src="/brand/Helium/sections/02-macbook-disk-almost-full.webp"
              alt="macOS Startup Disk Almost Full alert solved by moving heavy files to /Volumes/Helium with 0 B on disk"
              width={960}
              height={540}
              loading="lazy"
              className="w-full h-auto rounded-2xl border border-[#E6E6E4] dark:border-white/10"
            />
          </div>
        </div>

        <div className="text-center max-w-[600px] mx-auto">
          <h2 className="text-[34px] sm:text-[46px] font-semibold tracking-[-0.035em] leading-[1.08]">
            made for big files.
          </h2>
          <p className="mt-3 text-[17px] text-[#111110]/65 dark:text-white/65">
            everything stays in finder. zero extra windows, zero local disk
            bloat.
          </p>
        </div>

        {/* 6 Core White Bento Cards on #F7F7F7 Canvas */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRIMARY_BENTO_CARDS.map((card) => (
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
                    height={420}
                    loading="lazy"
                    className="w-full h-44 object-cover"
                  />
                </div>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-[19px] font-semibold tracking-[-0.02em]">
                    {card.title}
                  </h3>
                  {card.badge && (
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#F7F7F7] dark:bg-white/10 border border-[#E6E6E4] dark:border-white/10 text-[#111110]/70 dark:text-white/70">
                      {card.badge}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-[14px] leading-[1.55] text-[#111110]/68 dark:text-white/68">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* 4 Extended Workflow Bento Cards */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {EXTENDED_BENTO_CARDS.map((card) => (
            <article
              key={card.id}
              className="rounded-[22px] bg-white dark:bg-[#141417] border border-[#E6E6E4] dark:border-white/10 p-4 flex flex-col justify-between shadow-2xs"
            >
              <div>
                <div className="rounded-[14px] bg-[#F7F7F7] dark:bg-[#1a1a1e] border border-[#E6E6E4]/70 dark:border-white/10 overflow-hidden mb-3.5">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    title={card.title}
                    width={520}
                    height={340}
                    className="w-full h-36 object-cover"
                  />
                </div>
                <h3 className="text-[16.5px] font-semibold tracking-[-0.015em]">
                  {card.title}
                </h3>
                <p className="mt-1.5 text-[13px] leading-[1.5] text-[#111110]/65 dark:text-white/65">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================================
          SECTION 6: Comparison Table ("why helium?")
          ===================================================================== */}
      <section className="py-16 sm:py-24 px-5 max-w-[920px] mx-auto">
        <div className="text-center max-w-[560px] mx-auto">
          <h2 className="text-[32px] sm:text-[44px] font-semibold tracking-[-0.035em] leading-[1.1]">
            why helium?
          </h2>
          <p className="mt-2.5 text-[16.5px] text-[#111110]/65 dark:text-white/65">
            built to pool drives and keep 0 bytes on your mac.
          </p>
        </div>

        <div className="mt-9 rounded-[26px] bg-white dark:bg-[#141417] border border-[#E6E6E4] dark:border-white/10 overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.04)]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-[#E6E6E4] dark:border-white/10 bg-[#FAFAFA] dark:bg-white/[0.03] text-[13px]">
                  <th className="py-4 px-5 font-medium text-[#111110]/55 dark:text-white/55 w-[42%]">
                    feature
                  </th>
                  <th className="py-4 px-4 font-semibold text-[#111110] dark:text-white bg-emerald-500/[0.06]">
                    <span className="inline-flex items-center gap-1.5">
                      <Image
                        src="/brand/Helium/icon-sm.webp"
                        alt="Helium icon"
                        width={18}
                        height={18}
                        className="w-4 h-4 rounded"
                      />
                      <span>helium</span>
                    </span>
                  </th>
                  <th className="py-4 px-4 font-medium text-[#111110]/60 dark:text-white/60">
                    icloud drive
                  </th>
                  <th className="py-4 px-4 font-medium text-[#111110]/60 dark:text-white/60">
                    google drive app
                  </th>
                  <th className="py-4 px-4 font-medium text-[#111110]/60 dark:text-white/60">
                    dropbox
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E6E6E4] dark:divide-white/10 text-[14px]">
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.feature}>
                    <td className="py-4 px-5 font-medium text-[#111110] dark:text-white">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-500/[0.05]">
                      <span className="inline-flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{row.helium.replace("✓", "").trim() || "yes"}</span>
                      </span>
                    </td>
                    <td className="py-4 px-4 text-[#111110]/55 dark:text-white/55">
                      {row.icloud === "✕" ? (
                        <X className="w-4 h-4 text-[#111110]/35 dark:text-white/35" />
                      ) : (
                        row.icloud
                      )}
                    </td>
                    <td className="py-4 px-4 text-[#111110]/55 dark:text-white/55">
                      {row.gdrive === "✕" ? (
                        <X className="w-4 h-4 text-[#111110]/35 dark:text-white/35" />
                      ) : (
                        row.gdrive
                      )}
                    </td>
                    <td className="py-4 px-4 text-[#111110]/55 dark:text-white/55">
                      {row.dropbox === "✕" ? (
                        <X className="w-4 h-4 text-[#111110]/35 dark:text-white/35" />
                      ) : (
                        row.dropbox
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
          SECTION 7A: Love & Pricing (#love, #pricing)
          ===================================================================== */}
      <section
        id="love"
        className="py-12 sm:py-16 px-5 max-w-[1040px] mx-auto"
      >
        <div className="text-center max-w-[540px] mx-auto mb-9">
          <h2 className="text-[30px] sm:text-[40px] font-semibold tracking-[-0.03em]">
            loved by mac creators.
          </h2>
          <p className="mt-2 text-[15.5px] text-[#111110]/65 dark:text-white/65">
            editors, photographers, and engineers running on 256 GB and 512 GB
            macbooks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              quote:
                "I pooled two 2 TB Google Workspace drives and three free Gmail accounts into /Volumes/Helium. DaVinci Resolve scrubs my 48 GB ProRes wedding timeline with 0 bytes used on my M3 Air.",
              author: "Aarav M.",
              role: "4K Documentary & Wedding Editor",
            },
            {
              quote:
                "iCloud Drive kept silently filling up my local SSD whenever I opened a folder. Helium mounts as a real drive, opens 60MP Sony RAWs in 0.8s, and actually takes 0 KB on Macintosh HD.",
              author: "Elena R.",
              role: "Editorial Fashion Photographer",
            },
            {
              quote:
                "Cross-account segment striping is genius. I dropped a 42 GB GGUF model into /Volumes/Helium and it striped cleanly across my Google Drives with SHA-256 verification.",
              author: "Karthik S.",
              role: "macOS & ML Systems Engineer",
            },
          ].map((item) => (
            <div
              key={item.author}
              className="rounded-[22px] bg-white dark:bg-[#141417] border border-[#E6E6E4] dark:border-white/10 p-5 flex flex-col justify-between"
            >
              <p className="text-[14.5px] leading-[1.6] text-[#111110]/80 dark:text-white/80">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="mt-4 pt-3 border-t border-[#E6E6E4] dark:border-white/10 flex items-center justify-between text-[12.5px]">
                <span className="font-semibold">{item.author}</span>
                <span className="text-[#111110]/55 dark:text-white/55">
                  {item.role}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Card (#pricing) */}
        <div
          id="pricing"
          className="mt-14 rounded-[28px] bg-white dark:bg-[#141417] border border-[#E6E6E4] dark:border-white/10 p-6 sm:p-9 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center shadow-xs"
        >
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/12 text-emerald-700 dark:text-emerald-300 text-[12px] font-semibold">
              <span>free forever release · v0.0.2 (build 2)</span>
            </div>
            <h3 className="text-[28px] sm:text-[36px] font-semibold tracking-[-0.03em] leading-[1.12]">
              bring your own google drives, S3, R2 &amp; NAS.{" "}
              <span className="marker font-serif italic font-normal px-2">
                $0 / month
              </span>{" "}
              from cogify.
            </h3>
            <p className="text-[15px] leading-[1.6] text-[#111110]/70 dark:text-white/70">
              Why pay another monthly cloud storage subscription when you
              already have Google Drive accounts, S3/R2 buckets, or a home NAS?
              Pool unlimited 15 GB free Google accounts, Workspace terabytes, or
              25+ multi-protocol presets into{" "}
              <code className="font-mono text-[13.5px]">/Volumes/Helium</code>{" "}
              for free.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={DIRECT_DMG_HREF}
                className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-[#111110] dark:bg-white text-white dark:text-[#111110] text-[14px] font-medium hover:opacity-90 transition-opacity"
              >
                <AppleLogoIcon className="w-4 h-4 shrink-0 -mt-0.5" />
                <span>download helium v0.0.2 (8.3 MB · free)</span>
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
                    : "SHA-256: 039a4aeb...c69233e"}
                </span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Image
              src="/brand/Helium/04-helium-dmg-installer-preview.webp"
              alt="Helium.dmg universal macOS installer — drag Helium to Applications in 3 seconds"
              title="Install Helium.dmg on macOS"
              width={680}
              height={440}
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
            everything about pooling google drives into /Volumes/Helium.
          </p>
        </div>

        <div className="space-y-2.5">
          {HELIUM_FAQS.map((faq, idx) => {
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

      {/* Supaste.com-Style Sister Apps Cross-Promotion Showcase */}
      <div className="max-w-[980px] mx-auto px-5">
        <OtherAppsShowcase currentSlug="helium" />
      </div>

      {/* =====================================================================
          SECTION 8: Footer CTA ("stop deleting files to make space.")
          ===================================================================== */}
      <section
        id="download"
        className="pt-12 pb-20 sm:pb-28 px-5 max-w-[820px] mx-auto text-center"
      >
        <div className="rounded-[32px] bg-white dark:bg-[#141417] border border-[#E6E6E4] dark:border-white/10 p-8 sm:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#F7F7F7] dark:bg-white/10 border border-[#E6E6E4] dark:border-white/10 p-2.5 mb-5">
            <Image
              src="/brand/Helium/mascot.webp"
              alt="Helium mascot smiling blue folder"
              width={56}
              height={56}
              className="w-full h-full object-contain"
            />
          </div>

          <h2 className="text-[34px] sm:text-[50px] font-semibold tracking-[-0.035em] leading-[1.06]">
            stop deleting files to make space.
          </h2>
          <p className="mt-3.5 text-[18px] sm:text-[21px] text-[#111110]/70 dark:text-white/70">
            pool your google drives into{" "}
            <code className="font-mono text-[17px]">/Volumes/Helium</code>,
            today.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap">
            <a
              href={DIRECT_DMG_HREF}
              className="inline-flex items-center justify-center gap-2.5 h-12 px-8 rounded-full bg-[#111110] dark:bg-white text-white dark:text-[#111110] text-[15px] font-medium shadow-[0_10px_28px_rgba(0,0,0,0.16)] hover:scale-[1.015] transition-transform"
            >
              <AppleLogoIcon className="w-4 h-4 shrink-0 -mt-0.5" />
              <span>download for mac (v0.0.2 · 8.3 MB)</span>
            </a>
            <a
              href={GITHUB_DMG_URL}
              className="inline-flex items-center justify-center gap-1.5 h-12 px-5 rounded-full bg-[#F7F7F7] dark:bg-white/10 border border-[#E6E6E4] dark:border-white/10 text-[13px] text-[#111110]/75 dark:text-white/75 hover:text-[#111110] transition-colors"
            >
              <span>GitHub Release Mirror (v0.0.2 Build 2 · 8.3 MB)</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
            <a
              href={GITHUB_V001_DMG_URL}
              className="inline-flex items-center justify-center gap-1.5 h-12 px-4 rounded-full bg-[#F7F7F7] dark:bg-white/10 border border-[#E6E6E4] dark:border-white/10 text-[12px] text-[#111110]/60 dark:text-white/60 hover:text-[#111110] transition-colors"
            >
              <span>Previous v0.0.1 (Build 1 · 5.3 MB)</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
          </div>

          <p className="mt-4 text-[12px] text-[#111110]/50 dark:text-white/50">
            macOS 15.4+ / macOS 26 Tahoe · Universal Apple Silicon &amp; Intel ·
            Apple Developer ID Signed &amp; Notarized
          </p>

          <div className="mt-10 pt-6 border-t border-[#E6E6E4] dark:border-white/10 text-[13px] text-[#111110]/60 dark:text-white/60 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span>
              © 2026 helium · made with ❤️ by{" "}
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
            <div className="flex items-center gap-4">
              <Link
                href="/products"
                className="hover:text-[#111110] dark:hover:text-white"
              >
                all 15 cogify apps
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
