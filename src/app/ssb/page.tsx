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
  Clock,
  ShieldCheck,
  Target,
  Download,
  Monitor,
  ArrowUpRight,
  MessageSquare,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { FaqSection, type FaqItem } from "@/components/seo/faq-section";
import { AuthorBio } from "@/components/seo/author-bio";

const SSB_FAQS: FaqItem[] = [
  {
    question: "How do I practice SSB Stage-2 Psychology tests online for free at ssb.cogify.me?",
    answer:
      "Open ssb.cogify.me in any desktop, tablet, or mobile browser and select TAT (12 slides: 30s view + 4m write), WAT (60 words at 15s/word with audio cues), SRT (60 situations in 30 minutes), SDT (15-minute 5-paragraph self-description), or the Full 98-Minute Stage-2 Psychology Battery. No login or signup is required.",
  },
  {
    question: "Are the timers on ssb.cogify.me identical to real Indian Armed Forces SSB selection centers?",
    answer:
      "Yes. Every module on ssb.cogify.me is calibrated to exact DIPR (Defence Institute of Psychological Research) selection board standards: 30-second picture viewing + 4-minute writing for TAT, 15 seconds per word with Web Audio API transition beeps for WAT, 30 minutes for 60 SRT situations, and 15 minutes for SDT.",
  },
  {
    question: "Does ssb.cogify.me also cover GTO tasks, Personal Interview (PIQ), and Officer Like Qualities (OLQs)?",
    answer:
      "Yes. Alongside the interactive Day-2 psychology simulators, ssb.cogify.me provides a complete GTO 9-task hub (with Lecturette and GPE timers), Personal Interview & PIQ dossier preparation guides, and a 15-OLQ behavioral reference library.",
  },
  {
    question: "Can I export my SSB test responses or practice offline?",
    answer:
      "Yes. ssb.cogify.me is an installable Progressive Web App (PWA) that stores your test sessions 100% locally in your browser's storage and lets you export print-ready PDF response dossiers for self-evaluation or mentor review.",
  },
  {
    question: "Is my written TAT/WAT/SRT/SDT data uploaded to any external server?",
    answer:
      "No. Like all Cogify applications, ssb.cogify.me runs 100% client-side with zero cloud accounts and zero telemetry. Your written stories, SDT reflections, and test history never leave your device.",
  },
];

