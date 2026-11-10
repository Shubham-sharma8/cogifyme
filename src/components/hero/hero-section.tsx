"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Lock, Globe } from "lucide-react";
import { siteConfig } from "@/config/site";
import { BrandLogo } from "@/components/brand/brand-logo";
import { AppleLogoIcon, SafariIcon } from "@/components/ui/platform-icons";

interface AppBoxItem {
  id: string;
  name: string;
  platform: "For Mac" | "For iOS" | "Web";
  solutionTag: string;
  icon: string;
  href: string;
  accentColor: string;
}

const COGIFY_APPS: AppBoxItem[] = [
  {
    id: "helium",
    name: "Helium",
    platform: "For Mac",
    solutionTag: "Google Drive Pool",
    icon: siteConfig.helium.icon,
    href: "/helium",
    accentColor: "#10b981",
  },
  {
    id: "findy",
    name: "Findy",
    platform: "For Mac",
    solutionTag: "Search & Space Lens",
    icon: siteConfig.findy.icon,
    href: "/findy",
    accentColor: "#10b981",
  },
  {
    id: "taskyfy",
    name: "Taskyfy",
    platform: "For Mac",
    solutionTag: "Activity & Port Studio",
    icon: siteConfig.taskyfy.icon,
    href: "/taskyfy",
    accentColor: "#16a34a",
  },
  {
    id: "wheelify",
    name: "Wheelify",
    platform: "For Mac",
    solutionTag: "16-Tool Radial Wheel",
    icon: siteConfig.wheelify.icon,
    href: "/wheelify",
    accentColor: "#111113",
  },
  {
    id: "emdoc",
    name: "EmDoc",
    platform: "For Mac",
    solutionTag: "PDF Workstation",
    icon: "/brand/emdoc-icon-sm.webp",
    href: "/emdoc",
    accentColor: "#6366f1",
  },
  {
    id: "lumenview",
    name: "LumenView",
    platform: "For Mac",
    solutionTag: "Display & DDC/CI",
    icon: siteConfig.lumenview.icon,
    href: "/lumenview",
    accentColor: "#38bdf8",
  },
  {
    id: "metricove",
    name: "Metricove",
    platform: "For Mac",
    solutionTag: "System Telemetry",
    icon: siteConfig.metricove.icon,
    href: "/metricove",
    accentColor: "#10b981",
  },
  {
    id: "netguard",
    name: "NetGuard",
    platform: "For Mac",
    solutionTag: "Outbound Firewall",
    icon: siteConfig.netguard.icon,
    href: "/netguard",
    accentColor: "#06b6d4",
  },
  {
    id: "klipora",
    name: "Klipora",
    platform: "For Mac",
    solutionTag: "Clipboard History",
    icon: siteConfig.klipora.icon,
    href: "/klipora",
    accentColor: "#f59e0b",
  },
  {
    id: "show-free-space",
    name: "ShowFreeSpace",
    platform: "For Mac",
    solutionTag: "Disk Space Map",
    icon: siteConfig.showFreeSpace.icon,
    href: "/show-free-space",
    accentColor: "#a855f7",
  },
  {
    id: "biodata",
    name: "Biodata Studio",
    platform: "Web",
    solutionTag: "242 Templates",
    icon: siteConfig.biodata.icon,
    href: "/biodata",
    accentColor: "#f59e0b",
  },
  {
    id: "ssb",
    name: "SSB Studio",
    platform: "Web",
    solutionTag: "Stage-2 Simulator",
    icon: siteConfig.ssb.icon,
    href: "/ssb",
    accentColor: "#10b981",
  },
  {
    id: "ad-blocker",
    name: "Ad Blocker",
    platform: "For iOS",
    solutionTag: "Safari Shield",
    icon: siteConfig.adBlocker.icon,
    href: "/ad-blocker",
    accentColor: "#22c55e",
  },
  {
    id: "readereasy",
    name: "ReaderEasy",
    platform: "For iOS",
    solutionTag: "Bionic Reader",
    icon: siteConfig.readereasy.icon,
    href: "/readereasy",
    accentColor: "#eab308",
  },
  {
    id: "webclear",
    name: "WebClear",
    platform: "For iOS",
    solutionTag: "Cookie Cleaner",
    icon: siteConfig.webclear.icon,
    href: "/webclear",
    accentColor: "#06b6d4",
  },
  {
    id: "weblenses",
    name: "WebLenses",
    platform: "For iOS",
    solutionTag: "Web Vitals Audit",
    icon: siteConfig.weblenses.icon,
    href: "/weblenses",
    accentColor: "#6366f1",
  },
  {
    id: "element-hider",
    name: "Element Hider",
    platform: "For iOS",
    solutionTag: "Tap to Hide DOM",
    icon: "/brand/Element-Hider/icon-sm.webp",
    href: "/element-hider",
    accentColor: "#8b5cf6",
  },
  {
    id: "invert",
    name: "Colour Invert",
    platform: "For iOS",
    solutionTag: "Smart Dark Mode",
    icon: "/brand/Invert/icon-sm.webp",
    href: "/invert",
    accentColor: "#3b82f6",
  },
];

