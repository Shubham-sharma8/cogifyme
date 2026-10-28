import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "SSB Stage-2 Psychology Test Studio (ssb.cogify.me)",
  description: siteConfig.ssb.shortDescription,
  keywords: siteConfig.ssb.keywords,
  alternates: {
    canonical: `${siteConfig.url}/ssb`,
  },
  openGraph: {
    title: "SSB Stage-2 Psychology Test Studio (ssb.cogify.me) | COGIFY",
    description: siteConfig.ssb.shortDescription,
    url: `${siteConfig.url}/ssb`,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/brand/SSB/og-banner.png`,
        width: 1200,
        height: 630,
        alt: "SSB Stage-2 Test Practice Studio by COGIFY (ssb.cogify.me)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SSB Stage-2 Psychology Test Studio (ssb.cogify.me) | COGIFY",
    description: siteConfig.ssb.shortDescription,
    images: [`${siteConfig.url}/brand/SSB/og-banner.png`],
  },
};

export default function SsbLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const ssbJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": `${siteConfig.url}/ssb#webapp`,
        name: siteConfig.ssb.name,
        alternateName: [
          "SSB Practice Studio",
          "Cogify SSB Simulator",
          "ssb.cogify.me",
          "SSB Stage-2 Psychology Test Simulator",
        ],
        url: siteConfig.ssb.url,
        sameAs: [siteConfig.ssb.url, siteConfig.ssb.githubUrl],
        applicationCategory: "EducationalApplication",
        operatingSystem: "All (Web Browser & PWA)",
        isAccessibleForFree: true,
        image: `${siteConfig.url}${siteConfig.ssb.ogBanner}`,
        screenshot: `${siteConfig.url}${siteConfig.ssb.previewImage}`,
        description: siteConfig.ssb.fullDescription,
        featureList: siteConfig.ssb.features.map((f) => `${f.title}: ${f.description}`),
        author: {
          "@id": `${siteConfig.url}/#organization`,
        },
        creator: {
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
          url: siteConfig.ssb.url,
          description: siteConfig.ssb.pricingModel,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ssbJsonLd) }}
      />
      {children}
    </>
  );
}
