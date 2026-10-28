import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Colour Invert — Smart Dark Mode for Safari on Mac",
  description: siteConfig.invert.shortDescription,
  keywords: [
    "colour",
    "invert",
    "dark",
    "mode",
    "safari",
    "colors",
    "contrast",
    "brightness",
    "night",
    "web",
    "website",
    "accessibility",
    "screen",
    "filter",
    "safari extension",
    "safari dark mode extension",
    "smart invert safari",
    "high contrast safari mac",
    "night reading safari ios",
    "Cogify",
    "cogify.me",
  ],
  alternates: {
    canonical: "https://cogify.me/invert",
  },
  openGraph: {
    title: "Colour Invert — Smart Dark Mode for Safari on Mac | COGIFY",
    description: siteConfig.invert.shortDescription,
    url: "https://cogify.me/invert",
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://cogify.me/brand/Invert/Mac/App.png",
        width: 2200,
        height: 1271,
        alt: "Colour Invert — Invert the Web Safari Extension",
      },
      {
        url: "https://cogify.me/brand/Invert/icon.png",
        width: 1024,
        height: 1024,
        alt: "Colour Invert — Invert the Web Safari Extension",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Colour Invert — Smart Dark Mode for Safari on Mac | COGIFY",
    description: siteConfig.invert.shortDescription,
    images: ["https://cogify.me/brand/Invert/Mac/App.png"],
  },
};

export default function ColourInvertLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://cogify.me/invert#software",
        "name": "Colour Invert – Invert the Web",
        "url": "https://cogify.me/invert",
        "downloadUrl": "https://apps.apple.com/in/app/colour-invert/id6811389278",
        "installUrl": "https://apps.apple.com/in/app/colour-invert/id6811389278",
        "image": "https://cogify.me/brand/Invert/icon.png",
        "screenshot": [
          "https://cogify.me/brand/Invert/Mac/App.png",
          "https://cogify.me/brand/Invert/Ios/App_Home.png",
        ],
        "operatingSystem": "macOS Safari, iOS 16+, iPadOS 16+ (Safari Web Extension)",
        "applicationCategory": "UtilitiesApplication",
        "applicationSubCategory": "AccessibilityApplication",
        "isAccessibleForFree": true,
        "description":
          "Flip webpage colors instantly. Reduce harsh brightness, change the way websites look, and browse with a completely different visual experience. Zero telemetry, 0 bytes transmitted, and 100% on-device CSS filter execution.",
        "featureList": [
          "Smart Invert Mode (Darkens Webpages While Preserving Photos & Videos)",
          "Soft Invert Warm Night-Reading Palette & Full High-Contrast Invert",
          "Real-Time Brightness, Contrast & Sepia Warmth Sliders",
          "Per-Website Automatic Memory & Instant Toggle",
          "100% On-Device CSS Filter Execution with Zero Tracking",
        ],
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://apps.apple.com/in/app/colour-invert/id6811389278",
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://cogify.me/#organization",
          "name": "COGIFY",
          "url": "https://cogify.me",
        },
        "softwareVersion": "1.0",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
