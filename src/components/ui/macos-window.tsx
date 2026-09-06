"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Cpu,
  PenTool,
  Lock,
  Stamp,
  Scan,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

type WorkstationMode = "edit" | "forms" | "security" | "ocr" | "audit";

export const MacOSWindowMockup = () => {
  const [activeMode, setActiveMode] = useState<WorkstationMode>("edit");

  return (
    <div className="w-full max-w-6xl mx-auto rounded-2xl border border-zinc-200/90 dark:border-white/15 bg-zinc-100 dark:bg-[#0d111b]/90 shadow-2xl shadow-zinc-400/20 dark:shadow-indigo-950/40 overflow-hidden backdrop-blur-2xl transition-colors duration-200">
      {/* macOS Title Bar */}
      <div className="h-11 bg-zinc-200/90 dark:bg-zinc-900/80 border-b border-zinc-300/80 dark:border-white/10 px-4 flex items-center justify-between select-none">
        {/* Window controls */}
        <div className="flex items-center space-x-2 w-28">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/50 cursor-pointer hover:opacity-80 transition-opacity" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/50 cursor-pointer hover:opacity-80 transition-opacity" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]/50 cursor-pointer hover:opacity-80 transition-opacity" />
        </div>

        {/* Title & Document Badge */}
        <div className="flex items-center space-x-2 text-xs text-zinc-800 dark:text-zinc-300 font-medium">
          <div className="relative w-4 h-4 rounded overflow-hidden">
            <Image
              src="/brand/emdoc-icon.png"
              alt="EmDoc Icon"
              fill
              className="object-cover"
            />
          </div>
          <span className="truncate max-w-[200px] sm:max-w-none">EmDoc Workstation — Master_Services_Agreement_2026.pdf</span>
          <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-mono">
            <ShieldCheck className="w-3 h-3" />
            Air-Gapped Local
          </span>
        </div>

        {/* Window right indicators */}
        <div className="flex items-center space-x-3 text-xs text-zinc-500 dark:text-zinc-400 w-28 justify-end">
          <span className="font-mono text-[10px] text-zinc-500 hidden sm:inline">100% Zoom</span>
          <Cpu className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
        </div>
      </div>

      {/* Workstation Tool Ribbon */}
      <div className="bg-zinc-100/90 dark:bg-zinc-950/60 border-b border-zinc-200/90 dark:border-white/5 px-3 py-2 flex items-center justify-between overflow-x-auto gap-2">
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setActiveMode("edit")}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap",
              activeMode === "edit"
                ? "bg-indigo-600 text-white shadow-xs"
                : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/80 dark:text-zinc-400 dark:hover:text-zinc-200 dark:hover:bg-white/5"
            )}
          >
            <PenTool className="w-3.5 h-3.5" />
            <span>Edit & Annotate</span>
          </button>

          <button
            onClick={() => setActiveMode("forms")}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap",
              activeMode === "forms"
                ? "bg-indigo-600 text-white shadow-xs"
                : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/80 dark:text-zinc-400 dark:hover:text-zinc-200 dark:hover:bg-white/5"
            )}
          >
            <Stamp className="w-3.5 h-3.5" />
            <span>Fill & Sign</span>
          </button>

          <button
            onClick={() => setActiveMode("security")}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap",
              activeMode === "security"
                ? "bg-indigo-600 text-white shadow-xs"
                : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/80 dark:text-zinc-400 dark:hover:text-zinc-200 dark:hover:bg-white/5"
            )}
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Protect & Redact</span>
          </button>

          <button
            onClick={() => setActiveMode("ocr")}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap",
              activeMode === "ocr"
                ? "bg-indigo-600 text-white shadow-xs"
                : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/80 dark:text-zinc-400 dark:hover:text-zinc-200 dark:hover:bg-white/5"
            )}
          >
            <Scan className="w-3.5 h-3.5" />
            <span>Apple Neural OCR</span>
          </button>

          <button
            onClick={() => setActiveMode("audit")}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap",
              activeMode === "audit"
                ? "bg-indigo-600 text-white shadow-xs"
                : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/80 dark:text-zinc-400 dark:hover:text-zinc-200 dark:hover:bg-white/5"
            )}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Audit Trail</span>
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-2 text-zinc-500 text-xs font-mono">
          <span>C++20 LRU Cache: 14 MB</span>
          <span className="w-1 h-1 rounded-full bg-zinc-400 dark:bg-zinc-600" />
          <span className="text-emerald-600 dark:text-emerald-400">0.78ms Raster</span>
        </div>
      </div>

      {/* Main Workstation View Area */}
      <div className="grid grid-cols-12 min-h-[460px] bg-zinc-200/60 dark:bg-[#070a12]/90">
        {/* Left Document Structure & Pages Sidebar */}
        <div className="hidden md:flex md:col-span-3 lg:col-span-2 border-r border-zinc-200/80 dark:border-white/5 p-3 flex-col justify-between bg-zinc-100/80 dark:bg-zinc-950/40">
          <div className="space-y-3">
            <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider px-1">
              Document Thumbnails
            </div>
            {/* Page 1 (Active) */}
            <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/30 cursor-pointer space-y-1.5">
              <div className="aspect-[3/4] bg-zinc-900 rounded border border-white/10 p-2 relative overflow-hidden flex flex-col justify-between">
                <div className="space-y-1">
                  <div className="h-1.5 w-16 bg-zinc-700 rounded" />
                  <div className="h-1 w-20 bg-zinc-800 rounded" />
                  <div className="h-1 w-14 bg-zinc-800 rounded" />
                </div>
                <div className="h-2 w-10 bg-indigo-500/40 rounded self-end" />
                <span className="absolute top-1 right-1 text-[9px] font-mono text-indigo-300 bg-indigo-950/80 px-1 rounded">
                  P1
                </span>
              </div>
              <div className="flex justify-between items-center text-[10px] text-zinc-400 px-0.5">
                <span>Agreement</span>
                <span className="font-mono text-zinc-500">1/8</span>
              </div>
            </div>

            {/* Page 2 */}
            <div className="p-2 rounded-lg hover:bg-white/5 border border-transparent cursor-pointer space-y-1.5">
              <div className="aspect-[3/4] bg-zinc-900/60 rounded border border-white/5 p-2 flex flex-col justify-between">
                <div className="space-y-1">
                  <div className="h-1 w-20 bg-zinc-800 rounded" />
                  <div className="h-1 w-16 bg-zinc-800 rounded" />
                  <div className="h-1 w-22 bg-zinc-800 rounded" />
                </div>
                <div className="h-1 w-12 bg-zinc-800 rounded" />
              </div>
              <div className="flex justify-between items-center text-[10px] text-zinc-500 px-0.5">
                <span>Terms & Privacy</span>
                <span className="font-mono">2/8</span>
              </div>
            </div>
          </div>

          <div className="p-2 rounded-lg bg-zinc-900/60 border border-white/5 text-[11px] text-zinc-400">
            <div className="flex items-center gap-1.5 text-zinc-300 font-medium mb-1">
              <Cpu className="w-3.5 h-3.5 text-indigo-400" />
              <span>Apple Quartz Engine</span>
            </div>
            <p className="text-[10px] text-zinc-500 leading-tight">
              Hardware rasterized Retina canvas with zero cloud reliance.
            </p>
          </div>
        </div>

        {/* Center Canvas */}
        <div className="col-span-12 md:col-span-9 lg:col-span-7 p-6 flex items-center justify-center relative overflow-hidden bg-dot-white">
          <div className="w-full max-w-lg aspect-[8.5/11] bg-white rounded-lg shadow-2xl p-8 text-zinc-900 relative flex flex-col justify-between overflow-hidden">
            {/* Header Document */}
            <div>
              <div className="flex justify-between items-start border-b border-zinc-200 pb-4 mb-4">
                <div>
                  <div className="text-[10px] tracking-widest text-zinc-500 uppercase font-semibold">
                    Enterprise Master Services Agreement
                  </div>
                  <h3 className="text-base font-bold text-zinc-900 tracking-tight mt-0.5">
                    Section 8. Confidentiality & Security
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-[9px] font-mono text-zinc-400 bg-zinc-100 px-2 py-0.5 rounded">
                    DOC-2026-X9
                  </span>
                </div>
              </div>

              {/* Dynamic Interactive Mode Overlays */}
              {activeMode === "edit" && (
                <div className="space-y-3 text-xs leading-relaxed text-zinc-700">
                  <p>
                    8.1 <span className="bg-amber-200/80 px-1 py-0.5 rounded text-amber-950 font-medium">Data Sovereignty & Local Isolation:</span> The provider explicitly covenants that all proprietary documentation, intellectual property, and system schematics shall remain strictly on-device.
                  </p>
                  <p className="border-l-2 border-indigo-500 pl-3 italic text-zinc-600 bg-indigo-50/50 py-1">
                    &ldquo;Neither party shall transmit unencrypted payload streams beyond the air-gapped organizational perimeter without mutual cryptographic authorization.&rdquo;
                  </p>
                  <div className="p-2.5 rounded border border-indigo-300/60 bg-indigo-50/80 text-[11px] text-indigo-900 flex items-center justify-between">
                    <span>Inline typography editable with glyph-level metrics</span>
                    <span className="font-mono text-[9px] bg-indigo-200/80 px-1.5 py-0.5 rounded font-semibold">
                      Inter Display Regular
                    </span>
                  </div>
                </div>
              )}

              {activeMode === "forms" && (
                <div className="space-y-3 text-xs">
                  <p className="text-zinc-600 text-[11px]">
                    Interactive Form Workstation — Fillable digital signatures and form fields:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="border border-indigo-400 bg-indigo-50/60 p-2 rounded">
                      <span className="text-[9px] font-semibold text-indigo-950 block">SIGNATORY NAME</span>
                      <span className="text-xs font-medium text-zinc-900">Dr. Elizabeth Vance</span>
                    </div>
                    <div className="border border-indigo-400 bg-indigo-50/60 p-2 rounded">
                      <span className="text-[9px] font-semibold text-indigo-950 block">ORGANIZATION</span>
                      <span className="text-xs font-medium text-zinc-900">Meridian Technologies LLC</span>
                    </div>
                  </div>
                  <div className="border border-dashed border-purple-400 bg-purple-50/50 p-3 rounded-lg flex items-center justify-between">
                    <div>
                      <span className="text-[9px] font-bold text-purple-900 uppercase">Cursive Vector Signature</span>
                      <div className="font-serif italic text-lg text-purple-950 tracking-wide mt-0.5">
                        Elizabeth Vance
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-200 text-purple-900 font-semibold">
                      SHA-256 Validated
                    </span>
                  </div>
                </div>
              )}

              {activeMode === "security" && (
                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-950">
                    <div className="flex items-center gap-2 font-bold text-xs mb-1">
                      <Lock className="w-3.5 h-3.5 text-red-600" />
                      Permanent Vector Blackout Redaction
                    </div>
                    <p className="text-[11px] text-red-900 leading-snug">
                      Redacted content is irreversibly purged from PDF streams, glyph tables, and metadata.
                    </p>
                  </div>
                  <div className="space-y-2 text-zinc-600">
                    <div className="flex items-center gap-2">
                      <span className="h-4 w-32 bg-zinc-950 rounded" />
                      <span>was redacted under compliance policy 10.4</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>Confidential API Keys:</span>
                      <span className="h-4 w-44 bg-zinc-950 rounded" />
                    </div>
                  </div>
                  <div className="p-2 rounded bg-zinc-100 border border-zinc-300 font-mono text-[10px] text-zinc-700 flex justify-between">
                    <span>Document Encryption: AES-256</span>
                    <span className="text-emerald-700 font-semibold">Active Owner Password</span>
                  </div>
                </div>
              )}

              {activeMode === "ocr" && (
                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-cyan-50 border border-cyan-200 rounded-lg text-cyan-950">
                    <div className="flex items-center gap-2 font-bold text-xs mb-1">
                      <Scan className="w-3.5 h-3.5 text-cyan-700" />
                      Apple Neural Engine Vision OCR Active
                    </div>
                    <p className="text-[11px] text-cyan-900 leading-snug">
                      Sub-surface text extracted with 99.8% character confidence directly on Apple Neural Engine.
                    </p>
                  </div>
                  <div className="border border-dashed border-cyan-400 p-2 rounded relative">
                    <span className="absolute -top-2 right-2 bg-cyan-600 text-white font-mono text-[8px] px-1.5 rounded">
                      Bounding Box [x:120, y:340, w:420, h:54]
                    </span>
                    <p className="text-zinc-800 text-[11px] font-mono leading-relaxed">
                      &ldquo;IN WITNESS WHEREOF, the parties hereto have caused this instrument to be executed by their duly authorized representatives.&rdquo;
                    </p>
                  </div>
                </div>
              )}

              {activeMode === "audit" && (
                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-950">
                    <div className="flex items-center gap-2 font-bold text-xs mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                      Certified Copy Audit Trail Generated
                    </div>
                    <div className="font-mono text-[10px] space-y-1 mt-2 text-emerald-900">
                      <div>Timestamp: 2026-09-06T15:24:10Z UTC</div>
                      <div>Document Hash: 8f4e2b9c71d603a1...</div>
                      <div>Signer Certificate: Local Mac Keychain Validated</div>
                      <div>Tamper Check: PASS (0 revisions altered)</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Document Bottom Signatures */}
            <div className="pt-4 border-t border-zinc-200 flex justify-between items-end text-[10px] text-zinc-500">
              <div className="flex items-center gap-2">
                <div className="relative w-6 h-6 flex items-center justify-center shrink-0">
                  <Image
                    src="/brand/logo.png"
                    alt="COGIFY Logo"
                    width={24}
                    height={24}
                    className="w-full h-full object-contain opacity-90"
                  />
                </div>
                <div>
                  <span className="block font-semibold text-zinc-800">COGIFY Technologies</span>
                  <span>Authorized Software Product</span>
                </div>
              </div>
              <div className="text-right font-mono text-[9px] text-zinc-400">
                Page 1 of 8 • Generated by EmDoc Core
              </div>
            </div>
          </div>
        </div>

        {/* Right Workstation Inspector Panel */}
        <div className="hidden lg:flex lg:col-span-3 border-l border-zinc-200/80 dark:border-white/5 p-4 flex-col justify-between bg-zinc-100/80 dark:bg-zinc-950/60">
          <div className="space-y-4">
            <div className="text-[11px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
              Document Inspector
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-zinc-200/60 dark:border-white/5">
                <span className="text-zinc-500">Format</span>
                <span className="font-mono text-zinc-700 dark:text-zinc-300">PDF 1.7 (ISO 32000-1)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-200/60 dark:border-white/5">
                <span className="text-zinc-500">Engine Core</span>
                <span className="font-mono text-zinc-700 dark:text-zinc-300">C++20 Native</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-200/60 dark:border-white/5">
                <span className="text-zinc-500">Security</span>
                <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-medium">
                  <ShieldCheck className="w-3 h-3" />
                  Air-Gapped Local
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-200/60 dark:border-white/5">
                <span className="text-zinc-500">Telemetry</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-mono font-medium">0 bytes (Disabled)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-200/60 dark:border-white/5">
                <span className="text-zinc-500">Page Dimensions</span>
                <span className="font-mono text-zinc-700 dark:text-zinc-300">8.5 × 11.0 in (Letter)</span>
              </div>
            </div>

            <div className="pt-2">
              <div className="text-[11px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
                Workstation Modes
              </div>
              <div className="space-y-1">
                {[
                  { id: "edit", label: "Vector & Typography", desc: "Native glyph edits" },
                  { id: "forms", label: "Forms & Signature", desc: "Interactive field editor" },
                  { id: "security", label: "Redact & Encrypt", desc: "AES-256 blackout" },
                  { id: "ocr", label: "Neural Vision OCR", desc: "On-device Apple Engine" },
                  { id: "audit", label: "Audit Certificate", desc: "Cryptographic hash check" },
                ].map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => setActiveMode(mode.id as WorkstationMode)}
                    className={cn(
                      "w-full text-left p-2 rounded-lg text-xs transition-colors flex items-center justify-between cursor-pointer",
                      activeMode === mode.id
                        ? "bg-indigo-50 dark:bg-indigo-500/15 border border-indigo-200 dark:border-indigo-500/30 text-indigo-700 dark:text-indigo-300 shadow-xs"
                        : "hover:bg-zinc-200/60 dark:hover:bg-white/5 text-zinc-600 dark:text-zinc-400"
                    )}
                  >
                    <div>
                      <div className="font-medium text-zinc-800 dark:text-zinc-200">{mode.label}</div>
                      <div className="text-[10px] text-zinc-500">{mode.desc}</div>
                    </div>
                    {activeMode === mode.id && <ArrowRight className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200/80 dark:border-indigo-500/20 text-xs">
            <span className="text-indigo-700 dark:text-indigo-400 font-semibold block mb-0.5">EmDoc v0.1 Preview</span>
            <p className="text-zinc-600 dark:text-zinc-400 text-[11px]">
              Available for macOS 13.0+ (Ventura, Sonoma, Sequoia). Universal binary.
            </p>
          </div>
        </div>
      </div>

      {/* Window Status Bar */}
      <div className="h-7 bg-zinc-200/90 dark:bg-zinc-900/90 border-t border-zinc-300/80 dark:border-white/5 px-4 flex items-center justify-between text-[11px] text-zinc-600 dark:text-zinc-500 font-mono select-none">
        <div className="flex items-center space-x-3">
          <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            100% Offline
          </span>
          <span>•</span>
          <span>Memory: Bounded LRU</span>
          <span>•</span>
          <span>Rendering: Sub-millisecond Retina</span>
        </div>
        <div className="hidden sm:block text-zinc-500 dark:text-zinc-400">
          COGIFY Product Engineering
        </div>
      </div>
    </div>
  );
};
