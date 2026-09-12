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
  invert: ColourInvertConfig;
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
  screenshotsMac?: ScreenshotItem[];
  keywords: string[];
}

export interface ColourInvertConfig {
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
  modes: {
    name: string;
    subtitle: string;
    description: string;
    tag: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  screenshotsMac: ScreenshotItem[];
  screenshotsIos: ScreenshotItem[];
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
    screenshotsMac: [
      {
        id: "home-mac",
        title: "Companion App & Shortcut",
        subtitle: "Activate and hide with ⌥ + ⇧ + H",
        image: "/brand/Element-Hider/Home_Mac.png",
        tag: "Getting Started",
        description:
          "Simple setup window guiding you to enable the extension in macOS Safari Settings. Access the element picker instantly via the Option+Shift+H keyboard shortcut.",
        highlights: [
          "Global shortcut: ⌥ + ⇧ + H",
          "One-click activation guide",
          "100% on-device & private",
        ],
      },
      {
        id: "settings-mac",
        title: "macOS Safari Settings",
        subtitle: "Native Safari Extension management",
        image: "/brand/Element-Hider/in_settings_mac.png",
        tag: "Native Settings",
        description:
          "Enable Element Hider under Safari Settings > Extensions. Enjoy standard Apple sandboxing with zero external network connectivity.",
        highlights: [
          "Standard macOS Safari Extension",
          "Granular website permissions",
          "Zero telemetry & zero tracking",
        ],
      },
      {
        id: "safari-mac",
        title: "Safari Toolbar Popover",
        subtitle: "Quick toggle directly in Safari's toolbar",
        image: "/brand/Element-Hider/in_safari_mac.png",
        tag: "Toolbar Integration",
        description:
          "Access Element Hider directly from the macOS Safari navigation toolbar to trigger element selection, view hidden count, or toggle rules on/off.",
        highlights: [
          "Seamless macOS toolbar popover",
          "One-click point & hide trigger",
          "Active status indicator",
        ],
      },
      {
        id: "working-mac",
        title: "Target Element Selection",
        subtitle: "Hover over unwanted elements with visual bounding box",
        image: "/brand/Element-Hider/Working_Mac.png",
        tag: "Precision Picker",
        description:
          "Hover over any element on the page — search boxes, popups, hero banners, or sidebars. Element Hider highlights the target with a crisp outline.",
        highlights: [
          "Visual hover bounding box",
          "Smart DOM element detection",
          "Target parent or child tags easily",
        ],
      },
      {
        id: "process-mac",
        title: "Interactive Confirmation",
        subtitle: "Always on this website or session-only",
        image: "/brand/Element-Hider/Process_Mac.png",
        tag: "Rule Control",
        description:
          "Confirm which element to hide with a clean native prompt. Choose to hide it permanently for this website or only for your current session.",
        highlights: [
          "Permanent or session-only options",
          "Displays target element tag & domain",
          "Instant undo anytime",
        ],
      },
      {
        id: "result-mac",
        title: "Distraction-Free Webpage",
        subtitle: "Clean desktop browsing without visual clutter",
        image: "/brand/Element-Hider/Result_Mac.png",
        tag: "Clean Web",
        description:
          "The unwanted element is cleanly removed from the DOM layout. Webpages render faster, read better, and stay focused on what you care about.",
        highlights: [
          "Completely eliminates unwanted elements",
          "Preserves core page responsiveness",
          "Ultra-fast local CSS rule injection",
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
  invert: {
    name: "Colour Invert",
    tagline: "Invert the Web",
    subtitle: "Invert the Web",
    promotionalText:
      "Flip webpage colors instantly. Reduce harsh brightness, change the way websites look, and browse with a completely different visual experience.",
    shortDescription:
      "See the web differently. Colour Invert is a simple Safari extension that lets you invert webpage colors with a tap.",
    fullDescription:
      "Turn bright webpages dark, flip colors for a different visual experience, or simply experiment with a completely new way to browse. Whether you're reading at night, looking for a high-contrast visual experience, or just want more control over how websites appear, Colour Invert puts the choice in your hands.",
    philosophy:
      "Some websites are bright. Some are colorful. Some are simply easier to look at when their colors are flipped. Colour Invert gives you another option. Turn it on when you want a different visual experience. Turn it off when you don't. Your browser. Your screen. Your choice.",
    version: "1.0",
    primaryCategory: "Utilities",
    secondaryCategory: "Accessibility",
    pricingModel: "100% Free Forever — Zero Ads, Zero Subscriptions",
    platform: "Safari for macOS, iOS & iPadOS",
    appStoreUrl: "",
    features: [
      {
        title: "Instant Color Inversion",
        description: "Invert webpage colors quickly without leaving Safari.",
        tag: "Instant Tap",
      },
      {
        title: "Browse Your Way",
        description: "Change the visual appearance of websites to match your preferences.",
        tag: "Custom Look",
      },
      {
        title: "Simple Controls",
        description: "Enable or disable inversion whenever you want.",
        tag: "Effortless",
      },
      {
        title: "Global Control",
        description: "Quickly turn Colour Invert on or off across your browsing experience.",
        tag: "Universal",
      },
      {
        title: "Designed for Safari",
        description: "Built specifically as a Safari extension for a seamless browsing experience.",
        tag: "Apple Native",
      },
      {
        title: "Clean & Minimal",
        description: "No complicated settings. Just the control you need.",
        tag: "Distraction Free",
      },
    ],
    modes: [
      {
        name: "Smart Invert",
        subtitle: "Intelligent Contrast Preservation",
        description:
          "Inverts page backgrounds and text while keeping photos, videos, and SVGs completely natural.",
        tag: "Default Mode",
      },
      {
        name: "Soft Invert",
        subtitle: "Comfortable Low-Glare Reading",
        description:
          "Smooth, eye-friendly contrast curve designed to eliminate harsh white glare during long nighttime reading sessions.",
        tag: "Night Reading",
      },
      {
        name: "Full Invert",
        subtitle: "Complete High-Contrast Inversion",
        description:
          "Full monochromatic color inversion for high-contrast accessibility with optional media preservation.",
        tag: "High Contrast",
      },
    ],
    specifications: [
      { label: "Application Type", value: "Safari Web Extension & Companion App" },
      { label: "Platforms Supported", value: "macOS Safari, iOS 16+, iPadOS 16+" },
      { label: "Data Transmission", value: "0 bytes transmitted / 100% Local DOM Filter" },
      { label: "Browsing History", value: "Never Tracked, Never Stored, Never Transmitted" },
      { label: "Pricing for Individuals", value: "100% Free Forever — No In-App Purchases" },
      { label: "Website Rules Storage", value: "Private Apple Local Extension Container" },
      { label: "Product Version", value: "v1.0 (Initial Launch)" },
      { label: "Publisher", value: "COGIFY (cogify.me)" },
    ],
    screenshotsMac: [
      {
        id: "mac-app",
        title: "macOS Companion App",
        subtitle: "Configure global modes and smart optimizations",
        image: "/invert/Mac/App.png",
        tag: "macOS App",
        description:
          "Clean macOS companion app allowing you to choose between Smart Invert, Soft Invert, and Full Invert, and configure site-specific adaptations.",
        highlights: [
          "Native macOS companion window",
          "Smart Invert, Soft Invert & Full Invert",
          "Auto-detect native dark mode sites",
        ],
      },
      {
        id: "mac-safari",
        title: "Safari Toolbar Popover",
        subtitle: "Live controls directly inside Safari on ChatGPT",
        image: "/invert/Mac/in_Safari.png",
        tag: "Safari Popover",
        description:
          "Control Colour Invert with a single click from Safari's toolbar. Adjust intensity and toggle per-site behavior while viewing ChatGPT.",
        highlights: [
          "Instant toggle from address bar",
          "Inversion intensity slider",
          "Site status: Inverted or Excluded",
        ],
      },
      {
        id: "mac-youtube",
        title: "Protected Media & Video",
        subtitle: "Watch YouTube videos without distorted colors",
        image: "/invert/Mac/in_youtube.png",
        tag: "Media Protection",
        description:
          "Colour Invert intelligently detects video players, canvas elements, and thumbnails, keeping video colors natural while darkening the surrounding interface.",
        highlights: [
          "Video player untouched and vibrant",
          "Thumbnails preserved naturally",
          "Darkened YouTube browsing experience",
        ],
      },
      {
        id: "mac-manuals",
        title: "Fine-Tune Appearance",
        subtitle: "Custom brightness, contrast, warmth & site rules",
        image: "/invert/Mac/Manuals.png",
        tag: "Customization",
        description:
          "Fine-tune brightness, contrast, and warmth (sepia tint) for individual sites or set sites like cogify.me to Never Invert.",
        highlights: [
          "Brightness and contrast sliders",
          "Warmth (Sepia Tint) slider for night comfort",
          "Per-site whitelist & exclusion list",
        ],
      },
      {
        id: "mac-fast",
        title: "Clean High Contrast",
        subtitle: "Instant dark background on bright utility sites",
        image: "/invert/Mac/in_fast.png",
        tag: "Night Reading",
        description:
          "Turn blinding white utility sites like Fast.com into soothing, high-contrast dark reading surfaces instantly.",
        highlights: [
          "Eliminates blinding white backgrounds",
          "Preserves speedometer graphics and gauges",
          "Zero lag or layout reflow",
        ],
      },
    ],
    screenshotsIos: [
      {
        id: "ios-home",
        title: "iOS Companion App",
        subtitle: "Global mode selection & site adaptations",
        image: "/invert/Ios/App_Home.png",
        tag: "iOS Dashboard",
        description:
          "The intuitive iOS companion app lets you switch modes, enable YouTube & ChatGPT optimizations, and auto-detect already-dark sites.",
        highlights: [
          "Smart Invert / Soft Invert / Full Invert",
          "YouTube, ChatGPT & GitHub ready",
          "Auto-detect already-dark websites",
        ],
      },
      {
        id: "ios-google",
        title: "OLED Dark Search",
        subtitle: "Pure deep black search results with amber accents",
        image: "/invert/Ios/Google_search.png",
        tag: "Search Experience",
        description:
          "Browse Google Search in pure pitch-black OLED dark mode with high-contrast text and comfortable amber link highlights.",
        highlights: [
          "Deep black background saves battery on OLED",
          "Clear, readable high-contrast text",
          "Preserves Google logo and image search",
        ],
      },
      {
        id: "ios-chatgpt",
        title: "ChatGPT Dark Theme",
        subtitle: "Comfortable AI conversations at night",
        image: "/invert/Ios/Chatgpt_Home.png",
        tag: "AI Workflows",
        description:
          "Interact with AI models with deep black contrast that reduces eye strain during late-night brainstorming sessions.",
        highlights: [
          "Sleek minimalist dark interface",
          "High legibility for long text blocks",
          "Smooth, native-feeling rendering",
        ],
      },
      {
        id: "ios-chat",
        title: "Chat & Code Syntax",
        subtitle: "Preserved code blocks and conversation bubbles",
        image: "/invert/Ios/chatgpt_chat.png",
        tag: "Code & Chat",
        description:
          "Read responses and code snippets with preserved syntax colors and distraction-free contrast.",
        highlights: [
          "Protected code blocks & math",
          "Chat bubbles styled seamlessly",
          "Fast on-device rendering",
        ],
      },
      {
        id: "ios-sliders",
        title: "Appearance Controls",
        subtitle: "Fine-tune intensity, brightness, contrast & warmth",
        image: "/invert/Ios/App_2.png",
        tag: "Visual Sliders",
        description:
          "Dial in the exact look that suits your vision: adjust inversion intensity, brightness, contrast, and sepia warmth.",
        highlights: [
          "Inversion Intensity (0–100%)",
          "Brightness & Contrast sliders",
          "Sepia Warmth tint for night reading",
        ],
      },
      {
        id: "ios-preservation",
        title: "Content Preservation Engine",
        subtitle: "Granular control over what stays natural",
        image: "/invert/Ios/App_3.png",
        tag: "Preservation",
        description:
          "Toggle preservation rules for photos, videos, colored SVGs, and canvas elements to prevent unnatural photographic negatives.",
        highlights: [
          "Preserve Images & Photos",
          "Preserve Videos & Streams",
          "Preserve Colored SVGs & Canvas",
        ],
      },
      {
        id: "ios-settings",
        title: "Safari Extension Integration",
        subtitle: "Native activation in iOS Settings",
        image: "/invert/Ios/app_in_settings.png",
        tag: "Apple Settings",
        description:
          "Activate Colour Invert in iOS Settings > Safari > Extensions with standard Apple privacy and security guarantees.",
        highlights: [
          "Standard iOS Safari Extension",
          "No account or login required",
          "Zero external network requests",
        ],
      },
    ],
    keywords: [
      "colour",
      "invert",
      "dark",
      "mode",
      "safari",
      "colors",
      "contrast",
      "brightness",
      "night",
      "web",
      "website",
      "accessibility",
      "screen",
      "filter",
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
