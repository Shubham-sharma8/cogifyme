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

export const WhatWeBuild = () => {
  return (
    <section
      id="what-we-build"
      className="py-24 relative overflow-hidden bg-[#fbfcfe] dark:bg-[#06080d] transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-200/80 dark:border-cyan-500/20 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            Real-Time Web Solutions &amp; Native Software
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
            More than just apps — we engineer{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-indigo-600 dark:from-cyan-400 dark:to-indigo-400">
              real-time solutions.
            </span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Cogify builds instant, zero-latency browser web studios alongside native desktop and mobile applications. Every tool executes 100% client-side on your device—eliminating cloud uploads, bloated SaaS subscriptions, and telemetric tracking.
          </p>
        </div>

        {/* Featured Real-Time Web Studio Banner: Marriage Biodata Maker (biodata.cogify.me) */}
        <div className="mb-12 rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-amber-500/[0.08] via-white to-indigo-500/[0.06] dark:from-amber-500/[0.08] dark:via-zinc-900/90 dark:to-indigo-500/[0.08] border border-amber-500/30 dark:border-amber-500/25 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider">
                  <Globe className="w-3.5 h-3.5" />
                  Live Real-Time Web Studio • biodata.cogify.me
                </span>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 font-semibold">
                  100% Free • Zero Watermarks
                </span>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-amber-500/30 shadow-md shrink-0 bg-zinc-950">
                  <Image
                    src={siteConfig.biodata.icon}
                    alt={siteConfig.biodata.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white">
                    {siteConfig.biodata.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-amber-700 dark:text-amber-300">
                    Hosted on {siteConfig.biodata.webUrl.replace("https://", "")} • Instant Browser &amp; PWA Studio
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                Looking for our <strong>Marriage Biodata Maker website</strong>? Launch our real-time cultural document studio directly in your browser—featuring <strong>242 handcrafted templates</strong> across Hindu, Muslim, Sikh, Christian, Jain, Buddhist &amp; Universal traditions, <strong>9 Indian languages</strong>, an interactive <strong>Vedic Kundali chart builder</strong>, and instant <strong>300-DPI PDF, Word (.docx) &amp; PNG export</strong> with zero sign-up.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-700 dark:text-zinc-300 pt-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>242 Cultural Templates &amp; 9 Languages</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>300-DPI Print PDF, Word (.docx) &amp; PNG</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>100% Client-Side Canvas &amp; IndexedDB</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Zero Sign-Up, Zero Cloud Uploads</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={siteConfig.biodata.webUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs sm:text-sm shadow-md shadow-amber-500/20 transition-all inline-flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Go to Biodata Maker Website (biodata.cogify.me)</span>
                </a>
                <Link
                  href="/biodata"
                  className="px-5 py-3 rounded-xl bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white border border-zinc-200 dark:border-white/10 font-semibold text-xs sm:text-sm transition-all inline-flex items-center gap-1.5"
                >
                  <span>Explore Studio Overview</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <a
                href={siteConfig.biodata.webUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 bg-zinc-950 shadow-xl group relative"
              >
                <div className="px-3.5 py-2 bg-zinc-900 border-b border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span>biodata.cogify.me — Live Studio</span>
                  <span className="text-amber-400 group-hover:underline">Open Web App ↗</span>
                </div>
                <div className="relative aspect-[16/10] w-full bg-zinc-950">
                  <Image
                    src={siteConfig.biodata.previewImage}
                    alt="Marriage Biodata Maker Studio — biodata.cogify.me"
                    fill
                    className="object-contain group-hover:scale-[1.02] transition-transform duration-300"
                    sizes="(max-width: 1024px) 100vw, 480px"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bento Grid layout */}
        <BentoGrid className="max-w-7xl mx-auto">
          {/* Card 1: Free Daily Apps & Real-Time Web Studios (Spans 2 cols on desktop) */}
          <BentoGridItem
            className="md:col-span-2 bg-gradient-to-br from-white via-zinc-50/50 to-indigo-50/30 dark:from-zinc-900/80 dark:via-zinc-950/80 dark:to-indigo-950/20"
            badge="Core Mission"
            icon={<Gift className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />}
            title="Real-Time Web Studios &amp; Native Utility Apps"
            description="We engineer real-time browser web solutions alongside native macOS, iOS, iPadOS, and Safari utilities that are 100% free for individual users—completely devoid of dark patterns, paywalls, or telemetric surveillance."
            header={
              <div className="flex flex-col justify-end h-full p-4 rounded-xl bg-zinc-50/80 dark:bg-zinc-950/60 border border-zinc-200/70 dark:border-white/5 font-mono text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
                <div className="flex items-center justify-between text-amber-700 dark:text-amber-300 font-semibold">
                  <span>Biodata Maker (biodata.cogify.me)</span>
                  <span className="text-amber-600 dark:text-amber-400 font-bold">242 Templates • Live Web</span>
                </div>
                <div className="flex items-center justify-between text-indigo-700 dark:text-indigo-300 font-semibold">
                  <span>EmDoc &amp; LumenView (macOS)</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">Direct .DMG • Free</span>
                </div>
                <div className="flex items-center justify-between text-emerald-700 dark:text-emerald-300 font-semibold">
                  <span>Metricove, NetGuard &amp; Klipora</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">Direct .DMG • Free</span>
                </div>
                <div className="flex items-center justify-between text-cyan-700 dark:text-cyan-300 font-semibold">
                  <span>Show free space (Disk Analyzer)</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold">Direct .DMG • Free</span>
                </div>
                <div className="flex items-center justify-between text-purple-700 dark:text-purple-300 font-semibold">
                  <span>6 Safari Web Extensions</span>
                  <span className="text-purple-600 dark:text-purple-400 font-bold">App Store Live</span>
                </div>
                <div className="text-[11px] text-zinc-500 pt-0.5">
                  13 Live Apps &amp; Web Studios • Air-gapped &amp; client-side • Zero telemetry
                </div>
              </div>
            }
          />

          {/* Card 2: Enterprise Software Replacement */}
          <BentoGridItem
            className="md:col-span-1"
            badge="Enterprise Partnerships"
            icon={<Building2 className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />}
            title="License Replacement"
            description="Companies spending huge budgets on expensive software licenses can approach Cogify. We offer free trial pilots, full software auditing, and ultra-affordable transparent licensing."
            header={
              <div className="h-full rounded-xl bg-zinc-50/80 dark:bg-zinc-950/60 border border-zinc-200/70 dark:border-white/5 p-4 flex flex-col justify-center items-center text-center">
                <Shield className="w-10 h-10 text-cyan-600 dark:text-cyan-400 mb-2 opacity-80" />
                <span className="text-xs font-mono text-zinc-800 dark:text-zinc-300 font-semibold">
                  Free Trial &amp; Code Auditing
                </span>
                <span className="text-[10px] text-zinc-500 mt-1">
                  Replace Overpriced Enterprise SaaS
                </span>
              </div>
            }
          />

          {/* Card 3: Lightweight Performance */}
          <BentoGridItem
            className="md:col-span-1"
            badge="Performance"
            icon={<Zap className="w-6 h-6 text-amber-600 dark:text-amber-400" />}
            title="Minimal Resource Footprint"
            description="Our software runs cool without draining battery or hoarding memory. EmDoc consumes only ~45 MB of RAM compared to 800 MB - 2.5 GB in bloated commercial suites."
            header={
              <div className="h-full rounded-xl bg-zinc-50/80 dark:bg-zinc-950/60 border border-zinc-200/70 dark:border-white/5 p-4 flex flex-col justify-center">
                <div className="flex justify-between items-center text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-2">
                  <span>RAM Usage Baseline</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">~45 MB (vs 1.2 GB)</span>
                </div>
                <div className="w-full bg-zinc-200 dark:bg-zinc-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 dark:bg-emerald-400 h-full w-[8%]" />
                </div>
              </div>
            }
          />

          {/* Card 4: Multi-Device & Custom Tool Development */}
          <BentoGridItem
            className="md:col-span-2 bg-gradient-to-br from-white via-zinc-50/50 to-emerald-50/20 dark:from-zinc-900/80 dark:to-zinc-950"
            badge="Multi-Device & Custom Builds"
            icon={<Smartphone className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />}
            title="Real-Time Web &amp; Multi-Device Custom Builds"
            description="We engineer real-time web applications, PWAs, and native binaries across modern devices (Web, macOS, iOS, iPadOS, and Windows). Companies can commission Cogify to build fast, bespoke replacements for expensive licensed tools."
            header={
              <div className="h-full rounded-xl bg-zinc-50/80 dark:bg-zinc-950/60 border border-zinc-200/70 dark:border-white/5 p-4 flex flex-col justify-between font-mono text-xs">
                <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-400">
                  <Cpu className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="font-semibold">Bespoke Real-Time Web &amp; Native Enterprise Builds</span>
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
