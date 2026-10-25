import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Cpu,
  Globe,
  Download,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { FaqSection, type FaqItem } from "@/components/seo/faq-section";
import { AuthorBio } from "@/components/seo/author-bio";

const PRODUCTS_FAQS: FaqItem[] = [
  {
    question: "How many applications and web studios are currently live in the COGIFY catalog?",
    answer:
      "COGIFY currently ships 13 live products: 6 native macOS workstations with instant 1-click .DMG downloads (EmDoc PDF Workstation, LumenView, Metricove, NetGuard, Klipora, and Show free space), Marriage Biodata Maker Studio (biodata.cogify.me), and 6 Safari Web Extensions (Ad Blocker for Safari, ReaderEasy, WebClear, WebLenses, Element Hider, and Colour Invert).",
  },
  {
    question: "Are all COGIFY macOS apps, App Store apps, and web studios free for personal use?",
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
      "Yes. Native macOS apps like EmDoc, LumenView, Metricove, Klipora, and Show free space run 100% offline with zero telemetry, our 6 Safari extensions execute locally inside WebKit on your device, and Marriage Biodata Maker Studio processes all documents locally in your browser.",
  },
];

export const metadata: Metadata = {
  title: "All 13 Apps, macOS Workstations, Safari Extensions & Studios — EmDoc, LumenView, Metricove, NetGuard, Klipora, Show free space",
  description:
    "Explore COGIFY's 13 free, zero-telemetry apps & studios: 6 native macOS workstations with 1-click .DMG downloads (EmDoc, LumenView, Metricove, NetGuard, Klipora, Show free space), Biodata Maker (biodata.cogify.me), and 6 Safari extensions.",
  alternates: {
    canonical: `${siteConfig.url}/products`,
  },
  openGraph: {
    title: "COGIFY Product Ecosystem — 13 Native macOS, iOS, Safari Apps & Web Studios",
    description:
      "13 live applications and web studios — 6 macOS workstations with single-click .DMG downloads, 6 Safari extensions, and Biodata Maker Studio.",
    url: `${siteConfig.url}/products`,
    siteName: siteConfig.name,
    type: "website",
  },
};

