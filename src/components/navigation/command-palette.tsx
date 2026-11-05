"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Search,
  ArrowRight,
  ExternalLink,
  Download,
  Scale,
  Building2,
  Globe,
  Laptop,
  Compass,
  X,
  CornerDownLeft,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export interface CommandItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Web Studios" | "macOS Workstations (.DMG)" | "Safari Extensions" | "Benchmarks & Comparisons" | "Company & Support";
  href: string;
  external?: boolean;
  downloadUrl?: string;
  badge: string;
  icon?: string;
  keywords: string;
}

const COMMAND_ITEMS: CommandItem[] = [
  // Web Studios
  {
    id: "biodata-studio",
    title: "Marriage Biodata Maker Studio",
    subtitle: "242 Cultural Templates, 9 Languages, Vedic Kundali & 300-DPI PDF / Word Export",
    category: "Web Studios",
    href: "/biodata",
    badge: "biodata.cogify.me",
    icon: "/brand/Biodata/icon-sm.webp",
    keywords: "biodata marriage kundali pdf word hindu muslim sikh christian jain marathi gujarati",
  },
  {
    id: "biodata-launch",
    title: "Launch Live Biodata Maker (biodata.cogify.me)",
    subtitle: "Open real-time A4 Marriage Biodata Studio in browser",
    category: "Web Studios",
    href: siteConfig.biodata.webUrl,
    external: true,
    badge: "Live Web App ↗",
    icon: "/brand/Biodata/icon-sm.webp",
    keywords: "biodata.cogify.me launch studio online free",
  },
  {
    id: "ssb-studio",
    title: "SSB Stage-2 Test Practice Studio",
    subtitle: "Full Timed TAT, WAT (60 words/15s), SRT, SDT, GTO 9-Task Hub & IO Simulator",
    category: "Web Studios",
    href: "/ssb",
    badge: "ssb.cogify.me",
    icon: "/brand/SSB/icon.png",
    keywords: "ssb interview tat wat srt sdt gto piq olq defence army navy air force",
  },
  {
    id: "ssb-launch",
    title: "Launch Live SSB Practice Studio (ssb.cogify.me)",
    subtitle: "Open 98-Minute Stage-2 Psychology & GTO Command Deck",
    category: "Web Studios",
    href: siteConfig.ssb.webUrl,
    external: true,
    badge: "Live Web App ↗",
    icon: "/brand/SSB/icon.png",
    keywords: "ssb.cogify.me launch simulator tat wat srt full test",
  },

  // macOS Workstations
  {
    id: "emdoc",
    title: "EmDoc PDF Workstation",
    subtitle: "5.0 MB Air-Gapped Native macOS PDF Editor, Merger, OCR & Bates Numbering",
    category: "macOS Workstations (.DMG)",
    href: "/products/emdoc",
    downloadUrl: siteConfig.emdoc.downloadUrl,
    badge: "5.0 MB DMG • ~45 MB RAM",
    icon: "/brand/emdoc-icon-sm.webp",
    keywords: "pdf editor acrobat replacement merge compress ocr bates macos dmg",
  },
  {
    id: "lumenview",
    title: "LumenView Display & HiDPI Manager",
    subtitle: "Hardware DDC/CI External Monitor Brightness, Contrast, Volume & HiDPI Scaling",
    category: "macOS Workstations (.DMG)",
    href: "/lumenview",
    downloadUrl: siteConfig.lumenview.downloadUrl,
    badge: "1.2 MB DMG • DDC/CI",
    icon: "/brand/LumenView/icon-sm.webp",
    keywords: "monitor brightness ddc hidpi scaling resolution betterdisplay lunar macos",
  },
  {
    id: "metricove",
    title: "Metricove Menu Bar Telemetry",
    subtitle: "Real-Time Apple Silicon P/E CPU, GPU, RAM, Disk, Network & SMC Fan Monitor",
    category: "macOS Workstations (.DMG)",
    href: "/metricove",
    downloadUrl: siteConfig.metricove.downloadUrl,
    badge: "2.3 MB DMG • SMC/IOKit",
    icon: "/brand/Metricove/icon-sm.webp",
    keywords: "cpu gpu ram fan temperature battery menu bar istat menus stats macos",
  },
  {
    id: "netguard",
    title: "NetGuard Outbound Firewall",
    subtitle: "Real-Time Per-App Network Firewall, Connection Alerts & GeoIP World Traffic Map",
    category: "macOS Workstations (.DMG)",
    href: "/netguard",
    downloadUrl: siteConfig.netguard.downloadUrl,
    badge: "11 MB DMG • Firewall",
    icon: "/brand/NetGuard/icon-sm.webp",
    keywords: "firewall network monitor little snitch lulu geoip outbound blocker macos",
  },
  {
    id: "klipora",
    title: "Klipora Clipboard & Snippet Manager",
    subtitle: "Instant Global Hotkey Clipboard Timeline, Smart Filters & Plain-Text Paste",
    category: "macOS Workstations (.DMG)",
    href: "/klipora",
    downloadUrl: siteConfig.klipora.downloadUrl,
    badge: "6.8 MB DMG • 100% Local",
    icon: "/brand/Klipora/icon-sm.webp",
    keywords: "clipboard history pasteboard snippets paste maccy raycast macos",
  },
  {
    id: "show-free-space",
    title: "Show free space Disk Analyzer",
    subtitle: "Interactive Multi-Ring Sunburst Storage Map & Safe One-Click Trash Cleaner",
    category: "macOS Workstations (.DMG)",
    href: "/show-free-space",
    downloadUrl: siteConfig.showFreeSpace.downloadUrl,
    badge: "1.2 MB DMG • APFS",
    icon: "/brand/ShowFreeSpace/icon-sm.webp",
    keywords: "disk space analyzer storage cleaner sunburst daisydisk cleanmymac macos",
  },

  // Safari Extensions
  {
    id: "ad-blocker",
    title: "Ad Blocker - For Safari",
    subtitle: "75,000+ Native WebKit Content Blocking Rules, Anti-Tracking & Cookie Shield",
    category: "Safari Extensions",
    href: "/ad-blocker",
    badge: "iOS, iPadOS & macOS",
    icon: "/brand/Ad-Blocker/icon-sm.webp",
    keywords: "ad blocker safari content blocker privacy youtube ads 1blocker",
  },
  {
    id: "readereasy",
    title: "ReaderEasy Distraction-Free Reader",
    subtitle: "Bionic Reading Focus Mode, Dyslexia Fonts, OLED Dark Theme & TTS Audio",
    category: "Safari Extensions",
    href: "/readereasy",
    badge: "iOS, iPadOS & macOS",
    icon: "/brand/ReaderEasy/icon-sm.webp",
    keywords: "reader view bionic reading dyslexia font tts safari extension",
  },
  {
    id: "webclear",
    title: "WebClear Cookie & Cache Cleaner",
    subtitle: "One-Tap Per-Site Cookie, Cache, LocalStorage Inspector & UTM URL Stripper",
    category: "Safari Extensions",
    href: "/webclear",
    badge: "iOS, iPadOS & macOS",
    icon: "/brand/WebClear/icon-sm.webp",
    keywords: "clear cookies cache localstorage sessionstorage utm tracker cleaner safari",
  },
  {
    id: "weblenses",
    title: "WebLenses Website Health & SEO Auditor",
    subtitle: "6-in-1 Core Web Vitals (LCP, CLS, FCP), SEO, Accessibility & Security Inspector",
    category: "Safari Extensions",
    href: "/weblenses",
    badge: "iOS, iPadOS & macOS",
    icon: "/brand/WebLenses/icon-sm.webp",
    keywords: "seo audit core web vitals lighthouse accessibility security headers safari",
  },
  {
    id: "element-hider",
    title: "Element Hider Visual DOM Zapper",
    subtitle: "Point, Tap, and Permanently Hide Any Distracting Element on Any Website",
    category: "Safari Extensions",
    href: "/element-hider",
    badge: "iOS, iPadOS & macOS",
    icon: "/brand/Element-Hider/icon-sm.webp",
    keywords: "hide element dom blocker paywall popup sticky header safari",
  },
  {
    id: "invert",
    title: "Colour Invert Smart Dark Mode",
    subtitle: "Per-Site Smart Dark Mode & High-Contrast Inversion with Media Shield",
    category: "Safari Extensions",
    href: "/invert",
    badge: "iOS, iPadOS & macOS",
    icon: "/brand/Invert/icon-sm.webp",
    keywords: "dark mode color invert night mode noir dark reader safari",
  },

  // Benchmarks & Comparisons
  {
    id: "compare-hub",
    title: "All 7 macOS Benchmark Comparisons ($1,115+ Saved)",
    subtitle: "Interactive Apple Silicon RAM, Binary Size & 3-Year Subscription Savings Calculator",
    category: "Benchmarks & Comparisons",
    href: "/compare",
    badge: "Benchmark Hub",
    keywords: "compare benchmarks alternatives savings calculator ram binary size",
  },
  {
    id: "compare-emdoc",
    title: "EmDoc vs. Adobe Acrobat Pro & PDF Expert",
    subtitle: "5.0 MB vs. 1,200 MB • ~45 MB RAM vs. 950 MB • $0 vs. $719.64/3yr",
    category: "Benchmarks & Comparisons",
    href: "/compare/emdoc-vs-adobe-acrobat-pdf-expert",
    badge: "$719 Saved",
    keywords: "emdoc adobe acrobat pdf expert preview comparison",
  },
  {
    id: "compare-netguard",
    title: "NetGuard vs. Little Snitch 6, LuLu & Radio Silence",
    subtitle: "11 MB Native Firewall + GeoIP Map vs. $59 Commercial Licenses",
    category: "Benchmarks & Comparisons",
    href: "/compare/netguard-vs-little-snitch-lulu",
    badge: "$59 Saved",
    keywords: "netguard little snitch lulu firewall comparison",
  },
  {
    id: "compare-metricove",
    title: "Metricove vs. iStat Menus, Stats & Activity Monitor",
    subtitle: "2.3 MB Menu Bar Telemetry (~16 MB RAM) vs. Paid System Monitors",
    category: "Benchmarks & Comparisons",
    href: "/compare/metricove-vs-istat-menus-stats",
    badge: "$24 Saved",
    keywords: "metricove istat menus stats comparison",
  },
  {
    id: "compare-lumenview",
    title: "LumenView vs. BetterDisplay, Lunar & MonitorControl",
    subtitle: "1.2 MB Native DDC/CI & HiDPI Controller vs. $22–$23 Commercial Tools",
    category: "Benchmarks & Comparisons",
    href: "/compare/lumenview-vs-betterdisplay-lunar",
    badge: "$23 Saved",
    keywords: "lumenview betterdisplay lunar monitorcontrol comparison",
  },
  {
    id: "compare-klipora",
    title: "Klipora vs. Paste, Maccy & Raycast Clipboard",
    subtitle: "6.8 MB Local Clipboard Timeline vs. $89.97/3yr Cloud Subscriptions",
    category: "Benchmarks & Comparisons",
    href: "/compare/klipora-vs-paste-maccy-raycast",
    badge: "$89 Saved",
    keywords: "klipora paste maccy raycast clipboard comparison",
  },
  {
    id: "compare-sfs",
    title: "Show Free Space vs. DaisyDisk & CleanMyMac X",
    subtitle: "1.2 MB Multi-Threaded Sunburst Disk Cleaner vs. $119.85 Subscriptions",
    category: "Benchmarks & Comparisons",
    href: "/compare/show-free-space-vs-daisydisk-cleanmymac",
    badge: "$119 Saved",
    keywords: "show free space daisydisk cleanmymac disk inventory comparison",
  },
  {
    id: "compare-safari",
    title: "Cogify Safari Suite vs. 1Blocker, Dark Reader & Noir",
    subtitle: "6 Free Zero-Telemetry Safari Extensions vs. $149.85 Combined Paid Tools",
    category: "Benchmarks & Comparisons",
    href: "/compare/safari-extensions-vs-1blocker-dark-reader",
    badge: "$149 Saved",
    keywords: "safari extensions 1blocker dark reader noir wipr comparison",
  },

  // Company & Support
  {
    id: "products-catalog",
    title: "Complete Product Catalog (All 14 Apps & Studios)",
    subtitle: "Browse all 6 macOS DMG apps, 6 Safari extensions, and 2 real-time web studios",
    category: "Company & Support",
    href: "/products",
    badge: "14 Free Products",
    keywords: "products catalog all apps downloads",
  },
  {
    id: "enterprise",
    title: "Enterprise License Replacement & Security Audit",
    subtitle: "Free enterprise pilot, source/binary auditing, and custom tool development",
    category: "Company & Support",
    href: "/enterprise",
    badge: "70–90% Savings",
    keywords: "enterprise license replacement audit pilot custom software",
  },
  {
    id: "about",
    title: "About COGIFY & Engineering Manifesto",
    subtitle: "Founded by Shubham Sharma • C++20, Swift 6 & Client-Side Web Architecture",
    category: "Company & Support",
    href: "/about",
    badge: "Manifesto",
    keywords: "about shubham sharma founder philosophy timeline",
  },
  {
    id: "suggestions",
    title: "Feature Requests & Bug Reports",
    subtitle: "Submit an idea or report an issue for any Cogify app or web studio",
    category: "Company & Support",
    href: "/suggestions",
    badge: "Feedback",
    keywords: "suggestions feedback bug report feature request",
  },
  {
    id: "contact",
    title: "Contact COGIFY Engineering",
    subtitle: "Direct technical support, enterprise inquiries, and partnership channel",
    category: "Company & Support",
    href: "/contact",
    badge: "Support",
    keywords: "contact email support inquiry",
  },
];

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
}

