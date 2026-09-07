import React from "react";

export function JsonLdSchemas() {
  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "EmDoc PDF Workstation",
    alternateName: ["EmDoc", "EmDoc Mac", "EmDoc PDF"],
    operatingSystem: "macOS 12.0 or later, Apple Silicon & Intel, iOS coming soon",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "OfficeApplication",
    offers: {
      "@type": "Offer",
      price: "0.00",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "482",
      bestRating: "5",
      worstRating: "1",
    },
    softwareVersion: "0.1 Preview",
    fileSize: "5.0 MB",
    description:
      "Ultra-lightweight 5.0MB native macOS PDF editor and workstation. Runs with ~45MB RAM baseline, zero cloud tracking, 100% offline air-gapped data sovereignty, and hardware vector rendering.",
    url: "https://cogify.me/products/emdoc",
    downloadUrl: "https://cogify.me/products/emdoc",
    publisher: {
      "@type": "Organization",
      name: "Cogify",
      url: "https://cogify.me",
      logo: "https://cogify.me/brand/logo.png",
    },
    featureList: [
      "5.0 MB Native App Binary",
      "~45 MB Low RAM Footprint",
      "100% Offline Air-Gapped Operation",
      "Instant Vector Hardware Rendering",
      "Multi-Page Drag-and-Drop Organization",
      "PDF Compression and File Size Reducer",
      "Digital Signatures and Watermarking",
      "Zero Telemetry and Zero Data Harvesting",
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cogify",
    legalName: "Cogify Technologies",
    url: "https://cogify.me",
    logo: "https://cogify.me/brand/logo.png",
    description:
      "Cogify engineers lightweight, high-performance everyday apps for desktop and mobile, and delivers enterprise sovereign software to eliminate recurring license fees.",
    founder: {
      "@type": "Person",
      name: "Shubham Sharma",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@cogify.me",
      contactType: "customer service",
      availableLanguage: ["English", "Hindi"],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is EmDoc really 100% free with all features included?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. EmDoc is completely free for all users. All core features—including document viewing, page reorganization, compression, annotation, and digital signing—are completely unlocked with no paywalls or recurring subscriptions.",
        },
      },
      {
        "@type": "Question",
        name: "How does EmDoc achieve a 5.0 MB size and ~45 MB RAM usage?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "EmDoc is built with pure native Swift and Apple Metal/CoreGraphics vector pipelines without Electron, Chromium, or cross-platform webview bloat. This allows it to launch instantaneously and consume a fraction of the system memory used by legacy PDF suites.",
        },
      },
      {
        "@type": "Question",
        name: "Can EmDoc replace Adobe Acrobat Pro for enterprise workflows?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. EmDoc provides the essential high-throughput tools legal, financial, and engineering teams need every day without the multi-gigabyte footprint or annual license fees. Cogify also offers custom enterprise license replacement audits.",
        },
      },
      {
        "@type": "Question",
        name: "Does EmDoc upload my documents to external servers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Never. EmDoc operates in complete air-gapped isolation on your local hardware. Documents never leave your device, ensuring total compliance with HIPAA, GDPR, and confidential enterprise security standards.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
