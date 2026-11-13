export const AMPIFY_VERSION = "1.6.3";
export const AMPIFY_SIZE = "5.6 MB";
export const AMPIFY_DMG_URL =
  "https://github.com/Shubham-sharma8/ampify/releases/download/v1.6.3/Ampify.dmg";
export const AMPIFY_GITHUB_URL = "https://github.com/Shubham-sharma8/ampify";
export const AMPIFY_RELEASE_NOTES_URL =
  "https://github.com/Shubham-sharma8/ampify/releases/tag/v1.6.3";
export const AMPIFY_SHA256 =
  "5c0a9e03353832f4a19551cc13fcb49d00a458258d0e7c8ae7d692d6c3b3f1b2";

export const TRYMACAPPS_URL = "https://www.trymacapps.com";
export const TRYMACAPPS_BADGE_IMG = "https://www.trymacapps.com/badge.png";

export interface AmpifyTourTab {
  id: string;
  badge: string;
  label: string;
  metric: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  highlights: string[];
}

export const AMPIFY_TOUR_TABS: AmpifyTourTab[] = [
  {
    id: "hero-popover",
    badge: "01 · MENU BAR POPOVER & NOW DASHBOARD",
    label: "80% Hold & Popover",
    metric: "80% Hold",
    title: "Keep your Mac battery healthy. See every Apple device at a glance.",
    subtitle:
      "Smart 80% charge limit, liquid-wave battery silhouettes, and live hardware telemetry in a calm macOS System UI.",
    description:
      "Ampify lives quietly in your macOS menu bar and opens an 8-tab battery longevity studio whenever you need deeper hardware insight. Switch effortlessly between Simple plain-English guidance and Technical mode (12.48 V, 0.4 W, mAh, °C).",
    image: "/images/ampify/01-ampify-hero-popover-and-liquid-devices.png",
    imageAlt:
      "Ampify v1.6.3 Menu Bar Popover, 80% Charge Limit, Liquid-Wave Apple Devices Strip, and Now Dashboard",
    highlights: [
      "Holds charge at 70%, 80% (Recommended), or 85% via native PowerUI.framework (zero root SMC helper daemons)",
      "Displays live Liquid-Wave silhouettes for iPhone, iPad, Apple Watch, AirPods, Apple Pencil, and Apple TV Siri Remote",
      "One-click Simple / Technical toggle reveals live Wattage (0.4 W), Voltage (12.48 V), Amperage, and cell temperature",
      "Charge to 100% Once button automatically restores your 80% hold as soon as you unplug",
    ],
  },
  {
    id: "liquid-devices",
    badge: "02 · LIQUID-WAVE APPLE ECOSYSTEM STRIP",
    label: "Liquid-Wave Devices",
    metric: "Wi-Fi + BLE",
    title: "Every Apple device battery, filled like tactile mint liquid.",
    subtitle:
      "Proportional liquid-wave fills for iPhone, iPad, Apple Watch, AirPods (L/R/Case), Apple Pencil Pro, and Apple TV Siri Remote.",
    description:
      "Automatically discovers your paired Apple devices over local Wi-Fi (CoreDevice + usbmuxd + CompanionProxy), Bluetooth GATT, and IOKit HID—rendered inside custom hardware silhouettes with charging bolts, rising bubbles, and a one-line Battery Health summary.",
    image: "/images/ampify/02-ampify-apple-devices-liquid-strip-and-health.png",
    imageAlt:
      "Ampify Liquid-Wave Apple Devices Strip showing iPhone, iPad, Apple Watch, AirPods, Apple Pencil, and Apple TV Siri Remote with Battery Health summary",
    highlights: [
      "Proportional mint-green liquid-wave fills (#87E5B8 → #33B880) with animated rising bubbles while charging",
      "Reads iPhone, iPad, and paired Apple Watch wirelessly over Wi-Fi without plugging in a USB cable",
      "Shows individual Left, Right, and Charging Case percentages for AirPods, AirPods Pro & AirPods Max",
      "Supports Apple Pencil Pro, Apple TV Siri Remote, Magic Keyboard, Magic Mouse & Magic Trackpad",
    ],
  },
  {
    id: "live-watts",
    badge: "03 · WHAT'S USING POWER (0.1 W PRECISION)",
    label: "What's Using Power",
    metric: "0.4 W Live",
    title: "No mystery energy scores. Real watts down to 0.1 W.",
    subtitle:
      "See exact watts going to your apps right now, macOS itself, and Everything else—and quit energy hogs in one click.",
    description:
      "Instead of macOS's abstract 'Energy Impact' numbers, Ampify reads Apple Silicon proc_pid_rusage (RUSAGE_INFO_V6 ri_energy_nj) hardware energy counters and translates CPU + GPU draw into real watts.",
    image: "/images/ampify/03-ampify-whats-using-power-live-watts.png",
    imageAlt:
      "Ampify What's Using Power view showing 0.4 W going to your apps right now, per-app wattage bars, macOS itself, and 1-click Quit App actions",
    highlights: [
      "Plain-English header tells you immediately if your Mac is calm ('0.4 W — Nothing is working hard right now')",
      "Separates user applications from 'macOS itself' and 'Everything else' for complete hardware transparency",
      "Proportional mint-green watt bars with live status badges (Idle, Light, Active, Working hard)",
      "One-click actions to Quit App, Bring to Front, or Reveal in Finder right from the power list",
    ],
  },
  {
    id: "desktop-widgets",
    badge: "04 · 5 NATIVE MACOS DESKTOP WIDGETS",
    label: "5 Desktop Widgets",
    metric: "WidgetKit",
    title: "Pin Liquid-Wave Apple devices & live watts right to your desktop.",
    subtitle:
      "5 signed, sandboxed WidgetKit families for macOS Sonoma, Sequoia, and Tahoe 26 in Small, Medium, and Large.",
    description:
      "Ampify bundles a native AmpifyWidgetExtension.appex with 5 specialized desktop and Notification Center widgets so you can see every Apple device battery and live app wattage without clicking the menu bar.",
    image: "/images/ampify/04-ampify-desktop-widgets-showcase.png",
    imageAlt:
      "Ampify 5 Native macOS Desktop and Notification Center Widgets showcase",
    highlights: [
      "1. Apple Devices Liquid Strip (Medium & Large) — 4-up liquid-wave silhouettes + Mac Battery Health banner",
      "2. iPad, Pencil, Watch & Apple TV (Small, Medium & Large) — dedicated creative & living-room ecosystem grid",
      "3. What's Using Power (Medium & Large) — live wattage and proportional app power bars on your desktop",
      "4. Battery & 80% Hold + 5. Battery Health & Power — 80% ceiling marker, cycle count, and wear status",
    ],
  },
  {
    id: "power-flow",
    badge: "05 · SMART 80% HOLD & ADAPTER BYPASS",
    label: "80% Hold & Power Flow",
    metric: "12.48 V",
    title: "Stop cooking your battery at 100% on a warm desk charger.",
    subtitle:
      "Hold charge at 70%, 80%, or 85% and run your Mac directly off wall power with a 3-node live power flow diagram.",
    description:
      "Keeping a lithium-ion cell at 100% (~4.25 V/cell) all day accelerates chemical cathode oxidation. Ampify pauses charging at 80% and routes power directly from your USB-C / MagSafe adapter to your Mac.",
    image: "/images/ampify/05-ampify-80-percent-hold-and-power-flow.png",
    imageAlt:
      "Ampify Smart 80% Hold and 3-Node Live Power Flow showing Power Adapter, This Mac, and Battery Cell telemetry",
    highlights: [
      "3-Node Live Power Flow tracks exact watts flowing from Power Adapter → This Mac → Battery Cell",
      "Auto Discharge to Limit, Sleep Guard, and MagSafe LED state synchronization",
      "Built-in Calibration Watchdog detects macOS batterygauging cycles and re-asserts 80% hold automatically",
      "Remembers your largest usual charger wattage and warns when plugged into a slow travel adapter",
    ],
  },
];

