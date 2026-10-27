import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { SafariAppPageView } from "@/components/products/safari-app-page-view";
import { SafariAppPageJsonLd } from "@/components/seo/jsonld-schemas";

const app = siteConfig.webclear;

export const metadata: Metadata = {
  title: "WebClear — One-Tap Safari Cookie & Cache Cleaner",
  description: app.shortDescription,
  keywords: app.keywords,
  alternates: {
    canonical: `${siteConfig.url}/${app.slug}`,
  },
  openGraph: {
    title: `${app.name} — ${app.tagline}`,
    description: app.promotionalText,
    url: `${siteConfig.url}/${app.slug}`,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/brand/WebClear/ios/1.jpg`,
        width: 1290,
        height: 2796,
        alt: app.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${app.name} — ${app.tagline}`,
    description: app.promotionalText,
    images: [`${siteConfig.url}/brand/WebClear/ios/1.jpg`],
  },
};

export default function WebClearPage() {
  return (
    <>
      <SafariAppPageJsonLd app={app} />
      <SafariAppPageView app={app} />
    </>
  );
}
