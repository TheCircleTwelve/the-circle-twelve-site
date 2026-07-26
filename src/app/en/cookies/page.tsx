import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { enCookies } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Cookies & Technologies | The Circle Twelve",
  description: enCookies.description,
  alternates: { canonical: "/en/cookies" }
};

export default function Page() {
  return <LegalPage content={enCookies} language="en" />;
}
