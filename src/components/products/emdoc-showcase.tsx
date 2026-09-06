"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Download,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { DownloadModal } from "@/components/products/download-modal";

export const EmDocShowcase = () => {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  return (
    <section id="products" className="py-24 relative overflow-hidden bg-white dark:bg-zinc-950/40 border-t border-zinc-200/80 dark:border-white/5 transition-colors duration-200">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border border-indigo-200/80 dark:border-indigo-500/20 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            Flagship Product
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
            Meet <span className="text-indigo-600 dark:text-indigo-400">EmDoc</span>.
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            A powerful, 100% air-gapped PDF workstation engineered natively for macOS. Built from the ground up on a custom modern C++20 Core, EmDoc delivers desktop responsiveness with zero network dependencies.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {siteConfig.emdoc.features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/90 dark:bg-zinc-900/40 border border-zinc-200/90 dark:border-white/10 hover:border-indigo-500/40 transition-all duration-200 group flex flex-col justify-between shadow-xs dark:shadow-none"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-medium px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-500/20">
                    {feature.tag}
                  </span>
                  <span className="text-xs font-mono text-zinc-400 dark:text-zinc-600">0{idx + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-200/80 dark:border-white/5 flex items-center gap-2 text-xs text-zinc-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Verified in macOS Native Build</span>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Specification & Download Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-zinc-50 via-white to-zinc-100/60 dark:from-zinc-900/80 dark:to-zinc-950 border border-zinc-200/90 dark:border-white/10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Product Info & Actions */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/15 bg-zinc-100 dark:bg-zinc-800 shadow-xl">
                  <Image
                    src="/brand/emdoc-icon.png"
                    alt="EmDoc Icon"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
                    EmDoc Workstation for macOS
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono mt-0.5">
                    Version {siteConfig.emdoc.version} • Build {siteConfig.emdoc.build} • Universal Binary
                  </p>
                </div>
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Download the standalone macOS application. Experience instant startup, zero cloud latency, and complete privacy guaranteed by architecture.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setDownloadModalOpen(true)}
                  className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all duration-200 flex items-center gap-2 shadow-lg shadow-indigo-600/30 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download EmDoc for macOS</span>
                </button>

                <Link
                  href="/products/emdoc"
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-100 text-zinc-800 hover:text-zinc-950 font-semibold text-sm border border-zinc-200/90 shadow-xs dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-300 dark:hover:text-white dark:border-white/10 transition-colors flex items-center gap-2"
                >
                  <span>Explore EmDoc Deep Dive</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="flex items-center gap-4 text-xs text-zinc-500 pt-2 font-mono">
                <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                  <ShieldCheck className="w-4 h-4" />
                  100% Air-Gapped
                </span>
                <span>•</span>
                <span>macOS 13.0+</span>
                <span>•</span>
                <span>Apple Silicon & Intel</span>
              </div>
            </div>

            {/* Right Column: Specs Matrix */}
            <div className="lg:col-span-5 bg-white/90 dark:bg-zinc-950/70 rounded-2xl border border-zinc-200/80 dark:border-white/5 p-6 space-y-3 shadow-xs">
              <div className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
                Release Metadata
              </div>
              {siteConfig.emdoc.specifications.slice(0, 5).map((spec, idx) => (
                <div key={idx} className="flex justify-between items-start text-xs py-1.5 border-b border-zinc-200/60 dark:border-white/5 last:border-0">
                  <span className="text-zinc-500 pr-2">{spec.label}</span>
                  <span className="text-zinc-800 dark:text-zinc-300 font-mono text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />
    </section>
  );
};
