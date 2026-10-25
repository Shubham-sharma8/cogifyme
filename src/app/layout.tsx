import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/footer/footer";
import { siteConfig } from "@/config/site";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeScript } from "@/components/theme/theme-script";
import { JsonLdSchemas } from "@/components/seo/jsonld-schemas";
import { CrispChat } from "@/components/chat/crisp-chat";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfcfe" },
    { media: "(prefers-color-scheme: dark)", color: "#06080d" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Real-Time Web Solutions, Biodata Maker & Native Apple Apps`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    { name: "Shubham Sharma", url: "https://cogify.me/about" },
    { name: "COGIFY", url: "https://cogify.me" },
  ],
  creator: "Shubham Sharma (COGIFY)",
  publisher: "COGIFY",
  category: "technology",
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} — Real-Time Web Solutions, Biodata Maker (biodata.cogify.me) & Native Apple Apps`,
    description:
      "Cogify engineers real-time browser web studios and 100% offline native apps for macOS, iOS, iPadOS, and Safari: Marriage Biodata Maker (biodata.cogify.me), EmDoc PDF Workstation, Ad Blocker, ReaderEasy, WebClear, WebLenses, Element Hider, and Colour Invert.",
    siteName: siteConfig.name,
    images: [
      {
        url: "https://cogify.me/og-image.png",
        secureUrl: "https://cogify.me/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Cogify — Real-Time Web Solutions, Biodata Maker & Native macOS, iOS & Safari Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Real-Time Web Solutions, Biodata Maker & Native Apple Apps`,
    description:
      "Cogify engineers real-time web studios and 100% offline native apps for macOS, iOS, iPadOS, and Safari: Marriage Biodata Maker (biodata.cogify.me), EmDoc, Ad Blocker, ReaderEasy, WebClear, WebLenses, Element Hider, and Colour Invert.",
    images: ["https://cogify.me/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      <body className="min-h-dvh bg-[#fbfcfe] dark:bg-[#06080d] text-zinc-900 dark:text-zinc-100 antialiased selection:bg-indigo-500/20 dark:selection:bg-indigo-500/30 selection:text-indigo-900 dark:selection:text-white flex flex-col justify-between transition-colors duration-200">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:rounded-xl focus:bg-indigo-600 focus:text-white focus:font-semibold focus:text-xs focus:shadow-xl focus:outline-none"
        >
          Skip to main content
        </a>
        <ThemeProvider defaultTheme="system">
          <Navbar />
          <main id="main-content" className="flex-grow">{children}</main>
          <Footer />
          <CrispChat />
        </ThemeProvider>
      </body>
    </html>
  );
}
