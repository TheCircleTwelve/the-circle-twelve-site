const imprintSections = [
  {
    title: "Angaben gemaess § 5 TMG",
    body: [
      "Circle 12",
      "Luxury Brokerage & Private Asset Advisory",
      "Inhaberin: Celine Landgraf",
      "E-Mail: info@thecircletwelve.com"
    ]
  },
  {
    title: "Verantwortlich fuer den Inhalt gemaess § 18 Abs. 2 MStV",
    body: ["Celine Landgraf"]
  },
  {
    title: "Haftung fuer Inhalte",
    body: [
      "Die Inhalte dieser Website wurden mit groesstmoeglicher Sorgfalt erstellt. Fuer die Richtigkeit, Vollstaendigkeit und Aktualitaet der Inhalte uebernehmen wir jedoch keine Gewaehr."
    ]
  },
  {
    title: "Haftung fuer Links",
    body: [
      "Unsere Website enthaelt Links zu externen Websites Dritter. Auf deren Inhalte haben wir keinen Einfluss. Deshalb uebernehmen wir fuer diese fremden Inhalte keine Gewaehr. Fuer die Inhalte der verlinkten Seiten ist ausschliesslich der jeweilige Betreiber verantwortlich."
    ]
  },
  {
    title: "Urheberrecht",
    body: [
      "Alle auf dieser Website veroeffentlichten Inhalte, Bilder, Texte, Logos und Grafiken unterliegen dem Urheberrecht. Jede Vervielfaeltigung, Bearbeitung oder Verbreitung ausserhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung des jeweiligen Rechteinhabers."
    ]
  },
  {
    title: "Hinweis",
    body: [
      "Die auf dieser Website dargestellten Fahrzeuge, Immobilien, Luftfahrzeuge, Yachten, Uhren und sonstigen Vermoegenswerte dienen ausschliesslich der Praesentation moeglicher Vermittlungs- und Beratungsleistungen. Zwischenverkauf, Preisaenderungen sowie Irrtuemer bleiben vorbehalten."
    ]
  },
  {
    title: "Streitbeilegung",
    body: [
      "Die Europaeische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/",
      "Wir sind weder verpflichtet noch bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen."
    ]
  }
];

const privacySections = [
  {
    title: "1. Datenschutz auf einen Blick",
    body: [
      "Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. Nachfolgend informieren wir Sie darueber, welche Daten beim Besuch unserer Website erhoben werden und zu welchem Zweck diese verarbeitet werden."
    ]
  },
  {
    title: "2. Verantwortliche Stelle",
    body: ["Celine Landgraf", "Circle 12", "E-Mail: info@thecircletwelve.com"]
  },
  {
    title: "3. Erhebung und Speicherung personenbezogener Daten",
    body: [
      "Beim Besuch unserer Website werden automatisch Informationen durch den Webserver erfasst. Dazu gehoeren insbesondere:"
    ],
    bullets: [
      "IP-Adresse",
      "Datum und Uhrzeit des Zugriffs",
      "Browsertyp und Browserversion",
      "Betriebssystem",
      "Referrer-URL",
      "aufgerufene Seiten"
    ],
    after:
      "Diese Daten dienen ausschliesslich der Gewaehrleistung eines stoerungsfreien Betriebs sowie der Verbesserung unseres Angebots."
  },
  {
    title: "4. Kontaktaufnahme",
    body: [
      "Wenn Sie uns per E-Mail oder ueber ein Kontaktformular kontaktieren, werden Ihre Angaben ausschliesslich zur Bearbeitung Ihrer Anfrage verarbeitet.",
      "Eine Weitergabe an Dritte erfolgt nicht, sofern keine gesetzliche Verpflichtung besteht."
    ]
  },
  {
    title: "5. Cookies",
    body: [
      "Unsere Website verwendet technisch notwendige Cookies, um die Funktionalitaet der Website sicherzustellen.",
      "Sofern zukuenftig Analyse- oder Marketing-Cookies eingesetzt werden, erfolgt deren Verwendung ausschliesslich nach Ihrer ausdruecklichen Einwilligung ueber ein Cookie-Banner."
    ]
  },
  {
    title: "6. Hosting",
    body: [
      "Diese Website wird auf Servern eines externen Hosting-Anbieters betrieben.",
      "Dabei koennen personenbezogene Daten verarbeitet werden, soweit dies zur Bereitstellung und Sicherheit der Website erforderlich ist."
    ]
  },
  {
    title: "7. SSL-/TLS-Verschluesselung",
    body: [
      "Diese Website nutzt eine SSL-/TLS-Verschluesselung zum Schutz vertraulicher Inhalte und Datenuebertragungen."
    ]
  },
  {
    title: "8. Ihre Rechte",
    body: ["Sie haben jederzeit das Recht auf:"],
    bullets: [
      "Auskunft ueber Ihre gespeicherten Daten",
      "Berichtigung unrichtiger Daten",
      "Loeschung Ihrer Daten",
      "Einschraenkung der Verarbeitung",
      "Datenuebertragbarkeit",
      "Widerspruch gegen die Verarbeitung",
      "Widerruf einer erteilten Einwilligung"
    ],
    after:
      "Darueber hinaus haben Sie das Recht, sich bei einer Datenschutzaufsichtsbehoerde zu beschweren."
  },
  {
    title: "9. Speicherdauer",
    body: [
      "Personenbezogene Daten werden nur so lange gespeichert, wie dies zur Erfuellung des jeweiligen Zwecks oder aufgrund gesetzlicher Aufbewahrungspflichten erforderlich ist."
    ]
  },
  {
    title: "10. Aenderungen dieser Datenschutzerklaerung",
    body: [
      "Wir behalten uns vor, diese Datenschutzerklaerung anzupassen, wenn dies aufgrund rechtlicher Aenderungen oder technischer Weiterentwicklungen erforderlich wird.",
      "Stand: Juli 2026"
    ]
  }
];

