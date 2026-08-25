import { NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { createInquiry } from "@/lib/inquiry-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const acceptedFileTypes = new Set(["application/pdf", "image/jpeg", "image/png", "image/webp"]);
const maxFileSize = 4 * 1024 * 1024;
const maxFiles = 3;

function safeFileName(value: string) {
  return value.replace(/[^a-zA-Z0-9._-]/g, "-").replace(/-+/g, "-").slice(0, 140) || "attachment";
}

async function parseInquiryRequest(request: Request) {
  const contentType = request.headers.get("content-type") || "";

  if (!contentType.includes("multipart/form-data")) {
    return request.json();
  }

  const formData = await request.formData();
  const files = [...formData.getAll("attachments"), ...formData.getAll("attachment")]
    .filter((file): file is File => file instanceof File && file.size > 0)
    .slice(0, maxFiles);
  const input: Record<string, unknown> = {
    type: formData.get("type"),
    language: formData.get("language"),
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
    vehicle: formData.get("vehicle"),
    attachments: []
  };

  if (files.length) {
    const attachments: Array<{ url: string; name: string; type: string; size: number }> = [];

    for (const file of files) {
      if (!acceptedFileTypes.has(file.type)) {
        throw new Error("Please upload a PDF, JPG, PNG or WebP file.");
      }

      if (file.size > maxFileSize) {
        throw new Error("Please upload a file smaller than 4 MB.");
      }

      const blob = await put(`inquiries/${Date.now()}-${safeFileName(file.name)}`, file, {
        access: "private",
        contentType: file.type
      });

      attachments.push({
        url: blob.url,
        name: file.name,
        type: file.type,
        size: file.size
      });
    }

    input.attachments = attachments;
  }

  return input;
}

export async function POST(request: Request) {
  try {
    const input = await parseInquiryRequest(request);
    const result = await createInquiry(input);

    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json({ inquiry: result.value }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Request failed.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
