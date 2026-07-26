export type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LegalPageContent = {
  title: string;
  description: string;
  updated: string;
  sections: LegalSection[];
};

export const site = {
  brand: "The Circle Twelve",
  brandCaps: "THE CIRCLE TWELVE",
  proprietor: "Celine Landgraf",
  address: ["Max-Planck-Strasse 4", "66740 Saarlouis", "Deutschland"],
  addressEn: ["Max-Planck-Strasse 4", "66740 Saarlouis", "Germany"],
  email: "info@thecircletwelve.com",
  url: "https://www.thecircletwelve.com"
};

export const deImpressum: LegalPageContent = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung von The Circle Twelve.",
  updated: "Juli 2026",
  sections: [
    {
      title: "Anbieterkennzeichnung",
      paragraphs: [
        site.brand,
        `Inhaberin: ${site.proprietor}`,
        ...site.address,
        `E-Mail: ${site.email}`,
        `Website: ${site.url}`
      ]
    },
    {
      title: "Taetigkeitsprofil",
      paragraphs: [
        "The Circle Twelve ist eine private Beratungs- und Vermittlungsmarke fuer ausgewaehlte Vermoegenswerte und diskrete Individualmandate.",
        "Der Fokus liegt auf Automotive, Aviation, Yachting, Luxury Assets und persoenlich kuratierten Dienstleistungen im Umfeld anspruchsvoller privater und internationaler Anfragen."
      ]
    },
    {
      title: "Redaktionelle Verantwortung",
      paragraphs: [`${site.proprietor}`, `E-Mail: ${site.email}`]
    },
    {
      title: "Inhalte und Verfuegbarkeit",
      paragraphs: [
        "Die Inhalte dieser Website werden mit besonderer Sorgfalt erstellt. Sie dienen der allgemeinen Information und Praesentation und stellen kein verbindliches Angebot dar.",
        "The Circle Twelve behaelt sich vor, Inhalte jederzeit zu aktualisieren, zu ergaenzen oder zu entfernen."
      ]
    },
    {
      title: "Externe Verweise",
      paragraphs: [
        "Diese Website kann auf externe Angebote Dritter verweisen. Fuer deren Inhalte und Verfuegbarkeit ist ausschliesslich der jeweilige Anbieter verantwortlich."
      ]
    },
    {
      title: "Schutzrechte",
      paragraphs: [
        "Texte, Bilder, Logos, Gestaltungselemente und sonstige Inhalte dieser Website sind urheberrechtlich oder durch andere Schutzrechte geschuetzt. Jede Nutzung ausserhalb gesetzlicher Erlaubnisse bedarf der vorherigen Zustimmung des jeweiligen Rechteinhabers."
      ]
    },
    {
      title: "Streitbeilegung",
      paragraphs: [
        "The Circle Twelve ist weder verpflichtet noch bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen."
      ]
    }
  ]
};

export const enImprint: LegalPageContent = {
  title: "Imprint",
  description: "Imprint and provider information for The Circle Twelve.",
  updated: "July 2026",
  sections: [
    {
      title: "Provider Information",
      paragraphs: [
        site.brand,
        `Proprietor: ${site.proprietor}`,
        ...site.addressEn,
        `Email: ${site.email}`,
        `Website: ${site.url}`
      ]
    },
    {
      title: "Business Profile",
      paragraphs: [
        "The Circle Twelve is a private advisory and brokerage brand for selected assets and discreet individual mandates.",
        "Its focus includes automotive, aviation, yachting, luxury assets and personally curated services for demanding private and international enquiries."
      ]
    },
    {
      title: "Editorial Responsibility",
      paragraphs: [`${site.proprietor}`, `Email: ${site.email}`]
    },
    {
      title: "Content and Availability",
      paragraphs: [
        "The content of this website is prepared with particular care. It is provided for general information and presentation purposes and does not constitute a binding offer.",
        "The Circle Twelve reserves the right to update, supplement or remove content at any time."
      ]
    },
    {
      title: "External References",
      paragraphs: [
        "This website may refer to external third-party offerings. The respective provider is solely responsible for their content and availability."
      ]
    },
    {
      title: "Protective Rights",
      paragraphs: [
        "Texts, images, logos, design elements and other content on this website are protected by copyright or other protective rights. Any use beyond statutory permissions requires prior consent from the relevant rights holder."
      ]
    },
    {
      title: "Dispute Resolution",
      paragraphs: [
        "The Circle Twelve is neither obliged nor willing to participate in dispute resolution proceedings before a consumer arbitration board."
      ]
    }
  ]
};

