import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { HeroSection } from "@/components/hero/hero-section";
import { FaqSection } from "@/components/seo/faq-section";
import { AuthorBio } from "@/components/seo/author-bio";
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
const FutureProducts = dynamic(() =>
  import("@/components/company/future-products").then((mod) => mod.FutureProducts)
);
const EnterpriseSection = dynamic(() =>
  import("@/components/enterprise/enterprise-section").then((mod) => mod.EnterpriseSection)
);
const FinalCTA = dynamic(() =>
  import("@/components/cta/final-cta").then((mod) => mod.FinalCTA)
);

export const metadata: Metadata = {
  title:
    "COGIFY — Real-Time Web Solutions, Biodata Maker (biodata.cogify.me) & Free Native macOS, iOS & Safari Apps",
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title:
      "COGIFY — Real-Time Web Solutions, Biodata Maker (biodata.cogify.me) & Free Native macOS, iOS & Safari Apps",
    description: siteConfig.description,
    url: siteConfig.url,
    type: "website",
  },
};

const HOME_FAQS = [
  {
    q: "Where can I use the free Cogify Marriage Biodata Maker website?",
    a: "You can launch Cogify's Marriage Biodata Maker Studio directly in your browser at https://biodata.cogify.me or explore its engineering specifications at https://cogify.me/biodata. It includes 242 cultural templates across Hindu, Muslim, Sikh, Christian, Jain, Buddhist, and Universal traditions, 9 Indian languages, an interactive Vedic Kundali chart builder, and instant 300-DPI PDF, editable Word (.docx), and PNG export with zero watermarks and zero sign-up.",
  },
  {
    q: "Does Cogify build real-time web solutions in addition to native Apple apps?",
    a: "Yes. Alongside our 7 native macOS, iOS, iPadOS, and Safari applications on the Apple App Store, Cogify engineers real-time, 100% client-side browser web studios and installable PWAs—including Marriage Biodata Maker Studio (biodata.cogify.me)—as well as custom enterprise software and SaaS replacements.",
  },
  {
    q: "Which free macOS workstations and Safari apps are published by Cogify?",
    a: "Cogify ships 6 native macOS workstations with instant single-click .DMG downloads (EmDoc PDF Workstation, LumenView Display Manager, Metricove Menu Bar Telemetry, NetGuard Outbound Firewall, Klipora Clipboard Manager, and Show free space Disk Analyzer) alongside 6 Safari extensions on the Apple App Store (Ad Blocker - For Safari, ReaderEasy, WebClear, WebLenses, Element Hider, and Colour Invert).",
  },
  {
    q: "Are all Cogify apps and web studios 100% free with zero telemetry?",
    a: "Yes. Every Cogify macOS application, Safari extension, and real-time web studio on cogify.me (including biodata.cogify.me) is 100% free for individuals with zero subscriptions, zero ads, zero watermarks, and 100% local on-device execution.",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <MacOSAppsShowcase />
      <SafariExtensionsShowcase />
      <WhatWeBuild />
      <FutureProducts />
      <EnterpriseSection />
      <FaqSection
        badge="COGIFY Ecosystem FAQ"
        title="Frequently Asked Questions About COGIFY Apps & Web Studios"
        subtitle="Everything you need to know about our real-time web solutions (biodata.cogify.me), 6 native macOS workstations, and 6 Safari extensions."
        faqs={HOME_FAQS}
      />
      <AuthorBio contextLabel="Founder & Systems Architect • Native Apple & Web Studios" />
      <FinalCTA />
    </div>
  );
}
