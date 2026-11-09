"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  CheckCircle2,
  ArrowUpRight,
  Smartphone,
  Tablet,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { SafariAppConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { FaqSection } from "@/components/seo/faq-section";
import { AuthorBio } from "@/components/seo/author-bio";
import { InlineAppComparison } from "@/components/compare/inline-app-comparison";
import { OtherAppsShowcase } from "@/components/products/other-apps-showcase";
import { AppleLogoIcon, AppStoreIcon, SafariIcon } from "@/components/ui/platform-icons";

interface SafariAppPageViewProps {
  app: SafariAppConfig;
}

export function SafariAppPageView({ app }: SafariAppPageViewProps) {
  const hasIos = Boolean(app.screenshotsIos && app.screenshotsIos.length > 0);
  const hasIpad = Boolean(app.screenshotsIpad && app.screenshotsIpad.length > 0);
  const hasMac = Boolean(app.screenshotsMac && app.screenshotsMac.length > 0);

  const initialPlatform: "ios" | "ipad" | "mac" = hasIos
    ? "ios"
    : hasIpad
    ? "ipad"
    : "mac";

  const [platform, setPlatform] = useState<"ios" | "ipad" | "mac">(initialPlatform);
  const [activeIndex, setActiveIndex] = useState(0);

  const currentScreenshots =
    platform === "ios"
      ? app.screenshotsIos || []
      : platform === "ipad"
      ? app.screenshotsIpad || []
      : app.screenshotsMac || [];

  const safeIndex = activeIndex < currentScreenshots.length ? activeIndex : 0;
  const activeShot = currentScreenshots[safeIndex] || currentScreenshots[0];

  const handlePlatformChange = (next: "ios" | "ipad" | "mac") => {
    setPlatform(next);
    setActiveIndex(0);
  };

  return (
    <div className="min-h-screen pt-28 sm:pt-32 pb-24 bg-[#FAFAFA] dark:bg-[#0B0B0D] text-[#09090B] dark:text-[#F5F5F7]">
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
          <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] dark:border-white/[0.12] bg-white dark:bg-[#141417] px-3.5 py-1.5 text-[12px] font-medium text-[#52525B] dark:text-[#A1A1AA] shadow-xs mb-6">
            <SafariIcon className="h-3.5 w-3.5 text-[#006FFF] dark:text-[#60A5FA]" />
            <span className="font-semibold text-[#09090B] dark:text-white">
              {app.shortName} for Safari
            </span>
            <span>·</span>
            <span>{app.platform}</span>
            <span>·</span>
            <span>v{app.version}</span>
          </div>

          <div className="flex justify-center mb-5">
            <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-[24px] overflow-hidden border border-black/[0.08] dark:border-white/15 bg-white dark:bg-[#141417] shadow-[0_16px_36px_rgba(0,0,0,0.08)]">
              <Image
                src={app.icon}
                alt={`${app.name} App Icon`}
                fill
                className="object-cover"
                sizes="96px"
                priority
              />
            </div>
          </div>

          <h1 className="text-[36px] sm:text-[54px] font-bold tracking-[-0.04em] leading-[1.06] text-[#09090B] dark:text-white text-balance">
            {app.name}
            <span className="block font-display italic font-normal text-[#006FFF] dark:text-[#60A5FA] mt-1">
              {app.subtitle}
            </span>
          </h1>

          <p className="mt-4 text-[15px] sm:text-[17px] text-[#52525B] dark:text-[#A1A1AA] leading-relaxed max-w-2xl mx-auto text-pretty">
            {app.fullDescription}
          </p>

          {/* Primary CTA Row */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href={app.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="helumi-pill helumi-pill-dark !h-12 !px-7 !text-[15px] font-semibold shadow-[0_12px_28px_rgba(0,0,0,0.14)]"
            >
              <AppStoreIcon className="h-4 w-4" />
              <span>Download on the App Store</span>
            </a>
            <Link
              href="/compare/safari"
              className="helumi-pill helumi-pill-light !h-12 !px-5 !text-[14px] font-medium"
            >
              <span>Compare vs Alternatives</span>
            </Link>
          </div>

          {/* Supaste 3-Item Trust Micro-Bar */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-[12px] font-medium text-[#52525B] dark:text-[#A1A1AA]">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#10B981]" />
              100% Free on App Store
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#10B981]" />
              On-device WebKit execution
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#10B981]" />
              {app.platform}
            </span>
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

        {/* Interactive Screenshot Showcase */}
        {currentScreenshots.length > 0 && activeShot && (
          <section className="mb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#006FFF] dark:text-[#60A5FA] mb-1">
                  Interactive Multi-Device Tour
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-[#09090B] dark:text-white">
                  How {app.shortName} works in{" "}
                  <span className="font-display italic font-normal text-[#006FFF] dark:text-[#60A5FA]">
                    Safari.
                  </span>
                </h2>
              </div>

              {/* Platform Switcher */}
              <div className="inline-flex items-center gap-1 rounded-full border border-black/[0.08] dark:border-white/10 bg-white dark:bg-[#141417] p-1 self-start shadow-xs">
                {hasIos && (
                  <button
                    type="button"
                    onClick={() => handlePlatformChange("ios")}
                    className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                      platform === "ios"
                        ? "bg-[#09090B] text-white dark:bg-white dark:text-[#09090B]"
                        : "text-[#52525B] dark:text-[#A1A1AA] hover:text-[#09090B] dark:hover:text-white"
                    }`}
                  >
                    <Smartphone className="h-3.5 w-3.5" />
                    iPhone
                  </button>
                )}
                {hasIpad && (
                  <button
                    type="button"
                    onClick={() => handlePlatformChange("ipad")}
                    className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                      platform === "ipad"
                        ? "bg-[#09090B] text-white dark:bg-white dark:text-[#09090B]"
                        : "text-[#52525B] dark:text-[#A1A1AA] hover:text-[#09090B] dark:hover:text-white"
                    }`}
                  >
                    <Tablet className="h-3.5 w-3.5" />
                    iPadOS
                  </button>
                )}
                {hasMac && (
                  <button
                    type="button"
                    onClick={() => handlePlatformChange("mac")}
                    className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                      platform === "mac"
                        ? "bg-[#09090B] text-white dark:bg-white dark:text-[#09090B]"
                        : "text-[#52525B] dark:text-[#A1A1AA] hover:text-[#09090B] dark:hover:text-white"
                    }`}
                  >
                    <AppleLogoIcon className="h-3.5 w-3.5 -mt-0.5" />
                    macOS
                  </button>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Step Selector Sidebar */}
              <div className="lg:col-span-5 space-y-2.5">
                {currentScreenshots.map((shot, idx) => {
                  const isActive = idx === safeIndex;
                  return (
                    <button
                      key={shot.id}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      className={`w-full text-left rounded-[20px] border p-4 transition-all cursor-pointer ${
                        isActive
                          ? "border-[#006FFF] dark:border-[#60A5FA] bg-white dark:bg-[#141417] shadow-sm ring-1 ring-[#006FFF]/20"
                          : "border-black/[0.07] dark:border-white/[0.08] bg-white/70 dark:bg-[#141417]/60 hover:bg-white dark:hover:bg-[#141417]"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#006FFF] dark:text-[#60A5FA] font-semibold">
                          0{idx + 1} • {shot.tag}
                        </span>
                        {isActive && (
                          <span className="h-2 w-2 rounded-full bg-[#006FFF] dark:bg-[#60A5FA]" />
                        )}
                      </div>
                      <div className="text-sm sm:text-base font-bold text-[#09090B] dark:text-white">
                        {shot.title}
                      </div>
                      <p className="text-xs text-[#52525B] dark:text-[#A1A1AA] mt-1 line-clamp-2">
                        {shot.description}
                      </p>
                      {isActive && shot.highlights.length > 0 && (
                        <ul className="mt-3 pt-2.5 border-t border-black/[0.06] dark:border-white/[0.08] space-y-1">
                          {shot.highlights.map((h) => (
                            <li
                              key={h}
                              className="flex items-center gap-2 text-xs text-[#27272A] dark:text-[#E4E4E7]"
                            >
                              <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#10B981]" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Scenic Screenshot Preview Stage */}
              <div className="lg:col-span-7 rounded-[28px] border border-black/[0.08] dark:border-white/[0.1] bg-gradient-to-br from-[#DBEAFE] via-[#E0E7FF] to-[#F3E8FF] dark:from-[#1E293B] dark:via-[#1E1B4B] dark:to-[#0F172A] p-6 sm:p-8 flex flex-col items-center justify-center min-h-[460px]">
                <div className="w-full flex flex-col items-center">
                  {platform === "ios" ? (
                    <div className="relative w-[270px] sm:w-[300px] rounded-[2.8rem] p-2.5 bg-[#0b0b0d] border-4 border-zinc-800 shadow-2xl">
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-black/80 rounded-full z-20 pointer-events-none" />
                      <div className="relative w-full aspect-[1206/2622] rounded-[2.2rem] overflow-hidden bg-[#0b0b0d]">
                        <Image
                          src={activeShot.image}
                          alt={`${app.shortName} - ${activeShot.title}`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 280px, 320px"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl border border-black/15 dark:border-white/15 shadow-2xl bg-[#0b0b0d]">
                      <Image
                        src={activeShot.image}
                        alt={`${app.shortName} - ${activeShot.title}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                      />
                    </div>
                  )}
                  <div className="mt-5 text-center rounded-2xl bg-white/90 dark:bg-[#141417]/90 backdrop-blur-md px-4 py-2.5 border border-black/[0.06] dark:border-white/[0.08]">
                    <div className="text-sm font-bold text-[#09090B] dark:text-white">
                      {activeShot.title}
                    </div>
                    <div className="text-xs text-[#52525B] dark:text-[#A1A1AA] mt-0.5">
                      {activeShot.subtitle}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 6 Core Capabilities Grid */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#006FFF] dark:text-[#60A5FA] mb-2">
              Native WebKit Extension
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.035em] text-[#09090B] dark:text-white">
              Engineered for speed &amp;{" "}
              <span className="font-display italic font-normal text-[#006FFF] dark:text-[#60A5FA]">
                restraint.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {app.features.map((feat) => (
              <div
                key={feat.title}
                className="rounded-[24px] border border-black/[0.08] dark:border-white/[0.09] bg-white dark:bg-[#141417] p-6 sm:p-7 shadow-[0_10px_28px_rgba(0,0,0,0.02)]"
              >
                <div className="inline-flex items-center rounded-full border border-black/[0.07] dark:border-white/10 bg-[#FAFAFA] dark:bg-white/[0.05] px-3 py-1 text-[11px] font-semibold text-[#006FFF] dark:text-[#60A5FA] mb-4">
                  {feat.tag}
                </div>
                <h3 className="text-[18px] font-bold tracking-[-0.02em] text-[#09090B] dark:text-white mb-2">
                  {feat.title}
                </h3>
                <p className="text-[13.5px] text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Supaste-Style "$0 Free Forever" Card & Specifications */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
          <div className="lg:col-span-5 rounded-[28px] border border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#141417] p-7 sm:p-8 flex flex-col justify-between shadow-[0_16px_40px_rgba(0,0,0,0.04)]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider mb-4">
                <Shield className="h-3.5 w-3.5" />
                One price · Lifetime access
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl sm:text-5xl font-bold tracking-[-0.04em] text-[#09090B] dark:text-white">
                  $0
                </span>
                <span className="font-display italic text-xl text-[#006FFF] dark:text-[#60A5FA]">
                  Free on App Store
                </span>
              </div>
              <p className="text-[13.5px] text-[#52525B] dark:text-[#A1A1AA] leading-relaxed mb-5">
                {app.philosophy}
              </p>
              <ul className="space-y-2 mb-6 text-[13px] text-[#27272A] dark:text-[#E4E4E7]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0" />
                  <span>No subscriptions, no in-app paywalls, no ads</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0" />
                  <span>100% on-device WebKit extension sandbox</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0" />
                  <span>Universal across {app.platform}</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3 pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
              <a
                href={app.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full helumi-pill helumi-pill-dark !h-11 !text-[13.5px] justify-center"
              >
                <AppStoreIcon className="h-4 w-4" />
                <span>Download on the App Store</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
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
                  <span className="text-xs sm:text-sm font-semibold text-[#09090B] dark:text-[#F5F5F7]">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Head-to-Head Safari Extension Comparison Preview */}
        <InlineAppComparison appSlug={app.slug} />

        {/* FAQ Section */}
        <FaqSection
          badge={`${app.shortName} FAQ`}
          title={`Frequently Asked Questions About ${app.shortName}`}
          subtitle={`Technical architecture, Safari compatibility, and privacy answers for ${app.name}.`}
          faqs={[
            {
              q: `Is ${app.name} completely free on the Apple App Store?`,
              a: `Yes. ${app.name} (App Store ID ${app.appStoreId}) is 100% free for individuals across ${app.platform} with zero subscriptions, zero in-app purchases, and zero advertisements.`,
            },
            {
              q: `Does ${app.shortName} collect or transmit any of my Safari browsing history?`,
              a: `No. ${app.shortName} executes 100% locally inside Apple's native WebKit Safari Extension sandbox. It contains zero analytics SDKs, makes zero outbound network requests, and never reads or transmits your browsing history.`,
            },
            {
              q: `Which Apple devices and operating systems support ${app.shortName}?`,
              a: `${app.shortName} is a universal native Safari extension supporting ${app.platform}. Once installed from the Apple App Store, enable it in Settings > Apps > Safari > Extensions.`,
            },
          ]}
        />

        {/* Supaste.com-Style Sister Apps Cross-Promotion Showcase */}
        <OtherAppsShowcase currentSlug={app.slug} />

        {/* Author Attribution */}
        <AuthorBio
          currentSlug={app.slug}
          contextLabel={`Safari WebKit Systems Engineering • v${app.version} Live on App Store`}
        />
      </div>
    </div>
  );
}
