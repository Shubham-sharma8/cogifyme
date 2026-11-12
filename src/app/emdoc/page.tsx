/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Cpu,
  HardDrive,
  MessageSquare,
  History,
  ArrowUpRight,
  Check,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { EmDocGallery } from "@/components/products/emdoc-gallery";
import { DownloadModal } from "@/components/products/download-modal";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { FaqSection, type FaqItem } from "@/components/seo/faq-section";
import { AuthorBio } from "@/components/seo/author-bio";
import { InlineAppComparison } from "@/components/compare/inline-app-comparison";
import { OtherAppsShowcase } from "@/components/products/other-apps-showcase";
import { AppleLogoIcon, AppStoreIcon } from "@/components/ui/platform-icons";

const EMDOC_FAQS: FaqItem[] = [
  {
    question: "How is EmDoc v1.1 only 7.8 MB compared to Adobe Acrobat's 1.2 GB?",
    answer:
      "EmDoc is compiled as a 100% native macOS Universal Binary (ARM64 + x86_64) using Swift, AppKit, PDFKit, and CoreGraphics without Electron, Chromium, or bundled cross-platform runtimes. This achieves a 7.8 MB installer footprint and ~45 MB baseline RAM.",
  },
  {
    question: "Where can I download previous versions of EmDoc (.DMG)?",
    answer:
      "All current and archived macOS releases—including v1.1 (November 6, 2026), v1.0.0, v0.0.2, and v0.0.1—are available with direct .DMG links and SHA-256 checksums on our dedicated EmDoc Releases & Previous Versions page (/releases).",
  },
  {
    question: "Does EmDoc require an internet connection or cloud account to compress or edit PDFs?",
    answer:
      "No. EmDoc operates with 100% air-gapped data sovereignty. All vector ink annotations, Bates numbering, page reorganization, and on-device PDF compression run locally on your Mac.",
  },
  {
    question: "Is EmDoc really 100% free on macOS?",
    answer:
      "Yes. EmDoc is completely free for individual users both via direct Universal .DMG download and on the Mac App Store (id6810306925) with zero subscriptions, zero trial limits, and zero watermarks.",
  },
];

const EMDOC_ROLES = [
  {
    role: "Legal & Compliance",
    desc: "Apply batch Bates numbering, scrub XMP metadata, and permanently redact sensitive PDF streams offline.",
  },
  {
    role: "Engineers & Architects",
    desc: "Inspect 500+ page technical datasheets in ~45 MB RAM with <0.3s cold launch and zero background daemons.",
  },
  {
    role: "Researchers & Students",
    desc: "Run on-device Apple Vision OCR on scanned papers, highlight vector text, and merge lecture PDFs.",
  },
  {
    role: "Founders & Finance",
    desc: "Sign contracts with vector ink, add official rubber stamps, and lock files with AES-256 encryption.",
  },
  {
    role: "Designers & Agencies",
    desc: "Downsample heavy portfolios by up to 80% while preserving razor-sharp vector typography.",
  },
  {
    role: "Everyday Mac Users",
    desc: "Replace $239/yr subscriptions and 1.2 GB of background bloat with a 7.8 MB native macOS app.",
  },
];

