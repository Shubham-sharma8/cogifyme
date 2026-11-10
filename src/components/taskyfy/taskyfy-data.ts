export interface TaskyfyDaemonDemo {
  id: string;
  processName: string;
  bundleOrBinary: string;
  cpuSpike: string;
  memoryFootprint: string;
  verdict: "Safe to Quit" | "System Critical" | "Safe to Restart";
  verdictTone: "emerald" | "amber";
  plainEnglishSummary: string;
  whyItSpikes: string;
  recommendedAction: string;
}

export const TASKYFY_DAEMON_DEMOS: TaskyfyDaemonDemo[] = [
  {
    id: "mds_stores",
    processName: "mds_stores",
    bundleOrBinary: "/System/Library/Frameworks/CoreServices.framework/.../mds_stores",
    cpuSpike: "148.4% CPU",
    memoryFootprint: "612 MB RAM",
    verdict: "Safe to Restart",
    verdictTone: "emerald",
    plainEnglishSummary:
      "macOS Spotlight's background metadata indexer. It reads and indexes file contents across your SSD and external drives so Spotlight and Finder searches return results.",
    whyItSpikes:
      "Spikes after macOS updates, large git checkouts, npm/node_modules installs, or plugging in an external drive.",
    recommendedAction:
      "Pause (SIGSTOP) during battery work or exclude noisy build folders (node_modules, .build) in Spotlight Privacy.",
  },
  {
    id: "windowserver",
    processName: "WindowServer",
    bundleOrBinary: "/System/Library/PrivateFrameworks/SkyLight.framework/.../WindowServer",
    cpuSpike: "64.2% CPU",
    memoryFootprint: "1.42 GB RAM",
    verdict: "System Critical",
    verdictTone: "amber",
    plainEnglishSummary:
      "The core macOS display compositor. Every window, menu bar item, animation, and external monitor frame is drawn on screen through WindowServer.",
    whyItSpikes:
      "High refresh rate 4K/5K external displays, dozens of overlapping transparency effects, or runaway Electron apps redrawing at 120Hz.",
    recommendedAction:
      "Do not force quit (logs out your Mac session). Instead, close idle browser windows or inspect top GPU consumers in Taskyfy.",
  },
  {
    id: "vtdecoderxpc",
    processName: "VTDecoderXPCService",
    bundleOrBinary: "/System/Library/Frameworks/VideoToolbox.framework/.../VTDecoderXPCService",
    cpuSpike: "82.0% CPU",
    memoryFootprint: "428 MB RAM",
    verdict: "Safe to Quit",
    verdictTone: "emerald",
    plainEnglishSummary:
      "Apple VideoToolbox hardware video decoder helper spawned by Safari, Chrome, QuickTime, or FaceTime to decode H.264, HEVC, and ProRes streams.",
    whyItSpikes:
      "A background browser tab autoplaying 4K video, a stuck WebRTC call, or an unclosed video preview in Finder.",
    recommendedAction:
      "Safe to Quit — macOS automatically respawns it cleanly if an active video player still needs hardware decoding.",
  },
  {
    id: "node-port-3000",
    processName: "node (next-server)",
    bundleOrBinary: "/opt/homebrew/bin/node · TCP :3000 (LISTEN)",
    cpuSpike: "112.6% CPU",
    memoryFootprint: "1.84 GB RAM",
    verdict: "Safe to Quit",
    verdictTone: "emerald",
    plainEnglishSummary:
      "Local Node.js development server holding port :3000 open in LISTEN mode from an earlier terminal session.",
    whyItSpikes:
      "File-watcher loop, orphaned hot-reload compiler, or unclosed localhost server still running in the background.",
    recommendedAction:
      "Click Quit (SIGTERM) or Force Quit (SIGKILL) directly from Taskyfy's Port Radar to free port :3000 in 1 click.",
  },
];

export interface TaskyfyPillarTab {
  id: string;
  label: string;
  shortcut: string;
  badgeText: string;
  headline: string;
  subline: string;
  visualImage: string;
  visualAlt: string;
  sourceFile: string;
  metrics: { label: string; value: string; accent?: boolean }[];
  highlights: { title: string; detail: string; badge: string }[];
}

