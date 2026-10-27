import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Sovereign Native Software & Web Studios",
  description:
    "Learn about COGIFY and founder Shubham Sharma: engineering 14 free, ultra-fast native Apple apps and real-time web studios with 100% local data sovereignty.",
  alternates: {
    canonical: "https://cogify.me/about",
  },
  keywords: [
    "about Cogify",
    "Cogify mission",
    "sovereign software engineering",
    "air-gapped application development",
    "independent software company",
  ],
  openGraph: {
    title: "About Us — Engineering Sovereign Everyday Software | COGIFY",
    description:
      "Learn about COGIFY's mission: building ultra-fast, lightweight everyday applications with zero cloud telemetry.",
    url: "https://cogify.me/about",
    images: [
      {
        url: "https://cogify.me/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "About COGIFY",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us — Engineering Sovereign Everyday Software | COGIFY",
    description:
      "Engineering ultra-fast, lightweight software with complete data sovereignty.",
    images: ["https://cogify.me/og-image.png"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
