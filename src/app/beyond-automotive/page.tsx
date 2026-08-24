import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { beyondAreas } from "@/lib/site-structure";

export const metadata: Metadata = {
  title: "Beyond Automotive | The Circle Twelve",
  description: "Selected private opportunities beyond automobiles through trusted international partners.",
  alternates: { canonical: "/beyond-automotive" }
};

export default function BeyondAutomotivePage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#080705] text-pearl">
      <SiteHeader />
      <section className="relative min-h-[92svh] overflow-hidden">
        <img src="/images/aviaton/turbine.png" alt="" className="absolute inset-0 h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,7,5,0.97)_0%,rgba(8,7,5,0.76)_52%,rgba(8,7,5,0.28)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#080705] to-transparent" />
        <div className="relative mx-auto flex min-h-[92svh] max-w-[96rem] flex-col justify-end px-4 pb-11 pt-28 sm:px-8 sm:pb-14 sm:pt-32 lg:px-12 lg:pb-20">
          <p className="text-[0.62rem] uppercase tracking-[0.5em] text-[#d3b98d]">Beyond Automotive</p>
          <h1 className="mt-5 max-w-4xl font-serif text-[2.32rem] leading-[1] sm:mt-7 sm:text-[4rem] lg:text-[4.9rem]">
            Access beyond the core.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-[#d8d0c2] sm:mt-8 sm:text-lg sm:leading-8">
            Automotive remains the heart of The Circle Twelve. Selected opportunities beyond that field are handled only through our extended private network and trusted partners.
          </p>
          <div className="mt-6 max-w-3xl border-l border-[#d3b98d]/45 pl-4 text-[0.98rem] leading-7 text-[#d8d0c2] sm:mt-8 sm:pl-5 sm:text-lg sm:leading-8">
            <p className="font-serif text-[1.55rem] leading-tight text-pearl sm:text-3xl">
              Some opportunities go beyond the automotive world.
            </p>
            <p className="mt-5">
              While exceptional cars remain at the heart of The Circle Twelve, the relationships we have built naturally extend into other areas.
            </p>
            <p className="mt-4">
              Through our network of private clients, owners, specialists and trusted partners, we occasionally gain access to selected opportunities in aviation, yachts, art, collectibles and other exceptional assets.
            </p>
            <p className="mt-4">
              We do not try to be experts in every field. When something falls outside our core expertise, we work alongside people who know their market and bring the right experience to the table.
            </p>
            <p className="mt-4">
              This allows us to stay true to the way we work while opening The Circle to opportunities beyond automotive.
            </p>
            <p className="mt-5 font-serif text-2xl leading-tight text-[#d3b98d]">
              Different assets. The same approach.
            </p>
            <p className="mt-2 font-serif text-2xl leading-tight text-pearl">
              Because sometimes the right car isn't listed. It has to be found.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d3b98d]/28 bg-[#f0e7d6] px-4 py-6 text-[#16110b] sm:px-8 sm:py-10 lg:px-12">
        <div className="mx-auto max-w-[96rem]">
          <p className="max-w-4xl text-base font-medium leading-7 text-[#21180f] sm:text-xl sm:leading-9">
            We do not present these areas as a permanent public portfolio. They become relevant when a specific client request, partner opportunity or trusted introduction makes sense.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[96rem] gap-4 px-4 py-10 sm:px-8 sm:py-14 md:grid-cols-3 lg:px-12 lg:py-20">
        {beyondAreas.map((area) => (
          <article key={area.id} id={area.id} className="scroll-mt-28 border border-white/10 bg-[#100d09]">
            <div className="relative min-h-[15rem] overflow-hidden sm:min-h-[18rem]">
              <img src={area.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-68" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/74 via-black/10 to-transparent" />
            </div>
            <div className="p-5 sm:p-8">
              <h2 className="font-serif text-[2.05rem] leading-none sm:text-4xl">{area.title}</h2>
              <p className="mt-5 text-base leading-7 text-[#d8d0c2]">{area.text}</p>
              <p className="mt-6 text-[0.58rem] uppercase tracking-[0.24em] text-[#d3b98d]">
                Extended private network
              </p>
            </div>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
