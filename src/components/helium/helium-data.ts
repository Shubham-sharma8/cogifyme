export interface FinderFileItem {
  id: string;
  name: string;
  kind: string;
  sizeShort: string;
  sizeBytes: string;
  onDisk: string;
  where: string;
  created: string;
  modified: string;
  dimensionsOrMeta: string;
  driveOrigin: string;
  color: string;
  badge: string;
}

export const HERO_FINDER_FILES: FinderFileItem[] = [
  {
    id: "wedding-film",
    name: "wedding-film_final.mov",
    kind: "QuickTime movie (Apple ProRes 422 HQ)",
    sizeShort: "48.2 GB",
    sizeBytes: "48,213,574,021 bytes",
    onDisk: "Zero bytes on disk",
    where: "/Volumes/Helium › Google Drive Pool",
    created: "Today at 2:14 PM",
    modified: "Today at 4:38 PM",
    dimensionsOrMeta: "3840 × 2160 • 23.976 fps • 10-bit",
    driveOrigin: "Striped across Account #1 + Account #2 (256 MiB segments)",
    color: "#10b981",
    badge: "0 B on disk",
  },
  {
    id: "drone-coast",
    name: "drone-coast_4k.mp4",
    kind: "MPEG-4 movie (H.265 / HEVC D-Log M)",
    sizeShort: "21.7 GB",
    sizeBytes: "21,743,291,104 bytes",
    onDisk: "Zero bytes on disk",
    where: "/Volumes/Helium › Google Drive Pool",
    created: "Yesterday at 6:05 PM",
    modified: "Yesterday at 6:42 PM",
    dimensionsOrMeta: "5120 × 2700 • 59.94 fps • DJI Mavic 3 Pro",
    driveOrigin: "Whole-file on Account #1 Primary (studio@workspace.io)",
    color: "#0ea5e9",
    badge: "0 B on disk",
  },
  {
    id: "arduino-ide",
    name: "arduino-ide_2.3.10_macOS_arm64.dmg",
    kind: "Apple Disk Image (UDIF / APFS)",
    sizeShort: "195.2 MB",
    sizeBytes: "195,244,032 bytes",
    onDisk: "Zero bytes on disk",
    where: "/Volumes/Helium › Google Drive Pool",
    created: "Nov 4, 2026 at 11:20 AM",
    modified: "Nov 4, 2026 at 11:20 AM",
    dimensionsOrMeta: "Universal macOS Disk Image • Mounts directly via DiskImageMounter",
    driveOrigin: "Whole-file on Account #3 Free (personal@gmail.com)",
    color: "#6366f1",
    badge: "0 B on disk",
  },
  {
    id: "brand-shoot",
    name: "Brand Shoot.psd",
    kind: "Adobe Photoshop Document (PSB / 16-bit)",
    sizeShort: "2.3 GB",
    sizeBytes: "2,348,810,240 bytes",
    onDisk: "Zero bytes on disk",
    where: "/Volumes/Helium › Google Drive Pool",
    created: "Nov 2, 2026 at 9:15 AM",
    modified: "Today at 1:12 PM",
    dimensionsOrMeta: "8640 × 5760 • 42 Smart Object Layers • Adobe RGB",
    driveOrigin: "Whole-file on Account #1 Primary (studio@workspace.io)",
    color: "#f59e0b",
    badge: "0 B on disk",
  },
];

export interface RoleShowcaseItem {
  id: string;
  label: string;
  headline: string;
  subline: string;
  visualImage: string;
  visualAlt: string;
  badgeText: string;
  windowTitle: string;
  windowSubtitle: string;
  metrics: { label: string; value: string; accent?: boolean }[];
  files: { name: string; meta: string; size: string; status: string }[];
}

