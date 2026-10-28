import React from "react";
import { siteConfig, SafariAppConfig, MacAppConfig } from "@/config/site";

function buildMacSoftwareSchema(app: MacAppConfig) {
  const screenshots = (app.screenshotsMac || []).map((s) => `${siteConfig.url}${s.image}`);

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${siteConfig.url}/${app.slug}#software`,
    name: app.name,
    alternateName: [app.shortName, `${app.shortName} for macOS`],
    operatingSystem: app.minMacOsVersion,
    applicationCategory:
      app.primaryCategory === "Developer Tools"
        ? "DeveloperApplication"
        : "UtilitiesApplication",
    applicationSubCategory: `${app.primaryCategory}, ${app.secondaryCategory}`,
    softwareVersion: app.version,
    fileSize: app.appSize,
    url: `${siteConfig.url}/${app.slug}`,
    downloadUrl: app.downloadUrl,
    installUrl: app.downloadUrl,
    image: `${siteConfig.url}${app.iconLarge || app.icon}`,
    screenshot: screenshots,
    description: app.fullDescription,
    featureList: app.features.map((f) => `${f.title}: ${f.description}`),
    author: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: app.downloadUrl,
      description: app.pricingModel,
    },
    isAccessibleForFree: true,
  };
}

function buildSafariSoftwareSchema(app: SafariAppConfig) {
  const screenshots = [
    ...(app.screenshotsMac || []),
    ...(app.screenshotsIos || []),
    ...(app.screenshotsIpad || []),
  ].map((s) => `${siteConfig.url}${s.image}`);

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${siteConfig.url}/${app.slug}#software`,
    name: app.name,
    alternateName: [app.shortName, `${app.shortName} Safari Extension`],
    operatingSystem: "macOS, iOS 16+, iPadOS 16+ (Safari)",
    applicationCategory:
      app.primaryCategory === "Developer Tools"
        ? "DeveloperApplication"
        : "UtilitiesApplication",
    applicationSubCategory: `${app.primaryCategory}, ${app.secondaryCategory}`,
    softwareVersion: app.version,
    url: `${siteConfig.url}/${app.slug}`,
    downloadUrl: app.appStoreUrl,
    installUrl: app.appStoreUrl,
    sameAs: [app.appStoreUrl],
    image: `${siteConfig.url}${app.icon}`,
    screenshot: screenshots,
    description: app.fullDescription,
    featureList: app.features.map((f) => `${f.title}: ${f.description}`),
    author: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: app.appStoreUrl,
      description: app.pricingModel,
    },
    isAccessibleForFree: true,
  };
}

export function RootJsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: "Cogify Technologies",
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/brand/logo_white.png`,
      width: 512,
      height: 512,
    },
    description: siteConfig.description,
    founder: {
      "@id": `${siteConfig.url}/#founder`,
    },
    sameAs: [
      siteConfig.appleDeveloperUrl,
      siteConfig.biodata.webUrl,
      siteConfig.ssb.webUrl,
      "https://github.com/Shubham-sharma8",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: siteConfig.contact.general,
        contactType: "customer support",
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        email: siteConfig.contact.enterprise,
        contactType: "sales",
        availableLanguage: ["English"],
      },
    ],
  };

  const founderPersonSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#founder`,
    name: "Shubham Sharma",
    jobTitle: "Founder & Systems Architect",
    url: `${siteConfig.url}/about`,
    worksFor: {
      "@id": `${siteConfig.url}/#organization`,
    },
    knowsAbout: [
      "macOS AppKit & Swift Systems Engineering",
      "C++20 Document & PDF Engines",
      "Safari Web Extensions & Content Blocker APIs",
      "Real-Time Client-Side Web Applications & Canvas Typography",
      "Zero-Telemetry Offline Software Architecture",
    ],
    sameAs: [
      siteConfig.appleDeveloperUrl,
      "https://github.com/Shubham-sharma8",
      siteConfig.url,
      siteConfig.biodata.webUrl,
      siteConfig.ssb.webUrl,
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: `${siteConfig.name} — High-Performance Native macOS, iOS, Safari Apps & Web Studios`,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    author: {
      "@id": `${siteConfig.url}/#founder`,
    },
    inLanguage: "en-US",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderPersonSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

export const JsonLdSchemas = RootJsonLd;

export function CatalogJsonLd() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "COGIFY Real-Time Web Solutions, Native Apps & Safari Extensions",
    description:
      "Complete suite of 14 free, zero-telemetry real-time web studios, native macOS apps, and iOS/iPadOS Safari extensions by COGIFY.",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: `${siteConfig.biodata.name} (biodata.cogify.me)`,
        url: `${siteConfig.url}/biodata`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `${siteConfig.ssb.name} (ssb.cogify.me)`,
        url: `${siteConfig.url}/ssb`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "EmDoc PDF Workstation",
        url: `${siteConfig.url}/products/emdoc`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: siteConfig.adBlocker.name,
        url: `${siteConfig.url}/ad-blocker`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: siteConfig.readereasy.name,
        url: `${siteConfig.url}/readereasy`,
      },
      {
        "@type": "ListItem",
        position: 6,
        name: siteConfig.webclear.name,
        url: `${siteConfig.url}/webclear`,
      },
      {
        "@type": "ListItem",
        position: 7,
        name: siteConfig.weblenses.name,
        url: `${siteConfig.url}/weblenses`,
      },
      {
        "@type": "ListItem",
        position: 8,
        name: siteConfig.elementHider.name,
        url: `${siteConfig.url}/element-hider`,
      },
      {
        "@type": "ListItem",
        position: 9,
        name: siteConfig.invert.name,
        url: `${siteConfig.url}/invert`,
      },
      {
        "@type": "ListItem",
        position: 10,
        name: siteConfig.lumenview.name,
        url: `${siteConfig.url}/lumenview`,
      },
      {
        "@type": "ListItem",
        position: 11,
        name: siteConfig.metricove.name,
        url: `${siteConfig.url}/metricove`,
      },
      {
        "@type": "ListItem",
        position: 12,
        name: siteConfig.netguard.name,
        url: `${siteConfig.url}/netguard`,
      },
      {
        "@type": "ListItem",
        position: 13,
        name: siteConfig.klipora.name,
        url: `${siteConfig.url}/klipora`,
      },
      {
        "@type": "ListItem",
        position: 14,
        name: siteConfig.showFreeSpace.name,
        url: `${siteConfig.url}/show-free-space`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
    />
  );
}