export default function SsbStudioPage() {
  const ssb = siteConfig.ssb;
  const [activeView, setActiveView] = useState<"studio" | "battery">("studio");

  return (
    <div className="min-h-screen pt-28 pb-24 relative overflow-hidden">
      {/* Ambient Tactical Emerald & Amber Glow matching ssb.cogify.me */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[980px] h-[440px] bg-gradient-to-b from-emerald-600/12 via-amber-500/8 to-transparent blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Products", href: "/products" },
            { label: "SSB Stage-2 Test Practice Studio", href: "/ssb" },
          ]}
          includeJsonLd={false}
        />
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
          {/* App Icon & Subdomain Pill */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-[24px] overflow-hidden shadow-2xl shadow-emerald-900/25 border border-emerald-500/30 bg-zinc-900 p-3">
              <Image
                src={ssb.icon}
                alt={ssb.name}
                fill
                priority
                className="object-contain p-2"
                sizes="96px"
              />
            </div>

            <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200/80 dark:border-emerald-500/25 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
              <Globe className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Official COGIFY Web Studio • ssb.cogify.me</span>
              <span className="text-emerald-300 dark:text-emerald-500">•</span>
              <span className="text-amber-700 dark:text-amber-300 font-mono">
                TAT • WAT • SRT • SDT • GTO • IO
              </span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.08]">
            SSB Stage-2 Psychology{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-emerald-600 to-amber-600 dark:from-emerald-300 dark:via-emerald-200 dark:to-amber-400">
              Practice Studio.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl leading-relaxed">
            Train for Indian Armed Forces Services Selection Board (SSB) interviews online at{" "}
            <a
              href={ssb.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-700 dark:text-emerald-300 underline decoration-emerald-400/50 underline-offset-4 hover:text-emerald-600"
            >
              ssb.cogify.me
            </a>
            . Engineered with authentic DIPR selection board timers for{" "}
            <strong className="text-zinc-900 dark:text-white font-semibold">
              TAT (30s + 4m), WAT (15s/word + audio cues), SRT (60 situations / 30m), SDT (15m)
            </strong>
            , plus{" "}
            <strong className="text-emerald-600 dark:text-emerald-400 font-semibold">
              Full 98-Min Battery, GTO 9-Task Hub, IO Interview &amp; 15 OLQs
            </strong>{" "}
            — 100% free with zero login.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <a
              href={ssb.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-sm shadow-lg shadow-emerald-900/25 transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Launch SSB Studio (ssb.cogify.me)</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={`${ssb.url}/full-test`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 dark:bg-amber-500/15 dark:hover:bg-amber-500/25 dark:text-amber-200 font-semibold text-sm border border-amber-200/90 dark:border-amber-500/30 transition-colors flex items-center gap-2"
            >
              <Clock className="w-4 h-4" />
              <span>Start 98-Min Full Psychology Test</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <Link
              href="/suggestions"
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-100 text-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-200 font-semibold text-sm border border-zinc-200/90 dark:border-white/10 transition-colors flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Suggest Test Set or Feature</span>
            </Link>
          </div>

          {/* Trust Pill Strip */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-4xl text-xs">
            <div className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-white/10 text-zinc-700 dark:text-zinc-300 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>₹0 / $0 Free Forever</span>
            </div>
            <div className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-white/10 text-zinc-700 dark:text-zinc-300 font-medium">
              <Clock className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
              <span>Exact DIPR Exam Timers</span>
            </div>
            <div className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-white/10 text-zinc-700 dark:text-zinc-300 font-medium">
              <Download className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>PDF Dossier Export</span>
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
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-zinc-200/80 dark:border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                https://ssb.cogify.me — Interactive SSB Stage-2 Simulator
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveView("studio")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeView === "studio"
                    ? "bg-emerald-700 text-white shadow-sm"
                    : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>SSB Command Deck Overview</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveView("battery")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeView === "battery"
                    ? "bg-emerald-700 text-white shadow-sm"
                    : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Psychology Battery &amp; Timers</span>
              </button>
            </div>
          </div>

          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-200/80 dark:border-white/10">
            <div className={activeView === "studio" ? "block w-full h-full relative" : "hidden"}>
              <Image
                src={ssb.previewImage}
                alt="SSB Stage-2 Psychology Test Practice Studio at ssb.cogify.me"
                fill
                priority
                className="object-contain object-center"
                sizes="(max-width: 1280px) 100vw, 1150px"
              />
            </div>
            <div className={activeView === "battery" ? "block w-full h-full relative" : "hidden"}>
              <Image
                src={ssb.ogBanner}
                alt="SSB TAT WAT SRT SDT Simulator Overview at ssb.cogify.me"
                fill
                className="object-contain object-center"
                sizes="(max-width: 1280px) 100vw, 1150px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold mb-2">
            Simulator Architecture &amp; Modules
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">
            Engineered to Replicate Actual Selection Center Test Halls
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
            {ssb.philosophy}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ssb.features.map((feat) => (
            <div
              key={feat.title}
              className="rounded-3xl p-6 sm:p-7 bg-white dark:bg-zinc-900/40 border border-zinc-200/90 dark:border-white/10 flex flex-col justify-between shadow-xs dark:shadow-none hover:border-emerald-500/40 transition-all"
            >
              <div>
                <span className="inline-block text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-500/20 mb-4">
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

      {/* Direct Module Directory */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-emerald-50/70 via-white to-amber-50/50 dark:from-zinc-900/80 dark:via-zinc-950 dark:to-emerald-950/20 border border-zinc-200/90 dark:border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <div className="text-xs font-mono uppercase tracking-widest text-emerald-700 dark:text-emerald-400 font-semibold mb-2">
                Direct SSB Test Modules
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">
                Launch Directly Into Any Stage-2 Psychology or GTO Module
              </h2>
              <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
                Every module on{" "}
                <span className="font-mono text-zinc-800 dark:text-zinc-200">ssb.cogify.me</span>{" "}
                runs in your browser with automatic slide/word transitions, audio chimes, and local review.
              </p>
            </div>
            <a
              href={ssb.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 text-xs font-bold hover:opacity-90 transition-opacity shrink-0"
            >
              <span>Open SSB Command Deck</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ssb.communityLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl p-5 bg-white dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-white/10 hover:border-emerald-500/50 dark:hover:border-emerald-400/40 transition-all flex flex-col justify-between shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono font-semibold text-emerald-700 dark:text-emerald-300">
                      {item.badge}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors" />
                  </div>
                  <h3 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors mb-1.5">
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

      {/* Specifications & Launch Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Technical Specs */}
          <div className="lg:col-span-7 rounded-3xl p-6 sm:p-8 bg-white dark:bg-zinc-900/40 border border-zinc-200/90 dark:border-white/10">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">
              Technical Specifications
            </h3>
            <dl className="divide-y divide-zinc-200/80 dark:divide-white/10 text-sm">
              {ssb.specifications.map((spec) => (
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
          <div className="lg:col-span-5 rounded-3xl p-6 sm:p-8 bg-zinc-900 text-white border border-emerald-500/30 shadow-xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 text-xs font-mono">
              <Target className="w-3.5 h-3.5" />
              <span>ssb.cogify.me</span>
            </div>
            <h3 className="text-2xl font-extrabold tracking-tight">
              Start Your Timed SSB Psychology Practice Now
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Built for NDA, CDS, AFCAT, TES, SSC Tech &amp; ACC aspirants. Train under real selection center time pressure with zero signup and 100% browser privacy.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={ssb.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <span>Open ssb.cogify.me</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Direct Subpage Crawl Hub for ssb.cogify.me */}
        <div className="mt-12 rounded-3xl border border-zinc-200/90 dark:border-white/10 bg-white/95 dark:bg-zinc-900/40 p-6 sm:p-8 shadow-sm">
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
            Direct Stage-2 SSB Psychology, GTO &amp; Interview Simulators
          </h3>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-5">
            Jump straight into any timed Indian Armed Forces SSB assessment module on <code className="font-mono">ssb.cogify.me</code>:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {[
              { label: "Full SSB Psychology Battery", href: "https://ssb.cogify.me/full-test" },
              { label: "TAT Practice (30s/4m Timer)", href: "https://ssb.cogify.me/tat" },
              { label: "WAT Practice (60 Words / 15s)", href: "https://ssb.cogify.me/wat" },
              { label: "SRT Practice (60 Situations / 30m)", href: "https://ssb.cogify.me/srt" },
              { label: "SDT Self-Description Builder", href: "https://ssb.cogify.me/sdt" },
              { label: "GTO Tasks, GPE & Lecturette Timer", href: "https://ssb.cogify.me/gto" },
              { label: "Personal Interview & PIQ Simulator", href: "https://ssb.cogify.me/interview" },
              { label: "TAT Picture Library (120 Slides)", href: "https://ssb.cogify.me/library" },
              { label: "5-Day SSB Process & 15 OLQs", href: "https://ssb.cogify.me/about" },
              { label: "SSB Preparation FAQs", href: "https://ssb.cogify.me/faq" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl border border-zinc-200/80 dark:border-white/10 bg-zinc-50 dark:bg-zinc-950/60 text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:border-emerald-500/50 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
              >
                <span>{item.label}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60 shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <FaqSection
        title="SSB Stage-2 Test Practice Studio — Frequently Asked Questions"
        subtitle="Everything you need to know about practicing TAT, WAT, SRT, SDT, GTO, and Personal Interview modules at ssb.cogify.me."
        items={SSB_FAQS}
      />

      <AuthorBio currentSlug="ssb" />
    </div>
  );
}
