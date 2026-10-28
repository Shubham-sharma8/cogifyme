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

export interface MacAppConfig {
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
  appSize: string;
  bundleId: string;
  minMacOsVersion: string;
  architecture: string;
  primaryCategory: string;
  secondaryCategory: string;
  pricingModel: string;
  platform: string;
  downloadUrl: string;
  appStoreUrl?: string;
  icon: string;
  iconLarge: string;
  accentColor: "emerald" | "indigo" | "amber" | "sky" | "rose" | "violet" | "cyan";
  features: {
    title: string;
    description: string;
    tag: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  screenshotsMac: ScreenshotItem[];
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
  ssb: BiodataStudioConfig;
  lumenview: MacAppConfig;
  metricove: MacAppConfig;
  netguard: MacAppConfig;
  klipora: MacAppConfig;
  showFreeSpace: MacAppConfig;
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
    "Cogify builds 14 free, zero-telemetry web studios (biodata.cogify.me, ssb.cogify.me) and native macOS, iOS, iPadOS & Safari apps with 100% local privacy.",
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
    "ssb.cogify.me",
    "SSB Stage 2 Psychology Test Practice",
    "TAT WAT SRT SDT simulator online",
    "OIR PPDT GTO SSB preparation free",
    "real-time web solutions",
    "zero telemetry web apps",
    "EmDoc",
    "EmDoc PDF Workstation",
    "macOS PDF editor",
    "best free PDF editor Mac",
    "Adobe Acrobat Pro alternative Mac",
    "LumenView HiDPI Display Manager Mac",
    "BetterDisplay alternative Mac",
    "Metricove Mac System Monitor",
    "iStat Menus alternative Mac",
    "NetGuard macOS Firewall 3D Radar",
    "Little Snitch LuLu alternative Mac",
    "Klipora Clipboard Manager Mac",
    "Show free space Disk Analyzer Mac",
    "DaisyDisk alternative Mac",
    "Ad Blocker for Safari",
    "Safari ad blocker iOS macOS",
    "ReaderEasy Safari reader mode",
    "WebClear cookie manager Safari",
    "Element Hider Safari Extension",
    "Colour Invert Safari dark mode",
    "WebLenses website health checker Safari",
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
    appSize: "7.5 MB",
    ramUsage: "~45 MB baseline",
    pricingModel: "100% Free Forever — All Features Included",
    downloadUrl:
      process.env.NEXT_PUBLIC_EMDOC_DOWNLOAD_URL ||
      "https://github.com/Shubham-sharma8/cogifyme/releases/download/v1.0/EmDoc.dmg",
    appStoreUrl: "https://apps.apple.com/in/app/emdoc/id6810306925?mt=12",
    appStoreId: "6810306925",
    minMacOsVersion: "macOS 13.0 (Ventura, Sonoma, Sequoia)",
    supportedArchitectures: ["Apple Silicon (arm64)", "Intel 64-bit (x86_64)"],
    tagline: "A powerful, 5.0 MB PDF workstation designed for macOS.",
    shortDescription:
      "EmDoc is a 5.0 MB native macOS PDF editor and Adobe Acrobat alternative. Edit, organize, compress, watermark, and redact PDFs 100% offline with zero telemetry.",
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
        image: "/brand/EmDoc_home.webp",
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
        image: "/brand/Organise.webp",
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
        image: "/brand/edit_pdf.webp",
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
        image: "/brand/compress.webp",
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
        image: "/brand/watermark.webp",
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
        image: "/brand/header_custom.webp",
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
        image: "/brand/print.webp",
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
        image: "/brand/Theme.webp",
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
      "Hide distracting banners, popups, sidebars, and unwanted webpage elements in Safari on iPhone, iPad, and Mac with one tap. 100% free and private.",
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
      "Invert webpage colors and enable smart OLED dark mode in Safari on Mac, iPhone, and iPad while keeping photos and videos natural. 100% free and local.",
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
      "Transform cluttered webpages into a distraction-free Safari reader view with Bionic Focus, Reading Ruler, Text-to-Speech, and Markdown export. 100% free.",
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
    icon: "/brand/ReaderEasy/icon-sm.webp",
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
      "Wipe cookies, LocalStorage, cache, and tracking URL parameters for any single site in Safari with one tap—without logging out of your other websites.",
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
    icon: "/brand/WebClear/icon-sm.webp",
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
      "Block intrusive ads, cross-site trackers, popups, and cookie banners in Safari on Mac, iPhone, and iPad using native WebKit Content Blocking. 100% free.",
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
      "Audit any webpage's 0–100 Health Score, Core Web Vitals (LCP, CLS), third-party scripts, and DOM complexity in one click inside Safari for Mac and iOS.",
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
    icon: "/brand/WebLenses/icon-sm.webp",
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
    icon: "/brand/Biodata/icon-sm.webp",
    previewImage: "/brand/Biodata/studio-preview.webp",
    ogBanner: "/brand/Biodata/og-banner.png",
    mobilePreview: "/brand/Biodata/mobile-preview.png",
    shortDescription:
      "Explore the architecture behind biodata.cogify.me: Cogify's client-side A4 Marriage Biodata Studio with 242 templates, 14 layout engines & Kundali charts.",
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
        name: "Christian & Jain Formats",
        href: "https://biodata.cogify.me/christian-marriage-biodata",
        badge: "Global & Community",
        description: "Dedicated templates for Christian, Jain (Jai Jinendra), Punjabi, Tamil, Telugu & modern executive two-column layouts.",
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
  ssb: {
    slug: "ssb",
    name: "SSB Stage-2 Test Practice Studio",
    shortName: "SSB Studio",
    tagline: "Free Indian Armed Forces SSB Psychology (TAT, WAT, SRT, SDT), OIR, PPDT, GTO & Interview Simulator",
    subtitle: "Hosted at ssb.cogify.me • 100% Free Forever, Authentic Selection Board Timers & 100% Local Privacy",
    url: "https://ssb.cogify.me",
    webUrl: "https://ssb.cogify.me",
    githubUrl: "https://github.com/Shubham-sharma8/ssb",
    version: "v2.0 Web Studio",
    platform: "Web App & PWA (ssb.cogify.me) • Desktop, Tablet & Mobile",
    pricingModel: "100% Free Forever — ₹0 / $0, No Signup, Zero Paywalls",
    icon: "/brand/SSB/icon.svg",
    previewImage: "/brand/SSB/studio-preview.webp",
    ogBanner: "/brand/SSB/og-banner.png",
    mobilePreview: "/brand/SSB/studio-preview.png",
    shortDescription:
      "Practice Indian Armed Forces SSB Stage-2 Psychology tests (TAT, WAT, SRT, SDT), OIR, PPDT, GTO & IO Interview online with authentic timers at ssb.cogify.me.",
    fullDescription:
      "SSB Stage-2 Test Practice Studio (ssb.cogify.me) is Cogify's dedicated browser-native Services Selection Board simulator engineered for NDA, CDS, AFCAT, TES, SSC Tech, and ACC defence aspirants. It replicates exact selection center test hall pacing with automated 30-second TAT slide projection + 4-minute story timers, 15-second WAT word cues with Web Audio API beeps, 30-minute 60-situation SRT rapid response drills, 15-minute 5-paragraph SDT self-description templates, Stage-1 OIR & PPDT screening practice, GTO task guides, Personal Interview PIQ prep, and OLQ evaluation rubrics — running 100% client-side with instant PDF dossier export.",
    philosophy:
      "Defence aspirants preparing for Army, Navy, and Air Force SSB interviews shouldn't be locked out by expensive coaching portals just to practice real-time psychology timers. We built ssb.cogify.me as a 100% free, zero-telemetry web studio where every TAT, WAT, SRT, and SDT session runs locally in your browser.",
    features: [
      {
        title: "TAT 12-Slide Projector (30s View + 4m Write)",
        description:
          "Authentic Thematic Apperception Test simulator with 11 curated monochrome stimulus slides + 12th blank slide, strict 30-second image observation, 4-minute story timer, and 10 pre-built test sets.",
        tag: "TAT Simulator",
      },
      {
        title: "WAT 60-Word Rapid Cue Engine (15s / Word)",
        description:
          "Automated Word Association Test cycling 60 psychological trigger words at exact 15-second intervals with Web Audio API transition chimes and post-session OLQ sentence review.",
        tag: "WAT 15s Timer",
      },
      {
        title: "SRT 60-Situation & SDT 5-Paragraph Battery",
        description:
          "Complete 60 Situation Reaction Test scenarios under a 30-minute countdown to train decisive action speed, followed by structured 15-minute Self Description Test (SDT) reflection.",
        tag: "SRT & SDT",
      },
      {
        title: "Full 98-Minute Stage-2 Psychology Battery",
        description:
          "Run the continuous end-to-end SSB Day-2 psychology examination (TAT → WAT → SRT → SDT) in one uninterrupted 98-minute sitting with downloadable PDF response sheets.",
        tag: "Full Battery",
      },
      {
        title: "Stage-1 Screening (OIR & PPDT) + GTO & IO Hubs",
        description:
          "Prepare for Day-1 Screening with Officer Intelligence Rating (OIR) verbal/non-verbal reasoning and PPDT perception drills, plus comprehensive GTO 9-task and Personal Interview (PIQ) frameworks.",
        tag: "Stage 1 & Stage 2",
      },
      {
        title: "100% Client-Side LocalStorage & PDF Dossier Export",
        description:
          "All test history, written stories, and self-assessments remain strictly inside your browser's local storage with 1-click print-ready PDF response sheet export and zero server tracking.",
        tag: "Zero Telemetry",
      },
    ],
    specifications: [
      { label: "Live Web Studio", value: "https://ssb.cogify.me" },
      { label: "Psychology Battery", value: "TAT (12 Slides) • WAT (60 Words) • SRT (60 Scenarios) • SDT (5 Prompts)" },
      { label: "Stage-1 & Interview", value: "OIR Verbal/Non-Verbal • PPDT Simulator • GTO 9 Tasks • IO & PIQ Guide" },
      { label: "Timer Engine", value: "Precision Web Audio API Beeps & Authentic Selection Board Pacing" },
      { label: "Defence Entries", value: "NDA, CDS, AFCAT, TES, UES, SSC Tech, JAG, NCC & ACC" },
      { label: "Data Privacy", value: "100% Client-Side Browser Execution • Zero Server Uploads" },
      { label: "Price & Access", value: "100% Free Forever • No Login Required • Instant PDF Export" },
    ],
    communityLinks: [
      {
        name: "TAT Test Simulator",
        href: "https://ssb.cogify.me/tat",
        badge: "30s View + 4m Write",
        description: "Practice 11 picture slides + 1 blank slide across 10 curated TAT sets with automatic slide transitions.",
      },
      {
        name: "WAT 60-Word Timer",
        href: "https://ssb.cogify.me/wat",
        badge: "15s / Word + Audio",
        description: "Train spontaneous Officer Like Qualities (OLQ) sentence associations across 60 sequential words.",
      },
      {
        name: "SRT 60-Situation Drill",
        href: "https://ssb.cogify.me/srt",
        badge: "30m Rapid Action",
        description: "Sharpen decision-making speed across 60 realistic crisis and leadership scenarios in 30 minutes.",
      },
      {
        name: "SDT Self-Description",
        href: "https://ssb.cogify.me/sdt",
        badge: "15m • 5 Paragraphs",
        description: "Structure honest opinions from parents, teachers, friends, self, and goals under timed conditions.",
      },
      {
        name: "Full 98-Min Psychology Test",
        href: "https://ssb.cogify.me/full-test",
        badge: "Complete Day-2 Sim",
        description: "Take TAT, WAT, SRT, and SDT back-to-back in a realistic 98-minute exam hall simulation.",
      },
      {
        name: "GTO, Interview & OLQ Library",
        href: "https://ssb.cogify.me/gto",
        badge: "GTO • IO • OLQs",
        description: "Explore 9 GTO outdoor task guides, Lecturette & GPE timers, Personal Interview PIQ prep, and OLQ reference.",
      },
    ],
    keywords: [
      "ssb.cogify.me",
      "ssb psychology test practice online",
      "tat wat srt sdt simulator free",
      "ssb stage 2 test practice",
      "oir test practice online free",
      "ppdt practice ssb",
      "gto tasks ssb preparation",
      "ssb interview preparation online",
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
      icon: "/brand/Full-Page-Capture/icon-sm.webp",
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
      icon: "/brand/Web-Inspection/icon-sm.webp",
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
  lumenview: {
    slug: "lumenview",
    name: "LumenView: Display & HiDPI",
    shortName: "LumenView",
    tagline: "HiDPI Retina Scaling, DDC/CI Brightness, 240Hz & Virtual Displays",
    subtitle: "HiDPI, DDC Brightness & 240Hz",
    promotionalText:
      "Unlock true HiDPI Retina scaling, hardware DDC/CI brightness & volume control, 240Hz refresh rates, 3D LUT calibration, and 60 FPS Virtual Displays on macOS.",
    shortDescription:
      "Unlock HiDPI Retina scaling, hardware DDC/CI monitor brightness & volume control, 240Hz refresh rates, and 60 FPS virtual displays on macOS. 100% free.",
    fullDescription:
      "Engineered natively in Swift and Metal for Apple Silicon (M1–M4) and Intel Macs, LumenView bridges the gap between macOS and external displays. Unlock arbitrary custom HiDPI logical resolutions for razor-sharp typography, adjust physical monitor backlight and speaker volume directly from your Mac keyboard via hardware DDC/CI, dim below 0% with Sub-Zero Dimming or boost Liquid Retina XDR panels, load studio 3D .cube LUTs, and stream zero-dongle Virtual Displays at 60 FPS.",
    philosophy:
      "External monitors on macOS deserve the same razor-sharp Retina scaling, native keyboard brightness/volume keys, and color accuracy as Apple's own Studio Display — engineered in a 7.8 MB native Swift & Metal binary with zero telemetry.",
    version: "2.4.0",
    appSize: "7.8 MB",
    bundleId: "pro.lumenview.mac",
    minMacOsVersion: "macOS 14.0+ (Sonoma & Sequoia)",
    architecture: "Universal Binary (Apple Silicon M1–M4 & Intel) • Swift & Metal 3",
    primaryCategory: "Utilities",
    secondaryCategory: "Productivity",
    pricingModel: "100% Free Direct Download — Zero Telemetry",
    platform: "macOS 14.0+ (Apple Silicon & Intel)",
    downloadUrl: "https://github.com/Shubham-sharma8/cogifyme/releases/download/v1.0/LumenView.dmg",
    icon: "/brand/LumenView/icon-sm.webp",
    iconLarge: "/brand/LumenView/icon.webp",
    accentColor: "indigo",
    features: [
      {
        title: "True HiDPI Retina Scaling & 240Hz",
        description:
          "Unlock crisp Retina HiDPI scaling on 1080p, 1440p, 4K, 5K, and 21:9/32:9 ultrawide monitors with custom logical resolutions and 50Hz–240Hz refresh rate switching.",
        tag: "Retina HiDPI",
      },
      {
        title: "Hardware DDC/CI Brightness, Contrast & Volume",
        description:
          "Communicate directly with external monitors over HDMI, DisplayPort, USB-C, and Thunderbolt using Apple Silicon IOAVService & Intel IOKit I2C with native keyboard OSD hijack.",
        tag: "Hardware DDC/CI",
      },
      {
        title: "XDR Upscaling & Sub-Zero Software Dimming",
        description:
          "Boost compatible HDR/Mini-LED panels for outdoor legibility or dim any display down to -100% below minimum hardware backlight for late-night coding.",
        tag: "XDR & Sub-Zero",
      },
      {
        title: "3×1D GPU Gamma, 3D .cube LUT & Color Filters",
        description:
          "Real-time per-channel RGB gain/gamma curves, Kelvin temperature (2700K–9300K), DaVinci Resolve .cube 3D LUT import, and 7 hardware-accelerated shader filters.",
        tag: "Color & 3D LUT",
      },
      {
        title: "Virtual Displays & 60 FPS ScreenCaptureKit PiP",
        description:
          "Create instant software virtual screens (16:9, 16:10, 21:9, 32:9, iPad Sidecar ratios) with zero HDMI dongles and live 60 FPS Picture-in-Picture streaming.",
        tag: "Virtual Screens",
      },
      {
        title: "Proportional Layout Canvas, Widgets & Sync Groups",
        description:
          "Snap multi-monitor arrangements with pixel-accurate edge alignment, pin 6 live Desktop HUD widgets, and link displays into Master/Target brightness sync groups.",
        tag: "Multi-Monitor",
      },
    ],
    specifications: [
      { label: "Application Type", value: "Native macOS Display & DDC/CI Workstation" },
      { label: "Installer Size", value: "7.8 MB Universal DMG (Signed Developer ID)" },
      { label: "Platforms Supported", value: "macOS 14.0+ (Apple Silicon M1–M4 & Intel)" },
      { label: "Hardware Protocols", value: "DDC/CI (IOAVService & IOKit I2C), VCP 0x10–0xDF, EDID" },
      { label: "Color Pipeline", value: "3×1D GPU Gamma LUT, 3D .cube LUT, 10-bit Deep Color" },
      { label: "Virtual Display Engine", value: "CGVirtualDisplay + 60 FPS ScreenCaptureKit PiP" },
      { label: "Data Transmission", value: "0 bytes transmitted / 100% Offline Execution" },
      { label: "Product Version", value: "v2.4.0 (Direct Single-Click DMG)" },
    ],
    screenshotsMac: [
      {
        id: "lv-1",
        title: "Display Command Center",
        subtitle: "Unified control for every internal and external display",
        image: "/brand/LumenView/1.webp",
        tag: "Command Center",
        description: "Inspect and control resolution, refresh rate, HiDPI scaling, DDC/CI brightness, and color profiles from a single glassmorphic workspace.",
        highlights: ["Instant display topology overview", "Menu bar popover + full studio window", "Zero background CPU overhead"],
      },
      {
        id: "lv-2",
        title: "HiDPI Retina Scaling & 240Hz Refresh",
        subtitle: "Unlock razor-sharp text on 1440p, 4K & Ultrawide monitors",
        image: "/brand/LumenView/2.webp",
        tag: "HiDPI & 240Hz",
        description: "Switch between one-click aspect-ratio presets, custom logical HiDPI resolutions, and variable refresh rates from 50Hz up to 240Hz.",
        highlights: ["True 2× Retina framebuffer rendering", "50Hz–240Hz VRR & ProMotion support", "0° / 90° / 180° / 270° rotation"],
      },
      {
        id: "lv-3",
        title: "Hardware DDC/CI, XDR Boost & Sub-Zero Dimming",
        subtitle: "Control physical monitor backlight & dim below 0%",
        image: "/brand/LumenView/3.webp",
        tag: "DDC/CI & XDR",
        description: "Drive physical monitor backlight, contrast, and speaker volume over USB-C/DisplayPort/HDMI with native macOS brightness/volume key integration.",
        highlights: ["Apple Silicon IOAVService & Intel IOKit", "Sub-Zero dimming down to -100%", "XDR HDR peak brightness upscaling"],
      },
      {
        id: "lv-4",
        title: "3×1D GPU Gamma & 3D .cube LUT Calibration",
        subtitle: "Studio-grade color science & Kelvin temperature control",
        image: "/brand/LumenView/4.webp",
        tag: "Color & LUT",
        description: "Fine-tune per-channel RGB Gamma, Gain, and Offset, dial in Kelvin color temperature (2700K–9300K), and load industry-standard .cube 3D LUTs.",
        highlights: ["Real-time GPU Gamma LUT injection", "7 shader filters (Grayscale, Night Vision, CRT)", "Instant ICC profile switcher"],
      },
      {
        id: "lv-5",
        title: "Proportional Multi-Monitor Arrangement",
        subtitle: "Pixel-accurate snapping & mouse warp teleportation",
        image: "/brand/LumenView/5.webp",
        tag: "Arrangement",
        description: "Drag and snap multiple displays on an interactive canvas with edge-lock alignment, main display crowning, and seamless cursor edge warping.",
        highlights: ["Magnetic edge snapping", "1-click Primary Display assignment", "Proportional physical scale preview"],
      },
      {
        id: "lv-6",
        title: "Advanced Hardware Pipeline & EDID Diagnostics",
        subtitle: "Color encoding, quantization range & DSC telemetry",
        image: "/brand/LumenView/6.webp",
        tag: "Hardware Pipeline",
        description: "Inspect and configure RGB 4:4:4 vs YCbCr 4:2:2/4:2:0 encoding, 8-bit/10-bit depth, Full (0–255) quantization, HDCP status, and Display Stream Compression.",
        highlights: ["RGB 4:4:4 & 10-bit Deep Color", "Full vs Limited quantization range", "Raw EDID hex & manufacturer parser"],
      },
      {
        id: "lv-7",
        title: "Virtual Displays & 60 FPS Picture-in-Picture",
        subtitle: "Software virtual screens without dummy HDMI plugs",
        image: "/brand/LumenView/7.webp",
        tag: "Virtual Displays",
        description: "Spawn custom software virtual displays for headless Mac Minis, screen sharing, or Sidecar workflows with live 60 FPS ScreenCaptureKit PiP windows.",
        highlights: ["16:9, 16:10, 21:9, 32:9 & iPad ratios", "60 FPS ScreenCaptureKit PiP window", "Zero physical dongle required"],
      },
      {
        id: "lv-8",
        title: "Desktop HUD Widgets",
        subtitle: "6 native glassmorphic desktop telemetry cards",
        image: "/brand/LumenView/8.webp",
        tag: "Desktop Widgets",
        description: "Pin interactive Brightness, Resolution, Refresh Rate, Color Temperature, Display Arrangement, and GPU Telemetry widgets directly to your desktop.",
        highlights: ["6 customizable HUD widget types", "Compact, Medium & Wide sizes", "Interactive sliders directly on desktop"],
      },
      {
        id: "lv-9",
        title: "Multi-Display Sync Groups",
        subtitle: "Master/Target brightness & Kelvin synchronization",
        image: "/brand/LumenView/9.webp",
        tag: "Sync Groups",
        description: "Link your built-in MacBook Liquid Retina display with external monitors so brightness, contrast, and night warmth stay perfectly synchronized.",
        highlights: ["Master-to-Target propagation", "Per-monitor offset calibration", "Ambient light curve matching"],
      },
      {
        id: "lv-10",
        title: "Pro Raw VCP Command Console & CLI",
        subtitle: "Direct MCCS VCP hex register read/write & automation",
        image: "/brand/LumenView/10.webp",
        tag: "VCP Console",
        description: "Send raw VCP hex opcodes (0x60 Input Source, 0xD6 Power Mode, 0x14 Color Preset) and automate display presets from Shortcuts or terminal scripts.",
        highlights: ["Direct VCP register read/write", "1-click Input Source KVM switching", "Built-in test pattern generator"],
      },
    ],
    keywords: [
      "LumenView",
      "macOS HiDPI scaling",
      "BetterDisplay alternative Mac",
      "DDC CI brightness Mac",
      "external monitor brightness macOS",
      "virtual display macOS",
      "240Hz refresh rate Mac",
      "3D LUT macOS",
    ],
  },
  metricove: {
    slug: "metricove",
    name: "Metricove: Mac System Monitor",
    shortName: "Metricove",
    tagline: "CPU, GPU, RAM, Disk, Network & SMC Thermal Stats in Your Menu Bar",
    subtitle: "CPU, GPU, RAM & Thermal Stats",
    promotionalText:
      "Real-time Apple Silicon & Intel hardware telemetry in your macOS Menu Bar. Track P/E-Cores, Metal GPU, Memory Pressure, NVMe Disk I/O, Network & SMC Thermals.",
    shortDescription:
      "Monitor Apple Silicon P/E-Cores, Metal GPU, Unified RAM, NVMe Disk I/O, Network ping, and SMC CPU/GPU temperatures in your macOS Menu Bar. 2.3 MB native app.",
    fullDescription:
      "Designed for developers, creative professionals, and power users, Metricove delivers real-time hardware telemetry without Electron bloat. Monitor every subsystem from a customizable 3-tab Menu Bar popover and a 9-module glassmorphic desktop dashboard — complete with 5 curated accent themes, threshold alerts, and 1-click JSON diagnostic snapshots.",
    philosophy:
      "A system monitor should never become the process hog it was meant to observe. At just 2.3 MB, Metricove queries Mach kernel host statistics and IOKit SMC registers directly with sub-1% CPU impact and zero network activity.",
    version: "1.0.0",
    appSize: "2.3 MB",
    bundleId: "com.metricove.monitor",
    minMacOsVersion: "macOS 14.0+ (Sonoma & Sequoia)",
    architecture: "Universal Binary (Apple Silicon M1–M4 & Intel) • Swift, Mach & IOKit SMC",
    primaryCategory: "Utilities",
    secondaryCategory: "Developer Tools",
    pricingModel: "100% Free Direct Download — Zero Telemetry",
    platform: "macOS 14.0+ (Apple Silicon & Intel)",
    downloadUrl: "https://github.com/Shubham-sharma8/cogifyme/releases/download/v1.0/Metricove.dmg",
    icon: "/brand/Metricove/icon-sm.webp",
    iconLarge: "/brand/Metricove/icon.webp",
    accentColor: "cyan",
    features: [
      {
        title: "Apple Silicon P-Core & E-Core CPU Telemetry",
        description:
          "Real-time total load, System vs User vs Idle split, per-core utilization bars, P-Core/E-Core topology, 1m/5m/15m load averages, and top CPU processes.",
        tag: "CPU & Cores",
      },
      {
        title: "Metal GPU Engine & Unified VRAM Inspector",
        description:
          "Live Metal accelerator utilization, allocated Unified Memory / VRAM tracking, active display refresh rate (Hz), and thermal state monitoring.",
        tag: "Metal GPU",
      },
      {
        title: "Memory Pressure, Wired/Compressed & Swap",
        description:
          "Mach VM page breakdown across App Memory, Wired, Compressed, and Cached files with real-time swap activity and memory hog process ranking.",
        tag: "Unified RAM",
      },
      {
        title: "NVMe Disk I/O & Volume Capacity",
        description:
          "Live read/write throughput sparklines (MB/s), cumulative session bytes read/written, SMART health status, and 1-click Finder volume reveal.",
        tag: "NVMe Disk I/O",
      },
      {
        title: "Network Bandwidth, Ping & Interface Inspector",
        description:
          "Real-time download/upload throughput graphs, local IPv4, gateway IP, Wi-Fi SSID, active interface detection, and round-trip latency (ms).",
        tag: "Network & Ping",
      },
      {
        title: "SMC Thermal Sensors, Fan RPM & Power Wattage",
        description:
          "Direct Apple SMC temperature readouts across CPU/GPU/ANE/SSD/Airflow sensors, live fan RPM curves, battery health, and system DC-In watts.",
        tag: "SMC & Power",
      },
    ],
    specifications: [
      { label: "Application Type", value: "Native macOS Menu Bar & Hardware Telemetry Suite" },
      { label: "Installer Size", value: "2.3 MB Universal DMG (Signed Developer ID)" },
      { label: "Platforms Supported", value: "macOS 14.0+ (Apple Silicon M1–M4 & Intel)" },
      { label: "Telemetry APIs", value: "Mach Kernel host_processor_info, Metal, IOKit & AppleSMC" },
      { label: "Refresh Intervals", value: "Configurable 1s, 2s, 3s, or 5s Low-Power Polling" },
      { label: "Accent Themes", value: "Cyber Cyan, Emerald Pulse, Violet Nebula, Amber Solar, Crimson" },
      { label: "Data Transmission", value: "0 bytes transmitted / 100% Air-Gapped Local Telemetry" },
      { label: "Product Version", value: "v1.0.0 (Direct Single-Click DMG)" },
    ],
    screenshotsMac: [
      {
        id: "mc-1",
        title: "Unified Hardware Overview Dashboard",
        subtitle: "All 8 macOS hardware subsystems at a single glance",
        image: "/brand/Metricove/1.webp",
        tag: "Overview",
        description: "Monitor CPU, GPU, Memory, Disk, Network, Sensors, Battery, and Top Processes in a cohesive dark glassmorphic command center.",
        highlights: ["4 radial health gauges", "Live dual-line throughput charts", "Instant hardware specification card"],
      },
      {
        id: "mc-2",
        title: "3-Tab Menu Bar Popover & Live Widgets",
        subtitle: "Instant telemetry directly from your macOS Menu Bar",
        image: "/brand/Metricove/2.webp",
        tag: "Menu Bar",
        description: "Customize which live metrics appear in your macOS menu bar and open a 3-tab popover (Overview, Top Processes, Network & Power) with a click.",
        highlights: ["Toggleable CPU, GPU, RAM, Disk, Net, Temp & Watts", "Monospaced jitter-free menu bar numbers", "1-click JSON diagnostic snapshot"],
      },
      {
        id: "mc-3",
        title: "CPU & Apple Silicon P/E-Core Topology",
        subtitle: "Per-thread utilization bars & Mach kernel load averages",
        image: "/brand/Metricove/3.webp",
        tag: "CPU & Cores",
        description: "Inspect every Performance and Efficiency core in real time alongside System/User/Idle splits, 1m/5m/15m load averages, and top CPU processes.",
        highlights: ["Apple Silicon P-Core & E-Core breakdown", "Individual logical thread bars", "Live top CPU process table"],
      },
      {
        id: "mc-4",
        title: "Metal GPU & Unified VRAM Telemetry",
        subtitle: "Real-time GPU core load, memory allocation & display Hz",
        image: "/brand/Metricove/4.webp",
        tag: "Metal GPU",
        description: "Track Apple Silicon and discrete Metal GPU utilization, allocated Unified VRAM, active display refresh rate, and GPU thermal state.",
        highlights: ["IOAccelerator Metal engine load", "Unified VRAM allocation tracking", "ProMotion & external Hz readout"],
      },
      {
        id: "mc-5",
        title: "Memory Pressure & Swap Breakdown",
        subtitle: "App Memory, Wired, Compressed, Cached & Swap usage",
        image: "/brand/Metricove/5.webp",
        tag: "Memory & Swap",
        description: "Understand exact RAM allocation with Mach VM page counters, Memory Pressure gauges, Swap Used/Total metrics, and top RAM consumers.",
        highlights: ["App vs Wired vs Compressed split", "Real-time Swap I/O monitoring", "Top memory hog process list"],
      },
      {
        id: "mc-6",
        title: "NVMe Disk Throughput & Volume Inspector",
        subtitle: "Live read/write MB/s sparklines & mounted drive health",
        image: "/brand/Metricove/6.webp",
        tag: "Disk I/O",
        description: "Watch real-time NVMe read and write speeds, session total bytes transferred, APFS container usage, and SMART health status.",
        highlights: ["Live Read/Write MB/s curves", "Cumulative session I/O counters", "1-click Open in Finder"],
      },
      {
        id: "mc-7",
        title: "Network Bandwidth & Interface Inspector",
        subtitle: "Download/Upload speed, Ping latency, Wi-Fi SSID & IP",
        image: "/brand/Metricove/7.webp",
        tag: "Network",
        description: "Monitor live upload and download bandwidth, round-trip ping latency, active interface (en0/utun), local IPv4, router gateway, and Wi-Fi SSID.",
        highlights: ["Dual-series Down/Up throughput chart", "1-click Copy Local IP", "Live gateway ping latency (ms)"],
      },
      {
        id: "mc-8",
        title: "SMC Thermal Sensors & Cooling Fan Curves",
        subtitle: "Direct AppleSMC die temperatures & RPM tachometer",
        image: "/brand/Metricove/8.webp",
        tag: "SMC Thermals",
        description: "Read raw AppleSMC temperature sensors across CPU cores, GPU clusters, ANE, NAND SSD, battery, and palm rest alongside live fan RPMs.",
        highlights: ["Categorized SMC thermal probes", "Live Fan RPM vs Max capacity", "°C and °F unit toggle"],
      },
      {
        id: "mc-9",
        title: "Battery Health & System Power Wattage",
        subtitle: "Cycle count, maximum capacity, charger watts & DC-In",
        image: "/brand/Metricove/9.webp",
        tag: "Battery & Power",
        description: "Inspect battery health percentage, design vs current mAh capacity, cycle count, cell voltage/amperage, adapter wattage, and live system power draw.",
        highlights: ["Live System Power (W) & Adapter rating", "Cycle count & mAh health degradation", "Time remaining / time to full charge"],
      },
      {
        id: "mc-10",
        title: "5 Accent Themes, Smart Alerts & Customization",
        subtitle: "Personalize polling rates, thresholds & menu bar items",
        image: "/brand/Metricove/10.webp",
        tag: "Customization",
        description: "Switch between 5 signature accent themes, configure smart CPU/RAM/Thermal/Battery alert thresholds, and tune polling intervals from 1s to 5s.",
        highlights: ["5 signature dark glassmorphic themes", "Configurable CPU, RAM & Thermal alerts", "Launch at Login & JSON export"],
      },
    ],
    keywords: [
      "Metricove",
      "macOS system monitor",
      "iStat Menus alternative Mac",
      "Stats macOS menu bar",
      "Apple Silicon CPU temperature monitor",
      "Mac fan speed SMC monitor",
      "macOS RAM GPU menu bar monitor",
    ],
  },
  netguard: {
    slug: "netguard",
    name: "NetGuard: Network & Firewall",
    shortName: "NetGuard",
    tagline: "Interactive 3D Traffic Radar, Process Inspector & Rule Shield for macOS",
    subtitle: "3D Traffic Radar & Rule Shield",
    promotionalText:
      "Visualize every outbound connection on an interactive 3D Earth Globe, inspect live processes with code-signing verification, and block trackers with 1-Click Threat Shield Packs.",
    shortDescription:
      "Visualize outbound Mac connections on a 60 FPS 3D Earth radar, verify process code signatures, and block telemetry with NetGuard's native macOS firewall.",
    fullDescription:
      "Built natively in SwiftUI, SceneKit, MapKit, and NetworkExtension for macOS 14+, NetGuard gives you x-ray visibility into every packet leaving your Mac. Rotate an interactive 3D satellite globe with geodesic connection arcs, audit live processes and SHA-256 code signatures, enable Allow on Startup so boot apps never hang while new processes are caught, and deploy 1-Click Threat Shield Packs.",
    philosophy:
      "Your Mac shouldn't silently phone home to hundreds of unknown tracking and telemetry servers behind your back. NetGuard puts a deterministic, zero-telemetry 3D radar and rule engine under your complete control in a 3.8 MB native binary.",
    version: "1.0.0",
    appSize: "3.8 MB",
    bundleId: "com.netguard.macos.app",
    minMacOsVersion: "macOS 14.0+ (Sonoma & Sequoia)",
    architecture: "Universal Binary (Apple Silicon M1–M4 & Intel) • SwiftUI, SceneKit & NetworkExtension",
    primaryCategory: "Utilities",
    secondaryCategory: "Developer Tools",
    pricingModel: "100% Free Direct Download — Zero Telemetry",
    platform: "macOS 14.0+ (Apple Silicon & Intel)",
    downloadUrl: "https://github.com/Shubham-sharma8/cogifyme/releases/download/v1.0/NetGuard.dmg",
    icon: "/brand/NetGuard/icon-sm.webp",
    iconLarge: "/brand/NetGuard/icon.webp",
    accentColor: "emerald",
    features: [
      {
        title: "Interactive 3D Earth Globe & 2D MapKit Radar",
        description:
          "Visualize live network connections on a hardware-accelerated 60 FPS SceneKit 3D globe with glowing geodesic flight arcs, country flags, ASN, and latency badges.",
        tag: "3D Globe Radar",
      },
      {
        title: "Allow on Startup (Smart Boot Baseline)",
        description:
          "Automatically trust apps already running when your Mac boots so core workflows never hang, while immediately intercepting newly launched processes.",
        tag: "Boot Protection",
      },
      {
        title: "Deterministic Application Firewall & Rule Matrix",
        description:
          "Create permanent, temporary (15m / 1h / Until Quit), or domain-wildcard Allow/Block rules per process, protocol (TCP/UDP/ICMP/QUIC), port, and country.",
        tag: "Firewall Engine",
      },
      {
        title: "1-Click Threat Shield Packs",
        description:
          "Deploy curated defense packs in one click: Ad & Tracker Domains, OS & App Telemetry Block, AI Scraper & Bot Shield, and Insecure Cleartext Port Guard.",
        tag: "Threat Shields",
      },
      {
        title: "Deep Process & Code-Signature Inspector",
        description:
          "Inspect Apple/Developer ID code-signing authorities, bundle paths, PIDs, parent processes, reverse DNS hostnames, and per-app bandwidth sparklines.",
        tag: "Code Signing",
      },
      {
        title: "Menu Bar Command Center & 4 WidgetKit Widgets",
        description:
          "Monitor live Up/Down throughput, switch Shield Modes (Alert, Silent Allow, Silent Block, Lockdown), and pin 4 native macOS desktop widgets.",
        tag: "Menu Bar & Widgets",
      },
    ],
    specifications: [
      { label: "Application Type", value: "Native macOS Network Monitor & Application Firewall" },
      { label: "Installer Size", value: "3.8 MB Universal DMG (Signed Developer ID)" },
      { label: "Platforms Supported", value: "macOS 14.0+ (Apple Silicon M1–M4 & Intel)" },
      { label: "Visualization Engine", value: "60 FPS SceneKit 3D Earth Globe + 2D MapKit Dark Radar" },
      { label: "Export Formats", value: "JSON, CSV & Standard PCAP Packet Metadata Export" },
      { label: "Desktop Widgets", value: "4 Native WidgetKit Extensions (Posture, Bandwidth, Countries, Threats)" },
      { label: "Data Transmission", value: "0 bytes transmitted / 100% On-Device Packet Inspection" },
      { label: "Product Version", value: "v1.0.0 (Direct Single-Click DMG)" },
    ],
    screenshotsMac: [
      {
        id: "ng-1",
        title: "Overview Dashboard & Security Posture Score",
        subtitle: "Real-time 0–100 security score, 3D globe & bandwidth telemetry",
        image: "/brand/NetGuard/1.webp",
        tag: "Command Center",
        description: "Track your Mac's real-time Security Posture Score (0–100), live upload/download sparklines, active connections, and blocked threat events in one unified view.",
        highlights: ["Live Security Posture Score (0–100)", "Embedded 3D globe preview", "Top applications & destination countries"],
      },
      {
        id: "ng-2",
        title: "Interactive 3D Global Connection Radar",
        subtitle: "60 FPS SceneKit Earth globe with geodesic flight arcs",
        image: "/brand/NetGuard/2.webp",
        tag: "3D Earth Radar",
        description: "Rotate, zoom, and click any glowing node on the 3D Earth globe or 2D MapKit radar to inspect every process talking to that country and ASN.",
        highlights: ["60 FPS SceneKit 3D satellite globe", "Color-coded Allow (Cyan) vs Block (Crimson) arcs", "Country, city, ASN & latency inspector"],
      },
      {
        id: "ng-3",
        title: "Live Process Inspector & Deterministic Rule Engine",
        subtitle: "Per-app sockets, code-signature verification & instant blocking",
        image: "/brand/NetGuard/3.webp",
        tag: "Process & Rules",
        description: "Group live traffic by application, domain, IP, country, or protocol. Verify Developer ID signatures and create 1-click Allow or Block rules.",
        highlights: ["Code-signing authority verification", "Temporary (15m / 1h) or permanent rules", "Export to JSON, CSV & PCAP"],
      },
      {
        id: "ng-4",
        title: "Allow on Startup & 1-Click Threat Shield Packs",
        subtitle: "Zero boot popups + curated telemetry & tracker blocklists",
        image: "/brand/NetGuard/4.webp",
        tag: "Threat Shields",
        description: "Enable Allow on Startup to auto-trust your baseline boot apps while deploying 1-Click Threat Shield Packs against ads, telemetry, and cleartext ports.",
        highlights: ["Allow on Startup boot baseline", "4 curated 1-Click Threat Shield Packs", "Network Profile Aware (Home / Public Wi-Fi)"],
      },
      {
        id: "ng-5",
        title: "Menu Bar Command Center & 4 Desktop Widgets",
        subtitle: "Instant Lockdown switch, live throughput & WidgetKit gallery",
        image: "/brand/NetGuard/5.webp",
        tag: "Menu Bar & Widgets",
        description: "Control NetGuard from your macOS menu bar with live Up/Down speeds, Panic Lockdown toggle, and 4 native macOS Notification Center & Desktop widgets.",
        highlights: ["1-click Panic Lockdown switch", "Live menu bar bandwidth counter", "4 native macOS WidgetKit widgets"],
      },
    ],
    keywords: [
      "NetGuard",
      "macOS firewall",
      "Little Snitch alternative Mac",
      "LuLu firewall alternative macOS",
      "3D network traffic map Mac",
      "macOS outbound connection monitor",
      "block app telemetry Mac",
    ],
  },
  klipora: {
    slug: "klipora",
    name: "Klipora: Clipboard Manager",
    shortName: "Klipora",
    tagline: "Keyboard-First Clipboard Workspace, Bento Board, Dev Studio & Vision OCR",
    subtitle: "Fast, Private Copy History",
    promotionalText:
      "Summon your entire copy history in under 16ms with ⌘⇧V. Features Split Inspector, Bento Visual Board, Dev Scratchpad, local Vision OCR, and 100% offline SQLite WAL storage.",
    shortDescription:
      "Summon your macOS clipboard history in under 16ms (⌘⇧V) with Split Inspector, Bento Board, Dev Scratchpad, local Apple Vision OCR, and 100% offline SQLite.",
    fullDescription:
      "Engineered for developers, designers, and writers who demand sub-millisecond speed and absolute privacy, Klipora stores your entire clipboard history locally in an indexed SQLite WAL database. Search across thousands of text snippets, code blocks, URLs, colors, images, and files using Smart, Exact, Fuzzy, or Regex queries — while automatically ignoring password managers.",
    philosophy:
      "Your clipboard holds your most sensitive code, credentials, and creative work. Klipora processes everything 100% on-device with zero cloud sync, zero telemetry, automatic password-manager exclusion, and an instant NSPanel HUD.",
    version: "1.0.0",
    appSize: "3.1 MB",
    bundleId: "app.klipora.macos",
    minMacOsVersion: "macOS 14.0+ (Sonoma & Sequoia)",
    architecture: "Universal Binary (Apple Silicon M1–M4 & Intel) • Swift, AppKit, Vision & SQLite WAL",
    primaryCategory: "Productivity",
    secondaryCategory: "Developer Tools",
    pricingModel: "100% Free Direct Download — Zero Telemetry",
    platform: "macOS 14.0+ (Apple Silicon & Intel)",
    downloadUrl: "https://github.com/Shubham-sharma8/cogifyme/releases/download/v1.0/Klipora.dmg",
    icon: "/brand/Klipora/icon-sm.webp",
    iconLarge: "/brand/Klipora/icon.webp",
    accentColor: "violet",
    features: [
      {
        title: "3 Distinct Workspace Modes (⌘L, ⌘G, ⌘K)",
        description:
          "Switch instantly between Split List & Inspector (⌘L), Masonry Bento Visual Board (⌘G) for images & color swatches, and Dev Studio Scratchpad (⌘K).",
        tag: "3 Workspaces",
      },
      {
        title: "Sub-Millisecond Smart, Fuzzy & Regex Search",
        description:
          "Filter tens of thousands of clips by content, source app, or tag using Smart, Exact, Fuzzy, or full Regular Expression (.*) matching.",
        tag: "Regex & Fuzzy",
      },
      {
        title: "On-Device Apple Vision OCR & Offline QR Generator",
        description:
          "Extract text from any copied screenshot in a single click using Apple's local Vision framework and generate high-resolution QR codes offline.",
        tag: "Vision OCR & QR",
      },
      {
        title: "Smart Payload Detection & 11 Text Transforms",
        description:
          "Automatically strip UTM tracking params from URLs, pretty-print JSON, decode JWT tokens, check WCAG contrast, and run 11 case/hash transforms.",
        tag: "Dev Transforms",
      },
      {
        title: "Sequential Paste Queue (⌃Q) & Pinboards",
        description:
          "Queue multiple items into a FIFO Paste Stack and paste them one-by-one in order, or organize permanent snippets into color-coded Pinboards.",
        tag: "Paste Stack",
      },
      {
        title: "Privacy Shield & Password Manager Auto-Exclusion",
        description:
          "Respects org.nspasteboard.ConcealedType & TransientType out of the box—automatically ignoring 1Password, Bitwarden, Keychain, and Apple Passwords.",
        tag: "Privacy Shield",
      },
    ],
    specifications: [
      { label: "Application Type", value: "Native macOS Clipboard Manager & Developer Scratchpad" },
      { label: "Installer Size", value: "3.1 MB Universal DMG (Signed Developer ID)" },
      { label: "Platforms Supported", value: "macOS 14.0+ (Apple Silicon M1–M4 & Intel)" },
      { label: "Storage Engine", value: "Local SQLite 3 WAL Mode + SHA-256 Deduplication" },
      { label: "On-Device AI / OCR", value: "Apple Vision Framework (VNRecognizeTextRequest)" },
      { label: "Global Hotkeys", value: "⌘⇧V Summon HUD • ⌘1–⌘9 Quick Paste • ⇧↩ Plain Text" },
      { label: "Data Transmission", value: "0 bytes transmitted / 100% Air-Gapped Local Vault" },
      { label: "Product Version", value: "v1.0.0 (Direct Single-Click DMG)" },
    ],
    screenshotsMac: [
      {
        id: "kl-1",
        title: "Floating NSPanel HUD & Split Inspector (⌘L)",
        subtitle: "Summon anywhere in <16ms without leaving your active window",
        image: "/brand/Klipora/1.webp",
        tag: "Split Inspector",
        description: "Press ⌘⇧V over any full-screen app to summon Klipora's non-activating floating panel with instant keyboard navigation (↑/↓, ⌘1–⌘9) and rich payload inspection.",
        highlights: ["<16ms floating NSPanel summon", "Instant ⌘1–⌘9 quick paste", "⇧↩ Paste as Plain Text"],
      },
      {
        id: "kl-2",
        title: "Bento Grid Visual Board (⌘G)",
        subtitle: "Masonry visual cards for screenshots, hex colors, links & code",
        image: "/brand/Klipora/2.webp",
        tag: "Bento Board",
        description: "Browse your clipboard visually in a 2-column Bento grid showcasing image dimensions, live HEX/RGB/HSL color swatches with WCAG ratios, and syntax-badged code.",
        highlights: ["Live HEX/RGB/HSL color cards", "1-click Apple Vision OCR on images", "Color-coded Pinboard collections"],
      },
      {
        id: "kl-3",
        title: "Studio Scratchpad & 11 Developer Transforms (⌘K)",
        subtitle: "Edit, format JSON, decode JWTs, strip UTM links & hash strings",
        image: "/brand/Klipora/3.webp",
        tag: "Dev Studio",
        description: "Open any clip in the live Studio Scratchpad to edit text, pretty-print or minify JSON, decode Base64/JWT, strip tracking URLs, or compute SHA-256 hashes.",
        highlights: ["11 instant text & code transforms", "Smart UTM tracking parameter stripper", "Offline high-res QR code generator"],
      },
      {
        id: "kl-4",
        title: "Privacy Shield & Password Manager Protection",
        subtitle: "Zero cloud sync + automatic concealed pasteboard exclusion",
        image: "/brand/Klipora/4.webp",
        tag: "Privacy Shield",
        description: "Klipora automatically ignores concealed and transient copies from 1Password, Bitwarden, Keychain, and Terminal while letting you blur sensitive items with ⌃S.",
        highlights: ["Auto-ignores password managers", "Per-app blocklist & Pause Monitoring", "⌃S Sensitive clip blur toggle"],
      },
      {
        id: "kl-5",
        title: "Interactive Desktop Widgets, Themes & SQLite Vault",
        subtitle: "Native WidgetKit extension, 5 accent palettes & 1-click backup",
        image: "/brand/Klipora/5.webp",
        tag: "Widgets & Vault",
        description: "Pin interactive Clipboard History widgets to your macOS desktop, customize 5 accent themes, and export/import your entire SQLite vault as portable JSON.",
        highlights: ["Interactive macOS WidgetKit extension", "5 accent themes & 3 density modes", "1-click JSON Vault Export & Import"],
      },
    ],
    keywords: [
      "Klipora",
      "macOS clipboard manager",
      "Paste alternative Mac",
      "Maccy Raycast clipboard alternative",
      "developer clipboard manager macOS",
      "offline clipboard history Mac",
      "Vision OCR clipboard Mac",
    ],
  },
  showFreeSpace: {
    slug: "show-free-space",
    name: "Show free space: Disk Analyzer & Storage Widget",
    shortName: "Show free space",
    tagline: "Sunburst & Treemap Disk Visualizer, Dev Cache Cleaner & Storage Widgets",
    subtitle: "Disk Analyzer & Storage Widget",
    promotionalText:
      "Visualize where every gigabyte goes with interactive Sunburst & Treemap charts, reclaim Xcode/npm/Docker caches, find SHA-256 duplicates, and pin live Desktop HUD widgets.",
    shortDescription:
      "Analyze macOS disk space with interactive Sunburst & Treemap charts, clean Xcode/npm/Docker caches, find SHA-256 duplicates, and pin live storage widgets.",
    fullDescription:
      "Re-engineered for macOS Ventura, Sonoma, and Sequoia, Show free space combines an interactive Space Lens visualizer (Sunburst & Treemap), 7 native macOS WidgetKit widgets, 4 Floating Desktop HUD presets (⌘⇧W), a live Menu Bar monitor, Big Wins Developer Cache Cleaner (Xcode DerivedData, npm, Homebrew, Cargo, Docker), SHA-256 Duplicate Finder, Deep App Uninstaller, and Smart Organizer.",
    philosophy:
      "Reclaiming disk space on macOS shouldn't require predatory subscriptions or opaque 'junk cleaners' that delete files behind your back. Every cleanup action in Show free space is 100% transparent, previewable in Staging Drawer, and routed safely through macOS Trash.",
    version: "1.0.0",
    appSize: "579 MB",
    bundleId: "me.cogify.showfreespace",
    minMacOsVersion: "macOS 13.0+ (Ventura, Sonoma & Sequoia)",
    architecture: "macOS Storage Engine + Native WidgetKit Extension (.appex)",
    primaryCategory: "Utilities",
    secondaryCategory: "Developer Tools",
    pricingModel: "100% Free Direct Download — Zero Telemetry",
    platform: "macOS 13.0+ (Apple Silicon & Intel)",
    downloadUrl: "https://github.com/Shubham-sharma8/cogifyme/releases/download/v1.0/ShowFreeSpace.dmg",
    icon: "/brand/ShowFreeSpace/icon-sm.webp",
    iconLarge: "/brand/ShowFreeSpace/icon.webp",
    accentColor: "amber",
    features: [
      {
        title: "Interactive Sunburst & Treemap Space Lens",
        description:
          "Drill down into any folder or external volume with fluid Sunburst radial rings and proportional Treemap blocks with breadcrumb navigation and file type breakdowns.",
        tag: "Space Lens",
      },
      {
        title: "7 Native macOS Widgets + 4 Floating Desktop HUDs",
        description:
          "Add native WidgetKit storage gauges to your macOS Desktop & Notification Center, or toggle 4 translucent Floating Desktop HUD presets anywhere with ⌘⇧W.",
        tag: "Widgets & HUD",
      },
      {
        title: "Big Wins Developer Cache Cleaner & Quick Maintenance",
        description:
          "Reclaim tens of gigabytes from Xcode DerivedData, iOS Simulators, npm/pnpm/Yarn, Homebrew, Cargo, Gradle, CocoaPods, and Docker—plus 1-click .DS_Store & cache cleanup.",
        tag: "Dev Cleaner",
      },
      {
        title: "Byte-Accurate SHA-256 Duplicate Finder",
        description:
          "Two-stage file size pre-filtering and cryptographic SHA-256 verification guarantee zero false positives, with Smart Auto-Select that always keeps your oldest original.",
        tag: "SHA-256 Dedup",
      },
      {
        title: "Deep App Uninstaller & Orphaned Leftover Scanner",
        description:
          "Scan /Applications Alongside ~/Library/Application Support, Caches, Preferences, Containers, and Logs to remove gigabytes of hidden app leftovers together.",
        tag: "Deep Uninstaller",
      },
      {
        title: "Live Menu Bar Monitor & System Pulse Telemetry",
        description:
          "Track live free disk space (GB), CPU load (%), Memory Pressure, and network speed (MB/s) directly in your macOS menu bar with 1-click Quick Purge.",
        tag: "Menu Bar & Pulse",
      },
    ],
    specifications: [
      { label: "Application Type", value: "macOS Storage Visualizer, Dev Cleaner & Widget Suite" },
      { label: "Platforms Supported", value: "macOS 13.0+ (Ventura, Sonoma & Sequoia)" },
      { label: "Visualization Modes", value: "Interactive Sunburst Chart, Treemap Grid & Split List" },
      { label: "Widgets Included", value: "7 Native WidgetKit Sizes + 4 Floating Desktop HUDs (⌘⇧W)" },
      { label: "Deduplication Engine", value: "Size-Grouped Pre-Filter + Cryptographic SHA-256 Hash" },
      { label: "Safety Architecture", value: "Review Purge Staging Drawer + Recoverable macOS Trash" },
      { label: "Data Transmission", value: "0 bytes transmitted / 100% Local Disk Analysis" },
      { label: "Product Version", value: "v1.0.0 (Direct Single-Click DMG)" },
    ],
    screenshotsMac: [
      {
        id: "sfs-1",
        title: "Interactive Sunburst & Treemap Storage Visualizer",
        subtitle: "See where every gigabyte goes with instant visual drill-down",
        image: "/brand/ShowFreeSpace/1.webp",
        tag: "Space Lens",
        description: "Scan Macintosh HD, your Home folder, or any external drive and explore nested directories through interactive Sunburst rings and proportional Treemap blocks.",
        highlights: ["Interactive Sunburst & Treemap views", "Instant folder drill-down & breadcrumbs", "Stage files for safe Trash removal"],
      },
      {
        id: "sfs-2",
        title: "Native macOS Notification Center & Desktop Widgets",
        subtitle: "7 native WidgetKit storage, CPU, RAM & purge widgets",
        image: "/brand/ShowFreeSpace/2.webp",
        tag: "macOS Widgets",
        description: "Pin Small, Medium, and Large native WidgetKit storage gauges, category breakdowns, and live hardware telemetry directly to your macOS Sonoma/Sequoia desktop.",
        highlights: ["7 native WidgetKit widget styles", "Live Macintosh HD free space ring", "1-click deep links into cleaner tools"],
      },
      {
        id: "sfs-3",
        title: "Floating Desktop HUD Overlay (4 Presets • ⌘⇧W)",
        subtitle: "Always-on-top glassmorphic telemetry pill, card, ring & strip",
        image: "/brand/ShowFreeSpace/3.webp",
        tag: "Desktop HUD",
        description: "Toggle a sleek, draggable desktop HUD overlay with ⌘⇧W and switch between Compact Pill, Detailed Card, Minimal Ring, and Horizontal Strip presets.",
        highlights: ["4 customizable HUD layout presets", "Global ⌘⇧W show/hide shortcut", "Adjustable opacity & window level"],
      },
      {
        id: "sfs-4",
        title: "Live Menu Bar Monitor & Quick Dropdown",
        subtitle: "Real-time GB Free, CPU % & MB/s in your macOS Menu Bar",
        image: "/brand/ShowFreeSpace/4.webp",
        tag: "Menu Bar",
        description: "Keep an eye on remaining disk space, CPU load, and network throughput from the menu bar, and open the dropdown for 1-click Quick Purge and volume mounting.",
        highlights: ["Live Menu Bar GB / CPU / MB/s readout", "Mounted external volume health bars", "1-click Quick Purge from menu bar"],
      },
      {
        id: "sfs-5",
        title: "System Pulse Monitor (CPU, RAM, Disk I/O & Network)",
        subtitle: "60-second sparkline telemetry & top process inspector",
        image: "/brand/ShowFreeSpace/5.webp",
        tag: "System Pulse",
        description: "Inspect per-core CPU load, Memory Pressure, Disk Read/Write MB/s, Network RX/TX throughput, battery health, and top resource-consuming processes.",
        highlights: ["Live 60-second hardware sparklines", "Top CPU & Memory process tables", "Per-volume APFS capacity breakdown"],
      },
      {
        id: "sfs-6",
        title: "Big Wins Developer Cache Cleaner",
        subtitle: "Reclaim gigabytes from Xcode, npm, Homebrew, Cargo & Docker",
        image: "/brand/ShowFreeSpace/6.webp",
        tag: "Dev Cleaner",
        description: "Automatically detect safe-to-regenerate developer caches (Xcode DerivedData, iOS Simulators, npm, pnpm, Homebrew, Cargo, Gradle, Docker) and run 1-click Quick Maintenance.",
        highlights: ["Xcode DerivedData & Simulator cleaner", "npm, pnpm, Yarn, Homebrew, Cargo & Pip", "1-click .DS_Store & empty folder sweep"],
      },
      {
        id: "sfs-7",
        title: "Space Radar: Large & Stale File Hunter",
        subtitle: "Pinpoint forgotten multi-gigabyte DMGs, ISOs, videos & archives",
        image: "/brand/ShowFreeSpace/7.webp",
        tag: "Space Radar",
        description: "Filter files by size threshold (50 MB to 1 GB+) and staleness age (30+ to 365+ days untouched) to uncover forgotten raw videos, VM images, and old installers.",
        highlights: ["Instant 50MB / 250MB / 1GB+ filters", "Stale file age detection (30–365+ days)", "Quick Look preview & Reveal in Finder"],
      },
      {
        id: "sfs-8",
        title: "Byte-Accurate SHA-256 Duplicate Finder",
        subtitle: "Zero false positives with cryptographic hash verification",
        image: "/brand/ShowFreeSpace/8.webp",
        tag: "SHA-256 Dedup",
        description: "Find exact duplicate photos, documents, archives, and media across folders using two-stage size grouping and full SHA-256 cryptographic hashing.",
        highlights: ["Cryptographic SHA-256 verification", "1-click Smart Auto-Select Duplicates", "Always preserves your oldest original"],
      },
      {
        id: "sfs-9",
        title: "Deep App Uninstaller & Orphaned Leftover Cleaner",
        subtitle: "Remove apps together with hidden ~/Library caches & containers",
        image: "/brand/ShowFreeSpace/9.webp",
        tag: "Deep Uninstaller",
        description: "Dragging an app to Trash leaves gigabytes of orphaned files behind. Inspect every app's bundle size alongside its Application Support, Caches, Containers, and Logs.",
        highlights: ["Full ~/Library leftover correlation", "Clean Leftovers Only or Full Uninstall", "Safe removal via macOS Trash"],
      },
      {
        id: "sfs-10",
        title: "Smart Downloads Organizer, Quick Search (⌘K) & Themes",
        subtitle: "Declutter messy folders & search any file in milliseconds",
        image: "/brand/ShowFreeSpace/10.webp",
        tag: "Smart Organizer",
        description: "Preview and sort messy Downloads or Desktop folders into clean category folders with 1-click Undo, search files globally via ⌘K, and switch between 3 themes.",
        highlights: ["Dry-run Organizer preview + 1-click Undo", "Global ⌘K Spotlight-style file search", "Midnight Dark, Daylight & Native macOS themes"],
      },
    ],
    keywords: [
      "Show free space",
      "macOS disk space analyzer",
      "DaisyDisk CleanMyMac alternative",
      "GrandPerspective OmniDiskSweeper alternative",
      "Xcode DerivedData cleaner Mac",
      "duplicate file finder macOS SHA256",
      "macOS storage widget",
    ],
  },
};

export const liveMacApps: MacAppConfig[] = [
  siteConfig.lumenview,
  siteConfig.metricove,
  siteConfig.netguard,
  siteConfig.klipora,
  siteConfig.showFreeSpace,
];

export const liveSafariApps: SafariAppConfig[] = [
  siteConfig.adBlocker,
  siteConfig.readereasy,
  siteConfig.webclear,
  siteConfig.weblenses,
];
