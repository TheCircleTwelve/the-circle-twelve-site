import type { MetadataRoute } from "next";

const routes = [
  "",
  "/automotive",
  "/about-us",
  "/beyond-automotive",
  "/network",
  "/contact",
  "/yachts",
  "/aviation",
  "/assets",
  "/services",
  "/de/impressum",
  "/de/datenschutz",
  "/de/cookies",
  "/de/rechtliche-hinweise",
  "/en/imprint",
  "/en/privacy",
  "/en/cookies",
  "/en/legal-notice"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: `https://www.thecircletwelve.com${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : route === "/automotive" ? 0.9 : 0.6
  }));
}
