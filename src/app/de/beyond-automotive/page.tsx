import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { beyondAreas } from "@/lib/site-structure";

export const metadata: Metadata = {
  title: "Beyond Automotive | The Circle Twelve",
  description: "Ausgewaehlte private Gelegenheiten jenseits des Automotive-Bereichs ueber vertraute internationale Partner.",
  alternates: { canonical: "/de/beyond-automotive" }
};

const areaText: Record<string, { title: string; text: string }> = {
  aviation: {
    title: "Aviation",
    text: "Ausgewaehlte Anfragen rund um private Luftfahrt, koordiniert ueber vertraute Kontakte und Partner."
  },
  yachts: {
    title: "Yachten",
    text: "Private maritime Gelegenheiten und diskrete Einfuehrungen ueber ein internationales Partnernetzwerk."
  },
  "collectibles-art": {
    title: "Collectibles & Art",
    text: "Aussergewoehnliche Sammlerstuecke, Kunst und private Transaktionskontexte mit selektivem Zugang."
  }
};

export default function GermanBeyondAutomotivePage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#080705] text-pearl">
      <SiteHeader />
      <section className="relative min-h-[92svh] overflow-hidden">
        <img src="/images/aviaton/turbine.png" alt="" className="absolute inset-0 h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,7,5,0.97)_0%,rgba(8,7,5,0.76)_52%,rgba(8,7,5,0.28)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#080705] to-transparent" />
        <div className="relative mx-auto flex min-h-[92svh] max-w-[96rem] flex-col justify-end px-5 pb-14 pt-32 sm:px-8 lg:px-12 lg:pb-20">
          <p className="text-[0.62rem] uppercase tracking-[0.5em] text-[#d3b98d]">Beyond Automotive</p>
          <h1 className="mt-7 max-w-4xl font-serif text-[2.65rem] leading-[1] sm:text-[4rem] lg:text-[4.9rem]">
            Zugang ueber den Kern hinaus.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#d8d0c2]">
            Automotive bleibt das Herz von The Circle Twelve. Ausgewaehlte Gelegenheiten ausserhalb dieses Bereichs begleiten wir nur ueber unser erweitertes privates Netzwerk und vertraute Partner.
          </p>
          <div className="mt-8 max-w-3xl border-l border-[#d3b98d]/45 pl-5 text-base leading-8 text-[#d8d0c2] sm:text-lg">
            <p className="font-serif text-2xl leading-tight text-pearl sm:text-3xl">
              Manche Gelegenheiten reichen ueber die Automotive-Welt hinaus.
            </p>
            <p className="mt-5">
              Waehrend aussergewoehnliche Fahrzeuge im Mittelpunkt von The Circle Twelve stehen, fuehren die Beziehungen, die wir aufgebaut haben, natuerlich auch in andere Bereiche.
            </p>
            <p className="mt-4">
              Ueber unser Netzwerk privater Kunden, Eigentuemer, Spezialisten und vertrauter Partner erhalten wir gelegentlich Zugang zu ausgewaehlten Gelegenheiten in Aviation, Yachten, Kunst, Collectibles und weiteren aussergewoehnlichen Assets.
            </p>
            <p className="mt-4">
              Wir versuchen nicht, in jedem Feld Experten zu sein. Wenn eine Gelegenheit ausserhalb unseres Kernbereichs liegt, arbeiten wir mit Menschen zusammen, die ihren Markt kennen und die passende Erfahrung mitbringen.
            </p>
            <p className="mt-4">
              So bleiben wir unserem Ansatz treu und oeffnen The Circle dort, wo ein Zugang sinnvoll ist.
            </p>
            <p className="mt-5 font-serif text-2xl leading-tight text-[#d3b98d]">
              Andere Assets. Derselbe Ansatz.
            </p>
            <p className="mt-2 font-serif text-2xl leading-tight text-pearl">
              Denn manchmal ist das richtige Fahrzeug nicht inseriert. Es muss gefunden werden.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f0e7d6] px-5 py-10 text-[#16110b] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[96rem]">
          <p className="max-w-4xl text-xl font-medium leading-9 text-[#21180f]">
            Wir praesentieren diese Bereiche nicht als dauerhaftes oeffentliches Portfolio. Sie werden relevant, wenn eine konkrete Anfrage, eine Partnergelegenheit oder eine vertraute Einfuehrung Sinn ergibt.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[96rem] gap-4 px-5 py-14 sm:px-8 md:grid-cols-3 lg:px-12 lg:py-20">
        {beyondAreas.map((area) => {
          const translated = areaText[area.id];
          return (
            <article key={area.id} id={area.id} className="scroll-mt-28 border border-white/10 bg-[#100d09]">
              <div className="relative min-h-[18rem] overflow-hidden">
                <img src={area.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-68" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/74 via-black/10 to-transparent" />
              </div>
              <div className="p-6 sm:p-8">
                <h2 className="font-serif text-4xl leading-none">{translated.title}</h2>
                <p className="mt-5 text-base leading-7 text-[#d8d0c2]">{translated.text}</p>
                <p className="mt-6 text-[0.58rem] uppercase tracking-[0.24em] text-[#d3b98d]">
                  Erweitertes privates Netzwerk
                </p>
              </div>
            </article>
          );
        })}
      </section>
      <SiteFooter />
    </main>
  );
}
