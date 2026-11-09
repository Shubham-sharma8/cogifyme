"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
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
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { FaqSection, type FaqItem } from "@/components/seo/faq-section";
import { AuthorBio } from "@/components/seo/author-bio";
import { OtherAppsShowcase } from "@/components/products/other-apps-showcase";

const BIODATA_FAQS: FaqItem[] = [
  {
    question: "How do I create a marriage biodata online for free at biodata.cogify.me?",
    answer:
      "Open biodata.cogify.me, choose from 242 cultural and modern templates across 14 layout engines, fill in your personal, family, education, and horoscope details with an instant 1:1 live A4 preview, or load a 1-click Bride/Groom sample, and click Download to export a print-ready 300-DPI PDF, editable Word (.docx), or 3x Retina PNG — 100% free with zero watermarks and no sign-up.",
  },
  {
    question: "Can I download my marriage biodata in both PDF and editable Word (.docx) format?",
    answer:
      "Yes. Unlike paid tools that lock Word downloads behind a paywall, Marriage Biodata Maker Studio exports high-resolution 300-DPI A4 PDF, fully editable Microsoft Word (.docx), and 3x Retina PNG for WhatsApp sharing completely free.",
  },
  {
    question: "Does BiodataMaker support Hindu, Muslim, Sikh, Christian, Jain, and Buddhist formats?",
    answer:
      "Yes. The studio includes 242 handcrafted templates covering Hindu (with Vedic Rashi & Nakshatra Kundali charts and Ganesh/Om invocations), Muslim Nikah Nama biodata formats, Sikh Anand Karaj formats, Christian matrimony layouts, Jain, Buddhist, and minimalist modern executive designs.",
  },
  {
    question: "Which Indian and global languages are supported on biodata.cogify.me?",
    answer:
      "Marriage Biodata Maker Studio supports 9 languages out of the box: English, Hindi (हिन्दी), Marathi (मराठी), Gujarati (गुजराती), Tamil (தமிழ்), Telugu (తెలుగు), Kannada (ಕನ್ನಡ), Bengali (বাংলা), and Punjabi (ਪੰਜਾਬੀ), with automatic label translation.",
  },
  {
    question: "Is my personal data, photo, or phone number uploaded to any server?",
    answer:
      "No. BiodataMaker runs 100% locally inside your browser using client-side state and localStorage. Your personal details, family information, contact numbers, and portrait photos never leave your device.",
  },
];

