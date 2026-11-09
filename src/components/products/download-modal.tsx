"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  X,
  ShieldCheck,
  CheckCircle2,
  History,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { AppleLogoIcon, AppStoreIcon } from "@/components/ui/platform-icons";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal = ({ isOpen, onClose }: DownloadModalProps) => {
  const [downloadStarted, setDownloadStarted] = useState(false);
  const [arch, setArch] = useState<"universal" | "arm64" | "x86_64">("universal");

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloadStarted(true);
    const targetUrl = siteConfig.emdoc.downloadUrl || siteConfig.emdoc.appStoreUrl;
    window.open(targetUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="download-modal-title"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/55 dark:bg-black/80 backdrop-blur-sm animate-in fade-in duration-200 overscroll-contain"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/15 rounded-[26px] shadow-2xl p-6 sm:p-8 overflow-hidden text-[#111] dark:text-[#f5f5f7] transition-colors duration-200"
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full text-[#777] hover:text-[#111] dark:hover:text-white hover:bg-black/[0.05] dark:hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative w-16 h-16 rounded-[18px] overflow-hidden border border-black/[0.08] dark:border-white/15 bg-[#f5f5f5] dark:bg-[#0b0b0d] shrink-0">
            <Image
              src="/brand/emdoc-icon-sm.webp"
              alt="EmDoc App Icon"
              fill
              sizes="64px"
              className="object-cover"
            />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3
                id="download-modal-title"
                className="text-xl font-bold tracking-tight text-[#111] dark:text-white"
              >
                Download EmDoc v{siteConfig.emdoc.version}
              </h3>
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#111] text-white dark:bg-white dark:text-[#111]">
                Build {siteConfig.emdoc.build}
              </span>
            </div>
            <p className="text-xs text-[#666] dark:text-[#a1a1aa] mt-1 inline-flex items-center gap-1.5 tabular-nums">
              <Calendar className="w-3.5 h-3.5" />
              <span>
                Released {siteConfig.emdoc.releaseDate} • Universal Binary ({siteConfig.emdoc.appSize})
              </span>
            </p>
          </div>
        </div>

        {/* Privacy & Checksum Callout */}
        <div className="p-4 rounded-2xl bg-[#f5f5f5] dark:bg-[#0b0b0d] border border-black/[0.06] dark:border-white/[0.08] mb-5 space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#111] dark:text-white">
            <ShieldCheck className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>100% Air-Gapped Native Binary • SHA-256 Verified</span>
          </div>
          <p className="text-[11px] font-mono break-all text-[#555] dark:text-[#a1a1aa] select-all">
            {siteConfig.emdoc.sha256}
          </p>
        </div>

        {/* Architecture Selector */}
        <div className="mb-6">
          <span
            id="arch-selector-label"
            className="text-[11px] font-semibold uppercase tracking-wider text-[#777] dark:text-[#888] block mb-2"
          >
            Target Architecture
          </span>
          <div
            role="group"
            aria-labelledby="arch-selector-label"
            className="grid grid-cols-3 gap-2"
          >
            {[
              { id: "universal", label: "Universal App", sub: "M1–M4 & Intel" },
              { id: "arm64", label: "Apple Silicon", sub: "Native arm64" },
              { id: "x86_64", label: "Intel Core", sub: "64-bit Mac" },
            ].map((option) => (
              <button
                key={option.id}
                type="button"
                aria-pressed={arch === option.id}
                onClick={() => setArch(option.id as "universal" | "arm64" | "x86_64")}
                className={`p-2.5 rounded-xl text-left border transition-colors cursor-pointer ${
                  arch === option.id
                    ? "bg-[#111] text-white border-[#111] dark:bg-white dark:text-[#111] dark:border-white"
                    : "bg-[#f5f5f5] dark:bg-[#0b0b0d] border-black/[0.07] dark:border-white/[0.08] text-[#555] dark:text-[#a1a1aa]"
                }`}
              >
                <div className="text-xs font-semibold">{option.label}</div>
                <div className="text-[10px] opacity-75">{option.sub}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Download Actions */}
        <div className="space-y-2.5">
          {siteConfig.emdoc.downloadUrl && (
            <button
              type="button"
              onClick={handleDownload}
              className="helumi-pill w-full justify-center text-sm cursor-pointer"
            >
              <AppleLogoIcon className="w-4 h-4 -mt-0.5" />
              <span>
                download for mac ({siteConfig.emdoc.appSize} • {arch.toUpperCase()})
              </span>
            </button>
          )}

          <a
            href={siteConfig.emdoc.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setDownloadStarted(true)}
            className="helumi-pill-secondary w-full justify-center text-sm"
          >
            <AppStoreIcon className="w-4 h-4" />
            <span>Download on the Mac App Store</span>
          </a>

          {downloadStarted && (
            <div
              role="status"
              aria-live="polite"
              className="p-3 rounded-xl bg-[#f5f5f5] dark:bg-[#0b0b0d] border border-black/[0.08] dark:border-white/10 text-xs text-[#111] dark:text-[#f5f5f7] flex items-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Starting EmDoc v{siteConfig.emdoc.version} installer download…</span>
            </div>
          )}

          <div className="flex items-center justify-between text-xs text-[#666] dark:text-[#a1a1aa] pt-3 border-t border-black/[0.06] dark:border-white/[0.08]">
            <Link
              href="/releases"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 hover:text-[#111] dark:hover:text-white transition-colors font-medium"
            >
              <History className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Download Previous Versions (v1.0.0, v0.0.2, v0.0.1)</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