const SOLUTIONS = [
  {
    id: "for-mac",
    badge: "For Mac",
    icon: <AppleLogoIcon className="w-3.5 h-3.5 -mt-0.5" />,
    title: "Native macOS utilities that respect your Mac.",
    description:
      "Pool unlimited Google Drives into /Volumes/Helium with 0 B used on your Mac SSD, edit PDFs offline in a 7.8 MB workstation, and control displays, telemetry, firewall rules, clipboard, and disk space.",
    apps: "Helium · EmDoc · LumenView · Metricove · NetGuard · Klipora · ShowFreeSpace",
    href: "/products#for-mac",
    cta: "Download for Mac",
  },
  {
    id: "for-ios",
    badge: "For iOS & Safari",
    icon: <SafariIcon className="w-3.5 h-3.5" />,
    title: "Zero-telemetry Safari extensions for iPhone, iPad & Mac.",
    description:
      "Block 75,000+ trackers natively, read articles in Bionic focus mode, clear single-site cookies in one tap, inspect Core Web Vitals, hide annoying page elements, and apply smart dark mode.",
    apps: "Ad Blocker · ReaderEasy · WebClear · WebLenses · Element Hider · Colour Invert",
    href: "/products#for-ios",
    cta: "Get on App Store",
  },
  {
    id: "web",
    badge: "Web Solutions",
    icon: <Globe className="w-3.5 h-3.5" />,
    title: "Instant browser studios with zero sign-up.",
    description:
      "Design 300-DPI marriage biodata across 242 cultural templates and 9 scripts (biodata.cogify.me), or practice full timed Indian Armed Forces SSB Stage-2 Psych & GTO tests (ssb.cogify.me) 100% locally in your browser.",
    apps: "Marriage Biodata Maker · SSB Stage-2 Practice Studio",
    href: "/products#web",
    cta: "Launch Web studios",
  },
];

