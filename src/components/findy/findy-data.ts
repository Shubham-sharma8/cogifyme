export interface FindyWorkflowTab {
  id: string;
  label: string;
  shortcut: string;
  badgeText: string;
  headline: string;
  subline: string;
  visualImage: string;
  visualAlt: string;
  metrics: { label: string; value: string; accent?: boolean }[];
  highlights: { title: string; detail: string; badge: string }[];
}

export const FINDY_WORKFLOW_TABS: FindyWorkflowTab[] = [
  {
    id: "natural-search",
    label: "plain-english search",
    shortcut: "⌘K · ⌘F",
    badgeText: "live token parser · file type · date window · byte size",
    headline: "Type How You Think. Understood as Filter Chips in Real Time.",
    subline:
      "Don't remember what a file was named? Type \"pdfs this week over 1mb\", \"screenshots from today\", \"videos over 100mb\", or \"images from this year\". Findy parses file types, date windows, byte thresholds, and folder scopes into removable filter chips you can toggle in 1 click.",
    visualImage: "/brand/Findy/02-findy-natural-search.webp",
    visualAlt:
      "Findy Plain-English Search parsing 'images from this year' into live 'Understood as: Images, This year' filter chips across 250 results",
    metrics: [
      { label: "Query Latency", value: "< 15 ms", accent: true },
      { label: "Parsed Tokens", value: "Kind · Date · Size", accent: false },
      { label: "Cloud Calls", value: "0 (On-Device)", accent: true },
    ],
    highlights: [
      {
        title: "\"pdfs this week over 1mb\"",
        detail: "Understood as: Kind = PDF · Date = This Week · Size > 1 MB",
        badge: "3 Chips",
      },
      {
        title: "\"screenshots from today\"",
        detail: "Understood as: Category = Screenshots · Date = Today",
        badge: "2 Chips",
      },
      {
        title: "\"videos over 100mb in downloads\"",
        detail: "Understood as: Kind = Video · Size > 100 MB · Scope = ~/Downloads",
        badge: "3 Chips",
      },
    ],
  },
  {
    id: "space-lens",
    label: "space lens",
    shortcut: "⌘4 · ⇧⌘L",
    badgeText: "interactive squarified treemap · home folder breakdown",
    headline: "See Where Your Gigabytes Went Across Every Home Folder.",
    subline:
      "Instant interactive proportional treemap and ranked folder size bars across your Mac — plus a Storage by Home Folder breakdown and Top 25 Largest Files list with 1-click breadcrumb drill-down.",
    visualImage: "/brand/Findy/03-findy-space-lens.webp",
    visualAlt:
      "Findy Space Lens storage treemap analyzing 17.52 GB across Applications, Downloads, Desktop, and iCloud Drive with Top 25 Largest Files",
    metrics: [
      { label: "Home Folders", value: "8 Indexed", accent: false },
      { label: "Largest Files", value: "Top 25 Live", accent: true },
      { label: "Drill-Down", value: "1-Click", accent: true },
    ],
    highlights: [
      {
        title: "Proportional Category Treemap",
        detail: "Applications (90%), Archives (4%), Images, Documents, Music, Code & Videos.",
        badge: "Visual Map",
      },
      {
        title: "Storage by Home Folder",
        detail: "Compare ~/Applications, ~/Downloads, ~/Desktop, ~/Documents & iCloud Drive side by side.",
        badge: "Home Folders",
      },
      {
        title: "Largest Files Across Your Mac",
        detail: "Surfaces multi-gigabyte apps, Xcode bundles, DMGs, and forgotten video exports immediately.",
        badge: "Top 25",
      },
    ],
  },
  {
    id: "smart-cleanup",
    label: "clean up",
    shortcut: "⌘5",
    badgeText: "non-destructive audit · moves only to macos trash",
    headline: "Reclaim Gigabytes of Clutter. Nothing Deleted Without Asking.",
    subline:
      "Audits Duplicates, Old Installers (.dmg/.pkg > 7 days), Forgotten Downloads (> 90 days), Old Screenshots (> 30 days), Big Old Videos (> 200 MB), and Unused Apps — moving selected clutter to macOS Trash so everything is 100% reversible.",
    visualImage: "/brand/Findy/04-findy-smart-cleanup.webp",
    visualAlt:
      "Findy Smart Clean Up dashboard auditing Duplicates, Old Installers, Forgotten Downloads, Old Screenshots, Big Old Videos, and Unused Apps",
    metrics: [
      { label: "Audit Rules", value: "6 Categories", accent: false },
      { label: "Deletion Mode", value: "macOS Trash Only", accent: true },
      { label: "Auto-Tidy", value: "Hourly Optional", accent: false },
    ],
    highlights: [
      {
        title: "Old Installers & Forgotten Downloads",
        detail: "Finds stale .dmg/.pkg disk images (> 7 days) and untouched downloads (> 90 days).",
        badge: "Trash-Safe",
      },
      {
        title: "Old Screenshots & Big Videos",
        detail: "Spots desktop screenshots older than 30 days and > 200 MB videos unopened in 6 months.",
        badge: "Reclaim GBs",
      },
      {
        title: "Optional Hourly Automatic Clean Up",
        detail: "Auto-move old installers to Trash after 7 days or file screenshots neatly by month.",
        badge: "Auto-Tidy",
      },
    ],
  },
  {
    id: "duplicates",
    label: "duplicates",
    shortcut: "⌘6",
    badgeText: "cryptographic sha-256 + apple vision feature-print clustering",
    headline: "Byte-for-Byte SHA-256 Exact Duplicates & Look-Alike Photos.",
    subline:
      "Two-stage byte-size pre-filtering + 16 KB window hashing + full streaming SHA-256 finds 100% identical clones, while Apple Vision groups burst and similar photos on-device.",
    visualImage: "/brand/Findy/05-findy-duplicate-finder.webp",
    visualAlt:
      "Findy Duplicate Finder comparing files with SHA-256 and Apple Vision Similar Photos with Keep badge protection",
    metrics: [
      { label: "Exact Match", value: "SHA-256", accent: true },
      { label: "Photo Clustering", value: "Apple Vision", accent: false },
      { label: "Original Safety", value: "Auto-Keep Oldest", accent: true },
    ],
    highlights: [
      {
        title: "3-Stage SHA-256 Verification",
        detail: "Size pre-filter → 16 KB head/mid/tail hash → full SHA-256 digest before flagging any clone.",
        badge: "Zero False Positives",
      },
      {
        title: "Vision Look-Alike Photo Clustering",
        detail: "Finds burst shots and near-identical images using Apple Silicon Neural Engine feature prints.",
        badge: "Similar Photos",
      },
      {
        title: "Automatic 'Keep' Badge Protection",
        detail: "Always marks the earliest original copy as Keep so you never trash all copies of a file.",
        badge: "Protected",
      },
    ],
  },
  {
    id: "downloaded-from",
    label: "downloaded from",
    shortcut: "Sidebar + Menu Bar",
    badgeText: "website origin tracking + 370×460 menu bar recent downloads popover",
    headline: "Every Download Remembers Which Website It Came From.",
    subline:
      "Automatically reads macOS download origin metadata to group ~/Downloads by source website or app (GitHub, Figma, ChatGPT, Gmail, Stripe, Hugging Face).",
    visualImage: "/brand/Findy/06-findy-downloaded-from.webp",
    visualAlt:
      "Findy Downloaded From view grouping files by Gmail, ChatGPT, GitHub, Figma, Stripe, and Hugging Face alongside the 370x460 Menu Bar Recent Downloads Popover",
    metrics: [
      { label: "Recognized Sources", value: "40+ Domains", accent: true },
      { label: "Browser Support", value: "All Browsers", accent: false },
      { label: "Menu Bar Popover", value: "370 × 460 px", accent: true },
    ],
    highlights: [
      {
        title: "Grouped by Clean Origin Domain",
        detail: "Strips noisy cdn./www./dl. subdomains to group files under GitHub, Figma, ChatGPT, Gmail, Slack, and more.",
        badge: "40+ Sources",
      },
      {
        title: "Always-Ready Menu Bar Popover",
        detail: "Click Findy in your Mac menu bar to filter recent downloads, Quick Look (🔍), or drag straight into apps.",
        badge: "Menu Bar",
      },
      {
        title: "Works Across Safari, Chrome, Arc & Brave",
        detail: "Reads standard macOS download metadata written by every modern browser.",
        badge: "All Browsers",
      },
    ],
  },
  {
    id: "file-shelf",
    label: "file shelf & rename",
    shortcut: "⌘7 · ⇧⌘B · ⇧⌘R",
    badgeText: "persistent multi-folder drop basket + regex batch rename (⌥⌘Z undo)",
    headline: "Stage Files From Anywhere. One Drop Basket for Batch Actions.",
    subline:
      "Collect files across completely different folders or search results into File Shelf (⌘7 / ⇧⌘B), then pack them into a conflict-free .zip archive, move or copy them together, or batch-rename with Regex and 1-click undo (⌥⌘Z).",
    visualImage: "/brand/Findy/07-findy-file-shelf.webp",
    visualAlt:
      "Findy File Shelf staging 5 files across Desktop and Downloads with Move All, Copy All, Create .zip Archive, and Batch Rename actions",
    metrics: [
      { label: "Batch Modes", value: "5 Rename Rules", accent: false },
      { label: "Archive Engine", value: "1-Click .zip", accent: true },
      { label: "Rename Safety", value: "1-Click Undo ⌥⌘Z", accent: true },
    ],
    highlights: [
      {
        title: "Multi-Folder Staging Basket (⌘7 / ⇧⌘B)",
        detail: "Stop juggling side-by-side Finder windows—stage files from any search or folder into one shelf.",
        badge: "File Shelf",
      },
      {
        title: "5-Mode Batch Rename Studio (⇧⌘R)",
        detail: "Find & Replace, Prefix/Suffix, Sequential Numbering, Case Transform, and Regex ($1, $2) with live preview.",
        badge: "Regex + Undo",
      },
      {
        title: "1-Click Conflict-Free .zip Archive",
        detail: "Compresses staged items into a clean macOS .zip archive in one click.",
        badge: ".zip Archive",
      },
    ],
  },
  {
    id: "inspector-ocr",
    label: "inspector & vision ocr",
    shortcut: "⌘I · ⇧⌘C",
    badgeText: "on-device text recognition · 100% local apple silicon neural engine",
    headline: "Read Text Inside Screenshots. 100% On-Device Vision OCR.",
    subline:
      "Select any screenshot or image to extract copyable text on-device via Apple Vision, assign native Finder color tags (0–7), verify SHA-256 checksums, and inspect file metadata.",
    visualImage: "/brand/Findy/08-findy-file-inspector.webp",
    visualAlt:
      "Findy Right-Hand File Inspector (⌘I) extracting copyable OCR text from a screenshot on-device alongside Finder color tags and POSIX metadata",
    metrics: [
      { label: "OCR Engine", value: "Apple Vision", accent: true },
      { label: "Finder Tags", value: "7 Native Colors", accent: false },
      { label: "Privacy", value: "100% Local ANE", accent: true },
    ],
    highlights: [
      {
        title: "Search & Copy Text Trapped in Screenshots",
        detail: "Finds receipts, error dialogs, slide titles, and code snippets inside PNG, JPEG, and HEIC images.",
        badge: "Vision OCR",
      },
      {
        title: "Native Finder Color Tags (0–7)",
        detail: "Reads and writes real macOS Finder tags (Red, Orange, Yellow, Green, Blue, Purple, Gray).",
        badge: "Finder Sync",
      },
      {
        title: "File Metadata & SHA-256 Digest",
        detail: "Inspects file types, pixel dimensions, permissions, and on-demand SHA-256 checksums.",
        badge: "⌘I Inspector",
      },
    ],
  },
  {
    id: "home-overview",
    label: "home overview",
    shortcut: "⌘1",
    badgeText: "230k+ files indexed on-device · 4 visual themes",
    headline: "Your Entire Mac Home Directory in One Fast Visual Workspace.",
    subline:
      "Indexes ~/Downloads, ~/Desktop, ~/Documents, ~/Pictures, ~/Movies, ~/Music, /Applications, and iCloud Drive using a hybrid Spotlight + local directory walker — customizable with Standard, Playful, Classic, and Monochrome themes.",
    visualImage: "/brand/Findy/01-findy-home-overview.webp",
    visualAlt:
      "Findy Home Overview showing Playful theme category cards, 8 indexed Mac locations, and Smart Clean Up summary",
    metrics: [
      { label: "Indexed Scope", value: "8 Home Folders", accent: true },
      { label: "Visual Themes", value: "4 Built-In", accent: false },
      { label: "App Binary Size", value: "4.5 MB DMG", accent: true },
    ],
    highlights: [
      {
        title: "Hybrid Spotlight + FileManager Indexer",
        detail: "Combines live NSMetadataQuery updates with a concurrent local directory walker.",
        badge: "Hybrid Engine",
      },
      {
        title: "9 Instant Category Cards",
        detail: "Jump straight into Images, Videos, Music, Documents, Archives, Applications, Code, Folders, or Other.",
        badge: "Live Counts",
      },
      {
        title: "4 Themes & Fluid Zoom (⌘+ / ⌘-)",
        detail: "Switch between Playful, Standard, Classic, and Monochrome themes with instant gallery card scaling.",
        badge: "Customizable",
      },
    ],
  },
];

