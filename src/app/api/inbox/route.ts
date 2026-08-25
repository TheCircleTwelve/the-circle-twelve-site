import { NextResponse } from "next/server";
import { deleteInquiry, hasInboxAccess, isInboxConfigured, listInquiries, updateInquiryStatus } from "@/lib/inquiry-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function getPassword(request: Request) {
  const header = request.headers.get("authorization") || "";
  return header.startsWith("Bearer ") ? header.slice(7) : null;
}

export async function GET(request: Request) {
  if (!isInboxConfigured()) {
    return NextResponse.json({ error: "Inbox storage is not configured." }, { status: 503 });
  }

  if (!hasInboxAccess(getPassword(request))) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const inquiries = await listInquiries();
  return NextResponse.json({ inquiries });
}

export async function PATCH(request: Request) {
  if (!isInboxConfigured()) {
    return NextResponse.json({ error: "Inbox storage is not configured." }, { status: 503 });
  }

  if (!hasInboxAccess(getPassword(request))) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const body = (await request.json()) as { id?: string; status?: "new" | "read" | "done" };

  if (!body.id || !body.status) {
    return NextResponse.json({ error: "Missing inquiry id or status." }, { status: 400 });
  }

  const inquiry = await updateInquiryStatus(body.id, body.status);
  return NextResponse.json({ inquiry });
}

export async function DELETE(request: Request) {
  if (!isInboxConfigured()) {
    return NextResponse.json({ error: "Inbox storage is not configured." }, { status: 503 });
  }

  if (!hasInboxAccess(getPassword(request))) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const body = (await request.json()) as { id?: string };

  if (!body.id) {
    return NextResponse.json({ error: "Missing inquiry id." }, { status: 400 });
  }

  await deleteInquiry(body.id);
  return NextResponse.json({ ok: true });
}