export const dePrivacy: LegalPageContent = {
  title: "Datenschutzerklaerung",
  description: "Datenschutzerklaerung von The Circle Twelve.",
  updated: "Juli 2026",
  sections: [
    {
      title: "1. Verantwortliche Stelle",
      paragraphs: [
        `${site.proprietor}, handelnd unter der Geschaeftsbezeichnung ${site.brand}`,
        ...site.address,
        `E-Mail: ${site.email}`
      ]
    },
    {
      title: "2. Grundsatz",
      paragraphs: [
        "The Circle Twelve behandelt personenbezogene Daten vertraulich, zweckgebunden und mit dem Anspruch, Datenverarbeitung auf das Erforderliche zu beschraenken.",
        "Personenbezogene Daten werden verarbeitet, wenn dies fuer den Betrieb der Website, die Bearbeitung einer Anfrage, vorvertragliche Kommunikation oder gesetzliche Pflichten erforderlich ist."
      ]
    },
    {
      title: "3. Zugriff auf die Website",
      paragraphs: [
        "Beim Aufruf der Website werden technische Zugriffsdaten verarbeitet. Dazu zaehlen insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs, angeforderte Seite, Referrer, Browser- und Geraeteinformationen.",
        "Diese Verarbeitung dient der sicheren Auslieferung der Website, der Stabilitaet des Angebots und dem Schutz vor missbraeuchlicher Nutzung."
      ]
    },
    {
      title: "4. Kontaktaufnahme",
      paragraphs: [
        "Wenn Sie The Circle Twelve per E-Mail kontaktieren, werden die von Ihnen uebermittelten Angaben zur Bearbeitung Ihrer Anfrage verarbeitet.",
        "Dazu koennen Name, Kontaktdaten, Unternehmen, Interessengebiet, Mandatsbezug und Inhalt der Nachricht gehoeren. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO oder Art. 6 Abs. 1 lit. f DSGVO."
      ]
    },
    {
      title: "5. Hosting",
      paragraphs: [
        "Die Website wird ueber einen externen Hosting-Anbieter bereitgestellt. Im Rahmen des Hostings werden technische Daten verarbeitet, die fuer Betrieb, Sicherheit und Auslieferung der Website erforderlich sind.",
        "Mit eingesetzten Dienstleistern werden, soweit erforderlich, geeignete datenschutzrechtliche Vereinbarungen geschlossen."
      ]
    },
    {
      title: "6. Cookies und Technologien",
      paragraphs: [
        "Diese Website verwendet ausschliesslich Technologien, die fuer einen sicheren und zuverlaessigen Betrieb erforderlich sind.",
        "Derzeit werden keine optionalen Analyse-, Marketing- oder Tracking-Technologien eingesetzt. Weitere Informationen finden Sie auf der Seite Cookies & Technologien."
      ]
    },
    {
      title: "7. Externe Links",
      paragraphs: [
        "Der Instagram-Link im Footer fuehrt zu einem externen Angebot. Erst mit dem Anklicken des Links verlassen Sie diese Website.",
        "Fuer die Datenverarbeitung auf externen Plattformen ist der jeweilige Anbieter verantwortlich."
      ]
    },
    {
      title: "8. Speicherdauer",
      paragraphs: [
        "Personenbezogene Daten werden nur so lange gespeichert, wie es fuer den jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.",
        "Anfragen koennen laenger aufbewahrt werden, wenn dies zur Dokumentation, Mandatsanbahnung oder Wahrung berechtigter Interessen erforderlich ist."
      ]
    },
    {
      title: "9. Ihre Rechte",
      paragraphs: [
        "Betroffene Personen haben nach Massgabe der DSGVO insbesondere Rechte auf Auskunft, Berichtigung, Loeschung, Einschraenkung der Verarbeitung, Datenuebertragbarkeit und Widerspruch.",
        "Eine erteilte Einwilligung kann jederzeit mit Wirkung fuer die Zukunft widerrufen werden. Ausserdem besteht das Recht, sich bei einer Datenschutzaufsichtsbehoerde zu beschweren."
      ]
    },
    {
      title: "10. Sicherheit",
      paragraphs: [
        "Diese Website nutzt HTTPS/TLS-Verschluesselung. Technische und organisatorische Massnahmen schuetzen personenbezogene Daten vor unbefugtem Zugriff, Verlust und Missbrauch."
      ]
    },
    {
      title: "11. Aktualisierung",
      paragraphs: [
        "Diese Datenschutzerklaerung wird angepasst, wenn sich rechtliche Anforderungen, technische Funktionen oder tatsaechliche Verarbeitungsvorgaenge aendern."
      ]
    }
  ]
};

