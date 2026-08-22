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

export function ContactGateway() {
  const [active, setActive] = useState(enquiryTypes[0]);

  return (
    <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-3">
      {enquiryTypes.map((item) => (
        <div key={item.id} className="bg-[#100d09] p-6 sm:p-8">
          <h3 className="font-serif text-4xl leading-none">{item.title}</h3>
          <button
            type="button"
            className="mt-7 inline-flex items-center gap-4 text-[0.62rem] uppercase tracking-[0.28em] text-[#d3b98d] transition hover:text-pearl"
            onClick={() => setActive(item)}
          >
            {item.button}
            <span className="h-px w-10 bg-current" />
          </button>
        </div>
      ))}

      <div className="bg-[#f0e7d6] p-6 text-[#16110b] sm:p-8 lg:col-span-3">
        <p className="text-[0.62rem] uppercase tracking-[0.34em] text-[#806742]">
          {active.subject}
        </p>
        <h3 className="mt-4 font-serif text-4xl leading-none sm:text-5xl">
          Write to The Circle Twelve directly.
        </h3>
        <div className="mt-6 flex flex-wrap gap-x-7 gap-y-4 text-sm uppercase tracking-[0.24em] text-[#3c3122]">
          <a href={`mailto:${contactEmail}?subject=${encodeURIComponent(active.subject)}`} className="transition hover:text-[#806742]">
            {contactEmail}
          </a>
          <a href={instagramUrl} className="transition hover:text-[#806742]">
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
