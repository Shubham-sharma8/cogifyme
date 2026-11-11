export interface WhatYouGetItem {
  title: string;
  description: string;
  tag: string;
}

export interface ComparisonRow {
  feature: string;
  wifyy: string;
  macOsWiFi: string;
  iStatMenus: string;
  wiFiExplorer: string;
  speedtest: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  metric: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const WIFYY_DMG_URL =
  "https://github.com/Shubham-sharma8/wifyy/releases/download/v1.0.0/Wifyy.dmg";
export const WIFYY_GITHUB_URL = "https://github.com/Shubham-sharma8/wifyy";
export const WIFYY_RELEASE_TAG_URL =
  "https://github.com/Shubham-sharma8/wifyy/releases/tag/v1.0.0";
export const WIFYY_SHA256 =
  "b380ee1f7df4c8815e7744bb5cfd5e9e7eecfdf05c84908b7f53da1a5f70834a";
export const WIFYY_SIZE = "2.9 MB";
export const WIFYY_BYTES = "2,911,058 bytes";
export const TRYMACAPPS_URL = "https://www.trymacapps.com";
export const TRYMACAPPS_BADGE_IMG = "https://www.trymacapps.com/badge.png";

export const WIFYY_PERSONAS: Record<
  string,
  { badge: string; title: string; body: string }
> = {
  everyone: {
    badge: "4.40 Call MOS · 4-Hop Clean · 0 B Cloud Telemetry",
    title: "Instant clarity on whether lag is your Wi-Fi, your router, or your ISP.",
    body: "Stop guessing why video calls freeze. Wifyy checks all 4 network hops in parallel and verifies call readiness 5 minutes before every meeting.",
  },
  engineers: {
    badge: "Router RTT 2 ms · Upstream 14 ms · 1,480 RPM",
    title: "Real RF & packet telemetry without opening Wireshark.",
    body: "Inspect RSSI (-52 dBm), Noise Floor (-92 dBm), SNR Margin (+40 dB), BSSID roams, and per-process bandwidth culprits directly from your menu bar.",
  },
  designers: {
    badge: "Pre-Call Check · 1-Click Join · Auto-Shield",
    title: "Share 4K Figma & screen prototypes without audio stutter.",
    body: "Wifyy automatically pauses heavy background cloud uploads (OneDrive, Dropbox, Google Drive) the moment your camera or microphone turns on.",
  },
  founders: {
    badge: "7-Day Incident History · 1-Click Report Export",
    title: "Never drop a pitch or board call to a weak mesh access point.",
    body: "Get notified if your MacBook roamed onto a congested 2.4 GHz channel before your call starts, and jump into Zoom, Meet, or Teams in one click.",
  },
};

export const WIFYY_FOUR_HOPS = [
  {
    step: "Hop 1",
    name: "Mac Wireless Radio",
    telemetry: "en0 · Apple Silicon PHY · 1,200 Mbps Tx Rate",
    detail: "Verifies local interface driver state, hardware handshake, and power throttle status.",
    status: "0.2 ms · Clean",
    statusColor: "text-[#16A34A] bg-[#16A34A]/10 border-[#16A34A]/20",
  },
  {
    step: "Hop 2",
    name: "Wi-Fi RF Airwaves",
    telemetry: "-52 dBm RSSI · -92 dBm Noise · 40 dB SNR Margin",
    detail: "Monitors radio signal strength, channel interference, WPA3 cipher handshake, and 80 MHz channel width.",
    status: "Ch 149 (5 GHz) · Excellent",
    statusColor: "text-[#007AFF] bg-[#007AFF]/10 border-[#007AFF]/20",
  },
  {
    step: "Hop 3",
    name: "Local Gateway Router",
    telemetry: "192.168.1.1 · 2 ms RTT · 0.1 ms Jitter",
    detail: "Direct ICMP and ARP probe to your home/office router gateway, isolating internal LAN contention.",
    status: "2 ms · Gateway Clean",
    statusColor: "text-[#16A34A] bg-[#16A34A]/10 border-[#16A34A]/20",
  },
  {
    step: "Hop 4",
    name: "Upstream Internet ISP",
    telemetry: "1.1.1.1 / 8.8.8.8 · 14 ms RTT · 0% Loss",
    detail: "Multi-anchor public anycast latency telemetry that isolates upstream ISP fiber/cable congestion.",
    status: "14 ms · Upstream Clean",
    statusColor: "text-[#16A34A] bg-[#16A34A]/10 border-[#16A34A]/20",
  },
];

export const WIFYY_WHAT_YOU_GET: WhatYouGetItem[] = [
  {
    title: "4-Hop Parallel Fault Isolation",
    description:
      "Simultaneously probes your Mac wireless radio, Wi-Fi RF airwaves, local router gateway (192.168.1.1), and upstream ISP anchors (1.1.1.1 / 8.8.8.8).",
    tag: "Fault Isolation",
  },
  {
    title: "ITU-T G.107 E-Model Call MOS",
    description:
      "Calculates a real-time 1.00–4.50 Mean Opinion Score (MOS) and 0–100 Call Stability Index for crystal-clear voice and video verification.",
    tag: "Call Quality MOS",
  },
  {
    title: "10-Second Call Readiness Burst Test",
    description:
      "Runs 20 rapid packet probes measuring median RTT, jitter, and packet loss before you unmute your microphone.",
    tag: "Burst Test",
  },
  {
    title: "Responsiveness (RPM) Speed Benchmark",
    description:
      "Measures both bandwidth (Mbps) and Responsiveness (Round-Trips Per Minute) powered by Apple networkQuality and Cloudflare HTTP/2 fallback.",
    tag: "RPM Speed Test",
  },
  {
    title: "Live RF Spectrum & Channel Congestion Scanner",
    description:
      "Scans 2.4 GHz, 5 GHz, and 6 GHz (Wi-Fi 6E & Wi-Fi 7) airwaves in real time to recommend the cleanest router channel for zero interference.",
    tag: "Spectrum Scanner",
  },
  {
    title: "Per-App Live Bandwidth Attribution",
    description:
      "Leverages native macOS nettop telemetry to identify exactly which background process or browser tab is saturating your upload pipe.",
    tag: "Bufferbloat Radar",
  },
  {
    title: "Automatic Call Focus & Bandwidth Shielding",
    description:
      "Automatically quiets bandwidth-heavy background cloud syncs (OneDrive, Dropbox, iCloud) the moment your camera or microphone turns on.",
    tag: "Auto-Shield",
  },
  {
    title: "Calendar Integration & 1-Click Join",
    description:
      "Inspects upcoming meetings locally to run a pre-call check 5 minutes before start time and surfaces a 1-click Join button in your menu bar.",
    tag: "Calendar Sync",
  },
  {
    title: "Full Wifyy Studio Desktop Workspace",
    description:
      "Dedicated multi-view workspace (Overview, Spectrum, App Traffic, Calls, 7-Day History) with quick search hotkey (⌘K).",
    tag: "Studio Workspace",
  },
  {
    title: "Subnet Wi-Fi & LAN Device Discovery",
    description:
      "Scans your local subnet to display IP addresses, hostnames, normalized MAC addresses, IEEE OUI vendors, and live ping latencies with 1-click copy.",
    tag: "Device Scanner",
  },
  {
    title: "7-Day Rolling Incident & Roam Timeline",
    description:
      "Stores a local 7-day timeline of connection drops, BSSID access-point roams, latency spikes, and post-call reliability summaries.",
    tag: "7-Day History",
  },
  {
    title: "Scalable Apple System UI (90%–125%)",
    description:
      "Pixel-crisp Apple typography and controls that scale seamlessly from 90% Compact to 125% Extra Large, complete with global keyboard shortcuts.",
    tag: "Scalable UI",
  },
  {
    title: "100% Local & Air-Gapped Privacy",
    description:
      "Zero cloud accounts, zero analytics, zero external telemetry — all diagnostics and metrics run strictly on your Mac.",
    tag: "Zero Telemetry",
  },
];

export const WIFYY_COMPARISON_ROWS: ComparisonRow[] = [
  {
    feature: "4-hop fault isolation (Mac → RF → router → ISP)",
    wifyy: "yes (live)",
    macOsWiFi: "no",
    iStatMenus: "no",
    wiFiExplorer: "no",
    speedtest: "no",
  },
  {
    feature: "ITU-T E-Model Call MOS (1.0–4.50) & stability index",
    wifyy: "yes",
    macOsWiFi: "no",
    iStatMenus: "no",
    wiFiExplorer: "no",
    speedtest: "no",
  },
  {
    feature: "5-min pre-call calendar check & 1-click meeting join",
    wifyy: "yes",
    macOsWiFi: "no",
    iStatMenus: "no",
    wiFiExplorer: "no",
    speedtest: "no",
  },
  {
    feature: "live bufferbloat & culprit app attribution",
    wifyy: "yes",
    macOsWiFi: "no",
    iStatMenus: "bandwidth only",
    wiFiExplorer: "no",
    speedtest: "no",
  },
  {
    feature: "auto-shield background app quieting during calls",
    wifyy: "yes",
    macOsWiFi: "no",
    iStatMenus: "no",
    wiFiExplorer: "no",
    speedtest: "no",
  },
  {
    feature: "2.4 / 5 / 6 GHz channel congestion recommender",
    wifyy: "yes",
    macOsWiFi: "no",
    iStatMenus: "no",
    wiFiExplorer: "raw tables",
    speedtest: "no",
  },
  {
    feature: "built-in RPM responsiveness & speed benchmark",
    wifyy: "yes",
    macOsWiFi: "no",
    iStatMenus: "no",
    wiFiExplorer: "no",
    speedtest: "manual web",
  },
  {
    feature: "wi-fi & LAN device scanner (IP, MAC, name, ping)",
    wifyy: "yes (live)",
    macOsWiFi: "no",
    iStatMenus: "no",
    wiFiExplorer: "no",
    speedtest: "no",
  },
  {
    feature: "7-day rolling incident, roam & call history studio",
    wifyy: "yes (local)",
    macOsWiFi: "no",
    iStatMenus: "no",
    wiFiExplorer: "no",
    speedtest: "no",
  },
  {
    feature: "100% local & air-gapped (0 telemetry)",
    wifyy: "yes",
    macOsWiFi: "yes",
    iStatMenus: "yes",
    wiFiExplorer: "yes",
    speedtest: "sends data",
  },
];

export const WIFYY_TESTIMONIALS: TestimonialItem[] = [
  {
    quote:
      "My Zoom calls froze every afternoon at 4 PM even with 500 Mbps fiber. Wifyy immediately showed Hop 3 (router) at 2 ms and Hop 4 (ISP) spiking to 190 ms with 4% loss. I sent the 1-click diagnostic report to my ISP and they fixed a faulty street splitter.",
    author: "Rohan K.",
    role: "Staff Distributed Systems Engineer",
    company: "Enterprise Cloud Systems",
    metric: "190 ms ISP Bottleneck Isolated",
  },
  {
    quote:
      "The 5-minute pre-call check + 1-click Join in the menu bar is magic. It warned me my MacBook had roamed onto a weak 2.4 GHz guest AP right before a design review, and switched me back to 5 GHz in one click.",
    author: "Maya L.",
    role: "Principal Product Designer",
    company: "Studio Design Labs",
    metric: "5 GHz Roam Restored",
  },
  {
    quote:
      "Cleanest macOS utility I own. Pure white Apple UI, zero neon clutter, and the RPM responsiveness speed test works reliably whether I’m on Wi-Fi 6E or studio Ethernet.",
    author: "Devansh P.",
    role: "Founder & Video Creator",
    company: "Indie Creative Media",
    metric: "1,480 RPM Responsiveness",
  },
];

export const WIFYY_FAQS: FaqItem[] = [
  {
    question: "what is wifyy and what's in v1.0.0?",
    answer:
      "Wifyy is a native Swift 6 macOS menu bar and desktop telemetry studio that monitors your Wi-Fi RF link, local router hop, upstream ISP latency, per-app bandwidth bufferbloat, and ITU-T Call MOS in real time. Version 1.0.0 includes a clean white Apple System UI, the 6-section Wifyy Studio window (Overview, Spectrum & RF, Wi-Fi Devices, App Traffic, Calls & Calendar, 7-Day History), instant subnet device discovery (IP, MAC, Name, Ping, Vendor), automatic Ethernet + Wi-Fi RPM speed benchmarking, and instant permission state detection without repetitive startup screens.",
  },
  {
    question: "why does macOS ask for location permission to read my wi-fi name?",
    answer:
      "Apple's CoreWLAN framework on macOS requires Location Services authorization solely to reveal the connected Wi-Fi network name (SSID), access point hardware address (BSSID), and nearby channel scan data. Wifyy never computes GPS coordinates and never transmits any data off your Mac.",
  },
  {
    question: "how does 4-hop fault isolation tell router lag apart from ISP lag?",
    answer:
      "Wifyy probes your local default gateway (192.168.x.x / 10.x.x.x) and public anycast anchors (1.1.1.1, 8.8.8.8, 9.9.9.9) simultaneously. If router RTT stays at 2 ms while internet RTT climbs to 160 ms, the fault is upstream at your ISP. If router RTT itself spikes to 85 ms while RSSI is -78 dBm, the fault is your local Wi-Fi link.",
  },
  {
    question: "how does the bandwidth & responsiveness (RPM) speed test work?",
    answer:
      "Wifyy integrates Apple's /usr/bin/networkQuality engine across both Wi-Fi and wired Ethernet routes, paired with a native Cloudflare HTTP/2 fallback benchmark. In addition to Download and Upload Mbps, it measures Responsiveness (Round-Trips Per Minute / RPM) — how fast your connection reacts under heavy queuing load.",
  },
  {
    question: "how do pre-call checks and call focus auto-shield work?",
    answer:
      "When Calendar access is enabled, Wifyy detects upcoming Zoom, Google Meet, Microsoft Teams, Webex, and FaceTime links locally. Five minutes before start time, it verifies link readiness and surfaces a 1-click Join button. When your microphone or camera activates, Call Focus can automatically quiet bandwidth-heavy background sync apps.",
  },
  {
    question: "does wifyy impact battery life or send any telemetry?",
    answer:
      "No. Wifyy uses lightweight asynchronous probes (< 20 KB/hr), idles below 0.2% CPU and 25 MB RAM, and stores all 7-day history locally on your Mac with zero network analytics or cloud accounts.",
  },
];
