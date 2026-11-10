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
  Check,
  Code2,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { WHATS_NEW_V002_PILLARS } from "@/components/helium/helium-data";
import { AuthorBio } from "@/components/seo/author-bio";
import { OtherAppsShowcase } from "@/components/products/other-apps-showcase";
import {
  AppleLogoIcon,
  GitHubIcon,
} from "@/components/ui/platform-icons";

export const metadata: Metadata = {
  title:
    "Helium Releases, What's New in v0.0.3 & Previous Versions (.DMG Download) | COGIFY",
  description:
    "Download Helium v0.0.3 (Build 3, 8.4 MB DMG with GitHub Releases Auto-Updater) or previous versions v0.0.2 and v0.0.1 for macOS. Read the full What's New changelog, verify SHA-256 checksums, and explore the open-source Swift 6 repository at github.com/Shubham-sharma8/helium.",
  keywords: [
    "Helium download",
    "Helium v0.0.3 DMG",
    "Helium v0.0.2 DMG",
    "Helium v0.0.1 DMG",
    "Helium previous versions",
    "Helium release notes",
    "Helium changelog",
    "Helium open source GitHub",
    "Shubham-sharma8/helium",
  ],
  alternates: {
    canonical: "https://cogify.me/helium/releases",
  },
  openGraph: {
    title:
      "Helium Releases, What's New in v0.0.3 & Previous Versions — Open-Source macOS Cloud Pool",
    description:
      "Download Helium v0.0.3 (8.4 MB Universal DMG with GitHub Releases Auto-Updater), v0.0.2, or v0.0.1 from GitHub Releases (Shubham-sharma8/helium) with full release notes and SHA-256 verification.",
    url: "https://cogify.me/helium/releases",
    type: "website",
    images: [
      {
        url: "https://cogify.me/brand/Helium/02-helium-hero-finder-zero-bytes.png",
        width: 1440,
        height: 900,
        alt: "Helium for macOS Release Archive & What's New in v0.0.3",
      },
    ],
  },
};

