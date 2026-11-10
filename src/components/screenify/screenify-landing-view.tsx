/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Video,
  Sparkles,
  Captions,
  EyeOff,
  Sliders,
  ShieldCheck,
  Check,
  ChevronDown,
  Copy,
  ExternalLink,
  Cpu,
  Command,
  Lock,
  Layers,
  RotateCcw,
} from "lucide-react";
import { AppleLogoIcon, GitHubIcon } from "@/components/ui/platform-icons";
import { OtherAppsShowcase } from "@/components/products/other-apps-showcase";
import {
  SCREENIFY_AI_PROMPT_DEMOS,
  SCREENIFY_PILLAR_TABS,
  SCREENIFY_STUDIO_PRESETS,
  SCREENIFY_WHAT_YOU_GET_LIST,
  SCREENIFY_COMPARISON_ROWS,
  SCREENIFY_SHORTCUTS,
  SCREENIFY_FAQS,
} from "./screenify-data";

const SCREENIFY_DMG_URL =
  "https://github.com/Shubham-sharma8/screenify/releases/download/v1.12.0/Screenify.dmg";
const SCREENIFY_GITHUB_URL = "https://github.com/Shubham-sharma8/screenify";
const SCREENIFY_RELEASE_TAG_URL =
  "https://github.com/Shubham-sharma8/screenify/releases/tag/v1.12.0";
const SCREENIFY_SHA256 =
  "07e59ce8193d5145cfb2e03e7dacbfee4f0664092a15e70c15a0ea168804d229";

