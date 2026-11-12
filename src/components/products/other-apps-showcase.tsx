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
    badge: "Helium for macOS · v0.0.3 · Open Source (MIT)",
    pillar: "mac",
    headlineSans: "Unlimited pooled cloud drive.",
    headlineSerif: "Zero bytes on your Mac.",
    description:
      "Meet Helium v0.0.3, our 100% open-source (MIT) native Swift 6.0 cloud drive at /Volumes/Helium in Finder with built-in GitHub Releases Auto-Updater. Pool unlimited Google Drive accounts + 25+ S3, R2, WebDAV, SFTP, and SMB presets with 5-Step Safe-Write Verification, Scheduled Add-Only Backups (⌘⇧K), and Time Travel (⌘⇧Y).",
    icon: siteConfig.helium.icon,
    screenshot: "/brand/Helium/02-helium-hero-finder-zero-bytes.webp",
    windowTitle: "/Volumes/Helium — Multi-Cloud & Google Drive Pool (0 B on disk)",
    href: "/helium",
    primaryCtaLabel: "Download for macOS (v0.0.3 · 8.4 MB)",
    primaryCtaHref: "/Helium.dmg",
    isDirectDownload: true,
    stageGradient:
      "from-[#0EA5E9]/20 via-[#10B981]/15 to-[#0F172A] dark:from-[#0EA5E9]/25 dark:via-[#10B981]/15 dark:to-[#090D16]",
    pills: ["Open Source (MIT)", "25+ Cloud & NAS Presets", "0 B on Mac SSD"],
  },
  {
    slug: "findy",
    name: "Findy for macOS",
    shortName: "Findy",
    badge: "Findy for macOS · v1.2 · Open Source (MIT)",
    pillar: "mac",
    headlineSans: "Plain-English file search.",
    headlineSerif: "Space Lens & Vision OCR.",
    description:
      "Meet Findy v1.2, our 4.5 MB open-source (MIT) native Swift & SwiftUI workspace. Type how you think ('pdfs this week over 1mb'), visualize disk space with Space Lens (⌘4), clean clutter safely via macOS Trash (⌘5), find SHA-256 + Vision duplicates (⌘6), group downloads by website, and extract text inside screenshots locally (⌘I).",
    icon: siteConfig.findy.icon,
    screenshot: "/brand/Findy/01-findy-home-overview.webp",
    windowTitle: "Findy v1.2 — Plain-English Search, Space Lens & Vision OCR",
    href: "/findy",
    primaryCtaLabel: "Download for macOS (v1.2 · 4.5 MB)",
    primaryCtaHref: "/Findy.dmg",
    isDirectDownload: true,
    stageGradient:
      "from-[#10B981]/20 via-[#F59E0B]/15 to-[#0F172A] dark:from-[#10B981]/25 dark:via-[#F59E0B]/15 dark:to-[#090D16]",
    pills: ["4.5 MB Open Source (MIT)", "Plain-English Chips (⌘K)", "Local Vision OCR & Space Lens"],
  },
  {
    slug: "taskyfy",
    name: "Taskyfy for macOS",
    shortName: "Taskyfy",
    badge: "Taskyfy for macOS · v2.0 · Open Source (MIT)",
    pillar: "mac",
    headlineSans: "Every metric on your Mac.",
    headlineSerif: "Clear in a second.",
    description:
      "Meet Taskyfy v2.0, our 3.2 MB open-source (MIT) native Swift telemetry studio & plain-English Activity Monitor. Groups helper processes under parent apps, explains 230+ macOS daemons in plain English with Safe-to-Quit verdicts, catches 15-min memory leaks, advises 7-day RAM sizing, scans listening TCP/UDP ports (:3000), and records 30 days of SQLite WAL history.",
    icon: siteConfig.taskyfy.icon,
    screenshot: "/brand/Taskyfy/01-taskyfy-overview-hero.webp",
    windowTitle: "Taskyfy v2.0 — Plain-English Activity Monitor & Telemetry Studio",
    href: "/taskyfy",
    primaryCtaLabel: "Download for macOS (v2.0 · 3.2 MB)",
    primaryCtaHref: "/Taskyfy.dmg",
    isDirectDownload: true,
    stageGradient:
      "from-[#16A34A]/20 via-[#111113]/15 to-[#0F172A] dark:from-[#16A34A]/25 dark:via-[#111113]/20 dark:to-[#090D16]",
    pills: ["3.2 MB Open Source (MIT)", "230+ Daemons Explained", "30-Day SQLite WAL & Port Radar"],
  },
  {
    slug: "wheelify",
    name: "Wheelify for macOS",
    shortName: "Wheelify",
    badge: "Wheelify for macOS · v2.0.0 · Open Source (MIT)",
    pillar: "mac",
    headlineSans: "16 instant macOS tools.",
    headlineSerif: "Right under your cursor.",
    description:
      "Meet Wheelify v2.0.0, our 1.9 MB open-source (MIT) native Swift & AppKit radial command workspace. Hold ⌥ Space or middle-click to flick toward 16 built-in utilities (Clipboard History, Scientific Calc, Live ECB FX, Frontier/Ollama AI, Window Snap, Color Picker, Timers) in <100 ms—or type math and currency conversions live inside the wheel.",
    icon: siteConfig.wheelify.icon,
    screenshot: "/images/wheelify/01-wheelify-hero-radial-workspace.webp",
    windowTitle: "Wheelify v2.0.0 — 16-Tool Radial Command Workspace & Inline Math",
    href: "/wheelify",
    primaryCtaLabel: "Download for macOS (v2.0.0 · 1.9 MB)",
    primaryCtaHref: "/Wheelify.dmg",
    isDirectDownload: true,
    stageGradient:
      "from-[#111113]/20 via-[#16A34A]/15 to-[#0F172A] dark:from-[#111113]/25 dark:via-[#16A34A]/20 dark:to-[#090D16]",
    pills: ["1.9 MB Open Source (MIT)", "16 Radial Tools (⌥ Space)", "Inline Math, ECB FX & Frontier AI"],
  },
  {
    slug: "screenify",
    name: "Screenify for macOS",
    shortName: "Screenify",
    badge: "Screenify for macOS · v1.12.0 · Open Source (MIT)",
    pillar: "mac",
    headlineSans: "Screen recordings that look directed.",
    headlineSerif: "Not just captured.",
    description:
      "Meet Screenify v1.12.0, our open-source (MIT) macOS screen recorder and studio video editor. Records display, camera, mic, and 240Hz cursor telemetry on separate tracks with automatic RK4 spring click-zooms, 100% local Whisper AI captions, neural mic denoising, a plain-English AI Smart Edit Assistant, and a content-protected invisible Teleprompter.",
    icon: siteConfig.screenify.icon,
    screenshot: "/screenify/02-studio-editor.png",
    windowTitle: "Screenify v1.12 — Multi-Track Studio Editor, 240Hz Auto-Zoom & Whisper AI",
    href: "/screenify",
    primaryCtaLabel: "Download for macOS (v1.12.0 · DMG)",
    primaryCtaHref:
      "https://github.com/Shubham-sharma8/screenify/releases/download/v1.12.0/Screenify.dmg",
    isDirectDownload: true,
    stageGradient:
      "from-[#6366F1]/20 via-[#111110]/15 to-[#0F172A] dark:from-[#6366F1]/25 dark:via-[#111110]/20 dark:to-[#090D16]",
    pills: ["240Hz Spring Auto-Zoom", "100% Local Whisper Captions", "Invisible Teleprompter & AI Edit"],
  },
  {
    slug: "wifyy",
    name: "Wifyy for macOS",
    shortName: "Wifyy",
    badge: "Wifyy for macOS · v1.0.0 · Open Source (MIT)",
    pillar: "mac",
    headlineSans: "4-hop Wi-Fi & call reliability engine.",
    headlineSerif: "Directly in your menu bar.",
    description:
      "Meet Wifyy v1.0.0, our open-source (MIT) macOS menu bar utility that isolates call lag across Mac radio, Wi-Fi RF airwaves, local router, and upstream ISP in real time. Featuring ITU-T Call MOS, 5-minute pre-call calendar checks, 1-click meeting join, and upload bufferbloat detection with 0 bytes of cloud telemetry.",
    icon: siteConfig.wifyy.icon,
    screenshot: "/images/wifyy/04-wifyy-studio-timeline.png",
    windowTitle: "Wifyy v1.0 — 4-Hop Network Fault Isolation, Call MOS & Subnet Radar",
    href: "/wifyy",
    primaryCtaLabel: "Download for macOS (v1.0.0 · DMG)",
    primaryCtaHref:
      "https://github.com/Shubham-sharma8/wifyy/releases/download/v1.0.0/Wifyy.dmg",
    isDirectDownload: true,
    stageGradient:
      "from-[#007AFF]/20 via-[#111110]/15 to-[#0F172A] dark:from-[#007AFF]/25 dark:via-[#111110]/20 dark:to-[#090D16]",
    pills: ["4-Hop Fault Isolation", "ITU-T 4.40 Call MOS", "Pre-Call Check & Auto-Shield"],
  },
  {
    slug: "ottie",
    name: "Ottie for macOS",
    shortName: "Ottie",
    badge: "Ottie for macOS · v1.0.0 · Native Companion",
    pillar: "mac",
    headlineSans: "The cutest white otter & robo companion.",
    headlineSerif: "Living on your Mac.",
    description:
      "Meet Ottie v1.0.0, a 23-channel spring-animated friend who lives on your macOS desktop, understands whether you're coding, watching YouTube, or chatting, dresses up in 54 costumes (including Cutest Robo-Ottie!), performs 93 cute animations, and drapes 7 calming full-screen walls for 20-20-20 eye rest, hydration, family calls, and stair walks.",
    icon: siteConfig.ottie.icon,
    screenshot: "/images/ottie/11-dressing-room-54-presets-robo.png",
    windowTitle: "Ottie v1.0 — 54 Costumes, Cutest Robo-Ottie, 93 Actions & 7 Break Walls",
    href: "/ottie",
    primaryCtaLabel: "Download for macOS (v1.0.0 · 2.4 MB)",
    primaryCtaHref: siteConfig.ottie.downloadUrl,
    isDirectDownload: true,
    stageGradient:
      "from-[#2E705E]/20 via-[#298AC7]/15 to-[#0F172A] dark:from-[#2E705E]/25 dark:via-[#298AC7]/20 dark:to-[#090D16]",
    pills: ["54 Costumes & Cutest Robo", "93 Spring Animations", "7 Full-Screen Break Walls"],
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
    badge: "Show Free Space for macOS · v1.1.0",
    pillar: "mac",
    headlineSans: "Sunburst & Treemap disk lens.",
    headlineSerif: "Reclaim gigabytes safely.",
    description:
      "Meet Show Free Space v1.1.0, the APFS storage visualizer and developer cache cleaner. Inspect drives with dual Sunburst & Treemap charts, clean Xcode/Docker/npm caches, find SHA-256 duplicates, and add 7 native macOS widgets.",
    icon: siteConfig.showFreeSpace.icon,
    screenshot: siteConfig.showFreeSpace.screenshotsMac[0].image,
    windowTitle: "Show Free Space v1.1.0 — Dual Sunburst & Treemap APFS Lens",
    href: "/show-free-space",
    primaryCtaLabel: "Download for macOS (v1.1.0)",
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
  {
    slug: "ad-blocker",
    name: "Ad Blocker for Safari",
    shortName: "Ad Blocker",
    badge: "Safari Extension · iOS & macOS",
    pillar: "safari",
    headlineSans: "Block 75,000+ trackers natively.",
    headlineSerif: "Zero Safari slowdown.",
    description:
      "Meet Ad Blocker for Safari, powered by Apple's native WebKit Content Blocker API. Blocks intrusive ads, YouTube pre-rolls, cookie banners, and fingerprinting scripts across iPhone, iPad, and Mac with 0 B of telemetry.",
    icon: siteConfig.adBlocker.icon,
    screenshot: siteConfig.adBlocker.screenshotsMac?.[0]?.image ?? siteConfig.adBlocker.icon,
    windowTitle: "Ad Blocker for Safari — Native WebKit Content Shield",
    href: "/ad-blocker",
    primaryCtaLabel: "Get on App Store",
    primaryCtaHref: siteConfig.adBlocker.appStoreUrl,
    stageGradient:
      "from-[#10B981]/20 via-[#059669]/15 to-[#0F172A] dark:from-[#10B981]/25 dark:via-[#059669]/15 dark:to-[#090D16]",
    pills: ["75,000+ Native Rules", "iOS, iPadOS & macOS", "Zero Browsing History Access"],
  },
  {
    slug: "readereasy",
    name: "ReaderEasy for Safari",
    shortName: "ReaderEasy",
    badge: "Safari Extension · iOS & macOS",
    pillar: "safari",
    headlineSans: "Bionic focus & distraction-free reading.",
    headlineSerif: "Inside Safari.",
    description:
      "Meet ReaderEasy for Safari. Transform cluttered web articles into a calm typographic sanctuary with Bionic fixation bolding, dyslexia-friendly fonts, warm sepia themes, and instant clutter removal.",
    icon: siteConfig.readereasy.icon,
    screenshot: siteConfig.readereasy.screenshotsMac?.[0]?.image ?? siteConfig.readereasy.icon,
    windowTitle: "ReaderEasy — Bionic Reading & Distraction-Free Safari Studio",
    href: "/readereasy",
    primaryCtaLabel: "Get on App Store",
    primaryCtaHref: siteConfig.readereasy.appStoreUrl,
    stageGradient:
      "from-[#F59E0B]/20 via-[#D97706]/15 to-[#0F172A] dark:from-[#F59E0B]/25 dark:via-[#D97706]/15 dark:to-[#090D16]",
    pills: ["Bionic Reading Mode", "Custom Sepia & Fonts", "1-Tap Article Clean"],
  },
  {
    slug: "webclear",
    name: "WebClear for Safari",
    shortName: "WebClear",
    badge: "Safari Extension · iOS & macOS",
    pillar: "safari",
    headlineSans: "Clear single-site cookies & cache.",
    headlineSerif: "Without logging out everywhere.",
    description:
      "Meet WebClear for Safari. Nuke cookies, LocalStorage, IndexedDB, and cached assets for only the active tab in one click—without losing your active logins on other websites.",
    icon: siteConfig.webclear.icon,
    screenshot: siteConfig.webclear.screenshotsMac?.[0]?.image ?? siteConfig.webclear.icon,
    windowTitle: "WebClear — Single-Site Cookie, Cache & Storage Cleaner",
    href: "/webclear",
    primaryCtaLabel: "Get on App Store",
    primaryCtaHref: siteConfig.webclear.appStoreUrl,
    stageGradient:
      "from-[#06B6D4]/20 via-[#0284C7]/15 to-[#0F172A] dark:from-[#06B6D4]/25 dark:via-[#0284C7]/15 dark:to-[#090D16]",
    pills: ["Single-Site Nuker", "Cookies + LocalStorage", "Preserve Other Logins"],
  },
  {
    slug: "weblenses",
    name: "WebLenses for Safari",
    shortName: "WebLenses",
    badge: "Safari Extension · iOS & macOS",
    pillar: "safari",
    headlineSans: "Live Core Web Vitals & SEO HUD.",
    headlineSerif: "Directly on any webpage.",
    description:
      "Meet WebLenses for Safari. Inspect LCP, INP, CLS, DOM nodes, heading hierarchy, OpenGraph tags, and accessibility contrast overlays live inside Safari on Mac, iPhone, and iPad.",
    icon: siteConfig.weblenses.icon,
    screenshot: siteConfig.weblenses.screenshotsMac?.[0]?.image ?? siteConfig.weblenses.icon,
    windowTitle: "WebLenses — Core Web Vitals, DOM & SEO Inspector",
    href: "/weblenses",
    primaryCtaLabel: "Get on App Store",
    primaryCtaHref: siteConfig.weblenses.appStoreUrl,
    stageGradient:
      "from-[#8B5CF6]/20 via-[#6366F1]/15 to-[#0F172A] dark:from-[#8B5CF6]/25 dark:via-[#6366F1]/15 dark:to-[#090D16]",
    pills: ["Live LCP, INP & CLS", "SEO & Meta Inspector", "Accessibility Overlays"],
  },
  {
    slug: "element-hider",
    name: "Element Hider for Safari",
    shortName: "Element Hider",
    badge: "Safari Extension · iOS & macOS",
    pillar: "safari",
    headlineSans: "Point, click, and zap page bloat.",
    headlineSerif: "Gone forever.",
    description:
      "Meet Element Hider for Safari. Visually select and permanently hide annoying sticky headers, newsletter popups, floating widgets, and paywall overlays on any website with persistent per-domain CSS rules.",
    icon: "/brand/Element-Hider/icon-sm.webp",
    screenshot: siteConfig.elementHider.screenshotsMac?.[0]?.image ?? "/brand/Element-Hider/icon-sm.webp",
    windowTitle: "Element Hider — Visual DOM Element Zapper for Safari",
    href: "/element-hider",
    primaryCtaLabel: "Get on App Store",
    primaryCtaHref: siteConfig.elementHider.appStoreUrl,
    stageGradient:
      "from-[#EC4899]/20 via-[#F43F5E]/15 to-[#0F172A] dark:from-[#EC4899]/25 dark:via-[#F43F5E]/15 dark:to-[#090D16]",
    pills: ["Visual Point & Zap", "Persistent Domain Rules", "Zero Page Reflow Lag"],
  },
  {
    slug: "invert",
    name: "Colour Invert for Safari",
    shortName: "Colour Invert",
    badge: "Safari Extension · iOS & macOS",
    pillar: "safari",
    headlineSans: "Smart OLED dark mode for every site.",
    headlineSerif: "Without breaking photos.",
    description:
      "Meet Colour Invert for Safari. Apply intelligent dark mode and contrast themes to blinding white websites while preserving images, videos, and SVGs in their natural colors.",
    icon: "/brand/Invert/icon-sm.webp",
    screenshot: siteConfig.invert.screenshotsMac?.[0]?.image ?? "/brand/Invert/icon-sm.webp",
    windowTitle: "Colour Invert — Smart Dark Mode & Media-Safe Contrast",
    href: "/invert",
    primaryCtaLabel: "Get on App Store",
    primaryCtaHref: siteConfig.invert.appStoreUrl,
    stageGradient:
      "from-[#3B82F6]/20 via-[#1D4ED8]/15 to-[#0F172A] dark:from-[#3B82F6]/25 dark:via-[#1D4ED8]/15 dark:to-[#090D16]",
    pills: ["Smart Media Preservation", "Per-Site Dark Rules", "OLED Eye Comfort"],
  },
];

