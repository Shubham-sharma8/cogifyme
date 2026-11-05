"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Cpu,
  ArrowRight,
  Building2,
  ExternalLink,
  Laptop,
  Smartphone,
  Compass,
  Download,
  Globe,
  CheckCircle2,
  Scale,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Spotlight } from "@/components/ui/spotlight";

type PillarType = "all" | "web" | "mac" | "safari";

interface StudioAppItem {
  id: string;
  name: string;
  shortName: string;
  pillar: "web" | "mac" | "safari";
  tagline: string;
  category: string;
  platforms: string;
  version: string;
  icon: string;
  previewImage: string;
  previewGallery?: string[];
  previewType: "mac" | "ios";
  href: string;
  appStoreUrl: string;
  downloadUrl?: string;
  appSize?: string;
  metrics: { label: string; value: string }[];
}

const STUDIO_APPS: StudioAppItem[] = [
  {
    id: "biodata",
    name: "Biodata Maker Studio",
    shortName: "Biodata Studio",
    pillar: "web",
    tagline:
      "242 Cultural Templates, 9 Languages, Vedic Kundali Chart & 300-DPI PDF / Word Export",
    category: "Real-Time Web Studio & PWA • biodata.cogify.me",
    platforms: "Web, macOS, iOS & Android",
    version: "v2.4",
    icon: siteConfig.biodata.icon,
    previewImage: "/brand/Biodata/studio-preview.webp",
    previewType: "mac",
    href: "/biodata",
    appStoreUrl: siteConfig.biodata.webUrl,
    metrics: [
      { label: "Templates", value: "242 Cultural" },
      { label: "Export", value: "PDF, DOCX & PNG" },
      { label: "Watermarks", value: "Zero (100% Free)" },
    ],
  },
  {
    id: "ssb",
    name: "SSB Practice Studio",
    shortName: "SSB Studio",
    pillar: "web",
    tagline: siteConfig.ssb.tagline,
    category: "Real-Time Web Studio & PWA • ssb.cogify.me",
    platforms: "Web, macOS, iOS & Android",
    version: "v2.0",
    icon: siteConfig.ssb.icon,
    previewImage: siteConfig.ssb.previewImage,
    previewType: "mac",
    href: "/ssb",
    appStoreUrl: siteConfig.ssb.webUrl,
    metrics: [
      { label: "Psych & GTO", value: "TAT, WAT, SRT, SDT" },
      { label: "Storage", value: "100% Local" },
      { label: "Price", value: "100% Free" },
    ],
  },
  {
    id: "emdoc",
    name: "EmDoc PDF Workstation",
    shortName: "EmDoc PDF",
    pillar: "mac",
    tagline:
      "5.0 MB Air-Gapped Native macOS PDF Editor, Merger, OCR & Compressor",
    category: "macOS Native App • Apple Silicon & Intel",
    platforms: "macOS 13.0+",
    version: "v1.0",
    icon: "/brand/emdoc-icon-sm.webp",
    previewImage: "/brand/EmDoc_home.png",
    previewType: "mac",
    href: "/products/emdoc",
    appStoreUrl: siteConfig.emdoc.appStoreUrl,
    downloadUrl: siteConfig.emdoc.downloadUrl,
    appSize: siteConfig.emdoc.appSize,
    metrics: [
      { label: "Binary Size", value: "5.0 MB" },
      { label: "RAM Footprint", value: "~45 MB" },
      { label: "Price", value: "100% Free" },
    ],
  },
  {
    id: "lumenview",
    name: "LumenView",
    shortName: "LumenView",
    pillar: "mac",
    tagline: siteConfig.lumenview.tagline,
    category: "macOS Display Utility • DDC/CI & HiDPI",
    platforms: siteConfig.lumenview.platform,
    version: `v${siteConfig.lumenview.version}`,
    icon: siteConfig.lumenview.icon,
    previewImage: siteConfig.lumenview.screenshotsMac[0].image,
    previewType: "mac",
    href: `/${siteConfig.lumenview.slug}`,
    appStoreUrl: siteConfig.lumenview.downloadUrl,
    downloadUrl: siteConfig.lumenview.downloadUrl,
    appSize: siteConfig.lumenview.appSize,
    metrics: [
      { label: "Installer Size", value: siteConfig.lumenview.appSize },
      { label: "DDC/CI Control", value: "Hardware Native" },
      { label: "Price", value: "100% Free" },
    ],
  },
  {
    id: "metricove",
    name: "Metricove",
    shortName: "Metricove",
    pillar: "mac",
    tagline: siteConfig.metricove.tagline,
    category: "macOS Menu Bar Telemetry • CPU, GPU & Battery",
    platforms: siteConfig.metricove.platform,
    version: `v${siteConfig.metricove.version}`,
    icon: siteConfig.metricove.icon,
    previewImage: siteConfig.metricove.screenshotsMac[0].image,
    previewType: "mac",
    href: `/${siteConfig.metricove.slug}`,
    appStoreUrl: siteConfig.metricove.downloadUrl,
    downloadUrl: siteConfig.metricove.downloadUrl,
    appSize: siteConfig.metricove.appSize,
    metrics: [
      { label: "Installer Size", value: siteConfig.metricove.appSize },
      { label: "Sensors", value: "SMC & IOKit" },
      { label: "Price", value: "100% Free" },
    ],
  },
  {
    id: "netguard",
    name: "NetGuard",
    shortName: "NetGuard",
    pillar: "mac",
    tagline: siteConfig.netguard.tagline,
    category: "macOS Outbound Firewall & Connection Monitor",
    platforms: siteConfig.netguard.platform,
    version: `v${siteConfig.netguard.version}`,
    icon: siteConfig.netguard.icon,
    previewImage: siteConfig.netguard.screenshotsMac[0].image,
    previewType: "mac",
    href: `/${siteConfig.netguard.slug}`,
    appStoreUrl: siteConfig.netguard.downloadUrl,
    downloadUrl: siteConfig.netguard.downloadUrl,
    appSize: siteConfig.netguard.appSize,
    metrics: [
      { label: "Installer Size", value: siteConfig.netguard.appSize },
      { label: "Firewall", value: "Per-App Rules" },
      { label: "Price", value: "100% Free" },
    ],
  },
  {
    id: "klipora",
    name: "Klipora",
    shortName: "Klipora",
    pillar: "mac",
    tagline: siteConfig.klipora.tagline,
    category: "macOS Clipboard History & Snippet Manager",
    platforms: siteConfig.klipora.platform,
    version: `v${siteConfig.klipora.version}`,
    icon: siteConfig.klipora.icon,
    previewImage: siteConfig.klipora.screenshotsMac[0].image,
    previewType: "mac",
    href: `/${siteConfig.klipora.slug}`,
    appStoreUrl: siteConfig.klipora.downloadUrl,
    downloadUrl: siteConfig.klipora.downloadUrl,
    appSize: siteConfig.klipora.appSize,
    metrics: [
      { label: "Installer Size", value: siteConfig.klipora.appSize },
      { label: "Storage", value: "100% Local" },
      { label: "Price", value: "100% Free" },
    ],
  },
  {
    id: "show-free-space",
    name: "Show free space",
    shortName: "Show free space",
    pillar: "mac",
    tagline: siteConfig.showFreeSpace.tagline,
    category: "macOS Visual Disk Analyzer & Space Cleaner",
    platforms: siteConfig.showFreeSpace.platform,
    version: `v${siteConfig.showFreeSpace.version}`,
    icon: siteConfig.showFreeSpace.icon,
    previewImage: siteConfig.showFreeSpace.screenshotsMac[0].image,
    previewType: "mac",
    href: `/${siteConfig.showFreeSpace.slug}`,
    appStoreUrl: siteConfig.showFreeSpace.downloadUrl,
    downloadUrl: siteConfig.showFreeSpace.downloadUrl,
    appSize: siteConfig.showFreeSpace.appSize,
    metrics: [
      { label: "Sunburst Map", value: "Multi-Threaded" },
      { label: "Cleanup", value: "Safe Trash" },
      { label: "Price", value: "100% Free" },
    ],
  },
  {
    id: "ad-blocker",
    name: "Ad Blocker - For Safari",
    shortName: "Ad Blocker",
    pillar: "safari",
    tagline: "75,000+ Native Content Blocking Rules & Anti-Tracking Shield",
    category: "Safari Extension • iOS, iPadOS & macOS",
    platforms: "iPhone, iPad & Mac",
    version: "v2.0",
    icon: siteConfig.adBlocker.icon,
    previewImage: "/brand/Ad-Blocker/mac/1.webp",
    previewType: "mac",
    href: "/ad-blocker",
    appStoreUrl: siteConfig.adBlocker.appStoreUrl,
    metrics: [
      { label: "Filter Rules", value: "75,000+ Native" },
      { label: "Browsing History Read", value: "0 Bytes" },
      { label: "Price", value: "100% Free" },
    ],
  },
  {
    id: "readereasy",
    name: "ReaderEasy",
    shortName: "ReaderEasy",
    pillar: "safari",
    tagline:
      "Distraction-Free Safari Reader, Bionic Reading, Dyslexia Fonts & Themes",
    category: "Safari Extension • iOS, iPadOS & macOS",
    platforms: "iPhone, iPad & Mac",
    version: "v1.1",
    icon: siteConfig.readereasy.icon,
    previewImage: "/brand/ReaderEasy/ipad/1.jpg",
    previewGallery: [
      "/brand/ReaderEasy/ipad/1.jpg",
      "/brand/ReaderEasy/ipad/2.jpg",
      "/brand/ReaderEasy/ipad/3.jpg",
    ],
    previewType: "ios",
    href: "/readereasy",
    appStoreUrl: siteConfig.readereasy.appStoreUrl,
    metrics: [
      { label: "Reading Modes", value: "Bionic & Focus" },
      { label: "Execution", value: "100% Local DOM" },
      { label: "Price", value: "100% Free" },
    ],
  },
  {
    id: "webclear",
    name: "WebClear",
    shortName: "WebClear",
    pillar: "safari",
    tagline:
      "One-Tap Cookie, Cache, LocalStorage Manager & Tracking URL Cleaner",
    category: "Safari Extension • iOS, iPadOS & macOS",
    platforms: "iPhone, iPad & Mac",
    version: "v1.0",
    icon: siteConfig.webclear.icon,
    previewImage: "/brand/WebClear/ipad/1.jpg",
    previewGallery: [
      "/brand/WebClear/ipad/1.jpg",
      "/brand/WebClear/ipad/2.jpg",
      "/brand/WebClear/ipad/3.jpg",
    ],
    previewType: "ios",
    href: "/webclear",
    appStoreUrl: siteConfig.webclear.appStoreUrl,
    metrics: [
      { label: "Storage Inspector", value: "Cookies & Cache" },
      { label: "URL Sanitizer", value: "Strips UTM/fbclid" },
      { label: "Price", value: "100% Free" },
    ],
  },
  {
    id: "weblenses",
    name: "WebLenses",
    shortName: "WebLenses",
    pillar: "safari",
    tagline:
      "6-in-1 Website Health, Core Web Vitals, SEO, Accessibility & Security Auditor",
    category: "Safari Developer Tool • iOS, iPadOS & macOS",
    platforms: "iPhone, iPad & Mac",
    version: "v1.0",
    icon: siteConfig.weblenses.icon,
    previewImage: "/brand/WebLenses/mac/1.jpg",
    previewType: "mac",
    href: "/weblenses",
    appStoreUrl: siteConfig.weblenses.appStoreUrl,
    metrics: [
      { label: "Audit Lenses", value: "6 Real-Time" },
      { label: "Web Vitals", value: "LCP, CLS & FCP" },
      { label: "Price", value: "100% Free" },
    ],
  },
  {
    id: "element-hider",
    name: "Element Hider",
    shortName: "Element Hider",
    pillar: "safari",
    tagline:
      "Point, Tap, and Permanently Hide Any Distracting Webpage Element in Safari",
    category: "Safari Extension • iOS, iPadOS & macOS",
    platforms: "iPhone, iPad & Mac",
    version: "v1.0",
    icon: "/brand/Element-Hider/icon-sm.webp",
    previewImage: "/brand/Element-Hider/Working_Mac.png",
    previewType: "mac",
    href: "/element-hider",
    appStoreUrl: siteConfig.elementHider.appStoreUrl,
    metrics: [
      { label: "Selection", value: "Visual Point & Tap" },
      { label: "Persistence", value: "Per-Site Rules" },
      { label: "Price", value: "100% Free" },
    ],
  },
  {
    id: "invert",
    name: "Colour Invert",
    shortName: "Colour Invert",
    pillar: "safari",
    tagline:
      "Smart Per-Site Dark Mode & Colour Inversion with Media Shield for Safari",
    category: "Safari Extension • iOS, iPadOS & macOS",
    platforms: "iPhone, iPad & Mac",
    version: "v1.0",
    icon: "/brand/Invert/icon-sm.webp",
    previewImage: "/brand/Invert/Mac/in_Safari.png",
    previewType: "mac",
    href: "/invert",
    appStoreUrl: siteConfig.invert.appStoreUrl,
    metrics: [
      { label: "Image Protection", value: "Media Shield" },
      { label: "Telemetry", value: "Zero Bytes" },
      { label: "Price", value: "100% Free" },
    ],
  },
];