export const ROLE_SHOWCASE_TABS: RoleShowcaseItem[] = [
  {
    id: "everyone",
    label: "everyone",
    headline: "macOS System Settings › Storage",
    subline:
      "Macintosh HD stays roomy and fast while Helium pools 11+ TB across your linked Google Drives using 0 KB on this Mac.",
    visualImage: "/brand/Helium/visuals/visual-00-system-storage-zero-kb.webp",
    visualAlt:
      "macOS System Settings Storage view showing Macintosh HD with ample free space and Helium 11 TB pooled across Google Drives using 0 KB on this Mac",
    badgeText: "11 TB pooled across 2 Google Drives · 0 KB on this Mac",
    windowTitle: "System Settings › General › Storage",
    windowSubtitle: "Macintosh HD — 214.8 GB available of 256 GB",
    metrics: [
      { label: "Macintosh HD Free", value: "214.8 GB", accent: false },
      { label: "/Volumes/Helium Pool", value: "11.01 TB", accent: true },
      { label: "Used on This Mac", value: "0 KB", accent: true },
    ],
    files: [
      { name: "Family 4K Videos & iPhone Backups", meta: "Pooled across 2 Google Drives", size: "1.4 TB", status: "0 B on disk" },
      { name: "Scanned Tax & Legal PDF Archive", meta: "AES-256-GCM Zero-Knowledge Locked", size: "48.6 GB", status: "0 B on disk" },
      { name: "Downloaded .dmg Installers & ISOs", meta: "Mounts on double-click in 0.8s", size: "94.2 GB", status: "0 B on disk" },
    ],
  },
  {
    id: "video-editors",
    label: "video editors",
    headline: "4K ProRes Timeline Streaming Straight from /Volumes/Helium",
    subline:
      "Scrub 50 GB ProRes 422 HQ clips in DaVinci Resolve, Final Cut Pro, iMovie, or CapCut without copying terabytes to your internal SSD.",
    visualImage: "/brand/Helium/visuals/visual-03-watch-right-away.webp",
    visualAlt:
      "Video editor scrubbing 4K ProRes timeline wedding-film_final.mov 38.6 GB and drone-coast_4k.mp4 12.4 GB streaming directly from /Volumes/Helium",
    badgeText: "streaming from /Volumes/Helium · 0.8 s frame seek",
    windowTitle: "DaVinci Resolve Studio — /Volumes/Helium/Projects/Wedding_4K",
    windowSubtitle: "ProRes 422 HQ 24fps Timeline • Byte-Range Demand Streaming",
    metrics: [
      { label: "Timeline Size", value: "312.4 GB", accent: false },
      { label: "Local SSD Used", value: "0 B", accent: true },
      { label: "First-Frame Seek", value: "0.8 s", accent: true },
    ],
    files: [
      { name: "wedding-film_final.mov", meta: "4K ProRes 422 HQ • 00:42:18:04", size: "38.6 GB", status: "Streaming /Volumes/Helium" },
      { name: "drone-coast_4k.mp4", meta: "5.1K 60fps HEVC D-Log M", size: "12.4 GB", status: "Streaming /Volumes/Helium" },
      { name: "b-roll_reception_camA.mov", meta: "4K ProRes Raw • Multi-Cam Sync", size: "64.1 GB", status: "0 B on disk" },
    ],
  },
  {
    id: "photographers",
    label: "photographers",
    headline: "100,000+ Uncompressed RAW Photos Ready in Finder",
    subline:
      "Browse Sony ARW, Canon CR3, and Hasselblad 3FR catalogs in Preview, Lightroom, or Capture One with instant full-resolution previews.",
    visualImage: "/brand/Helium/visuals/visual-02-free-up-your-mac.webp",
    visualAlt:
      "Photographer RAW photo catalog DSC_0412.ARW 48 MB 6000x4000 RAW streaming directly from /Volumes/Helium with 0 B local disk usage",
    badgeText: "DSC_0412.ARW 48 MB · 6000×4000 RAW · 0 B on Mac",
    windowTitle: "/Volumes/Helium › RAW Catalogs › 2026 Editorial",
    windowSubtitle: "4,820 Sony Alpha A7R V Uncompressed RAWs",
    metrics: [
      { label: "Catalog Resolution", value: "6000×4000 RAW", accent: false },
      { label: "Total Shoot Size", value: "231.4 GB", accent: false },
      { label: "Mac Disk Taken", value: "0 B", accent: true },
    ],
    files: [
      { name: "DSC_0412.ARW", meta: "6000×4000 14-bit Uncompressed RAW • ISO 100", size: "48.0 MB", status: "0 B on disk" },
      { name: "DSC_0413.ARW", meta: "6000×4000 14-bit Uncompressed RAW • 85mm f/1.4", size: "48.4 MB", status: "0 B on disk" },
      { name: "Editorial_Lookbook_Master.psb", meta: "16-bit Adobe RGB Retouch Master", size: "4.7 GB", status: "0 B on disk" },
    ],
  },
  {
    id: "music-makers",
    label: "music makers",
    headline: "24-Bit / 96 kHz Stems, Sample Libraries & Logic Projects",
    subline:
      "Keep massive Kontakt instruments, orchestral stem packs, and Logic Pro / Ableton Live archives mounted at /Volumes/Helium without filling up a 256 GB MacBook.",
    visualImage: "/brand/Helium/visuals/visual-04-use-files-without-wifi.webp",
    visualAlt:
      "Music producer streaming 96kHz WAV stems and pinning active project folders offline on /Volumes/Helium",
    badgeText: "1-click offline pin for live studio sessions",
    windowTitle: "/Volumes/Helium › Audio Stems & Sample Vault",
    windowSubtitle: "96 kHz / 24-bit Uncompressed Multitrack Sessions",
    metrics: [
      { label: "Sample Library Pool", value: "1.85 TB", accent: false },
      { label: "Pinned for Flight", value: "12.4 GB", accent: false },
      { label: "Unpinned Space Saved", value: "1.83 TB", accent: true },
    ],
    files: [
      { name: "orchestra-master_96khz.wav", meta: "24-bit / 96 kHz Stereo Master Stem", size: "6.8 GB", status: "0 B on disk" },
      { name: "analog-synth-multisamples.nkx", meta: "Kontakt Library • Streamed on Demand", size: "42.0 GB", status: "0 B on disk" },
      { name: "film-score-cue07.logicx", meta: "Logic Pro Project Bundle • Pinned Offline", size: "3.9 GB", status: "Pinned Offline" },
    ],
  },
  {
    id: "designers",
    label: "designers",
    headline: "Open Multi-Gigabyte PSDs, Blender Scenes & Brand Kits in Place",
    subline:
      "Double-click in Finder to edit directly in Photoshop, Illustrator, Cinema 4D, or Blender — hit ⌘S and changes sync back to your Google Drive pool.",
    visualImage: "/brand/Helium/visuals/visual-09-edit-straight-from-helium.webp",
    visualAlt:
      "Designer editing Brand Shoot.psd 2.3 GB with 42 layers straight from /Volumes/Helium in Finder",
    badgeText: "hit ⌘S in Photoshop · syncs straight to pool",
    windowTitle: "/Volumes/Helium › Client Brand Systems",
    windowSubtitle: "Live Bi-Directional Save & 30-Day Version Recovery",
    metrics: [
      { label: "Active PSD Size", value: "2.3 GB", accent: false },
      { label: "Layers Preserved", value: "42 Layers", accent: false },
      { label: "Local Scratch Used", value: "0 B", accent: true },
    ],
    files: [
      { name: "Brand Shoot.psd", meta: "42 Layers • Smart Objects • CMYK + RGB", size: "2.3 GB", status: "0 B on disk" },
      { name: "product-hero-render.blend", meta: "Blender 4.3 Scene + 8K HDRI Textures", size: "8.9 GB", status: "0 B on disk" },
      { name: "2026-Keynote-Master.key", meta: "Apple Keynote Deck with Embedded 4K Video", size: "1.6 GB", status: "0 B on disk" },
    ],
  },
  {
    id: "developers",
    label: "developers",
    headline: "Mount .dmg SDKs, Xcode Archives & Local LLM Weights with 0 B Disk Cost",
    subline:
      "Mount .dmg images directly via DiskImageMounter, archive Xcode .xip builds, and stream GGUF/Safetensors datasets across pooled Google Drives.",
    visualImage: "/brand/Helium/visuals/visual-12-store-files-bigger-than-single-drive.webp",
    visualAlt:
      "Developer mounting .dmg SDKs, Xcode archives, and LLM datasets straight from /Volumes/Helium with 0 B local disk usage",
    badgeText: "mount .dmg & stream 70B LLM datasets at /Volumes/Helium",
    windowTitle: "/Volumes/Helium › Dev SDKs, DMGs & LLM Checkpoints",
    windowSubtitle: "POSIX-Compatible Volume at /Volumes/Helium",
    metrics: [
      { label: "Mount Path", value: "/Volumes/Helium", accent: true },
      { label: "Segment Striping", value: "256 MiB", accent: false },
      { label: "Internal SSD Saved", value: "640+ GB", accent: true },
    ],
    files: [
      { name: "arduino-ide_2.3.10_macOS_arm64.dmg", meta: "Mounts directly in DiskImageMounter", size: "195.2 MB", status: "0 B on disk" },
      { name: "llama-3.3-70b-instruct-q4_k_m.gguf", meta: "Striped across 3 Free Google Drives", size: "42.5 GB", status: "0 B on disk" },
      { name: "Xcode_16.3_Universal_ SDK.xip", meta: "Signed Apple Developer Archive", size: "16.4 GB", status: "0 B on disk" },
    ],
  },
];

