import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { TaskyfyLandingView } from "@/components/taskyfy/taskyfy-landing-view";
import { TASKYFY_FAQS } from "@/components/taskyfy/taskyfy-data";

export const metadata: Metadata = {
  title: {
    absolute:
      "Taskyfy — Minimal macOS Telemetry Studio & Plain-English Activity Monitor | Cogify",
  },
  description:
    "Every metric on your Mac, clear in a second. Grouped processes, 230+ plain-English daemon explanations, 15-min memory leak detection, 7-day RAM advisor, live port radar, and 30-day SQLite WAL history. Native Swift. Open Source.",
  keywords: [
    "Taskyfy",
    "Taskyfy Mac",
    "macOS Activity Monitor alternative",
    "Apple Silicon system monitor",
    "macOS process explorer",
    "Mac memory leak detector",
    "macOS port scanner GUI",
    "SwiftUI telemetry app",
    "open source Mac monitor",
    "what is mds_stores WindowServer Mac",
    "7-day RAM advisor macOS",
  ],
  alternates: {
    canonical: `${siteConfig.url}/taskyfy`,
  },
  openGraph: {
    title:
      "Taskyfy — Minimal macOS Telemetry Studio & Plain-English Activity Monitor | Cogify",
    description:
      "Every metric on your Mac, clear in a second. Grouped processes, 230+ plain-English daemon explanations, 15-min memory leak detection, 7-day RAM advisor, live port radar, and 30-day SQLite WAL history. Native Swift. Open Source.",
    url: `${siteConfig.url}/taskyfy`,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/brand/Taskyfy/01-taskyfy-overview-hero.png`,
        width: 2704,
        height: 1744,
        alt: "Taskyfy v2.0 — Minimal macOS Telemetry Studio & Plain-English Activity Monitor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "meet taskyfy v2.0 (open source). — know everything running on your mac in plain english.",
    description:
      "3.2 MB open-source (MIT) native Swift macOS telemetry studio: grouped app trees, 230+ plain-English daemon explanations, 15-min memory leak watch, 7-day RAM advisor, live port radar (:3000) & 30-day SQLite WAL history.",
    images: [`${siteConfig.url}/brand/Taskyfy/01-taskyfy-overview-hero.png`],
    creator: "@cogifyme",
  },
};

export default function TaskyfyPage() {
  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${siteConfig.url}/taskyfy#software`,
    name: "Taskyfy",
    alternateName:
      "Taskyfy — Minimal macOS Telemetry Studio & Plain-English Activity Monitor",
    operatingSystem:
      "macOS 14.0 Sonoma, macOS 15.0 Sequoia, macOS 26 Tahoe (Apple Silicon & Intel)",
    applicationCategory: "UtilitiesApplication",
    applicationSubCategory:
      "System Telemetry, Activity Monitor & Process Inspector",
    softwareVersion: "2.0",
    fileSize: "3.2 MB",
    license: "https://opensource.org/licenses/MIT",
    codeRepository: "https://github.com/Shubham-sharma8/taskyfy",
    downloadUrl:
      "https://github.com/Shubham-sharma8/taskyfy/releases/download/v2.0/Taskyfy.dmg",
    installUrl: `${siteConfig.url}/Taskyfy.dmg`,
    releaseNotes: "https://github.com/Shubham-sharma8/taskyfy/releases/tag/v2.0",
    datePublished: "2026-11-10",
    screenshot: [
      `${siteConfig.url}/brand/Taskyfy/01-taskyfy-overview-hero.png`,
      `${siteConfig.url}/brand/Taskyfy/02-taskyfy-processes-grouped.png`,
      `${siteConfig.url}/brand/Taskyfy/03-taskyfy-memory-advisor.png`,
      `${siteConfig.url}/brand/Taskyfy/04-taskyfy-energy-watts.png`,
      `${siteConfig.url}/brand/Taskyfy/05-taskyfy-sensors-thermals.png`,
      `${siteConfig.url}/brand/Taskyfy/06-taskyfy-network-port-radar.png`,
      `${siteConfig.url}/brand/Taskyfy/07-taskyfy-history-sqlite-wal.png`,
      `${siteConfig.url}/brand/Taskyfy/08-taskyfy-command-palette.png`,
    ],
    featureList: [
      "Overview Telemetry Deck with Apple Silicon P/E Core Matrix, Unified Memory, IOKit GPU & System Wattage",
      "Grouped Applications & Process Tree rolling up helper processes under their parent app",
      "Built-in Plain-English Encyclopedia explaining 230+ macOS daemons with Safe-to-Quit verdicts",
      "Unified Memory, 7-Day Hardware RAM Sizing Advisor, Browser Tab Memory Relief & 15-Minute Memory Leak Watch",
      "Real-Time System Power Draw (Watts), Battery Health, Cycles & Per-App Wakeups/s Energy Impact",
      "36+ Apple Silicon Hardware Die Sensors (IOKit HID & AppleSMC) + Cooling Fan RPM & Thermal Headroom",
      "Network & NVMe Disk I/O + Live Listening TCP/UDP Port Radar (:3000, :5432, :8080) with SecStaticCode verification",
      "30-Day Local SQLite WAL Historical Time Machine (1H / 24H / 7D / 30D) with 1-Click JSON/CSV Export",
      "Instant ⌘K Command Palette & ⌥⌘T Global Menu Bar Telemetry Popover",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/taskyfy`,
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
    mainEntity: TASKYFY_FAQS.map((item) => ({
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
        name: "Taskyfy for Mac",
        item: `${siteConfig.url}/taskyfy`,
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
      <TaskyfyLandingView />
    </>
  );
}
