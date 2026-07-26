import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { enImprint } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Imprint | The Circle Twelve",
  description: enImprint.description,
  alternates: { canonical: "/en/imprint" }
};

export default function Page() {
  return <LegalPage content={enImprint} language="en" />;
}