export interface WhatYouGetItem {
  id: string;
  text: string;
  iconType:
    | "pool"
    | "lock"
    | "stripe"
    | "film"
    | "sparkles"
    | "sync"
    | "undo"
    | "pin"
    | "search"
    | "menubar"
    | "wifi"
    | "resume";
}

export const WHAT_YOU_GET_LIST: WhatYouGetItem[] = [
  { id: "1", text: "combine unlimited google drives into one unified mac volume", iconType: "pool" },
  { id: "2", text: "end-to-end encrypted. only you hold the key", iconType: "lock" },
  { id: "3", text: "whole-file smart placement & cross-account segment striping", iconType: "stripe" },
  { id: "4", text: "edit in davinci, final cut, imovie and capcut", iconType: "film" },
  { id: "5", text: "ai tools like claude and chatgpt save right into helium", iconType: "sparkles" },
  { id: "6", text: "bi-directional sync between finder, cogify.me/helium & google drive web", iconType: "sync" },
  { id: "7", text: "undo a delete for 30 days with cloud recycle bin sync", iconType: "undo" },
  { id: "8", text: "keep folders or files on your mac to work offline", iconType: "pin" },
  { id: "9", text: "find any file across all drives with ⌃⌥O", iconType: "search" },
  { id: "10", text: "drop files on the menu bar icon", iconType: "menubar" },
  { id: "11", text: "uploads that don't slow your internet", iconType: "wifi" },
  { id: "12", text: "big uploads pick up after wi-fi drops", iconType: "resume" },
];

