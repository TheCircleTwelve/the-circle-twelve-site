import { LegalInformation } from "@/components/LegalInformation";

const contactEmail = "info@thecircletwelve.com";
const instagramUrl = "https://www.instagram.com/thecircletwelve";

const portfolio = [
  {
    title: "Automotive",
    note: "Advisory, brokerage and marketing for collector cars, sports cars, hypercars, classics and significant automotive assets.",
    images: [
      "/images/auto/blackxred.png",
      "/images/auto/silberhangar.png",
      "/images/auto/frontscheinwerfer.png"
    ]
  },
  {
    title: "Yachts",
    note: "Discreet introductions for acquisition, sale and maritime access.",
    images: [
      "/images/yacht/backyachthafen.png",
      "/images/yacht/yachtinnen.png",
      "/images/yacht/yachtseehaus.png"
    ]
  },
  {
    title: "Aviation",
    note: "Advisory, organisation and brokerage relating to aircraft, private flight arrangements and individual aviation enquiries.",
    images: [
      "/images/aviaton/openjetblack.png",
      "/images/aviaton/blackjethangar.png",
      "/images/aviaton/turbine.png"
    ]
  },
  {
    title: "High Value Assets",
    note: "Advisory, brokerage and marketing for luxury goods, collectibles and other high-value assets.",
    images: [
      "/images/luxury%20assets/luxuryassets.png",
      "/images/luxury%20assets/ziffernblatt.png",
      "/images/luxury%20assets/luxuryassets.jpg"
    ]
  },
  {
    title: "Individual Services",
    note: "Organisation and brokerage of individual services within a discreet private-office framework.",
    images: [
      "/images/logo/logocafe.jpg",
      "/images/about%20us/privatcover.jpg.jpg",
      "/images/logo/logostahl.jpg.jpg"
    ]
  }
];

const principles = [
  "Private access before public exposure",
  "Introductions built on qualification and trust",
  "Selected opportunities upon request",
  "Personal contact instead of automated listings"
];