export interface NaturalQueryDemo {
  id: string;
  query: string;
  chips: { label: string; category: "Kind" | "Date" | "Size" | "Location" | "Tag" | "Source" }[];
  spotlightPredicate: string;
  resultCount: string;
  sampleMatches: { name: string; path: string; size: string; date: string; badge: string }[];
}

export const NATURAL_QUERY_DEMOS: NaturalQueryDemo[] = [
  {
    id: "pdfs-week",
    query: "pdfs this week over 1mb",
    chips: [
      { label: "Kind: PDF Document", category: "Kind" },
      { label: "Date: This Week (Last 7d)", category: "Date" },
      { label: "Size: > 1.0 MB", category: "Size" },
    ],
    spotlightPredicate:
      "kMDItemContentType == 'com.adobe.pdf' && kMDItemFSContentChangeDate >= $time.today(-7) && kMDItemFSSize > 1048576",
    resultCount: "14 matching files (84.6 MB)",
    sampleMatches: [
      {
        name: "Product-Launch-Deck-v4.pdf",
        path: "~/Downloads · from figma.com",
        size: "3.4 MB",
        date: "14m ago",
        badge: "PDF · >1 MB",
      },
      {
        name: "Series-A-Board-Financials-Q4.pdf",
        path: "~/Documents/Finance",
        size: "8.2 MB",
        date: "2 days ago",
        badge: "PDF · >1 MB",
      },
      {
        name: "Apple-Silicon-Metal-Architecture.pdf",
        path: "~/Downloads · from developer.apple.com",
        size: "19.4 MB",
        date: "4 days ago",
        badge: "PDF · >1 MB",
      },
    ],
  },
  {
    id: "screenshots-today",
    query: "screenshots from today",
    chips: [
      { label: "Category: Screenshots", category: "Kind" },
      { label: "Date: Today", category: "Date" },
    ],
    spotlightPredicate:
      "(kMDItemIsScreenCapture == 1 || kMDItemFSName == 'Screenshot*') && kMDItemFSContentChangeDate >= $time.today",
    resultCount: "9 matching screenshots (4.8 MB)",
    sampleMatches: [
      {
        name: "Screenshot 2026-11-10 at 10.49.02 AM.png",
        path: "~/Desktop · OCR: 'Recent Downloads Findy'",
        size: "62 KB",
        date: "Today, 10:49 AM",
        badge: "Vision OCR Ready",
      },
      {
        name: "Screenshot 2026-11-10 at 10.32.19 AM.png",
        path: "~/Desktop · OCR: 'Network & Disk Throughput'",
        size: "127 KB",
        date: "Today, 10:32 AM",
        badge: "Vision OCR Ready",
      },
      {
        name: "Screenshot 2026-11-10 at 08.36.11 AM.png",
        path: "~/Desktop · OCR: 'System Memory Pressure'",
        size: "429 KB",
        date: "Today, 8:36 AM",
        badge: "Vision OCR Ready",
      },
    ],
  },
  {
    id: "videos-100mb",
    query: "videos over 100mb",
    chips: [
      { label: "Kind: Video (MP4 / MOV)", category: "Kind" },
      { label: "Size: > 100 MB", category: "Size" },
    ],
    spotlightPredicate:
      "kMDItemContentTypeTree == 'public.movie' && kMDItemFSSize > 104857600",
    resultCount: "6 matching videos (4.12 GB)",
    sampleMatches: [
      {
        name: "Findy-Keynote-Demo-4K60.mov",
        path: "~/Movies/Screenify Exports",
        size: "1.48 GB",
        date: "Yesterday",
        badge: "ProRes / H.264",
      },
      {
        name: "macOS-Tahoe-Walkthrough.mp4",
        path: "~/Downloads · from slack.com",
        size: "612.4 MB",
        date: "5 days ago",
        badge: "Video · >100 MB",
      },
      {
        name: "Onboarding-Prototype-Recording.mp4",
        path: "~/Desktop",
        size: "248.9 MB",
        date: "Oct 29, 2026",
        badge: "Video · >100 MB",
      },
    ],
  },
  {
    id: "code-downloads",
    query: "code in downloads",
    chips: [
      { label: "Kind: Source Code & JSON", category: "Kind" },
      { label: "Location: ~/Downloads", category: "Location" },
    ],
    spotlightPredicate:
      "kMDItemContentTypeTree == 'public.source-code' && kMDItemPath BEGINSWITH '/Users/you/Downloads'",
    resultCount: "19 matching files (608 KB)",
    sampleMatches: [
      {
        name: "Llama-3-8B-Instruct-Config.json",
        path: "~/Downloads · from huggingface.co",
        size: "84 KB",
        date: "Yesterday",
        badge: "huggingface.co",
      },
      {
        name: "Release-Checklist-2026.md",
        path: "~/Downloads",
        size: "14 KB",
        date: "Today",
        badge: "Markdown",
      },
      {
        name: "tsconfig.json",
        path: "~/Downloads/Cogify/cogifyme-main",
        size: "670 bytes",
        date: "Oct 24, 2026",
        badge: "JSON",
      },
    ],
  },
];