export interface BentoFeatureCard {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  badge?: string;
}

export const PRIMARY_BENTO_CARDS: BentoFeatureCard[] = [
  {
    id: "add-your-files",
    title: "add your files",
    description:
      "just drag them into /Volumes/Helium in finder or drop them onto the smiling helium icon in your menu bar.",
    image: "/brand/Helium/visuals/visual-01-add-your-files.webp",
    alt: "Drag and drop files directly into /Volumes/Helium in macOS Finder or onto the Helium menu bar icon",
    badge: "drag & drop",
  },
  {
    id: "free-up-your-mac",
    title: "free up your mac",
    description:
      "files live in your google drive pool as 0-byte APFS sparse placeholders, so your mac SSD stays free.",
    image: "/brand/Helium/visuals/visual-02-free-up-your-mac.webp",
    alt: "Files stored as 0-byte APFS sparse placeholders in /Volumes/Helium freeing up Mac internal SSD space",
    badge: "0 B on disk",
  },
  {
    id: "open-right-away",
    title: "open right away",
    description:
      "double-click any video, PDF, image, or .dmg in finder — it opens directly in Preview, QuickTime, or DiskImageMounter without popping up extra windows.",
    image: "/brand/Helium/visuals/visual-03-watch-right-away.webp",
    alt: "Double-click 4K videos, PDFs, images, or .dmg files in Finder to open in 0.8 seconds in QuickTime or Preview",
    badge: "0.8 s open",
  },
  {
    id: "use-files-without-wifi",
    title: "use files without wi-fi",
    description:
      "click the pin icon or right-click any file to keep it offline on your mac, and unpin anytime in 1 click to reclaim space.",
    image: "/brand/Helium/visuals/visual-04-use-files-without-wifi.webp",
    alt: "Pin any file or folder in /Volumes/Helium for offline access without Wi-Fi and unpin in one click",
    badge: "offline pin",
  },
  {
    id: "bi-directional-cloud-sync",
    title: "bi-directional cloud sync",
    description:
      "upload or delete in finder, the helium files manager, or google drive web — pool capacity, file breakdowns, and the 30-day recycle bin stay in sync.",
    image: "/brand/Helium/visuals/visual-07-your-files-on-any-device.webp",
    alt: "Bi-directional sync between macOS Finder, Helium files manager, and Google Drive Web with 30-day recycle bin",
    badge: "2-way sync",
  },
  {
    id: "only-you-hold-the-key",
    title: "only you hold the key",
    description:
      "turn on zero-knowledge AES-256-GCM encryption so filenames and segments are locked on your mac before they ever touch google drive.",
    image: "/brand/Helium/visuals/visual-08-only-you-hold-the-key.webp",
    alt: "Client-side zero-knowledge AES-256-GCM encryption locking filenames and segments on your Mac before upload",
    badge: "AES-256-GCM",
  },
];

