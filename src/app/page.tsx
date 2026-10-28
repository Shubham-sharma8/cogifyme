import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { HeroSection } from "@/components/hero/hero-section";
import { FaqSection } from "@/components/seo/faq-section";
import { AuthorBio } from "@/components/seo/author-bio";
import { CatalogJsonLd } from "@/components/seo/jsonld-schemas";
import { siteConfig } from "@/config/site";

const MacOSAppsShowcase = dynamic(() =>
  import("@/components/products/macos-apps-showcase").then((mod) => mod.MacOSAppsShowcase)
);
const SafariExtensionsShowcase = dynamic(() =>
  import("@/components/products/safari-extensions-showcase").then((mod) => mod.SafariExtensionsShowcase)
);
const WhatWeBuild = dynamic(() =>
  import("@/components/company/what-we-build").then((mod) => mod.WhatWeBuild)
);
const EnterpriseSection = dynamic(() =>
  import("@/components/enterprise/enterprise-section").then((mod) => mod.EnterpriseSection)
);
const ComparisonHubSection = dynamic(() =>
  import("@/components/compare/comparison-hub-section").then((mod) => mod.ComparisonHubSection)
);
const FinalCTA = dynamic(() =>
  import("@/components/cta/final-cta").then((mod) => mod.FinalCTA)
);

export const metadata: Metadata = {
  title: {
    absolute: "COGIFY — Free Native macOS, Safari Apps & Web Studios",
  },
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "COGIFY — Free Native macOS, Safari Apps & Web Studios",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "COGIFY — Privacy-First Apple Apps, Safari Extensions & Web Studios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "COGIFY — Free Native macOS, Safari Apps & Web Studios",
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    creator: "@cogifyme",
  },
};

const HOME_FAQS = [
  {
    q: "Where can I use the free Cogify Marriage Biodata Maker and SSB Practice Studio websites?",
    a: "You can launch Cogify's Marriage Biodata Maker Studio at https://biodata.cogify.me (or explore specs at https://cogify.me/biodata) for 242 cultural templates, 9 languages, Vedic Kundali charts, and 300-DPI PDF/Word export. For Indian Armed Forces SSB preparation, launch SSB Stage-2 Test Practice Studio at https://ssb.cogify.me (specs at https://cogify.me/ssb) for full timed TAT, WAT, SRT, SDT, GTO, PIQ, and Personal Interview drills.",
  },
  {
    q: "Does Cogify build real-time web solutions in addition to native Apple apps?",
    a: "Yes. Alongside our 6 native macOS workstations and 6 Safari applications on the Apple App Store, Cogify engineers real-time, 100% client-side browser web studios and installable PWAs—including Marriage Biodata Maker Studio (biodata.cogify.me) and SSB Stage-2 Practice Studio (ssb.cogify.me)—as well as custom enterprise software and SaaS replacements.",
  },
  {
    q: "Which free macOS workstations and Safari apps are published by Cogify?",
    a: "Cogify ships 6 native macOS workstations with instant single-click .DMG downloads (EmDoc PDF Workstation, LumenView Display Manager, Metricove Menu Bar Telemetry, NetGuard Outbound Firewall, Klipora Clipboard Manager, and Show free space Disk Analyzer) alongside 6 Safari extensions on the Apple App Store (Ad Blocker - For Safari, ReaderEasy, WebClear, WebLenses, Element Hider, and Colour Invert).",
  },
  {
    q: "Are all 14 Cogify apps and web studios 100% free with zero telemetry?",
    a: "Yes. Every Cogify macOS application, Safari extension, and real-time web studio on cogify.me (including biodata.cogify.me and ssb.cogify.me) is 100% free for individuals with zero subscriptions, zero ads, zero watermarks, and 100% local on-device execution.",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <CatalogJsonLd />
      <HeroSection />
      <MacOSAppsShowcase />
      <SafariExtensionsShowcase />
      <ComparisonHubSection compact={true} />
      <WhatWeBuild />
      <EnterpriseSection />
      <FaqSection
        badge="COGIFY Ecosystem FAQ"
        title="Frequently Asked Questions About COGIFY Apps & Web Studios"
        subtitle="Everything you need to know about our 14 free products: real-time web studios (biodata.cogify.me & ssb.cogify.me), 6 native macOS workstations, and 6 Safari extensions."
        faqs={HOME_FAQS}
      />
      <AuthorBio contextLabel="Founder & Systems Architect • Native Apple & Web Studios" />
      <FinalCTA />
    </div>
  );
}
