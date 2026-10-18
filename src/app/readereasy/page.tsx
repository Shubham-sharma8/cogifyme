import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { SafariAppPageView } from "@/components/products/safari-app-page-view";
import { SafariAppPageJsonLd } from "@/components/seo/jsonld-schemas";

const app = siteConfig.readereasy;

export const metadata: Metadata = {
  title: `${app.name} | Safari Reader Mode, Bionic Focus & TTS`,
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
        url: `${siteConfig.url}/brand/ReaderEasy/ios/1.jpg`,
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
    images: [`${siteConfig.url}/brand/ReaderEasy/ios/1.jpg`],
  },
};

export default function ReaderEasyPage() {
  return (
    <>
      <SafariAppPageJsonLd app={app} />
      <SafariAppPageView app={app} />
    </>
  );
}
