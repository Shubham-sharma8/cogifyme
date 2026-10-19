import { NextRequest, NextResponse } from "next/server";
import { getLiveCatalogManifest } from "@/lib/wallpapers/catalog";

export async function GET(req: NextRequest) {
  const manifest = await getLiveCatalogManifest();
  const { searchParams } = new URL(req.url);

  const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
  const limit = Math.min(
    200,
    Math.max(1, parseInt(searchParams.get("limit") || "48", 10))
  );
  const category = searchParams.get("category");
  const device = searchParams.get("device");
  const appearance = searchParams.get("appearance");
  const q = searchParams.get("q")?.toLowerCase().trim();

  let filtered = manifest.wallpapers.filter(
    (w) => w.publicationStatus === "published"
  );

  if (category) {
    filtered = filtered.filter(
      (w) => w.category.toLowerCase() === category.toLowerCase()
    );
  }
  if (device) {
    filtered = filtered.filter((w) =>
      w.supportedDevices.some((d) => d.toLowerCase() === device.toLowerCase())
    );
  }
  if (appearance) {
    filtered = filtered.filter(
      (w) => w.appearance.toLowerCase() === appearance.toLowerCase()
    );
  }
  if (q) {
    filtered = filtered.filter(
      (w) =>
        w.title.toLowerCase().includes(q) ||
        w.description.toLowerCase().includes(q) ||
        w.category.toLowerCase().includes(q) ||
        w.tags.some((t) => t.toLowerCase().includes(q))
    );
  }

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / limit));
  const start = (page - 1) * limit;
  const data = filtered.slice(start, start + limit);

  return NextResponse.json(
    {
      data,
      pagination: {
        page,
        limit,
        total,
        totalPages,
        hasMore: page < totalPages,
      },
      catalogVersion: manifest.catalogVersion,
    },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
}
