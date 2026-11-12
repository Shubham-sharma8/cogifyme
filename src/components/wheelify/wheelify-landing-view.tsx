/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Sparkles,
  Calculator,
  ClipboardCheck,
  Layers,
  ShieldCheck,
  Check,
  ChevronDown,
  Copy,
  ExternalLink,
  Cpu,
  Command,
  Sliders,
  Lock,
} from "lucide-react";
import { AppleLogoIcon, GitHubIcon } from "@/components/ui/platform-icons";
import { OtherAppsShowcase } from "@/components/products/other-apps-showcase";
import {
  WHEELIFY_COMMAND_DEMOS,
  WHEELIFY_16_TOOLS,
  WHEELIFY_FILE_DIAL_SECTORS,
  WHEELIFY_PILLAR_TABS,
  WHEELIFY_WHAT_YOU_GET_LIST,
  WHEELIFY_COMPARISON_ROWS,
  WHEELIFY_SHORTCUTS,
  WHEELIFY_FAQS,
} from "./wheelify-data";

const WHEELIFY_DMG_URL =
  "https://github.com/Shubham-sharma8/wheelify/releases/download/v2.0.0/Wheelify.dmg";
const WHEELIFY_GITHUB_URL = "https://github.com/Shubham-sharma8/wheelify";
const WHEELIFY_RELEASE_TAG_URL =
  "https://github.com/Shubham-sharma8/wheelify/releases/tag/v2.0.0";
const WHEELIFY_SHA256 =
  "8e23637e5b2a7fc5af2e8e96e3c04009d29d85671d9664272479162c269a9861";

