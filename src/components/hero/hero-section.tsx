"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { MovingBorderButton } from "@/components/ui/moving-border";
import { MacOSWindowMockup } from "@/components/ui/macos-window";
import { DownloadModal } from "@/components/products/download-modal";

export const HeroSection = () => {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 overflow-hidden flex flex-col justify-center items-center">
      {/* Aceternity Spotlight Background */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#818cf8"
      />
      
      {/* Background Vector Beams */}
      <BackgroundBeams className="opacity-30" />

      {/* Grid Pattern Overlay with Radial Fade */}
      <div className="absolute inset-0 bg-grid-white/[0.03] radial-mask-fade-edges pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Main Brand Logo Mark */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-6 flex items-center justify-center animate-fade-in">
          <Image
            src="/brand/logo_white.png"
            alt="COGIFY Logo"
            width={80}
            height={80}
            className="w-full h-full object-contain filter drop-shadow-[0_0_24px_rgba(99,102,241,0.3)]"
            priority
          />
        </div>

        {/* Release Announcement Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-6 hover:bg-indigo-500/15 transition-colors">
          <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
          <span>Announcing EmDoc Workstation v0.1 Preview for macOS</span>
          <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />
        </div>

        {/* Main Editorial Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.08] mb-6">
          We build software for{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-indigo-100 to-cyan-300">
            work that matters.
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg lg:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          COGIFY creates thoughtful, precision software for individuals, engineering teams, and enterprises — combining deep systems technology with simple, refined experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14">
          <MovingBorderButton
            onClick={() => setDownloadModalOpen(true)}
            borderRadius="0.85rem"
            className="px-6 py-3.5 font-semibold text-sm cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <Download className="w-4 h-4 text-indigo-400" />
              <span>Download EmDoc for macOS</span>
            </span>
          </MovingBorderButton>

          <Link
            href="#what-we-build"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-semibold text-zinc-300 hover:text-white bg-zinc-900/60 hover:bg-zinc-800/60 border border-white/10 transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
          >
            <span>What We Build</span>
            <ChevronDown className="w-4 h-4 text-zinc-400" />
          </Link>
        </div>

        {/* Engineering Tenets Ticker */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto w-full text-left text-xs">
          <div className="p-3 rounded-xl bg-zinc-950/40 border border-white/5 backdrop-blur-sm">
            <span className="text-zinc-500 block text-[10px] uppercase font-mono">Guaranteed</span>
            <span className="text-zinc-200 font-semibold">100% Air-Gapped</span>
          </div>
          <div className="p-3 rounded-xl bg-zinc-950/40 border border-white/5 backdrop-blur-sm">
            <span className="text-zinc-500 block text-[10px] uppercase font-mono">Foundation</span>
            <span className="text-zinc-200 font-semibold">Modern C++20 Core</span>
          </div>
          <div className="p-3 rounded-xl bg-zinc-950/40 border border-white/5 backdrop-blur-sm">
            <span className="text-zinc-500 block text-[10px] uppercase font-mono">Platform</span>
            <span className="text-zinc-200 font-semibold">Apple Silicon & Intel</span>
          </div>
          <div className="p-3 rounded-xl bg-zinc-950/40 border border-white/5 backdrop-blur-sm">
            <span className="text-zinc-500 block text-[10px] uppercase font-mono">Intelligence</span>
            <span className="text-zinc-200 font-semibold">On-Device Neural OCR</span>
          </div>
        </div>
      </div>

      {/* Hero Interactive Mac Window Showcase */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="relative">
          {/* Ambient Glow behind window */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 via-cyan-500/10 to-indigo-500/20 rounded-3xl blur-2xl opacity-50" />
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
