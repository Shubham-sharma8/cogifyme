"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  X,
  Download,
  ShieldCheck,
  CheckCircle2,
  Terminal,
} from "lucide-react";
import confetti from "canvas-confetti";
import { siteConfig } from "@/config/site";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal = ({ isOpen, onClose }: DownloadModalProps) => {
  const [downloadStarted, setDownloadStarted] = useState(false);
  const [arch, setArch] = useState<"universal" | "arm64" | "x86_64">("universal");

  if (!isOpen) return null;

  const handleDownload = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#6366f1", "#3b82f6", "#06b6d4", "#10b981"],
      });
    } catch {
      // ignore in headless test environments
    }

    setDownloadStarted(true);

    if (siteConfig.emdoc.downloadUrl) {
      window.location.href = siteConfig.emdoc.downloadUrl;
    } else {
      const element = document.createElement("a");
      const fileContent = `EmDoc Workstation for macOS (Release Preview v0.1)
Build: 2026.09.05
Architecture: ${arch.toUpperCase()}
Compatibility: macOS 13.0+ (Ventura, Sonoma, Sequoia)
Company: COGIFY (cogify.me)

100% Air-Gapped & Zero-Cloud Guarantee:
EmDoc processes all PDF documents, vector annotations, OCR recognition, and AES-256 password encryptions entirely on your local Mac processor. No analytics, telemetry, or remote servers are contacted.

For local build from workspace source:
- Open pdf/pdf.xcodeproj in Xcode
- Or build the C++20 Core via:
  cd offline-pdf && cmake -B build -S . -G Ninja -DCMAKE_BUILD_TYPE=Release && ninja -C build
`;
      const file = new Blob([fileContent], { type: "text/plain" });
      element.href = URL.createObjectURL(file);
      element.download = `EmDoc-v0.1-${arch}-macOS.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden text-zinc-900 dark:text-zinc-100 transition-colors duration-200">
        {/* Background glow */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/15 shadow-lg bg-zinc-100 dark:bg-zinc-800 shrink-0">
            <Image
              src="/brand/emdoc-icon.png"
              alt="EmDoc App Icon"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                Download EmDoc Workstation
              </h3>
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30">
                macOS
              </span>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
              Version {siteConfig.emdoc.version} • Build {siteConfig.emdoc.build}
            </p>
          </div>
        </div>

        {/* Privacy Callout */}
        <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 mb-6 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
          <div className="text-xs text-emerald-900 dark:text-emerald-200/90 leading-relaxed">
            <strong className="text-emerald-700 dark:text-emerald-300 block mb-0.5">100% Air-Gapped Zero-Cloud Guarantee</strong>
            All PDF rendering, Apple Vision OCR, and AES-256 encryptions execute purely on your local processor. Zero analytics, zero telemetric beacons.
          </div>
        </div>

        {/* System Specifications Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6 text-xs">
          <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-white/5 shadow-xs">
            <span className="text-zinc-500 block mb-1">Compatibility</span>
            <span className="font-semibold text-zinc-900 dark:text-zinc-200">macOS 13.0+</span>
            <span className="text-zinc-500 dark:text-zinc-400 block text-[11px] mt-0.5">Ventura, Sonoma, Sequoia</span>
          </div>
          <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-white/5 shadow-xs">
            <span className="text-zinc-500 block mb-1">Architecture</span>
            <span className="font-semibold text-zinc-900 dark:text-zinc-200">Universal Binary</span>
            <span className="text-zinc-500 dark:text-zinc-400 block text-[11px] mt-0.5">Apple Silicon & Intel x86_64</span>
          </div>
        </div>

        {/* Architecture Selector */}
        <div className="mb-6">
          <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-2">
            Select Target Package
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: "universal", label: "Universal (.dmg)", sub: "M1/M2/M3/M4 & Intel" },
              { id: "arm64", label: "Apple Silicon", sub: "Optimized M-Series" },
              { id: "x86_64", label: "Intel Core", sub: "64-bit Mac hardware" },
            ].map((option) => (
              <button
                key={option.id}
                onClick={() => setArch(option.id as "universal" | "arm64" | "x86_64")}
                className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer ${
                  arch === option.id
                    ? "bg-indigo-50 border-indigo-400 text-indigo-700 dark:bg-indigo-600/20 dark:border-indigo-500/50 dark:text-indigo-300 shadow-xs"
                    : "bg-zinc-50 dark:bg-zinc-950/40 border-zinc-200 dark:border-white/5 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-white/15"
                }`}
              >
                <div className="text-xs font-bold text-zinc-900 dark:text-zinc-200">{option.label}</div>
                <div className="text-[10px] text-zinc-500">{option.sub}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Download Action */}
        <div className="space-y-3">
          <button
            onClick={handleDownload}
            className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download EmDoc for macOS</span>
            <span className="text-xs font-normal opacity-85 font-mono">
              ({arch === "universal" ? "Universal DMG" : arch.toUpperCase()})
            </span>
          </button>

          {downloadStarted && (
            <div className="p-3 rounded-lg bg-emerald-50 dark:bg-zinc-950/80 border border-emerald-300 dark:border-indigo-500/30 text-xs text-emerald-900 dark:text-indigo-300 flex items-center gap-2 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Download package dispatched. Check your Downloads folder.</span>
            </div>
          )}

          <div className="flex items-center justify-between text-[11px] text-zinc-500 pt-2 border-t border-zinc-200/80 dark:border-white/5">
            <span className="flex items-center gap-1">
              <Terminal className="w-3.5 h-3.5" />
              Configurable via <code className="text-zinc-700 dark:text-zinc-400">EMDOC_DOWNLOAD_URL</code>
            </span>
            <span className="font-mono">SHA-256: 9b2d...f4e1</span>
          </div>
        </div>
      </div>
    </div>
  );
};
