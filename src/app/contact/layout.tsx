import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact COGIFY — Support & Engineering Inquiries",
  description:
    "Contact the COGIFY engineering team for technical support across our 14 macOS, Safari, and web studio apps, enterprise pilots, or custom software inquiries.",
  alternates: {
    canonical: "https://cogify.me/contact",
  },
  keywords: [
    "contact Cogify",
    "software engineering support",
    "enterprise pilot request",
    "Cogify contact email",
  ],
  openGraph: {
    title: "Contact Us & Engineering Inquiries | COGIFY",
    description:
      "Get in touch with the COGIFY team. We respond to all inquiries within 24 hours.",
    url: "https://cogify.me/contact",
    images: [
      {
        url: "https://cogify.me/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Contact COGIFY",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us & Engineering Inquiries | COGIFY",
    description:
      "Get in touch with the COGIFY engineering team. We respond within 24 hours.",
    images: ["https://cogify.me/og-image.png"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
