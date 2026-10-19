import { NextRequest, NextResponse } from "next/server";
import { getLiveCatalogManifest } from "@/lib/wallpapers/catalog";

export async function GET(req: NextRequest) {
  const manifest = await getLiveCatalogManifest();
  const etag = `"cogify-wp-v${manifest.catalogVersion}-${manifest.totalWallpapers}"`;

  const ifNoneMatch = req.headers.get("if-none-match");
  if (ifNoneMatch && ifNoneMatch === etag) {
    return new NextResponse(null, {
      status: 304,
      headers: {
        ETag: etag,
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  return NextResponse.json(manifest, {
    headers: {
      ETag: etag,
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=15, stale-while-revalidate=60",
    },
  });
}
