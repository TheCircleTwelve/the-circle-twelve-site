import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { enLegalNotice } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Legal Notice | The Circle Twelve",
  description: enLegalNotice.description,
  alternates: { canonical: "/en/legal-notice" }
};

export default function Page() {
  return <LegalPage content={enLegalNotice} language="en" />;
}
