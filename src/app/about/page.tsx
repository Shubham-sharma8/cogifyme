"use client";
import React from "react";
import { siteConfig } from "@/config/site";
import { Timeline, TimelineEntry } from "@/components/ui/timeline";
import { BrandLogo } from "@/components/brand/brand-logo";

export default function AboutPage() {
  const timelineData: TimelineEntry[] = [
    {
      title: "Core Architecture & Tenets",
      badge: "Inception",
      content: (
        <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
          <p>
            COGIFY began with a clear purpose: build native software tools for serious work that respect user attention and privacy.
          </p>
          <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/10 text-xs space-y-2">
            <div className="font-semibold text-zinc-900 dark:text-zinc-200">The 100% Offline Tenet</div>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We developed our core document logic in ISO C++20, completely abstracted from UI frameworks. By eliminating mandatory cloud APIs and telemetry SDKs, our software delivers predictable speed and verifiable data sovereignty.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "EmDoc Workstation for macOS",
      badge: "Flagship Release",
      content: (
        <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
          <p>
            Our initial product, EmDoc, brings desktop PDF workflows to macOS in an astonishingly compact 5.0 MB package consuming only ~45 MB of RAM. 100% free for individual users with all features unlocked.
          </p>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-lg bg-white dark:bg-zinc-950/80 border border-zinc-200/80 dark:border-white/5 shadow-xs">
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold block mb-0.5">5.0 MB Binary</span>
              <span className="text-zinc-500">Universal macOS build</span>
            </div>
            <div className="p-3 rounded-lg bg-white dark:bg-zinc-950/80 border border-zinc-200/80 dark:border-white/5 shadow-xs">
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold block mb-0.5">Air-Gapped & Free</span>
              <span className="text-zinc-500">100% on-device compute</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "EmDoc for iOS (iPhone & iPad)",
      badge: "In Development",
      content: (
        <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
          <p>
            In active engineering: EmDoc companion for iOS. Delivering native document viewing, pencil annotations, and local offline compression to iPhone and iPad.
          </p>
        </div>
      ),
    },
    {
      title: "Enterprise Replacement & Free Pilots",
      badge: "Enterprise",
      content: (
        <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
          <p>
            Helping organizations break free from exorbitant commercial software licensing fees. We provide free trials, full software & security auditing, and transparent low-cost licensing or custom replacements.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="pt-28 pb-20 relative">
      {/* About Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
              <BrandLogo width={40} height={40} priority />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200/80 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider shadow-xs">
              About COGIFY
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-tight">
            We build software we would want to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600 dark:from-indigo-300 dark:to-cyan-300">
              use ourselves.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-3xl">
            COGIFY is an independent software product company founded by Shubham Sharma in Delhi. We believe tools should be fast, dependable, beautifully crafted, and uncompromisingly respectful of user privacy.
          </p>
        </div>
      </section>

      {/* Philosophy Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight mb-3">
            Core Principles
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
            The engineering guidelines that govern every decision we make.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.principles.map((principle, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/90 dark:bg-zinc-900/30 border border-zinc-200/90 dark:border-white/10 space-y-3 shadow-xs dark:shadow-none"
            >
              <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400">0{idx + 1}</div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-white">{principle.title}</h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Evolution Roadmap */}
      <section id="timeline" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-zinc-200/80 dark:border-white/5">
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight mb-2">
            Evolution & Roadmap
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm">
            From low-level C++ foundations to intuitive native client applications.
          </p>
        </div>

        <Timeline data={timelineData} />
      </section>
    </div>
  );
}
