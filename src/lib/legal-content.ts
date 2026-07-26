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
      title: "Angaben nach Paragraf 5 DDG",
      paragraphs: [
        site.brand,
        `Inhaberin: ${site.proprietor}`,
        ...site.address,
        `E-Mail: ${site.email}`,
        `Website: ${site.url}`
      ]
    },
    {
      title: "Taetigkeitsbeschreibung",
      paragraphs: [
        "Beratung, Vermittlung und Vermarktung von Fahrzeugen, Luftfahrzeugen, Wasserfahrzeugen, Luxusguetern und sonstigen hochwertigen Vermoegenswerten sowie Organisation und Vermittlung individueller Dienstleistungen."
      ]
    },
    {
      title: "Verantwortlich fuer redaktionelle Inhalte",
      paragraphs: [`${site.proprietor}`, `E-Mail: ${site.email}`]
    },
    {
      title: "Verbraucherstreitbeilegung",
      paragraphs: [
        "The Circle Twelve ist weder verpflichtet noch bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen."
      ]
    },
    {
      title: "Haftung fuer Inhalte",
      paragraphs: [
        "Die Inhalte dieser Website werden mit Sorgfalt erstellt. Fuer die Richtigkeit, Vollstaendigkeit und Aktualitaet der Inhalte kann jedoch keine Gewaehr uebernommen werden."
      ]
    },
    {
      title: "Haftung fuer Links",
      paragraphs: [
        "Diese Website kann Links zu externen Websites Dritter enthalten. Auf deren Inhalte hat The Circle Twelve keinen Einfluss. Fuer die Inhalte verlinkter Seiten ist ausschliesslich der jeweilige Betreiber verantwortlich."
      ]
    },
    {
      title: "Urheberrecht",
      paragraphs: [
        "Die auf dieser Website veroeffentlichten Inhalte, Bilder, Texte, Logos und Gestaltungen unterliegen dem Urheberrecht und weiteren Schutzrechten. Jede Nutzung ausserhalb der gesetzlichen Grenzen bedarf der vorherigen Zustimmung des jeweiligen Rechteinhabers."
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
      title: "Provider information",
      paragraphs: [
        site.brand,
        `Proprietor: ${site.proprietor}`,
        ...site.addressEn,
        `Email: ${site.email}`,
        `Website: ${site.url}`
      ]
    },
    {
      title: "Business activity",
      paragraphs: [
        "Advisory, brokerage and marketing services relating to motor vehicles, aircraft, watercraft, luxury goods and other high-value assets, as well as the organisation and brokerage of individual services."
      ]
    },
    {
      title: "Editorial responsibility",
      paragraphs: [`${site.proprietor}`, `Email: ${site.email}`]
    },
    {
      title: "Consumer dispute resolution",
      paragraphs: [
        "The Circle Twelve is neither obliged nor willing to participate in dispute resolution proceedings before a consumer arbitration board."
      ]
    },
    {
      title: "Liability for content",
      paragraphs: [
        "The content of this website is prepared with care. However, no warranty is given for its accuracy, completeness or timeliness."
      ]
    },
    {
      title: "Liability for links",
      paragraphs: [
        "This website may contain links to external third-party websites. The Circle Twelve has no influence over their content. The respective provider or operator is responsible for linked pages."
      ]
    },
    {
      title: "Copyright",
      paragraphs: [
        "The content, images, text, logos and design elements published on this website are protected by copyright and other protective rights. Use beyond statutory limits requires prior permission from the relevant rights holder."
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
      title: "1. Verantwortliche",
      paragraphs: [
        `${site.proprietor}, handelnd unter der Geschaeftsbezeichnung ${site.brand}`,
        ...site.address,
        `E-Mail: ${site.email}`
      ]
    },
    {
      title: "2. Allgemeine Hinweise",
      paragraphs: [
        "The Circle Twelve verarbeitet personenbezogene Daten nur, soweit dies fuer den Betrieb dieser Website, die Bearbeitung von Anfragen oder die Erfuellung gesetzlicher Pflichten erforderlich ist."
      ]
    },
    {
      title: "3. Hosting und Server-Logfiles",
      paragraphs: [
        "Die Website wird ueber Vercel bereitgestellt. Beim Aufruf der Website koennen technisch erforderliche Zugriffsdaten verarbeitet werden, insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene URL, Referrer-URL, Browserinformationen und Betriebssysteminformationen.",
        "Die Verarbeitung erfolgt zur sicheren Bereitstellung der Website, zur Fehleranalyse und zur Missbrauchsabwehr."
      ]
    },
    {
      title: "4. Kontaktaufnahme",
      paragraphs: [
        "Wenn Sie The Circle Twelve per E-Mail kontaktieren, werden die von Ihnen uebermittelten Angaben zur Bearbeitung Ihrer Anfrage verarbeitet. Dazu koennen Name, E-Mail-Adresse, Unternehmen, Telefonnummer, Interessengebiet und Inhalt Ihrer Nachricht gehoeren.",
        "Rechtsgrundlage ist je nach Anfrage Art. 6 Abs. 1 lit. b DSGVO oder Art. 6 Abs. 1 lit. f DSGVO."
      ]
    },
    {
      title: "5. Cookies und vergleichbare Technologien",
      paragraphs: [
        "Nach dem aktuellen technischen Stand der Website werden keine optionalen Analyse-, Marketing- oder Tracking-Cookies eingesetzt.",
        "Soweit technisch erforderliche Cookies oder vergleichbare Technologien durch Hosting, Sicherheitsfunktionen oder den Browserbetrieb entstehen, dienen sie ausschliesslich dem sicheren und funktionalen Betrieb der Website."
      ]
    },
    {
      title: "6. Schriftarten und externe Medien",
      paragraphs: [
        "Die Website verwendet ueber Next.js bereitgestellte Schriftarten. Nach aktuellem Projektstand werden keine YouTube-, Vimeo-, Google-Maps-, TikTok-, Meta-Pixel-, Google-Analytics- oder vergleichbaren Tracking-Einbindungen geladen.",
        "Der Instagram-Link im Footer ist ein normaler externer Link. Erst beim Anklicken verlassen Sie diese Website."
      ]
    },
    {
      title: "7. Speicherdauer",
      paragraphs: [
        "Personenbezogene Daten werden nur so lange gespeichert, wie dies fuer den jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen."
      ]
    },
    {
      title: "8. Ihre Rechte",
      paragraphs: ["Sie haben nach Massgabe der DSGVO insbesondere folgende Rechte:"],
      bullets: [
        "Auskunft",
        "Berichtigung",
        "Loeschung",
        "Einschraenkung der Verarbeitung",
        "Datenuebertragbarkeit",
        "Widerspruch",
        "Widerruf einer Einwilligung mit Wirkung fuer die Zukunft",
        "Beschwerde bei einer Datenschutzaufsichtsbehoerde"
      ]
    },
    {
      title: "9. Sicherheit",
      paragraphs: [
        "Diese Website nutzt HTTPS/TLS-Verschluesselung. Zusaetzlich werden technische Sicherheitsmassnahmen eingesetzt, soweit sie mit dem vorhandenen Hosting- und Website-Stack vereinbar sind."
      ]
    },
    {
      title: "10. Aenderungen",
      paragraphs: [
        "Diese Datenschutzerklaerung kann angepasst werden, wenn sich rechtliche Anforderungen, technische Funktionen oder die tatsaechliche Datenverarbeitung aendern."
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
      title: "2. General information",
      paragraphs: [
        "The Circle Twelve processes personal data only where necessary to operate this website, respond to enquiries or comply with legal obligations."
      ]
    },
    {
      title: "3. Hosting and server log files",
      paragraphs: [
        "This website is provided through Vercel. When the website is accessed, technically necessary access data may be processed, including IP address, date and time of access, requested URL, referrer URL, browser information and operating system information.",
        "This processing serves the secure delivery of the website, troubleshooting and abuse prevention."
      ]
    },
    {
      title: "4. Contact",
      paragraphs: [
        "If you contact The Circle Twelve by email, the information you provide is processed to respond to your enquiry. This may include your name, email address, company, telephone number, area of interest and message content.",
        "The legal basis is Art. 6(1)(b) GDPR or Art. 6(1)(f) GDPR, depending on the enquiry."
      ]
    },
    {
      title: "5. Cookies and similar technologies",
      paragraphs: [
        "Based on the current technical state of this website, no optional analytics, marketing or tracking cookies are used.",
        "Any technically necessary cookies or comparable technologies created by hosting, security functions or browser operation are used only for secure and functional website operation."
      ]
    },
    {
      title: "6. Fonts and external media",
      paragraphs: [
        "The website uses fonts provided through Next.js. Based on the current project state, no YouTube, Vimeo, Google Maps, TikTok, Meta Pixel, Google Analytics or comparable tracking integrations are loaded.",
        "The Instagram link in the footer is a normal external link. You leave this website only when clicking it."
      ]
    },
    {
      title: "7. Retention",
      paragraphs: [
        "Personal data is retained only for as long as necessary for the respective purpose or as required by statutory retention obligations."
      ]
    },
    {
      title: "8. Your rights",
      paragraphs: ["Subject to the GDPR, you have in particular the following rights:"],
      bullets: [
        "Access",
        "Rectification",
        "Erasure",
        "Restriction of processing",
        "Data portability",
        "Objection",
        "Withdrawal of consent with future effect",
        "Complaint to a data protection supervisory authority"
      ]
    },
    {
      title: "9. Security",
      paragraphs: [
        "This website uses HTTPS/TLS encryption. Additional technical security measures are used where compatible with the existing hosting and website stack."
      ]
    },
    {
      title: "10. Changes",
      paragraphs: [
        "This Privacy Policy may be updated if legal requirements, technical functions or actual data processing change."
      ]
    }
  ]
};

export const deCookies: LegalPageContent = {
  title: "Cookie-Einstellungen",
  description: "Informationen zu Cookies und vergleichbaren Technologien bei The Circle Twelve.",
  updated: "Juli 2026",
  sections: [
    {
      title: "1. Technischer Stand",
      paragraphs: [
        "Nach aktuellem Projektstand verwendet The Circle Twelve keine optionalen Analyse-, Marketing- oder Tracking-Cookies.",
        "Es wird daher kein kuenstlich aufgeblähtes Consent-Banner angezeigt."
      ]
    },
    {
      title: "2. Erforderliche Technologien",
      paragraphs: [
        "Technisch erforderliche Verarbeitungen koennen durch Hosting, Sicherheitsfunktionen, HTTPS-Auslieferung und den normalen Browseraufruf entstehen. Sie dienen ausschliesslich dem sicheren Betrieb der Website."
      ]
    },
    {
      title: "3. Optionale Technologien",
      paragraphs: [
        "Sollten kuenftig optionale Analyse-, Funktions- oder Marketingtechnologien eingesetzt werden, werden diese nur nach vorheriger Einwilligung aktiviert und diese Seite entsprechend aktualisiert."
      ]
    }
  ]
};

export const enCookies: LegalPageContent = {
  title: "Cookie Settings",
  description: "Information about cookies and similar technologies used by The Circle Twelve.",
  updated: "July 2026",
  sections: [
    {
      title: "1. Technical status",
      paragraphs: [
        "Based on the current project state, The Circle Twelve does not use optional analytics, marketing or tracking cookies.",
        "For this reason, no artificial consent banner is displayed."
      ]
    },
    {
      title: "2. Necessary technologies",
      paragraphs: [
        "Technically necessary processing may occur through hosting, security functions, HTTPS delivery and ordinary browser access. It is used only for secure website operation."
      ]
    },
    {
      title: "3. Optional technologies",
      paragraphs: [
        "If optional analytics, functionality or marketing technologies are used in the future, they will be activated only after prior consent and this page will be updated accordingly."
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
        "Diese Website dient der Praesentation von The Circle Twelve sowie der allgemeinen Information ueber moegliche Beratungs-, Vermittlungs-, Vermarktungs- und Organisationsleistungen.",
        "Die dargestellten Inhalte stellen kein verbindliches Angebot, keine Annahmeerklaerung, keine Garantie und keine verbindliche Zusicherung bestimmter Eigenschaften, Preise oder Verfuegbarkeiten dar."
      ]
    },
    {
      title: "2. Rolle als Vermittlerin",
      paragraphs: [
        "The Circle Twelve ist grundsaetzlich als unabhaengige Beratungs-, Kontakt-, Organisations- oder Vermittlungsstelle taetig.",
        "Soweit nicht im Einzelfall ausdruecklich schriftlich anders angegeben, ist The Circle Twelve nicht Eigentuemerin, Herstellerin, Verkaeuferin, Charterbetreiberin oder unmittelbare Anbieterin der dargestellten Vermoegenswerte und Leistungen."
      ]
    },
    {
      title: "3. Drittangaben",
      paragraphs: [
        "Angaben zu Fahrzeugen, Luftfahrzeugen, Wasserfahrzeugen, Luxusguetern, hochwertigen Vermoegenswerten oder sonstigen Angeboten koennen von Eigentuemerinnen, Verkaeufern, Anbietern, Kooperationspartnern oder anderen Dritten stammen.",
        "Interessenten sollen alle wesentlichen Angaben vor Abschluss einer Transaktion eigenstaendig oder durch geeignete Fachleute pruefen lassen."
      ],
      bullets: [
        "Preise, technische Daten und Ausstattung",
        "Baujahre, Erstzulassungen, Betriebsstunden oder Kilometerstaende",
        "Verfuegbarkeit, Herkunft, Zustand und Dokumentation",
        "Fotografien, Unterlagen und historische Angaben"
      ]
    },
    {
      title: "4. Preise und Verfuegbarkeit",
      paragraphs: [
        "Preise, Verfuegbarkeiten und Spezifikationen koennen geaendert oder zurueckgezogen werden. Ohne ausdrueckliche schriftliche Bestaetigung besteht keine Gewaehr fuer Verfuegbarkeit, unveraenderte Preise, steuerliche Behandlung, Zulassung, Einfuhr, Gebuehren, Zoelle oder Transportkosten."
      ]
    },
    {
      title: "5. Off-Market und Vertraulichkeit",
      paragraphs: [
        "Ein Teil der vermittelten Vermoegenswerte kann vertraulich oder ausserhalb oeffentlich zugaenglicher Maerkte angeboten werden. Weiterfuehrende Informationen koennen von Identitaetspruefung, Nachweis ernsthaften Interesses, Vertraulichkeitsvereinbarung, Letter of Intent, Proof of Funds oder weiteren transaktionsbezogenen Unterlagen abhaengig gemacht werden."
      ]
    },
    {
      title: "6. KYC- und Pruefungsunterlagen",
      paragraphs: [
        "Abhaengig von Art, Wert, Struktur, Standort und Beteiligten einer Transaktion koennen Identitaets-, Unternehmens-, Vertretungs-, Finanzierungs- oder Compliance-Unterlagen verlangt werden.",
        "Die Anforderung solcher Unterlagen kann dem Schutz der Beteiligten, der Vertraulichkeit, der Betrugspraevention oder den Anforderungen eines Eigentuemers, Verkaeufers, Anbieters oder Kooperationspartners dienen."
      ]
    },
    {
      title: "7. Keine Rechts-, Steuer-, Finanz- oder Anlageberatung",
      paragraphs: [
        "Diese Website stellt keine Rechtsberatung, Steuerberatung, Finanzberatung, Anlageberatung, technische Begutachtung oder verbindliche Bewertung dar. Bei Bedarf sind geeignete Fachpersonen hinzuzuziehen."
      ]
    },
    {
      title: "8. Keine Erfolgsgarantie",
      paragraphs: [
        "Es besteht keine Garantie dafuer, dass ein gesuchter Vermoegenswert gefunden wird, eine Transaktion zustande kommt, ein bestimmter Preis erzielt wird, eine Anfrage akzeptiert wird oder Finanzierung, Einfuhr, Zulassung oder Versicherung moeglich ist."
      ]
    },
    {
      title: "9. Vermittlungs- und Serviceverguetung",
      paragraphs: [
        "Eine Vermittlungs-, Beratungs-, Organisations- oder Serviceverguetung entsteht nur auf Grundlage einer individuellen Vereinbarung oder einer anderen wirksamen rechtlichen Grundlage. Die Darstellung eines Vermoegenswertes auf der Website allein begruendet keine konkrete Provisionspflicht."
      ]
    },
    {
      title: "10. Marken und Schutzrechte",
      paragraphs: [
        "Marken, Logos, Fotografien, Videos, Texte, Designs, Fahrzeugbezeichnungen und sonstige Inhalte koennen zugunsten von The Circle Twelve oder Dritten geschuetzt sein.",
        "Die Darstellung fremder Marken oder Produkte bedeutet nicht automatisch, dass eine gesellschaftsrechtliche, vertragliche oder offizielle Verbindung zum jeweiligen Hersteller oder Markeninhaber besteht. Soweit nicht ausdruecklich anders angegeben, ist The Circle Twelve kein offizieller Vertragshaendler oder autorisierter Vertreter der dargestellten Hersteller."
      ]
    },
    {
      title: "11. Verfuegbarkeit der Website",
      paragraphs: [
        "Es besteht kein Anspruch auf jederzeit unterbrechungsfreie, fehlerfreie oder vollstaendige Verfuegbarkeit. Die Website und einzelne Inhalte koennen geaendert, eingeschraenkt oder eingestellt werden."
      ]
    },
    {
      title: "12. Sprachfassungen",
      paragraphs: [
        "Englische Fassungen werden als Service fuer internationale Nutzer bereitgestellt. Bei Abweichungen ist die deutsche Fassung massgeblich, soweit gesetzlich zulaessig."
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
      title: "1. Nature of this website",
      paragraphs: [
        "This website presents The Circle Twelve and provides general information about possible advisory, brokerage, marketing and organisational services.",
        "The content shown does not constitute a binding offer, acceptance, guarantee or binding assurance of specific characteristics, prices or availability."
      ]
    },
    {
      title: "2. Role as an intermediary",
      paragraphs: [
        "The Circle Twelve generally acts as an independent advisory, contact, organisational or brokerage office.",
        "Unless expressly stated otherwise in writing in an individual case, The Circle Twelve is not the owner, manufacturer, seller, charter operator or direct provider of the assets and services shown."
      ]
    },
    {
      title: "3. Third-party information",
      paragraphs: [
        "Information about motor vehicles, aircraft, watercraft, luxury goods, high-value assets or other offers may originate from owners, sellers, providers, cooperation partners or other third parties.",
        "Interested parties should verify all material information independently or through suitable professionals before completing any transaction."
      ]
    },
    {
      title: "4. Prices and availability",
      paragraphs: [
        "Prices, availability and specifications may change or be withdrawn. Unless expressly confirmed in writing, no assurance is given regarding availability, unchanged pricing, tax treatment, registration, import, fees, duties or transport costs."
      ]
    },
    {
      title: "5. Off-market opportunities and confidentiality",
      paragraphs: [
        "Some assets may be offered confidentially or outside publicly accessible markets. Further information may depend on identity verification, proof of serious interest, confidentiality undertakings, a letter of intent, proof of funds or other transaction-related documents."
      ]
    },
    {
      title: "6. KYC and verification documents",
      paragraphs: [
        "Depending on the type, value, structure, location and parties involved in a transaction, identity, corporate, authority, financing or compliance documents may be requested.",
        "Such requests may serve the protection of the parties, confidentiality, fraud prevention or requirements of an owner, seller, provider or cooperation partner."
      ]
    },
    {
      title: "7. No legal, tax, financial or investment advice",
      paragraphs: [
        "This website does not provide legal, tax, financial or investment advice, technical inspection or binding valuation. Suitable professionals should be consulted where required."
      ]
    },
    {
      title: "8. No guarantee of a successful transaction",
      paragraphs: [
        "There is no guarantee that a desired asset will be found, a transaction will be completed, a certain price will be achieved, an enquiry will be accepted, or financing, import, registration or insurance will be possible."
      ]
    },
    {
      title: "9. Brokerage and service fees",
      paragraphs: [
        "Any brokerage, advisory, organisational or service fee arises only on the basis of an individual agreement or another valid legal basis. The mere presentation of an asset on this website does not create a specific commission obligation."
      ]
    },
    {
      title: "10. Trademarks and protective rights",
      paragraphs: [
        "Trademarks, logos, photographs, videos, texts, designs, vehicle designations and other content may be protected in favour of The Circle Twelve or third parties.",
        "The depiction of third-party brands or products does not automatically indicate a corporate, contractual or official connection with the respective manufacturer or brand owner. Unless expressly stated otherwise, The Circle Twelve is not an official dealer or authorised representative of the manufacturers shown."
      ]
    },
    {
      title: "11. Website availability",
      paragraphs: [
        "There is no entitlement to uninterrupted, error-free or complete availability at all times. The website and individual content may be changed, restricted or discontinued."
      ]
    },
    {
      title: "12. Language versions",
      paragraphs: [
        "English versions are provided as a service for international users. In case of discrepancies, the German version prevails to the extent legally permissible."
      ]
    }
  ]
};
