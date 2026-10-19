import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as {
      wallpaperId?: string;
      eventType?: string;
    };
    if (!body?.wallpaperId || !body?.eventType) {
      return NextResponse.json(
        { error: "Missing wallpaperId or eventType" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { ok: true, recorded: true },
      { headers: { "Access-Control-Allow-Origin": "*" } }
    );
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
}
