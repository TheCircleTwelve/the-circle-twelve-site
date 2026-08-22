import type { Metadata } from "next";
import { ModulePage } from "@/components/ModulePage";
import { getModule } from "@/lib/modules";

const module = getModule("services");

export const metadata: Metadata = {
  title: "Individual Services | The Circle Twelve",
  description: module?.intro,
  alternates: { canonical: "/services" }
};

export default function Page() {
  return <ModulePage module={module!} />;
}
