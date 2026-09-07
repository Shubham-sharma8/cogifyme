import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/footer/footer";
import { siteConfig } from "@/config/site";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeScript } from "@/components/theme/theme-script";

import { JsonLdSchemas } from "@/components/seo/jsonld-schemas";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — EmDoc PDF Workstation | Native, 5MB & Free`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "COGIFY" }, { name: "Shubham Sharma" }],
  creator: "COGIFY",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "EmDoc — Professional PDF Workstation for Mac | 5.0 MB Native & 100% Free",
    description:
      "Ultra-lightweight 5.0 MB macOS PDF suite. ~45MB RAM footprint, 100% offline air-gapped data sovereignty. High-speed vector rendering, drag-and-drop page organizer, compression, and zero subscriptions.",
    siteName: siteConfig.name,
    images: [
      {
        url: "https://cogify.me/og-image.png",
        secureUrl: "https://cogify.me/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "EmDoc — Professional PDF Workstation for Mac | 5.0 MB Native & Air-Gapped",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmDoc — Professional PDF Workstation for Mac | 5.0 MB Native & 100% Free",
    description:
      "Ultra-lightweight 5.0 MB macOS PDF suite. ~45MB RAM, 100% air-gapped, zero telemetry. The fast Adobe Acrobat Pro alternative.",
    images: ["https://cogify.me/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/brand/logo_white.png", media: "(prefers-color-scheme: dark)" },
      { url: "/brand/logo.png", media: "(prefers-color-scheme: light)" },
      { url: "/brand/logo_white.png" },
    ],
    apple: "/brand/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <ThemeScript />
        <JsonLdSchemas />
      </head>
      <body className="min-h-screen bg-[#fbfcfe] dark:bg-[#06080d] text-zinc-900 dark:text-zinc-100 antialiased selection:bg-indigo-500/20 dark:selection:bg-indigo-500/30 selection:text-indigo-900 dark:selection:text-white flex flex-col justify-between transition-colors duration-200">
        <ThemeProvider defaultTheme="system">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
