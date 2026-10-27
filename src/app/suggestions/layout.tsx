import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feature Suggestions & Bug Reports — Shape Our Apps",
  description:
    "Submit feature requests, report bugs across our 14 free apps and web studios, or request a custom enterprise software replacement directly to COGIFY engineers.",
  alternates: {
    canonical: "https://cogify.me/suggestions",
  },
  keywords: [
    "feature suggestions",
    "report bug Cogify",
    "EmDoc feature request",
    "request software solution",
    "Cogify user feedback",
  ],
  openGraph: {
    title: "Suggestions & Bug Reports | COGIFY",
    description:
      "Submit feature requests, report bugs, or request a custom software solution.",
    url: "https://cogify.me/suggestions",
    images: [
      {
        url: "https://cogify.me/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "COGIFY Suggestions and Feedback",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suggestions & Bug Reports | COGIFY",
    description:
      "Submit feature requests, report bugs, or request a custom software solution.",
    images: ["https://cogify.me/og-image.png"],
  },
};

export default function SuggestionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
