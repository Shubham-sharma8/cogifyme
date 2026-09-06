"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, MessageSquareCode, ShieldCheck } from "lucide-react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { MovingBorderButton } from "@/components/ui/moving-border";
import { DownloadModal } from "@/components/products/download-modal";

export const FinalCTA = () => {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-zinc-950 to-[#06080d] border-t border-white/5">
      <BackgroundBeams className="opacity-25" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        <div className="relative w-14 h-14 mb-6 flex items-center justify-center">
          <Image
            src="/brand/logo_white.png"
            alt="COGIFY Logo"
            width={56}
            height={56}
            className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(99,102,241,0.25)]"
          />
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-6">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>High Performance • Native Engineering • Absolute Privacy</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-3xl mx-auto">
          Have a difficult software problem?{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-indigo-100 to-cyan-300">
            Let&apos;s build the right solution.
          </span>
        </h2>

        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10">
          Whether you need a specialized native workstation, an air-gapped document engine, or custom software built for scale, COGIFY delivers engineering excellence.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all duration-200 shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2"
          >
            <MessageSquareCode className="w-4 h-4" />
            <span>Talk to COGIFY</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <MovingBorderButton
            onClick={() => setDownloadModalOpen(true)}
            borderRadius="0.75rem"
            className="px-6 py-3.5 font-semibold text-sm cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <Download className="w-4 h-4 text-indigo-400" />
              <span>Explore EmDoc for macOS</span>
            </span>
          </MovingBorderButton>
        </div>
      </div>

      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />
    </section>
  );
};
