export interface WheelifyCommandDemo {
  id: string;
  query: string;
  category: "SCIENTIFIC MATH" | "LIVE ECB FX" | "UNIT CONVERSION" | "TOOL FILTER";
  headlineResult: string;
  secondaryReadout: string;
  subDetail: string;
  activeSectorIndex: number;
  activeSectorLabel: string;
}

export const WHEELIFY_COMMAND_DEMOS: WheelifyCommandDemo[] = [
  {
    id: "power-pi",
    query: "2^10 * 3.14",
    category: "SCIENTIFIC MATH",
    headlineResult: "3,215.36",
    secondaryReadout: "HEX 0xC8F • BIN 0b110010001111",
    subDetail: "Evaluated live in the Inline Command Bar as you type. Press ⏎ Return to copy.",
    activeSectorIndex: 2,
    activeSectorLabel: "Calculator • f(x)",
  },
  {
    id: "trig-rad",
    query: "sin(pi/4) * 2^10",
    category: "SCIENTIFIC MATH",
    headlineResult: "724.077344",
    secondaryReadout: "RAD mode • HEX 0x2D4 • BIN 0b1011010100",
    subDetail: "Supports sin, cos, tan, asin, acos, atan, sqrt, cbrt, log, ln, abs, x^y, factorials (n!), pi, and e.",
    activeSectorIndex: 2,
    activeSectorLabel: "Calculator • f(x)",
  },
  {
    id: "fx-usd-eur",
    query: "250 usd to eur",
    category: "LIVE ECB FX",
    headlineResult: "€231.45 EUR",
    secondaryReadout: "£197.80 GBP • ₹21,095.00 INR • ¥38,412 JPY • C$348.25 CAD",
    subDetail: "Simultaneous multi-currency conversion powered by live European Central Bank (ECB) foreign exchange rates.",
    activeSectorIndex: 3,
    activeSectorLabel: "Unit & FX Converter",
  },
  {
    id: "unit-km-mi",
    query: "100 km to mi",
    category: "UNIT CONVERSION",
    headlineResult: "62.1371 mi",
    secondaryReadout: "100,000 m • 328,084 ft • 109,361 yd",
    subDetail: "Instant natural-language conversion across Length, Mass, Temperature, Digital Data, Time, and Speed.",
    activeSectorIndex: 3,
    activeSectorLabel: "Unit & FX Converter",
  },
  {
    id: "factorial",
    query: "5! * 3.14159",
    category: "SCIENTIFIC MATH",
    headlineResult: "376.9908",
    secondaryReadout: "120 × 3.14159 • Saved to History Tape",
    subDetail: "Every inline calculation can be copied immediately with ⏎ or opened inside the full Scientific Calculator tape.",
    activeSectorIndex: 2,
    activeSectorLabel: "Calculator • f(x)",
  },
  {
    id: "filter-clipboard",
    query: "clipboard",
    category: "TOOL FILTER",
    headlineResult: "Sector 1 → Clipboard History",
    secondaryReadout: "4 items • #HEX swatches • JSON / Base64 / SHA-256 transforms",
    subDetail: "Typing letters while the radial wheel is open fuzzy-filters all 16 tools and highlights the matching sector.",
    activeSectorIndex: 1,
    activeSectorLabel: "Clipboard History",
  },
];

export interface WheelifyToolSpec {
  number: number;
  name: string;
  shortLabel: string;
  symbol: string;
  ringPage: "Page 1 (Primary Ring)" | "Page 2 (Extended Ring)";
  subArcActions?: string[];
  summary: string;
  highlights: string[];
}

