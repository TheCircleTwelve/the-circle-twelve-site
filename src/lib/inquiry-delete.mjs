const indexKey = "circle12:inquiries:index";
const recordPrefix = "circle12:inquiries:record:";

export function buildDeleteInquiryCommands(id) {
  const inquiryId = String(id || "").trim();

  if (!/^inq_[a-zA-Z0-9_-]+$/.test(inquiryId)) {
    throw new Error("Invalid inquiry id.");
  }

  return [
    ["DEL", `${recordPrefix}${inquiryId}`],
    ["ZREM", indexKey, inquiryId]
  ];
}
