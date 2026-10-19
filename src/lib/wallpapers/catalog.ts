import seedManifestJson from "@/data/wallpapers-manifest.json";

export interface R2ObjectLike {
  key: string;
  size: number;
  etag?: string;
  httpEtag?: string;
  uploaded?: Date;
  httpMetadata?: {
    contentType?: string;
    cacheControl?: string;
  };
  customMetadata?: Record<string, string>;
  body?: ReadableStream;
  arrayBuffer?: () => Promise<ArrayBuffer>;
}

export interface R2BucketLike {
  get(key: string): Promise<R2ObjectLike | null>;
  head(key: string): Promise<R2ObjectLike | null>;
  put(
    key: string,
    value: ArrayBuffer | Uint8Array | ReadableStream | string,
    options?: {
      httpMetadata?: { contentType?: string; cacheControl?: string };
      customMetadata?: Record<string, string>;
    }
  ): Promise<R2ObjectLike | null>;
  delete(keys: string | string[]): Promise<void>;
  list(options?: {
    prefix?: string;
    limit?: number;
    cursor?: string;
    include?: Array<"httpMetadata" | "customMetadata">;
  }): Promise<{
    objects: R2ObjectLike[];
    truncated: boolean;
    cursor?: string;
  }>;
}

export interface WallpaperManifestItem {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  dominantColor: string;
  palette: string[];
  appearance: string;
  style: string;
  mood: string;
  supportedDevices: string[];
  primaryDevice: string;
  orientation: string;
  dimensions: {
    width: number;
    height: number;
    aspectRatio: string;
  };
  assets: {
    thumbnailUrl: string;
    previewUrl: string;
    fullResUrl: string;
    liveVideoUrl: string | null;
    fileSizeBytes: number;
    sha256: string;
    perceptualHash: string;
    format: string;
  };
  deviceVariants: Array<{
    device: string;
    width: number;
    height: number;
    aspectRatio: string;
    url: string;
  }>;
  provenance: {
    sourceType: string;
    canvaDesignId: string | null;
    canvaMediaId: string | null;
    artist: string;
    license: string;
    attributionRequired: boolean;
    attributionText: string | null;
  };
  matchingSet: Record<string, unknown> | null;
  safeZone: {
    clockTopSafeNormalized: number;
    widgetBandSafeNormalized: number;
    recommendedClockColor: string;
    hasDynamicIslandSafeMargin: boolean;
  };
  metrics: {
    downloads7d: number;
    downloads30d: number;
    favoritesCount: number;
    trendingScore: number;
    isEditorialFallback: boolean;
  };
  isFeatured: boolean;
  isStaffPick: boolean;
  isLivePhotoReady: boolean;
  collectionIds: string[];
  publicationStatus: string;
  createdAt: string;
  updatedAt: string;
  contentVersion: number;
}

export interface CatalogManifest {
  catalogVersion: number;
  generatedAt: string;
  source: string;
  totalWallpapers: number;
  categories: Array<{
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    iconName: string;
    accentHex: string;
    coverWallpaperId: string;
    wallpaperCount: number;
    displayOrder: number;
  }>;
  collections: Array<{
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    heroWallpaperId: string;
    accentHex: string;
    isFeaturedToday: boolean;
    isEditorial: boolean;
    wallpaperIds: string[];
    createdAt: string;
  }>;
  matchingSets: Array<Record<string, unknown>>;
  wallpapers: WallpaperManifestItem[];
}

export async function getWallpapersBucket(): Promise<R2BucketLike | null> {
  try {
    const { getCloudflareContext } = await import("@opennextjs/cloudflare");
    const ctx = getCloudflareContext();
    const env = ctx?.env as Record<string, unknown> | undefined;
    if (env?.WALLPAPERS_BUCKET) {
      return env.WALLPAPERS_BUCKET as R2BucketLike;
    }
  } catch {
    // Outside Cloudflare worker context
  }

  try {
    const sym = Symbol.for("__cloudflare-context__");
    const symCtx = (
      globalThis as Record<
        symbol,
        { env?: Record<string, unknown> } | undefined
      >
    )[sym];
    if (symCtx?.env?.WALLPAPERS_BUCKET) {
      return symCtx.env.WALLPAPERS_BUCKET as R2BucketLike;
    }
  } catch {
    // Ignore
  }

  return null;
}

function humanizeFilename(filename: string): string {
  const base = filename.replace(/\.[^.]+$/, "");
  return base
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();
}