export const TASKYFY_PILLAR_TABS: TaskyfyPillarTab[] = [
  {
    id: "overview",
    label: "overview deck",
    shortcut: "Tab 1",
    badgeText: "4 live KPI cards · P/E core matrix · anomaly alerts",
    headline: "Every Apple Silicon Metric. One Calm Paper-White Deck.",
    subline:
      "See Processor Load, Unified Memory, Apple Silicon GPU (Renderer, Tiler & VRAM), and System Power & Thermal state at a glance — alongside individual sparklines for every Performance (P) and Efficiency (E) core.",
    visualImage: "/brand/Taskyfy/01-taskyfy-overview-hero.png",
    visualAlt:
      "Taskyfy Overview Telemetry Deck showing Processor Load, Unified Memory, Apple Silicon GPU, Power & Thermal, and Apple Silicon P/E Core Matrix alongside Process Inspector",
    sourceFile: "Sources/Taskyfy/Views/OverviewView.swift",
    metrics: [
      { label: "Core Topology", value: "P-Core & E-Core", accent: true },
      { label: "Self-Footprint", value: "< 0.3% Idle CPU", accent: true },
      { label: "Baseline Pin", value: "Δ CPU · Δ RAM", accent: false },
    ],
    highlights: [
      {
        title: "4 Live Executive KPI Cards",
        detail: "Processor Load, Unified Memory, Apple Silicon GPU (Renderer/Tiler/VRAM) & System Power Draw.",
        badge: "Real-Time",
      },
      {
        title: "Apple Silicon P/E Core Telemetry Matrix",
        detail: "Individual per-core sparklines separating Efficiency cores (E1–E4) from Performance cores (P5–P8+).",
        badge: "Mach Ticks",
      },
      {
        title: "Pin Baseline (Δ CPU · Δ RAM)",
        detail: "Snapshot current system state before starting a build or test run to measure exact resource deltas.",
        badge: "Benchmarking",
      },
    ],
  },
  {
    id: "processes",
    label: "grouped process tree",
    shortcut: "Tab 2 · ⌘I",
    badgeText: "parent app rollups · 230+ daemon encyclopedia · SecStaticCode",
    headline: "True App Footprints & 230+ Daemons Explained in Plain English.",
    subline:
      "Folds Chrome, Safari, Cursor, Xcode, and Docker helper processes under their parent app so you see real combined CPU, RAM, and Energy Impact — while explaining cryptic macOS daemons with Safe-to-Quit verdicts.",
    visualImage: "/brand/Taskyfy/02-taskyfy-processes-grouped.png",
    visualAlt:
      "Taskyfy Grouped Applications & Process Tree with 230+ plain-English daemon descriptions and right-hand Process & Security Inspector",
    sourceFile: "Sources/Taskyfy/Views/AppsView.swift",
    metrics: [
      { label: "Daemon Library", value: "230+ Explained", accent: true },
      { label: "Code Signing", value: "SecStaticCode", accent: false },
      { label: "Process Control", value: "Quit · Pause · Nice", accent: true },
    ],
    highlights: [
      {
        title: "Parent App + Helper Process Grouping",
        detail: "Rolls up 19+ Safari/Chrome WebKit or Electron helpers into a single expandable row.",
        badge: "True Footprint",
      },
      {
        title: "Built-In Plain-English Daemon Encyclopedia",
        detail: "Explains what mds_stores, WindowServer, iconservicesagent, and assistantd actually do.",
        badge: "Safe to Quit?",
      },
      {
        title: "Process & Security Inspector (⌘I)",
        detail: "Verifies Developer ID + Notarization status, open TCP ports, 15-min memory trail, and POSIX path.",
        badge: "SecStaticCode",
      },
    ],
  },
  {
    id: "memory",
    label: "memory & ram advisor",
    shortcut: "Tab 3",
    badgeText: "7-day RAM sizing advisor · 15-min leak watch · browser relief",
    headline: "Catch 15-Minute Memory Leaks & Know If You Need More RAM.",
    subline:
      "Breaks down App Memory, Wired Kernel, Compressed, and SSD Swap Used in real time, tracks 15-minute monotonic heap growth per app group, and analyzes 7-day pressure peaks to advise your ideal Mac RAM tier.",
    visualImage: "/brand/Taskyfy/03-taskyfy-memory-advisor.png",
    visualAlt:
      "Taskyfy Memory & Swap view showing Unified Memory Architecture, 7-Day RAM Capacity Advisor, Browser Tab Optimizer, and 15-Minute Memory Leak Watch",
    sourceFile: "Sources/Taskyfy/Views/MemoryAndEnergyViews.swift",
    metrics: [
      { label: "Leak Detection", value: "15-Min Slope", accent: true },
      { label: "RAM Sizing", value: "7-Day P95 Advisor", accent: true },
      { label: "Browser Relief", value: "1-Click Task Mgr", accent: false },
    ],
    highlights: [
      {
        title: "7-Day Hardware RAM Capacity Advisor",
        detail: "Computes P95 pressure and peak swap over 7 days to tell you if 8 GB, 16 GB, 32 GB, or 64 GB fits your workload.",
        badge: "RAM Advisor",
      },
      {
        title: "15-Minute Memory Growth / Leak Watch",
        detail: "Flags any process whose phys_footprint grows monotonically over a 15-minute window without releasing pages.",
        badge: "Leak Hunter",
      },
      {
        title: "Browser Tab & Purgeable Cache Optimizer",
        detail: "Totals RAM across Safari/Chrome/Arc tab helpers and opens the browser's native Task Manager in 1 click.",
        badge: "Browser Relief",
      },
    ],
  },
  {
    id: "energy",
    label: "energy & watts",
    shortcut: "Tab 4",
    badgeText: "live system wattage (W) · battery health & cycles · wakeups/s",
    headline: "Real-Time System Power Draw in Watts & Battery Health.",
    subline:
      "Reads IOPMPowerSource hardware telemetry for live system power draw in Watts (W), adapter wattage, battery health %, cycle count, temperature, and Today's Wh — plus a per-app Energy Impact & CPU wakeups/s leaderboard.",
    visualImage: "/brand/Taskyfy/04-taskyfy-energy-watts.png",
    visualAlt:
      "Taskyfy Energy & Power view showing 6.2 W live system power draw, 99% battery health, 72 cycles, and Top Live Energy Impact Applications",
    sourceFile: "Sources/Taskyfy/Views/MemoryAndEnergyViews.swift",
    metrics: [
      { label: "Power Readout", value: "Live Watts (W)", accent: true },
      { label: "Battery Metrics", value: "Health · Cycles · Wh", accent: false },
      { label: "Wakeups Tracking", value: "Per-App wake/s", accent: true },
    ],
    highlights: [
      {
        title: "Live System Power Draw & Adapter Rating",
        detail: "Monitor exact wattage draw (e.g., 6.2 W on AC 55W Adapter) and average power over the day.",
        badge: "IOPMPowerSource",
      },
      {
        title: "Battery Health, Cycles & Wh Telemetry",
        detail: "Inspect maximum capacity health %, charge cycles, battery temperature (°C), and daily Watt-hours.",
        badge: "Battery Health",
      },
      {
        title: "Top Live Energy Impact Leaderboard",
        detail: "Ranks apps and background daemons by Energy Impact score and kernel wakeups per second.",
        badge: "Wakeups/s",
      },
    ],
  },
  {
    id: "sensors",
    label: "36+ die sensors",
    shortcut: "Tab 5",
    badgeText: "IOKit HID & AppleSMC · CPU/GPU/NAND/PMU · fan RPM & headroom",
    headline: "36+ Apple Silicon Hardware Die Sensors & Acoustic Fan Telemetry.",
    subline:
      "Reads calibrated temperature channels directly from IOKit HID and AppleSMC across Efficiency cores, Performance cores, Tdie1–Tdie8, PMU rails, NVMe NAND storage, and battery sensors — plus fan RPM and thermal headroom.",
    visualImage: "/brand/Taskyfy/05-taskyfy-sensors-thermals.png",
    visualAlt:
      "Taskyfy Thermals & Sensors view displaying 36 active Apple Silicon hardware sensors across CPU/SoC, NVMe Storage, and Battery/PMU with 0 RPM Silent Fan status",
    sourceFile: "Sources/TaskyfyCore/Readers/SensorReader.swift",
    metrics: [
      { label: "Active Sensors", value: "36+ Die Channels", accent: true },
      { label: "Thermal Headroom", value: "Live °C Margin", accent: true },
      { label: "Cooling Telemetry", value: "Fan RPM / Passive", accent: false },
    ],
    highlights: [
      {
        title: "Per-Core & Die Thermal Matrix (Tdie / PMU)",
        detail: "Individual temperature bars for E-Cores, P-Cores, Tdie1–Tdie8, and PMU power management sensors.",
        badge: "36+ Sensors",
      },
      {
        title: "NVMe Blade & Battery Pack Thermals",
        detail: "Dedicated thermal channels for internal NVMe NAND controller and battery management unit.",
        badge: "SSD & Battery",
      },
      {
        title: "Acoustic Cooling & Thermal Headroom",
        detail: "Displays 0 RPM (Silent) passive status on MacBook Air or dual-fan RPM curves on MacBook Pro / Studio.",
        badge: "Headroom °C",
      },
    ],
  },
  {
    id: "network-ports",
    label: "port radar & disk i/o",
    shortcut: "Tab 6",
    badgeText: "live listening TCP/UDP ports (:3000) · en0 bandwidth · NVMe I/O",
    headline: "Live Listening Port Radar & NVMe Disk Read/Write Throughput.",
    subline:
      "Stop running lsof -i :3000 in Terminal. Inspect every listening TCP/UDP port mapped to its owning PID, code signature, and binary path — alongside live network bandwidth (en0) and per-app NVMe disk R/W rates.",
    visualImage: "/brand/Taskyfy/06-taskyfy-network-port-radar.png",
    visualAlt:
      "Taskyfy Network & Disk view showing live network throughput, NVMe storage I/O & capacity, and Top Disk I/O Applications",
    sourceFile: "Sources/TaskyfyCore/Readers/NetworkAndDiskReader.swift",
    metrics: [
      { label: "Port Discovery", value: "TCP / UDP LISTEN", accent: true },
      { label: "NVMe Telemetry", value: "Read / Write MB/s", accent: false },
      { label: "Dev Server Kill", value: "1-Click SIGTERM", accent: true },
    ],
    highlights: [
      {
        title: "Developer Listening Port Radar (:3000, :5432, :8080)",
        detail: "See every open TCP/UDP port right inside the Process Inspector or search ports directly via ⌘K.",
        badge: "No More lsof",
      },
      {
        title: "Real-Time Interface Bandwidth (en0)",
        detail: "Live download/upload sparklines, local LAN IP address, and cumulative session RX/TX totals.",
        badge: "Network I/O",
      },
      {
        title: "NVMe Storage I/O & Top Disk Consumers",
        detail: "Tracks real-time disk read/write rates and ranks which apps are thrashing your SSD.",
        badge: "NVMe R/W",
      },
    ],
  },
  {
    id: "history",
    label: "30-day sqlite wal",
    shortcut: "Tab 7",
    badgeText: "PRAGMA journal_mode=WAL · 1H / 24H / 7D / 30D · JSON/CSV export",
    headline: "30-Day SQLite WAL Time Machine & Recorded System Events.",
    subline:
      "Activity Monitor forgets everything the moment you close it. Taskyfy records 1-minute historical rollups in a local SQLite WAL database so you can scrub 1H, 24H, 7D, or 30D of CPU, Memory, and Watts — and export to JSON or CSV.",
    visualImage: "/brand/Taskyfy/07-taskyfy-history-sqlite-wal.png",
    visualAlt:
      "Taskyfy History Timeline showing 24-Hour Processor Utilization, Memory Usage %, System Power Watts, Historical Top Consumers, and Recorded System Events",
    sourceFile: "Sources/TaskyfyCore/Services/HistoryStore.swift",
    metrics: [
      { label: "Storage Engine", value: "SQLite3 WAL", accent: true },
      { label: "Retention Window", value: "1H · 24H · 7D · 30D", accent: false },
      { label: "Data Export", value: "1-Click JSON / CSV", accent: true },
    ],
    highlights: [
      {
        title: "Scrub 1H, 24H, 7D, or 30D of System Telemetry",
        detail: "Review historical Processor Utilization, Memory Usage %, and System Power Watts curves anytime.",
        badge: "Time Machine",
      },
      {
        title: "Correlated Recorded System Events Feed",
        detail: "Timestamped log of CPU spikes, elevated memory pressure, and +MB/+GB application heap growth.",
        badge: "Anomaly Log",
      },
      {
        title: "Zero-Allocation JSON & CSV Telemetry Export",
        detail: "Export structured time-series snapshots in one click for bug reports or performance audits.",
        badge: "JSON / CSV",
      },
    ],
  },
  {
    id: "command-palette",
    label: "⌘K palette & ⌥⌘T",
    shortcut: "⌘K · ⌥⌘T",
    badgeText: "instant command bar · port & daemon search · global menu bar popover",
    headline: "Keyboard-First ⌘K Command Palette & ⌥⌘T Menu Bar Popover.",
    subline:
      "Press ⌘K to search any running app, PID, listening port (e.g. :3000), or macOS daemon in the Process Encyclopedia — or press ⌥⌘T from any app to open the compact Menu Bar telemetry popover.",
    visualImage: "/brand/Taskyfy/08-taskyfy-command-palette.png",
    visualAlt:
      "Taskyfy ⌘K Quick Command Palette searching apps, PIDs, ports (:3000), and the built-in macOS Process Encyclopedia",
    sourceFile: "Sources/Taskyfy/Views/InspectorAndPaletteViews.swift",
    metrics: [
      { label: "Command Bar", value: "⌘K Instant", accent: true },
      { label: "Global Hotkey", value: "⌥⌘T Popover", accent: true },
      { label: "Search Scope", value: "Apps · PIDs · :Ports", accent: false },
    ],
    highlights: [
      {
        title: "Search Apps, PIDs, Ports (:3000) & Daemons",
        detail: "Jump to any studio tab, filter processes by port number, or read plain-English daemon docs from ⌘K.",
        badge: "⌘K Palette",
      },
      {
        title: "Global Carbon Hotkey (⌥⌘T) Menu Bar Popover",
        detail: "Summon live CPU, RAM, Temp, and Wattage in your Mac menu bar without leaving your code editor.",
        badge: "⌥⌘T Global",
      },
      {
        title: "1-Click Process Actions from Keyboard",
        detail: "Inspect (⌘I), Quit (SIGTERM), Force Quit (SIGKILL), Pause (SIGSTOP), or Copy Path immediately.",
        badge: "Fast Actions",
      },
    ],
  },
];

