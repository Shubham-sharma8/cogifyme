"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  SunMoon,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Monitor,
  Smartphone,
  Compass,
  MessageSquare,
  Sliders,
  ChevronRight,
  Eye,
  SlidersHorizontal,
  Flame,
  Zap,
  Layers,
  Palette,
  Shield,
  Video,
  FileCode,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { MovingBorderButton } from "@/components/ui/moving-border";

export default function ColourInvertPage() {
  const invert = siteConfig.invert;
  const [platform, setPlatform] = useState<"mac" | "ios">("mac");
  const screenshots = platform === "mac" ? invert.screenshotsMac : invert.screenshotsIos;
  const [activeScreenshotIndex, setActiveScreenshotIndex] = useState(0);
  const activeScreenshot = screenshots[activeScreenshotIndex] || screenshots[0];

  const handlePlatformChange = (p: "mac" | "ios") => {
    setPlatform(p);
    setActiveScreenshotIndex(0);
  };

  return (
    <div className="pt-28 pb-20 relative">
      {/* Ambient background glow */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center space-x-3.5">
            <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 shadow-xl bg-zinc-900 shrink-0">
              <Image
                src="/brand/Invert/icon.png"
                alt="Colour Invert App Icon"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30">
                  Safari Web Extension
                </span>
                <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
                  Version {invert.version} Live
                </span>
                <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/10">
                  {invert.primaryCategory} • {invert.secondaryCategory}
                </span>
              </div>
              <div className="text-xs text-zinc-500 font-mono mt-1">
                {invert.platform} • 100% Free Forever • Zero Ads
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-tight">
              See the Web Differently.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-300">
                Invert the Web.
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-800 dark:text-zinc-200 font-medium">
              {invert.promotionalText}
            </p>
          </div>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
            {invert.shortDescription} {invert.fullDescription}
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
                <Compass className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Explore Extension Gallery</span>
              </span>
            </MovingBorderButton>

            <Link
              href="/invert/privacy"
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-100 text-zinc-800 hover:text-zinc-950 font-semibold text-sm border border-zinc-200/90 shadow-xs dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-300 dark:hover:text-white dark:border-white/10 transition-colors flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Zero-Tracking Privacy Policy</span>
            </Link>

            <Link
              href="/suggestions"
              className="px-6 py-3.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:hover:bg-blue-900/40 dark:text-blue-300 font-semibold text-sm border border-blue-200 dark:border-blue-500/30 transition-colors flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Feedback & Bug Reports</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3 Core Inversion Modes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {invert.modes.map((mode, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-white/5 space-y-3 relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <SunMoon className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-zinc-200/60 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                  {mode.tag}
                </span>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                {mode.name}
              </h3>
              <p className="text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold">
                {mode.subtitle}
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {mode.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Safari Screenshot Showcase */}
      <section
        id="screenshots"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-24 border-t border-zinc-200/80 dark:border-white/5"
      >
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
            Visual Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight">
            See Colour Invert in Action
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2">
            Engineered seamlessly for Safari. Step through the real macOS and iOS interfaces across YouTube, ChatGPT, Google Search, and native sliders.
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
            <Monitor className="w-4 h-4 text-blue-500" />
            <span>macOS Safari</span>
            <span className="text-[11px] font-mono opacity-70 px-1.5 py-0.5 bg-zinc-200 dark:bg-zinc-800 rounded">5 Views</span>
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
            <span className="text-[11px] font-mono opacity-70 px-1.5 py-0.5 bg-zinc-200 dark:bg-zinc-800 rounded">7 Views</span>
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
                  ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/20"
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
          {/* Left: Device Frame */}
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
                    <Compass className="w-3.5 h-3.5 text-blue-400" />
                    <span>macOS Safari — Colour Invert</span>
                  </div>
                  <div className="text-[10px] text-zinc-500 font-mono">
                    Smart Mode Active
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
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 text-xs font-mono font-medium border border-blue-200 dark:border-blue-500/30">
                <span>View {activeScreenshotIndex + 1} of {screenshots.length}</span>
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
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-1.5"
              >
                <span>Next View</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Philosophy: A DIFFERENT WAY TO SEE THE WEB */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-blue-900/15 via-indigo-900/10 to-transparent border border-blue-500/20 dark:border-blue-500/15 relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Brand Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              A DIFFERENT WAY TO SEE THE WEB
            </h2>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Some websites are bright. Some are colorful. Some are simply easier to look at when their colors are flipped.
            </p>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Colour Invert gives you another option. Turn it on when you want a different visual experience. Turn it off when you don&apos;t.
            </p>
            <div className="p-4 rounded-2xl bg-white/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-white/10 text-base font-bold text-zinc-900 dark:text-white">
              Your browser. Your screen. Your choice.
            </div>
          </div>
        </div>
      </section>

      {/* 6 Key Features Bento Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-zinc-200/80 dark:border-white/5">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
            Core Features
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Designed to Give You Total Visual Control
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2">
            Engineered directly as a Safari Web Extension for seamless performance on Apple Silicon and iPhone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {invert.features.map((feat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-white/5 space-y-3 shadow-xs hover:border-blue-500/30 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  {idx === 0 && <SunMoon className="w-5 h-5" />}
                  {idx === 1 && <Eye className="w-5 h-5" />}
                  {idx === 2 && <Sliders className="w-5 h-5" />}
                  {idx === 3 && <Compass className="w-5 h-5" />}
                  {idx === 4 && <Shield className="w-5 h-5" />}
                  {idx === 5 && <Sparkles className="w-5 h-5" />}
                </div>
                <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-500/15 text-blue-700 dark:text-blue-300">
                  {feat.tag}
                </span>
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                {feat.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Content Preservation Engine & Site Adaptations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-zinc-200/80 dark:border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 text-xs font-semibold uppercase tracking-wider">
              Smart Engine
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Intelligent Content Preservation
            </h2>
            <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Standard invert tools turn photos into negative film strips and corrupt videos. Colour Invert includes a specialized media isolation layer that protects images, video streams, colored SVGs, and canvas graphics:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                { title: "Images & Photos", desc: "Preserved with natural skin tones & colors", icon: Eye },
                { title: "Videos & Streams", desc: "YouTube, Twitch & HTML5 video untouched", icon: Video },
                { title: "Colored Icons & SVGs", desc: "App logos & badges maintain true identity", icon: Palette },
                { title: "Code & Math Syntax", desc: "ChatGPT & GitHub code blocks retain colors", icon: FileCode },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-white/5 space-y-1"
                >
                  <div className="flex items-center gap-2">
                    <item.icon className="w-4 h-4 text-blue-500" />
                    <span className="text-xs font-bold text-zinc-900 dark:text-white">{item.title}</span>
                  </div>
                  <p className="text-[11px] text-zinc-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Fine Tuning Callout Card */}
          <div className="p-8 rounded-3xl bg-zinc-900 text-white border border-zinc-800 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5 text-blue-400" />
                <span className="font-mono text-sm font-bold">Fine-Tuning Sliders</span>
              </div>
              <span className="text-xs font-mono text-zinc-400">100% Client-Side</span>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-mono mb-1 text-zinc-300">
                  <span>Inversion Intensity</span>
                  <span>100%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                  <div className="w-full h-full bg-blue-500 rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-mono mb-1 text-zinc-300">
                  <span>Brightness</span>
                  <span>100%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                  <div className="w-full h-full bg-blue-400 rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-mono mb-1 text-zinc-300">
                  <span>Contrast</span>
                  <span>100%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                  <div className="w-full h-full bg-indigo-500 rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-mono mb-1 text-zinc-300">
                  <span>Warmth / Sepia Tint (Night Comfort)</span>
                  <span>15%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                  <div className="w-[15%] h-full bg-amber-500 rounded-full" />
                </div>
              </div>
            </div>
            <p className="text-xs text-zinc-400 font-mono pt-2">
              💡 Sliders apply immediately in real-time with zero page reloads.
            </p>
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-zinc-200/80 dark:border-white/5">
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/10 text-xs font-semibold uppercase tracking-wider mb-3">
            Specs & Architecture
          </div>
          <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Technical Specifications
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {invert.specifications.map((spec, i) => (
            <div
              key={i}
              className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-white/5 flex flex-col justify-between"
            >
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                {spec.label}
              </span>
              <span className="text-sm font-semibold text-zinc-900 dark:text-white mt-1">
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="rounded-3xl p-8 sm:p-12 bg-zinc-900 text-white border border-zinc-800 text-center space-y-6 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to See the Web Differently?
            </h2>
            <p className="text-sm sm:text-base text-zinc-400">
              Colour Invert is completely free forever. No accounts, no paywalls, and zero tracking. Install the Safari extension and browse comfortably day and night.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/invert/privacy"
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-100 text-zinc-900 font-semibold text-sm transition-colors flex items-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Read Zero-Tracking Privacy Policy</span>
              </Link>
              <Link
                href="/suggestions"
                className="px-6 py-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-sm border border-zinc-700 transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Submit Feedback or Website Suggestion</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
