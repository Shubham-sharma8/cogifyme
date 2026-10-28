import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { MacAppPrivacyView } from "@/components/products/mac-app-privacy-view";

const app = siteConfig.klipora;

export const metadata: Metadata = {
  title: "Klipora macOS Clipboard — Zero-Telemetry Privacy",
  description: "Official zero-telemetry privacy policy for Klipora on macOS. 100% local encrypted clipboard history, Bento boards, and Apple Vision OCR with zero cloud sync.",
  alternates: {
    canonical: `${siteConfig.url}/${app.slug}/privacy`,
  },
  openGraph: {
    title: "Klipora macOS Clipboard — Zero-Telemetry Privacy | COGIFY",
    description: "Official zero-telemetry privacy policy for Klipora on macOS. 100% local encrypted clipboard history, Bento boards, and Apple Vision OCR with zero cloud sync.",
    url: `${siteConfig.url}/${app.slug}/privacy`,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: app.screenshotsMac[0].image,
        width: 1440,
        height: 900,
        alt: "Klipora macOS Clipboard — Zero-Telemetry Privacy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Klipora macOS Clipboard — Zero-Telemetry Privacy | COGIFY",
    description: "Official zero-telemetry privacy policy for Klipora on macOS. 100% local encrypted clipboard history, Bento boards, and Apple Vision OCR with zero cloud sync.",
    images: [app.screenshotsMac[0].image],
  },
};

export default function KliporaPrivacyPage() {
  return <MacAppPrivacyView app={app} />;
}
