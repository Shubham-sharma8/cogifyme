import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { MacAppPrivacyView } from "@/components/products/mac-app-privacy-view";

const app = siteConfig.metricove;

export const metadata: Metadata = {
  title: `${app.name} macOS App — Zero-Telemetry Privacy Spec`,
  description: `Official zero-telemetry privacy policy for ${app.name} on macOS. 100% on-device CPU, GPU, RAM, and SMC sensor telemetry with zero external network transmissions.`,
  alternates: {
    canonical: `${siteConfig.url}/${app.slug}/privacy`,
  },
};

export default function MetricovePrivacyPage() {
  return <MacAppPrivacyView app={app} />;
}
