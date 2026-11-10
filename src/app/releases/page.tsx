import React from "react";
/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Calendar,
  HardDrive,
  ShieldCheck,
  History,
  Terminal,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { AuthorBio } from "@/components/seo/author-bio";
import { OtherAppsShowcase } from "@/components/products/other-apps-showcase";
import {
  AppleLogoIcon,
  AppStoreIcon,
  GitHubIcon,
} from "@/components/ui/platform-icons";

export const metadata: Metadata = {
  title: "EmDoc Releases & Previous Versions (.DMG Download)",
  description:
    "Download EmDoc v1.1 (Latest, Released November 6, 2026, 7.8 MB DMG) or previous macOS versions (v1.0.0, v0.0.2, v0.0.1) with release notes and SHA-256 checksums.",
  keywords: [
    "EmDoc download",
    "EmDoc v1.1 DMG",
    "EmDoc previous versions",
    "EmDoc older versions Mac",
    "EmDoc release notes",
    "EmDoc changelog",
    "macOS PDF editor DMG archive",
  ],
  alternates: {
    canonical: "https://cogify.me/releases",
  },
  openGraph: {
    title: "EmDoc Releases & Previous Versions — Native macOS PDF Workstation",
    description:
      "Download EmDoc v1.1 (7.8 MB Universal DMG, Released November 6, 2026) or access archived macOS installers (v1.0.0, v0.0.2, v0.0.1) with SHA-256 verification.",
    url: "https://cogify.me/releases",
    type: "website",
    images: [
      {
        url: "/brand/EmDoc_home.webp",
        width: 1200,
        height: 750,
        alt: "EmDoc PDF Workstation for macOS Release Archive",
      },
    ],
  },
};

const OTHER_MAC_RELEASES = [
  {
    name: siteConfig.helium.shortName,
    version: siteConfig.helium.version,
    size: siteConfig.helium.appSize,
    href: "/helium/releases",
    downloadUrl: "/Helium.dmg",
    previousVersion: "0.0.2",
    previousSize: "8.4 MB",
    previousDownloadUrl:
      "https://github.com/Shubham-sharma8/helium/releases/download/v0.0.2/Helium-0.0.2.dmg",
    icon: siteConfig.helium.icon,
    subtitle:
      "Open-Source (MIT) Multi-Cloud & Google Drive Pool in /Volumes/Helium — Auto-Updater & v0.0.2 / v0.0.1 Archive",
  },
  {
    name: siteConfig.findy.shortName,
    version: siteConfig.findy.version,
    size: siteConfig.findy.appSize,
    href: "/findy",
    downloadUrl: "/Findy.dmg",
    icon: siteConfig.findy.icon,
    subtitle:
      "Open-Source (MIT) Plain-English File Search (⌘K), Space Lens Storage Treemap (⌘4), Vision OCR & Trash-Safe Clean Up",
  },
  {
    name: siteConfig.taskyfy.shortName,
    version: siteConfig.taskyfy.version,
    size: siteConfig.taskyfy.appSize,
    href: "/taskyfy",
    downloadUrl: "/Taskyfy.dmg",
    icon: siteConfig.taskyfy.icon,
    subtitle:
      "Open-Source (MIT) macOS Telemetry Studio & Plain-English Activity Monitor — 230+ Daemons, 7-Day RAM Advisor, Port Radar & 30-Day SQLite WAL",
  },
  {
    name: siteConfig.wheelify.shortName,
    version: siteConfig.wheelify.version,
    size: siteConfig.wheelify.appSize,
    href: "/wheelify",
    downloadUrl: "/Wheelify.dmg",
    icon: siteConfig.wheelify.icon,
    subtitle:
      "Open-Source (MIT) 16-Tool Radial Command Workspace (⌥ Space / Middle-Click) — Inline Math, Live ECB FX, Clipboard, Window Snap & Frontier/Ollama AI",
  },
  {
    name: siteConfig.showFreeSpace.shortName,
    version: siteConfig.showFreeSpace.version,
    size: siteConfig.showFreeSpace.appSize,
    href: `/${siteConfig.showFreeSpace.slug}`,
    downloadUrl: siteConfig.showFreeSpace.downloadUrl,
    previousVersion: "1.0.0",
    previousSize: "579 MB",
    previousDownloadUrl:
      "https://github.com/Shubham-sharma8/cogifyme/releases/download/v1.0/ShowFreeSpace.dmg",
    icon: siteConfig.showFreeSpace.icon,
    subtitle:
      "Interactive Sunburst & Treemap APFS Storage Map, Dev Cache Cleaner & 7 Widgets",
  },
  {
    name: siteConfig.lumenview.shortName,
    version: siteConfig.lumenview.version,
    size: siteConfig.lumenview.appSize,
    href: `/${siteConfig.lumenview.slug}`,
    downloadUrl: siteConfig.lumenview.downloadUrl,
    icon: siteConfig.lumenview.icon,
    subtitle: "Hardware DDC/CI Monitor Brightness & HiDPI Controller",
  },
  {
    name: siteConfig.metricove.shortName,
    version: siteConfig.metricove.version,
    size: siteConfig.metricove.appSize,
    href: `/${siteConfig.metricove.slug}`,
    downloadUrl: siteConfig.metricove.downloadUrl,
    icon: siteConfig.metricove.icon,
    subtitle: "Menu Bar Apple Silicon CPU, GPU, RAM & SMC Fan Telemetry",
  },
  {
    name: siteConfig.netguard.shortName,
    version: siteConfig.netguard.version,
    size: siteConfig.netguard.appSize,
    href: `/${siteConfig.netguard.slug}`,
    downloadUrl: siteConfig.netguard.downloadUrl,
    icon: siteConfig.netguard.icon,
    subtitle: "Real-Time Per-App Outbound Network Firewall & GeoIP Map",
  },
  {
    name: siteConfig.klipora.shortName,
    version: siteConfig.klipora.version,
    size: siteConfig.klipora.appSize,
    href: `/${siteConfig.klipora.slug}`,
    downloadUrl: siteConfig.klipora.downloadUrl,
    icon: siteConfig.klipora.icon,
    subtitle: "Instant Local Clipboard History Timeline & Snippet Manager",
  },
];

