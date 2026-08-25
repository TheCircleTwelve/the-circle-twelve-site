import { sanitizeInquiryInput } from "@/lib/inquiry-validation.mjs";
import { buildDeleteInquiryCommands } from "@/lib/inquiry-delete.mjs";

export type InquiryStatus = "new" | "read" | "done";

export type InquiryAttachment = {
  url: string;
  name: string;
  type: string;
  size: number;
};

export type InquiryRecord = {
  id: string;
  createdAt: string;
  status: InquiryStatus;
  type: string;
  language: "en" | "de";
  name: string;
  email: string;
  phone: string;
  message: string;
  vehicle: string;
  attachments: InquiryAttachment[];
};

type SanitizedInquiry = Pick<
  InquiryRecord,
  "type" | "language" | "name" | "email" | "phone" | "message" | "vehicle" | "attachments"
>;

const indexKey = "circle12:inquiries:index";
const recordPrefix = "circle12:inquiries:record:";

function getKvConfig() {
  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;
  return url && token && url !== "[SENSITIVE]" && token !== "[SENSITIVE]" ? { url, token } : null;
}

async function redisCommand<T>(command: unknown[]): Promise<T> {
  const config = getKvConfig();

  if (!config) {
    throw new Error("Inbox storage is not configured.");
  }

  const response = await fetch(config.url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(command),
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error(`Inbox storage request failed with ${response.status}.`);
  }

  const body = (await response.json()) as { result?: T; error?: string };

  if (body.error) {
    throw new Error(body.error);
  }

  return body.result as T;
}

function pairsToObject(values: unknown[]): Record<string, string> {
  const result: Record<string, string> = {};

  for (let index = 0; index < values.length; index += 2) {
    const key = String(values[index] ?? "");
    result[key] = String(values[index + 1] ?? "");
  }

  return result;
}

function toRecord(values: unknown[]): InquiryRecord | null {
  const data = pairsToObject(values);
  let attachments: InquiryAttachment[] = [];

  try {
    attachments = data.attachments ? (JSON.parse(data.attachments) as InquiryAttachment[]) : [];
  } catch {
    attachments = [];
  }

  if (!data.id || !data.createdAt) {
    return null;
  }

  return {
    id: data.id,
    createdAt: data.createdAt,
    status: (data.status as InquiryStatus) || "new",
    type: data.type || "opportunity",
    language: data.language === "de" ? "de" : "en",
    name: data.name || "",
    email: data.email || "",
    phone: data.phone || "",
    message: data.message || "",
    vehicle: data.vehicle || "",
    attachments
  };
}

export function isInboxConfigured() {
  return Boolean(getKvConfig());
}

export function hasInboxAccess(password: string | null) {
  const configuredPassword = process.env.INBOX_PASSWORD || process.env.ADMIN_PASSWORD;
  return Boolean(configuredPassword && configuredPassword !== "[SENSITIVE]" && password && password === configuredPassword);
}

export async function createInquiry(input: unknown) {
  const sanitized = sanitizeInquiryInput(input);

  if (!sanitized.ok) {
    return sanitized;
  }

  const value = sanitized.value as SanitizedInquiry;
  const now = Date.now();
  const record: InquiryRecord = {
    id: `inq_${now}_${Math.random().toString(36).slice(2, 10)}`,
    createdAt: new Date(now).toISOString(),
    status: "new",
    ...value
  };

  await redisCommand<number>([
    "HSET",
    `${recordPrefix}${record.id}`,
    "id",
    record.id,
    "createdAt",
    record.createdAt,
    "status",
    record.status,
    "type",
    record.type,
    "language",
    record.language,
    "name",
    record.name,
    "email",
    record.email,
    "phone",
    record.phone,
    "message",
    record.message,
    "vehicle",
    record.vehicle,
    "attachments",
    JSON.stringify(record.attachments)
  ]);
  await redisCommand<number>(["ZADD", indexKey, now, record.id]);

  return { ok: true as const, value: record };
}

export async function listInquiries() {
  const ids = await redisCommand<string[]>(["ZREVRANGE", indexKey, 0, 100]);
  const records = await Promise.all(
    ids.map(async (id) => {
      const values = await redisCommand<unknown[]>(["HGETALL", `${recordPrefix}${id}`]);
      return toRecord(values);
    })
  );

  return records.filter((record): record is InquiryRecord => Boolean(record));
}

export async function updateInquiryStatus(id: string, status: InquiryStatus) {
  if (!["new", "read", "done"].includes(status)) {
    throw new Error("Invalid status.");
  }

  await redisCommand<number>(["HSET", `${recordPrefix}${id}`, "status", status]);
  const values = await redisCommand<unknown[]>(["HGETALL", `${recordPrefix}${id}`]);
  return toRecord(values);
}

export async function deleteInquiry(id: string) {
  const commands = buildDeleteInquiryCommands(id);

  for (const command of commands) {
    await redisCommand<number>(command);
  }

  return { ok: true as const };
}
