import React from "react";
import { siteConfig, SafariAppConfig } from "@/config/site";

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
      "@type": "Person",
      name: "Shubham Sharma",
      jobTitle: "Founder & Systems Architect",
      sameAs: [siteConfig.appleDeveloperUrl],
    },
    sameAs: [siteConfig.appleDeveloperUrl, "https://github.com/Shubham-sharma8"],
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

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: `${siteConfig.name} — High-Performance Native macOS, iOS & Safari Apps`,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
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
      "@id": `${siteConfig.url}/#organization`,
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
      "@id": `${siteConfig.url}/#organization`,
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
      "@id": `${siteConfig.url}/#organization`,
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

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "COGIFY Native Apps & Safari Extensions on Apple App Store",
    description:
      "Complete suite of 100% free, zero-telemetry native macOS, iOS, iPadOS, and Safari extensions by COGIFY.",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "EmDoc PDF Workstation",
        url: `${siteConfig.url}/products/emdoc`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: siteConfig.adBlocker.name,
        url: `${siteConfig.url}/ad-blocker`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: siteConfig.readereasy.name,
        url: `${siteConfig.url}/readereasy`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: siteConfig.webclear.name,
        url: `${siteConfig.url}/webclear`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: siteConfig.weblenses.name,
        url: `${siteConfig.url}/weblenses`,
      },
      {
        "@type": "ListItem",
        position: 6,
        name: siteConfig.elementHider.name,
        url: `${siteConfig.url}/element-hider`,
      },
      {
        "@type": "ListItem",
        position: 7,
        name: siteConfig.invert.name,
        url: `${siteConfig.url}/invert`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Are all Cogify apps (EmDoc, Ad Blocker, ReaderEasy, WebClear, WebLenses, Element Hider, Colour Invert) really 100% free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Every Cogify consumer application on the Apple App Store is 100% free for individuals with zero subscriptions, zero ads, and zero locked features.",
        },
      },
      {
        "@type": "Question",
        name: "Do Cogify apps or Safari extensions collect my browsing history or personal data?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Every Cogify app is engineered with a strict Zero-Data, 100% On-Device architecture. We do not collect, store, or transmit your browsing history, PDF documents, cookies, or usage telemetry.",
        },
      },
      {
        "@type": "Question",
        name: "Where can I download EmDoc, ReaderEasy, WebClear, Ad Blocker, WebLenses, Element Hider, and Colour Invert?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All 7 flagship applications are published and available for immediate download on the official Apple App Store for macOS, iOS, and iPadOS.",
        },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
        name: app.name,
        item: `${siteConfig.url}/${app.slug}`,
      },
    ],
  };

  const softwareSchema = buildSafariSoftwareSchema(app);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
    </>
  );
}
