"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  ExternalLink,
  Search,
  Globe,
  Laptop,
  Compass,
  Scale,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { BrandLogo } from "@/components/brand/brand-logo";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { CommandPalette } from "@/components/navigation/command-palette";
import { cn } from "@/lib/utils";

const webStudios = [
  {
    name: "Biodata Maker Studio",
    href: "/biodata",
    externalUrl: siteConfig.biodata.webUrl,
    domain: "biodata.cogify.me",
    icon: "/brand/Biodata/icon-sm.webp",
    desc: "242 cultural templates, 9 languages & 300-DPI PDF / Word export",
    accent: "amber",
  },
  {
    name: "SSB Practice Studio",
    href: "/ssb",
    externalUrl: siteConfig.ssb.webUrl,
    domain: "ssb.cogify.me",
    icon: "/brand/SSB/icon.png",
    desc: "Stage-2 Psych (TAT, WAT, SRT, SDT), GTO & IO interview simulator",
    accent: "emerald",
  },
];

const macApps = [
  {
    name: "EmDoc Workstation",
    href: "/products/emdoc",
    badge: "5.0 MB DMG",
    icon: "/brand/emdoc-icon-sm.webp",
    desc: "Air-gapped PDF editor, merger, OCR & compressor",
  },
  {
    name: "LumenView",
    href: "/lumenview",
    badge: "1.6 MB DMG",
    icon: "/brand/LumenView/icon-sm.webp",
    desc: "Hardware DDC/CI monitor brightness & HiDPI controller",
  },
  {
    name: "Metricove",
    href: "/metricove",
    badge: "1.5 MB DMG",
    icon: "/brand/Metricove/icon-sm.webp",
    desc: "Menu bar CPU, GPU, memory, network & SMC fan monitor",
  },
  {
    name: "NetGuard",
    href: "/netguard",
    badge: "1.5 MB DMG",
    icon: "/brand/NetGuard/icon-sm.webp",
    desc: "Real-time outbound network firewall & connection monitor",
  },
  {
    name: "Klipora",
    href: "/klipora",
    badge: "1.7 MB DMG",
    icon: "/brand/Klipora/icon-sm.webp",
    desc: "Instant clipboard history, snippet library & pasteboard",
  },
  {
    name: "Show free space",
    href: "/show-free-space",
    badge: "1.4 MB DMG",
    icon: "/brand/ShowFreeSpace/icon-sm.webp",
    desc: "Interactive sunburst disk space analyzer & cleaner",
  },
];

const safariApps = [
  {
    name: "Ad Blocker - For Safari",
    href: "/ad-blocker",
    badge: "iOS & Mac",
    icon: "/brand/Ad-Blocker/icon-sm.webp",
    desc: "75,000+ native content blocking rules & privacy shield",
  },
  {
    name: "ReaderEasy",
    href: "/readereasy",
    badge: "iOS & Mac",
    icon: "/brand/ReaderEasy/icon-sm.webp",
    desc: "Distraction-free reader, Bionic reading & dyslexia fonts",
  },
  {
    name: "WebClear",
    href: "/webclear",
    badge: "iOS & Mac",
    icon: "/brand/WebClear/icon-sm.webp",
    desc: "One-tap cookie, cache, LocalStorage & tracking URL cleaner",
  },
  {
    name: "WebLenses",
    href: "/weblenses",
    badge: "iOS & Mac",
    icon: "/brand/WebLenses/icon-sm.webp",
    desc: "6-in-1 Core Web Vitals, SEO, accessibility & security auditor",
  },
  {
    name: "Element Hider",
    href: "/element-hider",
    badge: "iOS & Mac",
    icon: "/brand/Element-Hider/icon-sm.webp",
    desc: "Point, tap & permanently hide distracting webpage elements",
  },
  {
    name: "Colour Invert",
    href: "/invert",
    badge: "iOS & Mac",
    icon: "/brand/Invert/icon-sm.webp",
    desc: "Smart per-site dark mode & colour inversion with Media Shield",
  },
];

