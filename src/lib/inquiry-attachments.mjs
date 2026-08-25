const previewableImageTypes = new Set(["image/jpeg", "image/png", "image/webp"]);

export function isPreviewableImage(attachment) {
  return previewableImageTypes.has(String(attachment?.type || ""));
}
