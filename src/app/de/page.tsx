import Link from "next/link";
import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "The Circle Twelve | Privater Zugang zu besonderen Fahrzeugen",
  description:
    "Diskrete Beschaffung und Vermittlung außergewöhnlicher Automobile, aufgebaut auf Zugang, Beziehungen und Vertrauen.",
  alternates: { canonical: "/de" }
};

const coverLinks = [
  { title: "Fahrzeuge", href: "/de/automotive", kicker: "Hauptbereich" },
  { title: "Über uns", href: "/de/about-us", kicker: "Die Menschen" },
  { title: "Weitere Bereiche", href: "/de/beyond-automotive", kicker: "Erweitertes Netzwerk" },
  { title: "Netzwerk", href: "/de/network", kicker: "Beziehungen" },
  { title: "Kontakt", href: "/de/contact", kicker: "Private Anfragen" }
];

export default function GermanHome() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#080705] text-pearl">
      <section id="home" className="relative min-h-[100svh] overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/logo/logoweinflasche.jpg" alt="" className="h-full w-full object-cover opacity-72" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,7,5,0.96)_0%,rgba(8,7,5,0.74)_45%,rgba(8,7,5,0.34)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_42%,rgba(211,185,141,0.13),transparent_28rem),linear-gradient(180deg,transparent_0%,rgba(8,7,5,0.16)_62%,#080705_100%)]" />
        </div>

        <div className="relative mx-auto grid min-h-[100svh] max-w-[96rem] gap-8 px-5 pb-10 pt-10 sm:px-8 lg:grid-cols-[0.92fr_0.68fr] lg:items-end lg:px-12 lg:pb-14">
          <div className="flex min-h-[54svh] flex-col justify-between lg:min-h-[74svh]">
            <Link href="/de" className="flex w-fit min-w-0 items-center gap-3">
              <span className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-full border border-[#d3b98d]/45 bg-black shadow-[0_0_42px_rgba(211,185,141,0.18)]">
                <img src="/images/logo/logo.jpg.jpg" alt="The Circle Twelve logo" className="h-[138%] w-[138%] max-w-none object-cover" />
              </span>
              <span className="min-w-0 font-serif text-2xl leading-none tracking-wide sm:text-[2rem]">
                The Circle Twelve
              </span>
            </Link>

            <div className="max-w-4xl">
              <p className="mb-6 text-[0.62rem] uppercase tracking-[0.5em] text-[#d3b98d]">
                Privater Zugang
              </p>
              <h1 className="font-serif text-[2.85rem] leading-[0.92] text-pearl sm:text-[4.9rem] lg:text-[5.9rem]">
                Zugang zu besonderen Fahrzeugen.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#d8d0c2] sm:text-xl sm:leading-9">
                Außergewöhnliche Fahrzeuge, diskrete Gelegenheiten und die richtigen Verbindungen.
              </p>
            </div>
          </div>

          <div className="lg:pb-4">
            <aside className="border border-[#d3b98d]/18 bg-black/34 p-3 shadow-[0_28px_90px_rgba(0,0,0,0.38)] backdrop-blur-md">
              <div className="bg-[#f0e7d6] px-5 py-4 text-[#16110b]">
                <p className="text-[0.58rem] font-semibold uppercase tracking-[0.34em] text-[#5f4728]">Menü</p>
              </div>
              <div className="grid gap-px bg-white/10">
                {coverLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="group bg-[#100d09]/94 p-4 transition hover:bg-[#17120c] sm:p-5">
                    <div className="flex items-center justify-between gap-5">
                      <div>
                        <p className="text-[0.55rem] uppercase tracking-[0.28em] text-[#d3b98d]/82">{item.kicker}</p>
                        <h2 className="mt-2 font-serif text-2xl leading-none sm:text-3xl">{item.title}</h2>
                      </div>
                      <span className="h-px w-10 bg-[#d3b98d]/70 transition group-hover:w-14" />
                    </div>
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d3b98d]/22 bg-[#f0e7d6] px-5 py-8 text-[#16110b] sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[96rem] flex-wrap gap-x-10 gap-y-3 text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-[#5f4728]">
          <span>Diskrete Mandate</span>
          <span>Fahrzeugnetzwerk</span>
          <span>Diskrete Vermittlung</span>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
