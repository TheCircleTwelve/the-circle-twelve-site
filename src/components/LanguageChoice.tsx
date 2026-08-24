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
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-[#080705]/92 px-5 text-pearl backdrop-blur-md">
      <div className="w-full max-w-xl border border-[#d3b98d]/24 bg-[#100d09] p-6 shadow-[0_35px_120px_rgba(0,0,0,0.55)] sm:p-9">
        <p className="text-[0.62rem] uppercase tracking-[0.42em] text-[#d3b98d]">
          The Circle Twelve
        </p>
        <div className="mt-5 border border-white/10 bg-[#080705] px-5 py-5 shadow-[0_20px_70px_rgba(0,0,0,0.34)]">
          <h2 className="font-serif text-4xl leading-none sm:text-5xl">
            Ihre Sprache wählen.
          </h2>
        </div>
        <p className="mt-5 text-base leading-7 text-[#d8d0c2]">
          Bitte wählen Sie Ihre bevorzugte Sprache. Sie können diese Auswahl später jederzeit ändern.
        </p>
        <div className="mt-8 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
          <button
            type="button"
            className="bg-[#f0e7d6] px-6 py-5 text-left text-[#16110b] transition hover:bg-[#d3b98d]"
            onClick={() => chooseLanguage("de")}
          >
            <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-[#5f4728]">
              Deutsch
            </span>
            <span className="mt-2 block font-serif text-3xl leading-none">Deutsch</span>
          </button>
          <button
            type="button"
            className="bg-[#080705] px-6 py-5 text-left transition hover:bg-[#17120c]"
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
