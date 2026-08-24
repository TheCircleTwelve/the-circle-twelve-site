import type { Metadata } from "next";
import Link from "next/link";
import { ContactGateway } from "@/components/ContactGateway";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { availableCars, wantedCars } from "@/lib/site-structure";

export const metadata: Metadata = {
  title: "Fahrzeuge | The Circle Twelve",
  description:
    "Private Fahrzeugbeschaffung und diskrete Vermittlung für Sammlerfahrzeuge, Sportwagen, Hypercars und ausgewählte nicht öffentlich angebotene Gelegenheiten.",
  alternates: { canonical: "/de/automotive" }
};

export default function GermanAutomotivePage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#080705] text-pearl">
      <SiteHeader />

      <section className="relative min-h-[82svh] overflow-hidden">
        <img src="/images/auto/blackporsche.jpg.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-58" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,7,5,0.98)_0%,rgba(8,7,5,0.76)_50%,rgba(8,7,5,0.38)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#080705] to-transparent" />
        <div className="relative mx-auto flex min-h-[82svh] max-w-[96rem] flex-col justify-end px-5 pb-14 pt-32 sm:px-8 lg:px-12 lg:pb-20">
          <p className="mb-7 text-[0.62rem] uppercase tracking-[0.5em] text-[#d3b98d]">Fahrzeuge</p>
          <h1 className="max-w-4xl font-serif text-[2.85rem] leading-[0.92] sm:text-[4.9rem] lg:text-[5.9rem]">
            Außergewöhnliche Fahrzeuge, diskret begleitet.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#d8d0c2] sm:text-xl sm:leading-9">
            Wir beschaffen, platzieren und vermitteln ausgewählte Automobile über direkte Beziehungen zu Eigentümerinnen und Eigentümern, Sammlern, Händlern und vertrauten Partnern.
          </p>
          <div className="mt-8 max-w-3xl border-l border-[#d3b98d]/45 pl-5 text-base leading-8 text-[#d8d0c2] sm:text-lg">
            <p className="font-serif text-2xl leading-tight text-pearl sm:text-3xl">
              Außergewöhnliche Fahrzeuge stehen im Mittelpunkt unserer Arbeit.
            </p>
            <p className="mt-5">
              Von privat angebotenen Sammlerfahrzeugen bis zu konkreten Suchaufträgen arbeiten wir über ein internationales Netzwerk daran, die richtigen Fahrzeuge mit den richtigen Menschen zu verbinden.
            </p>
            <p className="mt-4">
              Einige Gelegenheiten entstehen direkt über Eigentümer und Sammler, andere über vertraute Partner und Spezialisten. Viele Mandate beginnen mit einem sehr bestimmten Wunsch: ein Modell, eine Spezifikation, eine Historie oder schlicht ein Fahrzeug, das öffentlich kaum zu finden ist.
            </p>
            <p className="mt-4">
              Ob wir ein Fahrzeug platzieren oder im Auftrag eines Kunden suchen, der Prozess bleibt direkt, diskret und auf das Wesentliche konzentriert.
            </p>
          </div>
        </div>
      </section>

      <section id="private-sourcing" className="mx-auto max-w-[96rem] scroll-mt-28 px-5 py-10 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid gap-8 bg-[#f0e7d6] p-6 text-[#16110b] shadow-[0_28px_90px_rgba(0,0,0,0.26)] sm:p-9 lg:grid-cols-[1fr_auto] lg:items-end lg:p-12">
          <div>
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.4em] text-[#5f4728]">Private Suche</p>
            <h2 className="mt-5 font-serif text-4xl leading-none sm:text-6xl">
              Suchen Sie ein bestimmtes Fahrzeug?
            </h2>
            <p className="mt-6 max-w-3xl text-lg font-medium leading-8 text-[#21180f]">
              Unser Netzwerk reicht über öffentlich angebotene Fahrzeuge hinaus. Konkrete Suchaufträge behandeln wir individuell, diskret und mit klarem Blick auf Timing und Kontext.
            </p>
          </div>
          <Link href="/de/contact" className="inline-flex w-fit items-center gap-4 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#5f4728] transition hover:text-[#16110b]">
            Private Suche starten
            <span className="h-px w-12 bg-current" />
          </Link>
        </div>
      </section>

      <section id="available" className="mx-auto grid max-w-[96rem] scroll-mt-28 gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[0.55fr_1.45fr] lg:px-12 lg:py-20">
        <div>
          <p className="text-[0.62rem] uppercase tracking-[0.48em] text-[#d3b98d]">Verfügbar</p>
          <h2 className="mt-6 font-serif text-5xl leading-[0.9] sm:text-7xl">Ausgewählte Gelegenheiten.</h2>
          <p className="mt-7 text-lg leading-8 text-[#d8d0c2]">
            Ein diskreter Überblick über Fahrzeuge, die über unser privates Netzwerk verfügbar sein können.
          </p>
        </div>
        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10">
          {availableCars.map((car, index) => (
            <article key={`${car.maker}-${car.model}`} className="grid gap-5 bg-[#100d09] p-6 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-8">
              <p className="font-serif text-4xl leading-none text-[#d3b98d]/72">{String(index + 1).padStart(2, "0")}</p>
              <div>
                <p className="text-[0.58rem] uppercase tracking-[0.28em] text-[#d3b98d]/82">{car.maker}</p>
                <h3 className="mt-2 font-serif text-4xl leading-none sm:text-6xl">{car.model}</h3>
              </div>
              <div className="text-sm uppercase tracking-[0.2em] text-[#d8d0c2] sm:text-right">
                <p>{car.label === "Selected access" ? "Ausgewählter Zugang" : "Private Vorstellung"}</p>
                <p className="mt-2 text-[#d3b98d]/78">Kontakt für weitere Informationen</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="wanted" className="mx-auto grid max-w-[96rem] scroll-mt-28 gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[0.55fr_1.45fr] lg:px-12 lg:py-20">
        <div>
          <p className="text-[0.62rem] uppercase tracking-[0.48em] text-[#d3b98d]">Gesucht</p>
          <h2 className="mt-6 font-serif text-5xl leading-[0.9] sm:text-7xl">Aktuelle Suchmandate.</h2>
        </div>
        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10">
          {wantedCars.map(([model]) => (
            <div key={model} className="grid gap-4 bg-[#f0e7d6] p-6 text-[#16110b] sm:grid-cols-[1fr_auto] sm:items-center sm:p-8">
              <div>
                <h3 className="font-serif text-4xl leading-none">{model}</h3>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#5f4728]">
                  Qualifiziertes Suchmandat / Diskrete Kontaktaufnahme
                </p>
              </div>
              <Link href="/de/contact" className="inline-flex w-fit items-center justify-center border border-[#5f4728] px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#21180f] transition hover:bg-[#21180f] hover:text-[#f0e7d6] sm:justify-self-end sm:text-sm">
                Ich habe dieses Fahrzeug
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section id="sold-sourced" className="mx-auto max-w-[96rem] scroll-mt-28 px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="border border-white/10 bg-[#100d09] p-6 sm:p-9 lg:p-12">
          <p className="text-[0.62rem] uppercase tracking-[0.48em] text-[#d3b98d]">Vermittelt & Beschafft</p>
          <h2 className="mt-6 font-serif text-5xl leading-[0.9] sm:text-7xl">Abgeschlossene Mandate.</h2>
          <p className="mt-7 max-w-4xl text-lg leading-8 text-[#d8d0c2]">
            Dieser Bereich ist echten abgeschlossenen Mandaten vorbehalten. Er bleibt bewusst selektiv und wächst nur mit relevanten Transaktionen.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[96rem] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <ContactGateway language="de" />
      </section>

      <SiteFooter />
    </main>
  );
}
