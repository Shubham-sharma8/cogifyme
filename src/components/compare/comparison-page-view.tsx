import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Download,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  HardDrive,
  DollarSign,
  ArrowUpRight,
  Scale,
  Sparkles,
  ChevronRight,
  Lock,
  Terminal,
  Layers,
  Info,
  ExternalLink,
} from "lucide-react";
import { FaqSection } from "@/components/seo/faq-section";
import { AuthorBio } from "@/components/seo/author-bio";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { ComparisonGuide, COMPARISON_GUIDES } from "@/config/comparisons";

interface ComparisonPageViewProps {
  guide: ComparisonGuide;
}

const ACCENT_STYLES = {
  indigo: {
    badge: "bg-indigo-500/10 border-indigo-500/25 text-indigo-700 dark:text-indigo-300",
    button: "bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-500/25",
    bar: "bg-gradient-to-r from-indigo-500 to-cyan-400",
    borderHighlight: "border-indigo-500/40 dark:border-indigo-400/40",
    glow: "from-indigo-500/15 via-cyan-500/5 to-transparent",
    text: "text-indigo-600 dark:text-indigo-400",
  },
  emerald: {
    badge: "bg-emerald-500/10 border-emerald-500/25 text-emerald-700 dark:text-emerald-300",
    button: "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-500/25",
    bar: "bg-gradient-to-r from-emerald-500 to-teal-400",
    borderHighlight: "border-emerald-500/40 dark:border-emerald-400/40",
    glow: "from-emerald-500/15 via-teal-500/5 to-transparent",
    text: "text-emerald-600 dark:text-emerald-400",
  },
  cyan: {
    badge: "bg-cyan-500/10 border-cyan-500/25 text-cyan-700 dark:text-cyan-300",
    button: "bg-cyan-600 hover:bg-cyan-500 text-white shadow-cyan-500/25",
    bar: "bg-gradient-to-r from-cyan-500 to-blue-400",
    borderHighlight: "border-cyan-500/40 dark:border-cyan-400/40",
    glow: "from-cyan-500/15 via-blue-500/5 to-transparent",
    text: "text-cyan-600 dark:text-cyan-400",
  },
  amber: {
    badge: "bg-amber-500/10 border-amber-500/25 text-amber-800 dark:text-amber-300",
    button: "bg-amber-600 hover:bg-amber-500 text-white shadow-amber-500/25",
    bar: "bg-gradient-to-r from-amber-500 to-orange-400",
    borderHighlight: "border-amber-500/40 dark:border-amber-400/40",
    glow: "from-amber-500/15 via-orange-500/5 to-transparent",
    text: "text-amber-600 dark:text-amber-400",
  },
  violet: {
    badge: "bg-violet-500/10 border-violet-500/25 text-violet-700 dark:text-violet-300",
    button: "bg-violet-600 hover:bg-violet-500 text-white shadow-violet-500/25",
    bar: "bg-gradient-to-r from-violet-500 to-fuchsia-400",
    borderHighlight: "border-violet-500/40 dark:border-violet-400/40",
    glow: "from-violet-500/15 via-fuchsia-500/5 to-transparent",
    text: "text-violet-600 dark:text-violet-400",
  },
};

