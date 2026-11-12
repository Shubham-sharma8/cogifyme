import type { Metadata } from "next";
import { Globe, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { CatalogJsonLd } from "@/components/seo/jsonld-schemas";
import { AppleLogoIcon, AppStoreIcon } from "@/components/ui/platform-icons";
import {
  ProductsCatalogClient,
  type CatalogItem,
} from "@/components/products/products-catalog-client";
import { OtherAppsShowcase } from "@/components/products/other-apps-showcase";

export const metadata: Metadata = {
  title: "15 Free Native macOS, Safari Apps & Web Studios",
  description:
    "Explore COGIFY's 15 free, zero-telemetry apps and web studios: 7 native macOS DMG apps (including Helium & EmDoc), Biodata Maker (biodata.cogify.me), SSB Studio, and 6 Safari apps.",
  alternates: {
    canonical: `${siteConfig.url}/products`,
  },
  openGraph: {
    title: "15 Free Native macOS, Safari Apps & Web Studios | COGIFY",
    description:
      "Explore COGIFY's 15 free, zero-telemetry apps and web studios: 7 native macOS DMG apps (including Helium & EmDoc), Biodata Maker (biodata.cogify.me), SSB Studio, and 6 Safari apps.",
    url: `${siteConfig.url}/products`,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "COGIFY Product Ecosystem — 15 Native macOS, Safari Apps & Web Studios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "15 Free Native macOS, Safari Apps & Web Studios | COGIFY",
    description:
      "Explore COGIFY's 15 free, zero-telemetry apps and web studios: 7 native macOS DMG apps (including Helium & EmDoc), Biodata Maker (biodata.cogify.me), SSB Studio, and 6 Safari apps.",
    images: ["/og-image.png"],
  },
};

const liveCatalog: CatalogItem[] = [
  {
    name: siteConfig.helium.name,
    pillar: "mac",
    tagline: siteConfig.helium.tagline,
    description: siteConfig.helium.shortDescription,
    version: `v${siteConfig.helium.version}`,
    releaseDate: siteConfig.helium.releaseDate,
    platforms: siteConfig.helium.platform,
    category: "Flagship • Cloud Drive Pool",
    icon: siteConfig.helium.icon,
    previewImage: "/brand/Helium/02-helium-hero-finder-zero-bytes.webp",
    href: "/helium",
    downloadUrl: "/Helium.dmg",
    appStoreUrl: siteConfig.helium.downloadUrl,
    ctaLabel: `Download for macOS (${siteConfig.helium.appSize})`,
    badge: "Flagship • For Mac",
    highlights: [
      "Mounts /Volumes/Helium in Finder pooling unlimited Google Drives",
      "Zero bytes on disk (0 B on disk) via APFS sparse placeholders",
      "Whole-File Smart Placement, 256 MiB Striping & AES-256-GCM Encryption",
    ],
  },
  {
    name: siteConfig.findy.name,
    pillar: "mac",
    tagline: siteConfig.findy.tagline,
    description: siteConfig.findy.shortDescription,
    version: `v${siteConfig.findy.version}`,
    releaseDate: siteConfig.findy.releaseDate,
    platforms: siteConfig.findy.platform,
    category: "Open Source • Search & Space Lens",
    icon: siteConfig.findy.icon,
    previewImage: "/brand/Findy/01-findy-home-overview.webp",
    href: "/findy",
    downloadUrl: "/Findy.dmg",
    appStoreUrl: siteConfig.findy.downloadUrl,
    ctaLabel: `Download for macOS (${siteConfig.findy.appSize})`,
    badge: "Open Source • For Mac",
    highlights: [
      "Plain-English Search (⌘K) with live removable 'Understood as:' filter chips",
      "Space Lens Treemap (⌘4), Trash-Safe Clean Up (⌘5) & SHA-256 + Vision Duplicates (⌘6)",
      "'Downloaded From' website grouping, File Shelf (⌘7), Regex Rename & local Vision OCR (⌘I)",
    ],
  },
  {
    name: siteConfig.taskyfy.name,
    pillar: "mac",
    tagline: siteConfig.taskyfy.tagline,
    description: siteConfig.taskyfy.shortDescription,
    version: `v${siteConfig.taskyfy.version}`,
    releaseDate: siteConfig.taskyfy.releaseDate,
    platforms: siteConfig.taskyfy.platform,
    category: "Open Source • Telemetry & Process Studio",
    icon: siteConfig.taskyfy.icon,
    previewImage: "/brand/Taskyfy/01-taskyfy-overview-hero.webp",
    href: "/taskyfy",
    downloadUrl: "/Taskyfy.dmg",
    appStoreUrl: siteConfig.taskyfy.downloadUrl,
    ctaLabel: `Download for macOS (${siteConfig.taskyfy.appSize})`,
    badge: "Open Source • For Mac",
    highlights: [
      "Grouped App & Process Tree + 230+ macOS daemons explained in plain English",
      "15-Min Memory Leak Watch, 7-Day RAM Sizing Advisor & 1-Click Browser Relief",
      "Live Port Radar (:3000), 36+ AppleSMC Die Sensors & 30-Day SQLite WAL History",
    ],
  },
  {
    name: siteConfig.wheelify.name,
    pillar: "mac",
    tagline: siteConfig.wheelify.tagline,
    description: siteConfig.wheelify.shortDescription,
    version: `v${siteConfig.wheelify.version}`,
    releaseDate: siteConfig.wheelify.releaseDate,
    platforms: siteConfig.wheelify.platform,
    category: "Open Source • 16-Tool Radial Workspace",
    icon: siteConfig.wheelify.icon,
    previewImage: "/images/wheelify/01-wheelify-hero-radial-workspace.webp",
    href: "/wheelify",
    downloadUrl: "/Wheelify.dmg",
    appStoreUrl: siteConfig.wheelify.downloadUrl,
    ctaLabel: `Download for macOS (${siteConfig.wheelify.appSize})`,
    badge: "Open Source • For Mac",
    highlights: [
      "Hold ⌥ Space or middle-click for an O(1) 120 FPS radial wheel + outer sub-arcs",
      "Inline Command Bar for live scientific math (2^10 * 3.14) & ECB currency/unit conversion",
      "16 built-in utilities + Claude Opus 5.5, GPT-6 Astra, Gemini 4 Argon & offline Ollama",
    ],
  },
  {
    name: siteConfig.screenify.name,
    pillar: "mac",
    tagline: siteConfig.screenify.tagline,
    description: siteConfig.screenify.shortDescription,
    version: `v${siteConfig.screenify.version}`,
    releaseDate: siteConfig.screenify.releaseDate,
    platforms: siteConfig.screenify.platform,
    category: "Open Source • Screen Recorder & Studio Editor",
    icon: siteConfig.screenify.icon,
    previewImage: "/screenify/02-studio-editor.png",
    href: "/screenify",
    downloadUrl: siteConfig.screenify.downloadUrl,
    appStoreUrl: siteConfig.screenify.downloadUrl,
    ctaLabel: `Download for macOS (${siteConfig.screenify.appSize})`,
    badge: "Open Source • For Mac",
    highlights: [
      "Separate synchronized tracks with 240Hz RK4 spring cursor smoothing & automatic 2x–3.5x click zooms",
      "100% local Whisper AI captions in 20+ languages & DeepFilterNet neural mic noise suppression",
      "Plain-English AI Smart Edit Assistant + content-protected floating Teleprompter invisible to recordings",
    ],
  },
  {
    name: siteConfig.wifyy.name,
    pillar: "mac",
    tagline: siteConfig.wifyy.tagline,
    description: siteConfig.wifyy.shortDescription,
    version: `v${siteConfig.wifyy.version}`,
    releaseDate: siteConfig.wifyy.releaseDate,
    platforms: siteConfig.wifyy.platform,
    category: "Open Source • 4-Hop Wi-Fi & Call Engine",
    icon: siteConfig.wifyy.icon,
    previewImage: "/images/wifyy/04-wifyy-studio-timeline.png",
    href: "/wifyy",
    downloadUrl: siteConfig.wifyy.downloadUrl,
    appStoreUrl: siteConfig.wifyy.downloadUrl,
    ctaLabel: `Download for macOS (${siteConfig.wifyy.appSize})`,
    badge: "Open Source • For Mac",
    highlights: [
      "4-hop fault isolation distinguishing Mac radio, Wi-Fi RF airwaves, router, and upstream ISP",
      "Real-time ITU-T G.107 E-Model Call MOS (1.00–4.50) & 5-minute pre-call calendar verification",
      "Live upload bufferbloat culprit identification, Auto-Shield quiet mode, and subnet device radar",
    ],
  },
  {
    name: siteConfig.ottie.name,
    pillar: "mac",
    tagline: siteConfig.ottie.tagline,
    description: siteConfig.ottie.shortDescription,
    version: `v${siteConfig.ottie.version}`,
    releaseDate: siteConfig.ottie.releaseDate,
    platforms: siteConfig.ottie.platform,
    category: "Desktop Companion • 7 Mindful Break Walls",
    icon: siteConfig.ottie.icon,
    previewImage: "/images/ottie/11-dressing-room-54-presets-robo.png",
    href: "/ottie",
    downloadUrl: siteConfig.ottie.downloadUrl,
    appStoreUrl: siteConfig.ottie.downloadUrl,
    ctaLabel: `Download for macOS (${siteConfig.ottie.appSize})`,
    badge: "Native Swift • For Mac",
    highlights: [
      "54 mix-and-match costumes (including Cutest Robo-Ottie!) and 93 harmonic spring animations",
      "7 full-screen animated break walls: Peekaboo 20-20-20, Water Wave, Talk to Parents, Stairs & Zen",
      "Smart screen activity mirroring (codes when you code, watches YouTube with you) & polite deferral",
    ],
  },
  {
    name: "EmDoc PDF Workstation",
    pillar: "mac",
    tagline: siteConfig.emdoc.tagline,
    description: siteConfig.emdoc.shortDescription,
    version: `v${siteConfig.emdoc.version}`,
    releaseDate: siteConfig.emdoc.releaseDate,
    releasesHref: "/releases",
    compareHref: "/compare/emdoc",
    platforms: "macOS 13+ (Universal Binary)",
    category: "Productivity • PDF Suite",
    icon: "/brand/emdoc-icon-sm.webp",
    previewImage: "/brand/EmDoc_home.webp",
    href: "/emdoc",
    downloadUrl: siteConfig.emdoc.downloadUrl,
    appStoreUrl: siteConfig.emdoc.appStoreUrl,
    ctaLabel: `Download for macOS (${siteConfig.emdoc.appSize})`,
    badge: "For Mac",
    highlights: [
      `Compact ${siteConfig.emdoc.appSize} Universal binary (~45 MB RAM)`,
      "Visual Page Organizer, Vector Ink & Stamps",
      "100% Offline PDF Compression & Bates Numbering",
    ],
  },
  {
    name: siteConfig.lumenview.name,
    pillar: "mac",
    tagline: siteConfig.lumenview.tagline,
    description: siteConfig.lumenview.shortDescription,
    version: `v${siteConfig.lumenview.version}`,
    compareHref: "/compare/lumenview",
    platforms: siteConfig.lumenview.platform,
    category: `${siteConfig.lumenview.primaryCategory} • ${siteConfig.lumenview.secondaryCategory}`,
    icon: siteConfig.lumenview.icon,
    previewImage: siteConfig.lumenview.screenshotsMac[0].image,
    href: `/${siteConfig.lumenview.slug}`,
    downloadUrl: siteConfig.lumenview.downloadUrl,
    appStoreUrl: siteConfig.lumenview.downloadUrl,
    ctaLabel: `Download for macOS (${siteConfig.lumenview.appSize})`,
    badge: "For Mac",
    highlights: [
      "Native DDC/CI Hardware Brightness, Contrast & Volume Control",
      "Custom HiDPI Retina Scaling & Refresh Rate Switcher",
      "PIP Display Mirroring, Color Profiles & Layout Arrangement",
    ],
  },
  {
    name: siteConfig.metricove.name,
    pillar: "mac",
    tagline: siteConfig.metricove.tagline,
    description: siteConfig.metricove.shortDescription,
    version: `v${siteConfig.metricove.version}`,
    compareHref: "/compare/metricove",
    platforms: siteConfig.metricove.platform,
    category: `${siteConfig.metricove.primaryCategory} • ${siteConfig.metricove.secondaryCategory}`,
    icon: siteConfig.metricove.icon,
    previewImage: siteConfig.metricove.screenshotsMac[0].image,
    href: `/${siteConfig.metricove.slug}`,
    downloadUrl: siteConfig.metricove.downloadUrl,
    appStoreUrl: siteConfig.metricove.downloadUrl,
    ctaLabel: `Download for macOS (${siteConfig.metricove.appSize})`,
    badge: "For Mac",
    highlights: [
      "Per-Core Apple Silicon P/E CPU & Metal GPU Utilization",
      "Memory Pressure, Disk I/O, Network Bandwidth & Battery Health",
      "SMC Die Thermals & Fan RPM Controls in 1.5 MB",
    ],
  },
  {
    name: siteConfig.netguard.name,
    pillar: "mac",
    tagline: siteConfig.netguard.tagline,
    description: siteConfig.netguard.shortDescription,
    version: `v${siteConfig.netguard.version}`,
    compareHref: "/compare/netguard",
    platforms: siteConfig.netguard.platform,
    category: `${siteConfig.netguard.primaryCategory} • ${siteConfig.netguard.secondaryCategory}`,
    icon: siteConfig.netguard.icon,
    previewImage: siteConfig.netguard.screenshotsMac[0].image,
    href: `/${siteConfig.netguard.slug}`,
    downloadUrl: siteConfig.netguard.downloadUrl,
    appStoreUrl: siteConfig.netguard.downloadUrl,
    ctaLabel: `Download for macOS (${siteConfig.netguard.appSize})`,
    badge: "For Mac",
    highlights: [
      "Interactive Per-App Outbound Connection Approval Alerts",
      "Global GeoIP World Traffic Map & Endpoint Inspector",
      "Granular Firewall Rule Editor & Live Process Bandwidth",
    ],
  },
  {
    name: siteConfig.klipora.name,
    pillar: "mac",
    tagline: siteConfig.klipora.tagline,
    description: siteConfig.klipora.shortDescription,
    version: `v${siteConfig.klipora.version}`,
    compareHref: "/compare/klipora",
    platforms: siteConfig.klipora.platform,
    category: `${siteConfig.klipora.primaryCategory} • ${siteConfig.klipora.secondaryCategory}`,
    icon: siteConfig.klipora.icon,
    previewImage: siteConfig.klipora.screenshotsMac[0].image,
    href: `/${siteConfig.klipora.slug}`,
    downloadUrl: siteConfig.klipora.downloadUrl,
    appStoreUrl: siteConfig.klipora.downloadUrl,
    ctaLabel: `Download for macOS (${siteConfig.klipora.appSize})`,
    badge: "For Mac",
    highlights: [
      "Instant Global Hotkey Clipboard History Timeline",
      "Smart Content Filters (Text, Links, Images, Files & Color Swatches)",
      "Pinned Snippets, Paste Plain Text & Password Manager Exclusion",
    ],
  },
  {
    name: siteConfig.showFreeSpace.name,
    pillar: "mac",
    tagline: siteConfig.showFreeSpace.tagline,
    description: siteConfig.showFreeSpace.shortDescription,
    version: `v${siteConfig.showFreeSpace.version}`,
    compareHref: "/compare/show-free-space",
    platforms: siteConfig.showFreeSpace.platform,
    category: `${siteConfig.showFreeSpace.primaryCategory} • ${siteConfig.showFreeSpace.secondaryCategory}`,
    icon: siteConfig.showFreeSpace.icon,
    previewImage: siteConfig.showFreeSpace.screenshotsMac[0].image,
    href: `/${siteConfig.showFreeSpace.slug}`,
    downloadUrl: siteConfig.showFreeSpace.downloadUrl,
    appStoreUrl: siteConfig.showFreeSpace.downloadUrl,
    ctaLabel: `Download for macOS (${siteConfig.showFreeSpace.appSize})`,
    badge: "For Mac",
    highlights: [
      "Interactive Multi-Ring Sunburst Storage Map",
      "One-Click Staging & Safe Trash Cleanup",
      "Menu Bar Free Space Widget & Multi-Volume APFS Support",
    ],
  },
  {
    name: siteConfig.biodata.name,
    pillar: "web",
    tagline: siteConfig.biodata.tagline,
    description: siteConfig.biodata.shortDescription,
    version: `v${siteConfig.biodata.version}`,
    platforms: siteConfig.biodata.platform,
    category: "Web Studio • Document Design",
    icon: siteConfig.biodata.icon,
    previewImage: siteConfig.biodata.previewImage,
    href: "/biodata",
    appStoreUrl: siteConfig.biodata.webUrl,
    ctaLabel: "Open biodata.cogify.me",
    badge: "Web Studio",
    highlights: [
      "242 cultural, regional & modern templates across 9 languages",
      "300-DPI Vector PDF, Editable Word (.docx) & 3x Retina PNG exports",
      "Interactive Vedic Kundali chart builder & 100% client-side privacy",
    ],
  },
  {
    name: siteConfig.ssb.name,
    pillar: "web",
    tagline: siteConfig.ssb.tagline,
    description: siteConfig.ssb.shortDescription,
    version: `v${siteConfig.ssb.version}`,
    platforms: siteConfig.ssb.platform,
    category: "Web Studio • Defence Assessment",
    icon: siteConfig.ssb.icon,
    previewImage: siteConfig.ssb.previewImage,
    href: "/ssb",
    appStoreUrl: siteConfig.ssb.webUrl,
    ctaLabel: "Open ssb.cogify.me",
    badge: "Web Studio",
    highlights: [
      "Full timed Stage-2 Psychology Dossier: TAT, WAT (60 words/15s), SRT (60/30m) & SDT",
      "GTO Command Simulator: Group Discussion, GPE, Lecturette & Gorham Obstacles",
      "Interactive PIQ Form Builder, IO Rapid-Fire Drills & 15 OLQ Self-Evaluation",
    ],
  },
  {
    name: siteConfig.adBlocker.name,
    pillar: "safari",
    tagline: siteConfig.adBlocker.tagline,
    description: siteConfig.adBlocker.shortDescription,
    version: `v${siteConfig.adBlocker.version}`,
    compareHref: "/compare/safari",
    platforms: siteConfig.adBlocker.platform,
    category: "Utilities • Content Blocker",
    icon: siteConfig.adBlocker.icon,
    previewImage: siteConfig.adBlocker.screenshotsMac?.[0]?.image,
    href: "/ad-blocker",
    appStoreUrl: siteConfig.adBlocker.appStoreUrl,
    ctaLabel: "Download on the App Store",
    badge: "For iOS & Safari",
    highlights: [
      "Native WebKit Content Blocking API",
      "Blocks Banner/Video Ads, Trackers & Cookie Walls",
      "Cosmetic DOM Element Collapse with zero CPU drain",
    ],
  },
  {
    name: siteConfig.readereasy.name,
    pillar: "safari",
    tagline: siteConfig.readereasy.tagline,
    description: siteConfig.readereasy.shortDescription,
    version: `v${siteConfig.readereasy.version}`,
    compareHref: "/compare/safari",
    platforms: siteConfig.readereasy.platform,
    category: "Productivity • Reader Mode",
    icon: siteConfig.readereasy.icon,
    previewImage:
      siteConfig.readereasy.screenshotsIpad?.[0]?.image ||
      siteConfig.readereasy.screenshotsIos?.[0]?.image,
    href: "/readereasy",
    appStoreUrl: siteConfig.readereasy.appStoreUrl,
    ctaLabel: "Download on the App Store",
    badge: "For iOS & Safari",
    highlights: [
      "Paper, Sepia, Slate & True OLED Dark themes",
      "Bionic Focus Mode, Reading Ruler & Auto-Scroll",
      "Listen Aloud (TTS), Outline & Markdown Export",
    ],
  },
  {
    name: siteConfig.webclear.name,
    pillar: "safari",
    tagline: siteConfig.webclear.tagline,
    description: siteConfig.webclear.shortDescription,
    version: `v${siteConfig.webclear.version}`,
    compareHref: "/compare/safari",
    platforms: siteConfig.webclear.platform,
    category: "Utilities • Privacy & Storage",
    icon: siteConfig.webclear.icon,
    previewImage:
      siteConfig.webclear.screenshotsIpad?.[0]?.image ||
      siteConfig.webclear.screenshotsIos?.[0]?.image,
    href: "/webclear",
    appStoreUrl: siteConfig.webclear.appStoreUrl,
    ctaLabel: "Download on the App Store",
    badge: "For iOS & Safari",
    highlights: [
      "One-Tap Per-Site Reset without losing other logins",
      "Granular Cookie Manager & LocalStorage Explorer",
      "Smart Auto-Clean Rules & URL Tracker Parameter Stripper",
    ],
  },
  {
    name: siteConfig.weblenses.name,
    pillar: "safari",
    tagline: siteConfig.weblenses.tagline,
    description: siteConfig.weblenses.shortDescription,
    version: `v${siteConfig.weblenses.version}`,
    compareHref: "/compare/safari",
    platforms: siteConfig.weblenses.platform,
    category: "Developer Tools • Web Vitals",
    icon: siteConfig.weblenses.icon,
    previewImage: siteConfig.weblenses.screenshotsMac?.[0]?.image,
    href: "/weblenses",
    appStoreUrl: siteConfig.weblenses.appStoreUrl,
    ctaLabel: "Download on the App Store",
    badge: "For iOS & Safari",
    highlights: [
      "Instant 0–100 Website Health Score across 4 pillars",
      "Live Core Web Vitals (FCP, LCP, CLS, TBT)",
      "1st-Party vs 3rd-Party Resource & Security Audit",
    ],
  },
  {
    name: siteConfig.elementHider.name,
    pillar: "safari",
    tagline: siteConfig.elementHider.tagline,
    description: siteConfig.elementHider.shortDescription,
    version: `v${siteConfig.elementHider.version}`,
    compareHref: "/compare/safari",
    platforms: siteConfig.elementHider.platform,
    category: "Utilities • Web Customizer",
    icon: "/brand/Element-Hider/icon-sm.webp",
    previewImage: siteConfig.elementHider.screenshotsMac?.[0]?.image,
    href: "/element-hider",
    appStoreUrl: siteConfig.elementHider.appStoreUrl,
    ctaLabel: "Download on the App Store",
    badge: "For iOS & Safari",
    highlights: [
      "Point-and-tap visual element picker in Safari",
      "Hide sticky headers, sidebars, popups & clutter",
      "Session-only or permanent domain rules",
    ],
  },
  {
    name: siteConfig.invert.name,
    pillar: "safari",
    tagline: siteConfig.invert.tagline,
    description: siteConfig.invert.shortDescription,
    version: `v${siteConfig.invert.version}`,
    compareHref: "/compare/safari",
    platforms: siteConfig.invert.platform,
    category: "Utilities • Accessibility",
    icon: "/brand/Invert/icon-sm.webp",
    previewImage: siteConfig.invert.screenshotsMac?.[0]?.image,
    href: "/invert",
    appStoreUrl: siteConfig.invert.appStoreUrl,
    ctaLabel: "Download on the App Store",
    badge: "For iOS & Safari",
    highlights: [
      "Smart Invert, Soft Invert & Full High-Contrast modes",
      "Preserves photos, videos, YouTube & SVGs naturally",
      "Custom brightness, contrast & sepia warmth sliders",
    ],
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-28 sm:pt-32 pb-20 bg-[#FAFAFA] dark:bg-[#0B0B0D]">
      <CatalogJsonLd />

      <div className="max-w-[1040px] mx-auto px-5 sm:px-8">
        {/* Supaste.com-Style Centered Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] dark:border-white/[0.12] bg-white dark:bg-[#141417] px-3.5 py-1.5 text-[12px] font-medium text-[#52525B] dark:text-[#A1A1AA] shadow-xs mb-5">
            <AppleLogoIcon className="h-3.5 w-3.5 -mt-0.5 text-[#111] dark:text-white" />
            <span>Cogify Software Ecosystem</span>
            <span>·</span>
            <span className="font-semibold text-[#111] dark:text-white">
              15 Native Apps &amp; Web Studios
            </span>
          </div>

          <h1 className="text-[40px] sm:text-[56px] font-bold tracking-[-0.04em] text-[#09090B] dark:text-white leading-[1.05]">
            Every tool crafted to feel native.
            <span className="block font-display italic font-normal text-[#006FFF] dark:text-[#60A5FA] mt-1">
              Free forever. Zero telemetry.
            </span>
          </h1>

          <p className="mt-4 text-[15px] sm:text-[17px] text-[#52525B] dark:text-[#A1A1AA] leading-relaxed max-w-2xl mx-auto">
            7 native macOS workstations (led by Helium &amp; EmDoc), 6 Safari extensions for iPhone, iPad &amp; Mac, and 2 real-time web studios — built for speed and complete local privacy.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            <a
              href={siteConfig.appleDeveloperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="helumi-pill helumi-pill-dark !h-10 !px-5 !text-[13px] shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
            >
              <AppStoreIcon className="h-3.5 w-3.5" />
              <span>Apple App Store</span>
            </a>
            <a
              href={siteConfig.biodata.webUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="helumi-pill helumi-pill-light !h-10 !px-4 !text-[13px]"
            >
              <Globe className="h-3.5 w-3.5" />
              <span>biodata.cogify.me</span>
            </a>
            <a
              href={siteConfig.ssb.webUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="helumi-pill helumi-pill-light !h-10 !px-4 !text-[13px]"
            >
              <Globe className="h-3.5 w-3.5" />
              <span>ssb.cogify.me</span>
            </a>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[12px] font-medium text-[#52525B] dark:text-[#A1A1AA]">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#10B981]" />
              100% Free Forever
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#10B981]" />
              Apple Developer ID Signed (9TKKPN6F59)
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#10B981]" />
              Short Direct URLs
            </span>
          </div>
        </div>

        {/* Filterable 15-Product Catalog */}
        <ProductsCatalogClient items={liveCatalog} />

        {/* Supaste-Style Featured Sister App Spotlights */}
        <OtherAppsShowcase maxSpotlights={3} />
      </div>
    </div>
  );
}