export function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return COMMAND_ITEMS;
    return COMMAND_ITEMS.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.badge.toLowerCase().includes(q) ||
        item.keywords.toLowerCase().includes(q)
    );
  }, [query]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setSelectedIndex(0);
      requestAnimationFrame(() => {
        inputRef.current?.focus();
      });
    }
  }, [open]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          filteredItems.length > 0 ? (prev + 1) % filteredItems.length : 0
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          filteredItems.length > 0
            ? (prev - 1 + filteredItems.length) % filteredItems.length
            : 0
        );
      } else if (e.key === "Enter" && filteredItems[selectedIndex]) {
        e.preventDefault();
        const target = filteredItems[selectedIndex];
        onClose();
        if (target.external) {
          window.open(target.href, "_blank", "noopener,noreferrer");
        } else {
          router.push(target.href);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, filteredItems, selectedIndex, onClose, router]);

  if (!open) return null;

  const grouped = filteredItems.reduce<Record<string, CommandItem[]>>(
    (acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    },
    {}
  );

  let runningIdx = -1;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] px-4"
      role="dialog"
      aria-modal="true"
      aria-label="COGIFY Quick Command Launcher"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-zinc-950/60 dark:bg-black/75 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Command Window — Instant open (0ms delay) per Emil Kowalski keyboard action rule */}
      <div className="relative z-10 w-full max-w-2xl rounded-2xl bg-white dark:bg-[#0b0f17] border border-zinc-200/90 dark:border-white/15 shadow-2xl overflow-hidden">
        {/* Search Input Header */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-zinc-200/80 dark:border-white/10">
          <Search className="w-4 h-4 text-zinc-400 shrink-0" aria-hidden="true" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Jump to any of 14 apps, web studios, .DMG downloads, or benchmarks..."
            className="w-full bg-transparent text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none"
            aria-label="Search COGIFY products, web studios, and benchmarks"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="p-1 rounded-md text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 cursor-pointer"
              aria-label="Clear search query"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="px-2 py-1 rounded-md bg-zinc-100 dark:bg-white/[0.06] text-[10px] font-mono text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white cursor-pointer shrink-0"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[62vh] overflow-y-auto p-2 space-y-3 overscroll-contain">
          {filteredItems.length === 0 ? (
            <div className="py-12 px-4 text-center">
              <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                No matching app, studio, or benchmark found for &ldquo;{query}&rdquo;
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                Try searching for &ldquo;EmDoc&rdquo;, &ldquo;Biodata&rdquo;, &ldquo;SSB&rdquo;, &ldquo;Firewall&rdquo;, or &ldquo;Safari&rdquo;.
              </p>
            </div>
          ) : (
            Object.entries(grouped).map(([category, items]) => (
              <div key={category}>
                <div className="px-3 py-1 text-[10px] font-mono font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5">
                  {category === "Web Studios" && <Globe className="w-3 h-3 text-amber-500" />}
                  {category === "macOS Workstations (.DMG)" && <Laptop className="w-3 h-3 text-indigo-500" />}
                  {category === "Safari Extensions" && <Compass className="w-3 h-3 text-emerald-500" />}
                  {category === "Benchmarks & Comparisons" && <Scale className="w-3 h-3 text-cyan-500" />}
                  {category === "Company & Support" && <Building2 className="w-3 h-3 text-zinc-400" />}
                  <span>{category}</span>
                </div>
                <div className="mt-1 space-y-0.5">
                  {items.map((item) => {
                    runningIdx += 1;
                    const itemIndex = runningIdx;
                    const isActive = itemIndex === selectedIndex;
                    return (
                      <div
                        key={item.id}
                        onMouseEnter={() => setSelectedIndex(itemIndex)}
                        onClick={() => {
                          onClose();
                          if (item.external) {
                            window.open(item.href, "_blank", "noopener,noreferrer");
                          } else {
                            router.push(item.href);
                          }
                        }}
                        className={`flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-colors ${
                          isActive
                            ? "bg-indigo-600 text-white"
                            : "text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-white/[0.04]"
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0 flex-1">
                          {item.icon ? (
                            <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-black/10 dark:border-white/10 shrink-0 bg-zinc-100 dark:bg-zinc-900">
                              <Image
                                src={item.icon}
                                alt={item.title}
                                fill
                                className="object-cover"
                                sizes="32px"
                              />
                            </div>
                          ) : (
                            <div
                              className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${
                                isActive
                                  ? "bg-white/15 border-white/20 text-white"
                                  : "bg-zinc-100 dark:bg-white/[0.05] border-zinc-200 dark:border-white/10 text-indigo-600 dark:text-indigo-400"
                              }`}
                            >
                              {item.category === "Benchmarks & Comparisons" ? (
                                <Scale className="w-4 h-4" />
                              ) : (
                                <Building2 className="w-4 h-4" />
                              )}
                            </div>
                          )}

                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold truncate">
                                {item.title}
                              </span>
                            </div>
                            <p
                              className={`text-[11px] truncate mt-0.5 ${
                                isActive
                                  ? "text-indigo-100"
                                  : "text-zinc-500 dark:text-zinc-400"
                              }`}
                            >
                              {item.subtitle}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          {item.downloadUrl && (
                            <a
                              href={item.downloadUrl}
                              download
                              onClick={(e) => e.stopPropagation()}
                              className={`px-2 py-1 rounded-md text-[10px] font-mono font-bold inline-flex items-center gap-1 ${
                                isActive
                                  ? "bg-white text-zinc-950 hover:bg-zinc-100"
                                  : "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/25"
                              }`}
                              title={`Direct Download ${item.title} (.DMG)`}
                            >
                              <Download className="w-3 h-3" />
                              <span>DMG</span>
                            </a>
                          )}
                          <span
                            className={`text-[10px] font-mono px-2 py-0.5 rounded-md tabular-nums ${
                              isActive
                                ? "bg-white/15 text-white"
                                : "bg-zinc-100 dark:bg-white/[0.06] text-zinc-600 dark:text-zinc-400"
                            }`}
                          >
                            {item.badge}
                          </span>
                          {item.external ? (
                            <ExternalLink
                              className={`w-3.5 h-3.5 ${
                                isActive ? "text-white" : "text-zinc-400"
                              }`}
                            />
                          ) : (
                            <ArrowRight
                              className={`w-3.5 h-3.5 ${
                                isActive ? "text-white" : "text-zinc-400"
                              }`}
                            />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Keyboard Hints */}
        <div className="px-4 py-2.5 bg-zinc-50 dark:bg-zinc-950/90 border-t border-zinc-200/80 dark:border-white/10 flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-3 font-mono">
            <span className="inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 text-[10px]">
                ↑↓
              </kbd>
              Navigate
            </span>
            <span className="inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 text-[10px] inline-flex items-center">
                <CornerDownLeft className="w-2.5 h-2.5" />
              </kbd>
              Open
            </span>
            <span className="inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 text-[10px]">
                ESC
              </kbd>
              Close
            </span>
          </div>
          <span className="font-mono text-[10px] text-emerald-700 dark:text-emerald-400">
            14 Free Apps &amp; Web Studios • 0 Bytes Telemetry
          </span>
        </div>
      </div>
    </div>
  );
}
