const recordPrefix = "circle12:inquiries:record:";

export function buildDeleteInquiryCommands(id, deletedAt = new Date().toISOString()) {
  const inquiryId = String(id || "").trim();

  if (!/^inq_[a-zA-Z0-9_-]+$/.test(inquiryId)) {
    throw new Error("Invalid inquiry id.");
  }

  return [["HSET", `${recordPrefix}${inquiryId}`, "status", "trash", "deletedAt", deletedAt]];
}
