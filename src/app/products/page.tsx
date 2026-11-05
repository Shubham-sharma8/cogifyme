import type { Metadata } from "next";
import {
  ExternalLink,
  Sparkles,
  Globe,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { FaqSection, type FaqItem } from "@/components/seo/faq-section";
import { AuthorBio } from "@/components/seo/author-bio";
import { CatalogJsonLd } from "@/components/seo/jsonld-schemas";
import { ComparisonHubSection } from "@/components/compare/comparison-hub-section";
import {
  ProductsCatalogClient,
  type CatalogItem,
} from "@/components/products/products-catalog-client";

const PRODUCTS_FAQS: FaqItem[] = [
  {
    question:
      "How many applications and web studios are currently live in the COGIFY catalog?",
    answer:
      "COGIFY currently ships 14 live products: 6 native macOS workstations with instant 1-click .DMG downloads (EmDoc PDF Workstation, LumenView, Metricove, NetGuard, Klipora, and Show free space), 2 real-time web studios (Marriage Biodata Maker at biodata.cogify.me and SSB Stage-2 Test Practice Studio at ssb.cogify.me), and 6 Safari Web Extensions (Ad Blocker for Safari, ReaderEasy, WebClear, WebLenses, Element Hider, and Colour Invert).",
  },
  {
    question:
      "Are all COGIFY macOS apps, App Store apps, and web studios free for personal use?",
    answer:
      "Yes. Every live macOS application, Safari Web Extension, and web studio in our catalog is 100% free for individual users with zero subscriptions, zero in-app purchases, and zero watermarks.",
  },
  {
    question: "Where are the direct .DMG downloads hosted and signed?",
    answer:
      "All 6 macOS .DMG installers (EmDoc, LumenView, Metricove, NetGuard, Klipora, and Show free space) are signed with our official Apple Developer ID (Shubham Sharma, Team ID 9TKKPN6F59) and hosted on GitHub Releases for instant single-click download.",
  },
  {
    question: "Do COGIFY products work offline without internet access?",
    answer:
      "Yes. Native macOS apps like EmDoc, LumenView, Metricove, Klipora, and Show free space run 100% offline with zero telemetry, our 6 Safari extensions execute locally inside WebKit on your device, and both Marriage Biodata Maker Studio and SSB Stage-2 Practice Studio process all user data locally in your browser.",
  },
];

export const metadata: Metadata = {
  title: "14 Free Native macOS, Safari Apps & Web Studios",
  description:
    "Explore COGIFY's 14 free, zero-telemetry apps and web studios: 6 native macOS DMG apps, Biodata Maker (biodata.cogify.me), SSB Studio, and 6 Safari apps.",
  alternates: {
    canonical: `${siteConfig.url}/products`,
  },
  openGraph: {
    title: "14 Free Native macOS, Safari Apps & Web Studios | COGIFY",
    description:
      "Explore COGIFY's 14 free, zero-telemetry apps and web studios: 6 native macOS DMG apps, Biodata Maker (biodata.cogify.me), SSB Studio, and 6 Safari apps.",
    url: `${siteConfig.url}/products`,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "COGIFY Product Ecosystem — 14 Native macOS, Safari Apps & Web Studios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "14 Free Native macOS, Safari Apps & Web Studios | COGIFY",
    description:
      "Explore COGIFY's 14 free, zero-telemetry apps and web studios: 6 native macOS DMG apps, Biodata Maker (biodata.cogify.me), SSB Studio, and 6 Safari apps.",
    images: ["/og-image.png"],
  },
};

const liveCatalog: CatalogItem[] = [
  {
    name: "EmDoc PDF Workstation",
    pillar: "mac",
    tagline: siteConfig.emdoc.tagline,
    description: siteConfig.emdoc.shortDescription,
    version: `v${siteConfig.emdoc.version}`,
    platforms: "macOS 13+ (Universal Binary)",
    category: "Productivity • PDF Suite",
    icon: "/brand/emdoc-icon-sm.webp",
    previewImage: "/brand/EmDoc_home.webp",
    href: "/products/emdoc",
    downloadUrl: siteConfig.emdoc.downloadUrl,
    appStoreUrl: siteConfig.emdoc.appStoreUrl,
    ctaLabel: `Direct Download (.DMG • ${siteConfig.emdoc.appSize})`,
    badge: "Flagship macOS App",
    highlights: [
      "Tiny 5.0 MB native binary (~45 MB RAM)",
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
    platforms: siteConfig.lumenview.platform,
    category: `${siteConfig.lumenview.primaryCategory} • ${siteConfig.lumenview.secondaryCategory}`,
    icon: siteConfig.lumenview.icon,
    previewImage: siteConfig.lumenview.screenshotsMac[0].image,
    href: `/${siteConfig.lumenview.slug}`,
    downloadUrl: siteConfig.lumenview.downloadUrl,
    appStoreUrl: siteConfig.lumenview.downloadUrl,
    ctaLabel: `Direct Download (.DMG • ${siteConfig.lumenview.appSize})`,
    badge: "macOS Display Utility",
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
    platforms: siteConfig.metricove.platform,
    category: `${siteConfig.metricove.primaryCategory} • ${siteConfig.metricove.secondaryCategory}`,
    icon: siteConfig.metricove.icon,
    previewImage: siteConfig.metricove.screenshotsMac[0].image,
    href: `/${siteConfig.metricove.slug}`,
    downloadUrl: siteConfig.metricove.downloadUrl,
    appStoreUrl: siteConfig.metricove.downloadUrl,
    ctaLabel: `Direct Download (.DMG • ${siteConfig.metricove.appSize})`,
    badge: "macOS Menu Bar Monitor",
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
    platforms: siteConfig.netguard.platform,
    category: `${siteConfig.netguard.primaryCategory} • ${siteConfig.netguard.secondaryCategory}`,
    icon: siteConfig.netguard.icon,
    previewImage: siteConfig.netguard.screenshotsMac[0].image,
    href: `/${siteConfig.netguard.slug}`,
    downloadUrl: siteConfig.netguard.downloadUrl,
    appStoreUrl: siteConfig.netguard.downloadUrl,
    ctaLabel: `Direct Download (.DMG • ${siteConfig.netguard.appSize})`,
    badge: "macOS Outbound Firewall",
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
    platforms: siteConfig.klipora.platform,
    category: `${siteConfig.klipora.primaryCategory} • ${siteConfig.klipora.secondaryCategory}`,
    icon: siteConfig.klipora.icon,
    previewImage: siteConfig.klipora.screenshotsMac[0].image,
    href: `/${siteConfig.klipora.slug}`,
    downloadUrl: siteConfig.klipora.downloadUrl,
    appStoreUrl: siteConfig.klipora.downloadUrl,
    ctaLabel: `Direct Download (.DMG • ${siteConfig.klipora.appSize})`,
    badge: "macOS Clipboard Manager",
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
    platforms: siteConfig.showFreeSpace.platform,
    category: `${siteConfig.showFreeSpace.primaryCategory} • ${siteConfig.showFreeSpace.secondaryCategory}`,
    icon: siteConfig.showFreeSpace.icon,
    previewImage: siteConfig.showFreeSpace.screenshotsMac[0].image,
    href: `/${siteConfig.showFreeSpace.slug}`,
    downloadUrl: siteConfig.showFreeSpace.downloadUrl,
    appStoreUrl: siteConfig.showFreeSpace.downloadUrl,
    ctaLabel: `Direct Download (.DMG • ${siteConfig.showFreeSpace.appSize})`,
    badge: "macOS Disk Space Analyzer",
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
    ctaLabel: "Launch biodata.cogify.me",
    badge: "Web Studio • Subdomain",
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
    ctaLabel: "Launch ssb.cogify.me",
    badge: "Web Studio • Subdomain",
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
    platforms: siteConfig.adBlocker.platform,
    category: "Utilities • Content Blocker",
    icon: siteConfig.adBlocker.icon,
    previewImage: siteConfig.adBlocker.screenshotsMac?.[0]?.image,
    href: "/ad-blocker",
    appStoreUrl: siteConfig.adBlocker.appStoreUrl,
    ctaLabel: "Download on App Store",
    badge: "Safari Content Blocker",
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
    platforms: siteConfig.readereasy.platform,
    category: "Productivity • Reader Mode",
    icon: siteConfig.readereasy.icon,
    previewImage:
      siteConfig.readereasy.screenshotsIpad?.[0]?.image ||
      siteConfig.readereasy.screenshotsIos?.[0]?.image,
    href: "/readereasy",
    appStoreUrl: siteConfig.readereasy.appStoreUrl,
    ctaLabel: "Download on App Store",
    badge: "Safari Extension",
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
    platforms: siteConfig.webclear.platform,
    category: "Utilities • Privacy & Storage",
    icon: siteConfig.webclear.icon,
    previewImage:
      siteConfig.webclear.screenshotsIpad?.[0]?.image ||
      siteConfig.webclear.screenshotsIos?.[0]?.image,
    href: "/webclear",
    appStoreUrl: siteConfig.webclear.appStoreUrl,
    ctaLabel: "Download on App Store",
    badge: "Safari Extension",
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
    platforms: siteConfig.weblenses.platform,
    category: "Developer Tools • Web Vitals",
    icon: siteConfig.weblenses.icon,
    previewImage: siteConfig.weblenses.screenshotsMac?.[0]?.image,
    href: "/weblenses",
    appStoreUrl: siteConfig.weblenses.appStoreUrl,
    ctaLabel: "Download on App Store",
    badge: "Safari Developer Tool",
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
    platforms: siteConfig.elementHider.platform,
    category: "Utilities • Web Customizer",
    icon: "/brand/Element-Hider/icon-sm.webp",
    previewImage: siteConfig.elementHider.screenshotsMac?.[0]?.image,
    href: "/element-hider",
    appStoreUrl: siteConfig.elementHider.appStoreUrl,
    ctaLabel: "Download on App Store",
    badge: "Safari Extension",
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
    platforms: siteConfig.invert.platform,
    category: "Utilities • Accessibility",
    icon: "/brand/Invert/icon-sm.webp",
    previewImage: siteConfig.invert.screenshotsMac?.[0]?.image,
    href: "/invert",
    appStoreUrl: siteConfig.invert.appStoreUrl,
    ctaLabel: "Download on App Store",
    badge: "Safari Extension",
    highlights: [
      "Smart Invert, Soft Invert & Full High-Contrast modes",
      "Preserves photos, videos, YouTube & SVGs naturally",
      "Custom brightness, contrast & sepia warmth sliders",
    ],
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-28 pb-24 relative overflow-hidden">
      <CatalogJsonLd />
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[420px] bg-gradient-to-b from-indigo-600/8 via-emerald-500/6 to-transparent blur-3xl -z-10" />

      <Container>
        <Breadcrumbs items={[{ label: "Products & Studios", href: "/products" }]} />

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <Badge variant="success">
              Apple App Store &amp; Web Studio Catalog
            </Badge>
            <Badge variant="outline">100% Free • Zero Telemetry</Badge>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] text-zinc-950 dark:text-white">
            The Complete COGIFY Software Suite
          </h1>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Every application, Safari Web Extension, and interactive studio we publish is engineered with zero cloud dependencies, zero tracking, and zero subscriptions for individual users.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={siteConfig.appleDeveloperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile inline-flex items-center gap-2 rounded-xl bg-zinc-950 dark:bg-white px-5 py-3 text-xs sm:text-sm font-semibold text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-xs"
            >
              <Globe className="h-4 w-4" />
              <span>Official Apple Developer Page</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <a
              href={siteConfig.biodata.webUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile inline-flex items-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-400 px-5 py-3 text-xs sm:text-sm font-bold text-zinc-950 transition-colors shadow-xs"
            >
              <Sparkles className="h-4 w-4" />
              <span>Launch Biodata Studio (biodata.cogify.me)</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <a
              href={siteConfig.ssb.webUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile inline-flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 px-5 py-3 text-xs sm:text-sm font-bold text-zinc-950 transition-colors shadow-xs"
            >
              <Sparkles className="h-4 w-4" />
              <span>Launch SSB Studio (ssb.cogify.me)</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Interactive Filterable 14-Product Catalog */}
        <ProductsCatalogClient items={liveCatalog} />
      </Container>

      <ComparisonHubSection compact={true} />

      <FaqSection
        title="COGIFY Product Catalog — Frequently Asked Questions"
        subtitle="Answers about our 14 free native Apple releases, Safari Web Extensions, and real-time web studios."
        items={PRODUCTS_FAQS}
      />

      <AuthorBio />
    </div>
  );
}
