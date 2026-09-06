"use client";
import React from "react";
import {
  Layers,
  Building2,
  Zap,
  Wrench,
  Shield,
  Cpu,
} from "lucide-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export const WhatWeBuild = () => {
  return (
    <section id="what-we-build" className="py-24 relative overflow-hidden bg-[#fbfcfe] dark:bg-[#06080d] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-200/80 dark:border-cyan-500/20 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            Product Portfolio & Vision
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
            Software built around{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-indigo-600 dark:from-cyan-400 dark:to-indigo-400">
              real work.
            </span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            COGIFY is committed to building software products that respect user focus, system resources, and mission-critical workflows.
          </p>
        </div>

        {/* Bento Grid layout */}
        <BentoGrid className="max-w-7xl mx-auto">
          {/* Card 1: Professional Software (Spans 2 cols on desktop) */}
          <BentoGridItem
            className="md:col-span-2 bg-gradient-to-br from-white via-zinc-50/50 to-indigo-50/30 dark:from-zinc-900/80 dark:via-zinc-950/80 dark:to-indigo-950/20"
            badge="Flagship Focus"
            icon={<Layers className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />}
            title="Professional Software"
            description="Tools engineered for professionals who demand serious capabilities without unnecessary complexity. Fast, tactile desktop applications built with custom native engines and zero telemetric drag."
            header={
              <div className="flex flex-col justify-end h-full p-4 rounded-xl bg-zinc-50/80 dark:bg-zinc-950/60 border border-zinc-200/70 dark:border-white/5 font-mono text-xs text-zinc-600 dark:text-zinc-400 space-y-2">
                <div className="flex items-center justify-between text-indigo-700 dark:text-indigo-300 font-semibold">
                  <span>Current Flagship: EmDoc Workstation</span>
                  <span className="text-emerald-600 dark:text-emerald-400">macOS Native</span>
                </div>
                <div className="text-[11px] text-zinc-500">
                  Sub-millisecond page rendering • Apple Vision Neural OCR • Multi-layer vector canvas
                </div>
              </div>
            }
          />

          {/* Card 2: Enterprise Software */}
          <BentoGridItem
            className="md:col-span-1"
            badge="Architecture"
            icon={<Building2 className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />}
            title="Enterprise Software"
            description="Scalable, auditable systems designed around complex organizational workflows, data sovereignty, and air-gapped security boundaries."
            header={
              <div className="h-full rounded-xl bg-zinc-50/80 dark:bg-zinc-950/60 border border-zinc-200/70 dark:border-white/5 p-4 flex flex-col justify-center items-center text-center">
                <Shield className="w-10 h-10 text-cyan-600 dark:text-cyan-400 mb-2 opacity-80" />
                <span className="text-xs font-mono text-zinc-800 dark:text-zinc-300 font-semibold">
                  Zero Cloud Footprint
                </span>
                <span className="text-[10px] text-zinc-500 mt-1">
                  On-Premise & Air-Gapped Deployments
                </span>
              </div>
            }
          />

          {/* Card 3: Productivity */}
          <BentoGridItem
            className="md:col-span-1"
            badge="Performance"
            icon={<Zap className="w-6 h-6 text-amber-600 dark:text-amber-400" />}
            title="Productivity"
            description="Applications that systematically remove friction from everyday work. We prioritize instant startup, keyboard fluidity, and predictable responsiveness."
            header={
              <div className="h-full rounded-xl bg-zinc-50/80 dark:bg-zinc-950/60 border border-zinc-200/70 dark:border-white/5 p-4 flex flex-col justify-center">
                <div className="flex justify-between items-center text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-2">
                  <span>Cold Launch Time</span>
                  <span className="text-amber-600 dark:text-amber-400 font-bold">&lt; 120ms</span>
                </div>
                <div className="w-full bg-zinc-200 dark:bg-zinc-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-amber-500 dark:bg-amber-400 h-full w-[94%]" />
                </div>
              </div>
            }
          />

          {/* Card 4: Specialized Tools (Spans 2 cols on desktop) */}
          <BentoGridItem
            className="md:col-span-2 bg-gradient-to-br from-white via-zinc-50/50 to-emerald-50/20 dark:from-zinc-900/80 dark:to-zinc-950"
            badge="Systems Engineering"
            icon={<Wrench className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />}
            title="Specialized Tools"
            description="Purpose-built software for critical domains that generic applications fail to solve. From high-throughput batch document pipelines to cryptographic verification and binary manipulation."
            header={
              <div className="h-full rounded-xl bg-zinc-50/80 dark:bg-zinc-950/60 border border-zinc-200/70 dark:border-white/5 p-4 flex flex-col justify-between font-mono text-xs">
                <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-400">
                  <Cpu className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="font-semibold">Modular C++20 Foundation</span>
                </div>
                <p className="text-[11px] text-zinc-500 font-sans">
                  Shared low-level core libraries engineered for reuse across macOS, iOS, Windows, and Linux server environments.
                </p>
              </div>
            }
          />
        </BentoGrid>
      </div>
    </section>
  );
};
