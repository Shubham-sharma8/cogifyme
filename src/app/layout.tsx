import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/footer/footer";
import { siteConfig } from "@/config/site";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeScript } from "@/components/theme/theme-script";
import { JsonLdSchemas } from "@/components/seo/jsonld-schemas";
import { CrispChat } from "@/components/chat/crisp-chat";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — We Provide Solutions | Everyday Software & Enterprise Tools`,
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
    title: `${siteConfig.name} — We Provide Solutions | Everyday Software & Enterprise Tools`,
    description:
      "Cogify engineers high-performance everyday apps and custom enterprise software solutions. We replace expensive licenses with lightweight, sovereign tools. EmDoc is our flagship product.",
    siteName: siteConfig.name,
    images: [
      {
        url: "https://cogify.me/og-image.png",
        secureUrl: "https://cogify.me/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Cogify — Everyday Software & Solutions Engineered with Enterprise Precision",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — We Provide Solutions | Everyday Software & Enterprise Tools`,
    description:
      "Cogify engineers high-performance everyday apps and custom enterprise software solutions. We replace expensive licenses with lightweight, sovereign tools. EmDoc is our flagship product.",
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
          <CrispChat />
        </ThemeProvider>
      </body>
    </html>
  );
}
