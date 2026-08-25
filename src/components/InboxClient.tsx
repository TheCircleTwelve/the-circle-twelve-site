"use client";

import { useEffect, useState } from "react";
import { isPreviewableImage } from "@/lib/inquiry-attachments.mjs";
import type { InquiryAttachment, InquiryRecord, InquiryStatus } from "@/lib/inquiry-store";

const statusLabels: Record<InquiryStatus, string> = {
  new: "Neu",
  read: "Gelesen",
  done: "Erledigt",
  trash: "Papierkorb"
};

function TrashIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 7h16" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
      <path d="M6 7l1 14h10l1-14" />
      <path d="M9 7V4h6v3" />
    </svg>
  );
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("de-DE", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(value));
}

function AttachmentPreview({
  attachment,
  password,
  onDownload,
  onError
}: {
  attachment: InquiryAttachment;
  password: string;
  onDownload: (url: string, name: string) => void;
  onError: (message: string) => void;
}) {
  const [previewUrl, setPreviewUrl] = useState("");

  useEffect(() => {
    if (!isPreviewableImage(attachment)) {
      return;
    }

    let active = true;
    let objectUrl = "";

    async function loadPreview() {
      const response = await fetch(
        `/api/inbox/file?url=${encodeURIComponent(attachment.url)}&name=${encodeURIComponent(attachment.name)}`,
        {
          headers: { Authorization: `Bearer ${password}` },
          cache: "no-store"
        }
      );

      if (!response.ok) {
        onError("Bildvorschau konnte nicht geladen werden.");
        return;
      }

      const file = await response.blob();
      objectUrl = window.URL.createObjectURL(file);

      if (active) {
        setPreviewUrl(objectUrl);
      }
    }

    void loadPreview();

    return () => {
      active = false;
      if (objectUrl) {
        window.URL.revokeObjectURL(objectUrl);
      }
    };
  }, [attachment, onError, password]);

  if (isPreviewableImage(attachment)) {
    return (
      <div className="w-full max-w-sm border border-white/10 bg-black/25 p-2">
        {previewUrl ? (
          <img src={previewUrl} alt={attachment.name} className="aspect-[4/3] w-full object-cover" />
        ) : (
          <div className="grid aspect-[4/3] w-full place-items-center bg-[#080705] text-[0.62rem] uppercase tracking-[0.22em] text-[#d8d0c2]">
            Bild lädt...
          </div>
        )}
        <button
          type="button"
          onClick={() => onDownload(attachment.url, attachment.name)}
          className="mt-2 w-full bg-[#f0e7d6] px-4 py-3 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#16110b]"
        >
          Datei öffnen / {attachment.name}
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onDownload(attachment.url, attachment.name)}
      className="border border-[#d3b98d]/35 bg-[#f0e7d6] px-4 py-3 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#16110b]"
    >
      Datei öffnen / {attachment.name}
    </button>
  );
}

