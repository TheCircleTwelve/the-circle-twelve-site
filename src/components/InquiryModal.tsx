"use client";

import { useState } from "react";

type InquiryType = "search" | "sell" | "opportunity" | "vehicle";

type InquiryModalProps = {
  open: boolean;
  onClose: () => void;
  language?: "en" | "de";
  type: InquiryType;
  subject: string;
  vehicle?: string;
};

const copy = {
  en: {
    title: "Send a private inquiry.",
    intro: "Share the essentials. Your message will be stored discreetly in our private inbox.",
    name: "Name",
    email: "Email",
    phone: "Phone",
    message: "Message",
    send: "Submit inquiry",
    sending: "Submitting...",
    success: "Your inquiry has been received.",
    close: "Close",
    contactHint: "Please add email or phone so we can respond."
  },
  de: {
    title: "Private Anfrage senden.",
    intro: "Teilen Sie uns die wichtigsten Informationen mit. Ihre Nachricht wird diskret in unserer privaten Inbox gespeichert.",
    name: "Name",
    email: "E-Mail",
    phone: "Telefon",
    message: "Nachricht",
    send: "Anfrage senden",
    sending: "Wird gesendet...",
    success: "Ihre Anfrage wurde gespeichert.",
    close: "Schließen",
    contactHint: "Bitte E-Mail oder Telefon angeben, damit wir antworten können."
  }
};

export function InquiryModal({ open, onClose, language = "en", type, subject, vehicle = "" }: InquiryModalProps) {
  const labels = copy[language];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(vehicle ? `${vehicle}: ` : "");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");

  if (!open) {
    return null;
  }

  async function submitInquiry(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const response = await fetch("/api/inquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type,
        language,
        name,
        email,
        phone,
        message,
        vehicle
      })
    });

    const body = (await response.json().catch(() => ({}))) as { error?: string };

    if (!response.ok) {
      setStatus("error");
      setError(body.error || "Request failed.");
      return;
    }

    setStatus("success");
    setName("");
    setEmail("");
    setPhone("");
    setMessage(vehicle ? `${vehicle}: ` : "");
  }

  return (
    <div className="fixed inset-0 z-[95] flex items-end justify-center bg-black/72 px-4 py-4 backdrop-blur-sm sm:items-center">
      <div className="max-h-[92svh] w-full max-w-2xl overflow-y-auto border border-[#d3b98d]/28 bg-[#100d09] text-pearl shadow-[0_32px_110px_rgba(0,0,0,0.58)]">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-[#f0e7d6] px-5 py-4 text-[#16110b]">
          <div>
            <p className="text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-[#5f4728]">{subject}</p>
            <h2 className="mt-2 font-serif text-[2rem] leading-none sm:text-4xl">{labels.title}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 border border-[#5f4728]/40 px-3 py-2 text-[0.58rem] uppercase tracking-[0.18em]"
          >
            {labels.close}
          </button>
        </div>

        <form onSubmit={submitInquiry} className="grid gap-4 px-5 py-5 sm:grid-cols-2 sm:p-7">
          <p className="text-sm leading-7 text-[#d8d0c2] sm:col-span-2">{labels.intro}</p>

          <label className="grid gap-2 text-[0.58rem] uppercase tracking-[0.22em] text-[#d3b98d]">
            {labels.name}
            <input className="field" value={name} onChange={(event) => setName(event.target.value)} required />
          </label>

          <label className="grid gap-2 text-[0.58rem] uppercase tracking-[0.22em] text-[#d3b98d]">
            {labels.email}
            <input className="field" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          </label>

          <label className="grid gap-2 text-[0.58rem] uppercase tracking-[0.22em] text-[#d3b98d] sm:col-span-2">
            {labels.phone}
            <input className="field" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder={labels.contactHint} />
          </label>

          <label className="grid gap-2 text-[0.58rem] uppercase tracking-[0.22em] text-[#d3b98d] sm:col-span-2">
            {labels.message}
            <textarea
              className="field min-h-[10rem] resize-y"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
            />
          </label>

          {status === "error" ? <p className="text-sm text-[#d3b98d] sm:col-span-2">{error}</p> : null}
          {status === "success" ? <p className="text-sm text-[#d3b98d] sm:col-span-2">{labels.success}</p> : null}

          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-[#f0e7d6] px-5 py-4 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-[#16110b] transition hover:bg-[#d3b98d] disabled:opacity-60 sm:col-span-2"
          >
            {status === "sending" ? labels.sending : labels.send}
          </button>
        </form>
      </div>
    </div>
  );
}
