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
  elementHider: ElementHiderConfig;
  principles: PrincipleItem[];
  futureProducts: FutureProductItem[];
}

export interface ScreenshotItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tag: string;
  description: string;
  highlights: string[];
}

export interface EmDocConfig {
  name: string;
  version: string;
  build: string;
  downloadUrl?: string;
  appSize: string;
  ramUsage: string;
  pricingModel: string;
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
  screenshots: ScreenshotItem[];
}

export interface ElementHiderConfig {
  name: string;
  tagline: string;
  subtitle: string;
  promotionalText: string;
  shortDescription: string;
  fullDescription: string;
  philosophy: string;
  version: string;
  primaryCategory: string;
  secondaryCategory: string;
  pricingModel: string;
  platform: string;
  appStoreUrl?: string;
  features: {
    title: string;
    description: string;
    tag: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  screenshots: ScreenshotItem[];
  keywords: string[];
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
  badgeColor?: string;
}

export const siteConfig: SiteConfig = {
  name: "COGIFY",
  tagline: "We provide solutions. Everyday software engineered with enterprise precision.",
  domain: "cogify.me",
  url: "https://cogify.me",
  ogImage: "https://cogify.me/og-image.png",
  description:
    "Cogify provides high-performance software solutions and lightweight everyday apps for desktop and mobile. Completely free for individuals, mostly open source, and engineered to enterprise-grade standards. We partner with organizations to replace expensive software licenses with fast, audited solutions. EmDoc is our flagship macOS product.",
  keywords: [
    "Cogify",
    "Cogify solutions",
    "software solutions",
    "enterprise software license replacement",
    "sovereign software",
    "air-gapped software",
    "EmDoc",
    "EmDoc PDF Workstation",
    "macOS PDF editor",
    "best free PDF editor Mac",
    "Adobe Acrobat Pro alternative Mac",
    "lightweight PDF editor macOS",
    "5MB PDF reader",
    "low RAM PDF app",
    "low memory PDF workstation Mac",
    "fastest PDF viewer macOS",
    "offline PDF editor",
    "air-gapped PDF suite",
    "free PDF workstation macOS",
    "PDF organizer merge split reorder",
    "compress PDF Mac offline",
    "enterprise software license replacement",
    "zero cloud PDF reader HIPAA compliant",
    "Apple Silicon M1 M2 M3 M4 PDF app",
    "Bates numbering PDF Mac",
    "Element Hider",
    "Element Hider Safari Extension",
    "Safari extension",
    "hide webpage elements",
    "clean web browsing",
    "Safari ad blocker alternative",
    "hide anything Safari",
    "distraction free browsing iOS",
    "Cogify",
    "cogify.me",
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
    appSize: "5.0 MB",
    ramUsage: "~45 MB baseline",
    pricingModel: "100% Free Forever — All Features Included",
    downloadUrl: process.env.NEXT_PUBLIC_EMDOC_DOWNLOAD_URL || "",
    minMacOsVersion: "macOS 13.0 (Ventura, Sonoma, Sequoia)",
    supportedArchitectures: ["Apple Silicon (arm64)", "Intel 64-bit (x86_64)"],
    tagline: "A powerful, 5.0 MB PDF workstation designed for macOS.",
    shortDescription:
      "Engineered from the ground up on modern Swift and C++ with zero cloud dependencies. At just 5.0 MB and ~45 MB RAM usage, EmDoc delivers desktop responsiveness, full editing, compression, and redaction with 100% of features free.",
    fullDescription:
      "EmDoc is a professional PDF workstation crafted specifically for users who value speed, privacy, and precision. Unlike legacy suites that weigh over 1 GB and consume gigabytes of memory, EmDoc packs a complete editing, organization, compression, and signing suite into a 5.0 MB native binary with zero telemetry.",
    features: [
      {
        title: "Tiny 5.0 MB Footprint & Minimal RAM",
        description:
          "Engineered in native Swift and CoreGraphics. Consumes just ~45 MB of RAM baseline compared to 800 MB - 2.5 GB in competitor suites, running silently without battery drain or thermal throttling.",
        tag: "Ultra-Lightweight",
      },
      {
        title: "100% Free — All Features Included",
        description:
          "Every single capability—editing, page reorganization, compression, watermark injection, Bates numbering, and redactions—is completely free for users. Zero paywalls, zero locked features.",
        tag: "100% Free",
      },
      {
        title: "100% Air-Gapped & Zero-Cloud Guarantee",
        description:
          "All document processing, rendering, compression, and OCR happen strictly on your local machine. No tracking, zero telemetry, and zero data leaves your device.",
        tag: "Privacy & Sovereignty",
      },
      {
        title: "Visual Page Organization & Manipulation",
        description:
          "Intuitive visual grid view to drag-and-drop reorder pages, rotate, duplicate, cut/copy/paste, insert blank pages, extract ranges, and delete pages with instant thumbnail preview.",
        tag: "Page Management",
      },
      {
        title: "Interactive Canvas & Freehand Annotations",
        description:
          "Retina-calibrated vector canvas supporting fluid pen strokes, highlighters, geometric callouts, custom rubber stamps (Approved, Confidential, Draft), and glyph-accurate text overlays.",
        tag: "Vector Editing",
      },
      {
        title: "Offline PDF Compression Engine",
        description:
          "Reduce file size by up to 75% on-device with 3 visual quality presets or a custom target MB limit. No confidential contracts are ever uploaded to cloud conversion servers.",
        tag: "On-Device Compression",
      },
    ],
    specifications: [
      { label: "Application Binary Size", value: "5.0 MB (Ultra-compact native app)" },
      { label: "Memory Footprint", value: "~45 MB baseline (Tile-based demand streaming)" },
      { label: "Pricing for Individuals", value: "100% Free — Every feature unlocked" },
      { label: "Target Operating System", value: "macOS 13.0 (Ventura) or later" },
      { label: "Hardware Architecture", value: "Universal Binary (Apple Silicon M-Series & Intel x86_64)" },
      { label: "Mobile Companion", value: "iOS App In Active Development (iPhone & iPadOS)" },
      { label: "Network Connectivity", value: "0 bytes transmitted / 100% Offline by Architecture" },
      { label: "Security & Encryption", value: "AES-256 Password Protection & Verification" },
      { label: "Product Support", value: "contact@cogify.me" },
      { label: "Creator & Architect", value: "Shubham Sharma (Delhi)" },
    ],
    screenshots: [
      {
        id: "home",
        title: "Document Workstation & Reader",
        subtitle: "Multi-tab document reader with instant tile rendering and zero telemetry",
        image: "/brand/EmDoc_home.png",
        tag: "Core Reader",
        description:
          "Native macOS PDF viewer with continuous and page-by-page scrolling, instant zoom, multi-tab document bar, sidebar thumbnails, bookmarks, and layer navigation.",
        highlights: [
          "Sub-millisecond page rasterization",
          "Multi-document tabs with persistent state",
          "100% offline air-gapped protection badge",
          "Baseline RAM usage of just ~45 MB",
        ],
      },
      {
        id: "organise",
        title: "Visual Page Organizer",
        subtitle: "High-productivity grid view for structural document management",
        image: "/brand/Organise.png",
        tag: "Page Management",
        description:
          "Comprehensive thumbnail grid allowing you to drag-and-drop reorder pages, rotate left/right, duplicate, cut, copy, paste, insert blank pages, and extract custom page ranges.",
        highlights: [
          "Interactive drag-and-drop reordering",
          "Batch page selection and operations",
          "Quick duplicate, insert blank, and extract",
          "Rotational adjustments at 90° increments",
        ],
      },
      {
        id: "edit",
        title: "Full PDF Editing & Ink Palette",
        subtitle: "Drawing, annotations, callouts, and official security stamps",
        image: "/brand/edit_pdf.png",
        tag: "Vector Editing",
        description:
          "Rich floating tool palette with pressure-responsive pen and pencil, highlighters, geometric markup, sticky notes, and certified rubber stamps (Approved, Confidential, Draft, Received).",
        highlights: [
          "Fluid freehand drawing and vector pen",
          "Pre-configured and custom rubber stamps",
          "Non-destructive annotations & highlight layers",
          "Interactive comment and review sidebar",
        ],
      },
      {
        id: "compress",
        title: "100% On-Device Compression",
        subtitle: "Reduce PDF file sizes dramatically without cloud uploads",
        image: "/brand/compress.png",
        tag: "Offline Optimizer",
        description:
          "Compress bulky PDFs with 3 intelligent presets (Balanced, Smallest Size, Highest Quality) or enter a custom target MB ceiling (0.5MB, 1MB, 2MB, 5MB). Runs completely on your device.",
        highlights: [
          "Up to 75% file size reduction",
          "Custom Target Size (MB) ceiling limiter",
          "100% on-device processing: files never leave Mac",
          "Real-time estimated savings indicator",
        ],
      },
      {
        id: "watermark",
        title: "Precision Watermark Engine",
        subtitle: "Angle-calibrated security stamps and background text overlays",
        image: "/brand/watermark.png",
        tag: "Security Overlays",
        description:
          "Apply customized watermarks across document pages with one click presets (CONFIDENTIAL, DRAFT, SAMPLE, COPY), rotation angles (-45°, 0°, 45°, 90°), opacity sliders, and live preview.",
        highlights: [
          "Quick presets (Confidential, Sample, Urgent)",
          "Rotation controls: diagonal, horizontal, inverted",
          "Custom opacity, font, color, and page ranges",
          "Option to add as draggable canvas overlay",
        ],
      },
      {
        id: "header-footer",
        title: "Running Headers & Bates Numbering",
        subtitle: "Interactive macro placement for formal documentation and legal filings",
        image: "/brand/header_custom.png",
        tag: "Document Layout",
        description:
          "Easily configure left, center, and right headers and footers. Insert dynamic macros for Page Number, Total Pages, Page 1 of N, Date, Document Title, and Author with real-time preview.",
        highlights: [
          "Dynamic macro buttons for instant page numbering",
          "Interactive drag margins (top, bottom, sides)",
          "Bates numbering and legal compliance ready",
          "WYSIWYG live page preview",
        ],
      },
      {
        id: "print",
        title: "Professional Print & Imposition",
        subtitle: "Advanced paper sizing, booklet layout, and macOS printer integration",
        image: "/brand/print.png",
        tag: "Print Engine",
        description:
          "Complete macOS print workstation supporting paper sizes (A4, Letter, Legal), multi-page imposition, auto-rotation scaling, collating, and direct high-resolution PDF generation.",
        highlights: [
          "WYSIWYG sheet preview at 300 DPI",
          "Auto-rotate and scale-to-fit paper options",
          "Flexible page ranges and odd/even selection",
          "Direct integration with macOS print dialog",
        ],
      },
      {
        id: "theme",
        title: "Reading Canvas Themes",
        subtitle: "Tailored visual ergonomics for prolonged reading and review",
        image: "/brand/Theme.png",
        tag: "Visual Ergonomics",
        description:
          "Switch your reading canvas instantly between Light, Dark, and Sepia modes to protect your eyes during extended legal document review or low-light coding sessions.",
        highlights: [
          "Native Dark Mode, Crisp Light, and Warm Sepia",
          "Retains high document text contrast",
          "Smooth transition without re-rendering delays",
          "Tailored for both daytime and late-night work",
        ],
      },
    ],
  },
  elementHider: {
    name: "Element Hider – Hide Anything",
    tagline: "Browse Your Way",
    subtitle: "Browse Your Way",
    promotionalText:
      "Hide anything that gets in your way. Clean up webpages, remove distractions, and make Safari feel like your browser again.",
    shortDescription:
      "Take control of the web. Element Hider lets you hide distracting, annoying, or unnecessary elements from webpages in Safari. See something you don't want to see? Hide it.",
    fullDescription:
      "From oversized banners and annoying pop-ups to distracting sections, recommendations, sidebars, comments, images, and other page elements — Element Hider puts you in control of what stays on your screen. Does not alter the content you want to keep; simply lets you decide what belongs on your screen.",
    philosophy:
      "The web doesn't need to look the same for everyone. Element Hider gives you the freedom to decide what you want to see. Hide the stuff that gets in the way and keep the parts of the web that matter to you. Simple. Fast. Yours.",
    version: "1.0",
    primaryCategory: "Utilities",
    secondaryCategory: "Productivity",
    pricingModel: "100% Free Forever — Zero Ads, Zero Subscriptions",
    platform: "Safari for iOS, iPadOS & macOS",
    appStoreUrl: "",
    features: [
      {
        title: "Hide Anything",
        description: "Select webpage elements and hide them from view with a single tap.",
        tag: "Total Control",
      },
      {
        title: "Clean Up Webpages",
        description: "Remove visual clutter, oversized banners, and keep the content that actually matters.",
        tag: "Focus First",
      },
      {
        title: "One-Tap Control",
        description: "Quickly enable or disable Element Hider whenever you want directly in Safari.",
        tag: "Instant Toggle",
      },
      {
        title: "Global Controls",
        description: "Turn your preferred hiding rules on or off across all Safari tabs and windows.",
        tag: "Safari Wide",
      },
      {
        title: "Customize Your Browsing",
        description: "Create a cleaner, more focused experience on the websites you use every single day.",
        tag: "Tailored Web",
      },
      {
        title: "Built for Safari",
        description: "Designed specifically for Safari and integrated seamlessly into your Apple browsing experience.",
        tag: "Native Architecture",
      },
    ],
    specifications: [
      { label: "Application Type", value: "Safari Web Extension" },
      { label: "Platforms Supported", value: "iOS 16+, iPadOS 16+, and macOS Safari" },
      { label: "Data Transmission", value: "0 bytes transmitted / 100% Local Execution" },
      { label: "Browsing History", value: "Never Tracked, Never Stored, Never Transmitted" },
      { label: "Pricing for Individuals", value: "100% Free Forever — No In-App Purchases" },
      { label: "Rule Storage", value: "Private Apple Local Extension Container" },
      { label: "Product Version", value: "v1.0 (Initial Launch)" },
      { label: "Publisher", value: "COGIFY (cogify.me)" },
    ],
    screenshots: [
      {
        id: "home",
        title: "Companion App & Setup",
        subtitle: "Quick setup guide and overview on iOS",
        image: "/brand/Element-Hider/Home.png",
        tag: "Getting Started",
        description:
          "Welcome screen guiding you through enabling the extension in Safari with two simple taps.",
        highlights: [
          "Zero account required",
          "One-time 10-second setup",
          "Clear activation instructions",
        ],
      },
      {
        id: "settings",
        title: "In Settings",
        subtitle: "Seamless native Safari extension integration",
        image: "/brand/Element-Hider/in_settings.png",
        tag: "Native Settings",
        description:
          "Easily manage permissions and extension preferences directly inside Apple iOS Safari Settings.",
        highlights: [
          "Standard Apple extension security",
          "Granular website permissions",
          "Toggle anytime on or off",
        ],
      },
      {
        id: "safari",
        title: "In Safari",
        subtitle: "Integrated menu right inside the Safari toolbar",
        image: "/brand/Element-Hider/in_safari.png",
        tag: "Safari Toolbar",
        description:
          "Access Element Hider from the Safari address bar menu (puzzle icon) without ever leaving the page you are reading.",
        highlights: [
          "Instant access from address bar",
          "Quick toggle on/off",
          "Clean, minimalist Apple UI",
        ],
      },
      {
        id: "working",
        title: "Selecting & Hiding",
        subtitle: "Interactive visual selection of unwanted page elements",
        image: "/brand/Element-Hider/Working.png",
        tag: "Visual Picker",
        description:
          "Tap on banners, sidebars, sticky headers, pop-ups, or comment sections to immediately remove them from your view.",
        highlights: [
          "Interactive visual element targeting",
          "Instant preview of hidden items",
          "Non-destructive page cleanup",
        ],
      },
      {
        id: "result",
        title: "Distraction-Free Result",
        subtitle: "Read clean articles without visual noise",
        image: "/brand/Element-Hider/Result.png",
        tag: "Clean Web",
        description:
          "Enjoy articles, blogs, news, and tools exactly the way you want to see them: calm, focused, and distraction-free.",
        highlights: [
          "All distracting clutter eliminated",
          "Retains original page layout and content",
          "Lightning fast with zero battery drain",
        ],
      },
    ],
    keywords: [
      "element",
      "hide",
      "cleaner",
      "safari",
      "web",
      "website",
      "block",
      "remove",
      "clutter",
      "distraction",
      "focus",
      "customize",
      "browse",
    ],
  },
  principles: [
    {
      number: "01",
      title: "Free for daily use",
      description:
        "We build apps that everyday users can rely on completely for free. We don't cripple basic features or put up annoying paywalls.",
    },
    {
      number: "02",
      title: "Lightweight and efficient",
      description:
        "Software should not commandeer your RAM or drain your battery. EmDoc is just 5.0 MB and uses ~45 MB of RAM because we respect your hardware.",
    },
    {
      number: "03",
      title: "Privacy by architecture",
      description:
        "Zero-cloud data sovereignty isn't a marketing buzzword. Our software runs 100% offline with zero telemetry and zero network requests.",
    },
    {
      number: "04",
      title: "Enterprise level engineering",
      description:
        "Our free tools are engineered to strict enterprise standards so organizations can deploy them with total confidence.",
    },
    {
      number: "05",
      title: "Transparent enterprise partnerships",
      description:
        "We help companies stop overpaying for expensive software licenses by offering free trials, code audits, and ultra-affordable transparent pricing.",
    },
  ],
  futureProducts: [
    {
      title: "EmDoc for iOS",
      description: "Touch-optimized PDF document viewer and markup companion for iPhone and iPad.",
      status: "In Active Development",
      badgeColor: "emerald",
    },
    {
      title: "EmDoc for iPadOS",
      description:
        "Engineered for Apple Pencil with full vector drawing, page organizer, and side-by-side document review on the iPad.",
      status: "In Development",
      badgeColor: "indigo",
    },
    {
      title: "Enterprise Custom Tool Suite",
      description:
        "Cogify partners with companies to build lightweight, bespoke replacements for other software they currently overpay for on licenses.",
      status: "Now Onboarding",
      badgeColor: "purple",
    },
    {
      title: "EmDoc for Windows",
      description:
        "High-performance native Windows workstation with on-device hardware acceleration and zero cloud dependencies.",
      status: "Planned Architecture",
      badgeColor: "zinc",
    },
  ],
};
