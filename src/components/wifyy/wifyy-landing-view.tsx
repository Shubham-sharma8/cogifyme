/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Wifi,
  ShieldCheck,
  Check,
  ChevronDown,
  Copy,
  ExternalLink,
  Download,
  ArrowRight,
  Clock,
} from "lucide-react";
import { AppleLogoIcon, GitHubIcon } from "@/components/ui/platform-icons";
import { OtherAppsShowcase } from "@/components/products/other-apps-showcase";
import {
  WIFYY_DMG_URL,
  WIFYY_GITHUB_URL,
  WIFYY_SHA256,
  WIFYY_SIZE,
  TRYMACAPPS_URL,
  TRYMACAPPS_BADGE_IMG,
  WIFYY_PERSONAS,
  WIFYY_FOUR_HOPS,
  WIFYY_WHAT_YOU_GET,
  WIFYY_COMPARISON_ROWS,
  WIFYY_TESTIMONIALS,
  WIFYY_FAQS,
} from "./wifyy-data";

export function WifyyLandingView() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activePersona, setActivePersona] = useState<string>("everyone");
  const [copiedSha, setCopiedSha] = useState(false);
  const [activeStudioTab, setActiveStudioTab] = useState<number>(0);

  const handleCopySha = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(WIFYY_SHA256);
      setCopiedSha(true);
      setTimeout(() => setCopiedSha(false), 2000);
    }
  };

  const studioScreens = [
    {
      title: "Studio Overview & 4-Hop Matrix",
      desc: "Full desktop dashboard showing real-time 4-hop network topology, Call MOS, and connection diagnostics.",
      image: "/images/wifyy/04-wifyy-studio-timeline.png",
      tag: "Workspace Matrix",
    },
    {
      title: "App Traffic & Bufferbloat Attribution",
      desc: "Live process bandwidth attribution via native nettop telemetry to identify background upload hogs.",
      image: "/images/wifyy/07-wifyy-studio-app-traffic.png",
      tag: "Bufferbloat Radar",
    },
    {
      title: "Subnet Wi-Fi & LAN Device Radar",
      desc: "Full local subnet scanner with IP addresses, hostnames, normalized MACs, IEEE OUI vendors, and live ping latencies.",
      image: "/images/wifyy/08-wifyy-studio-devices.png",
      tag: "Subnet Devices",
    },
    {
      title: "Instant One-Time Setup",
      desc: "Unhighlights permission cards automatically once granted — zero repetitive startup prompts.",
      image: "/images/wifyy/05-wifyy-welcome-onboarding.png",
      tag: "Zero-Nag Onboarding",
    },
    {
      title: "Scalable Apple UI (90%–125%)",
      desc: "Fine-tune interface scale, hotkeys, ping interval, and custom bufferbloat warning thresholds.",
      image: "/images/wifyy/06-wifyy-settings-preferences.png",
      tag: "Scalable Controls",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F7F6] text-[#111113] antialiased selection:bg-[#111113] selection:text-white">
      {/* ── Sticky Top Pill Navigation (Helium Style) ── */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#F7F7F6]/85 border-b border-black/[0.07]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between text-xs">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-[#6E6E73] hover:text-[#111113] transition font-medium"
            >
              ← cogify
            </Link>
            <span className="text-black/15">/</span>
            <Link
              href="/wifyy"
              className="flex items-center gap-2 font-semibold text-sm text-[#111113]"
            >
              <span className="w-6 h-6 rounded-lg bg-white border border-black/[0.1] shadow-2xs flex items-center justify-center">
                <Wifi className="w-3.5 h-3.5 text-[#111113]" />
              </span>
              <span>wifyy</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-[#6E6E73] font-medium">
            <a href="#how-it-works" className="hover:text-[#111113] transition">
              how it works
            </a>
            <a href="#four-hop" className="hover:text-[#111113] transition">
              4-hop
            </a>
            <a href="#call-shield" className="hover:text-[#111113] transition">
              call shield
            </a>
            <a href="#studio" className="hover:text-[#111113] transition">
              studio
            </a>
            <a
              href={WIFYY_GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#111113] transition inline-flex items-center gap-1"
            >
              <span>open source</span>
              <ExternalLink className="w-3 h-3 text-[#86868B]" />
            </a>
            <a href="#faq" className="hover:text-[#111113] transition">
              faq
            </a>
          </nav>

          <a
            href={WIFYY_DMG_URL}
            className="inline-flex items-center gap-1.5 bg-[#111113] text-white hover:bg-black rounded-full px-4 py-1.5 text-xs font-medium transition shadow-2xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>download</span>
          </a>
        </div>
      </header>

      {/* ── Hero Section (Lowercase Editorial Helium Style) ── */}
      <main id="main-content">
        <section className="pt-14 sm:pt-20 pb-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Version Pill */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full px-3.5 py-1 text-xs font-medium border border-black/[0.08] bg-white shadow-2xs mb-6 text-[#6E6E73]">
              <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
              <span className="text-[#111113] font-semibold">wifyy v1.0.0 (build 100)</span>
              <span>·</span>
              <span>native swift 6</span>
              <span>·</span>
              <span>100% local (0 telemetry)</span>
              <span>·</span>
              <a href="#studio" className="text-[#007AFF] hover:underline">
                what&apos;s new in v1.0.0 →
              </a>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#111113] leading-[1.06] mb-4 flex items-center justify-center gap-3 flex-wrap">
              <span>meet wifyy.</span>
              <span className="inline-flex w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border border-black/[0.1] shadow-sm items-center justify-center">
                <Wifi className="w-7 h-7 text-[#111113]" />
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-2xl text-[#6E6E73] max-w-2xl mx-auto font-normal leading-snug mb-8">
              a real-time 4-hop wi-fi &amp; call reliability engine in your macOS menu bar.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              <a
                href={WIFYY_DMG_URL}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#111113] text-white hover:bg-black rounded-full px-7 py-3 text-sm font-medium transition shadow-sm"
              >
                <AppleLogoIcon className="w-4 h-4 text-white fill-current" />
                <span>download for mac (v1.0.0 · {WIFYY_SIZE})</span>
              </a>
              <a
                href="#studio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-white border border-black/[0.1] text-[#111113] hover:bg-[#EEEEF0] rounded-full px-6 py-3 text-sm font-medium transition"
              >
                <span>explore 4-hop studio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={WIFYY_GITHUB_URL}
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
              100% local &amp; air-gapped · 4-hop fault isolation (mac → wi-fi RF → router → ISP) · ITU-T E-Model Call MOS (1.0–4.50) · 5-min pre-call calendar check · live bufferbloat &amp; culprit app attribution · 7-day incident timeline
            </p>
          </div>

          {/* Hero Dual Visual Showcase: Studio + Menu Bar Popover */}
          <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 rounded-2xl bg-white border border-black/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.06)] overflow-hidden">
              <Image
                src="/images/wifyy/04-wifyy-studio-timeline.png"
                alt="Wifyy Studio desktop workspace showing 4-Hop Network Bottleneck Matrix, 4.40 Call MOS, and Connection Inspector"
                width={2240}
                height={1560}
                priority
                className="w-full h-auto block"
              />
            </div>
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="w-full max-w-[360px] rounded-2xl bg-white border border-black/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.06)] overflow-hidden">
                <Image
                  src="/images/wifyy/01-wifyy-hero-pulse-menu.png"
                  alt="Wifyy menu bar Pulse popover showing Ready for Calls 4.40 MOS, 4-Hop Topology, and 642 Mbps / 1,480 RPM responsiveness"
                  width={820}
                  height={1420}
                  priority
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>
          <p className="text-center text-xs text-[#6E6E73] mt-4">
            Wifyy in your macOS menu bar &amp; Studio workspace — live <strong>4.40 Call MOS</strong>, 4-hop latency attribution (<strong>2 ms router</strong> vs. <strong>14 ms ISP</strong>), and <strong>1,480 RPM</strong> responsiveness.
          </p>
        </section>

        {/* ── Built For Every Kind of Call (Persona Switcher) ── */}
        <section className="py-16 px-4 sm:px-6 bg-white border-y border-black/[0.06]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-[#111113]">
              built for every kind of call.
            </h2>
            <p className="text-sm sm:text-base text-[#6E6E73] mt-2">
              crystal-clear voice and 4K screen sharing, verified before you unmute.
            </p>

            <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-full bg-[#F3F3F5] border border-black/[0.06] mt-6">
              {Object.keys(WIFYY_PERSONAS).map((key) => (
                <button
                  key={key}
                  onClick={() => setActivePersona(key)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition ${
                    activePersona === key
                      ? "bg-[#111113] text-white shadow-2xs"
                      : "text-[#6E6E73] hover:text-[#111113]"
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-black/[0.08] bg-[#F7F7F6] p-6 sm:p-8 text-left max-w-2xl mx-auto">
              <div className="inline-block rounded-full px-3 py-1 text-[11px] font-mono font-medium bg-white border border-black/[0.07] text-[#111113] mb-3">
                {WIFYY_PERSONAS[activePersona].badge}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#111113]">
                {WIFYY_PERSONAS[activePersona].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#6E6E73] mt-2 leading-relaxed">
                {WIFYY_PERSONAS[activePersona].body}
              </p>
            </div>
          </div>
        </section>

        {/* ── Numbered Editorial Sections [ 1 ] to [ 4 ] (Exact Helium Structure) ── */}
        <section id="how-it-works" className="py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* [ 1 ] what it is */}
            <div className="bg-white rounded-2xl border border-black/[0.08] p-6 sm:p-10 space-y-4">
              <span className="inline-block font-mono text-xs text-[#6E6E73] bg-[#F3F3F5] px-2.5 py-1 rounded-md">
                [ 1 ]
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                what it is
              </h2>
              <p className="text-base sm:text-lg font-medium text-[#111113]">
                a real-time 4-hop wi-fi &amp; call reliability engine in your macOS menu bar.
              </p>
              <p className="text-sm text-[#6E6E73] leading-relaxed">
                it sits quietly in your menu bar at &lt;0.2% CPU. instead of vague wi-fi bars, wifyy continuously probes your mac wireless chip, your wi-fi radio airwaves, your local router gateway, and upstream internet anchors in parallel — translating raw RF and packet timing into a plain-english verdict: <strong>&ldquo;Ready for Calls (4.40 MOS)&rdquo;</strong> or <strong>&ldquo;Bottleneck: Upstream ISP (162 ms)&rdquo;</strong>.
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
                speed tests only measure bulk download for 15 seconds — and macOS wi-fi bars hide router &amp; ISP lag.
              </p>
              <p className="text-sm text-[#6E6E73] leading-relaxed">
                video calls only need 3 Mbps; what ruins them is jitter, packet loss, RF channel interference, and background upload bufferbloat. wifyy catches micro-spikes in real time, identifies which app saturated your upload pipe, and checks your connection 5 minutes before every calendar meeting:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#F7F7F6] border border-black/[0.06]">
                  <div className="text-2xl font-semibold font-mono text-[#111113]">4 hops</div>
                  <div className="text-xs text-[#6E6E73] mt-1">isolated in real time (Mac · RF · Router · ISP)</div>
                </div>
                <div className="p-4 rounded-xl bg-[#F7F7F6] border border-black/[0.06]">
                  <div className="text-2xl font-semibold font-mono text-[#111113]">5 min</div>
                  <div className="text-xs text-[#6E6E73] mt-1">pre-call burst check before Zoom / Meet / Teams</div>
                </div>
                <div className="p-4 rounded-xl bg-[#F7F7F6] border border-black/[0.06]">
                  <div className="text-2xl font-semibold font-mono text-[#111113]">0 bytes</div>
                  <div className="text-xs text-[#6E6E73] mt-1">cloud telemetry (100% local on your Mac)</div>
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
                    text: "open wifyy in your menu bar. grant local wi-fi name & calendar access once (buttons automatically unhighlight once granted, with no repetitive start screen).",
                  },
                  {
                    num: "02",
                    text: "wifyy monitors all 4 network hops & call MOS. every 3 seconds (1.5s in Meeting Mode), wifyy measures router vs. ISP RTT, jitter, packet loss, SNR margin, and per-app bandwidth.",
                  },
                  {
                    num: "03",
                    text: "join calls in 1 click or inspect 7 days of history. get notified 5 minutes before meetings if wi-fi is degraded, auto-quiet heavy background uploads, or open Wifyy Studio (⌘K) to export diagnostic reports.",
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
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-sm text-[#111113]">
                {WIFYY_WHAT_YOU_GET.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F7F7F6]/60 border border-black/[0.05]"
                  >
                    <Check className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[#111113]">{item.title}</div>
                      <div className="text-xs text-[#6E6E73] mt-0.5 leading-relaxed">
                        {item.description}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Problem Callout (sound familiar?) ── */}
        <section className="py-16 px-4 sm:px-6 bg-[#111113] text-white">
          <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 border border-white/10 bg-white/[0.03]">
            <span className="inline-block font-mono text-xs text-white/60 bg-white/10 px-3 py-1 rounded-full mb-4">
              sound familiar?
            </span>
            <h3 className="text-2xl sm:text-4xl font-semibold tracking-tight leading-snug mb-4">
              &ldquo;Sorry, are you frozen? Your audio is cutting out.&rdquo;
            </h3>
            <p className="text-sm sm:text-base text-white/75 leading-relaxed max-w-2xl">
              Your Wi-Fi icon shows 3 full bars, and Speedtest says 300 Mbps — yet your Zoom call still stutters. Wifyy shows you in 1 second whether a neighbor&apos;s router is jamming Channel 149, OneDrive is saturating your upload queue, or your ISP node is dropping packets.
            </p>
          </div>
        </section>

        {/* ── Deep Dive 01: 4-Hop Fault Isolation & RF Spectrum (#four-hop) ── */}
        <section id="four-hop" className="py-20 px-4 sm:px-6 bg-white border-y border-black/[0.06]">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="inline-block rounded-full px-3 py-1 text-xs font-mono font-medium bg-[#F3F3F5] text-[#111113]">
                01 · spectrum &amp; 4-hop fault isolation
              </span>
              <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight">
                stop rebooting your router when the problem is your ISP.
              </h2>
              <p className="text-sm text-[#6E6E73] leading-relaxed">
                Wifyy measures your local router gateway (<code>192.168.1.1</code>) and upstream internet anchor (<code>1.1.1.1</code>) simultaneously, alongside real-time CoreWLAN radio telemetry (<code>-52 dBm</code> RSSI, <code>-92 dBm</code> Noise Floor, <code>40 dB</code> SNR Margin) and nearby AP channel congestion.
              </p>

              <div className="space-y-3 pt-2">
                {WIFYY_FOUR_HOPS.map((hop) => (
                  <div
                    key={hop.step}
                    className="p-3.5 rounded-xl border border-black/[0.08] bg-[#F7F7F6] flex items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono font-semibold text-[#86868B]">
                          {hop.step}
                        </span>
                        <span className="text-xs font-semibold text-[#111113]">
                          {hop.name}
                        </span>
                      </div>
                      <div className="text-[11px] text-[#6E6E73] mt-0.5">
                        {hop.telemetry}
                      </div>
                    </div>
                    <span
                      className={`text-[11px] font-mono font-medium px-2.5 py-1 rounded-full border ${hop.statusColor}`}
                    >
                      {hop.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-[380px] rounded-2xl bg-white border border-black/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.06)] overflow-hidden">
                <Image
                  src="/images/wifyy/02-wifyy-spectrum-and-hop.png"
                  alt="Wifyy Spectrum and Hop telemetry showing RSSI, SNR Margin, Channel Congestion Scan, and Gateway Hop RTT"
                  width={820}
                  height={1420}
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Deep Dive 02: Pre-Call Protection, Calendar & Auto-Shield (#call-shield) ── */}
        <section id="call-shield" className="py-20 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
              <div className="w-full max-w-[380px] rounded-2xl bg-white border border-black/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.06)] overflow-hidden">
                <Image
                  src="/images/wifyy/03-wifyy-calls-and-protection.png"
                  alt="Wifyy Calls tab showing Pre-Call Check, 7-day calendar strip, 1-click Zoom Join, and Auto-Shield bandwidth protection"
                  width={820}
                  height={1420}
                  className="w-full h-auto block"
                />
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
              <span className="inline-block rounded-full px-3 py-1 text-xs font-mono font-medium bg-white border border-black/[0.08] text-[#111113]">
                02 · pre-call check &amp; auto-shield
              </span>
              <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight">
                verifies your wi-fi 5 minutes before every meeting.
              </h2>
              <p className="text-sm text-[#6E6E73] leading-relaxed">
                Wifyy inspects your upcoming calendar meetings locally, tests call readiness 5 minutes before start time, gives you a 1-click <strong>Join</strong> button in the menu bar, and automatically shields your call from background cloud upload spikes.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-4 rounded-xl bg-white border border-black/[0.08]">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#111113]">
                    <Clock className="w-4 h-4 text-[#007AFF]" />
                    <span>5-Min Readiness Alert</span>
                  </div>
                  <p className="text-xs text-[#6E6E73] mt-1.5 leading-relaxed">
                    Warns you before the call if you roamed to a weak 2.4 GHz node so you can switch APs in advance.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-black/[0.08]">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#111113]">
                    <ShieldCheck className="w-4 h-4 text-[#16A34A]" />
                    <span>Auto-Shield Quiet Mode</span>
                  </div>
                  <p className="text-xs text-[#6E6E73] mt-1.5 leading-relaxed">
                    Pauses OneDrive, Dropbox, and cloud backup queues the moment your camera or mic turns on.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Deep Dive 03: Wifyy Studio Workspace & Subnet Radar (#studio) ── */}
        <section id="studio" className="py-20 px-4 sm:px-6 bg-white border-y border-black/[0.06]">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-block rounded-full px-3 py-1 text-xs font-mono font-medium bg-[#F3F3F5] text-[#111113] mb-3">
                03 · studio &amp; subnet diagnostics
              </span>
              <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight">
                complete mac network workspace in one window.
              </h2>
              <p className="text-sm text-[#6E6E73] mt-2">
                Inspect 4-hop bottlenecks, identify heavy upload processes, discover every LAN device on your subnet, and export 1-click diagnostic reports.
              </p>
            </div>

            {/* Studio Interactive View Switcher */}
            <div className="flex flex-wrap items-center justify-center gap-2 border-b border-black/[0.08] pb-4">
              {studioScreens.map((screen, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStudioTab(idx)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition ${
                    activeStudioTab === idx
                      ? "bg-[#111113] text-white shadow-2xs"
                      : "bg-[#F7F7F6] text-[#6E6E73] hover:text-[#111113] border border-black/[0.06]"
                  }`}
                >
                  {screen.tag}
                </button>
              ))}
            </div>

            {/* Active Studio Screen Showcase */}
            <div className="rounded-2xl border border-black/[0.08] bg-[#F7F7F6] p-6 sm:p-8 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-base sm:text-lg text-[#111113]">
                    {studioScreens[activeStudioTab].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6E6E73] mt-1">
                    {studioScreens[activeStudioTab].desc}
                  </p>
                </div>
                <span className="self-start sm:self-auto text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-white border border-black/[0.08] text-[#111113]">
                  ⌘K Studio
                </span>
              </div>

              <div className="rounded-xl overflow-hidden border border-black/[0.08] bg-white shadow-sm">
                <Image
                  src={studioScreens[activeStudioTab].image}
                  alt={studioScreens[activeStudioTab].title}
                  width={2240}
                  height={1560}
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Comparison Table (## why wifyy?) ── */}
        <section id="comparison" className="py-20 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight">
                why wifyy?
              </h2>
              <p className="text-sm text-[#6E6E73] mt-2">
                built to isolate call lag across all 4 hops with 0 bytes of telemetry.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-black/[0.08] bg-white shadow-2xs">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-black/[0.08] bg-[#F7F7F6]/70">
                    <th className="py-3.5 px-4 font-semibold text-[#111113]">feature</th>
                    <th className="py-3.5 px-4 font-semibold text-[#111113] bg-black/[0.02]">
                      wifyy
                    </th>
                    <th className="py-3.5 px-4 font-medium text-[#6E6E73]">
                      macos wi-fi menu
                    </th>
                    <th className="py-3.5 px-4 font-medium text-[#6E6E73]">
                      istat menus
                    </th>
                    <th className="py-3.5 px-4 font-medium text-[#6E6E73]">
                      wi-fi explorer
                    </th>
                    <th className="py-3.5 px-4 font-medium text-[#6E6E73]">
                      speedtest
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/[0.06]">
                  {WIFYY_COMPARISON_ROWS.map((row, idx) => (
                    <tr key={idx} className="hover:bg-black/[0.01] transition-colors">
                      <td className="py-3 px-4 font-medium text-[#111113]">{row.feature}</td>
                      <td className="py-3 px-4 font-semibold text-[#16A34A] bg-black/[0.02]">
                        {row.wifyy}
                      </td>
                      <td className="py-3 px-4 text-[#86868B]">{row.macOsWiFi}</td>
                      <td className="py-3 px-4 text-[#86868B]">{row.iStatMenus}</td>
                      <td className="py-3 px-4 text-[#86868B]">{row.wiFiExplorer}</td>
                      <td className="py-3 px-4 text-[#86868B]">{row.speedtest}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Testimonials (## loved by mac creators.) ── */}
        <section className="py-20 px-4 sm:px-6 bg-white border-y border-black/[0.06]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight">
                loved by mac creators.
              </h2>
              <p className="text-sm text-[#6E6E73] mt-2">
                used daily by engineers, designers, and founders to prevent meeting drops.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {WIFYY_TESTIMONIALS.map((t, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-black/[0.08] bg-[#F7F7F6] p-6 flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block text-[11px] font-mono font-medium text-[#16A34A] bg-[#16A34A]/10 px-2.5 py-0.5 rounded-full mb-3">
                      {t.metric}
                    </span>
                    <p className="text-xs sm:text-sm text-[#111113] leading-relaxed italic">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-black/[0.06]">
                    <div className="font-semibold text-xs text-[#111113]">{t.author}</div>
                    <div className="text-[11px] text-[#6E6E73]">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Notarized Installer Card ("install in 3 seconds.") ── */}
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto rounded-3xl border border-black/[0.08] bg-white p-8 sm:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.04)]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-4">
                <span className="inline-block font-mono text-xs text-[#16A34A] bg-[#16A34A]/10 px-3 py-1 rounded-full font-medium">
                  ✓ signed &amp; apple notarized
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                  install in 3 seconds.
                </h2>
                <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed">
                  Drag <strong>Wifyy.app</strong> into your Applications folder. Universal binary built natively for Apple Silicon (M1/M2/M3/M4) and Intel Macs on macOS 14.0 Sonoma, macOS 15.0 Sequoia &amp; macOS 26 Tahoe.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={WIFYY_DMG_URL}
                    className="inline-flex items-center justify-center gap-2 bg-[#111113] text-white hover:bg-black rounded-full px-6 py-2.5 text-xs font-medium transition shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>download Wifyy.dmg ({WIFYY_SIZE})</span>
                  </a>
                  <button
                    onClick={handleCopySha}
                    className="inline-flex items-center justify-center gap-1.5 bg-[#F7F7F6] border border-black/[0.08] hover:bg-[#EEEEF0] text-[#111113] rounded-full px-4 py-2.5 text-xs font-medium transition"
                  >
                    <Copy className="w-3.5 h-3.5 text-[#6E6E73]" />
                    <span>{copiedSha ? "copied sha-256!" : "copy sha-256"}</span>
                  </button>
                </div>

                <div className="font-mono text-[11px] text-[#86868B] pt-2 break-all">
                  SHA-256: {WIFYY_SHA256}
                </div>
              </div>

              <div className="md:col-span-5 flex justify-center">
                <div className="w-full max-w-[340px] rounded-2xl overflow-hidden border border-black/[0.08] bg-[#F7F7F6] shadow-sm">
                  <Image
                    src="/images/wifyy/09-wifyy-dmg-installer-preview.png"
                    alt="Wifyy DMG window preview showing drag to Applications"
                    width={800}
                    height={500}
                    className="w-full h-auto block"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ Accordion (## questions, answered.) ── */}
        <section id="faq" className="py-20 px-4 sm:px-6 bg-white border-t border-black/[0.06]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight">
                questions, answered.
              </h2>
              <p className="text-sm text-[#6E6E73] mt-2">
                everything about 4-hop wi-fi diagnostics, call protection, and privacy on macOS.
              </p>
            </div>

            <div className="space-y-3">
              {WIFYY_FAQS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-black/[0.08] bg-[#F7F7F6] overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full text-left py-4 px-5 flex items-center justify-between gap-4 font-medium text-sm text-[#111113]"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#86868B] transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs text-[#6E6E73] leading-relaxed border-t border-black/[0.05] bg-white">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Sister Apps Showcase ── */}
        <OtherAppsShowcase currentSlug="wifyy" />

        {/* ── Bottom CTA ── */}
        <section className="py-20 px-4 sm:px-6 bg-[#FAF9F6] border-t border-black/[0.06] text-center">
          <div className="max-w-2xl mx-auto space-y-5">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#111113]">
              never wonder why your call dropped again.
            </h2>
            <p className="text-sm text-[#6E6E73]">
              download wifyy for macOS today. free &amp; open source under the MIT license.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={WIFYY_DMG_URL}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#111113] text-white hover:bg-black rounded-full px-7 py-3 text-sm font-medium transition shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>download Wifyy.dmg ({WIFYY_SIZE})</span>
              </a>
              <a
                href={WIFYY_GITHUB_URL}
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
                  width={200}
                  height={67}
                  className="h-11 w-auto object-contain"
                />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
