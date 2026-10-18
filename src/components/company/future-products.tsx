"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MessageSquare, Sparkles, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";
import { BrandLogo } from "@/components/brand/brand-logo";

export const FutureProducts = () => {
  return (
    <section
      id="pipeline"
      className="py-24 relative overflow-hidden bg-zinc-50 dark:bg-zinc-950/60 border-t border-zinc-200/80 dark:border-white/5 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border border-indigo-200/80 dark:border-indigo-500/20 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
              <Clock className="w-3.5 h-3.5" />
              <span>App Store Pipeline & Roadmap</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
              Coming Next to <span className="text-indigo-600 dark:text-indigo-400">Cogify.</span>
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Alongside our 7 free published App Store applications, our engineering pipeline includes Full Page Web Capture, Web Inspection for Safari, and Aurora Drive (live lyrics, customizable widgets &amp; CarPlay infotainment).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/products#pipeline"
              className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors flex items-center gap-2 shadow-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>Explore Pipeline Previews</span>
            </Link>
            <Link
              href="/suggestions"
              className="px-5 py-3 rounded-xl bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-indigo-600 dark:text-indigo-400 border border-zinc-200 dark:border-white/10 font-semibold text-xs transition-colors flex items-center gap-2 shadow-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Suggest an App or Feature</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.futureProducts.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-white/95 dark:bg-zinc-900/40 border border-zinc-200/90 dark:border-white/10 hover:border-indigo-500/40 transition-all duration-200 flex flex-col justify-between group shadow-xs dark:shadow-none"
            >
              <div>
                <div className="flex items-center justify-between mb-4 gap-2">
                  <div className="flex items-center gap-3">
                    {item.icon ? (
                      <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-zinc-200 dark:border-white/10 shrink-0 bg-zinc-100 dark:bg-zinc-800">
                        <Image
                          src={item.icon}
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="44px"
                        />
                      </div>
                    ) : (
                      <div className="w-11 h-11 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200/80 dark:border-indigo-500/20 flex items-center justify-center shrink-0">
                        <BrandLogo width={22} height={22} />
                      </div>
                    )}
                    <div>
                      <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                        {item.title}
                      </h3>
                      <span className="text-[11px] font-mono text-zinc-500">
                        {item.platforms}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full shrink-0 ${
                      item.status.includes("App Store")
                        ? "bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-500/30"
                        : item.status === "Now Onboarding"
                        ? "bg-purple-50 text-purple-700 border border-purple-200 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-500/30"
                        : "bg-indigo-50 text-indigo-700 border border-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-500/30"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  {item.description}
                </p>

                {item.screenshots && item.screenshots.length > 0 && (
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {item.screenshots.slice(0, 3).map((shot, sIdx) => (
                      <div
                        key={sIdx}
                        className="relative aspect-[16/10] rounded-lg overflow-hidden border border-zinc-200 dark:border-white/10 bg-zinc-950"
                      >
                        <Image
                          src={shot}
                          alt={`${item.title} screenshot ${sIdx + 1}`}
                          fill
                          className="object-cover"
                          sizes="160px"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-4 pt-4 border-t border-zinc-200/80 dark:border-white/5 flex items-center justify-between text-xs text-zinc-500 font-mono">
                <div className="flex items-center gap-2">
                  <BrandLogo
                    width={16}
                    height={16}
                    className="w-4 h-4 object-contain opacity-70"
                  />
                  <span>{item.category || "Native Apple App"}</span>
                </div>
                <Link
                  href="/products#pipeline"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-0.5"
                >
                  <span>Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
