import type { Metadata } from "next";
import { ContactGateway } from "@/components/ContactGateway";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Kontakt | The Circle Twelve",
  description: "Kontaktieren Sie The Circle Twelve für private Fahrzeugsuchen, Fahrzeugangebote und ausgewählte Gelegenheiten.",
  alternates: { canonical: "/de/contact" }
};

export default function GermanContactPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#080705] text-pearl">
      <SiteHeader />
      <section className="relative min-h-[76svh] overflow-hidden">
        <img src="/images/logo/logosand.jpg" alt="" className="absolute inset-0 h-full w-full object-cover object-center opacity-70" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,7,5,0.98)_0%,rgba(8,7,5,0.74)_50%,rgba(8,7,5,0.28)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080705] to-transparent" />
        <div className="relative mx-auto flex min-h-[76svh] max-w-[96rem] flex-col justify-end px-4 pb-11 pt-28 sm:px-8 sm:pb-14 sm:pt-32 lg:px-12 lg:pb-20">
          <p className="text-[0.62rem] uppercase tracking-[0.5em] text-[#d3b98d]">Kontakt</p>
          <h1 className="mt-5 max-w-4xl font-serif text-[2.42rem] leading-[0.96] sm:mt-7 sm:text-[4.8rem] lg:text-[5.7rem]">
            Was führt Sie zu uns?
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-[#d8d0c2] sm:mt-8 sm:text-lg sm:leading-8">
            Für private Suchaufträge, ausgewählte Fahrzeugangebote oder diskrete Gelegenheiten wählen Sie bitte die passende Anfrage.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-[96rem] px-4 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-20">
        <ContactGateway language="de" />
      </section>
      <SiteFooter />
    </main>
  );
}
