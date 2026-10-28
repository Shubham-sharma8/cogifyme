import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { MacAppPrivacyView } from "@/components/products/mac-app-privacy-view";

const app = siteConfig.metricove;

export const metadata: Metadata = {
  title: "Metricove macOS App — Zero-Telemetry Privacy Spec",
  description: "Official zero-telemetry privacy policy for Metricove on macOS. 100% on-device CPU, GPU, RAM, and SMC sensor telemetry with zero external network transmissions.",
  alternates: {
    canonical: `${siteConfig.url}/${app.slug}/privacy`,
  },
  openGraph: {
    title: "Metricove macOS App — Zero-Telemetry Privacy Spec | COGIFY",
    description: "Official zero-telemetry privacy policy for Metricove on macOS. 100% on-device CPU, GPU, RAM, and SMC sensor telemetry with zero external network transmissions.",
    url: `${siteConfig.url}/${app.slug}/privacy`,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: app.screenshotsMac[0].image,
        width: 1440,
        height: 900,
        alt: "Metricove macOS App — Zero-Telemetry Privacy Spec",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Metricove macOS App — Zero-Telemetry Privacy Spec | COGIFY",
    description: "Official zero-telemetry privacy policy for Metricove on macOS. 100% on-device CPU, GPU, RAM, and SMC sensor telemetry with zero external network transmissions.",
    images: [app.screenshotsMac[0].image],
  },
};

export default function MetricovePrivacyPage() {
  return <MacAppPrivacyView app={app} />;
}
