import Link from "next/link";
import type { LegalPageContent } from "@/lib/legal-content";

export function LegalPage({
  content,
  language
}: {
  content: LegalPageContent;
  language: "de" | "en";
}) {
  const homeLabel = language === "de" ? "Zur Startseite" : "Back to home";
  const updatedLabel = language === "de" ? "Stand" : "Last updated";
  const homeHref = language === "de" ? "/de" : "/";

  return (
    <main className="min-h-screen overflow-x-clip bg-[#b9b3a9] text-pearl">
      <section className="relative isolate overflow-hidden bg-[#b9b3a9] px-4 py-5 sm:px-8 sm:py-8 lg:px-12">
        <img
          src="/images/logo/logostahl.jpg.jpg"
          alt=""
          className="absolute inset-0 -z-20 h-full min-h-full w-full object-cover object-[50%_18%] opacity-72 sm:object-[50%_24%] sm:opacity-58 lg:object-[46%_24%]"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(8,7,5,0.18)_0%,rgba(185,179,169,0.04)_18rem,rgba(185,179,169,0.08)_48rem,rgba(8,7,5,0.24)_100%)] sm:bg-[linear-gradient(180deg,rgba(8,7,5,0.30)_0%,rgba(185,179,169,0.12)_18rem,rgba(185,179,169,0.10)_48rem,rgba(8,7,5,0.32)_100%)]" />
        <div className="relative mx-auto max-w-[92rem]">
        <header className="flex items-center justify-between gap-4 border-b border-white/20 bg-[#080705]/72 px-4 py-4 shadow-[0_16px_44px_rgba(0,0,0,0.22)] backdrop-blur-sm sm:bg-transparent sm:px-0 sm:py-0 sm:pb-6 sm:shadow-none sm:backdrop-blur-0">
          <Link href={homeHref} className="font-serif text-xl tracking-wide text-pearl transition hover:text-[#d3b98d] sm:text-3xl">
            The Circle Twelve
          </Link>
          <Link
            href={homeHref}
            className="text-[0.58rem] uppercase tracking-[0.2em] text-[#d8d0c2] transition hover:text-[#d3b98d] sm:text-[0.62rem] sm:tracking-[0.28em] sm:text-muted"
          >
            {homeLabel}
          </Link>
        </header>

        <article className="grid gap-8 py-10 sm:gap-12 sm:py-24 lg:grid-cols-[0.45fr_0.55fr] lg:gap-20">
          <aside className="lg:sticky lg:top-10 lg:h-fit">
            <p className="text-[0.58rem] uppercase tracking-[0.28em] text-[#5f4728] sm:text-[0.62rem] sm:tracking-[0.42em] sm:text-[#d3b98d]">
              {updatedLabel}: {content.updated}
            </p>
            <h1 className="mt-4 max-w-xl font-serif text-[2.28rem] leading-none text-[#080705] drop-shadow-[0_1px_16px_rgba(255,255,255,0.24)] sm:mt-6 sm:text-7xl sm:text-pearl sm:drop-shadow-none">
              {content.title}
            </h1>
            <p className="mt-4 max-w-md text-base font-medium leading-7 text-[#16110b] sm:mt-6 sm:text-lg sm:font-normal sm:leading-8 sm:text-muted">{content.description}</p>
            <div className="mt-10 hidden border-l border-[#d3b98d]/45 pl-5 text-[0.62rem] uppercase tracking-[0.28em] text-muted lg:grid lg:gap-4">
              {content.sections.slice(0, 6).map((section) => (
                <span key={section.title}>{section.title.replace(/^\d+\.\s*/, "")}</span>
              ))}
            </div>
          </aside>

          <div className="space-y-3 sm:space-y-4">
            {content.sections.map((section) => (
              <section
                key={section.title}
                className="border border-white/34 bg-[#f1eee7]/76 p-4 text-[#16110b] shadow-[0_14px_42px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:border-white/10 sm:bg-black/72 sm:p-7 sm:text-pearl sm:shadow-[0_22px_70px_rgba(0,0,0,0.28)]"
              >
                <h2 className="font-serif text-[1.6rem] leading-tight text-[#080705] sm:text-3xl sm:text-pearl">
                  {section.title}
                </h2>
                <div className="mt-3 space-y-3 text-[0.94rem] leading-7 text-[#2a2117] sm:mt-5 sm:space-y-4 sm:text-[0.98rem] sm:leading-8 sm:text-[#cfc6b8]">
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets ? (
                    <ul className="ml-5 list-disc space-y-2">
                      {section.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </section>
            ))}
          </div>
        </article>
        </div>
      </section>
    </main>
  );
}
