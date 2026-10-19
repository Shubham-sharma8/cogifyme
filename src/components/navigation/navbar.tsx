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
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { BrandLogo } from "@/components/brand/brand-logo";
import { cn } from "@/lib/utils";

const appLinks = [
  {
    name: "Biodata Maker Studio",
    href: "/biodata",
    badge: "biodata.cogify.me",
    icon: "/brand/Biodata/icon.png",
    desc: "242 cultural templates, 9 languages & 300-DPI PDF / Word export",
  },
  {
    name: "EmDoc Workstation",
    href: "/products/emdoc",
    badge: "macOS",
    icon: "/brand/emdoc-icon.png",
    desc: "5.0 MB air-gapped PDF editor, merger & compressor",
  },
  {
    name: "Ad Blocker - For Safari",
    href: "/ad-blocker",
    badge: "iOS & Mac",
    icon: "/brand/Ad-Blocker/icon.png",
    desc: "75,000+ native content blocking rules & privacy shield",
  },
  {
    name: "ReaderEasy",
    href: "/readereasy",
    badge: "iOS & Mac",
    icon: "/brand/ReaderEasy/icon.jpg",
    desc: "Distraction-free article reader & Bionic reading mode",
  },
  {
    name: "WebClear",
    href: "/webclear",
    badge: "iOS & Mac",
    icon: "/brand/WebClear/icon.jpg",
    desc: "One-tap per-site cookie, cache, LocalStorage & URL cleaner",
  },
  {
    name: "WebLenses",
    href: "/weblenses",
    badge: "iOS & Mac",
    icon: "/brand/WebLenses/icon.png",
    desc: "Core Web Vitals, SEO, accessibility & security auditor",
  },
  {
    name: "Element Hider",
    href: "/element-hider",
    badge: "iOS & Mac",
    icon: "/brand/Element-Hider/icon.png",
    desc: "Tap any distracting webpage element to hide it forever",
  },
  {
    name: "Colour Invert",
    href: "/invert",
    badge: "iOS & Mac",
    icon: "/brand/Invert/icon.png",
    desc: "Smart dark mode & colour inversion with Media Shield",
  },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [appsDropdownOpen, setAppsDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-4 px-4 sm:px-6 lg:px-8",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="max-w-7xl mx-auto">
        <nav
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 sm:px-6 py-2.5 transition-all duration-300",
            scrolled
              ? "bg-white/90 dark:bg-zinc-950/85 border border-zinc-200/90 dark:border-white/10 shadow-lg shadow-zinc-900/5 dark:shadow-2xl dark:shadow-black/60 backdrop-blur-xl"
              : "bg-white/60 dark:bg-zinc-950/30 border border-zinc-200/60 dark:border-white/5 backdrop-blur-md"
          )}
          aria-label="Main Navigation"
        >
          {/* COGIFY Brand Wordmark */}
          <Link
            href="/"
            className="flex items-center space-x-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg"
          >
            <div className="relative w-8 h-8 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
              <BrandLogo width={32} height={32} priority />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-wider text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-white transition-colors">
                {siteConfig.name}
              </span>
              <span className="text-[9px] font-mono tracking-widest text-zinc-500 dark:text-zinc-400 uppercase">
                Technologies
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1.5">
            {/* Apps Mega Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAppsDropdownOpen(true)}
              onMouseLeave={() => setAppsDropdownOpen(false)}
            >
              <Link
                href="/products"
                className={cn(
                  "px-3.5 py-2 rounded-xl text-xs font-medium transition-colors inline-flex items-center gap-1.5",
                  pathname === "/products" ||
                    pathname.startsWith("/products/") ||
                    pathname.startsWith("/ad-blocker") ||
                    pathname.startsWith("/readereasy") ||
                    pathname.startsWith("/webclear") ||
                    pathname.startsWith("/weblenses") ||
                    pathname.startsWith("/element-hider") ||
                    pathname.startsWith("/invert") ||
                    pathname.startsWith("/biodata")
                    ? "text-indigo-600 dark:text-white bg-indigo-50 dark:bg-white/10 font-semibold"
                    : "text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5"
                )}
              >
                <span>Apps &amp; Studios</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-semibold">
                  8 Free
                </span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </Link>

              {appsDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-[540px] z-50">
                  <div className="rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200/90 dark:border-white/10 shadow-2xl p-4 grid grid-cols-2 gap-2">
                    {appLinks.map((app) => (
                      <Link
                        key={app.href}
                        href={app.href}
                        onClick={() => setAppsDropdownOpen(false)}
                        className="p-2.5 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 border border-transparent hover:border-zinc-200/70 dark:hover:border-white/10 transition-all flex items-start gap-3 group"
                      >
                        <div className="relative w-9 h-9 rounded-lg overflow-hidden border border-zinc-200 dark:border-white/10 shrink-0 bg-zinc-100 dark:bg-zinc-800">
                          <Image
                            src={app.icon}
                            alt={app.name}
                            fill
                            className="object-cover"
                            sizes="36px"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-1">
                            <span className="text-xs font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 truncate">
                              {app.name}
                            </span>
                            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 shrink-0">
                              {app.badge}
                            </span>
                          </div>
                          <p className="text-[11px] text-zinc-500 dark:text-zinc-400 line-clamp-1 mt-0.5">
                            {app.desc}
                          </p>
                        </div>
                      </Link>
                    ))}

                    <div className="col-span-2 mt-1 pt-2.5 border-t border-zinc-200/80 dark:border-white/10 flex items-center justify-between px-2">
                      <Link
                        href="/products"
                        onClick={() => setAppsDropdownOpen(false)}
                        className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1"
                      >
                        <span>View All 8 Live Apps &amp; Studios</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                        macOS • iOS • iPadOS • Safari • Web
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/enterprise"
              className={cn(
                "px-3.5 py-2 rounded-xl text-xs font-medium transition-colors",
                pathname === "/enterprise"
                  ? "text-indigo-600 dark:text-white bg-indigo-50 dark:bg-white/10 font-semibold"
                  : "text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5"
              )}
            >
              Enterprise
            </Link>

            <Link
              href="/about"
              className={cn(
                "px-3.5 py-2 rounded-xl text-xs font-medium transition-colors",
                pathname === "/about"
                  ? "text-indigo-600 dark:text-white bg-indigo-50 dark:bg-white/10 font-semibold"
                  : "text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5"
              )}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={cn(
                "px-3.5 py-2 rounded-xl text-xs font-medium transition-colors",
                pathname === "/contact"
                  ? "text-indigo-600 dark:text-white bg-indigo-50 dark:bg-white/10 font-semibold"
                  : "text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5"
              )}
            >
              Contact
            </Link>
          </div>

          {/* Right Actions: Biodata Maker Web Studio + Apple App Store + All Apps */}
          <div className="hidden sm:flex items-center space-x-2">
            <a
              href={siteConfig.biodata.webUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-amber-500/15 hover:bg-amber-500/25 text-amber-800 dark:text-amber-300 border border-amber-500/30 transition-all duration-200 flex items-center gap-1.5 shadow-2xs"
            >
              <ExternalLink className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Biodata Maker</span>
            </a>

            <a
              href={siteConfig.appleDeveloperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-zinc-100 hover:bg-zinc-200/80 dark:bg-white/10 dark:hover:bg-white/15 text-zinc-800 dark:text-white border border-zinc-200/90 dark:border-white/10 transition-all duration-200 flex items-center gap-1.5 shadow-2xs"
            >
              <ExternalLink className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>App Store</span>
            </a>

            <Link
              href="/products"
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/20 transition-all duration-200 flex items-center gap-1 group cursor-pointer"
            >
              <span>Explore All Apps</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-4 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 shadow-2xl backdrop-blur-2xl flex flex-col space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-200 max-h-[82vh] overflow-y-auto">
            <div className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-zinc-500">
              8 Free Apps &amp; Real-Time Web Studios Live
            </div>
            {appLinks.map((app) => (
              <Link
                key={app.href}
                href={app.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/5 hover:text-zinc-950 dark:hover:text-white flex items-center justify-between"
              >
                <div className="flex items-center gap-2.5">
                  <div className="relative w-6 h-6 rounded-md overflow-hidden border border-zinc-200 dark:border-white/10 shrink-0">
                    <Image src={app.icon} alt={app.name} fill className="object-cover" sizes="24px" />
                  </div>
                  <span className="font-medium">{app.name}</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                  {app.badge}
                </span>
              </Link>
            ))}

            <div className="pt-2 border-t border-zinc-200 dark:border-white/10" />

            <Link
              href="/products"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:bg-zinc-100 dark:hover:bg-white/5 flex items-center justify-between"
            >
              <span>Explore All Apps &amp; Studios</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/enterprise"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/5"
            >
              Enterprise Solutions
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/5"
            >
              About Cogify
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/5"
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
                href={siteConfig.appleDeveloperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl text-center text-xs font-semibold bg-indigo-600 text-white flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>View Developer Profile on App Store</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
