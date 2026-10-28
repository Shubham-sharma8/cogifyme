"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Cpu,
  ArrowRight,
  Gift,
  Building2,
  ExternalLink,
  Sparkles,
  Laptop,
  Smartphone,
  Compass,
  Download,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Spotlight } from "@/components/ui/spotlight";

interface StudioAppItem {
  id: string;
  name: string;
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
    id: "ad-blocker",
    name: "Ad Blocker - For Safari",
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
    id: "biodata",
    name: "Biodata Maker Studio",
    tagline: "242 Cultural Templates, 9 Languages, Vedic Kundali Chart & 300-DPI PDF / Word Export",
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
    tagline: "5.0 MB Air-Gapped Native macOS PDF Editor, Merger, OCR & Compressor",
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
    id: "readereasy",
    name: "ReaderEasy",
    tagline: "Distraction-Free Safari Reader, Bionic Reading, Dyslexia Fonts & Themes",
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
    tagline: "One-Tap Cookie, Cache, LocalStorage Manager & Tracking URL Cleaner",
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
    tagline: "6-in-1 Website Health, Core Web Vitals, SEO, Accessibility & Security Auditor",
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
    tagline: "Point, Tap, and Permanently Hide Any Distracting Webpage Element in Safari",
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
    tagline: "Smart Per-Site Dark Mode & Colour Inversion with Media Shield for Safari",
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

export const HeroSection = () => {
  const [activeAppId, setActiveAppId] = useState<string>("ad-blocker");
  const activeApp =
    STUDIO_APPS.find((app) => app.id === activeAppId) || STUDIO_APPS[0];

  return (
    <section className="relative min-h-dvh pt-32 pb-20 overflow-hidden flex flex-col justify-center">
      {/* Aceternity Spotlight Effect */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="rgba(99, 102, 241, 0.22)"
      />

      {/* Ambient radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Main Headline — Server-Rendered with 100% Initial Visibility for Instant LCP & Googlebot Indexing */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.08] text-balance">
            Real-Time Web Solutions &amp; Native Apps.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-600 dark:from-indigo-300 dark:via-indigo-200 dark:to-cyan-300">
              100% Free &amp; Private.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto leading-relaxed font-normal text-pretty">
            <strong className="text-zinc-900 dark:text-white font-semibold">
              COGIFY
            </strong>{" "}
            engineers{" "}
            <strong className="text-amber-600 dark:text-amber-400 font-semibold">
              real-time, zero-telemetry web studios
            </strong>{" "}
            (like{" "}
            <a
              href={siteConfig.biodata.webUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-amber-500/60 hover:text-amber-500 transition-colors font-semibold"
            >
              Marriage Biodata Maker at biodata.cogify.me
            </a>{" "}
            and{" "}
            <a
              href={siteConfig.ssb.webUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-emerald-500/60 hover:text-emerald-500 transition-colors font-semibold"
            >
              SSB Stage-2 Practice Studio at ssb.cogify.me
            </a>
            ) alongside ultra-lightweight native apps for{" "}
            <strong className="text-indigo-600 dark:text-indigo-300 font-semibold">
              macOS, iOS, iPadOS, and Safari
            </strong>
            . Every solution we ship is{" "}
            <strong className="text-emerald-600 dark:text-emerald-400 font-semibold">
              100% free with zero ads, zero subscriptions, and zero cloud tracking
            </strong>
            .
          </p>

          {/* Primary Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-3">
            <Link
              href="/products"
              className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/25 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              <span>Explore All 14 Apps &amp; Web Studios</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>

            <a
              href={siteConfig.biodata.webUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-colors flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
              <span>Biodata Maker (biodata.cogify.me)</span>
            </a>

            <a
              href={siteConfig.ssb.webUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-colors flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
              <span>SSB Studio (ssb.cogify.me)</span>
            </a>

            <a
              href={siteConfig.appleDeveloperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-colors flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
              <span>Apple App Store</span>
            </a>

            <Link
              href="/compare"
              className="px-5 py-3.5 rounded-xl bg-white hover:bg-zinc-100 text-zinc-900 font-bold text-sm border border-indigo-500/30 shadow-xs dark:bg-indigo-500/10 dark:hover:bg-indigo-500/20 dark:text-indigo-200 dark:border-indigo-400/30 transition-colors duration-200 flex items-center gap-2"
            >
              <span>Compare vs. Paid Apps ($1,115+ Saved)</span>
              <ArrowRight className="w-4 h-4 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
            </Link>

            <Link
              href="/enterprise"
              className="px-5 py-3.5 rounded-xl bg-white hover:bg-zinc-100 text-zinc-800 hover:text-zinc-950 font-semibold text-sm border border-zinc-200/90 shadow-xs dark:bg-white/[0.04] dark:hover:bg-white/[0.08] dark:text-zinc-200 dark:hover:text-white dark:border-white/10 transition-colors duration-200 flex items-center gap-2 group"
            >
              <Building2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
              <span>Enterprise Solutions</span>
            </Link>
          </div>

          {/* Studio Architecture Pill Strip */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto text-xs text-zinc-600 dark:text-zinc-400">
            <div className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/90 dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/10 shadow-2xs dark:shadow-none">
              <Gift className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" aria-hidden="true" />
              <span>Real-Time Web &amp; Native Apps</span>
            </div>
            <div className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/90 dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/10 shadow-2xs dark:shadow-none">
              <ShieldCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" aria-hidden="true" />
              <span>0 Bytes Telemetry Collected</span>
            </div>
            <div className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/90 dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/10 shadow-2xs dark:shadow-none">
              <Cpu className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" aria-hidden="true" />
              <span>Swift, C++20 &amp; Client Web</span>
            </div>
            <div className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/90 dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/10 shadow-2xs dark:shadow-none">
              <Compass className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" aria-hidden="true" />
              <span>Web, macOS, iOS &amp; iPadOS</span>
            </div>
          </div>
        </div>

        {/* Interactive Multi-App Studio Dock & Showcase Window */}
        <div className="mt-12 relative max-w-6xl mx-auto">
          {/* Interactive App Dock Selector */}
          <div className="mb-6">
            <div className="text-center text-[11px] font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-3">
              Select Any Published COGIFY App or Studio to Preview
            </div>
            <div
              role="tablist"
              aria-label="Cogify Published Applications and Web Studios"
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 p-2 rounded-2xl bg-white/90 dark:bg-zinc-900/80 border border-zinc-200/90 dark:border-white/10 shadow-lg backdrop-blur-xl max-w-fit mx-auto"
            >
              {STUDIO_APPS.map((app) => {
                const isSelected = app.id === activeApp.id;
                return (
                  <button
                    key={app.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveAppId(app.id)}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition-[background-color,color,transform] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                      isSelected
                        ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/25 scale-[1.02]"
                        : "bg-zinc-50 hover:bg-zinc-100 text-zinc-700 dark:bg-zinc-950/60 dark:hover:bg-zinc-800 dark:text-zinc-300 border border-zinc-200/70 dark:border-white/5"
                    }`}
                  >
                    <div className="relative w-6 h-6 rounded-md overflow-hidden shrink-0 border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900">
                      <Image
                        src={app.icon}
                        alt={`${app.name} application icon`}
                        fill
                        className="object-cover"
                        sizes="24px"
                      />
                    </div>
                    <span className="hidden sm:inline">{app.name.replace(" - For Safari", "")}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Outer Glass Frame */}
          <div className="rounded-3xl p-3 sm:p-5 bg-white/90 dark:bg-zinc-900/60 border border-zinc-200/90 dark:border-white/10 shadow-2xl shadow-zinc-900/10 dark:shadow-black/80 backdrop-blur-md">
            {/* All 13 App Info Bars Server-Rendered in DOM so Googlebot Crawls All Product Titles, Taglines & Links */}
            {STUDIO_APPS.map((app) => {
              const isSelected = app.id === activeApp.id;
              return (
                <div
                  key={app.id}
                  className={
                    isSelected
                      ? "flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 mb-4 border-b border-zinc-200/80 dark:border-white/10 px-2"
                      : "hidden"
                  }
                >
                  <div className="flex items-center gap-3.5">
                    <div className="relative w-12 h-12 rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 shadow-sm shrink-0 bg-zinc-100 dark:bg-zinc-800">
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
                        <h2 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white text-balance">
                          {app.name}
                        </h2>
                        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 tabular-nums">
                          {app.id === "biodata" || app.id === "ssb"
                            ? `${app.version} • Free Web Studio`
                            : `${app.version} • Free on App Store`}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-white/10">
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
                        className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs transition-colors flex items-center gap-1.5 shadow-sm tabular-nums"
                      >
                        <Download className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>
                          Direct Download (.DMG{app.appSize ? ` • ${app.appSize}` : ""})
                        </span>
                      </a>
                    ) : (
                      <a
                        href={app.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs transition-colors flex items-center gap-1.5 shadow-sm"
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
                      className="px-4 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 dark:bg-indigo-500/15 dark:hover:bg-indigo-500/25 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-500/30 font-semibold text-xs transition-colors flex items-center gap-1.5"
                    >
                      <span>{app.name} Overview</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              );
            })}

            {/* Screenshot Window Container */}
            <div className="rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-white/10 bg-zinc-950 shadow-xl">
              <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/95 border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-[11px] font-mono text-zinc-400">
                    {activeApp.name} — {activeApp.category}
                  </span>
                </div>
                <div className="hidden sm:flex items-center gap-4 tabular-nums">
                  {activeApp.metrics.map((m, i) => (
                    <div key={i} className="text-[11px] font-mono text-zinc-300">
                      <span className="text-zinc-400">{m.label}: </span>
                      <span className="text-emerald-400 font-semibold">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative aspect-[16/10] w-full bg-zinc-950">
                {activeApp.previewGallery && activeApp.previewGallery.length > 0 ? (
                  <div className="w-full h-full grid grid-cols-3 gap-3 sm:gap-6 p-4 sm:p-8 items-center justify-items-center bg-gradient-to-b from-zinc-900/60 to-zinc-950">
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

            {/* Bottom Platform Bar */}
            <div className="mt-4 pt-3 border-t border-zinc-200/80 dark:border-white/10 flex flex-wrap items-center justify-between gap-3 px-2 text-xs text-zinc-600 dark:text-zinc-400">
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center gap-1.5 font-medium text-zinc-800 dark:text-zinc-200">
                  <Laptop className="w-4 h-4 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                  macOS Universal
                </span>
                <span className="inline-flex items-center gap-1.5 font-medium text-zinc-800 dark:text-zinc-200">
                  <Smartphone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                  iOS &amp; iPadOS Native
                </span>
              </div>
              <span className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
                100% On-Device Execution • Zero Cloud Upload
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
