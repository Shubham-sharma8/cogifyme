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
  appStoreUrl: string;
  appStoreId: string;
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
  appStoreUrl: string;
  appStoreId: string;
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
  appStoreUrl: string;
  appStoreId: string;
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

export interface SafariAppConfig {
  slug: string;
  name: string;
  shortName: string;
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
  appStoreUrl: string;
  appStoreId: string;
  icon: string;
  accentColor: "emerald" | "indigo" | "amber" | "sky" | "rose" | "violet";
  features: {
    title: string;
    description: string;
    tag: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  screenshotsMac?: ScreenshotItem[];
  screenshotsIos?: ScreenshotItem[];
  screenshotsIpad?: ScreenshotItem[];
  keywords: string[];
}

export interface PrincipleItem {
  number: string;
  title: string;
  description: string;
}

export interface FutureProductItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  status: string;
  platforms?: string;
  category?: string;
  icon?: string;
  previewImage?: string;
  screenshots?: string[];
  badgeColor?: string;
  highlights?: string[];
}

export interface BiodataStudioConfig {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  subtitle: string;
  url: string;
  webUrl: string;
  githubUrl: string;
  version: string;
  platform: string;
  pricingModel: string;
  icon: string;
  previewImage: string;
  ogBanner: string;
  mobilePreview: string;
  shortDescription: string;
  fullDescription: string;
  philosophy: string;
  features: {
    title: string;
    description: string;
    tag: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  communityLinks: {
    name: string;
    href: string;
    badge: string;
    description: string;
  }[];
  keywords: string[];
}

export interface SiteConfig {
  name: string;
  tagline: string;
  domain: string;
  url: string;
  ogImage: string;
  description: string;
  appleDeveloperUrl: string;
  keywords: string[];
  links: {
    twitter?: string;
    github?: string;
    appStore?: string;
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
  readereasy: SafariAppConfig;
  webclear: SafariAppConfig;
  adBlocker: SafariAppConfig;
  weblenses: SafariAppConfig;
  biodata: BiodataStudioConfig;
  principles: PrincipleItem[];
  futureProducts: FutureProductItem[];
}

export const siteConfig: SiteConfig = {
  name: "COGIFY",
  tagline: "We provide solutions. Everyday software engineered with enterprise precision.",
  domain: "cogify.me",
  url: "https://cogify.me",
  ogImage: "https://cogify.me/og-image.png",
  appleDeveloperUrl: "https://apps.apple.com/in/developer/shubham-sharma/id1643497398",
  description:
    "Cogify engineers real-time web solutions, interactive browser studios, and ultra-lightweight native macOS, iOS, iPadOS, and Safari apps with zero telemetry and 100% client-side execution. Launch Marriage Biodata Maker Studio (biodata.cogify.me), EmDoc PDF Workstation, Ad Blocker for Safari, ReaderEasy, WebClear, Element Hider, Colour Invert, WebLenses, and enterprise license replacement solutions.",
  keywords: [
    "Cogify",
    "cogify.me",
    "Cogify Technologies",
    "Shubham Sharma Apple Developer",
    "biodata maker",
    "biodata.cogify.me",
    "Marriage Biodata Maker",
    "Marriage Biodata Maker Studio",
    "free marriage biodata maker online",
    "biodata maker website",
    "shadi biodata maker",
    "marriage biodata format pdf word",
    "hindu muslim sikh jain christian marriage biodata",
    "real-time web solutions",
    "zero telemetry web apps",
    "EmDoc",
    "EmDoc PDF Workstation",
    "macOS PDF editor",
    "best free PDF editor Mac",
    "Adobe Acrobat Pro alternative Mac",
    "lightweight PDF editor macOS",
    "5MB PDF reader",
    "offline PDF editor Mac",
    "Ad Blocker for Safari",
    "Safari ad blocker iOS macOS",
    "ReaderEasy",
    "ReaderEasy Safari reader mode",
    "bionic reading Safari extension",
    "WebClear",
    "WebClear cookie manager Safari",
    "clear website data Safari extension",
    "Element Hider",
    "Element Hider Safari Extension",
    "hide webpage elements Safari",
    "Colour Invert",
    "Colour Invert Safari dark mode",
    "WebLenses",
    "WebLenses website health checker Safari",
    "Core Web Vitals Safari extension",
    "Full Page Web Capture Safari",
    "Web Inspection Safari DevTools iOS",
    "Aurora Drive iOS CarPlay live lyrics widgets",
    "free Apple App Store apps",
    "enterprise software license replacement",
    "sovereign software",
    "air-gapped software",
    "zero telemetry Apple apps",
  ],
  links: {
    appStore: "https://apps.apple.com/in/developer/shubham-sharma/id1643497398",
  },
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
    version: "1.0",
    build: "1",
    appSize: "5.0 MB",
    ramUsage: "~45 MB baseline",
    pricingModel: "100% Free Forever — All Features Included",
    downloadUrl: process.env.NEXT_PUBLIC_EMDOC_DOWNLOAD_URL || "",
    appStoreUrl: "https://apps.apple.com/in/app/emdoc/id6810306925?mt=12",
    appStoreId: "6810306925",
    minMacOsVersion: "macOS 13.0 (Ventura, Sonoma, Sequoia)",
    supportedArchitectures: ["Apple Silicon (arm64)", "Intel 64-bit (x86_64)"],
    tagline: "A powerful, 5.0 MB PDF workstation designed for macOS.",
    shortDescription:
      "Now live on the Mac App Store. Engineered from the ground up in native Swift and CoreGraphics with zero cloud dependencies. At just 5.0 MB and ~45 MB RAM usage, EmDoc delivers desktop responsiveness, full editing, compression, and redaction with 100% of features free.",
    fullDescription:
      "EmDoc is a professional PDF workstation crafted specifically for users who value speed, privacy, and precision. Unlike legacy suites that weigh over 1 GB and consume gigabytes of memory, EmDoc packs a complete editing, organization, compression, watermarking, Bates numbering, and signing suite into a 5.0 MB native binary with zero telemetry.",
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
      { label: "Distribution", value: "Live on Mac App Store (v1.0) & Direct Enterprise DMG" },
      { label: "Application Binary Size", value: "5.0 MB (Ultra-compact native app)" },
      { label: "Memory Footprint", value: "~45 MB baseline (Tile-based demand streaming)" },
      { label: "Pricing for Individuals", value: "100% Free — Every feature unlocked" },
      { label: "Target Operating System", value: "macOS 13.0 (Ventura) or later" },
      { label: "Hardware Architecture", value: "Universal Binary (Apple Silicon M-Series & Intel x86_64)" },
      { label: "Execution Model", value: "100% Native macOS AppKit / SwiftUI & CoreGraphics" },
      { label: "Network Connectivity", value: "0 bytes transmitted / 100% Offline by Architecture" },
      { label: "Security & Encryption", value: "AES-256 Password Protection & Verification" },
      { label: "Product Support", value: "contact@cogify.me" },
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
      "Take control of the web. Element Hider lets you hide distracting, annoying, or unnecessary elements from webpages in Safari on iPhone, iPad, and Mac. See something you don't want to see? Hide it.",
    fullDescription:
      "From oversized banners and annoying pop-ups to distracting sections, recommendations, sidebars, comments, images, and other page elements — Element Hider puts you in control of what stays on your screen. Does not alter the content you want to keep; simply lets you decide what belongs on your screen.",
    philosophy:
      "The web doesn't need to look the same for everyone. Element Hider gives you the freedom to decide what you want to see. Hide the stuff that gets in the way and keep the parts of the web that matter to you. Simple. Fast. Yours.",
    version: "1.0",
    primaryCategory: "Utilities",
    secondaryCategory: "Productivity",
    pricingModel: "100% Free Forever — Zero Ads, Zero Subscriptions",
    platform: "Safari for iOS, iPadOS & macOS",
    appStoreUrl: "https://apps.apple.com/in/app/element-hider/id6811377087",
    appStoreId: "6811377087",
    features: [
      {
        title: "Hide Anything",
        description: "Select webpage elements and hide them from view with a single tap or click.",
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
      { label: "Product Version", value: "v1.0 (Live on App Store)" },
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
      "See the web differently. Colour Invert is a simple Safari extension for Mac, iPhone, and iPad that lets you invert webpage colors with a single tap while keeping photos and videos natural.",
    fullDescription:
      "Turn bright webpages dark, flip colors for a different visual experience, or simply experiment with a completely new way to browse. Whether you're reading at night, looking for a high-contrast visual experience, or just want more control over how websites appear, Colour Invert puts the choice in your hands.",
    philosophy:
      "Some websites are bright. Some are colorful. Some are simply easier to look at when their colors are flipped. Colour Invert gives you another option. Turn it on when you want a different visual experience. Turn it off when you don't. Your browser. Your screen. Your choice.",
    version: "1.0",
    primaryCategory: "Utilities",
    secondaryCategory: "Accessibility",
    pricingModel: "100% Free Forever — Zero Ads, Zero Subscriptions",
    platform: "Safari for macOS, iOS & iPadOS",
    appStoreUrl: "https://apps.apple.com/in/app/colour-invert/id6811389278",
    appStoreId: "6811389278",
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
      { label: "Product Version", value: "v1.0 (Live on App Store)" },
      { label: "Publisher", value: "COGIFY (cogify.me)" },
    ],
    screenshotsMac: [
      {
        id: "mac-app",
        title: "macOS Companion App",
        subtitle: "Configure global modes and smart optimizations",
        image: "/brand/Invert/Mac/App.png",
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
        image: "/brand/Invert/Mac/in_Safari.png",
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
        image: "/brand/Invert/Mac/in_youtube.png",
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
        image: "/brand/Invert/Mac/Manuals.png",
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
        image: "/brand/Invert/Mac/in_fast.png",
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
        image: "/brand/Invert/Ios/App_Home.png",
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
        image: "/brand/Invert/Ios/Google_search.png",
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
        image: "/brand/Invert/Ios/Chatgpt_Home.png",
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
        image: "/brand/Invert/Ios/chatgpt_chat.png",
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
        image: "/brand/Invert/Ios/App_2.png",
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
        image: "/brand/Invert/Ios/App_3.png",
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
        image: "/brand/Invert/Ios/app_in_settings.png",
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
  readereasy: {
    slug: "readereasy",
    name: "ReaderEasy – Distraction-Free Reader",
    shortName: "ReaderEasy",
    tagline: "Read the Web in Calm, Customized Clarity",
    subtitle: "Clean Safari Reader Mode, Bionic Focus & Listen Aloud",
    promotionalText:
      "Transform cluttered webpages into a serene, customizable reading environment in Safari with Bionic Focus Mode, Reading Ruler, Text-to-Speech, Highlights, and Markdown Export.",
    shortDescription:
      "ReaderEasy transforms cluttered webpages into a clean, customizable reading view in Safari. Strip away banners, popups, sidebars, and auto-playing videos in a single tap so you can focus on what matters: the content.",
    fullDescription:
      "Designed for researchers, students, avid readers, and neurodivergent minds, ReaderEasy elevates Safari reading with 4 curated themes (Paper, Sepia, Slate, OLED Dark), typography controls, Bionic Focus Mode that bolds word beginnings to guide eye fixation, an interactive Reading Ruler, Text-to-Speech (Listen Aloud), persistent local highlights, and instant Markdown/TXT export.",
    philosophy:
      "Reading long-form journalism, documentation, and essays on the modern web shouldn't feel like navigating a minefield of popups and floating sidebars. ReaderEasy restores calm, book-grade typography to every article you open in Safari — 100% locally on your device.",
    version: "1.0",
    primaryCategory: "Productivity",
    secondaryCategory: "Utilities",
    pricingModel: "100% Free Forever — Zero Ads, Zero Subscriptions",
    platform: "Safari for iOS, iPadOS & macOS",
    appStoreUrl: "https://apps.apple.com/in/app/readereasy/id6811590518",
    appStoreId: "6811590518",
    icon: "/brand/ReaderEasy/icon.jpg",
    accentColor: "amber",
    features: [
      {
        title: "One-Tap Clean Reader View",
        description:
          "Instantly extract articles, blog posts, documentation, and long-form essays into a serene, distraction-free layout.",
        tag: "Instant Extraction",
      },
      {
        title: "Bionic Focus & Reading Ruler",
        description:
          "Bold initial letters of words to guide your eye effortlessly across lines, paired with a focus reading ruler and hands-free auto-scroll.",
        tag: "Speed & Focus",
      },
      {
        title: "4 Curated Themes & Typography",
        description:
          "Switch between Paper, Warm Sepia, Dusk Slate, and True OLED Black. Fine-tune font family, text size, line height, and column width.",
        tag: "Book Typography",
      },
      {
        title: "Listen Aloud (Text-to-Speech)",
        description:
          "Turn any webpage into a spoken article with adjustable playback speeds (0.75x to 2x) and live paragraph highlighting.",
        tag: "Audio Reader",
      },
      {
        title: "Table of Contents & Local Highlights",
        description:
          "Navigate headings with an auto-generated outline sidebar and highlight key passages that persist locally in your browser.",
        tag: "Research Ready",
      },
      {
        title: "Export to Markdown, TXT & Print",
        description:
          "Download clean articles as Markdown (.md) or Plain Text (.txt) for Obsidian, Notion, or Apple Notes, or print a clutter-free PDF.",
        tag: "Knowledge Export",
      },
    ],
    specifications: [
      { label: "Application Type", value: "Safari Web Extension & Companion App" },
      { label: "Platforms Supported", value: "iOS 16+, iPadOS 16+, and macOS Safari" },
      { label: "Reading Themes", value: "Paper, Warm Sepia, Dusk Slate, True OLED Dark" },
      { label: "Focus Engines", value: "Bionic Reading Fixation, Reading Ruler & Auto-Scroll" },
      { label: "Export Formats", value: "Markdown (.md), Plain Text (.txt), Clean Print PDF" },
      { label: "Data Transmission", value: "0 bytes transmitted / 100% On-Device Parsing" },
      { label: "Pricing for Individuals", value: "100% Free Forever — No Subscriptions" },
      { label: "Product Version", value: "v1.0 (Live on App Store)" },
    ],
    screenshotsIos: [
      {
        id: "re-ios-1",
        title: "Clean Reader View",
        subtitle: "Instant distraction-free article transformation",
        image: "/brand/ReaderEasy/ios/1.jpg",
        tag: "Reader Mode",
        description: "Transform cluttered webpages into a serene, book-grade reading surface in a single tap.",
        highlights: ["Removes banners, popups & sidebars", "Estimated reading time & word count", "100% on-device article extraction"],
      },
      {
        id: "re-ios-2",
        title: "Typography & Themes",
        subtitle: "Paper, Sepia, Slate & OLED Dark modes",
        image: "/brand/ReaderEasy/ios/2.jpg",
        tag: "Customization",
        description: "Customize font families (Sans, Serif, Mono), font size, line spacing, and letter spacing for effortless reading.",
        highlights: ["4 ergonomic reading palettes", "Granular font & spacing sliders", "Saved across all Safari tabs"],
      },
      {
        id: "re-ios-3",
        title: "Bionic Focus & Reading Ruler",
        subtitle: "Guided eye fixation for faster comprehension",
        image: "/brand/ReaderEasy/ios/3.jpg",
        tag: "Focus Tools",
        description: "Enable Bionic Focus Mode to bold word prefixes and use the interactive Reading Ruler to stay locked on the active line.",
        highlights: ["Bionic word-stem bolding", "Adjustable reading ruler band", "Hands-free variable auto-scroll"],
      },
      {
        id: "re-ios-4",
        title: "Listen Aloud (Text-to-Speech)",
        subtitle: "Turn any article into an audio narration",
        image: "/brand/ReaderEasy/ios/4.jpg",
        tag: "Text-to-Speech",
        description: "Listen to articles on the go with native speech synthesis, playback speed controls, and synchronized paragraph tracking.",
        highlights: ["0.75x to 2.0x speed control", "Live active sentence highlight", "Zero cloud audio processing"],
      },
      {
        id: "re-ios-5",
        title: "Outline, Highlights & Markdown Export",
        subtitle: "Built for researchers and note-takers",
        image: "/brand/ReaderEasy/ios/5.jpg",
        tag: "Export & Notes",
        description: "Jump to any section via the automatic Table of Contents, highlight key quotes, and export clean Markdown (.md) or TXT.",
        highlights: ["Auto-generated heading outline", "Persistent local text highlights", "1-tap Markdown & TXT download"],
      },
    ],
    screenshotsIpad: [
      {
        id: "re-ipad-1",
        title: "iPadOS Reading Workstation",
        subtitle: "Spacious book-grade layout on iPad",
        image: "/brand/ReaderEasy/ipad/1.jpg",
        tag: "iPadOS Experience",
        description: "Enjoy wide-screen distraction-free reading on iPad with persistent Table of Contents and typography controls.",
        highlights: ["Optimized column width for iPad", "Side-by-side outline navigation", "Full keyboard & trackpad support"],
      },
      {
        id: "re-ipad-2",
        title: "Custom Themes & Bionic Mode on iPad",
        subtitle: "Tailored visual comfort on Retina displays",
        image: "/brand/ReaderEasy/ipad/2.jpg",
        tag: "Visual Comfort",
        description: "Switch seamlessly between Warm Sepia, Crisp Paper, Slate, and OLED Dark on your iPad display.",
        highlights: ["Retina-crisp serif & sans-serif fonts", "Bionic reading & ruler support", "Instant Markdown export"],
      },
    ],
    keywords: [
      "readereasy",
      "safari reader mode",
      "bionic reading safari",
      "distraction free reading ios",
      "text to speech safari extension",
      "export webpage to markdown",
      "article reader safari",
    ],
  },
  webclear: {
    slug: "webclear",
    name: "WebClear – Cookie, Cache & Storage Cleaner",
    shortName: "WebClear",
    tagline: "Total Control Over Website Data in Safari",
    subtitle: "Inspect & Wipe Cookies, LocalStorage, Cache & Tracking URLs",
    promotionalText:
      "Reset any site in one tap without logging out of everything else. Inspect cookies, edit LocalStorage, auto-clean domains, and strip tracking URL parameters in Safari.",
    shortDescription:
      "Take full control of website storage, cookies, cache, and tracking parameters directly inside Safari. Clear a single misbehaving site in one tap without wiping your entire browser history or losing logins on other sites.",
    fullDescription:
      "WebClear gives developers, privacy-conscious users, and everyday browsers surgical control over site data in Safari. Inspect and delete individual cookies, browse and edit LocalStorage, SessionStorage, and IndexedDB databases, set domain-level Auto-Clean rules, and automatically strip tracking query parameters like utm_*, fbclid, and gclid.",
    philosophy:
      "Safari's native settings force an all-or-nothing choice when a single site breaks or tracks you. WebClear brings desktop-grade storage inspection and one-tap per-domain cleanup to iPhone, iPad, and Mac — 100% locally with zero telemetry.",
    version: "1.0",
    primaryCategory: "Utilities",
    secondaryCategory: "Productivity",
    pricingModel: "100% Free Forever — Zero Ads, Zero Subscriptions",
    platform: "Safari for iOS, iPadOS & macOS",
    appStoreUrl: "https://apps.apple.com/in/app/webclear/id6811615247",
    appStoreId: "6811615247",
    icon: "/brand/WebClear/icon.jpg",
    accentColor: "sky",
    features: [
      {
        title: "One-Tap Per-Site Reset",
        description:
          "Wipe cookies, LocalStorage, SessionStorage, IndexedDB, Service Workers, and Cache Storage for the active domain without logging out of other websites.",
        tag: "Instant Reset",
      },
      {
        title: "Granular Cookie Manager",
        description:
          "View, search, copy, and delete individual cookies on the current domain. Export cookies as JSON or Netscape format for debugging.",
        tag: "Cookie Control",
      },
      {
        title: "Storage & IndexedDB Explorer",
        description:
          "Inspect live LocalStorage and SessionStorage key-value pairs, edit values in place, and purge IndexedDB databases with a tap.",
        tag: "DevTools Storage",
      },
      {
        title: "Smart Auto-Clean Rules",
        description:
          "Schedule automatic storage cleanup for specific domains while protecting trusted sites in your Whitelist.",
        tag: "Automated Privacy",
      },
      {
        title: "Tracking Parameter Stripper",
        description:
          "Automatically strip utm_source, utm_medium, fbclid, gclid, msclkid, and affiliate tracking tags from URLs as you browse.",
        tag: "Clean URLs",
      },
      {
        title: "100% On-Device & Private",
        description:
          "All storage inspection and cleaning happens strictly inside your local Safari browser. Zero external servers, zero analytics.",
        tag: "Zero Telemetry",
      },
    ],
    specifications: [
      { label: "Application Type", value: "Safari Web Extension & Companion App" },
      { label: "Platforms Supported", value: "iOS 16+, iPadOS 16+, and macOS Safari" },
      { label: "Storage Targets", value: "Cookies, LocalStorage, SessionStorage, IndexedDB, Cache, Service Workers" },
      { label: "URL Sanitizer", value: "Strips utm_*, fbclid, gclid, mc_cid & 30+ tracker params" },
      { label: "Cookie Export", value: "JSON & Netscape Cookie File Format" },
      { label: "Data Transmission", value: "0 bytes transmitted / 100% Local Execution" },
      { label: "Pricing for Individuals", value: "100% Free Forever — No Subscriptions" },
      { label: "Product Version", value: "v1.0 (Live on App Store)" },
    ],
    screenshotsIos: [
      {
        id: "wc-ios-1",
        title: "One-Tap Site Reset",
        subtitle: "Clear active site data without losing other logins",
        image: "/brand/WebClear/ios/1.jpg",
        tag: "Site Cleaner",
        description: "See a live breakdown of cookies, LocalStorage, SessionStorage, and caches for the current site and wipe them in one tap.",
        highlights: ["Per-domain surgical cleanup", "Preserves logins on all other sites", "Optional automatic page reload"],
      },
      {
        id: "wc-ios-2",
        title: "Cookie Inspector & Manager",
        subtitle: "Search, inspect, copy, or delete individual cookies",
        image: "/brand/WebClear/ios/2.jpg",
        tag: "Cookie Manager",
        description: "Drill into every cookie set by the current webpage, copy values, delete specific tracking cookies, or export to JSON.",
        highlights: ["Individual cookie deletion", "Search & filter keys", "JSON & Netscape export"],
      },
      {
        id: "wc-ios-3",
        title: "LocalStorage & SessionStorage Explorer",
        subtitle: "View and edit key-value pairs directly in Safari",
        image: "/brand/WebClear/ios/3.jpg",
        tag: "Storage Explorer",
        description: "Inspect and modify LocalStorage and SessionStorage entries and clear IndexedDB databases without connecting a Mac.",
        highlights: ["Live key-value inspection", "In-place editing & deletion", "IndexedDB & Service Worker purge"],
      },
      {
        id: "wc-ios-4",
        title: "Auto-Clean & Whitelist Rules",
        subtitle: "Automate privacy hygiene per domain",
        image: "/brand/WebClear/ios/4.jpg",
        tag: "Automation",
        description: "Configure domains to auto-clean on visit and whitelist essential accounts so their sessions are never touched.",
        highlights: ["Domain-level Auto-Clean list", "Protected site Whitelist", "URL tracking parameter stripper"],
      },
    ],
    screenshotsIpad: [
      {
        id: "wc-ipad-1",
        title: "iPadOS Storage Dashboard",
        subtitle: "Desktop-class storage & cookie control on iPad",
        image: "/brand/WebClear/ipad/1.jpg",
        tag: "iPadOS Dashboard",
        description: "Manage site storage, cookies, cache, and tracking parameter rules from a clean native popover on iPadOS Safari.",
        highlights: ["Full storage breakdown on iPad", "1-tap site reset", "Zero telemetry or cloud sync"],
      },
      {
        id: "wc-ipad-2",
        title: "Deep Cookie & Storage Inspection",
        subtitle: "Built for power users and web developers",
        image: "/brand/WebClear/ipad/2.jpg",
        tag: "Developer Ready",
        description: "Inspect cookies, LocalStorage, SessionStorage, and IndexedDB side-by-side while testing web applications on iPad.",
        highlights: ["Instant storage debugging", "Export cookies in 1 tap", "Clean URL tracking protection"],
      },
    ],
    keywords: [
      "webclear",
      "clear cookies safari",
      "clear cache single site safari",
      "localstorage inspector ios",
      "cookie manager safari extension",
      "remove tracking parameters safari",
    ],
  },
  adBlocker: {
    slug: "ad-blocker",
    name: "Ad Blocker – For Safari",
    shortName: "Ad Blocker",
    tagline: "Fast, Private, Native Content Blocking for Safari",
    subtitle: "Block Ads, Trackers, Popups & Annoyances with Zero Telemetry",
    promotionalText:
      "Browse up to 3x faster with native WebKit Content Blocking. Block intrusive banner ads, video pre-rolls, cross-site trackers, and cookie popups across iPhone, iPad, and Mac.",
    shortDescription:
      "Ad Blocker for Safari uses Apple's native WebKit Content Blocking API and DeclarativeNetRequest rules to eliminate intrusive ads, invisible trackers, popups, and layout placeholders before they ever download — using zero background CPU or battery.",
    fullDescription:
      "Unlike legacy extensions that read every page you visit, Ad Blocker compiles high-efficiency filter lists directly into Safari's native WebKit engine. Customize your protection shields across Ads, Trackers, Popups & Cookie Notices, and Cosmetic Element Collapse, manage per-site whitelists, and enjoy a cleaner, faster web on macOS, iOS, and iPadOS.",
    philosophy:
      "An ad blocker should never become a tracker itself. Ad Blocker for Safari operates with zero network permissions, zero telemetry, and no 'acceptable ads' kickbacks — pure, uncompromising speed and privacy.",
    version: "2.0",
    primaryCategory: "Utilities",
    secondaryCategory: "Productivity",
    pricingModel: "100% Free Forever — Zero Ads, Zero Subscriptions",
    platform: "Safari for macOS, iOS & iPadOS",
    appStoreUrl: "https://apps.apple.com/in/app/ad-blocker-for-safari/id6444582465",
    appStoreId: "6444582465",
    icon: "/brand/Ad-Blocker/icon-sm.webp",
    accentColor: "emerald",
    features: [
      {
        title: "Native WebKit Content Blocker",
        description:
          "Compiles blocking rules directly into Apple's native WebKit engine so ads and trackers are blocked before network requests even fire.",
        tag: "WebKit Native",
      },
      {
        title: "Multi-Layer Protection Shields",
        description:
          "Independently toggle shields for Banner & Video Ads, Cross-Site Trackers, Popups & Cookie Walls, and Cosmetic Blank-Space Collapse.",
        tag: "Granular Shields",
      },
      {
        title: "Cosmetic DOM Element Collapse",
        description:
          "Automatically collapses empty ad frames, sponsored feed cards, and leftover placeholder containers for a seamless page layout.",
        tag: "Clean Layout",
      },
      {
        title: "Up to 3x Faster Page Loads",
        description:
          "By preventing megabytes of third-party ad scripts and telemetry beacons from loading, pages render faster and save significant battery life.",
        tag: "High Speed",
      },
      {
        title: "One-Tap Site Whitelist",
        description:
          "Pause blocking on trusted websites or support favorite creators with a single click from the Safari toolbar popover.",
        tag: "Per-Site Control",
      },
      {
        title: "Zero Telemetry & No 'Acceptable Ads'",
        description:
          "We never sell whitelisting slots to advertisers and never collect your browsing history. 100% offline rule evaluation.",
        tag: "Pure Privacy",
      },
    ],
    specifications: [
      { label: "Application Type", value: "Native Safari Content Blocker & Web Extension" },
      { label: "Platforms Supported", value: "macOS Safari (v1.0), iOS 16+ & iPadOS 16+ (v2.0)" },
      { label: "Blocking Engine", value: "Apple WebKit Content Blocker + Cosmetic CSS Injection" },
      { label: "Protection Categories", value: "Ads, Trackers, Popups/Cookie Banners, Cosmetic Cleanup" },
      { label: "Data Transmission", value: "0 bytes transmitted / 100% On-Device Rules" },
      { label: "Browsing History", value: "Cannot Read or Transmit History by Architecture" },
      { label: "Pricing for Individuals", value: "100% Free Forever — No Subscriptions" },
      { label: "Publisher", value: "COGIFY (cogify.me)" },
    ],
    screenshotsMac: [
      {
        id: "ab-mac-1",
        title: "Protection Shields Dashboard",
        subtitle: "Real-time Safari blocking controls on macOS",
        image: "/brand/Ad-Blocker/mac/1.webp",
        tag: "macOS App",
        description: "Manage your native WebKit content blocking shields for Ads, Trackers, Popups, and Cosmetic cleanup on Mac.",
        highlights: ["Native macOS companion dashboard", "Independent protection toggles", "Zero background CPU usage"],
      },
      {
        id: "ab-mac-2",
        title: "Safari Toolbar Shield Popover",
        subtitle: "Instant per-site toggle & blocked counter",
        image: "/brand/Ad-Blocker/mac/2.jpg",
        tag: "Safari Toolbar",
        description: "Click the Ad Blocker icon in Safari to inspect active shields or whitelist the current domain in one click.",
        highlights: ["1-click domain whitelist", "Live protection status badge", "Seamless Safari integration"],
      },
      {
        id: "ab-mac-3",
        title: "Clean, Clutter-Free News & Web",
        subtitle: "Eliminate banner ads and collapse empty frames",
        image: "/brand/Ad-Blocker/mac/3.jpg",
        tag: "Cosmetic Cleanup",
        description: "Read news portals, blogs, and documentation without intrusive sticky banners, auto-playing video ads, or blank ad boxes.",
        highlights: ["Collapses empty ad placeholders", "Blocks annoying popup overlays", "Up to 3x faster page rendering"],
      },
      {
        id: "ab-mac-4",
        title: "Custom Rule & Whitelist Manager",
        subtitle: "Fine-tune site exceptions effortlessly",
        image: "/brand/Ad-Blocker/mac/4.jpg",
        tag: "Site Rules",
        description: "Add or remove trusted domains from your allowlist and customize how cosmetic filtering behaves across Safari.",
        highlights: ["Instant domain allowlist", "Private local storage", "No cloud account required"],
      },
    ],
    screenshotsIos: [
      {
        id: "ab-ios-1",
        title: "iOS Protection Dashboard",
        subtitle: "Full WebKit ad & tracker blocking on iPhone",
        image: "/brand/Ad-Blocker/ios/1.webp",
        tag: "iOS Shield",
        description: "Enable comprehensive ad, tracker, and annoyance blocking across mobile Safari in seconds.",
        highlights: ["Version 2.0 native iOS engine", "Saves mobile data & OLED battery", "Zero tracking or telemetry"],
      },
      {
        id: "ab-ios-2",
        title: "In-Safari Mobile Controls",
        subtitle: "Toggle shields without leaving your tab",
        image: "/brand/Ad-Blocker/ios/2.jpg",
        tag: "Mobile Safari",
        description: "Manage site protection and cosmetic element hiding directly from the iOS Safari extension sheet.",
        highlights: ["1-tap pause on current site", "Blocks mobile popup redirects", "Collapses mobile banner slots"],
      },
      {
        id: "ab-ios-3",
        title: "Distraction-Free Mobile Web",
        subtitle: "Read articles without sticky bottom ads",
        image: "/brand/Ad-Blocker/ios/3.jpg",
        tag: "Clean Mobile Web",
        description: "Enjoy clean mobile webpages free from floating video players, newsletter gates, and cross-site tracking pixels.",
        highlights: ["Eliminates sticky mobile banners", "Blocks third-party ad networks", "100% free with zero paywalls"],
      },
    ],
    screenshotsIpad: [
      {
        id: "ab-ipad-1",
        title: "iPadOS Content Blocker",
        subtitle: "Desktop-class ad blocking on iPad Safari",
        image: "/brand/Ad-Blocker/ipad/1.jpg",
        tag: "iPadOS",
        description: "Full native content blocking and cosmetic filtering optimized for iPadOS Safari.",
        highlights: ["Native iPadOS interface", "Blocks ads, trackers & popups", "Zero battery drain"],
      },
    ],
    keywords: [
      "ad blocker for safari",
      "safari ad blocker mac",
      "free ad blocker ios",
      "block trackers safari",
      "webkit content blocker",
      "remove popups safari",
    ],
  },
  weblenses: {
    slug: "weblenses",
    name: "WebLenses – Website Health & Resource Inspector",
    shortName: "WebLenses",
    tagline: "X-Ray Any Webpage in Safari Instantly",
    subtitle: "0–100 Website Health Score, Core Web Vitals & Third-Party Resource Audit",
    promotionalText:
      "Inspect any website's health score, Core Web Vitals (FCP, LCP, CLS), third-party script load, security posture, and DOM complexity in one click right inside Safari.",
    shortDescription:
      "WebLenses is a native Safari extension for macOS, iOS, and iPadOS that gives developers, SEO engineers, and curious users an instant X-ray into any webpage's performance, privacy, resources, and security — 100% on-device.",
    fullDescription:
      "With a single click in Safari, WebLenses calculates a comprehensive 0–100 Website Health Score broken down across Performance, Privacy, Resources, and Security. Inspect live Core Web Vitals (FCP, LCP, CLS, TBT), audit First-Party vs. Third-Party network requests and transfer sizes, analyze DOM depth and image optimization, and verify HTTPS/CSP security headers without opening heavy DevTools.",
    philosophy:
      "Understanding why a webpage feels slow, bloated, or invasive shouldn't require digging through five DevTools panels. WebLenses surfaces actionable engineering telemetry in a clean, glanceable Apple-native dashboard.",
    version: "1.0",
    primaryCategory: "Developer Tools",
    secondaryCategory: "Utilities",
    pricingModel: "100% Free Forever — Zero Ads, Zero Subscriptions",
    platform: "Safari for macOS, iOS & iPadOS",
    appStoreUrl: "https://apps.apple.com/in/app/weblenses/id6814188354?mt=12",
    appStoreId: "6814188354",
    icon: "/brand/WebLenses/icon.png",
    accentColor: "violet",
    features: [
      {
        title: "Instant 0–100 Website Health Score",
        description:
          "Get an immediate composite health grade for any live webpage across Performance, Privacy, Resource Efficiency, and Security.",
        tag: "Health Score",
      },
      {
        title: "Live Core Web Vitals Telemetry",
        description:
          "Measure First Contentful Paint (FCP), Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and Total Blocking Time (TBT) in real time.",
        tag: "Web Vitals",
      },
      {
        title: "1st-Party vs. 3rd-Party Resource Audit",
        description:
          "Visualize exact request counts and byte weight across scripts, stylesheets, images, fonts, and third-party external domains.",
        tag: "Resource X-Ray",
      },
      {
        title: "Privacy & Tracker Footprint Analysis",
        description:
          "Detect third-party scripts, external origins, cookie counts, and storage usage to see how much a site tracks behind the scenes.",
        tag: "Privacy Audit",
      },
      {
        title: "DOM & Asset Diagnostics",
        description:
          "Inspect total DOM node count, maximum tree depth, unoptimized images, missing alt attributes, and render-blocking assets.",
        tag: "DOM Inspector",
      },
      {
        title: "Security & Protocol Check",
        description:
          "Verify HTTPS encryption, mixed-content warnings, modern HTTP protocol support, and document security headers at a glance.",
        tag: "Security Posture",
      },
    ],
    specifications: [
      { label: "Application Type", value: "Safari Developer Extension & Companion App" },
      { label: "Platforms Supported", value: "macOS Safari (Live) & iOS / iPadOS Safari" },
      { label: "Performance Metrics", value: "FCP, LCP, CLS, TBT, TTFB & DOM Interactive" },
      { label: "Resource Breakdown", value: "1st-Party vs 3rd-Party Scripts, CSS, Images, Fonts" },
      { label: "Data Transmission", value: "0 bytes transmitted / 100% Local PerformanceObserver API" },
      { label: "Pricing for Individuals", value: "100% Free Forever — No Subscriptions" },
      { label: "Product Version", value: "v1.0 (Live on App Store)" },
      { label: "Publisher", value: "COGIFY (cogify.me)" },
    ],
    screenshotsMac: [
      {
        id: "wl-mac-1",
        title: "Website Health Score Overview",
        subtitle: "Instant 0–100 grade across Performance, Privacy, Resources & Security",
        image: "/brand/WebLenses/mac/1.jpg",
        tag: "Health Audit",
        description: "Open WebLenses on any webpage in macOS Safari to see an immediate 0–100 health breakdown and actionable insights.",
        highlights: ["Composite 0–100 health score", "4 pillar sub-scores", "Real-time on-device analysis"],
      },
      {
        id: "wl-mac-2",
        title: "Core Web Vitals & Timing",
        subtitle: "Live FCP, LCP, CLS & DOM timing breakdown",
        image: "/brand/WebLenses/mac/2.jpg",
        tag: "Web Vitals",
        description: "Measure real-user Core Web Vitals directly inside Safari without running synthetic cloud lighthouse tests.",
        highlights: ["Live FCP, LCP & CLS metrics", "Navigation timing waterfall", "Instant color-coded thresholds"],
      },
      {
        id: "wl-mac-3",
        title: "1st-Party vs 3rd-Party Resources",
        subtitle: "Audit scripts, stylesheets, images, and external domains",
        image: "/brand/WebLenses/mac/3.jpg",
        tag: "Resource Breakdown",
        description: "See exactly how many requests and kilobytes come from first-party vs. third-party origins.",
        highlights: ["Asset type weight distribution", "External domain inventory", "Identifies bloated 3rd-party scripts"],
      },
      {
        id: "wl-mac-4",
        title: "DOM Complexity & Security Diagnostics",
        subtitle: "Inspect DOM nodes, images, and security posture",
        image: "/brand/WebLenses/mac/4.jpg",
        tag: "DOM & Security",
        description: "Check DOM node density, tree depth, image optimization opportunities, and HTTPS security signals.",
        highlights: ["DOM node & depth counter", "Accessibility & image checks", "HTTPS & mixed-content verification"],
      },
    ],
    screenshotsIos: [
      {
        id: "wl-ios-1",
        title: "Mobile Website Health Inspector",
        subtitle: "Audit mobile web performance on iPhone",
        image: "/brand/WebLenses/ios/1.jpg",
        tag: "iOS Inspector",
        description: "Check any mobile site's 0–100 health score and Core Web Vitals directly inside iOS Safari.",
        highlights: ["Real mobile Safari Web Vitals", "Instant 4-pillar health ring", "100% local execution"],
      },
      {
        id: "wl-ios-2",
        title: "Mobile Resource & Tracker Breakdown",
        subtitle: "See every 3rd-party origin loaded on mobile",
        image: "/brand/WebLenses/ios/2.jpg",
        tag: "Resource Audit",
        description: "Inspect scripts, images, and third-party domains slowing down mobile webpages.",
        highlights: ["1st vs 3rd party request split", "Transfer weight analysis", "Zero external telemetry"],
      },
    ],
    screenshotsIpad: [
      {
        id: "wl-ipad-1",
        title: "iPadOS Web Performance Lens",
        subtitle: "Full diagnostic HUD on iPad Safari",
        image: "/brand/WebLenses/ipad/1.jpg",
        tag: "iPadOS",
        description: "Inspect website health, Core Web Vitals, and resource budgets while browsing on iPad.",
        highlights: ["Rich iPadOS popover diagnostics", "Core Web Vitals & DOM stats", "Built for web engineers"],
      },
    ],
    keywords: [
      "weblenses",
      "website health checker safari",
      "core web vitals safari extension",
      "web performance inspector mac",
      "third party resource analyzer",
      "safari devtools extension",
    ],
  },
  biodata: {
    slug: "biodata",
    name: "Marriage Biodata Maker Studio",
    shortName: "BiodataMaker",
    tagline: "Free Marriage Biodata Maker — Instant Live A4 Preview, 242 Templates, PDF, Word (.docx) & HD Image",
    subtitle: "Hosted at biodata.cogify.me • 100% Free Forever, No Signup, No Watermark & 100% Browser Privacy",
    url: "https://biodata.cogify.me",
    webUrl: "https://biodata.cogify.me",
    githubUrl: "https://github.com/Shubham-sharma8/biodata",
    version: "v2.4 Web Studio",
    platform: "Web App & PWA (biodata.cogify.me) • Desktop & Mobile",
    pricingModel: "100% Free Forever — ₹0 / $0, No Signup, Zero Watermarks",
    icon: "/brand/Biodata/icon.png",
    previewImage: "/brand/Biodata/studio-preview.webp",
    ogBanner: "/brand/Biodata/og-banner.png",
    mobilePreview: "/brand/Biodata/mobile-preview.png",
    shortDescription:
      "Create a print-ready A4 Marriage Biodata online in 2 minutes at biodata.cogify.me. Features 242 handcrafted Hindu, Muslim Nikah, Sikh, Christian, Jain, Marathi, Gujarati, Tamil & Modern templates, 14 layout engines, 9 languages, interactive Vedic Kundali studio, and instant 300-DPI PDF, editable Word (.docx), and 3x Retina PNG downloads — 100% client-side with zero watermarks.",
    fullDescription:
      "Marriage Biodata Maker Studio (biodata.cogify.me) is Cogify's flagship browser-native design studio engineered to replace predatory 'free' biodata makers that blur your contact details or demand payment at the download step. Running 100% locally inside your browser with zero server uploads, it pairs an instant 1:1 A4 live preview (794×1123 print lock) with 242 cultural and modern templates, 14 structural layout engines, 32 vector SVG border frames, 9 Indian and global languages with non-destructive label translation, an interactive Vedic Kundali / Rashi chart builder, ceremonial stickers, and genuine multi-format exports (300-DPI PDF, native editable Microsoft Word .docx tables, 3x Retina PNG/JPG, and WhatsApp summary).",
    philosophy:
      "Most online biodata makers advertise as 'free' but mask your text with asterisks or demand ₹49–₹99 at the final download step. We built biodata.cogify.me as a 100% free, watermark-free, client-side web studio where your personal details, horoscope, and portrait photo never leave your device.",
    features: [
      {
        title: "242 Handcrafted Templates & 14 Layout Engines",
        description:
          "Choose from 242 genuinely differentiated A4 marriage biodata designs spanning traditional ceremonial centers, royal split headers, left/right portrait sidebars, magazine spreads, palace mehrab arches, and 2-page comprehensive suites across 32 vector SVG frames.",
        tag: "242 Templates",
      },
      {
        title: "Instant 1:1 A4 Live Preview & Direct Canvas Editing",
        description:
          "Every keystroke updates the A4 sheet in real time. Click directly on any heading, field label, or value on the A4 canvas to edit inline, reorder sections, or enable Smart Single-Page Auto-Fit so your biodata never overflows.",
        tag: "Live A4 Studio",
      },
      {
        title: "300-DPI PDF, Editable Word (.docx) & 3x Retina PNG/JPG",
        description:
          "Download print-ready 300-DPI vector PDFs, genuine editable Microsoft Word (.docx) documents with native two-column tables and side-by-side portrait photos, 3x Retina PNG/JPG images, or formatted WhatsApp summaries for ₹0 with zero watermarks.",
        tag: "Multi-Format Export",
      },
      {
        title: "9 Languages with Non-Destructive Label Translation",
        description:
          "Switch seamlessly between English, Hindi (हिन्दी), Marathi (मराठी), Gujarati (ગુજરાતી), Tamil (தமிழ்), Telugu (తెలుగు), Bengali (বাংলা), Punjabi/Kannada, and Urdu (اردو) without erasing your typed personal data.",
        tag: "9 Languages",
      },
      {
        title: "Interactive Vedic Kundali Studio & Ceremonial Stickers",
        description:
          "Embed North Indian Diamond (Lagna), South Indian Rashi Box, or East Indian Sunburst Kundali charts with editable 12-house planetary placements, plus drag-and-drop sacred emblems, auspicious invocations, wax seals, and portrait photo filters.",
        tag: "Kundali & Stickers",
      },
      {
        title: "100% Local Browser Privacy & .JSON Backup",
        description:
          "Your phone number, family background, horoscope, and portrait photo are never uploaded to any cloud server. Drafts auto-save locally in your browser and can be exported or restored anytime as a portable .json file.",
        tag: "100% Client-Side",
      },
    ],
    specifications: [
      { label: "Live Web Studio", value: "https://biodata.cogify.me" },
      { label: "Template Library", value: "242 Templates • 14 Layout Engines • 32 Vector Borders" },
      { label: "Export Formats", value: "300-DPI PDF, Editable Word (.docx), 3x PNG, JPG & WhatsApp" },
      { label: "Supported Languages", value: "9 Languages (EN, HI, MR, GU, TA, TE, BN, PA/KN, UR)" },
      { label: "Cultural Presets", value: "Hindu, Muslim Nikah, Sikh, Christian, Jain, Buddhist & Modern NRI" },
      { label: "Data Privacy", value: "100% Client-Side Browser Execution • Zero Server Uploads" },
      { label: "Price & Watermarks", value: "100% Free Forever • No Signup • Zero Watermarks" },
    ],
    communityLinks: [
      {
        name: "Hindu Marriage Biodata",
        href: "https://biodata.cogify.me/hindu-marriage-biodata",
        badge: "Sacred Ganesh & Kundali",
        description: "Traditional Hindu format with || Shree Ganeshay Namah ||, Rashi, Nakshatra, Gotra, Manglik & Vedic Kundali chart.",
      },
      {
        name: "Muslim Nikah Biodata",
        href: "https://biodata.cogify.me/muslim-nikah-biodata",
        badge: "Arabesque & Bismillah",
        description: "Features Bismillah-ir-Rahman-ir-Rahim, Mughal geometric frames, Sect/Maslak, and Wali contact details.",
      },
      {
        name: "Sikh (Anand Karaj) Biodata",
        href: "https://biodata.cogify.me/sikh-marriage-biodata",
        badge: "Ik Onkar (ੴ)",
        description: "Opens with Ik Onkar Satnam Waheguru in Royal Navy & Gold with Gursikh lifestyle, parental & native Punjab details.",
      },
      {
        name: "Marathi Lagnaacha Biodata",
        href: "https://biodata.cogify.me/marathi-marriage-biodata",
        badge: "मराठी • Kuldaivat & Devak",
        description: "Authentic Marathi format supporting Kuldaivat, Devak, Mamakul, and Paithani silk-inspired traditional borders.",
      },
      {
        name: "Gujarati Lagna Biodata",
        href: "https://biodata.cogify.me/gujarati-marriage-biodata",
        badge: "ગુજરાતી • Mosal & Native",
        description: "Tailored for Gujarati families with Mosal, Gol/Samaj, Naniyal, and one-click Gujarati label translation.",
      },
      {
        name: "Christian, Jain & NRI Formats",
        href: "https://biodata.cogify.me/nri-executive-biodata",
        badge: "Global & Executive",
        description: "Dedicated templates for Christian, Jain (Jai Jinendra), Buddhist, and modern NRI/Executive two-column layouts.",
      },
    ],
    keywords: [
      "biodata.cogify.me",
      "free marriage biodata maker",
      "marriage biodata format pdf",
      "editable marriage biodata word docx",
      "hindu marriage biodata maker",
      "muslim nikah biodata format",
      "sikh marriage biodata",
      "marathi lagnaacha biodata",
      "gujarati marriage biodata",
      "biodata maker without watermark",
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
      id: "full-page-web-capture",
      title: "Full Page Web Capture",
      subtitle: "Retina Full-Page PDF & PNG Screenshot Engine for Safari",
      description:
        "Capture entire scrolling webpages from top to bottom in crisp Retina resolution. Export pixel-perfect multi-page or continuous PDFs and lossless PNGs directly inside Safari on macOS, iOS, and iPadOS.",
      status: "In App Store Pipeline (v1.0)",
      platforms: "macOS, iOS & iPadOS (Safari)",
      category: "Utilities / Productivity",
      icon: "/brand/Full-Page-Capture/icon.png",
      previewImage: "/brand/Full-Page-Capture/mac/1.jpg",
      screenshots: [
        "/brand/Full-Page-Capture/mac/1.jpg",
        "/brand/Full-Page-Capture/mac/2.jpg",
        "/brand/Full-Page-Capture/ios/1.jpg",
        "/brand/Full-Page-Capture/ipad/1.jpg",
      ],
      badgeColor: "emerald",
      highlights: [
        "1-click full-height scrolling webpage capture",
        "Export as Retina PNG or vector-sharp PDF",
        "Handles sticky headers, lazy-loaded images & infinite scroll",
        "100% local on-device stitching with zero cloud uploads",
      ],
    },
    {
      id: "web-inspection",
      title: "Web Inspection",
      subtitle: "Mobile Safari DevTools, DOM Mutator & Network Inspector",
      description:
        "Bring desktop-grade Web Inspector capabilities to iPhone and iPad. Inspect and mutate live DOM elements and CSS styles, monitor network waterfalls, and run console diagnostics directly inside mobile Safari.",
      status: "In App Store Pipeline (v1.0)",
      platforms: "iOS & iPadOS (Safari)",
      category: "Developer Tools",
      icon: "/brand/Web-Inspection/icon.png",
      previewImage: "/brand/Web-Inspection/ios/1.jpg",
      screenshots: [
        "/brand/Web-Inspection/ios/1.jpg",
        "/brand/Web-Inspection/ios/2.jpg",
        "/brand/Web-Inspection/ipad/1.jpg",
        "/brand/Web-Inspection/ipad/2.jpg",
      ],
      badgeColor: "indigo",
      highlights: [
        "Live DOM tree inspector & CSS style mutation sandbox",
        "Interactive JavaScript console & error logger",
        "Real-time network request waterfall & header viewer",
        "Zero external proxy — runs 100% locally in mobile Safari",
      ],
    },
    {
      id: "aurora-drive",
      title: "Aurora Drive",
      subtitle: "Live Lyrics, Customizable Widgets & CarPlay Infotainment for iOS",
      description:
        "Elevate every drive and listening session on iPhone and Apple CarPlay. Aurora Drive pairs real-time time-synced live lyrics, customizable Home and Lock Screen music widgets, and a distraction-free CarPlay dashboard in a native Swift experience.",
      status: "Prepare for Submission (v1.0)",
      platforms: "iOS & Apple CarPlay",
      category: "Music / CarPlay & Widgets",
      badgeColor: "purple",
      highlights: [
        "Real-time time-synced live lyrics & dynamic ambient visualizers",
        "Customizable iOS Home Screen, Lock Screen & StandBy widgets",
        "Next-generation Apple CarPlay cockpit & infotainment companion",
        "100% native Swift execution with zero telemetry",
      ],
    },
    {
      id: "enterprise-suite",
      title: "Enterprise Custom Tool Suite",
      subtitle: "Bespoke License-Replacement Engineering",
      description:
        "Cogify partners with organizations to build lightweight, audited native replacements for bloated SaaS and desktop software they currently overpay for on per-seat licenses.",
      status: "Now Onboarding",
      platforms: "macOS, iOS, Windows & Web",
      category: "Enterprise Solutions",
      badgeColor: "zinc",
      highlights: [
        "Replace costly recurring per-seat SaaS & PDF licenses",
        "Full source code auditability & air-gapped deployment",
        "Custom MDM/PKG packaging & priority SLA engineering",
      ],
    },
  ],
};

export const liveSafariApps: SafariAppConfig[] = [
  siteConfig.adBlocker,
  siteConfig.readereasy,
  siteConfig.webclear,
  siteConfig.weblenses,
];
