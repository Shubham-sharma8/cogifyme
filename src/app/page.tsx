import type { Metadata } from "next";
import { HeroSection } from "@/components/hero/hero-section";
import { SafariExtensionsShowcase } from "@/components/products/safari-extensions-showcase";
import { WhatWeBuild } from "@/components/company/what-we-build";
import { EnterpriseSection } from "@/components/enterprise/enterprise-section";
import { FutureProducts } from "@/components/company/future-products";
import { FinalCTA } from "@/components/cta/final-cta";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "COGIFY — Free Native macOS, iOS & Safari Apps (Ad Blocker, ReaderEasy, WebClear, WebLenses, EmDoc)",
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <SafariExtensionsShowcase />
      <WhatWeBuild />
      <FutureProducts />
      <EnterpriseSection />
      <FinalCTA />
    </div>
  );
}
