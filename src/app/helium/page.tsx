import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { HeliumLandingView } from "@/components/helium/helium-landing-view";
import { HELIUM_FAQS } from "@/components/helium/helium-data";

export const metadata: Metadata = {
  title: {
    absolute:
      "Helium for Mac — Unlimited Pooled Google Drive Volume (/Volumes/Helium • 0 B on Disk) | COGIFY",
  },
  description:
    "Helium v0.0.1 mounts a real local drive at /Volumes/Helium in macOS Finder that pools multiple Google Drive accounts into one unified volume. Open 50 GB 4K videos, RAW catalogs & .dmg files in 0.8s with Zero bytes on disk.",
  keywords: siteConfig.helium.keywords,
  alternates: {
    canonical: `${siteConfig.url}/helium`,
  },
  openGraph: {
    title:
      "meet helium. — unlimited pooled space for your mac, without buying a new ssd.",
    description:
      "Pool unlimited Google Drive accounts into /Volumes/Helium in macOS Finder. Open 50 GB films, RAW photos, and .dmg images in 0.8s while using 0 bytes on your Mac SSD.",
    url: `${siteConfig.url}/helium`,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/brand/Helium/02-helium-hero-finder-zero-bytes.png`,
        width: 1440,
        height: 900,
        alt: "Helium for macOS — /Volumes/Helium in Finder pooling Google Drives with Zero bytes on disk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "meet helium. — unlimited pooled space for your mac, without buying a new ssd.",
    description:
      "Mount /Volumes/Helium in macOS Finder pooling multiple Google Drives into one volume with 0 B used on your Mac SSD.",
    images: [
      `${siteConfig.url}/brand/Helium/02-helium-hero-finder-zero-bytes.png`,
    ],
    creator: "@cogifyme",
  },
};

export default function HeliumPage() {
  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${siteConfig.url}/helium#software`,
    name: "Helium",
    alternateName: "Helium — Multi-Google-Drive Pool Volume for macOS",
    operatingSystem: "macOS 15.4+, macOS 26 Tahoe (Apple Silicon & Intel)",
    applicationCategory: "UtilitiesApplication",
    applicationSubCategory: "Cloud Storage & Virtual Filesystem",
    softwareVersion: "0.0.1",
    fileSize: "5.3 MB",
    downloadUrl:
      "https://github.com/Shubham-sharma8/cogifyme/releases/download/helium-v0.0.1/Helium.dmg",
    installUrl: `${siteConfig.url}/Helium.dmg`,
    releaseNotes:
      "Initial v0.0.1 (Build 1) universal macOS release with Multi-Account Google Drive Pool Engine, /Volumes/Helium APFS sparse placeholder mounting (0 B on disk), Whole-File Smart Placement, Cross-Account 256 MiB Segment Striping, and optional client-side zero-knowledge AES-256-GCM encryption.",
    datePublished: "2026-11-07",
    screenshot: [
      `${siteConfig.url}/brand/Helium/02-helium-hero-finder-zero-bytes.png`,
      `${siteConfig.url}/brand/Helium/03-helium-multi-drive-pool.png`,
      `${siteConfig.url}/brand/Helium/01-helium-editorial-features.png`,
      `${siteConfig.url}/brand/Helium/04-helium-dmg-installer-preview.png`,
    ],
    featureList: [
      "Mounts a real local volume at /Volumes/Helium in macOS Finder",
      "Pools unlimited Google Drive accounts into one unified cloud volume",
      "Zero bytes on disk (0 B on disk) via APFS sparse placeholders",
      "01 Whole-File Smart Placement & 02 Cross-Account 256 MiB Segment Striping",
      "Optional client-side zero-knowledge AES-256-GCM encryption",
      "30-day cloud recycle bin sync & 1-click offline pinning",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/helium`,
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
    mainEntity: HELIUM_FAQS.map((item) => ({
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
        name: "Helium for Mac",
        item: `${siteConfig.url}/helium`,
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
      <HeliumLandingView />
    </>
  );
}
