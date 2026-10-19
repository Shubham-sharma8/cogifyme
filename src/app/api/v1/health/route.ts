import { NextResponse } from "next/server";
import { getLiveCatalogManifest } from "@/lib/wallpapers/catalog";

export async function GET() {
  const manifest = await getLiveCatalogManifest();
  return NextResponse.json(
    {
      status: "ok",
      service: "cogify-wallpaper-studio-api",
      domain: "cogify.me",
      r2Bucket: "cogify-wallpapers",
      catalogVersion: manifest.catalogVersion,
      totalWallpapers: manifest.totalWallpapers,
      timestamp: new Date().toISOString(),
    },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "no-store",
      },
    }
  );
}
