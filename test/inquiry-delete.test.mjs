import test from "node:test";
import assert from "node:assert/strict";
import { buildDeleteInquiryCommands } from "../src/lib/inquiry-delete.mjs";

test("builds redis commands to remove an inquiry from list and record storage", () => {
  assert.deepEqual(buildDeleteInquiryCommands("inq_123"), [
    ["DEL", "circle12:inquiries:record:inq_123"],
    ["ZREM", "circle12:inquiries:index", "inq_123"]
  ]);
});

test("rejects invalid inquiry ids", () => {
  assert.throws(() => buildDeleteInquiryCommands("../bad"), /invalid/i);
});