export function ComparisonPageView({ guide }: ComparisonPageViewProps) {
  const accent = ACCENT_STYLES[guide.accentColor] || ACCENT_STYLES.indigo;
  const otherGuides = COMPARISON_GUIDES.filter((g) => g.slug !== guide.slug);

  const maxBinaryMb = Math.max(
    guide.cogifySpec.binarySizeMb,
    ...guide.competitors.map((c) => c.binarySizeMb),
    1
  );
  const maxRamMb = Math.max(
    guide.cogifySpec.ramUsageMb,
    ...guide.competitors.map((c) => c.ramUsageMb),
    1
  );
  const maxCostUsd = Math.max(
    guide.cogifySpec.threeYearCostUsd,
    ...guide.competitors.map((c) => c.threeYearCostUsd),
    20
  );

  const comparisonJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: guide.h1Title,
    description: guide.metaDescription,
    datePublished: "2026-03-01",
    dateModified: "2026-04-19",
    author: {
      "@type": "Person",
      name: "Shubham Sharma",
      url: "https://cogify.me/about",
    },
    publisher: {
      "@type": "Organization",
      name: "COGIFY",
      url: "https://cogify.me",
    },
    mainEntityOfPage: `https://cogify.me/compare/${guide.slug}`,
    about: {
      "@type": "SoftwareApplication",
      name: guide.appName,
      operatingSystem: "macOS 13.0 or later (Apple Silicon & Intel)",
      applicationCategory: "UtilitiesApplication",
      fileSize: guide.cogifySpec.binarySize,
      offers: {
        "@type": "Offer",
        price: "0.00",
        priceCurrency: "USD",
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#060911] text-zinc-900 dark:text-white selection:bg-indigo-500 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonJsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden border-b border-zinc-200/80 dark:border-white/[0.06]">
        <div
          className={`pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b ${accent.glow}`}
          aria-hidden="true"
        />

        <div className="relative max-w-6xl mx-auto px-6">
          {/* Visible Breadcrumb Trail + JSON-LD */}
          <Breadcrumbs
            items={[
              { label: "macOS Comparisons", href: "/compare" },
              {
                label: `${guide.appShortName} vs. Competitors`,
                href: `/compare/${guide.slug}`,
              },
            ]}
            className="mb-6"
          />

          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-bold uppercase tracking-widest mb-5 whitespace-nowrap ${accent.badge}`}
          >
            <Scale className="w-3.5 h-3.5" />
            <span>{guide.heroBadge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-950 dark:text-white leading-[1.12] text-balance max-w-4xl">
            {guide.h1Title}
          </h1>

          <p className="mt-5 text-base sm:text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl text-pretty">
            {guide.subtitle}
          </p>

          {/* Top Action & Quick Spec Bar */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={guide.downloadUrl}
              className={`inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-bold text-sm shadow-lg transition-all active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${accent.button}`}
            >
              <Download className="w-4 h-4" />
              <span>
                {guide.category === "Safari WebKit Suite"
                  ? "Get Free on Apple App Store"
                  : `Download ${guide.appShortName} Free (${guide.cogifySpec.binarySize})`}
              </span>
            </a>

            <Link
              href={guide.appHref}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white dark:bg-white/[0.05] hover:bg-zinc-100 dark:hover:bg-white/[0.1] border border-zinc-200/90 dark:border-white/[0.1] text-zinc-900 dark:text-white font-bold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <span>Inspect {guide.appShortName} Full Specs</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-400" />
            </Link>

            {guide.appStoreUrl && guide.appStoreUrl !== guide.downloadUrl && (
              <a
                href={guide.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-2xl text-xs font-bold text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <span>Mac App Store Verified</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          {/* Executive Verdict Callout Box */}
          <div
            className={`mt-10 rounded-3xl bg-white dark:bg-[#0b0f19] border-2 ${accent.borderHighlight} p-6 sm:p-8 shadow-sm`}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 mb-5 border-b border-zinc-200/80 dark:border-white/[0.07]">
              <div className="flex items-center gap-3.5">
                <Image
                  src={guide.appIcon}
                  alt={`${guide.appName} macOS icon`}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-xl object-contain shrink-0"
                />
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 block">
                    60-Second Engineering Verdict
                  </span>
                  <h2 className="text-lg sm:text-xl font-extrabold text-zinc-950 dark:text-white">
                    Why {guide.appShortName} Leads on Apple Silicon
                  </h2>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 tabular-nums">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-bold whitespace-nowrap">
                  <DollarSign className="w-3.5 h-3.5" /> {guide.cogifySpec.price}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-100 dark:bg-white/[0.06] text-zinc-800 dark:text-zinc-200 text-xs font-mono font-semibold whitespace-nowrap">
                  <HardDrive className="w-3.5 h-3.5 text-indigo-500" /> {guide.cogifySpec.binarySize}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-100 dark:bg-white/[0.06] text-zinc-800 dark:text-zinc-200 text-xs font-mono font-semibold whitespace-nowrap">
                  <Cpu className="w-3.5 h-3.5 text-cyan-500" /> {guide.cogifySpec.ramUsage}
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {guide.verdictSummary}
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Visual Resource & Cost Benchmark Bars (UI/UX Pro Max Data Viz) */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-b border-zinc-200/80 dark:border-white/[0.06]">
        <div className="mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            <Cpu className="w-3.5 h-3.5" /> Empirical Telemetry Benchmarks
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white mt-1">
            Resource Footprint &amp; 3-Year Cost Comparison
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-1.5 max-w-2xl">
            Measured on macOS Sequoia (Apple Silicon M-Series). Lower bars indicate smaller disk bloat, lower RAM footprint, and lower subscription cost.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 tabular-nums">
          {/* Card 1: Binary Size */}
          <div className="rounded-3xl bg-white dark:bg-[#0b0f17] border border-zinc-200/90 dark:border-white/[0.08] p-6 shadow-xs">
            <div className="flex items-center justify-between gap-2 mb-5">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
                  Disk Footprint
                </span>
                <h3 className="text-base font-extrabold text-zinc-950 dark:text-white">
                  Installer / App Size (MB)
                </h3>
              </div>
              <HardDrive className="w-5 h-5 text-indigo-500 shrink-0" />
            </div>

            <div className="space-y-4">
              {/* Cogify Bar */}
              <div>
                <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                  <span className="text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> {guide.appShortName} (Cogify)
                  </span>
                  <span className="font-mono text-zinc-950 dark:text-white">
                    {guide.cogifySpec.binarySize}
                  </span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-zinc-100 dark:bg-white/[0.06] overflow-hidden">
                  <div
                    className={`h-full rounded-full ${accent.bar}`}
                    style={{
                      width: `${Math.max((guide.cogifySpec.binarySizeMb / maxBinaryMb) * 100, 5)}%`,
                    }}
                  />
                </div>
              </div>

              {/* Competitors */}
              {guide.competitors.map((comp) => (
                <div key={comp.name}>
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-medium text-zinc-600 dark:text-zinc-400">{comp.name}</span>
                    <span className="font-mono text-zinc-700 dark:text-zinc-300">
                      {comp.binarySize}
                    </span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-zinc-100 dark:bg-white/[0.06] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-zinc-400 dark:bg-zinc-600"
                      style={{
                        width: `${Math.max((comp.binarySizeMb / maxBinaryMb) * 100, 6)}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Baseline RAM */}
          <div className="rounded-3xl bg-white dark:bg-[#0b0f17] border border-zinc-200/90 dark:border-white/[0.08] p-6 shadow-xs">
            <div className="flex items-center justify-between gap-2 mb-5">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
                  Unified Memory Pressure
                </span>
                <h3 className="text-base font-extrabold text-zinc-950 dark:text-white">
                  Active RAM Footprint (MB)
                </h3>
              </div>
              <Cpu className="w-5 h-5 text-emerald-500 shrink-0" />
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                  <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> {guide.appShortName} (Cogify)
                  </span>
                  <span className="font-mono text-zinc-950 dark:text-white">
                    {guide.cogifySpec.ramUsage}
                  </span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-zinc-100 dark:bg-white/[0.06] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400"
                    style={{
                      width: `${Math.max((guide.cogifySpec.ramUsageMb / maxRamMb) * 100, 5)}%`,
                    }}
                  />
                </div>
              </div>

              {guide.competitors.map((comp) => (
                <div key={comp.name}>
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-medium text-zinc-600 dark:text-zinc-400">{comp.name}</span>
                    <span className="font-mono text-zinc-700 dark:text-zinc-300">
                      {comp.ramUsage}
                    </span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-zinc-100 dark:bg-white/[0.06] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-zinc-400 dark:bg-zinc-600"
                      style={{
                        width: `${Math.max((comp.ramUsageMb / maxRamMb) * 100, 6)}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: 3-Year Cost */}
          <div className="rounded-3xl bg-white dark:bg-[#0b0f17] border border-zinc-200/90 dark:border-white/[0.08] p-6 shadow-xs">
            <div className="flex items-center justify-between gap-2 mb-5">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
                  Total Cost of Ownership
                </span>
                <h3 className="text-base font-extrabold text-zinc-950 dark:text-white">
                  3-Year License Cost ($ USD)
                </h3>
              </div>
              <DollarSign className="w-5 h-5 text-amber-500 shrink-0" />
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                  <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> {guide.appShortName} (Cogify)
                  </span>
                  <span className="font-mono text-emerald-600 dark:text-emerald-400 font-extrabold">
                    $0.00 Forever
                  </span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-zinc-100 dark:bg-white/[0.06] overflow-hidden">
                  <div className="h-full rounded-full bg-emerald-500" style={{ width: "4%" }} />
                </div>
              </div>

              {guide.competitors.map((comp) => (
                <div key={comp.name}>
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-medium text-zinc-600 dark:text-zinc-400">{comp.name}</span>
                    <span className="font-mono text-zinc-700 dark:text-zinc-300">{comp.price}</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-zinc-100 dark:bg-white/[0.06] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-rose-500/80 dark:bg-rose-500/70"
                      style={{
                        width: `${
                          comp.threeYearCostUsd === 0
                            ? 4
                            : Math.max((comp.threeYearCostUsd / maxCostUsd) * 100, 12)
                        }%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Full Feature & Architecture Matrix Table */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-b border-zinc-200/80 dark:border-white/[0.06]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              <Layers className="w-3.5 h-3.5" /> Head-to-Head Specification Matrix
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white mt-1">
              {guide.appShortName} vs. {guide.competitors[0].name}, {guide.competitors[1].name} &amp;{" "}
              {guide.competitors[2].name}
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 whitespace-nowrap">
            Swipe horizontally on mobile →
          </span>
        </div>

        <div className="rounded-3xl bg-white dark:bg-[#0b0f17] border border-zinc-200/90 dark:border-white/[0.08] shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[760px] tabular-nums">
              <thead>
                <tr className="border-b border-zinc-200/90 dark:border-white/[0.08] bg-zinc-50/80 dark:bg-white/[0.02]">
                  <th className="py-4 px-5 text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 w-[28%]">
                    Capability / Architecture
                  </th>
                  <th className="py-4 px-5 text-sm font-black text-indigo-600 dark:text-indigo-400 bg-indigo-500/[0.05] dark:bg-indigo-500/[0.08] border-x border-indigo-500/20 w-[24%]">
                    <div className="flex items-center gap-2">
                      <Image
                        src={guide.appIcon}
                        alt={guide.appShortName}
                        width={22}
                        height={22}
                        className="w-5.5 h-5.5 rounded-md object-contain"
                      />
                      <span>{guide.appShortName}</span>
                      <span className="ml-auto px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 whitespace-nowrap">
                        FREE
                      </span>
                    </div>
                  </th>
                  <th className="py-4 px-5 text-xs font-bold text-zinc-800 dark:text-zinc-200 w-[16%]">
                    {guide.competitors[0].name}
                  </th>
                  <th className="py-4 px-5 text-xs font-bold text-zinc-800 dark:text-zinc-200 w-[16%]">
                    {guide.competitors[1].name}
                  </th>
                  <th className="py-4 px-5 text-xs font-bold text-zinc-800 dark:text-zinc-200 w-[16%]">
                    {guide.competitors[2].name}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200/70 dark:divide-white/[0.06] text-xs sm:text-sm">
                {/* Architecture Row */}
                <tr className="hover:bg-zinc-50/70 dark:hover:bg-white/[0.015] transition-colors">
                  <td className="py-4 px-5 font-bold text-zinc-900 dark:text-white">
                    Core Engine &amp; Stack
                  </td>
                  <td className="py-4 px-5 font-bold text-zinc-950 dark:text-white bg-indigo-500/[0.04] dark:bg-indigo-500/[0.06] border-x border-indigo-500/15">
                    {guide.cogifySpec.architecture}
                  </td>
                  <td className="py-4 px-5 text-zinc-600 dark:text-zinc-400">
                    {guide.competitors[0].architecture}
                  </td>
                  <td className="py-4 px-5 text-zinc-600 dark:text-zinc-400">
                    {guide.competitors[1].architecture}
                  </td>
                  <td className="py-4 px-5 text-zinc-600 dark:text-zinc-400">
                    {guide.competitors[2].architecture}
                  </td>
                </tr>

                {/* Dynamic Feature Rows */}
                {guide.featureMatrix.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-zinc-50/70 dark:hover:bg-white/[0.015] transition-colors"
                  >
                    <td className="py-4 px-5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 block mb-0.5">
                        {row.category}
                      </span>
                      <span className="font-bold text-zinc-900 dark:text-white">{row.feature}</span>
                    </td>
                    <td className="py-4 px-5 font-bold text-zinc-950 dark:text-white bg-indigo-500/[0.04] dark:bg-indigo-500/[0.06] border-x border-indigo-500/15">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{row.cogify}</span>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-zinc-600 dark:text-zinc-400">{row.comp1}</td>
                    <td className="py-4 px-5 text-zinc-600 dark:text-zinc-400">{row.comp2}</td>
                    <td className="py-4 px-5 text-zinc-600 dark:text-zinc-400">{row.comp3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 3: Honest Buyer Guidance (When to Choose Cogify vs Competitors) */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-b border-zinc-200/80 dark:border-white/[0.06]">
        <div className="mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" /> Transparent Engineering Recommendation
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white mt-1">
            Which macOS Tool Should You Actually Install?
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-1.5 max-w-2xl">
            We believe in honest technical comparisons. Here is exactly when {guide.appShortName} is your best fit—and when a competitor might serve a niche workflow better.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Choose Cogify Column */}
          <div
            className={`lg:col-span-7 rounded-3xl bg-white dark:bg-[#0b0f17] border-2 ${accent.borderHighlight} p-6 sm:p-8 shadow-sm flex flex-col justify-between`}
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
                <CheckCircle2 className="w-3.5 h-3.5" /> Recommended for 95% of Mac Users
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-950 dark:text-white mb-5">
                Choose {guide.appName} if:
              </h3>

              <ul className="space-y-4">
                {guide.whenToChooseCogify.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-200/80 dark:border-white/[0.07] flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                Apple Developer ID Notarized • macOS 13+ Universal
              </div>
              <a
                href={guide.downloadUrl}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs shadow-md transition-all ${accent.button}`}
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download {guide.appShortName} ($0)</span>
              </a>
            </div>
          </div>

          {/* Choose Competitors Column */}
          <div className="lg:col-span-5 rounded-3xl bg-white dark:bg-[#0b0f17] border border-zinc-200/90 dark:border-white/[0.08] p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-white/[0.06] text-zinc-700 dark:text-zinc-300 text-xs font-bold uppercase tracking-wider mb-4">
                <Info className="w-3.5 h-3.5" /> Niche &amp; Enterprise Edge Cases
              </div>
              <h3 className="text-xl font-extrabold text-zinc-950 dark:text-white mb-5">
                When to Consider Alternatives:
              </h3>

              <div className="space-y-5">
                {guide.whenToChooseCompetitors.map((item) => (
                  <div
                    key={item.competitorName}
                    className="rounded-2xl bg-zinc-50 dark:bg-white/[0.03] border border-zinc-200/70 dark:border-white/[0.06] p-4"
                  >
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white mb-1">
                      {item.competitorName}
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {item.reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-6 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Because {guide.appShortName} is {guide.cogifySpec.binarySize} and installs zero background daemons, you can safely keep it alongside any existing tool on your Mac.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Systems Architecture Deep Dive + Native Screenshot */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-b border-zinc-200/80 dark:border-white/[0.06]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Terminal className="w-3.5 h-3.5" /> Under the Hood • Systems Engineering
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-tight">
              {guide.architecturalDeepDive.title}
            </h2>

            <div className="mt-4 space-y-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {guide.architecturalDeepDive.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 tabular-nums">
              <div className="rounded-2xl bg-white dark:bg-[#0b0f17] border border-zinc-200/80 dark:border-white/[0.07] p-3.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block">
                  Cold Launch
                </span>
                <span className="text-sm font-extrabold font-mono text-zinc-950 dark:text-white mt-0.5 block">
                  {guide.cogifySpec.startupTime}
                </span>
              </div>
              <div className="rounded-2xl bg-white dark:bg-[#0b0f17] border border-zinc-200/80 dark:border-white/[0.07] p-3.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block">
                  Telemetry SDKs
                </span>
                <span className="text-sm font-extrabold font-mono text-emerald-600 dark:text-emerald-400 mt-0.5 block">
                  0 Bytes
                </span>
              </div>
              <div className="rounded-2xl bg-white dark:bg-[#0b0f17] border border-zinc-200/80 dark:border-white/[0.07] p-3.5 col-span-2 sm:col-span-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block">
                  Code Signature
                </span>
                <span className="text-sm font-extrabold font-mono text-zinc-950 dark:text-white mt-0.5 block">
                  Apple ID #1643497398
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-zinc-950 border border-white/10 p-3 shadow-2xl overflow-hidden">
              <Image
                src={guide.appScreenshot}
                alt={`${guide.appName} native macOS interface screenshot`}
                width={1200}
                height={780}
                className="w-full h-auto rounded-2xl object-cover"
              />
              <div className="mt-3 px-2 flex items-center justify-between text-xs text-zinc-400">
                <span className="font-semibold text-zinc-200">{guide.appName}</span>
                <Link
                  href={guide.appHref}
                  className="text-indigo-400 hover:text-indigo-300 font-bold inline-flex items-center gap-1"
                >
                  Open Product Page <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Explore Other Cogify Comparison Guides */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              <Sparkles className="w-3.5 h-3.5" /> Complete Benchmark Series
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white mt-1">
              More macOS Utility Comparisons
            </h2>
          </div>
          <Link
            href="/compare"
            className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1"
          >
            View All Comparison Guides &amp; Savings Calculator <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherGuides.map((item) => (
            <Link
              key={item.slug}
              href={`/compare/${item.slug}`}
              className="group rounded-2xl bg-white dark:bg-[#0b0f17] border border-zinc-200/90 dark:border-white/[0.08] hover:border-indigo-500/40 dark:hover:border-indigo-400/40 p-5 transition-all flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    <Image
                      src={item.appIcon}
                      alt={item.appShortName}
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-lg object-contain"
                    />
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-white/[0.06] text-zinc-700 dark:text-zinc-300">
                      {item.category}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-indigo-500 transition-colors shrink-0" />
                </div>

                <h3 className="text-base font-extrabold text-zinc-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
                  {item.h1Title}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                  {item.subtitle}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-zinc-500 dark:text-zinc-400 tabular-nums">
                <span>{item.cogifySpec.binarySize}</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                  {item.cogifySpec.price}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Section 6: Technical & Product FAQs */}
      <FaqSection
        badge={`${guide.appShortName} Comparison FAQ`}
        title={`Frequently Asked Questions: ${guide.appShortName} vs. Competitors`}
        subtitle="Direct architectural answers on licensing, memory efficiency, Apple Silicon support, and zero-telemetry privacy."
        faqs={guide.faqs}
      />

      {/* Section 7: E-E-A-T Author Bio & Ecosystem Mesh */}
      <AuthorBio
        currentSlug={guide.appSlug}
        contextLabel={`Benchmarked & Engineered by Shubham Sharma`}
      />
    </div>
  );
}