export interface AmpifyBentoCard {
  id: string;
  step: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  metricPill: string;
}

export const AMPIFY_BENTO_CARDS: AmpifyBentoCard[] = [
  {
    id: "liquid-strip",
    step: "01",
    tag: "Liquid-Wave Silhouettes",
    title: "Liquid-Wave Apple Device Strip",
    description:
      "Proportional liquid-wave fills for your iPhone, iPad, Apple Watch, AirPods, Apple Pencil, and Apple TV Siri Remote. Complete with charging bolts, rising bubbles, and a one-line Battery Health summary.",
    image: "/images/ampify/02-ampify-apple-devices-liquid-strip-and-health.png",
    imageAlt:
      "Ampify Liquid-Wave Apple Device Strip with iPhone, iPad, Watch, AirPods, Pencil & Apple TV Remote",
    metricPill: "iPhone · iPad · Watch · AirPods · Pencil · TV",
  },
  {
    id: "live-watts",
    step: "02",
    tag: "0.1 W Hardware Telemetry",
    title: "What's Using Power — In Real Watts",
    description:
      "No mystery scores. See exact watts (0.4 W going to your apps right now) across your running apps, macOS itself, and Everything else—and quit energy hogs in one click.",
    image: "/images/ampify/03-ampify-whats-using-power-live-watts.png",
    imageAlt:
      "Ampify What's Using Power in Real Watts showing 0.4 W app breakdown and 1-click Quit",
    metricPill: "0.4 W Live · proc_pid_rusage",
  },
  {
    id: "desktop-widgets",
    step: "03",
    tag: "5 WidgetKit Families",
    title: "5 Native macOS Desktop Widgets",
    description:
      "Pin the Apple Devices Liquid Strip, iPad + Pencil + Watch + Apple TV grid, or live App Wattage meter right to your macOS desktop.",
    image: "/images/ampify/04-ampify-desktop-widgets-showcase.png",
    imageAlt:
      "Ampify 5 Native macOS Sonoma, Sequoia & Tahoe Desktop Widgets",
    metricPill: "Small · Medium · Large Widgets",
  },
  {
    id: "smart-hold",
    step: "04",
    tag: "Adapter Bypass Power",
    title: "Smart 80% Hold & Direct Adapter Bypass",
    description:
      "Stop cooking your battery at 100% on a desk charger. Hold charge at 70%, 80%, or 85% and run your Mac directly off wall power while viewing live Watt, Volt, Amp, and temperature telemetry.",
    image: "/images/ampify/05-ampify-80-percent-hold-and-power-flow.png",
    imageAlt:
      "Ampify Smart 80% Hold and Direct Adapter Bypass with live Watt, Volt, Amp, and temperature telemetry",
    metricPill: "70% · 80% · 85% Ceiling",
  },
  {
    id: "longevity-pricing",
    step: "05",
    tag: "Longevity & Apple Pricing",
    title: "Battery Longevity & Official Apple Service Pricing",
    description:
      "Track chemical capacity vs. cycle count and see official Apple out-of-warranty battery replacement costs for your exact MacBook model across 9 currencies.",
    image: "/images/ampify/06-ampify-longevity-and-service-price.png",
    imageAlt:
      "Ampify Battery Longevity curve vs 80% Apple service threshold and official Apple replacement pricing",
    metricPill: "Capacity Fade + 1-Page PDF Export",
  },
  {
    id: "smart-trip",
    step: "06",
    tag: "EventKit Calendar Top-Up",
    title: "Smart Trip Mode & Calendar Auto Top-Up",
    description:
      "Reads your Calendar locally for upcoming flights or offsite meetings and tops your MacBook up to 100% right before departure.",
    image: "/images/ampify/07-ampify-smart-trip-and-departure-topup.png",
    imageAlt:
      "Ampify Smart Trip Mode & Calendar Auto Top-Up before flights and weekday departures",
    metricPill: "80% at Desk → 100% Before Flight",
  },
  {
    id: "wireless-discovery",
    step: "07",
    tag: "CoreDevice + BLE GATT",
    title: "Zero-Config Wi-Fi & Bluetooth Device Discovery",
    description:
      "Finds paired iPhones, iPads, and Apple Watches over local Wi-Fi (usbmuxd + CompanionProxy) plus Bluetooth GATT and HID accessories.",
    image: "/images/ampify/08-ampify-macos-ecosystem-devices-dashboard.png",
    imageAlt:
      "Ampify Zero-Config Wi-Fi & Bluetooth Apple Ecosystem Devices Dashboard",
    metricPill: "usbmuxd · CompanionProxy · HID",
  },
  {
    id: "dmg-installer",
    step: "08",
    tag: "Notarized Universal DMG",
    title: "Signed Drag-and-Drop DMG Installer",
    description:
      "Signed with Apple Developer ID (9TKKPN6F59). Drag Ampify into Applications and launch.",
    image: "/images/ampify/09-ampify-dmg-installer-preview.png",
    imageAlt:
      "Ampify Signed Drag-and-Drop DMG Installer Preview (v1.6.3)",
    metricPill: "Developer ID Signed · 5.6 MB",
  },
];