export const enPrivacy: LegalPageContent = {
  title: "Privacy Policy",
  description: "Privacy Policy for The Circle Twelve.",
  updated: "July 2026",
  sections: [
    {
      title: "1. Controller",
      paragraphs: [
        `${site.proprietor}, trading as ${site.brand}`,
        ...site.addressEn,
        `Email: ${site.email}`
      ]
    },
    {
      title: "2. Principle",
      paragraphs: [
        "The Circle Twelve handles personal data confidentially, for defined purposes and with a commitment to limiting processing to what is necessary.",
        "Personal data is processed where required to operate the website, respond to an enquiry, conduct pre-contractual communication or comply with legal obligations."
      ]
    },
    {
      title: "3. Website Access",
      paragraphs: [
        "When this website is accessed, technical access data is processed. This may include IP address, date and time of access, requested page, referrer, browser and device information.",
        "This processing supports secure delivery of the website, service stability and protection against misuse."
      ]
    },
    {
      title: "4. Contact",
      paragraphs: [
        "If you contact The Circle Twelve by email, the information you provide is processed to respond to your enquiry.",
        "This may include name, contact details, company, area of interest, mandate context and message content. The legal basis is Art. 6(1)(b) GDPR or Art. 6(1)(f) GDPR."
      ]
    },
    {
      title: "5. Hosting",
      paragraphs: [
        "This website is provided through an external hosting provider. Technical data required for operation, security and delivery of the website is processed in that context.",
        "Where required, appropriate data protection agreements are concluded with service providers."
      ]
    },
    {
      title: "6. Cookies and Technologies",
      paragraphs: [
        "This website uses only technologies required for secure and reliable operation.",
        "No optional analytics, marketing or tracking technologies are currently used. Further information is available on the Cookies & Technologies page."
      ]
    },
    {
      title: "7. External Links",
      paragraphs: [
        "The Instagram link in the footer leads to an external offering. You leave this website only when clicking the link.",
        "The respective provider is responsible for data processing on external platforms."
      ]
    },
    {
      title: "8. Retention",
      paragraphs: [
        "Personal data is retained only for as long as necessary for the relevant purpose or as required by statutory retention obligations.",
        "Enquiries may be retained for a longer period where necessary for documentation, mandate preparation or the protection of legitimate interests."
      ]
    },
    {
      title: "9. Your Rights",
      paragraphs: [
        "Data subjects have rights under the GDPR, including access, rectification, erasure, restriction of processing, data portability and objection.",
        "Consent may be withdrawn at any time with effect for the future. You also have the right to lodge a complaint with a data protection supervisory authority."
      ]
    },
    {
      title: "10. Security",
      paragraphs: [
        "This website uses HTTPS/TLS encryption. Technical and organisational measures protect personal data against unauthorised access, loss and misuse."
      ]
    },
    {
      title: "11. Updates",
      paragraphs: [
        "This Privacy Policy is updated when legal requirements, technical functions or actual processing activities change."
      ]
    }
  ]
};

