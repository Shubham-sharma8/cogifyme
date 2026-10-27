import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { MacAppPageView } from "@/components/products/mac-app-page-view";
import { MacAppPageJsonLd } from "@/components/seo/jsonld-schemas";

const app = siteConfig.netguard;

export const metadata: Metadata = {
  title: `${app.name} — macOS Outbound Firewall & Traffic Radar`,
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
        url: `${siteConfig.url}/brand/NetGuard/1.webp`,
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
    images: [`${siteConfig.url}/brand/NetGuard/1.webp`],
  },
};

export default function NetGuardPage() {
  return (
    <>
      <MacAppPageJsonLd app={app} />
      <MacAppPageView app={app} />
    </>
  );
}
