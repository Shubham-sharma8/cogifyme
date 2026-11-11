import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { WifyyLandingView } from "@/components/wifyy/wifyy-landing-view";
import { WIFYY_FAQS } from "@/components/wifyy/wifyy-data";

export const metadata: Metadata = {
  title:
    "Wifyy for macOS — 4-Hop Wi-Fi & Call Reliability Engine in Your Menu Bar | COGIFY",
  description:
    "Wifyy is a real-time 4-hop Wi-Fi & call reliability engine in your macOS menu bar. Isolate call lag across Mac radio, Wi-Fi RF airwaves, router, and upstream ISP in parallel. Featuring ITU-T Call MOS, 5-min pre-call calendar checks, upload bufferbloat detection, and 100% local privacy (0 telemetry).",
  keywords: [
    "Wifyy",
    "Wifyy macOS",
    "macOS Wi-Fi analyzer",
    "4-hop network fault isolation mac",
    "Call MOS score macOS",
    "Zoom call lag detector mac",
    "upload bufferbloat nettop mac",
    "Apple networkQuality RPM",
    "local Wi-Fi menu bar tool",
    "Cogify Wifyy",
  ],
  alternates: {
    canonical: `${siteConfig.url}/wifyy`,
  },
  openGraph: {
    title:
      "Wifyy for macOS — 4-Hop Wi-Fi & Call Reliability Engine in Your Menu Bar",
    description:
      "Know why your call dropped before your team does. 4-hop parallel fault isolation, ITU-T Call MOS, 5-minute pre-call calendar verification, upload bufferbloat attribution, and 0 bytes cloud telemetry. Free & Open Source (MIT).",
    url: `${siteConfig.url}/wifyy`,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/wifyy/04-wifyy-studio-timeline.png`,
        width: 2240,
        height: 1560,
        alt: "Wifyy Studio workspace on macOS — 4-Hop Fault Isolation Matrix, 4.40 Call MOS, and Connection Inspector",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Wifyy for macOS — 4-Hop Wi-Fi & Call Reliability Engine",
    description:
      "A real-time 4-hop Wi-Fi & call reliability engine in your macOS menu bar. 4.40 Call MOS, 5-minute pre-call check, 1-click meeting join, and 100% local air-gapped privacy.",
    images: [`${siteConfig.url}/images/wifyy/04-wifyy-studio-timeline.png`],
  },
};

export default function WifyyPage() {
  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Wifyy",
    operatingSystem:
      "macOS 14.0+ (Sonoma, Sequoia, Tahoe 26 — Universal Apple Silicon & Intel)",
    applicationCategory: "UtilitiesApplication",
    applicationSubCategory: "Networking & Telemetry Studio",
    softwareVersion: "1.0.0",
    fileSize: "2.9MB",
    downloadUrl:
      "https://github.com/Shubham-sharma8/wifyy/releases/download/v1.0.0/Wifyy.dmg",
    installUrl:
      "https://github.com/Shubham-sharma8/wifyy/releases/download/v1.0.0/Wifyy.dmg",
    codeRepository: "https://github.com/Shubham-sharma8/wifyy",
    license: "https://opensource.org/licenses/MIT",
    screenshot: [
      `${siteConfig.url}/images/wifyy/01-wifyy-hero-pulse-menu.png`,
      `${siteConfig.url}/images/wifyy/02-wifyy-spectrum-and-hop.png`,
      `${siteConfig.url}/images/wifyy/03-wifyy-calls-and-protection.png`,
      `${siteConfig.url}/images/wifyy/04-wifyy-studio-timeline.png`,
      `${siteConfig.url}/images/wifyy/07-wifyy-studio-app-traffic.png`,
      `${siteConfig.url}/images/wifyy/08-wifyy-studio-devices.png`,
    ],
    description:
      "A real-time 4-hop Wi-Fi & call reliability engine in your macOS menu bar. Simultaneously probes your Mac wireless radio, Wi-Fi RF airwaves, local router gateway, and upstream ISP anchors to isolate jitter, packet loss, and bufferbloat before video meetings drop.",
    featureList: [
      "4-Hop Parallel Fault Isolation (Mac Radio → Wi-Fi RF → Local Router → Upstream ISP)",
      "Real-Time ITU-T G.107 E-Model Call Quality Score (1.00–4.50 MOS) & 0–100 Stability Index",
      "5-Minute Pre-Call Readiness Check & 1-Click Meeting Join for Zoom, Meet, Teams & Webex",
      "Automatic Call Focus & Bandwidth Shielding (Auto-Shield Quiets Cloud Syncs During Calls)",
      "Bandwidth & Responsiveness (RPM) Speed Benchmark via /usr/bin/networkQuality",
      "Live 2.4 / 5 / 6 GHz RF Channel Spectrum Scanner with Clean Channel Recommendations",
      "Per-App Live Bandwidth & Bufferbloat Attribution via Native macOS nettop",
      "Subnet LAN Device Scanner (IP, Hostname, Normalized MAC, Vendor, Ping)",
      "7-Day Rolling Incident, AP Roam & Call History Studio with 1-Click Export",
      "100% Local & Privacy-First — Zero Cloud Accounts, Zero Analytics, Zero Telemetry",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://github.com/Shubham-sharma8/wifyy/releases/download/v1.0.0/Wifyy.dmg",
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
    mainEntity: WIFYY_FAQS.map((item) => ({
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
        name: "Home",
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
        name: "Wifyy",
        item: `${siteConfig.url}/wifyy`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <WifyyLandingView />
    </>
  );
}