export interface TaskyfyWhatYouGetItem {
  id: string;
  text: string;
  iconType:
    | "tree"
    | "book"
    | "shield"
    | "cpu"
    | "thermometer"
    | "leak"
    | "ram"
    | "browser"
    | "port"
    | "pin"
    | "lock"
    | "database";
}

export const TASKYFY_WHAT_YOU_GET_LIST: TaskyfyWhatYouGetItem[] = [
  {
    id: "1",
    text: "Grouped App & Process Tree — folds 20+ Safari/Chrome/Electron renderer helpers under their parent app with live sparklines",
    iconType: "tree",
  },
  {
    id: "2",
    text: "230+ Daemon Plain-English Encyclopedia — answers 'What is this process?', 'Why is its usage high?', and 'Is it safe to quit?'",
    iconType: "book",
  },
  {
    id: "3",
    text: "Safe-to-Quit vs. System Critical Verdicts — never accidentally force-quit WindowServer or kernel-critical macOS daemons again",
    iconType: "shield",
  },
  {
    id: "4",
    text: "Apple Silicon P/E Core Matrix & GPU Telemetry — real-time Efficiency vs. Performance core sparklines + IOKit GPU Renderer, Tiler & VRAM",
    iconType: "cpu",
  },
  {
    id: "5",
    text: "36+ Hardware Die Sensors & Fan RPM — direct AppleSMC + IOKit HID temperature channels for SoC, GPU, NVMe NAND & Battery with thermal headroom",
    iconType: "thermometer",
  },
  {
    id: "6",
    text: "15-Minute Memory Leak Hunter — tracks resident phys_footprint ring buffers per process and flags sustained monotonic heap growth",
    iconType: "leak",
  },
  {
    id: "7",
    text: "7-Day Hardware RAM Sizing Advisor — analyzes P95 memory pressure and peak swap to recommend 8 GB, 16 GB, 32 GB, or 64 GB",
    iconType: "ram",
  },
  {
    id: "8",
    text: "1-Click Browser Memory Relief — totals RAM across Safari, Chrome, Arc, Brave & Edge tab helpers and opens native browser Task Manager",
    iconType: "browser",
  },
  {
    id: "9",
    text: "Live Port & Socket Radar — see every listening TCP/UDP port (:3000, :5432, :8080) mapped to its PID and searchable via ⌘K",
    iconType: "port",
  },
  {
    id: "10",
    text: "Live Baseline Pinning (Δ CPU · Δ RAM) — pin system state before a build or benchmark to measure exact CPU and memory deltas",
    iconType: "pin",
  },
  {
    id: "11",
    text: "Code Signing & Notarization Inspector (⌘I) — verifies Apple System, Developer ID + Notarized, Ad-Hoc, or Unsigned binaries via SecStaticCode",
    iconType: "lock",
  },
  {
    id: "12",
    text: "30-Day SQLite WAL History & JSON/CSV Export — non-blocking 1-minute historical rollups stored 100% locally on your Mac",
    iconType: "database",
  },
];

