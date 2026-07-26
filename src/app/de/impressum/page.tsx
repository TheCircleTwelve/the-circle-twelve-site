import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { deImpressum } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Impressum | The Circle Twelve",
  description: deImpressum.description,
  alternates: { canonical: "/de/impressum" }
};

export default function Page() {
  return <LegalPage content={deImpressum} language="de" />;
}
