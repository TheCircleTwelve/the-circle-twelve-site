import { NextResponse } from "next/server";
import { get } from "@vercel/blob";
import { hasInboxAccess } from "@/lib/inquiry-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function getPassword(request: Request) {
  const header = request.headers.get("authorization") || "";
  return header.startsWith("Bearer ") ? header.slice(7) : null;
}

function safeDownloadName(value: string | null) {
  return (value || "attachment").replace(/[^a-zA-Z0-9._-]/g, "-").replace(/-+/g, "-").slice(0, 140);
}

export async function GET(request: Request) {
  if (!hasInboxAccess(getPassword(request))) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");
  const name = safeDownloadName(searchParams.get("name"));

  if (!url || !url.startsWith("https://")) {
    return NextResponse.json({ error: "Missing file URL." }, { status: 400 });
  }

  const result = await get(url, { access: "private" });

  if (!result || result.statusCode !== 200) {
    return NextResponse.json({ error: "File not found." }, { status: 404 });
  }

  const headers = new Headers();
  headers.set("Content-Disposition", `attachment; filename="${name}"`);
  headers.set("Cache-Control", "no-store");

  if (result.blob.contentType) {
    headers.set("Content-Type", result.blob.contentType);
  }

  return new Response(result.stream, { headers });
}
