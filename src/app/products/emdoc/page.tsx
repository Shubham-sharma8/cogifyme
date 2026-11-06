"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Cpu,
  Download,
  HardDrive,
  MessageSquare,
  ExternalLink,
  History,
  Calendar,
  ArrowUpRight,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { EmDocGallery } from "@/components/products/emdoc-gallery";
import { DownloadModal } from "@/components/products/download-modal";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { FaqSection, type FaqItem } from "@/components/seo/faq-section";
import { AuthorBio } from "@/components/seo/author-bio";
import { InlineAppComparison } from "@/components/compare/inline-app-comparison";

const EMDOC_FAQS: FaqItem[] = [
  {
    question: "How is EmDoc v1.1 only 7.8 MB compared to Adobe Acrobat's 1.2 GB?",
    answer:
      "EmDoc is compiled as a 100% native macOS Universal Binary (ARM64 + x86_64) using Swift, AppKit, PDFKit, and CoreGraphics without Electron, Chromium, or bundled cross-platform runtimes. This achieves a 7.8 MB installer footprint and ~45 MB baseline RAM.",
  },
  {
    question: "Where can I download previous versions of EmDoc (.DMG)?",
    answer:
      "All current and archived macOS releases—including v1.1 (November 6, 2026), v1.0.0, v0.0.2, and v0.0.1—are available with direct .DMG links and SHA-256 checksums on our dedicated EmDoc Releases & Previous Versions page (/products/emdoc/releases).",
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

export default function EmDocProductPage() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const emdoc = siteConfig.emdoc;

  return (
    <div className="min-h-screen pt-28 sm:pt-32 pb-20 bg-[#f5f5f5] dark:bg-[#0b0b0d] text-[#111] dark:text-[#f5f5f7]">
      <div className="max-w-[980px] mx-auto px-5 sm:px-8">
        <Breadcrumbs
          items={[
            { label: "Products", href: "/products" },
            { label: "EmDoc PDF Workstation", href: "/products/emdoc" },
          ]}
          includeJsonLd={false}
        />
      </div>

      {/* Minimal Helumi Hero Header */}
      <section className="max-w-[980px] mx-auto px-5 sm:px-8 pt-6 pb-12">
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-[18px] overflow-hidden border border-black/[0.08] dark:border-white/[0.12] shadow-sm bg-white dark:bg-[#141417] shrink-0">
              <Image
                src="/brand/emdoc-icon-sm.webp"
                alt="EmDoc App Icon"
                fill
                priority
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#666] dark:text-[#a1a1aa]">
                <span className="px-2.5 py-0.5 rounded-full bg-[#111] text-white dark:bg-white dark:text-[#111] font-semibold">
                  v{emdoc.version} (Build {emdoc.build})
                </span>
                <span>·</span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  Released {emdoc.releaseDate}
                </span>
                <span>·</span>
                <span>{emdoc.appSize} Universal .DMG</span>
              </div>
              <p className="text-xs text-[#666] dark:text-[#a1a1aa] mt-1.5">
                macOS 13.0+ (Apple Silicon &amp; Intel) · {emdoc.ramUsage} · 100% Free
              </p>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-[-0.04em] leading-[1.05] text-[#111] dark:text-[#f5f5f7]">
            Native PDF workstation.{" "}
            <span className="font-display italic font-normal">Only {emdoc.appSize}.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#555] dark:text-[#a1a1aa] leading-relaxed max-w-2xl">
            {emdoc.shortDescription}
          </p>

          {/* Helumi Pill Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href={emdoc.downloadUrl}
              download
              className="helumi-pill text-sm"
            >
              <Download className="w-4 h-4" />
              <span>Download EmDoc v{emdoc.version} (.DMG • {emdoc.appSize})</span>
            </a>

            <a
              href={emdoc.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="helumi-pill-secondary text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Mac App Store</span>
            </a>

            <Link
              href="/products/emdoc/releases"
              className="helumi-pill-secondary text-sm"
            >
              <History className="w-4 h-4" />
              <span>Previous Versions &amp; Releases</span>
            </Link>

            <button
              type="button"
              onClick={() => setDownloadModalOpen(true)}
              className="helumi-pill-secondary text-sm cursor-pointer"
            >
              <Cpu className="w-4 h-4" />
              <span>Specs &amp; Checksum</span>
            </button>
          </div>

          {/* 4 Minimal Metric Tiles */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
            <div className="p-4 rounded-[18px] bg-white dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.08]">
              <span className="text-[#777] dark:text-[#888] block text-[11px] uppercase tracking-wider">
                Latest Build
              </span>
              <span className="text-sm font-semibold text-[#111] dark:text-white mt-0.5 block">
                v{emdoc.version} • {emdoc.releaseDate}
              </span>
            </div>
            <div className="p-4 rounded-[18px] bg-white dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.08]">
              <span className="text-[#777] dark:text-[#888] block text-[11px] uppercase tracking-wider">
                Installer Size
              </span>
              <span className="text-sm font-semibold text-[#111] dark:text-white mt-0.5 block">
                {emdoc.appSize} (.DMG)
              </span>
            </div>
            <div className="p-4 rounded-[18px] bg-white dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.08]">
              <span className="text-[#777] dark:text-[#888] block text-[11px] uppercase tracking-wider">
                RAM Footprint
              </span>
              <span className="text-sm font-semibold text-[#111] dark:text-white mt-0.5 block">
                {emdoc.ramUsage}
              </span>
            </div>
            <div className="p-4 rounded-[18px] bg-white dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.08]">
              <span className="text-[#777] dark:text-[#888] block text-[11px] uppercase tracking-wider">
                License
              </span>
              <span className="text-sm font-semibold text-[#111] dark:text-white mt-0.5 block">
                100% Free Forever
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Screenshot Showcase Gallery */}
      <section className="max-w-[980px] mx-auto px-5 sm:px-8 py-8">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#777] dark:text-[#888] mb-1">
            interface walkthrough
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-[#111] dark:text-white">
            Eight native tools.{" "}
            <span className="font-display italic font-normal">Zero clutter.</span>
          </h2>
          <p className="text-sm text-[#666] dark:text-[#a1a1aa] mt-1">
            Click any module below to inspect the native macOS workspace.
          </p>
        </div>

        <EmDocGallery />
      </section>

      {/* Release History & Previous Versions Preview */}
      <section className="max-w-[980px] mx-auto px-5 sm:px-8 py-14">
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
              href="/products/emdoc/releases"
              className="helumi-pill-secondary text-xs self-start sm:self-auto"
            >
              <span>All Release Notes &amp; Checksums</span>
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
                  <Download className="w-3.5 h-3.5" />
                  <span>v{rel.version} .DMG ({rel.size})</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep-Dive Architectural Tenets */}
      <section className="max-w-[980px] mx-auto px-5 sm:px-8 py-10">
        <div className="max-w-2xl mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#777] dark:text-[#888] mb-1">
            architecture
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-[#111] dark:text-white">
            Built without bloat.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 rounded-[22px] bg-white dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.08] space-y-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#f5f5f5] dark:bg-white/[0.06] flex items-center justify-center text-[#111] dark:text-white">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="text-base font-semibold text-[#111] dark:text-white">
              100% Air-Gapped Privacy
            </h3>
            <p className="text-xs text-[#555] dark:text-[#a1a1aa] leading-relaxed">
              Documents, annotations, cryptographic signatures, compression, and watermarks execute solely on your Mac&apos;s CPU and Apple Neural Engine.
            </p>
          </div>

          <div className="p-6 rounded-[22px] bg-white dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.08] space-y-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#f5f5f5] dark:bg-white/[0.06] flex items-center justify-center text-[#111] dark:text-white">
              <Cpu className="w-4 h-4" />
            </div>
            <h3 className="text-base font-semibold text-[#111] dark:text-white">
              {emdoc.appSize} Native Swift &amp; CoreGraphics
            </h3>
            <p className="text-xs text-[#555] dark:text-[#a1a1aa] leading-relaxed">
              Sub-millisecond page rasterization, virtualized multi-threaded tile rendering, and bounded LRU page caches engineered for ~45 MB of memory.
            </p>
          </div>

          <div className="p-6 rounded-[22px] bg-white dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.08] space-y-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#f5f5f5] dark:bg-white/[0.06] flex items-center justify-center text-[#111] dark:text-white">
              <HardDrive className="w-4 h-4" />
            </div>
            <h3 className="text-base font-semibold text-[#111] dark:text-white">
              Zero Telemetry &amp; Zero Paywalls
            </h3>
            <p className="text-xs text-[#555] dark:text-[#a1a1aa] leading-relaxed">
              No tracking scripts, no analytics beacons, no mandatory account signups. Every single feature is unlocked forever.
            </p>
          </div>
        </div>
      </section>

      {/* Verified Technical Specifications */}
      <section className="max-w-[980px] mx-auto px-5 sm:px-8 py-12">
        <div className="max-w-2xl mb-6">
          <h2 className="text-2xl font-bold tracking-[-0.03em] text-[#111] dark:text-white mb-1">
            Technical Specifications
          </h2>
          <p className="text-xs sm:text-sm text-[#666] dark:text-[#a1a1aa]">
            Verified system requirements and build metadata for EmDoc v{emdoc.version}.
          </p>
        </div>

        <div className="rounded-[22px] border border-black/[0.07] dark:border-white/[0.08] bg-white dark:bg-[#141417] overflow-hidden">
          <table className="w-full text-left text-xs">
            <tbody className="divide-y divide-black/[0.06] dark:divide-white/[0.06]">
              {emdoc.specifications.map((spec, idx) => (
                <tr key={idx}>
                  <td className="py-3.5 px-6 font-medium text-[#666] dark:text-[#a1a1aa] w-1/3">
                    {spec.label}
                  </td>
                  <td className="py-3.5 px-6 text-[#111] dark:text-[#f5f5f7] font-mono">
                    {spec.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Minimal Feedback Banner */}
      <section className="max-w-[980px] mx-auto px-5 sm:px-8 py-8">
        <div className="p-7 sm:p-8 rounded-[24px] bg-white dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="space-y-1 max-w-xl">
            <h3 className="text-lg font-bold text-[#111] dark:text-white">
              Have a feature request or bug report for EmDoc?
            </h3>
            <p className="text-xs sm:text-sm text-[#666] dark:text-[#a1a1aa]">
              We ship updates directly from user feedback. Let us know what workflow you want next.
            </p>
          </div>

          <Link href="/suggestions" className="helumi-pill text-xs shrink-0">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Submit Feedback</span>
          </Link>
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

      <AuthorBio currentSlug="emdoc" />

      {/* Centralized Download Modal */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />
    </div>
  );
}
