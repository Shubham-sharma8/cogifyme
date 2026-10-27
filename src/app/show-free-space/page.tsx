import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { MacAppPageView } from "@/components/products/mac-app-page-view";
import { MacAppPageJsonLd } from "@/components/seo/jsonld-schemas";

const app = siteConfig.showFreeSpace;

export const metadata: Metadata = {
  title: `${app.name} — macOS Disk Space & Cache Cleaner`,
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
        url: `${siteConfig.url}/brand/ShowFreeSpace/1.webp`,
        width: 1600,
        height: 1000,
        alt: app.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${app.name} — ${app.tagline}`,
    description: app.promotionalText,
    images: [`${siteConfig.url}/brand/ShowFreeSpace/1.webp`],
  },
};

export default function ShowFreeSpacePage() {
  return (
    <>
      <MacAppPageJsonLd app={app} />
      <MacAppPageView app={app} />
    </>
  );
}