export interface FindyWhatYouGetItem {
  id: string;
  text: string;
  iconType:
    | "search"
    | "ocr"
    | "globe"
    | "treemap"
    | "trash"
    | "duplicate"
    | "shelf"
    | "rename"
    | "inspector"
    | "menubar"
    | "theme"
    | "opensource";
}

export const FINDY_WHAT_YOU_GET_LIST: FindyWhatYouGetItem[] = [
  {
    id: "1",
    text: "plain-english search (⌘K / ⌘F) with live removable 'Understood as:' filter chips",
    iconType: "search",
  },
  {
    id: "2",
    text: "100% on-device Apple Vision OCR to find & copy text inside screenshots",
    iconType: "ocr",
  },
  {
    id: "3",
    text: "'Downloaded From' browser provenance grouping files by 40+ origin websites",
    iconType: "globe",
  },
  {
    id: "4",
    text: "Space Lens (⌘4) interactive squarified treemap, Home Folder breakdown & Top 25 Largest Files",
    iconType: "treemap",
  },
  {
    id: "5",
    text: "Smart Clean Up (⌘5) for old installers, forgotten downloads & unused apps (100% macOS Trash-safe)",
    iconType: "trash",
  },
  {
    id: "6",
    text: "byte-for-byte SHA-256 exact duplicate finder + Apple Vision similar photo clustering (⌘6)",
    iconType: "duplicate",
  },
  {
    id: "7",
    text: "multi-folder File Shelf drop basket (⌘7 / ⇧⌘B) with 1-click conflict-free .zip creation",
    iconType: "shelf",
  },
  {
    id: "8",
    text: "5-mode Batch Rename Studio (⇧⌘R) with Regex capture groups ($1, $2) & 1-click Undo (⌥⌘Z)",
    iconType: "rename",
  },
  {
    id: "9",
    text: "right-hand File Inspector (⌘I) with native Finder color tags (0–7), UTI, POSIX octal & SHA-256",
    iconType: "inspector",
  },
  {
    id: "10",
    text: "always-ready 370×460 Menu Bar Recent Downloads popover with instant filter & Quick Look",
    iconType: "menubar",
  },
  {
    id: "11",
    text: "4 visual themes (Playful, Standard, Classic, Monochrome) + fluid UI zoom (⌘+ / ⌘- / ⌘0)",
    iconType: "theme",
  },
  {
    id: "12",
    text: "100% open-source native Swift & SwiftUI app under the MIT License (zero telemetry, 0 cloud calls)",
    iconType: "opensource",
  },
];

