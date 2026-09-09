import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Software Solutions & License Replacement",
  description:
    "Cut enterprise software costs by replacing expensive, bloated subscriptions with high-speed, lightweight, air-gapped desktop software. Free pilots, source code audits, and volume licensing.",
  alternates: {
    canonical: "https://cogify.me/enterprise",
  },
  keywords: [
    "enterprise software license replacement",
    "replace Adobe Acrobat enterprise",
    "air-gapped PDF software for enterprise",
    "custom software development",
    "enterprise desktop tools",
    "software cost reduction",
  ],
  openGraph: {
    title: "Enterprise Software Solutions & License Replacement | COGIFY",
    description:
      "Cut enterprise software costs by replacing expensive legacy licenses with sovereign, high-speed tools. Free enterprise pilots with zero telemetry.",
    url: "https://cogify.me/enterprise",
    images: [
      {
        url: "https://cogify.me/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "COGIFY Enterprise Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Software Solutions & License Replacement | COGIFY",
    description:
      "Cut enterprise software costs with high-speed, sovereign desktop software solutions.",
    images: ["https://cogify.me/og-image.png"],
  },
};

export default function EnterpriseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
