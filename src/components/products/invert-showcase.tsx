"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  SunMoon,
  Compass,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Smartphone,
  SlidersHorizontal,
  ChevronRight,
  Sparkles,
  Eye,
  Monitor,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export const InvertShowcase = () => {
  const invert = siteConfig.invert;
  const [selectedScreen, setSelectedScreen] = useState(0);

  const previewScreenshots = [
    {
      title: "ChatGPT Dark",
      tag: "OLED Reading",
      image: "/invert/Ios/Chatgpt_Home.png",
      caption: "Read AI responses in deep dark mode with protected syntax blocks and high contrast.",
    },
    {
      title: "YouTube Video",
      tag: "Smart Media Shield",
      image: "/invert/Mac/in_youtube.png",
      caption: "Video streams, thumbnails, and author avatars retain their natural true colors.",
    },
    {
      title: "Google Search",
      tag: "Search Anywhere",
      image: "/invert/Ios/Google_search.png",
      caption: "Flip bright white search results to a relaxed dark canvas instantly.",
    },
    {
      title: "Appearance Sliders",
      tag: "Fine Control",
      image: "/invert/Ios/App_2.png",
      caption: "Adjust intensity, brightness, contrast, and warm sepia night tint directly.",
    },
  ];

  return (
    <section
      id="colour-invert"
      className="py-24 relative overflow-hidden bg-[#fcfdfe] dark:bg-[#07090e] border-t border-zinc-200/80 dark:border-white/5 transition-colors duration-200"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[350px] bg-blue-500/5 dark:bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200/80 dark:border-blue-500/20 text-xs font-semibold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>New Safari Extension</span>
            </span>
            <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
              v1.0 Live
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
            Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-300">Colour Invert</span>.
          </h2>

          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            See the web differently. Colour Invert is a simple Safari extension that lets you invert webpage colors with a tap. Turn bright webpages dark, reduce harsh glare, and browse comfortably on macOS and iOS.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-white/5 flex items-center gap-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center shrink-0 text-blue-600 dark:text-blue-400">
              <SunMoon className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-zinc-500 font-mono">Visuals</div>
              <div className="text-base font-bold text-zinc-900 dark:text-white">Instant Inversion</div>
              <div className="text-[11px] text-zinc-500">Dark mode on any website</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-white/5 flex items-center gap-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-zinc-500 font-mono">Privacy</div>
              <div className="text-base font-bold text-emerald-600 dark:text-emerald-400">No Account Required</div>
              <div className="text-[11px] text-zinc-500">0 bytes transmitted</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-white/5 flex items-center gap-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 flex items-center justify-center shrink-0 text-indigo-600 dark:text-indigo-400">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-zinc-500 font-mono">Platform</div>
              <div className="text-base font-bold text-zinc-900 dark:text-white">macOS & iOS</div>
              <div className="text-[11px] text-zinc-500">Native Safari Web Extension</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-white/5 flex items-center gap-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 flex items-center justify-center shrink-0 text-cyan-600 dark:text-cyan-400">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-zinc-500 font-mono">Smart Protection</div>
              <div className="text-base font-bold text-zinc-900 dark:text-white">Media Shield</div>
              <div className="text-[11px] text-zinc-500">Photos & videos stay natural</div>
            </div>
          </div>
        </div>

        {/* Interactive Preview Container */}
        <div className="rounded-3xl p-6 sm:p-10 bg-white dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-white/5 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Device Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              {selectedScreen === 1 ? (
                /* Mac Window Preview */
                <div className="w-full max-w-[340px] rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden ring-1 ring-white/10">
                  <div className="h-7 px-3 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between select-none">
                    <div className="flex items-center space-x-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                    </div>
                    <div className="text-[10px] font-mono text-zinc-400">YouTube — Invert Active</div>
                    <div className="w-8" />
                  </div>
                  <div className="relative w-full aspect-[16/10] bg-black">
                    <Image
                      src={previewScreenshots[selectedScreen].image}
                      alt={previewScreenshots[selectedScreen].title}
                      fill
                      className="object-cover transition-all duration-300"
                      sizes="340px"
                    />
                  </div>
                </div>
              ) : (
                /* Phone Preview */
                <div className="relative w-[260px] sm:w-[290px] aspect-[1206/2622] rounded-[38px] p-2.5 bg-zinc-900 shadow-2xl border-4 border-zinc-800 ring-1 ring-white/10">
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-20 pointer-events-none" />
                  <div className="relative w-full h-full rounded-[30px] overflow-hidden bg-black">
                    <Image
                      src={previewScreenshots[selectedScreen].image}
                      alt={previewScreenshots[selectedScreen].title}
                      fill
                      className="object-cover transition-all duration-300"
                      sizes="290px"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Right: Interactive Controls & Deep Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-zinc-200 dark:border-white/10 shrink-0 bg-zinc-900">
                  <Image
                    src="/brand/Invert/icon.png"
                    alt="Colour Invert Icon"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                    Colour Invert – Invert the Web
                  </h3>
                  <p className="text-xs text-zinc-500 font-mono">
                    Safari Web Extension • macOS & iOS
                  </p>
                </div>
              </div>

              {/* Screen Selector Buttons */}
              <div className="space-y-2">
                <span className="text-xs uppercase font-mono font-semibold tracking-wider text-zinc-500">
                  Select A Showcase View:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {previewScreenshots.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedScreen(idx)}
                      className={`p-3 rounded-xl text-left border transition-all duration-200 cursor-pointer ${
                        selectedScreen === idx
                          ? "bg-blue-50 dark:bg-blue-950/30 border-blue-300 dark:border-blue-500/40 shadow-xs"
                          : "bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 border-zinc-200 dark:border-white/5"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-zinc-900 dark:text-white">
                          {item.title}
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-200/60 dark:bg-zinc-700/60 text-zinc-700 dark:text-zinc-300">
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-500 mt-1 line-clamp-1">
                        {item.caption}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Screen Callout */}
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-white/5 space-y-1">
                <div className="text-xs font-mono font-semibold text-blue-700 dark:text-blue-300">
                  {previewScreenshots[selectedScreen].title} Overview
                </div>
                <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {previewScreenshots[selectedScreen].caption}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/invert"
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/20 transition-all duration-200 flex items-center gap-1.5 group cursor-pointer"
                >
                  <span>Explore Colour Invert Page</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <Link
                  href="/invert/privacy"
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-zinc-100 hover:bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-200 border border-zinc-200 dark:border-white/10 transition-colors flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Privacy Policy</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
