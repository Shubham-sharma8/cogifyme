"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  FolderUp,
  UploadCloud,
  RefreshCw,
  CheckCircle2,
  Search,
  Sparkles,
  Image as ImageIcon,
  Layers,
  ExternalLink,
} from "lucide-react";

interface WallpaperSummary {
  id: string;
  title: string;
  category: string;
  primaryDevice: string;
  dominantColor: string;
  palette: string[];
  dimensions: {
    width: number;
    height: number;
    aspectRatio: string;
  };
  assets: {
    thumbnailUrl: string;
    previewUrl: string;
    fullResUrl: string;
    format: string;
  };
  provenance: {
    sourceType: string;
    canvaDesignId: string | null;
  };
}

interface CategoryItem {
  id: string;
  title: string;
  wallpaperCount: number;
}

export default function AdminWallpapersPage() {
  const [wallpapers, setWallpapers] = useState<WallpaperSummary[]>([]);
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Dark AMOLED");
  const [filterCategory, setFilterCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [r2Connected, setR2Connected] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [uploading, setUploading] = useState<boolean>(false);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);

  const folderInputRef = useRef<HTMLInputElement | null>(null);
  const filesInputRef = useRef<HTMLInputElement | null>(null);

  const fetchCatalog = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/wallpapers");
      if (res.ok) {
        const data = await res.json();
        setWallpapers(data.wallpapers || []);
        setCategories(data.categories || []);
        setR2Connected(Boolean(data.r2BindingConnected));
        if (data.categories?.length && !selectedCategory) {
          setSelectedCategory(data.categories[0].title);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void Promise.resolve().then(() => fetchCatalog());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleUploadFiles = async (fileList: FileList | null) => {
    if (!fileList || fileList.length === 0) return;

    const validFiles: File[] = [];
    const relativePaths: string[] = [];

    Array.from(fileList).forEach((file) => {
      if (/\.(png|jpg|jpeg|webp|heic)$/i.test(file.name)) {
        validFiles.push(file);
        const rel =
          (file as File & { webkitRelativePath?: string }).webkitRelativePath ||
          file.name;
        relativePaths.push(rel);
      }
    });

    if (validFiles.length === 0) {
      setUploadStatus("No valid PNG, JPG, WebP, or HEIC images found in selection.");
      return;
    }

    setUploading(true);
    setUploadStatus(`Uploading ${validFiles.length} wallpaper(s) to cogify-wallpapers R2...`);

    try {
      const formData = new FormData();
      formData.append("category", selectedCategory);
      validFiles.forEach((f, idx) => {
        formData.append("files", f);
        formData.append("relativePaths", relativePaths[idx]);
      });

      const res = await fetch("/api/admin/wallpapers", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setUploadStatus(
          `Successfully synced ${data.uploadedCount} wallpaper(s) to cogify.me R2 & Apple App catalog!`
        );
        await fetchCatalog();
      } else {
        setUploadStatus(`Upload error: ${data.error || "Unknown error"}`);
      }
    } catch (err) {
      setUploadStatus(
        `Upload failed: ${err instanceof Error ? err.message : "Network error"}`
      );
    } finally {
      setUploading(false);
    }
  };

  const filteredWallpapers = wallpapers.filter((w) => {
    if (filterCategory !== "ALL" && w.category !== filterCategory) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        w.title.toLowerCase().includes(q) ||
        w.category.toLowerCase().includes(q) ||
        w.id.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="p-6 lg:p-10 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              cogify.me × Wallpaper Studio
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
              R2 Bucket: cogify-wallpapers ({r2Connected ? "Connected" : "Local Dev Sync"})
            </span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-bold mt-2 tracking-tight">
            Wallpaper Folder Sync &amp; Cloudflare R2 Studio
          </h1>
          <p className="text-sm text-zinc-400 mt-1">
            Upload an entire folder of wallpapers (or drop files into{" "}
            <code className="text-emerald-400 font-mono">DropWallpapersHere/</code>
            ) and your iPhone, iPad, Mac, and Apple Watch apps fetch them automatically from{" "}
            <code className="text-indigo-400 font-mono">https://cogify.me/api/v1/manifest</code>.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/api/v1/manifest"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-200"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Live API Manifest ({wallpapers.length})
          </a>
          <button
            onClick={fetchCatalog}
            disabled={loading}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
            Refresh Catalog
          </button>
        </div>
      </div>

      {/* Folder & Multi-File Upload Studio Card */}
      <div className="rounded-2xl bg-zinc-900/90 border border-zinc-800 p-6 space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <FolderUp className="w-5 h-5 text-emerald-400" />
              1-Click Folder Upload to R2 &amp; App
            </h2>
            <p className="text-xs text-zinc-400 mt-0.5">
              Select a folder containing wallpapers (subfolder names automatically map to categories like{" "}
              <span className="text-zinc-200 font-medium">Dark AMOLED</span>,{" "}
              <span className="text-zinc-200 font-medium">Space &amp; Cosmos</span>,{" "}
              <span className="text-zinc-200 font-medium">Cyberpunk &amp; Neon</span>) or pick individual high-res images.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <label className="text-xs text-zinc-400 font-medium">Default Category:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="rounded-xl bg-zinc-950 border border-zinc-800 px-3 py-2 text-xs text-white"
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.title}>
                  {cat.title} ({cat.wallpaperCount})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Hidden file inputs */}
        <input
          ref={folderInputRef}
          type="file"
          multiple
          // @ts-expect-error webkitdirectory is standard in modern browsers for folder upload
          webkitdirectory=""
          directory=""
          className="hidden"
          onChange={(e) => handleUploadFiles(e.target.files)}
        />
        <input
          ref={filesInputRef}
          type="file"
          multiple
          accept=".png,.jpg,.jpeg,.webp,.heic"
          className="hidden"
          onChange={(e) => handleUploadFiles(e.target.files)}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            type="button"
            disabled={uploading}
            onClick={() => folderInputRef.current?.click()}
            className="flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-dashed border-emerald-500/40 bg-emerald-500/5 hover:bg-emerald-500/10 transition text-center group"
          >
            <FolderUp className="w-8 h-8 text-emerald-400 mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-bold text-white">
              Upload Entire Wallpaper Folder
            </span>
            <span className="text-xs text-zinc-400 mt-1">
              Preserves subfolder category names &amp; syncs every image to R2
            </span>
          </button>

          <button
            type="button"
            disabled={uploading}
            onClick={() => filesInputRef.current?.click()}
            className="flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-dashed border-indigo-500/40 bg-indigo-500/5 hover:bg-indigo-500/10 transition text-center group"
          >
            <UploadCloud className="w-8 h-8 text-indigo-400 mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-bold text-white">
              Upload Multiple Wallpaper Files
            </span>
            <span className="text-xs text-zinc-400 mt-1">
              PNG, JPEG, WebP, or HEIC • Assigns to &ldquo;{selectedCategory}&rdquo;
            </span>
          </button>
        </div>

        {uploadStatus && (
          <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-emerald-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{uploadStatus}</span>
          </div>
        )}
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search wallpapers by title, category, or ID..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder:text-zinc-500"
          />
        </div>

        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-zinc-400" />
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="rounded-xl bg-zinc-900 border border-zinc-800 px-3.5 py-2.5 text-xs text-white"
          >
            <option value="ALL">All Categories ({wallpapers.length})</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.title}>
                {cat.title} ({cat.wallpaperCount})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Live Catalog Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filteredWallpapers.map((wp) => (
          <div
            key={wp.id}
            className="rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden flex flex-col justify-between group hover:border-zinc-700 transition"
          >
            <div
              className="aspect-[9/14] w-full relative overflow-hidden flex items-end p-2.5"
              style={{
                background: `linear-gradient(145deg, ${wp.palette?.[0] || wp.dominantColor}, ${
                  wp.palette?.[1] || "#0F172A"
                }, ${wp.palette?.[2] || "#1E293B"})`,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={wp.assets.previewUrl}
                alt={wp.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              <div className="relative z-10 flex items-center gap-1 flex-wrap">
                <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-black/70 text-white backdrop-blur-sm">
                  {wp.primaryDevice}
                </span>
                {wp.provenance.sourceType.includes("canva") && (
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-emerald-500/80 text-black">
                    Canva MCP
                  </span>
                )}
              </div>
            </div>

            <div className="p-3 space-y-1">
              <div className="text-xs font-bold text-white truncate" title={wp.title}>
                {wp.title}
              </div>
              <div className="text-[11px] text-zinc-400 truncate">{wp.category}</div>
              <div className="flex items-center justify-between pt-1 text-[10px] font-mono text-zinc-500">
                <span>
                  {wp.dimensions.width}×{wp.dimensions.height}
                </span>
                <a
                  href={wp.assets.fullResUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-400 hover:underline flex items-center gap-0.5"
                >
                  <ImageIcon className="w-3 h-3" /> Raw
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
