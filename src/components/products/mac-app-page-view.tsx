"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Sparkles,
  CheckCircle2,
  Lock,
  Download,
  Monitor,
  Cpu,
  Heart,
} from "lucide-react";
import { MacAppConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { FaqSection } from "@/components/seo/faq-section";
import { AuthorBio } from "@/components/seo/author-bio";

interface MacAppPageViewProps {
  app: MacAppConfig;
}

const accentStyles = {
  emerald: {
    badge:
      "border-emerald-500/30 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300",
    glow: "from-emerald-600/15 via-teal-600/8 to-transparent",
    text: "from-emerald-700 via-teal-700 to-cyan-700 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400",
    activeTab:
      "bg-emerald-700 dark:bg-emerald-500 text-white dark:text-zinc-950 shadow-md shadow-emerald-500/20",
    borderActive:
      "border-emerald-500/50 bg-emerald-500/8 dark:border-emerald-500/40 dark:bg-emerald-500/10 shadow-xs",
    dot: "bg-emerald-500 dark:bg-emerald-400",
    iconText: "text-emerald-700 dark:text-emerald-400",
    btn: "bg-emerald-700 hover:bg-emerald-600 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-zinc-950 font-semibold shadow-lg shadow-emerald-500/20",
  },
  indigo: {
    badge:
      "border-indigo-500/30 bg-indigo-500/10 text-indigo-800 dark:text-indigo-300",
    glow: "from-indigo-600/15 via-purple-600/8 to-transparent",
    text: "from-indigo-700 via-purple-700 to-sky-700 dark:from-indigo-400 dark:via-purple-300 dark:to-sky-400",
    activeTab: "bg-indigo-600 dark:bg-indigo-500 text-white shadow-md shadow-indigo-500/20",
    borderActive:
      "border-indigo-500/50 bg-indigo-500/8 dark:border-indigo-500/40 dark:bg-indigo-500/10 shadow-xs",
    dot: "bg-indigo-500 dark:bg-indigo-400",
    iconText: "text-indigo-700 dark:text-indigo-400",
    btn: "bg-indigo-600 hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400 text-white font-semibold shadow-lg shadow-indigo-500/20",
  },
  amber: {
    badge:
      "border-amber-500/35 bg-amber-500/10 text-amber-800 dark:text-amber-300",
    glow: "from-amber-500/15 via-orange-500/8 to-transparent",
    text: "from-amber-700 via-orange-700 to-amber-800 dark:from-amber-300 dark:via-orange-300 dark:to-yellow-200",
    activeTab:
      "bg-amber-500 text-zinc-950 shadow-md shadow-amber-500/20",
    borderActive:
      "border-amber-500/50 bg-amber-500/10 dark:border-amber-500/40 dark:bg-amber-500/10 shadow-xs",
    dot: "bg-amber-500 dark:bg-amber-400",
    iconText: "text-amber-700 dark:text-amber-400",
    btn: "bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold shadow-lg shadow-amber-500/20",
  },
  sky: {
    badge:
      "border-sky-500/30 bg-sky-500/10 text-sky-800 dark:text-sky-300",
    glow: "from-sky-500/15 via-cyan-500/8 to-transparent",
    text: "from-sky-700 via-cyan-700 to-blue-700 dark:from-sky-400 dark:via-cyan-300 dark:to-blue-400",
    activeTab:
      "bg-sky-700 dark:bg-sky-500 text-white dark:text-zinc-950 shadow-md shadow-sky-500/20",
    borderActive:
      "border-sky-500/50 bg-sky-500/8 dark:border-sky-500/40 dark:bg-sky-500/10 shadow-xs",
    dot: "bg-sky-500 dark:bg-sky-400",
    iconText: "text-sky-700 dark:text-sky-400",
    btn: "bg-sky-700 hover:bg-sky-600 dark:bg-sky-500 dark:hover:bg-sky-400 text-white dark:text-zinc-950 font-semibold shadow-lg shadow-sky-500/20",
  },
  cyan: {
    badge:
      "border-cyan-500/30 bg-cyan-500/10 text-cyan-800 dark:text-cyan-300",
    glow: "from-cyan-500/15 via-sky-500/8 to-transparent",
    text: "from-cyan-700 via-sky-700 to-indigo-700 dark:from-cyan-400 dark:via-sky-300 dark:to-indigo-400",
    activeTab:
      "bg-cyan-700 dark:bg-cyan-500 text-white dark:text-zinc-950 shadow-md shadow-cyan-500/20",
    borderActive:
      "border-cyan-500/50 bg-cyan-500/8 dark:border-cyan-500/40 dark:bg-cyan-500/10 shadow-xs",
    dot: "bg-cyan-500 dark:bg-cyan-400",
    iconText: "text-cyan-700 dark:text-cyan-400",
    btn: "bg-cyan-700 hover:bg-cyan-600 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-zinc-950 font-semibold shadow-lg shadow-cyan-500/20",
  },
  rose: {
    badge:
      "border-rose-500/30 bg-rose-500/10 text-rose-800 dark:text-rose-300",
    glow: "from-rose-500/15 via-pink-500/8 to-transparent",
    text: "from-rose-700 via-pink-700 to-orange-700 dark:from-rose-400 dark:via-pink-300 dark:to-orange-300",
    activeTab: "bg-rose-700 dark:bg-rose-500 text-white shadow-md shadow-rose-500/20",
    borderActive:
      "border-rose-500/50 bg-rose-500/8 dark:border-rose-500/40 dark:bg-rose-500/10 shadow-xs",
    dot: "bg-rose-500 dark:bg-rose-400",
    iconText: "text-rose-700 dark:text-rose-400",
    btn: "bg-rose-700 hover:bg-rose-600 dark:bg-rose-500 dark:hover:bg-rose-400 text-white font-semibold shadow-lg shadow-rose-500/20",
  },
  violet: {
    badge:
      "border-violet-500/30 bg-violet-500/10 text-violet-800 dark:text-violet-300",
    glow: "from-violet-600/15 via-fuchsia-600/8 to-transparent",
    text: "from-violet-700 via-fuchsia-700 to-indigo-700 dark:from-violet-400 dark:via-fuchsia-300 dark:to-indigo-300",
    activeTab: "bg-violet-700 dark:bg-violet-500 text-white shadow-md shadow-violet-500/20",
    borderActive:
      "border-violet-500/50 bg-violet-500/8 dark:border-violet-500/40 dark:bg-violet-500/10 shadow-xs",
    dot: "bg-violet-500 dark:bg-violet-400",
    iconText: "text-violet-700 dark:text-violet-400",
    btn: "bg-violet-700 hover:bg-violet-600 dark:bg-violet-500 dark:hover:bg-violet-400 text-white font-semibold shadow-lg shadow-violet-500/20",
  },
};

export function MacAppPageView({ app }: MacAppPageViewProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentScreenshots = app.screenshotsMac || [];
  const safeIndex = activeIndex < currentScreenshots.length ? activeIndex : 0;
  const activeShot = currentScreenshots[safeIndex] || currentScreenshots[0];
  const theme = accentStyles[app.accentColor] || accentStyles.indigo;

  return (
    <div className="min-h-dvh pt-28 pb-24 relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div
        className={`pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b ${theme.glow} blur-3xl -z-10`}
      />

      <Container>
        {/* Top Breadcrumb Navigation */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Breadcrumbs
            items={[
              { label: "Products", href: "/products" },
              { label: app.shortName },
            ]}
            includeJsonLd={true}
          />
          <Link
            href={`/${app.slug}/privacy`}
            className="text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors inline-flex items-center gap-1.5"
          >
            <Shield className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" aria-hidden="true" />
            <span>{app.shortName} Privacy Policy</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="rounded-3xl border border-zinc-200/90 dark:border-white/10 bg-white/95 dark:bg-zinc-900/40 backdrop-blur-xl p-8 md:p-12 mb-16 relative overflow-hidden shadow-sm dark:shadow-none">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center gap-2.5 tabular-nums">
                <Badge className={theme.badge}>
                  Native macOS Workstation • v{app.version} ({app.appSize})
                </Badge>
                <Badge variant="outline">{app.minMacOsVersion}</Badge>
                <Badge variant="success">100% Free • Direct 1-Click DMG</Badge>
              </div>

              <div className="flex items-center gap-5">
                <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/15 shadow-xl shrink-0 bg-zinc-100 dark:bg-zinc-950">
                  <Image
                    src={app.iconLarge || app.icon}
                    alt={`${app.name} macOS App Icon`}
                    fill
                    className="object-cover"
                    sizes="96px"
                    priority
                  />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white text-balance">
                    {app.name}
                  </h1>
                  <p
                    className={`mt-1.5 text-lg sm:text-xl font-semibold bg-gradient-to-r ${theme.text} bg-clip-text text-transparent text-balance`}
                  >
                    {app.tagline}
                  </p>
                </div>
              </div>

              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl text-pretty">
                {app.fullDescription}
              </p>

              {/* Single-Click Direct Download CTA Row */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={app.downloadUrl}
                  download
                  className={`inline-flex items-center gap-2.5 rounded-xl px-7 py-4 text-sm transition-colors tabular-nums ${theme.btn}`}
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  <span>Download {app.shortName} for macOS (.DMG • {app.appSize})</span>
                </a>
                <Link href="/suggestions">
                  <Button variant="secondary" size="lg" className="gap-2">
                    <Sparkles className="h-4 w-4" aria-hidden="true" />
                    Request a Feature
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                <span>✓ Signed with Apple Developer ID (9TKKPN6F59)</span>
                <span>✓ {app.minMacOsVersion}</span>
                <span>✓ Zero Subscriptions or Cloud Accounts</span>
              </div>
            </div>

            {/* Right Key Guarantees Card */}
            <div className="lg:col-span-4 rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-zinc-50/90 dark:bg-zinc-950/70 p-6 space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                Cogify Native macOS Standard
              </div>
              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <Lock className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <div className="text-sm font-semibold text-zinc-900 dark:text-white">
                      100% Air-Gapped Local Execution
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5 text-pretty">
                      Zero external telemetry servers, zero analytics SDKs, and zero background data harvesting.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="h-5 w-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <div className="text-sm font-semibold text-zinc-900 dark:text-white">
                      Single-Click Direct DMG Installer
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5 text-pretty">
                      Hosted directly on GitHub Releases. Download the {app.appSize} DMG in one click and drag {app.shortName}.app to /Applications.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Cpu className="h-5 w-5 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <div className="text-sm font-semibold text-zinc-900 dark:text-white">
                      Apple Silicon &amp; Intel Optimized
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">
                      {app.architecture}.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-3 border-t border-zinc-200 dark:border-white/10 flex items-center justify-between text-xs text-zinc-600 dark:text-zinc-400">
                <span>Bundle ID: {app.bundleId}</span>
                <a
                  href={app.downloadUrl}
                  download
                  className="text-zinc-900 dark:text-white font-semibold hover:underline inline-flex items-center gap-1"
                >
                  Direct DMG <Download className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Screenshot Showcase */}
        {currentScreenshots.length > 0 && activeShot && (
          <section className="mb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-700 dark:text-indigo-400 mb-2 tabular-nums">
                  <Monitor className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>macOS Retina Studio Tour ({currentScreenshots.length} Screens)</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white text-balance">
                  Interactive Workstation Walkthrough
                </h2>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-1 text-pretty">
                  Explore every module and capability inside {app.name} for macOS.
                </p>
              </div>

              <a
                href={app.downloadUrl}
                download
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 px-4 py-2.5 text-xs font-semibold self-start md:self-auto hover:opacity-90 transition-opacity tabular-nums"
              >
                <Download className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Single-Click Download ({app.appSize})</span>
              </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Step Selector Sidebar */}
              <div className="lg:col-span-5 space-y-2.5 max-h-[640px] overflow-y-auto pr-1">
                {currentScreenshots.map((shot, idx) => {
                  const isActive = idx === safeIndex;
                  const numStr = idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`;
                  return (
                    <button
                      key={shot.id}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActiveIndex(idx)}
                      className={`w-full text-left rounded-2xl border p-4 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                        isActive
                          ? theme.borderActive
                          : "border-zinc-200/80 dark:border-white/10 bg-white dark:bg-zinc-900/30 hover:bg-zinc-50 dark:hover:bg-zinc-900/60"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 tabular-nums">
                          {numStr} • {shot.tag}
                        </span>
                        {isActive && (
                          <span className={`h-2 w-2 rounded-full ${theme.dot}`} />
                        )}
                      </div>
                      <div className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white">
                        {shot.title}
                      </div>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 line-clamp-2 text-pretty">
                        {shot.description}
                      </p>
                      {isActive && shot.highlights.length > 0 && (
                        <ul className="mt-3 pt-2.5 border-t border-zinc-200/80 dark:border-white/10 space-y-1">
                          {shot.highlights.map((h) => (
                            <li
                              key={h}
                              className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-200 font-medium"
                            >
                              <CheckCircle2
                                className={`h-3.5 w-3.5 shrink-0 ${theme.iconText}`}
                                aria-hidden="true"
                              />
                              {h}
                            </li>
                          ))}
                        </ul>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Screenshot Preview Stage */}
              <div className="lg:col-span-7 rounded-3xl border border-zinc-200/90 dark:border-white/10 bg-zinc-100/80 dark:bg-zinc-950/80 p-4 sm:p-6 flex flex-col items-center justify-center sticky top-28">
                <div className="w-full rounded-2xl overflow-hidden border border-zinc-300 dark:border-zinc-800 bg-zinc-950 shadow-2xl">
                  <div className="h-7 px-3.5 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between">
                    <div className="flex items-center space-x-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                    </div>
                    <span className="text-[11px] font-mono text-zinc-400 truncate">
                      {app.name} — {activeShot.title}
                    </span>
                    <div className="w-8" />
                  </div>
                  <div className="relative w-full aspect-[16/10] bg-zinc-950">
                    <Image
                      src={activeShot.image}
                      alt={`${app.shortName} - ${activeShot.title}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                  </div>
                </div>

                 {/* Step Selector Pills */}
                <div className="mt-4 flex items-center gap-1.5 overflow-x-auto max-w-full pb-1">
                  {currentScreenshots.map((shot, idx) => {
                    const numStr = idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`;
                    return (
                      <button
                        key={shot.id}
                        type="button"
                        onClick={() => setActiveIndex(idx)}
                        title={`View screenshot ${idx + 1}: ${shot.title}`}
                        aria-pressed={idx === safeIndex}
                        className={`px-2.5 py-1 rounded-lg text-xs font-mono border transition-colors shrink-0 cursor-pointer tabular-nums ${
                          idx === safeIndex
                            ? "bg-indigo-600 text-white border-indigo-600 shadow-xs"
                            : "bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border-zinc-300 dark:border-white/10 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                        }`}
                      >
                        {numStr}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-3 text-center">
                  <div className="text-sm font-bold text-zinc-900 dark:text-white">
                    {activeShot.title}
                  </div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">
                    {activeShot.subtitle}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 6 Core Capabilities Grid */}
        <section className="mb-20">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white text-balance">
              Engineered for Precision, Speed &amp; Local Sovereignty
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-1 text-pretty">
              Every subsystem in {app.shortName} executes natively on your Mac with zero cloud dependencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {app.features.map((feat) => (
              <div
                key={feat.title}
                className="rounded-2xl border border-zinc-200/90 dark:border-white/10 bg-white dark:bg-zinc-900/30 p-6 hover:border-indigo-500/30 dark:hover:border-white/20 transition-colors shadow-2xs dark:shadow-none"
              >
                <div className="inline-flex items-center rounded-full border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-white/[0.03] px-3 py-1 text-[11px] font-semibold text-zinc-700 dark:text-zinc-300 mb-4">
                  {feat.tag}
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2 text-balance">
                  {feat.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed text-pretty">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Philosophy & Specifications */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-5 rounded-3xl border border-zinc-200/90 dark:border-white/10 bg-white dark:bg-zinc-900/40 p-8 flex flex-col justify-between shadow-2xs dark:shadow-none">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 mb-3">
                <Shield className="h-4 w-4" aria-hidden="true" />
                Product Philosophy &amp; Privacy
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 text-balance">
                Built to Respect Your Mac and Your Privacy.
              </h3>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6 text-pretty">
                {app.philosophy}
              </p>
            </div>

            <div className="pt-6 border-t border-zinc-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
              <a
                href={app.downloadUrl}
                download
                className="inline-flex items-center gap-2 text-xs font-bold text-indigo-700 dark:text-indigo-400 hover:underline tabular-nums"
              >
                <Download className="h-3.5 w-3.5" aria-hidden="true" />
                Download {app.shortName}.dmg ({app.appSize})
              </a>
              <Link
                href={`/${app.slug}/privacy`}
                className="text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white underline"
              >
                Read Privacy Policy
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-3xl border border-zinc-200/90 dark:border-white/10 bg-white dark:bg-zinc-900/30 p-8 shadow-2xs dark:shadow-none">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6 text-balance">
              Technical Specifications
            </h3>
            <div className="divide-y divide-zinc-200 dark:divide-white/10">
              {app.specifications.map((spec) => (
                <div
                  key={spec.label}
                  className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                >
                  <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                    {spec.label}
                  </span>
                  <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 tabular-nums">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FaqSection
          badge={`${app.shortName} macOS FAQ`}
          title={`Frequently Asked Questions About ${app.shortName}`}
          subtitle={`Installation, macOS compatibility, and privacy answers for ${app.name}.`}
          faqs={[
            {
              q: `How do I download and install ${app.name} on my Mac?`,
              a: `Click the "Download ${app.shortName} for macOS (.DMG)" button above to start an instant single-click download from our official GitHub Release. Open the downloaded .dmg file and drag ${app.shortName}.app into your Applications folder.`,
            },
            {
              q: `Is ${app.shortName} signed with an Apple Developer ID and 100% free?`,
              a: `Yes. ${app.name} (v${app.version}) is signed with Developer ID Application: Shubham Sharma (9TKKPN6F59) and is 100% free for individuals with zero subscriptions, zero ads, and zero telemetry.`,
            },
            {
              q: `Does ${app.shortName} send any of my data to external servers?`,
              a: `Never. ${app.shortName} executes 100% locally on your Mac (${app.minMacOsVersion}) with zero analytics SDKs and zero cloud uploads.`,
            },
          ]}
        />

        {/* Author Attribution */}
        <AuthorBio
          currentSlug={app.slug}
          contextLabel={`Native macOS Systems Engineering • v${app.version} Direct DMG Release`}
        />
      </Container>
    </div>
  );
}
