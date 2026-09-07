"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Cpu,
  Layers,
  Lock,
  Stamp,
  Scan,
  Download,
  HardDrive,
  FileText,
  ArrowRight,
  Gift,
  Smartphone,
  CheckCircle2,
  XCircle,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { MovingBorderButton } from "@/components/ui/moving-border";
import { EmDocGallery } from "@/components/products/emdoc-gallery";
import { DownloadModal } from "@/components/products/download-modal";

export default function EmDocProductPage() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const emdoc = siteConfig.emdoc;

  return (
    <div className="pt-28 pb-20 relative">
      {/* Product Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center space-x-3">
            <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 shadow-lg bg-zinc-100 dark:bg-zinc-800">
              <Image
                src="/brand/emdoc-icon.png"
                alt="EmDoc App Icon"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30">
                  macOS Native Workstation
                </span>
                <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/10">
                  iOS In Development
                </span>
              </div>
              <div className="text-xs text-zinc-500 font-mono mt-1">
                Version {emdoc.version} (Build {emdoc.build}) • Size: {emdoc.appSize} • RAM: {emdoc.ramUsage}
              </div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-tight">
            Precision PDF Workstation.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-600 dark:from-indigo-300 dark:via-indigo-100 dark:to-cyan-300">
              Only 5.0 MB. 100% Free.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-3xl">
            {emdoc.shortDescription}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <MovingBorderButton
              onClick={() => setDownloadModalOpen(true)}
              borderRadius="0.75rem"
              className="px-6 py-3.5 font-semibold text-sm cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <Download className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Download EmDoc ({emdoc.appSize})</span>
              </span>
            </MovingBorderButton>

            <Link
              href="/suggestions"
              className="px-6 py-3.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 dark:bg-indigo-950/40 dark:hover:bg-indigo-900/40 dark:text-indigo-300 font-semibold text-sm border border-indigo-200 dark:border-indigo-500/30 transition-colors flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Suggest a Feature / Report Bug</span>
            </Link>

            <Link
              href="/emdoc/privacy"
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-100 text-zinc-800 hover:text-zinc-950 font-semibold text-sm border border-zinc-200/90 shadow-xs dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-300 dark:hover:text-white dark:border-white/10 transition-colors flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Air-Gapped Policy</span>
            </Link>
          </div>

          {/* 4 Core Pillars */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4">
            <div className="p-3 rounded-xl bg-white/80 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-white/5">
              <span className="text-zinc-500 block text-[10px] uppercase font-mono">Download Size</span>
              <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">{emdoc.appSize}</span>
            </div>
            <div className="p-3 rounded-xl bg-white/80 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-white/5">
              <span className="text-zinc-500 block text-[10px] uppercase font-mono">RAM Footprint</span>
              <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{emdoc.ramUsage}</span>
            </div>
            <div className="p-3 rounded-xl bg-white/80 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-white/5">
              <span className="text-zinc-500 block text-[10px] uppercase font-mono">Pricing</span>
              <span className="text-sm font-bold text-cyan-600 dark:text-cyan-400">100% Free Users</span>
            </div>
            <div className="p-3 rounded-xl bg-white/80 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-white/5">
              <span className="text-zinc-500 block text-[10px] uppercase font-mono">Mobile App</span>
              <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300">iOS In Dev</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Screenshot Showcase Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border border-indigo-200/80 dark:border-indigo-500/20 text-xs font-semibold uppercase tracking-wider mb-2">
            Real Application Interface
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-zinc-900 dark:text-white">
            High-Resolution Screenshot Showcase
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
            Browse through all 8 integrated tools and views. Click any screenshot to open in full-resolution zoom.
          </p>
        </div>

        <EmDocGallery />
      </section>

      {/* Comparison Matrix: EmDoc vs Bloated Competitors */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight mb-2">
            Why EmDoc is Different
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
            Legacy PDF suites have grown bloated, battery-hungry, and overly commercialized. We built EmDoc from zero to give you maximum speed without the bloat.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-200/90 dark:border-white/10 bg-white/90 dark:bg-zinc-950/60 shadow-lg overflow-x-auto">
          <table className="w-full text-left text-xs min-w-[640px]">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-white/10 bg-zinc-50/80 dark:bg-zinc-900/50">
                <th className="py-4 px-6 font-semibold text-zinc-700 dark:text-zinc-300">Dimension</th>
                <th className="py-4 px-6 font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-500/10">
                  EmDoc Workstation
                </th>
                <th className="py-4 px-6 font-medium text-zinc-500">Legacy Commercial Suites (e.g. Acrobat)</th>
                <th className="py-4 px-6 font-medium text-zinc-500">Other Mac PDF Tools</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200/70 dark:divide-white/5">
              <tr className="hover:bg-zinc-50/50 dark:hover:bg-white/[0.02]">
                <td className="py-3.5 px-6 font-semibold text-zinc-700 dark:text-zinc-300">Application Size</td>
                <td className="py-3.5 px-6 font-bold text-emerald-600 dark:text-emerald-400 bg-indigo-50/30 dark:bg-indigo-500/5">
                  5.0 MB (Instant download)
                </td>
                <td className="py-3.5 px-6 text-zinc-500">~1,200 MB (1.2 GB download)</td>
                <td className="py-3.5 px-6 text-zinc-500">120 MB - 300 MB</td>
              </tr>
              <tr className="hover:bg-zinc-50/50 dark:hover:bg-white/[0.02]">
                <td className="py-3.5 px-6 font-semibold text-zinc-700 dark:text-zinc-300">RAM Memory Baseline</td>
                <td className="py-3.5 px-6 font-bold text-emerald-600 dark:text-emerald-400 bg-indigo-50/30 dark:bg-indigo-500/5">
                  ~45 MB (Lightweight & cool)
                </td>
                <td className="py-3.5 px-6 text-zinc-500">800 MB - 2.5 GB</td>
                <td className="py-3.5 px-6 text-zinc-500">250 MB - 600 MB</td>
              </tr>
              <tr className="hover:bg-zinc-50/50 dark:hover:bg-white/[0.02]">
                <td className="py-3.5 px-6 font-semibold text-zinc-700 dark:text-zinc-300">Pricing for Individuals</td>
                <td className="py-3.5 px-6 font-bold text-emerald-600 dark:text-emerald-400 bg-indigo-50/30 dark:bg-indigo-500/5">
                  100% Free (Zero paywalls)
                </td>
                <td className="py-3.5 px-6 text-zinc-500">$239.88 / year subscription</td>
                <td className="py-3.5 px-6 text-zinc-500">$79.99 / year or paid tiers</td>
              </tr>
              <tr className="hover:bg-zinc-50/50 dark:hover:bg-white/[0.02]">
                <td className="py-3.5 px-6 font-semibold text-zinc-700 dark:text-zinc-300">Cloud & Telemetry</td>
                <td className="py-3.5 px-6 font-bold text-emerald-600 dark:text-emerald-400 bg-indigo-50/30 dark:bg-indigo-500/5">
                  100% Air-Gapped (0 bytes online)
                </td>
                <td className="py-3.5 px-6 text-zinc-500">Mandatory cloud sync & telemetry</td>
                <td className="py-3.5 px-6 text-zinc-500">Analytics beacons & cloud features</td>
              </tr>
              <tr className="hover:bg-zinc-50/50 dark:hover:bg-white/[0.02]">
                <td className="py-3.5 px-6 font-semibold text-zinc-700 dark:text-zinc-300">Offline Compression</td>
                <td className="py-3.5 px-6 font-bold text-emerald-600 dark:text-emerald-400 bg-indigo-50/30 dark:bg-indigo-500/5">
                  Included Free (On-device engine)
                </td>
                <td className="py-3.5 px-6 text-zinc-500">Requires Pro subscription</td>
                <td className="py-3.5 px-6 text-zinc-500">Often limited or cloud-based</td>
              </tr>
              <tr className="hover:bg-zinc-50/50 dark:hover:bg-white/[0.02]">
                <td className="py-3.5 px-6 font-semibold text-zinc-700 dark:text-zinc-300">Cross-Device Roadmap</td>
                <td className="py-3.5 px-6 font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50/30 dark:bg-indigo-500/5">
                  iOS In Active Development (iPhone & iPad)
                </td>
                <td className="py-3.5 px-6 text-zinc-500">Separate mobile licenses</td>
                <td className="py-3.5 px-6 text-zinc-500">Separate iOS IAP</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Deep-Dive Architectural Tenets */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-zinc-200/80 dark:border-white/5">
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight mb-3">
            Core Architectural Tenets
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
            EmDoc is intentionally engineered without cloud backend services, telemetry SDKs, or foreign runtime wrappers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/90 dark:bg-zinc-900/40 border border-zinc-200/90 dark:border-white/10 space-y-3 shadow-xs dark:shadow-none">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white">100% Air-Gapped Privacy</h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Zero network sockets opened. Documents, annotations, cryptographic signatures, compression, and watermarks happen solely on your Mac&apos;s CPU and Apple Neural Engine.
            </p>
            <Link
              href="/emdoc/privacy"
              className="inline-flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium pt-1"
            >
              <span>Read EmDoc Privacy Policy</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="p-6 rounded-2xl bg-white/90 dark:bg-zinc-900/40 border border-zinc-200/90 dark:border-white/10 space-y-3 shadow-xs dark:shadow-none">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white">5.0 MB Native Swift & CoreGraphics</h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Sub-millisecond page rasterization, virtualized multi-threaded tile rendering, and bounded LRU page caches engineered for instantaneous document responsiveness on ~45 MB of memory.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/90 dark:bg-zinc-900/40 border border-zinc-200/90 dark:border-white/10 space-y-3 shadow-xs dark:shadow-none">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
              <HardDrive className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white">Zero Telemetry & Zero Paywalls</h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              No tracking scripts, no analytics beacons, no mandatory account signups. Every single feature is free for individual users without trial countdowns or crippled exports.
            </p>
          </div>
        </div>
      </section>

      {/* Verified Technical Specifications */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-zinc-200/80 dark:border-white/5">
        <div className="max-w-3xl mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight mb-2">
            Technical Specifications
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm">
            Exact system requirements and build specifications verified directly against our codebase.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-200/90 dark:border-white/10 bg-white/90 dark:bg-zinc-950/60 shadow-xs overflow-hidden">
          <table className="w-full text-left text-xs">
            <tbody className="divide-y divide-zinc-200/70 dark:divide-white/5">
              {emdoc.specifications.map((spec, idx) => (
                <tr key={idx} className="hover:bg-zinc-50 dark:hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-6 font-semibold text-zinc-600 dark:text-zinc-400 w-1/3">
                    {spec.label}
                  </td>
                  <td className="py-4 px-6 text-zinc-900 dark:text-zinc-200 font-mono">
                    {spec.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Community Suggestions Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-indigo-50 via-white to-purple-50 dark:from-indigo-950/30 dark:via-zinc-900 dark:to-purple-950/30 border border-indigo-200/80 dark:border-indigo-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-indigo-600/10 dark:bg-indigo-400/10 text-indigo-700 dark:text-indigo-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              Community Driven
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Have an idea or want to report an issue?
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              We build tools based on user feedback. If you have a feature suggestion, bug report, or want us to build an app for another workflow, let us know!
            </p>
          </div>

          <Link
            href="/suggestions"
            className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all duration-200 shrink-0 shadow-lg shadow-indigo-600/30 flex items-center gap-2 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Drop a Suggestion / Report</span>
          </Link>
        </div>
      </section>

      {/* Centralized Download Modal */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />
    </div>
  );
}
