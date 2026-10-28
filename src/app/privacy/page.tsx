import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  EyeOff,
  Server,
  Compass,
  Laptop,
  Smartphone,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import type { Metadata } from "next";
import { BrandLogo } from "@/components/brand/brand-logo";
import { siteConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { AuthorBio } from "@/components/seo/author-bio";

export const metadata: Metadata = {
  title: "Privacy Policy — Zero-Telemetry Native & Web Apps",
  description:
    "Official zero-telemetry Privacy Policy for COGIFY (cogify.me), 6 macOS apps, Biodata Maker (biodata.cogify.me), SSB Studio (ssb.cogify.me), and 6 Safari apps.",
  alternates: {
    canonical: "https://cogify.me/privacy",
  },
  openGraph: {
    title: "Privacy Policy — Zero-Telemetry Native & Web Apps | COGIFY",
    description:
      "Official zero-telemetry Privacy Policy for COGIFY (cogify.me), 6 macOS apps, Biodata Maker (biodata.cogify.me), SSB Studio (ssb.cogify.me), and 6 Safari apps.",
    url: "https://cogify.me/privacy",
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy — Zero-Telemetry Native & Web Apps | COGIFY",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — Zero-Telemetry Native & Web Apps | COGIFY",
    description:
      "Official zero-telemetry Privacy Policy for COGIFY (cogify.me), 6 macOS apps, Biodata Maker (biodata.cogify.me), SSB Studio (ssb.cogify.me), and 6 Safari apps.",
    images: ["/og-image.png"],
  },
};

const coveredApps = [
  {
    name: "EmDoc Workstation",
    platform: "macOS (Apple Silicon & Intel Universal)",
    href: "/products/emdoc",
    appStoreUrl: siteConfig.emdoc.appStoreUrl,
    summary:
      "100% air-gapped native PDF workstation. Zero network permissions, zero cloud uploads, and local-only Apple Vision OCR.",
  },
  {
    name: "LumenView",
    platform: "macOS (Apple Silicon & Intel Universal)",
    href: "/lumenview",
    privacyHref: "/lumenview/privacy",
    summary:
      "Hardware DDC/CI external monitor brightness, contrast, and volume control. Zero network sockets or display telemetry.",
  },
  {
    name: "Metricove",
    platform: "macOS (Apple Silicon & Intel Universal)",
    href: "/metricove",
    privacyHref: "/metricove/privacy",
    summary:
      "Real-time macOS menu bar CPU, GPU, RAM, network, and battery diagnostics. 100% local hardware polling with zero cloud metrics.",
  },
  {
    name: "NetGuard",
    platform: "macOS (Apple Silicon & Intel Universal)",
    href: "/netguard",
    privacyHref: "/netguard/privacy",
    summary:
      "On-device macOS outbound firewall and application socket monitor. All connection rules and logs stay strictly on your Mac.",
  },
  {
    name: "Klipora",
    platform: "macOS (Apple Silicon & Intel Universal)",
    href: "/klipora",
    privacyHref: "/klipora/privacy",
    summary:
      "Local-only macOS clipboard history manager with password-manager exclusion rules and zero cloud clipboard sync.",
  },
  {
    name: "Show free space",
    platform: "macOS (Apple Silicon & Intel Universal)",
    href: "/show-free-space",
    privacyHref: "/show-free-space/privacy",
    summary:
      "Native macOS menu bar disk analyzer and APFS volume monitor. File paths and disk metadata never leave your device.",
  },
  {
    name: "Ad Blocker - For Safari",
    platform: "iOS, iPadOS & macOS (Safari)",
    href: "/ad-blocker",
    appStoreUrl: siteConfig.adBlocker.appStoreUrl,
    summary:
      "Uses Apple's native declarative SFContentBlocker API. The extension cannot read your browsing history or page contents.",
  },
  {
    name: "ReaderEasy",
    platform: "iOS, iPadOS & macOS (Safari)",
    href: "/readereasy",
    appStoreUrl: siteConfig.readereasy.appStoreUrl,
    summary:
      "Extracts article typography and reading views strictly in local browser memory. Zero telemetry or reading history collection.",
  },
  {
    name: "WebClear",
    platform: "iOS, iPadOS & macOS (Safari)",
    href: "/webclear",
    appStoreUrl: siteConfig.webclear.appStoreUrl,
    summary:
      "Dismisses cookie banners, newsletter popups, and sticky overlays locally on-device. Site whitelists stay in local storage.",
  },
  {
    name: "WebLenses",
    platform: "iOS, iPadOS & macOS (Safari)",
    href: "/weblenses",
    appStoreUrl: siteConfig.weblenses.appStoreUrl,
    summary:
      "Applies real-time colour-vision accessibility filters and blue-light reading shields in local Safari memory.",
  },
  {
    name: "Element Hider",
    platform: "iOS, iPadOS & macOS (Safari)",
    href: "/element-hider",
    appStoreUrl: siteConfig.elementHider.appStoreUrl,
    summary:
      "Hides user-selected DOM elements locally on your device. Custom hiding rules remain strictly in local browser storage.",
  },
  {
    name: "Colour Invert",
    platform: "iOS, iPadOS & macOS (Safari)",
    href: "/invert",
    appStoreUrl: siteConfig.invert.appStoreUrl,
    summary:
      "Applies real-time local CSS colour inversion and Media Shield filters. Zero browsing data or preferences are transmitted.",
  },
  {
    name: "Marriage Biodata Maker Studio",
    platform: "Web Studio & PWA (biodata.cogify.me)",
    href: "/biodata",
    appStoreUrl: siteConfig.biodata.webUrl,
    summary:
      "100% client-side biodata editor. All personal details, family information, horoscopes, and profile photos remain in local browser storage with zero cloud database uploads.",
  },
  {
    name: "SSB Stage-2 Test Practice Studio",
    platform: "Web Studio & PWA (ssb.cogify.me)",
    href: "/ssb",
    appStoreUrl: siteConfig.ssb.webUrl,
    summary:
      "Free browser-based Indian Armed Forces SSB interview preparation studio (OIR, PPDT, TAT, WAT, SRT, SDT & GPE). Practice responses and timers run locally in your browser with zero mandatory sign-up.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={[{ label: "Privacy Policy", href: "/privacy" }]} />
        {/* Header */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
              <BrandLogo width={40} height={40} priority />
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-white/10 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/10 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Legal Document</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Privacy Policy
          </h1>

          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            This Privacy Policy governs <strong>COGIFY Technologies</strong> (<code className="text-zinc-800 dark:text-zinc-200 font-mono">cogify.me</code>) and every native macOS, iOS, iPadOS, and Safari application published by COGIFY on the Apple App Store or distributed directly via our website.
          </p>

          <p className="text-xs font-mono text-zinc-500">
            Last Updated &amp; Effective: October 2026 • Applies to All COGIFY Applications &amp; Website
          </p>
        </div>

        {/* Apple App Store Nutrition Label Summary */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-50/90 via-white to-indigo-50/60 dark:from-emerald-950/30 dark:via-zinc-900 dark:to-indigo-950/20 border border-emerald-200/90 dark:border-emerald-500/30 shadow-sm space-y-4">
          <div className="flex items-center gap-2.5 text-emerald-700 dark:text-emerald-400 font-bold text-sm uppercase tracking-wider font-mono">
            <ShieldCheck className="w-5 h-5" />
            <span>Apple App Store Privacy Summary: &ldquo;Data Not Collected&rdquo;</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
            Zero Data Collection Across All COGIFY Apps &amp; Safari Extensions
          </h2>
          <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Across all COGIFY applications and Safari Web Extensions, <strong>we do not collect, transmit, store, log, share, or monetize any personal data, browsing history, webpage content, document payloads, or device identifiers</strong>. Our software operates 100% locally on your Apple device with zero third-party analytics SDKs, zero crash-reporting trackers, and zero advertising frameworks.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-white/90 dark:bg-zinc-950/70 border border-emerald-200/70 dark:border-white/10 flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span className="text-xs font-semibold text-zinc-900 dark:text-white">
                0 Bytes Transmitted from Apps
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-white/90 dark:bg-zinc-950/70 border border-emerald-200/70 dark:border-white/10 flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span className="text-xs font-semibold text-zinc-900 dark:text-white">
                No Accounts or Sign-Ups
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-white/90 dark:bg-zinc-950/70 border border-emerald-200/70 dark:border-white/10 flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span className="text-xs font-semibold text-zinc-900 dark:text-white">
                Zero Third-Party SDKs
              </span>
            </div>
          </div>
        </div>

        {/* Core Principles Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-white/90 dark:bg-zinc-900/40 border border-zinc-200/90 dark:border-white/5 space-y-2 shadow-xs dark:shadow-none">
            <Lock className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
              Privacy By Architecture
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Our apps are architected without external backend servers, meaning we physically cannot access your files, PDFs, or browsing activity.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white/90 dark:bg-zinc-900/40 border border-zinc-200/90 dark:border-white/5 space-y-2 shadow-xs dark:shadow-none">
            <EyeOff className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h3 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
              Zero Behavioral Tracking
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We never sell personal data, embed advertising pixels, or participate in cross-app or cross-site tracking networks.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white/90 dark:bg-zinc-900/40 border border-zinc-200/90 dark:border-white/5 space-y-2 shadow-xs dark:shadow-none">
            <Server className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            <h3 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
              On-Device Storage Only
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              All app settings, custom rules, per-site preferences, and files remain strictly in your device&apos;s local sandbox.
            </p>
          </div>
        </div>

        {/* Covered Applications Matrix */}
        <section className="mt-12 space-y-4">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
            1. Applications Covered by This Unified Policy
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Instead of maintaining fragmented policies for each utility, this unified policy applies to all current and future COGIFY software products, including:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {coveredApps.map((app, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-white/10 flex flex-col justify-between space-y-2"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <Link
                      href={app.href}
                      className="text-sm font-bold text-zinc-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      {app.name}
                    </Link>
                    {app.appStoreUrl && (
                      <a
                        href={app.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1 shrink-0"
                      >
                        <span>App Store</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {"privacyHref" in app && app.privacyHref && (
                      <Link
                        href={app.privacyHref}
                        className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 hover:underline inline-flex items-center gap-1 shrink-0"
                      >
                        <span>Privacy Spec →</span>
                      </Link>
                    )}
                  </div>
                  <div className="text-[11px] font-mono text-zinc-500 mt-0.5">
                    {app.platform}
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                    {app.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Full Policy Body */}
        <div className="mt-12 space-y-10 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <Laptop className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span>2. Native macOS Applications (EmDoc, LumenView, Metricove, NetGuard, Klipora, Show free space)</span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Our native macOS applications—including <strong>EmDoc Workstation</strong>, <strong>LumenView</strong>, <strong>Metricove</strong>, <strong>NetGuard</strong>, <strong>Klipora</strong>, and <strong>Show free space</strong>—are engineered to operate 100% locally on your hardware:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-zinc-600 dark:text-zinc-400 text-xs pl-2">
              <li>
                <strong>Zero Cloud File Processing:</strong> All PDF editing, merging, splitting, compression, watermarking, digital signing, and file management occur exclusively in local RAM and on your local disk.
              </li>
              <li>
                <strong>On-Device Machine Learning (OCR):</strong> Optical Character Recognition uses Apple&apos;s built-in on-device Vision framework executing on the local Apple Neural Engine. No images or text are sent to external servers.
              </li>
              <li>
                <strong>No Network Telemetry:</strong> EmDoc makes zero background network connections, contains zero analytics beacons, and never phones home.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <Compass className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span>
                3. Safari Web Extensions (Ad Blocker, ReaderEasy, WebClear, WebLenses, Element Hider, Colour Invert)
              </span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Our Safari extensions for iOS, iPadOS, and macOS require browser permissions solely to perform user-initiated visual or functional transformations on the active webpage:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-zinc-600 dark:text-zinc-400 text-xs pl-2">
              <li>
                <strong>Browsing History Is Never Read or Transmitted:</strong> Even when you grant an extension permission to run on websites in Safari Settings, all DOM inspection, element hiding, reader-view formatting, popup dismissal, and CSS colour inversion execute strictly inside your local Safari process.
              </li>
              <li>
                <strong>Declarative Content Blocking (Ad Blocker - For Safari):</strong> Ad Blocker compiles static filter rules into Apple&apos;s native <code className="font-mono">SFContentBlocker</code> engine. Safari evaluates blocking rules natively without sharing the URLs you visit with the extension.
              </li>
              <li>
                <strong>Local-Only Preferences:</strong> Per-site toggles, custom CSS selectors, reading font preferences, and whitelists are saved exclusively inside your device&apos;s local Safari extension storage (<code className="font-mono">browser.storage.local</code> or <code className="font-mono">UserDefaults</code>) and can be cleared by you at any time.
              </li>
              <li>
                <strong>Zero External Requests:</strong> None of our Safari extensions make outbound <code className="font-mono">fetch()</code> or <code className="font-mono">XMLHttpRequest</code> calls to COGIFY or any third party.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              <span>4. Information Collected via Our Website (cogify.me)</span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              You can browse <a href="https://cogify.me" className="text-indigo-600 dark:text-indigo-400 underline">https://cogify.me</a> and download our software without creating an account. Information is collected on the website only in the following limited scenarios:
            </p>
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200/80 dark:border-white/5 space-y-3 text-xs">
              <div>
                <strong className="text-zinc-900 dark:text-zinc-200 block mb-0.5">
                  A. Voluntary Contact, Suggestion &amp; Enterprise Forms
                </strong>
                <p className="text-zinc-600 dark:text-zinc-400">
                  When you submit a message via our Contact page, Suggestions &amp; Bug Report form, or Enterprise Pilot form, we collect the information you voluntarily provide (such as your name, email address, optional company/device details, and message text) solely to respond to your inquiry and improve our products.
                </p>
              </div>
              <div>
                <strong className="text-zinc-900 dark:text-zinc-200 block mb-0.5">
                  B. Security &amp; Anti-Abuse Protection
                </strong>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Our web forms use Cloudflare Turnstile and standard edge security headers to prevent automated spam. Basic HTTP request metadata (IP address, user-agent, timestamp) is processed transiently for DDoS protection and rate limiting.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
              5. Cookies, Third-Party Sharing &amp; Children&apos;s Privacy
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              <strong>No Advertising Cookies:</strong> Neither our apps nor <code className="font-mono">cogify.me</code> use third-party advertising cookies or cross-site tracking pixels.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              <strong>No Sale or Sharing of Data:</strong> We never sell, rent, trade, or share personal information with data brokers, advertisers, or third parties.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              <strong>Children&apos;s Privacy (COPPA):</strong> Because our applications collect zero personal data from any user of any age, they are safe for users of all ages and comply fully with COPPA, GDPR, and global data protection laws.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
              6. Your Rights &amp; Contact Information
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Under GDPR, CCPA, and applicable global privacy laws, you have the right to request access to or deletion of any contact inquiries you have sent to us. For any privacy questions regarding our website or any COGIFY app on the Apple App Store, contact us directly:
            </p>
            <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/5 text-xs font-mono space-y-1.5 text-zinc-800 dark:text-zinc-300">
              <div className="font-bold text-sm text-zinc-900 dark:text-white">
                COGIFY Technologies
              </div>
              <div>
                Official Website:{" "}
                <a href="https://cogify.me" className="text-indigo-600 dark:text-indigo-400 underline">
                  https://cogify.me
                </a>
              </div>
              <div>
                Canonical Privacy URL:{" "}
                <a href="https://cogify.me/privacy" className="text-indigo-600 dark:text-indigo-400 underline">
                  https://cogify.me/privacy
                </a>
              </div>
              <div>
                Privacy &amp; Support Email:{" "}
                <a href="mailto:contact@cogify.me" className="text-indigo-600 dark:text-indigo-400 underline">
                  contact@cogify.me
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      <AuthorBio />
    </div>
  );
}
