"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Cpu,
  Layers,
  HardDrive,
  Maximize2,
  FileText,
  Grid,
  PenTool,
  Minimize2,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

type ViewMode = "home" | "organise" | "edit" | "compress";

const views: Record<
  ViewMode,
  {
    title: string;
    subtitle: string;
    image: string;
    badge: string;
    description: string;
  }
> = {
  home: {
    title: "Document Workstation",
    subtitle: "Native macOS PDF reader with instant tile rendering and continuous scroll",
    image: "/brand/EmDoc_home.png",
    badge: "5.0 MB • ~45 MB RAM",
    description: "Multi-tab document switcher, page thumbnails rail, continuous/single page views, and zero-telemetry document rendering.",
  },
  organise: {
    title: "Page Organizer Grid",
    subtitle: "High-productivity visual grid for reordering and structural page changes",
    image: "/brand/Organise.png",
    badge: "Reorder • Rotate • Extract",
    description: "Drag-and-drop reordering, quick rotate left/right, duplicate, cut/copy/paste, insert blank pages, and custom range extraction.",
  },
  edit: {
    title: "Full PDF Editing Canvas",
    subtitle: "Draw, highlight, sign, and apply official document stamps",
    image: "/brand/edit_pdf.png",
    badge: "Vector Ink • Rubber Stamps",
    description: "All tools drawer with markup, comments, certified stamps (Approved, Confidential, Draft), bookmarks, and form preparation.",
  },
  compress: {
    title: "100% Offline Compressor",
    subtitle: "Cut file sizes up to 75% on-device with custom target MB limits",
    image: "/brand/compress.png",
    badge: "Local • Zero Cloud Upload",
    description: "Balanced, Smallest Size, or custom target size ceiling (0.5MB, 1MB, 2MB, 5MB). Files never leave your Mac.",
  },
};

export const MacOSWindowMockup = () => {
  const [activeView, setActiveView] = useState<ViewMode>("home");
  const [zoomOpen, setZoomOpen] = useState(false);
  const current = views[activeView];

  return (
    <div className="w-full max-w-6xl mx-auto rounded-2xl border border-zinc-200/90 dark:border-white/15 bg-zinc-100 dark:bg-[#0d111b]/90 shadow-2xl shadow-zinc-400/20 dark:shadow-indigo-950/40 overflow-hidden backdrop-blur-2xl transition-colors duration-200">
      {/* macOS Title Bar */}
      <div className="h-11 bg-zinc-200/90 dark:bg-zinc-900/80 border-b border-zinc-300/80 dark:border-white/10 px-4 flex items-center justify-between select-none">
        {/* Window controls */}
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/50" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/50" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]/50" />
        </div>

        {/* Title & Document Badge */}
        <div className="flex items-center space-x-2 text-xs text-zinc-800 dark:text-zinc-300 font-medium">
          <div className="relative w-4 h-4 rounded overflow-hidden">
            <Image
              src="/brand/emdoc-icon.png"
              alt="EmDoc Icon"
              fill
              className="object-cover"
            />
          </div>
          <span className="truncate max-w-[200px] sm:max-w-none">
            EmDoc Workstation — EmDoc User Guide & About Us.pdf
          </span>
          <span className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-mono">
            <ShieldCheck className="w-3 h-3" />
            100% Air-Gapped
          </span>
        </div>

        {/* Performance specs pills */}
        <div className="flex items-center space-x-2 text-xs font-mono">
          <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-500/20 text-[10px] font-semibold">
            5.0 MB
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-[10px]">
            ~45 MB RAM
          </span>
        </div>
      </div>

      {/* Workstation Mode Ribbon */}
      <div className="bg-zinc-100/90 dark:bg-zinc-950/60 border-b border-zinc-200/90 dark:border-white/5 px-3 py-2 flex items-center justify-between overflow-x-auto gap-2">
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setActiveView("home")}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer",
              activeView === "home"
                ? "bg-white dark:bg-zinc-800 text-indigo-600 dark:text-indigo-400 shadow-xs border border-zinc-200 dark:border-white/10"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
            )}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Document Reader</span>
          </button>

          <button
            onClick={() => setActiveView("organise")}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer",
              activeView === "organise"
                ? "bg-white dark:bg-zinc-800 text-indigo-600 dark:text-indigo-400 shadow-xs border border-zinc-200 dark:border-white/10"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
            )}
          >
            <Grid className="w-3.5 h-3.5" />
            <span>Page Organizer</span>
          </button>

          <button
            onClick={() => setActiveView("edit")}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer",
              activeView === "edit"
                ? "bg-white dark:bg-zinc-800 text-indigo-600 dark:text-indigo-400 shadow-xs border border-zinc-200 dark:border-white/10"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
            )}
          >
            <PenTool className="w-3.5 h-3.5" />
            <span>Edit & Markup</span>
          </button>

          <button
            onClick={() => setActiveView("compress")}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer",
              activeView === "compress"
                ? "bg-white dark:bg-zinc-800 text-indigo-600 dark:text-indigo-400 shadow-xs border border-zinc-200 dark:border-white/10"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
            )}
          >
            <Minimize2 className="w-3.5 h-3.5" />
            <span>Offline Compress</span>
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-2 text-[11px] text-zinc-500 font-mono">
          <span className="text-emerald-600 dark:text-emerald-400 font-medium">100% Free For All Users</span>
          <span>•</span>
          <span>iOS In Development</span>
        </div>
      </div>

      {/* Main Viewport Container */}
      <div
        className="relative w-full aspect-[16/9.5] sm:aspect-[16/9] bg-zinc-950 overflow-hidden cursor-pointer group"
        onClick={() => setZoomOpen(true)}
      >
        <Image
          src={current.image}
          alt={current.title}
          fill
          priority
          className="object-contain object-top transition-transform duration-300 group-hover:scale-[1.01]"
          sizes="(max-width: 1280px) 100vw, 1200px"
        />

        {/* Hover Zoom Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 rounded-full bg-zinc-900/90 text-white text-xs font-medium shadow-xl backdrop-blur-md flex items-center gap-2 border border-white/20">
            <Maximize2 className="w-4 h-4 text-indigo-400" />
            <span>Click to inspect full resolution screenshot</span>
          </div>
        </div>

        {/* Floating Quick Feature Tag on Viewport */}
        <div className="absolute bottom-4 left-4 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900/85 backdrop-blur-md border border-white/15 text-white text-xs">
          <span className="font-semibold text-indigo-300">{current.title}:</span>
          <span className="text-zinc-300">{current.badge}</span>
        </div>
      </div>

      {/* Viewport Footer Banner */}
      <div className="p-4 sm:p-5 bg-white dark:bg-zinc-950 border-t border-zinc-200/90 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div>
          <span className="font-bold text-zinc-900 dark:text-white mr-2">
            {current.title}
          </span>
          <span className="text-zinc-600 dark:text-zinc-400">
            {current.description}
          </span>
        </div>
        <button
          onClick={() => setZoomOpen(true)}
          className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold shrink-0 cursor-pointer"
        >
          View Full Size &rarr;
        </button>
      </div>

      {/* Lightbox Modal */}
      {zoomOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4"
          onClick={() => setZoomOpen(false)}
        >
          <div className="absolute top-4 right-4 flex items-center gap-4">
            <span className="text-xs text-zinc-400 font-mono">Click anywhere or Esc to exit</span>
            <button
              onClick={() => setZoomOpen(false)}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer"
            >
              &times;
            </button>
          </div>
          <div className="relative w-full max-w-7xl h-[85vh]">
            <Image
              src={current.image}
              alt={current.title}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </div>
  );
};
