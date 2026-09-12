"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  EyeOff,
  Sliders,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Smartphone,
  Compass,
  Layers,
  Lock,
  MessageSquare,
  Zap,
  Globe,
  SlidersHorizontal,
  ChevronRight,
  Shield,
  Download,
  Share2,
  Monitor,
  Command,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { MovingBorderButton } from "@/components/ui/moving-border";

export default function ElementHiderPage() {
  const hider = siteConfig.elementHider;
  const [platform, setPlatform] = useState<"mac" | "ios">("mac");
  const screenshots = platform === "mac" ? (hider.screenshotsMac || hider.screenshots) : hider.screenshots;
  const [activeScreenshotIndex, setActiveScreenshotIndex] = useState(0);
  const activeScreenshot = screenshots[activeScreenshotIndex] || screenshots[0];

  const handlePlatformChange = (p: "mac" | "ios") => {
    setPlatform(p);
    setActiveScreenshotIndex(0);
  };

  return (
    <div className="pt-28 pb-20 relative">
      {/* Ambient background glow */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center space-x-3.5">
            <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 shadow-xl bg-zinc-100 dark:bg-zinc-800 shrink-0">
              <Image
                src="/brand/Element-Hider/icon.png"
                alt="Element Hider App Icon"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30">
                  Safari Web Extension
                </span>
                <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
                  Version {hider.version} Live
                </span>
                <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/10">
                  {hider.primaryCategory} • {hider.secondaryCategory}
                </span>
              </div>
              <div className="text-xs text-zinc-500 font-mono mt-1">
                {hider.platform} • 100% Free Forever • Zero Ads
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-tight">
              Browse Your Way.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-300 dark:via-purple-200 dark:to-pink-300">
                Hide Anything.
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-800 dark:text-zinc-200 font-medium">
              {hider.promotionalText}
            </p>
          </div>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
            {hider.shortDescription} {hider.fullDescription}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <MovingBorderButton
              borderRadius="0.75rem"
              className="px-6 py-3.5 font-semibold text-sm cursor-pointer"
              onClick={() => {
                const el = document.getElementById("screenshots");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Explore Extension Tour</span>
              </span>
            </MovingBorderButton>

            <Link
              href="/element-hider/privacy"
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-100 text-zinc-800 hover:text-zinc-950 font-semibold text-sm border border-zinc-200/90 shadow-xs dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-300 dark:hover:text-white dark:border-white/10 transition-colors flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Zero-Tracking Privacy Policy</span>
            </Link>

            <Link
              href="/suggestions"
              className="px-6 py-3.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 dark:bg-indigo-950/40 dark:hover:bg-indigo-900/40 dark:text-indigo-300 font-semibold text-sm border border-indigo-200 dark:border-indigo-500/30 transition-colors flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Feedback & Bug Reports</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Safari Screenshot Showcase */}
      <section
        id="screenshots"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-24 border-t border-zinc-200/80 dark:border-white/5"
      >
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
            Visual Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight">
            See Element Hider in Action
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2">
            Designed seamlessly for Safari. Step through the real macOS and iOS interfaces from initial setup to a distraction-free webpage.
          </p>
        </div>

        {/* Platform Switcher */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <button
            onClick={() => handlePlatformChange("mac")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer border ${
              platform === "mac"
                ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 border-zinc-900 dark:border-white shadow-md"
                : "bg-white hover:bg-zinc-100 text-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-300 border-zinc-200/80 dark:border-white/10"
            }`}
          >
            <Monitor className="w-4 h-4 text-indigo-500" />
            <span>macOS Safari</span>
            <span className="text-[11px] font-mono opacity-70 px-1.5 py-0.5 bg-zinc-200 dark:bg-zinc-800 rounded">6 Views</span>
          </button>
          <button
            onClick={() => handlePlatformChange("ios")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer border ${
              platform === "ios"
                ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 border-zinc-900 dark:border-white shadow-md"
                : "bg-white hover:bg-zinc-100 text-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-300 border-zinc-200/80 dark:border-white/10"
            }`}
          >
            <Smartphone className="w-4 h-4 text-emerald-500" />
            <span>iOS Safari (iPhone)</span>
            <span className="text-[11px] font-mono opacity-70 px-1.5 py-0.5 bg-zinc-200 dark:bg-zinc-800 rounded">5 Views</span>
          </button>
        </div>

        {/* Screenshot Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {screenshots.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setActiveScreenshotIndex(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer border ${
                activeScreenshotIndex === idx
                  ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/20"
                  : "bg-zinc-100 hover:bg-zinc-200/80 text-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-300 border-zinc-200/80 dark:border-white/10"
              }`}
            >
              <span className="font-mono text-[11px] opacity-75">{idx + 1}.</span>
              <span>{s.title}</span>
            </button>
          ))}
        </div>

        {/* Screenshot Showcase Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-50 dark:bg-zinc-900/40 rounded-3xl p-6 sm:p-10 border border-zinc-200/80 dark:border-white/5">
          {/* Left: Device Frame with Image */}
          {platform === "ios" ? (
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-[280px] sm:w-[320px] aspect-[1206/2622] rounded-[42px] p-3 bg-zinc-900 shadow-2xl border-4 border-zinc-800 ring-1 ring-white/10">
                {/* Dynamic Island */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-20 pointer-events-none" />

                {/* Inner Screen */}
                <div className="relative w-full h-full rounded-[34px] overflow-hidden bg-black">
                  <Image
                    src={activeScreenshot.image}
                    alt={activeScreenshot.title}
                    fill
                    className="object-cover transition-opacity duration-300"
                    sizes="(max-width: 768px) 280px, 320px"
                    priority
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="lg:col-span-6 flex justify-center w-full">
              <div className="w-full rounded-2xl bg-zinc-950 border border-zinc-700/80 shadow-2xl overflow-hidden ring-1 ring-white/10 flex flex-col">
                {/* macOS Window Titlebar */}
                <div className="h-9 px-4 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between shrink-0 select-none">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50" />
                  </div>
                  <div className="text-[11px] font-medium text-zinc-400 font-mono tracking-tight flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-indigo-400" />
                    <span>macOS Safari — Element Hider</span>
                  </div>
                  <div className="flex items-center space-x-1 text-[10px] text-zinc-400 font-mono">
                    <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">⌥</kbd>
                    <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">⇧</kbd>
                    <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">H</kbd>
                  </div>
                </div>

                {/* macOS Screen Content */}
                <div className="relative w-full aspect-[3350/1940] bg-zinc-950 overflow-hidden">
                  <Image
                    src={activeScreenshot.image}
                    alt={activeScreenshot.title}
                    fill
                    className="object-cover transition-opacity duration-300"
                    sizes="(max-width: 768px) 100vw, 600px"
                    priority
                  />
                </div>
              </div>
            </div>
          )}

          {/* Right: Detailed Step Explanation */}
          <div className={platform === "ios" ? "lg:col-span-7 space-y-6" : "lg:col-span-6 space-y-6"}>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-mono font-medium border border-indigo-200 dark:border-indigo-500/30">
                <span>Step {activeScreenshotIndex + 1} of {screenshots.length}</span>
                <span>•</span>
                <span>{activeScreenshot.tag}</span>
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-white/10">
                {platform === "mac" ? "macOS Safari" : "iOS Safari"}
              </span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white">
                {activeScreenshot.title}
              </h3>
              <p className="text-sm sm:text-base text-zinc-500 font-mono mt-1">
                {activeScreenshot.subtitle}
              </p>
            </div>

            {platform === "mac" && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-500/20 text-xs text-indigo-900 dark:text-indigo-200 font-medium">
                <Command className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>Mac Global Shortcut: Press <kbd className="font-mono font-bold px-1.5 py-0.5 rounded bg-white dark:bg-zinc-800 border border-indigo-300 dark:border-indigo-500/40 shadow-xs">⌥ + ⇧ + H</kbd> to activate the element picker on any webpage instantly.</span>
              </div>
            )}

            <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {activeScreenshot.description}
            </p>

            <div className="space-y-2.5 pt-2">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-zinc-900 dark:text-white">
                Key Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeScreenshot.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs font-medium text-zinc-700 dark:text-zinc-300 p-2.5 rounded-xl bg-white dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-white/5 shadow-2xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Step Switcher Buttons */}
            <div className="flex items-center gap-3 pt-4 border-t border-zinc-200/80 dark:border-white/5">
              <button
                disabled={activeScreenshotIndex === 0}
                onClick={() => setActiveScreenshotIndex((prev) => Math.max(0, prev - 1))}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/10 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-zinc-100 transition-colors"
              >
                Previous View
              </button>
              <button
                disabled={activeScreenshotIndex === screenshots.length - 1}
                onClick={() =>
                  setActiveScreenshotIndex((prev) =>
                    Math.min(screenshots.length - 1, prev + 1)
                  )
                }
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-1.5"
              >
                <span>Next View</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Philosophy: YOUR WEB, YOUR WAY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-indigo-900/10 via-purple-900/5 to-transparent border border-indigo-500/20 dark:border-indigo-500/15 relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              YOUR WEB, YOUR WAY
            </h2>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {hider.philosophy}
            </p>
            <div className="p-4 rounded-2xl bg-white/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-white/10 text-sm text-zinc-600 dark:text-zinc-400 font-mono">
              ⚡ Element Hider does not alter the content you want to keep — it simply lets you decide what belongs on your screen.
            </div>
          </div>
        </div>
      </section>

      {/* 6 Key Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
            Engineered Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight">
            Key Features Built for Purpose
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2">
            Every feature is designed with simplicity, speed, and privacy in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hider.features.map((f, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/5 hover:border-indigo-500/30 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20">
                    {f.tag}
                  </span>
                  <EyeOff className="w-4 h-4 text-indigo-500" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                  {f.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-zinc-200/80 dark:border-white/5">
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/10 text-xs font-semibold uppercase tracking-wider mb-3">
            Specifications
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight">
            Privacy & Architecture Specifications
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2">
            Engineered strictly in compliance with Apple Safari Web Extension sandboxing.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-200/80 dark:border-white/10 overflow-hidden bg-white dark:bg-zinc-900/40">
          <table className="w-full text-left text-xs sm:text-sm">
            <tbody className="divide-y divide-zinc-200/80 dark:divide-white/5">
              {hider.specifications.map((s, i) => (
                <tr
                  key={i}
                  className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition-colors"
                >
                  <td className="py-3.5 px-4 sm:px-6 font-mono font-medium text-zinc-500 dark:text-zinc-400 w-1/3">
                    {s.label}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-semibold text-zinc-900 dark:text-zinc-200">
                    {s.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* What's New Version 1.0 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-2xl p-6 sm:p-8 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-indigo-600 text-white">
                v1.0 Release
              </span>
              <span className="text-xs text-zinc-500 font-mono">Initial Public Launch</span>
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              Welcome to Element Hider
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Hide unwanted webpage elements and make Safari feel more like your own browser.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/element-hider/privacy"
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-white/10 hover:bg-zinc-100 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/suggestions"
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
            >
              Report Feedback
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Cross-Navigation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="border-t border-zinc-200/80 dark:border-white/5 pt-8 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>COGIFY Technologies • Product: Element Hider</div>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-indigo-600 transition-colors">
              Return Home
            </Link>
            <span>•</span>
            <Link href="/products/emdoc" className="hover:text-indigo-600 transition-colors">
              EmDoc (macOS PDF)
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-indigo-600 transition-colors">
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
