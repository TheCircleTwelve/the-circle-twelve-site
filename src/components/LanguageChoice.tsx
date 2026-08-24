"use client";

import { useEffect, useState } from "react";
import { languageStorageKey, switchLanguagePath, type Language } from "@/lib/language";

export function LanguageChoice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(window.localStorage.getItem(languageStorageKey) == null);
  }, []);

  function chooseLanguage(language: Language) {
    window.localStorage.setItem(languageStorageKey, language);
    const target = switchLanguagePath(window.location.pathname, language);
    window.location.href = `${target}${window.location.hash}`;
  }

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-[#080705]/92 px-4 text-pearl backdrop-blur-md sm:px-5">
      <div className="w-full max-w-xl border border-[#d3b98d]/24 bg-[#100d09] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.48)] sm:p-9 sm:shadow-[0_35px_120px_rgba(0,0,0,0.55)]">
        <p className="text-[0.62rem] uppercase tracking-[0.42em] text-[#d3b98d]">
          The Circle Twelve
        </p>
        <div className="mt-5 border border-white/10 bg-[#080705] px-4 py-4 shadow-[0_16px_48px_rgba(0,0,0,0.3)] sm:px-5 sm:py-5 sm:shadow-[0_20px_70px_rgba(0,0,0,0.34)]">
          <h2 className="font-serif text-[2.1rem] leading-none sm:text-5xl">
            Ihre Sprache wählen.
          </h2>
        </div>
        <p className="mt-5 text-base leading-7 text-[#d8d0c2]">
          Bitte wählen Sie Ihre bevorzugte Sprache. Sie können diese Auswahl später jederzeit ändern.
        </p>
        <div className="mt-8 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
          <button
            type="button"
            className="bg-[#f0e7d6] px-5 py-4 text-left text-[#16110b] transition hover:bg-[#d3b98d] sm:px-6 sm:py-5"
            onClick={() => chooseLanguage("de")}
          >
            <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-[#5f4728]">
              Deutsch
            </span>
            <span className="mt-2 block font-serif text-3xl leading-none">Deutsch</span>
          </button>
          <button
            type="button"
            className="bg-[#080705] px-5 py-4 text-left transition hover:bg-[#17120c] sm:px-6 sm:py-5"
            onClick={() => chooseLanguage("en")}
          >
            <span className="block text-[0.62rem] uppercase tracking-[0.3em] text-[#d3b98d]">
              English
            </span>
            <span className="mt-2 block font-serif text-3xl leading-none">English</span>
          </button>
        </div>
      </div>
    </div>
  );
}
