import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.biodata.name} (biodata.cogify.me) — 242 Free A4 Templates, PDF & Word (.docx)`,
  description: siteConfig.biodata.shortDescription,
  keywords: siteConfig.biodata.keywords,
  alternates: {
    canonical: `${siteConfig.url}/biodata`,
  },
  openGraph: {
    title: `${siteConfig.biodata.name} — Free Live A4 Biodata Builder by COGIFY`,
    description: siteConfig.biodata.shortDescription,
    url: `${siteConfig.url}/biodata`,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/brand/Biodata/og-banner.png`,
        width: 1200,
        height: 630,
        alt: "Marriage Biodata Maker Studio by COGIFY (biodata.cogify.me)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.biodata.name} — biodata.cogify.me`,
    description: siteConfig.biodata.shortDescription,
    images: [`${siteConfig.url}/brand/Biodata/og-banner.png`],
  },
};

export default function BiodataLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const biodataJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": `${siteConfig.url}/biodata#webapp`,
        name: siteConfig.biodata.name,
        alternateName: ["BiodataMaker", "Cogify Marriage Biodata Maker", "biodata.cogify.me"],
        url: siteConfig.biodata.url,
        sameAs: [siteConfig.biodata.url, siteConfig.biodata.githubUrl],
        applicationCategory: "DesignApplication",
        operatingSystem: "All (Web Browser & PWA)",
        isAccessibleForFree: true,
        image: `${siteConfig.url}${siteConfig.biodata.icon}`,
        screenshot: `${siteConfig.url}${siteConfig.biodata.previewImage}`,
        description: siteConfig.biodata.fullDescription,
        featureList: siteConfig.biodata.features.map((f) => `${f.title}: ${f.description}`),
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
          url: siteConfig.biodata.url,
          description: siteConfig.biodata.pricingModel,
        },
      },
      {
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
            name: siteConfig.biodata.name,
            item: `${siteConfig.url}/biodata`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(biodataJsonLd) }}
      />
      {children}
    </>
  );
}
