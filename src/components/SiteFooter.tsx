import { LegalInformation } from "@/components/LegalInformation";
import { contactEmail, instagramUrl } from "@/lib/site-structure";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[92rem]">
        <div className="mb-8 flex items-center justify-between gap-6">
          <span className="font-serif text-2xl">THE CIRCLE TWELVE</span>
          <div className="flex flex-wrap gap-6 text-[0.68rem] uppercase tracking-[0.32em] text-muted">
            <a href={instagramUrl} className="transition hover:text-[#d3b98d]">
              Instagram
            </a>
            <a href={`mailto:${contactEmail}`} className="transition hover:text-[#d3b98d]">
              Email
            </a>
          </div>
        </div>
        <LegalInformation />
      </div>
    </footer>
  );
}
