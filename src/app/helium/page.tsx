import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { HeliumLandingView } from "@/components/helium/helium-landing-view";
import { HELIUM_FAQS } from "@/components/helium/helium-data";

export const metadata: Metadata = {
  title: {
    absolute:
      "Helium for Mac (v0.0.3 • Open Source) — Unlimited Pooled Google Drive, S3, R2, WebDAV & NAS Volume (/Volumes/Helium • 0 B on Disk) | COGIFY",
  },
  description:
    "Helium v0.0.3 (Build 3) is an open-source (MIT) native Swift 6.0 macOS app with GitHub Releases Auto-Updater that mounts /Volumes/Helium in Finder pooling Google Drives (64 MiB RAID-0 striping) and 25+ S3, R2, B2, WebDAV, SFTP, SMB & External SSD presets with 5-Step Safe-Write Verification, Scheduled Add-Only Backups (⌘⇧K), and Time Travel (⌘⇧Y).",
  keywords: siteConfig.helium.keywords,
  alternates: {
    canonical: `${siteConfig.url}/helium`,
  },
  openGraph: {
    title:
      "meet helium v0.0.3 (open source). — unlimited pooled space for your mac, without buying a new ssd.",
    description:
      "100% open-source (MIT) macOS app with built-in Auto-Updater: pool unlimited Google Drive accounts + 25+ S3, R2, WebDAV, SFTP, and SMB presets into /Volumes/Helium in Finder with 0 B on your Mac SSD.",
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
      "meet helium v0.0.3 (open source). — unlimited pooled space for your mac, without buying a new ssd.",
    description:
      "Open-source (MIT) macOS app mounting /Volumes/Helium in Finder pooling Google Drives, S3, R2, WebDAV & NAS into one volume with 0 B used on your Mac SSD.",
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
    alternateName: "Helium — Open-Source Multi-Protocol & Multi-Google-Drive Pool Volume for macOS",
    operatingSystem: "macOS 15.4+, macOS 26 Tahoe (Apple Silicon & Intel)",
    applicationCategory: "UtilitiesApplication",
    applicationSubCategory: "Cloud Storage & Virtual Filesystem",
    softwareVersion: "0.0.3",
    fileSize: "8.4 MB",
    license: "https://opensource.org/licenses/MIT",
    codeRepository: "https://github.com/Shubham-sharma8/helium",
    downloadUrl:
      "https://github.com/Shubham-sharma8/helium/releases/download/v0.0.3/Helium-0.0.3.dmg",
    installUrl: `${siteConfig.url}/Helium.dmg`,
    releaseNotes: `${siteConfig.url}/helium/releases`,
    datePublished: "2026-11-10",
    screenshot: [
      `${siteConfig.url}/brand/Helium/02-helium-hero-finder-zero-bytes.png`,
      `${siteConfig.url}/brand/Helium/03-helium-multi-drive-pool.png`,
      `${siteConfig.url}/brand/Helium/01-helium-editorial-features.png`,
      `${siteConfig.url}/brand/Helium/04-helium-dmg-installer-preview.png`,
    ],
    featureList: [
      "Mounts a real local volume at /Volumes/Helium in macOS Finder (0 B on disk)",
      "Multi-Protocol & Multi-Provider Cloud Support (25+ presets: Google Drive Pool, S3, R2, B2, Wasabi, WebDAV, SFTP/SSH, SMB, BYOK OAuth, External SSD)",
      "5-Step Safe-Write SHA-256 Canary Verification with 0 B residue cleanup",
      "Scheduled Add-Only Mac Folder Backups (⌘⇧K) with live exclusion preview & 14-run history dots",
      "Time Travel: Point-in-Time Pool Snapshots & 'Then vs. Now' Diffing (⌘⇧Y)",
      "Right-Hand File Inspector & Non-Destructive Conflict Resolution (Keep Both / Use Newer)",
      "Activity & Health (⌘⇧A), HTTP Range 206 Throughput Chart, Executable Command Palette (⌃⌥O) & Privacy Network Contact Map",
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