export interface FindyBentoCard {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  badge: string;
}

export const FINDY_PRIMARY_BENTO_CARDS: FindyBentoCard[] = [
  {
    id: "search-by-memory",
    title: "search by memory, not filenames",
    description:
      "type 'presentations from last month', 'screenshots from today', or 'videos over 100mb'. findy turns your words into interactive filter chips you can toggle in 1 click.",
    image: "/brand/Findy/02-findy-natural-search.webp",
    alt: "Findy Plain-English Search converting natural queries into live removable filter chips",
    badge: "⌘K natural search",
  },
  {
    id: "space-lens-treemap",
    title: "space lens storage treemap",
    description:
      "visualize disk usage in seconds with a proportional category treemap, Storage by Home Folder breakdown, and Top 25 Largest Files across your Mac.",
    image: "/brand/Findy/03-findy-space-lens.webp",
    alt: "Findy Space Lens storage treemap and Top 25 Largest Files view",
    badge: "⌘4 space lens",
  },
  {
    id: "trash-safe-cleanup",
    title: "non-destructive smart clean up",
    description:
      "reclaim gigabytes from old .dmg installers, forgotten downloads, old screenshots, and unused apps. every action moves items to macOS Trash — never rm.",
    image: "/brand/Findy/04-findy-smart-cleanup.webp",
    alt: "Findy Smart Clean Up dashboard showing 6 non-destructive macOS Trash cleanup categories",
    badge: "⌘5 trash-safe",
  },
  {
    id: "sha256-duplicates",
    title: "sha-256 duplicates & look-alike photos",
    description:
      "byte-for-byte SHA-256 hashing finds true identical clones while Apple Vision groups similar burst photos — automatically protecting your oldest original with a Keep badge.",
    image: "/brand/Findy/05-findy-duplicate-finder.webp",
    alt: "Findy SHA-256 Duplicate Finder and Apple Vision Similar Photos scanner",
    badge: "⌘6 sha-256 + vision",
  },
  {
    id: "downloaded-from",
    title: "remembers where every download came from",
    description:
      "decodes Spotlight and binary-plist kMDItemWhereFroms extended attributes to group ~/Downloads by GitHub, Figma, ChatGPT, Gmail, Stripe, and 40+ sources.",
    image: "/brand/Findy/06-findy-downloaded-from.webp",
    alt: "Findy Downloaded From view grouping downloads by origin website alongside the 370x460 Menu Bar Popover",
    badge: "40+ origin domains",
  },
  {
    id: "file-shelf-ocr",
    title: "file shelf basket & on-device vision ocr",
    description:
      "stage files from multiple folders into File Shelf (⌘7) for 1-click .zip archiving or Regex batch rename (⌥⌘Z undo), and extract text from screenshots locally (⌘I).",
    image: "/brand/Findy/08-findy-file-inspector.webp",
    alt: "Findy Right-Hand Inspector extracting text from a screenshot using 100% local Apple Vision OCR",
    badge: "⌘7 shelf · ⌘I OCR",
  },
];

