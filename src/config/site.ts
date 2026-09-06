export interface SiteConfig {
  name: string;
  tagline: string;
  domain: string;
  url: string;
  ogImage: string;
  description: string;
  keywords: string[];
  links: {
    twitter?: string;
    github?: string;
  };
  contact: {
    general: string;
    enterprise: string;
    emdocSupport: string;
  };
  logo: {
    dark: string;
    white: string;
  };
  emdoc: EmDocConfig;
  principles: PrincipleItem[];
  futureProducts: FutureProductItem[];
}

export interface EmDocConfig {
  name: string;
  version: string;
  build: string;
  downloadUrl?: string;
  minMacOsVersion: string;
  supportedArchitectures: string[];
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  features: {
    title: string;
    description: string;
    tag: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
}

export interface PrincipleItem {
  number: string;
  title: string;
  description: string;
}

export interface FutureProductItem {
  title: string;
  description: string;
  status: string;
}

export const siteConfig: SiteConfig = {
  name: "COGIFY",
  tagline: "Software for work that matters.",
  domain: "cogify.me",
  url: "https://cogify.me",
  ogImage: "https://cogify.me/og-image.png",
  description:
    "COGIFY develops high-performance, precision software for individuals, engineering teams, and enterprise organizations. We build software that makes complex work simpler.",
  keywords: [
    "COGIFY",
    "cogify.me",
    "EmDoc",
    "macOS PDF editor",
    "offline PDF",
    "air-gapped PDF",
    "macOS workstation",
    "privacy focused software",
    "native desktop software",
  ],
  links: {},
  contact: {
    general: "contact@cogify.me",
    enterprise: "enterprise@cogify.me",
    emdocSupport: "contact@cogify.me",
  },
  logo: {
    dark: "/brand/logo.png",
    white: "/brand/logo_white.png",
  },
  emdoc: {
    name: "EmDoc",
    version: "0.1 Preview",
    build: "2026.09.05",
    downloadUrl: process.env.NEXT_PUBLIC_EMDOC_DOWNLOAD_URL || "",
    minMacOsVersion: "macOS 13.0 (Ventura, Sonoma, Sequoia)",
    supportedArchitectures: ["Apple Silicon (arm64)", "Intel 64-bit (x86_64)"],
    tagline: "A powerful PDF workspace designed for macOS.",
    shortDescription:
      "Engineered from the ground up on modern C++20 with zero cloud dependencies. Sub-millisecond rendering, Apple Neural Engine OCR, fill & sign, and permanent redaction.",
    fullDescription:
      "EmDoc is a professional PDF workstation crafted specifically for macOS users who value speed, privacy, and precision. Built on a modular, air-gapped C++20 PDF Core, EmDoc executes all document operations purely on your Mac without external telemetry or servers.",
    features: [
      {
        title: "100% Air-Gapped & Zero-Cloud Guarantee",
        description:
          "All document processing, rendering, and optical character recognition happen strictly on your local machine. No tracking, zero telemetry, and zero data leaves your Mac.",
        tag: "Privacy & Sovereignty",
      },
      {
        title: "Modern C++20 Core Architecture",
        description:
          "Built on an independent C++20 engine with pluggable backend abstractions (PDFium and Apple Quartz). Delivers sub-millisecond page rasterization and bounded LRU page caching.",
        tag: "High Performance",
      },
      {
        title: "Apple Vision Neural Engine OCR",
        description:
          "Sub-surface text extraction and optical character recognition running entirely on Apple Neural Engine hardware with sub-pixel bounding box accuracy.",
        tag: "On-Device AI",
      },
      {
        title: "Interactive Canvas & Freehand Annotations",
        description:
          "Retina-calibrated canvas supporting fluid pen strokes, highlighters, underlines, strikethroughs, geometric callouts, and glyph-accurate text overlays.",
        tag: "Vector Editing",
      },
      {
        title: "Fill & Sign with Certified Copy Auditing",
        description:
          "Interactive form workstation with cursive vector signature generation, SHA-256 cryptographic hashes, and verifiable local audit trail stamping.",
        tag: "Digital Signatures",
      },
      {
        title: "Permanent Vector Blackout Redaction",
        description:
          "Sanitize confidential information with true vector-level redaction. Redacted text streams and glyphs are irreversibly purged from the document structure.",
        tag: "Enterprise Security",
      },
    ],
    specifications: [
      { label: "Target Operating System", value: "macOS 13.0 (Ventura) or later" },
      { label: "Hardware Architecture", value: "Universal Binary (Apple Silicon M-Series & Intel x86_64)" },
      { label: "Current Release", value: "Version 0.1 Preview (Build 2026.09.05)" },
      { label: "Core Technology", value: "ISO C++20, Swift 5.9, AppKit / SwiftUI Native" },
      { label: "PDF Specification", value: "ISO 32000-1 (PDF 1.7 compatible)" },
      { label: "Network Connectivity", value: "0 bytes transmitted / 100% Offline by Architecture" },
      { label: "Security & Encryption", value: "AES-256 Password Protection & Verification" },
      { label: "Product Support", value: "contact@cogify.me" },
      { label: "Creator & Architect", value: "Shubham Sharma (Delhi)" },
    ],
  },
  principles: [
    {
      number: "01",
      title: "Build with purpose",
      description:
        "Every feature must solve a real problem. We avoid decorative features that add clutter without utility.",
    },
    {
      number: "02",
      title: "Keep complexity under control",
      description:
        "Powerful software should not require confusing workflows. We design workflows that feel natural and direct.",
    },
    {
      number: "03",
      title: "Performance matters",
      description:
        "Software should feel instant, responsive, and dependable. We optimize at the engine level for predictable latency.",
    },
    {
      number: "04",
      title: "Design is part of engineering",
      description:
        "A product is not finished when the code works. It is finished when the interaction feels tactile and refined.",
    },
    {
      number: "05",
      title: "Build for the long term",
      description:
        "Architecture should allow products to evolve cleanly over decades instead of requiring frequent rewrites.",
    },
  ],
  futureProducts: [
    {
      title: "EmDoc for iOS (iPhone)",
      description:
        "Fast, private PDF reading, markup, form filling, and signing on the go. Coming soon to the Apple App Store.",
      status: "Coming Soon",
    },
    {
      title: "EmDoc for iPadOS",
      description:
        "Bringing our desktop-class C++20 PDF engine and Apple Pencil vector annotation system to the iPad workspace.",
      status: "In Development",
    },
    {
      title: "EmDoc Workstation for Windows",
      description:
        "A native Windows edition engineered for high-performance PC workstations with local hardware acceleration.",
      status: "Planned Architecture",
    },
    {
      title: "COGIFY Systems & Automation",
      description:
        "Headless, air-gapped document transformation and cryptographic audit engines for sovereign server pipelines.",
      status: "Concept & Prototyping",
    },
  ],
};
