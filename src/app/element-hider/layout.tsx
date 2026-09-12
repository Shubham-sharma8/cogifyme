import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Element Hider — Hide Anything | Browse Your Way Safari Extension | COGIFY",
  description:
    "Hide anything that gets in your way. Clean up webpages, remove distractions, and make Safari feel like your browser again. 100% free Safari extension for iOS, iPadOS & macOS with zero telemetry.",
  keywords: [
    "element",
    "hide",
    "cleaner",
    "safari",
    "web",
    "website",
    "block",
    "remove",
    "clutter",
    "distraction",
    "focus",
    "customize",
    "browse",
    "safari extension",
    "hide elements safari",
    "remove banners safari",
    "ad blocker alternative mac",
    "distraction-free safari ios",
    "Cogify",
  ],
  alternates: {
    canonical: "https://cogify.me/element-hider",
  },
  openGraph: {
    title: "Element Hider — Hide Anything | Browse Your Way",
    description:
      "Hide anything that gets in your way. Clean up webpages, remove distractions, and make Safari feel like your browser again. 100% free with zero tracking.",
    url: "https://cogify.me/element-hider",
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://cogify.me/brand/Element-Hider/icon.png",
        width: 1024,
        height: 1024,
        alt: "Element Hider — Hide Anything Safari Extension",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Element Hider — Hide Anything | Browse Your Way",
    description:
      "Hide anything that gets in your way. Clean up webpages, remove distractions, and make Safari feel like your browser again.",
    images: ["https://cogify.me/brand/Element-Hider/icon.png"],
  },
};

export default function ElementHiderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Element Hider – Hide Anything",
        "operatingSystem": "iOS 16+, iPadOS 16+, macOS (Safari Web Extension)",
        "applicationCategory": "UtilitiesApplication",
        "applicationSubCategory": "ProductivityApplication",
        "description":
          "Hide anything that gets in your way. Clean up webpages, remove distractions, and make Safari feel like your browser again. Zero telemetry and 100% on-device rule execution.",
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
            "name": "Element Hider Safari Extension",
            "item": "https://cogify.me/element-hider",
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
