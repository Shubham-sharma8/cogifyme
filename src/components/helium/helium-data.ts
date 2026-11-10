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
  { id: "1", text: "combine unlimited google drives + 25+ S3, R2, B2, WebDAV, SFTP & SMB presets into /Volumes/Helium", iconType: "pool" },
  { id: "2", text: "automatic GitHub Releases auto-updater (Settings → Updates) with 1-click in-place .dmg install & persistent OAuth sign-in", iconType: "resume" },
  { id: "3", text: "client-side zero-knowledge AES-256-GCM encryption with HKDF-SHA256 & P-256 key agreement", iconType: "lock" },
  { id: "4", text: "whole-file smart placement & 64 MiB RAID-0 cross-account chunk striping", iconType: "stripe" },
  { id: "5", text: "5-step safe-write canary check (RTT ms → TLS 1.3 → auth → SHA-256 canary → 0 B cleanup)", iconType: "sync" },
  { id: "6", text: "scheduled add-only Mac folder backups (⌘⇧K) with live exclusion previews & 14-run history dots", iconType: "sync" },
  { id: "7", text: "Time Travel point-in-time snapshots & 'Then vs. Now' visual diffing (⌘⇧Y) + 30-day Recycle Bin", iconType: "undo" },
  { id: "8", text: "right-hand file inspector ('Where it lives', Keep Downloaded & two-Mac conflict resolver)", iconType: "pin" },
  { id: "9", text: "edit directly in DaVinci Resolve, Final Cut Pro, QuickTime, Preview & DiskImageMounter", iconType: "film" },
  { id: "10", text: "executable command palette (⌃⌥O) & menu bar quick dropzone for instant offload", iconType: "search" },
  { id: "11", text: "status-first Activity & Health (⌘⇧A) with self-healing Fix cards & HTTP 206 throughput chart", iconType: "wifi" },
  { id: "12", text: "100% open source under the MIT License + Privacy Network Contact Map (0 telemetry)", iconType: "sparkles" },
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
    feature: "pools unlimited google drives + 25+ S3 / R2 / WebDAV / SFTP / SMB presets",
    helium: "✓ (25+ presets)",
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
    feature: "64 MiB RAID-0 cross-account striping & smart placement",
    helium: "✓",
    icloud: "✕",
    gdrive: "✕",
    dropbox: "✕",
  },
  {
    feature: "5-step safe-write SHA-256 canary verification",
    helium: "✓",
    icloud: "✕",
    gdrive: "✕",
    dropbox: "✕",
  },
  {
    feature: "scheduled add-only Mac backups (⌘⇧K) & Time Travel diffing (⌘⇧Y)",
    helium: "✓",
    icloud: "2-way sync deletes",
    gdrive: "2-way sync deletes",
    dropbox: "paid add-on",
  },
  {
    feature: "real local volume in /Volumes/Helium",
    helium: "✓",
    icloud: "partly",
    gdrive: "partly",
    dropbox: "partly",
  },
  {
    feature: "optional client-side zero-knowledge AES-256-GCM encryption",
    helium: "✓",
    icloud: "✕",
    gdrive: "✕",
    dropbox: "✕",
  },
];

export interface WhatsNewPillar {
  id: string;
  number: string;
  badge: string;
  shortcut?: string;
  title: string;
  subtitle: string;
  bullets: { heading: string; detail: string }[];
}

