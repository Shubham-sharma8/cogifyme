"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  Zap,
  Shield,
  Cpu,
  Smartphone,
  Gift,
  Globe,
  ExternalLink,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

const BIODATA_DIRECT_FORMATS = [
  { label: "Hindu Biodata", href: "https://biodata.cogify.me/hindu-marriage-biodata" },
  { label: "Muslim Nikah", href: "https://biodata.cogify.me/muslim-nikah-biodata" },
  { label: "Sikh Anand Karaj", href: "https://biodata.cogify.me/sikh-marriage-biodata" },
  { label: "Marathi Biodata", href: "https://biodata.cogify.me/marathi-marriage-biodata" },
  { label: "Gujarati Biodata", href: "https://biodata.cogify.me/gujarati-marriage-biodata" },
  { label: "Hindi Shadi", href: "https://biodata.cogify.me/hindi-shadi-biodata" },
  { label: "300-DPI PDF", href: "https://biodata.cogify.me/biodata-for-marriage-pdf" },
  { label: "Word (.docx)", href: "https://biodata.cogify.me/biodata-word-format" },
];

const SSB_DIRECT_MODULES = [
  { label: "Full 98-Min Battery", href: "https://ssb.cogify.me/full-test" },
  { label: "TAT Simulator", href: "https://ssb.cogify.me/tat" },
  { label: "WAT (60 Words)", href: "https://ssb.cogify.me/wat" },
  { label: "SRT (60 Situations)", href: "https://ssb.cogify.me/srt" },
  { label: "SDT Builder", href: "https://ssb.cogify.me/sdt" },
  { label: "GTO 9-Task Hub", href: "https://ssb.cogify.me/gto" },
  { label: "PIQ & IO Interview", href: "https://ssb.cogify.me/interview" },
  { label: "120 TAT Library", href: "https://ssb.cogify.me/library" },
];

