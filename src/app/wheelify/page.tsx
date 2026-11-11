import type { Metadata } from "next";
import { WheelifyLandingView } from "@/components/wheelify/wheelify-landing-view";
import { WHEELIFY_FAQS } from "@/components/wheelify/wheelify-data";

export const metadata: Metadata = {
  title:
    "Wheelify — 16-Tool Radial Command Workspace & Frontier AI for macOS",
  description:
    "Hold ⌥ Space or middle-click anywhere on your Mac to summon 16 native utilities under your cursor: Clipboard History, Scientific Calculator (RAD • HEX • BIN), Live ECB Currency & Unit Converter, Frontier AI (Claude Opus 5.5, GPT-6 Astra, Gemini 4 Argon & local Ollama), Window Snapper, Magnifier Color Picker, and Pomodoro Timers. 1.9 MB Universal DMG, MIT Open Source.",
  keywords: [
    "Wheelify",
    "macOS radial menu",
    "Mac radial launcher",
    "radial command workspace macOS",
    "Mac clipboard manager hex color",
    "inline calculator macOS",
    "macOS window manager radial",
    "Claude Opus 5.5 Mac client",
    "GPT-6 Astra macOS",
    "Gemini 4 Argon Mac",
    "Ollama local AI macOS",
    "open source Mac utility Swift",
    "Cogify Wheelify",
  ],
  alternates: {
    canonical: "https://cogify.me/wheelify",
  },
  openGraph: {
    title: "Wheelify — 16 Instant macOS Tools Right Under Your Cursor",
    description:
      "Summon an 8-sector Helium-White radial workspace under your cursor with ⌥ Space or Middle-Click. 16 built-in utilities, live inline math & ECB FX, Claude Opus 5.5 / GPT-6 Astra / Gemini 4 Argon / Ollama, ~20 MB RAM, 100% open-source Swift (MIT).",
    url: "https://cogify.me/wheelify",
    siteName: "COGIFY",
    type: "website",
    images: [
      {
        url: "https://cogify.me/images/wheelify/01-wheelify-hero-radial-workspace.png",
        width: 2560,
        height: 1720,
        alt: "Wheelify v2.0.0 — Radial Command Workspace, Inline Math Bar & Clipboard History for macOS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wheelify — 16-Tool Radial Command Workspace for macOS (MIT)",
    description:
      "Hold ⌥ Space or middle-click to flick toward 16 native Mac utilities in <100 ms—or type math & live ECB currency conversions directly inside the wheel.",
    images: [
      "https://cogify.me/images/wheelify/01-wheelify-hero-radial-workspace.png",
    ],
  },
};

export default function WheelifyPage() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Wheelify",
    operatingSystem: "macOS 14.0 Sonoma, macOS 15.0 Sequoia, macOS 26 Tahoe",
    applicationCategory: "UtilitiesApplication",
    applicationSubCategory: "Radial Command Workspace & Productivity Suite",
    softwareVersion: "2.0.0",
    fileSize: "1.9 MB",
    downloadUrl:
      "https://github.com/Shubham-sharma8/wheelify/releases/download/v2.0.0/Wheelify.dmg",
    codeRepository: "https://github.com/Shubham-sharma8/wheelify",
    license: "https://opensource.org/licenses/MIT",
    image:
      "https://cogify.me/images/wheelify/01-wheelify-hero-radial-workspace.png",
    screenshot: [
      "https://cogify.me/images/wheelify/01-wheelify-hero-radial-workspace.png",
      "https://cogify.me/images/wheelify/02-wheelify-ask-ai-frontier-models.png",
      "https://cogify.me/images/wheelify/03-wheelify-calculator-todo-links.png",
      "https://cogify.me/images/wheelify/04-wheelify-editorial-features-and-settings.png",
      "https://cogify.me/images/wheelify/05-wheelify-dmg-installer-preview.png",
    ],
    description:
      "Native open-source radial command workspace for macOS built in pure Swift, AppKit, and SwiftUI. Consolidates 16 utilities (Clipboard History, Scientific Calculator, Live ECB Currency & Unit Converter, Frontier & Ollama Local AI, Window Manager, Color Picker, Screenshot Studio, Pomodoro Timer, Notes, To-Do, Saved Links, Reminders, Voice Memos, Volume Arc) under your cursor.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Organization",
      name: "COGIFY Technologies",
      url: "https://cogify.me",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: WHEELIFY_FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Cogify",
        item: "https://cogify.me",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Wheelify",
        item: "https://cogify.me/wheelify",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            softwareSchema,
            faqSchema,
            breadcrumbSchema,
          ]),
        }}
      />
      <WheelifyLandingView />
    </>
  );
}