export const WHATS_NEW_V002_PILLARS: WhatsNewPillar[] = [
  {
    id: "multi-protocol",
    number: "01",
    badge: "25+ Cloud & Local Presets",
    title: "Multi-Protocol & Multi-Provider Cloud Support",
    subtitle:
      "Pool Google Drives alongside S3, Cloudflare R2, Backblaze B2, WebDAV, SFTP, SMB & External SSDs with automatic endpoint & region inference.",
    bullets: [
      {
        heading: "Google Drive Pool (64 MiB RAID-0 Striping)",
        detail:
          "Link unlimited Google accounts via OAuth 2.0 PKCE with Mode 1 Whole-File Smart Placement and Mode 2 64 MiB RAID-0 cross-account striping.",
      },
      {
        heading: "S3-Compatible Object Storage",
        detail:
          "Amazon S3, Cloudflare R2 (zero egress), Backblaze B2, Wasabi, Hetzner Object Storage, DigitalOcean Spaces, Storj DCS, Tigris, Google Cloud Storage (HMAC), and MinIO / Garage / Ceph.",
      },
      {
        heading: "WebDAV, SFTP / SSH & SMB / Bonjour",
        detail:
          "Nextcloud, ownCloud, Fastmail Files, pCloud, Synology NAS, Hetzner Storage Box, rsync.net, standard SFTP, Local NAS / Time Capsule (_smb._tcp Bonjour), and Azure Files.",
      },
      {
        heading: "BYOK OAuth, External SSD & Smart Inference",
        detail:
          "Bring your own app key for Dropbox, Microsoft OneDrive, or Box; pool external USB/Thunderbolt SSDs; paste any URL to auto-detect provider preset & S3 signing region (auto, us-east-1, eu-west-1).",
      },
    ],
  },
  {
    id: "safe-write",
    number: "02",
    badge: "Canary SHA-256 Verified",
    title: "5-Step Safe-Write Verification",
    subtitle:
      "Before trusting any storage endpoint (or anytime from Activity & Health), Helium runs five measured cryptographic and network checks.",
    bullets: [
      {
        heading: "1. Reach Server & 2. Verify TLS 1.3 / 1.2",
        detail:
          "Measures exact round-trip latency in ms and validates the full TLS 1.3 / TLS 1.2 certificate chain before sending credentials.",
      },
      {
        heading: "3. Sign In & Verify Permissions",
        detail:
          "Confirms authenticated bucket, vault, or drive read & list access with least-privilege scope checks.",
      },
      {
        heading: "4. Test Safe Reads & Writes (SHA-256 Canary)",
        detail:
          "Writes a temporary canary payload, reads it back over the wire, and verifies its SHA-256 digest matches byte-for-byte.",
      },
      {
        heading: "5. Zero-Residue Cleanup (0 B Left Behind)",
        detail:
          "Removes the temporary canary object and confirms 0 B residue remains on your storage endpoint.",
      },
    ],
  },
  {
    id: "scheduled-backups",
    number: "03",
    badge: "Add-Only Cloud Safety",
    shortcut: "⌘⇧K",
    title: "Scheduled Add-Only Mac Folder Backups",
    subtitle:
      "One-way, version-preserving backups to /Volumes/Helium/Backups — deleting a file on your Mac never deletes its cloud backup.",
    bullets: [
      {
        heading: "One-Click Folder Presets",
        detail:
          "Protect ~/Desktop, ~/Documents, or ~/Pictures in one click, or pick any custom project folder on your Mac.",
      },
      {
        heading: "Live Folder Scan & Exclusion Preview",
        detail:
          "Scans locally before creation and displays exact file count and GB saved by skipping Caches, node_modules, .git, .DS_Store, .photoslibrary, .fcpbundle, or single files > 2 GB.",
      },
      {
        heading: "Add-Only Cloud Safety",
        detail:
          "Strictly one-way and version-preserving in /Volumes/Helium/Backups so accidental local deletions never propagate to your backup vault.",
      },
      {
        heading: "Countdown Ring & 14-Run History Dots",
        detail:
          "Visual countdown ring (Every Hour, Every Day, Every Week, or Manual Only), Skip on Personal Hotspot toggle, and color-coded status dots for the last 14 runs.",
      },
    ],
  },
  {
    id: "time-travel",
    number: "04",
    badge: "Then vs. Now Diffing",
    shortcut: "⌘⇧Y",
    title: "Time Travel: Snapshots & 'Then vs. Now' Diffing",
    subtitle:
      "Capture point-in-time manifest snapshots of /Volumes/Helium and visually diff every file against your live pool.",
    bullets: [
      {
        heading: "Point-in-Time Pool Snapshots",
        detail:
          "Capture the complete manifest state of /Volumes/Helium at any moment with a custom title and release note.",
      },
      {
        heading: "Visual 'Then vs. Now' Comparison Badges",
        detail:
          "Every item is compared against your live pool and badged as Deleted since then, Changed since then (showing THEN size vs. NOW size), Added after snapshot, or Unchanged.",
      },
      {
        heading: "One-Click Non-Destructive Recovery",
        detail:
          "Restore any snapshot item as a non-destructive copy (Restore Copy) or revert it in place (Restore Version) alongside the 30-Day Recently Deleted trash.",
      },
    ],
  },
  {
    id: "file-inspector",
    number: "05",
    badge: "Right-Hand Drawer",
    title: "Right-Hand File Inspector & Conflict Resolution",
    subtitle:
      "Inspect exact drive placement, segment striping, and cryptographic verification for any file—and resolve multi-Mac conflicts safely.",
    bullets: [
      {
        heading: "Verification & Placement Badges",
        detail:
          "Instant status badges: Verified • 0 B on Mac, Striped (N segments), Kept on this Mac, or 2 Versions (Conflict).",
      },
      {
        heading: "'Where It Lives' Card & Copy Path Chip",
        detail:
          "Shows exact drive account email, placement mode (Mode 1 Whole-File vs. Mode 2 64 MiB Striped), AES-256-GCM / SHA-256 shield, Keep Downloaded switch, and 1-click /Volumes/Helium/<filename> chip.",
      },
      {
        heading: "Non-Destructive Conflict Resolver",
        detail:
          "Resolve simultaneous edits across two Macs with Keep Both or Use Newer (safely moving the older copy to the 30-Day Recycle Bin).",
      },
    ],
  },
  {
    id: "activity-health",
    number: "06",
    badge: "Self-Healing & 0 Telemetry",
    shortcut: "⌘⇧A · ⌃⌥O",
    title: "Activity & Health, Executable Command Palette & Privacy Audit",
    subtitle:
      "Self-healing health cards, live HTTP Range 206 throughput charts, instant ⌃⌥O actions, and a verifiable zero-telemetry network map.",
    bullets: [
      {
        heading: "Actionable 'Needs You' Cards (⌘⇧A)",
        detail:
          "Self-healing cards for unmounted drives, file conflicts, low-space accounts, or unverified canaries with 1-click fix buttons (idle → Fixing… → Fixed ✓).",
      },
      {
        heading: "Live Dual-Series Throughput Chart",
        detail:
          "Rolling 2-minute area chart tracking both Sending to Pool and Streaming to Mac (HTTP Range 206) speeds in MB/s.",
      },
      {
        heading: "Executable Command Palette (⌃⌥O) & Privacy Map",
        detail:
          "Search files across all drives, run instant commands, inspect the Privacy Network Contact Map (0 analytics/telemetry), and export via Save Redacted Log….",
      },
    ],
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const HELIUM_FAQS: FaqItem[] = [
  {
    question: "what is helium and what's new in v0.0.3 (build 3)?",
    answer:
      "helium is an open-source (MIT) native macOS app that mounts a real local drive at /Volumes/Helium in Finder while using Zero bytes on disk (0 B on disk) on your Mac's internal SSD. Helium v0.0.3 (Build 3) adds a built-in GitHub Releases Auto-Updater (Settings → Updates) with 1-click in-place .dmg installation, persistent multi-account Google Drive OAuth refresh-token recovery across reboots, and a refined menu bar & pool workspace layout—on top of 25+ multi-protocol presets (Google Drive Pool with 64 MiB RAID-0 striping, S3, Cloudflare R2, Backblaze B2, WebDAV, SFTP/SSH, SMB/Bonjour, BYOK Dropbox/OneDrive/Box, and External SSDs), 5-Step Safe-Write Verification, Scheduled Add-Only Mac Backups (⌘⇧K), Time Travel Snapshots & 'Then vs. Now' Diffing (⌘⇧Y), a Right-Hand File Inspector with Conflict Resolution, and Activity & Health (⌘⇧A).",
  },
  {
    question: "how does the new auto-updater work in v0.0.3?",
    answer:
      "in Helium v0.0.3, Settings → Updates directly queries github.com/Shubham-sharma8/helium/releases for new versions, shows the full release notes inside the app, and lets you automatically or in 1 click download the signed .dmg and install the update in place to /Applications/Helium.app without losing your mounted pool or OAuth sessions.",
  },
  {
    question: "how does multi-google-drive & multi-cloud pooling work?",
    answer:
      "when you link multiple Google accounts, S3/R2/B2 buckets, WebDAV/SFTP servers, or SMB shares in Helium, the Storage Placement Engine combines their available space into one continuous pool. In Mode 1 (Whole-File Smart Placement), complete files are placed on the highest-priority drive with enough free space. In Mode 2 (64 MiB RAID-0 Cross-Account Striping), large files are automatically sliced into 64 MiB segments across multiple drives and reassembled transparently on the fly.",
  },
  {
    question: "what is the 5-step safe-write verification?",
    answer:
      "before trusting any storage endpoint (or anytime from Activity & Health), Helium runs 5 measured checks: (1) Reach the server (round-trip latency in ms), (2) Secure connection (TLS 1.3 / TLS 1.2 certificate chain), (3) Sign in & verify permissions (bucket/vault read & list access), (4) Test safe reads & writes (writes a temporary canary payload, reads it back, and verifies its SHA-256 digest byte-for-byte), and (5) Zero-residue cleanup (removes the canary and confirms 0 B left behind).",
  },
  {
    question: "how do scheduled add-only backups (⌘⇧K) and time travel (⌘⇧Y) protect my files?",
    answer:
      "Scheduled Add-Only Mac Folder Backups (⌘⇧K) protect ~/Desktop, ~/Documents, ~/Pictures, or custom folders on an hourly, daily, or weekly schedule while skipping heavy caches (node_modules, .git, Caches) — and because they are strictly add-only, deleting a file on your Mac never deletes its backup in /Volumes/Helium/Backups. Time Travel (⌘⇧Y) captures point-in-time pool snapshots and badges every item as Deleted, Changed (THEN vs. NOW size), Added, or Unchanged with 1-click Restore Copy or Restore Version.",
  },
  {
    question: "is helium open source and are my credentials private?",
    answer:
      "yes — Helium is 100% open source under the MIT License at github.com/Shubham-sharma8/helium. It is Apple Developer ID signed and notarized, exchanges OAuth 2.0 PKCE tokens directly with Google storing secrets exclusively in your local macOS Keychain, and includes optional client-side zero-knowledge AES-256-GCM encryption. You can verify every outbound host in Settings → Privacy (Privacy Network Contact Map showing 0 analytics/telemetry contacts) and export diagnostic logs with Save Redacted Log….",
  },
  {
    question: "what are the system requirements and where can i find previous releases?",
    answer:
      "helium v0.0.3 (Build 3) is an 8.4 MB (8,842,531 bytes) universal native macOS installer supporting Apple Silicon (M1, M2, M3, M4) and Intel Macs running macOS 15.4+ or macOS 26 Tahoe. You can view the full What's New changelog and download previous versions (v0.0.2 and v0.0.1) on cogify.me/helium/releases or github.com/Shubham-sharma8/helium/releases.",
  },
];
