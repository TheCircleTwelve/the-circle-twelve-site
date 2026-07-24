import { MotionDiv, MotionSection } from "@/components/Motion";
import { LegalInformation } from "@/components/LegalInformation";

const services = [
  {
    title: { en: "Rare Vehicles", de: "Seltene Fahrzeuge" },
    text: {
      en: "Private mandates for rare, collectible and significant automobiles through selected collector and specialist channels.",
      de: "Private Mandate fuer seltene, sammelwuerdige und besondere Automobile ueber ausgewaehlte Sammler- und Spezialistenkanaele."
    },
    images: [
      "/images/auto/frontscheinwerfer.png",
      "/images/auto/silberhangar.png",
      "/images/auto/gt3tacho.jpg"
    ]
  },
  {
    title: { en: "Yachts", de: "Yachten" },
    text: {
      en: "Discreet introductions for acquisition, sale and access to selected yachts and maritime opportunities.",
      de: "Diskrete Vermittlung fuer Erwerb, Verkauf und Zugang zu ausgewaehlten Yachten und maritimen Opportunitaeten."
    },
    images: [
      "/images/yacht/backyachthafen.png",
      "/images/yacht/yachtinnen.png",
      "/images/yacht/yachtseehaus.png"
    ]
  },
  {
    title: { en: "Aircraft & Private Jets", de: "Aircraft & Private Jets" },
    text: {
      en: "Confidential access to private aviation opportunities through qualified owners, advisors and partners.",
      de: "Vertraulicher Zugang zu Private-Aviation-Opportunitaeten ueber qualifizierte Eigentuemer, Berater und Partner."
    },
    images: [
      "/images/aviaton/openjetblack.png",
      "/images/aviaton/blackjethangar.png",
      "/images/aviaton/turbine.png"
    ]
  },
  {
    title: { en: "High Value Assets", de: "High Value Assets" },
    text: {
      en: "Access to selected objects, collections and asset opportunities where discretion and trusted context are essential.",
      de: "Zugang zu ausgewaehlten Objekten, Sammlungen und Asset-Opportunitaeten, bei denen Diskretion und vertrauensvoller Kontext entscheidend sind."
    },
    images: [
      "/images/luxury%20assets/luxuryassets.png",
      "/images/luxury%20assets/kullimitlogo.png",
      "/images/luxury%20assets/ziffernblatt.png"
    ]
  },
  {
    title: { en: "Off-Market Opportunities", de: "Off-Market Opportunities" },
    text: {
      en: "Carefully matched conversations for assets and situations that are not suited to public visibility.",
      de: "Sorgfaeltig abgestimmte Gespraeche fuer Assets und Situationen, die nicht fuer oeffentliche Sichtbarkeit bestimmt sind."
    },
    images: [
      "/images/auto/blackxred.png",
      "/images/aviaton/openjetblack.png",
      "/images/yacht/backyachthafen.png"
    ]
  },
  {
    title: { en: "Collector Network", de: "Collector Network" },
    text: {
      en: "A trusted international circle of owners, advisors and partners for carefully qualified introductions. Access by invitation, built on discretion and long-term trust.",
      de: "Ein vertrauensvoller internationaler Kreis aus Eigentuemerinnen, Eigentuemern, Beratern und Partnern fuer qualifizierte Introductions. Zugang auf Einladung, getragen von Diskretion und langfristigem Vertrauen."
    },
    images: [
      "/images/logo/logostahl.jpg.jpg",
      "/images/logo/logocafe.jpg",
      "/images/luxury%20assets/kullimitlogo.png"
    ]
  }
];

const why = [
  { en: "Discretion before exposure", de: "Diskretion vor Sichtbarkeit" },
  { en: "Access beyond public listings", de: "Zugang jenseits oeffentlicher Angebote" },
  { en: "Personal contact instead of automated platforms", de: "Persoenlicher Kontakt statt automatisierter Plattformen" },
  { en: "International network approach", de: "Internationaler Netzwerkansatz" },
  { en: "Selected opportunities upon request", de: "Ausgewaehlte Opportunitaeten auf Anfrage" }
];

