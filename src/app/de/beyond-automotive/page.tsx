import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { beyondAreas } from "@/lib/site-structure";

export const metadata: Metadata = {
  title: "Weitere Bereiche | The Circle Twelve",
  description: "Ausgewählte private Gelegenheiten jenseits des Fahrzeugbereichs über vertraute internationale Partner.",
  alternates: { canonical: "/de/beyond-automotive" }
};

const areaText: Record<string, { title: string; text: string }> = {
  aviation: {
    title: "Luftfahrt",
    text: "Ausgewählte Anfragen rund um private Luftfahrt, koordiniert über vertraute Kontakte und Partner."
  },
  yachts: {
    title: "Yachten",
    text: "Private maritime Gelegenheiten und diskrete Einführungen über ein internationales Partnernetzwerk."
  },
  "collectibles-art": {
    title: "Sammlerstücke & Kunst",
    text: "Außergewöhnliche Sammlerstücke, Kunst und private Transaktionskontexte mit selektivem Zugang."
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
        <div className="relative mx-auto flex min-h-[92svh] max-w-[96rem] flex-col justify-end px-4 pb-11 pt-28 sm:px-8 sm:pb-14 sm:pt-32 lg:px-12 lg:pb-20">
          <p className="text-[0.62rem] uppercase tracking-[0.5em] text-[#d3b98d]">Weitere Bereiche</p>
          <h1 className="mt-5 max-w-4xl font-serif text-[2.32rem] leading-[1] sm:mt-7 sm:text-[4rem] lg:text-[4.9rem]">
            Zugang über den Kern hinaus.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-[#d8d0c2] sm:mt-8 sm:text-lg sm:leading-8">
            Besondere Fahrzeuge bleiben das Herz von The Circle Twelve. Ausgewählte Gelegenheiten außerhalb dieses Bereichs begleiten wir nur über unser erweitertes privates Netzwerk und vertraute Partner.
          </p>
          <div className="mt-6 max-w-3xl border-l border-[#d3b98d]/45 pl-4 text-[0.98rem] leading-7 text-[#d8d0c2] sm:mt-8 sm:pl-5 sm:text-lg sm:leading-8">
            <p className="font-serif text-[1.55rem] leading-tight text-pearl sm:text-3xl">
              Manche Gelegenheiten reichen über die Fahrzeugwelt hinaus.
            </p>
            <p className="mt-5">
              Während außergewöhnliche Fahrzeuge im Mittelpunkt von The Circle Twelve stehen, führen die Beziehungen, die wir aufgebaut haben, natürlich auch in andere Bereiche.
            </p>
            <p className="mt-4">
              Über unser Netzwerk privater Kunden, Eigentümer, Spezialisten und vertrauter Partner erhalten wir gelegentlich Zugang zu ausgewählten Gelegenheiten in Luftfahrt, Yachten, Kunst, Sammlerstücken und weiteren außergewöhnlichen Werten.
            </p>
            <p className="mt-4">
              Wir versuchen nicht, in jedem Feld Experten zu sein. Wenn eine Gelegenheit außerhalb unseres Kernbereichs liegt, arbeiten wir mit Menschen zusammen, die ihren Markt kennen und die passende Erfahrung mitbringen.
            </p>
            <p className="mt-4">
              So bleiben wir unserem Ansatz treu und öffnen den Kreis dort, wo ein Zugang sinnvoll ist.
            </p>
            <p className="mt-5 font-serif text-2xl leading-tight text-[#d3b98d]">
              Andere Werte. Derselbe Ansatz.
            </p>
            <p className="mt-2 font-serif text-2xl leading-tight text-pearl">
              Denn manchmal ist das richtige Fahrzeug nicht inseriert. Es muss gefunden werden.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d3b98d]/28 bg-[#f0e7d6] px-4 py-6 text-[#16110b] sm:px-8 sm:py-10 lg:px-12">
        <div className="mx-auto max-w-[96rem]">
          <p className="max-w-4xl text-base font-medium leading-7 text-[#21180f] sm:text-xl sm:leading-9">
            Wir präsentieren diese Bereiche nicht als dauerhaftes öffentliches Portfolio. Sie werden relevant, wenn eine konkrete Anfrage, eine Partnergelegenheit oder eine vertraute Einführung Sinn ergibt.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[96rem] gap-4 px-4 py-10 sm:px-8 sm:py-14 md:grid-cols-3 lg:px-12 lg:py-20">
        {beyondAreas.map((area) => {
          const translated = areaText[area.id];
          return (
            <article key={area.id} id={area.id} className="scroll-mt-28 border border-white/10 bg-[#100d09]">
              <div className="relative min-h-[15rem] overflow-hidden sm:min-h-[18rem]">
                <img src={area.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-68" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/74 via-black/10 to-transparent" />
              </div>
              <div className="p-5 sm:p-8">
                <h2 className="font-serif text-[2.05rem] leading-none sm:text-4xl">{translated.title}</h2>
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
