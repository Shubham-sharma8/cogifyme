"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  EyeOff,
  CheckCircle2,
  Smartphone,
  MessageSquare,
  ChevronRight,
  Command,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { FaqSection, type FaqItem } from "@/components/seo/faq-section";
import { AuthorBio } from "@/components/seo/author-bio";
import { InlineAppComparison } from "@/components/compare/inline-app-comparison";
import { OtherAppsShowcase } from "@/components/products/other-apps-showcase";
import { AppleLogoIcon, AppStoreIcon, SafariIcon } from "@/components/ui/platform-icons";

const ELEMENT_HIDER_FAQS: FaqItem[] = [
  {
    question: "How do I hide unwanted elements in Safari on iPhone, iPad, or Mac?",
    answer:
      "Activate Element Hider from the Safari extensions menu (or press Option + Shift + H on macOS), tap or click any distracting banner, floating bar, sidebar, or popup on the webpage, and choose whether to hide it for the current session or permanently on that website.",
  },
  {
    question: "Can I undo or restore an element after hiding it?",
    answer:
      "Yes. You can undo your last hidden element with a single tap, manage per-site rules from the extension popup, or temporarily pause Element Hider on any domain.",
  },
  {
    question: "Does Element Hider track my browsing history or webpage content?",
    answer:
      "No. Element Hider runs 100% locally inside Safari's WebKit sandbox. Zero bytes of browsing history or DOM selectors are ever sent to external servers.",
  },
  {
    question: "Is Element Hider completely free on the Apple App Store?",
    answer:
      "Yes. Element Hider is 100% free on the App Store (id6811377087) for iOS, iPadOS, and macOS with zero subscriptions and zero ads.",
  },
];

