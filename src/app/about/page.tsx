import type { Metadata } from "next";
import { Eye, HeartHandshake, ShieldCheck, Sparkles, Target } from "lucide-react";
import { CTABanner, PageHero, Photo, SectionHeading } from "@/components/ui";
import { ClipReveal, Counter, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Get to know Get Your Credit Poppin — an Oklahoma City credit repair and credit building company that treats every client like family.",
};

const values = [
  { icon: HeartHandshake, t: "Family first", b: "Every client is treated with the respect, patience and care we'd give our own family." },
  { icon: Eye, t: "Total transparency", b: "You'll always know what we're doing, why we're doing it and what's next." },
  { icon: ShieldCheck, t: "Do it right", b: "We follow the rules, set honest expectations and never promise what can't be promised." },
  { icon: Target, t: "Results-driven", b: "Every action is tied to your goal — whether that's a home, a car or peace of mind." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            We&apos;re in the business of <span className="serif-accent text-pop-400">second chances</span>
          </>
        }
        lede="Get Your Credit Poppin was built on a simple belief: one rough season shouldn't define your financial future. We help everyday people clean up their credit, build it back stronger and take control of what comes next."
        image={img.dadDaughter2}
        image2={img.celebrate}
      />

      {/* Story */}
      <section className="container-x py-24 sm:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative grid grid-cols-2 gap-4">
            <Reveal>
              <ClipReveal className="aspect-[3/4] overflow-hidden rounded-[1.75rem]">
                <Photo image={img.momSon} className="h-full" sizes="25vw" />
              </ClipReveal>
            </Reveal>
            <Reveal delay={0.15} className="mt-12">
              <ClipReveal delay={0.15} className="aspect-[3/4] overflow-hidden rounded-[1.75rem]">
                <Photo image={img.shopOwner} className="h-full" sizes="25vw" />
              </ClipReveal>
            </Reveal>
            <Reveal delay={0.3} className="absolute -bottom-8 left-1/2 -translate-x-1/2">
              <div className="rounded-2xl bg-ink px-6 py-4 text-center text-white shadow-lift">
                <div className="text-3xl font-extrabold">
                  <Counter to={82} suffix="%" className="text-pop-400" />
                </div>
                <div className="text-xs text-white/70">of clients succeed with us</div>
              </div>
            </Reveal>
          </div>
          <div>
            <SectionHeading
              eyebrow="Our story"
              title={
                <>
                  Oklahoma City roots. <span className="serif-accent text-brand-500">Nationwide reach.</span>
                </>
              }
            />
            <Reveal delay={0.1}>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
                <p>
                  We&apos;ve sat across the table from so many people who felt stuck — denied for apartments,
                  turned down for car loans, paying sky-high interest just because of a few marks on a report. Too
                  often, those marks weren&apos;t even accurate.
                </p>
                <p>
                  So we built a company that fights for accurate reporting, teaches the habits that build real credit
                  and walks with clients every step of the way. From our office on NW Expressway, we now serve clients
                  across Oklahoma and nationwide.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission over the OKC skyline */}
      <section className="relative overflow-hidden bg-ink py-32 text-white sm:py-44">
        <Photo image={img.okcSkyline} className="absolute! inset-0 opacity-60" sizes="100vw" parallax={80} />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink/90" />
        <div className="container-x relative">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <span className="eyebrow-dark">
                <Sparkles className="h-3.5 w-3.5" /> Our mission
              </span>
              <p className="mt-8 text-3xl leading-tight font-bold tracking-tight sm:text-4xl lg:text-[3.4rem]">
                To give every client the knowledge, tools and support to build credit that{" "}
                <span className="serif-accent text-pop-400">opens doors</span> — and keeps them open.
              </p>
              <p className="mt-8 text-sm font-semibold tracking-[0.2em] text-white/60 uppercase">
                Proudly rooted in Oklahoma City
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="container-x py-24 sm:py-32">
        <SectionHeading center eyebrow="What we stand for" title="The values behind the work" />
        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, t, b }) => (
            <StaggerItem key={t} className="card group p-7 transition duration-500 hover:-translate-y-2 hover:shadow-lift">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-pop-50 text-pop-500 transition-all duration-500 group-hover:rotate-[-8deg] group-hover:bg-pop-500 group-hover:text-white">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-lg font-bold tracking-tight">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{b}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Photo strip */}
      <section className="overflow-hidden pb-8">
        <Stagger className="container-x grid grid-cols-2 gap-4 md:grid-cols-4">
          {[img.portraitA, img.manSuit, img.portraitC, img.dadDaughter].map((p) => (
            <StaggerItem key={p.src}>
              <div className="group">
                <Photo image={p} className="aspect-[4/5] rounded-[1.5rem]" sizes="25vw" zoom />
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <CTABanner image={img.kitchenCouple} />
    </>
  );
}
