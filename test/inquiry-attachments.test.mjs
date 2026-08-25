import test from "node:test";
import assert from "node:assert/strict";
import { isPreviewableImage } from "../src/lib/inquiry-attachments.mjs";

test("detects image attachments that can be previewed", () => {
  assert.equal(isPreviewableImage({ type: "image/jpeg" }), true);
  assert.equal(isPreviewableImage({ type: "image/png" }), true);
  assert.equal(isPreviewableImage({ type: "image/webp" }), true);
});

test("does not preview documents", () => {
  assert.equal(isPreviewableImage({ type: "application/pdf" }), false);
  assert.equal(isPreviewableImage({ type: "" }), false);
});
