"use client";

import { useState } from "react";
import { contactEmail, instagramUrl } from "@/lib/site-structure";

const enquiryTypes = [
  {
    id: "search",
    title: "I'm looking for a car",
    button: "Start a Search",
    subject: "Private Search Enquiry"
  },
  {
    id: "sell",
    title: "I want to sell a car",
    button: "Submit a Vehicle",
    subject: "Vehicle Submission"
  },
  {
    id: "opportunity",
    title: "I have a private opportunity",
    button: "Contact The Circle",
    subject: "Private Opportunity"
  }
];

const enquiryTypesDe = [
  {
    id: "search",
    title: "Ich suche ein Fahrzeug",
    button: "Suche starten",
    subject: "Private Suchanfrage"
  },
  {
    id: "sell",
    title: "Ich möchte ein Fahrzeug anbieten",
    button: "Fahrzeug vorstellen",
    subject: "Fahrzeugangebot"
  },
  {
    id: "opportunity",
    title: "Ich habe eine private Gelegenheit",
    button: "Kontakt aufnehmen",
    subject: "Private Gelegenheit"
  }
];

export function ContactGateway({ language = "en" }: { language?: "en" | "de" }) {
  const items = language === "de" ? enquiryTypesDe : enquiryTypes;
  const [active, setActive] = useState(items[0]);

  return (
    <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item.id} className="bg-[#100d09] p-5 sm:p-8">
          <h3 className="font-serif text-[2.05rem] leading-none sm:text-4xl">{item.title}</h3>
          <button
            type="button"
            className="mt-5 inline-flex items-center gap-4 text-[0.6rem] uppercase tracking-[0.22em] text-[#d3b98d] transition hover:text-pearl sm:mt-7 sm:text-[0.62rem] sm:tracking-[0.28em]"
            onClick={() => setActive(item)}
          >
            {item.button}
            <span className="h-px w-10 bg-current" />
          </button>
        </div>
      ))}

      <div className="border-y border-[#d3b98d]/28 bg-[#f0e7d6] px-5 py-6 text-[#16110b] sm:p-8 lg:col-span-3">
        <p className="text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-[#5f4728] sm:text-[0.62rem] sm:tracking-[0.34em]">
          {active.subject}
        </p>
        <h3 className="mt-3 font-serif text-[2.1rem] leading-none sm:mt-4 sm:text-5xl">
          {language === "de" ? "Schreiben Sie uns direkt." : "Write to The Circle Twelve directly."}
        </h3>
        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#21180f] sm:mt-6 sm:gap-x-7 sm:gap-y-4 sm:text-sm sm:tracking-[0.24em]">
          <a href={`mailto:${contactEmail}?subject=${encodeURIComponent(active.subject)}`} className="transition hover:text-[#5f4728]">
            {contactEmail}
          </a>
          <a href={instagramUrl} className="transition hover:text-[#5f4728]">
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