const process = [
  {
    step: "01",
    title: "Context",
    text: "We begin with the asset, the situation and the level of discretion required."
  },
  {
    step: "02",
    title: "Qualification",
    text: "Every conversation is filtered for seriousness, fit and confidentiality."
  },
  {
    step: "03",
    title: "Introduction",
    text: "Selected parties are connected only when the opportunity and timing are aligned."
  }
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#080705] text-pearl">
      <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-black/80 to-transparent">
        <nav className="mx-auto flex h-24 max-w-[96rem] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#home" className="flex min-w-0 items-center gap-3">
            <span className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-full border border-[#d3b98d]/45 bg-black shadow-[0_0_42px_rgba(211,185,141,0.18)]">
              <img
                src="/images/logo/logo.jpg.jpg"
                alt="The Circle Twelve logo"
                className="h-[138%] w-[138%] max-w-none object-cover"
              />
            </span>
            <span className="min-w-0 font-serif text-2xl leading-none tracking-wide sm:text-[2rem]">
              The Circle Twelve
            </span>
          </a>
          <div className="hidden items-center gap-8 text-[0.62rem] uppercase tracking-[0.36em] text-pearl/72 md:flex">
            <a className="transition hover:text-pearl" href="#access">
              Access
            </a>
            <a className="transition hover:text-pearl" href="#portfolio">
              Portfolio
            </a>
            <a className="transition hover:text-pearl" href="#contact">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <section id="home" className="relative min-h-[100svh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/auto/blackxred.png"
            alt=""
            className="hero-drift h-full w-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,7,5,0.93)_0%,rgba(8,7,5,0.54)_44%,rgba(8,7,5,0.06)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,7,5,0.08)_0%,rgba(8,7,5,0)_42%,#080705_100%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[100svh] max-w-[96rem] flex-col justify-end px-5 pb-14 pt-32 sm:px-8 lg:px-12 lg:pb-20">
          <p className="mb-7 text-[0.62rem] uppercase tracking-[0.5em] text-[#d3b98d]">
            Private access to selected luxury assets
          </p>
          <h1 className="max-w-6xl font-serif text-[4.4rem] leading-[0.78] text-pearl sm:text-[8rem] lg:text-[12rem]">
            Access is Everything.
          </h1>
          <div className="mt-10 flex max-w-5xl flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-2xl text-lg leading-8 text-[#d8d0c2] sm:text-2xl sm:leading-10">
              Discreet advisory, brokerage and organisation across automotive, aviation, yachting, luxury assets and individual services.
            </p>
            <a
              href="#portfolio"
              className="inline-flex w-fit items-center gap-5 text-[0.62rem] uppercase tracking-[0.34em] text-[#d3b98d] transition hover:text-pearl"
            >
              Explore access
              <span className="h-px w-16 bg-current" />
            </a>
          </div>
        </div>
      </section>

      <section id="access" className="relative overflow-hidden py-16 sm:py-20">
        <div className="marquee-track flex w-max gap-10 text-[0.72rem] uppercase tracking-[0.44em] text-[#d3b98d]/70">
          {[...principles, ...principles].map((item, index) => (
            <span key={`${item}-${index}`} className="whitespace-nowrap">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[96rem] gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-12 lg:py-24">
        <div className="relative min-h-[34rem] overflow-hidden">
          <img
            src="/images/logo/logocafe.jpg"
            alt=""
            className="intro-image absolute inset-0 h-full w-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/76 via-black/18 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-9">
            <p className="text-[0.62rem] uppercase tracking-[0.4em] text-[#d3b98d]">
              Private room
            </p>
            <h2 className="mt-4 max-w-2xl font-serif text-5xl leading-none sm:text-7xl">
              Access begins before the asset is visible.
            </h2>
          </div>
        </div>

        <div className="flex flex-col justify-center bg-[#f0e7d6] px-6 py-10 text-[#16110b] sm:px-10 lg:px-14">
          <p className="text-[0.62rem] uppercase tracking-[0.4em] text-[#806742]">
            Introduction
          </p>
          <h2 className="mt-6 font-serif text-5xl leading-[0.95] sm:text-7xl">
            A private circle for rare opportunities.
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-9 text-[#3c3122]">
            <p>
              The Circle Twelve is built for situations where public visibility is not the right path. Some assets need context, timing and a trusted introduction before they can be discussed properly.
            </p>
            <p>
              We focus on selected luxury assets and individual services. The work is personal, discreet and relationship-led.
            </p>
          </div>
        </div>
      </section>

      <section id="portfolio" className="relative px-5 py-14 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[96rem]">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
            <div className="lg:sticky lg:top-32 lg:h-fit">
              <p className="text-[0.62rem] uppercase tracking-[0.48em] text-[#d3b98d]">Selected fields</p>
              <h2 className="mt-6 font-serif text-5xl leading-[0.9] sm:text-7xl">
                No open catalogue. No public inventory.
              </h2>
              <p className="mt-7 max-w-md text-lg leading-8 text-[#d8d0c2]">
                Each field is intentionally present because the offer should be understood immediately: automotive, aviation, yachting, luxury assets and individual services.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
            {portfolio.map((item, index) => (
              <article
                key={item.title}
                className={`group relative min-h-[31rem] overflow-hidden bg-black shadow-[0_28px_90px_rgba(0,0,0,0.34)] ${
                  index === 1 || index === 2 ? "md:translate-y-16" : ""
                }`}
              >
                <img
                  src={item.images[0]}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-70"
                />
                {item.images.map((image, imageIndex) => (
                  <img
                    key={image}
                    src={image}
                    alt=""
                    className="asset-cycle absolute inset-0 z-10 h-full w-full object-cover"
                    style={{ animationDelay: `${imageIndex * 4.5}s` }}
                  />
                ))}
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/88 via-black/34 to-black/6" />
                <div className="absolute inset-x-0 top-0 z-30 flex items-center justify-between p-5">
                  <span className="text-[0.62rem] uppercase tracking-[0.3em] text-[#d3b98d]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-10 bg-[#d3b98d]/70" />
                </div>
                <div className="absolute inset-x-0 bottom-0 z-30 p-6">
                  <h3 className="font-serif text-5xl leading-none">{item.title}</h3>
                  <p className="mt-5 text-base leading-8 text-[#ddd4c4]">{item.note}</p>
                </div>
              </article>
            ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[96rem] gap-5 px-5 py-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:py-32">
        <div className="relative min-h-[34rem] overflow-hidden">
          <img
            src="/images/yacht/yachtinnen.png"
            alt=""
            className="intro-image absolute inset-0 h-full w-full object-cover opacity-88"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/86 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <p className="text-[0.62rem] uppercase tracking-[0.34em] text-[#d3b98d]">Invitation only</p>
            <h2 className="mt-4 font-serif text-5xl leading-none sm:text-6xl">Access by relationship.</h2>
          </div>
        </div>

        <div className="relative overflow-hidden bg-[#100d09] p-7 sm:p-10 lg:p-12">
          <p className="text-[0.62rem] uppercase tracking-[0.42em] text-[#d3b98d]">How it works</p>
          <div className="mt-10 space-y-10">
            {process.map((item) => (
              <article key={item.step}>
                <span className="font-serif text-5xl text-[#d3b98d]/85">{item.step}</span>
                <h3 className="mt-3 font-serif text-4xl leading-none">{item.title}</h3>
                <p className="mt-4 text-base leading-8 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative flex min-h-[82svh] scroll-mt-24 items-center overflow-hidden bg-black">
        <img
          src="/images/yacht/yachtseehaus.png"
          alt=""
          className="intro-image absolute inset-0 h-full w-full object-cover opacity-42"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/78 to-black/24" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
        <div className="relative mx-auto grid w-full max-w-[96rem] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
          <div className="max-w-xl">
            <p className="text-[0.66rem] uppercase tracking-[0.4em] text-[#d3b98d]">Contact</p>
            <h2 className="mt-6 font-serif text-5xl leading-none sm:text-7xl">Contact us under</h2>
          </div>
          <div className="self-center border-l border-[#d3b98d]/45 bg-black/24 px-6 py-7 backdrop-blur-sm sm:px-9 sm:py-9">
            <a href={`mailto:${contactEmail}`} className="block break-words font-serif text-3xl leading-tight text-pearl transition hover:text-[#d3b98d] sm:text-5xl">
              {contactEmail}
            </a>
            <p className="mt-7 max-w-2xl text-lg leading-9 text-[#d8d0c2]">
              For selected mandates, acquisition enquiries or discreet introductions, please contact us directly by email.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[92rem]">
          <div className="mb-8 flex items-center justify-between gap-6">
            <span className="font-serif text-2xl">THE CIRCLE TWELVE</span>
            <a
              href={instagramUrl}
              className="text-[0.68rem] uppercase tracking-[0.32em] text-muted transition hover:text-[#d3b98d]"
            >
              Instagram
            </a>
          </div>
          <LegalInformation />
        </div>
      </footer>
    </main>
  );
}