export const WHEELIFY_16_TOOLS: WheelifyToolSpec[] = [
  {
    number: 1,
    name: "Clipboard History",
    shortLabel: "Clipboard",
    symbol: "doc.on.clipboard.fill",
    ringPage: "Page 1 (Primary Ring)",
    summary:
      "Stores text, images, and links with source-app badges; auto-detects #HEX and rgb() strings to render live color swatches; supports pinning, search, ⌘1–⌘9 quick-paste, privacy app ignore-list, and 1-click text transforms.",
    highlights: [
      "Live #HEX & rgb() color swatches",
      "UPPER / lower / Title / Trim",
      "JSON Pretty-Print, Base64, URL & SHA-256",
      "1Password & Keychain ignore list",
    ],
  },
  {
    number: 2,
    name: "Scientific Calculator",
    shortLabel: "Calculator",
    symbol: "function",
    ringPage: "Page 1 (Primary Ring)",
    summary:
      "Supports sin, cos, tan, asin, acos, atan, sqrt, cbrt, log, ln, abs, x^y, factorials (n!), pi, e, RAD/DEG modes, persistent calculation history tape, and live Programmer Base Readout (HEX, OCT, BIN).",
    highlights: [
      "RAD / DEG scientific trig & factorials",
      "Live HEX • OCT • BIN programmer readout",
      "Persistent calculation history tape",
      "Inline wheel evaluation while holding ⌥ Space",
    ],
  },
  {
    number: 3,
    name: "Clock, Timer & Pomodoro",
    shortLabel: "Clock",
    symbol: "timer",
    ringPage: "Page 1 (Primary Ring)",
    subArcActions: ["1m", "5m", "10m", "15m", "30m", "25m Pomodoro"],
    summary:
      "Outer concentric sub-arc presets for 1m, 5m, 10m, 15m, 30m, and 25m Pomodoro; custom time-of-day alarms with floating sound banners; and a precision lap-split stopwatch.",
    highlights: [
      "Outer sub-arc 1-flick timer presets",
      "25m Pomodoro focus cycle counter",
      "Time-of-day alarms with sound banners",
      "Precision lap-split stopwatch",
    ],
  },
  {
    number: 4,
    name: "Scratchpad Notes",
    shortLabel: "Notes",
    symbol: "note.text",
    ringPage: "Page 1 (Primary Ring)",
    summary:
      "Multi-note scratchpad with instant full-text search, note pinning, live character and word count, one-click copy, and automatic local saving.",
    highlights: [
      "Multi-note instant markdown scratchpad",
      "Pin important notes to the top",
      "Live character & word count readout",
      "Direct hotkey summon (⌃⌥N)",
    ],
  },
  {
    number: 5,
    name: "Screenshot Studio",
    shortLabel: "Screenshot",
    symbol: "camera.viewfinder",
    ringPage: "Page 1 (Primary Ring)",
    subArcActions: [
      "Interactive Region",
      "Capture Window",
      "Full Screen",
      "Copy to Clipboard",
      "3s Delayed Capture",
    ],
    summary:
      "Outer sub-arc for Interactive Region, Capture Window, Full Screen, Copy to Clipboard, and 3s Delayed Capture, automatically saved to your configured capture folder.",
    highlights: [
      "5 outer sub-arc capture modes",
      "Direct-to-clipboard capture option",
      "3-second timer delay for menus",
      "Zero background helper bloat",
    ],
  },
  {
    number: 6,
    name: "Quick To-Do List",
    shortLabel: "To-Do",
    symbol: "checklist",
    ringPage: "Page 1 (Primary Ring)",
    summary:
      "Lightweight task manager with priority tags (Low, Normal, High), completion checkboxes, strike-through state, and 1-click Clear Done.",
    highlights: [
      "Low, Normal & High priority badges",
      "Instant keyboard task entry",
      "1-click Clear Done cleanup",
      "Saved locally on your Mac",
    ],
  },
  {
    number: 7,
    name: "Saved Links & Bookmarks",
    shortLabel: "Links",
    symbol: "link",
    ringPage: "Page 1 (Primary Ring)",
    summary:
      "Quick URL stash with automatic domain extraction, 1-click Paste URL from clipboard, and instant launch in your default macOS browser.",
    highlights: [
      "1-click Paste URL from clipboard",
      "Automatic hostname & domain badges",
      "Instant default browser launch",
      "Searchable reading & dev link stash",
    ],
  },
  {
    number: 8,
    name: "Radial Volume & Media Arc",
    shortLabel: "Volume",
    symbol: "speaker.wave.3.fill",
    ringPage: "Page 1 (Primary Ring)",
    subArcActions: ["Arc Slider (0–100%)", "Mute Toggle", "+10%", "-10%"],
    summary:
      "Continuous circular arc slider around the wheel for system audio volume plus Mute, +10%, and -10% sub-arc triggers.",
    highlights: [
      "Continuous circular volume arc slider",
      "Direct macOS hardware volume control",
      "Sub-arc Mute, +10% & -10% flicks",
      "Center hub Now Playing Play/Pause",
    ],
  },
  {
    number: 9,
    name: "Ask AI Assistant",
    shortLabel: "Ask AI",
    symbol: "sparkles",
    ringPage: "Page 2 (Extended Ring)",
    summary:
      "Multi-turn streaming chat + 1-click clipboard actions (Summarize, Fix Grammar, Translate, Explain Code) powered by Claude Opus 5.5 / Fable 5.2, GPT-6 Astra / 6.1 Sol, Gemini 4 Argon, or 100% offline local Ollama.",
    highlights: [
      "Claude Opus 5.5, GPT-6 Astra & Gemini 4 Argon",
      "Offline Ollama (qwen3.5, gemma4, deepseek-r1:8b)",
      "1-click Summarize, Fix Grammar, Explain Code",
      "API keys encrypted in macOS Keychain",
    ],
  },
  {
    number: 10,
    name: "Unit & Currency Converter",
    shortLabel: "Converter",
    symbol: "arrow.left.arrow.right.circle.fill",
    ringPage: "Page 2 (Extended Ring)",
    summary:
      "Simultaneous multi-unit conversion across Currency (live European Central Bank FX rates for USD, EUR, GBP, INR, JPY, CAD, AUD, CHF, CNY), Length, Mass, Temperature, Digital Data, and Speed.",
    highlights: [
      "Live European Central Bank (ECB) FX rates",
      "9 major currencies shown simultaneously",
      "Length, Mass, Temp, Data & Speed tabs",
      "1-click copy on every converted row",
    ],
  },
  {
    number: 11,
    name: "Window Manager",
    shortLabel: "Windows",
    symbol: "macwindow.on.rectangle",
    ringPage: "Page 2 (Extended Ring)",
    subArcActions: [
      "Left Half",
      "Right Half",
      "Top Half",
      "Bottom Half",
      "Maximize",
      "Center (80%)",
    ],
    summary:
      "Snaps the frontmost window via the outer concentric sub-arc in one continuous flick: Left Half, Right Half, Top Half, Bottom Half, Maximize, or Center (80%).",
    highlights: [
      "Single continuous gesture window snapping",
      "Left/Right/Top/Bottom halves & Maximize",
      "Center (80%) focus window mode",
      "Instant zero-lag window positioning",
    ],
  },
  {
    number: 12,
    name: "Magnifier Color Picker",
    shortLabel: "Color Picker",
    symbol: "eyedropper.halffull",
    ringPage: "Page 2 (Extended Ring)",
    subArcActions: [
      "HEX (#RRGGBB)",
      "RGB (r, g, b)",
      "HSL",
      "SwiftUI Color(...)",
    ],
    summary:
      "Pixel-accurate screen magnifier loupe with outer sub-arc format options: HEX (#RRGGBB), RGB (r, g, b), HSL, or ready-to-paste SwiftUI Color(...).",
    highlights: [
      "Pixel-accurate screen magnifier loupe",
      "Outer sub-arc format selection before sampling",
      "HEX, RGB, HSL & SwiftUI Color(...) output",
      "Auto-copies sampled color to clipboard",
    ],
  },
  {
    number: 13,
    name: "Apple Reminders Sync",
    shortLabel: "Reminders",
    symbol: "bell.badge.fill",
    ringPage: "Page 2 (Extended Ring)",
    summary:
      "Two-way integration to view, check off, and create items directly inside your macOS Reminders lists without opening the Reminders app.",
    highlights: [
      "Two-way Apple Reminders synchronization",
      "Check off or add reminders in 1 second",
      "Syncs seamlessly with iCloud Reminders",
      "Requested only when tool is opened",
    ],
  },
  {
    number: 14,
    name: "Voice Memo Recorder",
    shortLabel: "Voice Memo",
    symbol: "waveform.circle.fill",
    ringPage: "Page 2 (Extended Ring)",
    summary:
      "Records high-clarity .m4a voice memos with a real-time dB waveform meter, inline playback, and 1-click Finder export.",
    highlights: [
      "High-clarity .m4a audio recording",
      "Real-time decibel waveform visualizer",
      "Inline audio playback & scrub",
      "1-click reveal in macOS Finder",
    ],
  },
  {
    number: 15,
    name: "Screen Recorder",
    shortLabel: "Screen Record",
    symbol: "record.circle",
    ringPage: "Page 2 (Extended Ring)",
    summary:
      "Launches native macOS interactive video recording with optional microphone narration and automatically reveals the saved recording in Finder.",
    highlights: [
      "Native macOS hardware-encoded capture",
      "Interactive region or full-display video",
      "Automatically reveals saved .mov in Finder",
      "Zero background recording daemon",
    ],
  },
  {
    number: 16,
    name: "Pinned App Launcher",
    shortLabel: "Apps",
    symbol: "square.grid.2x2.fill",
    ringPage: "Page 2 (Extended Ring)",
    subArcActions: ["Pinned macOS .app Bundles"],
    summary:
      "Pin any macOS apps to launch or bring them to the front immediately from a radial outer sub-arc without touching Cmd+Tab or the Dock.",
    highlights: [
      "Radial sub-arc fan-out of favorite apps",
      "Brings running apps to front in <50 ms",
      "Replaces Dock clutter completely",
      "Customizable app list in Settings",
    ],
  },
];