export interface AmpifyComparisonRow {
  capability: string;
  ampify: string;
  rootTools: string;
  macOsDefault: string;
}

export const AMPIFY_COMPARISON_ROWS: AmpifyComparisonRow[] = [
  {
    capability: "80% Charge Limit Engine",
    ampify: "Native PowerUI.framework (No root SMC daemon)",
    rootTools: "Invasive privileged root SMC helper daemon",
    macOsDefault: "Automatic only (cannot force 70% / 80% / 85%)",
  },
  {
    capability: "Liquid-Wave Apple Device Silhouettes",
    ampify: "iPhone, iPad, Watch, AirPods, Pencil, Apple TV, Mac",
    rootTools: "No",
    macOsDefault: "No",
  },
  {
    capability: "Wi-Fi iPhone, iPad & Apple Watch Discovery",
    ampify: "Automatic CoreDevice + CompanionProxy Wi-Fi wake",
    rootTools: "No",
    macOsDefault: "No",
  },
  {
    capability: "\"What's Using Power\" in Real Watts (0.1 W)",
    ampify: "Live Watts (0.4 W) + macOS itself + 1-click Quit App",
    rootTools: "Paid Pro license only",
    macOsDefault: "Vague list without wattage",
  },
  {
    capability: "Native macOS Desktop Widgets",
    ampify: "5 WidgetKit families (Small, Medium, Large)",
    rootTools: "Limited single widget",
    macOsDefault: "Basic rings/bars only",
  },
  {
    capability: "Calendar Trip & Weekday Departure Auto Top-Up",
    ampify: "Built-in local EventKit scanner + learned departure",
    rootTools: "No",
    macOsDefault: "No calendar awareness",
  },
  {
    capability: "Apple Service Replacement Cost & PDF Report",
    ampify: "Offline multi-currency catalog + 1-page PDF export",
    rootTools: "No",
    macOsDefault: "No",
  },
  {
    capability: "Price & License",
    ampify: "100% Free & Open Source (MIT License)",
    rootTools: "$25–$48 paid license / subscription",
    macOsDefault: "Built-in",
  },
];