export function ScreenifyLandingView() {
  const [selectedPromptIndex, setSelectedPromptIndex] = useState(0);
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [copiedSha, setCopiedSha] = useState(false);

  const selectedPrompt = SCREENIFY_AI_PROMPT_DEMOS[selectedPromptIndex];
  const activePillar = SCREENIFY_PILLAR_TABS[activePillarIndex];

  const handleCopySha = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(SCREENIFY_SHA256);
      setCopiedSha(true);
      setTimeout(() => setCopiedSha(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F7F6] text-[#111110] selection:bg-black selection:text-white">
      {/* 1. FLOATING TOP PILL NAVBAR (Match cogify.me/helium 1:1) */}
      <header className="sticky top-4 z-50 mx-auto max-w-fit px-3">
        <nav
          aria-label="Screenify Navigation"
          className="flex items-center gap-1 rounded-full border border-[#E5E5E2] bg-white/90 px-2.5 py-1.5 shadow-[0_8px_30px_rgba(17,17,16,0.06)] backdrop-blur-xl sm:gap-1.5 sm:px-3.5"
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
            className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold tracking-tight text-[#111110]"
          >
            <Image
              src="/brand/Screenify/icon.png"
              alt="Screenify Icon"
              width={18}
              height={18}
              className="h-[18px] w-[18px] rounded-[4px]"
            />
            screenify
          </a>
          <a
            href="#studio-tour"
            className="hidden rounded-full bg-[#F1F1EE] px-3 py-1 text-xs font-medium text-[#111110] transition-colors hover:bg-black/[0.08] sm:inline-block"
          >
            studio editor
          </a>
          <a
            href="#ai-assistant"
            className="hidden rounded-full px-2.5 py-1 text-xs font-medium text-black/65 transition-colors hover:bg-black/[0.05] hover:text-black md:inline-block"
          >
            ai assistant
          </a>
          <a
            href="#bento-features"
            className="hidden rounded-full px-2.5 py-1 text-xs font-medium text-black/65 transition-colors hover:bg-black/[0.05] hover:text-black md:inline-block"
          >
            teleprompter &amp; captions
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
            href={SCREENIFY_DMG_URL}
            className="ml-0.5 inline-flex items-center gap-1.5 rounded-full bg-[#111110] px-3.5 py-1 text-xs font-semibold text-white transition-colors hover:bg-black/85"
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
        <div className="mb-6 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-[#E5E5E2] bg-white px-3.5 py-1.5 text-xs font-medium text-[#676764] shadow-xs">
          <span className="inline-flex items-center gap-1.5 font-semibold text-[#111110]">
            <span className="h-2 w-2 rounded-full bg-[#EF4444]" />
            Screenify v1.12.0 for macOS
          </span>
          <span className="text-black/25">•</span>
          <span>Native ScreenCaptureKit 60fps</span>
          <span className="text-black/25">•</span>
          <span className="font-semibold text-[#16A34A]">
            100% Open Source (MIT)
          </span>
        </div>

        {/* Display Headline (Match Helium 1:1) */}
        <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-[-0.035em] leading-[1.03] text-[#111110] sm:text-6xl lg:text-7xl">
          screen recordings that look{" "}
          <span className="rounded-2xl bg-black/[0.07] px-3.5 py-0.5 font-semibold">
            directed,
          </span>{" "}
          not just captured.
        </h1>

        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[#676764] sm:text-xl">
          Screenify records your display, camera, microphone, and{" "}
          <span className="font-semibold text-[#111110]">
            240Hz cursor telemetry
          </span>{" "}
          on independent tracks — automatically synthesizing smooth{" "}
          <span className="rounded-lg bg-black/[0.06] px-2 py-0.5 font-semibold text-[#111110]">
            2x–3.5x spring zooms
          </span>{" "}
          around every click, transcribing{" "}
          <span className="rounded-lg bg-black/[0.06] px-2 py-0.5 font-semibold text-[#111110]">
            Whisper AI captions
          </span>{" "}
          on-device, and letting you edit the timeline in plain English.
        </p>

        {/* Primary CTA Buttons */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a
            href={SCREENIFY_DMG_URL}
            className="inline-flex items-center gap-2.5 rounded-full bg-[#111110] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(17,17,16,0.16)] transition-all hover:bg-black/85"
          >
            <AppleLogoIcon className="h-4 w-4" />
            <span>download for macOS</span>
            <span className="rounded-full bg-white/15 px-2 py-0.5 text-[11px] font-medium tabular-nums text-white/90">
              v1.12.0 • DMG
            </span>
          </a>

          <a
            href={SCREENIFY_GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#E5E5E2] bg-white px-6 py-3.5 text-sm font-semibold text-[#111110] shadow-xs transition-colors hover:bg-black/[0.03]"
          >
            <GitHubIcon className="h-4 w-4" />
            <span>open source on github</span>
            <span className="rounded-full bg-[#16A34A]/10 px-2 py-0.5 text-[11px] font-semibold text-[#16A34A]">
              MIT
            </span>
          </a>
        </div>

        {/* Sub-CTA Trust Row + TryMacApps Badge */}
        <div className="mt-5 flex flex-col items-center justify-center gap-3">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-[#8C8C87]">
            <span className="inline-flex items-center gap-1 text-[#111110]/75">
              <ShieldCheck className="h-3.5 w-3.5 text-[#16A34A]" />
              Apple Silicon (M1–M4) • macOS 13.5+
            </span>
            <span>•</span>
            <span>100% Local Processing (Zero Cloud Uploads)</span>
            <span>•</span>
            <span>Zero Watermarks • $0 Forever</span>
            <span>•</span>
            <a
              href={SCREENIFY_RELEASE_TAG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-black/25 underline-offset-4 hover:text-black"
            >
              Release v1.12.0 Notes ↗
            </a>
          </div>

          <a
            href="https://www.trymacapps.com"
            target="_blank"
            rel="noopener"
            className="mt-1 inline-block transition-transform hover:scale-[1.02]"
          >
            <img
              src="https://www.trymacapps.com/badge.png"
              alt="Featured on TryMacApps"
              width="200"
              height="67"
              className="h-[52px] w-auto"
            />
          </a>
        </div>

        {/* Hero Screenshot 02 Card (Studio Video Editor) */}
        <div className="mt-10 overflow-hidden rounded-[26px] border border-[#E5E5E2] bg-white p-2 shadow-[0_1px_2px_rgba(17,17,16,0.04),0_20px_50px_-12px_rgba(17,17,16,0.08)] sm:p-4">
          <div className="overflow-hidden rounded-[18px] border border-black/[0.06] bg-[#FAF9F6]">
            <Image
              src="/screenify/02-studio-editor.png"
              alt="Screenify v1.12 Studio Video Editor — white-minimal macOS screen studio with Aspect Ratio & Background inspector, 60fps canvas preview, and multi-track timeline with automatic 2x Zoom blocks"
              width={2880}
              height={1800}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        {/* 4 Telemetry Proof Cards below Hero */}
        <div className="mt-6 grid grid-cols-2 gap-3 text-left sm:grid-cols-4 sm:gap-4">
          <div className="rounded-2xl border border-[#E5E5E2] bg-white p-4 sm:p-5">
            <div className="text-[11px] font-semibold tracking-wider text-[#8C8C87] uppercase">
              Cursor Physics Engine
            </div>
            <div className="mt-1 text-2xl font-bold tracking-tight tabular-nums text-[#111110] sm:text-3xl">
              240 Hz
            </div>
            <div className="mt-1 text-xs text-[#676764]">
              RK4 spring smoothing, click anticipation &amp; vector cursor
            </div>
          </div>

          <div className="rounded-2xl border border-[#E5E5E2] bg-white p-4 sm:p-5">
            <div className="text-[11px] font-semibold tracking-wider text-[#8C8C87] uppercase">
              Hardware Capture &amp; Export
            </div>
            <div className="mt-1 text-2xl font-bold tracking-tight tabular-nums text-[#111110] sm:text-3xl">
              4K 60fps
            </div>
            <div className="mt-1 text-xs text-[#676764]">
              Native ScreenCaptureKit + MP4, MOV &amp; GIF studio export
            </div>
          </div>

          <div className="rounded-2xl border border-[#E5E5E2] bg-white p-4 sm:p-5">
            <div className="text-[11px] font-semibold tracking-wider text-[#8C8C87] uppercase">
              Whisper AI &amp; Denoising
            </div>
            <div className="mt-1 text-2xl font-bold tracking-tight tabular-nums text-[#16A34A] sm:text-3xl">
              100% Local
            </div>
            <div className="mt-1 text-xs text-[#676764]">
              On-device captions in 20+ languages &amp; neural mic denoise
            </div>
          </div>

          <div className="rounded-2xl border border-[#E5E5E2] bg-white p-4 sm:p-5">
            <div className="text-[11px] font-semibold tracking-wider text-[#8C8C87] uppercase">
              License &amp; Pricing
            </div>
            <div className="mt-1 text-2xl font-bold tracking-tight tabular-nums text-[#111110] sm:text-3xl">
              $0 / yr
            </div>
            <div className="mt-1 text-xs text-[#676764]">
              Replaces $120–$220/yr recorders • MIT Open Source
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE 5-TAB STUDIO TOUR (#studio-tour) */}
      <section
        id="studio-tour"
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16"
      >
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F1F1EE] px-3 py-1 text-xs font-semibold text-[#111110]">
            <Layers className="h-3.5 w-3.5" />
            designed for restraint • interactive studio tour
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] leading-[1.06] text-[#111110] sm:text-5xl">
            every frame engineered{" "}
            <span className="rounded-xl bg-black/[0.07] px-3 py-0.5 font-semibold">
              like a native macOS utility.
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#676764] sm:text-base">
            Traditional screen recorders force a choice between raw, lifeless
            captures and hours of manual keyframing. Screenify records separate
            synchronized streams so you can direct the camera, cursor, aspect
            ratio, and captions after you press stop.
          </p>
        </div>

        {/* 5 Pillar Tab Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {SCREENIFY_PILLAR_TABS.map((tab, idx) => {
            const isSelected = idx === activePillarIndex;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActivePillarIndex(idx)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all sm:text-sm ${
                  isSelected
                    ? "bg-[#111110] text-white shadow-sm"
                    : "border border-[#E5E5E2] bg-white text-black/70 hover:bg-black/[0.04]"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`rounded-full px-2 py-0.5 font-mono text-[10px] ${
                    isSelected
                      ? "bg-white/15 text-white"
                      : "bg-[#F1F1EE] text-black/60"
                  }`}
                >
                  {tab.shortcut}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Showcase Card */}
        <div className="mt-6 overflow-hidden rounded-[26px] border border-[#E5E5E2] bg-white p-5 shadow-[0_1px_2px_rgba(17,17,16,0.04),0_16px_40px_-12px_rgba(17,17,16,0.07)] sm:p-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#F1F1EE] px-3 py-1 text-[11px] font-bold tracking-wide text-[#111110] uppercase">
                {activePillar.badge}
              </div>
              <h3 className="mt-3 text-2xl font-bold tracking-[-0.025em] leading-tight text-[#111110] sm:text-3xl">
                {activePillar.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-[#111110]/80">
                {activePillar.subtitle}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-[#676764] sm:text-sm">
                {activePillar.description}
              </p>

              <ul className="mt-5 space-y-2.5">
                {activePillar.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-xs leading-relaxed text-black/80 sm:text-sm"
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
              <div className="overflow-hidden rounded-2xl border border-[#E5E5E2] bg-[#FAF9F6]">
                <Image
                  src={activePillar.image}
                  alt={activePillar.imageAlt}
                  width={2880}
                  height={1800}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE AI SMART EDIT ASSISTANT & 5 STUDIO PRESETS (#ai-assistant) */}
      <section
        id="ai-assistant"
        className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20"
      >
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F1F1EE] px-3 py-1 text-xs font-semibold text-[#111110]">
            <Sparkles className="h-3.5 w-3.5" />
            plain-english timeline control • 100% offline engine
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] leading-[1.06] text-[#111110] sm:text-5xl">
            tell screenify what to change.{" "}
            <span className="rounded-xl bg-black/[0.07] px-3 py-0.5 font-semibold">
              applied in one click.
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#676764] sm:text-base">
            Open the AI Smart Edit drawer and type what you want—whether adding
            punchy click-zooms, reframing for 9:16 vertical mobile, or boosting
            your microphone. Works offline out-of-the-box with zero API keys.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left 7 Columns: Interactive AI Smart Edit Prompt Simulator */}
          <div className="flex flex-col justify-between rounded-[26px] border border-[#E5E5E2] bg-white p-6 shadow-xs sm:p-8 lg:col-span-7">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-semibold tracking-wider text-[#8C8C87] uppercase">
                  Interactive AI Smart Edit Preview
                </span>
                <span className="rounded-full bg-[#16A34A]/10 px-2.5 py-0.5 text-xs font-semibold text-[#16A34A]">
                  Zero API Keys Required
                </span>
              </div>

              {/* Prompt Selector Buttons */}
              <div className="mt-4 flex flex-wrap gap-2">
                {SCREENIFY_AI_PROMPT_DEMOS.map((demo, idx) => {
                  const active = idx === selectedPromptIndex;
                  return (
                    <button
                      key={demo.id}
                      type="button"
                      onClick={() => setSelectedPromptIndex(idx)}
                      className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                        active
                          ? "bg-[#111110] text-white shadow-xs"
                          : "border border-[#E5E5E2] bg-[#F7F7F6] text-black/70 hover:bg-black/[0.06]"
                      }`}
                    >
                      {demo.category}
                    </button>
                  );
                })}
              </div>

              {/* Simulated Assistant Drawer Card */}
              <div className="mt-5 rounded-2xl border border-[#E5E5E2] bg-[#F7F7F6] p-5">
                <div className="flex items-center justify-between text-xs text-[#676764]">
                  <span className="font-semibold text-[#111110]">
                    Assistant • Local Smart Edit
                  </span>
                  <span className="font-mono text-[11px]">
                    Instant 1-Click Undo
                  </span>
                </div>

                {/* User Prompt Bubble */}
                <div className="mt-3 rounded-2xl border border-[#E5E5E2] bg-white p-4 text-sm font-medium text-[#111110] shadow-2xs">
                  &ldquo;{selectedPrompt.prompt}&rdquo;
                </div>

                {/* Applied Response */}
                <p className="mt-4 text-xs leading-relaxed text-[#676764] sm:text-sm">
                  {selectedPrompt.appliedSummary}
                </p>

                <ul className="mt-3 space-y-1.5">
                  {selectedPrompt.changes.map((ch) => (
                    <li
                      key={ch}
                      className="flex items-center gap-2 text-xs font-medium text-[#111110]"
                    >
                      <Check className="h-3.5 w-3.5 shrink-0 text-[#16A34A]" />
                      <span>{ch}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-black/[0.06] pt-3 text-xs">
                  <span className="rounded-lg bg-black/[0.06] px-2.5 py-1 font-mono font-medium text-[#111110]">
                    {selectedPrompt.timelinePreview}
                  </span>
                  <span className="inline-flex items-center gap-1 font-medium text-[#676764]">
                    <RotateCcw className="h-3 w-3" />
                    Undo available
                  </span>
                </div>
              </div>
            </div>

            {/* Separate Synchronized Streams Callout */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#E5E5E2] bg-[#F7F7F6] p-3.5">
                <div className="text-xs font-bold text-[#111110]">
                  Raw Display Track
                </div>
                <p className="mt-1 text-[11px] leading-relaxed text-[#676764]">
                  Unbaked 4K 60fps screen or window stream for lossless
                  post-zooming.
                </p>
              </div>
              <div className="rounded-2xl border border-[#E5E5E2] bg-[#F7F7F6] p-3.5">
                <div className="text-xs font-bold text-[#111110]">
                  240Hz Cursor Track
                </div>
                <p className="mt-1 text-[11px] leading-relaxed text-[#676764]">
                  Resize pointer (0.5x–5x), smooth shakes, or hide idle cursor
                  anytime.
                </p>
              </div>
              <div className="col-span-2 rounded-2xl border border-[#E5E5E2] bg-[#F7F7F6] p-3.5 sm:col-span-1">
                <div className="text-xs font-bold text-[#111110]">
                  Isolated Audio &amp; Cam
                </div>
                <p className="mt-1 text-[11px] leading-relaxed text-[#676764]">
                  Independent mic, system audio &amp; camera overlay tracks.
                </p>
              </div>
            </div>
          </div>

          {/* Right 5 Columns: 5 Built-In Curated Studio Presets */}
          <div className="flex flex-col justify-between rounded-[26px] border border-[#E5E5E2] bg-white p-6 shadow-xs sm:p-8 lg:col-span-5">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#F1F1EE] px-3 py-1 text-[11px] font-semibold tracking-wide text-[#111110] uppercase">
                  5 Built-In Studio Presets
                </span>
                <span className="font-mono text-xs text-[#8C8C87]">
                  + Custom .json
                </span>
              </div>

              <h3 className="mt-3 text-xl font-bold tracking-tight text-[#111110] sm:text-2xl">
                one-click studio styles.
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-[#676764]">
                Apply curated framing, spring zoom depth, corner radius, and
                cursor physics in one click—or save your own reusable preset.
              </p>

              <div className="mt-4 space-y-2.5">
                {SCREENIFY_STUDIO_PRESETS.map((preset) => (
                  <div
                    key={preset.name}
                    className="rounded-2xl border border-[#E5E5E2] bg-[#F7F7F6] p-3.5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <span className="text-xs font-bold text-[#111110] sm:text-sm">
                        {preset.name}
                      </span>
                      <span className="rounded-md bg-white px-2 py-0.5 font-mono text-[10px] font-medium text-[#676764] border border-black/[0.06]">
                        {preset.aspect}
                      </span>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-[#676764]">
                      {preset.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DEEP-DIVE EDITORIAL BENTO SECTIONS (#bento-features) */}
      <section
        id="bento-features"
        className="mx-auto max-w-6xl space-y-10 px-4 py-10 sm:px-6 sm:py-16"
      >
        {/* Bento Card 1: Precision Capture & Aspect-Ratio Framing (Screenshot 01) */}
        <div className="overflow-hidden rounded-[26px] border border-[#E5E5E2] bg-white p-5 shadow-xs sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F1F1EE] px-3 py-1 text-xs font-semibold text-[#111110]">
                <Video className="h-3.5 w-3.5" />
                display • window • interactive aspect-ratio crop
              </span>
              <h2 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-[#111110] sm:text-4xl">
                precision capture that{" "}
                <span className="rounded-xl bg-black/[0.07] px-3 py-0.5 font-semibold">
                  stays out of your way.
                </span>
              </h2>
            </div>
            <span className="rounded-full border border-[#E5E5E2] bg-[#F7F7F6] px-3.5 py-1.5 font-mono text-xs font-medium text-[#676764]">
              16:9 • 16:10 • 4:3 • 1:1 • 9:16
            </span>
          </div>

          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#676764] sm:text-base">
            Press{" "}
            <kbd className="rounded border border-black/15 bg-[#F7F7F6] px-1.5 py-0.5 font-mono text-xs font-semibold text-[#111110]">
              ⌘⇧2
            </kbd>{" "}
            to summon the floating Helium-White capture bar. Frame a full Retina
            display, a single application window, or a locked aspect-ratio region
            with one-click{" "}
            <strong className="font-semibold text-[#111110]">Auto zoom</strong>{" "}
            enabled from the start.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-[#E5E5E2] bg-[#FAF9F6]">
            <Image
              src="/screenify/01-recorder-and-overlay.png"
              alt="Screenify Precision Capture Bar and interactive 16:10 aspect-ratio crop overlay with Auto zoom toggle"
              width={2880}
              height={1800}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        {/* 2-Column Bento Row: AI Smart Edit Assistant (03) + Local Whisper Captions (04) */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Card A: AI Smart Edit Assistant (Screenshot 03) */}
          <div className="flex flex-col justify-between overflow-hidden rounded-[26px] border border-[#E5E5E2] bg-white p-5 shadow-xs sm:p-7">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F1F1EE] px-3 py-1 text-xs font-semibold text-[#111110]">
                <Sparkles className="h-3.5 w-3.5" />
                ai smart edit assistant
              </span>
              <h3 className="mt-3 text-2xl font-bold tracking-[-0.025em] text-[#111110]">
                natural-language timeline editing.
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#676764] sm:text-sm">
                Type{" "}
                <code className="rounded bg-black/[0.06] px-1.5 py-0.5 font-mono text-xs text-[#111110]">
                  &ldquo;Zoom in 2.2x at 0:02 for 3s, switch aspect ratio to
                  16:9, and set padding to 8%&rdquo;
                </code>{" "}
                and watch Screenify apply the cuts, keyframes, and framing
                changes with one-click Undo.
              </p>
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl border border-[#E5E5E2] bg-[#FAF9F6]">
              <Image
                src="/screenify/03-ai-smart-edit-assistant.png"
                alt="Screenify AI Smart Edit Assistant drawer applying zoom, aspect ratio, and padding edits"
                width={2880}
                height={1800}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* Card B: On-Device Whisper AI Captions (Screenshot 04) */}
          <div className="flex flex-col justify-between overflow-hidden rounded-[26px] border border-[#E5E5E2] bg-white p-5 shadow-xs sm:p-7">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F1F1EE] px-3 py-1 text-xs font-semibold text-[#111110]">
                <Captions className="h-3.5 w-3.5" />
                100% local whisper ai captions
              </span>
              <h3 className="mt-3 text-2xl font-bold tracking-[-0.025em] text-[#111110]">
                transcribed on your mac. zero cloud uploads.
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#676764] sm:text-sm">
                Generate word-synchronized captions in 20+ languages directly on
                Apple Silicon, paired with on-device DeepFilterNet neural
                microphone noise suppression.
              </p>
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl border border-[#E5E5E2] bg-[#FAF9F6]">
              <Image
                src="/screenify/04-cursor-and-captions.png"
                alt="Screenify On-Device Whisper AI Captions panel transcribing speech locally on Mac"
                width={2880}
                height={1800}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bento Card 4: Invisible Teleprompter + 01/02/03 Workflow + [4] What You Get (Screenshot 05) */}
        <div className="overflow-hidden rounded-[26px] border border-[#E5E5E2] bg-white p-5 shadow-xs sm:p-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F1F1EE] px-3 py-1 text-xs font-semibold text-[#111110]">
                <EyeOff className="h-3.5 w-3.5" />
                invisible to screen capture • ⌘⇧T
              </span>
              <h3 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-[#111110] sm:text-3xl">
                built-in teleprompter &amp;{" "}
                <span className="rounded-xl bg-black/[0.07] px-2.5 py-0.5 font-semibold">
                  30-second workflow.
                </span>
              </h3>

              <div className="mt-4 space-y-2 text-xs font-medium text-black/80 sm:text-sm">
                <p>
                  <span className="mr-2 font-mono text-xs font-bold text-[#8C8C87]">
                    01
                  </span>
                  press{" "}
                  <kbd className="rounded border border-black/15 bg-[#F7F7F6] px-1.5 py-0.5 font-mono text-xs font-semibold">
                    ⌘⇧2
                  </kbd>{" "}
                  to frame your display, window, or crop &amp; open the
                  invisible Teleprompter.
                </p>
                <p>
                  <span className="mr-2 font-mono text-xs font-bold text-[#8C8C87]">
                    02
                  </span>
                  record once — automatic 240Hz spring click-zooms land on your
                  timeline immediately.
                </p>
                <p>
                  <span className="mr-2 font-mono text-xs font-bold text-[#8C8C87]">
                    03
                  </span>
                  generate local Whisper captions or ask AI Smart Edit, then
                  export in 4K 60fps.
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-black/[0.08] font-mono text-xs font-bold text-[#111110]">
                  4
                </span>
                <span className="text-sm font-bold text-[#111110]">
                  what you get
                </span>
              </div>

              <ul className="mt-3.5 space-y-2">
                {SCREENIFY_WHAT_YOU_GET_LIST.map((item) => (
                  <li
                    key={item.text}
                    className="flex items-start gap-2.5 text-xs text-black/75 sm:text-sm"
                  >
                    <span className="mt-0.5 inline-flex w-11 shrink-0 items-center justify-center rounded bg-[#F1F1EE] py-0.5 font-mono text-[10px] font-bold text-[#111110]">
                      {item.code}
                    </span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-2xl border border-[#E5E5E2] bg-[#FAF9F6]">
                <Image
                  src="/screenify/05-teleprompter-and-permissions.png"
                  alt="Screenify Content-Protected Floating Teleprompter (invisible to screen capture) and one-click macOS Screen Recording & Accessibility setup"
                  width={2880}
                  height={1800}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HEAD-TO-HEAD COMPARISON MATRIX & SHORTCUTS */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F1F1EE] px-3 py-1 text-xs font-semibold text-[#111110]">
            <Cpu className="h-3.5 w-3.5" />
            studio comparison
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] leading-[1.06] text-[#111110] sm:text-5xl">
            why creators switch to{" "}
            <span className="rounded-xl bg-black/[0.07] px-3 py-0.5 font-semibold">
              screenify.
            </span>
          </h2>
        </div>

        {/* Comparison Table */}
        <div className="mt-8 overflow-hidden rounded-[24px] border border-[#E5E5E2] bg-white shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#E5E5E2] bg-[#FAF9F6]">
                  <th className="py-4 pr-4 pl-6 font-bold text-[#111110]">
                    Capability
                  </th>
                  <th className="bg-[#111110] px-5 py-4 font-bold text-white">
                    Screenify v1.12 (MIT)
                  </th>
                  <th className="px-5 py-4 font-semibold text-black/65">
                    Commercial Studio Recorders
                  </th>
                  <th className="px-5 py-4 font-semibold text-black/65">
                    OBS Studio
                  </th>
                  <th className="px-5 py-4 font-semibold text-black/65">
                    QuickTime / macOS Screenshot
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/[0.06]">
                {SCREENIFY_COMPARISON_ROWS.map((row) => (
                  <tr key={row.capability} className="hover:bg-black/[0.015]">
                    <td className="py-3.5 pr-4 pl-6 font-semibold text-[#111110]">
                      {row.capability}
                    </td>
                    <td className="bg-[#16A34A]/[0.06] px-5 py-3.5 font-semibold text-[#111110]">
                      <span className="inline-flex items-center gap-1.5">
                        <Check className="h-4 w-4 shrink-0 text-[#16A34A]" />
                        <span>{row.screenify}</span>
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-[#676764]">
                      {row.commercialRecorders}
                    </td>
                    <td className="px-5 py-3.5 text-[#676764]">
                      {row.obsStudio}
                    </td>
                    <td className="px-5 py-3.5 text-[#676764]">
                      {row.quicktime}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Global Keyboard Shortcuts Reference */}
        <div className="mt-12 rounded-[26px] border border-[#E5E5E2] bg-white p-6 shadow-xs sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F1F1EE] px-3 py-1 text-xs font-semibold text-[#111110]">
                <Command className="h-3.5 w-3.5" />
                keyboard-first studio controls
              </span>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-[#111110]">
                global shortcuts &amp; timeline hotkeys.
              </h3>
            </div>
            <span className="font-mono text-xs text-[#8C8C87]">
              Works across all macOS spaces
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {SCREENIFY_SHORTCUTS.map((sc) => (
              <div
                key={sc.keys}
                className="flex items-center justify-between gap-3 rounded-2xl border border-[#E5E5E2] bg-[#F7F7F6] px-4 py-3"
              >
                <span className="text-xs leading-snug text-black/75">
                  {sc.action}
                </span>
                <kbd className="shrink-0 rounded-lg border border-black/[0.12] bg-white px-2.5 py-1 font-mono text-xs font-bold text-[#111110] shadow-2xs">
                  {sc.keys}
                </kbd>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. 3-SECOND DMG INSTALLER & OPEN SOURCE (#open-source & #download) */}
      <section
        id="open-source"
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16"
      >
        <div className="overflow-hidden rounded-[28px] border border-[#E5E5E2] bg-white p-6 shadow-xs sm:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#16A34A]/10 px-3.5 py-1 text-xs font-semibold text-[#16A34A]">
                <Lock className="h-3.5 w-3.5" />
                100% Open Source (MIT) • Zero Watermarks • Zero Cloud Uploads
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] leading-[1.06] text-[#111110] sm:text-4xl">
                drag screenify into applications.{" "}
                <span className="rounded-xl bg-black/[0.07] px-3 py-0.5 font-semibold">
                  ready in 3 seconds.
                </span>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#676764]">
                Download the{" "}
                <code className="font-mono text-xs text-[#111110]">
                  Screenify.dmg
                </code>{" "}
                installer for Apple Silicon Macs, drag{" "}
                <strong className="font-semibold text-[#111110]">
                  Screenify.app
                </strong>{" "}
                into Applications, and press{" "}
                <kbd className="rounded border border-black/15 bg-[#F7F7F6] px-1.5 py-0.5 font-mono text-xs font-semibold text-[#111110]">
                  ⌘⇧2
                </kbd>{" "}
                to record your first studio-grade product demo. For developers,
                the full repository is available on GitHub under the MIT
                License.
              </p>

              {/* SHA-256 Checksum Box */}
              <div className="mt-5 rounded-2xl border border-[#E5E5E2] bg-[#F7F7F6] p-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#111110]">
                    SHA-256 Checksum (Screenify.dmg • v1.12.0)
                  </span>
                  <button
                    type="button"
                    onClick={handleCopySha}
                    className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-0.5 text-[11px] font-semibold text-[#111110] shadow-2xs hover:bg-black/[0.04]"
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
                <div className="mt-1.5 break-all font-mono text-[11px] text-[#676764]">
                  {SCREENIFY_SHA256}
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href={SCREENIFY_DMG_URL}
                  className="inline-flex items-center gap-2 rounded-full bg-[#111110] px-6 py-3 text-xs font-semibold text-white transition-colors hover:bg-black/85 sm:text-sm"
                >
                  <AppleLogoIcon className="h-4 w-4" />
                  <span>Download Screenify.dmg (v1.12.0)</span>
                </a>
                <a
                  href={SCREENIFY_GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#E5E5E2] bg-white px-5 py-3 text-xs font-semibold text-[#111110] transition-colors hover:bg-black/[0.03] sm:text-sm"
                >
                  <GitHubIcon className="h-4 w-4" />
                  <span>GitHub Repository</span>
                  <ExternalLink className="h-3.5 w-3.5 text-black/45" />
                </a>
              </div>
            </div>

            {/* Right Column: DMG Installer Preview Card */}
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-2xl border border-[#E5E5E2] bg-[#FAF9F6] p-3">
                <Image
                  src="/screenify/00-dmg-background.png"
                  alt="Screenify.dmg macOS installer — drag screenify into applications, then open it"
                  width={1200}
                  height={800}
                  className="h-auto w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ ACCORDION (#faq) */}
      <section
        id="faq"
        className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20"
      >
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F1F1EE] px-3 py-1 text-xs font-semibold text-[#111110]">
            <Sliders className="h-3.5 w-3.5" />
            frequently asked questions
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-[#111110] sm:text-5xl">
            everything you need to know.
          </h2>
        </div>

        <div className="mt-8 space-y-3">
          {SCREENIFY_FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl border border-[#E5E5E2] bg-white transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left text-sm font-bold text-[#111110] hover:bg-black/[0.015] sm:text-base"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-black/50 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-black/[0.06] px-6 py-4 text-xs leading-relaxed text-[#676764] sm:text-sm">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. OTHER COGIFY APPS SHOWCASE */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <OtherAppsShowcase currentSlug="screenify" />
      </div>

      {/* 10. FINAL DOWNLOAD CTA FOOTER CARD (#download) */}
      <section
        id="download"
        className="mx-auto max-w-5xl px-4 pt-8 pb-20 sm:px-6 sm:pb-28"
      >
        <div className="rounded-[32px] border border-[#E5E5E2] bg-white p-8 text-center shadow-[0_20px_60px_rgba(17,17,16,0.06)] sm:p-14">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[18px] border border-[#E5E5E2] bg-[#FAF9F6] p-2 shadow-xs">
            <Image
              src="/brand/Screenify/icon.png"
              alt="Screenify App Icon"
              width={56}
              height={56}
              className="h-12 w-12 rounded-xl"
            />
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-[-0.035em] leading-[1.05] text-[#111110] sm:text-5xl">
            ready to record your next{" "}
            <span className="rounded-xl bg-black/[0.07] px-3 py-0.5 font-semibold">
              product demo?
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#676764] sm:text-base">
            Download Screenify v1.12.0 for macOS. Free and open-source forever
            under the MIT License — with 240Hz spring zooms, on-device Whisper
            AI captions, and an invisible Teleprompter built in.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href={SCREENIFY_DMG_URL}
              className="inline-flex items-center gap-2.5 rounded-full bg-[#111110] px-8 py-4 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(17,17,16,0.18)] transition-all hover:bg-black/85"
            >
              <AppleLogoIcon className="h-4 w-4" />
              <span>download screenify for mac</span>
              <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-xs tabular-nums">
                v1.12.0
              </span>
            </a>

            <a
              href={SCREENIFY_GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#E5E5E2] bg-white px-6 py-4 text-sm font-semibold text-[#111110] transition-colors hover:bg-black/[0.03]"
            >
              <GitHubIcon className="h-4 w-4" />
              <span>view on github (MIT)</span>
            </a>
          </div>

          <div className="mt-6 flex justify-center">
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
      </section>
    </div>
  );
}
