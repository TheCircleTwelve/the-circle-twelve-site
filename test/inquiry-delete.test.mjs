import test from "node:test";
import assert from "node:assert/strict";
import { buildDeleteInquiryCommands } from "../src/lib/inquiry-delete.mjs";

test("builds redis commands to move an inquiry into the trash", () => {
  assert.deepEqual(buildDeleteInquiryCommands("inq_123", "2026-08-25T10:00:00.000Z"), [
    ["HSET", "circle12:inquiries:record:inq_123", "status", "trash", "deletedAt", "2026-08-25T10:00:00.000Z"]
  ]);
});

test("rejects invalid inquiry ids", () => {
  assert.throws(() => buildDeleteInquiryCommands("../bad"), /invalid/i);
});
