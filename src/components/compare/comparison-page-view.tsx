import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Download,
  CheckCircle2,
  Cpu,
  HardDrive,
  DollarSign,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";
import { FaqSection } from "@/components/seo/faq-section";
import { AuthorBio } from "@/components/seo/author-bio";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { ComparisonGuide, COMPARISON_GUIDES } from "@/config/comparisons";

interface ComparisonPageViewProps {
  guide: ComparisonGuide;
}

export function ComparisonPageView({ guide }: ComparisonPageViewProps) {
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
    image: [
      `https://cogify.me${guide.appScreenshot}`,
      `https://cogify.me${guide.appIcon}`,
    ],
    datePublished: "2026-03-01",
    dateModified: "2026-11-06",
    author: {
      "@type": "Person",
      "@id": "https://cogify.me/#founder",
      name: "Shubham Sharma",
      url: "https://cogify.me/about",
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://cogify.me/#organization",
      name: "COGIFY",
      url: "https://cogify.me",
    },
    mainEntityOfPage: `https://cogify.me/compare/${guide.slug}`,
    about: {
      "@type": "SoftwareApplication",
      name: guide.appName,
      url: `https://cogify.me${guide.appHref}`,
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
    <div className="min-h-screen bg-[#f5f5f5] dark:bg-[#0b0b0d] text-black dark:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonJsonLd) }}
      />

      {/* Hero Section */}
      <section className="pt-28 pb-14 sm:pt-36 sm:pb-16 border-b border-black/[0.07] dark:border-white/[0.08]">
        <div className="max-w-[920px] mx-auto px-6">
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

          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-black/45 dark:text-white/45 mb-3">
            {guide.heroBadge}
          </p>

          <h1 className="text-[32px] sm:text-[48px] font-semibold tracking-[-0.035em] text-black dark:text-white leading-[1.1] max-w-3xl">
            {guide.h1Title}
          </h1>

          <p className="mt-4 text-[16px] sm:text-[18px] text-black/60 dark:text-white/60 leading-[1.6] max-w-2xl">
            {guide.subtitle}
          </p>

          {/* Top Action & Quick Spec Bar */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={guide.downloadUrl}
              className="helumi-pill px-6 py-3 text-[13px] font-medium inline-flex items-center gap-2"
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
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/[0.1] hover:border-black/25 dark:hover:border-white/25 text-black dark:text-white font-medium text-[13px] transition-colors"
            >
              <span>Inspect {guide.appShortName} Full Specs</span>
              <ArrowUpRight className="w-4 h-4 text-black/45 dark:text-white/45" />
            </Link>

            {guide.appStoreUrl && guide.appStoreUrl !== guide.downloadUrl && (
              <a
                href={guide.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 text-[12px] font-medium text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
              >
                <span>Mac App Store Verified</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          {/* Executive Verdict Callout Box */}
          <div className="mt-10 rounded-[24px] bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/[0.09] p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 mb-5 border-b border-black/[0.07] dark:border-white/[0.08]">
              <div className="flex items-center gap-3.5">
                <Image
                  src={guide.appIcon}
                  alt={`${guide.appName} macOS icon`}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-xl object-contain shrink-0"
                />
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-400 block">
                    60-Second Engineering Verdict
                  </span>
                  <h2 className="text-[18px] sm:text-[20px] font-semibold text-black dark:text-white">
                    Why {guide.appShortName} leads on Apple Silicon
                  </h2>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 tabular-nums">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-[12px] font-medium whitespace-nowrap">
                  <DollarSign className="w-3.5 h-3.5" /> {guide.cogifySpec.price}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f5f5f5] dark:bg-white/[0.06] text-black/80 dark:text-white/80 text-[12px] font-mono whitespace-nowrap">
                  <HardDrive className="w-3.5 h-3.5" /> {guide.cogifySpec.binarySize}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f5f5f5] dark:bg-white/[0.06] text-black/80 dark:text-white/80 text-[12px] font-mono whitespace-nowrap">
                  <Cpu className="w-3.5 h-3.5" /> {guide.cogifySpec.ramUsage}
                </span>
              </div>
            </div>

            <p className="text-[14px] sm:text-[15px] text-black/70 dark:text-white/70 leading-relaxed">
              {guide.verdictSummary}
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Visual Resource & Cost Benchmark Bars */}
      <section className="max-w-[920px] mx-auto px-6 py-14 border-b border-black/[0.07] dark:border-white/[0.08]">
        <div className="mb-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-black/45 dark:text-white/45 mb-1">
            Empirical Telemetry Benchmarks
          </p>
          <h2 className="text-[24px] sm:text-[30px] font-semibold tracking-[-0.025em] text-black dark:text-white">
            Resource Footprint &amp; 3-Year Cost Comparison
          </h2>
          <p className="text-[14px] text-black/60 dark:text-white/60 mt-1 max-w-2xl">
            Measured on macOS Sequoia (Apple Silicon M-Series). Lower bars indicate smaller disk footprint, lower RAM usage, and lower cost.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 tabular-nums">
          {/* Card 1: Binary Size */}
          <div className="rounded-[22px] bg-white dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.08] p-6">
            <div className="flex items-center justify-between gap-2 mb-5">
              <div>
                <span className="text-[11px] font-medium uppercase tracking-wider text-black/45 dark:text-white/45 block">
                  Disk Footprint
                </span>
                <h3 className="text-[15px] font-semibold text-black dark:text-white">
                  Installer / App Size
                </h3>
              </div>
              <HardDrive className="w-4 h-4 text-black/45 dark:text-white/45 shrink-0" />
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between text-[12px] font-semibold mb-1.5">
                  <span className="text-black dark:text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />{" "}
                    {guide.appShortName}
                  </span>
                  <span className="font-mono text-black dark:text-white">
                    {guide.cogifySpec.binarySize}
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#f5f5f5] dark:bg-white/[0.06] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-black dark:bg-white"
                    style={{
                      width: `${Math.max((guide.cogifySpec.binarySizeMb / maxBinaryMb) * 100, 5)}%`,
                    }}
                  />
                </div>
              </div>

              {guide.competitors.map((comp) => (
                <div key={comp.name}>
                  <div className="flex items-center justify-between text-[12px] mb-1.5">
                    <span className="text-black/60 dark:text-white/60">{comp.name}</span>
                    <span className="font-mono text-black/65 dark:text-white/65">
                      {comp.binarySize}
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#f5f5f5] dark:bg-white/[0.06] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-black/25 dark:bg-white/25"
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
          <div className="rounded-[22px] bg-white dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.08] p-6">
            <div className="flex items-center justify-between gap-2 mb-5">
              <div>
                <span className="text-[11px] font-medium uppercase tracking-wider text-black/45 dark:text-white/45 block">
                  Unified Memory
                </span>
                <h3 className="text-[15px] font-semibold text-black dark:text-white">
                  Active RAM Footprint
                </h3>
              </div>
              <Cpu className="w-4 h-4 text-black/45 dark:text-white/45 shrink-0" />
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between text-[12px] font-semibold mb-1.5">
                  <span className="text-black dark:text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />{" "}
                    {guide.appShortName}
                  </span>
                  <span className="font-mono text-black dark:text-white">
                    {guide.cogifySpec.ramUsage}
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#f5f5f5] dark:bg-white/[0.06] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-black dark:bg-white"
                    style={{
                      width: `${Math.max((guide.cogifySpec.ramUsageMb / maxRamMb) * 100, 5)}%`,
                    }}
                  />
                </div>
              </div>

              {guide.competitors.map((comp) => (
                <div key={comp.name}>
                  <div className="flex items-center justify-between text-[12px] mb-1.5">
                    <span className="text-black/60 dark:text-white/60">{comp.name}</span>
                    <span className="font-mono text-black/65 dark:text-white/65">
                      {comp.ramUsage}
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#f5f5f5] dark:bg-white/[0.06] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-black/25 dark:bg-white/25"
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
          <div className="rounded-[22px] bg-white dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.08] p-6">
            <div className="flex items-center justify-between gap-2 mb-5">
              <div>
                <span className="text-[11px] font-medium uppercase tracking-wider text-black/45 dark:text-white/45 block">
                  Total Cost of Ownership
                </span>
                <h3 className="text-[15px] font-semibold text-black dark:text-white">
                  3-Year License Cost
                </h3>
              </div>
              <DollarSign className="w-4 h-4 text-black/45 dark:text-white/45 shrink-0" />
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between text-[12px] font-semibold mb-1.5">
                  <span className="text-black dark:text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />{" "}
                    {guide.appShortName}
                  </span>
                  <span className="font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
                    $0.00 Forever
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#f5f5f5] dark:bg-white/[0.06] overflow-hidden">
                  <div className="h-full rounded-full bg-emerald-500" style={{ width: "4%" }} />
                </div>
              </div>

              {guide.competitors.map((comp) => (
                <div key={comp.name}>
                  <div className="flex items-center justify-between text-[12px] mb-1.5">
                    <span className="text-black/60 dark:text-white/60">{comp.name}</span>
                    <span className="font-mono text-black/65 dark:text-white/65">{comp.price}</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#f5f5f5] dark:bg-white/[0.06] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-black/25 dark:bg-white/25"
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
      <section className="max-w-[920px] mx-auto px-6 py-14 border-b border-black/[0.07] dark:border-white/[0.08]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-black/45 dark:text-white/45 mb-1">
              Specification Matrix
            </p>
            <h2 className="text-[24px] sm:text-[30px] font-semibold tracking-[-0.025em] text-black dark:text-white">
              {guide.appShortName} vs. {guide.competitors[0].name}, {guide.competitors[1].name} &amp;{" "}
              {guide.competitors[2].name}
            </h2>
          </div>
        </div>

        <div className="rounded-[24px] bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/[0.09] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[720px] tabular-nums">
              <thead>
                <tr className="border-b border-black/[0.07] dark:border-white/[0.08] bg-[#f5f5f5]/60 dark:bg-white/[0.02]">
                  <th className="py-4 px-5 text-[11px] font-semibold uppercase tracking-wider text-black/50 dark:text-white/50 w-[28%]">
                    Capability / Architecture
                  </th>
                  <th className="py-4 px-5 text-[13px] font-semibold text-black dark:text-white bg-black/[0.03] dark:bg-white/[0.04] border-x border-black/[0.07] dark:border-white/[0.08] w-[24%]">
                    <div className="flex items-center gap-2">
                      <Image
                        src={guide.appIcon}
                        alt={guide.appShortName}
                        width={20}
                        height={20}
                        className="w-5 h-5 rounded-md object-contain"
                      />
                      <span>{guide.appShortName}</span>
                      <span className="ml-auto px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/15 text-emerald-700 dark:text-emerald-300">
                        FREE
                      </span>
                    </div>
                  </th>
                  <th className="py-4 px-5 text-[12px] font-semibold text-black/75 dark:text-white/75 w-[16%]">
                    {guide.competitors[0].name}
                  </th>
                  <th className="py-4 px-5 text-[12px] font-semibold text-black/75 dark:text-white/75 w-[16%]">
                    {guide.competitors[1].name}
                  </th>
                  <th className="py-4 px-5 text-[12px] font-semibold text-black/75 dark:text-white/75 w-[16%]">
                    {guide.competitors[2].name}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/[0.06] dark:divide-white/[0.06] text-[13px]">
                <tr>
                  <td className="py-4 px-5 font-semibold text-black dark:text-white">
                    Core Engine &amp; Stack
                  </td>
                  <td className="py-4 px-5 font-semibold text-black dark:text-white bg-black/[0.02] dark:bg-white/[0.03] border-x border-black/[0.06] dark:border-white/[0.07]">
                    {guide.cogifySpec.architecture}
                  </td>
                  <td className="py-4 px-5 text-black/60 dark:text-white/60">
                    {guide.competitors[0].architecture}
                  </td>
                  <td className="py-4 px-5 text-black/60 dark:text-white/60">
                    {guide.competitors[1].architecture}
                  </td>
                  <td className="py-4 px-5 text-black/60 dark:text-white/60">
                    {guide.competitors[2].architecture}
                  </td>
                </tr>

                {guide.featureMatrix.map((row, idx) => (
                  <tr key={idx}>
                    <td className="py-4 px-5">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-black/40 dark:text-white/40 block mb-0.5">
                        {row.category}
                      </span>
                      <span className="font-semibold text-black dark:text-white">{row.feature}</span>
                    </td>
                    <td className="py-4 px-5 font-medium text-black dark:text-white bg-black/[0.02] dark:bg-white/[0.03] border-x border-black/[0.06] dark:border-white/[0.07]">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{row.cogify}</span>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-black/60 dark:text-white/60">{row.comp1}</td>
                    <td className="py-4 px-5 text-black/60 dark:text-white/60">{row.comp2}</td>
                    <td className="py-4 px-5 text-black/60 dark:text-white/60">{row.comp3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 3: Honest Buyer Guidance */}
      <section className="max-w-[920px] mx-auto px-6 py-14 border-b border-black/[0.07] dark:border-white/[0.08]">
        <div className="mb-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-black/45 dark:text-white/45 mb-1">
            Transparent Recommendation
          </p>
          <h2 className="text-[24px] sm:text-[30px] font-semibold tracking-[-0.025em] text-black dark:text-white">
            Which macOS tool should you install?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="lg:col-span-7 rounded-[24px] bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/[0.09] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[11px] font-semibold uppercase tracking-wider mb-4">
                <CheckCircle2 className="w-3.5 h-3.5" /> Recommended for 95% of Mac Users
              </span>
              <h3 className="text-[20px] font-semibold text-black dark:text-white mb-4">
                Choose {guide.appName} if:
              </h3>

              <ul className="space-y-3.5">
                {guide.whenToChooseCogify.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-[14px] text-black/70 dark:text-white/70 leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7 pt-5 border-t border-black/[0.07] dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
              <div className="text-[11px] text-black/45 dark:text-white/45 font-mono">
                Apple Developer ID Notarized · macOS 13+ Universal
              </div>
              <a
                href={guide.downloadUrl}
                className="helumi-pill px-5 py-2.5 text-[12px] font-medium inline-flex items-center gap-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download {guide.appShortName} ($0)</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-[24px] bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/[0.09] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f5f5f5] dark:bg-white/[0.06] text-black/65 dark:text-white/65 text-[11px] font-semibold uppercase tracking-wider mb-4">
                Niche Edge Cases
              </span>
              <h3 className="text-[18px] font-semibold text-black dark:text-white mb-4">
                When to consider alternatives:
              </h3>

              <div className="space-y-3.5">
                {guide.whenToChooseCompetitors.map((item) => (
                  <div
                    key={item.competitorName}
                    className="rounded-[16px] bg-[#f5f5f5] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] p-4"
                  >
                    <h4 className="text-[13px] font-semibold text-black dark:text-white mb-1">
                      {item.competitorName}
                    </h4>
                    <p className="text-[12px] text-black/60 dark:text-white/60 leading-relaxed">
                      {item.reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Systems Architecture Deep Dive */}
      <section className="max-w-[920px] mx-auto px-6 py-14 border-b border-black/[0.07] dark:border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-black/45 dark:text-white/45 mb-2">
              Under the Hood · Systems Engineering
            </p>
            <h2 className="text-[22px] sm:text-[26px] font-semibold tracking-[-0.02em] text-black dark:text-white leading-snug">
              {guide.architecturalDeepDive.title}
            </h2>

            <div className="mt-4 space-y-3.5 text-[14px] text-black/65 dark:text-white/65 leading-relaxed">
              {guide.architecturalDeepDive.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-[22px] bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/[0.09] p-3 shadow-sm overflow-hidden">
              <Image
                src={guide.appScreenshot}
                alt={`${guide.appName} native macOS interface screenshot`}
                width={1200}
                height={780}
                className="w-full h-auto rounded-[16px] object-cover"
              />
              <div className="mt-3 px-2 flex items-center justify-between text-[12px] text-black/55 dark:text-white/55">
                <span className="font-medium text-black dark:text-white">{guide.appName}</span>
                <Link
                  href={guide.appHref}
                  className="text-black dark:text-white hover:underline font-medium inline-flex items-center gap-1"
                >
                  Open Product Page <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Explore Other Cogify Comparison Guides */}
      <section className="max-w-[920px] mx-auto px-6 py-14">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-black/45 dark:text-white/45 mb-1">
              Complete Benchmark Series
            </p>
            <h2 className="text-[22px] sm:text-[26px] font-semibold tracking-[-0.02em] text-black dark:text-white">
              More macOS Utility Comparisons
            </h2>
          </div>
          <Link
            href="/compare"
            className="text-[12px] font-medium text-black/65 dark:text-white/65 hover:text-black dark:hover:text-white inline-flex items-center gap-1"
          >
            All Comparison Guides <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {otherGuides.map((item) => (
            <Link
              key={item.slug}
              href={`/compare/${item.slug}`}
              className="group rounded-[20px] bg-white dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.08] hover:border-black/20 dark:hover:border-white/20 p-5 transition-all flex flex-col justify-between"
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
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#f5f5f5] dark:bg-white/[0.06] text-black/70 dark:text-white/70">
                      {item.category}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-black/35 dark:text-white/35 group-hover:text-black dark:group-hover:text-white transition-colors shrink-0" />
                </div>

                <h3 className="text-[15px] font-semibold text-black dark:text-white leading-snug">
                  {item.h1Title}
                </h3>
                <p className="text-[12px] text-black/60 dark:text-white/60 mt-1.5 line-clamp-2 leading-relaxed">
                  {item.subtitle}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-black/50 dark:text-white/50 tabular-nums">
                <span>{item.cogifySpec.binarySize}</span>
                <span className="text-emerald-700 dark:text-emerald-400 font-semibold">
                  {item.cogifySpec.price}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <FaqSection
        badge={`${guide.appShortName} FAQ`}
        title={`Frequently Asked Questions: ${guide.appShortName}`}
        subtitle="Direct architectural answers on licensing, memory efficiency, Apple Silicon support, and zero-telemetry privacy."
        faqs={guide.faqs}
      />

      <AuthorBio
        currentSlug={guide.appSlug}
        contextLabel="Benchmarked & Engineered by Shubham Sharma"
      />
    </div>
  );
}
