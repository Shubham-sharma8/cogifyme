import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { MacAppPrivacyView } from "@/components/products/mac-app-privacy-view";

const app = siteConfig.showFreeSpace;

export const metadata: Metadata = {
  title: `Privacy Policy — ${app.name}`,
  description: `Zero-telemetry, 100% local privacy policy for ${app.name} on macOS.`,
  alternates: {
    canonical: `${siteConfig.url}/${app.slug}/privacy`,
  },
};

export default function ShowFreeSpacePrivacyPage() {
  return <MacAppPrivacyView app={app} />;
}