export interface FindyComparisonRow {
  feature: string;
  findy: string;
  finder: string;
  spotlight: string;
  cleaners: string;
}

export const FINDY_COMPARISON_ROWS: FindyComparisonRow[] = [
  {
    feature: "plain-english query parsing with removable filter chips",
    findy: "✓ (live chips)",
    finder: "✕",
    spotlight: "partial (no chips)",
    cleaners: "✕",
  },
  {
    feature: "interactive Space Lens treemap + Home folder breakdown",
    findy: "✓ (instant)",
    finder: "✕",
    spotlight: "✕",
    cleaners: "paid subscription",
  },
  {
    feature: "cryptographic SHA-256 duplicates + Vision similar photos",
    findy: "✓ (auto-keep oldest)",
    finder: "✕",
    spotlight: "✕",
    cleaners: "paid subscription",
  },
  {
    feature: "groups downloads by source website (kMDItemWhereFroms)",
    findy: "✓ (40+ domains)",
    finder: "✕",
    spotlight: "✕",
    cleaners: "✕",
  },
  {
    feature: "multi-folder File Shelf drop basket (⌘7) + 1-click .zip",
    findy: "✓",
    finder: "✕",
    spotlight: "✕",
    cleaners: "✕",
  },
  {
    feature: "Regex Batch Rename with live preview & 1-click Undo (⌥⌘Z)",
    findy: "✓ (5 modes + undo)",
    finder: "basic only",
    spotlight: "✕",
    cleaners: "✕",
  },
  {
    feature: "100% on-device Vision OCR text extraction in inspector",
    findy: "✓ (local ANE)",
    finder: "✕",
    spotlight: "✕",
    cleaners: "✕",
  },
  {
    feature: "100% Open Source (MIT) · Zero telemetry · Zero cloud calls",
    findy: "✓ ($0 forever)",
    finder: "closed",
    spotlight: "closed",
    cleaners: "closed + telemetry",
  },
];

