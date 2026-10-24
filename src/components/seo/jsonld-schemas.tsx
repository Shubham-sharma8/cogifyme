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
    downloadUrl: siteConfig.emdoc.appStoreUrl,
    installUrl: siteConfig.emdoc.appStoreUrl,
    sameAs: [siteConfig.emdoc.appStoreUrl],
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

  const elementHiderSoftwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${siteConfig.url}/element-hider#software`,
    name: siteConfig.elementHider.name,
    alternateName: ["Element Hider", "Element Hider Safari Extension"],
    operatingSystem: "iOS 16+, iPadOS 16+, macOS (Safari)",
    applicationCategory: "UtilitiesApplication",
    applicationSubCategory: "Safari Web Extension, Content Blocker, Productivity",
    softwareVersion: siteConfig.elementHider.version,
    url: `${siteConfig.url}/element-hider`,
    downloadUrl: siteConfig.elementHider.appStoreUrl,
    installUrl: siteConfig.elementHider.appStoreUrl,
    sameAs: [siteConfig.elementHider.appStoreUrl],
    image: `${siteConfig.url}/brand/Element-Hider/icon.png`,
    screenshot: siteConfig.elementHider.screenshots.map((s) => `${siteConfig.url}${s.image}`),
    description: siteConfig.elementHider.fullDescription,
    featureList: siteConfig.elementHider.features.map((f) => `${f.title}: ${f.description}`),
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
      url: siteConfig.elementHider.appStoreUrl,
      description: "100% Free Forever — Zero Ads, Zero Subscriptions.",
    },
    isAccessibleForFree: true,
  };

  const colourInvertSoftwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${siteConfig.url}/invert#software`,
    name: siteConfig.invert.name,
    alternateName: ["Colour Invert", "Color Invert Safari Extension", "Colour Invert Dark Mode"],
    operatingSystem: "macOS, iOS 16+, iPadOS 16+ (Safari)",
    applicationCategory: "UtilitiesApplication",
    applicationSubCategory: "Safari Web Extension, Dark Mode, Accessibility",
    softwareVersion: siteConfig.invert.version,
    url: `${siteConfig.url}/invert`,
    downloadUrl: siteConfig.invert.appStoreUrl,
    installUrl: siteConfig.invert.appStoreUrl,
    sameAs: [siteConfig.invert.appStoreUrl],
    image: `${siteConfig.url}/brand/Invert/icon.png`,
    screenshot: [
      ...siteConfig.invert.screenshotsMac.map((s) => `${siteConfig.url}${s.image}`),
      ...siteConfig.invert.screenshotsIos.map((s) => `${siteConfig.url}${s.image}`),
    ],
    description: siteConfig.invert.fullDescription,
    featureList: siteConfig.invert.features.map((f) => `${f.title}: ${f.description}`),
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
      url: siteConfig.invert.appStoreUrl,
      description: "100% Free Forever — Zero Ads, Zero Subscriptions.",
    },
    isAccessibleForFree: true,
  };

  const biodataWebAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${siteConfig.url}/biodata#webapp`,
    name: siteConfig.biodata.name,
    alternateName: [
      "Biodata Maker",
      "Marriage Biodata Maker",
      "Free Marriage Biodata Maker Online",
      "Shadi Biodata Maker",
      "Cogify Biodata Studio",
      "biodata.cogify.me",
    ],
    url: siteConfig.biodata.webUrl,
    sameAs: [`${siteConfig.url}/biodata`, siteConfig.biodata.webUrl],
    applicationCategory: "DesignApplication",
    applicationSubCategory:
      "Marriage Biodata Maker, Cultural Document Studio, Real-Time Web Solution, PDF & DOCX Generator",
    operatingSystem: "Any (Web Browser, macOS, Windows, iOS, iPadOS, Android — Installable PWA)",
    browserRequirements: "Requires modern HTML5 browser with client-side Canvas & IndexedDB",
    softwareVersion: siteConfig.biodata.version,
    image: `${siteConfig.url}${siteConfig.biodata.ogBanner}`,
    screenshot: [
      `${siteConfig.url}${siteConfig.biodata.previewImage}`,
      `${siteConfig.url}${siteConfig.biodata.mobilePreview}`,
    ],
    description: siteConfig.biodata.fullDescription,
    featureList: siteConfig.biodata.features.map((f) => `${f.title}: ${f.description}`),
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
      url: siteConfig.biodata.webUrl,
      description: "100% Free Forever — Zero Watermarks, Zero Sign-Up, Zero Cloud Uploads.",
    },
    isAccessibleForFree: true,
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "COGIFY Real-Time Web Solutions, Native Apps & Safari Extensions",
    description:
      "Complete suite of 100% free, zero-telemetry real-time web studios, native macOS apps, and iOS/iPadOS Safari extensions by COGIFY.",
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
        name: "EmDoc PDF Workstation",
        url: `${siteConfig.url}/products/emdoc`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: siteConfig.adBlocker.name,
        url: `${siteConfig.url}/ad-blocker`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: siteConfig.readereasy.name,
        url: `${siteConfig.url}/readereasy`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: siteConfig.webclear.name,
        url: `${siteConfig.url}/webclear`,
      },
      {
        "@type": "ListItem",
        position: 6,
        name: siteConfig.weblenses.name,
        url: `${siteConfig.url}/weblenses`,
      },
      {
        "@type": "ListItem",
        position: 7,
        name: siteConfig.elementHider.name,
        url: `${siteConfig.url}/element-hider`,
      },
      {
        "@type": "ListItem",
        position: 8,
        name: siteConfig.invert.name,
        url: `${siteConfig.url}/invert`,
      },
      {
        "@type": "ListItem",
        position: 9,
        name: siteConfig.lumenview.name,
        url: `${siteConfig.url}/lumenview`,
      },
      {
        "@type": "ListItem",
        position: 10,
        name: siteConfig.metricove.name,
        url: `${siteConfig.url}/metricove`,
      },
      {
        "@type": "ListItem",
        position: 11,
        name: siteConfig.netguard.name,
        url: `${siteConfig.url}/netguard`,
      },
      {
        "@type": "ListItem",
        position: 12,
        name: siteConfig.klipora.name,
        url: `${siteConfig.url}/klipora`,
      },
      {
        "@type": "ListItem",
        position: 13,
        name: siteConfig.showFreeSpace.name,
        url: `${siteConfig.url}/show-free-space`,
      },
    ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(biodataWebAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(emdocSoftwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(elementHiderSoftwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(colourInvertSoftwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildSafariSoftwareSchema(siteConfig.adBlocker)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildSafariSoftwareSchema(siteConfig.readereasy)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildSafariSoftwareSchema(siteConfig.webclear)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildSafariSoftwareSchema(siteConfig.weblenses)),
        }}
      />
    </>
  );
}

export const JsonLdSchemas = RootJsonLd;

export function EmDocPageJsonLd() {
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
        name: "Products",
        item: `${siteConfig.url}/products`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "EmDoc PDF Workstation",
        item: `${siteConfig.url}/products/emdoc`,
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
