/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Globe, Sparkles, Check } from "lucide-react";
import { siteConfig } from "@/config/site";
import {
  AppleLogoIcon,
  AppStoreIcon,
  SafariIcon,
} from "@/components/ui/platform-icons";

export interface SisterAppReference {
  slug: string;
  name: string;
  shortName: string;
  badge: string;
  pillar: "mac" | "safari" | "web";
  headlineSans: string;
  headlineSerif: string;
  description: string;
  icon: string;
  screenshot: string;
  windowTitle: string;
  href: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  isDirectDownload?: boolean;
  isExternal?: boolean;
  stageGradient: string;
  pills: [string, string, string];
}

export const SISTER_APP_REFERENCES: SisterAppReference[] = [
  {
    slug: "helium",
    name: "Helium for macOS",
    shortName: "Helium",
    badge: "Helium app for macOS · v0.0.1",
    pillar: "mac",
    headlineSans: "Unlimited pooled cloud drive.",
    headlineSerif: "Zero bytes on your Mac.",
    description:
      "Meet Helium, your unified cloud drive at /Volumes/Helium in Finder. Pool unlimited Google Drive accounts into one local volume where 50 GB 4K films and disk images open in 0.8s while taking 0 B on your internal SSD.",
    icon: siteConfig.helium.icon,
    screenshot: "/brand/Helium/02-helium-hero-finder-zero-bytes.webp",
    windowTitle: "/Volumes/Helium — Google Drive Pool (0 B on disk)",
    href: "/helium",
    primaryCtaLabel: "Download for macOS",
    primaryCtaHref: "/Helium.dmg",
    isDirectDownload: true,
    stageGradient:
      "from-[#0EA5E9]/20 via-[#10B981]/15 to-[#0F172A] dark:from-[#0EA5E9]/25 dark:via-[#10B981]/15 dark:to-[#090D16]",
    pills: ["0 B on Mac SSD", "Multi-Google-Drive Pool", "AES-256-GCM Zero-Knowledge"],
  },
  {
    slug: "emdoc",
    name: "EmDoc for macOS",
    shortName: "EmDoc",
    badge: "EmDoc app for macOS · v1.1",
    pillar: "mac",
    headlineSans: "Edit, redact & compress PDFs.",
    headlineSerif: "In a 7.8 MB native app.",
    description:
      "Meet EmDoc, the 100% air-gapped native C++20 and AppKit PDF workstation. Merge, split, Bates stamp, permanently redact object streams, run Apple Vision OCR, and compress PDFs offline with ~45 MB RAM.",
    icon: "/brand/emdoc-icon-sm.webp",
    screenshot: "/brand/EmDoc_home.webp",
    windowTitle: "EmDoc PDF Workstation v1.1 — 7.8 MB Universal",
    href: "/emdoc",
    primaryCtaLabel: "Download for macOS",
    primaryCtaHref: siteConfig.emdoc.downloadUrl || siteConfig.emdoc.appStoreUrl,
    isDirectDownload: true,
    stageGradient:
      "from-[#6366F1]/20 via-[#8B5CF6]/15 to-[#0F172A] dark:from-[#6366F1]/25 dark:via-[#8B5CF6]/15 dark:to-[#090D16]",
    pills: ["7.8 MB Universal DMG", "~45 MB RAM Footprint", "100% Air-Gapped Offline"],
  },
  {
    slug: "klipora",
    name: "Klipora for macOS",
    shortName: "Klipora",
    badge: "Klipora app for macOS · v1.5",
    pillar: "mac",
    headlineSans: "Copy once.",
    headlineSerif: "Reuse anytime.",
    description:
      "Meet Klipora, the visual clipboard history & snippet studio for macOS. Switch between Split Inspector (⌘L), Bento Visual Board (⌘G), and Dev Scratchpad (⌘K) with Regex search, 11 dev transforms, and Vision OCR.",
    icon: siteConfig.klipora.icon,
    screenshot: siteConfig.klipora.screenshotsMac[0].image,
    windowTitle: "Klipora — Visual Bento Clipboard & Dev Scratchpad",
    href: "/klipora",
    primaryCtaLabel: "Download for macOS",
    primaryCtaHref: siteConfig.klipora.downloadUrl,
    isDirectDownload: true,
    stageGradient:
      "from-[#F59E0B]/20 via-[#EA580C]/15 to-[#0F172A] dark:from-[#F59E0B]/25 dark:via-[#EA580C]/15 dark:to-[#090D16]",
    pills: ["3.1 MB Native Binary", "3 Workspace Modes", "100% Offline SQLite WAL"],
  },
  {
    slug: "lumenview",
    name: "LumenView for macOS",
    shortName: "LumenView",
    badge: "LumenView app for macOS · v2.4",
    pillar: "mac",
    headlineSans: "Hardware monitor control.",
    headlineSerif: "DDC/CI, HiDPI & 240Hz.",
    description:
      "Meet LumenView, the native external display workstation for Apple Silicon. Control real hardware backlight brightness, contrast, and volume over I²C DDC/CI, unlock Retina HiDPI scaling, and spawn 60 FPS Virtual Displays.",
    icon: siteConfig.lumenview.icon,
    screenshot: siteConfig.lumenview.screenshotsMac[0].image,
    windowTitle: "LumenView — DDC/CI Hardware & HiDPI Display Studio",
    href: "/lumenview",
    primaryCtaLabel: "Download for macOS",
    primaryCtaHref: siteConfig.lumenview.downloadUrl,
    isDirectDownload: true,
    stageGradient:
      "from-[#38BDF8]/20 via-[#6366F1]/15 to-[#0F172A] dark:from-[#38BDF8]/25 dark:via-[#6366F1]/15 dark:to-[#090D16]",
    pills: ["Hardware I²C DDC/CI", "Retina HiDPI & 240Hz", "3D .cube LUT & PiP"],
  },
  {
    slug: "netguard",
    name: "NetGuard for macOS",
    shortName: "NetGuard",
    badge: "NetGuard app for macOS · v2.1",
    pillar: "mac",
    headlineSans: "Outbound network firewall.",
    headlineSerif: "Live 3D Earth traffic radar.",
    description:
      "Meet NetGuard, the user-space NetworkExtension firewall for macOS. Intercept silent outbound telemetry per app and domain, inspect live connections on a 60 FPS 3D Earth Globe, and enable 1-click Threat Shield blocklists.",
    icon: siteConfig.netguard.icon,
    screenshot: siteConfig.netguard.screenshotsMac[0].image,
    windowTitle: "NetGuard — 3D GeoIP Radar & Outbound Firewall",
    href: "/netguard",
    primaryCtaLabel: "Download for macOS",
    primaryCtaHref: siteConfig.netguard.downloadUrl,
    isDirectDownload: true,
    stageGradient:
      "from-[#06B6D4]/20 via-[#10B981]/15 to-[#0F172A] dark:from-[#06B6D4]/25 dark:via-[#10B981]/15 dark:to-[#090D16]",
    pills: ["3.8 MB Native DMG", "60 FPS 3D Earth Globe", "Offline GeoIP Database"],
  },
  {
    slug: "metricove",
    name: "Metricove for macOS",
    shortName: "Metricove",
    badge: "Metricove app for macOS · v2.0",
    pillar: "mac",
    headlineSans: "Apple Silicon telemetry.",
    headlineSerif: "Right in your menu bar.",
    description:
      "Meet Metricove, the 2.3 MB menu bar hardware monitor. Track P-Core & E-Core CPU clusters, Metal GPU utilization, memory pressure, disk IOPS, battery wattage, and SMC die temperatures with <0.2% CPU overhead.",
    icon: siteConfig.metricove.icon,
    screenshot: siteConfig.metricove.screenshotsMac[0].image,
    windowTitle: "Metricove — Apple Silicon P/E-Core & SMC Telemetry",
    href: "/metricove",
    primaryCtaLabel: "Download for macOS",
    primaryCtaHref: siteConfig.metricove.downloadUrl,
    isDirectDownload: true,
    stageGradient:
      "from-[#10B981]/20 via-[#059669]/15 to-[#0F172A] dark:from-[#10B981]/25 dark:via-[#059669]/15 dark:to-[#090D16]",
    pills: ["2.3 MB Native DMG", "< 0.2% CPU Overhead", "Direct Mach & SMC API"],
  },
  {
    slug: "show-free-space",
    name: "Show Free Space for macOS",
    shortName: "Show Free Space",
    badge: "Show Free Space for macOS · v2.2",
    pillar: "mac",
    headlineSans: "Sunburst & Treemap disk lens.",
    headlineSerif: "Reclaim gigabytes safely.",
    description:
      "Meet Show Free Space, the APFS storage visualizer and developer cache cleaner. Inspect drives with dual Sunburst & Treemap charts, clean Xcode/Docker/npm caches, find SHA-256 duplicates, and add 7 native macOS widgets.",
    icon: siteConfig.showFreeSpace.icon,
    screenshot: siteConfig.showFreeSpace.screenshotsMac[0].image,
    windowTitle: "Show Free Space — Dual Sunburst & Treemap APFS Lens",
    href: "/show-free-space",
    primaryCtaLabel: "Download for macOS",
    primaryCtaHref: siteConfig.showFreeSpace.downloadUrl,
    isDirectDownload: true,
    stageGradient:
      "from-[#A855F7]/20 via-[#6366F1]/15 to-[#0F172A] dark:from-[#A855F7]/25 dark:via-[#6366F1]/15 dark:to-[#090D16]",
    pills: ["Sunburst + Treemap", "7 WidgetKit Widgets", "Dev Cache & Dedup"],
  },
  {
    slug: "biodata",
    name: "Biodata Studio for Web",
    shortName: "Biodata Studio",
    badge: "Web Studio · biodata.cogify.me",
    pillar: "web",
    headlineSans: "242 cultural templates.",
    headlineSerif: "Print-ready A4 in 2 minutes.",
    description:
      "Meet Marriage Biodata Maker Studio, the client-side desktop publishing studio at biodata.cogify.me. Design across 242 templates and 9 languages with Vedic Kundali charts and export 300-DPI Vector PDF, Word (.docx) & PNG.",
    icon: siteConfig.biodata.icon,
    screenshot: siteConfig.biodata.previewImage,
    windowTitle: "biodata.cogify.me — 1:1 Live A4 Document Studio",
    href: "/biodata",
    primaryCtaLabel: "Open Web Studio",
    primaryCtaHref: siteConfig.biodata.webUrl,
    isExternal: true,
    stageGradient:
      "from-[#E11D48]/20 via-[#F59E0B]/15 to-[#0F172A] dark:from-[#E11D48]/25 dark:via-[#F59E0B]/15 dark:to-[#090D16]",
    pills: ["242 Cultural Templates", "PDF, Word & 3x PNG", "100% Browser-Local"],
  },
  {
    slug: "ssb",
    name: "SSB Studio for Web",
    shortName: "SSB Studio",
    badge: "Web Studio · ssb.cogify.me",
    pillar: "web",
    headlineSans: "Authentic DIPR test timers.",
    headlineSerif: "Master SSB Stage-2.",
    description:
      "Meet SSB Stage-2 Practice Studio at ssb.cogify.me. Train with exact selection board timers for TAT (30s+4m), WAT (15s/word + audio cues), SRT (60/30m), SDT, GTO 9-Task Hub, and 15 OLQ self-evaluation.",
    icon: siteConfig.ssb.icon,
    screenshot: siteConfig.ssb.previewImage,
    windowTitle: "ssb.cogify.me — Stage-2 Psychology & GTO Simulator",
    href: "/ssb",
    primaryCtaLabel: "Open Web Studio",
    primaryCtaHref: siteConfig.ssb.webUrl,
    isExternal: true,
    stageGradient:
      "from-[#10B981]/20 via-[#0EA5E9]/15 to-[#0F172A] dark:from-[#10B981]/25 dark:via-[#0EA5E9]/15 dark:to-[#090D16]",
    pills: ["98-Min Full Battery", "Exact DIPR Timers", "Offline PWA & PDF Export"],
  },
];

