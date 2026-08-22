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

  return (
    <main className="min-h-screen overflow-x-clip bg-[#080705] text-pearl">
      <section className="relative overflow-hidden px-5 py-8 sm:px-8 lg:px-12">
        <img
          src="/images/logo/logostahl.jpg.jpg"
          alt=""
          className="absolute inset-x-0 top-0 h-[48rem] w-full object-cover object-[50%_22%] opacity-16 sm:h-[58rem] sm:object-[50%_24%] lg:h-[72rem] lg:object-[46%_24%] xl:h-[78rem]"
        />
        <div className="absolute inset-x-0 top-0 h-[50rem] bg-gradient-to-b from-black/76 via-[#080705]/82 to-[#080705] sm:h-[60rem] lg:h-[74rem] xl:h-[80rem]" />
        <div className="relative mx-auto max-w-[92rem]">
        <header className="flex items-center justify-between gap-6 border-b border-white/10 pb-6">
          <Link href="/" className="font-serif text-2xl tracking-wide transition hover:text-[#d3b98d] sm:text-3xl">
            The Circle Twelve
          </Link>
          <Link
            href="/"
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
            <h1 className="mt-6 max-w-xl font-serif text-5xl leading-none sm:text-7xl">
              {content.title}
            </h1>
            <p className="mt-6 max-w-md text-lg leading-8 text-muted">{content.description}</p>
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
                className="border border-white/10 bg-black/72 p-5 shadow-[0_22px_70px_rgba(0,0,0,0.28)] backdrop-blur-sm sm:p-7"
              >
                <h2 className="font-serif text-2xl leading-tight text-pearl sm:text-3xl">
                  {section.title}
                </h2>
                <div className="mt-5 space-y-4 text-[0.98rem] leading-8 text-[#cfc6b8]">
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