export interface TaskyfyComparisonRow {
  feature: string;
  taskyfy: string;
  activityMonitor: string;
  istatMenus: string;
  btop: string;
}

export const TASKYFY_COMPARISON_ROWS: TaskyfyComparisonRow[] = [
  {
    feature: "plain-english process encyclopedia (230+ macOS daemons)",
    taskyfy: "✓ (built-in + safe-to-quit verdict)",
    activityMonitor: "✕",
    istatMenus: "✕",
    btop: "✕",
  },
  {
    feature: "parent app + helper process grouping (CPU, RAM, energy, threads)",
    taskyfy: "✓ (true combined rollup)",
    activityMonitor: "partial (no rollup cards)",
    istatMenus: "top 5 list only",
    btop: "tree only",
  },
  {
    feature: "30-day historical scrubber (SQLite WAL + JSON/CSV export)",
    taskyfy: "✓ (1H / 24H / 7D / 30D)",
    activityMonitor: "✕ (resets on close)",
    istatMenus: "in-memory buffer",
    btop: "✕",
  },
  {
    feature: "7-day hardware RAM upgrade advisor (P95 pressure & swap)",
    taskyfy: "✓ (deterministic sizing)",
    activityMonitor: "✕",
    istatMenus: "✕",
    btop: "✕",
  },
  {
    feature: "15-minute automatic per-process memory leak detector",
    taskyfy: "✓ (+MB slope trail)",
    activityMonitor: "✕",
    istatMenus: "✕",
    btop: "✕",
  },
  {
    feature: "live listening TCP/UDP port radar (:3000) + ⌘K port search",
    taskyfy: "✓ (with 1-click quit/kill)",
    activityMonitor: "✕",
    istatMenus: "✕",
    btop: "✕",
  },
  {
    feature: "SecStaticCode notarization & code-signature verification",
    taskyfy: "✓ (live in ⌘I inspector)",
    activityMonitor: "✕",
    istatMenus: "✕",
    btop: "✕",
  },
  {
    feature: "self-footprint transparency + 120s IdleExit XPC helper",
    taskyfy: "✓ (< 0.3% idle CPU)",
    activityMonitor: "high UI CPU overhead",
    istatMenus: "always-on daemon",
    btop: "terminal active",
  },
  {
    feature: "100% open source (MIT) & free forever ($0 / month)",
    taskyfy: "✓ ($0 forever · MIT)",
    activityMonitor: "closed source",
    istatMenus: "$11.99 paid closed",
    btop: "open source CLI",
  },
];

