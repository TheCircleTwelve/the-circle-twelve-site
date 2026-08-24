import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Ueber uns | The Circle Twelve",
  description: "The Circle Twelve, die Menschen, der Ansatz und das Netzwerk hinter der Marke.",
  alternates: { canonical: "/de/about-us" }
};

const chapters = [
  {
    number: "01",
    title: "The Circle Twelve",
    lead: "Die interessantesten Gelegenheiten sind oft die, die nicht oeffentlich sichtbar sind.",
    paragraphs: [
      "The Circle Twelve ist aus einer gemeinsamen Leidenschaft fuer aussergewoehnliche Automobile und aus dem Netzwerk entstanden, das sich daraus auf natuerliche Weise entwickelt hat.",
      "Heute arbeiten wir mit privaten Kunden, Sammlern, Eigentuemerinnen und Eigentuemern sowie ausgewaehlten Partnern, um besondere Fahrzeuge in einem internationalen Markt zu finden und zu platzieren. Manche Gelegenheiten sind sichtbar, viele andere werden bewusst privat und diskret behandelt.",
      "Automotive bleibt der Kern von The Circle Twelve. Unser Ansatz ist persoenlich und klar: verstehen, was gesucht wird, die richtigen Menschen verbinden und jede Gelegenheit individuell begleiten.",
      "Wir sind ueberzeugt, dass das richtige Netzwerk Tueren oeffnen kann, die eine klassische Suche nicht erreicht."
    ],
    closing: "Dort beginnt The Circle."
  },
  {
    number: "02",
    title: "Wer wir sind",
    lead: "The Circle Twelve entstand aus etwas, das uns von Anfang an verbunden hat: eine echte Leidenschaft fuer besondere Fahrzeuge und die Menschen dahinter.",
    paragraphs: [
      "Was mit Gespraechen und persoenlichen Kontakten begann, wurde Schritt fuer Schritt zu etwas, das wir gemeinsam aufbauen wollten. Aus Gespraechen wurden Kontakte, aus Kontakten entstanden Gelegenheiten, und unser Netzwerk wuchs organisch weiter.",
      "Wir bringen unterschiedliche Staerken ein, teilen aber dieselbe Haltung zu Geschaeft: persoenlich bleiben, klar kommunizieren und Beziehungen aufbauen, die ueber eine einzelne Transaktion hinausgehen.",
      "Wir sind weiterhin persoenlich in jede Gelegenheit eingebunden, die wir annehmen. Wer mit The Circle Twelve arbeitet, wird nicht durch Abteilungen gereicht. Sie arbeiten direkt mit uns.",
      "Diese persoenliche Verbindung ist fuer uns ein wesentlicher Teil dessen, was The Circle Twelve sein soll."
    ],
    people: [
      {
        name: "Celine Landgraf",
        role: "Founder & Managing Director",
        text: "Celine verantwortet die strategische Ausrichtung von The Circle Twelve, den Aufbau langfristiger Beziehungen sowie die Begleitung ausgewaehlter Mandate und privater Gelegenheiten."
      },
      {
        name: "Noah Berens",
        role: "Director of Automotive & Sales",
        text: "Noah fuehrt den Automotive- und Sales-Bereich von The Circle Twelve und arbeitet direkt mit Kunden, Eigentuemerinnen und Eigentuemern sowie Partnern, um Gelegenheiten zu finden, Kontakte herzustellen und Transaktionen voranzubringen."
      }
    ],
    closing: "Wir freuen uns auf die Menschen, die Teil dieses Circles werden."
  },
  {
    number: "03",
    title: "Unser Ansatz",
    lead: "Jede Gelegenheit ist anders. Genau so sollte sie auch behandelt werden.",
    paragraphs: [
      "Wir arbeiten nicht aus einem festen Katalog und versuchen nicht einfach zu verkaufen, was gerade verfuegbar ist. Wir verstehen, was gebraucht wird, handeln schnell, wenn Timing entscheidend ist, und passen unser Vorgehen der jeweiligen Situation an.",
      "Kommunikation halten wir direkt und den Prozess so klar wie moeglich. Gerade im privaten Markt zaehlt Vertrauen. Es entsteht durch Transparenz, Verlaesslichkeit und dadurch, dass man weiss, mit wem man arbeitet.",
      "Wir sind selektiv bei den Gelegenheiten, die wir annehmen, und bei den Menschen, die wir miteinander verbinden. Nicht jedes Fahrzeug passt, und nicht jede Verbindung muss zu einem Deal werden.",
      "Gutes Geschaeft bedeutet fuer uns nicht nur, eine Transaktion abzuschliessen. Es bedeutet, Beziehungen aufzubauen, zu denen Menschen gerne zurueckkehren."
    ]
  },
  {
    number: "04",
    title: "Das Netzwerk",
    lead: "The Circle reicht ueber das hinaus, was wir direkt anbieten koennen.",
    paragraphs: [
      "Mit der Zeit sind Beziehungen zu privaten Sammlern, Eigentuemerinnen und Eigentuemern, Haendlern, Spezialisten und Partnern in verschiedenen Maerkten entstanden. Dadurch erreichen wir Gelegenheiten, die oeffentlich nicht sichtbar sind.",
      "Automotive bleibt unser Kern, aber unser Netzwerk endet dort nicht. Ueber dieselben Beziehungen erhalten wir gelegentlich Zugang zu ausgewaehlten Gelegenheiten in Aviation, Yachten, Kunst und anderen aussergewoehnlichen Assets.",
      "Wir behaupten nicht, in jedem Markt Spezialisten zu sein. Wenn eine Gelegenheit ausserhalb unseres Kernbereichs liegt, arbeiten wir mit Menschen zusammen, die ihren Markt verstehen.",
      "Das bedeutet The Circle fuer uns: die richtigen Menschen kennen, passende Expertise zusammenbringen und Zugang schaffen, wo er Sinn ergibt."
    ]
  }
];

