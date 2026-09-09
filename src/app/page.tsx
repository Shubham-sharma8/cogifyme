import { HeroSection } from "@/components/hero/hero-section";
import { EmDocShowcase } from "@/components/products/emdoc-showcase";
import { WhatWeBuild } from "@/components/company/what-we-build";
import { EnterpriseSection } from "@/components/enterprise/enterprise-section";
import { AboutSection } from "@/components/company/about-section";
import { FutureProducts } from "@/components/company/future-products";
import { FinalCTA } from "@/components/cta/final-cta";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <WhatWeBuild />
      <EmDocShowcase />
      <EnterpriseSection />
      <AboutSection />
      <FutureProducts />
      <FinalCTA />
    </div>
  );
}