export const RELATED_APPS_BY_SLUG: Record<string, string[]> = {
  // Desktop Companion & Wellness -> Radial Workspace, Display Control, Screen Studio
  ottie: ["wheelify", "lumenview", "screenify"],
  "meet-ottie": ["wheelify", "lumenview", "screenify"],
  // Network & Wi-Fi -> Outbound Firewall, Activity Monitor, Hardware Telemetry
  wifyy: ["netguard", "taskyfy", "metricove"],
  // Screen Recorder & Editor -> Radial Command Wheel, Display DDC/HiDPI, Clipboard Studio
  screenify: ["wheelify", "lumenview", "klipora"],
  // Radial Command Workspace -> Clipboard Studio, Plain-English File Search, Desktop Companion
  wheelify: ["klipora", "findy", "ottie"],
  // Activity Monitor & Process Tree -> Menu Bar Telemetry, Wi-Fi 4-Hop, Outbound Firewall
  taskyfy: ["metricove", "wifyy", "netguard"],
  // Plain-English File Search & Space Lens -> APFS Disk Visualizer, Cloud Drive Pool, PDF Workstation
  findy: ["show-free-space", "helium", "emdoc"],
  // Cloud Drive Pool -> Plain-English File Search, APFS Disk Visualizer, PDF Workstation
  helium: ["findy", "show-free-space", "emdoc"],
  // APFS Disk Visualizer -> Plain-English File Search, Cloud Drive Pool, Activity Monitor
  "show-free-space": ["findy", "helium", "taskyfy"],
  // PDF Workstation -> Plain-English File Search, Clipboard Studio, Biodata Print Studio
  emdoc: ["findy", "klipora", "biodata"],
  // Clipboard History Studio -> Radial Command Wheel, Plain-English File Search, PDF Workstation
  klipora: ["wheelify", "findy", "emdoc"],
  // Display DDC & HiDPI -> Screen Recorder Studio, Desktop Eye-Rest Companion, Menu Bar Telemetry
  lumenview: ["screenify", "ottie", "metricove"],
  // Outbound Firewall -> Wi-Fi 4-Hop Diagnostics, Activity Monitor & Port Radar, Safari Ad Blocker
  netguard: ["wifyy", "taskyfy", "ad-blocker"],
  // Menu Bar Hardware Telemetry -> Plain-English Activity Monitor, Wi-Fi 4-Hop, Display DDC
  metricove: ["taskyfy", "wifyy", "lumenview"],
  // Web Studios -> Document/PDF & Companion tools
  biodata: ["emdoc", "ssb", "findy"],
  ssb: ["biodata", "ottie", "emdoc"],
  // Safari Extensions -> Related Safari & Privacy tools
  "ad-blocker": ["element-hider", "webclear", "netguard"],
  readereasy: ["invert", "element-hider", "ad-blocker"],
  webclear: ["ad-blocker", "weblenses", "element-hider"],
  weblenses: ["webclear", "element-hider", "wifyy"],
  "element-hider": ["ad-blocker", "readereasy", "invert"],
  invert: ["readereasy", "element-hider", "lumenview"],
};