export default function GermanAboutUsPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#080705] text-pearl">
      <SiteHeader />
      <section className="relative min-h-[68svh] overflow-hidden">
        <img src="/images/logo/logocafe.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-72" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,7,5,0.96)_0%,rgba(8,7,5,0.70)_52%,rgba(8,7,5,0.18)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#080705] to-transparent" />
        <div className="relative mx-auto flex min-h-[68svh] max-w-[96rem] flex-col justify-end px-5 pb-14 pt-32 sm:px-8 lg:px-12">
          <p className="mb-6 text-[0.62rem] uppercase tracking-[0.5em] text-[#d3b98d]">Ueber uns</p>
          <h1 className="max-w-4xl font-serif text-[2.85rem] leading-[0.94] sm:text-[4.8rem] lg:text-[5.8rem]">
            The Circle Twelve.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-[86rem] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-10">
          {chapters.map((chapter) => (
            <article key={chapter.number} id={chapter.title === "Wer wir sind" ? "who-we-are" : chapter.title === "Unser Ansatz" ? "our-approach" : undefined} className="scroll-mt-28 border-t border-white/12 pt-10">
              <div className="grid gap-8 lg:grid-cols-[0.36fr_1fr]">
                <div>
                  <p className="text-[0.62rem] uppercase tracking-[0.4em] text-[#d3b98d]">
                    {chapter.number} - {chapter.title}
                  </p>
                </div>
                <div>
                  <h2 className="max-w-4xl font-serif text-3xl leading-[1.12] sm:text-4xl lg:text-[2.7rem]">{chapter.lead}</h2>
                  <div className="mt-8 grid gap-5 text-lg leading-9 text-[#d8d0c2]">
                    {chapter.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {chapter.people ? (
                    <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
                      {chapter.people.map((person) => (
                        <div key={person.name} className="bg-[#f0e7d6] p-6 text-[#16110b] sm:p-8">
                          <h3 className="font-serif text-4xl leading-none">{person.name}</h3>
                          <p className="mt-3 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#5f4728]">{person.role}</p>
                          <p className="mt-6 text-base font-medium leading-7 text-[#21180f]">{person.text}</p>
                        </div>
                      ))}
                    </div>
                  ) : null}
                  {chapter.closing ? (
                    <p className="mt-8 font-serif text-3xl leading-tight text-[#d3b98d]">{chapter.closing}</p>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
