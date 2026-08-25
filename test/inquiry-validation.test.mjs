import test from "node:test";
import assert from "node:assert/strict";
import { sanitizeInquiryInput } from "../src/lib/inquiry-validation.mjs";

test("sanitizes a valid inquiry", () => {
  const result = sanitizeInquiryInput({
    type: "sell",
    language: "de",
    name: "  Celine  ",
    email: "celine@example.com ",
    phone: " +49 123 ",
    message: "  Ferrari F80 available.  "
  });

  assert.equal(result.ok, true);
  assert.equal(result.value.name, "Celine");
  assert.equal(result.value.email, "celine@example.com");
  assert.equal(result.value.phone, "+49 123");
  assert.equal(result.value.message, "Ferrari F80 available.");
});

test("rejects missing contact details", () => {
  const result = sanitizeInquiryInput({
    type: "search",
    language: "en",
    name: "No Contact",
    email: "",
    phone: "",
    message: "Looking for a Carrera GT."
  });

  assert.equal(result.ok, false);
  assert.match(result.error, /contact/i);
});

test("rejects too short messages", () => {
  const result = sanitizeInquiryInput({
    type: "opportunity",
    language: "en",
    name: "Client",
    email: "client@example.com",
    message: "Hi"
  });

  assert.equal(result.ok, false);
  assert.match(result.error, /message/i);
});

test("keeps safe attachment metadata", () => {
  const result = sanitizeInquiryInput({
    type: "vehicle",
    language: "en",
    name: "Collector",
    email: "collector@example.com",
    message: "I can provide further details on this vehicle.",
    attachments: [
      {
        url: "https://blob.vercel-storage.com/inquiries/photo.jpg",
        name: " photo.jpg ",
        type: "image/jpeg",
        size: 245760
      }
    ]
  });

  assert.equal(result.ok, true);
  assert.deepEqual(result.value.attachments, [
    {
      url: "https://blob.vercel-storage.com/inquiries/photo.jpg",
      name: "photo.jpg",
      type: "image/jpeg",
      size: 245760
    }
  ]);
});

test("keeps multiple safe attachment metadata entries", () => {
  const result = sanitizeInquiryInput({
    type: "vehicle",
    language: "de",
    name: "Sammlung",
    email: "sammlung@example.com",
    message: "Ich sende mehrere Fotos zu diesem Fahrzeug.",
    attachments: [
      {
        url: "https://blob.vercel-storage.com/inquiries/front.jpg",
        name: "front.jpg",
        type: "image/jpeg",
        size: 120000
      },
      {
        url: "https://blob.vercel-storage.com/inquiries/interior.png",
        name: "interior.png",
        type: "image/png",
        size: 130000
      },
      {
        url: "https://blob.vercel-storage.com/inquiries/history.pdf",
        name: "history.pdf",
        type: "application/pdf",
        size: 220000
      },
      {
        url: "https://blob.vercel-storage.com/inquiries/extra.webp",
        name: "extra.webp",
        type: "image/webp",
        size: 140000
      }
    ]
  });

  assert.equal(result.ok, true);
  assert.equal(result.value.attachments.length, 3);
  assert.equal(result.value.attachments[0].name, "front.jpg");
  assert.equal(result.value.attachments[1].name, "interior.png");
  assert.equal(result.value.attachments[2].name, "history.pdf");
});
