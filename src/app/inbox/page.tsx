import type { Metadata } from "next";
import { InboxClient } from "@/components/InboxClient";

export const metadata: Metadata = {
  title: "Private Inbox | The Circle Twelve",
  robots: {
    index: false,
    follow: false
  }
};

export default function InboxPage() {
  return <InboxClient />;
}
