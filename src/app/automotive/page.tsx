import type { Metadata } from "next";
import Link from "next/link";
import { ContactGateway } from "@/components/ContactGateway";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WantedCarInquiryButton } from "@/components/WantedCarInquiryButton";
import { availableCars, wantedCars } from "@/lib/site-structure";

export const metadata: Metadata = {
  title: "Automotive | The Circle Twelve",
  description:
    "Private automotive sourcing and brokerage for collector cars, sports cars, hypercars and selected off-market opportunities.",
  alternates: { canonical: "/automotive" }
};

export default function AutomotivePage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#080705] text-pearl">
      <SiteHeader />

      <section className="relative min-h-[82svh] overflow-hidden">
        <img src="/images/auto/blackporsche.jpg.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-58" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,7,5,0.98)_0%,rgba(8,7,5,0.76)_50%,rgba(8,7,5,0.38)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#080705] to-transparent" />
        <div className="relative mx-auto flex min-h-[82svh] max-w-[96rem] flex-col justify-end px-4 pb-11 pt-28 sm:px-8 sm:pb-14 sm:pt-32 lg:px-12 lg:pb-20">
          <p className="mb-5 text-[0.58rem] uppercase tracking-[0.34em] text-[#d3b98d] sm:mb-7 sm:text-[0.62rem] sm:tracking-[0.5em]">Automotive</p>
          <h1 className="max-w-4xl font-serif text-[2.38rem] leading-[0.95] sm:text-[4.9rem] lg:text-[5.9rem]">
            Exceptional cars, handled privately.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-[#d8d0c2] sm:mt-8 sm:text-xl sm:leading-9">
            We source, place and introduce selected automobiles through direct relationships with owners, collectors, dealers and trusted partners.
          </p>
          <div className="mt-6 max-w-3xl border-l border-[#d3b98d]/45 pl-4 text-[0.98rem] leading-7 text-[#d8d0c2] sm:mt-8 sm:pl-5 sm:text-lg sm:leading-8">
            <p className="font-serif text-[1.55rem] leading-tight text-pearl sm:text-3xl">
              Exceptional cars are at the heart of what we do.
            </p>
            <p className="mt-5">
              From privately offered collector cars to specific sourcing requests, we work across an international network to connect the right cars with the right people.
            </p>
            <p className="mt-4">
              Some opportunities come directly through owners and collectors, others through trusted partners and specialists. Many searches begin with a client looking for something very specific: a particular model, specification, history or simply a car that is difficult to find on the open market.
            </p>
            <p className="mt-4">
              Whether we are representing a car for sale or sourcing one on behalf of a client, we keep the process direct, discreet and focused on what matters.
            </p>
          </div>
        </div>
      </section>

      <section id="private-sourcing" className="mx-auto max-w-[96rem] scroll-mt-28 px-4 py-7 sm:px-8 sm:py-10 lg:px-12 lg:py-16">
        <div className="grid gap-5 border-y border-[#d3b98d]/28 bg-[#f0e7d6] px-4 py-6 text-[#16110b] shadow-[0_18px_52px_rgba(0,0,0,0.18)] sm:gap-8 sm:p-9 lg:grid-cols-[1fr_auto] lg:items-end lg:p-12">
          <div>
            <p className="text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-[#5f4728] sm:text-[0.62rem] sm:tracking-[0.4em]">Private Sourcing</p>
            <h2 className="mt-4 font-serif text-[2.1rem] leading-none sm:mt-5 sm:text-6xl">
              Looking for a specific car?
            </h2>
            <p className="mt-4 max-w-3xl text-base font-medium leading-7 text-[#21180f] sm:mt-6 sm:text-lg sm:leading-8">
              Our network extends beyond publicly advertised inventory. Specific searches are handled discreetly and individually.
            </p>
          </div>
          <Link href="/contact" className="inline-flex w-fit items-center gap-4 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#5f4728] transition hover:text-[#16110b] sm:text-[0.7rem] sm:tracking-[0.28em]">
            Start a Private Search
            <span className="h-px w-12 bg-current" />
          </Link>
        </div>
      </section>

      <section id="available" className="mx-auto grid max-w-[96rem] scroll-mt-28 gap-6 px-4 py-10 sm:gap-8 sm:px-8 sm:py-14 lg:grid-cols-[0.55fr_1.45fr] lg:px-12 lg:py-20">
        <div>
          <p className="text-[0.58rem] uppercase tracking-[0.32em] text-[#d3b98d] sm:text-[0.62rem] sm:tracking-[0.48em]">Available</p>
          <h2 className="mt-4 font-serif text-[2.45rem] leading-[0.94] sm:mt-6 sm:text-7xl">Selected opportunities.</h2>
          <p className="mt-5 text-base leading-7 text-[#d8d0c2] sm:mt-7 sm:text-lg sm:leading-8">
            A discreet overview of cars that may be available through our private network.
          </p>
        </div>
        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10">
          {availableCars.map((car, index) => (
            <article key={`${car.maker}-${car.model}`} className="grid gap-4 bg-[#100d09] p-5 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-8">
              <p className="font-serif text-3xl leading-none text-[#d3b98d]/72 sm:text-4xl">{String(index + 1).padStart(2, "0")}</p>
              <div>
                <p className="text-[0.55rem] uppercase tracking-[0.22em] text-[#d3b98d]/82 sm:text-[0.58rem] sm:tracking-[0.28em]">{car.maker}</p>
                <h3 className="mt-2 font-serif text-[2.25rem] leading-none sm:text-6xl">{car.model}</h3>
              </div>
              <div className="text-xs uppercase tracking-[0.16em] text-[#d8d0c2] sm:text-right sm:text-sm sm:tracking-[0.2em]">
                <p>{car.label}</p>
                <p className="mt-2 text-[#d3b98d]/78">Contact for more information</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="wanted" className="mx-auto grid max-w-[96rem] scroll-mt-28 gap-6 px-4 py-10 sm:gap-8 sm:px-8 sm:py-14 lg:grid-cols-[0.55fr_1.45fr] lg:px-12 lg:py-20">
        <div>
          <p className="text-[0.58rem] uppercase tracking-[0.32em] text-[#d3b98d] sm:text-[0.62rem] sm:tracking-[0.48em]">Wanted</p>
          <h2 className="mt-4 font-serif text-[2.45rem] leading-[0.94] sm:mt-6 sm:text-7xl">Currently sourcing.</h2>
        </div>
        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10">
          {wantedCars.map(([model, spec, note]) => (
            <div key={model} className="grid gap-4 border-y border-[#d3b98d]/24 bg-[#f0e7d6] px-5 py-5 text-[#16110b] sm:grid-cols-[1fr_auto] sm:items-center sm:p-8">
              <div>
                <h3 className="font-serif text-[2.15rem] leading-none sm:text-4xl">{model}</h3>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#5f4728] sm:text-sm sm:tracking-[0.22em]">
                  {spec} / {note}
                </p>
              </div>
              <WantedCarInquiryButton model={model} />
            </div>
          ))}
        </div>
      </section>

      <section id="sold-sourced" className="mx-auto max-w-[96rem] scroll-mt-28 px-4 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-20">
        <div className="border border-white/10 bg-[#100d09] p-5 sm:p-9 lg:p-12">
          <p className="text-[0.58rem] uppercase tracking-[0.32em] text-[#d3b98d] sm:text-[0.62rem] sm:tracking-[0.48em]">Sold & Sourced</p>
          <h2 className="mt-4 font-serif text-[2.45rem] leading-[0.94] sm:mt-6 sm:text-7xl">Completed opportunities.</h2>
          <p className="mt-5 max-w-4xl text-base leading-7 text-[#d8d0c2] sm:mt-7 sm:text-lg sm:leading-8">
            This area is reserved for genuine completed mandates. It is intentionally selective and will grow only with real, relevant transactions.
          </p>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-[96rem] px-4 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-20">
        <ContactGateway />
      </section>

      <SiteFooter />
    </main>
  );
}