export default function HeliumReleasesPage() {
  const { helium } = siteConfig;
  const releases = helium.releases ?? [];
  const latestRelease = releases[0];
  const previousReleases = releases.slice(1);

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
        name: "Helium",
        item: `${siteConfig.url}/helium`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Releases, What's New & Previous Versions",
        item: `${siteConfig.url}/helium/releases`,
      },
    ],
  };

  return (
    <div className="min-h-screen pt-28 md:pt-36 pb-20 px-5 sm:px-8 bg-[#F7F7F7] dark:bg-[#0b0b0d] text-[#111110] dark:text-[#f5f5f7] selection:bg-emerald-500/20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-[980px] mx-auto">
        {/* Top Navigation Bar */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/helium"
            className="inline-flex items-center gap-2 text-xs font-medium text-[#666] dark:text-[#a1a1aa] hover:text-[#111110] dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Helium Overview (/helium)</span>
          </Link>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/Shubham-sharma8/helium"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-400 hover:underline"
            >
              <GitHubIcon className="w-3.5 h-3.5" />
              <span>Open Source Repo (Shubham-sharma8/helium)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://github.com/Shubham-sharma8/helium/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#666] dark:text-[#a1a1aa] hover:text-[#111110] dark:hover:text-white transition-colors"
            >
              <GitHubIcon className="w-3.5 h-3.5" />
              <span>GitHub Releases</span>
            </a>
            <Link
              href="/releases"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#666] dark:text-[#a1a1aa] hover:text-[#111110] dark:hover:text-white transition-colors"
            >
              <span>All Cogify DMG Releases</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3.5 mb-5">
            <div className="relative w-14 h-14 rounded-[16px] overflow-hidden bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/[0.1] shadow-sm shrink-0 p-1.5">
              <Image
                src="/brand/Helium/icon.webp"
                alt="Helium icon"
                fill
                className="object-contain p-1"
                sizes="56px"
                priority
              />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#777] dark:text-[#888]">
                  helium for macos • release archive &amp; changelog
                </p>
                <a
                  href="https://github.com/Shubham-sharma8/helium"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/12 text-emerald-700 dark:text-emerald-300 text-[11px] font-semibold"
                >
                  <GitHubIcon className="w-3 h-3" />
                  <span>Open Source • MIT License</span>
                </a>
              </div>
              <p className="text-sm font-medium text-[#444] dark:text-[#a1a1aa] mt-0.5">
                Direct Universal .DMG installers, What&apos;s New release notes &amp; SHA-256 digests
              </p>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-[-0.035em] leading-[1.08] text-[#111110] dark:text-[#f5f5f7]">
            What&apos;s new in Helium &amp;{" "}
            <span className="font-display italic font-normal">previous</span>{" "}
            releases.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#555] dark:text-[#a1a1aa] max-w-[700px] leading-relaxed">
            Helium is 100% open-source under the MIT License at{" "}
            <a
              href="https://github.com/Shubham-sharma8/helium"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm underline underline-offset-4 text-[#111110] dark:text-white"
            >
              github.com/Shubham-sharma8/helium
            </a>
            . Download the latest{" "}
            <strong className="font-semibold text-[#111110] dark:text-white">
              v{latestRelease.version} (Build {latestRelease.build})
            </strong>{" "}
            universal installer, read the full What&apos;s New breakdown, or download previous{" "}
            <code className="text-xs font-mono px-1.5 py-0.5 rounded bg-black/[0.05] dark:bg-white/[0.08] text-[#111110] dark:text-[#f5f5f7]">
              .dmg
            </code>{" "}
            builds below.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-4">
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
            <a
              href="https://github.com/Shubham-sharma8/helium"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-[#141417] border border-[#E6E6E4] dark:border-white/10 text-xs font-semibold text-[#111110] dark:text-white hover:border-black/30 transition-colors shadow-2xs"
            >
              <GitHubIcon className="w-4 h-4" />
              <span>Star &amp; Fork Shubham-sharma8/helium on GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>
        </header>

        {/* Latest Release Spotlight Card + Full What's New in v0.0.2 */}
        <section aria-labelledby="latest-helium-heading" className="mb-16">
          <div className="rounded-[28px] bg-white dark:bg-[#141417] border border-[#E6E6E4] dark:border-white/[0.1] p-6 sm:p-9 shadow-[0_18px_40px_rgba(0,0,0,0.04)]">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-600 text-white">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Latest Release
                </span>
                <h2
                  id="latest-helium-heading"
                  className="text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-[#111110] dark:text-[#f5f5f7]"
                >
                  Helium v{latestRelease.version}
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
                <p className="text-sm font-semibold text-[#111110] dark:text-[#f5f5f7]">
                  Helium-{latestRelease.version}.dmg — Universal macOS Installer
                </p>
                <p className="text-xs text-[#666] dark:text-[#a1a1aa] mt-0.5">
                  {latestRelease.architecture} • {latestRelease.minMacOs} • Apple Developer ID Signed &amp; Notarized
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={latestRelease.downloadUrl}
                  download
                  className="helumi-pill text-sm"
                >
                  <AppleLogoIcon className="w-4 h-4 -mt-0.5" />
                  <span>
                    Download Helium v{latestRelease.version} ({latestRelease.size})
                  </span>
                </a>
                <a
                  href={latestRelease.githubTagUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="helumi-pill-secondary text-sm"
                >
                  <GitHubIcon className="w-4 h-4" />
                  <span>GitHub Release Tag (v{latestRelease.version})</span>
                </a>
              </div>
            </div>

            {/* SHA-256 Checksum */}
            <div className="py-5 border-b border-black/[0.06] dark:border-white/[0.08]">
              <div className="rounded-2xl bg-[#F7F7F7] dark:bg-[#0b0b0d] border border-black/[0.06] dark:border-white/[0.08] p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#111110] dark:text-[#f5f5f7] mb-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>SHA-256 Checksum Verification (Helium-{latestRelease.version}.dmg)</span>
                  </div>
                  <p className="text-[11.5px] font-mono break-all text-[#555] dark:text-[#a1a1aa] select-all">
                    {latestRelease.sha256}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#666] dark:text-[#888] bg-white dark:bg-[#141417] px-3 py-2 rounded-xl border border-black/[0.06] dark:border-white/[0.06] shrink-0">
                  <Terminal className="w-3.5 h-3.5 shrink-0" />
                  <span>shasum -a 256 Helium-{latestRelease.version}.dmg</span>
                </div>
              </div>
            </div>

            {/* Full What's New in Helium v0.0.3 (Build 3) & v0.0.2 Architecture */}
            <div className="pt-7">
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald-700 dark:text-emerald-400">
                  New in Helium v0.0.3 (Build 3) • Released November 10, 2026
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-[-0.025em] mt-1">
                  GitHub Releases Auto-Updater, Persistent Multi-Drive Sign-In &amp; Refined Workspace
                </h3>
              </div>

              {/* v0.0.3 Highlights Grid */}
              <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-2xl bg-emerald-500/[0.06] border border-emerald-500/20 p-5">
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 mb-2">
                    <Check className="w-3.5 h-3.5" />
                    <span>New in v0.0.3 • Settings → Updates</span>
                  </div>
                  <h4 className="text-base font-bold text-[#111110] dark:text-white">
                    GitHub Releases Auto-Update
                  </h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#111110]/70 dark:text-white/70">
                    Directly checks{" "}
                    <code className="font-mono text-[11px]">
                      github.com/Shubham-sharma8/helium/releases
                    </code>{" "}
                    for new versions, displays release notes in-app, and supports
                    automatic or 1-click <code className="font-mono text-[11px]">.dmg</code>{" "}
                    download and in-place installation to{" "}
                    <code className="font-mono text-[11px]">/Applications/Helium.app</code>.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F7F7F7] dark:bg-white/[0.03] border border-[#E6E6E4] dark:border-white/10 p-5">
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 mb-2">
                    <Check className="w-3.5 h-3.5" />
                    <span>New in v0.0.3 • OAuth 2.0 PKCE</span>
                  </div>
                  <h4 className="text-base font-bold text-[#111110] dark:text-white">
                    Persistent Multi-Drive Sign-In
                  </h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#111110]/70 dark:text-white/70">
                    Hardened OAuth 2.0 refresh-token persistence in macOS Keychain
                    with automatic account session recovery across app restarts and
                    macOS reboots.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F7F7F7] dark:bg-white/[0.03] border border-[#E6E6E4] dark:border-white/10 p-5">
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 mb-2">
                    <Check className="w-3.5 h-3.5" />
                    <span>New in v0.0.3 • SwiftUI Polish</span>
                  </div>
                  <h4 className="text-base font-bold text-[#111110] dark:text-white">
                    Refined Menu Bar &amp; Pool Layout
                  </h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#111110]/70 dark:text-white/70">
                    Top-aligned menu bar settings &amp; search panels plus a
                    responsive two-row toolbar layout in the Google Drive Pool
                    header that prevents text wrapping.
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald-700 dark:text-emerald-400">
                  Core v0.0.2 / v0.0.3 Architecture • 6 Major Feature Pillars
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-[-0.025em] mt-1">
                  25+ Multi-Protocol Cloud Presets, Safe-Write Canary, Backups &amp; Time Travel
                </h3>
              </div>

              {/* 25+ Cloud Presets Strip */}
              <div className="mb-7 rounded-2xl bg-[#F7F7F7] dark:bg-white/[0.03] border border-[#E6E6E4] dark:border-white/10 p-4 sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-[11.5px] font-mono uppercase tracking-wider text-[#111110]/65 dark:text-white/65 font-semibold">
                    25+ Built-In Storage Presets (StorageServicePreset) + Smart Endpoint &amp; S3 Region Inference
                  </span>
                  <span className="text-[11.5px] font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
                    OAuth 2.0 PKCE · S3 · WebDAV · SFTP/SSH · SMB · BYOK · External SSD
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Google Drive Pool (64 MiB RAID-0)",
                    "Amazon S3",
                    "Cloudflare R2 (Zero Egress)",
                    "Backblaze B2",
                    "Wasabi",
                    "Hetzner Object Storage",
                    "DigitalOcean Spaces",
                    "Storj DCS",
                    "Tigris",
                    "Google Cloud Storage (HMAC)",
                    "MinIO / Garage / Ceph",
                    "Nextcloud (WebDAV)",
                    "ownCloud",
                    "Fastmail Files",
                    "pCloud",
                    "Synology NAS",
                    "Hetzner Storage Box (SFTP)",
                    "rsync.net (SSH)",
                    "Standard SFTP",
                    "Local NAS / Time Capsule (_smb._tcp)",
                    "Azure Files (SMB)",
                    "Dropbox (BYOK OAuth)",
                    "Microsoft OneDrive (BYOK)",
                    "Box (BYOK)",
                    "External USB / Thunderbolt SSD",
                  ].map((preset) => (
                    <span
                      key={preset}
                      className="px-2.5 py-1 rounded-full bg-white dark:bg-[#141417] border border-[#E6E6E4] dark:border-white/10 text-[11.5px] font-medium text-[#111110]/80 dark:text-white/80"
                    >
                      {preset}
                    </span>
                  ))}
                </div>
              </div>

              {/* 6 Detailed Feature Pillar Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {WHATS_NEW_V002_PILLARS.map((pillar) => (
                  <article
                    key={pillar.id}
                    className="rounded-[22px] bg-[#F7F7F7] dark:bg-white/[0.03] border border-[#E6E6E4] dark:border-white/10 p-5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="inline-flex items-center gap-2">
                          <span className="font-mono text-[11.5px] font-semibold px-2 py-0.5 rounded-md bg-white dark:bg-white/10 border border-[#E6E6E4] dark:border-white/15 text-[#111110] dark:text-white">
                            {pillar.number}
                          </span>
                          <span className="text-[11.5px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/12 text-emerald-700 dark:text-emerald-300">
                            {pillar.badge}
                          </span>
                        </div>
                        {pillar.shortcut && (
                          <kbd className="px-2 py-0.5 rounded-md bg-white dark:bg-white/10 border border-[#E6E6E4] dark:border-white/15 font-mono text-[11px] font-semibold text-[#111110]/75 dark:text-white/75">
                            {pillar.shortcut}
                          </kbd>
                        )}
                      </div>

                      <h4 className="text-[19px] font-semibold tracking-[-0.02em] leading-[1.2] text-[#111110] dark:text-white">
                        {pillar.title}
                      </h4>
                      <p className="mt-1.5 text-[13px] leading-[1.55] text-[#111110]/68 dark:text-white/68">
                        {pillar.subtitle}
                      </p>

                      <ul className="mt-4 space-y-2.5 pt-3 border-t border-[#E6E6E4] dark:border-white/10">
                        {pillar.bullets.map((b) => (
                          <li key={b.heading} className="text-[12.5px] leading-[1.5]">
                            <div className="font-semibold text-[#111110] dark:text-white flex items-center gap-1.5">
                              <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                              <span>{b.heading}</span>
                            </div>
                            <p className="pl-5 text-[12px] text-[#111110]/65 dark:text-white/65 mt-0.5">
                              {b.detail}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Previous Versions Archive (v0.0.1) */}
        <section aria-labelledby="previous-helium-heading" className="mb-16">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#777] dark:text-[#888] mb-1">
                <History className="w-3.5 h-3.5" />
                <span>Previous Versions Archive</span>
              </div>
              <h2
                id="previous-helium-heading"
                className="text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-[#111110] dark:text-[#f5f5f7]"
              >
                Older Helium releases for macOS.
              </h2>
            </div>
            <span className="text-xs font-mono text-[#666] dark:text-[#a1a1aa]">
              {previousReleases.length} archived build
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
                      <h3 className="text-xl font-bold tracking-[-0.02em] text-[#111110] dark:text-[#f5f5f7]">
                        Helium v{rel.version}
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

                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    <a
                      href={rel.downloadUrl}
                      download
                      className="helumi-pill-secondary text-xs"
                    >
                      <AppleLogoIcon className="w-3.5 h-3.5 -mt-0.5" />
                      <span>Download v{rel.version} ({rel.size})</span>
                    </a>
                    <a
                      href={rel.githubTagUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="helumi-pill-secondary text-xs"
                    >
                      <GitHubIcon className="w-3.5 h-3.5" />
                      <span>v{rel.version} Tag</span>
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
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="md:col-span-5 rounded-xl bg-[#f5f5f5] dark:bg-[#0b0b0d] border border-black/[0.05] dark:border-white/[0.06] p-3">
                    <p className="text-[10px] font-mono uppercase tracking-wider text-[#777] dark:text-[#888] mb-1">
                      SHA-256 Digest (v{rel.version})
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

        {/* Open Source Repository & Build from Source Card */}
        <section aria-labelledby="helium-oss-heading">
          <div className="rounded-[26px] bg-white dark:bg-[#141417] border border-[#E6E6E4] dark:border-white/10 p-6 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E6E6E4] dark:border-white/10">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-semibold">
                  <Code2 className="w-4 h-4" />
                  <span>Open Source • MIT License • Swift 6.0</span>
                </div>
                <h2
                  id="helium-oss-heading"
                  className="text-2xl font-bold tracking-[-0.025em] mt-1"
                >
                  Inspect the source or build Helium.app yourself.
                </h2>
                <p className="text-sm text-[#555] dark:text-[#a1a1aa] mt-1">
                  Full source code for <code className="font-mono text-xs">OrbitCore</code>,{" "}
                  <code className="font-mono text-xs">HeliumApp</code>,{" "}
                  <code className="font-mono text-xs">HeliumOpener</code>,{" "}
                  <code className="font-mono text-xs">OrbitFS</code>, and{" "}
                  <code className="font-mono text-xs">OrbitFinder</code> is available on GitHub.
                </p>
              </div>
              <a
                href="https://github.com/Shubham-sharma8/helium"
                target="_blank"
                rel="noopener noreferrer"
                className="helumi-pill text-xs sm:text-sm shrink-0"
              >
                <GitHubIcon className="w-4 h-4" />
                <span>github.com/Shubham-sharma8/helium</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="mt-5 rounded-2xl bg-[#111110] text-white p-4 font-mono text-xs leading-relaxed overflow-x-auto">
              <div className="text-white/50"># Clone, run tests, and package Helium.app locally (macOS 15.4+ / Xcode 16.3+)</div>
              <div>git clone https://github.com/Shubham-sharma8/helium.git &amp;&amp; cd helium</div>
              <div>swift build &amp;&amp; swift test</div>
              <div>./scripts/build-app-bundle.sh &amp;&amp; open build/Helium.app</div>
            </div>
          </div>
        </section>
      </div>

      <OtherAppsShowcase currentSlug="helium" />

      <AuthorBio
        currentSlug="helium"
        contextLabel="Helium for macOS • Open-Source Release Archive"
      />
    </div>
  );
}
