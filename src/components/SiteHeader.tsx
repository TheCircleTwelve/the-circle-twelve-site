"use client";

import Link from "next/link";
import { useState } from "react";
import { navigation } from "@/lib/site-structure";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-black/84 to-transparent">
      <nav className="mx-auto flex h-24 max-w-[96rem] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-full border border-[#d3b98d]/45 bg-black shadow-[0_0_42px_rgba(211,185,141,0.18)]">
            <img
              src="/images/logo/logo.jpg.jpg"
              alt="The Circle Twelve logo"
              className="h-[138%] w-[138%] max-w-none object-cover"
            />
          </span>
          <span className="min-w-0 font-serif text-2xl leading-none tracking-wide sm:text-[2rem]">
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

        <button
          type="button"
          className="border border-white/14 px-4 py-3 text-[0.58rem] uppercase tracking-[0.28em] text-pearl/78 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          Menu
        </button>
      </nav>

      {open ? (
        <div id="mobile-menu" className="fixed inset-0 z-40 bg-[#080705]/98 px-5 pb-10 pt-28 text-pearl lg:hidden">
          <div className="mx-auto grid max-w-2xl gap-5">
            {navigation.map((item) => (
              <div key={item.label} className="border-b border-white/10 pb-5">
                <Link
                  href={item.href}
                  className="font-serif text-4xl leading-none"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
                {item.items ? (
                  <div className="mt-4 grid gap-3 text-[0.62rem] uppercase tracking-[0.28em] text-[#d3b98d]/80">
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