export default function EmDocProductPage() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const emdoc = siteConfig.emdoc;

  return (
    <div className="min-h-screen pt-28 sm:pt-32 pb-20 bg-[#F7F7F7] dark:bg-[#0b0b0d] text-[#111] dark:text-[#f5f5f7]">
      <div className="max-w-[980px] mx-auto px-5 sm:px-8">
        <Breadcrumbs
          items={[
            { label: "Products", href: "/products" },
            { label: "EmDoc PDF Workstation", href: "/emdoc" },
          ]}
          includeJsonLd={false}
        />
      </div>

      {/* Supaste-Style Centered Hero Header */}
      <section className="max-w-[980px] mx-auto px-5 sm:px-8 pt-6 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/[0.1] text-xs font-medium text-[#444] dark:text-[#d4d4d8] shadow-2xs mb-6">
          <AppleLogoIcon className="w-3.5 h-3.5 -mt-0.5 text-[#111] dark:text-white" />
          <span className="font-semibold text-[#111] dark:text-white">
            EmDoc for macOS
          </span>
          <span>·</span>
          <span>v{emdoc.version} ({emdoc.appSize})</span>
          <span>·</span>
          <span>Released {emdoc.releaseDate}</span>
        </div>

        <div className="flex justify-center mb-5">
          <div className="relative w-20 h-20 rounded-[22px] overflow-hidden border border-black/[0.08] dark:border-white/[0.14] shadow-lg bg-white dark:bg-[#141417]">
            <Image
              src="/brand/emdoc-icon-sm.webp"
              alt="EmDoc App Icon"
              fill
              priority
              sizes="80px"
              className="object-cover"
            />
          </div>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-[-0.04em] leading-[1.05] text-[#111] dark:text-[#f5f5f7] max-w-3xl mx-auto">
          Edit PDFs locally.
          <br />
          <span className="font-display italic font-normal text-[#006FFF] dark:text-[#60A5FA]">
            In a {emdoc.appSize} native app.
          </span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-[#555] dark:text-[#a1a1aa] leading-relaxed max-w-2xl mx-auto">
          {emdoc.shortDescription}
        </p>

        {/* Supaste Primary & Secondary Pill CTAs */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a
            href={emdoc.downloadUrl}
            download
            className="helumi-pill text-sm"
          >
            <AppleLogoIcon className="w-4 h-4 -mt-0.5" />
            <span>Download for macOS (v{emdoc.version} · {emdoc.appSize})</span>
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

          <Link
            href="/releases"
            className="helumi-pill-secondary text-sm"
          >
            <History className="w-4 h-4" />
            <span>Previous Versions</span>
          </Link>

          <button
            type="button"
            onClick={() => setDownloadModalOpen(true)}
            className="helumi-pill-secondary text-sm cursor-pointer"
          >
            <Cpu className="w-4 h-4" />
            <span>SHA-256 Checksum</span>
          </button>
        </div>

        {/* Supaste 3-Item Trust Micro-Bar */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-xs text-[#666] dark:text-[#a1a1aa]">
          <span className="inline-flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-[#006FFF]" />
            <span>100% Free Forever</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-[#006FFF]" />
            <span>Fully offline &amp; air-gapped privacy</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-[#006FFF]" />
            <span>macOS 13.0 or later (Apple Silicon &amp; Intel)</span>
          </span>
        </div>

        {/* Supaste-Style Capability Pills Strip */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
          {[
            "7.8 MB Universal Binary",
            "~45 MB RAM Footprint",
            "Merge, Split & Reorder",
            "Permanent Stream Redaction",
            "Batch Bates Numbering",
            "Apple Vision Neural OCR",
            "Vector PDF Compression",
            "AES-256 Lock & Metadata Wipe",
          ].map((pill) => (
            <span
              key={pill}
              className="px-3 py-1 rounded-full bg-white dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.09] text-xs font-medium text-[#333] dark:text-[#d4d4d8]"
            >
              {pill}
            </span>
          ))}
        </div>
      </section>

      {/* Interactive Screenshot Showcase Gallery */}
      <section className="max-w-[980px] mx-auto px-5 sm:px-8 py-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#777] dark:text-[#888] mb-1">
            interactive workstation walkthrough
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-[-0.035em] text-[#111] dark:text-white">
            Eight native tools.{" "}
            <span className="font-display italic font-normal text-[#006FFF] dark:text-[#60A5FA]">
              Zero clutter.
            </span>
          </h2>
          <p className="text-sm text-[#666] dark:text-[#a1a1aa] mt-1.5">
            Click any module below to inspect the real macOS workstation build.
          </p>
        </div>

        <EmDocGallery />
      </section>

      {/* Supaste-Style Visual Feature Bento Cards */}
      <section className="max-w-[980px] mx-auto px-5 sm:px-8 py-12">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#777] dark:text-[#888] mb-1">
            engineered in C++20 &amp; AppKit
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-[-0.035em] text-[#111] dark:text-white">
            Everything you need for PDFs.{" "}
            <span className="font-display italic font-normal text-[#006FFF] dark:text-[#60A5FA]">
              Nothing you don&apos;t.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {emdoc.features.map((feat, idx) => (
            <div
              key={feat.title}
              className="rounded-[24px] bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/[0.09] p-6 flex flex-col justify-between shadow-[0_8px_28px_rgba(0,0,0,0.025)]"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#F7F7F7] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08] text-[11px] font-medium text-[#444] dark:text-[#d4d4d8]">
                    {feat.tag}
                  </span>
                  <span className="text-[11px] font-mono text-[#888]">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#111] dark:text-white mb-1.5">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#555] dark:text-[#a1a1aa] leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Supaste-Style "Built for everything you do" Role Grid */}
      <section className="max-w-[980px] mx-auto px-5 sm:px-8 py-10">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#777] dark:text-[#888] mb-1">
            use cases
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-[-0.035em] text-[#111] dark:text-white">
            Built for{" "}
            <span className="font-display italic font-normal text-[#006FFF] dark:text-[#60A5FA]">
              everything you do.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {EMDOC_ROLES.map((item) => (
            <div
              key={item.role}
              className="rounded-[22px] bg-white dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.08] p-5"
            >
              <h3 className="text-sm font-bold text-[#111] dark:text-white mb-1.5">
                {item.role}
              </h3>
              <p className="text-xs sm:text-sm text-[#555] dark:text-[#a1a1aa] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Release History & Previous Versions Preview */}
      <section className="max-w-[980px] mx-auto px-5 sm:px-8 py-10">
        <div className="rounded-[26px] bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/[0.1] p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#777] dark:text-[#888] mb-1">
                release history &amp; archive
              </p>
              <h2 className="text-2xl font-bold tracking-[-0.03em] text-[#111] dark:text-white">
                Current &amp;{" "}
                <span className="font-display italic font-normal">previous</span>{" "}
                versions.
              </h2>
            </div>
            <Link
              href="/releases"
              className="helumi-pill-secondary text-xs self-start sm:self-auto"
            >
              <span>All Releases (/releases)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="divide-y divide-black/[0.06] dark:divide-white/[0.07]">
            {emdoc.releases.map((rel) => (
              <div
                key={rel.version}
                className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-bold text-[#111] dark:text-white">
                      EmDoc v{rel.version}
                    </span>
                    {rel.isLatest && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#111] text-white dark:bg-white dark:text-[#111]">
                        Latest
                      </span>
                    )}
                    <span className="text-xs text-[#666] dark:text-[#a1a1aa]">
                      · Released {rel.releaseDate} · {rel.size}
                    </span>
                  </div>
                  <p className="text-xs text-[#666] dark:text-[#a1a1aa] mt-0.5">
                    {rel.notes[0]}
                  </p>
                </div>

                <a
                  href={rel.downloadUrl}
                  download
                  className={
                    rel.isLatest
                      ? "helumi-pill text-xs shrink-0 !py-2 !px-4"
                      : "helumi-pill-secondary text-xs shrink-0 !py-2 !px-4"
                  }
                >
                  <AppleLogoIcon className="w-3.5 h-3.5 -mt-0.5" />
                  <span>Download v{rel.version} ({rel.size})</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supaste-Style "One price. $0 Forever." + Technical Specifications */}
      <section className="max-w-[980px] mx-auto px-5 sm:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Supaste-Style $0 Lifetime Card */}
          <div className="lg:col-span-5 rounded-[26px] bg-[#0D0D0D] text-white border border-white/10 p-7 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-white/85 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#60A5FA]" />
                <span>No subscriptions · No cloud lock-in</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-[-0.03em]">
                One price.{" "}
                <span className="font-display italic font-normal text-[#60A5FA]">
                  Lifetime access.
                </span>
              </h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-5xl font-bold tracking-tight">$0</span>
                <span className="text-xs text-white/60">
                  free forever · vs. $239.88/yr Acrobat
                </span>
              </div>
              <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-white/80">
                {[
                  "All 15+ pro PDF tools unlocked from day one",
                  "7.8 MB Universal binary (Apple Silicon & Intel)",
                  "100% air-gapped local processing (0 telemetry)",
                  "Direct .DMG & official Mac App Store build",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#60A5FA] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7 pt-5 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href={emdoc.downloadUrl}
                download
                className="w-full h-11 rounded-full bg-white text-[#111] font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                <AppleLogoIcon className="w-4 h-4 -mt-0.5" />
                <span>Download EmDoc v{emdoc.version} ({emdoc.appSize})</span>
              </a>
              <Link
                href="/suggestions"
                className="text-center text-xs text-white/60 hover:text-white transition-colors inline-flex items-center justify-center gap-1.5 py-1"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Request a feature or report a bug</span>
              </Link>
            </div>
          </div>

          {/* Right: Technical Specifications */}
          <div className="lg:col-span-7 rounded-[26px] border border-black/[0.07] dark:border-white/[0.08] bg-white dark:bg-[#141417] p-7">
            <div className="flex items-center justify-between gap-2 mb-4">
              <h3 className="text-xl font-bold text-[#111] dark:text-white">
                Technical Specifications
              </h3>
              <div className="flex items-center gap-3 text-xs text-[#666] dark:text-[#a1a1aa]">
                <span className="inline-flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Air-Gapped
                </span>
                <span className="inline-flex items-center gap-1">
                  <HardDrive className="w-3.5 h-3.5" /> {emdoc.appSize}
                </span>
              </div>
            </div>
            <div className="divide-y divide-black/[0.06] dark:divide-white/[0.06]">
              {emdoc.specifications.map((spec, idx) => (
                <div
                  key={idx}
                  className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs"
                >
                  <span className="font-medium text-[#666] dark:text-[#a1a1aa]">
                    {spec.label}
                  </span>
                  <span className="text-[#111] dark:text-[#f5f5f7] font-mono font-semibold">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EmDoc vs Adobe Acrobat & PDF Expert Comparison Preview */}
      <div className="max-w-[980px] mx-auto">
        <InlineAppComparison appSlug="emdoc" />
      </div>

      <FaqSection
        title="EmDoc PDF Workstation — Frequently Asked Questions"
        subtitle="Technical answers about EmDoc v1.1, previous versions, air-gapped security, and Mac App Store distribution."
        items={EMDOC_FAQS}
      />

      {/* Supaste-Style Sister App References */}
      <OtherAppsShowcase currentSlug="emdoc" />

      <AuthorBio currentSlug="emdoc" />

      {/* Featured on TryMacApps Badge (Bottom of macOS App Page) */}
      <div className="pb-12 pt-4 flex justify-center">
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

      {/* Centralized Download Modal */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />
    </div>
  );
}
