import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Suggestions & Bug Reports — Help Shape Cogify Software",
  description:
    "Submit feature requests, report bugs, or request a custom software solution. We review all submissions directly and prioritize based on community and customer feedback.",
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