export interface WheelifyFileDialSector {
  number: string;
  name: string;
  symbol: string;
  subtitle: string;
  description: string;
}

export const WHEELIFY_FILE_DIAL_SECTORS: WheelifyFileDialSector[] = [
  {
    number: "01",
    name: "Quick Dial",
    symbol: "bolt.circle",
    subtitle: "Auto-Curated Smart Actions",
    description:
      "Automatically surfaces the top 6 actions for the active file family—such as Upload-Safe JPG (No GPS), Strip GPS Location when coordinates are detected, Compress Under 1 MB, Remove Background (Vision), or Compress PDF.",
  },
  {
    number: "02",
    name: "Convert",
    symbol: "arrow.triangle.2.circlepath",
    subtitle: "Universal Format Conversion",
    description:
      "Convert images between JPG, PNG, HEIC, TIFF, and PDF; export PDF pages to 2× Retina JPGs; transcode MOV/M4V video to H.264 MP4; or extract AAC .m4a audio tracks.",
  },
  {
    number: "03",
    name: "Compress",
    symbol: "arrow.down.right.and.arrow.up.left",
    subtitle: "Exact Byte-Budget Encoding",
    description:
      "Fit images strictly Under 2 MB, Under 1 MB, Under 500 KB, or Under 200 KB for strict web portals, or run Auto Balanced (78%), 50% Quality, PDF stream compression, and 720p email-safe video encoding.",
  },
  {
    number: "04",
    name: "Resize & Edit",
    symbol: "crop.rotate",
    subtitle: "Scale, Crop & Apple Vision Cutout",
    description:
      "Scale to 50%, fit Max 2048 px or Max 1080 px edges, crop Square 1:1, isolate subjects with on-device Apple Vision Remove Background (.png cutout), Auto Enhance tone, convert to Black & White, or rotate/flip.",
  },
  {
    number: "05",
    name: "PDF & OCR",
    symbol: "text.viewfinder",
    subtitle: "Vision Text Recognition & PDF Toolkit",
    description:
      "Extract text from images or scanned PDFs via Apple Vision OCR (copies to clipboard + saves sidecar .txt), Merge PDFs, Split PDF pages, Reverse page order, Stamp Page Numbers, or apply a CONFIDENTIAL watermark.",
  },
  {
    number: "06",
    name: "Privacy & Dev",
    symbol: "shield.lefthalf.filled",
    subtitle: "EXIF/GPS Scrubber & Checksums",
    description:
      "Remove GPS coordinates, strip all EXIF/TIFF camera metadata, clear macOS Gatekeeper quarantine flags (xattr -cr), copy SHA-256 or MD5 checksums, copy Base64 Data URIs, pretty-format JSON, or copy ASCII folder trees.",
  },
  {
    number: "07",
    name: "Batch & ZIP",
    symbol: "archivebox",
    subtitle: "Clean Archives, Renaming & Folder Sort",
    description:
      "Create clean .zip (without .DS_Store / __MACOSX) or .tar.gz archives, unpack archives into a subfolder, batch-rename files (Slugify kebab-case, YYYY-MM-DD date prefix, lowercase), sort messy folders by file type, or scan for SHA-256 duplicates.",
  },
  {
    number: "08",
    name: "Shelf & Share",
    symbol: "square.and.arrow.up",
    subtitle: "Floating File Shelf & Instant Share",
    description:
      "Park files on the Floating File Shelf for multi-folder batch processing, Reveal in Finder, copy POSIX paths, open the parent directory in Terminal, or share via AirDrop and Mail.",
  },
];

