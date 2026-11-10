import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { ScreenifyLandingView } from "@/components/screenify/screenify-landing-view";
import { SCREENIFY_FAQS } from "@/components/screenify/screenify-data";

export const metadata: Metadata = {
  title:
    "Screenify for macOS — Open-Source Screen Recorder, 240Hz Auto-Zoom, Local Whisper Captions & Invisible Teleprompter | COGIFY",
  description:
    "Screenify v1.12.0 is a native-grade, open-source macOS screen recorder and studio video editor for Apple Silicon. Captures display, camera, mic, and 240Hz cursor telemetry on separate tracks with automatic RK4 spring click-zooms, 100% local Whisper AI captions, DeepFilterNet neural audio denoising, plain-English AI Smart Edit Assistant, and a content-protected invisible Teleprompter.",
  keywords: [
    "Screenify",
    "Screenify macOS",
    "macOS screen recorder auto zoom",
    "open source screen studio mac",
    "240Hz spring cursor smoothing mac",
    "local Whisper AI captions macOS",
    "invisible teleprompter screen recorder mac",
    "AI video timeline editor macOS",
    "ScreenCaptureKit recorder Apple Silicon",
    "Cogify Screenify",
  ],
  alternates: {
    canonical: `${siteConfig.url}/screenify`,
  },
  openGraph: {
    title:
      "Screenify for macOS — Studio Screen Recorder with 240Hz Auto-Zoom, Local Whisper AI & Invisible Teleprompter",
    description:
      "Screen recordings that look directed, not just captured. Separate tracks for 4K 60fps screen video, 240Hz spring cursor physics, local Whisper captions, neural mic denoising, plain-English AI editing, and an invisible Teleprompter. Free & Open Source (MIT).",
    url: `${siteConfig.url}/screenify`,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/screenify/02-studio-editor.png`,
        width: 2880,
        height: 1800,
        alt: "Screenify v1.12 Studio Video Editor for macOS — 16:9 canvas preview, Aspect Ratio & Background inspector, and multi-track timeline with automatic 2x Zoom blocks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Screenify v1.12 for macOS — Open-Source Screen Studio, 240Hz Auto-Zoom & Local Whisper Captions",
    description:
      "Record display, camera, mic, and 240Hz cursor telemetry on separate tracks. Automatic RK4 spring zooms, local Whisper AI captions, plain-English AI Smart Edit, and an invisible Teleprompter.",
    images: [`${siteConfig.url}/screenify/02-studio-editor.png`],
  },
};

export default function ScreenifyPage() {
  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Screenify",
    operatingSystem:
      "macOS 13.5+ (Ventura, Sonoma, Sequoia, Tahoe 26 — Apple Silicon M1–M4)",
    applicationCategory: "MultimediaApplication",
    applicationSubCategory: "Screen Recording & Video Editing Studio",
    softwareVersion: "1.12.0",
    fileSize: "277MB",
    downloadUrl:
      "https://github.com/Shubham-sharma8/screenify/releases/download/v1.12.0/Screenify.dmg",
    installUrl:
      "https://github.com/Shubham-sharma8/screenify/releases/download/v1.12.0/Screenify.dmg",
    codeRepository: "https://github.com/Shubham-sharma8/screenify",
    license: "https://opensource.org/licenses/MIT",
    screenshot: [
      `${siteConfig.url}/screenify/02-studio-editor.png`,
      `${siteConfig.url}/screenify/01-recorder-and-overlay.png`,
      `${siteConfig.url}/screenify/03-ai-smart-edit-assistant.png`,
      `${siteConfig.url}/screenify/04-cursor-and-captions.png`,
      `${siteConfig.url}/screenify/05-teleprompter-and-permissions.png`,
    ],
    description:
      "Open-source macOS screen recorder and studio video editor with separate synchronized tracks, 240Hz RK4 spring-physics cursor stabilization, automatic click-follow zoom blocks, on-device Whisper AI captions, DeepFilterNet neural noise suppression, plain-English AI Smart Edit Assistant, and a content-protected invisible Teleprompter.",
    featureList: [
      "Separate Synchronized Multi-Track Recording (Display/Window/Area, 240Hz Cursor Telemetry, Mic, System Audio, Camera)",
      "240Hz Runge-Kutta (RK4) Spring-Physics Cursor Stabilization & Vector Cursor Replacement",
      "Automatic Click-Follow Zoom Blocks (1.25x–3.5x) & Post-Capture Aspect Reframing (16:9, 16:10, 4:3, 1:1, 9:16)",
      "AI Smart Edit Assistant for Plain-English Timeline Editing (100% Offline Engine + 1-Click Undo)",
      "100% On-Device Whisper AI Captions in 20+ Languages & DeepFilterNet Neural Mic Denoising",
      "Content-Protected Floating Teleprompter HUD (Invisible in Screen Recordings)",
      "Hardware-Accelerated 4K 60fps MP4, MOV & GIF Export with 5 Studio Presets",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://github.com/Shubham-sharma8/screenify/releases/download/v1.12.0/Screenify.dmg",
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
    mainEntity: SCREENIFY_FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
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
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: `${siteConfig.url}/products`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Screenify",
        item: `${siteConfig.url}/screenify`,
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
      <ScreenifyLandingView />
    </>
  );
}
