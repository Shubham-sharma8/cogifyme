import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { BrandLogo } from "@/components/brand/brand-logo";
import { Home, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "404 Page Not Found — Software & Web Studio",
  description:
    "The requested page could not be found on COGIFY. Explore our 14 free native macOS workstations, Safari extensions, and real-time web studios at cogify.me.",
  alternates: {},
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-[80vh] bg-[#f5f5f5] dark:bg-[#0b0b0d] text-black dark:text-white flex items-center justify-center px-6 py-24">
      <div className="max-w-[520px] w-full rounded-[24px] bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/[0.09] p-8 sm:p-10 text-center shadow-sm space-y-6">
        <div className="flex justify-center">
          <div className="w-12 h-12 rounded-2xl bg-[#f5f5f5] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.1] flex items-center justify-center">
            <BrandLogo width={28} height={28} priority />
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-black/45 dark:text-white/45">
            Error 404
          </p>
          <h1 className="text-[30px] sm:text-[38px] font-semibold tracking-[-0.03em] text-black dark:text-white leading-tight">
            Page not{" "}
            <span className="font-serif-accent text-[1.06em]">found.</span>
          </h1>
          <p className="text-[14px] text-black/60 dark:text-white/60 max-w-sm mx-auto leading-relaxed">
            The link you followed may have moved. Explore our 14 native macOS, iOS, Safari, and Web solutions below.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
          <Link
            href="/"
            className="helumi-pill px-5 py-2.5 text-[13px] font-medium inline-flex items-center gap-2"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return Home</span>
          </Link>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#f5f5f5] dark:bg-white/[0.06] hover:bg-black/[0.08] dark:hover:bg-white/[0.1] text-black dark:text-white text-[13px] font-medium transition-colors"
          >
            <span>All 14 Products</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <Link
            href="/products/emdoc/releases"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-[13px] font-medium text-black/65 dark:text-white/65 hover:text-black dark:hover:text-white transition-colors"
          >
            <span>EmDoc Releases</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
