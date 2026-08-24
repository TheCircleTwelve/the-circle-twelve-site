import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "About Us | The Circle Twelve",
  description: "The Circle Twelve, who we are, our approach and the network behind the brand.",
  alternates: { canonical: "/about-us" }
};

const chapters = [
  {
    number: "01",
    title: "The Circle Twelve",
    lead: "The most interesting opportunities are often the ones you don't see publicly.",
    paragraphs: [
      "The Circle Twelve was created around a shared passion for exceptional automobiles and the network that naturally grew around it.",
      "Today, we work with private clients, collectors, owners and selected partners to source and place special cars across an international market. Some opportunities are publicly available, while others are handled privately and discreetly.",
      "Automotive remains at the heart of The Circle Twelve. Our approach is personal and straightforward: understand what our client is looking for, connect the right people and handle each opportunity individually.",
      "We believe the right network can open doors that a traditional search cannot."
    ],
    closing: "That is where The Circle begins."
  },
  {
    number: "02",
    title: "Who We Are",
    lead: "The Circle Twelve grew from something we both shared from the beginning: a genuine passion for exceptional cars and the people around them.",
    paragraphs: [
      "What started with conversations and personal contacts gradually became something we wanted to build together. Over time, conversations turned into contacts, contacts into opportunities, and our network continued to grow naturally.",
      "We both bring different strengths to the table, but share the same way of thinking about business: keep things personal, be straightforward and build relationships that last beyond a single deal.",
      "We are still personally involved in every opportunity we take on. When you work with The Circle Twelve, you are not passed through different departments or account managers. You work directly with us.",
      "For us, that personal connection is an important part of what The Circle Twelve is meant to be."
    ],
    people: [
      {
        name: "Celine Landgraf",
        role: "Founder & Managing Director",
        text: "Celine leads the overall direction of The Circle Twelve, with a focus on developing the business, building long-term relationships and overseeing selected client mandates and private opportunities."
      },
      {
        name: "Noah Berens",
        role: "Director of Automotive & Sales",
        text: "Noah leads the automotive and sales side of The Circle Twelve, working directly with clients, owners and partners to source opportunities, connect the right people and move transactions forward."
      }
    ],
    closing: "We look forward to meeting the people who become part of it along the way."
  },
  {
    number: "03",
    title: "Our Approach",
    lead: "Every opportunity is different, and we believe it should be treated that way.",
    paragraphs: [
      "We don't work from a fixed catalogue or simply try to sell what is currently available. We understand what is needed, act quickly when timing matters and adapt our approach to each situation, whether that means sourcing a specific car, finding the right buyer or handling an opportunity privately.",
      "We keep communication direct and the process as clear as possible. Especially in the private market, trust matters, and we believe it is built through transparency, reliability and knowing who you are working with.",
      "We are selective about the opportunities we take on and the people we introduce to each other. Not every car is the right fit, and not every connection needs to become a deal.",
      "For us, good business is not only about completing a transaction. It is about building relationships people are comfortable coming back to."
    ]
  },
  {
    number: "04",
    title: "The Network",
    lead: "The Circle goes beyond what we can offer directly.",
    paragraphs: [
      "Over time, we have built relationships with private collectors, owners, dealers, specialists and partners across different markets and countries. This allows us to reach beyond publicly available opportunities and connect with people we know and trust.",
      "Automotive remains at the core of what we do, but our network doesn't stop there. Through the same relationships, we occasionally gain access to opportunities in aviation, yachts, art and other exceptional assets.",
      "We don't claim to be specialists in every market. When an opportunity falls outside our core expertise, we work with people who are.",
      "That is what the Circle means to us: knowing the right people, bringing the right expertise together and creating access where it makes sense."
    ]
  }
];

export default function AboutUsPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#080705] text-pearl">
      <SiteHeader />
      <section className="relative min-h-[68svh] overflow-hidden">
        <img src="/images/logo/logocafe.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-72" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,7,5,0.96)_0%,rgba(8,7,5,0.70)_52%,rgba(8,7,5,0.18)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#080705] to-transparent" />
        <div className="relative mx-auto flex min-h-[68svh] max-w-[96rem] flex-col justify-end px-5 pb-14 pt-32 sm:px-8 lg:px-12">
          <p className="mb-6 text-[0.62rem] uppercase tracking-[0.5em] text-[#d3b98d]">About Us</p>
          <h1 className="max-w-4xl font-serif text-[2.85rem] leading-[0.94] sm:text-[4.8rem] lg:text-[5.8rem]">
            The Circle Twelve.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-[86rem] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-10">
          {chapters.map((chapter) => (
            <article key={chapter.number} id={chapter.title === "Who We Are" ? "who-we-are" : chapter.title === "Our Approach" ? "our-approach" : undefined} className="scroll-mt-28 border-t border-white/12 pt-10">
              <div className="grid gap-8 lg:grid-cols-[0.36fr_1fr]">
                <div>
                  <p className="text-[0.62rem] uppercase tracking-[0.4em] text-[#d3b98d]">
                    {chapter.number} — {chapter.title}
                  </p>
                </div>
                <div>
                  <h2 className="max-w-4xl font-serif text-3xl leading-[1.12] sm:text-4xl lg:text-[2.7rem]">{chapter.lead}</h2>
                  <div className="mt-8 grid gap-5 text-lg leading-9 text-[#d8d0c2]">
                    {chapter.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {chapter.people ? (
                    <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
                      {chapter.people.map((person) => (
                        <div key={person.name} className="bg-[#f0e7d6] p-6 text-[#16110b] sm:p-8">
                          <h3 className="font-serif text-4xl leading-none">{person.name}</h3>
                          <p className="mt-3 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#5f4728]">{person.role}</p>
                          <p className="mt-6 text-base font-medium leading-7 text-[#21180f]">{person.text}</p>
                        </div>
                      ))}
                    </div>
                  ) : null}
                  {chapter.closing ? (
                    <p className="mt-8 font-serif text-3xl leading-tight text-[#d3b98d]">{chapter.closing}</p>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