export const WhatWeBuild = () => {
  return (
    <section
      id="what-we-build"
      className="py-24 relative overflow-hidden bg-[#fafafc] dark:bg-[#05070b] border-t border-zinc-200/80 dark:border-white/[0.07] transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              <Globe className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Pillar 01 • Real-Time Web Studios &amp; Client-Side PWAs</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.03em] text-zinc-950 dark:text-white mb-4 text-balance">
              Zero-Latency Browser Studios.{" "}
              <span className="text-zinc-500 dark:text-zinc-400">
                Zero Server Uploads.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed text-pretty">
              Alongside our native Apple binaries, Cogify engineers full-scale client-side web studios hosted on dedicated subdomains. Every calculation, canvas render, and PDF/DOCX export executes 100% inside your device&apos;s browser memory and IndexedDB.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={siteConfig.biodata.webUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs inline-flex items-center gap-1.5 shadow-xs"
            >
              <span>biodata.cogify.me</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
            <a
              href={siteConfig.ssb.webUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs inline-flex items-center gap-1.5 shadow-xs"
            >
              <span>ssb.cogify.me</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Studio 1: Marriage Biodata Maker (biodata.cogify.me) */}
        <div className="mb-10 rounded-3xl p-6 sm:p-8 lg:p-10 bg-white dark:bg-[#090c12] border border-zinc-200/90 dark:border-white/[0.09] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-500/12 text-amber-800 dark:text-amber-300 border border-amber-500/25 text-xs font-mono font-semibold">
                  <Globe className="w-3.5 h-3.5" aria-hidden="true" />
                  biodata.cogify.me • v2.4
                </span>
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 font-semibold">
                  100% Free • Zero Watermarks
                </span>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 shadow-sm shrink-0 bg-zinc-950">
                  <Image
                    src={siteConfig.biodata.icon}
                    alt={siteConfig.biodata.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
                    {siteConfig.biodata.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-zinc-500 dark:text-zinc-400">
                    242 Cultural Templates • 9 Indian Scripts • 300-DPI Print PDF &amp; Word (.docx)
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Design traditional or modern marriage biodata directly in your browser—featuring{" "}
                <strong className="text-zinc-900 dark:text-white font-semibold">
                  242 handcrafted templates
                </strong>{" "}
                across Hindu, Muslim Nikah, Sikh Anand Karaj, Christian, Jain, Buddhist &amp; NRI formats,{" "}
                <strong className="text-zinc-900 dark:text-white font-semibold">
                  9 Indian languages
                </strong>
                , an interactive{" "}
                <strong className="text-zinc-900 dark:text-white font-semibold">
                  Vedic Kundali &amp; 36-Point Gun Milan builder
                </strong>
                , and instant{" "}
                <strong className="text-zinc-900 dark:text-white font-semibold">
                  300-DPI PDF, Word (.docx) &amp; PNG export
                </strong>{" "}
                with zero sign-up.
              </p>

              {/* Direct Subdomain Deep-Link Pills */}
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2">
                  Direct Community &amp; Export Studios:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {BIODATA_DIRECT_FORMATS.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-zinc-100 hover:bg-amber-500/15 text-zinc-700 hover:text-amber-800 dark:bg-white/[0.04] dark:hover:bg-amber-500/15 dark:text-zinc-300 dark:hover:text-amber-300 border border-zinc-200/80 dark:border-white/[0.08] transition-colors"
                    >
                      {item.label} ↗
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={siteConfig.biodata.webUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-tactile px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs sm:text-sm shadow-sm transition-colors inline-flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  <span>Launch Biodata Studio (biodata.cogify.me)</span>
                </a>
                <Link
                  href="/biodata"
                  className="btn-tactile px-5 py-3 rounded-xl bg-zinc-100 hover:bg-zinc-200/80 dark:bg-white/[0.06] dark:hover:bg-white/[0.1] text-zinc-900 dark:text-white border border-zinc-200/80 dark:border-white/10 font-semibold text-xs sm:text-sm transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Architecture &amp; Specs</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <a
                href={siteConfig.biodata.webUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl overflow-hidden border border-zinc-200/90 dark:border-white/[0.1] bg-[#06080d] shadow-2xl group relative"
              >
                <div className="px-3.5 py-2.5 bg-[#0c1018] border-b border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span>biodata.cogify.me</span>
                  </div>
                  <span className="text-amber-400 group-hover:underline">
                    Open Live Studio ↗
                  </span>
                </div>
                <div className="relative aspect-[16/10] w-full bg-[#05070b]">
                  <Image
                    src={siteConfig.biodata.previewImage}
                    alt="Marriage Biodata Maker Studio — biodata.cogify.me"
                    fill
                    className="object-contain group-hover:scale-[1.015] transition-transform duration-300"
                    sizes="(max-width: 1024px) 100vw, 480px"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Studio 2: SSB Stage-2 Practice Studio (ssb.cogify.me) */}
        <div className="mb-14 rounded-3xl p-6 sm:p-8 lg:p-10 bg-white dark:bg-[#090c12] border border-zinc-200/90 dark:border-white/[0.09] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-500/12 text-emerald-800 dark:text-emerald-300 border border-emerald-500/25 text-xs font-mono font-semibold">
                  <Globe className="w-3.5 h-3.5" aria-hidden="true" />
                  ssb.cogify.me • v2.0
                </span>
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 font-semibold">
                  100% Free • Zero Sign-Up
                </span>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 shadow-sm shrink-0 bg-zinc-950">
                  <Image
                    src={siteConfig.ssb.icon}
                    alt={siteConfig.ssb.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
                    {siteConfig.ssb.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-zinc-500 dark:text-zinc-400">
                    Indian Armed Forces Stage-2 Simulator • TAT, WAT, SRT, SDT, GTO &amp; IO
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Preparing for your{" "}
                <strong className="text-zinc-900 dark:text-white font-semibold">
                  Indian Army, Navy, or Air Force SSB Interview
                </strong>
                ? Launch our real-time Stage-2 simulator at{" "}
                <strong className="text-zinc-900 dark:text-white font-semibold">
                  ssb.cogify.me
                </strong>
                —featuring authentic DIPR timed{" "}
                <strong className="text-zinc-900 dark:text-white font-semibold">
                  Psychology Dossier tests (TAT, WAT, SRT, SDT)
                </strong>
                ,{" "}
                <strong className="text-zinc-900 dark:text-white font-semibold">
                  GTO 9-Task Command Hub
                </strong>
                , an interactive{" "}
                <strong className="text-zinc-900 dark:text-white font-semibold">
                  PIQ Form Builder &amp; IO Rapid-Fire Interview Drills
                </strong>{" "}
                with 100% local IndexedDB storage.
              </p>

              {/* Direct Subdomain Module Pills */}
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2">
                  Direct Stage-2 Simulator Modules:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {SSB_DIRECT_MODULES.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-zinc-100 hover:bg-emerald-500/15 text-zinc-700 hover:text-emerald-800 dark:bg-white/[0.04] dark:hover:bg-emerald-500/15 dark:text-zinc-300 dark:hover:text-emerald-300 border border-zinc-200/80 dark:border-white/[0.08] transition-colors"
                    >
                      {item.label} ↗
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={siteConfig.ssb.webUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-tactile px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs sm:text-sm shadow-sm transition-colors inline-flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  <span>Launch SSB Studio (ssb.cogify.me)</span>
                </a>
                <Link
                  href="/ssb"
                  className="btn-tactile px-5 py-3 rounded-xl bg-zinc-100 hover:bg-zinc-200/80 dark:bg-white/[0.06] dark:hover:bg-white/[0.1] text-zinc-900 dark:text-white border border-zinc-200/80 dark:border-white/10 font-semibold text-xs sm:text-sm transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Architecture &amp; Specs</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <a
                href={siteConfig.ssb.webUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl overflow-hidden border border-zinc-200/90 dark:border-white/[0.1] bg-[#06080d] shadow-2xl group relative"
              >
                <div className="px-3.5 py-2.5 bg-[#0c1018] border-b border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>ssb.cogify.me</span>
                  </div>
                  <span className="text-emerald-400 group-hover:underline">
                    Open Live Simulator ↗
                  </span>
                </div>
                <div className="relative aspect-[16/10] w-full bg-[#05070b]">
                  <Image
                    src={siteConfig.ssb.previewImage}
                    alt="SSB Stage-2 Test Practice Studio — ssb.cogify.me"
                    fill
                    className="object-contain group-hover:scale-[1.015] transition-transform duration-300"
                    sizes="(max-width: 1024px) 100vw, 480px"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Systems Architecture Bento Grid */}
        <BentoGrid className="max-w-7xl mx-auto">
          <BentoGridItem
            className="md:col-span-2 bg-white dark:bg-[#090c12]"
            badge="Core Engineering Philosophy"
            icon={<Gift className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />}
            title="Real-Time Web Studios &amp; Native Utility Apps"
            description="We engineer real-time browser web solutions alongside native macOS, iOS, iPadOS, and Safari utilities that are 100% free for individual users—completely devoid of dark patterns, paywalls, or telemetric surveillance."
            header={
              <div className="flex flex-col justify-end h-full p-4 rounded-xl bg-zinc-50 dark:bg-[#06080d] border border-zinc-200/80 dark:border-white/[0.07] font-mono text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 tabular-nums">
                <div className="flex items-center justify-between text-amber-700 dark:text-amber-300 font-semibold">
                  <span>Biodata Maker (biodata.cogify.me)</span>
                  <span className="text-amber-600 dark:text-amber-400 font-bold">
                    242 Templates • Live Web
                  </span>
                </div>
                <div className="flex items-center justify-between text-emerald-700 dark:text-emerald-300 font-semibold">
                  <span>SSB Practice Studio (ssb.cogify.me)</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                    Psych, GTO &amp; IO • Live Web
                  </span>
                </div>
                <div className="flex items-center justify-between text-indigo-700 dark:text-indigo-300 font-semibold">
                  <span>6 Native macOS Apps (.DMG)</span>
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">
                    1.4 MB – 5.0 MB Binaries
                  </span>
                </div>
                <div className="flex items-center justify-between text-cyan-700 dark:text-cyan-300 font-semibold">
                  <span>6 Safari Web Extensions</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold">
                    App Store Live
                  </span>
                </div>
              </div>
            }
          />

          <BentoGridItem
            className="md:col-span-1 bg-white dark:bg-[#090c12]"
            badge="Enterprise Partnerships"
            icon={<Building2 className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />}
            title="License Replacement"
            description="Companies spending huge budgets on expensive software licenses can approach Cogify. We offer free trial pilots, full software auditing, and ultra-affordable transparent licensing."
            header={
              <div className="h-full rounded-xl bg-zinc-50 dark:bg-[#06080d] border border-zinc-200/80 dark:border-white/[0.07] p-4 flex flex-col justify-center items-center text-center">
                <Shield className="w-9 h-9 text-cyan-600 dark:text-cyan-400 mb-2 opacity-85" />
                <span className="text-xs font-mono text-zinc-800 dark:text-zinc-200 font-semibold">
                  Free Pilot &amp; Security Audit
                </span>
                <span className="text-[10px] text-zinc-500 mt-1">
                  Slash Enterprise SaaS Spend by 70–90%
                </span>
              </div>
            }
          />

          <BentoGridItem
            className="md:col-span-1 bg-white dark:bg-[#090c12]"
            badge="Hardware Efficiency"
            icon={<Zap className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />}
            title="Minimal Resource Footprint"
            description="Our software runs cool without draining battery or hoarding memory. EmDoc consumes only ~45 MB of RAM compared to 800 MB - 2.5 GB in bloated commercial suites."
            header={
              <div className="h-full rounded-xl bg-zinc-50 dark:bg-[#06080d] border border-zinc-200/80 dark:border-white/[0.07] p-4 flex flex-col justify-center tabular-nums">
                <div className="flex justify-between items-center text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-2">
                  <span>RAM Usage Baseline</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                    ~45 MB (vs 1.2 GB)
                  </span>
                </div>
                <div className="w-full bg-zinc-200 dark:bg-zinc-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 dark:bg-emerald-400 h-full w-[8%]" />
                </div>
              </div>
            }
          />

          <BentoGridItem
            className="md:col-span-2 bg-white dark:bg-[#090c12]"
            badge="Multi-Device & Custom Builds"
            icon={<Smartphone className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />}
            title="Real-Time Web &amp; Multi-Device Custom Builds"
            description="We engineer real-time web applications, PWAs, and native binaries across modern devices (Web, macOS, iOS, iPadOS, and Windows). Companies can commission Cogify to build fast, bespoke replacements for expensive licensed tools."
            header={
              <div className="h-full rounded-xl bg-zinc-50 dark:bg-[#06080d] border border-zinc-200/80 dark:border-white/[0.07] p-4 flex flex-col justify-between font-mono text-xs">
                <div className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
                  <Cpu className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span className="font-semibold">
                    Bespoke Real-Time Web &amp; Native Enterprise Builds
                  </span>
                </div>
                <p className="text-[11px] text-zinc-500 font-sans">
                  Tell us which licensed apps cost your company the most—we provide free auditing, custom development, and low licensing.
                </p>
              </div>
            }
          />
        </BentoGrid>
      </div>
    </section>
  );
};
