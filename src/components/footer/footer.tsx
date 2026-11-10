"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/brand/brand-logo";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export const Footer = () => {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="border-t border-black/[0.07] dark:border-white/[0.08] bg-[#FAFAFA] dark:bg-[#0B0B0D] text-[#52525B] dark:text-[#A1A1AA] text-[13px] transition-colors duration-200">
      <div className="max-w-[1040px] mx-auto px-6 py-14">
        {/* Top Multi-Column Supaste-Style Directory */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 pb-10 border-b border-black/[0.07] dark:border-white/[0.08]">
          {/* Col 1: Brand Identity */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1 space-y-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-bold text-[15px] text-[#09090B] dark:text-white hover:opacity-80 transition-opacity"
            >
              <BrandLogo width={22} height={22} />
              <span>cogify</span>
            </Link>
            <p className="text-[12.5px] leading-relaxed text-[#52525B] dark:text-[#A1A1AA]">
              15 free native macOS workstations, Safari extensions &amp; real-time web studios. Zero telemetry.
            </p>
            <div className="pt-1">
              <ThemeToggle variant="pill" />
            </div>
          </div>

          {/* Col 2: Mac Apps ("More products" for macOS) */}
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#09090B] dark:text-white mb-3">
              Mac Apps
            </div>
            <ul className="space-y-2">
              <li>
                <Link href="/helium" className="hover:text-[#09090B] dark:hover:text-white transition-colors font-medium text-[#09090B] dark:text-white">
                  Helium Drive Pool
                </Link>
              </li>
              <li>
                <Link href="/findy" className="hover:text-[#09090B] dark:hover:text-white transition-colors font-medium text-[#09090B] dark:text-white">
                  Findy File Search
                </Link>
              </li>
              <li>
                <Link href="/taskyfy" className="hover:text-[#09090B] dark:hover:text-white transition-colors font-medium text-[#09090B] dark:text-white">
                  Taskyfy Telemetry
                </Link>
              </li>
              <li>
                <Link href="/wheelify" className="hover:text-[#09090B] dark:hover:text-white transition-colors font-medium text-[#09090B] dark:text-white">
                  Wheelify Radial Wheel
                </Link>
              </li>
              <li>
                <Link href="/screenify" className="hover:text-[#09090B] dark:hover:text-white transition-colors font-medium text-[#09090B] dark:text-white">
                  Screenify Screen Studio
                </Link>
              </li>
              <li>
                <Link href="/emdoc" className="hover:text-[#09090B] dark:hover:text-white transition-colors">
                  EmDoc PDF Suite
                </Link>
              </li>
              <li>
                <Link href="/klipora" className="hover:text-[#09090B] dark:hover:text-white transition-colors">
                  Klipora Clipboard
                </Link>
              </li>
              <li>
                <Link href="/lumenview" className="hover:text-[#09090B] dark:hover:text-white transition-colors">
                  LumenView Display
                </Link>
              </li>
              <li>
                <Link href="/metricove" className="hover:text-[#09090B] dark:hover:text-white transition-colors">
                  Metricove Stats
                </Link>
              </li>
              <li>
                <Link href="/netguard" className="hover:text-[#09090B] dark:hover:text-white transition-colors">
                  NetGuard Firewall
                </Link>
              </li>
              <li>
                <Link href="/show-free-space" className="hover:text-[#09090B] dark:hover:text-white transition-colors">
                  Show Free Space
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Safari & iOS */}
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#09090B] dark:text-white mb-3">
              Safari &amp; iOS
            </div>
            <ul className="space-y-2">
              <li>
                <Link href="/ad-blocker" className="hover:text-[#09090B] dark:hover:text-white transition-colors">
                  Ad Blocker
                </Link>
              </li>
              <li>
                <Link href="/readereasy" className="hover:text-[#09090B] dark:hover:text-white transition-colors">
                  ReaderEasy
                </Link>
              </li>
              <li>
                <Link href="/webclear" className="hover:text-[#09090B] dark:hover:text-white transition-colors">
                  WebClear
                </Link>
              </li>
              <li>
                <Link href="/weblenses" className="hover:text-[#09090B] dark:hover:text-white transition-colors">
                  WebLenses
                </Link>
              </li>
              <li>
                <Link href="/element-hider" className="hover:text-[#09090B] dark:hover:text-white transition-colors">
                  Element Hider
                </Link>
              </li>
              <li>
                <Link href="/invert" className="hover:text-[#09090B] dark:hover:text-white transition-colors">
                  Colour Invert
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Web Studios & Benchmarks */}
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#09090B] dark:text-white mb-3">
              Web Studios &amp; Guides
            </div>
            <ul className="space-y-2">
              <li>
                <Link href="/biodata" className="hover:text-[#09090B] dark:hover:text-white transition-colors">
                  Biodata Maker Studio
                </Link>
              </li>
              <li>
                <Link href="/ssb" className="hover:text-[#09090B] dark:hover:text-white transition-colors">
                  SSB Stage-2 Studio
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#09090B] dark:hover:text-white transition-colors">
                  All 15 Products
                </Link>
              </li>
              <li>
                <Link href="/releases" className="hover:text-[#09090B] dark:hover:text-white transition-colors">
                  Release Archive
                </Link>
              </li>
              <li>
                <Link href="/compare" className="hover:text-[#09090B] dark:hover:text-white transition-colors">
                  Comparisons
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#09090B] dark:hover:text-white transition-colors">
                  Engineering Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Company & Legal */}
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#09090B] dark:text-white mb-3">
              Company &amp; Legal
            </div>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-[#09090B] dark:hover:text-white transition-colors">
                  About Cogify
                </Link>
              </li>
              <li>
                <Link href="/enterprise" className="hover:text-[#09090B] dark:hover:text-white transition-colors">
                  Enterprise Fleet
                </Link>
              </li>
              <li>
                <Link href="/suggestions" className="hover:text-[#09090B] dark:hover:text-white transition-colors">
                  Feature Requests
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#09090B] dark:hover:text-white transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#09090B] dark:hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#09090B] dark:hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px]">
          <span>
            © {currentYear} Cogify Technologies · Crafted by Shubham Sharma (Apple Developer ID 9TKKPN6F59)
          </span>
          <div className="flex items-center gap-4">
            <a
              href="https://biodata.cogify.me"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#09090B] dark:hover:text-white transition-colors"
            >
              biodata.cogify.me
            </a>
            <span>·</span>
            <a
              href="https://ssb.cogify.me"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#09090B] dark:hover:text-white transition-colors"
            >
              ssb.cogify.me
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