export function EmDocPageJsonLd() {
  const emdocSoftwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${siteConfig.url}/products/emdoc#software`,
    name: "EmDoc PDF Workstation",
    alternateName: ["EmDoc", "EmDoc for macOS", "EmDoc PDF Editor"],
    operatingSystem: "macOS 13.0 (Ventura, Sonoma, Sequoia) or later",
    processorRequirements: "Apple Silicon (M1, M2, M3, M4) & Intel 64-bit Universal Binary",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "PDF Editor, Document Management, Offline PDF Compressor",
    fileSize: "5.0MB",
    memoryRequirements: "45MB RAM",
    softwareVersion: siteConfig.emdoc.version,
    url: `${siteConfig.url}/products/emdoc`,
    downloadUrl: siteConfig.emdoc.downloadUrl,
    installUrl: siteConfig.emdoc.appStoreUrl,
    sameAs: [siteConfig.emdoc.appStoreUrl, siteConfig.emdoc.downloadUrl],
    image: `${siteConfig.url}/brand/emdoc-icon.png`,
    screenshot: siteConfig.emdoc.screenshots.map((s) => `${siteConfig.url}${s.image}`),
    description: siteConfig.emdoc.fullDescription,
    featureList: [
      "Ultra-lightweight 5.0 MB native macOS binary",
      "Minimal ~45 MB baseline RAM consumption",
      "100% Free Forever with all features unlocked",
      "100% Air-Gapped offline processing with zero telemetry",
      "Visual Page Organizer: drag-and-drop reorder, split, merge, extract, rotate",
      "Vector PDF Editing: freehand ink, highlighters, callouts, official rubber stamps",
      "On-Device Offline PDF Compression Engine (up to 75% reduction)",
      "Precision Watermark Engine & Dynamic Bates Numbering",
    ],
    author: {
      "@id": `${siteConfig.url}/#founder`,
    },
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: siteConfig.emdoc.appStoreUrl,
      description: "100% Free Forever for individuals — All features included.",
    },
    isAccessibleForFree: true,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(emdocSoftwareSchema) }}
    />
  );
}

export function ElementHiderPageJsonLd() {
  const breadcrumbSchema = {
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
        name: "Element Hider – Hide Anything",
        item: `${siteConfig.url}/element-hider`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  );
}

export function ColourInvertPageJsonLd() {
  const breadcrumbSchema = {
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
        name: "Colour Invert – Invert the Web",
        item: `${siteConfig.url}/invert`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  );
}

export function SafariAppPageJsonLd({ app }: { app: SafariAppConfig }) {
  const softwareSchema = buildSafariSoftwareSchema(app);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
    />
  );
}

export function MacAppPageJsonLd({ app }: { app: MacAppConfig }) {
  const softwareSchema = buildMacSoftwareSchema(app);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
    />
  );
}