export const deCookies: LegalPageContent = {
  title: "Cookies & Technologien",
  description: "Informationen zu Cookies und vergleichbaren Technologien bei The Circle Twelve.",
  updated: "Juli 2026",
  sections: [
    {
      title: "Aktueller Einsatz",
      paragraphs: [
        "Diese Website verwendet ausschliesslich Technologien, die fuer einen sicheren und zuverlaessigen Betrieb erforderlich sind.",
        "Derzeit werden keine optionalen Analyse-, Marketing- oder Tracking-Technologien eingesetzt.",
        "Es werden ausschliesslich technisch erforderliche Technologien genutzt, die fuer den sicheren Betrieb sowie ausdruecklich angeforderte Funktionen der Website notwendig sind."
      ]
    },
    {
      title: "Erforderliche Technologien",
      paragraphs: [
        "Technisch erforderliche Technologien unterstuetzen die sichere Bereitstellung der Website, gewaehren grundlegende Funktionen und tragen zur Stabilitaet sowie Sicherheit des Onlineangebots bei.",
        "Sie dienen insbesondere der Navigation, der sicheren Datenuebertragung, dem Schutz vor missbraeuchlichen Zugriffen und der Bereitstellung ausdruecklich angeforderter Funktionen."
      ]
    },
    {
      title: "Optionale Technologien",
      paragraphs: [
        "Derzeit werden keine optionalen Analyse-, Statistik- oder Marketingtechnologien eingesetzt.",
        "Sollten kuenftig entsprechende Technologien verwendet werden, erfolgt deren Einsatz ausschliesslich nach vorheriger Einwilligung. Diese Seite sowie die Datenschutzerklaerung werden in diesem Fall entsprechend aktualisiert."
      ]
    },
    {
      title: "Weitere Informationen",
      paragraphs: [
        "Weiterfuehrende Informationen zur Verarbeitung personenbezogener Daten finden Sie in unserer Datenschutzerklaerung."
      ]
    }
  ]
};

export const enCookies: LegalPageContent = {
  title: "Cookies & Technologies",
  description: "Information about cookies and similar technologies used by The Circle Twelve.",
  updated: "July 2026",
  sections: [
    {
      title: "Current Use",
      paragraphs: [
        "This website uses only technologies required for secure and reliable operation.",
        "No optional analytics, marketing or tracking technologies are currently used.",
        "Only technically necessary technologies are used where required for secure operation and expressly requested website functions."
      ]
    },
    {
      title: "Necessary Technologies",
      paragraphs: [
        "Necessary technologies support secure website delivery, enable core functions and contribute to the stability and security of the online offering.",
        "They serve in particular navigation, secure data transmission, protection against abusive access and the provision of expressly requested functions."
      ]
    },
    {
      title: "Optional Technologies",
      paragraphs: [
        "No optional analytics, statistics or marketing technologies are currently used.",
        "If such technologies are introduced in the future, they will be used only after prior consent. This page and the Privacy Policy will be updated accordingly."
      ]
    },
    {
      title: "Further Information",
      paragraphs: [
        "Further information on the processing of personal data is available in our Privacy Policy."
      ]
    }
  ]
};

