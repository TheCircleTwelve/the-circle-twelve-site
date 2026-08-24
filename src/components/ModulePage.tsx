import Link from "next/link";
import { LegalInformation } from "@/components/LegalInformation";
import { SiteHeader } from "@/components/SiteHeader";
import { accessModules, type AccessModule } from "@/lib/modules";

const contactEmail = "info@thecircletwelve.com";
const instagramUrl = "https://www.instagram.com/thecircletwelve";

export function ModulePage({ module }: { module: AccessModule }) {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#080705] text-pearl">
      <SiteHeader />

      <section className="relative min-h-[88svh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={module.primaryImage}
            alt=""
            className="hero-drift h-full w-full object-cover opacity-88"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,7,5,0.94)_0%,rgba(8,7,5,0.62)_48%,rgba(8,7,5,0.12)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,7,5,0.08)_0%,rgba(8,7,5,0)_42%,#080705_100%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[88svh] max-w-[96rem] flex-col justify-end px-4 pb-11 pt-28 sm:px-8 sm:pb-14 sm:pt-32 lg:px-12 lg:pb-20">
          <p className="mb-5 text-[0.58rem] uppercase tracking-[0.34em] text-[#d3b98d] sm:mb-7 sm:text-[0.62rem] sm:tracking-[0.5em]">
            {module.eyebrow}
          </p>
          <h1 className="max-w-6xl font-serif text-[2.75rem] leading-[0.92] text-pearl sm:text-[8rem] lg:text-[11rem]">
            {module.title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-[#d8d0c2] sm:mt-9 sm:text-2xl sm:leading-10">
            {module.intro}
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[96rem] gap-6 px-4 py-10 sm:gap-8 sm:px-8 sm:py-16 lg:grid-cols-[0.85fr_1.15fr] lg:px-12 lg:py-24">
        <div className="border-y border-[#d3b98d]/28 bg-[#f0e7d6] px-5 py-7 text-[#16110b] sm:px-10 sm:py-10 lg:px-12">
          <p className="text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-[#5f4728] sm:text-[0.62rem] sm:tracking-[0.4em]">
            Module
          </p>
          <h2 className="mt-4 font-serif text-[2.35rem] leading-[0.98] sm:mt-6 sm:text-7xl">
            Request-led access.
          </h2>
          <p className="mt-5 text-base font-medium leading-7 text-[#21180f] sm:mt-8 sm:text-lg sm:leading-9">
            {module.description}
          </p>
        </div>

        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
          {module.focus.map((item) => (
            <div key={item} className="bg-[#100d09] p-5 sm:p-8">
              <span className="text-[0.58rem] uppercase tracking-[0.26em] text-[#d3b98d]">
                Focus
              </span>
              <p className="mt-3 font-serif text-[1.7rem] leading-none sm:mt-4 sm:text-3xl">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[96rem] px-4 py-7 sm:px-8 sm:py-8 lg:px-12 lg:py-16">
        <div className="grid gap-4 md:grid-cols-3">
          {module.images.map((image) => (
            <div key={image} className="relative min-h-[18rem] overflow-hidden bg-black sm:min-h-[24rem]">
              <img src={image} alt="" className="intro-image absolute inset-0 h-full w-full object-cover opacity-78" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/74 via-black/18 to-transparent" />
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="relative flex min-h-[64svh] scroll-mt-24 items-center overflow-hidden bg-black">
        <img
          src="/images/yacht/yachtseehaus.png"
          alt=""
          className="intro-image absolute inset-0 h-full w-full object-cover opacity-34"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/78 to-black/24" />
        <div className="relative mx-auto grid w-full max-w-[96rem] gap-7 px-4 py-14 sm:gap-10 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
          <div className="max-w-xl">
            <p className="text-[0.66rem] uppercase tracking-[0.4em] text-[#d3b98d]">Contact</p>
            <h2 className="mt-4 font-serif text-[2.45rem] leading-none sm:mt-6 sm:text-7xl">Contact us under</h2>
          </div>
          <div className="self-center border-l border-[#d3b98d]/45 bg-black/24 px-5 py-6 backdrop-blur-sm sm:px-9 sm:py-9">
            <a href={`mailto:${contactEmail}`} className="block break-words font-serif text-[1.75rem] leading-tight text-pearl transition hover:text-[#d3b98d] sm:text-5xl">
              {contactEmail}
            </a>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#d8d0c2] sm:mt-7 sm:text-lg sm:leading-9">
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
          <nav className="mb-8 flex flex-wrap gap-x-6 gap-y-3 text-[0.58rem] uppercase tracking-[0.24em] text-muted">
            {accessModules.map((item) => (
              <Link key={item.slug} href={`/${item.slug}`} className="transition hover:text-[#d3b98d]">
                {item.menuLabel}
              </Link>
            ))}
          </nav>
          <LegalInformation />
        </div>
      </footer>
    </main>
  );
}