const categories = [
  {
    title: { en: "Hypercars & Collector Cars", de: "Hypercars & Collector Cars" },
    images: [
      "/images/auto/frontscheinwerfer.png",
      "/images/auto/silberhangar.png",
      "/images/auto/blackxred.png"
    ],
    position: "object-center"
  },
  {
    title: { en: "Yachts", de: "Yachten" },
    images: [
      "/images/yacht/backyachthafen.png",
      "/images/yacht/yachtinnen.png",
      "/images/yacht/yachtseehaus.png"
    ],
    position: "object-center"
  },
  {
    title: { en: "Private Aviation", de: "Private Aviation" },
    images: [
      "/images/aviaton/openjetblack.png",
      "/images/aviaton/blackjethangar.png",
      "/images/aviaton/turbine.png"
    ],
    position: "object-center"
  },
  {
    title: { en: "High Value Assets", de: "High Value Assets" },
    images: [
      "/images/luxury%20assets/luxuryassets.png",
      "/images/luxury%20assets/kullimitlogo.png",
      "/images/luxury%20assets/ziffernblatt.png"
    ],
    position: "object-center"
  },
  {
    title: { en: "Art & Selected Objects", de: "Kunst & ausgewaehlte Objekte" },
    images: [
      "/images/logo/logostahl.jpg.jpg",
      "/images/logo/logocafe.jpg",
      "/images/luxury%20assets/kullimitlogo.png"
    ],
    position: "object-center"
  }
];

const editorialImages = [
  {
    title: { en: "Rare vehicles", de: "Seltene Fahrzeuge" },
    label: { en: "Selected collector access", de: "Ausgewaehlter Sammlerzugang" },
    src: "/images/auto/blackxred.png",
    className: "md:col-span-7"
  },
  {
    title: { en: "Private circles", de: "Private Kreise" },
    label: { en: "International opportunities", de: "Internationale Opportunitaeten" },
    src: "/images/yacht/backyachthafen.png",
    className: "md:col-span-5 object-bottom"
  },
  {
    title: { en: "Confidential introductions", de: "Vertrauliche Introductions" },
    label: { en: "Access by relationship", de: "Zugang durch Beziehung" },
    src: "/images/logo/logocafe.jpg",
    className: "md:col-span-12 object-center"
  }
];

const navItems = [
  { id: "about", label: { en: "About", de: "Profil" } },
  { id: "services", label: { en: "Services", de: "Services" } },
  { id: "access", label: { en: "Access", de: "Access" } },
  { id: "contact", label: { en: "Contact", de: "Kontakt" } }
];

