import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Element Hider — Hide Webpage Distractions Safari",
  description: siteConfig.elementHider.shortDescription,
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
    title: "Element Hider — Hide Webpage Distractions Safari | COGIFY",
    description: siteConfig.elementHider.shortDescription,
    url: "https://cogify.me/element-hider",
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://cogify.me/brand/Element-Hider/Home_Mac.png",
        width: 2200,
        height: 1270,
        alt: "Element Hider — Hide Anything Safari Extension",
      },
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
    title: "Element Hider — Hide Webpage Distractions Safari | COGIFY",
    description: siteConfig.elementHider.shortDescription,
    images: ["https://cogify.me/brand/Element-Hider/Home_Mac.png"],
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
        "@id": "https://cogify.me/element-hider#software",
        "name": "Element Hider – Hide Anything",
        "url": "https://cogify.me/element-hider",
        "downloadUrl": "https://apps.apple.com/in/app/element-hider/id6811377087",
        "installUrl": "https://apps.apple.com/in/app/element-hider/id6811377087",
        "image": "https://cogify.me/brand/Element-Hider/icon.png",
        "screenshot": [
          "https://cogify.me/brand/Element-Hider/Home_Mac.png",
          "https://cogify.me/brand/Element-Hider/Home.png",
        ],
        "operatingSystem": "iOS 16+, iPadOS 16+, macOS (Safari Web Extension)",
        "applicationCategory": "UtilitiesApplication",
        "applicationSubCategory": "ProductivityApplication",
        "isAccessibleForFree": true,
        "description":
          "Hide anything that gets in your way. Clean up webpages, remove distractions, and make Safari feel like your browser again. Zero telemetry and 100% on-device rule execution.",
        "featureList": [
          "Point-and-Tap Interactive DOM Element Picker",
          "Hide Sticky Headers, Sidebars, Popups & Floating Bars",
          "Session-Only or Permanent Per-Domain Hiding Rules",
          "Instant Undo, Restore & Per-Website Pause Controls",
          "100% Local Safari WebKit Execution with Zero Telemetry",
        ],
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://apps.apple.com/in/app/element-hider/id6811377087",
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
