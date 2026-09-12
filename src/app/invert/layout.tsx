import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Colour Invert — Invert the Web | Safari Extension for Dark Mode & Contrast | COGIFY",
  description:
    "Flip webpage colors instantly. Reduce harsh brightness, change the way websites look, and browse with a completely different visual experience. 100% free Safari extension for macOS, iOS & iPadOS with zero telemetry.",
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
    title: "Colour Invert — Invert the Web | Safari Extension",
    description:
      "Flip webpage colors instantly. Reduce harsh brightness, change the way websites look, and browse with a completely different visual experience. 100% free with zero tracking.",
    url: "https://cogify.me/invert",
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
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
    title: "Colour Invert — Invert the Web | Safari Extension",
    description:
      "Flip webpage colors instantly. Reduce harsh brightness, change the way websites look, and browse with a completely different visual experience.",
    images: ["https://cogify.me/brand/Invert/icon.png"],
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
        "name": "Colour Invert – Invert the Web",
        "operatingSystem": "macOS Safari, iOS 16+, iPadOS 16+ (Safari Web Extension)",
        "applicationCategory": "UtilitiesApplication",
        "applicationSubCategory": "AccessibilityApplication",
        "description":
          "Flip webpage colors instantly. Reduce harsh brightness, change the way websites look, and browse with a completely different visual experience. Zero telemetry, 0 bytes transmitted, and 100% on-device CSS filter execution.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
        },
        "publisher": {
          "@type": "Organization",
          "name": "COGIFY",
          "url": "https://cogify.me",
        },
        "softwareVersion": "1.0",
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://cogify.me",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Products",
            "item": "https://cogify.me/#products",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Colour Invert Safari Extension",
            "item": "https://cogify.me/invert",
          },
        ],
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