const copy = {
  en: {
    privateAccess: "Private Access",
    request: "Request",
    sideNote: "Private mandates. Selected luxury assets.",
    claim: "Access is Everything.",
    subclaim: "Discreet access to rare vehicles, yachts, aircraft and selected luxury assets.",
    requestAccess: "Request Access",
    discuss: "Discuss an Opportunity",
    assets: "Assets",
    private: "Private",
    offMarket: "Off-market",
    seeMore: "See more",
    preLaunchLabel: "Pre-launch phase",
    preLaunchNotice: "The Circle 12 is currently in preparation. No brokerage services, transactions or legally binding offers are available until business registration and required formalities are complete.",
    about: "About",
    aboutHeadline: "Private access for selected high-value opportunities.",
    aboutP1: "The Circle 12 is a discreet access and brokerage concept for rare vehicles, yachts, aircraft and selected luxury assets.",
    aboutP2: "We connect qualified buyers, collectors, owners and trusted partners through a growing international network. Our focus is not public mass-market visibility, but private access, discretion and carefully matched opportunities.",
    aboutTiles: ["Private Access", "Qualified Network", "Selected Assets"],
    services: "Services",
    servicesHeadline: "Quiet work. Exact outcomes.",
    servicesText: "Each opportunity is approached through personal contact, careful qualification and a clear understanding of context, privacy and fit.",
    why: "Why Circle 12",
    whyHeadline: "A private network approach for considered luxury asset decisions.",
    featured: "Featured Access",
    featuredHeadline: "Selected opportunities available upon request.",
    contact: "Contact",
    contactHeadline: "Contact us.",
    contactText: "During the pre-launch phase, enquiries are used for introductory contact only and do not create any offer, mandate or brokerage relationship.",
    contactEmail: "info@thecircletwelve.com",
    footerLine: "Private access to selected luxury assets.",
    legal: ["Instagram", "Email", "Imprint", "Privacy Policy"]
  },
  de: {
    privateAccess: "Privater Zugang",
    request: "Anfrage",
    sideNote: "Private Mandate. Ausgewaehlte Luxus-Assets.",
    claim: "Access is Everything.",
    subclaim: "Diskreter Zugang zu seltenen Fahrzeugen, Yachten, Aircraft und ausgewaehlten Luxus-Assets.",
    requestAccess: "Zugang anfragen",
    discuss: "Opportunitaet besprechen",
    assets: "Assets",
    private: "Privat",
    offMarket: "Off-market",
    seeMore: "Mehr ansehen",
    preLaunchLabel: "Pre-Launch-Phase",
    preLaunchNotice: "The Circle 12 befindet sich derzeit im Aufbau. Bis zur Gewerbeanmeldung und dem Abschluss aller erforderlichen Formalitaeten werden keine Brokerage-Leistungen, Transaktionen oder rechtlich bindenden Angebote erbracht.",
    about: "Profil",
    aboutHeadline: "Privater Zugang zu ausgewaehlten High-Value-Opportunitaeten.",
    aboutP1: "The Circle 12 ist ein diskretes Access- und Brokerage-Konzept fuer seltene Fahrzeuge, Yachten, Aircraft und ausgewaehlte Luxus-Assets.",
    aboutP2: "Wir verbinden qualifizierte Kaeufer, Sammler, Eigentuemer und vertrauensvolle Partner ueber ein wachsendes internationales Netzwerk. Unser Fokus liegt nicht auf oeffentlicher Sichtbarkeit, sondern auf privatem Zugang, Diskretion und sorgfaeltig abgestimmten Opportunitaeten.",
    aboutTiles: ["Privater Zugang", "Qualifiziertes Netzwerk", "Ausgewaehlte Assets"],
    services: "Services",
    servicesHeadline: "Leise Arbeit. Praezise Ergebnisse.",
    servicesText: "Jede Opportunitaet wird mit persoenlichem Kontakt, sorgfaeltiger Qualifikation und klarem Verstaendnis fuer Kontext, Diskretion und Passung behandelt.",
    why: "Warum Circle 12",
    whyHeadline: "Ein privater Netzwerkansatz fuer durchdachte Entscheidungen rund um Luxus-Assets.",
    featured: "Featured Access",
    featuredHeadline: "Ausgewaehlte Opportunitaeten auf Anfrage.",
    contact: "Kontakt",
    contactHeadline: "Kontakt aufnehmen.",
    contactText: "Waehrend der Pre-Launch-Phase dienen Anfragen ausschliesslich dem ersten Kontakt und begruenden kein Angebot, Mandat oder Brokerage-Verhaeltnis.",
    contactEmail: "info@thecircletwelve.com",
    footerLine: "Privater Zugang zu ausgewaehlten Luxus-Assets.",
    legal: ["Instagram", "E-Mail", "Impressum", "Datenschutz"]
  }
};

const slideUp = {
  initial: { y: 42 },
  whileInView: { y: 0 },
  viewport: { once: true, amount: 0.22 },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
};

const slideLeft = {
  initial: { x: 44 },
  whileInView: { x: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] }
};

const slideRight = {
  initial: { x: -44 },
  whileInView: { x: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] }
};