export interface WheelifyPillarTab {
  id: string;
  badge: string;
  label: string;
  shortcut: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  highlights: string[];
}

export const WHEELIFY_PILLAR_TABS: WheelifyPillarTab[] = [
  {
    id: "radial-workspace",
    badge: "01 • RADIAL WHEEL & INLINE MATH",
    label: "Radial Ring & Clipboard",
    shortcut: "⌥ Space",
    title: "Flick 35 pt under your cursor. Or type math live inside the wheel.",
    subtitle:
      "Summon at exact cursor coordinates with instant radial selection, 120 FPS ProMotion rendering, and Apple Force Touch haptics.",
    description:
      "Hold ⌥ Space or middle-click anywhere on your Mac and Wheelify spawns centered under your pointer. Flick toward any sector and release to execute in under 100 ms—or start typing 2^10 * 3.14 or 100 km to mi to evaluate math and unit conversions live inside the Inline Command Bar without even opening a panel.",
    image: "/images/wheelify/01-wheelify-hero-radial-workspace.png",
    imageAlt:
      "Wheelify Hero Radial Workspace showing Helium-White 8-sector radial wheel, inline math command bar (2^10 * 3.14 = 3,215.36), and Clipboard History panel",
    highlights: [
      "Three concentric zones: Center Hub, 8-Sector Primary Ring, and Outer Sub-Arcs",
      "Inline Command Bar evaluates scientific math & unit conversions live; press ⏎ to copy",
      "Clipboard History with source-app badges, live #HEX swatches, and JSON/Base64/SHA-256 transforms",
      "Center Hub shows active tool, live math result, or macOS Now Playing media controls",
    ],
  },
  {
    id: "advance-file-dial",
    badge: "02 • ADVANCE FILE & MEDIA DIAL (⌃ SPACE)",
    label: "Advance File Dial",
    shortcut: "⌃ Space",
    title: "Select any file in Finder. Press ⌃ Space. Convert, compress, OCR, or strip GPS in one flick.",
    subtitle:
      "Context-aware 8-sector file wheel with non-destructive job receipts, a Floating File Shelf, chained recipes, and 1-Click Undo.",
    description:
      "When you press Control + Space, Wheelify inspects your active Finder selection (or parked files on the Floating Shelf), detects file dimensions, PDF page count, and embedded GPS/EXIF metadata, and tailors 8 radial sectors and outer sub-arcs to that exact file type.",
    image: "/images/wheelify/06-wheelify-advance-file-dial-control-space.png",
    imageAlt:
      "Wheelify Advance File & Media Dial (⌃ Space) showing 8-sector radial file wheel and Advance File Dial Workspace panel with Job Receipt and 1-Click Undo",
    highlights: [
      "Smart Quick Dial surfaces the best actions automatically (e.g., Upload-Safe JPG No GPS when GPS tags are detected)",
      "Every action is non-destructive and generates a Job Receipt (4.2 MB → 680 KB • -84%) with Reveal and 1-Click Undo",
      "Floating File Shelf lets you park files from multiple folders and run batch actions on the entire stack",
      "Can be enabled, disabled, or rebound anytime in Settings → General & Triggers → Enable Advance Wheel",
    ],
  },
  {
    id: "frontier-ai",
    badge: "03 • FRONTIER AI & LIVE ECB CONVERTER",
    label: "Frontier AI & Live FX",
    shortcut: "Ask AI • FX",
    title: "Claude Opus 5.5, GPT-6 Astra, Gemini 4 Argon & local Ollama—plus live ECB FX.",
    subtitle:
      "Switch between cloud frontier models and 100% offline local Ollama models, alongside simultaneous 9-currency conversion.",
    description:
      "Query Anthropic (Claude Opus 5.5, Sonnet 5.5, Fable 5.2, Haiku 5.5), OpenAI (GPT-6 Astra, GPT-6.1 Sol, GPT-6.1 Terra, GPT-6 Luna), Google (Gemini 4 Argon, 3.8 Flash), or offline local Ollama (qwen3.5, gemma4, gpt-oss:20b, deepseek-r1:8b). API keys stay encrypted in macOS Keychain. Next door, the Unit & Currency Converter converts USD, EUR, GBP, INR, JPY, CAD, and CHF simultaneously using live European Central Bank rates.",
    image: "/images/wheelify/02-wheelify-ask-ai-frontier-models.png",
    imageAlt:
      "Wheelify Ask AI Assistant (Claude Opus 5.5, GPT-6 Astra, Gemini 4 Argon, Ollama Local) side-by-side with Unit & Currency Converter (Live ECB FX)",
    highlights: [
      "1-click clipboard AI actions: Summarize, Fix Grammar, Translate, Explain Code",
      "Zero-account offline mode via local Ollama (http://localhost:11434) with 1-click model chips",
      "Live European Central Bank (ECB) FX rates across USD, EUR, GBP, INR, JPY, CAD, AUD, CHF, CNY",
      "Simultaneous conversion across Currency, Length, Mass, Temperature, Digital Data & Speed",
    ],
  },
  {
    id: "calc-todo-links",
    badge: "04 • SCIENTIFIC MATH, TASKS & LINKS",
    label: "Calculator, To-Do & Links",
    shortcut: "f(x) • Tasks",
    title: "Replace a dozen separate menu bar apps in clean Apple System UI.",
    subtitle:
      "Scientific Calculator with live HEX/BIN programmer readout, priority To-Do list, and Saved Links bookmark stash.",
    description:
      "Every built-in panel shares the same calm Helium-White design language. Evaluate trig, logarithms, powers, and factorials with simultaneous HEX and BIN programmer readouts and a persistent history tape; check off High/Normal priority tasks; or stash development & research URLs with automatic domain extraction.",
    image: "/images/wheelify/03-wheelify-calculator-todo-links.png",
    imageAlt:
      "Wheelify Scientific Calculator (RAD • HEX • BIN), Quick To-Do List, and Saved Links & Bookmarks in clean Apple System UI",
    highlights: [
      "Scientific calculator with RAD/DEG toggle and persistent history tape",
      "Real-time Programmer Base Readout: HEX (0x2D4), OCT, and BIN (0b1011010100)",
      "Quick To-Do List with High / Normal / Low priority tags and 1-click Clear Done",
      "Saved Links & Bookmarks with 1-click Paste URL and automatic domain extraction",
    ],
  },
  {
    id: "settings-themes",
    badge: "05 • THEMES, TRIGGERS & KEYCHAIN PRIVACY",
    label: "Settings & 7 Themes",
    shortcut: "⌘,",
    title: "7 handcrafted themes, custom mouse/hotkey triggers & modular permissions.",
    subtitle:
      "Configure Helium White, Apple Frosted, Warm Paper, or Carbon Dark—and customize every sector, page size, and AI engine.",
    description:
      "Open Wheelify Settings (⌘,) to switch between 7 themes, choose your summon shortcut (⌥ Space), enable or customize the Advance File Wheel (⌃ Space), configure one-handed mouse triggers (Middle Click Hold, Back/Forward buttons), reorder or toggle any of the 16 radial tools across 6, 8, or 10 sectors per ring, and verify modular macOS permissions.",
    image: "/images/wheelify/04-wheelify-editorial-features-and-settings.png",
    imageAlt:
      "Wheelify editorial 01/02/03 workflow, what you get checklist, and Wheelify Settings window showing Enable Advance Wheel & ⌃ Space",
    highlights: [
      "7 built-in themes: Helium White, Apple Frosted Light, Warm Paper, System Aqua, Soft Pastel, Carbon Dark, Slate Dark",
      "Dual invocation: Hold & Release flick mode (<100 ms) or Quick-Tap sticky mode (<230 ms)",
      "Toggleable Advance File Wheel (⌃ Space) + customizable ring capacity (6, 8, or 10 sectors per page)",
      "Encrypted macOS Keychain API storage + modular opt-in permissions (Accessibility, Screen, Mic, Reminders)",
    ],
  },
];

