import React from "react";
import type { Metadata } from "next";
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
    q: "Why are Cogify macOS binaries 1.2 MB to 7.8 MB while alternatives are 100 MB to 1.2 GB?",
    a: "Many cross-platform utilities bundle an entire Chromium browser (Electron/CEF) or legacy runtime frameworks inside every app, consuming 150 MB+ on disk and 500 MB+ of RAM before you open a single file. Cogify apps are written directly against macOS's native C++20, Swift 6, AppKit, IOKit, and PDFKit frameworks that already reside in macOS system memory.",
  },
  {
    q: "Are all Cogify macOS apps signed and notarized by Apple?",
    a: "Yes. Every Cogify macOS .DMG release and App Store build is cryptographically signed and notarized under verified Apple Developer ID Shubham Sharma (#1643497398) and scanned by Apple Gatekeeper for zero malware or adware.",
  },
  {
    q: "Can I use Cogify utilities alongside my existing macOS apps?",
    a: "Yes. Because Cogify apps are self-contained .app bundles that install zero root kernel extensions (.kext) and zero persistent background launch daemons, you can run them side-by-side with any existing workflow.",
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
    <div className="min-h-screen bg-[#f5f5f5] dark:bg-[#0b0b0d] text-black dark:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* Hero Header */}
      <section className="pt-28 pb-12 sm:pt-36 sm:pb-14 border-b border-black/[0.07] dark:border-white/[0.08]">
        <div className="max-w-[920px] mx-auto px-6">
          <Breadcrumbs
            items={[{ label: "macOS Comparisons & Benchmarks", href: "/compare" }]}
            className="mb-6"
          />

          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-black/45 dark:text-white/45 mb-3">
            2026 Apple Silicon Benchmarks
          </p>

          <h1 className="text-[34px] sm:text-[52px] font-semibold tracking-[-0.035em] leading-[1.08] text-black dark:text-white max-w-3xl">
            Native craft vs.{" "}
            <span className="font-serif-accent text-[1.06em]">subscription bloat.</span>
          </h1>

          <p className="mt-4 text-[16px] sm:text-[18px] text-black/60 dark:text-white/60 leading-[1.6] max-w-2xl">
            Transparent, metric-driven comparisons measuring binary size, unified RAM footprint, cold-launch latency, telemetry behavior, and 3-year subscription cost across macOS and Safari.
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 tabular-nums">
            <div className="rounded-[18px] bg-white dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.08] p-4">
              <div className="text-[11px] font-medium uppercase tracking-wider text-black/45 dark:text-white/45">
                3-Year Cost
              </div>
              <div className="text-[16px] font-semibold text-emerald-700 dark:text-emerald-400 mt-1">
                $1,115+ Saved
              </div>
            </div>

            <div className="rounded-[18px] bg-white dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.08] p-4">
              <div className="text-[11px] font-medium uppercase tracking-wider text-black/45 dark:text-white/45">
                All 7 Binaries
              </div>
              <div className="text-[16px] font-semibold text-black dark:text-white mt-1">
                32.5 MB Total
              </div>
            </div>

            <div className="rounded-[18px] bg-white dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.08] p-4">
              <div className="text-[11px] font-medium uppercase tracking-wider text-black/45 dark:text-white/45">
                Unified Memory
              </div>
              <div className="text-[16px] font-semibold text-black dark:text-white mt-1">
                92% Less RAM
              </div>
            </div>

            <div className="rounded-[18px] bg-white dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.08] p-4">
              <div className="text-[11px] font-medium uppercase tracking-wider text-black/45 dark:text-white/45">
                Telemetry
              </div>
              <div className="text-[16px] font-semibold text-black dark:text-white mt-1">
                0 Bytes Sent
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Calculator & Full Guide Grid */}
      <ComparisonHubSection compact={false} />

      {/* Hub FAQ */}
      <FaqSection
        badge="Benchmark FAQ"
        title="Frequently Asked Questions"
        subtitle="How we benchmark Apple Silicon memory, binary size, and privacy across macOS utilities."
        faqs={HUB_FAQS}
      />

      <AuthorBio contextLabel="Benchmarked & Authored by Shubham Sharma" />
    </div>
  );
}
