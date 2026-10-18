"use client";
import React from "react";
import { siteConfig } from "@/config/site";
import { Timeline, TimelineEntry } from "@/components/ui/timeline";

export const AboutSection = () => {
  const timelineData: TimelineEntry[] = [
    {
      title: "Core Architecture & Zero-Telemetry Tenet",
      badge: "Foundation",
      content: (
        <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
          <p>
            COGIFY was established around a singular engineering conviction: everyday software for Mac, iPhone, and iPad should be fast, 100% free for users, and built without surveillance telemetry or bloated web wrappers.
          </p>
          <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/10 text-xs space-y-2">
            <div className="font-semibold text-zinc-900 dark:text-zinc-200">The 100% On-Device Principle</div>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Every COGIFY utility executes strictly on local Apple Silicon and Intel hardware in Swift, C++20, and native WebKit extensions — with zero cloud servers, zero analytics SDKs, and zero subscriptions.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "7 Free Apps Live on the Apple App Store",
      badge: "Live Ecosystem",
      content: (
        <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
          <p>
            Our published suite spans macOS, iOS, iPadOS, and Safari: EmDoc PDF Workstation (5.0 MB), Ad Blocker - For Safari (v2.0), ReaderEasy (v1.1), WebClear, WebLenses, Element Hider, and Colour Invert.
          </p>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-lg bg-white dark:bg-zinc-950/80 border border-zinc-200/80 dark:border-white/5 shadow-xs">
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold block mb-0.5">7 Published Apps</span>
              <span className="text-zinc-500">macOS, iOS, iPadOS &amp; Safari</span>
            </div>
            <div className="p-3 rounded-lg bg-white dark:bg-zinc-950/80 border border-zinc-200/80 dark:border-white/5 shadow-xs">
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold block mb-0.5">100% Free &amp; Local</span>
              <span className="text-zinc-500">Zero paywalls or tracking</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "CarPlay Infotainment, Mobile DevTools & Enterprise",
      badge: "Roadmap",
      content: (
        <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
          <p>
            Expanding into Apple CarPlay and mobile developer tooling with Aurora Drive (real-time live lyrics, customizable iOS widgets, and CarPlay infotainment), Web Inspection, Full Page Web Capture, and bespoke enterprise software replacements.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#fbfcfe] dark:bg-[#06080d] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border border-indigo-200/80 dark:border-indigo-500/20 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            Our Philosophy
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
            We build software we would want to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600 dark:from-indigo-300 dark:to-cyan-300">
              use ourselves.
            </span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            We reject the trend toward fragile web wrappers and surveillance-driven telemetry. COGIFY designs products engineered for craft, reliability, and human agency.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {siteConfig.principles.map((principle, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/90 dark:bg-zinc-900/30 border border-zinc-200/90 dark:border-white/10 hover:border-indigo-500/40 transition-all duration-200 shadow-xs dark:shadow-none"
            >
              <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-3">0{idx + 1}</div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                {principle.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        {/* Conceptual Product Evolution Timeline */}
        <div className="pt-8 border-t border-zinc-200/80 dark:border-white/5">
          <div className="max-w-2xl mb-8">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
              Product Evolution & Trajectory
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
              How our architectural foundations translate into tangible software releases.
            </p>
          </div>
          <Timeline data={timelineData} />
        </div>
      </div>
    </section>
  );
};
