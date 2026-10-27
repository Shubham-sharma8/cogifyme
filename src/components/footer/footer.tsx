"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { ShieldCheck, Cpu, ExternalLink } from "lucide-react";
import { BrandLogo } from "@/components/brand/brand-logo";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export const Footer = () => {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-400 text-xs transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-8 h-8 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                <BrandLogo width={32} height={32} />
              </div>
              <span className="font-bold text-base tracking-wider text-zinc-900 dark:text-white">
                {siteConfig.name}
              </span>
            </Link>

            <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed max-w-sm">
              We engineer native, zero-telemetry software and Safari extensions for macOS, iOS, and iPadOS. Built for speed, craft, and complete data sovereignty.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-[11px] font-mono text-zinc-600 dark:text-zinc-400">
              <span className="flex items-center gap-1 text-emerald-700 dark:text-emerald-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                Zero Cloud Telemetry
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-indigo-700 dark:text-indigo-400 font-medium">
                <Cpu className="w-3.5 h-3.5" />
                Swift &amp; C++20 Native
              </span>
            </div>
          </div>

          {/* Links Column: Live Apps */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-semibold text-zinc-900 dark:text-white text-xs uppercase tracking-wider">
              Live Apps &amp; Studios
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/emdoc" className="hover:text-zinc-950 dark:hover:text-white transition-colors flex items-center justify-between gap-2">
                  <span>EmDoc Workstation</span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300">
                    macOS DMG
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/lumenview" className="hover:text-zinc-950 dark:hover:text-white transition-colors flex items-center justify-between gap-2">
                  <span>LumenView Display</span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300">
                    macOS DMG
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/metricove" className="hover:text-zinc-950 dark:hover:text-white transition-colors flex items-center justify-between gap-2">
                  <span>Metricove Telemetry</span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
                    macOS DMG
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/netguard" className="hover:text-zinc-950 dark:hover:text-white transition-colors flex items-center justify-between gap-2">
                  <span>NetGuard Firewall</span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-cyan-50 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-300">
                    macOS DMG
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/klipora" className="hover:text-zinc-950 dark:hover:text-white transition-colors flex items-center justify-between gap-2">
                  <span>Klipora Clipboard</span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-50 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300">
                    macOS DMG
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/show-free-space" className="hover:text-zinc-950 dark:hover:text-white transition-colors flex items-center justify-between gap-2">
                  <span>Show free space</span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-purple-50 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300">
                    macOS DMG
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/biodata" className="hover:text-zinc-950 dark:hover:text-white transition-colors flex items-center justify-between gap-2">
                  <span>Biodata Maker Studio</span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-50 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300">
                    Web v2.4
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/ssb" className="hover:text-zinc-950 dark:hover:text-white transition-colors flex items-center justify-between gap-2">
                  <span>SSB Practice Studio</span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
                    Web v2.0
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/ad-blocker" className="hover:text-zinc-950 dark:hover:text-white transition-colors flex items-center justify-between gap-2">
                  <span>Ad Blocker - For Safari</span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
                    Safari v2.0
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/readereasy" className="hover:text-zinc-950 dark:hover:text-white transition-colors flex items-center justify-between gap-2">
                  <span>ReaderEasy</span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-50 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300">
                    Safari v1.1
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/webclear" className="hover:text-zinc-950 dark:hover:text-white transition-colors flex items-center justify-between gap-2">
                  <span>WebClear</span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-cyan-50 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-300">
                    Safari v1.0
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/weblenses" className="hover:text-zinc-950 dark:hover:text-white transition-colors flex items-center justify-between gap-2">
                  <span>WebLenses</span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300">
                    Safari v1.0
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/element-hider" className="hover:text-zinc-950 dark:hover:text-white transition-colors flex items-center justify-between gap-2">
                  <span>Element Hider</span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-purple-50 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300">
                    Safari v1.0
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/invert" className="hover:text-zinc-950 dark:hover:text-white transition-colors flex items-center justify-between gap-2">
                  <span>Colour Invert</span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300">
                    Safari v1.0
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column: Company */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-semibold text-zinc-900 dark:text-white text-xs uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="hover:text-zinc-950 dark:hover:text-white transition-colors font-semibold text-indigo-600 dark:text-indigo-400">
                  All Products
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.biodata.webUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-950 dark:hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>biodata.cogify.me</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.ssb.webUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-950 dark:hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>ssb.cogify.me</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <Link href="/enterprise" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
                  Enterprise License Replacement
                </Link>
              </li>
              <li>
                <Link href="/suggestions" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
                  Suggestions &amp; Bug Reports
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
                  About Cogify
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column: Legal & Official Store */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="font-semibold text-zinc-900 dark:text-white text-xs uppercase tracking-wider">
              Legal &amp; Store
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
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
              <li>
                <span className="text-zinc-600 dark:text-zinc-400">
                  Domain: <code className="text-zinc-700 dark:text-zinc-300 font-mono">cogify.me</code>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & theme row */}
        <div className="mt-12 pt-8 border-t border-zinc-200/80 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-600 dark:text-zinc-400">
          <div>
            © {currentYear} COGIFY Technologies. All rights reserved. EmDoc, LumenView, Metricove, NetGuard, Klipora, Show free space, Biodata Maker (biodata.cogify.me), SSB Practice Studio (ssb.cogify.me), Ad Blocker, ReaderEasy, WebClear, WebLenses, Element Hider &amp; Colour Invert are products of COGIFY.
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle variant="pill" />
            <span className="font-mono text-[10px] text-zinc-600 dark:text-zinc-400 hidden sm:inline">
              Designed with precision • macOS, iOS, Safari &amp; Web
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
