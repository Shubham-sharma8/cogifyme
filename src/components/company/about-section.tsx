"use client";
import React from "react";
import { siteConfig } from "@/config/site";
import { Timeline, TimelineEntry } from "@/components/ui/timeline";

export const AboutSection = () => {
  const timelineData: TimelineEntry[] = [
    {
      title: "Core Architecture & Tenets",
      badge: "Foundation",
      content: (
        <div className="space-y-4 text-sm text-zinc-400">
          <p>
            COGIFY was established around a singular engineering conviction: that modern software should be fast, private, and built without wasteful layers of abstraction.
          </p>
          <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/10 text-xs space-y-2">
            <div className="font-semibold text-zinc-200">The 100% Offline Principle</div>
            <p className="text-zinc-400 leading-relaxed">
              We architected a clean C++20 PDF Engine decoupled from Apple or Windows UI frameworks. Zero cloud servers, zero analytics, zero telemetric beacons.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "EmDoc Workstation for macOS",
      badge: "Current Flagship",
      content: (
        <div className="space-y-4 text-sm text-zinc-400">
          <p>
            Our initial commercial product, EmDoc, brings desktop PDF workflows to macOS with native Retina acceleration, Apple Neural Engine OCR, fill & sign workstations, and vector security blackouts.
          </p>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-lg bg-zinc-950/80 border border-white/5">
              <span className="text-indigo-400 font-semibold block mb-0.5">Version 0.1 Preview</span>
              <span className="text-zinc-500">Universal macOS binary</span>
            </div>
            <div className="p-3 rounded-lg bg-zinc-950/80 border border-white/5">
              <span className="text-emerald-400 font-semibold block mb-0.5">Air-Gapped Local</span>
              <span className="text-zinc-500">100% on-device compute</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Cross-Platform & Enterprise Engines",
      badge: "Roadmap",
      content: (
        <div className="space-y-4 text-sm text-zinc-400">
          <p>
            Because our core PDF logic is written in ISO C++20 with ABI-stable C interfaces, the exact same battle-tested engine will power upcoming releases across iPadOS, Windows PC, and air-gapped enterprise server pipelines.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#06080d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold uppercase tracking-wider mb-4">
            Our Philosophy
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            We build software we would want to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-cyan-300">
              use ourselves.
            </span>
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed">
            We reject the trend toward fragile web wrappers and surveillance-driven telemetry. COGIFY designs products engineered for craft, reliability, and human agency.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {siteConfig.principles.map((principle, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-zinc-900/30 border border-white/10 hover:border-indigo-500/30 transition-all duration-200"
            >
              <div className="text-xs font-mono text-indigo-400 mb-3">0{idx + 1}</div>
              <h3 className="text-base font-bold text-zinc-100 mb-2">
                {principle.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        {/* Conceptual Product Evolution Timeline */}
        <div className="pt-8 border-t border-white/5">
          <div className="max-w-2xl mb-8">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Product Evolution & Trajectory
            </h3>
            <p className="text-sm text-zinc-400 mt-1">
              How our architectural foundations translate into tangible software releases.
            </p>
          </div>
          <Timeline data={timelineData} />
        </div>
      </div>
    </section>
  );
};
