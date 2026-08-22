import type { Metadata } from "next";
import { ModulePage } from "@/components/ModulePage";
import { getModule } from "@/lib/modules";

const module = getModule("yachts");

export const metadata: Metadata = {
  title: "Yachts | The Circle Twelve",
  description: module?.intro,
  alternates: { canonical: "/yachts" }
};

export default function Page() {
  return <ModulePage module={module!} />;
}