const allAppLinks = [
  ...webStudios.map((s) => ({
    name: s.name,
    href: s.href,
    badge: s.domain,
    icon: s.icon,
    desc: s.desc,
  })),
  ...macApps,
  ...safariApps,
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [appsDropdownOpen, setAppsDropdownOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommandOpen((prev) => !prev);
        setAppsDropdownOpen(false);
        setMobileMenuOpen(false);
      } else if (e.key === "Escape") {
        setAppsDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  const isEcosystemActive =
    pathname === "/products" ||
    pathname?.startsWith("/products/") ||
    pathname?.startsWith("/lumenview") ||
    pathname?.startsWith("/metricove") ||
    pathname?.startsWith("/netguard") ||
    pathname?.startsWith("/klipora") ||
    pathname?.startsWith("/show-free-space") ||
    pathname?.startsWith("/ad-blocker") ||
    pathname?.startsWith("/readereasy") ||
    pathname?.startsWith("/webclear") ||
    pathname?.startsWith("/weblenses") ||
    pathname?.startsWith("/element-hider") ||
    pathname?.startsWith("/invert") ||
    pathname?.startsWith("/biodata") ||
    pathname?.startsWith("/ssb");

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-[padding] duration-300 px-3 sm:px-6 lg:px-8",
          scrolled ? "py-2.5" : "py-4"
        )}
      >
        <div className="max-w-7xl mx-auto">
          <nav
            className={cn(
              "flex items-center justify-between rounded-2xl px-3.5 sm:px-5 py-2.5 transition-[background-color,border-color,box-shadow] duration-300",
              scrolled
                ? "bg-white/92 dark:bg-[#090c12]/90 border border-zinc-200/90 dark:border-white/[0.11] shadow-[0_12px_36px_-12px_rgba(15,23,42,0.12)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.85)] backdrop-blur-2xl"
                : "bg-white/75 dark:bg-[#090c12]/65 border border-zinc-200/70 dark:border-white/[0.08] backdrop-blur-xl"
            )}
            aria-label="Main Navigation"
          >
            {/* COGIFY Brand Identity */}
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="flex items-center space-x-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-xl"
              >
                <div className="relative w-8 h-8 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                  <BrandLogo width={32} height={32} priority />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="font-extrabold text-[15px] tracking-tight text-zinc-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {siteConfig.name}
                    </span>
                    <span className="hidden xl:inline-flex items-center px-1.5 py-0.5 rounded-md text-[9px] font-mono font-semibold bg-zinc-100 dark:bg-white/[0.06] text-zinc-600 dark:text-zinc-400 border border-zinc-200/80 dark:border-white/[0.08]">
                      STUDIO
                    </span>
                  </div>
                  <span className="text-[9px] font-mono tracking-widest text-zinc-500 dark:text-zinc-400 uppercase leading-none mt-0.5">
                    Apple &amp; Web Systems
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Center Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {/* 3-Pillar Ecosystem Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => setAppsDropdownOpen(true)}
                onMouseLeave={() => setAppsDropdownOpen(false)}
                onFocusCapture={() => setAppsDropdownOpen(true)}
                onBlurCapture={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                    setAppsDropdownOpen(false);
                  }
                }}
              >
                <Link
                  href="/products"
                  aria-expanded={appsDropdownOpen}
                  aria-haspopup="true"
                  className={cn(
                    "px-3 py-1.5 rounded-xl text-xs font-medium transition-colors inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
                    isEcosystemActive
                      ? "text-zinc-950 dark:text-white bg-zinc-100 dark:bg-white/[0.09] font-semibold"
                      : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100/80 dark:hover:bg-white/[0.05]"
                  )}
                >
                  <span>Ecosystem</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-emerald-500/12 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 font-mono font-semibold tabular-nums">
                    14 Free
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-3.5 h-3.5 opacity-60 transition-transform duration-200",
                      appsDropdownOpen && "rotate-180 opacity-100"
                    )}
                    aria-hidden="true"
                  />
                </Link>

                {appsDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/3 pt-2.5 w-[780px] z-50">
                    <div className="rounded-2xl bg-white/98 dark:bg-[#0b0e16]/98 border border-zinc-200/90 dark:border-white/[0.12] shadow-[0_28px_70px_-15px_rgba(0,0,0,0.45)] backdrop-blur-2xl p-5">
                      {/* Top Row: Flagship Real-Time Web Studios */}
                      <div className="mb-4 pb-4 border-b border-zinc-200/80 dark:border-white/[0.08]">
                        <div className="flex items-center justify-between mb-2.5 px-1">
                          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider font-semibold text-amber-600 dark:text-amber-400">
                            <Globe className="w-3.5 h-3.5" aria-hidden="true" />
                            Flagship Real-Time Web Studios (Zero Sign-Up • 100% Client-Side)
                          </span>
                          <span className="text-[10px] font-mono text-zinc-400">
                            2 Live Subdomains
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2.5">
                          {webStudios.map((studio) => (
                            <div
                              key={studio.href}
                              className="p-3 rounded-xl bg-zinc-50/90 dark:bg-white/[0.03] hover:bg-zinc-100/80 dark:hover:bg-white/[0.06] border border-zinc-200/80 dark:border-white/[0.08] transition-colors flex items-start gap-3 group"
                            >
                              <Link
                                href={studio.href}
                                onClick={() => setAppsDropdownOpen(false)}
                                className="relative w-10 h-10 rounded-xl overflow-hidden border border-zinc-200 dark:border-white/10 shrink-0 bg-white dark:bg-zinc-900"
                              >
                                <Image
                                  src={studio.icon}
                                  alt={studio.name}
                                  fill
                                  className="object-cover"
                                  sizes="40px"
                                />
                              </Link>
                              <div className="min-w-0 flex-1">
                                <div className="flex items-center justify-between gap-1.5">
                                  <Link
                                    href={studio.href}
                                    onClick={() => setAppsDropdownOpen(false)}
                                    className="text-xs font-bold text-zinc-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 truncate"
                                  >
                                    {studio.name}
                                  </Link>
                                  <a
                                    href={studio.externalUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setAppsDropdownOpen(false)}
                                    className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-emerald-500/12 text-emerald-700 dark:text-emerald-300 border border-emerald-500/25 hover:bg-emerald-500/20 shrink-0"
                                  >
                                    <span>{studio.domain}</span>
                                    <ExternalLink className="w-2.5 h-2.5" aria-hidden="true" />
                                  </a>
                                </div>
                                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 line-clamp-1 mt-0.5">
                                  {studio.desc}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Two Columns: 6 macOS Native Apps + 6 Safari Extensions */}
                      <div className="grid grid-cols-2 gap-5">
                        {/* Column 1: macOS Native Workstations */}
                        <div>
                          <div className="flex items-center justify-between mb-2 px-1">
                            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider font-semibold text-indigo-600 dark:text-indigo-400">
                              <Laptop className="w-3.5 h-3.5" aria-hidden="true" />
                              macOS Native Workstations (6)
                            </span>
                            <span className="text-[10px] font-mono text-zinc-400">
                              Direct .DMG
                            </span>
                          </div>
                          <div className="space-y-1">
                            {macApps.map((app) => (
                              <Link
                                key={app.href}
                                href={app.href}
                                onClick={() => setAppsDropdownOpen(false)}
                                className="p-2 rounded-xl hover:bg-zinc-100/80 dark:hover:bg-white/[0.05] border border-transparent hover:border-zinc-200/70 dark:hover:border-white/[0.08] transition-colors flex items-center gap-2.5 group"
                              >
                                <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-zinc-200 dark:border-white/10 shrink-0 bg-zinc-100 dark:bg-zinc-800">
                                  <Image
                                    src={app.icon}
                                    alt={app.name}
                                    fill
                                    className="object-cover"
                                    sizes="32px"
                                  />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div className="flex items-center justify-between gap-1">
                                    <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 truncate">
                                      {app.name}
                                    </span>
                                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-white/[0.06] text-zinc-600 dark:text-zinc-400 shrink-0 tabular-nums">
                                      {app.badge}
                                    </span>
                                  </div>
                                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 line-clamp-1">
                                    {app.desc}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Column 2: Safari Extensions */}
                        <div>
                          <div className="flex items-center justify-between mb-2 px-1">
                            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider font-semibold text-cyan-600 dark:text-cyan-400">
                              <Compass className="w-3.5 h-3.5" aria-hidden="true" />
                              Safari Extensions • iOS &amp; Mac (6)
                            </span>
                            <span className="text-[10px] font-mono text-zinc-400">
                              App Store
                            </span>
                          </div>
                          <div className="space-y-1">
                            {safariApps.map((app) => (
                              <Link
                                key={app.href}
                                href={app.href}
                                onClick={() => setAppsDropdownOpen(false)}
                                className="p-2 rounded-xl hover:bg-zinc-100/80 dark:hover:bg-white/[0.05] border border-transparent hover:border-zinc-200/70 dark:hover:border-white/[0.08] transition-colors flex items-center gap-2.5 group"
                              >
                                <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-zinc-200 dark:border-white/10 shrink-0 bg-zinc-100 dark:bg-zinc-800">
                                  <Image
                                    src={app.icon}
                                    alt={app.name}
                                    fill
                                    className="object-cover"
                                    sizes="32px"
                                  />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div className="flex items-center justify-between gap-1">
                                    <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 truncate">
                                      {app.name}
                                    </span>
                                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-white/[0.06] text-zinc-600 dark:text-zinc-400 shrink-0">
                                      {app.badge}
                                    </span>
                                  </div>
                                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 line-clamp-1">
                                    {app.desc}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Mega Menu Footer Bar */}
                      <div className="mt-4 pt-3 border-t border-zinc-200/80 dark:border-white/[0.08] flex items-center justify-between px-1">
                        <Link
                          href="/products"
                          onClick={() => setAppsDropdownOpen(false)}
                          className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1.5"
                        >
                          <span>Explore All 14 Products &amp; Technical Specs</span>
                          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </Link>
                        <div className="flex items-center gap-4">
                          <Link
                            href="/compare"
                            onClick={() => setAppsDropdownOpen(false)}
                            className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                          >
                            <Scale className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>vs. Paid Suites (Save $1,115+)</span>
                          </Link>
                          <a
                            href={siteConfig.appleDeveloperUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setAppsDropdownOpen(false)}
                            className="text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white inline-flex items-center gap-1"
                          >
                            <span>Apple Developer Store</span>
                            <ExternalLink className="w-3 h-3" aria-hidden="true" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/compare"
                className={cn(
                  "px-3 py-1.5 rounded-xl text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
                  pathname === "/compare" || pathname?.startsWith("/compare/")
                    ? "text-zinc-950 dark:text-white bg-zinc-100 dark:bg-white/[0.09] font-semibold"
                    : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100/80 dark:hover:bg-white/[0.05]"
                )}
              >
                Benchmarks
              </Link>

              <Link
                href="/enterprise"
                className={cn(
                  "px-3 py-1.5 rounded-xl text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
                  pathname === "/enterprise"
                    ? "text-zinc-950 dark:text-white bg-zinc-100 dark:bg-white/[0.09] font-semibold"
                    : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100/80 dark:hover:bg-white/[0.05]"
                )}
              >
                Enterprise
              </Link>

              <Link
                href="/about"
                className={cn(
                  "px-3 py-1.5 rounded-xl text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
                  pathname === "/about"
                    ? "text-zinc-950 dark:text-white bg-zinc-100 dark:bg-white/[0.09] font-semibold"
                    : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100/80 dark:hover:bg-white/[0.05]"
                )}
              >
                About
              </Link>

              <Link
                href="/contact"
                className={cn(
                  "px-3 py-1.5 rounded-xl text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
                  pathname === "/contact"
                    ? "text-zinc-950 dark:text-white bg-zinc-100 dark:bg-white/[0.09] font-semibold"
                    : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100/80 dark:hover:bg-white/[0.05]"
                )}
              >
                Contact
              </Link>
            </div>

            {/* Right Action Bar: ⌘K Launcher + Live Studio Quick Pills + Theme Toggle + Primary CTA */}
            <div className="hidden sm:flex items-center gap-2">
              {/* ⌘K Command Palette Trigger */}
              <button
                type="button"
                onClick={() => setCommandOpen(true)}
                className="btn-tactile inline-flex items-center gap-2 px-2.5 py-1.5 rounded-xl text-xs font-medium bg-zinc-100/90 hover:bg-zinc-200/70 dark:bg-white/[0.05] dark:hover:bg-white/[0.09] text-zinc-600 dark:text-zinc-300 border border-zinc-200/80 dark:border-white/[0.09] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                aria-label="Open quick command launcher (Command + K)"
                title="Search apps, .DMG installers & benchmarks (⌘K)"
              >
                <Search className="w-3.5 h-3.5 text-zinc-400" aria-hidden="true" />
                <span className="hidden xl:inline text-zinc-500 dark:text-zinc-400">
                  Search...
                </span>
                <kbd className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 border border-zinc-200/80 dark:border-white/10">
                  ⌘K
                </kbd>
              </button>

              {/* Quick Studio Pills */}
              <a
                href={siteConfig.biodata.webUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile hidden md:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold bg-amber-500/10 hover:bg-amber-500/18 text-amber-800 dark:text-amber-300 border border-amber-500/25 transition-colors"
                title="Launch Marriage Biodata Maker Studio (biodata.cogify.me)"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" aria-hidden="true" />
                <span>Biodata</span>
                <ExternalLink className="w-3 h-3 opacity-75" aria-hidden="true" />
              </a>

              <a
                href={siteConfig.ssb.webUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile hidden md:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold bg-emerald-500/10 hover:bg-emerald-500/18 text-emerald-800 dark:text-emerald-300 border border-emerald-500/25 transition-colors"
                title="Launch SSB Stage-2 Practice Studio (ssb.cogify.me)"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                <span>SSB</span>
                <ExternalLink className="w-3 h-3 opacity-75" aria-hidden="true" />
              </a>

              <ThemeToggle className="w-8 h-8 rounded-xl" />

              <Link
                href="/products"
                className="btn-tactile px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-zinc-950 shadow-xs transition-colors flex items-center gap-1.5 group"
              >
                <span>All 14 Apps</span>
                <ArrowRight
                  className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                  aria-hidden="true"
                />
              </Link>
            </div>

            {/* Mobile Controls: Search + ThemeToggle + Menu */}
            <div className="flex lg:hidden items-center gap-1.5">
              <button
                type="button"
                onClick={() => setCommandOpen(true)}
                className="p-2 rounded-xl text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/[0.06] border border-zinc-200/70 dark:border-white/[0.08]"
                aria-label="Search apps and benchmarks"
              >
                <Search className="w-4 h-4" aria-hidden="true" />
              </button>
              <ThemeToggle className="w-8 h-8 rounded-xl sm:hidden" />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/[0.06] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation-menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <Menu className="w-5 h-5" aria-hidden="true" />
                )}
              </button>
            </div>
          </nav>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div
              id="mobile-navigation-menu"
              className="lg:hidden mt-2 p-4 rounded-2xl bg-white/98 dark:bg-[#0b0e16]/98 border border-zinc-200 dark:border-white/10 shadow-2xl backdrop-blur-2xl flex flex-col space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-200 max-h-[82vh] overflow-y-auto overscroll-contain"
            >
              <div className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                14 Free Apps &amp; Real-Time Web Studios
              </div>
              {allAppLinks.map((app) => (
                <Link
                  key={app.href}
                  href={app.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-xl text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/[0.05] hover:text-zinc-950 dark:hover:text-white flex items-center justify-between"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="relative w-6 h-6 rounded-md overflow-hidden border border-zinc-200 dark:border-white/10 shrink-0">
                      <Image
                        src={app.icon}
                        alt={app.name}
                        fill
                        className="object-cover"
                        sizes="24px"
                      />
                    </div>
                    <span className="font-medium truncate">{app.name}</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 dark:bg-white/[0.06] dark:text-zinc-300 shrink-0 ml-2">
                    {app.badge}
                  </span>
                </Link>
              ))}

              <div className="pt-2 border-t border-zinc-200 dark:border-white/10" />

              <Link
                href="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:bg-zinc-100 dark:hover:bg-white/[0.05] flex items-center justify-between"
              >
                <span>Explore All 14 Apps &amp; Studios</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/compare"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-sm font-semibold text-emerald-700 dark:text-emerald-400 hover:bg-zinc-100 dark:hover:bg-white/[0.05] flex items-center justify-between"
              >
                <span>macOS Comparisons &amp; Benchmarks</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/enterprise"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/[0.05]"
              >
                Enterprise Solutions
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/[0.05]"
              >
                About Cogify
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/[0.05]"
              >
                Contact &amp; Inquiries
              </Link>

              <div className="pt-2 border-t border-zinc-200 dark:border-white/10 flex flex-col gap-2">
                <a
                  href={siteConfig.biodata.webUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl text-center text-xs font-bold bg-amber-500 text-zinc-950 flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Launch Biodata Maker (biodata.cogify.me)</span>
                </a>
                <a
                  href={siteConfig.ssb.webUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl text-center text-xs font-bold bg-emerald-500 text-zinc-950 flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Launch SSB Studio (ssb.cogify.me)</span>
                </a>
                <a
                  href={siteConfig.appleDeveloperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl text-center text-xs font-semibold bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>View Developer Profile on App Store</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Global ⌘K Studio Command Launcher */}
      <CommandPalette open={commandOpen} onClose={() => setCommandOpen(false)} />
    </>
  );
};
