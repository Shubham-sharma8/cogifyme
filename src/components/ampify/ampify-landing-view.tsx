/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BatteryCharging,
  Zap,
  Smartphone,
  LayoutGrid,
  Calendar,
  ShieldCheck,
  Check,
  ChevronDown,
  Copy,
  ExternalLink,
  Cpu,
  Lock,
} from "lucide-react";
import { AppleLogoIcon, GitHubIcon } from "@/components/ui/platform-icons";
import { OtherAppsShowcase } from "@/components/products/other-apps-showcase";
import {
  AMPIFY_VERSION,
  AMPIFY_SIZE,
  AMPIFY_DMG_URL,
  AMPIFY_GITHUB_URL,
  AMPIFY_RELEASE_NOTES_URL,
  AMPIFY_SHA256,
  TRYMACAPPS_URL,
  TRYMACAPPS_BADGE_IMG,
  AMPIFY_TOUR_TABS,
  AMPIFY_BENTO_CARDS,
  AMPIFY_COMPARISON_ROWS,
  AMPIFY_FAQS,
} from "./ampify-data";

export function AmpifyLandingView() {
  const [activeTourIndex, setActiveTourIndex] = useState(0);
  const [selectedLimit, setSelectedLimit] = useState<70 | 80 | 85>(80);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [copiedSha, setCopiedSha] = useState(false);

  const activeTour = AMPIFY_TOUR_TABS[activeTourIndex];

  const handleCopySha = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(AMPIFY_SHA256);
      setCopiedSha(true);
      setTimeout(() => setCopiedSha(false), 2000);
    }
  };

  return (
    <div className="dark min-h-screen bg-[#0D0E12] text-[#F2F4F8] selection:bg-[#87E5B8] selection:text-[#0D0E12]">
      {/* 1. FLOATING TOP PILL NAVBAR */}
      <header className="sticky top-4 z-50 mx-auto max-w-fit px-3">
        <nav
          aria-label="Ampify Navigation"
          className="flex items-center gap-1 rounded-full border border-white/[0.08] bg-[#16181F]/90 px-2.5 py-1.5 shadow-[0_12px_36px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:gap-1.5 sm:px-3.5"
        >
          <Link
            href="/"
            className="rounded-full px-2.5 py-1 text-xs font-medium text-[#9AA0AE] transition-colors hover:bg-white/[0.06] hover:text-[#F2F4F8]"
          >
            ← cogify
          </Link>
          <span className="h-3.5 w-px bg-white/[0.08]" />
          <a
            href="#top"
            className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold tracking-tight text-[#F2F4F8]"
          >
            <Image
              src="/brand/Ampify/icon-sm.webp"
              alt="Ampify Icon"
              width={18}
              height={18}
              className="h-[18px] w-[18px] rounded-[4px]"
            />
            <span>ampify</span>
          </a>
          <a
            href="#interactive-tour"
            className="hidden rounded-full bg-[#1E212B] px-3 py-1 text-xs font-medium text-[#F2F4F8] transition-colors hover:bg-white/[0.1] sm:inline-block"
          >
            how it works
          </a>
          <a
            href="#liquid-devices"
            className="hidden rounded-full px-2.5 py-1 text-xs font-medium text-[#9AA0AE] transition-colors hover:bg-white/[0.06] hover:text-[#F2F4F8] md:inline-block"
          >
            apple devices
          </a>
          <a
            href="#features"
            className="hidden rounded-full px-2.5 py-1 text-xs font-medium text-[#9AA0AE] transition-colors hover:bg-white/[0.06] hover:text-[#F2F4F8] md:inline-block"
          >
            80% hold &amp; watts
          </a>
          <a
            href="#comparison"
            className="hidden rounded-full px-2.5 py-1 text-xs font-medium text-[#9AA0AE] transition-colors hover:bg-white/[0.06] hover:text-[#F2F4F8] lg:inline-block"
          >
            why ampify
          </a>
          <a
            href="#faq"
            className="hidden rounded-full px-2.5 py-1 text-xs font-medium text-[#9AA0AE] transition-colors hover:bg-white/[0.06] hover:text-[#F2F4F8] lg:inline-block"
          >
            faq
          </a>
          <a
            href={AMPIFY_DMG_URL}
            className="ml-0.5 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#87E5B8] to-[#33B880] px-3.5 py-1 text-xs font-semibold text-[#0D0E12] transition-opacity hover:opacity-90"
          >
            <AppleLogoIcon className="h-3 w-3" />
            <span>download</span>
          </a>
        </nav>
      </header>

      {/* 2. HERO SECTION */}
      <section
        id="top"
        className="mx-auto max-w-6xl px-4 pt-12 pb-16 text-center sm:px-6 sm:pt-16 sm:pb-22"
      >
        {/* Eyebrow Pill */}
        <div className="mb-6 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/[0.08] bg-[#16181F] px-4 py-1.5 text-xs font-medium text-[#9AA0AE]">
          <span className="inline-flex items-center gap-1.5 font-mono font-semibold tracking-wider text-[#87E5B8] uppercase">
            <span className="h-2 w-2 rounded-full bg-[#33B880]" />
            AMPIFY {AMPIFY_VERSION} · OPEN SOURCE MACOS UTILITY
          </span>
        </div>

        {/* Display Headline */}
        <h1 className="mx-auto max-w-4xl text-4xl font-semibold tracking-[-0.035em] leading-[1.05] text-[#F2F4F8] sm:text-6xl lg:text-[64px]">
          Keep your Mac battery healthy.{" "}
          <span className="text-[#87E5B8]">
            See every Apple device at a glance.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mt-5 max-w-3xl text-base font-normal leading-relaxed text-[#9AA0AE] sm:text-xl">
          Smart <span className="font-mono font-semibold text-[#F2F4F8] tabular-nums">80%</span> charge
          limit, liquid-wave battery silhouettes for iPhone, iPad, Watch,
          AirPods, Pencil &amp; Apple TV, and live per-app wattage—crafted in a
          calm macOS System UI.
        </p>

        {/* Primary & Secondary CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href={AMPIFY_DMG_URL}
            className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#87E5B8] to-[#33B880] px-7 py-3.5 text-sm font-semibold text-[#0D0E12] shadow-[0_12px_32px_rgba(51,184,128,0.22)] transition-transform hover:scale-[1.015]"
          >
            <AppleLogoIcon className="h-4 w-4" />
            <span>Download for macOS — Free &amp; Open Source</span>
            <span className="rounded-full bg-[#0D0E12]/15 px-2 py-0.5 font-mono text-[11px] font-semibold tabular-nums text-[#0D0E12]">
              {AMPIFY_SIZE}
            </span>
          </a>

          <a
            href={AMPIFY_GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#1E212B] px-6 py-3.5 text-sm font-medium text-[#F2F4F8] transition-colors hover:border-white/[0.18] hover:bg-[#16181F]"
          >
            <GitHubIcon className="h-4 w-4" />
            <span>View Source on GitHub</span>
            <span className="rounded-full bg-[#33B880]/15 px-2 py-0.5 font-mono text-[11px] font-semibold text-[#87E5B8]">
              MIT
            </span>
          </a>
        </div>

        {/* System Requirements Subtext */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-[#646A78]">
          <span className="inline-flex items-center gap-1.5 text-[#9AA0AE]">
            <ShieldCheck className="h-3.5 w-3.5 text-[#87E5B8]" />
            macOS 14 Sonoma or later · Universal (Apple Silicon &amp; Intel) ·
            Signed DMG ({AMPIFY_SIZE}) · 100% Local
          </span>
          <span>·</span>
          <a
            href={AMPIFY_RELEASE_NOTES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[#478CF2] hover:underline"
          >
            Release Notes (v{AMPIFY_VERSION}) ↗
          </a>
        </div>

        {/* Hero Visual: 01-ampify-hero-popover-and-liquid-devices.png */}
        <div className="mt-10 overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#16181F] p-2 shadow-[0_28px_80px_rgba(0,0,0,0.55)] sm:p-4">
          <div className="overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#0D0E12]">
            <Image
              src="/images/ampify/01-ampify-hero-popover-and-liquid-devices.png"
              alt="Ampify v1.6.3 Hero — Menu Bar Popover, Smart 80% Charge Limit, Liquid-Wave Apple Devices Strip, and Now Hardware Telemetry Dashboard"
              width={2560}
              height={1720}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        {/* 4 Hardware Telemetry Proof Cards */}
        <div className="mt-6 grid grid-cols-2 gap-3 text-left sm:grid-cols-4 sm:gap-4">
          <div className="rounded-2xl border border-white/[0.08] bg-[#16181F] p-4 sm:p-5">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#646A78]">
              Smart Charge Ceiling
            </div>
            <div className="mt-1 font-mono text-2xl font-semibold tracking-tight tabular-nums text-[#87E5B8] sm:text-3xl">
              80% Hold
            </div>
            <div className="mt-1 text-xs text-[#9AA0AE]">
              Native PowerUI · Direct Adapter Bypass
            </div>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-[#16181F] p-4 sm:p-5">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#646A78]">
              Per-App Power Draw
            </div>
            <div className="mt-1 font-mono text-2xl font-semibold tracking-tight tabular-nums text-[#F2F4F8] sm:text-3xl">
              0.4 W
            </div>
            <div className="mt-1 text-xs text-[#9AA0AE]">
              0.1 W precision · proc_pid_rusage counters
            </div>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-[#16181F] p-4 sm:p-5">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#646A78]">
              Battery Pack Telemetry
            </div>
            <div className="mt-1 font-mono text-2xl font-semibold tracking-tight tabular-nums text-[#F2F4F8] sm:text-3xl">
              12.48 V
            </div>
            <div className="mt-1 text-xs text-[#9AA0AE]">
              Live Volts, Amps, Watts, mAh &amp; °C
            </div>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-[#16181F] p-4 sm:p-5">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#646A78]">
              Desktop &amp; Notification
            </div>
            <div className="mt-1 font-mono text-2xl font-semibold tracking-tight tabular-nums text-[#87E5B8] sm:text-3xl">
              5 Widgets
            </div>
            <div className="mt-1 text-xs text-[#9AA0AE]">
              Liquid-Wave Apple Devices &amp; Live Watts
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE 80% CHARGE CEILING & LIQUID-WAVE PREVIEW (#how-it-works) */}
      <section
        id="interactive-tour"
        className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20"
      >
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-[#1E212B] px-3.5 py-1 text-xs font-medium text-[#87E5B8]">
            <BatteryCharging className="h-3.5 w-3.5" />
            interactive studio walkthrough
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] leading-[1.08] text-[#F2F4F8] sm:text-5xl">
            Every battery &amp; watt on your desk.{" "}
            <span className="text-[#87E5B8]">Zero root daemons.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#9AA0AE] sm:text-base">
            Explore how Ampify protects your MacBook battery chemistry while
            keeping your iPhone, iPad, Apple Watch, AirPods, Pencil, and Apple
            TV Siri Remote visible in one calm macOS interface.
          </p>
        </div>

        {/* Interactive Tour Tab Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {AMPIFY_TOUR_TABS.map((tab, idx) => {
            const isSelected = idx === activeTourIndex;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTourIndex(idx)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-all sm:text-sm ${
                  isSelected
                    ? "bg-gradient-to-r from-[#87E5B8] to-[#33B880] font-semibold text-[#0D0E12] shadow-sm"
                    : "border border-white/[0.08] bg-[#16181F] text-[#9AA0AE] hover:border-white/[0.16] hover:text-[#F2F4F8]"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`rounded-full px-2 py-0.5 font-mono text-[10px] tabular-nums ${
                    isSelected
                      ? "bg-[#0D0E12]/15 text-[#0D0E12]"
                      : "bg-[#1E212B] text-[#9AA0AE]"
                  }`}
                >
                  {tab.metric}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Tour Showcase Card */}
        <div className="mt-6 overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#16181F] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.45)] sm:p-8">
          <div className="grid grid-cols-1 gap-7 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#1E212B] px-3 py-1 font-mono text-[11px] font-medium text-[#87E5B8]">
                {activeTour.badge}
              </div>
              <h3 className="mt-3.5 text-2xl font-semibold tracking-[-0.025em] leading-tight text-[#F2F4F8] sm:text-3xl">
                {activeTour.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-[#9AA0AE]">
                {activeTour.subtitle}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-[#646A78] sm:text-sm">
                {activeTour.description}
              </p>

              {/* Interactive 70% / 80% / 85% Ceiling Preview Pill */}
              <div className="mt-5 rounded-2xl border border-white/[0.08] bg-[#0D0E12] p-3.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-[#9AA0AE]">
                    Desk Charge Ceiling Target
                  </span>
                  <span className="font-mono text-xs font-semibold tabular-nums text-[#87E5B8]">
                    {selectedLimit}% Hold · Adapter Bypass Active
                  </span>
                </div>
                <div className="mt-2.5 grid grid-cols-3 gap-2">
                  {([70, 80, 85] as const).map((limit) => (
                    <button
                      key={limit}
                      type="button"
                      onClick={() => setSelectedLimit(limit)}
                      className={`rounded-xl py-1.5 font-mono text-xs font-semibold tabular-nums transition-all ${
                        selectedLimit === limit
                          ? "bg-[#33B880] text-[#0D0E12]"
                          : "border border-white/[0.08] bg-[#16181F] text-[#9AA0AE] hover:text-[#F2F4F8]"
                      }`}
                    >
                      {limit}% {limit === 80 ? "(Rec.)" : ""}
                    </button>
                  ))}
                </div>
              </div>

              <ul className="mt-5 space-y-2.5">
                {activeTour.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-xs leading-relaxed text-[#9AA0AE] sm:text-sm"
                  >
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#33B880]/20 text-[#87E5B8]">
                      <Check className="h-2.5 w-2.5" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0D0E12]">
                <Image
                  src={activeTour.image}
                  alt={activeTour.imageAlt}
                  width={2560}
                  height={1720}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT AMPIFY IS BEST AT — 5 PILLARS STRIP (#liquid-devices) */}
      <section
        id="liquid-devices"
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16"
      >
        <div className="rounded-[28px] border border-white/[0.08] bg-[#16181F] p-6 sm:p-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-[#1E212B] px-3 py-1 font-mono text-xs text-[#87E5B8]">
              COGIFY HELIUM SYSTEM UI · 100% LOCAL
            </span>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#F2F4F8] sm:text-4xl">
              Engineered for desk-bound MacBooks &amp; multi-device Apple desks.
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[#9AA0AE] sm:text-base">
              Most charge limiters install a persistent root daemon that writes
              raw SMC keys. Ampify communicates directly with macOS&apos;s
              built-in{" "}
              <code className="rounded bg-[#1E212B] px-1.5 py-0.5 font-mono text-xs text-[#F2F4F8]">
                PowerUI.framework
              </code>
              ,{" "}
              <code className="rounded bg-[#1E212B] px-1.5 py-0.5 font-mono text-xs text-[#F2F4F8]">
                IOKit
              </code>
              ,{" "}
              <code className="rounded bg-[#1E212B] px-1.5 py-0.5 font-mono text-xs text-[#F2F4F8]">
                CoreDevice
              </code>
              , and{" "}
              <code className="rounded bg-[#1E212B] px-1.5 py-0.5 font-mono text-xs text-[#F2F4F8]">
                proc_pid_rusage
              </code>{" "}
              hardware energy counters.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              {
                icon: <BatteryCharging className="h-4 w-4 text-[#87E5B8]" />,
                title: "80% Desk Ceiling",
                metric: "70% · 80% · 85%",
                desc: "Prevents high-voltage cathode stress while plugged in all day and switches to direct Adapter Bypass power.",
              },
              {
                icon: <Smartphone className="h-4 w-4 text-[#87E5B8]" />,
                title: "Liquid-Wave Devices",
                metric: "Wi-Fi + BLE + HID",
                desc: "iPhone, iPad, Watch, AirPods (L/R/Case), Pencil & Apple TV Remote in tactile liquid silhouettes.",
              },
              {
                icon: <Zap className="h-4 w-4 text-[#87E5B8]" />,
                title: "Per-App Real Watts",
                metric: "0.1 W Resolution",
                desc: "Translates Mach CPU + GPU energy counters into exact watts (0.4 W) with 1-click Quit App actions.",
              },
              {
                icon: <Calendar className="h-4 w-4 text-[#87E5B8]" />,
                title: "Calendar Trip Top-Up",
                metric: "Local EventKit",
                desc: "Detects upcoming flights, trains, or offsite meetings and tops your MacBook up to 100% before departure.",
              },
              {
                icon: <LayoutGrid className="h-4 w-4 text-[#87E5B8]" />,
                title: "5 Desktop Widgets",
                metric: "Sonoma · Sequoia · Tahoe",
                desc: "Pin Liquid-Wave Apple Device strips, Ecosystem grids, and live Watt meters right to your desktop.",
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0D0E12] p-4"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#1E212B]">
                      {pillar.icon}
                    </span>
                    <span className="rounded-full bg-[#1E212B] px-2.5 py-0.5 font-mono text-[10px] font-medium tabular-nums text-[#87E5B8]">
                      {pillar.metric}
                    </span>
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-[#F2F4F8]">
                    {pillar.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#9AA0AE]">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 8-CARD BENTO FEATURE GRID (ALL REAL-APP SCREENSHOTS 02–09) (#features) */}
      <section
        id="features"
        className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20"
      >
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-[#1E212B] px-3.5 py-1 text-xs font-medium text-[#87E5B8]">
            <Zap className="h-3.5 w-3.5" />
            complete feature studio
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] leading-[1.08] text-[#F2F4F8] sm:text-5xl">
            Every detail of your power &amp; devices.{" "}
            <span className="text-[#87E5B8]">Crafted in System UI.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#9AA0AE] sm:text-base">
            From proportional liquid-wave hardware silhouettes and real-watt
            process attribution to official Apple battery service pricing and
            Calendar-aware trip top-ups.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {AMPIFY_BENTO_CARDS.map((card) => (
            <article
              key={card.id}
              className="flex flex-col justify-between overflow-hidden rounded-[26px] border border-white/[0.08] bg-[#16181F] p-5 shadow-[0_14px_40px_rgba(0,0,0,0.35)] transition-colors hover:border-white/[0.16] sm:p-6"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-2">
                    <span className="rounded-lg bg-[#1E212B] px-2 py-0.5 font-mono text-xs font-semibold tabular-nums text-[#87E5B8]">
                      {card.step}
                    </span>
                    <span className="text-xs font-medium text-[#9AA0AE]">
                      {card.tag}
                    </span>
                  </div>
                  <span className="rounded-full border border-white/[0.08] bg-[#0D0E12] px-2.5 py-0.5 font-mono text-[11px] tabular-nums text-[#9AA0AE]">
                    {card.metricPill}
                  </span>
                </div>

                <h3 className="mt-3.5 text-xl font-semibold tracking-[-0.02em] text-[#F2F4F8] sm:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#9AA0AE] sm:text-sm">
                  {card.description}
                </p>
              </div>

              <div className="mt-5 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0D0E12]">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  width={2560}
                  height={1720}
                  className="h-auto w-full object-cover"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 6. BENCHMARK COMPARISON TABLE (#comparison) */}
      <section
        id="comparison"
        className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20"
      >
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-[#1E212B] px-3.5 py-1 text-xs font-medium text-[#87E5B8]">
            <Cpu className="h-3.5 w-3.5" />
            head-to-head comparison
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] leading-[1.08] text-[#F2F4F8] sm:text-5xl">
            Why Ampify replaces{" "}
            <span className="text-[#87E5B8]">traditional charge limiters.</span>
          </h2>
        </div>

        <div className="mt-8 overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#16181F] shadow-[0_18px_50px_rgba(0,0,0,0.4)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] border-collapse text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/[0.08] bg-[#0D0E12]">
                  <th className="py-4 pr-4 pl-6 font-semibold text-[#F2F4F8]">
                    Capability
                  </th>
                  <th className="bg-[#33B880]/15 px-5 py-4 font-semibold text-[#87E5B8]">
                    Ampify v{AMPIFY_VERSION} (Open Source)
                  </th>
                  <th className="px-5 py-4 font-medium text-[#9AA0AE]">
                    AlDente / SMC Root Tools
                  </th>
                  <th className="px-5 py-4 font-medium text-[#9AA0AE]">
                    Built-in macOS Battery Settings
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06]">
                {AMPIFY_COMPARISON_ROWS.map((row) => (
                  <tr
                    key={row.capability}
                    className="transition-colors hover:bg-white/[0.02]"
                  >
                    <td className="py-3.5 pr-4 pl-6 font-medium text-[#F2F4F8]">
                      {row.capability}
                    </td>
                    <td className="bg-[#33B880]/[0.07] px-5 py-3.5 font-medium text-[#F2F4F8]">
                      <span className="inline-flex items-center gap-1.5">
                        <Check className="h-4 w-4 shrink-0 text-[#87E5B8]" />
                        <span>{row.ampify}</span>
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-[#9AA0AE]">
                      {row.rootTools}
                    </td>
                    <td className="px-5 py-3.5 text-[#646A78]">
                      {row.macOsDefault}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. SIGNED DMG INSTALLER & SHA-256 VERIFICATION (#download) */}
      <section
        id="download"
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16"
      >
        <div className="overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#16181F] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)] sm:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#33B880]/15 px-3.5 py-1 font-mono text-xs font-medium text-[#87E5B8]">
                <Lock className="h-3.5 w-3.5" />
                Signed with Apple Developer ID (9TKKPN6F59) · MIT License
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] leading-[1.08] text-[#F2F4F8] sm:text-4xl">
                Install in 3 seconds.{" "}
                <span className="text-[#87E5B8]">
                  100% local &amp; open source.
                </span>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#9AA0AE]">
                Download the signed Universal{" "}
                <code className="rounded bg-[#1E212B] px-1.5 py-0.5 font-mono text-xs text-[#F2F4F8]">
                  Ampify.dmg
                </code>{" "}
                installer below, drag{" "}
                <strong className="font-semibold text-[#F2F4F8]">
                  Ampify.app
                </strong>{" "}
                into{" "}
                <code className="rounded bg-[#1E212B] px-1.5 py-0.5 font-mono text-xs text-[#F2F4F8]">
                  /Applications
                </code>
                , and launch. To add desktop widgets, right-click anywhere on
                your macOS desktop →{" "}
                <strong className="font-semibold text-[#F2F4F8]">
                  Edit Widgets…
                </strong>{" "}
                → search{" "}
                <strong className="font-semibold text-[#F2F4F8]">Ampify</strong>
                .
              </p>

              {/* SHA-256 Checksum Box */}
              <div className="mt-5 rounded-2xl border border-white/[0.08] bg-[#0D0E12] p-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono font-medium text-[#9AA0AE]">
                    SHA-256 (Ampify.dmg · v{AMPIFY_VERSION})
                  </span>
                  <button
                    type="button"
                    onClick={handleCopySha}
                    className="inline-flex items-center gap-1 rounded-full border border-white/[0.08] bg-[#1E212B] px-2.5 py-0.5 font-mono text-[11px] font-medium text-[#F2F4F8] transition-colors hover:border-white/[0.2]"
                  >
                    {copiedSha ? (
                      <>
                        <Check className="h-3 w-3 text-[#87E5B8]" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3 text-[#9AA0AE]" />
                        <span>Copy SHA-256</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="mt-1.5 break-all font-mono text-[11px] tabular-nums text-[#646A78]">
                  {AMPIFY_SHA256}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={AMPIFY_DMG_URL}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#87E5B8] to-[#33B880] px-6 py-3.5 text-sm font-semibold text-[#0D0E12] transition-opacity hover:opacity-90"
                >
                  <AppleLogoIcon className="h-4 w-4" />
                  <span>Download Ampify.dmg</span>
                  <span className="rounded-full bg-[#0D0E12]/15 px-2 py-0.5 font-mono text-[11px] tabular-nums">
                    v{AMPIFY_VERSION} · {AMPIFY_SIZE}
                  </span>
                </a>

                <a
                  href={AMPIFY_GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#1E212B] px-5 py-3.5 text-sm font-medium text-[#F2F4F8] transition-colors hover:border-white/[0.2]"
                >
                  <GitHubIcon className="h-4 w-4" />
                  <span>View Source on GitHub</span>
                  <ExternalLink className="h-3.5 w-3.5 text-[#9AA0AE]" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0D0E12]">
                <Image
                  src="/images/ampify/09-ampify-dmg-installer-preview.png"
                  alt="Ampify v1.6.3 Signed Drag-and-Drop DMG Installer Preview"
                  width={1200}
                  height={800}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FREQUENTLY ASKED QUESTIONS (#faq) */}
      <section
        id="faq"
        className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20"
      >
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-[#1E212B] px-3.5 py-1 text-xs font-medium text-[#87E5B8]">
            frequently asked questions
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#F2F4F8] sm:text-4xl">
            Questions, <span className="text-[#87E5B8]">answered.</span>
          </h2>
        </div>

        <div className="mt-8 space-y-3">
          {AMPIFY_FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#16181F]"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-[#F2F4F8] sm:px-6 sm:py-5 sm:text-base"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-[#9AA0AE] transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#87E5B8]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-white/[0.06] px-5 py-4 text-xs leading-relaxed text-[#9AA0AE] sm:px-6 sm:text-sm">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. OTHER COGIFY APPS SHOWCASE */}
      <OtherAppsShowcase currentSlug="ampify" />

      {/* 10. TRYMACAPPS FOOTER BADGE (Very Bottom of macOS App Page) */}
      <div className="pb-14 pt-4 flex justify-center">
        <a
          href={TRYMACAPPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transition-transform hover:scale-[1.02]"
        >
          <img
            src={TRYMACAPPS_BADGE_IMG}
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
