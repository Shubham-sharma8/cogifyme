import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { FindyLandingView } from "@/components/findy/findy-landing-view";
import { FINDY_FAQS } from "@/components/findy/findy-data";

export const metadata: Metadata = {
  title: {
    absolute:
      "Findy for Mac (v1.2 • Open Source) — Instant Plain-English File Search, Space Lens Treemap, Vision OCR & Smart Clean Up | COGIFY",
  },
  description:
    "Findy v1.2 (Build 2) is an open-source (MIT) 4.5 MB native Swift & SwiftUI macOS workspace featuring Plain-English Search filter chips (⌘K), Space Lens storage treemap (⌘4), Trash-safe Smart Clean Up (⌘5), SHA-256 + Apple Vision Duplicate Finder (⌘6), 'Downloaded From' browser provenance, File Shelf drop basket (⌘7), Regex Batch Rename (⇧⌘R), and 100% on-device Vision OCR (⌘I).",
  keywords: [
    "Findy Mac",
    "Findy macOS file search",
    "plain English file search Mac",
    "Space Lens macOS free",
    "macOS storage treemap open source",
    "Apple Vision OCR screenshot search Mac",
    "SHA-256 duplicate finder Mac free",
    "kMDItemWhereFroms downloaded from Mac app",
    "File Shelf drop basket macOS",
    "open source Finder alternative Swift",
    "Spotlight alternative macOS",
  ],
  alternates: {
    canonical: `${siteConfig.url}/findy`,
  },
  openGraph: {
    title:
      "meet findy v1.2 (open source). — plain-english file search, space lens & smart clean up for your mac.",
    description:
      "Type how you think ('pdfs this week over 1mb'), see where your gigabytes went with Space Lens, group browser downloads by source website, and extract text inside screenshots with 100% local Apple Vision OCR.",
    url: `${siteConfig.url}/findy`,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/brand/Findy/01-findy-home-overview.png`,
        width: 2880,
        height: 2080,
        alt: "Findy for macOS — Instant Plain-English File Search, Space Lens Storage Treemap, and Non-Destructive Cleanup",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "meet findy v1.2 (open source). — plain-english file search & space lens for macOS.",
    description:
      "4.5 MB open-source (MIT) Swift & SwiftUI macOS app: plain-English filter chips (⌘K), Space Lens treemap (⌘4), Trash-safe Clean Up (⌘5), SHA-256 + Vision Duplicates (⌘6), Downloaded From & local Vision OCR (⌘I).",
    images: [`${siteConfig.url}/brand/Findy/01-findy-home-overview.png`],
    creator: "@cogifyme",
  },
};

export default function FindyPage() {
  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${siteConfig.url}/findy#software`,
    name: "Findy",
    alternateName:
      "Findy — Instant Plain-English File Search, Space Lens Treemap & Non-Destructive Cleanup for macOS",
    operatingSystem:
      "macOS 14.0 Sonoma, macOS 15.0 Sequoia, macOS 26 Tahoe (Apple Silicon & Intel)",
    applicationCategory: "UtilitiesApplication",
    applicationSubCategory: "File Search, Disk Space Analyzer & Cleanup Utility",
    softwareVersion: "1.2",
    fileSize: "4.5 MB",
    license: "https://opensource.org/licenses/MIT",
    codeRepository: "https://github.com/Shubham-sharma8/findy",
    downloadUrl:
      "https://github.com/Shubham-sharma8/findy/releases/download/v1.2/Findy.dmg",
    installUrl: `${siteConfig.url}/Findy.dmg`,
    releaseNotes: "https://github.com/Shubham-sharma8/findy/releases/tag/v1.2",
    datePublished: "2026-11-10",
    screenshot: [
      `${siteConfig.url}/brand/Findy/01-findy-home-overview.png`,
      `${siteConfig.url}/brand/Findy/03-findy-space-lens.png`,
      `${siteConfig.url}/brand/Findy/09-findy-dmg-installer-preview.png`,
    ],
    featureList: [
      "Plain-English Search (⌘K / ⌘F) parsing file types, dates, byte sizes, and folders into live removable filter chips",
      "Hybrid Indexing Engine combining macOS Spotlight (NSMetadataQuery) with a concurrent local FileManager directory walker",
      "Space Lens (⌘4 / ⇧⌘L) interactive squarified treemap, Storage by Home Folder breakdown, and Top 25 Largest Files",
      "Non-Destructive Smart Clean Up (⌘5) moving old installers, forgotten downloads, and unused apps strictly to macOS Trash",
      "Cryptographic SHA-256 Exact Duplicate Finder + Apple Vision Look-Alike Photo Clustering (⌘6) with automatic Keep protection",
      "'Downloaded From' Browser Provenance grouping ~/Downloads across 40+ origin websites via kMDItemWhereFroms + 370×460 Menu Bar Popover",
      "Multi-Folder File Shelf Drop Basket (⌘7 / ⇧⌘B) + 5-Mode Batch Rename Studio (⇧⌘R) with Regex and 1-click Undo (⌥⌘Z)",
      "Right-Hand File Inspector (⌘I) with 100% On-Device Apple Vision OCR (VNRecognizeTextRequest) and Native Finder Color Tags (0–7)",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/findy`,
    },
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FINDY_FAQS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Cogify",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: `${siteConfig.url}/products`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Findy for Mac",
        item: `${siteConfig.url}/findy`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareJsonLd, faqJsonLd, breadcrumbJsonLd]),
        }}
      />
      <FindyLandingView />
    </>
  );
}
