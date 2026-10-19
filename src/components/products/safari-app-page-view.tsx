"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Sparkles,
  CheckCircle2,
  Lock,
  ArrowUpRight,
  Smartphone,
  Monitor,
  Tablet,
  Cpu,
  Heart,
  ExternalLink,
} from "lucide-react";
import { SafariAppConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { FaqSection } from "@/components/seo/faq-section";
import { AuthorBio } from "@/components/seo/author-bio";

interface SafariAppPageViewProps {
  app: SafariAppConfig;
}

const accentStyles = {
  emerald: {
    badge:
      "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
    glow: "from-emerald-600/15 via-teal-600/8 to-transparent",
    text: "from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400",
    activeTab:
      "bg-emerald-600 dark:bg-emerald-500 text-white dark:text-zinc-950 shadow-md shadow-emerald-500/20",
    borderActive:
      "border-emerald-500/50 bg-emerald-500/8 dark:border-emerald-500/40 dark:bg-emerald-500/10 shadow-xs",
    dot: "bg-emerald-500 dark:bg-emerald-400",
    iconText: "text-emerald-600 dark:text-emerald-400",
    btn: "bg-emerald-600 hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-zinc-950 font-semibold shadow-lg shadow-emerald-500/20",
  },
  indigo: {
    badge:
      "border-indigo-500/30 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300",
    glow: "from-indigo-600/15 via-purple-600/8 to-transparent",
    text: "from-indigo-600 via-purple-600 to-sky-600 dark:from-indigo-400 dark:via-purple-300 dark:to-sky-400",
    activeTab: "bg-indigo-600 dark:bg-indigo-500 text-white shadow-md shadow-indigo-500/20",
    borderActive:
      "border-indigo-500/50 bg-indigo-500/8 dark:border-indigo-500/40 dark:bg-indigo-500/10 shadow-xs",
    dot: "bg-indigo-500 dark:bg-indigo-400",
    iconText: "text-indigo-600 dark:text-indigo-400",
    btn: "bg-indigo-600 hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400 text-white font-semibold shadow-lg shadow-indigo-500/20",
  },
  amber: {
    badge:
      "border-amber-500/35 bg-amber-500/10 text-amber-800 dark:text-amber-300",
    glow: "from-amber-500/15 via-orange-500/8 to-transparent",
    text: "from-amber-600 via-orange-600 to-amber-700 dark:from-amber-300 dark:via-orange-300 dark:to-yellow-200",
    activeTab:
      "bg-amber-500 text-zinc-950 shadow-md shadow-amber-500/20",
    borderActive:
      "border-amber-500/50 bg-amber-500/10 dark:border-amber-500/40 dark:bg-amber-500/10 shadow-xs",
    dot: "bg-amber-500 dark:bg-amber-400",
    iconText: "text-amber-600 dark:text-amber-400",
    btn: "bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold shadow-lg shadow-amber-500/20",
  },
  sky: {
    badge:
      "border-sky-500/30 bg-sky-500/10 text-sky-700 dark:text-sky-300",
    glow: "from-sky-500/15 via-cyan-500/8 to-transparent",
    text: "from-sky-600 via-cyan-600 to-blue-600 dark:from-sky-400 dark:via-cyan-300 dark:to-blue-400",
    activeTab:
      "bg-sky-600 dark:bg-sky-500 text-white dark:text-zinc-950 shadow-md shadow-sky-500/20",
    borderActive:
      "border-sky-500/50 bg-sky-500/8 dark:border-sky-500/40 dark:bg-sky-500/10 shadow-xs",
    dot: "bg-sky-500 dark:bg-sky-400",
    iconText: "text-sky-600 dark:text-sky-400",
    btn: "bg-sky-600 hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400 text-white dark:text-zinc-950 font-semibold shadow-lg shadow-sky-500/20",
  },
  rose: {
    badge:
      "border-rose-500/30 bg-rose-500/10 text-rose-700 dark:text-rose-300",
    glow: "from-rose-500/15 via-pink-500/8 to-transparent",
    text: "from-rose-600 via-pink-600 to-orange-600 dark:from-rose-400 dark:via-pink-300 dark:to-orange-300",
    activeTab: "bg-rose-600 dark:bg-rose-500 text-white shadow-md shadow-rose-500/20",
    borderActive:
      "border-rose-500/50 bg-rose-500/8 dark:border-rose-500/40 dark:bg-rose-500/10 shadow-xs",
    dot: "bg-rose-500 dark:bg-rose-400",
    iconText: "text-rose-600 dark:text-rose-400",
    btn: "bg-rose-600 hover:bg-rose-500 dark:bg-rose-500 dark:hover:bg-rose-400 text-white font-semibold shadow-lg shadow-rose-500/20",
  },
  violet: {
    badge:
      "border-violet-500/30 bg-violet-500/10 text-violet-700 dark:text-violet-300",
    glow: "from-violet-600/15 via-fuchsia-600/8 to-transparent",
    text: "from-violet-600 via-fuchsia-600 to-indigo-600 dark:from-violet-400 dark:via-fuchsia-300 dark:to-indigo-300",
    activeTab: "bg-violet-600 dark:bg-violet-500 text-white shadow-md shadow-violet-500/20",
    borderActive:
      "border-violet-500/50 bg-violet-500/8 dark:border-violet-500/40 dark:bg-violet-500/10 shadow-xs",
    dot: "bg-violet-500 dark:bg-violet-400",
    iconText: "text-violet-600 dark:text-violet-400",
    btn: "bg-violet-600 hover:bg-violet-500 dark:bg-violet-500 dark:hover:bg-violet-400 text-white font-semibold shadow-lg shadow-violet-500/20",
  },
};

export function SafariAppPageView({ app }: SafariAppPageViewProps) {
  const hasIos = Boolean(app.screenshotsIos && app.screenshotsIos.length > 0);
  const hasIpad = Boolean(app.screenshotsIpad && app.screenshotsIpad.length > 0);
  const hasMac = Boolean(app.screenshotsMac && app.screenshotsMac.length > 0);

  // Standardize default platform across all Safari Extension pages to iOS first
  const initialPlatform: "ios" | "ipad" | "mac" = hasIos
    ? "ios"
    : hasIpad
    ? "ipad"
    : "mac";

  const [platform, setPlatform] = useState<"ios" | "ipad" | "mac">(initialPlatform);
  const [activeIndex, setActiveIndex] = useState(0);

  const currentScreenshots =
    platform === "ios"
      ? app.screenshotsIos || []
      : platform === "ipad"
      ? app.screenshotsIpad || []
      : app.screenshotsMac || [];

  const safeIndex = activeIndex < currentScreenshots.length ? activeIndex : 0;
  const activeShot = currentScreenshots[safeIndex] || currentScreenshots[0];
  const theme = accentStyles[app.accentColor] || accentStyles.indigo;

  const handlePlatformChange = (next: "ios" | "ipad" | "mac") => {
    setPlatform(next);
    setActiveIndex(0);
  };

  return (
    <div className="min-h-screen pt-28 pb-24 relative overflow-hidden">
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
            includeJsonLd={false}
          />
        </div>

        {/* Hero Header */}
        <div className="rounded-3xl border border-zinc-200/90 dark:border-white/10 bg-white/95 dark:bg-zinc-900/40 backdrop-blur-xl p-8 md:p-12 mb-16 relative overflow-hidden shadow-sm dark:shadow-none">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center gap-2.5">
                <Badge className={theme.badge}>
                  Live on Apple App Store • v{app.version}
                </Badge>
                <Badge variant="outline">{app.platform}</Badge>
                <Badge variant="success">100% Free • Zero Telemetry</Badge>
              </div>

              <div className="flex items-center gap-5">
                <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/15 shadow-xl shrink-0 bg-zinc-100 dark:bg-zinc-950">
                  <Image
                    src={app.icon}
                    alt={`${app.name} App Icon`}
                    fill
                    className="object-cover"
                    sizes="96px"
                    priority
                  />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
                    {app.name}
                  </h1>
                  <p
                    className={`mt-1.5 text-lg sm:text-xl font-semibold bg-gradient-to-r ${theme.text} bg-clip-text text-transparent`}
                  >
                    {app.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
                {app.fullDescription}
              </p>

              {/* CTA Row */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={app.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2.5 rounded-xl px-6 py-3.5 text-sm transition-all ${theme.btn}`}
                >
                  <ExternalLink className="h-4 w-4" />
                  Download on the App Store
                </a>
                <Link href="/suggestions">
                  <Button variant="secondary" size="lg" className="gap-2">
                    <Sparkles className="h-4 w-4" />
                    Request a Feature
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Key Guarantees Card */}
            <div className="lg:col-span-4 rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-zinc-50/90 dark:bg-zinc-950/70 p-6 space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Cogify Architecture Standard
              </div>
              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <Lock className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-zinc-900 dark:text-white">
                      100% On-Device Execution
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">
                      Zero external servers, zero analytics SDKs, and zero browsing history collection.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="h-5 w-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-zinc-900 dark:text-white">
                      Free Forever for Individuals
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">
                      No subscriptions, no in-app paywalls, no ads, and no account sign-up required.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Cpu className="h-5 w-5 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-zinc-900 dark:text-white">
                      Native Safari Web Extension
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">
                      Built specifically for Apple WebKit across {app.platform}.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-3 border-t border-zinc-200 dark:border-white/10 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                <span>App Store ID: {app.appStoreId}</span>
                <a
                  href={app.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-900 dark:text-white font-medium hover:underline inline-flex items-center gap-1"
                >
                  View Store Listing <ArrowUpRight className="h-3.5 w-3.5" />
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
                <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">
                  Interactive Product Tour
                </h2>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-1">
                  Explore how {app.shortName} works natively inside Safari.
                </p>
              </div>

              {/* Platform Switcher — Standardized iOS First */}
              <div className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-zinc-900/80 p-1.5 self-start">
                {hasIos && (
                  <button
                    onClick={() => handlePlatformChange("ios")}
                    className={`inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-semibold transition-all cursor-pointer ${
                      platform === "ios"
                        ? theme.activeTab
                        : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                    }`}
                  >
                    <Smartphone className="h-3.5 w-3.5" />
                    iPhone (iOS)
                  </button>
                )}
                {hasIpad && (
                  <button
                    onClick={() => handlePlatformChange("ipad")}
                    className={`inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-semibold transition-all cursor-pointer ${
                      platform === "ipad"
                        ? theme.activeTab
                        : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                    }`}
                  >
                    <Tablet className="h-3.5 w-3.5" />
                    iPadOS
                  </button>
                )}
                {hasMac && (
                  <button
                    onClick={() => handlePlatformChange("mac")}
                    className={`inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-semibold transition-all cursor-pointer ${
                      platform === "mac"
                        ? theme.activeTab
                        : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                    }`}
                  >
                    <Monitor className="h-3.5 w-3.5" />
                    macOS
                  </button>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Step Selector Sidebar */}
              <div className="lg:col-span-5 space-y-3">
                {currentScreenshots.map((shot, idx) => {
                  const isActive = idx === safeIndex;
                  return (
                    <button
                      key={shot.id}
                      onClick={() => setActiveIndex(idx)}
                      className={`w-full text-left rounded-2xl border p-5 transition-all cursor-pointer ${
                        isActive
                          ? theme.borderActive
                          : "border-zinc-200/80 dark:border-white/10 bg-white dark:bg-zinc-900/30 hover:bg-zinc-50 dark:hover:bg-zinc-900/60"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                          0{idx + 1} • {shot.tag}
                        </span>
                        {isActive && (
                          <span className={`h-2 w-2 rounded-full ${theme.dot}`} />
                        )}
                      </div>
                      <div className="text-base font-bold text-zinc-900 dark:text-white">
                        {shot.title}
                      </div>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 line-clamp-2">
                        {shot.description}
                      </p>
                      {isActive && shot.highlights.length > 0 && (
                        <ul className="mt-3 pt-3 border-t border-zinc-200/80 dark:border-white/10 space-y-1.5">
                          {shot.highlights.map((h) => (
                            <li
                              key={h}
                              className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-200 font-medium"
                            >
                              <CheckCircle2
                                className={`h-3.5 w-3.5 shrink-0 ${theme.iconText}`}
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
              <div className="lg:col-span-7 rounded-3xl border border-zinc-200/90 dark:border-white/10 bg-zinc-100/80 dark:bg-zinc-950/80 p-6 sm:p-8 flex flex-col items-center justify-center min-h-[480px]">
                <div className="w-full flex flex-col items-center">
                  {platform === "ios" ? (
                    /* Uncropped iPhone Frame: exact 1206:2622 inner screen */
                    <div className="relative w-[275px] sm:w-[310px] rounded-[2.8rem] p-2.5 bg-zinc-950 border-4 border-zinc-800 shadow-2xl">
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-black/80 rounded-full z-20 pointer-events-none" />
                      <div className="relative w-full aspect-[1206/2622] rounded-[2.2rem] overflow-hidden bg-zinc-950">
                        <Image
                          src={activeShot.image}
                          alt={`${app.shortName} - ${activeShot.title}`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 280px, 320px"
                        />
                      </div>
                    </div>
                  ) : (
                    /* iPadOS / macOS Frame */
                    <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl border border-zinc-300 dark:border-white/10 shadow-2xl bg-zinc-950">
                      <Image
                        src={activeShot.image}
                        alt={`${app.shortName} - ${activeShot.title}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                      />
                    </div>
                  )}
                  <div className="mt-5 text-center">
                    <div className="text-sm font-bold text-zinc-900 dark:text-white">
                      {activeShot.title}
                    </div>
                    <div className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">
                      {activeShot.subtitle}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 6 Core Capabilities Grid */}
        <section className="mb-20">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">
              Engineered for Precision & Speed
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-1">
              Every feature in {app.shortName} runs locally on your Apple device with zero cloud dependencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {app.features.map((feat) => (
              <div
                key={feat.title}
                className="rounded-2xl border border-zinc-200/90 dark:border-white/10 bg-white dark:bg-zinc-900/30 p-6 hover:border-indigo-500/30 dark:hover:border-white/20 transition-all shadow-2xs dark:shadow-none"
              >
                <div className="inline-flex items-center rounded-full border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-white/[0.03] px-3 py-1 text-[11px] font-semibold text-zinc-700 dark:text-zinc-300 mb-4">
                  {feat.tag}
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                  {feat.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
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
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3">
                <Shield className="h-4 w-4" />
                Product Philosophy & Privacy
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                Built to Respect Your Device and Your Privacy.
              </h3>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
                {app.philosophy}
              </p>
            </div>

            <div className="pt-6 border-t border-zinc-200 dark:border-white/10">
              <a
                href={app.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 dark:text-white hover:underline"
              >
                Get {app.shortName} on App Store <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-3xl border border-zinc-200/90 dark:border-white/10 bg-white dark:bg-zinc-900/30 p-8 shadow-2xs dark:shadow-none">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">
              Technical Specifications
            </h3>
            <div className="divide-y divide-zinc-200 dark:divide-white/10">
              {app.specifications.map((spec) => (
                <div
                  key={spec.label}
                  className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                >
                  <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    {spec.label}
                  </span>
                  <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section + FAQPage JSON-LD */}
        <FaqSection
          badge={`${app.shortName} FAQ`}
          title={`Frequently Asked Questions About ${app.shortName}`}
          subtitle={`Technical architecture, Safari compatibility, and privacy answers for ${app.name}.`}
          faqs={[
            {
              q: `Is ${app.name} completely free on the Apple App Store?`,
              a: `Yes. ${app.name} (App Store ID ${app.appStoreId}) is 100% free for individuals across ${app.platform} with zero subscriptions, zero in-app purchases, and zero advertisements.`,
            },
            {
              q: `Does ${app.shortName} collect or transmit any of my Safari browsing history?`,
              a: `No. ${app.shortName} executes 100% locally inside Apple's native WebKit Safari Extension sandbox. It contains zero analytics SDKs, makes zero outbound network requests, and never reads or transmits your browsing history.`,
            },
            {
              q: `Which Apple devices and operating systems support ${app.shortName}?`,
              a: `${app.shortName} is a universal native Safari extension supporting ${app.platform}. Once installed from the Apple App Store, enable it in Settings > Apps > Safari > Extensions.`,
            },
          ]}
        />

        {/* E-E-A-T Author Attribution & Complete Ecosystem Cross-Linking */}
        <AuthorBio
          currentSlug={app.slug}
          contextLabel={`Safari WebKit Systems Engineering • v${app.version} Live on App Store`}
        />
      </Container>
    </div>
  );
}
