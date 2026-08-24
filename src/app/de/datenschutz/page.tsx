import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { dePrivacy } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | The Circle Twelve",
  description: dePrivacy.description,
  alternates: { canonical: "/de/datenschutz" }
};

export default function Page() {
  return <LegalPage content={dePrivacy} language="de" />;
}
