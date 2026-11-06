"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  CheckCircle2,
  Lock,
  ArrowUpRight,
  Smartphone,
  Tablet,
  Cpu,
  Heart,
  MessageSquare,
} from "lucide-react";
import { SafariAppConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { FaqSection } from "@/components/seo/faq-section";
import { AuthorBio } from "@/components/seo/author-bio";
import { InlineAppComparison } from "@/components/compare/inline-app-comparison";
import { AppleLogoIcon, AppStoreIcon } from "@/components/ui/platform-icons";

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
    <div className="min-h-screen pt-28 sm:pt-32 pb-24 bg-[#f5f5f5] dark:bg-[#0b0b0d] text-[#111] dark:text-[#f5f5f7]">
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
        </div>

        {/* Minimal Helumi Hero Header */}
        <div className="rounded-[28px] border border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#141417] p-7 sm:p-10 mb-14 shadow-[0_18px_40px_rgba(0,0,0,0.03)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#666] dark:text-[#a1a1aa]">
                <span className="px-2.5 py-0.5 rounded-full bg-[#111] text-white dark:bg-white dark:text-[#111] font-semibold">
                  App Store • v{app.version}
                </span>
                <span>·</span>
                <span>{app.platform}</span>
                <span>·</span>
                <span>100% Free</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-[20px] overflow-hidden border border-black/[0.08] dark:border-white/15 shrink-0 bg-[#f5f5f5] dark:bg-[#0b0b0d]">
                  <Image
                    src={app.icon}
                    alt={`${app.name} App Icon`}
                    fill
                    className="object-cover"
                    sizes="80px"
                    priority
                  />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-5xl font-bold tracking-[-0.035em] leading-[1.06] text-[#111] dark:text-white">
                    {app.name}
                  </h1>
                  <p className="mt-1.5 text-base sm:text-lg font-display italic text-[#444] dark:text-[#d4d4d8]">
                    {app.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#555] dark:text-[#a1a1aa] leading-relaxed max-w-2xl">
                {app.fullDescription}
              </p>

              {/* CTA Row */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={app.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="helumi-pill text-sm"
                >
                  <AppStoreIcon className="h-4 w-4" />
                  <span>Download on the App Store</span>
                </a>
                <Link href="/suggestions" className="helumi-pill-secondary text-sm">
                  <MessageSquare className="h-4 w-4" />
                  <span>Request a Feature</span>
                </Link>
              </div>
            </div>

            {/* Right Key Guarantees Card */}
            <div className="lg:col-span-4 rounded-[22px] border border-black/[0.06] dark:border-white/[0.08] bg-[#f5f5f5] dark:bg-[#0b0b0d] p-5 space-y-4">
              <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#777] dark:text-[#888]">
                Cogify Safari Standard
              </div>
              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <Lock className="h-4 w-4 text-[#111] dark:text-white shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-[#111] dark:text-white">
                      100% On-Device Execution
                    </div>
                    <p className="text-xs text-[#666] dark:text-[#a1a1aa] mt-0.5">
                      Zero external servers, zero analytics SDKs, and zero browsing history collection.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="h-4 w-4 text-[#111] dark:text-white shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-[#111] dark:text-white">
                      Free Forever for Individuals
                    </div>
                    <p className="text-xs text-[#666] dark:text-[#a1a1aa] mt-0.5">
                      No subscriptions, no in-app paywalls, no ads, and no account sign-up required.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Cpu className="h-4 w-4 text-[#111] dark:text-white shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-[#111] dark:text-white">
                      Native Safari Web Extension
                    </div>
                    <p className="text-xs text-[#666] dark:text-[#a1a1aa] mt-0.5">
                      Built specifically for Apple WebKit across {app.platform}.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-3 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between text-xs text-[#666] dark:text-[#a1a1aa]">
                <span>ID: {app.appStoreId}</span>
                <a
                  href={app.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#111] dark:text-white font-semibold hover:underline inline-flex items-center gap-1"
                >
                  App Store <ArrowUpRight className="h-3.5 w-3.5" />
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
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#777] dark:text-[#888] mb-1">
                  interactive tour
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-[#111] dark:text-white">
                  How {app.shortName} works in{" "}
                  <span className="font-display italic font-normal">Safari.</span>
                </h2>
              </div>

              {/* Platform Switcher */}
              <div className="inline-flex items-center gap-1 rounded-full border border-black/[0.08] dark:border-white/10 bg-white dark:bg-[#141417] p-1 self-start">
                {hasIos && (
                  <button
                    type="button"
                    onClick={() => handlePlatformChange("ios")}
                    className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                      platform === "ios"
                        ? "bg-[#111] text-white dark:bg-white dark:text-[#111]"
                        : "text-[#666] dark:text-[#a1a1aa] hover:text-[#111] dark:hover:text-white"
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
                    className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                      platform === "ipad"
                        ? "bg-[#111] text-white dark:bg-white dark:text-[#111]"
                        : "text-[#666] dark:text-[#a1a1aa] hover:text-[#111] dark:hover:text-white"
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
                    className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                      platform === "mac"
                        ? "bg-[#111] text-white dark:bg-white dark:text-[#111]"
                        : "text-[#666] dark:text-[#a1a1aa] hover:text-[#111] dark:hover:text-white"
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
                      className={`w-full text-left rounded-[20px] border p-4 transition-colors cursor-pointer ${
                        isActive
                          ? "border-[#111] dark:border-white bg-white dark:bg-[#141417] shadow-sm"
                          : "border-black/[0.07] dark:border-white/[0.08] bg-white/70 dark:bg-[#141417]/60 hover:bg-white dark:hover:bg-[#141417]"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#666] dark:text-[#a1a1aa]">
                          0{idx + 1} • {shot.tag}
                        </span>
                        {isActive && (
                          <span className="h-2 w-2 rounded-full bg-[#111] dark:bg-white" />
                        )}
                      </div>
                      <div className="text-sm sm:text-base font-bold text-[#111] dark:text-white">
                        {shot.title}
                      </div>
                      <p className="text-xs text-[#666] dark:text-[#a1a1aa] mt-1 line-clamp-2">
                        {shot.description}
                      </p>
                      {isActive && shot.highlights.length > 0 && (
                        <ul className="mt-3 pt-2.5 border-t border-black/[0.06] dark:border-white/[0.08] space-y-1">
                          {shot.highlights.map((h) => (
                            <li
                              key={h}
                              className="flex items-center gap-2 text-xs text-[#333] dark:text-[#d4d4d8]"
                            >
                              <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#111] dark:text-white" />
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
              <div className="lg:col-span-7 rounded-[26px] border border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#141417] p-6 sm:p-8 flex flex-col items-center justify-center min-h-[460px]">
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
                    <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 shadow-xl bg-[#0b0b0d]">
                      <Image
                        src={activeShot.image}
                        alt={`${app.shortName} - ${activeShot.title}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                      />
                    </div>
                  )}
                  <div className="mt-5 text-center">
                    <div className="text-sm font-bold text-[#111] dark:text-white">
                      {activeShot.title}
                    </div>
                    <div className="text-xs text-[#666] dark:text-[#a1a1aa] mt-0.5">
                      {activeShot.subtitle}
                    </div>
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
            <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-[#111] dark:text-white">
              Engineered for speed &amp;{" "}
              <span className="font-display italic font-normal">restraint.</span>
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
                <h3 className="text-base font-bold text-[#111] dark:text-white mb-1.5">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#555] dark:text-[#a1a1aa] leading-relaxed">
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
                <Shield className="h-3.5 w-3.5" />
                Product Philosophy &amp; Privacy
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-[-0.02em] text-[#111] dark:text-white mb-3">
                Built to respect your browsing.
              </h3>
              <p className="text-sm text-[#555] dark:text-[#a1a1aa] leading-relaxed mb-6">
                {app.philosophy}
              </p>
            </div>

            <div className="pt-5 border-t border-black/[0.06] dark:border-white/[0.08]">
              <a
                href={app.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111] dark:text-white hover:underline"
              >
                <AppStoreIcon className="h-3.5 w-3.5" />
                <span>Download on the App Store</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
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
                  <span className="text-xs sm:text-sm font-semibold text-[#111] dark:text-[#f5f5f7]">
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

        {/* Author Attribution */}
        <AuthorBio
          currentSlug={app.slug}
          contextLabel={`Safari WebKit Systems Engineering • v${app.version} Live on App Store`}
        />
      </div>
    </div>
  );
}
