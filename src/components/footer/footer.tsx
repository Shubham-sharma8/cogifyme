"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { ShieldCheck, Cpu, ExternalLink, Globe } from "lucide-react";
import { BrandLogo } from "@/components/brand/brand-logo";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export const Footer = () => {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="bg-[#f4f5f8] dark:bg-[#05070b] border-t border-zinc-200/90 dark:border-white/[0.08] text-zinc-600 dark:text-zinc-400 text-xs transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand & Flagship Web Studios (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <Link href="/" className="flex items-center space-x-2.5 group">
              <div className="relative w-8 h-8 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                <BrandLogo width={32} height={32} />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base tracking-tight text-zinc-950 dark:text-white">
                  {siteConfig.name}
                </span>
                <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-500">
                  Technologies
                </span>
              </div>
            </Link>

            <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed">
              We engineer native, zero-telemetry software and Safari extensions for macOS, iOS, and iPadOS alongside 100% client-side real-time web studios.
            </p>

            <div className="space-y-1.5 pt-1">
              <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold">
                Live Web Studios (2)
              </div>
              <a
                href={siteConfig.biodata.webUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-xl bg-white dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/[0.07] hover:border-amber-500/40 transition-colors"
              >
                <span className="font-semibold text-zinc-900 dark:text-zinc-100 inline-flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-amber-500" />
                  Biodata Maker Studio
                </span>
                <span className="text-[10px] font-mono text-amber-600 dark:text-amber-400">
                  biodata.cogify.me ↗
                </span>
              </a>
              <a
                href={siteConfig.ssb.webUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-xl bg-white dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/[0.07] hover:border-emerald-500/40 transition-colors"
              >
                <span className="font-semibold text-zinc-900 dark:text-zinc-100 inline-flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-emerald-500" />
                  SSB Practice Studio
                </span>
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400">
                  ssb.cogify.me ↗
                </span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 pt-1 text-[11px] font-mono text-zinc-500">
              <span className="flex items-center gap-1 text-emerald-700 dark:text-emerald-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />0 Bytes Telemetry
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-indigo-700 dark:text-indigo-400 font-medium">
                <Cpu className="w-3.5 h-3.5" />
                Team #9TKKPN6F59
              </span>
            </div>
          </div>

          {/* Column 2: macOS Workstations (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-semibold text-zinc-950 dark:text-white text-xs uppercase tracking-wider">
              macOS Apps (.DMG)
            </h3>
            <ul className="space-y-2 tabular-nums">
              <li>
                <Link
                  href="/products/emdoc"
                  className="hover:text-zinc-950 dark:hover:text-white transition-colors flex items-center justify-between gap-1"
                >
                  <span>EmDoc PDF</span>
                  <span className="text-[10px] font-mono text-zinc-500">5.0 MB</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/lumenview"
                  className="hover:text-zinc-950 dark:hover:text-white transition-colors flex items-center justify-between gap-1"
                >
                  <span>LumenView</span>
                  <span className="text-[10px] font-mono text-zinc-500">1.6 MB</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/metricove"
                  className="hover:text-zinc-950 dark:hover:text-white transition-colors flex items-center justify-between gap-1"
                >
                  <span>Metricove</span>
                  <span className="text-[10px] font-mono text-zinc-500">1.5 MB</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/netguard"
                  className="hover:text-zinc-950 dark:hover:text-white transition-colors flex items-center justify-between gap-1"
                >
                  <span>NetGuard</span>
                  <span className="text-[10px] font-mono text-zinc-500">1.5 MB</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/klipora"
                  className="hover:text-zinc-950 dark:hover:text-white transition-colors flex items-center justify-between gap-1"
                >
                  <span>Klipora</span>
                  <span className="text-[10px] font-mono text-zinc-500">1.7 MB</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/show-free-space"
                  className="hover:text-zinc-950 dark:hover:text-white transition-colors flex items-center justify-between gap-1"
                >
                  <span>Show free space</span>
                  <span className="text-[10px] font-mono text-zinc-500">1.4 MB</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/biodata"
                  className="hover:text-zinc-950 dark:hover:text-white transition-colors flex items-center justify-between gap-1"
                >
                  <span>Biodata Overview</span>
                  <span className="text-[10px] font-mono text-amber-600 dark:text-amber-400">
                    v2.4
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/ssb"
                  className="hover:text-zinc-950 dark:hover:text-white transition-colors flex items-center justify-between gap-1"
                >
                  <span>SSB Overview</span>
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400">
                    v2.0
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Safari Extensions (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-semibold text-zinc-950 dark:text-white text-xs uppercase tracking-wider">
              Safari Extensions
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/ad-blocker"
                  className="hover:text-zinc-950 dark:hover:text-white transition-colors flex items-center justify-between gap-1"
                >
                  <span>Ad Blocker</span>
                  <span className="text-[10px] font-mono text-zinc-500">v2.0</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/readereasy"
                  className="hover:text-zinc-950 dark:hover:text-white transition-colors flex items-center justify-between gap-1"
                >
                  <span>ReaderEasy</span>
                  <span className="text-[10px] font-mono text-zinc-500">v1.1</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/webclear"
                  className="hover:text-zinc-950 dark:hover:text-white transition-colors flex items-center justify-between gap-1"
                >
                  <span>WebClear</span>
                  <span className="text-[10px] font-mono text-zinc-500">v1.0</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/weblenses"
                  className="hover:text-zinc-950 dark:hover:text-white transition-colors flex items-center justify-between gap-1"
                >
                  <span>WebLenses</span>
                  <span className="text-[10px] font-mono text-zinc-500">v1.0</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/element-hider"
                  className="hover:text-zinc-950 dark:hover:text-white transition-colors flex items-center justify-between gap-1"
                >
                  <span>Element Hider</span>
                  <span className="text-[10px] font-mono text-zinc-500">v1.0</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/invert"
                  className="hover:text-zinc-950 dark:hover:text-white transition-colors flex items-center justify-between gap-1"
                >
                  <span>Colour Invert</span>
                  <span className="text-[10px] font-mono text-zinc-500">v1.0</span>
                </Link>
              </li>
              <li className="pt-1">
                <Link
                  href="/products"
                  className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  View All 14 Products →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Benchmarks & Comparisons (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-semibold text-zinc-950 dark:text-white text-xs uppercase tracking-wider">
              macOS Benchmarks
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/compare"
                  className="hover:text-zinc-950 dark:hover:text-white transition-colors font-semibold text-emerald-700 dark:text-emerald-400"
                >
                  All 7 Comparison Guides ($1,115+ Saved)
                </Link>
              </li>
              <li>
                <Link
                  href="/compare/emdoc-vs-adobe-acrobat-pdf-expert"
                  className="hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  EmDoc vs. Adobe Acrobat &amp; PDF Expert
                </Link>
              </li>
              <li>
                <Link
                  href="/compare/lumenview-vs-betterdisplay-lunar"
                  className="hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  LumenView vs. BetterDisplay &amp; Lunar
                </Link>
              </li>
              <li>
                <Link
                  href="/compare/metricove-vs-istat-menus-stats"
                  className="hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  Metricove vs. iStat Menus &amp; Stats
                </Link>
              </li>
              <li>
                <Link
                  href="/compare/netguard-vs-little-snitch-lulu"
                  className="hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  NetGuard vs. Little Snitch &amp; LuLu
                </Link>
              </li>
              <li>
                <Link
                  href="/compare/klipora-vs-paste-maccy-raycast"
                  className="hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  Klipora vs. Paste &amp; Maccy
                </Link>
              </li>
              <li>
                <Link
                  href="/compare/show-free-space-vs-daisydisk-cleanmymac"
                  className="hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  Show Free Space vs. DaisyDisk
                </Link>
              </li>
              <li>
                <Link
                  href="/compare/safari-extensions-vs-1blocker-dark-reader"
                  className="hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  Safari Suite vs. 1Blocker &amp; Noir
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Company, Legal & Store (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-semibold text-zinc-950 dark:text-white text-xs uppercase tracking-wider">
              Company &amp; Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/enterprise"
                  className="hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  Enterprise Licensing
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  About Cogify
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/suggestions"
                  className="hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  Suggestions &amp; Bugs
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.emdoc.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-950 dark:hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Mac App Store</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.adBlocker.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-950 dark:hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>iOS App Store</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.appleDeveloperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-950 dark:hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Apple Developer Page</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Cross-Subdomain Direct Studio Deep Links for Search Discovery */}
        <div className="mt-12 pt-8 border-t border-zinc-200/80 dark:border-white/[0.06]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-zinc-950 dark:text-white text-[11px] uppercase tracking-wider mb-2.5">
                Marriage Biodata Maker Studios (biodata.cogify.me)
              </h4>
              <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-[11px]">
                <a href="https://biodata.cogify.me/hindu-marriage-biodata" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Hindu Biodata</a>
                <span>•</span>
                <a href="https://biodata.cogify.me/muslim-nikah-biodata" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Muslim Nikah Biodata</a>
                <span>•</span>
                <a href="https://biodata.cogify.me/sikh-marriage-biodata" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Sikh Biodata</a>
                <span>•</span>
                <a href="https://biodata.cogify.me/christian-marriage-biodata" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Christian Biodata</a>
                <span>•</span>
                <a href="https://biodata.cogify.me/jain-marriage-biodata" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Jain Biodata</a>
                <span>•</span>
                <a href="https://biodata.cogify.me/marathi-marriage-biodata" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Marathi Biodata</a>
                <span>•</span>
                <a href="https://biodata.cogify.me/gujarati-marriage-biodata" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Gujarati Biodata</a>
                <span>•</span>
                <a href="https://biodata.cogify.me/hindi-shadi-biodata" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Hindi Biodata</a>
                <span>•</span>
                <a href="https://biodata.cogify.me/tamil-marriage-biodata" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Tamil Biodata</a>
                <span>•</span>
                <a href="https://biodata.cogify.me/telugu-marriage-biodata" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Telugu Biodata</a>
                <span>•</span>
                <a href="https://biodata.cogify.me/bengali-marriage-biodata" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Bengali Biodata</a>
                <span>•</span>
                <a href="https://biodata.cogify.me/nri-executive-biodata" className="hover:text-zinc-950 dark:hover:text-white transition-colors">NRI Biodata</a>
                <span>•</span>
                <a href="https://biodata.cogify.me/biodata-for-marriage-pdf" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Biodata PDF</a>
                <span>•</span>
                <a href="https://biodata.cogify.me/biodata-word-format" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Biodata Word (.docx)</a>
                <span>•</span>
                <a href="https://biodata.cogify.me/whatsapp-biodata-maker" className="hover:text-zinc-950 dark:hover:text-white transition-colors">WhatsApp Biodata</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-zinc-950 dark:text-white text-[11px] uppercase tracking-wider mb-2.5">
                SSB Stage-2 Psychology &amp; GTO Simulators (ssb.cogify.me)
              </h4>
              <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-[11px]">
                <a href="https://ssb.cogify.me/full-test" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Full 98-Min SSB Battery</a>
                <span>•</span>
                <a href="https://ssb.cogify.me/tat" className="hover:text-zinc-950 dark:hover:text-white transition-colors">TAT Simulator (30s/4m)</a>
                <span>•</span>
                <a href="https://ssb.cogify.me/wat" className="hover:text-zinc-950 dark:hover:text-white transition-colors">WAT Simulator (60 Words)</a>
                <span>•</span>
                <a href="https://ssb.cogify.me/srt" className="hover:text-zinc-950 dark:hover:text-white transition-colors">SRT Simulator (60 Situations)</a>
                <span>•</span>
                <a href="https://ssb.cogify.me/sdt" className="hover:text-zinc-950 dark:hover:text-white transition-colors">SDT Self-Description</a>
                <span>•</span>
                <a href="https://ssb.cogify.me/gto" className="hover:text-zinc-950 dark:hover:text-white transition-colors">GTO 9-Task Hub &amp; Lecturette</a>
                <span>•</span>
                <a href="https://ssb.cogify.me/interview" className="hover:text-zinc-950 dark:hover:text-white transition-colors">PIQ &amp; IO Interview</a>
                <span>•</span>
                <a href="https://ssb.cogify.me/library" className="hover:text-zinc-950 dark:hover:text-white transition-colors">120 TAT Pictures</a>
                <span>•</span>
                <a href="https://ssb.cogify.me/about" className="hover:text-zinc-950 dark:hover:text-white transition-colors">5-Day SSB Process &amp; 15 OLQs</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & theme row */}
        <div className="mt-8 pt-8 border-t border-zinc-200/80 dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-600 dark:text-zinc-400">
          <div>
            © {currentYear} COGIFY Technologies. All rights reserved. EmDoc, LumenView, Metricove, NetGuard, Klipora, Show free space, Biodata Maker (biodata.cogify.me), SSB Practice Studio (ssb.cogify.me), Ad Blocker, ReaderEasy, WebClear, WebLenses, Element Hider &amp; Colour Invert are products of COGIFY.
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <ThemeToggle variant="pill" />
            <span className="font-mono text-[10px] text-zinc-500 dark:text-zinc-400 hidden sm:inline">
              Designed with precision • macOS, iOS, Safari &amp; Web
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