export const deLegalNotice: LegalPageContent = {
  title: "Rechtliche Hinweise",
  description: "Rechtliche Hinweise zur Nutzung der Website von The Circle Twelve.",
  updated: "Juli 2026",
  sections: [
    {
      title: "1. Charakter der Website",
      paragraphs: [
        "Diese Website praesentiert The Circle Twelve als private Brokerage- und Advisory-Marke fuer ausgewaehlte Vermoegenswerte und individuelle Mandate.",
        "Alle Inhalte dienen der allgemeinen Information. Sie stellen kein Angebot, keine Annahme, keine Garantie und keine verbindliche Zusicherung dar."
      ]
    },
    {
      title: "2. Rolle von The Circle Twelve",
      paragraphs: [
        "The Circle Twelve agiert als unabhaengige Beratungs-, Kontakt- und Vermittlungsstelle.",
        "Sofern nicht ausdruecklich schriftlich vereinbart, ist The Circle Twelve nicht Eigentuemerin, Herstellerin, Verkaeuferin, Charterbetreiberin oder unmittelbare Anbieterin der dargestellten Vermoegenswerte oder Leistungen."
      ]
    },
    {
      title: "3. Drittinformationen",
      paragraphs: [
        "Informationen zu Fahrzeugen, Luftfahrzeugen, Wasserfahrzeugen, Luxusguetern, Sammlerstuecken oder sonstigen Vermoegenswerten koennen von Eigentuemerinnen, Verkaeufern, Partnern oder anderen Dritten stammen.",
        "Interessenten sollten wesentliche Angaben vor einer Entscheidung eigenstaendig oder durch qualifizierte Fachpersonen pruefen lassen."
      ]
    },
    {
      title: "4. Preise und Verfuegbarkeit",
      paragraphs: [
        "Preise, Spezifikationen und Verfuegbarkeiten koennen sich aendern oder zurueckgezogen werden. Eine verbindliche Grundlage entsteht erst durch ausdrueckliche schriftliche Bestaetigung."
      ]
    },
    {
      title: "5. Off-Market und Vertraulichkeit",
      paragraphs: [
        "Ein Teil der vermittelten Opportunitaeten kann vertraulich oder ausserhalb oeffentlich zugaenglicher Maerkte behandelt werden.",
        "Weiterfuehrende Informationen koennen von Identitaetspruefung, ernsthaftem Interesse, Vertraulichkeitserklaerung, Finanzierungsnachweis oder weiteren transaktionsbezogenen Unterlagen abhaengen."
      ]
    },
    {
      title: "6. Pruefung und Compliance",
      paragraphs: [
        "Je nach Art, Wert, Struktur und Standort einer Transaktion koennen Identitaets-, Unternehmens-, Vertretungs-, Finanzierungs- oder Compliance-Unterlagen erforderlich sein.",
        "Solche Pruefungen dienen dem Schutz der Beteiligten, der Vertraulichkeit und der Integritaet des Mandats."
      ]
    },
    {
      title: "7. Keine Fachberatung",
      paragraphs: [
        "Diese Website ersetzt keine Rechts-, Steuer-, Finanz-, Anlage-, technische oder versicherungsbezogene Beratung. Fuer entsprechende Fragen sollten geeignete Fachpersonen hinzugezogen werden."
      ]
    },
    {
      title: "8. Keine Erfolgsgarantie",
      paragraphs: [
        "The Circle Twelve schuldet keinen bestimmten Transaktionserfolg. Dies gilt insbesondere fuer Verfuegbarkeit, Preis, Finanzierung, Zulassung, Einfuhr, Versicherung oder Annahme einer Anfrage."
      ]
    },
    {
      title: "9. Verguetung",
      paragraphs: [
        "Eine Beratungs-, Vermittlungs-, Organisations- oder Serviceverguetung entsteht nur auf Grundlage einer individuellen Vereinbarung oder einer sonstigen wirksamen rechtlichen Grundlage."
      ]
    },
    {
      title: "10. Marken und Schutzrechte",
      paragraphs: [
        "Marken, Logos, Designs, Fotografien, Fahrzeugbezeichnungen und sonstige Inhalte koennen zugunsten von The Circle Twelve oder Dritten geschuetzt sein.",
        "Die Darstellung fremder Marken oder Produkte begruendet keine offizielle, gesellschaftsrechtliche oder vertragliche Verbindung zum jeweiligen Hersteller oder Rechteinhaber."
      ]
    },
    {
      title: "11. Verfuegbarkeit der Website",
      paragraphs: [
        "Die Website kann aktualisiert, erweitert, eingeschraenkt oder eingestellt werden. Ein Anspruch auf ununterbrochene Verfuegbarkeit besteht nicht."
      ]
    },
    {
      title: "12. Sprachfassungen",
      paragraphs: [
        "Englische Fassungen werden fuer internationale Nutzer bereitgestellt. Bei Abweichungen ist die deutsche Fassung massgeblich, soweit dies rechtlich zulaessig ist."
      ]
    }
  ]
};