function LegalSectionList({
  sections
}: {
  sections: Array<{ title: string; body: string[]; bullets?: string[]; after?: string }>;
}) {
  return (
    <div className="mt-8 space-y-8">
      {sections.map((section) => (
        <section key={section.title} className="space-y-3">
          <h3 className="font-serif text-2xl leading-tight text-pearl">{section.title}</h3>
          {section.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {section.bullets ? (
            <ul className="ml-5 list-disc space-y-1">
              {section.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
          {section.after ? <p>{section.after}</p> : null}
        </section>
      ))}
    </div>
  );
}

export function LegalInformation() {
  return (
    <div className="mt-10 grid gap-5 border-t border-white/10 pt-8">
      <details id="imprint" className="group scroll-mt-28">
        <summary className="inline-flex min-h-11 cursor-pointer list-none items-center justify-center border border-white/15 px-5 text-[0.64rem] uppercase tracking-[0.18em] text-muted transition hover:border-metal/70 hover:text-pearl sm:tracking-[0.24em] [&::-webkit-details-marker]:hidden">
          <span className="group-open:hidden">Impressum</span>
          <span className="hidden group-open:inline">Impressum schliessen</span>
        </summary>
        <div className="mt-6 max-w-4xl border border-white/10 bg-black/45 p-5 text-sm leading-7 text-muted sm:p-8">
          <p className="text-[0.62rem] uppercase tracking-[0.28em] text-metal">Stand: Juli 2026</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-pearl sm:text-4xl">Impressum</h2>
          <LegalSectionList sections={imprintSections} />
        </div>
      </details>

      <details id="privacy" className="group scroll-mt-28">
        <summary className="inline-flex min-h-11 cursor-pointer list-none items-center justify-center border border-white/15 px-5 text-[0.64rem] uppercase tracking-[0.18em] text-muted transition hover:border-metal/70 hover:text-pearl sm:tracking-[0.24em] [&::-webkit-details-marker]:hidden">
          <span className="group-open:hidden">Privacy Policy</span>
          <span className="hidden group-open:inline">Privacy Policy schliessen</span>
        </summary>
        <div className="mt-6 max-w-4xl border border-white/10 bg-black/45 p-5 text-sm leading-7 text-muted sm:p-8">
          <p className="text-[0.62rem] uppercase tracking-[0.28em] text-metal">Stand: Juli 2026</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-pearl sm:text-4xl">Datenschutzerklaerung</h2>
          <LegalSectionList sections={privacySections} />
        </div>
      </details>
    </div>
  );
}
