import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { MacAppPrivacyView } from "@/components/products/mac-app-privacy-view";

const app = siteConfig.showFreeSpace;

export const metadata: Metadata = {
  title: `${app.name} macOS — Zero-Telemetry Privacy`,
  description: `Official zero-telemetry privacy policy for ${app.name} on macOS. 100% local disk space scanning, cache cleanup, and storage widgets with zero cloud uploads.`,
  alternates: {
    canonical: `${siteConfig.url}/${app.slug}/privacy`,
  },
};

export default function ShowFreeSpacePrivacyPage() {
  return <MacAppPrivacyView app={app} />;
}
