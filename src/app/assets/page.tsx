import type { Metadata } from "next";
import { ModulePage } from "@/components/ModulePage";
import { getModule } from "@/lib/modules";

const module = getModule("assets");

export const metadata: Metadata = {
  title: "High Value Assets | The Circle Twelve",
  description: module?.intro,
  alternates: { canonical: "/assets" }
};

export default function Page() {
  return <ModulePage module={module!} />;
}