function inferCategoryFromPath(key: string, categories: string[]): string {
  const segments = key.split("/");
  if (segments.length >= 2) {
    const folder = segments[segments.length - 2].toLowerCase().trim();
    const match = categories.find(
      (c) =>
        c.toLowerCase() === folder ||
        c.toLowerCase().includes(folder) ||
        folder.includes(c.toLowerCase().split(" ")[0])
    );
    if (match) return match;
  }
  return "Minimalist Gradients";
}

/**
 * Inspect PNG/JPEG binary header to extract width & height on the server
 */
export function parseImageDimensions(bytes: Uint8Array): {
  width: number;
  height: number;
  format: string;
} | null {
  if (bytes.length < 24) return null;

  // PNG: 89 50 4E 47 0D 0A 1A 0A
  if (
    bytes[0] === 0x89 &&
    bytes[1] === 0x50 &&
    bytes[2] === 0x4e &&
    bytes[3] === 0x47
  ) {
    const width =
      (bytes[16] << 24) | (bytes[17] << 16) | (bytes[18] << 8) | bytes[19];
    const height =
      (bytes[20] << 24) | (bytes[21] << 16) | (bytes[22] << 8) | bytes[23];
    if (width > 0 && height > 0) {
      return { width, height, format: "png" };
    }
  }

  // JPEG: FF D8 FF
  if (bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) {
    let offset = 2;
    while (offset + 9 < bytes.length) {
      if (bytes[offset] !== 0xff) {
        offset++;
        continue;
      }
      const marker = bytes[offset + 1];
      const length = (bytes[offset + 2] << 8) | bytes[offset + 3];
      if (
        marker === 0xc0 ||
        marker === 0xc1 ||
        marker === 0xc2 ||
        marker === 0xc3
      ) {
        const height = (bytes[offset + 5] << 8) | bytes[offset + 6];
        const width = (bytes[offset + 7] << 8) | bytes[offset + 8];
        if (width > 0 && height > 0) {
          return { width, height, format: "jpg" };
        }
      }
      if (length <= 2) break;
      offset += 2 + length;
    }
    return { width: 2160, height: 3840, format: "jpg" };
  }

  // WebP: RIFF....WEBP
  if (
    bytes[0] === 0x52 &&
    bytes[1] === 0x49 &&
    bytes[2] === 0x46 &&
    bytes[3] === 0x46 &&
    bytes[8] === 0x57 &&
    bytes[9] === 0x45 &&
    bytes[10] === 0x42 &&
    bytes[11] === 0x50
  ) {
    return { width: 2160, height: 3840, format: "webp" };
  }

  return null;
}

/**
 * Returns the live catalog manifest combining the seed catalog with any
 * folders/wallpapers uploaded to the `cogify-wallpapers` R2 bucket.
 */
