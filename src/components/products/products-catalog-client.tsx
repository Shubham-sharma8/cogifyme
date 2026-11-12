/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Globe,
  Search,
  X,
} from "lucide-react";
import {
  AppleLogoIcon,
  AppStoreIcon,
  SafariIcon,
} from "@/components/ui/platform-icons";

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
  { id: "all", hash: "#all", label: "All Apps", count: 15 },
  { id: "mac", hash: "#for-mac", label: "For Mac", count: 7 },
  { id: "safari", hash: "#for-ios", label: "For iOS & Safari", count: 6 },
  { id: "web", hash: "#web", label: "Web Studios", count: 2 },
];

const CARD_STAGE_GRADIENTS = [
  "from-[#DBEAFE] via-[#E0E7FF] to-[#F3E8FF] dark:from-[#1E293B] dark:via-[#1E1B4B] dark:to-[#0F172A]",
  "from-[#FEF3C7] via-[#FFEDD5] to-[#FCE7F3] dark:from-[#292524] dark:via-[#1C1917] dark:to-[#18181B]",
  "from-[#D1FAE5] via-[#E0F2FE] to-[#EDE9FE] dark:from-[#064E3B]/40 dark:via-[#0F172A] dark:to-[#1E1B4B]",
  "from-[#E0E7FF] via-[#FCE7F3] to-[#FEF3C7] dark:from-[#1E1B4B] dark:via-[#27272A] dark:to-[#09090B]",
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
      item.href.toLowerCase().includes(normalizedQuery) ||
      item.highlights.some((h) => h.toLowerCase().includes(normalizedQuery))
    );
  };

  const visibleCount = items.filter(matchesItem).length;

  return (
    <section className="mb-12">
      {/* Anchor targets for #for-mac, #for-ios, #web */}
      <div id="for-mac" className="scroll-mt-28" />
      <div id="for-ios" className="scroll-mt-28" />
      <div id="web" className="scroll-mt-28" />

      {/* Supaste-Style Pill Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-7">
        <div className="inline-flex flex-wrap items-center gap-1 p-1 rounded-full bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/[0.1] self-start shadow-xs">
          {PILLAR_FILTERS.map((tab) => {
            const isActive = activePillar === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleSelectPillar(tab.id, tab.hash)}
                className={`h-8.5 px-3.5 rounded-full text-[13px] transition-colors cursor-pointer inline-flex items-center gap-1.5 ${
                  isActive
                    ? "bg-[#09090B] text-white dark:bg-white dark:text-[#09090B] font-semibold"
                    : "text-[#52525B] dark:text-[#A1A1AA] hover:text-[#09090B] dark:hover:text-white"
                }`}
              >
                {tab.id === "mac" && <AppleLogoIcon className="w-3.5 h-3.5 -mt-0.5" />}
                {tab.id === "safari" && <SafariIcon className="w-3.5 h-3.5" />}
                {tab.id === "web" && <Globe className="w-3.5 h-3.5" />}
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
            placeholder="Search apps or /slug..."
            aria-label="Filter Cogify products"
            className="w-full h-9.5 pl-9 pr-8 rounded-full text-[13px] bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/[0.1] text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40 focus:outline-none focus:border-black/30 dark:focus:border-white/30 shadow-xs"
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
      <div className="flex items-center justify-between mb-5 px-1 text-[13px] text-[#52525B] dark:text-[#A1A1AA]">
        <span>Showing {visibleCount} of {items.length} products</span>
        <span>Short URLs · 100% free · zero telemetry</span>
      </div>

      {/* All 15 Cards Rendered in SSR DOM (hidden when filtered out so Googlebot indexes all 15 products) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, idx) => {
          const isVisible = matchesItem(item);
          const stageGradient = CARD_STAGE_GRADIENTS[idx % CARD_STAGE_GRADIENTS.length];
          return (
            <div
              key={item.href}
              className={
                isVisible
                  ? "rounded-[26px] bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/[0.1] p-6 sm:p-7 flex flex-col justify-between transition-all hover:border-black/20 dark:hover:border-white/25 shadow-[0_14px_34px_rgba(0,0,0,0.03)]"
                  : "hidden"
              }
            >
              <div>
                {/* Top App Identity Row */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="relative h-14 w-14 rounded-[16px] overflow-hidden border border-black/[0.08] dark:border-white/15 bg-[#f5f5f5] dark:bg-zinc-950 shrink-0 shadow-sm">
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
                      <div className="flex flex-wrap items-center gap-1.5 mb-1 text-[11px] text-[#52525B] dark:text-[#A1A1AA]">
                        <span className="inline-flex items-center gap-1 rounded-full bg-black/[0.04] dark:bg-white/[0.06] px-2.5 py-0.5 font-semibold text-[#09090B] dark:text-white">
                          {item.pillar === "mac" && (
                            <AppleLogoIcon className="h-3 w-3 -mt-0.5" />
                          )}
                          {item.pillar === "safari" && (
                            <SafariIcon className="h-3 w-3" />
                          )}
                          {item.pillar === "web" && <Globe className="h-3 w-3" />}
                          <span>{item.badge}</span>
                        </span>
                        <span className="tabular-nums font-medium">{item.version}</span>
                        {item.releaseDate && (
                          <>
                            <span>·</span>
                            <span>{item.releaseDate}</span>
                          </>
                        )}
                      </div>
                      <h2 className="text-[20px] font-bold tracking-[-0.025em] text-[#09090B] dark:text-white leading-tight">
                        <Link
                          href={item.href}
                          className="hover:text-[#006FFF] dark:hover:text-[#60A5FA] transition-colors"
                        >
                          {item.name}
                        </Link>
                      </h2>
                    </div>
                  </div>

                  {/* Clean Short URL Pill */}
                  <Link
                    href={item.href}
                    className="hidden sm:inline-flex items-center gap-1 rounded-full border border-black/[0.07] dark:border-white/[0.1] bg-[#FAFAFA] dark:bg-white/[0.03] px-2.5 py-1 text-[11px] font-mono text-[#52525B] dark:text-[#A1A1AA] hover:text-[#09090B] dark:hover:text-white shrink-0"
                  >
                    <span>{item.href}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-60" />
                  </Link>
                </div>

                {/* Supaste-Style Italic Serif Tagline + Description */}
                <p className="font-display italic text-[17px] text-[#006FFF] dark:text-[#60A5FA] leading-snug mb-2">
                  {item.tagline}
                </p>
                <p className="text-[13.5px] text-[#52525B] dark:text-[#A1A1AA] leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Scenic Gradient-Framed Screenshot Preview Stage */}
                {item.previewImage && (
                  <Link
                    href={item.href}
                    className={`block relative w-full rounded-[18px] p-2.5 sm:p-3 bg-gradient-to-br ${stageGradient} border border-black/[0.06] dark:border-white/[0.08] mb-4 group overflow-hidden`}
                  >
                    <div className="rounded-[12px] overflow-hidden border border-black/15 dark:border-white/15 bg-[#0B0B0D] shadow-md">
                      <div className="h-5 px-2.5 bg-[#18181B] border-b border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <span className="h-2 w-2 rounded-full bg-[#FF5F56]" />
                          <span className="h-2 w-2 rounded-full bg-[#FFBD2E]" />
                          <span className="h-2 w-2 rounded-full bg-[#27C93F]" />
                        </div>
                        <span className="text-[9.5px] font-mono text-white/55 truncate">
                          {item.name}
                        </span>
                        <span className="w-6" />
                      </div>
                      <div className="relative w-full aspect-[16/10] bg-[#0B0B0D]">
                        <Image
                          src={item.previewImage}
                          alt={`${item.name} Screenshot Preview`}
                          fill
                          priority={idx < 2}
                          className="object-contain group-hover:scale-[1.02] transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, 520px"
                        />
                      </div>
                    </div>
                  </Link>
                )}

                <ul className="space-y-1.5 mb-5">
                  {item.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2 text-[13px] text-[#27272A] dark:text-[#E4E4E7]"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#10B981] shrink-0" />
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
                    className="helumi-pill helumi-pill-dark !h-9.5 !px-4 !text-[13px] tabular-nums"
                  >
                    <AppleLogoIcon className="h-3.5 w-3.5 -mt-0.5 shrink-0" />
                    <span>{item.ctaLabel}</span>
                  </a>
                ) : item.pillar === "safari" ? (
                  <a
                    href={item.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="helumi-pill helumi-pill-dark !h-9.5 !px-4 !text-[13px]"
                  >
                    <AppStoreIcon className="h-3.5 w-3.5 shrink-0" />
                    <span>{item.ctaLabel}</span>
                  </a>
                ) : (
                  <a
                    href={item.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="helumi-pill helumi-pill-dark !h-9.5 !px-4 !text-[13px]"
                  >
                    <Globe className="h-3.5 w-3.5 shrink-0" />
                    <span>{item.ctaLabel}</span>
                  </a>
                )}
                <div className="flex items-center gap-3">
                  {item.compareHref && (
                    <Link
                      href={item.compareHref}
                      className="text-[12px] font-medium text-[#52525B] dark:text-[#A1A1AA] hover:text-[#09090B] dark:hover:text-white underline underline-offset-4 transition-colors"
                    >
                      Compare
                    </Link>
                  )}
                  {item.releasesHref && (
                    <Link
                      href={item.releasesHref}
                      className="text-[12px] font-medium text-[#52525B] dark:text-[#A1A1AA] hover:text-[#09090B] dark:hover:text-white underline underline-offset-4 transition-colors"
                    >
                      Releases
                    </Link>
                  )}
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#09090B] dark:text-white hover:text-[#006FFF] dark:hover:text-[#60A5FA] transition-colors"
                  >
                    <span>Explore</span>
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
