import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { MacAppPrivacyView } from "@/components/products/mac-app-privacy-view";

const app = siteConfig.lumenview;

export const metadata: Metadata = {
  title: `${app.name} macOS App — Zero-Telemetry Privacy Spec`,
  description: `Official zero-telemetry privacy policy for ${app.name} on macOS. 100% local DDC/CI display control and HiDPI scaling with zero cloud data collection or tracking.`,
  alternates: {
    canonical: `${siteConfig.url}/${app.slug}/privacy`,
  },
};

export default function LumenViewPrivacyPage() {
  return <MacAppPrivacyView app={app} />;
}
