import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowUpRight, ShieldCheck } from "lucide-react";
import { getComparisonByAppSlug } from "@/config/comparisons";

interface InlineAppComparisonProps {
  appSlug: string;
}

export function InlineAppComparison({ appSlug }: InlineAppComparisonProps) {
  const guide = getComparisonByAppSlug(appSlug);

  if (!guide) {
    return null;
  }

  const previewRows = guide.featureMatrix.slice(0, 5);

  return (
    <section
      aria-labelledby="inline-comparison-heading"
      className="max-w-[980px] mx-auto px-5 sm:px-8 py-14 border-t border-black/[0.06] dark:border-white/[0.07]"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#777] dark:text-[#888] mb-1">
            head-to-head benchmark
          </p>
          <h2
            id="inline-comparison-heading"
            className="text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-[#111] dark:text-white"
          >
            {guide.appShortName} vs. {guide.competitors[0].name} &amp;{" "}
            {guide.competitors[1].name}
          </h2>
          <p className="text-xs sm:text-sm text-[#666] dark:text-[#a1a1aa] mt-1.5 max-w-2xl">
            {guide.verdictSummary}
          </p>
        </div>

        <Link
          href={`/compare/${guide.slug}`}
          className="helumi-pill-secondary text-xs shrink-0 self-start md:self-auto"
        >
          <span>Full Comparison Guide</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Responsive Table Preview */}
      <div className="rounded-[24px] bg-white dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.08] overflow-hidden tabular-nums">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[660px]">
            <thead>
              <tr className="border-b border-black/[0.06] dark:border-white/[0.08] bg-[#f5f5f5]/70 dark:bg-white/[0.02]">
                <th className="py-3.5 px-5 text-[11px] font-semibold uppercase tracking-wider text-[#666] dark:text-[#a1a1aa] w-[30%]">
                  Metric / Feature
                </th>
                <th className="py-3.5 px-5 text-xs sm:text-sm font-bold text-[#111] dark:text-white border-x border-black/[0.06] dark:border-white/[0.08] w-[26%]">
                  <div className="flex items-center gap-2">
                    <Image
                      src={guide.appIcon}
                      alt={guide.appShortName}
                      width={20}
                      height={20}
                      className="w-5 h-5 rounded object-contain"
                    />
                    <span>{guide.appShortName}</span>
                    <span className="ml-auto px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#111] text-white dark:bg-white dark:text-[#111]">
                      $0
                    </span>
                  </div>
                </th>
                <th className="py-3.5 px-5 text-xs font-semibold text-[#666] dark:text-[#a1a1aa] w-[22%]">
                  {guide.competitors[0].name}
                </th>
                <th className="py-3.5 px-5 text-xs font-semibold text-[#666] dark:text-[#a1a1aa] w-[22%]">
                  {guide.competitors[1].name}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/[0.05] dark:divide-white/[0.06] text-xs">
              {previewRows.map((row, idx) => (
                <tr key={idx}>
                  <td className="py-3.5 px-5 font-semibold text-[#111] dark:text-white">
                    {row.feature}
                  </td>
                  <td className="py-3.5 px-5 font-semibold text-[#111] dark:text-white border-x border-black/[0.06] dark:border-white/[0.08]">
                    <div className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#111] dark:text-white shrink-0 mt-0.5" />
                      <span>{row.cogify}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-5 text-[#666] dark:text-[#a1a1aa]">
                    {row.comp1}
                  </td>
                  <td className="py-3.5 px-5 text-[#666] dark:text-[#a1a1aa]">
                    {row.comp2}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-5 py-3 bg-[#f5f5f5]/80 dark:bg-[#0b0b0d] border-t border-black/[0.06] dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-3 text-xs">
          <span className="text-[#666] dark:text-[#a1a1aa] flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#111] dark:text-white" />
            <span>
              Benchmarked on Apple Silicon • {guide.cogifySpec.binarySize} •{" "}
              {guide.cogifySpec.ramUsage}
            </span>
          </span>
          <Link
            href={`/compare/${guide.slug}`}
            className="font-semibold text-[#111] dark:text-white hover:underline inline-flex items-center gap-1"
          >
            Inspect Full 10-Point Comparison <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
