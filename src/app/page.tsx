import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";

const coverLinks = [
  { title: "Automotive", href: "/automotive", kicker: "Main field" },
  { title: "About Us", href: "/about-us", kicker: "The people" },
  { title: "Beyond Automotive", href: "/beyond-automotive", kicker: "Extended network" },
  { title: "Network", href: "/network", kicker: "Relationships" },
  { title: "Contact", href: "/contact", kicker: "Private enquiries" }
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#080705] text-pearl">
      <section id="home" className="relative min-h-[100svh] overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/logo/logoweinflasche.jpg" alt="" className="h-full w-full object-cover opacity-72" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,7,5,0.96)_0%,rgba(8,7,5,0.74)_45%,rgba(8,7,5,0.34)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_42%,rgba(211,185,141,0.13),transparent_28rem),linear-gradient(180deg,transparent_0%,rgba(8,7,5,0.16)_62%,#080705_100%)]" />
        </div>

        <div className="relative mx-auto grid min-h-[100svh] max-w-[96rem] gap-6 px-4 pb-8 pt-7 sm:px-8 lg:grid-cols-[0.92fr_0.68fr] lg:items-end lg:px-12 lg:pb-14 lg:pt-10">
          <div className="flex min-h-[50svh] flex-col justify-between lg:min-h-[74svh]">
            <Link href="/" className="flex w-fit min-w-0 items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-full border border-[#d3b98d]/45 bg-black shadow-[0_0_42px_rgba(211,185,141,0.18)] sm:h-14 sm:w-14">
                <img src="/images/logo/logo.jpg.jpg" alt="The Circle Twelve logo" className="h-[138%] w-[138%] max-w-none object-cover" />
              </span>
              <span className="min-w-0 font-serif text-xl leading-none tracking-wide sm:text-[2rem]">
                The Circle Twelve
              </span>
            </Link>

            <div className="max-w-4xl">
              <p className="mb-4 text-[0.58rem] uppercase tracking-[0.34em] text-[#d3b98d] sm:mb-6 sm:text-[0.62rem] sm:tracking-[0.5em]">
                Private access
              </p>
              <h1 className="font-serif text-[2.42rem] leading-[0.94] text-pearl sm:text-[4.9rem] lg:text-[5.9rem]">
                Private automotive access.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[#d8d0c2] sm:mt-7 sm:text-xl sm:leading-9">
                Exceptional cars, discreet opportunities and the right introductions.
              </p>
            </div>
          </div>

          <div className="lg:pb-4">
            <aside className="border border-[#d3b98d]/18 bg-black/34 p-2.5 shadow-[0_20px_58px_rgba(0,0,0,0.32)] backdrop-blur-md sm:p-3 sm:shadow-[0_28px_90px_rgba(0,0,0,0.38)]">
              <div className="bg-[#f0e7d6] px-4 py-3 text-[#16110b] sm:px-5 sm:py-4">
                <p className="text-[0.55rem] font-semibold uppercase tracking-[0.28em] text-[#5f4728] sm:text-[0.58rem] sm:tracking-[0.34em]">Menu</p>
              </div>
              <div className="grid gap-px bg-white/10">
                {coverLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="group bg-[#100d09]/94 p-3.5 transition hover:bg-[#17120c] sm:p-5">
                    <div className="flex items-center justify-between gap-5">
                      <div>
                        <p className="text-[0.52rem] uppercase tracking-[0.22em] text-[#d3b98d]/82 sm:text-[0.55rem] sm:tracking-[0.28em]">{item.kicker}</p>
                        <h2 className="mt-1.5 font-serif text-[1.65rem] leading-none sm:mt-2 sm:text-3xl">{item.title}</h2>
                      </div>
                      <span className="h-px w-10 bg-[#d3b98d]/70 transition group-hover:w-14" />
                    </div>
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d3b98d]/22 bg-[#f0e7d6] px-4 py-5 text-[#16110b] sm:px-8 sm:py-8 lg:px-12">
        <div className="mx-auto flex max-w-[96rem] flex-wrap gap-x-7 gap-y-2 text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-[#5f4728] sm:gap-x-10 sm:gap-y-3 sm:text-[0.62rem] sm:tracking-[0.34em]">
          <span>Private Members Club</span>
          <span>Automotive Editorial</span>
          <span>Boutique Brokerage</span>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