export default function EmDocReleasesPage() {
  const { emdoc } = siteConfig;
  const latestRelease = emdoc.releases[0];
  const previousReleases = emdoc.releases.slice(1);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "EmDoc",
        item: `${siteConfig.url}/emdoc`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Releases & Previous Versions",
        item: `${siteConfig.url}/releases`,
      },
    ],
  };

  return (
    <div className="min-h-screen pt-28 md:pt-36 pb-20 px-5 sm:px-8 bg-[#f5f5f5] dark:bg-[#0b0b0d] text-[#111] dark:text-[#f5f5f7] selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-[960px] mx-auto">
        {/* Top Navigation Link */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/emdoc"
            className="inline-flex items-center gap-2 text-xs font-medium text-[#666] dark:text-[#a1a1aa] hover:text-[#111] dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to EmDoc Overview (/emdoc)</span>
          </Link>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/helium/releases"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:underline"
            >
              <span>Helium v0.0.3, v0.0.2 &amp; v0.0.1 Releases (/helium/releases)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/compare/emdoc"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#666] dark:text-[#a1a1aa] hover:text-[#111] dark:hover:text-white transition-colors"
            >
              <span>EmDoc vs. Acrobat &amp; PDF Expert</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href="https://github.com/Shubham-sharma8/helium/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#666] dark:text-[#a1a1aa] hover:text-[#111] dark:hover:text-white transition-colors"
            >
              <GitHubIcon className="w-3.5 h-3.5" />
              <span>Helium Open-Source GitHub</span>
            </a>
          </div>
        </div>

        {/* Minimal Helumi Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3.5 mb-5">
            <div className="relative w-14 h-14 rounded-[16px] overflow-hidden bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/[0.1] shadow-sm shrink-0">
              <Image
                src="/brand/emdoc-icon-sm.webp"
                alt="EmDoc icon"
                fill
                className="object-cover"
                sizes="56px"
                priority
              />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#777] dark:text-[#888]">
                emdoc for macos • release archive
              </p>
              <p className="text-sm font-medium text-[#444] dark:text-[#a1a1aa] mt-0.5">
                Direct Universal .DMG installers &amp; cryptographic SHA-256 digests
              </p>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-[-0.035em] leading-[1.08] text-[#111] dark:text-[#f5f5f7]">
            Version history &amp;{" "}
            <span className="font-display italic font-normal">previous</span>{" "}
            downloads.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#555] dark:text-[#a1a1aa] max-w-[660px] leading-relaxed">
            Every release of EmDoc is distributed as a self-contained, zero-telemetry macOS Universal{" "}
            <code className="text-xs font-mono px-1.5 py-0.5 rounded bg-black/[0.05] dark:bg-white/[0.08] text-[#111] dark:text-[#f5f5f7]">
              .dmg
            </code>{" "}
            binary. Download the latest <strong className="font-semibold text-[#111] dark:text-white">v{latestRelease.version}</strong> build or roll back to any previous version below.
          </p>
          <div className="mt-5">
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
        </header>

        {/* Latest Release Spotlight Card */}
        <section aria-labelledby="latest-release-heading" className="mb-14">
          <div className="rounded-[28px] bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/[0.1] p-6 sm:p-9 shadow-[0_18px_40px_rgba(0,0,0,0.04)]">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#111] text-white dark:bg-white dark:text-[#111]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Latest Release
                </span>
                <h2
                  id="latest-release-heading"
                  className="text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-[#111] dark:text-[#f5f5f7]"
                >
                  EmDoc v{latestRelease.version}
                </h2>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[#f5f5f5] dark:bg-white/[0.06] text-[#555] dark:text-[#a1a1aa]">
                  Build {latestRelease.build}
                </span>
              </div>

              <div className="flex items-center gap-4 text-xs font-medium text-[#666] dark:text-[#a1a1aa]">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <time dateTime={latestRelease.releaseDateIso}>
                    Released {latestRelease.releaseDate}
                  </time>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <HardDrive className="w-3.5 h-3.5" />
                  {latestRelease.size} ({latestRelease.bytes})
                </span>
              </div>
            </div>

            {/* Primary Download Actions */}
            <div className="py-6 flex flex-wrap items-center justify-between gap-4 border-b border-black/[0.06] dark:border-white/[0.08]">
              <div>
                <p className="text-sm font-semibold text-[#111] dark:text-[#f5f5f7]">
                  EmDoc-{latestRelease.version}.dmg — Universal macOS Installer
                </p>
                <p className="text-xs text-[#666] dark:text-[#a1a1aa] mt-0.5">
                  {latestRelease.architecture} • {latestRelease.minMacOs} • 100% Free Forever
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={latestRelease.downloadUrl}
                  download
                  className="helumi-pill text-sm"
                >
                  <AppleLogoIcon className="w-4 h-4 -mt-0.5" />
                  <span>Download for macOS (v{latestRelease.version} • {latestRelease.size})</span>
                </a>
                <a
                  href={emdoc.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="helumi-pill-secondary text-sm"
                >
                  <AppStoreIcon className="w-4 h-4" />
                  <span>Download on Mac App Store</span>
                </a>
              </div>
            </div>

            {/* Release Notes & Checksum */}
            <div className="pt-6 grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-7">
                <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#777] dark:text-[#888] mb-3">
                  What&apos;s New in v{latestRelease.version}
                </h3>
                <ul className="space-y-2.5">
                  {latestRelease.notes.map((note, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-[#333] dark:text-[#d4d4d8] leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#111] dark:bg-white mt-2 shrink-0" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-5">
                <div className="rounded-2xl bg-[#f5f5f5] dark:bg-[#0b0b0d] border border-black/[0.06] dark:border-white/[0.08] p-4">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#111] dark:text-[#f5f5f7] mb-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span>SHA-256 Checksum Verification</span>
                  </div>
                  <p className="text-[11px] font-mono break-all text-[#555] dark:text-[#a1a1aa] select-all bg-white dark:bg-[#141417] p-2.5 rounded-xl border border-black/[0.06] dark:border-white/[0.06]">
                    {latestRelease.sha256}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-[11px] font-mono text-[#666] dark:text-[#888]">
                    <Terminal className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">shasum -a 256 EmDoc-{latestRelease.version}.dmg</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Previous Versions Archive */}
        <section aria-labelledby="previous-versions-heading" className="mb-16">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#777] dark:text-[#888] mb-1">
                <History className="w-3.5 h-3.5" />
                <span>Previous Versions Archive</span>
              </div>
              <h2
                id="previous-versions-heading"
                className="text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-[#111] dark:text-[#f5f5f7]"
              >
                Older EmDoc releases for macOS.
              </h2>
            </div>
            <span className="text-xs font-mono text-[#666] dark:text-[#a1a1aa]">
              {previousReleases.length} archived builds
            </span>
          </div>

          <div className="space-y-4">
            {previousReleases.map((rel) => (
              <article
                key={rel.version}
                className="rounded-[24px] bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/[0.09] p-6 sm:p-7 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-black/[0.06] dark:border-white/[0.07]">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-xl font-bold tracking-[-0.02em] text-[#111] dark:text-[#f5f5f7]">
                        EmDoc v{rel.version}
                      </h3>
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#f5f5f5] dark:bg-white/[0.06] text-[#555] dark:text-[#a1a1aa]">
                        Build {rel.build}
                      </span>
                      <span className="text-xs text-[#666] dark:text-[#a1a1aa]">
                        • Released{" "}
                        <time dateTime={rel.releaseDateIso}>{rel.releaseDate}</time>
                      </span>
                    </div>
                    <p className="text-xs text-[#666] dark:text-[#a1a1aa] mt-1">
                      {rel.architecture} • {rel.minMacOs} • {rel.size} ({rel.bytes})
                    </p>
                  </div>

                  <div className="shrink-0">
                    <a
                      href={rel.downloadUrl}
                      download
                      className="helumi-pill-secondary text-xs"
                    >
                      <AppleLogoIcon className="w-3.5 h-3.5 -mt-0.5" />
                      <span>Download v{rel.version} ({rel.size})</span>
                    </a>
                  </div>
                </div>

                <div className="pt-4 grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
                  <ul className="md:col-span-7 space-y-1.5">
                    {rel.notes.map((note, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs sm:text-sm text-[#444] dark:text-[#d4d4d8] leading-relaxed"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#777] mt-2 shrink-0" />
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="md:col-span-5 rounded-xl bg-[#f5f5f5] dark:bg-[#0b0b0d] border border-black/[0.05] dark:border-white/[0.06] p-3">
                    <p className="text-[10px] font-mono uppercase tracking-wider text-[#777] dark:text-[#888] mb-1">
                      SHA-256 Digest
                    </p>
                    <p className="text-[11px] font-mono break-all text-[#555] dark:text-[#a1a1aa] select-all">
                      {rel.sha256}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Other macOS Direct DMG Downloads */}
        <section aria-labelledby="other-mac-dmg-heading">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#777] dark:text-[#888] mb-1">
              more native macos utilities
            </p>
            <h2
              id="other-mac-dmg-heading"
              className="text-2xl font-bold tracking-[-0.03em] text-[#111] dark:text-[#f5f5f7]"
            >
              Other Cogify macOS .DMG installers.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {OTHER_MAC_RELEASES.map((app) => (
              <div
                key={app.name}
                className="rounded-[20px] bg-white dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.08] p-4 flex items-center justify-between gap-3"
              >
                <Link href={app.href} className="flex items-center gap-3 min-w-0 flex-1 group">
                  <div className="relative w-11 h-11 rounded-[12px] overflow-hidden border border-black/[0.08] dark:border-white/[0.1] shrink-0 bg-[#f5f5f5] dark:bg-[#1d1d22]">
                    <Image
                      src={app.icon}
                      alt={app.name}
                      fill
                      className="object-cover"
                      sizes="44px"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-[#111] dark:text-[#f5f5f7] group-hover:underline truncate">
                        {app.name}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#f5f5f5] dark:bg-white/[0.06] text-[#666] dark:text-[#a1a1aa]">
                        v{app.version}
                      </span>
                    </div>
                    <p className="text-xs text-[#666] dark:text-[#a1a1aa] truncate mt-0.5">
                      {app.subtitle}
                    </p>
                  </div>
                </Link>

                <div className="flex flex-col items-end gap-1.5 shrink-0">
                  <a
                    href={app.downloadUrl}
                    download
                    className="helumi-pill-secondary text-xs shrink-0 !px-3.5 !py-2"
                    title={`Download ${app.name} v${app.version} (${app.size} .DMG)`}
                  >
                    <AppleLogoIcon className="w-3.5 h-3.5 -mt-0.5" />
                    <span>v{app.version} ({app.size})</span>
                  </a>
                  {app.previousDownloadUrl && (
                    <a
                      href={app.previousDownloadUrl}
                      download
                      className="text-[10.5px] font-mono text-[#666] dark:text-[#a1a1aa] hover:underline"
                      title={`Download previous ${app.name} v${app.previousVersion} (${app.previousSize} .DMG)`}
                    >
                      prev v{app.previousVersion} ({app.previousSize})
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <OtherAppsShowcase currentSlug="emdoc" />

      <AuthorBio
        currentSlug="emdoc"
        contextLabel="EmDoc PDF Workstation • Release Archive"
      />
    </div>
  );
}
