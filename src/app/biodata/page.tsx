"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Globe,
  FileText,
  Languages,
  ShieldCheck,
  LayoutTemplate,
  Download,
  Smartphone,
  Monitor,
  ArrowUpRight,
  MessageSquare,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export default function BiodataStudioPage() {
  const biodata = siteConfig.biodata;
  const [activeView, setActiveView] = useState<"studio" | "banner" | "mobile">("studio");

  return (
    <div className="min-h-screen pt-28 pb-24 relative overflow-hidden">
      {/* Ambient Crimson & Gold Glow matching biodata.cogify.me */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[980px] h-[440px] bg-gradient-to-b from-rose-600/12 via-amber-500/8 to-transparent blur-3xl -z-10" />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
          {/* App Icon & Subdomain Pill */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-[24px] overflow-hidden shadow-2xl shadow-rose-900/25 border border-amber-500/30 bg-[#7B1E26]">
              <Image
                src={biodata.icon}
                alt={biodata.name}
                fill
                priority
                className="object-cover"
                sizes="96px"
              />
            </div>

            <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 dark:bg-rose-500/10 border border-rose-200/80 dark:border-rose-500/25 text-rose-800 dark:text-rose-300 text-xs font-semibold">
              <Globe className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
              <span>Official COGIFY Web Studio • biodata.cogify.me</span>
              <span className="text-rose-300 dark:text-rose-500">•</span>
              <span className="text-amber-700 dark:text-amber-300 font-mono">242 Templates</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.08]">
            Marriage Biodata Maker{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 via-rose-600 to-amber-600 dark:from-rose-300 dark:via-amber-200 dark:to-amber-400">
              Studio.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl leading-relaxed">
            Create a print-ready A4 Marriage Biodata online in 2 minutes at{" "}
            <a
              href={biodata.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-rose-700 dark:text-amber-300 underline decoration-rose-400/50 underline-offset-4 hover:text-rose-600"
            >
              biodata.cogify.me
            </a>
            . Engineered with an instant 1:1 live A4 preview,{" "}
            <strong className="text-zinc-900 dark:text-white font-semibold">
              242 cultural &amp; modern templates, 14 layout engines, 9 languages, Vedic Kundali charts
            </strong>
            , and instant{" "}
            <strong className="text-emerald-600 dark:text-emerald-400 font-semibold">
              300-DPI PDF, Editable Word (.docx) &amp; 3x Retina PNG
            </strong>{" "}
            downloads — 100% free with zero watermarks.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <a
              href={biodata.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-xl bg-[#7B1E26] hover:bg-[#91242e] text-white font-bold text-sm shadow-lg shadow-rose-900/25 transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Launch Studio (biodata.cogify.me)</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={`${biodata.url}/#templates-gallery`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 dark:bg-amber-500/15 dark:hover:bg-amber-500/25 dark:text-amber-200 font-semibold text-sm border border-amber-200/90 dark:border-amber-500/30 transition-colors flex items-center gap-2"
            >
              <LayoutTemplate className="w-4 h-4" />
              <span>Browse All 242 Templates</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <Link
              href="/suggestions"
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-100 text-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-200 font-semibold text-sm border border-zinc-200/90 dark:border-white/10 transition-colors flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Request Template or Feature</span>
            </Link>
          </div>

          {/* Trust Pill Strip */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-4xl text-xs">
            <div className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-white/10 text-zinc-700 dark:text-zinc-300 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>₹0 / $0 Free Forever</span>
            </div>
            <div className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-white/10 text-zinc-700 dark:text-zinc-300 font-medium">
              <Download className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" />
              <span>PDF, Word (.docx) &amp; PNG</span>
            </div>
            <div className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-white/10 text-zinc-700 dark:text-zinc-300 font-medium">
              <Languages className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
              <span>9 Indian &amp; Global Languages</span>
            </div>
            <div className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-white/10 text-zinc-700 dark:text-zinc-300 font-medium">
              <ShieldCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
              <span>100% Local Browser Privacy</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Live Studio Screenshot Showcase */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="rounded-3xl p-4 sm:p-6 bg-white dark:bg-zinc-900/60 border border-zinc-200/90 dark:border-white/10 shadow-2xl">
          {/* Switcher Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-zinc-200/80 dark:border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                https://biodata.cogify.me — Interactive A4 Studio
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveView("studio")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeView === "studio"
                    ? "bg-[#7B1E26] text-white shadow-sm"
                    : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Live Split-Screen Studio</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveView("banner")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeView === "banner"
                    ? "bg-[#7B1E26] text-white shadow-sm"
                    : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>A4 Biodata Output Overview</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveView("mobile")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeView === "mobile"
                    ? "bg-[#7B1E26] text-white shadow-sm"
                    : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Mobile Builder</span>
              </button>
            </div>
          </div>

          {/* Preview Canvas */}
          <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-200/80 dark:border-white/10">
            {activeView === "studio" && (
              <Image
                src={biodata.previewImage}
                alt="BiodataMaker Live Split-Screen A4 Studio at biodata.cogify.me"
                fill
                priority
                className="object-contain object-top"
                sizes="(max-width: 1280px) 100vw, 1150px"
              />
            )}
            {activeView === "banner" && (
              <Image
                src={biodata.ogBanner}
                alt="BiodataMaker A4 Output & Features Overview"
                fill
                className="object-contain object-center"
                sizes="(max-width: 1280px) 100vw, 1150px"
              />
            )}
            {activeView === "mobile" && (
              <div className="w-full h-full flex items-center justify-center p-4 bg-gradient-to-b from-zinc-900 to-zinc-950">
                <div className="relative h-full aspect-[9/19] rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
                  <Image
                    src={biodata.mobilePreview}
                    alt="BiodataMaker Responsive Mobile Studio"
                    fill
                    className="object-cover object-top"
                    sizes="380px"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Core Capabilities Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-rose-600 dark:text-amber-400 font-semibold mb-2">
            Studio Architecture &amp; Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">
            Engineered Like a Professional Desktop Publishing Suite
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
            {biodata.philosophy}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {biodata.features.map((feat) => (
            <div
              key={feat.title}
              className="rounded-3xl p-6 sm:p-7 bg-white dark:bg-zinc-900/40 border border-zinc-200/90 dark:border-white/10 flex flex-col justify-between shadow-xs dark:shadow-none hover:border-rose-500/40 transition-all"
            >
              <div>
                <span className="inline-block text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-rose-50 dark:bg-rose-500/15 text-rose-700 dark:text-rose-300 border border-rose-200/60 dark:border-rose-500/20 mb-4">
                  {feat.tag}
                </span>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2.5">
                  {feat.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Community & Cultural Presets Directory */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-rose-50/70 via-white to-amber-50/50 dark:from-zinc-900/80 dark:via-zinc-950 dark:to-rose-950/20 border border-zinc-200/90 dark:border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <div className="text-xs font-mono uppercase tracking-widest text-rose-700 dark:text-amber-400 font-semibold mb-2">
                Cultural &amp; Regional Formats
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">
                Dedicated Presets for Every Community &amp; Tradition
              </h2>
              <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
                Launch directly into a community-tailored format on{" "}
                <span className="font-mono text-zinc-800 dark:text-zinc-200">biodata.cogify.me</span>{" "}
                with authentic sacred emblems, auspicious invocations, and regional fields.
              </p>
            </div>
            <a
              href={biodata.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 text-xs font-bold hover:opacity-90 transition-opacity shrink-0"
            >
              <span>Open Live Builder</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {biodata.communityLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl p-5 bg-white dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-white/10 hover:border-rose-500/50 dark:hover:border-amber-400/40 transition-all flex flex-col justify-between shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono font-semibold text-rose-700 dark:text-amber-300">
                      {item.badge}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-rose-600 dark:group-hover:text-amber-300 transition-colors" />
                  </div>
                  <h3 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-rose-700 dark:group-hover:text-amber-300 transition-colors mb-1.5">
                    {item.name}
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications & Comparison */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Technical Specs */}
          <div className="lg:col-span-7 rounded-3xl p-6 sm:p-8 bg-white dark:bg-zinc-900/40 border border-zinc-200/90 dark:border-white/10">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">
              Technical Specifications
            </h3>
            <dl className="divide-y divide-zinc-200/80 dark:divide-white/10 text-sm">
              {biodata.specifications.map((spec) => (
                <div
                  key={spec.label}
                  className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                >
                  <dt className="text-zinc-500 dark:text-zinc-400 font-medium">
                    {spec.label}
                  </dt>
                  <dd className="text-zinc-900 dark:text-zinc-100 font-semibold sm:text-right font-mono text-xs sm:text-sm">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Launch CTA Card */}
          <div className="lg:col-span-5 rounded-3xl p-6 sm:p-8 bg-[#7B1E26] text-white border border-amber-500/30 shadow-xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-200 text-xs font-mono">
              <span>biodata.cogify.me</span>
            </div>
            <h3 className="text-2xl font-extrabold tracking-tight">
              Create Your Print-Ready Marriage Biodata Now
            </h3>
            <p className="text-sm text-rose-100/90 leading-relaxed">
              No account creation, no blurred text, and no watermarks. Start with a 1-click Bride or Groom sample or enter your own details with instant live A4 preview.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={biodata.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-xl bg-amber-300 hover:bg-amber-200 text-zinc-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <span>Open biodata.cogify.me</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