export const enLegalNotice: LegalPageContent = {
  title: "Legal Notice",
  description: "Legal notice for the website of The Circle Twelve.",
  updated: "July 2026",
  sections: [
    {
      title: "1. Nature of this Website",
      paragraphs: [
        "This website presents The Circle Twelve as a private brokerage and advisory brand for selected assets and individual mandates.",
        "All content is provided for general information. It does not constitute an offer, acceptance, guarantee or binding assurance."
      ]
    },
    {
      title: "2. Role of The Circle Twelve",
      paragraphs: [
        "The Circle Twelve acts as an independent advisory, contact and brokerage office.",
        "Unless expressly agreed in writing, The Circle Twelve is not the owner, manufacturer, seller, charter operator or direct provider of the assets or services shown."
      ]
    },
    {
      title: "3. Third-Party Information",
      paragraphs: [
        "Information regarding vehicles, aircraft, watercraft, luxury goods, collectibles or other assets may originate from owners, sellers, partners or other third parties.",
        "Interested parties should verify material information independently or through qualified professionals before making any decision."
      ]
    },
    {
      title: "4. Pricing and Availability",
      paragraphs: [
        "Prices, specifications and availability may change or be withdrawn. A binding basis is created only by express written confirmation."
      ]
    },
    {
      title: "5. Off-Market and Confidentiality",
      paragraphs: [
        "Certain opportunities may be handled confidentially or outside publicly accessible markets.",
        "Further information may depend on identity verification, serious interest, confidentiality undertakings, proof of funds or other transaction-related documentation."
      ]
    },
    {
      title: "6. Verification and Compliance",
      paragraphs: [
        "Depending on the type, value, structure and location of a transaction, identity, corporate, authority, financing or compliance documents may be required.",
        "Such checks protect the parties, confidentiality and the integrity of the mandate."
      ]
    },
    {
      title: "7. No Professional Advice",
      paragraphs: [
        "This website does not replace legal, tax, financial, investment, technical or insurance advice. Appropriate professionals should be consulted for such matters."
      ]
    },
    {
      title: "8. No Guarantee of Success",
      paragraphs: [
        "The Circle Twelve does not guarantee any specific transaction outcome. This includes availability, price, financing, registration, import, insurance or acceptance of an enquiry."
      ]
    },
    {
      title: "9. Fees",
      paragraphs: [
        "Any advisory, brokerage, organisational or service fee arises only on the basis of an individual agreement or another valid legal basis."
      ]
    },
    {
      title: "10. Trademarks and Rights",
      paragraphs: [
        "Trademarks, logos, designs, photographs, vehicle designations and other content may be protected in favour of The Circle Twelve or third parties.",
        "The depiction of third-party brands or products does not establish an official, corporate or contractual relationship with the relevant manufacturer or rights holder."
      ]
    },
    {
      title: "11. Website Availability",
      paragraphs: [
        "The website may be updated, expanded, restricted or discontinued. There is no entitlement to uninterrupted availability."
      ]
    },
    {
      title: "12. Language Versions",
      paragraphs: [
        "English versions are provided for international users. In case of discrepancies, the German version prevails to the extent legally permissible."
      ]
    }
  ]
};