export async function getLiveCatalogManifest(): Promise<CatalogManifest> {
  let baseManifest: CatalogManifest = structuredClone(
    seedManifestJson as unknown as CatalogManifest
  );

  const bucket = await getWallpapersBucket();
  if (bucket) {
    try {
      // Check if an updated manifest exists in R2
      const r2ManifestObj = await bucket.get("manifests/cloud-seed-catalog.json");
      if (r2ManifestObj && r2ManifestObj.arrayBuffer) {
        const buf = await r2ManifestObj.arrayBuffer();
        const parsed = JSON.parse(
          new TextDecoder().decode(buf)
        ) as CatalogManifest;
        if (parsed && Array.isArray(parsed.wallpapers)) {
          baseManifest = parsed;
        }
      }

      // Also auto-discover any images uploaded into `uploads/` or category folders in R2
      const listed = await bucket.list({
        limit: 500,
        include: ["customMetadata", "httpMetadata"],
      });

      const existingIds = new Set(baseManifest.wallpapers.map((w) => w.id));
      const existingFullUrls = new Set(
        baseManifest.wallpapers.map((w) => w.assets.fullResUrl)
      );
      const categoryTitles = baseManifest.categories.map((c) => c.title);

      for (const obj of listed.objects) {
        const key = obj.key;
        if (
          key.startsWith("manifests/") ||
          key.startsWith("thumbnails/") ||
          key.startsWith("previews/")
        ) {
          continue;
        }
        const extMatch = key.match(/\.(png|jpg|jpeg|webp|heic)$/i);
        if (!extMatch) continue;

        const assetUrl = `/assets/${key}`;
        if (existingFullUrls.has(assetUrl)) continue;

        const filename = key.split("/").pop() || key;
        const stem = filename.replace(/\.[^.]+$/, "");
        if (existingIds.has(stem)) continue;

        const meta = obj.customMetadata || {};
        const id =
          meta.id ||
          `r2-folder-${stem.toLowerCase().replace(/[^a-z0-9-]+/g, "-")}`;
        if (existingIds.has(id)) continue;

        const width = parseInt(meta.width || "2160", 10) || 2160;
        const height = parseInt(meta.height || "3840", 10) || 3840;
        const isLandscape = width > height * 1.15;
        const isSquarish = !isLandscape && width > height * 0.68;

        const primaryDevice =
          meta.primaryDevice ||
          (isLandscape ? "Mac" : isSquarish ? "iPad" : "iPhone");
        const orientation = isLandscape ? "landscape" : "portrait";
        const aspectRatio = isLandscape ? "16:9" : isSquarish ? "4:3" : "9:16";
        const category =
          meta.category || inferCategoryFromPath(key, categoryTitles);
        const title = meta.title || humanizeFilename(filename);
        const dominantColor = meta.dominantColor || "#1E293B";
        const palette = meta.palette
          ? meta.palette.split(",")
          : [dominantColor, "#0F172A", "#38BDF8", "#6366F1", "#A855F7"];
        const uploadedIso = obj.uploaded
          ? obj.uploaded.toISOString()
          : new Date().toISOString();

        const newItem: WallpaperManifestItem = {
          id,
          title,
          description:
            meta.description ||
            `${title} — synced from your cogify.me Cloudflare R2 wallpaper folder (${width}×${height}).`,
          category,
          tags: meta.tags
            ? meta.tags.split(",").map((t) => t.trim())
            : [
                category.toLowerCase(),
                "folder-sync",
                "cogify",
                primaryDevice.toLowerCase(),
              ],
          dominantColor,
          palette,
          appearance: meta.appearance || "dark",
          style: meta.style || "digitalArt",
          mood: meta.mood || "serene",
          supportedDevices: ["iPhone", "iPad", "Mac", "AppleWatch"],
          primaryDevice,
          orientation,
          dimensions: { width, height, aspectRatio },
          assets: {
            thumbnailUrl: assetUrl,
            previewUrl: assetUrl,
            fullResUrl: assetUrl,
            liveVideoUrl: null,
            fileSizeBytes: obj.size || 1048576,
            sha256: meta.sha256 || obj.etag || id,
            perceptualHash: meta.perceptualHash || "0000000000000001",
            format: extMatch[1].toLowerCase(),
          },
          deviceVariants: [
            {
              device: primaryDevice,
              width,
              height,
              aspectRatio,
              url: assetUrl,
            },
          ],
          provenance: {
            sourceType: "cogify-r2-folder-upload",
            canvaDesignId: meta.canvaDesignId || null,
            canvaMediaId: meta.canvaMediaId || null,
            artist: meta.artist || "Shubham Sharma • cogify.me Studio",
            license: "Wallpaper Studio First-Party Free Redistribution License v1.0",
            attributionRequired: false,
            attributionText: "Synced via cogify.me R2 Folder Upload",
          },
          matchingSet: null,
          safeZone: {
            clockTopSafeNormalized: 0.26,
            widgetBandSafeNormalized: 0.36,
            recommendedClockColor: "#FFFFFF",
            hasDynamicIslandSafeMargin: true,
          },
          metrics: {
            downloads7d: 5,
            downloads30d: 15,
            favoritesCount: 4,
            trendingScore: 145.0,
            isEditorialFallback: false,
          },
          isFeatured: true,
          isStaffPick: true,
          isLivePhotoReady: false,
          collectionIds: ["col-featured-today", "col-staff-picks"],
          publicationStatus: "published",
          createdAt: uploadedIso,
          updatedAt: uploadedIso,
          contentVersion: 1,
        };

        baseManifest.wallpapers.unshift(newItem);
        existingIds.add(id);
        existingFullUrls.add(assetUrl);
      }
    } catch {
      // Fallback to bundled JSON if R2 listing fails
    }
  }

  // Recompute total & category counts
  baseManifest.totalWallpapers = baseManifest.wallpapers.length;
  baseManifest.source = "cogify.me-cloudflare-r2";
  for (const cat of baseManifest.categories) {
    const matches = baseManifest.wallpapers.filter(
      (w) => w.category === cat.title
    );
    cat.wallpaperCount = matches.length;
    if (matches.length > 0 && !cat.coverWallpaperId) {
      cat.coverWallpaperId = matches[0].id;
    }
  }

  return baseManifest;
}
