import Link from "next/link";

const legalLinks = [
  { href: "/de/impressum", label: "Impressum" },
  { href: "/de/datenschutz", label: "Datenschutz" },
  { href: "/de/cookies", label: "Cookie-Einstellungen" },
  { href: "/de/rechtliche-hinweise", label: "Rechtliche Hinweise" }
];

export function LegalInformation() {
  const year = new Date().getFullYear();

  return (
    <div className="border-t border-white/10 pt-8">
      <nav
        aria-label="Legal links"
        className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4"
      >
        {legalLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="bg-[#080705]/92 px-4 py-4 text-[0.58rem] uppercase tracking-[0.2em] text-muted transition hover:bg-[#100d09] hover:text-[#d3b98d] focus:outline-none focus:ring-2 focus:ring-[#d3b98d]/60 sm:text-[0.62rem] sm:tracking-[0.24em]"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <p className="mt-8 text-sm text-muted">
        (c) {year} The Circle Twelve. All rights reserved.
      </p>
    </div>
  );
}