export const ALL_SHORT_APP_LINKS = [
  { slug: "helium", name: "Helium", tag: "Drive Pool", href: "/helium", icon: siteConfig.helium.icon, pillar: "Mac" },
  { slug: "findy", name: "Findy", tag: "File Search", href: "/findy", icon: siteConfig.findy.icon, pillar: "Mac" },
  { slug: "taskyfy", name: "Taskyfy", tag: "Process Tree", href: "/taskyfy", icon: siteConfig.taskyfy.icon, pillar: "Mac" },
  { slug: "wheelify", name: "Wheelify", tag: "Radial Wheel", href: "/wheelify", icon: siteConfig.wheelify.icon, pillar: "Mac" },
  { slug: "screenify", name: "Screenify", tag: "Screen Studio", href: "/screenify", icon: siteConfig.screenify.icon, pillar: "Mac" },
  { slug: "wifyy", name: "Wifyy", tag: "Wi-Fi 4-Hop", href: "/wifyy", icon: siteConfig.wifyy.icon, pillar: "Mac" },
  { slug: "ottie", name: "Ottie", tag: "Mac Companion", href: "/ottie", icon: siteConfig.ottie.icon, pillar: "Mac" },
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
  const relatedSlugs = currentSlug ? RELATED_APPS_BY_SLUG[currentSlug] : undefined;
  const spotlights = relatedSlugs
    ? [
        ...relatedSlugs
          .map((slug) => SISTER_APP_REFERENCES.find((app) => app.slug === slug))
          .filter((app): app is SisterAppReference => Boolean(app)),
        ...SISTER_APP_REFERENCES.filter(
          (app) => app.slug !== currentSlug && !relatedSlugs.includes(app.slug)
        ),
      ].slice(0, maxSpotlights)
    : SISTER_APP_REFERENCES.filter((app) => app.slug !== currentSlug).slice(
        0,
        maxSpotlights
      );

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

      {/* Compact Ecosystem Dock Strip (All 21 Short URLs) */}
      <div className="mt-10 rounded-[24px] bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/[0.1] p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#777] dark:text-[#888]">
              Complete 21-App Dock · Direct Short URLs
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
