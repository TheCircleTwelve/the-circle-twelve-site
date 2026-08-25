"use client";

import { useState } from "react";
import type { FormEvent } from "react";

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
    success: "Inquiry sent.",
    successText: "Thank you. Your message has been received and stored in our private inbox.",
    close: "Close",
    contactHint: "Please add email or phone so we can respond.",
    attachment: "Attachment",
    attachmentHint: "PDF, JPG, PNG or WebP. Up to 3 files, max. 4 MB each.",
    attachmentLimit: "Please select no more than 3 files.",
    another: "Send another inquiry"
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
    success: "Anfrage gesendet.",
    successText: "Vielen Dank. Ihre Nachricht wurde empfangen und in unserer privaten Inbox gespeichert.",
    close: "Schließen",
    contactHint: "Bitte E-Mail oder Telefon angeben, damit wir antworten können.",
    attachment: "Anhang",
    attachmentHint: "PDF, JPG, PNG oder WebP. Bis zu 3 Dateien, max. 4 MB pro Datei.",
    attachmentLimit: "Bitte maximal 3 Dateien auswählen.",
    another: "Weitere Anfrage senden"
  }
};

export function InquiryModal({ open, onClose, language = "en", type, subject, vehicle = "" }: InquiryModalProps) {
  const labels = copy[language];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(vehicle ? `${vehicle}: ` : "");
  const [attachments, setAttachments] = useState<File[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");

  if (!open) {
    return null;
  }

  function resetForm() {
    setName("");
    setEmail("");
    setPhone("");
    setMessage(vehicle ? `${vehicle}: ` : "");
    setAttachments([]);
  }

  async function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const formData = new FormData();
    formData.set("type", type);
    formData.set("language", language);
    formData.set("name", name);
    formData.set("email", email);
    formData.set("phone", phone);
    formData.set("message", message);
    formData.set("vehicle", vehicle);

    attachments.slice(0, 3).forEach((attachment) => {
      formData.append("attachments", attachment);
    });

    const response = await fetch("/api/inquiries", {
      method: "POST",
      body: formData
    });

    const body = (await response.json().catch(() => ({}))) as { error?: string };

    if (!response.ok) {
      setStatus("error");
      setError(body.error || "Request failed.");
      return;
    }

    setStatus("success");
    resetForm();
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

        {status === "success" ? (
          <div className="px-5 py-7 sm:p-8">
            <div className="border border-[#d3b98d]/35 bg-[#f0e7d6] p-5 text-[#16110b] sm:p-7">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-[#5f4728]">{labels.success}</p>
              <p className="mt-4 text-base leading-8">{labels.successText}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="border border-[#5f4728]/45 px-5 py-4 text-[0.62rem] font-semibold uppercase tracking-[0.22em]"
                >
                  {labels.another}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-[#16110b] px-5 py-4 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#f0e7d6]"
                >
                  {labels.close}
                </button>
              </div>
            </div>
          </div>
        ) : (
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

          <label className="grid gap-2 text-[0.58rem] uppercase tracking-[0.22em] text-[#d3b98d] sm:col-span-2">
            {labels.attachment}
            <input
              className="field file:mr-4 file:border-0 file:bg-[#f0e7d6] file:px-4 file:py-2 file:text-[0.58rem] file:font-semibold file:uppercase file:tracking-[0.18em] file:text-[#16110b]"
              type="file"
              multiple
              accept="application/pdf,image/jpeg,image/png,image/webp"
              onChange={(event) => {
                const selectedFiles = Array.from(event.target.files || []);

                if (selectedFiles.length > 3) {
                  setStatus("error");
                  setError(labels.attachmentLimit);
                  event.currentTarget.value = "";
                  setAttachments([]);
                  return;
                }

                setError("");
                setStatus("idle");
                setAttachments(selectedFiles);
              }}
            />
            <span className="normal-case tracking-normal text-[#d8d0c2]">{labels.attachmentHint}</span>
          </label>

          {status === "error" ? <p className="text-sm text-[#d3b98d] sm:col-span-2">{error}</p> : null}

          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-[#f0e7d6] px-5 py-4 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-[#16110b] transition hover:bg-[#d3b98d] disabled:opacity-60 sm:col-span-2"
          >
            {status === "sending" ? labels.sending : labels.send}
          </button>
        </form>
        )}
      </div>
    </div>
  );
}
