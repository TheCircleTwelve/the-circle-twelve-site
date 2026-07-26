import type { Metadata } from "next";
import { Alegreya_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const alegreya = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-alegreya",
  display: "swap"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap"
});

export const metadata: Metadata = {
  title: "The Circle Twelve | Access is Everything.",
  description:
    "The Circle Twelve provides discreet advisory, brokerage and organisation services for automotive, aviation, yachting, luxury assets and individual services.",
  metadataBase: new URL("https://www.thecircletwelve.com"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      "de-DE": "/de/impressum"
    }
  },
  openGraph: {
    title: "The Circle Twelve",
    description:
      "Discreet advisory, brokerage and organisation services for selected luxury assets and private access.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "The Circle Twelve",
    description:
      "Discreet advisory, brokerage and organisation services for selected luxury assets and private access."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "The Circle Twelve",
    url: "https://www.thecircletwelve.com",
    email: "info@thecircletwelve.com",
    founder: {
      "@type": "Person",
      name: "Celine Landgraf"
    },
    areaServed: "International",
    serviceType: [
      "Automotive advisory and brokerage",
      "Aviation advisory and organisation",
      "Yachting advisory and brokerage",
      "Luxury asset advisory and brokerage",
      "Individual services"
    ]
  };

  return (
    <html lang="en" className={`${alegreya.variable} ${cormorant.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
