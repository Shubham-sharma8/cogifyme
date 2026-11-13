/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Image from "next/image";
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
  Download,
  ArrowRight,
  Cpu,
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
    <div className="min-h-screen bg-[#F7F7F6] text-[#111113] antialiased selection:bg-[#111113] selection:text-white">
      <main id="main-content">
        {/* ── Hero Section (Lowercase Editorial Helium Style) ── */}
        <section className="pt-24 sm:pt-28 pb-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Version Pill */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full px-3.5 py-1 text-xs font-medium border border-black/[0.08] bg-white shadow-2xs mb-6 text-[#6E6E73]">
              <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
              <span className="text-[#111113] font-semibold">
                ampify v{AMPIFY_VERSION}
              </span>
              <span>·</span>
              <span>open source (MIT)</span>
              <span>·</span>
              <span>smart 80% hold &amp; liquid-wave devices</span>
              <span>·</span>
              <a
                href={AMPIFY_RELEASE_NOTES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#007AFF] hover:underline"
              >
                release notes →
              </a>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#111113] leading-[1.06] mb-4 flex items-center justify-center gap-3 flex-wrap">
              <span>meet ampify.</span>
              <span className="inline-flex w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border border-black/[0.1] shadow-sm items-center justify-center overflow-hidden p-1">
                <Image
                  src="/brand/Ampify/icon.png"
                  alt="Ampify macOS App Icon"
                  width={52}
                  height={52}
                  className="w-full h-full object-contain"
                />
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-2xl text-[#6E6E73] max-w-3xl mx-auto font-normal leading-snug mb-8">
              smart <span className="font-mono font-semibold text-[#111113] tabular-nums">80%</span> battery hold, liquid-wave apple device silhouettes &amp; live <span className="font-mono font-semibold text-[#111113] tabular-nums">0.1 W</span> per-app wattage for macOS.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              <a
                href={AMPIFY_DMG_URL}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#111113] text-white hover:bg-black rounded-full px-7 py-3 text-sm font-medium transition shadow-sm"
              >
                <AppleLogoIcon className="w-4 h-4 text-white fill-current" />
                <span>
                  download for mac (v{AMPIFY_VERSION} · {AMPIFY_SIZE})
                </span>
              </a>
              <a
                href="#interactive-tour"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-white border border-black/[0.1] text-[#111113] hover:bg-[#EEEEF0] rounded-full px-6 py-3 text-sm font-medium transition"
              >
                <span>explore studio &amp; widgets</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={AMPIFY_GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-white border border-black/[0.1] text-[#6E6E73] hover:text-[#111113] hover:bg-[#EEEEF0] rounded-full px-5 py-3 text-sm font-medium transition"
              >
                <GitHubIcon className="w-4 h-4 fill-current" />
                <span>open source</span>
              </a>
            </div>

            {/* Micro Highlights */}
            <p className="text-xs text-[#86868B] max-w-3xl mx-auto leading-relaxed">
              macOS 14+ (apple silicon &amp; intel) · 70% / 80% / 85% desk charge ceiling · iPhone, iPad, Watch, AirPods, Pencil &amp; Siri Remote liquid-wave strip · real watts via proc_pid_rusage (0.1 W) · calendar smart trip top-up · 100% local privacy
            </p>
          </div>

          {/* Hero Screenshot Showcase */}
          <div className="max-w-6xl mx-auto mt-10">
            <div className="rounded-[28px] bg-white border border-black/[0.08] p-2 sm:p-4 shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
              <div className="rounded-[20px] overflow-hidden border border-black/[0.06] bg-[#FAF9F6]">
                <Image
                  src="/images/ampify/01-ampify-hero-popover-and-liquid-devices.png"
                  alt="Ampify v1.6.3 Hero — Menu Bar Popover, Smart 80% Charge Limit, Liquid-Wave Apple Devices Strip, and Now Hardware Telemetry Dashboard"
                  width={2560}
                  height={1720}
                  priority
                  className="w-full h-auto block"
                />
              </div>
            </div>

            {/* 4 Telemetry Proof Cards */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-left">
              <div className="rounded-2xl border border-black/[0.08] bg-white p-4 sm:p-5">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#86868B]">
                  smart charge ceiling
                </div>
                <div className="mt-1 font-mono text-2xl sm:text-3xl font-semibold tracking-tight tabular-nums text-[#16A34A]">
                  80% hold
                </div>
                <div className="mt-1 text-xs text-[#6E6E73]">
                  native PowerUI · direct adapter bypass
                </div>
              </div>

              <div className="rounded-2xl border border-black/[0.08] bg-white p-4 sm:p-5">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#86868B]">
                  per-app power draw
                </div>
                <div className="mt-1 font-mono text-2xl sm:text-3xl font-semibold tracking-tight tabular-nums text-[#111113]">
                  0.4 W
                </div>
                <div className="mt-1 text-xs text-[#6E6E73]">
                  0.1 W precision · proc_pid_rusage counters
                </div>
              </div>

              <div className="rounded-2xl border border-black/[0.08] bg-white p-4 sm:p-5">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#86868B]">
                  battery pack telemetry
                </div>
                <div className="mt-1 font-mono text-2xl sm:text-3xl font-semibold tracking-tight tabular-nums text-[#111113]">
                  12.48 V
                </div>
                <div className="mt-1 text-xs text-[#6E6E73]">
                  live volts, amps, watts, mAh &amp; °C
                </div>
              </div>

              <div className="rounded-2xl border border-black/[0.08] bg-white p-4 sm:p-5">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#86868B]">
                  desktop &amp; notification
                </div>
                <div className="mt-1 font-mono text-2xl sm:text-3xl font-semibold tracking-tight tabular-nums text-[#007AFF]">
                  5 widgets
                </div>
                <div className="mt-1 text-xs text-[#6E6E73]">
                  liquid-wave apple devices &amp; live watts
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Numbered Editorial Sections [ 1 ] to [ 4 ] (Exact Helium Structure) ── */}
        <section id="how-it-works" className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* [ 1 ] what it is */}
            <div className="bg-white rounded-2xl border border-black/[0.08] p-6 sm:p-10 space-y-4">
              <span className="inline-block font-mono text-xs text-[#6E6E73] bg-[#F3F3F5] px-2.5 py-1 rounded-md">
                [ 1 ]
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                what it is
              </h2>
              <p className="text-base sm:text-lg font-medium text-[#111113]">
                a native macOS battery longevity manager, apple ecosystem battery monitor, and real-time watt telemetry studio.
              </p>
              <p className="text-sm text-[#6E6E73] leading-relaxed">
                built with the calm, distraction-free cogify helium system UI philosophy — zero neon clutter, zero electron bloat, and 100% local privacy. ampify holds your MacBook battery at a healthy <strong>80% ceiling</strong> while plugged in on your desk, visualizes your iPhone, iPad, Apple Watch, AirPods, Apple Pencil, and Apple TV Siri Remote inside tactile <strong>Liquid-Wave device silhouettes</strong>, and breaks down <strong>&ldquo;What&apos;s using power&rdquo;</strong> down to the tenth of a watt (<code>0.1 W</code>).
              </p>
            </div>

            {/* [ 2 ] why it's different */}
            <div className="bg-white rounded-2xl border border-black/[0.08] p-6 sm:p-10 space-y-6">
              <span className="inline-block font-mono text-xs text-[#6E6E73] bg-[#F3F3F5] px-2.5 py-1 rounded-md">
                [ 2 ]
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                why it&apos;s different
              </h2>
              <p className="text-base sm:text-lg font-medium text-[#111113]">
                holding a lithium-ion cell at 100% on a warm desk charger accelerates chemical cathode stress — and macOS&apos;s vague &ldquo;energy impact&rdquo; hides actual watt drain.
              </p>
              <p className="text-sm text-[#6E6E73] leading-relaxed">
                ampify coordinates directly with macOS&apos;s native <code>PowerUI.framework</code> Smart Charging controller to cap charging at <strong>70%, 80% (Recommended), or 85%</strong> and switch to direct Adapter Bypass power, while discovering your entire Apple ecosystem over Wi-Fi (<code>usbmuxd</code>), Bluetooth GATT, and IOKit HID:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#F7F7F6] border border-black/[0.06]">
                  <div className="text-2xl font-semibold font-mono text-[#16A34A] tabular-nums">
                    +1.8 yrs
                  </div>
                  <div className="text-xs text-[#6E6E73] mt-1">
                    projected battery lifespan with 80% desk hold
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[#F7F7F6] border border-black/[0.06]">
                  <div className="text-2xl font-semibold font-mono text-[#111113] tabular-nums">
                    0.1 W
                  </div>
                  <div className="text-xs text-[#6E6E73] mt-1">
                    real per-app wattage via Mach proc_pid_rusage
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[#F7F7F6] border border-black/[0.06]">
                  <div className="text-2xl font-semibold font-mono text-[#111113] tabular-nums">
                    0 bytes
                  </div>
                  <div className="text-xs text-[#6E6E73] mt-1">
                    cloud telemetry (100% local &amp; MIT open source)
                  </div>
                </div>
              </div>
            </div>

            {/* [ 3 ] how it works */}
            <div className="bg-white rounded-2xl border border-black/[0.08] p-6 sm:p-10 space-y-6">
              <span className="inline-block font-mono text-xs text-[#6E6E73] bg-[#F3F3F5] px-2.5 py-1 rounded-md">
                [ 3 ]
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                how it works
              </h2>
              <div className="space-y-4">
                {[
                  {
                    num: "01",
                    text: "set your desk charge ceiling (70%, 80%, or 85%). ampify pauses charging at your target and powers your MacBook directly from the wall adapter.",
                  },
                  {
                    num: "02",
                    text: "see every apple device & live app watt in your menu bar. iPhone, iPad, Apple Watch, AirPods (L/R/Case), Pencil, and Siri Remote appear automatically in proportional Liquid-Wave silhouettes alongside per-app watts.",
                  },
                  {
                    num: "03",
                    text: "let calendar smart trip top-up handle travel days. ampify scans your local macOS Calendar (EventKit) for flights, trains, or offsite meetings and tops your battery to 100% right before you leave.",
                  },
                ].map((step) => (
                  <div
                    key={step.num}
                    className="flex items-start gap-4 p-4 rounded-xl bg-[#F7F7F6] border border-black/[0.06]"
                  >
                    <span className="w-8 h-8 rounded-lg bg-white border border-black/[0.08] text-xs font-mono font-semibold flex items-center justify-center shrink-0">
                      {step.num}
                    </span>
                    <p className="text-xs sm:text-sm text-[#111113] leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* [ 4 ] what you get */}
            <div className="bg-white rounded-2xl border border-black/[0.08] p-6 sm:p-10 space-y-6">
              <span className="inline-block font-mono text-xs text-[#6E6E73] bg-[#F3F3F5] px-2.5 py-1 rounded-md">
                [ 4 ]
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                what you get
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3.5">
                {[
                  {
                    icon: <BatteryCharging className="h-4 w-4 text-[#16A34A]" />,
                    title: "80% Desk Ceiling",
                    metric: "70% · 80% · 85%",
                    desc: "Prevents high-voltage cathode stress and switches to direct Adapter Bypass power.",
                  },
                  {
                    icon: <Smartphone className="h-4 w-4 text-[#007AFF]" />,
                    title: "Liquid-Wave Devices",
                    metric: "Wi-Fi + BLE + HID",
                    desc: "iPhone, iPad, Watch, AirPods (L/R/Case), Pencil & Siri Remote in liquid silhouettes.",
                  },
                  {
                    icon: <Zap className="h-4 w-4 text-[#16A34A]" />,
                    title: "Per-App Real Watts",
                    metric: "0.1 W Resolution",
                    desc: "Translates Mach CPU + GPU energy counters into exact watts with 1-click Quit App.",
                  },
                  {
                    icon: <Calendar className="h-4 w-4 text-[#007AFF]" />,
                    title: "Calendar Trip Top-Up",
                    metric: "Local EventKit",
                    desc: "Detects upcoming flights or offsite meetings and tops up to 100% before departure.",
                  },
                  {
                    icon: <LayoutGrid className="h-4 w-4 text-[#16A34A]" />,
                    title: "5 Desktop Widgets",
                    metric: "Sonoma · Sequoia",
                    desc: "Pin Liquid-Wave Apple Device strips and live Watt meters right on your desktop.",
                  },
                ].map((pillar) => (
                  <div
                    key={pillar.title}
                    className="flex flex-col justify-between rounded-2xl border border-black/[0.07] bg-[#F7F7F6] p-4"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white border border-black/[0.08]">
                          {pillar.icon}
                        </span>
                        <span className="rounded-full bg-white border border-black/[0.07] px-2 py-0.5 font-mono text-[10px] font-medium tabular-nums text-[#111113]">
                          {pillar.metric}
                        </span>
                      </div>
                      <h3 className="mt-3 text-sm font-semibold text-[#111113]">
                        {pillar.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-[#6E6E73]">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Interactive 5-Tab Studio Walkthrough (#interactive-tour) ── */}
        <section
          id="interactive-tour"
          className="py-20 px-4 sm:px-6 bg-white border-y border-black/[0.06]"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-block rounded-full px-3 py-1 text-xs font-mono font-medium bg-[#F3F3F5] text-[#111113] mb-3">
                interactive studio walkthrough
              </span>
              <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-[#111113]">
                every battery &amp; watt on your desk.
              </h2>
              <p className="text-sm text-[#6E6E73] mt-2">
                explore how ampify protects your MacBook battery chemistry while keeping your iPhone, iPad, Watch, AirPods, Pencil, and Siri Remote visible in one calm workspace.
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
                        ? "bg-[#111113] text-white shadow-2xs"
                        : "border border-black/[0.08] bg-[#F7F7F6] text-[#6E6E73] hover:text-[#111113]"
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`rounded-full px-2 py-0.5 font-mono text-[10px] tabular-nums ${
                        isSelected
                          ? "bg-white/15 text-white"
                          : "bg-white border border-black/[0.06] text-[#6E6E73]"
                      }`}
                    >
                      {tab.metric}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Tour Showcase Card */}
            <div className="mt-6 rounded-[28px] border border-black/[0.08] bg-[#F7F7F6] p-5 sm:p-8">
              <div className="grid grid-cols-1 gap-7 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-5">
                  <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-3 py-1 font-mono text-[11px] font-medium text-[#16A34A]">
                    {activeTour.badge}
                  </div>
                  <h3 className="mt-3.5 text-2xl font-semibold tracking-tight leading-tight text-[#111113] sm:text-3xl">
                    {activeTour.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-[#111113]">
                    {activeTour.subtitle}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-[#6E6E73] sm:text-sm">
                    {activeTour.description}
                  </p>

                  {/* Interactive 70% / 80% / 85% Ceiling Preview Pill */}
                  <div className="mt-5 rounded-2xl border border-black/[0.08] bg-white p-3.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-[#6E6E73]">
                        Desk Charge Ceiling Target
                      </span>
                      <span className="font-mono text-xs font-semibold tabular-nums text-[#16A34A]">
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
                              ? "bg-[#111113] text-white"
                              : "border border-black/[0.08] bg-[#F7F7F6] text-[#6E6E73] hover:text-[#111113]"
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
                        className="flex items-start gap-2.5 text-xs leading-relaxed text-[#111113] sm:text-sm"
                      >
                        <Check className="h-4 w-4 shrink-0 text-[#16A34A] mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-7">
                  <div className="overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-sm">
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
          </div>
        </section>

        {/* ── 8-Card Bento Feature Grid (All Real-App Screenshots 02–09) (#features) ── */}
        <section id="features" className="py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block rounded-full px-3 py-1 text-xs font-mono font-medium bg-white border border-black/[0.08] text-[#111113] mb-3">
                complete feature studio
              </span>
              <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-[#111113]">
                every detail of your power &amp; devices.
              </h2>
              <p className="text-sm text-[#6E6E73] mt-2">
                from proportional liquid-wave hardware silhouettes and real-watt process attribution to official Apple battery service pricing and calendar-aware trip top-ups.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {AMPIFY_BENTO_CARDS.map((card) => (
                <article
                  key={card.id}
                  className="flex flex-col justify-between overflow-hidden rounded-[24px] border border-black/[0.08] bg-white p-5 sm:p-6 shadow-2xs transition-colors hover:border-black/20"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="inline-flex items-center gap-2">
                        <span className="rounded-lg bg-[#F3F3F5] px-2 py-0.5 font-mono text-xs font-semibold tabular-nums text-[#111113]">
                          {card.step}
                        </span>
                        <span className="text-xs font-medium text-[#6E6E73]">
                          {card.tag}
                        </span>
                      </div>
                      <span className="rounded-full border border-black/[0.08] bg-[#F7F7F6] px-2.5 py-0.5 font-mono text-[11px] tabular-nums text-[#16A34A] font-medium">
                        {card.metricPill}
                      </span>
                    </div>

                    <h3 className="mt-3.5 text-xl font-semibold tracking-tight text-[#111113] sm:text-2xl">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-[#6E6E73] sm:text-sm">
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-5 overflow-hidden rounded-2xl border border-black/[0.08] bg-[#F7F7F6]">
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
          </div>
        </section>

        {/* ── Comparison Table (## why ampify?) ── */}
        <section
          id="comparison"
          className="py-20 px-4 sm:px-6 bg-white border-y border-black/[0.06]"
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F3F3F5] px-3 py-1 text-xs font-mono font-medium text-[#111113] mb-3">
                <Cpu className="h-3.5 w-3.5" />
                head-to-head comparison
              </span>
              <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-[#111113]">
                why ampify?
              </h2>
              <p className="text-sm text-[#6E6E73] mt-2">
                built to protect battery longevity and monitor every Apple device with 0 bytes of telemetry.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-black/[0.08] bg-white shadow-2xs">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-black/[0.08] bg-[#F7F7F6]/70">
                    <th className="py-3.5 px-4 font-semibold text-[#111113]">
                      capability
                    </th>
                    <th className="py-3.5 px-4 font-semibold text-[#111113] bg-black/[0.02]">
                      ampify v{AMPIFY_VERSION} (open source)
                    </th>
                    <th className="py-3.5 px-4 font-medium text-[#6E6E73]">
                      aldente / smc root tools
                    </th>
                    <th className="py-3.5 px-4 font-medium text-[#6E6E73]">
                      built-in macos battery
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/[0.06]">
                  {AMPIFY_COMPARISON_ROWS.map((row) => (
                    <tr
                      key={row.capability}
                      className="hover:bg-black/[0.01] transition-colors"
                    >
                      <td className="py-3 px-4 font-medium text-[#111113]">
                        {row.capability}
                      </td>
                      <td className="py-3 px-4 font-semibold text-[#16A34A] bg-black/[0.02]">
                        {row.ampify}
                      </td>
                      <td className="py-3 px-4 text-[#86868B]">
                        {row.rootTools}
                      </td>
                      <td className="py-3 px-4 text-[#86868B]">
                        {row.macOsDefault}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Notarized Installer Card ("install in 3 seconds.") ── */}
        <section id="download" className="py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto rounded-3xl border border-black/[0.08] bg-white p-8 sm:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.04)]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-4">
                <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[#16A34A] bg-[#16A34A]/10 px-3 py-1 rounded-full font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>signed with apple developer ID · MIT open source</span>
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                  install in 3 seconds.
                </h2>
                <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed">
                  Drag <strong>Ampify.app</strong> into your Applications folder. Universal binary built natively for Apple Silicon (M1/M2/M3/M4) and Intel MacBooks on macOS 14.0 Sonoma, macOS 15.0 Sequoia &amp; macOS 26 Tahoe.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={AMPIFY_DMG_URL}
                    className="inline-flex items-center justify-center gap-2 bg-[#111113] text-white hover:bg-black rounded-full px-6 py-2.5 text-xs font-medium transition shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>download Ampify.dmg ({AMPIFY_SIZE})</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleCopySha}
                    className="inline-flex items-center justify-center gap-1.5 bg-[#F7F7F6] border border-black/[0.08] hover:bg-[#EEEEF0] text-[#111113] rounded-full px-4 py-2.5 text-xs font-medium transition"
                  >
                    <Copy className="w-3.5 h-3.5 text-[#6E6E73]" />
                    <span>{copiedSha ? "copied sha-256!" : "copy sha-256"}</span>
                  </button>
                  <a
                    href={AMPIFY_GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 bg-[#F7F7F6] border border-black/[0.08] hover:bg-[#EEEEF0] text-[#111113] rounded-full px-4 py-2.5 text-xs font-medium transition"
                  >
                    <GitHubIcon className="w-3.5 h-3.5" />
                    <span>github</span>
                    <ExternalLink className="w-3 h-3 text-[#86868B]" />
                  </a>
                </div>

                <div className="font-mono text-[11px] text-[#86868B] pt-2 break-all">
                  SHA-256: {AMPIFY_SHA256}
                </div>
              </div>

              <div className="md:col-span-5 flex justify-center">
                <div className="w-full max-w-[360px] rounded-2xl overflow-hidden border border-black/[0.08] bg-[#F7F7F6] shadow-sm">
                  <Image
                    src="/images/ampify/09-ampify-dmg-installer-preview.png"
                    alt="Ampify v1.6.3 Signed Drag-and-Drop DMG Installer Preview"
                    width={1200}
                    height={800}
                    className="w-full h-auto block"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ Accordion (## questions, answered.) ── */}
        <section
          id="faq"
          className="py-20 px-4 sm:px-6 bg-white border-t border-black/[0.06]"
        >
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight">
                questions, answered.
              </h2>
              <p className="text-sm text-[#6E6E73] mt-2">
                everything about 80% charge ceilings, liquid-wave apple devices, per-app watts, and privacy on macOS.
              </p>
            </div>

            <div className="space-y-3">
              {AMPIFY_FAQS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={faq.q}
                    className="rounded-2xl border border-black/[0.08] bg-[#F7F7F6] overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full text-left py-4 px-5 flex items-center justify-between gap-4 font-medium text-sm text-[#111113]"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#86868B] transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-2 text-xs text-[#6E6E73] leading-relaxed border-t border-black/[0.05] bg-white">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Sister Apps Showcase ── */}
        <OtherAppsShowcase currentSlug="ampify" />

        {/* ── Bottom CTA + TryMacApps Footer Badge ── */}
        <section className="py-20 px-4 sm:px-6 bg-[#FAF9F6] border-t border-black/[0.06] text-center">
          <div className="max-w-2xl mx-auto space-y-5">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#111113]">
              keep your mac battery healthy for years.
            </h2>
            <p className="text-sm text-[#6E6E73]">
              download ampify for macOS today. 100% free &amp; open source under the MIT license.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={AMPIFY_DMG_URL}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#111113] text-white hover:bg-black rounded-full px-7 py-3 text-sm font-medium transition shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>download Ampify.dmg ({AMPIFY_SIZE})</span>
              </a>
              <a
                href={AMPIFY_GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-black/[0.1] text-[#111113] hover:bg-[#EEEEF0] rounded-full px-6 py-3 text-sm font-medium transition"
              >
                <GitHubIcon className="w-4 h-4 fill-current" />
                <span>view on github</span>
              </a>
            </div>

            {/* TryMacApps Footer Badge */}
            <div className="pt-4 flex items-center justify-center">
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
        </section>
      </main>
    </div>
  );
}