export default function BiodataStudioPage() {
  const biodata = siteConfig.biodata;
  const [activeView, setActiveView] = useState<"studio" | "banner" | "mobile">("studio");

  return (
    <div className="min-h-screen pt-28 sm:pt-32 pb-24 bg-[#f5f5f5] dark:bg-[#0b0b0d] text-[#111] dark:text-[#f5f5f7]">
      <div className="max-w-[980px] mx-auto px-5 sm:px-8">
        <Breadcrumbs
          items={[
            { label: "Products", href: "/products" },
            { label: "Marriage Biodata Maker Studio", href: "/biodata" },
          ]}
          includeJsonLd={false}
        />

        {/* Minimal Helumi Hero Section */}
        <section className="pt-6 pb-12">
          <div className="rounded-[28px] bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/[0.1] p-7 sm:p-10 space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-[20px] overflow-hidden border border-black/[0.08] dark:border-white/15 bg-[#7B1E26] shrink-0">
                <Image
                  src={biodata.icon}
                  alt={biodata.name}
                  fill
                  priority
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#666] dark:text-[#a1a1aa]">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#111] text-white dark:bg-white dark:text-[#111] font-semibold">
                    <Globe className="w-3 h-3" />
                    biodata.cogify.me
                  </span>
                  <span>·</span>
                  <span>242 Templates</span>
                  <span>·</span>
                  <span>9 Languages</span>
                </div>
                <p className="text-xs text-[#666] dark:text-[#a1a1aa] mt-1">
                  300-DPI Vector PDF, Editable Word (.docx) &amp; 3x Retina PNG · 100% Free
                </p>
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-[-0.035em] leading-[1.06] text-[#111] dark:text-white">
              Marriage Biodata Maker{" "}
              <span className="font-display italic font-normal">Studio.</span>
            </h1>

            <p className="text-sm sm:text-base text-[#555] dark:text-[#a1a1aa] max-w-2xl leading-relaxed">
              Create a print-ready A4 Marriage Biodata online in 2 minutes at{" "}
              <a
                href={biodata.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#111] dark:text-white underline underline-offset-4"
              >
                biodata.cogify.me
              </a>
              . Engineered with an instant 1:1 live A4 preview, 242 cultural &amp; modern templates, 14 layout engines, 9 languages, Vedic Kundali charts, and instant 300-DPI PDF, Word (.docx) &amp; PNG downloads.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={biodata.url}
                target="_blank"
                rel="noopener noreferrer"
                className="helumi-pill text-sm"
              >
                <span>Launch Studio (biodata.cogify.me)</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={`${biodata.url}/#templates-gallery`}
                target="_blank"
                rel="noopener noreferrer"
                className="helumi-pill-secondary text-sm"
              >
                <LayoutTemplate className="w-4 h-4" />
                <span>Browse All 242 Templates</span>
              </a>

              <Link href="/suggestions" className="helumi-pill-secondary text-sm">
                <MessageSquare className="w-4 h-4" />
                <span>Request Template</span>
              </Link>
            </div>

            {/* Trust Pill Strip */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
              <div className="flex items-center gap-2 py-2.5 px-3 rounded-xl bg-[#f5f5f5] dark:bg-[#0b0b0d] border border-black/[0.06] dark:border-white/[0.08] text-[#333] dark:text-[#d4d4d8]">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>100% Free Forever</span>
              </div>
              <div className="flex items-center gap-2 py-2.5 px-3 rounded-xl bg-[#f5f5f5] dark:bg-[#0b0b0d] border border-black/[0.06] dark:border-white/[0.08] text-[#333] dark:text-[#d4d4d8]">
                <Download className="w-3.5 h-3.5 shrink-0" />
                <span>PDF, Word &amp; PNG</span>
              </div>
              <div className="flex items-center gap-2 py-2.5 px-3 rounded-xl bg-[#f5f5f5] dark:bg-[#0b0b0d] border border-black/[0.06] dark:border-white/[0.08] text-[#333] dark:text-[#d4d4d8]">
                <Languages className="w-3.5 h-3.5 shrink-0" />
                <span>9 Languages</span>
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
                  biodata.cogify.me — Interactive A4 Studio
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
                  <span>Split-Screen Studio</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveView("banner")}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                    activeView === "banner"
                      ? "bg-[#111] text-white dark:bg-white dark:text-[#111]"
                      : "bg-[#f5f5f5] dark:bg-[#0b0b0d] text-[#666] dark:text-[#a1a1aa]"
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>A4 Output</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveView("mobile")}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                    activeView === "mobile"
                      ? "bg-[#111] text-white dark:bg-white dark:text-[#111]"
                      : "bg-[#f5f5f5] dark:bg-[#0b0b0d] text-[#666] dark:text-[#a1a1aa]"
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Mobile</span>
                </button>
              </div>
            </div>

            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-[#0b0b0d] border border-black/10 dark:border-white/10">
              <div className={activeView === "studio" ? "block w-full h-full relative" : "hidden"}>
                <Image
                  src={biodata.previewImage}
                  alt="BiodataMaker Live Split-Screen A4 Studio at biodata.cogify.me"
                  fill
                  priority
                  className="object-contain object-top"
                  sizes="(max-width: 1280px) 100vw, 1150px"
                />
              </div>
              <div className={activeView === "banner" ? "block w-full h-full relative" : "hidden"}>
                <Image
                  src={biodata.ogBanner}
                  alt="BiodataMaker A4 Output & Features Overview"
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 1280px) 100vw, 1150px"
                />
              </div>
              <div
                className={
                  activeView === "mobile"
                    ? "w-full h-full flex items-center justify-center p-4 bg-[#0b0b0d]"
                    : "hidden"
                }
              >
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
            </div>
          </div>
        </section>

        {/* Core Capabilities Grid */}
        <section className="mb-16">
          <div className="max-w-2xl mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#777] dark:text-[#888] mb-1">
              studio architecture
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-[#111] dark:text-white">
              Desktop publishing in your{" "}
              <span className="font-display italic font-normal">browser.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {biodata.features.map((feat) => (
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

        {/* Community & Cultural Presets Directory */}
        <section className="mb-16">
          <div className="rounded-[26px] p-6 sm:p-9 bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/[0.1]">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#777] dark:text-[#888] mb-1">
                  cultural &amp; regional formats
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-[#111] dark:text-white">
                  Dedicated presets for every tradition.
                </h2>
              </div>
              <a
                href={biodata.url}
                target="_blank"
                rel="noopener noreferrer"
                className="helumi-pill text-xs self-start lg:self-auto"
              >
                <span>Open Live Builder</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {biodata.communityLinks.map((item) => (
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
              {biodata.specifications.map((spec) => (
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
        title="Marriage Biodata Maker Studio — Frequently Asked Questions"
        subtitle="Everything you need to know about creating, translating, and exporting print-ready A4 marriage biodata documents at biodata.cogify.me."
        items={BIODATA_FAQS}
      />

      <div className="max-w-[980px] mx-auto px-5 sm:px-8">
        <OtherAppsShowcase currentSlug="biodata" />
      </div>

      <AuthorBio currentSlug="biodata" />
    </div>
  );
}