export const AMPIFY_FAQS: { q: string; a: string }[] = [
  {
    q: "Why should I hold my MacBook battery at 80%?",
    a: "Lithium-ion batteries experience the highest chemical and thermal stress when kept at 100% state-of-charge (~4.25 V/cell) while plugged into an adapter all day. Holding your battery at 80% reduces high-voltage cathode oxidation and can double your battery's useful lifespan before hitting the 80% service threshold.",
  },
  {
    q: "Why does macOS sometimes charge slightly past 80%?",
    a: "When your Mac sleeps deeply, restarts, or runs a periodic macOS battery gauge calibration (batterygauging), Apple's hardware controller may briefly top up. Ampify includes Auto Discharge to Limit, Sleep Guard, a Calibration Watchdog, and MagSafe LED sync to automatically guide your battery back to your 80% target without instalar-level SMC root hacks.",
  },
  {
    q: "How do I make my iPhone, iPad, and Apple Watch appear over Wi-Fi without plugging in a cable?",
    a: "Connect your iPhone or iPad to your Mac via USB cable once, open Finder, select your device in the sidebar, and check \"Show this iPhone when on Wi-Fi\" → Apply. After that one-time pairing, Ampify wakes the macOS CoreDevice wireless tunnel and reads both your iPhone and its paired Apple Watch wirelessly whenever they are on the same Wi-Fi network.",
  },
  {
    q: "How do I add Ampify widgets to my Mac desktop?",
    a: "Make sure Ampify.app is in /Applications and has been opened at least once. Right-click anywhere on your macOS desktop → Edit Widgets... → search for Ampify to add any of the 5 widget families (Apple Devices Liquid Strip, iPad, Pencil, Watch & Apple TV, What's Using Power, Battery & 80% Hold, and Battery Health & Power).",
  },
  {
    q: "Does Ampify install a privileged root helper or modify raw SMC keys?",
    a: "No. Ampify never installs a background root daemon and never writes raw SMC keys. It communicates directly with macOS's native PowerUI.framework (PowerUISmartChargeClient)—the same system framework macOS uses natively—so sleep, wake, and macOS updates remain 100% safe.",
  },
  {
    q: "Does Ampify collect any telemetry or require an account?",
    a: "Never. Ampify runs 100% locally on your Mac with zero analytics, zero cloud servers, and full open-source transparency under the MIT License.",
  },
];
