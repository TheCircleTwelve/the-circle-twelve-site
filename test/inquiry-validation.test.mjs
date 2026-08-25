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
