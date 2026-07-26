import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { enPrivacy } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Privacy Policy | The Circle Twelve",
  description: enPrivacy.description,
  alternates: { canonical: "/en/privacy" }
};

export default function Page() {
  return <LegalPage content={enPrivacy} language="en" />;
}