export function InboxClient() {
  const [password, setPassword] = useState("");
  const [savedPassword, setSavedPassword] = useState("");
  const [inquiries, setInquiries] = useState<InquiryRecord[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState<"active" | "trash">("active");

  async function loadInbox(nextPassword = savedPassword, nextView = view) {
    if (!nextPassword) {
      return;
    }

    setLoading(true);
    setError("");

    const response = await fetch(`/api/inbox${nextView === "trash" ? "?view=trash" : ""}`, {
      headers: { Authorization: `Bearer ${nextPassword}` },
      cache: "no-store"
    });
    const body = (await response.json().catch(() => ({}))) as { inquiries?: InquiryRecord[]; error?: string };

    setLoading(false);

    if (!response.ok) {
      setError(body.error || "Inbox konnte nicht geladen werden.");
      return;
    }

    setInquiries(body.inquiries || []);
    window.localStorage.setItem("circle12-inbox-password", nextPassword);
  }

  async function signIn(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSavedPassword(password);
    await loadInbox(password);
  }

  async function updateStatus(id: string, status: InquiryStatus) {
    const response = await fetch("/api/inbox", {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${savedPassword}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id, status })
    });

    if (!response.ok) {
      setError("Status konnte nicht geändert werden.");
      return;
    }

    await loadInbox();
  }

  async function deleteMessage(id: string, name: string) {
    const confirmed = window.confirm(`Anfrage von ${name || "diesem Kontakt"} in den Papierkorb verschieben?`);

    if (!confirmed) {
      return;
    }

    const response = await fetch("/api/inbox", {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${savedPassword}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id })
    });

    if (!response.ok) {
      setError("Anfrage konnte nicht gelöscht werden.");
      return;
    }

    setInquiries((current) => current.filter((inquiry) => inquiry.id !== id));
  }

  async function switchView(nextView: "active" | "trash") {
    setView(nextView);
    await loadInbox(savedPassword, nextView);
  }

  async function downloadAttachment(url: string, name: string) {
    const fileWindow = window.open("", "_blank", "noopener,noreferrer");

    if (fileWindow) {
      fileWindow.document.title = name || "Attachment";
      fileWindow.document.body.style.margin = "24px";
      fileWindow.document.body.style.fontFamily = "serif";
      fileWindow.document.body.textContent = "Datei wird geöffnet...";
    }

    const response = await fetch(`/api/inbox/file?url=${encodeURIComponent(url)}&name=${encodeURIComponent(name)}`, {
      headers: { Authorization: `Bearer ${savedPassword}` },
      cache: "no-store"
    });

    if (!response.ok) {
      fileWindow?.close();
      setError("Datei konnte nicht geöffnet werden.");
      return;
    }

    const file = await response.blob();
    const objectUrl = window.URL.createObjectURL(file);

    if (fileWindow) {
      fileWindow.location.href = objectUrl;
    } else {
      const anchor = document.createElement("a");
      anchor.href = objectUrl;
      anchor.download = name || "attachment";
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
    }

    window.setTimeout(() => window.URL.revokeObjectURL(objectUrl), 60000);
  }

  useEffect(() => {
    const stored = window.localStorage.getItem("circle12-inbox-password") || "";
    if (stored) {
      setSavedPassword(stored);
      setPassword(stored);
      void loadInbox(stored, "active");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="min-h-screen bg-[#080705] px-4 py-6 text-pearl sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[96rem]">
        <header className="border-b border-white/10 pb-6">
          <p className="text-[0.62rem] uppercase tracking-[0.42em] text-[#d3b98d]">The Circle Twelve</p>
          <h1 className="mt-5 font-serif text-[2.7rem] leading-none sm:text-7xl">Private Inbox</h1>
        </header>

        {!savedPassword || error === "Unauthorized." ? (
          <form onSubmit={signIn} className="mt-10 max-w-xl border border-white/10 bg-[#100d09] p-5 sm:p-8">
            <label className="grid gap-3 text-[0.62rem] uppercase tracking-[0.28em] text-[#d3b98d]">
              Passwort
              <input
                type="password"
                className="field"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoFocus
              />
            </label>
            <button className="mt-5 w-full bg-[#f0e7d6] px-5 py-4 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#16110b]">
              Inbox öffnen
            </button>
          </form>
        ) : (
          <section className="mt-8">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => switchView("active")}
                  className={`border px-4 py-3 text-[0.62rem] uppercase tracking-[0.22em] ${
                    view === "active" ? "border-[#d3b98d] bg-[#d3b98d] text-[#16110b]" : "border-white/14 text-[#d8d0c2]"
                  }`}
                >
                  Inbox
                </button>
                <button
                  type="button"
                  onClick={() => switchView("trash")}
                  className={`inline-flex items-center gap-2 border px-4 py-3 text-[0.62rem] uppercase tracking-[0.22em] ${
                    view === "trash" ? "border-[#d3b98d] bg-[#d3b98d] text-[#16110b]" : "border-white/14 text-[#d8d0c2]"
                  }`}
                >
                  <TrashIcon />
                  Papierkorb
                </button>
                <p className="self-center text-sm uppercase tracking-[0.22em] text-[#d8d0c2]">
                  {loading ? "Lädt..." : `${inquiries.length} Nachrichten`}
                </p>
              </div>
              <button
                type="button"
                onClick={() => loadInbox()}
                className="border border-white/14 px-4 py-3 text-[0.62rem] uppercase tracking-[0.22em] text-[#d3b98d]"
              >
                Aktualisieren
              </button>
            </div>

            {error ? <p className="mb-5 bg-[#f0e7d6] p-4 text-[#16110b]">{error}</p> : null}

            <div className="grid gap-4">
              {inquiries.map((inquiry) => (
                <article key={inquiry.id} className="border border-white/10 bg-[#100d09] p-5 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-[0.58rem] uppercase tracking-[0.28em] text-[#d3b98d]">
                        {statusLabels[inquiry.status]} / {inquiry.type}
                      </p>
                      <h2 className="mt-3 font-serif text-3xl leading-none sm:text-5xl">{inquiry.name}</h2>
                      <p className="mt-3 text-sm leading-7 text-[#d8d0c2]">{formatDate(inquiry.createdAt)}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {view === "active" ? (
                        <>
                          {(["new", "read", "done"] as InquiryStatus[]).map((status) => (
                            <button
                              key={status}
                              type="button"
                              onClick={() => updateStatus(inquiry.id, status)}
                              className={`border px-3 py-2 text-[0.58rem] uppercase tracking-[0.18em] ${
                                inquiry.status === status
                                  ? "border-[#d3b98d] bg-[#d3b98d] text-[#16110b]"
                                  : "border-white/14 text-[#d8d0c2]"
                              }`}
                            >
                              {statusLabels[status]}
                            </button>
                          ))}
                          <button
                            type="button"
                            onClick={() => deleteMessage(inquiry.id, inquiry.name)}
                            className="inline-flex items-center gap-2 border border-[#d3b98d]/45 px-3 py-2 text-[0.58rem] uppercase tracking-[0.18em] text-[#d3b98d] transition hover:bg-[#d3b98d] hover:text-[#16110b]"
                            aria-label={`Anfrage von ${inquiry.name} in den Papierkorb verschieben`}
                          >
                            <TrashIcon />
                            Papierkorb
                          </button>
                        </>
                      ) : (
                        <span className="inline-flex items-center gap-2 border border-white/14 px-3 py-2 text-[0.58rem] uppercase tracking-[0.18em] text-[#d8d0c2]">
                          <TrashIcon />
                          Im Papierkorb
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 text-sm leading-7 text-[#d8d0c2] sm:grid-cols-3">
                    <p>E-Mail: {inquiry.email || "-"}</p>
                    <p>Telefon: {inquiry.phone || "-"}</p>
                    <p>Fahrzeug: {inquiry.vehicle || "-"}</p>
                  </div>
                  {inquiry.attachments?.length ? (
                    <div className="mt-5 flex flex-wrap items-start gap-3">
                      {inquiry.attachments.map((attachment) => (
                        <AttachmentPreview
                          key={attachment.url}
                          attachment={attachment}
                          password={savedPassword}
                          onDownload={downloadAttachment}
                          onError={setError}
                        />
                      ))}
                    </div>
                  ) : null}
                  <p className="mt-5 whitespace-pre-wrap border-l border-[#d3b98d]/45 pl-4 text-base leading-8 text-pearl">
                    {inquiry.message}
                  </p>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
