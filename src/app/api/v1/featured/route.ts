import { NextResponse } from "next/server";
import { getLiveCatalogManifest } from "@/lib/wallpapers/catalog";

export async function GET() {
  const manifest = await getLiveCatalogManifest();
  const published = manifest.wallpapers.filter(
    (w) => w.publicationStatus === "published"
  );
  const hero = published.find((w) => w.isFeatured) || published[0] || null;
  const featuredTodayCollection =
    manifest.collections.find((c) => c.isFeaturedToday) ||
    manifest.collections[0] ||
    null;
  const staffPicks = published.filter((w) => w.isStaffPick).slice(0, 16);
  const darkWallpapers = published
    .filter((w) => w.appearance === "dark" || w.category === "Dark AMOLED")
    .slice(0, 16);

  return NextResponse.json(
    {
      hero,
      featuredTodayCollection,
      staffPicks,
      darkWallpapers,
      matchingHighlights: manifest.matchingSets.slice(0, 6),
    },
    { headers: { "Access-Control-Allow-Origin": "*" } }
  );
}
