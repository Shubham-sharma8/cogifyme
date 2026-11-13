import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { AppleLogoIcon, GitHubIcon } from "@/components/ui/platform-icons";

interface AuthorBioProps {
  currentSlug?: string;
  contextLabel?: string;
}

const ECOSYSTEM_LINKS = [
  {
    slug: "helium",
    name: "Helium Drive Pool",
    badge: "macOS Flagship • /Volumes/Helium",
    href: "/helium",
    desc: "Pool unlimited Google Drives into one local Finder volume with 0 B used on your Mac SSD.",
  },
  {
    slug: "findy",
    name: "Findy File Search",
    badge: "macOS Native • v1.2 (4.5 MB)",
    href: "/findy",
    desc: "Plain-English file search, Space Lens treemap, SHA-256 duplicates, and local Vision OCR.",
  },
  {
    slug: "taskyfy",
    name: "Taskyfy Activity Studio",
    badge: "macOS Native • v2.0 (3.2 MB)",
    href: "/taskyfy",
    desc: "Plain-English Activity Monitor with 230+ explained daemons, 30-day SQLite WAL, and port radar.",
  },
  {
    slug: "wheelify",
    name: "Wheelify Radial Wheel",
    badge: "macOS Native • v2.0 (1.9 MB)",
    href: "/wheelify",
    desc: "16-tool radial command workspace (⌥ Space) with inline math, live ECB FX, and Frontier AI.",
  },
  {
    slug: "screenify",
    name: "Screenify Studio",
    badge: "macOS Native • v1.12",
    href: "/screenify",
    desc: "240Hz spring auto-zoom screen recorder, multi-track timeline editor & local Whisper AI captions.",
  },
  {
    slug: "wifyy",
    name: "Wifyy Network Monitor",
    badge: "macOS Native • v1.0",
    href: "/wifyy",
    desc: "4-hop Wi-Fi & call reliability engine with ITU-T Call MOS and pre-call calendar diagnostics.",
  },
  {
    slug: "ottie",
    name: "Ottie Mac Companion",
    badge: "macOS Native • v1.0 (2.4 MB)",
    href: "/ottie",
    desc: "54 costumes (including Cutest Robo-Ottie), 93 spring animations & 7 full-screen break walls.",
  },
  {
    slug: "ampify",
    name: "Ampify Battery Studio",
    badge: "macOS Native • v1.6.3 (5.6 MB)",
    href: "/ampify",
    desc: "Smart 80% desk charge hold, Liquid-Wave Apple ecosystem devices & live 0.1 W per-app wattage.",
  },
  {
    slug: "biodata",
    name: "Marriage Biodata Maker",
    badge: "Web Studio • biodata.cogify.me",
    href: "/biodata",
    desc: "242 cultural templates, 9 Indian languages, Vedic Kundali & 300-DPI PDF/DOCX export.",
  },
  {
    slug: "ssb",
    name: "SSB Stage-2 Practice Studio",
    badge: "Web Studio • ssb.cogify.me",
    href: "/ssb",
    desc: "Free SSB Psychology (TAT, WAT, SRT, SDT), GTO & Interview simulator with 100% local privacy.",
  },
  {
    slug: "emdoc",
    name: "EmDoc PDF Workstation",
    badge: "macOS Native • v1.1 (7.8 MB)",
    href: "/emdoc",
    desc: "C++20 & AppKit offline PDF editor, Bates numbering, OCR, and vector compression.",
  },
  {
    slug: "lumenview",
    name: "LumenView",
    badge: "macOS Display Utility",
    href: "/lumenview",
    desc: "Native DDC/CI external monitor brightness, volume, HiDPI scaling & PIP controller.",
  },
  {
    slug: "metricove",
    name: "Metricove",
    badge: "macOS Menu Bar Stats",
    href: "/metricove",
    desc: "Real-time CPU, GPU, memory, disk, network, battery & SMC thermal monitor.",
  },
  {
    slug: "netguard",
    name: "NetGuard",
    badge: "macOS Firewall",
    href: "/netguard",
    desc: "Real-time outbound network firewall, GeoIP world map & per-app rule manager.",
  },
  {
    slug: "klipora",
    name: "Klipora",
    badge: "macOS Clipboard",
    href: "/klipora",
    desc: "Instant clipboard history timeline, smart filters, and reusable snippet manager.",
  },
  {
    slug: "show-free-space",
    name: "Show free space",
    badge: "macOS Disk Analyzer",
    href: "/show-free-space",
    desc: "Interactive sunburst storage visualizer and one-click safe disk space cleaner.",
  },
  {
    slug: "ad-blocker",
    name: "Ad Blocker — For Safari",
    badge: "iOS, iPadOS & macOS",
    href: "/ad-blocker",
    desc: "Native WebKit Content Blocker with 50,000+ rules and zero browsing history access.",
  },
  {
    slug: "readereasy",
    name: "ReaderEasy",
    badge: "Safari Extension",
    href: "/readereasy",
    desc: "Dyslexia-friendly fonts, bionic reading focus guides, and distraction-free article view.",
  },
  {
    slug: "webclear",
    name: "WebClear",
    badge: "Safari Extension",
    href: "/webclear",
    desc: "One-tap per-site cookie, cache, LocalStorage & tracking URL cleaner for Safari.",
  },
  {
    slug: "weblenses",
    name: "WebLenses",
    badge: "Safari Developer Tool",
    href: "/weblenses",
    desc: "6-in-1 Core Web Vitals, SEO, accessibility, security & DOM auditor for Safari.",
  },
  {
    slug: "element-hider",
    name: "Element Hider",
    badge: "Safari Extension",
    href: "/element-hider",
    desc: "Visual DOM element remover with persistent per-domain rules and iCloud sync.",
  },
  {
    slug: "invert",
    name: "Colour Invert",
    badge: "Safari Dark Mode",
    href: "/invert",
    desc: "Smart dark mode engine that preserves images and video media fidelity.",
  },
];

