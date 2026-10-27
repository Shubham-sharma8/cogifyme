import type { Metadata } from "next";
import { EmDocPageJsonLd } from "@/components/seo/jsonld-schemas";

export const metadata: Metadata = {
  title: "EmDoc — Free macOS PDF Editor & Acrobat Alternative",
  description:
    "5.0 MB native macOS PDF workstation (~45 MB RAM). 100% offline air-gapped C++20 & AppKit PDF editor with vector ink, page organizer, OCR & compression.",
  alternates: {
    canonical: "https://cogify.me/products/emdoc",
  },
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
    title: "EmDoc — Free macOS PDF Editor & Acrobat Alternative | COGIFY",
    description:
      "5.0 MB native macOS PDF workstation (~45 MB RAM). 100% offline air-gapped C++20 & AppKit PDF editor with vector ink, page organizer, OCR & compression.",
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
    title: "EmDoc — Free macOS PDF Editor & Acrobat Alternative | COGIFY",
    description:
      "5.0 MB native macOS PDF workstation (~45 MB RAM). 100% offline air-gapped C++20 & AppKit PDF editor with vector ink, page organizer, OCR & compression.",
    images: ["https://cogify.me/og-image.png"],
  },
};

export default function EmDocLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <EmDocPageJsonLd />
      {children}
    </>
  );
}
