import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { AmpifyLandingView } from "@/components/ampify/ampify-landing-view";
import { AMPIFY_FAQS } from "@/components/ampify/ampify-data";

export const metadata: Metadata = {
  title:
    "Ampify for macOS — Smart 80% Charge Limit, Liquid-Wave Apple Devices & Live Watts",
  description:
    "Ampify is a native, open-source macOS battery longevity manager, Liquid-Wave Apple ecosystem battery monitor (iPhone, iPad, Watch, AirPods, Pencil, Siri Remote), and real-time 0.1 W per-app wattage telemetry utility.",
  keywords: [
    "Ampify",
    "Ampify macOS",
    "macOS 80 percent battery limit",
    "AlDente free open source alternative",
    "MacBook battery charge limiter",
    "Apple ecosystem battery monitor Mac",
    "per app wattage macOS",
    "Mach proc_pid_rusage watts Mac",
    "Smart Trip Top-Up MacBook",
    "Apple battery service price comparison",
    "Cogify Ampify",
  ],
  alternates: {
    canonical: `${siteConfig.url}/ampify`,
  },
  openGraph: {
    title:
      "Ampify for macOS — Smart 80% Charge Limit, Liquid-Wave Apple Devices & Live Watts",
    description:
      "Protect your MacBook battery at 80% on desk power, see every Apple device in custom Liquid-Wave silhouettes, and track live per-app watts down to 0.1 W. 100% Free & Open Source (MIT).",
    url: `${siteConfig.url}/ampify`,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/ampify/01-ampify-hero-popover-and-liquid-devices.png`,
        width: 2560,
        height: 1720,
        alt: "Ampify v1.6.3 on macOS — Menu Bar Popover, Liquid-Wave Apple Devices, and Live Per-App Wattage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ampify for macOS — Smart 80% Charge Limit, Liquid-Wave Apple Devices & Live Watts",
    description:
      "Hold your MacBook at 80% on desk power, view iPhone/iPad/Watch/AirPods in Liquid-Wave silhouettes, and inspect real per-app watts (0.1 W). Free & Open Source.",
    images: [
      `${siteConfig.url}/images/ampify/01-ampify-hero-popover-and-liquid-devices.png`,
    ],
  },
};

export default function AmpifyPage() {
  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Ampify",
    operatingSystem:
      "macOS 14.0+ (Sonoma, Sequoia, Tahoe — Universal Apple Silicon & Intel)",
    applicationCategory: "UtilitiesApplication",
    applicationSubCategory: "Battery Longevity & Ecosystem Power Telemetry",
    softwareVersion: "1.6.3",
    fileSize: "5.6MB",
    downloadUrl:
      "https://github.com/Shubham-sharma8/ampify/releases/download/v1.6.3/Ampify.dmg",
    installUrl:
      "https://github.com/Shubham-sharma8/ampify/releases/download/v1.6.3/Ampify.dmg",
    codeRepository: "https://github.com/Shubham-sharma8/ampify",
    license: "https://opensource.org/licenses/MIT",
    screenshot: [
      `${siteConfig.url}/images/ampify/01-ampify-hero-popover-and-liquid-devices.png`,
      `${siteConfig.url}/images/ampify/02-ampify-apple-devices-liquid-strip-and-health.png`,
      `${siteConfig.url}/images/ampify/03-ampify-whats-using-power-live-watts.png`,
      `${siteConfig.url}/images/ampify/04-ampify-desktop-widgets-showcase.png`,
      `${siteConfig.url}/images/ampify/05-ampify-80-percent-hold-and-power-flow.png`,
      `${siteConfig.url}/images/ampify/06-ampify-longevity-and-service-price.png`,
      `${siteConfig.url}/images/ampify/07-ampify-smart-trip-and-departure-topup.png`,
      `${siteConfig.url}/images/ampify/08-ampify-macos-ecosystem-devices-dashboard.png`,
    ],
    description:
      "Native, open-source macOS battery longevity manager, Apple ecosystem Liquid-Wave battery monitor, and real-time 0.1 W per-app wattage telemetry utility crafted for Apple Silicon & Intel MacBooks.",
    featureList: [
      "Smart 80% Charge Ceiling (70%, 80% Recommended, or 85%) with Direct Adapter Bypass Power",
      "Liquid-Wave Apple Ecosystem Device Strip (iPhone, iPad, Apple Watch, AirPods L/R/Case, Apple Pencil & Siri Remote)",
      "Real-Time Per-App Wattage ('What's using power') down to 0.1 W via Mach proc_pid_rusage with 1-Click Quit App",
      "Calendar-Aware Smart Trip Top-Up (EventKit local scan automatically tops up to 100% before flights or meetings)",
      "Live Power Flow Diagram (Adapter → System Load → Battery) with V, A, W & Cell Temperature Telemetry",
      "Battery Longevity Forecast & Official Apple Out-of-Warranty Service Price Comparison (USD, INR, EUR, GBP, CAD, AUD)",
      "Floating Translucent Desktop Widgets (Compact Pill & Expanded Ecosystem + Top Apps Widget)",
      "100% Local & Privacy-First — Zero Cloud Accounts, Zero Telemetry, Open Source (MIT)",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://github.com/Shubham-sharma8/ampify/releases/download/v1.6.3/Ampify.dmg",
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
    mainEntity: AMPIFY_FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
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
        name: "Ampify",
        item: `${siteConfig.url}/ampify`,
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
      <AmpifyLandingView />
    </>
  );
}
