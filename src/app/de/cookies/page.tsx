import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { deCookies } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Cookies & Technologien | The Circle Twelve",
  description: deCookies.description,
  alternates: { canonical: "/de/cookies" }
};

export default function Page() {
  return <LegalPage content={deCookies} language="de" />;
}
