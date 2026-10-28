import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { MacAppPrivacyView } from "@/components/products/mac-app-privacy-view";

const app = siteConfig.showFreeSpace;

export const metadata: Metadata = {
  title: "Show Free Space macOS — Zero-Telemetry Privacy",
  description: "Official zero-telemetry privacy policy for Show Free Space on macOS. 100% local disk space scanning, cache cleanup, and storage widgets with zero cloud uploads.",
  alternates: {
    canonical: `${siteConfig.url}/${app.slug}/privacy`,
  },
  openGraph: {
    title: "Show Free Space macOS — Zero-Telemetry Privacy | COGIFY",
    description: "Official zero-telemetry privacy policy for Show Free Space on macOS. 100% local disk space scanning, cache cleanup, and storage widgets with zero cloud uploads.",
    url: `${siteConfig.url}/${app.slug}/privacy`,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: app.screenshotsMac[0].image,
        width: 1440,
        height: 900,
        alt: "Show Free Space macOS — Zero-Telemetry Privacy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Show Free Space macOS — Zero-Telemetry Privacy | COGIFY",
    description: "Official zero-telemetry privacy policy for Show Free Space on macOS. 100% local disk space scanning, cache cleanup, and storage widgets with zero cloud uploads.",
    images: [app.screenshotsMac[0].image],
  },
};

export default function ShowFreeSpacePrivacyPage() {
  return <MacAppPrivacyView app={app} />;
}