export interface FindyShortcutItem {
  shortcut: string;
  action: string;
}

export const FINDY_SHORTCUTS: FindyShortcutItem[] = [
  { shortcut: "⌘K or ⌘F", action: "Focus Plain-English Search bar" },
  { shortcut: "⌥Space", action: "Toggle Global Quick Search floating bar" },
  { shortcut: "⌘1 / ⌘2 / ⌘3", action: "Switch to Home, Recents, or Large Files" },
  { shortcut: "⌘4 or ⇧⌘L", action: "Open Space Lens visual storage treemap" },
  { shortcut: "⌘5", action: "Open Smart Clean Up dashboard" },
  { shortcut: "⌘6", action: "Open Duplicates & Similar Photos scanner" },
  { shortcut: "⌘7", action: "Open File Shelf multi-folder staging basket" },
  { shortcut: "⇧⌘B", action: "Add / remove selected file(s) in File Shelf" },
  { shortcut: "⇧⌘R", action: "Open Smart Batch Rename Studio (Regex + Preview)" },
  { shortcut: "⌥⌘Z", action: "Undo last Batch Rename operation in 1 click" },
  { shortcut: "Space", action: "Native macOS Quick Look preview on selected file" },
  { shortcut: "⌘I / ⇧⌘C", action: "Toggle File Inspector drawer / Copy OCR text" },
  { shortcut: "⌘+ / ⌘- / ⌘0", action: "Zoom UI scale in, out, or reset to 100%" },
  { shortcut: "⌘R", action: "Rescan and refresh on-device file index" },
];

