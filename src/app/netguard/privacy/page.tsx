import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { MacAppPrivacyView } from "@/components/products/mac-app-privacy-view";

const app = siteConfig.netguard;

export const metadata: Metadata = {
  title: "NetGuard macOS Firewall — Zero-Telemetry Privacy",
  description: "Official zero-telemetry privacy policy for NetGuard on macOS. 100% local network traffic inspection, GeoIP lookup, and firewall rules with zero cloud logging.",
  alternates: {
    canonical: `${siteConfig.url}/${app.slug}/privacy`,
  },
  openGraph: {
    title: "NetGuard macOS Firewall — Zero-Telemetry Privacy | COGIFY",
    description: "Official zero-telemetry privacy policy for NetGuard on macOS. 100% local network traffic inspection, GeoIP lookup, and firewall rules with zero cloud logging.",
    url: `${siteConfig.url}/${app.slug}/privacy`,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: app.screenshotsMac[0].image,
        width: 1440,
        height: 900,
        alt: "NetGuard macOS Firewall — Zero-Telemetry Privacy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NetGuard macOS Firewall — Zero-Telemetry Privacy | COGIFY",
    description: "Official zero-telemetry privacy policy for NetGuard on macOS. 100% local network traffic inspection, GeoIP lookup, and firewall rules with zero cloud logging.",
    images: [app.screenshotsMac[0].image],
  },
};

export default function NetGuardPrivacyPage() {
  return <MacAppPrivacyView app={app} />;
}