export const EXTENDED_BENTO_CARDS: BentoFeatureCard[] = [
  {
    id: "share-a-link",
    title: "share a link in 1 click",
    description:
      "right-click any file in finder to copy a share link, add a password, or set an expiration date.",
    image: "/brand/Helium/visuals/visual-05-share-a-link.webp",
    alt: "Right-click any file in Helium Finder volume to share a link with password and expiration controls",
  },
  {
    id: "get-files-from-anyone",
    title: "get files from anyone",
    description:
      "create a drop link so clients or teammates can send 50 GB raw footage straight into your pooled helium drive.",
    image: "/brand/Helium/visuals/visual-06-get-files-from-anyone.webp",
    alt: "Receive large files from clients directly into your pooled Helium volume via file request link",
  },
  {
    id: "edit-straight-from-helium",
    title: "edit straight from helium",
    description:
      "open projects in DaVinci Resolve, Final Cut Pro, Photoshop, or Logic and hit save — changes stream straight back.",
    image: "/brand/Helium/visuals/visual-09-edit-straight-from-helium.webp",
    alt: "Edit timelines and projects directly from /Volumes/Helium in DaVinci Resolve, Final Cut Pro, and Photoshop",
  },
  {
    id: "see-every-upload",
    title: "uploads that never slow your wi-fi",
    description:
      "watch live chunk progress in your menu bar with smart bandwidth throttling and automatic resume if wi-fi drops.",
    image: "/brand/Helium/visuals/visual-10-see-every-upload.webp",
    alt: "Helium menu bar upload manager showing live transfer speed, time remaining, and automatic Wi-Fi resume",
  },
];

export interface ComparisonRow {
  feature: string;
  helium: string;
  icloud: string;
  gdrive: string;
  dropbox: string;
}

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    feature: "combines multiple google accounts into one drive",
    helium: "✓",
    icloud: "✕",
    gdrive: "✕",
    dropbox: "✕",
  },
  {
    feature: "opens big files without taking space on your mac",
    helium: "✓ (0 B on disk)",
    icloud: "downloads to disk",
    gdrive: "downloads to disk",
    dropbox: "downloads to disk",
  },
  {
    feature: "splits huge files across drives automatically",
    helium: "✓",
    icloud: "✕",
    gdrive: "✕",
    dropbox: "✕",
  },
  {
    feature: "real local volume in /Volumes/Helium",
    helium: "✓",
    icloud: "partly",
    gdrive: "partly",
    dropbox: "partly",
  },
  {
    feature: "optional client-side zero-knowledge encryption",
    helium: "✓",
    icloud: "✕",
    gdrive: "✕",
    dropbox: "✕",
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const HELIUM_FAQS: FaqItem[] = [
  {
    question: "what is helium?",
    answer:
      "helium is a native macOS app that mounts a real local drive at /Volumes/Helium in Finder by pooling 1, 2, or unlimited linked Google Drive accounts into one unified cloud volume. Your files show their full size and open right away in Preview, QuickTime, DaVinci Resolve, Final Cut Pro, or DiskImageMounter while using Zero bytes on disk (0 B on disk) on your Mac's internal SSD.",
  },
  {
    question: "how does multi-google-drive pooling work?",
    answer:
      "when you link multiple Google accounts in Helium (whether free 15 GB accounts or Google Workspace / Google One terabyte accounts), Helium's Storage Placement Engine combines their available space into one continuous pool. In Whole-File Smart Placement mode, complete files are placed on the highest-priority drive with enough free space so they also open in Google Drive Web. In Cross-Account Segment Striping mode, files larger than any single drive's remaining space are automatically sliced into 256 MiB segments across multiple drives and reassembled transparently on the fly.",
  },
  {
    question: "how can a file open in preview or quicktime if it uses 0 bytes on my mac?",
    answer:
      "helium registers /Volumes/Helium using APFS sparse placeholders and byte-range demand streaming. When you double-click a 48.2 GB movie or a 195 MB .dmg file in Finder, macOS only requests the exact header and frame byte ranges currently being viewed. Helium streams those bytes over HTTPS in ~0.8 seconds without ever copying or caching the full file onto your internal SSD.",
  },
  {
    question: "what happens when i delete a file in finder or google drive?",
    answer:
      "nothing is lost by accident. Every deletion in /Volumes/Helium, the Helium files manager, or Google Drive Web is synchronized with Helium's 30-day cloud recycle bin. You have a full 30 days to restore any deleted file or striped segment back to its original path in one click.",
  },
  {
    question: "are my google credentials and files safe?",
    answer:
      "yes. Helium is Apple Developer ID signed and notarized, authenticates directly with Google OAuth 2.0 storing tokens exclusively in your local macOS Keychain, and includes optional client-side zero-knowledge AES-256-GCM encryption. When encryption is enabled, both filenames and 256 MiB segments are encrypted on your Mac before a single byte touches Google Drive—only you hold the key.",
  },
  {
    question: "what are the system requirements?",
    answer:
      "helium v0.0.1 (Build 1) is a universal native macOS binary (5.3 MB installer) supporting Apple Silicon (M1, M2, M3, M4) and Intel Macs running macOS 15.4+ or macOS 26 Tahoe.",
  },
];
