import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import type { Metadata } from "next";
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
    name: "Helium Drive Pool",
    platform: "macOS 15.4+ / macOS 26 Tahoe (Universal)",
    href: "/helium",
    appStoreUrl: "/Helium.dmg",
    summary:
      "Mounts /Volumes/Helium in Finder pooling Google Drive accounts with optional client-side AES-256-GCM encryption and zero telemetry.",
  },
  {
    name: "EmDoc Workstation",
    platform: "macOS (Apple Silicon & Intel Universal)",
    href: "/emdoc",
    appStoreUrl: siteConfig.emdoc.appStoreUrl,
    summary:
      "100% air-gapped native PDF workstation. Zero network permissions, zero cloud uploads, and local-only Apple Vision OCR.",
  },
  {
    name: "LumenView",
    platform: "macOS (Apple Silicon & Intel Universal)",
    href: "/lumenview",
    summary:
      "Hardware DDC/CI external monitor brightness, contrast, and volume control. Zero network sockets or display telemetry.",
  },
  {
    name: "Metricove",
    platform: "macOS (Apple Silicon & Intel Universal)",
    href: "/metricove",
    summary:
      "Real-time macOS menu bar CPU, GPU, RAM, network, and battery diagnostics. 100% local hardware polling with zero cloud metrics.",
  },
  {
    name: "NetGuard",
    platform: "macOS (Apple Silicon & Intel Universal)",
    href: "/netguard",
    summary:
      "On-device macOS outbound firewall and application socket monitor. All connection rules and logs stay strictly on your Mac.",
  },
  {
    name: "Klipora",
    platform: "macOS (Apple Silicon & Intel Universal)",
    href: "/klipora",
    summary:
      "Local-only macOS clipboard history manager with password-manager exclusion rules and zero cloud clipboard sync.",
  },
  {
    name: "Show free space",
    platform: "macOS (Apple Silicon & Intel Universal)",
    href: "/show-free-space",
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
    <div className="min-h-screen bg-[#f5f5f5] dark:bg-[#0b0b0d] text-black dark:text-white pt-28 pb-20">
      <div className="max-w-[820px] mx-auto px-6 py-10">
        <Breadcrumbs items={[{ label: "Privacy Policy", href: "/privacy" }]} />

        {/* Header */}
        <div className="mt-6 space-y-4">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-black/45 dark:text-white/45">
            Legal &amp; Data Sovereignty
          </p>

          <h1 className="text-[36px] sm:text-[52px] font-semibold tracking-[-0.035em] leading-[1.08] text-black dark:text-white">
            Privacy{" "}
            <span className="font-serif-accent text-[1.06em]">Policy.</span>
          </h1>

          <p className="text-[15px] sm:text-[17px] text-black/60 dark:text-white/60 leading-[1.65]">
            This Privacy Policy governs <strong className="text-black dark:text-white font-medium">COGIFY Technologies</strong> (<code className="font-mono text-[14px]">cogify.me</code>) and every native macOS, iOS, iPadOS, Safari extension, and web application published by COGIFY.
          </p>

          <p className="text-[12px] font-mono text-black/45 dark:text-white/45">
            Last Updated: November 6, 2026 · Applies to All COGIFY Applications &amp; Web Studios
          </p>
        </div>

        {/* Apple App Store Nutrition Label Summary */}
        <div className="mt-10 p-6 sm:p-8 rounded-[24px] bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/[0.09] shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-semibold text-[12px] uppercase tracking-wider font-mono">
            <ShieldCheck className="w-4 h-4" />
            <span>Apple App Store Privacy Label: &ldquo;Data Not Collected&rdquo;</span>
          </div>
          <h2 className="text-[20px] sm:text-[24px] font-semibold tracking-[-0.02em] text-black dark:text-white">
            Zero Data Collection Across All COGIFY Apps &amp; Safari Extensions
          </h2>
          <p className="text-[14px] text-black/65 dark:text-white/65 leading-relaxed">
            Across all COGIFY applications and Safari Web Extensions, <strong className="text-black dark:text-white font-medium">we do not collect, transmit, store, log, share, or monetize any personal data, browsing history, webpage content, document payloads, or device identifiers</strong>. Our software operates 100% locally on your device with zero third-party analytics SDKs, zero crash-reporting trackers, and zero advertising frameworks.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3.5 rounded-[14px] bg-[#f5f5f5] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.06] flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span className="text-[12px] font-medium text-black dark:text-white">
                0 Bytes Transmitted
              </span>
            </div>
            <div className="p-3.5 rounded-[14px] bg-[#f5f5f5] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.06] flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span className="text-[12px] font-medium text-black dark:text-white">
                No Accounts Required
              </span>
            </div>
            <div className="p-3.5 rounded-[14px] bg-[#f5f5f5] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.06] flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span className="text-[12px] font-medium text-black dark:text-white">
                Zero Third-Party SDKs
              </span>
            </div>
          </div>
        </div>

        {/* Covered Applications Matrix */}
        <section className="mt-12 space-y-4">
          <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-black dark:text-white">
            1. Applications Covered by This Unified Policy
          </h2>
          <p className="text-[14px] text-black/60 dark:text-white/60 leading-relaxed">
            This unified policy applies to all 14 COGIFY software products:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
            {coveredApps.map((app, idx) => (
              <div
                key={idx}
                className="p-4 rounded-[18px] bg-white dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.08] flex flex-col justify-between space-y-2"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <Link
                      href={app.href}
                      className="text-[14px] font-semibold text-black dark:text-white hover:underline"
                    >
                      {app.name}
                    </Link>
                    {app.appStoreUrl && (
                      <a
                        href={app.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-mono text-black/55 dark:text-white/55 hover:text-black dark:hover:text-white inline-flex items-center gap-1 shrink-0"
                      >
                        <span>Open</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                  <div className="text-[11px] font-mono text-black/45 dark:text-white/45 mt-0.5">
                    {app.platform}
                  </div>
                  <p className="text-[12px] text-black/60 dark:text-white/60 mt-2 leading-relaxed">
                    {app.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Full Policy Body */}
        <div className="mt-12 space-y-8 text-[14px] text-black/70 dark:text-white/70 leading-relaxed">
          <section className="p-6 rounded-[22px] bg-white dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.08] space-y-3">
            <h2 className="text-[17px] font-semibold text-black dark:text-white">
              2. Native macOS Applications (EmDoc, LumenView, Metricove, NetGuard, Klipora, Show free space)
            </h2>
            <p>
              Our native macOS applications are engineered to operate 100% locally on your hardware:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-[13px] text-black/65 dark:text-white/65 pl-1">
              <li>
                <strong className="text-black dark:text-white">Zero Cloud File Processing:</strong> All PDF editing, merging, splitting, compression, watermarking, digital signing, and file management occur exclusively in local RAM and on your local disk.
              </li>
              <li>
                <strong className="text-black dark:text-white">On-Device Machine Learning (OCR):</strong> Optical Character Recognition uses Apple&apos;s built-in on-device Vision framework executing on the local Apple Neural Engine.
              </li>
              <li>
                <strong className="text-black dark:text-white">No Network Telemetry:</strong> Zero background analytics beacons and zero phone-home telemetry.
              </li>
            </ul>
          </section>

          <section className="p-6 rounded-[22px] bg-white dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.08] space-y-3">
            <h2 className="text-[17px] font-semibold text-black dark:text-white">
              3. Safari Web Extensions (Ad Blocker, ReaderEasy, WebClear, WebLenses, Element Hider, Colour Invert)
            </h2>
            <p>
              Our Safari extensions for iOS, iPadOS, and macOS require browser permissions solely to perform user-initiated visual or functional transformations on the active webpage:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-[13px] text-black/65 dark:text-white/65 pl-1">
              <li>
                <strong className="text-black dark:text-white">Browsing History Is Never Read or Transmitted:</strong> All DOM inspection, element hiding, reader-view formatting, popup dismissal, and CSS colour inversion execute strictly inside your local Safari process.
              </li>
              <li>
                <strong className="text-black dark:text-white">Declarative Content Blocking (Ad Blocker):</strong> Compiles static filter rules into Apple&apos;s native <code className="font-mono">SFContentBlocker</code> engine without reading visited URLs.
              </li>
              <li>
                <strong className="text-black dark:text-white">Local-Only Preferences:</strong> Per-site toggles and preferences are saved exclusively in local Safari extension storage.
              </li>
            </ul>
          </section>

          <section className="p-6 rounded-[22px] bg-white dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.08] space-y-3">
            <h2 className="text-[17px] font-semibold text-black dark:text-white">
              4. Information Collected via Our Website &amp; Contact Rights
            </h2>
            <p>
              You can browse <code className="font-mono">cogify.me</code> and download our software without creating an account. When you voluntarily submit a message via our Contact or Suggestions form, we process only the fields you submit to respond to your inquiry.
            </p>
            <div className="p-4 rounded-[14px] bg-[#f5f5f5] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.06] text-[12px] font-mono space-y-1 text-black/75 dark:text-white/75">
              <div className="font-semibold text-black dark:text-white">COGIFY Technologies</div>
              <div>
                Privacy &amp; Support Email:{" "}
                <a href="mailto:contact@cogify.me" className="underline">
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
