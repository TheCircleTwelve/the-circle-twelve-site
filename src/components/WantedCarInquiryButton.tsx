"use client";

import { useState } from "react";
import { InquiryModal } from "@/components/InquiryModal";

export function WantedCarInquiryButton({
  model,
  language = "en"
}: {
  model: string;
  language?: "en" | "de";
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex w-full items-center justify-center border border-[#5f4728] px-4 py-3.5 text-center text-xs font-semibold uppercase tracking-[0.18em] text-[#21180f] transition hover:bg-[#21180f] hover:text-[#f0e7d6] sm:w-fit sm:justify-self-end sm:px-5 sm:py-3 sm:text-sm sm:tracking-[0.22em]"
      >
        {language === "de" ? "Ich habe dieses Fahrzeug" : "I have this car"}
      </button>
      <InquiryModal
        open={open}
        onClose={() => setOpen(false)}
        language={language}
        type="vehicle"
        subject={language === "de" ? "Fahrzeugangebot" : "Vehicle Submission"}
        vehicle={model}
      />
    </>
  );
}
