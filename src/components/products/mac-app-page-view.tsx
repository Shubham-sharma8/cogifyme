/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  CheckCircle2,
  Monitor,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { MacAppConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { FaqSection } from "@/components/seo/faq-section";
import { AuthorBio } from "@/components/seo/author-bio";
import { InlineAppComparison } from "@/components/compare/inline-app-comparison";
import { OtherAppsShowcase } from "@/components/products/other-apps-showcase";
import { AppleLogoIcon } from "@/components/ui/platform-icons";

interface MacAppPageViewProps {
  app: MacAppConfig;
}

export function MacAppPageView({ app }: MacAppPageViewProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentScreenshots = app.screenshotsMac || [];
  const safeIndex = activeIndex < currentScreenshots.length ? activeIndex : 0;
  const activeShot = currentScreenshots[safeIndex] || currentScreenshots[0];

  return (
    <div className="min-h-dvh pt-28 sm:pt-32 pb-24 bg-[#FAFAFA] dark:bg-[#0B0B0D] text-[#09090B] dark:text-[#F5F5F7]">
      <div className="max-w-[1040px] mx-auto px-5 sm:px-8">
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
            href="/privacy"
            className="text-xs font-medium text-[#52525B] dark:text-[#A1A1AA] hover:text-[#09090B] dark:hover:text-white transition-colors inline-flex items-center gap-1.5"
          >
            <Shield className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Zero-Telemetry Privacy Policy</span>
          </Link>
        </div>

        {/* Supaste.com-Inspired Centered Hero */}
        <section className="text-center max-w-3xl mx-auto mb-12">
          {/* Platform Pill + Squircle App Icon */}
          <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] dark:border-white/[0.12] bg-white dark:bg-[#141417] px-3.5 py-1.5 text-[12px] font-medium text-[#52525B] dark:text-[#A1A1AA] shadow-xs mb-6 tabular-nums">
            <AppleLogoIcon className="h-3.5 w-3.5 -mt-0.5 text-[#09090B] dark:text-white" />
            <span className="font-semibold text-[#09090B] dark:text-white">
              {app.shortName} for macOS
            </span>
            <span>·</span>
            <span>v{app.version} ({app.appSize})</span>
          </div>

          <div className="flex justify-center mb-5">
            <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-[24px] overflow-hidden border border-black/[0.08] dark:border-white/15 bg-white dark:bg-[#141417] shadow-[0_16px_36px_rgba(0,0,0,0.08)]">
              <Image
                src={app.iconLarge || app.icon}
                alt={`${app.name} macOS App Icon`}
                fill
                className="object-cover"
                sizes="96px"
                priority
              />
            </div>
          </div>

          {/* Two-Line Split Headline: Bold Sans + Italic Instrument Serif */}
          <h1 className="text-[36px] sm:text-[54px] font-bold tracking-[-0.04em] leading-[1.06] text-[#09090B] dark:text-white text-balance">
            {app.name}
            <span className="block font-display italic font-normal text-[#006FFF] dark:text-[#60A5FA] mt-1">
              {app.tagline}
            </span>
          </h1>

          <p className="mt-4 text-[15px] sm:text-[17px] text-[#52525B] dark:text-[#A1A1AA] leading-relaxed max-w-2xl mx-auto text-pretty">
            {app.fullDescription}
          </p>

          {/* Primary Download CTA Row */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href={app.downloadUrl}
              download
              className="helumi-pill helumi-pill-dark !h-12 !px-7 !text-[15px] font-semibold shadow-[0_12px_28px_rgba(0,0,0,0.14)] tabular-nums"
            >
              <AppleLogoIcon className="h-4 w-4 -mt-0.5" />
              <span>Download for macOS ({app.appSize})</span>
            </a>
            <Link
              href={`/compare/${app.slug}`}
              className="helumi-pill helumi-pill-light !h-12 !px-5 !text-[14px] font-medium"
            >
              <span>Compare vs Alternatives</span>
            </Link>
          </div>

          {/* Supaste 3-Item Trust Micro-Bar */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-[12px] font-medium text-[#52525B] dark:text-[#A1A1AA]">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#10B981]" />
              100% Free Forever
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#10B981]" />
              Fully offline &amp; private
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#10B981]" />
              {app.minMacOsVersion} ({app.architecture})
            </span>
          </div>

          {/* Featured on TryMacApps Badge */}
          <div className="mt-6 flex justify-center">
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

          {/* Horizontal Feature Capability Pills Strip */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
            {app.features.map((feat) => (
              <span
                key={feat.title}
                className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.07] dark:border-white/[0.1] bg-white dark:bg-[#141417] px-3.5 py-1.5 text-[12px] font-medium text-[#27272A] dark:text-[#E4E4E7] shadow-2xs"
              >
                <Sparkles className="h-3 w-3 text-[#006FFF] dark:text-[#60A5FA]" />
                <span>{feat.tag}</span>
              </span>
            ))}
          </div>
        </section>

        {/* Interactive Scenic Framed Screenshot Stage */}
        {currentScreenshots.length > 0 && activeShot && (
          <section className="mb-20">
            {/* Scenic Backdrop Frame */}
            <div className="rounded-[32px] p-4 sm:p-8 bg-gradient-to-br from-[#DBEAFE] via-[#E0E7FF] to-[#F3E8FF] dark:from-[#1E293B] dark:via-[#1E1B4B] dark:to-[#0F172A] border border-black/[0.08] dark:border-white/[0.12] shadow-[0_24px_60px_rgba(0,0,0,0.07)] mb-6">
              <div className="w-full rounded-[20px] overflow-hidden border border-black/15 dark:border-white/15 bg-[#0B0B0D] shadow-2xl">
                <div className="h-8 px-4 bg-[#18181B] border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  </div>
                  <span className="text-[11px] font-mono text-[#A1A1AA] truncate">
                    {app.name} — {activeShot.title}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400">
                    0 Telemetry
                  </span>
                </div>
                <div className="relative w-full aspect-[16/10] bg-[#0B0B0D]">
                  <Image
                    src={activeShot.image}
                    alt={`${app.shortName} - ${activeShot.title}`}
                    fill
                    priority
                    className="object-contain"
                    sizes="(max-width: 1040px) 100vw, 960px"
                  />
                </div>
              </div>
            </div>

            {/* Interactive View Selector Cards */}
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#52525B] dark:text-[#A1A1AA] tabular-nums">
                <Monitor className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Interactive macOS Tour ({currentScreenshots.length} Views)</span>
              </div>
              <span className="text-xs text-[#52525B] dark:text-[#A1A1AA]">
                Click any view to inspect
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {currentScreenshots.map((shot, idx) => {
                const isActive = idx === safeIndex;
                const numStr = idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`;
                return (
                  <button
                    key={shot.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveIndex(idx)}
                    className={`text-left rounded-[20px] border p-4 transition-all cursor-pointer ${
                      isActive
                        ? "border-[#006FFF] dark:border-[#60A5FA] bg-white dark:bg-[#141417] shadow-sm ring-1 ring-[#006FFF]/20"
                        : "border-black/[0.07] dark:border-white/[0.08] bg-white/80 dark:bg-[#141417]/60 hover:bg-white dark:hover:bg-[#141417]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#006FFF] dark:text-[#60A5FA] tabular-nums font-semibold">
                        {numStr} • {shot.tag}
                      </span>
                      {isActive && (
                        <span className="h-2 w-2 rounded-full bg-[#006FFF] dark:bg-[#60A5FA]" />
                      )}
                    </div>
                    <div className="text-[15px] font-bold text-[#09090B] dark:text-white">
                      {shot.title}
                    </div>
                    <p className="text-xs text-[#52525B] dark:text-[#A1A1AA] mt-1 line-clamp-2 text-pretty">
                      {shot.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </section>
        )}

        {/* 6 Core Capabilities Bento Grid */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#006FFF] dark:text-[#60A5FA] mb-2">
              Native Architecture
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.035em] text-[#09090B] dark:text-white text-balance">
              Everything you need.{" "}
              <span className="font-display italic font-normal text-[#006FFF] dark:text-[#60A5FA]">
                Nothing bloated.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {app.features.map((feat) => (
              <div
                key={feat.title}
                className="rounded-[24px] border border-black/[0.08] dark:border-white/[0.09] bg-white dark:bg-[#141417] p-6 sm:p-7 flex flex-col justify-between shadow-[0_10px_28px_rgba(0,0,0,0.02)]"
              >
                <div>
                  <div className="inline-flex items-center rounded-full border border-black/[0.07] dark:border-white/10 bg-[#FAFAFA] dark:bg-white/[0.05] px-3 py-1 text-[11px] font-semibold text-[#006FFF] dark:text-[#60A5FA] mb-4">
                    {feat.tag}
                  </div>
                  <h3 className="text-[18px] font-bold tracking-[-0.02em] text-[#09090B] dark:text-white mb-2 text-balance">
                    {feat.title}
                  </h3>
                  <p className="text-[13.5px] text-[#52525B] dark:text-[#A1A1AA] leading-relaxed text-pretty">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Supaste-Inspired "One Price. $0 Forever" Card + Technical Specifications */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
          <div className="lg:col-span-5 rounded-[28px] border border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#141417] p-7 sm:p-8 flex flex-col justify-between shadow-[0_16px_40px_rgba(0,0,0,0.04)]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider mb-4">
                <Shield className="h-3.5 w-3.5" aria-hidden="true" />
                One price · Lifetime access
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl sm:text-5xl font-bold tracking-[-0.04em] text-[#09090B] dark:text-white">
                  $0
                </span>
                <span className="font-display italic text-xl text-[#006FFF] dark:text-[#60A5FA]">
                  Free forever
                </span>
              </div>
              <p className="text-[13.5px] text-[#52525B] dark:text-[#A1A1AA] leading-relaxed mb-5 text-pretty">
                {app.philosophy}
              </p>
              <ul className="space-y-2 mb-6 text-[13px] text-[#27272A] dark:text-[#E4E4E7]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0" />
                  <span>No subscription, no license keys, no paywalls</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0" />
                  <span>100% air-gapped local execution on your Mac</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0" />
                  <span>Signed with Apple Developer ID (9TKKPN6F59)</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3 pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
              <a
                href={app.downloadUrl}
                download
                className="w-full helumi-pill helumi-pill-dark !h-11 !text-[13.5px] justify-center tabular-nums"
              >
                <AppleLogoIcon className="h-4 w-4 -mt-0.5" />
                <span>Download {app.shortName} ({app.appSize})</span>
              </a>
              <div className="flex items-center justify-between text-xs text-[#52525B] dark:text-[#A1A1AA] px-1">
                <Link
                  href="/suggestions"
                  className="hover:text-[#09090B] dark:hover:text-white inline-flex items-center gap-1"
                >
                  <MessageSquare className="h-3 w-3" />
                  <span>Request a Feature</span>
                </Link>
                <Link
                  href="/privacy"
                  className="hover:text-[#09090B] dark:hover:text-white underline"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-[28px] border border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#141417] p-7 sm:p-8">
            <h3 className="text-xl font-bold text-[#09090B] dark:text-white mb-5">
              Technical Specifications
            </h3>
            <div className="divide-y divide-black/[0.06] dark:divide-white/[0.07]">
              {app.specifications.map((spec) => (
                <div
                  key={spec.label}
                  className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                >
                  <span className="text-xs font-medium text-[#52525B] dark:text-[#A1A1AA]">
                    {spec.label}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#09090B] dark:text-[#F5F5F7] tabular-nums">
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
              a: `Click the "Download for macOS (${app.appSize})" button above to start an instant single-click download from our official GitHub Release. Open the downloaded .dmg file and drag ${app.shortName}.app into your Applications folder.`,
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

        {/* Supaste.com-Style Sister Apps Cross-Promotion Showcase */}
        <OtherAppsShowcase currentSlug={app.slug} />

        {/* Author Attribution */}
        <AuthorBio
          currentSlug={app.slug}
          contextLabel={`Native macOS Systems Engineering • v${app.version} Direct DMG Release`}
        />
      </div>
    </div>
  );
}
