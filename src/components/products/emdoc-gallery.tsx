"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  BookOpen,
  LayoutGrid,
  Edit3,
  Minimize2,
  Stamp,
  FileSpreadsheet,
  Printer,
  Palette,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const toolIcons: Record<string, React.ReactNode> = {
  home: <BookOpen className="w-4 h-4" />,
  organise: <LayoutGrid className="w-4 h-4" />,
  edit: <Edit3 className="w-4 h-4" />,
  compress: <Minimize2 className="w-4 h-4" />,
  watermark: <Stamp className="w-4 h-4" />,
  "header-footer": <FileSpreadsheet className="w-4 h-4" />,
  print: <Printer className="w-4 h-4" />,
  theme: <Palette className="w-4 h-4" />,
};

const shortTitles: Record<string, string> = {
  home: "Workstation",
  organise: "Page Organizer",
  edit: "Vector & Ink",
  compress: "Compression",
  watermark: "Watermarks",
  "header-footer": "Headers & Bates",
  print: "Print Engine",
  theme: "Reading Themes",
};

export const EmDocGallery = () => {
  const screenshots = siteConfig.emdoc.screenshots;
  const [activeId, setActiveId] = useState<string>(screenshots[0]?.id || "home");
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);

  const activeIndex = screenshots.findIndex((s) => s.id === activeId);
  const activeScreenshot = screenshots[activeIndex] || screenshots[0];

  const checkScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll, { passive: true });
      window.addEventListener("resize", checkScroll);
    }
    return () => {
      if (el) el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scrollByAmount = (amount: number) => {
    scrollContainerRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  const handlePrev = () => {
    const nextIdx = (activeIndex - 1 + screenshots.length) % screenshots.length;
    setActiveId(screenshots[nextIdx].id);
  };

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % screenshots.length;
    setActiveId(screenshots[nextIdx].id);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, activeIndex]);

  return (
    <div className="w-full">
      {/* Category Pills / Navigation Tabs Bar with Smooth Horizontal Scrolling */}
      <div className="relative group/tabs flex items-center mb-2">
        {/* Left Scroll Button */}
        {canScrollLeft && (
          <button
            onClick={() => scrollByAmount(-240)}
            className="absolute left-0 z-20 p-2 rounded-full bg-white/95 dark:bg-zinc-900/95 border border-zinc-200 dark:border-zinc-700 shadow-md text-zinc-700 dark:text-zinc-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:scale-105 active:scale-95 transition-all -ml-2 cursor-pointer backdrop-blur-sm"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        )}

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-2 overflow-x-auto py-2 px-1 scroll-smooth scrollbar-none justify-start w-full"
        >
          {screenshots.map((item) => {
            const isActive = item.id === activeId;
            return (
              <button
                key={item.id}
                onClick={(e) => {
                  setActiveId(item.id);
                  (e.currentTarget as HTMLElement).scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "center",
                  });
                }}
                className={cn(
                  "flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 shrink-0 cursor-pointer border",
                  isActive
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/25 scale-[1.02]"
                    : "bg-white/90 dark:bg-zinc-900/70 text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white border-zinc-200/90 dark:border-white/10 hover:bg-zinc-100 dark:hover:bg-zinc-800/80"
                )}
                title={item.title}
              >
                {toolIcons[item.id] || <Sparkles className="w-4 h-4" />}
                <span>{shortTitles[item.id] || item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Right Scroll Button */}
        {canScrollRight && (
          <button
            onClick={() => scrollByAmount(240)}
            className="absolute right-0 z-20 p-2 rounded-full bg-white/95 dark:bg-zinc-900/95 border border-zinc-200 dark:border-zinc-700 shadow-md text-zinc-700 dark:text-zinc-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:scale-105 active:scale-95 transition-all -mr-2 cursor-pointer backdrop-blur-sm"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Main Showcase Window */}
      <div className="mt-4 rounded-3xl border border-zinc-200/90 dark:border-white/10 bg-gradient-to-b from-white via-zinc-50/50 to-zinc-100/60 dark:from-zinc-900/90 dark:via-zinc-950 dark:to-black shadow-2xl overflow-hidden transition-all duration-300">
        {/* macOS Window Title Bar */}
        <div className="h-11 bg-zinc-100 dark:bg-zinc-900/90 border-b border-zinc-200 dark:border-white/10 px-4 flex items-center justify-between select-none">
          {/* Window control traffic lights */}
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/50" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/50" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]/50" />
          </div>

          {/* Window document title & badge */}
          <div className="flex items-center space-x-2 text-xs font-medium text-zinc-800 dark:text-zinc-200">
            <div className="relative w-4 h-4 rounded overflow-hidden">
              <Image
                src="/brand/emdoc-icon.png"
                alt="EmDoc"
                fill
                className="object-cover"
              />
            </div>
            <span className="truncate max-w-[220px] sm:max-w-none">
              EmDoc Workstation — {activeScreenshot.title}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-mono">
              <ShieldCheck className="w-3 h-3" />
              Air-Gapped
            </span>
          </div>

          {/* Lightbox Trigger button */}
          <button
            onClick={() => setLightboxOpen(true)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-200/80 hover:bg-zinc-300/80 dark:bg-white/10 dark:hover:bg-white/15 text-zinc-700 dark:text-zinc-300 text-xs font-medium transition-colors cursor-pointer"
            title="View Full Resolution"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Zoom Fullscreen</span>
          </button>
        </div>

        {/* Screenshot Viewport Container */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[16/9.5] bg-zinc-950 overflow-hidden group cursor-pointer" onClick={() => setLightboxOpen(true)}>
          <Image
            src={activeScreenshot.image}
            alt={activeScreenshot.title}
            fill
            priority
            className="object-contain object-top transition-transform duration-300 group-hover:scale-[1.01]"
            sizes="(max-width: 1280px) 100vw, 1200px"
          />

          {/* Hover Overlay Hint */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 rounded-full bg-zinc-900/90 text-white text-xs font-medium shadow-xl backdrop-blur-md flex items-center gap-2 border border-white/20">
              <Maximize2 className="w-4 h-4 text-indigo-400" />
              <span>Click to view full-resolution screenshot</span>
            </div>
          </div>

          {/* Left/Right floating navigation arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous Screenshot"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all opacity-80 hover:opacity-100 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next Screenshot"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all opacity-80 hover:opacity-100 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Feature Details & Highlights */}
        <div className="p-6 sm:p-8 bg-white dark:bg-zinc-950 border-t border-zinc-200/90 dark:border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-500/20">
                  {activeScreenshot.tag}
                </span>
                <span className="text-xs text-zinc-500 font-mono">
                  Screenshot {activeIndex + 1} of {screenshots.length}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                {activeScreenshot.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {activeScreenshot.description}
              </p>
            </div>

            {/* Feature Highlights Pills */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {activeScreenshot.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/70 dark:border-white/5 flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-tight">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between animate-fade-in"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Modal Header */}
          <div
            className="p-4 sm:px-8 flex items-center justify-between border-b border-white/10 bg-black/40"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <div className="relative w-6 h-6 rounded overflow-hidden">
                <Image
                  src="/brand/emdoc-icon.png"
                  alt="EmDoc"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">
                  {activeScreenshot.title}
                </h4>
                <p className="text-xs text-zinc-400">
                  {activeScreenshot.subtitle}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-zinc-400 font-mono hidden sm:inline">
                Use Left / Right arrow keys to navigate • Esc to exit
              </span>
              <button
                onClick={() => setLightboxOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Image Viewport */}
          <div
            className="relative flex-1 w-full max-w-7xl mx-auto p-4 sm:p-8 flex items-center justify-center overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full max-h-[82vh]">
              <Image
                src={activeScreenshot.image}
                alt={activeScreenshot.title}
                fill
                priority
                className="object-contain"
                sizes="100vw"
              />
            </div>

            {/* Lightbox Arrow Buttons */}
            <button
              onClick={handlePrev}
              aria-label="Previous"
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next"
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Footer Thumbnails */}
          <div
            className="p-3 sm:p-4 border-t border-white/10 bg-black/60 overflow-x-auto scrollbar-none"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-center gap-2 max-w-7xl mx-auto">
              {screenshots.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={cn(
                    "relative w-20 h-12 sm:w-28 sm:h-16 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer",
                    item.id === activeId
                      ? "border-indigo-500 scale-105 shadow-md shadow-indigo-500/40"
                      : "border-white/20 opacity-60 hover:opacity-100"
                  )}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="120px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-1">
                    <span className="text-[9px] text-white font-medium truncate">
                      {idx + 1}. {item.title}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
