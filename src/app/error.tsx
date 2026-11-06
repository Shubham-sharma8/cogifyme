"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { RotateCcw, Home, ArrowRight } from "lucide-react";

export default function GlobalRouteError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Automatically recover once if a deployment rollout caused a stale chunk / RSC fetch error
    const msg = error?.message || "";
    if (
      msg.includes("ChunkLoadError") ||
      msg.includes("Loading chunk") ||
      msg.includes("Failed to fetch") ||
      msg.includes("network")
    ) {
      try {
        const key = "cogify_auto_reload_ts";
        const last = Number(sessionStorage.getItem(key) || "0");
        if (Date.now() - last > 10000) {
          sessionStorage.setItem(key, String(Date.now()));
          window.location.reload();
        }
      } catch {
        // ignore storage errors
      }
    }
  }, [error]);

  return (
    <div className="min-h-[75vh] bg-[#f5f5f5] dark:bg-[#0b0b0d] text-black dark:text-white flex items-center justify-center px-6 py-24">
      <div className="max-w-[460px] w-full rounded-[24px] bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/[0.09] p-8 text-center shadow-sm">
        <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-black/45 dark:text-white/45 mb-2">
          Temporary Interruption
        </p>
        <h1 className="text-[26px] sm:text-[30px] font-semibold tracking-[-0.03em] text-black dark:text-white leading-tight">
          Refreshing{" "}
          <span className="font-serif-accent text-[1.06em]">page view.</span>
        </h1>
        <p className="mt-2.5 text-[14px] text-black/60 dark:text-white/60 leading-relaxed">
          A new build or connection update occurred while loading this view. Click below to reload cleanly.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
          <button
            type="button"
            onClick={() => {
              reset();
              window.location.reload();
            }}
            className="helumi-pill px-5 py-2.5 text-[13px] font-medium inline-flex items-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reload Page</span>
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#f5f5f5] dark:bg-white/[0.06] hover:bg-black/[0.08] dark:hover:bg-white/[0.1] text-black dark:text-white text-[13px] font-medium transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-[13px] font-medium text-black/65 dark:text-white/65 hover:text-black dark:hover:text-white transition-colors"
          >
            <span>All Products</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