export const ALL_SHORT_APP_LINKS = [
  { slug: "helium", name: "Helium", tag: "Drive Pool", href: "/helium", icon: siteConfig.helium.icon, pillar: "Mac" },
  { slug: "emdoc", name: "EmDoc", tag: "PDF Suite", href: "/emdoc", icon: "/brand/emdoc-icon-sm.webp", pillar: "Mac" },
  { slug: "klipora", name: "Klipora", tag: "Clipboard", href: "/klipora", icon: siteConfig.klipora.icon, pillar: "Mac" },
  { slug: "lumenview", name: "LumenView", tag: "Display DDC", href: "/lumenview", icon: siteConfig.lumenview.icon, pillar: "Mac" },
  { slug: "netguard", name: "NetGuard", tag: "Firewall", href: "/netguard", icon: siteConfig.netguard.icon, pillar: "Mac" },
  { slug: "metricove", name: "Metricove", tag: "Menu Stats", href: "/metricove", icon: siteConfig.metricove.icon, pillar: "Mac" },
  { slug: "show-free-space", name: "ShowFreeSpace", tag: "Disk Map", href: "/show-free-space", icon: siteConfig.showFreeSpace.icon, pillar: "Mac" },
  { slug: "ad-blocker", name: "Ad Blocker", tag: "Safari Shield", href: "/ad-blocker", icon: siteConfig.adBlocker.icon, pillar: "Safari" },
  { slug: "readereasy", name: "ReaderEasy", tag: "Bionic Reader", href: "/readereasy", icon: siteConfig.readereasy.icon, pillar: "Safari" },
  { slug: "webclear", name: "WebClear", tag: "Site Cleaner", href: "/webclear", icon: siteConfig.webclear.icon, pillar: "Safari" },
  { slug: "weblenses", name: "WebLenses", tag: "Web Vitals", href: "/weblenses", icon: siteConfig.weblenses.icon, pillar: "Safari" },
  { slug: "element-hider", name: "Element Hider", tag: "DOM Zapper", href: "/element-hider", icon: "/brand/Element-Hider/icon-sm.webp", pillar: "Safari" },
  { slug: "invert", name: "Colour Invert", tag: "Dark Mode", href: "/invert", icon: "/brand/Invert/icon-sm.webp", pillar: "Safari" },
  { slug: "biodata", name: "Biodata Studio", tag: "242 Templates", href: "/biodata", icon: siteConfig.biodata.icon, pillar: "Web" },
  { slug: "ssb", name: "SSB Studio", tag: "DIPR Prep", href: "/ssb", icon: siteConfig.ssb.icon, pillar: "Web" },
];

