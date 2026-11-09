"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  CheckCircle2,
  Globe,
  FileText,
  Clock,
  ShieldCheck,
  Download,
  Monitor,
  ArrowUpRight,
  MessageSquare,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { FaqSection, type FaqItem } from "@/components/seo/faq-section";
import { AuthorBio } from "@/components/seo/author-bio";
import { OtherAppsShowcase } from "@/components/products/other-apps-showcase";

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
    <div className="min-h-screen pt-28 sm:pt-32 pb-24 bg-[#f5f5f5] dark:bg-[#0b0b0d] text-[#111] dark:text-[#f5f5f7]">
      <div className="max-w-[980px] mx-auto px-5 sm:px-8">
        <Breadcrumbs
          items={[
            { label: "Products", href: "/products" },
            { label: "SSB Stage-2 Test Practice Studio", href: "/ssb" },
          ]}
          includeJsonLd={false}
        />

        {/* Minimal Helumi Hero Section */}
        <section className="pt-6 pb-12">
          <div className="rounded-[28px] bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/[0.1] p-7 sm:p-10 space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-[20px] overflow-hidden border border-black/[0.08] dark:border-white/15 bg-[#0b0b0d] p-2 shrink-0">
                <Image
                  src={ssb.icon}
                  alt={ssb.name}
                  fill
                  priority
                  className="object-contain p-2"
                  sizes="80px"
                />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#666] dark:text-[#a1a1aa]">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#111] text-white dark:bg-white dark:text-[#111] font-semibold">
                    <Globe className="w-3 h-3" />
                    ssb.cogify.me
                  </span>
                  <span>·</span>
                  <span>TAT · WAT · SRT · SDT · GTO · IO</span>
                </div>
                <p className="text-xs text-[#666] dark:text-[#a1a1aa] mt-1">
                  Exact DIPR Selection Board Timers · 100% Free Forever
                </p>
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-[-0.035em] leading-[1.06] text-[#111] dark:text-white">
              SSB Stage-2 Psychology{" "}
              <span className="font-display italic font-normal">Practice Studio.</span>
            </h1>

            <p className="text-sm sm:text-base text-[#555] dark:text-[#a1a1aa] max-w-2xl leading-relaxed">
              Train for Indian Armed Forces Services Selection Board (SSB) interviews online at{" "}
              <a
                href={ssb.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#111] dark:text-white underline underline-offset-4"
              >
                ssb.cogify.me
              </a>
              . Engineered with authentic DIPR selection board timers for TAT (30s + 4m), WAT (15s/word + audio cues), SRT (60 situations / 30m), SDT (15m), plus Full 98-Min Battery, GTO 9-Task Hub, IO Interview &amp; 15 OLQs.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={ssb.url}
                target="_blank"
                rel="noopener noreferrer"
                className="helumi-pill text-sm"
              >
                <span>Launch SSB Studio (ssb.cogify.me)</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={`${ssb.url}/full-test`}
                target="_blank"
                rel="noopener noreferrer"
                className="helumi-pill-secondary text-sm"
              >
                <Clock className="w-4 h-4" />
                <span>Start 98-Min Full Psychology Test</span>
              </a>

              <Link href="/suggestions" className="helumi-pill-secondary text-sm">
                <MessageSquare className="w-4 h-4" />
                <span>Suggest Test Set</span>
              </Link>
            </div>

            {/* Trust Pill Strip */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
              <div className="flex items-center gap-2 py-2.5 px-3 rounded-xl bg-[#f5f5f5] dark:bg-[#0b0b0d] border border-black/[0.06] dark:border-white/[0.08] text-[#333] dark:text-[#d4d4d8]">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>100% Free Forever</span>
              </div>
              <div className="flex items-center gap-2 py-2.5 px-3 rounded-xl bg-[#f5f5f5] dark:bg-[#0b0b0d] border border-black/[0.06] dark:border-white/[0.08] text-[#333] dark:text-[#d4d4d8]">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>Exact DIPR Timers</span>
              </div>
              <div className="flex items-center gap-2 py-2.5 px-3 rounded-xl bg-[#f5f5f5] dark:bg-[#0b0b0d] border border-black/[0.06] dark:border-white/[0.08] text-[#333] dark:text-[#d4d4d8]">
                <Download className="w-3.5 h-3.5 shrink-0" />
                <span>PDF Dossier Export</span>
              </div>
              <div className="flex items-center gap-2 py-2.5 px-3 rounded-xl bg-[#f5f5f5] dark:bg-[#0b0b0d] border border-black/[0.06] dark:border-white/[0.08] text-[#333] dark:text-[#d4d4d8]">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span>Local Browser Privacy</span>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Live Studio Screenshot Showcase */}
        <section className="mb-16">
          <div className="rounded-[26px] p-4 sm:p-6 bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/[0.1]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-black/[0.06] dark:border-white/[0.08]">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                <span className="ml-2 text-xs font-mono text-[#666] dark:text-[#a1a1aa]">
                  ssb.cogify.me — Interactive SSB Stage-2 Simulator
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setActiveView("studio")}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                    activeView === "studio"
                      ? "bg-[#111] text-white dark:bg-white dark:text-[#111]"
                      : "bg-[#f5f5f5] dark:bg-[#0b0b0d] text-[#666] dark:text-[#a1a1aa]"
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span>Command Deck</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveView("battery")}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                    activeView === "battery"
                      ? "bg-[#111] text-white dark:bg-white dark:text-[#111]"
                      : "bg-[#f5f5f5] dark:bg-[#0b0b0d] text-[#666] dark:text-[#a1a1aa]"
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Psychology Battery</span>
                </button>
              </div>
            </div>

            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-[#0b0b0d] border border-black/10 dark:border-white/10">
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
        <section className="mb-16">
          <div className="max-w-2xl mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#777] dark:text-[#888] mb-1">
              simulator architecture
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-[#111] dark:text-white">
              Replicating actual selection center{" "}
              <span className="font-display italic font-normal">test halls.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ssb.features.map((feat) => (
              <div
                key={feat.title}
                className="rounded-[22px] p-6 bg-white dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.08]"
              >
                <span className="inline-block text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#f5f5f5] dark:bg-white/[0.06] text-[#555] dark:text-[#d4d4d8] mb-3.5">
                  {feat.tag}
                </span>
                <h3 className="text-base font-bold text-[#111] dark:text-white mb-1.5">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#555] dark:text-[#a1a1aa] leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Direct Module Directory */}
        <section className="mb-16">
          <div className="rounded-[26px] p-6 sm:p-9 bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/[0.1]">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#777] dark:text-[#888] mb-1">
                  direct ssb test modules
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-[#111] dark:text-white">
                  Jump into any Stage-2 module.
                </h2>
              </div>
              <a
                href={ssb.url}
                target="_blank"
                rel="noopener noreferrer"
                className="helumi-pill text-xs self-start lg:self-auto"
              >
                <span>Open SSB Command Deck</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {ssb.communityLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-[18px] p-5 bg-[#f5f5f5] dark:bg-[#0b0b0d] border border-black/[0.06] dark:border-white/[0.08] hover:border-black/25 dark:hover:border-white/25 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-[11px] font-mono text-[#666] dark:text-[#a1a1aa]">
                        {item.badge}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#888] group-hover:text-[#111] dark:group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-sm font-bold text-[#111] dark:text-white mb-1">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#666] dark:text-[#a1a1aa] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specs */}
        <section className="mb-12">
          <div className="rounded-[24px] p-6 sm:p-8 bg-white dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.08]">
            <h3 className="text-xl font-bold text-[#111] dark:text-white mb-5">
              Technical Specifications
            </h3>
            <dl className="divide-y divide-black/[0.06] dark:divide-white/[0.07] text-xs sm:text-sm">
              {ssb.specifications.map((spec) => (
                <div
                  key={spec.label}
                  className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                >
                  <dt className="text-[#666] dark:text-[#a1a1aa] font-medium">
                    {spec.label}
                  </dt>
                  <dd className="text-[#111] dark:text-[#f5f5f7] font-semibold sm:text-right font-mono">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </div>

      <FaqSection
        title="SSB Stage-2 Test Practice Studio — Frequently Asked Questions"
        subtitle="Everything you need to know about practicing TAT, WAT, SRT, SDT, GTO, and Personal Interview modules at ssb.cogify.me."
        items={SSB_FAQS}
      />

      <div className="max-w-[980px] mx-auto px-5 sm:px-8">
        <OtherAppsShowcase currentSlug="ssb" />
      </div>

      <AuthorBio currentSlug="ssb" />
    </div>
  );
}
