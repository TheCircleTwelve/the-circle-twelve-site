"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { getLanguageFromPath, languageStorageKey, navigationByLanguage, switchLanguagePath } from "@/lib/language";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const language = getLanguageFromPath(pathname);
  const navigation = navigationByLanguage[language];
  const switchLabel = language === "de" ? "EN" : "DE";
  const switchHref = switchLanguagePath(pathname, language === "de" ? "en" : "de");

  function rememberSwitch() {
    window.localStorage.setItem(languageStorageKey, language === "de" ? "en" : "de");
    setOpen(false);
  }

  return (
    <header className={`fixed inset-x-0 top-0 z-50 ${open ? "bg-[#080705]" : "bg-gradient-to-b from-black/84 to-transparent"}`}>
      <nav className="mx-auto flex h-20 max-w-[96rem] items-center justify-between px-4 sm:h-24 sm:px-8 lg:px-12">
        <Link href="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-full border border-[#d3b98d]/45 bg-black shadow-[0_0_42px_rgba(211,185,141,0.18)] sm:h-14 sm:w-14">
            <img
              src="/images/logo/logo.jpg.jpg"
              alt="The Circle Twelve logo"
              className="h-[138%] w-[138%] max-w-none object-cover"
            />
          </span>
          <span className="min-w-0 font-serif text-xl leading-none tracking-wide sm:text-[2rem]">
            The Circle Twelve
          </span>
        </Link>

        <div className="hidden items-center gap-7 text-[0.58rem] uppercase tracking-[0.28em] text-pearl/72 lg:flex">
          {navigation.map((item) => (
            <div key={item.label} className="group relative py-8">
              <Link className="transition hover:text-pearl" href={item.href}>
                {item.label}
              </Link>
              {item.items ? (
                <div className="pointer-events-none absolute right-0 top-20 w-[24rem] border border-white/10 bg-[#080705]/96 p-5 opacity-0 shadow-[0_28px_90px_rgba(0,0,0,0.42)] backdrop-blur-md transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                  <div className="grid gap-1">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="flex items-center justify-between border-b border-white/10 py-3 text-[0.62rem] tracking-[0.22em] text-[#d8d0c2] transition hover:text-[#d3b98d]"
                      >
                        {subItem.label}
                        <span className="h-px w-8 bg-current" />
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={switchHref}
            className="border border-white/14 px-3 py-2.5 text-[0.58rem] uppercase tracking-[0.22em] text-pearl/78 transition hover:text-[#d3b98d] sm:py-3"
            onClick={rememberSwitch}
          >
            {switchLabel}
          </Link>
          <button
            type="button"
            className="border border-white/14 px-3.5 py-2.5 text-[0.58rem] uppercase tracking-[0.24em] text-pearl/78 sm:px-4 sm:py-3 lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {language === "de" ? "Menü" : "Menu"}
          </button>
        </div>
      </nav>

      {open ? (
        <div id="mobile-menu" className="fixed inset-0 z-40 overflow-y-auto bg-[#080705] px-4 pb-10 pt-24 text-pearl shadow-[0_30px_90px_rgba(0,0,0,0.55)] sm:px-5 sm:pt-28 lg:hidden">
          <div className="mx-auto grid max-w-2xl gap-4">
            {navigation.map((item) => (
              <div key={item.label} className="border-b border-white/10 pb-5">
                <Link
                  href={item.href}
                className="font-serif text-[2rem] leading-none sm:text-4xl"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
                  {item.items ? (
                  <div className="mt-3 grid gap-2.5 text-[0.6rem] uppercase tracking-[0.24em] text-[#d3b98d]/80 sm:mt-4 sm:gap-3 sm:tracking-[0.28em]">
                    {item.items.map((subItem) => (
                      <Link key={subItem.href} href={subItem.href} onClick={() => setOpen(false)}>
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