interface OtherAppsShowcaseProps {
  currentSlug?: string;
  maxSpotlights?: number;
}

export function OtherAppsShowcase({
  currentSlug,
  maxSpotlights = 3,
}: OtherAppsShowcaseProps) {
  const spotlights = SISTER_APP_REFERENCES.filter(
    (app) => app.slug !== currentSlug
  ).slice(0, maxSpotlights);

  return (
    <section
      aria-labelledby="other-apps-heading"
      className="max-w-[980px] mx-auto px-5 sm:px-8 py-16 border-t border-black/[0.06] dark:border-white/[0.08]"
    >
      {/* Supaste-Style Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/[0.1] text-[12px] font-medium text-[#555] dark:text-[#a1a1aa] mb-3 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-[#006FFF]" aria-hidden="true" />
          <span>More apps from Cogify</span>
        </div>

        <h2
          id="other-apps-heading"
          className="text-3xl sm:text-5xl font-bold tracking-[-0.035em] leading-[1.08] text-[#111] dark:text-white"
        >
          Your Mac,{" "}
          <span className="font-display italic font-normal text-[#006FFF] dark:text-[#60A5FA]">
            beautifully equipped.
          </span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#555] dark:text-[#a1a1aa] leading-relaxed">
          Every Cogify app is engineered natively for Apple Silicon &amp; Safari with zero subscriptions, zero cloud accounts, and 0-byte telemetry.
        </p>
      </div>

      {/* Supaste-Style Stacked Sister App Reference Cards */}
      <div className="space-y-6">
        {spotlights.map((app) => (
          <article
            key={app.slug}
            className="rounded-[28px] bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/[0.1] p-6 sm:p-8 lg:p-10 shadow-[0_14px_40px_rgba(0,0,0,0.035)] transition-all hover:border-black/20 dark:hover:border-white/20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Supaste App Reference Copy & CTAs */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-[14px] overflow-hidden border border-black/[0.08] dark:border-white/15 bg-[#f5f5f5] dark:bg-[#0b0b0d] shrink-0 shadow-xs">
                    <Image
                      src={app.icon}
                      alt={`${app.name} icon`}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f5f5f5] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08] text-xs font-medium text-[#333] dark:text-[#d4d4d8]">
                    {app.pillar === "mac" && (
                      <AppleLogoIcon className="w-3.5 h-3.5 -mt-0.5" />
                    )}
                    {app.pillar === "safari" && (
                      <SafariIcon className="w-3.5 h-3.5" />
                    )}
                    {app.pillar === "web" && <Globe className="w-3.5 h-3.5" />}
                    <span>{app.badge}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-4xl font-bold tracking-[-0.035em] leading-[1.1] text-[#111] dark:text-white">
                    {app.headlineSans}
                    <br />
                    <span className="font-display italic font-normal text-[#006FFF] dark:text-[#60A5FA]">
                      {app.headlineSerif}
                    </span>
                  </h3>
                  <p className="mt-3 text-sm sm:text-[15px] text-[#555] dark:text-[#a1a1aa] leading-relaxed">
                    {app.description}
                  </p>
                </div>

                {/* 3 Micro-Trust Pills */}
                <div className="flex flex-wrap items-center gap-2">
                  {app.pills.map((pill) => (
                    <span
                      key={pill}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#f5f5f5] dark:bg-[#0b0b0d] border border-black/[0.06] dark:border-white/[0.08] text-[11px] font-medium text-[#444] dark:text-[#d4d4d8]"
                    >
                      <Check className="w-3 h-3 text-[#006FFF] dark:text-[#60A5FA]" />
                      <span>{pill}</span>
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  {app.isDirectDownload ? (
                    <a
                      href={app.primaryCtaHref}
                      download
                      className="helumi-pill text-xs sm:text-sm"
                    >
                      <AppleLogoIcon className="w-4 h-4 -mt-0.5" />
                      <span>{app.primaryCtaLabel}</span>
                    </a>
                  ) : app.isExternal ? (
                    <a
                      href={app.primaryCtaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="helumi-pill text-xs sm:text-sm"
                    >
                      <Globe className="w-4 h-4" />
                      <span>{app.primaryCtaLabel}</span>
                    </a>
                  ) : (
                    <a
                      href={app.primaryCtaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="helumi-pill text-xs sm:text-sm"
                    >
                      <AppStoreIcon className="w-4 h-4" />
                      <span>{app.primaryCtaLabel}</span>
                    </a>
                  )}

                  <Link
                    href={app.href}
                    className="helumi-pill-secondary text-xs sm:text-sm"
                  >
                    <span>Explore {app.shortName}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {app.pillar === "mac" && (
                  <div className="pt-2">
                    <a
                      href="https://www.trymacapps.com"
                      target="_blank"
                      rel="noopener"
                      className="inline-block hover:opacity-90 transition-opacity"
                    >
                      <img
                        src="https://www.trymacapps.com/badge.png"
                        alt="Featured on TryMacApps"
                        width="200"
                        height="67"
                      />
                    </a>
                  </div>
                )}
              </div>

              {/* Right Column: Scenic Framed App Window Preview */}
              <div className="lg:col-span-6">
                <Link
                  href={app.href}
                  className={`group block rounded-[22px] p-3 sm:p-4 bg-gradient-to-br ${app.stageGradient} border border-black/10 dark:border-white/10 shadow-lg overflow-hidden`}
                >
                  <div className="rounded-[14px] overflow-hidden bg-[#0b0b0d] border border-white/15 shadow-2xl">
                    <div className="h-7 px-3 bg-[#141417] border-b border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                      </div>
                      <span className="text-[10px] font-mono text-[#a1a1aa] truncate max-w-[240px]">
                        {app.windowTitle}
                      </span>
                      <span className="text-[10px] font-mono text-white/50">
                        {app.href}
                      </span>
                    </div>
                    <div className="relative w-full aspect-[16/10] bg-[#0b0b0d]">
                      <Image
                        src={app.screenshot}
                        alt={`${app.name} preview`}
                        fill
                        className="object-contain group-hover:scale-[1.015] transition-transform duration-300"
                        sizes="(max-width: 1024px) 100vw, 480px"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Compact Ecosystem Dock Strip (All 15 Short URLs) */}
      <div className="mt-10 rounded-[24px] bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/[0.1] p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#777] dark:text-[#888]">
              Complete 15-App Dock · Direct Short URLs
            </span>
            <h3 className="text-base sm:text-lg font-bold text-[#111] dark:text-white">
              Jump to any Cogify app
            </h3>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#006FFF] dark:text-[#60A5FA] hover:underline"
          >
            <span>View Full Product Catalog (/products)</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
          {ALL_SHORT_APP_LINKS.map((item) => {
            const isCurrent = item.slug === currentSlug;
            return (
              <Link
                key={item.slug}
                href={item.href}
                aria-current={isCurrent ? "page" : undefined}
                className={`group rounded-2xl p-2.5 border flex items-center gap-2.5 transition-all ${
                  isCurrent
                    ? "bg-[#111] text-white border-[#111] dark:bg-white dark:text-[#111] dark:border-white"
                    : "bg-[#f5f5f5]/80 dark:bg-[#0b0b0d] border-black/[0.06] dark:border-white/[0.08] hover:bg-white dark:hover:bg-[#1a1a1f] hover:border-black/20 dark:hover:border-white/20"
                }`}
              >
                <div className="relative w-9 h-9 rounded-[10px] overflow-hidden border border-black/10 dark:border-white/10 shrink-0 bg-white dark:bg-[#141417]">
                  <Image
                    src={item.icon}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="36px"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-semibold truncate">{item.name}</div>
                  <div
                    className={`text-[10px] font-mono truncate ${
                      isCurrent
                        ? "text-white/75 dark:text-black/70"
                        : "text-[#666] dark:text-[#a1a1aa]"
                    }`}
                  >
                    {item.href}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
