import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Lock,
  Scan,
  Stamp,
  HardDrive,
  FileText,
  AlertTriangle,
  ArrowLeft,
} from "lucide-react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "EmDoc Privacy Policy — 100% Air-Gapped Zero-Cloud Guarantee",
  description: "Official privacy statement for EmDoc Workstation for macOS. Complete offline execution, zero telemetry, on-device Apple Vision OCR, and local document security.",
  alternates: {
    canonical: "https://cogify.me/emdoc/privacy",
  },
};

export default function EmDocPrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <Link
            href="/products/emdoc"
            className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to EmDoc Workstation</span>
          </Link>
        </div>

        {/* Header Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200/80 dark:border-emerald-500/20 text-xs font-semibold uppercase tracking-wider shadow-xs">
            Product-Specific Privacy Statement
          </div>

          <div className="flex items-center space-x-4 pt-2">
            <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/15 bg-zinc-100 dark:bg-zinc-800 shadow-xl shrink-0">
              <Image
                src="/brand/emdoc-icon.png"
                alt="EmDoc App Icon"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                EmDoc Privacy Policy
              </h1>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-mono mt-1">
                Product: EmDoc Workstation for macOS • Version {siteConfig.emdoc.version} • Build {siteConfig.emdoc.build}
              </p>
            </div>
          </div>

          <p className="text-xs font-mono text-zinc-500 pt-1">
            Effective Date: September 6, 2026 • Published by COGIFY (<code className="text-zinc-700 dark:text-zinc-400 font-mono">cogify.me</code>)
          </p>
        </div>

        {/* Highlight Callout Box: 100% Air-Gapped Guarantee */}
        <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-emerald-50/50 border border-emerald-200/90 text-emerald-950 dark:from-emerald-950/40 dark:via-zinc-900 dark:to-zinc-950 dark:border-emerald-500/30 dark:text-emerald-200 space-y-4 shadow-sm dark:shadow-2xl">
          <div className="flex items-center gap-2.5 font-bold text-base text-emerald-700 dark:text-emerald-300">
            <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>The 100% Air-Gapped Architectural Guarantee</span>
          </div>
          <p className="text-xs sm:text-sm text-emerald-900/90 dark:text-emerald-100/90 leading-relaxed">
            EmDoc is engineered from the ground up to operate completely disconnected from external networks. EmDoc contains <strong>no cloud sync</strong>, <strong>no remote document processing</strong>, <strong>no analytics beacons</strong>, and <strong>no user tracking</strong>. All document rendering, parsing, text editing, vector redaction, cryptographic verification, and neural OCR execute exclusively on your local Mac hardware.
          </p>
          <div className="pt-2 border-t border-emerald-200 dark:border-emerald-500/20 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
            <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Zero Network Packets</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Zero Cloud Logins</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>100% On-Device Compute</span>
            </div>
          </div>
        </div>

        {/* Feature-by-Feature Factual Breakdown */}
        <div className="mt-12 space-y-12 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
          {/* Section 1: Local Document Processing */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-zinc-900 dark:text-white font-bold text-lg">
              <HardDrive className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <h2>1. Document Ingestion & Local File Storage</h2>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400">
              When you open, import, or create a PDF file in EmDoc:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-zinc-600 dark:text-zinc-400 text-xs pl-2">
              <li>Your documents are read directly from your local filesystem paths.</li>
              <li>Document contents are stored in volatile local memory (RAM) and cached temporarily in memory via a bounded LRU page cache.</li>
              <li>At no point are your PDF files, document pages, metadata, or file paths transmitted over the Internet or uploaded to any remote server.</li>
              <li>When you choose to save or export a document, the resulting file is written strictly to your chosen local disk destination.</li>
            </ul>
          </section>

          {/* Section 2: On-Device Apple Neural OCR */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-zinc-900 dark:text-white font-bold text-lg">
              <Scan className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              <h2>2. Optical Character Recognition (Apple Vision OCR)</h2>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400">
              EmDoc features an integrated Scan & OCR engine. Unlike web-based document tools that send scanned pages to remote cloud vision APIs:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-zinc-600 dark:text-zinc-400 text-xs pl-2">
              <li>All optical character recognition is performed on-device using Apple&apos;s native Vision framework (<code className="text-zinc-800 dark:text-zinc-300 font-mono">VNRecognizeTextRequest</code>) accelerated by the Apple Neural Engine.</li>
              <li>No scanned bitmaps, rasterized page images, or recognized text strings ever leave your Mac.</li>
              <li>Recognized text bounding boxes and glyph coordinates are calculated locally and mapped directly into the PDF&apos;s vector content stream.</li>
            </ul>
          </section>

          {/* Section 3: Fill, Sign & Cursive Vector Signatures */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-zinc-900 dark:text-white font-bold text-lg">
              <Stamp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <h2>3. Form Workstation & Digital Signatures</h2>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400">
              EmDoc provides native tools for filling interactive PDF forms and affixing cursive signatures:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-zinc-600 dark:text-zinc-400 text-xs pl-2">
              <li>All form field inputs (text fields, checkboxes, radio selections) are stored purely inside the standard AcroForm structures of your local PDF file.</li>
              <li>Cursive signatures and drawn vectors are rendered directly to vector Bézier paths in local memory. We operate no cloud signature verification databases or external signing ceremonies.</li>
              <li>Certified Copy audit stamps and SHA-256 cryptographic document hashes are calculated entirely on your Mac and embedded into the file&apos;s local annotation layer.</li>
            </ul>
          </section>

          {/* Section 4: Permanent Vector Redaction */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-zinc-900 dark:text-white font-bold text-lg">
              <Lock className="w-5 h-5 text-red-600 dark:text-red-400" />
              <h2>4. Permanent Vector Blackout Redaction</h2>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400">
              When applying redactions in EmDoc:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-zinc-600 dark:text-zinc-400 text-xs pl-2">
              <li>Redaction is not merely a black box drawn over text. The underlying text characters, vector strokes, and image pixels within the redaction bounding box are permanently and irreversibly excised from the document stream.</li>
              <li>This sanitization occurs entirely within the local C++20 PDF Core engine before the sanitized file is saved to disk.</li>
              <li>No un-redacted copies or audit shadows are transmitted or retained outside your explicit file saving directives.</li>
            </ul>
          </section>

          {/* Section 5: Telemetry, Analytics, and Crash Reports */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-zinc-900 dark:text-white font-bold text-lg">
              <Cpu className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <h2>5. Telemetry, Analytics & Network Telecommunications</h2>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400">
              EmDoc is intentionally designed with zero tracking software:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-zinc-600 dark:text-zinc-400 text-xs pl-2">
              <li><strong>Zero Outbound Analytics:</strong> EmDoc contains no Google Analytics, Firebase, Mixpanel, Segment, TelemetryDeck, or custom beacon SDKs.</li>
              <li><strong>Zero User Identifiers:</strong> We do not generate, store, or transmit device fingerprints, advertising identifiers (IDFA), or MAC addresses.</li>
              <li><strong>Zero Network Sockets:</strong> The application does not listen on any local network ports or establish outbound TCP/UDP connections.</li>
              <li><strong>Crash Diagnostics:</strong> EmDoc contains no proprietary crash reporting daemon. If macOS experiences an unexpected system crash, standard Apple diagnostic logs are managed strictly by macOS system settings under your control.</li>
            </ul>
          </section>

          {/* Section 6: System Permissions & Sandboxing */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-zinc-900 dark:text-white font-bold text-lg">
              <FileText className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <h2>6. macOS Sandboxing & Filesystem Permissions</h2>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400">
              EmDoc adheres to Apple&apos;s security architecture and App Sandbox requirements:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-zinc-600 dark:text-zinc-400 text-xs pl-2">
              <li>EmDoc accesses only the files that you explicitly select using the standard macOS File Open dialog or by dragging and dropping them into the EmDoc window.</li>
              <li>EmDoc does not scan your hard drive, personal folders, or document directories without your active selection.</li>
              <li>Security-scoped bookmarks are used locally by macOS to remember recently opened files in your local Recents list. This list resides solely on your computer.</li>
            </ul>
          </section>

          {/* Section 7: Third-Party Dependencies */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-zinc-900 dark:text-white font-bold text-lg">
              <AlertTriangle className="w-5 h-5 text-zinc-500 dark:text-zinc-400" />
              <h2>7. Third-Party Code & Open-Source Libraries</h2>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400">
              EmDoc is built with modern ISO C++20 and native Swift/AppKit. Any underlying open-source PDF engine components (such as PDFium) are statically compiled into the local binary. None of these components include network communication capabilities or cloud dependencies.
            </p>
          </section>

          {/* Section 8: Support & Technical Inquiries */}
          <section className="space-y-3 pt-4 border-t border-zinc-200/80 dark:border-white/5">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">8. Product Support & Privacy Contacts</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              If you have any questions, audits, or verification requests regarding EmDoc&apos;s air-gapped architecture, contact our technical team directly:
            </p>
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/5 text-xs font-mono space-y-1.5 text-zinc-800 dark:text-zinc-300">
              <div><strong>Application:</strong> EmDoc Workstation for macOS</div>
              <div><strong>Parent Company:</strong> COGIFY (<a href="https://cogify.me" className="text-indigo-600 dark:text-indigo-400 underline">https://cogify.me</a>)</div>
              <div><strong>Creator & Lead Architect:</strong> Shubham Sharma (Delhi)</div>
              <div><strong>Product Support & Inquiries:</strong> <a href="mailto:contact@cogify.me" className="text-indigo-600 dark:text-indigo-400 underline">contact@cogify.me</a></div>
              <div><strong>EmDoc Product Page:</strong> <Link href="/products/emdoc" className="text-indigo-600 dark:text-indigo-400 underline">https://cogify.me/products/emdoc</Link></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
