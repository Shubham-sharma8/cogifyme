"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ExternalLink,
  CheckCircle2,
  Download,
  Search,
  X,
} from "lucide-react";

export interface CatalogItem {
  name: string;
  pillar: "web" | "mac" | "safari";
  tagline: string;
  description: string;
  version: string;
  platforms: string;
  category: string;
  icon: string;
  previewImage?: string;
  href: string;
  downloadUrl?: string;
  appStoreUrl: string;
  ctaLabel: string;
  badge: string;
  highlights: string[];
}

type FilterPillar = "all" | "web" | "mac" | "safari";

const PILLAR_FILTERS: { id: FilterPillar; label: string; count: number }[] = [
  { id: "all", label: "All Products", count: 14 },
  { id: "web", label: "Real-Time Web Studios", count: 2 },
  { id: "mac", label: "macOS Workstations (.DMG)", count: 6 },
  { id: "safari", label: "Safari Extensions (iOS & Mac)", count: 6 },
];

export function ProductsCatalogClient({ items }: { items: CatalogItem[] }) {
  const [activePillar, setActivePillar] = useState<FilterPillar>("all");
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();

  const matchesItem = (item: CatalogItem) => {
    const pillarMatch = activePillar === "all" || item.pillar === activePillar;
    if (!pillarMatch) return false;
    if (!normalizedQuery) return true;
    return (
      item.name.toLowerCase().includes(normalizedQuery) ||
      item.tagline.toLowerCase().includes(normalizedQuery) ||
      item.description.toLowerCase().includes(normalizedQuery) ||
      item.category.toLowerCase().includes(normalizedQuery) ||
      item.highlights.some((h) => h.toLowerCase().includes(normalizedQuery))
    );
  };

  const visibleCount = items.filter(matchesItem).length;

  return (
    <section className="mb-24">
      {/* Interactive Filter & Search Bar */}
      <div className="rounded-2xl p-3 sm:p-4 bg-white dark:bg-[#090c12] border border-zinc-200/90 dark:border-white/[0.09] shadow-2xs mb-8 flex flex-col lg:flex-row lg:items-center justify-between gap-3.5">
        <div className="flex flex-wrap items-center gap-1.5">
          {PILLAR_FILTERS.map((tab) => {
            const isActive = activePillar === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActivePillar(tab.id)}
                className={`btn-tactile px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer inline-flex items-center gap-1.5 ${
                  isActive
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 shadow-xs"
                    : "bg-zinc-100/80 hover:bg-zinc-200/70 text-zinc-600 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] dark:text-zinc-400"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded tabular-nums ${
                    isActive
                      ? "bg-white/20 text-white dark:bg-zinc-900/15 dark:text-zinc-900"
                      : "bg-white dark:bg-white/[0.06] text-zinc-500 dark:text-zinc-400"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="relative w-full lg:w-72">
          <Search
            className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
            aria-hidden="true"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter apps by name or feature..."
            aria-label="Filter Cogify products"
            className="w-full pl-9 pr-8 py-2 rounded-xl text-xs bg-zinc-50 dark:bg-white/[0.04] border border-zinc-200/80 dark:border-white/[0.08] text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700 dark:hover:text-white"
              aria-label="Clear search query"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between mb-6 px-1">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-white tracking-tight">
          Available Now — Native Apps &amp; Web Studios
        </h2>
        <span className="text-xs font-mono font-semibold text-emerald-700 dark:text-emerald-400 tabular-nums">
          Showing {visibleCount} of {items.length} Free Products
        </span>
      </div>

      {/* All 14 Cards Rendered in SSR DOM (hidden when filtered out so Googlebot indexes all 14 products) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, idx) => {
          const isVisible = matchesItem(item);
          return (
            <div
              key={item.href}
              className={
                isVisible
                  ? "studio-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between"
                  : "hidden"
              }
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/15 bg-zinc-100 dark:bg-zinc-950 shrink-0 shadow-sm">
                      <Image
                        src={item.icon}
                        alt={item.name}
                        fill
                        priority={idx < 2}
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                          {item.badge}
                        </span>
                        <span className="text-[11px] text-zinc-400">•</span>
                        <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 tabular-nums">
                          {item.version}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-zinc-950 dark:text-white tracking-tight">
                        <Link
                          href={item.href}
                          className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        >
                          {item.name}
                        </Link>
                      </h3>
                      <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-0.5">
                        {item.platforms}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-5">
                  {item.description}
                </p>

                {item.previewImage && (
                  <Link
                    href={item.href}
                    className="block relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 mb-5 bg-[#05070b] group"
                  >
                    <Image
                      src={item.previewImage}
                      alt={`${item.name} Screenshot Preview`}
                      fill
                      priority={idx < 2}
                      className="object-contain group-hover:scale-[1.02] transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 540px"
                    />
                  </Link>
                )}

                <ul className="space-y-2 mb-6">
                  {item.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-zinc-200/80 dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
                {item.downloadUrl ? (
                  <a
                    href={item.downloadUrl}
                    download
                    className="btn-tactile inline-flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 px-4 py-2.5 text-xs font-bold text-zinc-950 transition-colors shadow-xs tabular-nums"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>{item.ctaLabel}</span>
                  </a>
                ) : (
                  <a
                    href={item.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-tactile inline-flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 px-4 py-2.5 text-xs font-bold text-zinc-950 transition-colors shadow-xs"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span>{item.ctaLabel}</span>
                  </a>
                )}
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-white transition-colors"
                >
                  <span>Explore Features &amp; Specs</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