export default function ElementHiderPage() {
  const hider = siteConfig.elementHider;
  const [platform, setPlatform] = useState<"ios" | "mac">("ios");
  const screenshots =
    platform === "ios"
      ? hider.screenshots
      : hider.screenshotsMac || hider.screenshots;
  const [activeScreenshotIndex, setActiveScreenshotIndex] = useState(0);
  const activeScreenshot = screenshots[activeScreenshotIndex] || screenshots[0];

  const handlePlatformChange = (p: "ios" | "mac") => {
    setPlatform(p);
    setActiveScreenshotIndex(0);
  };

  return (
    <div className="min-h-screen pt-28 sm:pt-32 pb-20 bg-[#f5f5f5] dark:bg-[#0b0b0d] text-[#111] dark:text-[#f5f5f7]">
      <div className="max-w-[980px] mx-auto px-5 sm:px-8">
        <Breadcrumbs
          items={[
            { label: "Products", href: "/products" },
            { label: hider.name, href: "/element-hider" },
          ]}
          includeJsonLd={false}
        />

        {/* Hero Header */}
        <section className="pt-6 pb-12">
          <div className="rounded-[28px] bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/[0.1] p-7 sm:p-10 space-y-6">
            <div className="flex items-center space-x-3.5">
              <div className="relative w-16 h-16 rounded-[18px] overflow-hidden border border-black/[0.08] dark:border-white/15 bg-[#f5f5f5] dark:bg-[#0b0b0d] shrink-0">
                <Image
                  src="/brand/Element-Hider/icon.png"
                  alt="Element Hider App Icon"
                  fill
                  priority
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#666] dark:text-[#a1a1aa]">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#111] text-white dark:bg-white dark:text-[#111] font-semibold">
                    App Store • v{hider.version}
                  </span>
                  <span>·</span>
                  <span>{hider.platform}</span>
                  <span>·</span>
                  <span>100% Free</span>
                </div>
                <div className="text-xs text-[#666] dark:text-[#a1a1aa] mt-1">
                  {hider.primaryCategory} · {hider.secondaryCategory} · Zero Ads
                </div>
              </div>
            </div>

            <div className="space-y-2.5">
              <h1 className="text-3xl sm:text-5xl font-bold tracking-[-0.035em] leading-[1.06] text-[#111] dark:text-white">
                Browse your way.{" "}
                <span className="font-display italic font-normal">Hide anything.</span>
              </h1>
              <p className="text-base sm:text-lg text-[#444] dark:text-[#d4d4d8]">
                {hider.promotionalText}
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#555] dark:text-[#a1a1aa] leading-relaxed max-w-2xl">
              {hider.shortDescription} {hider.fullDescription}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={hider.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="helumi-pill text-sm"
              >
                <AppStoreIcon className="w-4 h-4" />
                <span>Download on the App Store</span>
              </a>

              <button
                type="button"
                className="helumi-pill-secondary text-sm cursor-pointer"
                onClick={() => {
                  const el = document.getElementById("screenshots");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <SafariIcon className="w-4 h-4" />
                <span>Explore Extension Tour</span>
              </button>

              <Link href="/suggestions" className="helumi-pill-secondary text-sm">
                <MessageSquare className="w-4 h-4" />
                <span>Feedback &amp; Bug Reports</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Interactive Safari Screenshot Showcase */}
        <section id="screenshots" className="py-12 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#777] dark:text-[#888] mb-1">
                interactive walkthrough
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-[#111] dark:text-white">
                See Element Hider in{" "}
                <span className="font-display italic font-normal">action.</span>
              </h2>
            </div>

            {/* Platform Switcher */}
            <div className="inline-flex items-center gap-1 p-1 rounded-full bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/10 self-start">
              <button
                type="button"
                onClick={() => handlePlatformChange("ios")}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
                  platform === "ios"
                    ? "bg-[#111] text-white dark:bg-white dark:text-[#111]"
                    : "text-[#666] dark:text-[#a1a1aa] hover:text-[#111] dark:hover:text-white"
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>iOS Safari</span>
              </button>
              <button
                type="button"
                onClick={() => handlePlatformChange("mac")}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
                  platform === "mac"
                    ? "bg-[#111] text-white dark:bg-white dark:text-[#111]"
                    : "text-[#666] dark:text-[#a1a1aa] hover:text-[#111] dark:hover:text-white"
                }`}
              >
                <AppleLogoIcon className="w-3.5 h-3.5 -mt-0.5" />
                <span>macOS Safari</span>
              </button>
            </div>
          </div>

          {/* Screenshot Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 mb-6">
            {screenshots.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveScreenshotIndex(idx)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer border ${
                  activeScreenshotIndex === idx
                    ? "bg-[#111] text-white border-[#111] dark:bg-white dark:text-[#111] dark:border-white"
                    : "bg-white dark:bg-[#141417] text-[#666] dark:text-[#a1a1aa] border-black/[0.08] dark:border-white/10"
                }`}
              >
                <span className="font-mono text-[11px] opacity-75">{idx + 1}.</span>
                <span>{s.title}</span>
              </button>
            ))}
          </div>

          {/* Screenshot Showcase Display Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white dark:bg-[#141417] rounded-[26px] p-6 sm:p-9 border border-black/[0.08] dark:border-white/[0.1]">
            {platform === "ios" ? (
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-[270px] sm:w-[300px] rounded-[42px] p-2.5 bg-[#0b0b0d] shadow-2xl border-4 border-zinc-800">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-black/80 rounded-full z-20 pointer-events-none" />
                  <div className="relative w-full aspect-[1206/2622] rounded-[34px] overflow-hidden bg-[#0b0b0d]">
                    <Image
                      src={activeScreenshot.image}
                      alt={activeScreenshot.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 280px, 320px"
                      priority
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="lg:col-span-6 flex justify-center w-full">
                <div className="w-full rounded-2xl bg-[#0b0b0d] border border-white/10 shadow-xl overflow-hidden flex flex-col">
                  <div className="h-8 px-4 bg-[#141417] border-b border-white/10 flex items-center justify-between shrink-0 select-none">
                    <div className="flex items-center space-x-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                    </div>
                    <div className="text-[11px] font-mono text-[#a1a1aa]">
                      macOS Safari — Element Hider
                    </div>
                    <div className="text-[10px] text-[#888] font-mono">⌥⇧H</div>
                  </div>
                  <div className="relative w-full aspect-[3350/1940] bg-[#0b0b0d] overflow-hidden">
                    <Image
                      src={activeScreenshot.image}
                      alt={activeScreenshot.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 600px"
                      priority
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Right: Detailed Step Explanation */}
            <div className={platform === "ios" ? "lg:col-span-7 space-y-5" : "lg:col-span-6 space-y-5"}>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#666] dark:text-[#a1a1aa]">
                <span className="px-2.5 py-0.5 rounded-full bg-[#f5f5f5] dark:bg-white/[0.06] text-[#111] dark:text-white font-semibold">
                  Step {activeScreenshotIndex + 1} of {screenshots.length}
                </span>
                <span>·</span>
                <span>{activeScreenshot.tag}</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#111] dark:text-white">
                  {activeScreenshot.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#666] dark:text-[#a1a1aa] mt-1">
                  {activeScreenshot.subtitle}
                </p>
              </div>

              {platform === "mac" && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-[#f5f5f5] dark:bg-[#0b0b0d] border border-black/[0.06] dark:border-white/[0.08] text-xs text-[#333] dark:text-[#d4d4d8]">
                  <Command className="w-4 h-4 shrink-0" />
                  <span>
                    Mac Global Shortcut: Press{" "}
                    <kbd className="font-mono font-bold px-1.5 py-0.5 rounded bg-white dark:bg-[#141417] border border-black/10 dark:border-white/10">
                      ⌥ + ⇧ + H
                    </kbd>{" "}
                    to activate the element picker on any webpage.
                  </span>
                </div>
              )}

              <p className="text-sm sm:text-base text-[#555] dark:text-[#a1a1aa] leading-relaxed">
                {activeScreenshot.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeScreenshot.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs text-[#333] dark:text-[#d4d4d8] p-2.5 rounded-xl bg-[#f5f5f5] dark:bg-[#0b0b0d] border border-black/[0.05] dark:border-white/[0.07]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#111] dark:text-white shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2.5 pt-3 border-t border-black/[0.06] dark:border-white/[0.08]">
                <button
                  type="button"
                  disabled={activeScreenshotIndex === 0}
                  onClick={() => setActiveScreenshotIndex((prev) => Math.max(0, prev - 1))}
                  className="helumi-pill-secondary text-xs disabled:opacity-40 cursor-pointer"
                >
                  Previous
                </button>
                <button
                  type="button"
                  disabled={activeScreenshotIndex === screenshots.length - 1}
                  onClick={() =>
                    setActiveScreenshotIndex((prev) =>
                      Math.min(screenshots.length - 1, prev + 1)
                    )
                  }
                  className="helumi-pill text-xs disabled:opacity-40 cursor-pointer"
                >
                  <span>Next</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 6 Key Features */}
        <section className="py-12">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#777] dark:text-[#888] mb-1">
              capabilities
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-[#111] dark:text-white">
              Built for purpose.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {hider.features.map((f, i) => (
              <div
                key={i}
                className="p-6 rounded-[22px] bg-white dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.08] space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#f5f5f5] dark:bg-white/[0.06] text-[#555] dark:text-[#d4d4d8]">
                    {f.tag}
                  </span>
                  <EyeOff className="w-4 h-4 text-[#777]" />
                </div>
                <h3 className="text-base font-bold text-[#111] dark:text-white">
                  {f.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#555] dark:text-[#a1a1aa] leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-10">
          <h2 className="text-2xl font-bold tracking-[-0.03em] text-[#111] dark:text-white mb-5">
            Privacy &amp; Architecture Specifications
          </h2>
          <div className="rounded-[22px] border border-black/[0.07] dark:border-white/[0.08] overflow-hidden bg-white dark:bg-[#141417]">
            <table className="w-full text-left text-xs sm:text-sm">
              <tbody className="divide-y divide-black/[0.06] dark:divide-white/[0.07]">
                {hider.specifications.map((s, i) => (
                  <tr key={i}>
                    <td className="py-3.5 px-5 font-medium text-[#666] dark:text-[#a1a1aa] w-1/3">
                      {s.label}
                    </td>
                    <td className="py-3.5 px-5 font-semibold text-[#111] dark:text-[#f5f5f7]">
                      {s.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <InlineAppComparison appSlug="element-hider" />

      <FaqSection
        title="Element Hider — Frequently Asked Questions"
        subtitle="Answers about hiding distracting webpage elements, saving domain rules, and Safari privacy."
        items={ELEMENT_HIDER_FAQS}
      />

      <div className="max-w-[980px] mx-auto px-5 sm:px-8">
        <OtherAppsShowcase currentSlug="element-hider" />
      </div>

      <AuthorBio currentSlug="element-hider" />
    </div>
  );
}
