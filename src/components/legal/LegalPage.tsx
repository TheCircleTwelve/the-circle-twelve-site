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
    <main className="min-h-screen overflow-x-clip bg-[#080705] text-pearl">
      <section className="relative isolate overflow-hidden px-4 py-6 sm:px-8 sm:py-8 lg:px-12">
        <img
          src="/images/logo/logostahl.jpg.jpg"
          alt=""
          className="absolute inset-0 -z-20 h-full min-h-full w-full object-cover object-[50%_22%] opacity-16 sm:object-[50%_24%] lg:object-[46%_24%]"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.76)_0%,rgba(8,7,5,0.82)_18rem,rgba(8,7,5,0.94)_42rem,#080705_100%)]" />
        <div className="relative mx-auto max-w-[92rem]">
        <header className="flex items-center justify-between gap-4 border-b border-white/10 pb-5 sm:gap-6 sm:pb-6">
          <Link href={homeHref} className="font-serif text-2xl tracking-wide transition hover:text-[#d3b98d] sm:text-3xl">
            The Circle Twelve
          </Link>
          <Link
            href={homeHref}
            className="text-[0.62rem] uppercase tracking-[0.28em] text-muted transition hover:text-[#d3b98d]"
          >
            {homeLabel}
          </Link>
        </header>

        <article className="grid gap-12 py-16 sm:py-24 lg:grid-cols-[0.45fr_0.55fr] lg:gap-20">
          <aside className="lg:sticky lg:top-10 lg:h-fit">
            <p className="text-[0.62rem] uppercase tracking-[0.42em] text-[#d3b98d]">
              {updatedLabel}: {content.updated}
            </p>
            <h1 className="mt-5 max-w-xl font-serif text-[2.5rem] leading-none sm:mt-6 sm:text-7xl">
              {content.title}
            </h1>
            <p className="mt-5 max-w-md text-base leading-7 text-muted sm:mt-6 sm:text-lg sm:leading-8">{content.description}</p>
            <div className="mt-10 hidden border-l border-[#d3b98d]/45 pl-5 text-[0.62rem] uppercase tracking-[0.28em] text-muted lg:grid lg:gap-4">
              {content.sections.slice(0, 6).map((section) => (
                <span key={section.title}>{section.title.replace(/^\d+\.\s*/, "")}</span>
              ))}
            </div>
          </aside>

          <div className="space-y-4">
            {content.sections.map((section) => (
              <section
                key={section.title}
                className="border border-white/10 bg-black/72 p-4 shadow-[0_16px_48px_rgba(0,0,0,0.24)] backdrop-blur-sm sm:p-7 sm:shadow-[0_22px_70px_rgba(0,0,0,0.28)]"
              >
                <h2 className="font-serif text-2xl leading-tight text-pearl sm:text-3xl">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-3 text-[0.95rem] leading-7 text-[#cfc6b8] sm:mt-5 sm:space-y-4 sm:text-[0.98rem] sm:leading-8">
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