const PILLAR_TABS: { id: PillarType; label: string; count: number }[] = [
  { id: "all", label: "All Ecosystem", count: 14 },
  { id: "web", label: "Real-Time Web Studios", count: 2 },
  { id: "mac", label: "macOS Workstations (.DMG)", count: 6 },
  { id: "safari", label: "Safari Extensions (iOS/Mac)", count: 6 },
];

export const HeroSection = () => {
  const [activePillar, setActivePillar] = useState<PillarType>("all");
  const [activeAppId, setActiveAppId] = useState<string>("biodata");

  const visibleDockApps =
    activePillar === "all"
      ? STUDIO_APPS
      : STUDIO_APPS.filter((a) => a.pillar === activePillar);

  const activeApp =
    STUDIO_APPS.find((app) => app.id === activeAppId) || STUDIO_APPS[0];

  const handlePillarChange = (pillar: PillarType) => {
    setActivePillar(pillar);
    if (pillar !== "all") {
      const firstInPillar = STUDIO_APPS.find((a) => a.pillar === pillar);
      if (firstInPillar && activeApp.pillar !== pillar) {
        setActiveAppId(firstInPillar.id);
      }
    }
  };

  return (
    <section className="relative pt-28 sm:pt-32 pb-20 overflow-hidden">
      {/* Subtle Studio Spotlight */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="rgba(99, 102, 241, 0.16)"
      />

      {/* Precision Hardware Grid Backdrop */}
      <div
        className="absolute inset-0 bg-grid-white opacity-40 dark:opacity-100 pointer-events-none [mask-image:radial-gradient(ellipse_75%_55%_at_50%_20%,#000_40%,transparent_100%)]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Editorial Header */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Verified Hardware & Telemetry Badge */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-white/[0.04] border border-zinc-200/90 dark:border-white/[0.1] shadow-2xs mb-6">
            <span className="flex h-2 w-2 relative" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[11px] font-mono font-semibold text-zinc-800 dark:text-zinc-200 tracking-wide">
              14 Live Products • 0 Bytes Telemetry
            </span>
            <span className="text-zinc-300 dark:text-zinc-700" aria-hidden="true">
              |
            </span>
            <a
              href={siteConfig.appleDeveloperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1 font-medium"
            >
              <span>Apple Developer ID #9TKKPN6F59</span>
              <ExternalLink className="w-2.5 h-2.5" aria-hidden="true" />
            </a>
          </div>

          {/* Primary H1 — Server-Rendered with 100% Initial Visibility for Instant LCP & Googlebot Indexing */}
          <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-extrabold tracking-[-0.035em] text-zinc-950 dark:text-white leading-[1.05] text-balance">
            Real-Time Web Solutions &amp; Native Apps.{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              100% Free &amp; Private.
            </span>
          </h1>

          {/* Disciplined Editorial Subtitle */}
          <p className="mt-5 text-base sm:text-lg lg:text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto leading-relaxed font-normal text-pretty">
            <strong className="text-zinc-950 dark:text-white font-semibold">
              COGIFY
            </strong>{" "}
            engineers zero-telemetry client-side web studios—including{" "}
            <a
              href={siteConfig.biodata.webUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-900 dark:text-white font-semibold underline decoration-amber-500/70 underline-offset-4 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            >
              Marriage Biodata Maker (biodata.cogify.me)
            </a>{" "}
            and{" "}
            <a
              href={siteConfig.ssb.webUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-900 dark:text-white font-semibold underline decoration-emerald-500/70 underline-offset-4 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              SSB Stage-2 Practice Studio (ssb.cogify.me)
            </a>
            —alongside ultra-lightweight Swift &amp; C++20 apps for{" "}
            <strong className="text-zinc-900 dark:text-white font-semibold">
              macOS, iOS, iPadOS, and Safari
            </strong>
            . Zero ads, zero subscriptions, and zero cloud uploads.
          </p>

          {/* Disciplined Primary CTA Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/products"
              className="btn-tactile px-6 py-3.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-zinc-950 font-semibold text-sm shadow-lg shadow-zinc-950/15 dark:shadow-black/40 transition-colors inline-flex items-center gap-2"
            >
              <span>Explore All 14 Apps &amp; Web Studios</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>

            <Link
              href="/compare"
              className="btn-tactile px-5 py-3.5 rounded-xl bg-white hover:bg-zinc-50 text-zinc-900 dark:bg-white/[0.05] dark:hover:bg-white/[0.09] dark:text-white font-semibold text-sm border border-zinc-200/90 dark:border-white/[0.12] shadow-2xs transition-colors inline-flex items-center gap-2"
            >
              <Scale className="w-4 h-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
              <span>Compare vs. Paid Suites ($1,115+ Saved)</span>
            </Link>

            <Link
              href="/enterprise"
              className="btn-tactile px-4 py-3.5 rounded-xl bg-transparent hover:bg-zinc-100/80 dark:hover:bg-white/[0.05] text-zinc-700 dark:text-zinc-300 font-medium text-sm border border-transparent hover:border-zinc-200/80 dark:hover:border-white/[0.08] transition-colors inline-flex items-center gap-1.5"
            >
              <Building2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
              <span>Enterprise MDM</span>
            </Link>
          </div>
        </div>

        {/* 3-Pillar Ecosystem Quick-Launch Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-3.5 max-w-5xl mx-auto">
          {/* Pillar 1: Biodata Maker Studio */}
          <div className="studio-card rounded-2xl p-4 flex items-center justify-between gap-3.5">
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-zinc-200 dark:border-white/10 shrink-0 bg-zinc-100 dark:bg-zinc-800">
                <Image
                  src={siteConfig.biodata.icon}
                  alt="Biodata Maker Studio icon"
                  fill
                  className="object-cover"
                  sizes="44px"
                />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <Link
                    href="/biodata"
                    className="text-xs font-bold text-zinc-950 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 truncate"
                  >
                    Biodata Maker Studio
                  </Link>
                  <span className="text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded bg-amber-500/12 text-amber-700 dark:text-amber-300 border border-amber-500/20">
                    WEB
                  </span>
                </div>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 truncate mt-0.5">
                  242 templates • 9 scripts • 300-DPI PDF/DOCX
                </p>
              </div>
            </div>
            <a
              href={siteConfig.biodata.webUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile shrink-0 px-3 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs inline-flex items-center gap-1 shadow-xs"
            >
              <span>Launch</span>
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
          </div>

          {/* Pillar 2: SSB Practice Studio */}
          <div className="studio-card rounded-2xl p-4 flex items-center justify-between gap-3.5">
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-zinc-200 dark:border-white/10 shrink-0 bg-zinc-100 dark:bg-zinc-800">
                <Image
                  src={siteConfig.ssb.icon}
                  alt="SSB Practice Studio icon"
                  fill
                  className="object-cover"
                  sizes="44px"
                />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <Link
                    href="/ssb"
                    className="text-xs font-bold text-zinc-950 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 truncate"
                  >
                    SSB Practice Studio
                  </Link>
                  <span className="text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded bg-emerald-500/12 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                    WEB
                  </span>
                </div>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 truncate mt-0.5">
                  TAT, WAT, SRT, SDT, GTO &amp; IO Simulator
                </p>
              </div>
            </div>
            <a
              href={siteConfig.ssb.webUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile shrink-0 px-3 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs inline-flex items-center gap-1 shadow-xs"
            >
              <span>Launch</span>
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
          </div>

          {/* Pillar 3: Native macOS & Safari Suite */}
          <div className="studio-card rounded-2xl p-4 flex items-center justify-between gap-3.5">
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-zinc-200 dark:border-white/10 shrink-0 bg-zinc-100 dark:bg-zinc-800">
                <Image
                  src="/brand/emdoc-icon-sm.webp"
                  alt="Native macOS & Safari Suite icon"
                  fill
                  className="object-cover"
                  sizes="44px"
                />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <Link
                    href="/products"
                    className="text-xs font-bold text-zinc-950 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 truncate"
                  >
                    12 Native Apple Apps
                  </Link>
                  <span className="text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded bg-indigo-500/12 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20">
                    MAC + iOS
                  </span>
                </div>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 truncate mt-0.5">
                  6 notarized .DMGs + 6 Safari Extensions
                </p>
              </div>
            </div>
            <a
              href={siteConfig.appleDeveloperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile shrink-0 px-3 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-zinc-950 font-bold text-xs inline-flex items-center gap-1 shadow-xs"
            >
              <span>App Store</span>
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Interactive Multi-App Studio Stage */}
        <div className="mt-12 relative max-w-6xl mx-auto">
          {/* Pillar Filter Bar + App Selector Dock */}
          <div className="mb-5 space-y-3">
            {/* Pillar Category Filter */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-1">
              <div className="flex flex-wrap items-center gap-1.5">
                {PILLAR_TABS.map((tab) => {
                  const isActive = activePillar === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => handlePillarChange(tab.id)}
                      className={`btn-tactile px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer inline-flex items-center gap-1.5 ${
                        isActive
                          ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 shadow-xs"
                          : "bg-white/80 hover:bg-zinc-100 text-zinc-600 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] dark:text-zinc-400 border border-zinc-200/80 dark:border-white/[0.08]"
                      }`}
                    >
                      <span>{tab.label}</span>
                      <span
                        className={`text-[10px] font-mono px-1.5 py-0.2 rounded-md tabular-nums ${
                          isActive
                            ? "bg-white/20 text-white dark:bg-zinc-900/15 dark:text-zinc-900"
                            : "bg-zinc-100 dark:bg-white/[0.06] text-zinc-500 dark:text-zinc-400"
                        }`}
                      >
                        {tab.count}
                      </span>
                    </button>
                  );
                })}
              </div>

              <span className="hidden md:inline-flex items-center gap-1.5 text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                <CheckCircle2
                  className="w-3.5 h-3.5 text-emerald-500"
                  aria-hidden="true"
                />
                Select any application below to inspect live interface &amp; telemetry
              </span>
            </div>

            {/* Interactive App Dock Selector */}
            <div
              role="tablist"
              aria-label="Cogify Published Applications and Web Studios"
              className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 p-2 rounded-2xl bg-white/90 dark:bg-[#0b0e15]/90 border border-zinc-200/90 dark:border-white/[0.1] shadow-lg backdrop-blur-xl"
            >
              {visibleDockApps.map((app) => {
                const isSelected = app.id === activeApp.id;
                return (
                  <button
                    key={app.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveAppId(app.id)}
                    className={`btn-tactile flex items-center gap-2 px-2.5 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                      isSelected
                        ? "bg-indigo-600 text-white shadow-sm shadow-indigo-600/30"
                        : "bg-zinc-50/90 hover:bg-zinc-100 text-zinc-700 dark:bg-white/[0.03] dark:hover:bg-white/[0.08] dark:text-zinc-300 border border-zinc-200/70 dark:border-white/[0.06]"
                    }`}
                  >
                    <div className="relative w-5 h-5 rounded-md overflow-hidden shrink-0 border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900">
                      <Image
                        src={app.icon}
                        alt={`${app.name} application icon`}
                        fill
                        className="object-cover"
                        sizes="20px"
                      />
                    </div>
                    <span>{app.shortName}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Outer Pro Display Studio Frame */}
          <div className="rounded-3xl p-3 sm:p-5 bg-white/95 dark:bg-[#090c12]/90 border border-zinc-200/90 dark:border-white/[0.11] shadow-[0_24px_70px_-15px_rgba(15,23,42,0.12)] dark:shadow-[0_30px_90px_-15px_rgba(0,0,0,0.85)] backdrop-blur-xl">
            {/* All 14 App Info Bars Server-Rendered in DOM so Googlebot Crawls All Product Titles, Taglines & Links */}
            {STUDIO_APPS.map((app) => {
              const isSelected = app.id === activeApp.id;
              return (
                <div
                  key={app.id}
                  className={
                    isSelected
                      ? "flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 mb-4 border-b border-zinc-200/80 dark:border-white/[0.08] px-2"
                      : "hidden"
                  }
                >
                  <div className="flex items-center gap-3.5">
                    <div className="relative w-12 h-12 rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 shadow-xs shrink-0 bg-zinc-100 dark:bg-zinc-800">
                      <Image
                        src={app.icon}
                        alt={`${app.name} official icon`}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white tracking-tight text-balance">
                          {app.name}
                        </h2>
                        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-emerald-500/12 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 tabular-nums">
                          {app.pillar === "web"
                            ? `${app.version} • Live Web Studio`
                            : app.pillar === "mac"
                            ? `${app.version} • Notarized macOS DMG`
                            : `${app.version} • Free on App Store`}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-white/[0.06] text-zinc-600 dark:text-zinc-300 border border-zinc-200/80 dark:border-white/[0.08]">
                          {app.platforms}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-0.5 text-pretty">
                        {app.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                    {app.downloadUrl ? (
                      <a
                        href={app.downloadUrl}
                        download
                        className="btn-tactile px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs transition-colors flex items-center gap-1.5 shadow-xs tabular-nums"
                      >
                        <Download className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>
                          Direct Download (.DMG
                          {app.appSize ? ` • ${app.appSize}` : ""})
                        </span>
                      </a>
                    ) : (
                      <a
                        href={app.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-tactile px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs transition-colors flex items-center gap-1.5 shadow-xs"
                      >
                        <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>
                          {app.id === "biodata"
                            ? "Launch biodata.cogify.me"
                            : app.id === "ssb"
                            ? "Launch ssb.cogify.me"
                            : "Get Free on App Store"}
                        </span>
                      </a>
                    )}
                    <Link
                      href={app.href}
                      className="btn-tactile px-4 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200/80 text-zinc-900 dark:bg-white/[0.07] dark:hover:bg-white/[0.12] dark:text-white border border-zinc-200/80 dark:border-white/[0.1] font-semibold text-xs transition-colors flex items-center gap-1.5"
                    >
                      <span>{app.shortName} Specs</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              );
            })}

            {/* Hardware Screenshot Window Container */}
            <div className="rounded-2xl overflow-hidden border border-zinc-200/90 dark:border-white/[0.1] bg-[#06080d] shadow-2xl">
              {/* macOS Window Chrome Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#0c1018] border-b border-white/[0.08]">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-[11px] font-mono text-zinc-400 truncate">
                    {activeApp.name} — {activeApp.category}
                  </span>
                </div>
                <div className="hidden sm:flex items-center gap-4 tabular-nums">
                  {activeApp.metrics.map((m, i) => (
                    <div key={i} className="text-[11px] font-mono text-zinc-300">
                      <span className="text-zinc-500">{m.label}: </span>
                      <span className="text-emerald-400 font-semibold">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Active App Interface Display */}
              <div className="relative aspect-[16/10] w-full bg-[#05070b]">
                {activeApp.previewGallery &&
                activeApp.previewGallery.length > 0 ? (
                  <div className="w-full h-full grid grid-cols-3 gap-3 sm:gap-6 p-4 sm:p-8 items-center justify-items-center bg-gradient-to-b from-[#0b0f17] to-[#05070b]">
                    {activeApp.previewGallery.map((imgSrc, idx) => (
                      <div
                        key={imgSrc}
                        className="relative w-full h-full rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900"
                      >
                        <Image
                          src={imgSrc}
                          alt={`${activeApp.name} — Interface Preview ${idx + 1}`}
                          fill
                          priority={idx === 0}
                          className="object-contain object-center"
                          sizes="(max-width: 1280px) 33vw, 380px"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <Image
                    src={activeApp.previewImage}
                    alt={`${activeApp.name} — Real Interface Preview`}
                    fill
                    priority
                    className="object-contain object-center"
                    sizes="(max-width: 1280px) 100vw, 1150px"
                  />
                )}
              </div>
            </div>

            {/* Bottom Hardware Architecture Telemetry Strip */}
            <div className="mt-4 pt-3 border-t border-zinc-200/80 dark:border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-3 px-2 text-xs text-zinc-600 dark:text-zinc-400">
              <div className="flex items-center gap-2">
                <Globe
                  className="w-4 h-4 text-amber-500 shrink-0"
                  aria-hidden="true"
                />
                <span className="font-medium text-zinc-800 dark:text-zinc-200 truncate">
                  2 Client-Side Web Studios
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Laptop
                  className="w-4 h-4 text-indigo-500 shrink-0"
                  aria-hidden="true"
                />
                <span className="font-medium text-zinc-800 dark:text-zinc-200 truncate">
                  6 Notarized macOS .DMGs
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone
                  className="w-4 h-4 text-cyan-500 shrink-0"
                  aria-hidden="true"
                />
                <span className="font-medium text-zinc-800 dark:text-zinc-200 truncate">
                  6 Safari iOS/Mac Extensions
                </span>
              </div>
              <div className="flex items-center gap-2 sm:justify-end">
                <ShieldCheck
                  className="w-4 h-4 text-emerald-500 shrink-0"
                  aria-hidden="true"
                />
                <span className="font-mono text-[11px] text-zinc-600 dark:text-zinc-300 truncate">
                  100% On-Device Execution
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