export interface TaskyfyShortcutItem {
  shortcut: string;
  scope: string;
  action: string;
}

export const TASKYFY_SHORTCUTS: TaskyfyShortcutItem[] = [
  {
    shortcut: "⌘K",
    scope: "Studio",
    action: "Open Quick Command Palette (jump to views, search PIDs, :ports & daemons)",
  },
  {
    shortcut: "⌥⌘T",
    scope: "Global",
    action: "Toggle compact Menu Bar Telemetry Popover from any app",
  },
  {
    shortcut: "⌘I",
    scope: "Studio",
    action: "Toggle right-hand Process & Security Inspector drawer",
  },
  {
    shortcut: "⌘R",
    scope: "Studio",
    action: "Trigger immediate kernel & hardware sensor sample",
  },
  {
    shortcut: "⌘,",
    scope: "Studio",
    action: "Open Preferences, Appearance & Sampling Cadence settings",
  },
  {
    shortcut: "1 – 7",
    scope: "Studio",
    action: "Quick-switch across Overview, Processes, Memory, Energy, Sensors, Network & History",
  },
];

export interface TaskyfyFaqItem {
  question: string;
  answer: string;
}

export const TASKYFY_FAQS: TaskyfyFaqItem[] = [
  {
    question: "how is taskyfy different from macOS Activity Monitor?",
    answer:
      "Activity Monitor shows raw Unix process rows that disappear the moment you close the window and offers zero explanation for cryptic macOS daemons. Taskyfy groups helper processes under their parent application, explains what 230+ macOS system processes actually do in plain English (and whether they are safe to quit), records a 30-day searchable SQLite WAL history, catches 15-minute memory leaks, and includes a live TCP/UDP port radar for developers.",
  },
  {
    question: "does taskyfy slow down my mac or drain battery?",
    answer:
      "No. Taskyfy is written in pure Swift 5.10 using zero-allocation Darwin/Mach system calls (host_processor_info, proc_pid_rusage) and displays its own CPU, RAM, and disk footprint right at the bottom of the sidebar (Taskyfy Self-Footprint). When the main window is closed, Taskyfy automatically throttles down to background sampling (5–10s), keeping idle CPU usage under 0.3%.",
  },
  {
    question: "what is TaskyfyHelper and is it required?",
    answer:
      "TaskyfyHelper is an optional, lightweight read-only Mach XPC daemon (app.taskyfy.helper) that transfers fixed 64-byte binary records (RawProcRecord) so Taskyfy can read kernel-level metrics for system-owned processes. Taskyfy works out of the box in Standard Mode without root permissions, and TaskyfyHelper automatically terminates after 120 seconds of inactivity so it never runs unnecessarily in the background.",
  },
  {
    question: "does taskyfy send any telemetry or analytics to the cloud?",
    answer:
      "Never. Taskyfy has zero network entitlements for outbound analytics, no tracking SDKs, and no telemetry servers. All historical data lives locally on your Mac inside ~/Library/Application Support/Taskyfy/history.sqlite and can be exported to JSON/CSV or cleared in one click.",
  },
  {
    question: "how does the 7-Day RAM Advisor work?",
    answer:
      "Instead of guessing based on instantaneous RAM usage (since macOS aggressively caches files in unused RAM), Taskyfy's RAMAdvisor analyzes your rolling 7-day history of kernel memory pressure levels, compressed memory ratios, and active swap activity to tell you whether your current unified memory is well-sized or bottlenecking your workflow.",
  },
  {
    question: "how does the 15-Minute Memory Leak Watch work?",
    answer:
      "Every sample tick, Taskyfy records a lightweight ring buffer of resident physical memory (phys_footprint) per PID. If a process exhibits sustained, monotonic memory growth over a 15-minute window without releasing pages back to the system, Taskyfy flags it in the Memory & Swap view and in the Process Inspector with its exact +MB delta.",
  },
  {
    question: "can I use taskyfy to find and kill stuck localhost dev servers (like port 3000 or 8080)?",
    answer:
      "Yes. Open the Network & Disk tab (or press ⌘K and search ports) to view the Listening Ports & Active Sockets radar. Filter by :3000, :5173, :5432, or :8080, click Inspect, and press Quit (SIGTERM) or Force Quit (SIGKILL) right from the inspector.",
  },
  {
    question: "does taskyfy support Apple Silicon (M1, M2, M3, M4) and Intel Macs?",
    answer:
      "Yes. Taskyfy v2.0 is distributed as a 3.2 MB Universal Binary (arm64 + x86_64) signed with an Apple Developer ID (9TKKPN6F59) and notarized by Apple. On Apple Silicon Macs, it automatically unlocks hardware-specific telemetry including P-Core vs. E-Core utilization matrices, unified memory compression ratios, IOKit GPU renderer/tiler loads, and 36+ AppleSMC die thermals.",
  },
  {
    question: "what do Pause (SIGSTOP), Resume (SIGCONT), and Nice (setpriority) do in the Process Inspector?",
    answer:
      "Pause (SIGSTOP) freezes a runaway app or background compiler immediately to free up CPU cycles and cool down your Mac without losing unsaved work in that app, allowing you to Resume (SIGCONT) it later. Nice (setpriority) lowers the scheduling priority of a heavy background task (like video encoding or indexing) so your foreground apps stay responsive.",
  },
  {
    question: "is taskyfy open source?",
    answer:
      "Yes! Taskyfy is 100% open source under the MIT License at github.com/Shubham-sharma8/taskyfy. You can inspect the entire Swift 5.10 codebase, verify the 64-byte XPC wire protocol and SQLite WAL schema, or build it from source using swift build or Taskyfy.xcodeproj.",
  },
];
