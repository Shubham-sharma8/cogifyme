import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { OttieLandingView } from "@/components/ottie/ottie-landing-view";
import { OTTIE_FAQS, OTTIE_DMG_URL } from "@/components/ottie/ottie-data";

export const metadata: Metadata = {
  title:
    "Meet Ottie for macOS — The Cutest White Otter & Robo Desk Companion",
  description:
    "Ottie is a 23-channel spring-animated white otter & Cutest Robo companion living on your macOS desktop. Understands whether you're coding, watching YouTube, or chatting, dresses up in 54 costumes, performs 93 cute animations, and drapes 7 calming full-screen break walls for 20-20-20 eye rest, hydration, family calls, stair walks, and back stretches.",
  keywords: [
    "Ottie",
    "Meet Ottie",
    "Ottie macOS",
    "macOS desktop companion",
    "20-20-20 eye break app mac",
    "Peeka alternative mac",
    "LookAway alternative mac",
    "Cutest Robo-Ottie",
    "macOS break timer",
    "desktop pet mac",
    "Cogify Ottie",
  ],
  alternates: {
    canonical: `${siteConfig.url}/ottie`,
  },
  openGraph: {
    title:
      "Meet Ottie — The Cutest White Otter & Robo Companion Living on Your Mac",
    description:
      "Replace bossy break timers with a spring-animated friend on your macOS desktop: 54 costumes (including Cutest Robo-Ottie!), 93 cute actions, smart screen awareness, and 7 calming full-screen break walls.",
    url: `${siteConfig.url}/ottie`,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/ottie/11-dressing-room-54-presets-robo.png`,
        width: 2120,
        height: 1560,
        alt: "Meet Ottie for macOS — 54 Costumes, Cutest Robo-Ottie Mode, 93 Animations & 7 Full-Screen Break Walls",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Meet Ottie — The Cutest White Otter & Robo Companion for macOS",
    description:
      "54 costumes, Cutest Robo-Ottie mode, 93 spring animations, smart screen activity mirroring, and 7 calming full-screen break walls for macOS.",
    images: [
      `${siteConfig.url}/images/ottie/11-dressing-room-54-presets-robo.png`,
    ],
  },
};

export default function OttiePage() {
  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Ottie",
    alternateName: "Meet Ottie",
    operatingSystem:
      "macOS 14.0+ (Sonoma, Sequoia, Tahoe 26 — Universal Apple Silicon & Intel)",
    applicationCategory: "HealthApplication",
    applicationSubCategory: "Desktop Companion & Mindful Break Studio",
    softwareVersion: "1.0.0",
    fileSize: "2.4MB",
    downloadUrl: OTTIE_DMG_URL,
    installUrl: OTTIE_DMG_URL,
    screenshot: [
      `${siteConfig.url}/images/ottie/01-hero-desktop-peekaboo-soon.png`,
      `${siteConfig.url}/images/ottie/03-break-overlay-counting.png`,
      `${siteConfig.url}/images/ottie/04-menu-popover-white-minimal.png`,
      `${siteConfig.url}/images/ottie/05-otter-faces-expressions.png`,
      `${siteConfig.url}/images/ottie/09-water-cover-display.png`,
      `${siteConfig.url}/images/ottie/11-dressing-room-54-presets-robo.png`,
      `${siteConfig.url}/images/ottie/12-actions-studio-93-animations.png`,
      `${siteConfig.url}/images/ottie/13-robo-cyber-grid-wall.png`,
      `${siteConfig.url}/images/ottie/17-smart-screen-awareness-roaming.png`,
      `${siteConfig.url}/images/ottie/18-welcome-screen-what-is-ottie.png`,
    ],
    description:
      "Ottie is a native macOS spring-animated white otter and Cutest Robo companion that understands your screen activity, dresses in 54 costumes, performs 93 cute actions, and drapes 7 calming full-screen walls for 20-20-20 eye rest, hydration, family calls, stair walks, and back stretches.",
    featureList: [
      "7 Immersive Full-Screen Animated Break Walls (Peekaboo Blanket, Aquatic Water Wave, Talk to Parents Hearth, Cutest Robo Cyber-Grid, Downstairs Staircase, Stretch Zen Bamboo Forest, Cozy Tea Café)",
      "54 Mix-and-Match Costumes & Cutest Robo-Ottie Mode (20 tops, 13 bottoms, 11 gloves, 25 hats)",
      "93 Animated Actions & 13 Sci-Fi Robo Gadgets powered by a 23-channel harmonic spring physics rig",
      "Smart Screen Activity Awareness (codes when you code, watches YouTube on phone when you watch YouTube, sleeps under blanket when idle)",
      "Polite Typing, Camera & Microphone Deferral for Zoom, Meet, Teams & Fullscreen Keynote",
      "2D Screen Corner Roaming & Mouse Cursor Headpats Love",
      "24 Expressive Hand-Crafted Otter Faces & Pocket Collectibles (Sprout, Star clip, Acorn cap, Beanie)",
      "Reminder Timers OFF by Default + 1-Click Right-Click Focus Mode",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: OTTIE_DMG_URL,
    },
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: OTTIE_FAQS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "COGIFY",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Ottie",
        item: `${siteConfig.url}/ottie`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <OttieLandingView />
    </>
  );
}
