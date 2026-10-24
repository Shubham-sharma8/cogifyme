"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  BookOpen,
  Sparkles,
  SearchCode,
  EyeOff,
  Contrast,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Compass,
  Monitor,
  Smartphone,
  Tablet,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export const SafariExtensionsShowcase = () => {
  const extensions = [
    {
      data: siteConfig.adBlocker,
      accent: "emerald",
      badgeText: "v2.0 Live • 75,000+ Rules",
      iconComponent: <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
      mobileImage: siteConfig.adBlocker.screenshotsIos?.[0]?.image ?? siteConfig.adBlocker.icon,
      largeImage:
        siteConfig.adBlocker.screenshotsMac?.[0]?.image ??
        siteConfig.adBlocker.screenshotsIpad?.[0]?.image ??
        siteConfig.adBlocker.icon,
      largeLabel: "macOS",
    },
    {
      data: siteConfig.readereasy,
      accent: "amber",
      badgeText: "v1.1 Live • Instant Reader View",
      iconComponent: <BookOpen className="w-4 h-4 text-amber-600 dark:text-amber-400" />,
      mobileImage: siteConfig.readereasy.screenshotsIos?.[0]?.image ?? siteConfig.readereasy.icon,
      largeImage:
        siteConfig.readereasy.screenshotsIpad?.[0]?.image ??
        siteConfig.readereasy.screenshotsMac?.[0]?.image ??
        siteConfig.readereasy.icon,
      largeLabel: "iPadOS",
    },
    {
      data: siteConfig.webclear,
      accent: "cyan",
      badgeText: "v1.0 Live • One-Tap Site Reset",
      iconComponent: <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />,
      mobileImage: siteConfig.webclear.screenshotsIos?.[0]?.image ?? siteConfig.webclear.icon,
      largeImage:
        siteConfig.webclear.screenshotsIpad?.[0]?.image ??
        siteConfig.webclear.screenshotsMac?.[0]?.image ??
        siteConfig.webclear.icon,
      largeLabel: "iPadOS",
    },
    {
      data: siteConfig.weblenses,
      accent: "indigo",
      badgeText: "v1.0 Live • Health Score & Vitals",
      iconComponent: <SearchCode className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
      mobileImage: siteConfig.weblenses.screenshotsIos?.[0]?.image ?? siteConfig.weblenses.icon,
      largeImage:
        siteConfig.weblenses.screenshotsMac?.[0]?.image ??
        siteConfig.weblenses.screenshotsIpad?.[0]?.image ??
        siteConfig.weblenses.icon,
      largeLabel: "macOS",
    },
    {
      data: {
        ...siteConfig.elementHider,
        slug: "element-hider",
        shortName: "Element Hider",
        icon: "/brand/Element-Hider/icon-sm.webp",
      },
      accent: "purple",
      badgeText: "v1.0 Live • Point, Tap & Hide",
      iconComponent: <EyeOff className="w-4 h-4 text-purple-600 dark:text-purple-400" />,
      mobileImage: siteConfig.elementHider.screenshots[0]?.image ?? "/brand/Element-Hider/icon-sm.webp",
      largeImage:
        siteConfig.elementHider.screenshotsMac?.[0]?.image ??
        "/brand/Element-Hider/Working_Mac.png",
      largeLabel: "macOS",
    },
    {
      data: {
        ...siteConfig.invert,
        slug: "invert",
        shortName: "Colour Invert",
        icon: "/brand/Invert/icon-sm.webp",
      },
      accent: "sky",
      badgeText: "v1.0 Live • Smart Dark Mode",
      iconComponent: <Contrast className="w-4 h-4 text-sky-600 dark:text-sky-400" />,
      mobileImage: siteConfig.invert.screenshotsIos[0]?.image ?? "/brand/Invert/icon-sm.webp",
      largeImage:
        siteConfig.invert.screenshotsMac[0]?.image ??
        "/brand/Invert/Mac/in_Safari.png",
      largeLabel: "macOS",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  // Standardized default platform to iOS across Safari extension showcases
  const [deviceView, setDeviceView] = useState<"ios" | "large">("ios");

  const active = extensions[activeIndex];

  return (
    <section
      id="safari-suite"
      className="py-24 relative overflow-hidden bg-white dark:bg-zinc-950/60 border-t border-zinc-200/80 dark:border-white/5 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200/80 dark:border-emerald-500/20 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
              <Compass className="w-3.5 h-3.5" />
              <span>Official Apple App Store Safari Ecosystem</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
              Native{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-indigo-600 to-cyan-600 dark:from-emerald-400 dark:via-indigo-300 dark:to-cyan-300">
                Safari Extensions
              </span>{" "}
              Suite.
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Every Cogify Safari extension runs 100% locally on your iPhone, iPad, and Mac with zero analytics, zero accounts, and zero subscriptions. Explore our 6 published Safari tools on the App Store.
            </p>
          </div>

          <Link
            href="/products"
            className="px-5 py-3 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-100 font-semibold text-xs transition-colors inline-flex items-center gap-2 shrink-0 self-start md:self-auto shadow-sm"
          >
            <span>Explore Full App Catalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* App Selector Tabs */}
        <div
          role="tablist"
          aria-label="Safari Extensions Catalog"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10"
        >
          {extensions.map((ext, idx) => {
            const isSelected = activeIndex === idx;
            return (
              <button
                key={ext.data.slug}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveIndex(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex items-start gap-3.5 ${
                  isSelected
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 border-zinc-900 dark:border-white shadow-lg"
                    : "bg-zinc-50/90 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-900 border-zinc-200/80 dark:border-white/10 text-zinc-900 dark:text-white"
                }`}
              >
                <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-zinc-200/60 dark:border-white/10 shrink-0 bg-white dark:bg-zinc-800">
                  <Image
                    src={ext.data.icon}
                    alt={`${ext.data.name} Safari Extension icon`}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <h3 className="text-sm font-bold truncate">{ext.data.name}</h3>
                  </div>
                  <p
                    className={`text-[11px] font-mono mt-0.5 truncate ${
                      isSelected ? "text-zinc-300 dark:text-zinc-600" : "text-zinc-500"
                    }`}
                  >
                    {ext.badgeText}
                  </p>
                  <p
                    className={`text-xs mt-1.5 line-clamp-1 ${
                      isSelected ? "text-zinc-200 dark:text-zinc-700" : "text-zinc-600 dark:text-zinc-400"
                    }`}
                  >
                    {ext.data.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Extension Deep Showcase Card */}
        <div className="rounded-3xl p-6 sm:p-10 bg-zinc-50/70 dark:bg-zinc-900/40 border border-zinc-200/90 dark:border-white/10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Screenshot Preview */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500">
                  {active.iconComponent}
                  <span>{active.data.name}</span>
                </div>
                <div className="inline-flex p-1 rounded-xl bg-zinc-200/70 dark:bg-zinc-800/80 border border-zinc-300/60 dark:border-white/10">
                  <button
                    type="button"
                    onClick={() => setDeviceView("ios")}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                      deviceView === "ios"
                        ? "bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white shadow-xs"
                        : "text-zinc-600 dark:text-zinc-400"
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>iOS (iPhone)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeviceView("large")}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                      deviceView === "large"
                        ? "bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white shadow-xs"
                        : "text-zinc-600 dark:text-zinc-400"
                    }`}
                  >
                    {active.largeLabel === "macOS" ? (
                      <Monitor className="w-3.5 h-3.5" />
                    ) : (
                      <Tablet className="w-3.5 h-3.5" />
                    )}
                    <span>{active.largeLabel}</span>
                  </button>
                </div>
              </div>

              {deviceView === "ios" ? (
                <div className="flex justify-center py-2">
                  {/* Uncropped iPhone Bezel */}
                  <div className="relative w-[240px] sm:w-[270px] rounded-[36px] p-2.5 bg-zinc-950 shadow-2xl border-4 border-zinc-800">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-black/80 rounded-full z-20 pointer-events-none" />
                    <div className="relative w-full aspect-[1206/2622] rounded-[28px] overflow-hidden bg-zinc-950">
                      <Image
                        src={active.mobileImage}
                        alt={`${active.data.name} iOS iPhone Safari Extension Screenshot`}
                        fill
                        className="object-contain"
                        sizes="270px"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-950 shadow-xl">
                  <div className="h-7 px-3 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between">
                    <div className="flex items-center space-x-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400">
                      {active.data.name} — Safari for {active.largeLabel}
                    </span>
                    <div className="w-8" />
                  </div>
                  <div className="relative w-full aspect-[16/10] bg-zinc-950">
                    <Image
                      src={active.largeImage}
                      alt={`${active.data.name} ${active.largeLabel} Safari Extension Screenshot`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 650px"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Right: Features & Direct App Store Links — All 6 Extensions Server-Rendered in DOM for Googlebot Indexing */}
            {extensions.map((ext, idx) => {
              const isSelected = activeIndex === idx;
              return (
                <div
                  key={ext.data.slug}
                  className={isSelected ? "lg:col-span-5 space-y-6" : "hidden"}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 shadow-md shrink-0 bg-white dark:bg-zinc-900">
                      <Image
                        src={ext.data.icon}
                        alt={`${ext.data.name} Safari Extension icon`}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold">
                        {ext.badgeText}
                      </span>
                      <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                        {ext.data.name}
                      </h3>
                      <p className="text-xs text-zinc-500 font-mono">{ext.data.platform}</p>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {ext.data.shortDescription}
                  </p>

                  <div className="space-y-2.5">
                    {ext.data.features.slice(0, 4).map((feat, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-white dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-white/5 flex items-start gap-2.5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs font-bold text-zinc-900 dark:text-white">
                            {feat.title}
                          </div>
                          <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-snug mt-0.5">
                            {feat.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={ext.data.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/20 transition-all duration-200 inline-flex items-center gap-2"
                    >
                      <span>Download {ext.data.shortName} on App Store</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <Link
                      href={`/${ext.data.slug}`}
                      className="px-5 py-3 rounded-xl text-xs font-semibold bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white border border-zinc-200 dark:border-white/10 transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>Explore {ext.data.shortName}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
