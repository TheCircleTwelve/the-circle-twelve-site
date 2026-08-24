import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const network = ["Private Sammler", "Händler & Spezialisten", "Private Kunden", "Family Offices & Branchenpartner"];

export const metadata: Metadata = {
  title: "Netzwerk | The Circle Twelve",
  description: "Das Netzwerk von The Circle Twelve verbindet Eigentümer, qualifizierte Käufer und vertraute internationale Partner.",
  alternates: { canonical: "/de/network" }
};

export default function GermanNetworkPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#080705] text-pearl">
      <SiteHeader />
      <section className="relative min-h-[72svh] overflow-hidden">
        <img src="/images/logo/logobeton,jpg.jpeg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,7,5,0.98)_0%,rgba(8,7,5,0.82)_48%,rgba(8,7,5,0.46)_100%)]" />
        <div className="relative mx-auto flex min-h-[72svh] max-w-[96rem] flex-col justify-end px-5 pb-14 pt-32 sm:px-8 lg:px-12 lg:pb-20">
          <p className="mb-7 text-[0.62rem] uppercase tracking-[0.5em] text-[#d3b98d]">Netzwerk</p>
          <h1 className="max-w-4xl font-serif text-[2.85rem] leading-[0.94] sm:text-[4.8rem] lg:text-[5.7rem]">
            Entstanden durch Menschen.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#d8d0c2] sm:text-xl sm:leading-9">
            The Circle Twelve arbeitet über direkte Beziehungen, vertraute Einführungen und sorgfältig qualifizierte Gelegenheiten.
          </p>
        </div>
      </section>

      <section className="bg-[#f0e7d6] px-5 py-10 text-[#16110b] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[96rem]">
          <p className="max-w-4xl text-xl font-medium leading-9 text-[#21180f]">
            Wir beschaffen außergewöhnliche Werte für private Kunden und verbinden Eigentümer mit qualifizierten Käufern über ein internationales Netzwerk, das mit der Zeit gewachsen ist.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[96rem] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {network.map((item) => (
            <div key={item} className="bg-[#100d09] p-6 sm:p-8">
              <p className="text-[0.62rem] uppercase tracking-[0.34em] text-[#d3b98d]">Netzwerk</p>
              <h2 className="mt-5 font-serif text-4xl leading-none">{item}</h2>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
