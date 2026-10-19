import { NextResponse } from "next/server";
import { getLiveCatalogManifest } from "@/lib/wallpapers/catalog";

export async function GET() {
  const manifest = await getLiveCatalogManifest();
  return NextResponse.json(
    { data: manifest.matchingSets },
    { headers: { "Access-Control-Allow-Origin": "*" } }
  );
}
