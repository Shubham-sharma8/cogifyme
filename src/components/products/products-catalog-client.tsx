"use client";

import React, { useState, useEffect } from "react";
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
  releaseDate?: string;
  releasesHref?: string;
  compareHref?: string;
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

type FilterPillar = "all" | "mac" | "safari" | "web";

const PILLAR_FILTERS: { id: FilterPillar; hash: string; label: string; count: number }[] = [
  { id: "all", hash: "#all", label: "All Apps", count: 14 },
  { id: "mac", hash: "#for-mac", label: "For Mac", count: 6 },
  { id: "safari", hash: "#for-ios", label: "For iOS & Safari", count: 6 },
  { id: "web", hash: "#web", label: "Web", count: 2 },
];

export function ProductsCatalogClient({ items }: { items: CatalogItem[] }) {
  const [activePillar, setActivePillar] = useState<FilterPillar>("all");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const syncFromHash = () => {
      const h = window.location.hash.toLowerCase();
      if (h === "#for-mac" || h === "#mac") {
        setActivePillar("mac");
      } else if (h === "#for-ios" || h === "#ios" || h === "#safari") {
        setActivePillar("safari");
      } else if (h === "#web") {
        setActivePillar("web");
      } else if (h === "#all") {
        setActivePillar("all");
      }
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const handleSelectPillar = (id: FilterPillar, hash: string) => {
    setActivePillar(id);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", id === "all" ? "/products" : `/products${hash}`);
    }
  };

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
    <section className="mb-20">
      {/* Anchor targets for #for-mac, #for-ios, #web */}
      <div id="for-mac" className="scroll-mt-28" />
      <div id="for-ios" className="scroll-mt-28" />
      <div id="web" className="scroll-mt-28" />

      {/* Helumi-Style Pill Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
        <div className="inline-flex flex-wrap items-center gap-1 p-1 rounded-full bg-white dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.1] self-start">
          {PILLAR_FILTERS.map((tab) => {
            const isActive = activePillar === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleSelectPillar(tab.id, tab.hash)}
                className={`h-8 px-3.5 rounded-full text-[13px] transition-colors cursor-pointer inline-flex items-center gap-1.5 ${
                  isActive
                    ? "bg-black text-white dark:bg-white dark:text-black font-medium"
                    : "text-black/65 dark:text-white/65 hover:text-black dark:hover:text-white"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[11px] tabular-nums ${
                    isActive ? "opacity-80" : "opacity-50"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="relative w-full sm:w-64">
          <Search
            className="w-3.5 h-3.5 text-black/40 dark:text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
            aria-hidden="true"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search apps..."
            aria-label="Filter Cogify products"
            className="w-full h-9 pl-9 pr-8 rounded-full text-[13px] bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/[0.1] text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40 focus:outline-none focus:border-black/30 dark:focus:border-white/30"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-black/40 hover:text-black dark:text-white/40 dark:hover:text-white"
              aria-label="Clear search query"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between mb-5 px-1 text-[13px] text-black/55 dark:text-white/55">
        <span>Showing {visibleCount} of {items.length} products</span>
        <span>100% free · zero telemetry</span>
      </div>

      {/* All 14 Cards Rendered in SSR DOM (hidden when filtered out so Googlebot indexes all 14 products) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {items.map((item, idx) => {
          const isVisible = matchesItem(item);
          return (
            <div
              key={item.href}
              className={
                isVisible
                  ? "rounded-[20px] bg-white dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.1] p-6 sm:p-7 flex flex-col justify-between transition-colors hover:border-black/20 dark:hover:border-white/25"
                  : "hidden"
              }
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="relative h-14 w-14 rounded-[16px] overflow-hidden border border-black/[0.08] dark:border-white/15 bg-[#f5f5f5] dark:bg-zinc-950 shrink-0">
                      <Image
                        src={item.icon}
                        alt={item.name}
                        fill
                        priority={idx < 2}
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-1.5 mb-0.5 text-[11px] text-black/55 dark:text-white/55">
                        <span className="font-medium text-black/75 dark:text-white/75">
                          {item.badge}
                        </span>
                        <span>·</span>
                        <span className="tabular-nums">{item.version}</span>
                        {item.releaseDate && (
                          <>
                            <span>·</span>
                            <span>{item.releaseDate}</span>
                          </>
                        )}
                      </div>
                      <h2 className="text-[19px] font-semibold tracking-[-0.02em] text-black dark:text-white">
                        <Link
                          href={item.href}
                          className="hover:opacity-75 transition-opacity"
                        >
                          {item.name}
                        </Link>
                      </h2>
                      <p className="text-[12px] text-black/50 dark:text-white/50">
                        {item.platforms}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-[14px] text-black/65 dark:text-white/65 leading-relaxed mb-4">
                  {item.description}
                </p>

                {item.previewImage && (
                  <Link
                    href={item.href}
                    className="block relative w-full aspect-[16/10] rounded-[14px] overflow-hidden border border-black/[0.07] dark:border-white/10 mb-4 bg-[#0b0b0d] group"
                  >
                    <Image
                      src={item.previewImage}
                      alt={`${item.name} Screenshot Preview`}
                      fill
                      priority={idx < 2}
                      className="object-contain group-hover:scale-[1.015] transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 540px"
                    />
                  </Link>
                )}

                <ul className="space-y-1.5 mb-5">
                  {item.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2 text-[13px] text-black/70 dark:text-white/70"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-black/70 dark:text-white/70 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
                {item.downloadUrl ? (
                  <a
                    href={item.downloadUrl}
                    download
                    className="helumi-pill helumi-pill-dark !h-9 !px-4 !text-[13px] tabular-nums"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>{item.ctaLabel}</span>
                  </a>
                ) : (
                  <a
                    href={item.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="helumi-pill helumi-pill-dark !h-9 !px-4 !text-[13px]"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span>{item.ctaLabel}</span>
                  </a>
                )}
                <div className="flex items-center gap-3">
                  {item.compareHref && (
                    <Link
                      href={item.compareHref}
                      className="text-[12px] font-medium text-black/55 dark:text-white/55 hover:text-black dark:hover:text-white underline underline-offset-4 transition-colors"
                    >
                      Compare
                    </Link>
                  )}
                  {item.releasesHref && (
                    <Link
                      href={item.releasesHref}
                      className="text-[12px] font-medium text-black/55 dark:text-white/55 hover:text-black dark:hover:text-white underline underline-offset-4 transition-colors"
                    >
                      Previous versions
                    </Link>
                  )}
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 text-[13px] font-medium text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
                  >
                    <span>Product page</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
