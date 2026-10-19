import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ADMIN_COOKIE_NAME, verifyAdminToken } from "@/lib/security/auth";
import {
  getLiveCatalogManifest,
  getWallpapersBucket,
  parseImageDimensions,
} from "@/lib/wallpapers/catalog";

async function requireAdminSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  if (!token) return null;
  return await verifyAdminToken(token);
}

async function computeSha256Hex(buffer: ArrayBuffer): Promise<string> {
  const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function sanitizeSegment(seg: string): string {
  return seg
    .replace(/[^a-zA-Z0-9._ -]/g, "-")
    .replace(/\.\.+/g, "")
    .trim();
}

export async function GET() {
  const session = await requireAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const bucket = await getWallpapersBucket();
  const manifest = await getLiveCatalogManifest();

  return NextResponse.json({
    ok: true,
    bucketName: "cogify-wallpapers",
    r2BindingConnected: Boolean(bucket),
    totalWallpapers: manifest.totalWallpapers,
    categories: manifest.categories,
    wallpapers: manifest.wallpapers,
  });
}

export async function POST(req: NextRequest) {
  const session = await requireAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const files = formData.getAll("files") as File[];
    const relativePaths = formData.getAll("relativePaths") as string[];
    const defaultCategory =
      (formData.get("category") as string) || "Minimalist Gradients";
    const dominantColor =
      (formData.get("dominantColor") as string) || "#1E293B";
    const palette =
      (formData.get("palette") as string) ||
      "#1E293B,#0F172A,#38BDF8,#6366F1,#A855F7";

    if (!files || files.length === 0) {
      return NextResponse.json(
        { error: "No wallpaper image files provided" },
        { status: 400 }
      );
    }

    const bucket = await getWallpapersBucket();
    const uploadedItems: Array<{
      key: string;
      title: string;
      category: string;
      width: number;
      height: number;
      size: number;
      sha256: string;
      storedInR2: boolean;
      storedInLocalDropFolder: boolean;
    }> = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (!file || typeof file.arrayBuffer !== "function") continue;

      const relPath = relativePaths[i] || file.name;
      const extMatch = file.name.match(/\.(png|jpg|jpeg|webp|heic)$/i);
      if (!extMatch) continue;

      const arrayBuf = await file.arrayBuffer();
      const bytes = new Uint8Array(arrayBuf);
      const dims = parseImageDimensions(bytes) || {
        width: 2160,
        height: 3840,
        format: extMatch[1].toLowerCase(),
      };

      const sha256 = await computeSha256Hex(arrayBuf);

      // Infer category from folder structure if uploaded via Folder Picker (`webkitdirectory`)
      const parts = relPath.split("/").filter(Boolean);
      const fileName = sanitizeSegment(parts[parts.length - 1] || file.name);
      const parentFolder =
        parts.length >= 2
          ? sanitizeSegment(parts[parts.length - 2])
          : sanitizeSegment(defaultCategory);

      const r2Key = `uploads/${parentFolder}/${fileName}`;
      const title = fileName
        .replace(/\.[^.]+$/, "")
        .replace(/[-_]+/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());

      let storedInR2 = false;
      if (bucket) {
        await bucket.put(r2Key, arrayBuf, {
          httpMetadata: {
            contentType: file.type || `image/${dims.format}`,
            cacheControl: "public, max-age=31536000, immutable",
          },
          customMetadata: {
            title,
            category: parentFolder,
            width: String(dims.width),
            height: String(dims.height),
            dominantColor,
            palette,
            sha256,
            artist: session.email,
          },
        });
        storedInR2 = true;
      }

      let storedInLocalDropFolder = false;
      if (typeof process !== "undefined" && process.release?.name === "node") {
        try {
          const fs = await import("fs");
          const path = await import("path");
          const targetDir = path.resolve(
            "/Users/shubhamsharma/Downloads/Wallpaper/DropWallpapersHere",
            parentFolder
          );
          fs.mkdirSync(targetDir, { recursive: true });
          fs.writeFileSync(path.join(targetDir, fileName), Buffer.from(bytes));
          storedInLocalDropFolder = true;
        } catch {
          // Ignore outside local dev
        }
      }

      uploadedItems.push({
        key: r2Key,
        title,
        category: parentFolder,
        width: dims.width,
        height: dims.height,
        size: bytes.byteLength,
        sha256,
        storedInR2,
        storedInLocalDropFolder,
      });
    }

    return NextResponse.json({
      ok: true,
      uploadedCount: uploadedItems.length,
      uploadedItems,
    });
  } catch (err) {
    return NextResponse.json(
      {
        error:
          err instanceof Error ? err.message : "Failed to upload wallpapers",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  const session = await requireAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { key } = (await req.json()) as { key?: string };
    if (!key) {
      return NextResponse.json({ error: "Missing key" }, { status: 400 });
    }

    const bucket = await getWallpapersBucket();
    if (bucket) {
      await bucket.delete(key);
    }

    return NextResponse.json({ ok: true, deletedKey: key });
  } catch {
    return NextResponse.json(
      { error: "Failed to delete wallpaper" },
      { status: 500 }
    );
  }
}
