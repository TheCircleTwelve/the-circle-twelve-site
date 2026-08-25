const inquiryTypes = new Set(["search", "sell", "opportunity", "vehicle"]);
const languages = new Set(["en", "de"]);
const attachmentTypes = new Set(["application/pdf", "image/jpeg", "image/png", "image/webp"]);

function cleanText(value, maxLength) {
  return String(value ?? "").replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function sanitizeAttachments(value) {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .slice(0, 1)
    .map((attachment) => {
      const url = cleanText(attachment?.url, 800);
      const name = cleanText(attachment?.name, 180);
      const type = cleanText(attachment?.type, 80);
      const size = Number(attachment?.size || 0);

      if (!url.startsWith("https://") || !name || !attachmentTypes.has(type) || !Number.isFinite(size) || size < 1) {
        return null;
      }

      return { url, name, type, size };
    })
    .filter(Boolean);
}

export function sanitizeInquiryInput(input) {
  const type = cleanText(input?.type, 40);
  const language = cleanText(input?.language, 2);
  const name = cleanText(input?.name, 120);
  const email = cleanText(input?.email, 180).toLowerCase();
  const phone = cleanText(input?.phone, 80);
  const message = cleanText(input?.message, 3000);
  const vehicle = cleanText(input?.vehicle, 180);
  const attachments = sanitizeAttachments(input?.attachments);

  if (!inquiryTypes.has(type)) {
    return { ok: false, error: "Please choose a valid inquiry type." };
  }

  if (!languages.has(language)) {
    return { ok: false, error: "Please choose a valid language." };
  }

  if (name.length < 2) {
    return { ok: false, error: "Please enter your name." };
  }

  if (!email && !phone) {
    return { ok: false, error: "Please add at least one contact detail." };
  }

  if (email && !isValidEmail(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  if (message.length < 10) {
    return { ok: false, error: "Please add a message with at least 10 characters." };
  }

  return {
    ok: true,
    value: {
      type,
      language,
      name,
      email,
      phone,
      message,
      vehicle,
      attachments
    }
  };
}
