import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Scale, CheckCircle2, ArrowUpRight, ShieldCheck } from "lucide-react";
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
      className="max-w-6xl mx-auto px-6 py-16 border-t border-zinc-200/80 dark:border-white/[0.06]"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-widest mb-3">
            <Scale className="w-3.5 h-3.5" />
            <span>Head-to-Head macOS Benchmark</span>
          </div>
          <h2
            id="inline-comparison-heading"
            className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white"
          >
            How {guide.appShortName} Compares to {guide.competitors[0].name} &amp;{" "}
            {guide.competitors[1].name}
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-1.5 max-w-2xl">
            {guide.verdictSummary}
          </p>
        </div>

        <Link
          href={`/compare/${guide.slug}`}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-bold shadow-md shadow-indigo-500/20 transition-all shrink-0 self-start md:self-auto"
        >
          <span>Full {guide.appShortName} Comparison Guide</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Responsive Table Preview */}
      <div className="rounded-3xl bg-white dark:bg-[#0b0f17] border border-zinc-200/90 dark:border-white/[0.08] shadow-xs overflow-hidden tabular-nums">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[680px]">
            <thead>
              <tr className="border-b border-zinc-200/80 dark:border-white/[0.08] bg-zinc-50/80 dark:bg-white/[0.02]">
                <th className="py-3.5 px-5 text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 w-[30%]">
                  Metric / Feature
                </th>
                <th className="py-3.5 px-5 text-xs sm:text-sm font-extrabold text-indigo-600 dark:text-indigo-400 bg-indigo-500/[0.05] dark:bg-indigo-500/[0.08] border-x border-indigo-500/20 w-[26%]">
                  <div className="flex items-center gap-2">
                    <Image
                      src={guide.appIcon}
                      alt={guide.appShortName}
                      width={20}
                      height={20}
                      className="w-5 h-5 rounded object-contain"
                    />
                    <span>{guide.appShortName}</span>
                    <span className="ml-auto px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-700 dark:text-emerald-300">
                      $0
                    </span>
                  </div>
                </th>
                <th className="py-3.5 px-5 text-xs font-bold text-zinc-700 dark:text-zinc-300 w-[22%]">
                  {guide.competitors[0].name}
                </th>
                <th className="py-3.5 px-5 text-xs font-bold text-zinc-700 dark:text-zinc-300 w-[22%]">
                  {guide.competitors[1].name}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200/70 dark:divide-white/[0.06] text-xs sm:text-sm">
              {previewRows.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-zinc-50/70 dark:hover:bg-white/[0.015] transition-colors"
                >
                  <td className="py-3.5 px-5 font-bold text-zinc-900 dark:text-white">
                    {row.feature}
                  </td>
                  <td className="py-3.5 px-5 font-bold text-zinc-950 dark:text-white bg-indigo-500/[0.04] dark:bg-indigo-500/[0.06] border-x border-indigo-500/15">
                    <div className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{row.cogify}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-5 text-zinc-600 dark:text-zinc-400">
                    {row.comp1}
                  </td>
                  <td className="py-3.5 px-5 text-zinc-600 dark:text-zinc-400">
                    {row.comp2}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-5 py-3.5 bg-zinc-50/90 dark:bg-white/[0.02] border-t border-zinc-200/80 dark:border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs">
          <span className="text-zinc-600 dark:text-zinc-400 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>
              Benchmarked on Apple Silicon • {guide.cogifySpec.binarySize} •{" "}
              {guide.cogifySpec.ramUsage}
            </span>
          </span>
          <Link
            href={`/compare/${guide.slug}`}
            className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1"
          >
            Inspect Full 10-Point Comparison &amp; RAM Charts <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