export const HeroSection = () => {
  const [hoveredId, setHoveredId] = useState<string>("helium");

  return (
    <div className="pt-28 sm:pt-36 pb-20">
      {/* 1. Helumi-Style Centered Minimal Hero */}
      <section className="max-w-[920px] mx-auto px-6 text-center pb-14 sm:pb-16">
        <div className="mb-5">
          <Link
            href="/helium"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#16161a] border border-black/[0.08] dark:border-white/[0.12] text-[12.5px] text-black/80 dark:text-white/85 shadow-2xs hover:border-black/25 dark:hover:border-white/25 transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold">New Flagship: Helium for Mac</span>
            <span className="text-black/35 dark:text-white/35">·</span>
            <span className="text-black/65 dark:text-white/65">
              Pool Google Drives at /Volumes/Helium (0 B on disk)
            </span>
            <ArrowRight className="w-3.5 h-3.5 opacity-60" />
          </Link>
        </div>

        <h1 className="hero-title text-[38px] sm:text-[52px] font-semibold tracking-[-0.045em] leading-[1.08] text-black dark:text-white flex flex-wrap items-center justify-center gap-x-2.5">
          <span className="helumi-em font-medium italic">meet</span>
          <span className="hero-tile w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white dark:bg-[#1a1a1f] border border-black/[0.08] dark:border-white/[0.12] shadow-sm inline-flex items-center justify-center">
            <BrandLogo width={28} height={28} priority />
          </span>
          <span className="helumi-em font-medium italic">cogify</span>
          <span>.</span>
        </h1>

        <p className="mt-3 mb-6 text-[16px] sm:text-[18px] text-black/65 dark:text-white/65 max-w-[42ch] mx-auto leading-[1.5] text-balance">
          <span className="marker text-black dark:text-white">
            15 free solutions
          </span>{" "}
          for your Mac, iPhone, iPad, and Web — built for speed and privacy, without subscriptions.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2.5">
          <Link href="/helium" className="helumi-pill helumi-pill-dark">
            <AppleLogoIcon className="w-4 h-4 -mt-0.5" />
            <span>meet helium (mac drive pool)</span>
          </Link>
          <Link href="/products" className="helumi-pill helumi-pill-light">
            <span>explore all 15 apps</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-3.5 text-[12px] text-black/55 dark:text-white/50 space-y-1">
          <div>free to download · macOS, iOS, Safari &amp; Web</div>
          <div className="inline-flex items-center justify-center gap-1.5">
            <Lock className="w-3 h-3" aria-hidden="true" />
            <span>100% on-device · zero telemetry</span>
          </div>
        </div>
      </section>

      {/* 2. "Everyday tools. Zero bloat." Icon Box Grid */}
      <section className="max-w-[1120px] mx-auto px-4 sm:px-6 mb-20 sm:mb-24">
        <div className="rounded-[24px] bg-[#0e0e11] text-white border border-black/10 dark:border-white/[0.12] overflow-hidden shadow-[0_24px_60px_-15px_rgba(0,0,0,0.22)]">
          {/* Box Grid Header */}
          <div className="p-6 sm:p-10 lg:px-12 lg:pt-12 lg:pb-9 border-b border-white/[0.1]">
            <div className="flex items-center justify-between gap-4 mb-3">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/45">
                COGIFY ECOSYSTEM
              </span>
              <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-white/55 hidden sm:inline">
                MACOS · IOS · SAFARI · WEB
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="text-[32px] sm:text-[46px] lg:text-[52px] font-semibold tracking-[-0.035em] text-white leading-[1.06]">
                  Everyday tools. Zero{" "}
                  <span className="craft-serif font-normal italic text-[1.08em]">
                    bloat
                  </span>
                  .
                </h2>
                <p className="mt-3 text-[14px] sm:text-[15px] text-white/60 max-w-[50ch] leading-relaxed">
                  15 native macOS apps, Safari extensions, and instant web studios — engineered for speed, 100% offline privacy, and free forever.
                </p>
              </div>

              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.18em] text-white/70 hover:text-white transition-colors shrink-0"
              >
                <span>ALL COGIFY APPS</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* 15-App Hairline Box Grid (5 columns x 3 rows on desktop, 3 on tablet) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border-l border-white/[0.09]">
            {COGIFY_APPS.map((app) => {
              const isHighlighted = hoveredId === app.id;
              return (
                <Link
                  key={app.id}
                  href={app.href}
                  onMouseEnter={() => setHoveredId(app.id)}
                  onFocus={() => setHoveredId(app.id)}
                  className="group relative aspect-square p-5 sm:p-6 border-r border-b border-white/[0.09] flex flex-col items-center justify-center text-center transition-colors duration-200 hover:bg-white/[0.03]"
                >
                  {/* Top Active/Hover Accent Line */}
                  <span
                    className="absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-200"
                    style={{
                      backgroundColor: app.accentColor,
                      opacity: isHighlighted ? 1 : 0,
                    }}
                    aria-hidden="true"
                  />

                  {/* App Squircle Icon */}
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-[16px] overflow-hidden bg-[#18181d] border border-white/[0.12] shadow-lg transition-transform duration-200 group-hover:scale-105 mb-3.5">
                    <Image
                      src={app.icon}
                      alt={`${app.name} — ${app.solutionTag} (${app.platform})`}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>

                  {/* App Name */}
                  <span
                    className="text-[13px] font-medium tracking-[-0.01em] transition-colors"
                    style={{
                      color: isHighlighted ? "#a5b4fc" : "rgba(255,255,255,0.88)",
                    }}
                  >
                    {app.name}
                  </span>

                  {/* Subtle Solution Subtitle */}
                  <span className="text-[11px] text-white/45 mt-0.5 leading-tight">
                    {app.solutionTag}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Bottom Centered "[ ↗ ] All apps" Bar */}
          <div className="py-5 px-6 flex items-center justify-center bg-[#0b0b0e]">
            <Link
              href="/products"
              className="group inline-flex items-center gap-3.5 text-[13px] font-medium text-white/85 hover:text-white transition-colors"
            >
              <span className="w-10 h-10 border border-white/25 group-hover:border-white/60 group-hover:bg-white/[0.06] inline-flex items-center justify-center transition-colors">
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              <span>All apps</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Solutions Navigation Section (For Mac, For iOS, Web -> Navigates User to Product Page) */}
      <section className="max-w-[920px] mx-auto px-6 mb-20 sm:mb-24">
        <div className="text-center mb-10">
          <div className="text-[13px] text-black/55 dark:text-white/50 mb-1.5">
            focused solutions
          </div>
          <h2 className="text-[28px] sm:text-[36px] font-semibold tracking-[-0.03em] text-black dark:text-white">
            built for <em className="helumi-em">every</em> device you use.
          </h2>
          <p className="mt-2 text-[15px] text-black/65 dark:text-white/65 max-w-[44ch] mx-auto">
            Pick your platform to explore detailed specs, screenshots, and instant downloads on our product catalog.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SOLUTIONS.map((sol) => (
            <Link
              key={sol.id}
              href={sol.href}
              className="group rounded-[20px] p-6 bg-white dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.09] hover:border-black/25 dark:hover:border-white/25 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#f5f5f5] dark:bg-white/[0.07] text-black dark:text-white text-[12px] font-medium mb-4">
                  {sol.icon}
                  <span>{sol.badge}</span>
                </div>

                <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-black dark:text-white leading-snug">
                  {sol.title}
                </h3>

                <p className="mt-2.5 text-[14px] text-black/65 dark:text-white/65 leading-relaxed">
                  {sol.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-black/[0.06] dark:border-white/[0.07]">
                <div className="text-[11px] text-black/45 dark:text-white/45 mb-2.5 truncate">
                  {sol.apps}
                </div>
                <div className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-black dark:text-white group-hover: gap-2 transition-all">
                  <span>{sol.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Minimal Helumi-Style Closing Section */}
      <section className="max-w-[680px] mx-auto px-6 text-center pt-4">
        <h2 className="text-[28px] sm:text-[36px] font-semibold tracking-[-0.03em] text-black dark:text-white leading-[1.12]">
          stop paying subscriptions
          <br />
          for <em className="helumi-em">everyday</em> tools.
        </h2>
        <p className="mt-3 mb-6 text-[15px] text-black/65 dark:text-white/65">
          Explore all 15 native Mac, iOS, Safari, and Web solutions on our product page.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          <Link href="/products#for-mac" className="helumi-pill helumi-pill-dark">
            <AppleLogoIcon className="w-4 h-4 -mt-0.5" />
            <span>download for mac &amp; ios</span>
          </Link>
          <Link href="/products" className="helumi-pill helumi-pill-light">
            <span>go to product page</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
};
