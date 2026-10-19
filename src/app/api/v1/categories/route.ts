import { NextResponse } from "next/server";
import { getLiveCatalogManifest } from "@/lib/wallpapers/catalog";

export async function GET() {
  const manifest = await getLiveCatalogManifest();
  return NextResponse.json(
    { data: manifest.categories },
    { headers: { "Access-Control-Allow-Origin": "*" } }
  );
}
