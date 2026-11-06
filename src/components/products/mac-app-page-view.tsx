"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  CheckCircle2,
  Lock,
  Download,
  Monitor,
  Cpu,
  Heart,
  MessageSquare,
} from "lucide-react";
import { MacAppConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { FaqSection } from "@/components/seo/faq-section";
import { AuthorBio } from "@/components/seo/author-bio";
import { InlineAppComparison } from "@/components/compare/inline-app-comparison";

interface MacAppPageViewProps {
  app: MacAppConfig;
}

export function MacAppPageView({ app }: MacAppPageViewProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentScreenshots = app.screenshotsMac || [];
  const safeIndex = activeIndex < currentScreenshots.length ? activeIndex : 0;
  const activeShot = currentScreenshots[safeIndex] || currentScreenshots[0];

  return (
    <div className="min-h-dvh pt-28 sm:pt-32 pb-24 bg-[#f5f5f5] dark:bg-[#0b0b0d] text-[#111] dark:text-[#f5f5f7]">
      <div className="max-w-[980px] mx-auto px-5 sm:px-8">
        {/* Top Breadcrumb Navigation */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Breadcrumbs
            items={[
              { label: "Products", href: "/products" },
              { label: app.shortName },
            ]}
            includeJsonLd={true}
          />
          <Link
            href={`/${app.slug}/privacy`}
            className="text-xs font-medium text-[#666] dark:text-[#a1a1aa] hover:text-[#111] dark:hover:text-white transition-colors inline-flex items-center gap-1.5"
          >
            <Shield className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{app.shortName} Privacy Policy</span>
          </Link>
        </div>

        {/* Minimal Helumi Hero Header */}
        <div className="rounded-[28px] border border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#141417] p-7 sm:p-10 mb-14 shadow-[0_18px_40px_rgba(0,0,0,0.03)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#666] dark:text-[#a1a1aa] tabular-nums">
                <span className="px-2.5 py-0.5 rounded-full bg-[#111] text-white dark:bg-white dark:text-[#111] font-semibold">
                  v{app.version} ({app.appSize})
                </span>
                <span>·</span>
                <span>{app.minMacOsVersion}</span>
                <span>·</span>
                <span>100% Free Forever</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-[20px] overflow-hidden border border-black/[0.08] dark:border-white/15 shrink-0 bg-[#f5f5f5] dark:bg-[#0b0b0d]">
                  <Image
                    src={app.iconLarge || app.icon}
                    alt={`${app.name} macOS App Icon`}
                    fill
                    className="object-cover"
                    sizes="80px"
                    priority
                  />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-5xl font-bold tracking-[-0.035em] leading-[1.06] text-[#111] dark:text-white text-balance">
                    {app.name}
                  </h1>
                  <p className="mt-1.5 text-base sm:text-lg font-display italic text-[#444] dark:text-[#d4d4d8]">
                    {app.tagline}
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#555] dark:text-[#a1a1aa] leading-relaxed max-w-2xl text-pretty">
                {app.fullDescription}
              </p>

              {/* Single-Click Direct Download CTA Row */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={app.downloadUrl}
                  download
                  className="helumi-pill text-sm tabular-nums"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  <span>Download {app.shortName} (.DMG • {app.appSize})</span>
                </a>
                <Link href="/suggestions" className="helumi-pill-secondary text-sm">
                  <MessageSquare className="h-4 w-4" aria-hidden="true" />
                  <span>Request a Feature</span>
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs text-[#666] dark:text-[#a1a1aa]">
                <span>✓ Signed with Apple Developer ID (9TKKPN6F59)</span>
                <span>✓ {app.minMacOsVersion}</span>
                <span>✓ Zero Telemetry</span>
              </div>
            </div>

            {/* Right Key Guarantees Card */}
            <div className="lg:col-span-4 rounded-[22px] border border-black/[0.06] dark:border-white/[0.08] bg-[#f5f5f5] dark:bg-[#0b0b0d] p-5 space-y-4">
              <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#777] dark:text-[#888]">
                Cogify Native macOS Standard
              </div>
              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <Lock className="h-4 w-4 text-[#111] dark:text-white shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <div className="text-xs font-semibold text-[#111] dark:text-white">
                      100% Air-Gapped Local Execution
                    </div>
                    <p className="text-xs text-[#666] dark:text-[#a1a1aa] mt-0.5 text-pretty">
                      Zero external telemetry servers, zero analytics SDKs, and zero background data harvesting.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="h-4 w-4 text-[#111] dark:text-white shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <div className="text-xs font-semibold text-[#111] dark:text-white">
                      Single-Click Direct DMG Installer
                    </div>
                    <p className="text-xs text-[#666] dark:text-[#a1a1aa] mt-0.5 text-pretty">
                      Download the {app.appSize} DMG in one click and drag {app.shortName}.app to /Applications.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Cpu className="h-4 w-4 text-[#111] dark:text-white shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <div className="text-xs font-semibold text-[#111] dark:text-white">
                      Apple Silicon &amp; Intel Optimized
                    </div>
                    <p className="text-xs text-[#666] dark:text-[#a1a1aa] mt-0.5">
                      {app.architecture}.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-3 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between text-xs text-[#666] dark:text-[#a1a1aa]">
                <span className="truncate font-mono text-[11px]">{app.bundleId}</span>
                <a
                  href={app.downloadUrl}
                  download
                  className="text-[#111] dark:text-white font-semibold hover:underline inline-flex items-center gap-1 shrink-0"
                >
                  Direct DMG <Download className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Screenshot Showcase */}
        {currentScreenshots.length > 0 && activeShot && (
          <section className="mb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#777] dark:text-[#888] mb-1 tabular-nums">
                  <Monitor className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>macOS Retina Tour ({currentScreenshots.length} Views)</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-[#111] dark:text-white text-balance">
                  Interactive workstation{" "}
                  <span className="font-display italic font-normal">walkthrough.</span>
                </h2>
              </div>

              <a
                href={app.downloadUrl}
                download
                className="helumi-pill-secondary text-xs self-start md:self-auto tabular-nums"
              >
                <Download className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Download .DMG ({app.appSize})</span>
              </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Step Selector Sidebar */}
              <div className="lg:col-span-5 space-y-2.5 max-h-[600px] overflow-y-auto pr-1">
                {currentScreenshots.map((shot, idx) => {
                  const isActive = idx === safeIndex;
                  const numStr = idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`;
                  return (
                    <button
                      key={shot.id}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActiveIndex(idx)}
                      className={`w-full text-left rounded-[20px] border p-4 transition-colors cursor-pointer ${
                        isActive
                          ? "border-[#111] dark:border-white bg-white dark:bg-[#141417] shadow-sm"
                          : "border-black/[0.07] dark:border-white/[0.08] bg-white/70 dark:bg-[#141417]/60 hover:bg-white dark:hover:bg-[#141417]"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#666] dark:text-[#a1a1aa] tabular-nums">
                          {numStr} • {shot.tag}
                        </span>
                        {isActive && (
                          <span className="h-2 w-2 rounded-full bg-[#111] dark:bg-white" />
                        )}
                      </div>
                      <div className="text-sm sm:text-base font-bold text-[#111] dark:text-white">
                        {shot.title}
                      </div>
                      <p className="text-xs text-[#666] dark:text-[#a1a1aa] mt-1 line-clamp-2 text-pretty">
                        {shot.description}
                      </p>
                      {isActive && shot.highlights.length > 0 && (
                        <ul className="mt-3 pt-2.5 border-t border-black/[0.06] dark:border-white/[0.08] space-y-1">
                          {shot.highlights.map((h) => (
                            <li
                              key={h}
                              className="flex items-center gap-2 text-xs text-[#333] dark:text-[#d4d4d8]"
                            >
                              <CheckCircle2
                                className="h-3.5 w-3.5 shrink-0 text-[#111] dark:text-white"
                                aria-hidden="true"
                              />
                              {h}
                            </li>
                          ))}
                        </ul>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Screenshot Preview Stage */}
              <div className="lg:col-span-7 rounded-[26px] border border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#141417] p-4 sm:p-6 flex flex-col items-center justify-center sticky top-28">
                <div className="w-full rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-[#0b0b0d] shadow-xl">
                  <div className="h-7 px-3.5 bg-[#141417] border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center space-x-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                    </div>
                    <span className="text-[11px] font-mono text-[#a1a1aa] truncate">
                      {app.name} — {activeShot.title}
                    </span>
                    <div className="w-8" />
                  </div>
                  <div className="relative w-full aspect-[16/10] bg-[#0b0b0d]">
                    <Image
                      src={activeShot.image}
                      alt={`${app.shortName} - ${activeShot.title}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                  </div>
                </div>

                {/* Step Selector Pills */}
                <div className="mt-4 flex items-center gap-1.5 overflow-x-auto max-w-full pb-1">
                  {currentScreenshots.map((shot, idx) => {
                    const numStr = idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`;
                    return (
                      <button
                        key={shot.id}
                        type="button"
                        onClick={() => setActiveIndex(idx)}
                        title={`View screenshot ${idx + 1}: ${shot.title}`}
                        aria-pressed={idx === safeIndex}
                        className={`px-2.5 py-1 rounded-full text-xs font-mono border transition-colors shrink-0 cursor-pointer tabular-nums ${
                          idx === safeIndex
                            ? "bg-[#111] text-white border-[#111] dark:bg-white dark:text-[#111] dark:border-white"
                            : "bg-[#f5f5f5] dark:bg-[#0b0b0d] text-[#666] dark:text-[#a1a1aa] border-black/[0.08] dark:border-white/10"
                        }`}
                      >
                        {numStr}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-3 text-center">
                  <div className="text-sm font-bold text-[#111] dark:text-white">
                    {activeShot.title}
                  </div>
                  <div className="text-xs text-[#666] dark:text-[#a1a1aa] mt-0.5">
                    {activeShot.subtitle}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 6 Core Capabilities Grid */}
        <section className="mb-16">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#777] dark:text-[#888] mb-1">
              capabilities
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-[#111] dark:text-white text-balance">
              Engineered for precision &amp;{" "}
              <span className="font-display italic font-normal">local</span> privacy.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {app.features.map((feat) => (
              <div
                key={feat.title}
                className="rounded-[22px] border border-black/[0.07] dark:border-white/[0.08] bg-white dark:bg-[#141417] p-6"
              >
                <div className="inline-flex items-center rounded-full border border-black/[0.07] dark:border-white/10 bg-[#f5f5f5] dark:bg-white/[0.05] px-2.5 py-0.5 text-[11px] font-medium text-[#555] dark:text-[#d4d4d8] mb-3.5">
                  {feat.tag}
                </div>
                <h3 className="text-base font-bold text-[#111] dark:text-white mb-1.5 text-balance">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#555] dark:text-[#a1a1aa] leading-relaxed text-pretty">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Philosophy & Specifications */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          <div className="lg:col-span-5 rounded-[24px] border border-black/[0.07] dark:border-white/[0.08] bg-white dark:bg-[#141417] p-7 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#777] dark:text-[#888] mb-3">
                <Shield className="h-3.5 w-3.5" aria-hidden="true" />
                Product Philosophy &amp; Privacy
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-[-0.02em] text-[#111] dark:text-white mb-3 text-balance">
                Built to respect your Mac.
              </h3>
              <p className="text-sm text-[#555] dark:text-[#a1a1aa] leading-relaxed mb-6 text-pretty">
                {app.philosophy}
              </p>
            </div>

            <div className="pt-5 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
              <a
                href={app.downloadUrl}
                download
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111] dark:text-white hover:underline tabular-nums"
              >
                <Download className="h-3.5 w-3.5" aria-hidden="true" />
                Download {app.shortName}.dmg ({app.appSize})
              </a>
              <Link
                href={`/${app.slug}/privacy`}
                className="text-xs text-[#666] dark:text-[#a1a1aa] hover:text-[#111] dark:hover:text-white underline"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-[24px] border border-black/[0.07] dark:border-white/[0.08] bg-white dark:bg-[#141417] p-7">
            <h3 className="text-xl font-bold text-[#111] dark:text-white mb-5">
              Technical Specifications
            </h3>
            <div className="divide-y divide-black/[0.06] dark:divide-white/[0.07]">
              {app.specifications.map((spec) => (
                <div
                  key={spec.label}
                  className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                >
                  <span className="text-xs font-medium text-[#666] dark:text-[#a1a1aa]">
                    {spec.label}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#111] dark:text-[#f5f5f7] tabular-nums">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Head-to-Head Comparison Preview */}
        <InlineAppComparison appSlug={app.slug} />

        {/* FAQ Section */}
        <FaqSection
          badge={`${app.shortName} macOS FAQ`}
          title={`Frequently Asked Questions About ${app.shortName}`}
          subtitle={`Installation, macOS compatibility, and privacy answers for ${app.name}.`}
          faqs={[
            {
              q: `How do I download and install ${app.name} on my Mac?`,
              a: `Click the "Download ${app.shortName} (.DMG)" button above to start an instant single-click download from our official GitHub Release. Open the downloaded .dmg file and drag ${app.shortName}.app into your Applications folder.`,
            },
            {
              q: `Is ${app.shortName} signed with an Apple Developer ID and 100% free?`,
              a: `Yes. ${app.name} (v${app.version}) is signed with Developer ID Application: Shubham Sharma (9TKKPN6F59) and is 100% free for individuals with zero subscriptions, zero ads, and zero telemetry.`,
            },
            {
              q: `Does ${app.shortName} send any of my data to external servers?`,
              a: `Never. ${app.shortName} executes 100% locally on your Mac (${app.minMacOsVersion}) with zero analytics SDKs and zero cloud uploads.`,
            },
          ]}
        />

        {/* Author Attribution */}
        <AuthorBio
          currentSlug={app.slug}
          contextLabel={`Native macOS Systems Engineering • v${app.version} Direct DMG Release`}
        />
      </div>
    </div>
  );
}
