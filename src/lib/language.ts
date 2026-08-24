export type Language = "en" | "de";
export type NavigationItem = {
  label: string;
  href: string;
  items?: { label: string; href: string }[];
};

export const languageStorageKey = "circle12-language";

export const pathMap: Record<string, string> = {
  "/": "/de",
  "/automotive": "/de/automotive",
  "/about-us": "/de/about-us",
  "/beyond-automotive": "/de/beyond-automotive",
  "/network": "/de/network",
  "/contact": "/de/contact",
  "/de": "/",
  "/de/automotive": "/automotive",
  "/de/about-us": "/about-us",
  "/de/beyond-automotive": "/beyond-automotive",
  "/de/network": "/network",
  "/de/contact": "/contact",
  "/de/impressum": "/en/imprint",
  "/de/datenschutz": "/en/privacy",
  "/de/cookies": "/en/cookies",
  "/de/rechtliche-hinweise": "/en/legal-notice",
  "/en/imprint": "/de/impressum",
  "/en/privacy": "/de/datenschutz",
  "/en/cookies": "/de/cookies",
  "/en/legal-notice": "/de/rechtliche-hinweise"
};

export function getLanguageFromPath(pathname: string): Language {
  return pathname === "/de" || pathname.startsWith("/de/") ? "de" : "en";
}

export function switchLanguagePath(pathname: string, target: Language) {
  const cleanPath = pathname.split("?")[0].split("#")[0] || "/";
  const current = getLanguageFromPath(cleanPath);

  if (current === target) {
    return cleanPath;
  }

  if (pathMap[cleanPath]) {
    return pathMap[cleanPath];
  }

  if (target === "de") {
    return cleanPath === "/" ? "/de" : `/de${cleanPath}`;
  }

  return cleanPath.replace(/^\/de(?=\/|$)/, "") || "/";
}

export const navigationByLanguage: Record<Language, NavigationItem[]> = {
  en: [
    { label: "Home", href: "/" },
    {
      label: "Automotive",
      href: "/automotive",
      items: [
        { label: "Available", href: "/automotive#available" },
        { label: "Wanted", href: "/automotive#wanted" },
        { label: "Sold & Sourced", href: "/automotive#sold-sourced" },
        { label: "Private Sourcing", href: "/automotive#private-sourcing" }
      ]
    },
    {
      label: "About Us",
      href: "/about-us",
      items: [
        { label: "Who We Are", href: "/about-us#who-we-are" },
        { label: "Our Approach", href: "/about-us#our-approach" }
      ]
    },
    {
      label: "Beyond Automotive",
      href: "/beyond-automotive",
      items: [
        { label: "Aviation", href: "/beyond-automotive#aviation" },
        { label: "Yachts", href: "/beyond-automotive#yachts" },
        { label: "Collectibles & Art", href: "/beyond-automotive#collectibles-art" }
      ]
    },
    { label: "Network", href: "/network" },
    { label: "Contact", href: "/contact" }
  ],
  de: [
    { label: "Start", href: "/de" },
    {
      label: "Fahrzeuge",
      href: "/de/automotive",
      items: [
        { label: "Verfügbar", href: "/de/automotive#available" },
        { label: "Gesucht", href: "/de/automotive#wanted" },
        { label: "Vermittelt & Beschafft", href: "/de/automotive#sold-sourced" },
        { label: "Private Suche", href: "/de/automotive#private-sourcing" }
      ]
    },
    {
      label: "Über uns",
      href: "/de/about-us",
      items: [
        { label: "Wer wir sind", href: "/de/about-us#who-we-are" },
        { label: "Unser Ansatz", href: "/de/about-us#our-approach" }
      ]
    },
    {
      label: "Weitere Bereiche",
      href: "/de/beyond-automotive",
      items: [
        { label: "Luftfahrt", href: "/de/beyond-automotive#aviation" },
        { label: "Yachten", href: "/de/beyond-automotive#yachts" },
        { label: "Sammlerstücke & Kunst", href: "/de/beyond-automotive#collectibles-art" }
      ]
    },
    { label: "Netzwerk", href: "/de/network" },
    { label: "Kontakt", href: "/de/contact" }
  ]
};
