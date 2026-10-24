"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Download,
  Monitor,
  Cpu,
  Shield,
  Clipboard,
  HardDrive,
  FileText,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/config/site";

interface MacShowcaseItem {
  slug: string;
  href: string;
  name: string;
  shortName: string;
  tagline: string;
  shortDescription: string;
  version: string;
  appSize: string;
  platform: string;
  icon: string;
  downloadUrl: string;
  appStoreUrl?: string;
  badgeText: string;
  iconComponent: React.ReactNode;
  screenshots: { title: string; caption: string; image: string }[];
  features: { title: string; description: string }[];
}

export const MacOSAppsShowcase = () => {
  const macApps: MacShowcaseItem[] = [
    {
      slug: "emdoc",
      href: "/products/emdoc",
      name: "EmDoc PDF Workstation",
      shortName: "EmDoc",
      tagline: siteConfig.emdoc.tagline,
      shortDescription: siteConfig.emdoc.shortDescription,
      version: siteConfig.emdoc.version,
      appSize: siteConfig.emdoc.appSize,
      platform: "macOS 13.0+ (Universal Apple Silicon & Intel)",
      icon: "/brand/emdoc-icon-sm.webp",
      downloadUrl: siteConfig.emdoc.downloadUrl || "https://github.com/Shubham-sharma8/cogifyme/releases/download/v1.0/EmDoc.dmg",
      appStoreUrl: siteConfig.emdoc.appStoreUrl,
      badgeText: `v${siteConfig.emdoc.version} • ${siteConfig.emdoc.appSize} DMG`,
      iconComponent: <FileText className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
      screenshots: siteConfig.emdoc.screenshots.map((s) => ({
        title: s.title,
        caption: s.description,
        image: s.image,
      })),
      features: siteConfig.emdoc.features.map((f) => ({
        title: f.title,
        description: f.description,
      })),
    },
    {
      ...siteConfig.lumenview,
      href: `/${siteConfig.lumenview.slug}`,
      badgeText: `v${siteConfig.lumenview.version} • ${siteConfig.lumenview.appSize} DMG`,
      iconComponent: <Monitor className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
      screenshots: siteConfig.lumenview.screenshotsMac.map((s) => ({
        title: s.title,
        caption: s.description,
        image: s.image,
      })),
    },
    {
      ...siteConfig.metricove,
      href: `/${siteConfig.metricove.slug}`,
      badgeText: `v${siteConfig.metricove.version} • ${siteConfig.metricove.appSize} DMG`,
      iconComponent: <Cpu className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
      screenshots: siteConfig.metricove.screenshotsMac.map((s) => ({
        title: s.title,
        caption: s.description,
        image: s.image,
      })),
    },
    {
      ...siteConfig.netguard,
      href: `/${siteConfig.netguard.slug}`,
      badgeText: `v${siteConfig.netguard.version} • ${siteConfig.netguard.appSize} DMG`,
      iconComponent: <Shield className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />,
      screenshots: siteConfig.netguard.screenshotsMac.map((s) => ({
        title: s.title,
        caption: s.description,
        image: s.image,
      })),
    },
    {
      ...siteConfig.klipora,
      href: `/${siteConfig.klipora.slug}`,
      badgeText: `v${siteConfig.klipora.version} • ${siteConfig.klipora.appSize} DMG`,
      iconComponent: <Clipboard className="w-4 h-4 text-amber-600 dark:text-amber-400" />,
      screenshots: siteConfig.klipora.screenshotsMac.map((s) => ({
        title: s.title,
        caption: s.description,
        image: s.image,
      })),
    },
    {
      ...siteConfig.showFreeSpace,
      href: `/${siteConfig.showFreeSpace.slug}`,
      badgeText: `v${siteConfig.showFreeSpace.version} • ${siteConfig.showFreeSpace.appSize} DMG`,
      iconComponent: <HardDrive className="w-4 h-4 text-purple-600 dark:text-purple-400" />,
      screenshots: siteConfig.showFreeSpace.screenshotsMac.map((s) => ({
        title: s.title,
        caption: s.description,
        image: s.image,
      })),
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [shotIndex, setShotIndex] = useState(0);

  const active = macApps[activeIndex];
  const currentShot = active.screenshots[shotIndex] ?? active.screenshots[0];

  const handleSelectApp = (idx: number) => {
    setActiveIndex(idx);
    setShotIndex(0);
  };

  return (
    <section
      id="macos-workstations"
      className="py-24 relative overflow-hidden bg-zinc-50/70 dark:bg-[#070a10] border-t border-zinc-200/80 dark:border-white/5 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border border-indigo-200/80 dark:border-indigo-500/20 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>6 Native macOS Apps • Direct 1-Click .DMG Downloads</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
              Native{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-cyan-600 to-emerald-600 dark:from-indigo-400 dark:via-cyan-300 dark:to-emerald-300">
                macOS Workstations
              </span>{" "}
              &amp; System Utilities.
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Engineered natively in Swift 6, AppKit, and C++20 for Apple Silicon &amp; Intel Macs. Signed with our official Apple Developer ID (9TKKPN6F59) and hosted on GitHub Releases for instant <strong>single-click .DMG download</strong> — 100% free with zero telemetry.
            </p>
          </div>

          <Link
            href="/products"
            className="px-5 py-3 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-100 font-semibold text-xs transition-colors inline-flex items-center gap-2 shrink-0 self-start md:self-auto shadow-sm"
          >
            <span>All 6 macOS Downloads</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* App Selector Cards with Instant 1-Click Download Pill */}
        <div
          aria-label="Native macOS Workstations Catalog"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-10"
        >
          {macApps.map((app, idx) => {
            const isSelected = activeIndex === idx;
            return (
              <div
                key={app.slug}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between gap-3 ${
                  isSelected
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 border-zinc-900 dark:border-white shadow-xl"
                    : "bg-white dark:bg-zinc-900/60 hover:bg-zinc-100/80 dark:hover:bg-zinc-900 border-zinc-200/80 dark:border-white/10 text-zinc-900 dark:text-white"
                }`}
              >
                <button
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => handleSelectApp(idx)}
                  className="w-full text-left flex items-start gap-3.5 cursor-pointer"
                >
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-zinc-200/60 dark:border-white/10 shrink-0 bg-white dark:bg-zinc-800">
                    <Image
                      src={app.icon}
                      alt={`${app.name} macOS App Icon`}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-1">
                      <h3 className="text-sm font-bold truncate">{app.shortName}</h3>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full shrink-0 ${
                          isSelected
                            ? "bg-emerald-500/20 text-emerald-300 dark:bg-emerald-500/15 dark:text-emerald-800"
                            : "bg-emerald-500/10 text-emerald-800 dark:text-emerald-300"
                        }`}
                      >
                        {app.badgeText}
                      </span>
                    </div>
                    <p
                      className={`text-xs mt-1 line-clamp-2 leading-snug ${
                        isSelected
                          ? "text-zinc-200 dark:text-zinc-700"
                          : "text-zinc-600 dark:text-zinc-400"
                      }`}
                    >
                      {app.tagline}
                    </p>
                  </div>
                </button>

                <div className="pt-2.5 border-t border-zinc-200/20 dark:border-zinc-800/40 flex items-center justify-between gap-2">
                  <a
                    href={app.downloadUrl}
                    download
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-bold transition-colors ${
                      isSelected
                        ? "bg-emerald-500 hover:bg-emerald-400 text-zinc-950"
                        : "bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-800 dark:text-emerald-300 border border-emerald-500/25"
                    }`}
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>1-Click Download (.DMG)</span>
                  </a>
                  <Link
                    href={app.href}
                    className={`text-[11px] font-semibold inline-flex items-center gap-1 hover:underline ${
                      isSelected
                        ? "text-zinc-200 dark:text-zinc-700"
                        : "text-indigo-700 dark:text-indigo-400"
                    }`}
                  >
                    <span>Explore {app.shortName}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active macOS App Deep Showcase Card */}
        <div className="rounded-3xl p-6 sm:p-10 bg-white dark:bg-zinc-900/50 border border-zinc-200/90 dark:border-white/10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Screenshot Gallery Preview */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                  {active.iconComponent}
                  <span className="font-bold text-zinc-900 dark:text-white">
                    {active.name}
                  </span>
                  <span>•</span>
                  <span>
                    Screenshot {shotIndex + 1} of {active.screenshots.length}
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() =>
                      setShotIndex((prev) =>
                        prev === 0 ? active.screenshots.length - 1 : prev - 1
                      )
                    }
                    className="p-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer"
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setShotIndex((prev) =>
                        prev === active.screenshots.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="p-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer"
                    aria-label="Next screenshot"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-950 shadow-2xl">
                <div className="h-8 px-3.5 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400 truncate max-w-[320px]">
                    {active.shortName} — {currentShot?.title}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400">
                    {active.appSize}
                  </span>
                </div>
                <div className="relative w-full aspect-[16/10] bg-zinc-950">
                  <Image
                    src={currentShot?.image}
                    alt={`${active.name} — ${currentShot?.title}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 680px"
                  />
                </div>
              </div>

              {/* Screenshot Step Selector Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                {active.screenshots.map((shot, sIdx) => {
                  const numStr = sIdx + 1 < 10 ? `0${sIdx + 1}` : `${sIdx + 1}`;
                  return (
                    <button
                      key={shot.image}
                      type="button"
                      onClick={() => setShotIndex(sIdx)}
                      title={`View ${active.shortName} screenshot ${sIdx + 1}: ${shot.title}`}
                      aria-pressed={shotIndex === sIdx}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border shrink-0 transition-all cursor-pointer flex items-center gap-1.5 ${
                        shotIndex === sIdx
                          ? "bg-indigo-600 text-white border-indigo-600 shadow-xs"
                          : "bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-white/10 hover:bg-zinc-200/70 dark:hover:bg-zinc-800"
                      }`}
                    >
                      <span className="font-mono text-[10px] opacity-80">{numStr}</span>
                      <span className="truncate max-w-[140px]">{shot.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Features & Single-Click Direct DMG Download */}
            {macApps.map((app, idx) => {
              const isSelected = activeIndex === idx;
              return (
                <div
                  key={app.slug}
                  className={isSelected ? "lg:col-span-5 space-y-6" : "hidden"}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 shadow-md shrink-0 bg-white dark:bg-zinc-900">
                      <Image
                        src={app.icon}
                        alt={`${app.name} macOS icon`}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-semibold">
                        {app.badgeText} • Signed Developer ID
                      </span>
                      <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                        {app.name}
                      </h3>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 font-mono">{app.platform}</p>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {app.shortDescription}
                  </p>

                  <div className="space-y-2.5">
                    {app.features.slice(0, 4).map((feat, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-white/5 flex items-start gap-2.5"
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
                      href={app.downloadUrl}
                      download
                      className="px-5 py-3 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-zinc-950 shadow-md shadow-emerald-500/20 transition-all duration-200 inline-flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      <span>
                        Download {app.shortName}.dmg ({app.appSize})
                      </span>
                    </a>

                    <Link
                      href={app.href}
                      className="px-5 py-3 rounded-xl text-xs font-semibold bg-zinc-900 dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-200 text-white dark:text-zinc-950 transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>Explore {app.shortName}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    {app.appStoreUrl && (
                      <a
                        href={app.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-3 rounded-xl text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-white/10 transition-colors inline-flex items-center gap-1.5"
                      >
                        <span>Mac App Store</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
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
