import { NextResponse } from "next/server";
import { getLiveCatalogManifest } from "@/lib/wallpapers/catalog";

export async function GET() {
  const manifest = await getLiveCatalogManifest();
  const sorted = [...manifest.wallpapers]
    .filter((w) => w.publicationStatus === "published")
    .sort((a, b) => b.metrics.trendingScore - a.metrics.trendingScore)
    .slice(0, 24);

  return NextResponse.json(
    { data: sorted },
    { headers: { "Access-Control-Allow-Origin": "*" } }
  );
}
