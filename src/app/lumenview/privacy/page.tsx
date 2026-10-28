import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { MacAppPrivacyView } from "@/components/products/mac-app-privacy-view";

const app = siteConfig.lumenview;

export const metadata: Metadata = {
  title: "LumenView macOS App — Zero-Telemetry Privacy Spec",
  description: "Official zero-telemetry privacy policy for LumenView on macOS. 100% local DDC/CI display control and HiDPI scaling with zero cloud data collection or tracking.",
  alternates: {
    canonical: `${siteConfig.url}/${app.slug}/privacy`,
  },
  openGraph: {
    title: "LumenView macOS App — Zero-Telemetry Privacy Spec | COGIFY",
    description: "Official zero-telemetry privacy policy for LumenView on macOS. 100% local DDC/CI display control and HiDPI scaling with zero cloud data collection or tracking.",
    url: `${siteConfig.url}/${app.slug}/privacy`,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: app.screenshotsMac[0].image,
        width: 1440,
        height: 900,
        alt: "LumenView macOS App — Zero-Telemetry Privacy Spec",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LumenView macOS App — Zero-Telemetry Privacy Spec | COGIFY",
    description: "Official zero-telemetry privacy policy for LumenView on macOS. 100% local DDC/CI display control and HiDPI scaling with zero cloud data collection or tracking.",
    images: [app.screenshotsMac[0].image],
  },
};

export default function LumenViewPrivacyPage() {
  return <MacAppPrivacyView app={app} />;
}
