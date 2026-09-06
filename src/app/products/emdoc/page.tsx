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
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { MovingBorderButton } from "@/components/ui/moving-border";
import { MacOSWindowMockup } from "@/components/ui/macos-window";
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
            <div className="relative w-12 h-12 rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 shadow-lg bg-zinc-100 dark:bg-zinc-800">
              <Image
                src="/brand/emdoc-icon.png"
                alt="EmDoc App Icon"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30">
                macOS Native Workstation
              </span>
              <div className="text-xs text-zinc-500 font-mono mt-0.5">
                Version {emdoc.version} (Build {emdoc.build})
              </div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-tight">
            Precision PDF Workstation.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600 dark:from-indigo-300 dark:to-cyan-300">
              Built natively for macOS.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-3xl">
            {emdoc.shortDescription}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <MovingBorderButton
              onClick={() => setDownloadModalOpen(true)}
              borderRadius="0.75rem"
              className="px-6 py-3.5 font-semibold text-sm cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <Download className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Download EmDoc for macOS</span>
              </span>
            </MovingBorderButton>

            <Link
              href="/emdoc/privacy"
              className="px-6 py-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:hover:bg-emerald-900/40 dark:text-emerald-300 dark:hover:text-emerald-200 font-semibold text-sm border border-emerald-300 dark:border-emerald-500/30 transition-colors flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Air-Gapped Privacy Policy</span>
            </Link>

            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-100 text-zinc-800 hover:text-zinc-950 font-semibold text-sm border border-zinc-200/90 shadow-xs dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-300 dark:hover:text-white dark:border-white/10 transition-colors"
            >
              Enterprise Deployment Inquiry
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-500 font-mono pt-2">
            <Link
              href="/emdoc/privacy"
              className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              <ShieldCheck className="w-4 h-4" />
              100% Air-Gapped Zero-Cloud
            </Link>
            <span>•</span>
            <span>Universal Binary (Apple Silicon + Intel)</span>
            <span>•</span>
            <span>macOS 13.0 Ventura or later</span>
          </div>
        </div>
      </section>

      {/* Interactive Mac Window Simulator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <MacOSWindowMockup />
      </section>

      {/* Deep-Dive Architectural Tenets */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight mb-3">
            Architectural Guarantees
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
              Zero network sockets opened. Documents, annotations, cryptographic signatures, and OCR recognition happen solely on your Mac&apos;s CPU and Neural Engine.
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
            <h3 className="text-base font-bold text-zinc-900 dark:text-white">Modern C++20 Core</h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Sub-millisecond page rasterization, virtualized multi-threaded tile rendering, and bounded LRU page caches engineered for instantaneous document responsiveness.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/90 dark:bg-zinc-900/40 border border-zinc-200/90 dark:border-white/10 space-y-3 shadow-xs dark:shadow-none">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
              <HardDrive className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white">Zero Telemetry & Bloat</h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              No tracking scripts, no analytics beacons, no mandatory account signups. Launch and edit without friction or corporate surveillance.
            </p>
          </div>
        </div>
      </section>

      {/* Comprehensive Tool Suite */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-zinc-200/80 dark:border-white/5">
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight mb-3">
            Workstation Capabilities
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
            Every feature in EmDoc is designed for serious document workflows with zero unnecessary abstractions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Freehand & Vector Ink Annotations",
              desc: "Pressure-responsive pen strokes, variable-width highlighters, geometric callout shapes, and precise note anchors on high-DPI Retina screens.",
              icon: <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
            },
            {
              title: "Form Workstation & Fillable Fields",
              desc: "Interactive AcroForm text fields, checkboxes, dropdown selectors, and radio buttons with automatic tabular navigation and validation.",
              icon: <FileText className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
            },
            {
              title: "Digital Signatures & Certified Copy",
              desc: "Smooth cursive vector signatures, local cryptographic SHA-256 integrity hashing, and verifiable audit trail stamping.",
              icon: <Stamp className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
            },
            {
              title: "Permanent Vector Blackout Redactions",
              desc: "True document sanitization. Underlying text streams, glyph coordinates, and metadata are irreversibly purged before saving.",
              icon: <Lock className="w-5 h-5 text-red-600 dark:text-red-400" />,
            },
            {
              title: "Apple Vision Neural OCR",
              desc: "Sub-surface text extraction with character-level accuracy powered directly by the Apple Neural Engine without remote server calls.",
              icon: <Scan className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
            },
            {
              title: "AES-256 Document Encryption",
              desc: "Military-grade owner and user password security, granular permission flags (printing, copying, assembly), and zero backdoor keys.",
              icon: <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
            },
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white/90 dark:bg-zinc-900/30 border border-zinc-200/90 dark:border-white/10 space-y-3 shadow-xs dark:shadow-none">
              <div className="w-10 h-10 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/80 dark:border-white/10 flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">{item.title}</h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
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

      {/* Centralized Download Modal */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />
    </div>
  );
}