export function AuthorBio({
  currentSlug,
  contextLabel = "Engineered & Maintained by Shubham Sharma",
}: AuthorBioProps) {
  const relatedApps = ECOSYSTEM_LINKS.filter((item) => item.slug !== currentSlug);

  return (
    <section
      aria-label="Author & Engineering Attribution"
      className="max-w-[980px] mx-auto px-5 sm:px-8 py-14 border-t border-black/[0.06] dark:border-white/[0.07]"
    >
      {/* E-E-A-T Author Card */}
      <div className="rounded-[24px] bg-white dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.08] p-6 sm:p-8 mb-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4 sm:gap-5">
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#111] dark:bg-[#0b0b0d] border border-black/10 dark:border-white/10 flex items-center justify-center shrink-0 overflow-hidden">
              <Image
                src="/brand/logo_white.png"
                alt="Shubham Sharma — Founder & Systems Architect at COGIFY"
                width={36}
                height={36}
                className="w-8 h-8 object-contain"
              />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#f5f5f5] dark:bg-white/[0.07] text-[#111] dark:text-[#f5f5f7] text-[11px] font-semibold uppercase tracking-wider">
                  <CheckCircle2 className="w-3 h-3" /> Verified Systems Architect
                </span>
                <span className="text-xs text-[#666] dark:text-[#a1a1aa] font-mono">
                  {contextLabel}
                </span>
              </div>

              <h2 className="text-lg sm:text-xl font-bold text-[#111] dark:text-white">
                <Link href="/about" className="hover:underline">
                  Shubham Sharma
                </Link>{" "}
                <span className="text-sm font-normal text-[#666] dark:text-[#a1a1aa]">
                  — Founder &amp; Lead Systems Architect, COGIFY
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-[#555] dark:text-[#a1a1aa] leading-relaxed mt-2 max-w-3xl">
                Systems engineer specializing in native Apple Silicon software (<code className="text-xs font-mono text-[#111] dark:text-[#e4e4e7]">C++20</code>,{" "}
                <code className="text-xs font-mono text-[#111] dark:text-[#e4e4e7]">Swift 6</code>,{" "}
                <code className="text-xs font-mono text-[#111] dark:text-[#e4e4e7]">AppKit</code>,{" "}
                <code className="text-xs font-mono text-[#111] dark:text-[#e4e4e7]">Safari WebKit Extensions</code>) and real-time client-side web studios (<code className="text-xs font-mono text-[#111] dark:text-[#e4e4e7]">biodata.cogify.me</code> &amp; <code className="text-xs font-mono text-[#111] dark:text-[#e4e4e7]">ssb.cogify.me</code>). Every Cogify application is hand-architected for sub-second startup, deterministic memory bounds, and 100% air-gapped local privacy.
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-4 text-xs font-semibold text-[#111] dark:text-white">
                <a
                  href={siteConfig.appleDeveloperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:underline"
                >
                  <AppleLogoIcon className="w-3.5 h-3.5 -mt-0.5" />
                  Apple Developer ID #1643497398
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://github.com/Shubham-sharma8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#555] dark:text-[#a1a1aa] hover:text-[#111] dark:hover:text-white transition-colors"
                >
                  <GitHubIcon className="w-3.5 h-3.5" />
                  GitHub (@Shubham-sharma8)
                  <ExternalLink className="w-3 h-3" />
                </a>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1 text-[#555] dark:text-[#a1a1aa] hover:text-[#111] dark:hover:text-white transition-colors"
                >
                  About →
                </Link>
                <Link
                  href="/privacy"
                  className="inline-flex items-center gap-1 text-[#555] dark:text-[#a1a1aa] hover:text-[#111] dark:hover:text-white transition-colors"
                >
                  Privacy Spec →
                </Link>
                <Link
                  href="/enterprise"
                  className="inline-flex items-center gap-1 text-[#555] dark:text-[#a1a1aa] hover:text-[#111] dark:hover:text-white transition-colors"
                >
                  Enterprise →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Internal Cross-Linking Mesh */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#777] dark:text-[#888]">
              complete cogify ecosystem
            </p>
            <h2 className="text-lg sm:text-xl font-bold text-[#111] dark:text-white mt-0.5">
              More free native apps &amp; web studios.
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
            <Link
              href="/compare"
              className="text-[#555] dark:text-[#a1a1aa] hover:text-[#111] dark:hover:text-white inline-flex items-center gap-1"
            >
              Benchmarks <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/products"
              className="text-[#111] dark:text-white hover:underline inline-flex items-center gap-1"
            >
              All 22 Products <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {relatedApps.map((app) => (
            <Link
              key={app.slug}
              href={app.href}
              className="group rounded-[18px] bg-white dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.08] hover:border-black/25 dark:hover:border-white/25 p-4 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#f5f5f5] dark:bg-white/[0.06] text-[#666] dark:text-[#a1a1aa]">
                    {app.badge}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#888] group-hover:text-[#111] dark:group-hover:text-white transition-colors shrink-0" />
                </div>
                <h3 className="text-sm font-bold text-[#111] dark:text-white">
                  {app.name}
                </h3>
                <p className="text-xs text-[#666] dark:text-[#a1a1aa] mt-1 line-clamp-2 leading-relaxed">
                  {app.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