export const WHEELIFY_WHAT_YOU_GET_LIST: {
  code: string;
  text: string;
}[] = [
  {
    code: "⌥ Space",
    text: "primary wheel: 16 everyday utilities (clipboard, window snap, calc, notes & more)",
  },
  {
    code: "⌃ Space",
    text: "advance file dial: 50+ photo, PDF, video, Vision OCR, EXIF & ZIP actions",
  },
  {
    code: "UNDO",
    text: "non-destructive job receipts, floating file shelf, recipes & 1-click undo",
  },
  {
    code: "f(x)",
    text: "inline command bar for instant math (2^10) & live ECB FX/units",
  },
  {
    code: "AI",
    text: "claude opus 5.5, fable 5.2, gpt-6 astra, gemini 4 argon & offline ollama",
  },
  {
    code: "⌘V",
    text: "clipboard history with hex color swatches & base64/json/sha-256 tools",
  },
  {
    code: "MIT",
    text: "100% open-source native Swift & AppKit (MIT) • zero telemetry",
  },
];

export interface WheelifyComparisonRow {
  capability: string;
  wheelify: string;
  separateApps: string;
  keyboardLaunchers: string;
  basicPieMenus: string;
}

export const WHEELIFY_COMPARISON_ROWS: WheelifyComparisonRow[] = [
  {
    capability: "Summon Directly at Cursor (Zero Eye Travel)",
    wheelify: "Yes — spawns at exact pointer (⌥ Space or Middle Click)",
    separateApps: "No — scattered across top menu bar",
    keyboardLaunchers: "No — fixed center screen box",
    basicPieMenus: "Yes",
  },
  {
    capability: "One-Handed Mouse Flick Execution (<100 ms)",
    wheelify: "Yes — O(1) polar sector + outer concentric sub-arcs",
    separateApps: "No — requires menu bar hunting & clicking",
    keyboardLaunchers: "No — requires two-handed typing",
    basicPieMenus: "Single ring only (no sub-arcs or sliders)",
  },
  {
    capability: "Inline Math & Live Unit/FX Command Bar",
    wheelify: "Yes — type 2^10 * 3.14 or 250 usd to eur inside the wheel",
    separateApps: "Requires separate Numi / Soulver app",
    keyboardLaunchers: "Yes",
    basicPieMenus: "No",
  },
  {
    capability: "Dual Radial Wheels (16 Workspace Tools + 50+ File Dial Actions)",
    wheelify: "All 16 workspace tools (⌥ Space) + 50+ file dial actions (⌃ Space)",
    separateApps: "Requires installing 10–12 separate apps",
    keyboardLaunchers: "Requires third-party store plugins",
    basicPieMenus: "No — only triggers external shortcuts",
  },
  {
    capability: "Context-Aware Finder File & Media Dial (Convert, Compress, PDF, OCR, EXIF, Undo)",
    wheelify: "Built-in on ⌃ Space with Floating Shelf, Recipes & 1-Click Undo",
    separateApps: "Requires separate $29–$49 file converter & compression apps",
    keyboardLaunchers: "Basic scripts without byte-budget compression or receipt undo",
    basicPieMenus: "No",
  },
  {
    capability: "Frontier Cloud AI + Offline Ollama Local AI",
    wheelify: "Built-in (Claude Opus 5.5, GPT-6 Astra, Gemini 4 Argon + Ollama)",
    separateApps: "Separate $20/mo AI wrapper app",
    keyboardLaunchers: "Paid Pro subscription ($8–$16/mo)",
    basicPieMenus: "No",
  },
  {
    capability: "Clipboard History with #HEX Swatches & Transforms",
    wheelify: "Built-in (UPPER/lower, JSON, Base64, URL, SHA-256)",
    separateApps: "Separate Paste ($29.99/yr) or Maccy app",
    keyboardLaunchers: "Basic history without inline transforms",
    basicPieMenus: "No",
  },
  {
    capability: "Memory Footprint & Background CPU",
    wheelify: "1.9 MB DMG • ~20 MB RAM • 0% idle CPU",
    separateApps: "400–900 MB combined across 10 apps",
    keyboardLaunchers: "180–450 MB RAM (Node/React extension host)",
    basicPieMenus: "~30 MB RAM",
  },
  {
    capability: "License & Price",
    wheelify: "$0 Forever • Open Source (MIT License)",
    separateApps: "$120–$240+/year combined",
    keyboardLaunchers: "Freemium / $96–$192/yr for AI & Sync",
    basicPieMenus: "$10–$29 paid binary",
  },
];

