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
    <section id="what-we-build" className="py-24 relative overflow-hidden bg-[#06080d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-semibold uppercase tracking-wider mb-4">
            Product Portfolio & Vision
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Software built around <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">real work.</span>
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed">
            COGIFY is committed to building software products that respect user focus, system resources, and mission-critical workflows.
          </p>
        </div>

        {/* Bento Grid layout */}
        <BentoGrid className="max-w-7xl mx-auto">
          {/* Card 1: Professional Software (Spans 2 cols on desktop) */}
          <BentoGridItem
            className="md:col-span-2 bg-gradient-to-br from-zinc-900/80 via-zinc-950/80 to-indigo-950/20"
            badge="Flagship Focus"
            icon={<Layers className="w-6 h-6 text-indigo-400" />}
            title="Professional Software"
            description="Tools engineered for professionals who demand serious capabilities without unnecessary complexity. Fast, tactile desktop applications built with custom native engines and zero telemetric drag."
            header={
              <div className="flex flex-col justify-end h-full p-4 rounded-xl bg-zinc-950/60 border border-white/5 font-mono text-xs text-zinc-400 space-y-2">
                <div className="flex items-center justify-between text-indigo-300">
                  <span>Current Flagship: EmDoc Workstation</span>
                  <span className="text-emerald-400">macOS Native</span>
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
            icon={<Building2 className="w-6 h-6 text-cyan-400" />}
            title="Enterprise Software"
            description="Scalable, auditable systems designed around complex organizational workflows, data sovereignty, and air-gapped security boundaries."
            header={
              <div className="h-full rounded-xl bg-zinc-950/60 border border-white/5 p-4 flex flex-col justify-center items-center text-center">
                <Shield className="w-10 h-10 text-cyan-400 mb-2 opacity-80" />
                <span className="text-xs font-mono text-zinc-300 font-semibold">
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
            icon={<Zap className="w-6 h-6 text-amber-400" />}
            title="Productivity"
            description="Applications that systematically remove friction from everyday work. We prioritize instant startup, keyboard fluidity, and predictable responsiveness."
            header={
              <div className="h-full rounded-xl bg-zinc-950/60 border border-white/5 p-4 flex flex-col justify-center">
                <div className="flex justify-between items-center text-xs font-mono text-zinc-400 mb-2">
                  <span>Cold Launch Time</span>
                  <span className="text-amber-400 font-bold">&lt; 120ms</span>
                </div>
                <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full w-[94%]" />
                </div>
              </div>
            }
          />

          {/* Card 4: Specialized Tools (Spans 2 cols on desktop) */}
          <BentoGridItem
            className="md:col-span-2 bg-gradient-to-br from-zinc-900/80 to-zinc-950"
            badge="Systems Engineering"
            icon={<Wrench className="w-6 h-6 text-emerald-400" />}
            title="Specialized Tools"
            description="Purpose-built software for critical domains that generic applications fail to solve. From high-throughput batch document pipelines to cryptographic verification and binary manipulation."
            header={
              <div className="h-full rounded-xl bg-zinc-950/60 border border-white/5 p-4 flex flex-col justify-between font-mono text-xs">
                <div className="flex items-center gap-2 text-zinc-400">
                  <Cpu className="w-4 h-4 text-emerald-400" />
                  <span>Modular C++20 Foundation</span>
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
