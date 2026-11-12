import type { Metadata } from "next";
import { HeroSection } from "@/components/hero/hero-section";
import { CatalogJsonLd } from "@/components/seo/jsonld-schemas";
import { RoamingOttieWidget } from "@/components/ottie/roaming-ottie-widget";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    absolute: "COGIFY — Free Native macOS, Safari Apps & Web Studios",
  },
  description: siteConfig.description,
  alternates: {
    canonical: `${siteConfig.url}/`,
  },
  openGraph: {
    title: "COGIFY — Free Native macOS, Safari Apps & Web Studios",
    description: siteConfig.description,
    url: `${siteConfig.url}/`,
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

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <CatalogJsonLd />
      <HeroSection />
      <RoamingOttieWidget />
    </div>
  );
}