export const WHEELIFY_SHORTCUTS: { keys: string; action: string }[] = [
  {
    keys: "Hold ⌥ Space",
    action: "Summon the radial wheel under cursor; release on a sector to execute",
  },
  {
    keys: "Tap ⌥ Space",
    action: "Toggle the radial wheel open in sticky click-to-select mode (<230 ms)",
  },
  {
    keys: "Hold / Tap ⌃ Space",
    action: "Summon the Advance File & Media Dial for selected Finder files (toggleable in Settings)",
  },
  {
    keys: "Hold Middle Mouse",
    action: "Summon the radial wheel with one hand directly under cursor",
  },
  {
    keys: "⌃ ⌥ V",
    action: "Open Clipboard History panel directly (customizable in Settings)",
  },
  {
    keys: "⌃ ⌥ N",
    action: "Open Scratchpad Notes panel directly (customizable in Settings)",
  },
  {
    keys: "Type while open",
    action: "Activate Inline Command Bar (search tools, calculate math, convert units)",
  },
  {
    keys: "⏎ Return",
    action: "Copy inline math/conversion result or execute top matching tool",
  },
  {
    keys: "1 – 9",
    action: "Trigger sector 1–9 on the active ring page immediately",
  },
  {
    keys: "Tab / ← / → / Scroll",
    action: "Flip between radial wheel pages (Page 1 ↔ Page 2 of 16 tools)",
  },
  {
    keys: "⌘ ,",
    action: "Open Wheelify Settings (Appearance, Wheel & Tools, Clipboard, Ask AI, Permissions)",
  },
  {
    keys: "Esc",
    action: "Dismiss the radial wheel or active floating utility panel",
  },
];

