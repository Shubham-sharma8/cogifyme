import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Terminal, ExternalLink, Sparkles, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";

interface AuthorBioProps {
  currentSlug?: string;
  contextLabel?: string;
}

const ECOSYSTEM_LINKS = [
  {
    slug: "biodata",
    name: "Marriage Biodata Maker",
    badge: "Web Studio • biodata.cogify.me",
    href: "/biodata",
    desc: "242 cultural templates, 9 Indian languages, Vedic Kundali & 300-DPI PDF/DOCX export.",
  },
  {
    slug: "emdoc",
    name: "EmDoc PDF Workstation",
    badge: "macOS Native • 5.0 MB",
    href: "/products/emdoc",
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
    desc: "Point-and-click element zapper, cookie banner bypass, and persistent site rules.",
  },
  {
    slug: "weblenses",
    name: "WebLenses",
    badge: "Safari Accessibility",
    href: "/weblenses",
    desc: "Precision color-blindness filters, blue-light shield, and custom contrast lenses.",
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
      className="max-w-6xl mx-auto px-6 py-14 border-t border-zinc-200/80 dark:border-white/[0.06]"
    >
      {/* E-E-A-T Author Card */}
      <div className="rounded-3xl bg-white dark:bg-[#0b0f17] border border-zinc-200/90 dark:border-white/[0.08] p-6 sm:p-8 shadow-sm mb-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4 sm:gap-5">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-zinc-950 dark:bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 shadow-md overflow-hidden">
              <Image
                src="/brand/logo_white.png"
                alt="Shubham Sharma — Founder & Systems Architect at COGIFY"
                width={44}
                height={44}
                className="w-10 h-10 object-contain"
              />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-[11px] font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-3 h-3" /> Verified Systems Architect
                </span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                  {contextLabel}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-extrabold text-zinc-950 dark:text-white">
                <Link href="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Shubham Sharma
                </Link>{" "}
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  — Founder &amp; Lead Systems Architect, COGIFY
                </span>
              </h3>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mt-2 max-w-3xl">
                Systems engineer specializing in native Apple Silicon software (<code className="text-xs font-mono text-zinc-800 dark:text-zinc-200">C++20</code>,{" "}
                <code className="text-xs font-mono text-zinc-800 dark:text-zinc-200">Swift 6</code>,{" "}
                <code className="text-xs font-mono text-zinc-800 dark:text-zinc-200">AppKit</code>,{" "}
                <code className="text-xs font-mono text-zinc-800 dark:text-zinc-200">Safari WebKit Extensions</code>) and real-time client-side web studios (<code className="text-xs font-mono text-zinc-800 dark:text-zinc-200">biodata.cogify.me</code>). Every Cogify application is hand-architected for sub-second startup, deterministic memory bounds, and 100% air-gapped local privacy with zero third-party telemetry SDKs.
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-4 text-xs font-semibold">
                <a
                  href={siteConfig.appleDeveloperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Apple Developer ID #1643497398
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://github.com/Shubham-sharma8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <Terminal className="w-3.5 h-3.5" />
                  GitHub (@Shubham-sharma8)
                  <ExternalLink className="w-3 h-3" />
                </a>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1 text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Engineering Manifesto &amp; Timeline →
                </Link>
                <Link
                  href="/privacy"
                  className="inline-flex items-center gap-1 text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Zero-Telemetry Privacy Spec →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Internal Cross-Linking Mesh to Eliminate Orphan Pages */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              <Sparkles className="w-3.5 h-3.5" /> Complete Cogify Ecosystem
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-zinc-950 dark:text-white mt-0.5">
              Explore More Free Native Apple Apps &amp; Real-Time Web Studios
            </h3>
          </div>
          <Link
            href="/products"
            className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1"
          >
            View All 13 Products &amp; Specs <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {relatedApps.slice(0, 8).map((app) => (
            <Link
              key={app.slug}
              href={app.href}
              className="group rounded-2xl bg-white dark:bg-[#0b0f17] border border-zinc-200/80 dark:border-white/[0.07] hover:border-indigo-500/40 dark:hover:border-indigo-500/40 p-4 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-white/[0.06] text-zinc-600 dark:text-zinc-400">
                    {app.badge}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-indigo-500 transition-colors shrink-0" />
                </div>
                <h4 className="text-sm font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {app.name}
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
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