const liveCatalog = [
  {
    name: "EmDoc PDF Workstation",
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
      "SMC Die Thermals & Fan RPM Controls in 2.3 MB",
    ],
  },
  {
    name: siteConfig.netguard.name,
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
      "One-ClickStaging & Safe Trash Cleanup",
      "Menu Bar Free Space Widget & Multi-Volume APFS Support",
    ],
  },
  {
    name: siteConfig.biodata.name,
    tagline: siteConfig.biodata.tagline,
    description: siteConfig.biodata.shortDescription,
    version: `v${siteConfig.biodata.version}`,
    platforms: siteConfig.biodata.platform,
    category: "Web Studio • Document Design",
    icon: siteConfig.biodata.icon,
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
    name: siteConfig.adBlocker.name,
    tagline: siteConfig.adBlocker.tagline,
    description: siteConfig.adBlocker.shortDescription,
    version: `v${siteConfig.adBlocker.version}`,
    platforms: siteConfig.adBlocker.platform,
    category: "Utilities • Content Blocker",
    icon: siteConfig.adBlocker.icon,
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
    tagline: siteConfig.readereasy.tagline,
    description: siteConfig.readereasy.shortDescription,
    version: `v${siteConfig.readereasy.version}`,
    platforms: siteConfig.readereasy.platform,
    category: "Productivity • Reader Mode",
    icon: siteConfig.readereasy.icon,
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
    tagline: siteConfig.webclear.tagline,
    description: siteConfig.webclear.shortDescription,
    version: `v${siteConfig.webclear.version}`,
    platforms: siteConfig.webclear.platform,
    category: "Utilities • Privacy & Storage",
    icon: siteConfig.webclear.icon,
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
    tagline: siteConfig.weblenses.tagline,
    description: siteConfig.weblenses.shortDescription,
    version: `v${siteConfig.weblenses.version}`,
    platforms: siteConfig.weblenses.platform,
    category: "Developer Tools • Web Vitals",
    icon: siteConfig.weblenses.icon,
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
    tagline: siteConfig.elementHider.tagline,
    description: siteConfig.elementHider.shortDescription,
    version: `v${siteConfig.elementHider.version}`,
    platforms: siteConfig.elementHider.platform,
    category: "Utilities • Web Customizer",
    icon: "/brand/Element-Hider/icon-sm.webp",
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
    tagline: siteConfig.invert.tagline,
    description: siteConfig.invert.shortDescription,
    version: `v${siteConfig.invert.version}`,
    platforms: siteConfig.invert.platform,
    category: "Utilities • Accessibility",
    icon: "/brand/Invert/icon-sm.webp",
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
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[420px] bg-gradient-to-b from-indigo-600/10 via-emerald-500/8 to-transparent blur-3xl -z-10" />

      <Container>
        <Breadcrumbs items={[{ label: "Products & Studios", href: "/products" }]} />

        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <Badge variant="success">
              Apple App Store &amp; Web Studio Catalog
            </Badge>
            <Badge variant="outline">
              100% Free • Zero Telemetry
            </Badge>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
            The Complete COGIFY Software Suite
          </h1>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Every application, Safari Web Extension, and interactive studio we publish is engineered with zero cloud dependencies, zero tracking, and zero subscriptions for individual users.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href={siteConfig.appleDeveloperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 dark:bg-white px-5 py-3 text-sm font-semibold text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-sm"
            >
              <Globe className="h-4 w-4" />
              Official Apple Developer Page
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <a
              href={siteConfig.biodata.webUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-400 px-5 py-3 text-sm font-bold text-zinc-950 transition-colors shadow-sm"
            >
              <Sparkles className="h-4 w-4" />
              Launch Biodata Studio (biodata.cogify.me)
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Live App Store Apps Grid */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Available Now — Native Apps &amp; Web Studios
            </h2>
            <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-400">
              macOS • iOS • iPadOS • Safari • Web
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {liveCatalog.map((item, idx) => (
              <div
                key={item.href}
                className="rounded-3xl border border-zinc-200/90 dark:border-white/10 bg-white dark:bg-zinc-900/40 p-6 sm:p-8 flex flex-col justify-between hover:border-indigo-500/40 dark:hover:border-white/25 transition-all shadow-xs dark:shadow-none"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex items-center gap-4">
                      <div className="relative h-16 w-16 rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/15 bg-zinc-100 dark:bg-zinc-950 shrink-0 shadow-md">
                        <Image
                          src={item.icon}
                          alt={item.name}
                          fill
                          priority={idx < 2}
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
                            {item.badge}
                          </span>
                          <span className="text-[11px] text-zinc-600 dark:text-zinc-400">•</span>
                          <span className="text-[11px] font-mono text-zinc-600 dark:text-zinc-400">
                            {item.version}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                          <Link href={item.href} className="hover:text-indigo-700 dark:hover:text-indigo-400 transition-colors">
                            {item.name}
                          </Link>
                        </h3>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">
                          {item.platforms}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {"previewImage" in item && item.previewImage && (
                    <Link
                      href={item.href}
                      className="block relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 mb-5 bg-zinc-950 group"
                    >
                      <Image
                        src={item.previewImage}
                        alt={`${item.name} Screenshot Preview`}
                        fill
                        priority={idx < 2}
                        className="object-contain group-hover:scale-[1.02] transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 540px"
                      />
                    </Link>
                  )}

                  <ul className="space-y-2 mb-6">
                    {item.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-700 dark:text-emerald-400 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-zinc-200/80 dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
                  {"downloadUrl" in item && item.downloadUrl ? (
                    <a
                      href={item.downloadUrl}
                      download
                      className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 px-4 py-2.5 text-xs font-bold text-zinc-950 transition-colors shadow-xs"
                    >
                      <Download className="h-3.5 w-3.5" />
                      {item.ctaLabel}
                    </a>
                  ) : (
                    <a
                      href={item.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 px-4 py-2.5 text-xs font-bold text-zinc-950 transition-colors shadow-xs"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      {item.ctaLabel}
                    </a>
                  )}
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:text-indigo-700 dark:hover:text-white transition-colors"
                  >
                    Explore Features & Screenshots
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pipeline Section */}
        <section>
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 mb-2">
              <Cpu className="h-4 w-4" />
              App Store Connect Pipeline
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">
              Upcoming Releases & Active Pipeline
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
              Currently in final engineering and App Store submission review.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.futureProducts.map((prod) => (
              <div
                key={prod.id}
                className="rounded-3xl border border-zinc-200/90 dark:border-white/10 bg-white dark:bg-zinc-900/30 p-6 flex flex-col justify-between shadow-xs dark:shadow-none"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    {prod.icon ? (
                      <div className="relative h-12 w-12 rounded-xl overflow-hidden border border-zinc-200 dark:border-white/15 shrink-0">
                        <Image
                          src={prod.icon}
                          alt={prod.title}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                    ) : (
                      <div className="h-12 w-12 rounded-xl border border-indigo-500/30 bg-indigo-500/10 flex items-center justify-center shrink-0">
                        <Sparkles className="h-5 w-5 text-indigo-700 dark:text-indigo-400" />
                      </div>
                    )}
                    <div>
                      <span className="inline-block text-[11px] font-semibold text-indigo-700 dark:text-indigo-400">
                        {prod.status}
                      </span>
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                        {prod.title}
                      </h3>
                      {prod.platforms && (
                        <p className="text-[11px] text-zinc-600 dark:text-zinc-400">
                          {prod.platforms}
                        </p>
                      )}
                    </div>
                  </div>

                  {prod.previewImage && (
                    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-zinc-200 dark:border-white/10 mb-4 bg-zinc-950">
                      <Image
                        src={prod.previewImage}
                        alt={`${prod.title} Preview`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                      />
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                    {prod.description}
                  </p>

                  {prod.highlights && (
                    <ul className="space-y-1.5 mb-4">
                      {prod.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-400"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-indigo-700 dark:text-indigo-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="pt-4 border-t border-zinc-200/80 dark:border-white/10 flex items-center justify-between text-xs text-zinc-600 dark:text-zinc-400">
                  <span>{prod.category || "Native Apple App"}</span>
                  <Link
                    href="/suggestions"
                    className="text-indigo-700 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 font-semibold"
                  >
                    Request Feature →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Container>

      <FaqSection
        title="COGIFY Product Catalog — Frequently Asked Questions"
        subtitle="Answers about our native Apple App Store releases, Safari Web Extensions, and real-time web studios."
        items={PRODUCTS_FAQS}
      />

      <AuthorBio />
    </div>
  );
}
