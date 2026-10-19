import { NextRequest, NextResponse } from "next/server";
import { getWallpapersBucket } from "@/lib/wallpapers/catalog";

function inferContentType(key: string): string {
  const lower = key.toLowerCase();
  if (lower.endsWith(".png")) return "image/png";
  if (lower.endsWith(".webp")) return "image/webp";
  if (lower.endsWith(".heic")) return "image/heic";
  if (lower.endsWith(".mov")) return "video/quicktime";
  if (lower.endsWith(".json")) return "application/json";
  return "image/jpeg";
}

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ key: string[] }> }
) {
  const { key: keySegments } = await context.params;
  if (!keySegments || keySegments.length === 0) {
    return NextResponse.json({ error: "Missing asset key" }, { status: 400 });
  }

  const objectKey = keySegments.join("/");
  if (objectKey.includes("..") || objectKey.startsWith("/")) {
    return NextResponse.json({ error: "Invalid asset path" }, { status: 400 });
  }

  // 1. Serve from Cloudflare R2 bucket `cogify-wallpapers` (`WALLPAPERS_BUCKET`)
  const bucket = await getWallpapersBucket();
  if (bucket) {
    try {
      const obj = await bucket.get(objectKey);
      if (obj) {
        const contentType =
          obj.httpMetadata?.contentType || inferContentType(objectKey);
        if (obj.body) {
          return new NextResponse(obj.body, {
            status: 200,
            headers: {
              "Content-Type": contentType,
              "Cache-Control": "public, max-age=31536000, immutable",
              "Access-Control-Allow-Origin": "*",
              ...(obj.httpEtag ? { ETag: obj.httpEtag } : {}),
            },
          });
        }
        if (obj.arrayBuffer) {
          const buf = await obj.arrayBuffer();
          return new NextResponse(buf, {
            status: 200,
            headers: {
              "Content-Type": contentType,
              "Cache-Control": "public, max-age=31536000, immutable",
              "Access-Control-Allow-Origin": "*",
            },
          });
        }
      }
    } catch {
      // Fall through to local file fallback in dev
    }
  }

  // 2. Local Node.js dev fallback (reads from /Users/shubhamsharma/Downloads/Wallpaper/content/starter-assets/ or DropWallpapersHere/)
  if (typeof process !== "undefined" && process.release?.name === "node") {
    try {
      const fs = await import("fs");
      const path = await import("path");
      const starterPath = path.resolve(
        "/Users/shubhamsharma/Downloads/Wallpaper/content/starter-assets",
        objectKey
      );
      const dropPath = path.resolve(
        "/Users/shubhamsharma/Downloads/Wallpaper/DropWallpapersHere",
        objectKey.replace(/^uploads\//, "")
      );
      const candidate = fs.existsSync(starterPath)
        ? starterPath
        : fs.existsSync(dropPath)
        ? dropPath
        : null;
      if (candidate) {
        const bytes = fs.readFileSync(candidate);
        return new NextResponse(bytes, {
          status: 200,
          headers: {
            "Content-Type": inferContentType(objectKey),
            "Cache-Control": "public, max-age=3600",
            "Access-Control-Allow-Origin": "*",
          },
        });
      }
    } catch {
      // Ignore
    }
  }

  return NextResponse.json(
    { error: "Wallpaper asset not found in R2 bucket cogify-wallpapers" },
    { status: 404 }
  );
}
