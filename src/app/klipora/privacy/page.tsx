import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { MacAppPrivacyView } from "@/components/products/mac-app-privacy-view";

const app = siteConfig.klipora;

export const metadata: Metadata = {
  title: `${app.name} macOS Clipboard — Zero-Telemetry Privacy`,
  description: `Official zero-telemetry privacy policy for ${app.name} on macOS. 100% local encrypted clipboard history, Bento boards, and Apple Vision OCR with zero cloud sync.`,
  alternates: {
    canonical: `${siteConfig.url}/${app.slug}/privacy`,
  },
};

export default function KliporaPrivacyPage() {
  return <MacAppPrivacyView app={app} />;
}