export default function Home() {
  const lang = "en";
  const text = copy.en;
  const localize = (value: { en: string; de: string }) => value[lang];

  return (
    <main className="page-shell min-h-screen overflow-hidden bg-ink text-pearl sm:pl-6 lg:pl-10">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.07] bg-ink/78 backdrop-blur-2xl">
        <nav className="mx-auto flex h-[4.75rem] max-w-7xl items-center justify-between px-4 sm:h-[5.15rem] sm:px-8">
          <a href="#home" className="group inline-flex min-w-0 items-center gap-2.5 sm:gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-metal/35 bg-black shadow-[0_0_34px_rgba(192,164,116,0.18)] transition duration-500 group-hover:border-metal/70 sm:h-14 sm:w-14">
              <img
                src="/images/logo/logo.jpg.jpg"
                alt="The Circle Twelve logo"
                className="h-[135%] w-[135%] max-w-none object-cover opacity-95 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
              />
            </span>
            <span className="inline-flex flex-col">
              <span className="font-serif text-lg tracking-wide text-pearl transition group-hover:text-white sm:text-2xl">
                The Circle Twelve
              </span>
              <span className="mt-0.5 hidden text-[0.52rem] uppercase tracking-[0.3em] text-muted/70 min-[390px]:block sm:text-[0.55rem] sm:tracking-[0.42em]">
                {text.privateAccess}
              </span>
            </span>
          </a>
          <div className="hidden items-center gap-7 text-[0.68rem] uppercase tracking-[0.28em] text-muted md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                className="relative py-2 transition hover:text-pearl after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-metal after:transition-all after:duration-300 hover:after:w-full"
                href={`#${item.id}`}
              >
                {localize(item.label)}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section
        id="home"
        className="cinematic-placeholder relative flex min-h-[100svh] items-center px-5 pb-12 pt-24 sm:-ml-6 sm:px-14 sm:pt-28 lg:-ml-10 lg:px-20 lg:pb-20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.22)_48%,rgba(0,0,0,0.78)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink via-ink/70 to-transparent" />
        <div className="absolute left-5 top-28 hidden h-[58vh] w-px bg-gradient-to-b from-metal/0 via-metal/45 to-metal/0 lg:block" />
        <div className="absolute bottom-9 right-5 hidden w-80 border-t border-metal/50 pt-5 text-[0.68rem] uppercase tracking-[0.36em] text-muted/80 md:block">
          {text.sideNote}
        </div>
        <MotionDiv
          initial={{ y: 24 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          className="hairline-frame relative mx-auto w-full max-w-7xl px-4 py-7 sm:px-12 sm:py-14 lg:px-16"
        >
          <img
            src="/images/logoglanz.jpg.jpg"
            alt=""
            className="hero-emblem pointer-events-none absolute right-0 top-1/2 hidden h-[34rem] w-[24rem] -translate-y-1/2 object-cover opacity-[0.2] mix-blend-screen lg:block"
          />
          <div className="relative">
          <p className="mb-6 text-[0.62rem] uppercase tracking-[0.32em] text-metal sm:mb-10 sm:text-[0.68rem] sm:tracking-[0.44em]">
            The Circle 12
          </p>
          <h1 className="max-w-5xl font-serif text-[3.15rem] leading-[0.9] text-pearl min-[390px]:text-[3.55rem] sm:text-8xl sm:leading-[0.84] lg:text-[8.8rem]">
            {text.claim}
          </h1>
          <div className="fine-line my-8 h-px w-full max-w-sm opacity-70 sm:my-10" />
          <p className="max-w-2xl text-[1.02rem] leading-7 text-muted sm:text-xl sm:leading-9">
            {text.subclaim}
          </p>
          <div className="mt-7 max-w-2xl border-l border-metal/70 bg-black/22 px-4 py-3 backdrop-blur-sm sm:mt-8 sm:px-5">
            <p className="text-[0.58rem] uppercase tracking-[0.24em] text-metal sm:text-[0.62rem] sm:tracking-[0.3em]">
              {text.preLaunchLabel}
            </p>
            <p className="mt-2 text-sm leading-6 text-muted sm:text-base sm:leading-7">
              {text.preLaunchNotice}
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex min-h-11 items-center justify-center border border-metal bg-metal px-5 text-[0.66rem] uppercase tracking-[0.18em] text-ink transition duration-300 hover:-translate-y-0.5 hover:border-pearl hover:bg-pearl sm:px-6 sm:tracking-[0.24em]"
            >
              <span>{text.requestAccess}</span>
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-11 items-center justify-center border border-pearl/20 bg-black/10 px-5 text-[0.66rem] uppercase tracking-[0.18em] text-pearl transition duration-300 hover:-translate-y-0.5 hover:border-pearl/70 hover:bg-pearl hover:text-ink sm:px-6 sm:tracking-[0.24em]"
            >
              {text.discuss}
            </a>
          </div>
          <div className="mt-10 flex flex-col gap-6 sm:mt-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="grid w-full max-w-xl grid-cols-3 gap-2 border-y border-white/10 py-5 text-[0.56rem] uppercase tracking-[0.16em] text-muted/80 min-[390px]:text-[0.6rem] sm:text-[0.62rem] sm:tracking-[0.28em]">
            <span>{text.assets}</span>
            <span>{text.private}</span>
            <span>{text.offMarket}</span>
          </div>
          <a
            href="#visual-access"
            className="group inline-flex items-center gap-4 text-[0.64rem] uppercase tracking-[0.2em] text-muted transition hover:text-pearl sm:tracking-[0.28em]"
          >
            {text.seeMore}
          </a>
          </div>
          </div>
        </MotionDiv>
      </section>

      <MotionSection id="visual-access" {...slideUp} className="px-5 pb-12 pt-6 sm:px-14 lg:px-20 lg:pb-20">
        <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-12">
          {editorialImages.map((image, index) => (
            <MotionDiv
              key={localize(image.title)}
              initial={{ y: 28 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative min-h-[18rem] overflow-hidden border border-white/10 bg-black md:min-h-[28rem] ${image.className}`}
            >
              <img
                src={image.src}
                alt={localize(image.title)}
                className={`absolute inset-0 h-full w-full object-cover opacity-[0.92] transition duration-700 group-hover:scale-[1.025] ${image.className.includes("object-bottom") ? "object-bottom" : "object-center"}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="text-[0.62rem] uppercase tracking-[0.32em] text-metal">
                  {localize(image.label)}
                </p>
                <h2 className="mt-3 font-serif text-3xl leading-tight text-pearl sm:text-5xl">
                  {localize(image.title)}
                </h2>
              </div>
            </MotionDiv>
          ))}
        </div>
      </MotionSection>

      <MotionSection id="about" {...slideUp} className="px-5 py-20 sm:px-14 sm:py-24 lg:px-20 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <MotionDiv {...slideRight}>
            <p className="text-[0.68rem] uppercase tracking-[0.38em] text-metal">{text.about}</p>
            <h2 className="mt-6 max-w-lg font-serif text-4xl leading-[1.05] sm:text-6xl">
              {text.aboutHeadline}
            </h2>
          </MotionDiv>
          <MotionDiv {...slideLeft} className="grid gap-8">
            <div className="space-y-7 text-base leading-8 text-muted sm:text-xl sm:leading-10">
              <p>
                {text.aboutP1}
              </p>
              <p>
                {text.aboutP2}
              </p>
            </div>
            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3">
              {text.aboutTiles.map((item) => (
                <div key={item} className="bg-black/60 p-6">
                  <span className="block text-[0.62rem] uppercase tracking-[0.28em] text-metal">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </MotionDiv>
        </div>
      </MotionSection>

      <MotionSection
        id="services"
        {...slideUp}
        className="relative overflow-hidden border-y border-white/[0.07] bg-black/35 px-5 py-20 sm:-ml-6 sm:px-14 sm:py-24 lg:-ml-10 lg:px-20 lg:py-36"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#090909] to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_82%_20%,rgba(168,141,102,0.10),transparent_28rem)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="relative mb-16 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.38em] text-metal">{text.services}</p>
              <h2 className="mt-6 font-serif text-[2.55rem] leading-tight sm:text-6xl">
                {text.servicesHeadline}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-muted md:text-right">
              {text.servicesText}
            </p>
          </div>
          <div className="relative grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <MotionDiv
                key={localize(service.title)}
                initial={{ y: 24 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.78, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative min-h-[19rem] overflow-hidden bg-[#070707]/92 p-6 transition duration-500 hover:bg-[#0d0c0b] sm:min-h-80 sm:p-8"
              >
                <div className="absolute inset-0 opacity-[0.62] transition duration-500 group-hover:opacity-100">
                  {service.images.map((image, imageIndex) => (
                    <img
                      key={image}
                      src={image}
                      alt=""
                      className="asset-cycle absolute inset-0 h-full w-full object-cover"
                      style={{ animationDelay: `${imageIndex * 4}s` }}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/76 via-black/42 to-black/8" />
                </div>
                <span className="relative text-[0.62rem] uppercase tracking-[0.32em] text-metal/80">
                  0{index + 1}
                </span>
                <div className="relative mt-10 h-px w-14 bg-metal/70 transition-all duration-500 group-hover:w-24 group-hover:bg-metal" />
                <h3 className="relative mt-8 font-serif text-[2rem] leading-none text-pearl sm:mt-9 sm:text-4xl">
                  {localize(service.title)}
                </h3>
                <p className="relative mt-7 text-sm leading-7 text-muted">{localize(service.text)}</p>
                <div className="absolute bottom-0 left-0 h-px w-0 bg-metal transition-all duration-500 group-hover:w-full" />
              </MotionDiv>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection {...slideUp} className="px-5 py-20 sm:px-14 sm:py-24 lg:px-20 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <MotionDiv {...slideRight}>
            <p className="text-[0.68rem] uppercase tracking-[0.38em] text-metal">
              {text.why}
            </p>
            <h2 className="mt-6 font-serif text-[2.45rem] leading-[1.08] sm:text-6xl sm:leading-[1.05]">
              {text.whyHeadline}
            </h2>
          </MotionDiv>
          <MotionDiv {...slideLeft} className="divide-y divide-white/10 border-y border-white/10">
            {why.map((item, index) => (
              <div
                key={localize(item)}
                className="group flex items-start justify-between gap-4 py-6 transition hover:px-1 sm:items-center sm:gap-8 sm:py-7 sm:hover:px-3"
              >
                <span className="flex min-w-0 items-start gap-4 text-base leading-7 text-pearl sm:items-center sm:gap-5 sm:text-lg">
                  <span className="shrink-0 text-[0.58rem] uppercase tracking-[0.2em] text-metal/70 sm:text-[0.62rem] sm:tracking-[0.28em]">
                    0{index + 1}
                  </span>
                  {localize(item)}
                </span>
                <span className="h-px w-9 shrink-0 bg-metal/70 transition-all group-hover:w-14 group-hover:bg-metal" />
              </div>
            ))}
          </MotionDiv>
        </div>
      </MotionSection>

      <MotionSection
        id="access"
        {...slideUp}
        className="relative border-y border-white/[0.07] px-5 py-20 sm:-ml-6 sm:px-14 sm:py-24 lg:-ml-10 lg:px-20 lg:py-36"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_24%_28%,rgba(168,141,102,0.075),transparent_24rem)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black/70" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-[0.68rem] uppercase tracking-[0.38em] text-metal">
              {text.featured}
            </p>
            <h2 className="mt-6 font-serif text-[2.75rem] leading-[1] sm:text-7xl sm:leading-[0.98]">
              {text.featuredHeadline}
            </h2>
          </div>
          <div className="mt-16 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((category, index) => (
              <div
                key={localize(category.title)}
                className="group relative flex min-h-48 flex-col justify-between overflow-hidden bg-black/70 p-5 transition duration-500 hover:-translate-y-1 hover:bg-[#11100e] sm:min-h-64"
              >
                {category.images.map((image, imageIndex) => (
                  <img
                    key={image}
                    src={image}
                    alt=""
                    className={`asset-cycle absolute inset-0 h-full w-full object-cover ${category.position}`}
                    style={{ animationDelay: `${imageIndex * 4}s` }}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/74 via-black/38 to-black/8" />
                <span className="relative text-[0.6rem] uppercase tracking-[0.28em] text-metal/75">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="relative text-sm uppercase tracking-[0.16em] text-muted transition group-hover:text-pearl sm:tracking-[0.2em]">
                  {localize(category.title)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection id="contact" {...slideUp} className="px-5 py-20 sm:px-14 sm:py-24 lg:px-20 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <MotionDiv {...slideRight}>
            <p className="text-[0.68rem] uppercase tracking-[0.38em] text-metal">{text.contact}</p>
            <h2 className="mt-6 font-serif text-[2.55rem] leading-[1.05] sm:text-6xl">
              {text.contactHeadline}
            </h2>
            <p className="mt-7 max-w-md text-base leading-8 text-muted">
              {text.contactText}
            </p>
          </MotionDiv>
          <MotionDiv {...slideLeft}>
            <div className="border border-white/10 bg-[#090909]/88 p-6 shadow-quiet backdrop-blur sm:p-8 lg:p-10">
              <p className="text-[0.62rem] uppercase tracking-[0.24em] text-metal">
                Contact us under
              </p>
              <a
                href={`mailto:${text.contactEmail}`}
                className="mt-6 block break-words font-serif text-2xl text-pearl transition hover:text-metal sm:text-3xl"
              >
                {text.contactEmail}
              </a>
              <a
                href="https://www.instagram.com/thecircletwelve"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex break-words text-sm uppercase tracking-[0.2em] text-muted transition hover:text-metal"
              >
                Instagram: thecircletwelve
              </a>
              <p className="mt-6 max-w-xl text-sm leading-7 text-muted">
                Please contact us by email for project-related enquiries during the pre-launch phase.
              </p>
            </div>
          </MotionDiv>
        </div>
      </MotionSection>

      <footer className="border-t border-white/10 px-5 py-10 sm:-ml-6 sm:px-14 lg:-ml-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div id="legal">
            <LegalInformation />
          </div>
        </div>
      </footer>
    </main>
  );
}
