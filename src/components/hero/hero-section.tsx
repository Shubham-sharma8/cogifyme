"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { MovingBorderButton } from "@/components/ui/moving-border";
import { MacOSWindowMockup } from "@/components/ui/macos-window";
import { DownloadModal } from "@/components/products/download-modal";
import { BrandLogo } from "@/components/brand/brand-logo";

export const HeroSection = () => {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 overflow-hidden flex flex-col justify-center items-center">
      {/* Aceternity Spotlight Background */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 opacity-40 dark:opacity-100"
        fill="#818cf8"
      />
      
      {/* Background Vector Beams */}
      <BackgroundBeams className="opacity-15 dark:opacity-30" />

      {/* Grid Pattern Overlay with Radial Fade */}
      <div className="absolute inset-0 bg-grid-pattern opacity-70 dark:opacity-30 radial-mask-fade-edges pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Main Brand Logo Mark */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-6 flex items-center justify-center animate-fade-in filter drop-shadow-[0_4px_16px_rgba(99,102,241,0.15)] dark:drop-shadow-[0_0_24px_rgba(99,102,241,0.3)]">
          <BrandLogo width={80} height={80} priority />
        </div>

        {/* Release Announcement Pill */}
        <Link
          href="/products/emdoc"
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200/80 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-medium mb-6 hover:bg-indigo-100/70 dark:hover:bg-indigo-500/15 transition-colors shadow-xs"
        >
          <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
          <span>Featured Product: EmDoc Workstation for macOS (5.0 MB)</span>
          <ArrowRight className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
        </Link>

        {/* Main Editorial Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-white max-w-4xl leading-[1.08] mb-6">
          Everyday software & solutions engineered with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-600 dark:from-indigo-300 dark:via-indigo-100 dark:to-cyan-300">
            enterprise precision.
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg lg:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          Cogify provides software solutions and high-performance everyday apps across desktop and mobile. We engineer lightweight, sovereign tools and partner with companies to eliminate expensive software licenses. EmDoc is our flagship product.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14">
          <Link
            href="#what-we-build"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/25"
          >
            <span>Explore Solutions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <MovingBorderButton
            onClick={() => setDownloadModalOpen(true)}
            borderRadius="0.85rem"
            className="px-6 py-3.5 font-semibold text-sm cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <Download className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Download EmDoc (Product · 5.0 MB)</span>
            </span>
          </MovingBorderButton>
        </div>

        {/* Engineering Tenets Ticker */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto w-full text-left text-xs">
          <div className="p-3 rounded-xl bg-white/90 dark:bg-zinc-950/40 border border-zinc-200/80 dark:border-white/5 backdrop-blur-sm shadow-xs">
            <span className="text-zinc-500 block text-[10px] uppercase font-mono">Solutions</span>
            <span className="text-zinc-900 dark:text-zinc-200 font-semibold text-sm text-indigo-600 dark:text-indigo-400">License Replacement</span>
          </div>
          <div className="p-3 rounded-xl bg-white/90 dark:bg-zinc-950/40 border border-zinc-200/80 dark:border-white/5 backdrop-blur-sm shadow-xs">
            <span className="text-zinc-500 block text-[10px] uppercase font-mono">RAM Efficiency</span>
            <span className="text-zinc-900 dark:text-zinc-200 font-semibold text-sm text-emerald-600 dark:text-emerald-400">Low Footprint</span>
          </div>
          <div className="p-3 rounded-xl bg-white/90 dark:bg-zinc-950/40 border border-zinc-200/80 dark:border-white/5 backdrop-blur-sm shadow-xs">
            <span className="text-zinc-500 block text-[10px] uppercase font-mono">Zero Paywalls</span>
            <span className="text-zinc-900 dark:text-zinc-200 font-semibold text-sm text-cyan-600 dark:text-cyan-400">100% Free Users</span>
          </div>
          <div className="p-3 rounded-xl bg-white/90 dark:bg-zinc-950/40 border border-zinc-200/80 dark:border-white/5 backdrop-blur-sm shadow-xs">
            <span className="text-zinc-500 block text-[10px] uppercase font-mono">Multi-Platform</span>
            <span className="text-zinc-900 dark:text-zinc-200 font-semibold text-sm">Desktop & Mobile</span>
          </div>
        </div>
      </div>

      {/* Hero Interactive Mac Window Showcase */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="relative">
          {/* Ambient Glow behind window */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/15 via-cyan-500/10 to-indigo-500/15 dark:from-indigo-500/20 dark:via-cyan-500/10 dark:to-indigo-500/20 rounded-3xl blur-2xl opacity-60 dark:opacity-50" />
          <MacOSWindowMockup />
        </div>
      </div>

      {/* Centralized Download Modal */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />
    </section>
  );
};
