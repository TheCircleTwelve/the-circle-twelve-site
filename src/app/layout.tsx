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
  title: "The Circle 12 | Access is Everything.",
  description:
    "Pre-launch presentation for The Circle 12, a discreet private access concept for rare vehicles, yachts, aircraft and selected luxury assets. No brokerage services are currently offered.",
  metadataBase: new URL("https://thecircletwelve.com"),
  openGraph: {
    title: "The Circle 12",
    description:
      "Pre-launch presentation for a discreet private access concept. No brokerage services are currently offered.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${alegreya.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