export function WheelifyLandingView() {
  const [selectedCommandIndex, setSelectedCommandIndex] = useState(0);
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const [wheelPreviewMode, setWheelPreviewMode] = useState<
    "workspace" | "file-dial"
  >("workspace");
  const [toolFilter, setToolFilter] = useState<
    "all" | "page1" | "page2" | "subarc"
  >("all");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [copiedSha, setCopiedSha] = useState(false);
  const [copiedInlineResult, setCopiedInlineResult] = useState(false);

  const selectedCommand = WHEELIFY_COMMAND_DEMOS[selectedCommandIndex];
  const activePillar = WHEELIFY_PILLAR_TABS[activePillarIndex];

  const filteredTools = WHEELIFY_16_TOOLS.filter((tool) => {
    if (toolFilter === "page1") {
      return tool.ringPage === "Page 1 (Primary Ring)";
    }
    if (toolFilter === "page2") {
      return tool.ringPage === "Page 2 (Extended Ring)";
    }
    if (toolFilter === "subarc") {
      return Boolean(tool.subArcActions && tool.subArcActions.length > 0);
    }
    return true;
  });

  const handleCopySha = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(WHEELIFY_SHA256);
      setCopiedSha(true);
      setTimeout(() => setCopiedSha(false), 2000);
    }
  };

  const handleCopyInlineResult = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(selectedCommand.headlineResult);
      setCopiedInlineResult(true);
      setTimeout(() => setCopiedInlineResult(false), 1800);
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F6F4] text-[#111113] selection:bg-black selection:text-white">
      {/* 1. FLOATING TOP PILL NAVBAR (Match cogify.me/helium 1:1) */}
      <header className="sticky top-4 z-50 mx-auto max-w-fit px-3">
        <nav
          aria-label="Wheelify Navigation"
          className="flex items-center gap-1 rounded-full border border-black/[0.08] bg-white/90 px-2.5 py-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl sm:gap-1.5 sm:px-3.5"
        >
          <Link
            href="/"
            className="rounded-full px-2.5 py-1 text-xs font-medium text-black/55 transition-colors hover:bg-black/[0.05] hover:text-black"
          >
            ← cogify
          </Link>
          <span className="h-3.5 w-px bg-black/[0.08]" />
          <a
            href="#top"
            className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold tracking-tight text-[#111113]"
          >
            <Image
              src="/images/wheelify/WheelifyLogo.png"
              alt="Wheelify Icon"
              width={18}
              height={18}
              className="h-[18px] w-[18px] rounded-[4px]"
            />
            wheelify
          </a>
          <a
            href="#how-it-works"
            className="hidden rounded-full bg-black/[0.06] px-3 py-1 text-xs font-medium text-[#111113] transition-colors hover:bg-black/[0.1] sm:inline-block"
          >
            how it works
          </a>
          <a
            href="#tools"
            className="hidden rounded-full px-2.5 py-1 text-xs font-medium text-black/65 transition-colors hover:bg-black/[0.05] hover:text-black md:inline-block"
          >
            16 tools
          </a>
          <a
            href="#file-dial"
            className="hidden rounded-full px-2.5 py-1 text-xs font-medium text-black/65 transition-colors hover:bg-black/[0.05] hover:text-black md:inline-block"
          >
            file dial (⌃space)
          </a>
          <a
            href="#frontier-ai"
            className="hidden rounded-full px-2.5 py-1 text-xs font-medium text-black/65 transition-colors hover:bg-black/[0.05] hover:text-black md:inline-block"
          >
            frontier ai
          </a>
          <a
            href="#open-source"
            className="hidden rounded-full px-2.5 py-1 text-xs font-medium text-black/65 transition-colors hover:bg-black/[0.05] hover:text-black lg:inline-block"
          >
            open source
          </a>
          <a
            href="#faq"
            className="hidden rounded-full px-2.5 py-1 text-xs font-medium text-black/65 transition-colors hover:bg-black/[0.05] hover:text-black lg:inline-block"
          >
            faq
          </a>
          <a
            href={WHEELIFY_DMG_URL}
            className="ml-0.5 inline-flex items-center gap-1.5 rounded-full bg-[#111113] px-3.5 py-1 text-xs font-semibold text-white transition-colors hover:bg-black/85"
          >
            <AppleLogoIcon className="h-3 w-3" />
            <span>download</span>
          </a>
        </nav>
      </header>

      {/* 2. HERO SECTION */}
      <section
        id="top"
        className="mx-auto max-w-6xl px-4 pt-10 pb-14 text-center sm:px-6 sm:pt-14 sm:pb-20"
      >
        {/* Top Metadata Pill */}
        <div className="mb-6 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-black/[0.08] bg-white px-3.5 py-1.5 text-xs font-medium text-black/70 shadow-xs">
          <span className="inline-flex items-center gap-1.5 font-semibold text-[#16A34A]">
            <span className="h-2 w-2 rounded-full bg-[#16A34A]" />
            v2.0.0 Open Source (MIT)
          </span>
          <span className="text-black/25">•</span>
          <span className="tabular-nums">
            ⌥ Space (16 Tools) + ⌃ Space (File Dial)
          </span>
          <span className="text-black/25">•</span>
          <span className="tabular-nums">
            1.9 MB Universal DMG • macOS 14+ &amp; Tahoe 26
          </span>
        </div>

        {/* Display Headline (Match Helium & Screenshot 01 1:1) */}
        <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-[-0.035em] leading-[1.02] text-[#111113] sm:text-7xl">
          meet <span className="italic font-semibold">wheelify.</span>
        </h1>

        <p className="mx-auto mt-5 max-w-3xl text-lg font-normal leading-relaxed text-black/65 sm:text-2xl">
          <span className="rounded-xl bg-black/[0.07] px-3 py-0.5 font-semibold text-[#111113]">
            2 radial wheels &amp; 66+ instant macOS tools
          </span>{" "}
          right under your cursor, with{" "}
          <span className="rounded-xl bg-black/[0.07] px-3 py-0.5 font-semibold text-[#111113]">
            zero dock clutter.
          </span>
        </p>

        <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-black/55 sm:text-base">
          Hold{" "}
          <kbd className="rounded-md border border-black/15 bg-white px-1.5 py-0.5 font-mono text-xs font-semibold text-black">
            ⌥ Space
          </kbd>{" "}
          or <strong className="font-semibold text-black/80">middle-click</strong>{" "}
          anywhere on your screen for 16 everyday macOS utilities and live inline
          math (
          <code className="rounded bg-black/[0.06] px-1.5 py-0.5 font-mono text-xs text-black/85">
            2^10 * 3.14
          </code>
          ,{" "}
          <code className="rounded bg-black/[0.06] px-1.5 py-0.5 font-mono text-xs text-black/85">
            250 usd to eur
          </code>
          ). Or press{" "}
          <kbd className="rounded-md border border-black/15 bg-white px-1.5 py-0.5 font-mono text-xs font-semibold text-black">
            ⌃ Space
          </kbd>{" "}
          (<strong className="font-semibold text-black/80">Control + Space</strong>
          ) on any Finder file to summon the{" "}
          <strong className="font-semibold text-black/80">
            Advance File &amp; Media Dial
          </strong>
          —with 50+ local photo, PDF, video, Vision OCR, EXIF privacy, and
          archive actions, a Floating File Shelf, and 1-Click Undo.
        </p>

        {/* Primary CTA Buttons */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a
            href={WHEELIFY_DMG_URL}
            className="inline-flex items-center gap-2.5 rounded-full bg-[#111113] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(0,0,0,0.16)] transition-all hover:bg-black/85"
          >
            <AppleLogoIcon className="h-4 w-4" />
            <span>download for mac</span>
            <span className="rounded-full bg-white/15 px-2 py-0.5 text-[11px] font-medium tabular-nums text-white/90">
              1.9 MB
            </span>
          </a>

          <a
            href={WHEELIFY_GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-black/[0.1] bg-white px-6 py-3.5 text-sm font-semibold text-[#111113] shadow-xs transition-colors hover:bg-black/[0.03]"
          >
            <GitHubIcon className="h-4 w-4" />
            <span>open source on github</span>
            <span className="rounded-full bg-[#16A34A]/10 px-2 py-0.5 text-[11px] font-semibold text-[#16A34A]">
              MIT
            </span>
          </a>
        </div>

        {/* Sub-CTA Trust Row */}
        <div className="mt-5 flex flex-col items-center justify-center gap-3">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-black/50">
            <span className="inline-flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5 text-[#16A34A]" />
              Apple Developer ID Signed &amp; Notarized
            </span>
            <span>•</span>
            <span className="tabular-nums">~20 MB RAM • 0% Idle CPU</span>
            <span>•</span>
            <span>Zero Dock Icon (LSUIElement)</span>
            <span>•</span>
            <a
              href={WHEELIFY_RELEASE_TAG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-black/25 underline-offset-4 hover:text-black"
            >
              Release v2.0.0 Notes ↗
            </a>
          </div>
        </div>

        {/* Hero Screenshot 01 Card */}
        <div className="mt-10 overflow-hidden rounded-[28px] border border-black/[0.08] bg-white p-2 shadow-[0_24px_70px_rgba(0,0,0,0.07)] sm:p-4">
          <div className="overflow-hidden rounded-[20px] border border-black/[0.06] bg-[#FAF9F6]">
            <Image
              src="/images/wheelify/01-wheelify-hero-radial-workspace.png"
              alt="Wheelify v2.0.0 — 2 radial wheels & 66+ macOS tools, Helium-White 8-sector radial command workspace, inline math command bar (2^10 * 3.14 = 3,215.36), and live Clipboard History panel"
              width={2560}
              height={1720}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        {/* 4 Telemetry Proof Cards below Hero */}
        <div className="mt-6 grid grid-cols-2 gap-3 text-left sm:grid-cols-4 sm:gap-4">
          <div className="rounded-2xl border border-black/[0.08] bg-white p-4 sm:p-5">
            <div className="text-[11px] font-semibold tracking-wider text-black/45 uppercase">
              O(1) Polar Hit-Test
            </div>
            <div className="mt-1 text-2xl font-bold tracking-tight tabular-nums text-[#111113] sm:text-3xl">
              &lt; 100 ms
            </div>
            <div className="mt-1 text-xs text-black/55">
              Flick 35 pt &amp; release at 120 FPS ProMotion
            </div>
          </div>

          <div className="rounded-2xl border border-black/[0.08] bg-white p-4 sm:p-5">
            <div className="text-[11px] font-semibold tracking-wider text-black/45 uppercase">
              Dual Radial Wheels
            </div>
            <div className="mt-1 text-2xl font-bold tracking-tight tabular-nums text-[#111113] sm:text-3xl">
              16 + 50+
            </div>
            <div className="mt-1 text-xs text-black/55">
              ⌥ Space Workspace Wheel + ⌃ Space File Dial
            </div>
          </div>

          <div className="rounded-2xl border border-black/[0.08] bg-white p-4 sm:p-5">
            <div className="text-[11px] font-semibold tracking-wider text-black/45 uppercase">
              Non-Destructive File Jobs
            </div>
            <div className="mt-1 text-2xl font-bold tracking-tight tabular-nums text-[#16A34A] sm:text-3xl">
              1-Click Undo
            </div>
            <div className="mt-1 text-xs text-black/55">
              Verifiable byte-delta receipts &amp; Floating Shelf
            </div>
          </div>

          <div className="rounded-2xl border border-black/[0.08] bg-white p-4 sm:p-5">
            <div className="text-[11px] font-semibold tracking-wider text-black/45 uppercase">
              Memory &amp; Binary Size
            </div>
            <div className="mt-1 text-2xl font-bold tracking-tight tabular-nums text-[#111113] sm:text-3xl">
              ~20 MB
            </div>
            <div className="mt-1 text-xs text-black/55">
              1.9 MB Universal DMG • 0% idle CPU • 7 themes
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE RADIAL WHEEL & INLINE COMMAND BAR SIMULATOR (#how-it-works) */}
      <section
        id="how-it-works"
        className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20"
      >
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-black/[0.06] px-3 py-1 text-xs font-semibold text-black/75">
            <Compass className="h-3.5 w-3.5" />
            spatial muscle memory + inline evaluation
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] leading-[1.06] text-[#111113] sm:text-5xl">
            one-handed mouse flick.{" "}
            <span className="rounded-xl bg-black/[0.07] px-3 py-0.5 font-semibold">
              two-handed inline math &amp; fx.
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-black/60 sm:text-base">
            Humans remember angles (<code className="font-mono">↑</code> for
            Clipboard, <code className="font-mono">↗</code> for Calculator,{" "}
            <code className="font-mono">→</code> for Clock/Timers) faster than
            scanning text menus. Or keep your hands on the keyboard while the
            wheel is open to evaluate expressions immediately.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left Column: Standalone High-Res Wheel Graphic + Concentric Zones */}
          <div className="flex flex-col justify-between rounded-[28px] border border-black/[0.08] bg-white p-6 shadow-xs lg:col-span-5">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-black/[0.06] px-3 py-1 text-[11px] font-semibold tracking-wide text-black/70 uppercase">
                  Helium White Theme • 120 FPS
                </span>
                <span className="font-mono text-xs text-black/45">
                  8-Sector Ring
                </span>
              </div>

              {/* 2-Pill Dual-Wheel Toggle */}
              <div className="mt-4 grid grid-cols-1 gap-1.5 rounded-2xl border border-black/[0.07] bg-[#F6F6F4] p-1.5">
                <button
                  type="button"
                  onClick={() => setWheelPreviewMode("workspace")}
                  className={`rounded-xl px-3 py-2 text-left text-xs font-semibold transition-all ${
                    wheelPreviewMode === "workspace"
                      ? "bg-[#111113] text-white shadow-2xs"
                      : "text-black/65 hover:bg-black/[0.05] hover:text-black"
                  }`}
                >
                  ⌥ Space • Primary Workspace Wheel (16 Tools)
                </button>
                <button
                  type="button"
                  onClick={() => setWheelPreviewMode("file-dial")}
                  className={`rounded-xl px-3 py-2 text-left text-xs font-semibold transition-all ${
                    wheelPreviewMode === "file-dial"
                      ? "bg-[#111113] text-white shadow-2xs"
                      : "text-black/65 hover:bg-black/[0.05] hover:text-black"
                  }`}
                >
                  ⌃ Space • Advance File &amp; Media Dial (50+ Actions)
                </button>
              </div>

              <div className="my-5 overflow-hidden rounded-2xl border border-black/[0.06] bg-[#FAF9F6] p-3">
                <Image
                  src={
                    wheelPreviewMode === "workspace"
                      ? "/images/wheelify/wheel-radial-white.png"
                      : "/images/wheelify/wheel-advance-file-dial-white.png"
                  }
                  alt={
                    wheelPreviewMode === "workspace"
                      ? "Wheelify standalone high-resolution 8-sector Helium-White primary workspace radial wheel with inline math command bar"
                      : "Wheelify standalone ⌃ Space Advance File & Media Dial radial wheel with outer sub-arc expanded"
                  }
                  width={1040}
                  height={1040}
                  className="mx-auto h-auto max-h-[340px] w-auto object-contain"
                />
              </div>
            </div>

            {/* Concentric Zones Breakdown */}
            <div className="rounded-2xl border border-black/[0.07] bg-[#F6F6F4] p-4">
              <div className="flex items-center justify-between text-xs font-semibold text-[#111113]">
                <span>Three Concentric Gesture Zones</span>
                <span className="font-mono text-[11px] text-[#16A34A]">
                  &lt; 100 ms flick
                </span>
              </div>
              <div className="mt-3 space-y-2 text-xs text-black/65">
                <div className="flex items-start justify-between gap-2 rounded-xl bg-white px-3 py-2 border border-black/[0.05]">
                  <span className="font-mono font-semibold text-[#111113]">
                    Center Hub
                  </span>
                  <span className="text-right">
                    Inline Math Copy / Now Playing Play-Pause
                  </span>
                </div>
                <div className="flex items-start justify-between gap-2 rounded-xl bg-white px-3 py-2 border border-black/[0.05]">
                  <span className="font-mono font-semibold text-[#111113]">
                    Primary Ring
                  </span>
                  <span className="text-right">
                    8-Sector Tool Ring (Clipboard, Calc, Timer, AI…)
                  </span>
                </div>
                <div className="flex items-start justify-between gap-2 rounded-xl bg-white px-3 py-2 border border-black/[0.05]">
                  <span className="font-mono font-semibold text-[#111113]">
                    Outer Sub-Arc
                  </span>
                  <span className="text-right">
                    Instant Sub-Actions (Pomodoro, Snap, Capture, Volume)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inline Command Bar Simulator + Core Philosophy */}
          <div className="flex flex-col justify-between rounded-[28px] border border-black/[0.08] bg-white p-6 shadow-xs sm:p-8 lg:col-span-7">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-semibold tracking-wider text-black/45 uppercase">
                  Interactive Inline Command Bar Preview
                </span>
                <span className="rounded-full bg-[#16A34A]/10 px-2.5 py-0.5 text-xs font-semibold text-[#16A34A]">
                  Type while holding ⌥ Space
                </span>
              </div>

              {/* Expression Selector Chips */}
              <div className="mt-4 flex flex-wrap gap-2">
                {WHEELIFY_COMMAND_DEMOS.map((demo, idx) => {
                  const active = idx === selectedCommandIndex;
                  return (
                    <button
                      key={demo.id}
                      type="button"
                      onClick={() => setSelectedCommandIndex(idx)}
                      className={`rounded-full px-3.5 py-1.5 font-mono text-xs font-medium transition-all ${
                        active
                          ? "bg-[#111113] text-white shadow-xs"
                          : "border border-black/[0.08] bg-[#F6F6F4] text-black/70 hover:bg-black/[0.07]"
                      }`}
                    >
                      {demo.query}
                    </button>
                  );
                })}
              </div>

              {/* Simulated Floating Radial Command Pill */}
              <div className="mt-5 rounded-2xl border border-black/[0.09] bg-[#FAF9F6] p-5">
                <div className="flex flex-wrap items-center justify-between gap-3 rounded-full border border-black/[0.08] bg-white px-4 py-2.5 shadow-xs">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#111113] font-mono text-xs font-bold text-white">
                      =
                    </span>
                    <span className="font-mono text-sm font-semibold text-[#111113] sm:text-base">
                      {selectedCommand.query}
                    </span>
                    <span className="text-black/35">=</span>
                    <span className="font-mono text-sm font-bold tabular-nums text-[#16A34A] sm:text-base">
                      {selectedCommand.headlineResult}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyInlineResult}
                    className="inline-flex items-center gap-1 rounded-full bg-black/[0.06] px-3 py-1 text-xs font-semibold text-[#111113] transition-colors hover:bg-black/[0.12]"
                  >
                    {copiedInlineResult ? (
                      <>
                        <Check className="h-3 w-3 text-[#16A34A]" />
                        <span>copied</span>
                      </>
                    ) : (
                      <>
                        <span>⏎ copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="rounded-lg bg-black/[0.06] px-2.5 py-1 font-mono font-medium text-[#111113]">
                    {selectedCommand.secondaryReadout}
                  </span>
                  <span className="font-medium text-black/55">
                    Active Slice: #{selectedCommand.activeSectorIndex}{" "}
                    {selectedCommand.activeSectorLabel}
                  </span>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-black/60">
                  {selectedCommand.subDetail}
                </p>
              </div>
            </div>

            {/* 4 Core Design Pillars Grid */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-black/[0.07] bg-[#F6F6F4] p-4">
                <div className="text-xs font-bold text-[#111113]">
                  1. Zero-Travel Cursor Spawning
                </div>
                <p className="mt-1 text-xs leading-relaxed text-black/60">
                  Spawns at your exact pointer coordinates whether on a MacBook
                  display or a 49-inch ultrawide monitor.
                </p>
              </div>

              <div className="rounded-2xl border border-black/[0.07] bg-[#F6F6F4] p-4">
                <div className="text-xs font-bold text-[#111113]">
                  2. Two-Ring Concentric Sub-Arcs
                </div>
                <p className="mt-1 text-xs leading-relaxed text-black/60">
                  Hovering over <strong className="font-medium">Clock</strong>,{" "}
                  <strong className="font-medium">Windows</strong>,{" "}
                  <strong className="font-medium">Screenshot</strong>,{" "}
                  <strong className="font-medium">Color Picker</strong>, or{" "}
                  <strong className="font-medium">Volume</strong> expands an
                  outer sub-arc in one continuous gesture.
                </p>
              </div>

              <div className="rounded-2xl border border-black/[0.07] bg-[#F6F6F4] p-4">
                <div className="text-xs font-bold text-[#111113]">
                  3. Multi-Page Ring (6, 8, or 10 Tools)
                </div>
                <p className="mt-1 text-xs leading-relaxed text-black/60">
                  Scroll your mouse wheel or press{" "}
                  <kbd className="rounded border border-black/15 bg-white px-1 font-mono text-[10px]">
                    Tab
                  </kbd>{" "}
                  /{" "}
                  <kbd className="rounded border border-black/15 bg-white px-1 font-mono text-[10px]">
                    ←
                  </kbd>{" "}
                  <kbd className="rounded border border-black/15 bg-white px-1 font-mono text-[10px]">
                    →
                  </kbd>{" "}
                  to flip smoothly between Page 1 and Page 2 of your 16 tools.
                </p>
              </div>

              <div className="rounded-2xl border border-black/[0.07] bg-[#F6F6F4] p-4">
                <div className="text-xs font-bold text-[#111113]">
                  4. Force Touch Trackpad Haptics
                </div>
                <p className="mt-1 text-xs leading-relaxed text-black/60">
                  Crisp Apple trackpad alignment haptics confirm every sector
                  boundary crossing eyes-free.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE 4-TAB EDITORIAL SHOWCASE */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-black/[0.06] px-3 py-1 text-xs font-semibold text-black/75">
            <Layers className="h-3.5 w-3.5" />
            interactive workspace tour
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] leading-[1.06] text-[#111113] sm:text-5xl">
            every workspace panel,{" "}
            <span className="rounded-xl bg-black/[0.07] px-3 py-0.5 font-semibold">
              styled in helium white.
            </span>
          </h2>
        </div>

        {/* Pillar Tab Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {WHEELIFY_PILLAR_TABS.map((tab, idx) => {
            const isSelected = idx === activePillarIndex;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActivePillarIndex(idx)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all sm:text-sm ${
                  isSelected
                    ? "bg-[#111113] text-white shadow-sm"
                    : "border border-black/[0.08] bg-white text-black/70 hover:bg-black/[0.04]"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`rounded-full px-2 py-0.5 font-mono text-[10px] ${
                    isSelected
                      ? "bg-white/15 text-white"
                      : "bg-black/[0.06] text-black/60"
                  }`}
                >
                  {tab.shortcut}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Showcase Card */}
        <div className="mt-6 overflow-hidden rounded-[28px] border border-black/[0.08] bg-white p-5 shadow-[0_18px_50px_rgba(0,0,0,0.05)] sm:p-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-black/[0.06] px-3 py-1 text-[11px] font-bold tracking-wide text-black/70 uppercase">
                {activePillar.badge}
              </div>
              <h3 className="mt-3 text-2xl font-bold tracking-[-0.025em] leading-tight text-[#111113] sm:text-3xl">
                {activePillar.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-black/75">
                {activePillar.subtitle}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-black/60 sm:text-sm">
                {activePillar.description}
              </p>

              <ul className="mt-5 space-y-2.5">
                {activePillar.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-xs leading-relaxed text-black/75 sm:text-sm"
                  >
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#16A34A]/15 text-[#16A34A]">
                      <Check className="h-2.5 w-2.5" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-2xl border border-black/[0.08] bg-[#FAF9F6]">
                <Image
                  src={activePillar.image}
                  alt={activePillar.imageAlt}
                  width={2560}
                  height={1520}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ALL 16 BUILT-IN RADIAL TOOLS CATALOG (#tools) */}
      <section
        id="tools"
        className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20"
      >
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-black/[0.06] px-3 py-1 text-xs font-semibold text-black/75">
            <Sliders className="h-3.5 w-3.5" />
            16 native macOS utilities
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] leading-[1.06] text-[#111113] sm:text-5xl">
            16 built-in macOS tools.{" "}
            <span className="rounded-xl bg-black/[0.07] px-3 py-0.5 font-semibold">
              ~20 MB of RAM total.
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-black/60 sm:text-base">
            Stop running separate menu bar apps for clipboard history, window
            snapping, unit/currency conversion, scratchpad notes, color picking,
            timers, and AI chat. Every tool below is compiled natively into a
            single <span className="tabular-nums font-semibold">1.9 MB</span>{" "}
            Universal binary.
          </p>

          {/* Filter Pills */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "all", label: "All 16 Built-In Tools" },
              { id: "page1", label: "Page 1 • Primary Ring (1–8)" },
              { id: "page2", label: "Page 2 • Extended Ring (9–16)" },
              { id: "subarc", label: "Two-Ring Outer Sub-Arcs (6)" },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() =>
                  setToolFilter(
                    item.id as "all" | "page1" | "page2" | "subarc"
                  )
                }
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                  toolFilter === item.id
                    ? "bg-[#111113] text-white"
                    : "border border-black/[0.08] bg-white text-black/65 hover:bg-black/[0.04]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* 16 Tools Grid */}
        <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2">
          {filteredTools.map((tool) => (
            <div
              key={tool.number}
              className="flex flex-col justify-between rounded-[24px] border border-black/[0.08] bg-white p-5 shadow-2xs transition-all hover:border-black/[0.15] sm:p-6"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-[#111113] font-mono text-xs font-bold tabular-nums text-white">
                      {String(tool.number).padStart(2, "0")}
                    </span>
                    <h3 className="text-base font-bold tracking-tight text-[#111113] sm:text-lg">
                      {tool.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="rounded-full bg-black/[0.05] px-2.5 py-0.5 font-mono text-[11px] text-black/60">
                      {tool.ringPage}
                    </span>
                  </div>
                </div>

                {/* Sub-Arc Pills if multi-action tool */}
                {tool.subArcActions && (
                  <div className="mt-3 flex flex-wrap items-center gap-1.5">
                    <span className="rounded-md bg-[#16A34A]/10 px-2 py-0.5 text-[10px] font-bold tracking-wide text-[#16A34A] uppercase">
                      Outer Sub-Arc:
                    </span>
                    {tool.subArcActions.map((sub) => (
                      <span
                        key={sub}
                        className="rounded-md border border-black/[0.07] bg-[#F6F6F4] px-2 py-0.5 font-mono text-[11px] font-medium text-black/75"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                )}

                <p className="mt-3 text-xs leading-relaxed text-black/65 sm:text-sm">
                  {tool.summary}
                </p>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-1.5 border-t border-black/[0.06] pt-3.5 sm:grid-cols-2">
                {tool.highlights.map((hl) => (
                  <div
                    key={hl}
                    className="flex items-center gap-1.5 text-xs text-black/75"
                  >
                    <Check className="h-3.5 w-3.5 shrink-0 text-[#16A34A]" />
                    <span className="truncate">{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5B. NEW DEDICATED SECTION (#file-dial) — SECOND RADIAL WHEEL (⌃ SPACE): ADVANCE FILE & MEDIA DIAL */}
      <section
        id="file-dial"
        className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20"
      >
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-black/[0.06] px-3.5 py-1 text-xs font-semibold text-black/75">
            <Compass className="h-3.5 w-3.5" />
            second radial wheel • control + space (⌃ space) • 50+ local file
            actions
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] leading-[1.06] text-[#111113] sm:text-5xl">
            context-aware file &amp; media dial.{" "}
            <span className="rounded-xl bg-black/[0.07] px-3 py-0.5 font-semibold">
              non-destructive with 1-click undo.
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-black/60 sm:text-base">
            Inspired by radial file workflows and integrated directly into
            Wheelify&apos;s Helium-White UI, pressing{" "}
            <kbd className="rounded border border-black/15 bg-white px-1.5 py-0.5 font-mono text-xs font-semibold text-black">
              ⌃ Space
            </kbd>{" "}
            inspects whatever photo, PDF, video, audio track, archive, or folder
            you have selected in Finder and blooms a dedicated 8-sector file
            wheel under your cursor. Toggle it on or off anytime via{" "}
            <strong className="font-semibold text-black/80">
              Settings → Enable Advance Wheel
            </strong>
            .
          </p>
        </div>

        {/* Full-Width Showcase Image */}
        <div className="mt-9 overflow-hidden rounded-[28px] border border-black/[0.08] bg-white p-2 shadow-[0_24px_70px_rgba(0,0,0,0.06)] sm:p-4">
          <div className="overflow-hidden rounded-[20px] border border-black/[0.06] bg-[#FAF9F6]">
            <Image
              src="/images/wheelify/06-wheelify-advance-file-dial-control-space.png"
              alt="Wheelify Advance File & Media Dial (⌃ Space) — 8-sector radial file wheel and Advance File Dial Workspace panel with Job Receipt and 1-Click Undo"
              width={2560}
              height={1640}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        {/* 8 Radial Sectors Grid (2×4 Cards) */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WHEELIFY_FILE_DIAL_SECTORS.map((sector) => (
            <div
              key={sector.number}
              className="flex flex-col justify-between rounded-[24px] border border-black/[0.08] bg-white p-5 shadow-2xs transition-all hover:border-black/[0.15]"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-lg bg-[#111113] px-2.5 py-1 font-mono text-xs font-bold text-white">
                    {sector.number} • {sector.name}
                  </span>
                  <span className="rounded-full bg-black/[0.05] px-2.5 py-0.5 font-mono text-[10px] text-black/55">
                    {sector.symbol}
                  </span>
                </div>
                <h3 className="mt-3 text-sm font-bold tracking-tight text-[#111113] sm:text-base">
                  {sector.subtitle}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-black/65">
                  {sector.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Signature Workflow Cards below the 8 Sectors */}
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-[24px] border border-black/[0.08] bg-white p-6 shadow-2xs">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-base font-bold text-[#111113]">
                Verifiable Job Receipts &amp; 1-Click Undo
              </h3>
              <span className="rounded-full bg-[#16A34A]/10 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-[#16A34A]">
                Non-Destructive
              </span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-black/65 sm:text-sm">
              Every operation keeps your original file untouched (or records
              exact rename mappings) and displays a live receipt (
              <code className="rounded bg-black/[0.06] px-1.5 py-0.5 font-mono text-xs text-[#111113]">
                4.2 MB → 680 KB • -84% • ✓ Original kept • ✓ GPS removed
              </code>
              ) with <strong className="font-semibold">Reveal</strong> and{" "}
              <strong className="font-semibold">1-Click Undo</strong>.
            </p>
          </div>

          <div className="rounded-[24px] border border-black/[0.08] bg-white p-6 shadow-2xs">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-base font-bold text-[#111113]">
                Floating File Shelf
              </h3>
              <span className="rounded-full bg-black/[0.06] px-2.5 py-0.5 font-mono text-[11px] font-semibold text-[#111113]">
                Multi-Folder Batch
              </span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-black/65 sm:text-sm">
              Drag and drop files from different Finder folders into the shelf
              stack, then run any conversion, compression, or archive tool on
              the entire batch at once.
            </p>
          </div>

          <div className="rounded-[24px] border border-black/[0.08] bg-white p-6 shadow-2xs">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-base font-bold text-[#111113]">
                4 Built-In Chained File Recipes
              </h3>
              <span className="rounded-full bg-black/[0.06] px-2.5 py-0.5 font-mono text-[11px] font-semibold text-[#111113]">
                1-Click Pipelines
              </span>
            </div>
            <ul className="mt-2.5 space-y-1.5 text-xs text-black/70">
              <li>
                <strong className="font-semibold text-[#111113]">
                  1. Share-Ready Photo:
                </strong>{" "}
                <code className="font-mono text-[11px]">
                  Convert to JPG → Strip EXIF/GPS → Compress Under 1 MB
                </code>
              </li>
              <li>
                <strong className="font-semibold text-[#111113]">
                  2. Web Asset Optimizer:
                </strong>{" "}
                <code className="font-mono text-[11px]">
                  Resize Max 2048 px → Auto Compress → Clear Quarantine
                </code>
              </li>
              <li>
                <strong className="font-semibold text-[#111113]">
                  3. Clean &amp; Privacy-Safe PDF:
                </strong>{" "}
                <code className="font-mono text-[11px]">
                  Strip PDF Metadata → Compress PDF → Copy SHA-256
                </code>
              </li>
              <li>
                <strong className="font-semibold text-[#111113]">
                  4. Release Bundle:
                </strong>{" "}
                <code className="font-mono text-[11px]">
                  Clear Quarantine → Create Clean .zip → Copy SHA-256
                </code>
              </li>
            </ul>
          </div>

          <div className="rounded-[24px] border border-black/[0.08] bg-white p-6 shadow-2xs">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-base font-bold text-[#111113]">
                Watched Folder Automation
              </h3>
              <span className="rounded-full bg-black/[0.06] px-2.5 py-0.5 font-mono text-[11px] font-semibold text-[#111113]">
                Folder Binding
              </span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-black/65 sm:text-sm">
              Bind any local folder to a Recipe in the Advance Workspace to
              process every file inside with a single click.
            </p>
          </div>
        </div>
      </section>

      {/* 6. DEEP-DIVE EDITORIAL BENTO SECTIONS (#frontier-ai) */}
      <section
        id="frontier-ai"
        className="mx-auto max-w-6xl space-y-12 px-4 py-10 sm:px-6 sm:py-16"
      >
        {/* Editorial Feature Card A: Frontier AI + Live ECB Currency Converter (Screenshot 02) */}
        <div className="overflow-hidden rounded-[28px] border border-black/[0.08] bg-white p-5 shadow-xs sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-black/[0.06] px-3 py-1 text-xs font-semibold text-black/75">
                <Sparkles className="h-3.5 w-3.5" />
                frontier cloud ai + 100% offline ollama + live ecb fx
              </span>
              <h2 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-[#111113] sm:text-4xl">
                frontier ai &amp; live conversion.{" "}
                <span className="rounded-xl bg-black/[0.07] px-3 py-0.5 font-semibold">
                  one flick from any window.
                </span>
              </h2>
            </div>
            <span className="rounded-full border border-black/[0.08] bg-[#F6F6F4] px-3.5 py-1.5 font-mono text-xs font-medium text-black/70">
              macOS Keychain Protected
            </span>
          </div>

          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-black/60 sm:text-base">
            Switch seamlessly between cloud frontier models (
            <strong className="font-semibold text-black/85">
              Anthropic Claude Opus 5.5 / Fable 5.2 / Sonnet 5.5
            </strong>
            ,{" "}
            <strong className="font-semibold text-black/85">
              OpenAI GPT-6 Astra / 6.1 Sol
            </strong>
            ,{" "}
            <strong className="font-semibold text-black/85">
              Google Gemini 4 Argon
            </strong>
            ) and 100% free offline local models via{" "}
            <strong className="font-semibold text-black/85">Ollama</strong> (
            <code className="font-mono text-xs">qwen3.5</code>,{" "}
            <code className="font-mono text-xs">gemma4</code>,{" "}
            <code className="font-mono text-xs">gpt-oss:20b</code>,{" "}
            <code className="font-mono text-xs">qwen3-coder:30b</code>,{" "}
            <code className="font-mono text-xs">deepseek-r1:8b</code>,{" "}
            <code className="font-mono text-xs">kimi-k3.1-pro</code>). Run
            1-click clipboard actions (<em>Summarize</em>, <em>Fix Grammar</em>,{" "}
            <em>Translate</em>, <em>Explain Code</em>) or convert 9 world
            currencies simultaneously with live European Central Bank rates.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-black/[0.08] bg-[#FAF9F6]">
            <Image
              src="/images/wheelify/02-wheelify-ask-ai-frontier-models.png"
              alt="Wheelify Ask AI Assistant (Claude Opus 5.5, GPT-6 Astra, Gemini 4 Argon, Ollama Local) and Unit & Currency Converter (Live ECB FX)"
              width={2560}
              height={1520}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        {/* Editorial Feature Card B: Scientific Calculator, Quick To-Do & Saved Links (Screenshot 03) */}
        <div className="overflow-hidden rounded-[28px] border border-black/[0.08] bg-white p-5 shadow-xs sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-black/[0.06] px-3 py-1 text-xs font-semibold text-black/75">
                <Calculator className="h-3.5 w-3.5" />
                scientific math • hex/bin programmer readout • tasks &amp; links
              </span>
              <h2 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-[#111113] sm:text-4xl">
                replace a dozen menu bar apps.{" "}
                <span className="rounded-xl bg-black/[0.07] px-3 py-0.5 font-semibold">
                  in clean Apple System UI.
                </span>
              </h2>
            </div>
            <span className="rounded-full border border-black/[0.08] bg-[#F6F6F4] px-3.5 py-1.5 font-mono text-xs font-medium text-black/70">
              RAD • HEX • BIN • Tasks • Links
            </span>
          </div>

          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-black/60 sm:text-base">
            Evaluate recursive-descent expressions like{" "}
            <code className="rounded bg-black/[0.06] px-1.5 py-0.5 font-mono text-xs text-black/85">
              sin(pi/4) * 2^10 = 724.077344
            </code>{" "}
            with live{" "}
            <code className="rounded bg-black/[0.06] px-1.5 py-0.5 font-mono text-xs text-black/85">
              HEX 0x2D4
            </code>{" "}
            and{" "}
            <code className="rounded bg-black/[0.06] px-1.5 py-0.5 font-mono text-xs text-black/85">
              BIN 0b1011010100
            </code>{" "}
            programmer readouts, manage priority tasks with 1-click completion,
            and save developer bookmarks with automatic hostname extraction.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-black/[0.08] bg-[#FAF9F6]">
            <Image
              src="/images/wheelify/03-wheelify-calculator-todo-links.png"
              alt="Wheelify Scientific Calculator (RAD • HEX • BIN), Quick To-Do List, and Saved Links & Bookmarks"
              width={2560}
              height={1480}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        {/* Editorial Feature Card C: 01 / 02 / 03 Workflow + [4] What You Get + Settings (Screenshot 04) */}
        <div className="overflow-hidden rounded-[28px] border border-black/[0.08] bg-white p-5 shadow-xs sm:p-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <div className="space-y-2.5 text-sm font-medium text-black/80 sm:text-base">
                <p>
                  <span className="mr-2 font-mono text-xs font-bold text-black/45">
                    01
                  </span>
                  press{" "}
                  <kbd className="rounded border border-black/15 bg-[#F6F6F4] px-1.5 py-0.5 font-mono text-xs font-semibold">
                    ⌥ Space
                  </kbd>{" "}
                  for 16 workspace tools — or{" "}
                  <kbd className="rounded border border-black/15 bg-[#F6F6F4] px-1.5 py-0.5 font-mono text-xs font-semibold">
                    ⌃ Space
                  </kbd>{" "}
                  for the Advance File Dial.
                </p>
                <p>
                  <span className="mr-2 font-mono text-xs font-bold text-black/45">
                    02
                  </span>
                  flick toward any sector &amp; outer sub-arc — or type math
                  &amp; units live.
                </p>
                <p>
                  <span className="mr-2 font-mono text-xs font-bold text-black/45">
                    03
                  </span>
                  release to execute in{" "}
                  <span className="tabular-nums font-semibold">0.1s</span>.
                  non-destructive receipts &amp; 1-click undo.
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-black/[0.08] font-mono text-xs font-bold text-[#111113]">
                  4
                </span>
                <span className="text-sm font-bold text-[#111113]">
                  what you get
                </span>
              </div>

              <ul className="mt-4 space-y-2.5">
                {WHEELIFY_WHAT_YOU_GET_LIST.map((item) => (
                  <li
                    key={item.text}
                    className="flex items-start gap-2.5 text-xs text-black/75 sm:text-sm"
                  >
                    <span className="mt-0.5 inline-flex min-w-14 shrink-0 items-center justify-center rounded bg-black/[0.06] px-1.5 py-0.5 font-mono text-[10px] font-bold text-[#111113]">
                      {item.code}
                    </span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7">
                <div className="text-2xl font-bold tracking-[-0.03em] leading-tight text-[#111113] sm:text-3xl">
                  every tool under your cursor.
                </div>
                <div className="mt-1 text-2xl font-bold tracking-[-0.03em] leading-tight text-[#111113] sm:text-3xl">
                  <span className="rounded-xl bg-black/[0.08] px-2.5 py-0.5">
                    zero
                  </span>{" "}
                  clutter on your mac.
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-2xl border border-black/[0.08] bg-[#FAF9F6]">
                <Image
                  src="/images/wheelify/04-wheelify-editorial-features-and-settings.png"
                  alt="Wheelify editorial 01/02/03 workflow, what you get checklist, and Wheelify Settings window"
                  width={2560}
                  height={1440}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HEAD-TO-HEAD COMPARISON MATRIX & SHORTCUTS */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-black/[0.06] px-3 py-1 text-xs font-semibold text-black/75">
            <Cpu className="h-3.5 w-3.5" />
            benchmark comparison
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] leading-[1.06] text-[#111113] sm:text-5xl">
            why wheelify replaces{" "}
            <span className="rounded-xl bg-black/[0.07] px-3 py-0.5 font-semibold">
              10+ separate mac utilities.
            </span>
          </h2>
        </div>

        {/* Comparison Table */}
        <div className="mt-8 overflow-hidden rounded-[24px] border border-black/[0.08] bg-white shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-black/[0.08] bg-[#FAF9F6]">
                  <th className="py-4 pr-4 pl-6 font-bold text-[#111113]">
                    Capability
                  </th>
                  <th className="bg-[#111113] px-5 py-4 font-bold text-white">
                    Wheelify v2.0.0 (MIT)
                  </th>
                  <th className="px-5 py-4 font-semibold text-black/65">
                    10+ Separate Menu Bar Apps
                  </th>
                  <th className="px-5 py-4 font-semibold text-black/65">
                    Keyboard Launchers
                  </th>
                  <th className="px-5 py-4 font-semibold text-black/65">
                    Basic Pie Menus
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/[0.06]">
                {WHEELIFY_COMPARISON_ROWS.map((row) => (
                  <tr key={row.capability} className="hover:bg-black/[0.015]">
                    <td className="py-3.5 pr-4 pl-6 font-semibold text-[#111113]">
                      {row.capability}
                    </td>
                    <td className="bg-[#16A34A]/[0.06] px-5 py-3.5 font-semibold text-[#111113]">
                      <span className="inline-flex items-center gap-1.5">
                        <Check className="h-4 w-4 shrink-0 text-[#16A34A]" />
                        <span>{row.wheelify}</span>
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-black/60">
                      {row.separateApps}
                    </td>
                    <td className="px-5 py-3.5 text-black/60">
                      {row.keyboardLaunchers}
                    </td>
                    <td className="px-5 py-3.5 text-black/60">
                      {row.basicPieMenus}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Keyboard & Mouse Shortcuts Reference */}
        <div className="mt-12 rounded-[28px] border border-black/[0.08] bg-white p-6 shadow-xs sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-black/[0.06] px-3 py-1 text-xs font-semibold text-black/75">
                <Command className="h-3.5 w-3.5" />
                hotkeys &amp; mouse triggers
              </span>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-[#111113]">
                keyboard &amp; mouse gestures reference.
              </h3>
            </div>
            <span className="font-mono text-xs text-black/50">
              Customizable in Settings (⌘,)
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {WHEELIFY_SHORTCUTS.map((sc) => (
              <div
                key={sc.keys}
                className="flex items-center justify-between gap-3 rounded-2xl border border-black/[0.06] bg-[#F6F6F4] px-4 py-3"
              >
                <span className="text-xs leading-snug text-black/75">
                  {sc.action}
                </span>
                <kbd className="shrink-0 rounded-lg border border-black/[0.12] bg-white px-2.5 py-1 font-mono text-xs font-bold text-[#111113] shadow-2xs">
                  {sc.keys}
                </kbd>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. OPEN SOURCE ARCHITECTURE & 3-SECOND DMG INSTALLER (#open-source & #download) */}
      <section
        id="open-source"
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16"
      >
        <div className="overflow-hidden rounded-[28px] border border-black/[0.08] bg-white p-6 shadow-xs sm:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#16A34A]/10 px-3.5 py-1 text-xs font-semibold text-[#16A34A]">
                <Lock className="h-3.5 w-3.5" />
                100% Open Source (MIT) • Zero Telemetry
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] leading-[1.06] text-[#111113] sm:text-4xl">
                install in 3 seconds.{" "}
                <span className="rounded-xl bg-black/[0.07] px-3 py-0.5 font-semibold">
                  100% free &amp; open source.
                </span>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-black/60">
                Download the Apple-notarized Universal{" "}
                <code className="font-mono text-xs">Wheelify.dmg</code> installer
                below, drag <strong className="font-semibold text-black/80">Wheelify.app</strong>{" "}
                into Applications, and hold{" "}
                <kbd className="rounded border border-black/15 bg-[#F6F6F4] px-1.5 py-0.5 font-mono text-xs font-semibold">
                  ⌥ Space
                </kbd>{" "}
                anywhere on your Mac. Developers can also explore the open-source
                repository on GitHub.
              </p>

              {/* SHA-256 Checksum Box */}
              <div className="mt-4 rounded-2xl border border-black/[0.08] bg-[#F6F6F4] p-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#111113]">
                    SHA-256 Checksum (Wheelify.dmg • v2.0.0)
                  </span>
                  <button
                    type="button"
                    onClick={handleCopySha}
                    className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-0.5 text-[11px] font-semibold text-[#111113] shadow-2xs hover:bg-black/[0.04]"
                  >
                    {copiedSha ? (
                      <>
                        <Check className="h-3 w-3 text-[#16A34A]" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        <span>Copy SHA-256</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="mt-1.5 break-all font-mono text-[11px] text-black/65">
                  {WHEELIFY_SHA256}
                </div>
              </div>

              {/* Download & GitHub Action Buttons */}
              <div id="download" className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={WHEELIFY_DMG_URL}
                  className="inline-flex items-center gap-2 rounded-full bg-[#111113] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-black/85"
                >
                  <AppleLogoIcon className="h-4 w-4" />
                  <span>Download Wheelify.dmg</span>
                  <span className="rounded-full bg-white/15 px-2 py-0.5 text-[11px] tabular-nums">
                    v2.0.0 • 1.9 MB
                  </span>
                </a>

                <a
                  href={WHEELIFY_GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-black/[0.1] bg-white px-5 py-3.5 text-sm font-semibold text-[#111113] transition-colors hover:bg-black/[0.04]"
                >
                  <GitHubIcon className="h-4 w-4" />
                  <span>GitHub Repository</span>
                  <ExternalLink className="h-3.5 w-3.5 text-black/45" />
                </a>
              </div>
            </div>

            {/* Right Column: Screenshot 05 DMG Installer Preview */}
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-2xl border border-black/[0.08] bg-[#FAF9F6]">
                <Image
                  src="/images/wheelify/05-wheelify-dmg-installer-preview.png"
                  alt="Wheelify DMG Installer Preview — install in 3 seconds, drag Wheelify.app into Applications"
                  width={2560}
                  height={1720}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS (#faq) */}
      <section
        id="faq"
        className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20"
      >
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-black/[0.06] px-3 py-1 text-xs font-semibold text-black/75">
            <ClipboardCheck className="h-3.5 w-3.5" />
            frequently asked questions
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-[#111113] sm:text-4xl">
            everything about{" "}
            <span className="rounded-xl bg-black/[0.07] px-3 py-0.5 font-semibold">
              wheelify v2.0.0.
            </span>
          </h2>
        </div>

        <div className="mt-8 space-y-3">
          {WHEELIFY_FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl border border-black/[0.08] bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-bold text-[#111113] sm:px-6 sm:py-5 sm:text-base"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-black/45 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-black/[0.06] px-5 py-4 text-xs leading-relaxed text-black/65 sm:px-6 sm:text-sm">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 10. OTHER COGIFY APPS SHOWCASE */}
      <OtherAppsShowcase currentSlug="wheelify" />

      {/* 11. TRYMACAPPS FOOTER BADGE (Very Bottom of macOS App Page) */}
      <div className="pb-14 pt-4 flex justify-center">
        <a
          href="https://www.trymacapps.com"
          target="_blank"
          rel="noopener"
          className="inline-block transition-transform hover:scale-[1.02]"
        >
          <img
            src="https://www.trymacapps.com/badge.png"
            alt="Featured on TryMacApps"
            width="200"
            height="67"
            className="h-[48px] w-auto"
          />
        </a>
      </div>
    </div>
  );
}