export const WHEELIFY_FAQS: { q: string; a: string }[] = [
  {
    q: "How do I summon and use Wheelify?",
    a: "Hold ⌥ Space (Option + Space) or hold the middle mouse button anywhere on your screen. The radial wheel appears centered under your cursor. Move your mouse slightly toward a tool to highlight it (or push further out into the outer concentric sub-arc to select a sub-action like 25m Pomodoro or Left Half window snap), then release the key or mouse button to execute in under 100 ms. You can also quick-tap ⌥ Space for sticky mode, press number keys 1–8, or click a slice directly.",
  },
  {
    q: "What is the difference between the ⌥ Space wheel and the ⌃ Space Advance Wheel?",
    a: "⌥ Space (or middle mouse click) opens your Primary Workspace Wheel containing 16 everyday macOS utilities (Clipboard History, Scientific Calculator, Timers/Pomodoro, Scratchpad Notes, Screenshot/Screen Record, Window Snapping, Color Picker, Unit/Currency Converter, and Frontier AI) plus the live Inline Math Command Bar. Pressing ⌃ Space (Control + Space) opens the Advance File & Media Dial, which automatically inspects the files selected in Finder and gives you 50+ non-destructive file actions across 8 radial sectors (Quick Dial, Convert, Compress, Resize & Edit, PDF & OCR, Privacy & Dev, Batch & ZIP, and Shelf & Share), complete with a Floating File Shelf, Chained Recipes, and 1-Click Undo. You can enable, disable, or change the shortcut for the Advance Wheel anytime in Wheelify Settings → General & Triggers → Enable Advance Wheel.",
  },
  {
    q: "Does Wheelify clutter my Dock or slow down my Mac?",
    a: "No. Wheelify runs as an LSUIElement menu-bar agent with zero Dock icon. Because it is written in 100% native Swift, AppKit, and SwiftUI (zero Electron, zero Chromium, zero background web servers), the universal installer is only 1.9 MB and uses roughly 18–25 MB of RAM and 0% CPU when idle while animating at 120 FPS on ProMotion displays.",
  },
  {
    q: "Is my clipboard history and AI data private?",
    a: "100% private. Wheelify has zero analytics, zero telemetry, and zero cloud accounts. All notes, clipboard items, saved links, and tasks are stored locally on your Mac in ~/Library/Application Support/Wheelify/. You can pause clipboard monitoring at any time or add sensitive apps (like 1Password, Keychain Access, or banking apps) to the Ignored Apps list. All AI API keys (Anthropic, OpenAI, Gemini) are stored encrypted in the macOS Keychain, never in plain-text files.",
  },
  {
    q: "Can I use the AI Assistant completely offline for free?",
    a: "Yes. In Settings → Ask AI, select Ollama (Local). Wheelify connects directly to your local Ollama server (http://localhost:11434) with one-click presets for qwen3.5, gemma4, gpt-oss:20b, qwen3-coder:30b, deepseek-r1:8b, and kimi-k3.1-pro—no API key or internet connection required.",
  },
  {
    q: "Why does Wheelify ask for Accessibility or Screen Recording permissions?",
    a: "macOS permissions are modular and strictly opt-in inside Settings → Permissions: Accessibility enables the global mouse trigger (Middle Click Hold) and the Window Manager tool to resize/snap windows (keyboard shortcuts like ⌥ Space work even without Accessibility). Screen Recording is only needed when you use the Screenshot or Screen Recorder tools. Microphone and Reminders permissions are only requested when you open Voice Memos or Apple Reminders.",
  },
  {
    q: "Can I customize which tools appear on the wheel and change the theme?",
    a: "Yes. Open Settings → Wheel & Tools (⌘,) to toggle any of the 16 tools on or off, reorder them, change the ring capacity (6, 8, or 10 sectors per page), adjust the wheel size (Compact, Regular, Large), or switch between 7 built-in themes (Helium White, Apple Frosted Light, Warm Paper, System Aqua, Soft Pastel Tint, Carbon Dark, and Slate Dark).",
  },
  {
    q: "Is Wheelify open source?",
    a: "Yes! Wheelify is 100% free and open source under the MIT License at github.com/Shubham-sharma8/wheelify.",
  },
];
