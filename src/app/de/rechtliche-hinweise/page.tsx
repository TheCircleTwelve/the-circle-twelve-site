import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { deLegalNotice } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Rechtliche Hinweise | The Circle Twelve",
  description: deLegalNotice.description,
  alternates: { canonical: "/de/rechtliche-hinweise" }
};

export default function Page() {
  return <LegalPage content={deLegalNotice} language="de" />;
}
