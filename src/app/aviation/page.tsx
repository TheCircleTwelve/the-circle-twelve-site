import type { Metadata } from "next";
import { ModulePage } from "@/components/ModulePage";
import { getModule } from "@/lib/modules";

const module = getModule("aviation");

export const metadata: Metadata = {
  title: "Aviation | The Circle Twelve",
  description: module?.intro,
  alternates: { canonical: "/aviation" }
};

export default function Page() {
  return <ModulePage module={module!} />;
}
