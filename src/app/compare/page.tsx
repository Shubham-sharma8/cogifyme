import React from "react";
import type { Metadata } from "next";
import { Scale, ShieldCheck, Cpu, HardDrive, DollarSign } from "lucide-react";
import { ComparisonHubSection } from "@/components/compare/comparison-hub-section";
import { FaqSection } from "@/components/seo/faq-section";
import { AuthorBio } from "@/components/seo/author-bio";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { COMPARISON_GUIDES } from "@/config/comparisons";

export const metadata: Metadata = {
  title: "macOS Utility Comparisons & Alternatives (2026)",
  description:
    "Compare Cogify's free, zero-telemetry native macOS apps against Adobe Acrobat, Little Snitch, iStat Menus, BetterDisplay, Paste, and DaisyDisk.",
  alternates: {
    canonical: "https://cogify.me/compare",
  },
  openGraph: {
    title: "macOS Utility Comparisons & Alternatives (2026) | COGIFY",
    description:
      "Compare Cogify's free, zero-telemetry native macOS apps against Adobe Acrobat, Little Snitch, iStat Menus, BetterDisplay, Paste, and DaisyDisk.",
    url: "https://cogify.me/compare",
    siteName: "COGIFY",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "macOS Utility Comparisons & Alternatives (2026) | COGIFY",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "macOS Utility Comparisons & Alternatives (2026) | COGIFY",
    description:
      "Compare Cogify's free, zero-telemetry native macOS apps against Adobe Acrobat, Little Snitch, iStat Menus, BetterDisplay, Paste, and DaisyDisk.",
    images: ["/og-image.png"],
  },
};

const HUB_FAQS = [
  {
    q: "How can Cogify offer native macOS utilities for $0 when competitors charge $20 to $240/year?",
    a: "Commercial macOS software companies carry recurring cloud infrastructure costs, telemetry pipelines, and paid ad-acquisition budgets because they sync your files or clipboard to their cloud servers. Every Cogify app executes 100% locally on your Mac's Apple Silicon CPU/GPU with zero cloud databases, zero third-party analytics SDKs, and zero recurring server overhead—allowing us to ship them completely free.",
  },
  {
    q: "Why are Cogify macOS binaries 1.2 MB to 5.0 MB while alternatives are 100 MB to 1.2 GB?",
    a: "Many cross-platform utilities bundle an entire Chromium browser (Electron/CEF) or legacy runtime frameworks inside every app, consuming 150 MB+ on disk and 500 MB+ of RAM before you open a single file. Cogify apps are written directly against macOS's native C++20, Swift 6, AppKit, IOKit, and PDFKit frameworks that already reside in macOS system memory.",
  },
  {
    q: "Are all Cogify macOS apps signed and notarized by Apple?",
    a: "Yes. Every Cogify macOS `.DMG` release and App Store build is cryptographically signed and notarized under verified Apple Developer ID Shubham Sharma (#1643497398) and scanned by Apple Gatekeeper for zero malware or adware.",
  },
  {
    q: "Can I use Cogify utilities alongside my existing macOS apps?",
    a: "Yes. Because Cogify apps are self-contained `.app` bundles that install zero root kernel extensions (`.kext`) and zero persistent background launch daemons, you can run them side-by-side with any existing workflow.",
  },
];

export default function CompareHubPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "COGIFY macOS Utility Comparison Guides (2026)",
    description:
      "Side-by-side architectural and pricing comparisons between Cogify native macOS utilities and commercial alternatives.",
    numberOfItems: COMPARISON_GUIDES.length,
    itemListElement: COMPARISON_GUIDES.map((guide, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: guide.h1Title,
      url: `https://cogify.me/compare/${guide.slug}`,
    })),
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#060911] text-zinc-900 dark:text-white selection:bg-indigo-500 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* Hero Header */}
      <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-16 border-b border-zinc-200/80 dark:border-white/[0.06] overflow-hidden">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[380px] bg-gradient-to-b from-indigo-500/12 via-cyan-500/5 to-transparent"
          aria-hidden="true"
        />

        <div className="relative max-w-6xl mx-auto px-6">
          <Breadcrumbs
            items={[{ label: "macOS Comparisons & Benchmarks", href: "/compare" }]}
            className="mb-6"
          />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-widest mb-5">
            <Scale className="w-3.5 h-3.5" />
            <span>2026 Apple Silicon Engineering Benchmarks</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-950 dark:text-white leading-[1.12] text-balance max-w-4xl">
            COGIFY vs. Legacy Commercial Suites &amp; Subscription Bloatware
          </h1>

          <p className="mt-5 text-base sm:text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl text-pretty">
            Transparent, metric-driven comparisons measuring binary size, unified RAM footprint, cold-launch latency, telemetry behavior, and 3-year subscription cost across macOS and Safari.
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3.5 max-w-4xl tabular-nums">
            <div className="rounded-2xl bg-white dark:bg-[#0b0f17] border border-zinc-200/90 dark:border-white/[0.08] p-4">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                <DollarSign className="w-3.5 h-3.5" /> $1,115+ Saved
              </div>
              <div className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1">
                3-Year License Cost ($0 Forever)
              </div>
            </div>

            <div className="rounded-2xl bg-white dark:bg-[#0b0f17] border border-zinc-200/90 dark:border-white/[0.08] p-4">
              <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400">
                <HardDrive className="w-3.5 h-3.5" /> 29.7 MB Total
              </div>
              <div className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1">
                All 7 Native Cores vs 1.68 GB+
              </div>
            </div>

            <div className="rounded-2xl bg-white dark:bg-[#0b0f17] border border-zinc-200/90 dark:border-white/[0.08] p-4">
              <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-600 dark:text-cyan-400">
                <Cpu className="w-3.5 h-3.5" /> 92% Less RAM
              </div>
              <div className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1">
                Zero Electron / CEF Web Runtimes
              </div>
            </div>

            <div className="rounded-2xl bg-white dark:bg-[#0b0f17] border border-zinc-200/90 dark:border-white/[0.08] p-4">
              <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-900 dark:text-white">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> 0 Bytes Sent
              </div>
              <div className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1">
                100% Air-Gapped Local Execution
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Calculator & Full Guide Grid */}
      <ComparisonHubSection compact={false} />

      {/* Hub FAQ */}
      <FaqSection
        badge="Benchmark Methodology & Licensing FAQ"
        title="Frequently Asked Questions About Cogify vs. Commercial Alternatives"
        subtitle="How we benchmark Apple Silicon memory, binary size, and privacy across macOS utilities."
        faqs={HUB_FAQS}
      />

      {/* Author & Ecosystem Mesh */}
      <AuthorBio contextLabel="Benchmarked & Authored by Shubham Sharma" />
    </div>
  );
}
