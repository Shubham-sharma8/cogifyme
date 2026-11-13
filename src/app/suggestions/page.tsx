import React from "react";
import Link from "next/link";
import { SuggestionForm } from "@/components/feedback/suggestion-form";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { AuthorBio } from "@/components/seo/author-bio";

export default function SuggestionsPage() {
  return (
    <div className="min-h-screen pt-28 sm:pt-32 pb-20 bg-[#f5f5f5] dark:bg-[#0b0b0d] text-[#111] dark:text-[#f5f5f7]">
      <section className="max-w-[980px] mx-auto px-5 sm:px-8 py-8">
        <Breadcrumbs items={[{ label: "Suggestions & Bug Reports", href: "/suggestions" }]} />
        <div className="mt-6 max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#777] dark:text-[#888]">
            suggestions &amp; bug reports
          </p>

          <h1 className="text-4xl sm:text-6xl font-bold text-[#111] dark:text-white tracking-[-0.04em] leading-[1.05]">
            Drop an idea or{" "}
            <span className="font-display italic font-normal">report a bug.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#555] dark:text-[#a1a1aa] max-w-2xl leading-relaxed">
            Cogify builds everyday apps and web studios that are 100% free for users. Whether you found an issue in EmDoc v1.1, Marriage Biodata Maker Studio, or SSB Stage-2 Practice Studio, or have an idea for a new feature, your message goes directly to our engineers.
          </p>
        </div>
      </section>

      {/* Suggestion Form Container */}
      <section className="max-w-[980px] mx-auto px-5 sm:px-8 py-4">
        <SuggestionForm />
      </section>

      {/* Quick Navigation Footer */}
      <section className="max-w-[980px] mx-auto px-5 sm:px-8 pt-10 text-center">
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-[#666] dark:text-[#a1a1aa]">
          <Link
            href="/products"
            className="hover:text-[#111] dark:hover:text-white font-medium transition-colors"
          >
            Browse All 22 Apps &amp; Web Studios
          </Link>
          <span>·</span>
          <Link
            href="/emdoc"
            className="hover:text-[#111] dark:hover:text-white font-medium transition-colors"
          >
            EmDoc v1.1 (7.8 MB)
          </Link>
          <span>·</span>
          <Link
            href="/releases"
            className="hover:text-[#111] dark:hover:text-white font-medium transition-colors"
          >
            EmDoc Previous Versions
          </Link>
          <span>·</span>
          <Link
            href="/biodata"
            className="hover:text-[#111] dark:hover:text-white font-medium transition-colors"
          >
            Marriage Biodata Maker
          </Link>
          <span>·</span>
          <Link
            href="/ssb"
            className="hover:text-[#111] dark:hover:text-white font-medium transition-colors"
          >
            SSB Practice Studio
          </Link>
        </div>
      </section>

      <AuthorBio />
    </div>
  );
}
