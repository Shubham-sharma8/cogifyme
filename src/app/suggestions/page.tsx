import React from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/brand/brand-logo";
import { SuggestionForm } from "@/components/feedback/suggestion-form";
import { Sparkles } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { AuthorBio } from "@/components/seo/author-bio";

export default function SuggestionsPage() {
  return (
    <div className="pt-28 pb-20 relative">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={[{ label: "Suggestions & Bug Reports", href: "/suggestions" }]} />
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-3">
            <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
              <BrandLogo width={40} height={40} priority />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200/80 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              Suggestions & Reports
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-tight">
            Drop an idea, suggestion, or{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600 dark:from-indigo-300 dark:to-cyan-300">
              report a bug.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Cogify builds everyday apps and web studios that are 100% free for users. Whether you found a glitch in EmDoc, Marriage Biodata Maker Studio, or SSB Stage-2 Test Practice Studio, have an idea for a new feature, or want your company to replace an expensive software license, your message goes directly to our engineers.
          </p>
        </div>
      </section>

      {/* Suggestion Form Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <SuggestionForm />
      </section>

      {/* Quick Navigation Footer */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-500">
          <Link
            href="/products"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
          >
            Browse All 14 Apps &amp; Web Studios
          </Link>
          <span>•</span>
          <Link
            href="/products/emdoc"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
          >
            Explore EmDoc Workstation (5.0 MB)
          </Link>
          <span>•</span>
          <Link
            href="/biodata"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
          >
            Marriage Biodata Maker (biodata.cogify.me)
          </Link>
          <span>•</span>
          <Link
            href="/ssb"
            className="hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors"
          >
            SSB Practice Studio (ssb.cogify.me)
          </Link>
          <span>•</span>
          <Link
            href="/enterprise"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
          >
            Enterprise License Replacement
          </Link>
        </div>
      </section>

      <AuthorBio />
    </div>
  );
}
