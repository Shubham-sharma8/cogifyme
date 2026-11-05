import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/footer/footer";
import { siteConfig } from "@/config/site";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeScript } from "@/components/theme/theme-script";
import { JsonLdSchemas } from "@/components/seo/jsonld-schemas";
import { CrispChat } from "@/components/chat/crisp-chat";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f5" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0d" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Free Native macOS, Safari Apps & Web Studios`,
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
    title: `${siteConfig.name} — Free Native macOS, Safari Apps & Web Studios`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "https://cogify.me/og-image.png",
        secureUrl: "https://cogify.me/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Cogify — Real-Time Web Studios, Biodata Maker, SSB Prep & Native macOS, iOS & Safari Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Free Native macOS, Safari Apps & Web Studios`,
    description: siteConfig.description,
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${instrumentSerif.variable} scroll-smooth`}
    >
      <head>
        <ThemeScript />
        <JsonLdSchemas />
      </head>
      <body className="min-h-dvh bg-[#f5f5f5] dark:bg-[#0b0b0d] text-black dark:text-white antialiased selection:bg-black/15 dark:selection:bg-white/20 selection:text-black dark:selection:text-white flex flex-col justify-between transition-colors duration-200">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:rounded-full focus:bg-black focus:text-white focus:font-semibold focus:text-xs focus:shadow-xl focus:outline-none"
        >
          Skip to main content
        </a>
        <ThemeProvider defaultTheme="light">
          <Navbar />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
          <CrispChat />
        </ThemeProvider>
      </body>
    </html>
  );
}
