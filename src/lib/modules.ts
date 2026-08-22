export type AccessModule = {
  slug: "automotive" | "yachts" | "aviation" | "assets" | "services";
  title: string;
  eyebrow: string;
  menuLabel: string;
  intro: string;
  description: string;
  primaryImage: string;
  images: string[];
  focus: string[];
};

export const accessModules: AccessModule[] = [
  {
    slug: "automotive",
    title: "Automotive",
    eyebrow: "Primary field",
    menuLabel: "Automotive",
    intro: "Private automotive access for collector cars, sports cars, hypercars and significant automotive assets.",
    description:
      "The Circle Twelve is built around discreet automotive mandates. Selected opportunities are handled with context, qualification and personal introduction rather than public exposure.",
    primaryImage: "/images/auto/blackxred.png",
    images: [
      "/images/auto/blackxred.png",
      "/images/auto/silberhangar.png",
      "/images/auto/frontscheinwerfer.png"
    ],
    focus: [
      "Collector and sports cars",
      "Hypercars and rare specifications",
      "Private introductions",
      "Confidential acquisition and sale enquiries"
    ]
  },
  {
    slug: "yachts",
    title: "Yachts",
    eyebrow: "Additional access",
    menuLabel: "Yachts",
    intro: "Discreet maritime introductions for selected acquisition, sale and access enquiries.",
    description:
      "Yachting enquiries are treated as private mandates and only developed where there is a clear fit between opportunity, timing and discretion.",
    primaryImage: "/images/yacht/backyachthafen.png",
    images: [
      "/images/yacht/backyachthafen.png",
      "/images/yacht/yachtinnen.png",
      "/images/yacht/yachtseehaus.png"
    ],
    focus: [
      "Selected yacht opportunities",
      "Owner and buyer introductions",
      "Private maritime access",
      "Confidential transaction context"
    ]
  },
  {
    slug: "aviation",
    title: "Aviation",
    eyebrow: "Additional access",
    menuLabel: "Aviation",
    intro: "Advisory and organisation relating to aircraft, private flight arrangements and individual aviation enquiries.",
    description:
      "Aviation requests require careful qualification. The Circle Twelve supports selected enquiries through discreet coordination and trusted private-office style handling.",
    primaryImage: "/images/aviaton/openjetblack.png",
    images: [
      "/images/aviaton/openjetblack.png",
      "/images/aviaton/blackjethangar.png",
      "/images/aviaton/turbine.png"
    ],
    focus: [
      "Private aviation enquiries",
      "Aircraft-related introductions",
      "Discreet coordination",
      "Selected partner access"
    ]
  },
  {
    slug: "assets",
    title: "High Value Assets",
    eyebrow: "Additional access",
    menuLabel: "High Value Assets",
    intro: "Advisory and brokerage for luxury goods, collectibles and other high-value assets.",
    description:
      "Certain objects require a private context before they can be discussed properly. This module remains selective and request-led.",
    primaryImage: "/images/luxury%20assets/luxuryassets.png",
    images: [
      "/images/luxury%20assets/luxuryassets.png",
      "/images/luxury%20assets/ziffernblatt.png",
      "/images/luxury%20assets/luxuryassets.jpg"
    ],
    focus: [
      "Luxury goods and collectibles",
      "Rare objects",
      "Private owner context",
      "Selected acquisition enquiries"
    ]
  },
  {
    slug: "services",
    title: "Individual Services",
    eyebrow: "Additional access",
    menuLabel: "Individual Services",
    intro: "Organisation and brokerage of individual services within a discreet private-office framework.",
    description:
      "Individual services are handled as supporting mandates. They are not public packages, but carefully coordinated responses to qualified private enquiries.",
    primaryImage: "/images/logo/logocafe.jpg",
    images: [
      "/images/logo/logocafe.jpg",
      "/images/about%20us/privatcover.jpg.jpg",
      "/images/logo/logostahl.jpg.jpg"
    ],
    focus: [
      "Private-office coordination",
      "Selected introductions",
      "Discreet organisation",
      "Individual mandate support"
    ]
  }
];

export function getModule(slug: AccessModule["slug"]) {
  return accessModules.find((module) => module.slug === slug);
}
