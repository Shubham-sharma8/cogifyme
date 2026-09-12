"use client";
import React from "react";
import {
  Layers,
  Building2,
  Zap,
  Wrench,
  Shield,
  Cpu,
  Smartphone,
  Gift,
} from "lucide-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export const WhatWeBuild = () => {
  return (
    <section id="what-we-build" className="py-24 relative overflow-hidden bg-[#fbfcfe] dark:bg-[#06080d] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-200/80 dark:border-cyan-500/20 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            Our Solutions & Vision
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
            We provide solutions built around{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-indigo-600 dark:from-cyan-400 dark:to-indigo-400">
              real work.
            </span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Cogify builds sovereign, high-efficiency software solutions and everyday apps across desktop and mobile. We eliminate bloated, expensive software licenses and create tools that are 100% free for individual users.
          </p>
        </div>

        {/* Bento Grid layout */}
        <BentoGrid className="max-w-7xl mx-auto">
          {/* Card 1: Free Daily Apps (Spans 2 cols on desktop) */}
          <BentoGridItem
            className="md:col-span-2 bg-gradient-to-br from-white via-zinc-50/50 to-indigo-50/30 dark:from-zinc-900/80 dark:via-zinc-950/80 dark:to-indigo-950/20"
            badge="Core Mission"
            icon={<Gift className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />}
            title="Free Everyday Utility Apps"
            description="We build everyday software tools that are 100% free for individual users, mostly open source, and completely devoid of dark patterns, paywalls, or telemetric surveillance. Multi-device support spanning macOS, iOS, iPadOS, and beyond."
            header={
              <div className="flex flex-col justify-end h-full p-4 rounded-xl bg-zinc-50/80 dark:bg-zinc-950/60 border border-zinc-200/70 dark:border-white/5 font-mono text-xs text-zinc-600 dark:text-zinc-400 space-y-2">
                <div className="flex items-center justify-between text-indigo-700 dark:text-indigo-300 font-semibold">
                  <span>EmDoc (macOS)</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">5.0 MB Workstation</span>
                </div>
                <div className="flex items-center justify-between text-purple-700 dark:text-purple-300 font-semibold">
                  <span>Element Hider (Safari)</span>
                  <span className="text-purple-600 dark:text-purple-400 font-bold">v1.0 Live</span>
                </div>
                <div className="flex items-center justify-between text-blue-700 dark:text-blue-300 font-semibold">
                  <span>Colour Invert (Safari)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">v1.0 Live</span>
                </div>
                <div className="text-[11px] text-zinc-500">
                  100% free for individual users • Air-gapped and on-device • Zero ads or telemetry
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
                  Free Trial & Code Auditing
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
            title="Multi-Device & Custom Software Builds"
            description="We build our apps across modern devices (macOS, iOS, iPadOS, and Windows). Companies can also commission Cogify to engineer lightweight, bespoke replacements for other software they are spending expensive license fees on."
            header={
              <div className="h-full rounded-xl bg-zinc-50/80 dark:bg-zinc-950/60 border border-zinc-200/70 dark:border-white/5 p-4 flex flex-col justify-between font-mono text-xs">
                <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-400">
                  <Cpu className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="font-semibold">Bespoke Enterprise Alternative Builds</span>
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
