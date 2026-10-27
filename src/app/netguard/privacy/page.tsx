import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { MacAppPrivacyView } from "@/components/products/mac-app-privacy-view";

const app = siteConfig.netguard;

export const metadata: Metadata = {
  title: `${app.name} macOS Firewall — Zero-Telemetry Privacy`,
  description: `Official zero-telemetry privacy policy for ${app.name} on macOS. 100% local network traffic inspection, GeoIP lookup, and firewall rules with zero cloud logging.`,
  alternates: {
    canonical: `${siteConfig.url}/${app.slug}/privacy`,
  },
};

export default function NetGuardPrivacyPage() {
  return <MacAppPrivacyView app={app} />;
}
