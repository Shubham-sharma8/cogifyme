import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EmDoc — Lightweight macOS PDF Editor & Acrobat Pro Alternative",
  description:
    "5.0 MB native macOS PDF suite. ~45MB RAM footprint, 100% offline air-gapped data sovereignty. Hardware vector rendering, page reorganization, compression, and zero subscriptions.",
  keywords: [
    "best free PDF editor Mac",
    "Adobe Acrobat Pro alternative Mac",
    "lightweight PDF editor macOS",
    "5MB PDF reader",
    "low RAM PDF app",
    "macOS PDF editor free",
    "offline air-gapped PDF suite",
    "PDF organizer merge split",
    "fastest PDF reader macOS",
  ],
  openGraph: {
    title: "EmDoc — Lightweight macOS PDF Editor & Acrobat Pro Alternative",
    description:
      "5.0 MB native macOS PDF suite. ~45MB RAM footprint, 100% offline air-gapped data sovereignty. High-speed vector rendering, page organizer, compression, and zero telemetry.",
    url: "https://cogify.me/products/emdoc",
    images: [
      {
        url: "https://cogify.me/og-image.png",
        secureUrl: "https://cogify.me/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "EmDoc macOS PDF Workstation Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmDoc — Lightweight macOS PDF Editor & Acrobat Pro Alternative",
    description: "5.0 MB native macOS PDF suite. ~45MB RAM, 100% air-gapped, zero telemetry.",
    images: ["https://cogify.me/og-image.png"],
  },
};

export default function EmDocLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