export interface FindyFaqItem {
  question: string;
  answer: string;
}

export const FINDY_FAQS: FindyFaqItem[] = [
  {
    question: "what is findy, and how is it different from macOS Finder and Spotlight?",
    answer:
      "Spotlight is great for launching apps, but its tiny floating list disappears when you click away and can't visually compare folders, deduplicate files, or batch-organize across directories. Finder forces you to click through nested folders one by one. Findy unifies your entire home directory into one fast 4.5 MB native Swift & SwiftUI workspace with plain-English search chips (⌘K), an interactive Space Lens treemap (⌘4), Smart Clean Up (⌘5), SHA-256 + Vision Duplicate Detection (⌘6), Downloaded From website grouping, and a File Shelf drop basket (⌘7).",
  },
  {
    question: "does findy upload my files, filenames, or screenshots to any cloud server?",
    answer:
      "Never. Findy is 100% on-device with zero network entitlements for telemetry or analytics. Every search query, SHA-256 hash, Vision feature-print comparison, and VNRecognizeTextRequest OCR pass runs locally on your Mac's CPU and Apple Silicon Neural Engine.",
  },
  {
    question: "can Clean Up or Duplicate Finder accidentally delete important files permanently?",
    answer:
      "No. Findy never runs destructive rm commands. Every cleanup or duplicate removal action calls macOS's native FileManager.trashItem, which moves selected items to your macOS Trash — so you can always restore any file with 'Put Back' in Finder. Even in Duplicate Finder, Findy automatically marks the oldest original copy as Keep so at least one copy in every duplicate group is always protected.",
  },
  {
    question: "how does 'Downloaded From' know which website a file came from?",
    answer:
      "When Safari, Chrome, Arc, Brave, or Edge downloads a file on macOS, the browser attaches the source URL to the file's com.apple.metadata:kMDItemWhereFroms extended attribute. Findy reads both Spotlight's metadata index and the raw binary plist extended attribute on disk, strips noisy subdomains (www., cdn., dl.), and groups your files by clean origin domains like GitHub, Figma, ChatGPT, Gmail, Hugging Face, Stripe, or Google Drive.",
  },
  {
    question: "how does the OCR text search inside screenshots work?",
    answer:
      "When you inspect an image (⌘I) or search in the Screenshots/Images views, Findy uses Apple's native Vision framework (VNRecognizeTextRequest at .accurate recognition level with language correction enabled) to extract text directly from the image on-device and caches the result locally so subsequent searches are instantaneous.",
  },
  {
    question: "what is File Shelf (⌘7 / ⇧⌘B) and how do I use it?",
    answer:
      "When organizing files from multiple folders, dragging windows side-by-side in Finder is tedious. In Findy, you can press ⇧⌘B on any file (or drag files from Findy or Finder) to drop them into File Shelf (⌘7). Once staged, you can move or copy all of them to a single destination folder, pack them into a .zip archive in one click, or batch-rename them together with Regex and 1-click Undo (⌥⌘Z).",
  },
  {
    question: "what are the system requirements, installer size, and license?",
    answer:
      "Findy v1.2 (Build 2) is a 4.5 MB (4,771,627 bytes) Universal binary installer (Findy.dmg) for Apple Silicon (M1, M2, M3, M4) and Intel Macs running macOS 14.0 Sonoma, macOS 15.0 Sequoia, or macOS 26 Tahoe. It is signed with Developer ID Application: Shubham Sharma (9TKKPN6F59), notarized by Apple (Notarization Ticket=stapled), and 100% open source under the MIT License at github.com/Shubham-sharma8/findy.",
  },
];
