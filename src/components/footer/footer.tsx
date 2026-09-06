"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ShieldCheck, Cpu } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-white/10 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-8 h-8 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                <Image
                  src="/brand/logo_white.png"
                  alt="COGIFY Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-base tracking-wider text-white">
                {siteConfig.name}
              </span>
            </Link>

            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              We build software that makes complex work simpler. Engineered for craft, performance, and complete data sovereignty.
            </p>

            <div className="flex items-center gap-3 pt-2 text-[11px] font-mono text-zinc-500">
              <span className="flex items-center gap-1 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                Zero Cloud Telemetry
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-indigo-400">
                <Cpu className="w-3.5 h-3.5" />
                C++20 Native
              </span>
            </div>
          </div>

          {/* Links Column: Company */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About COGIFY
                </Link>
              </li>
              <li>
                <Link href="/enterprise" className="hover:text-white transition-colors">
                  Enterprise
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/#what-we-build" className="hover:text-white transition-colors">
                  What We Build
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column: Products */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider">
              Products
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products/emdoc" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>EmDoc Workstation</span>
                  <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-indigo-500/20 text-indigo-300">
                    macOS
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-white transition-colors">
                  Feature Catalog
                </Link>
              </li>
              <li>
                <Link href="/about#timeline" className="hover:text-white transition-colors">
                  Product Roadmap
                </Link>
              </li>
              <li>
                <Link href="/emdoc/privacy" className="hover:text-white transition-colors text-indigo-400">
                  EmDoc Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column: Legal */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider">
              Legal & Trust
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/emdoc/privacy" className="hover:text-white transition-colors text-emerald-400">
                  EmDoc Air-Gapped Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <span className="text-zinc-500">
                  Domain: <code className="text-zinc-400 font-mono">cogify.me</code>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>
            © {currentYear} COGIFY. All rights reserved. EmDoc is a flagship product of COGIFY.
          </div>
          <div className="font-mono text-[10px]">
            Designed with precision • Built for macOS
          </div>
        </div>
      </div>
    </footer>
  );
};
