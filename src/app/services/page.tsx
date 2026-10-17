import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Steps } from "@/components/Steps";
import { FAQ } from "@/components/FAQ";
import { CTABanner, Marquee, PageHero, Photo, SectionHeading } from "@/components/ui";
import { ClipReveal, Reveal } from "@/components/motion";
import { services } from "@/lib/content";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Credit Repair & Credit Building Services",
  description:
    "Credit repair and disputes, credit building, debt and budget coaching, and home & auto readiness from Oklahoma City's credit experts.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title={
          <>
            Everything you need to <span className="serif-accent text-pop-400">fix &amp; build</span> your credit
          </>
        }
        lede="From challenging inaccurate negatives to building strong positive history, we cover every step between where you are today and the approval you're after."
        image={img.officeTeam}
        image2={img.reviewing}
      />

      <Marquee />

      <section className="container-x space-y-24 py-24 sm:space-y-32 sm:py-32">
        {services.map((s, i) => (
          <div key={s.slug} id={s.slug} className="grid scroll-mt-28 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className={i % 2 ? "lg:order-2" : ""}>
              <div className="relative">
                <ClipReveal direction={i % 2 ? "right" : "left"} className="aspect-[5/4] overflow-hidden rounded-[2rem] shadow-lift">
                  <Photo image={s.image} className="h-full" />
                </ClipReveal>
                <span className="absolute -top-5 -left-3 rounded-2xl bg-pop-500 px-4 py-2 text-lg font-extrabold text-ink shadow-glow sm:-left-5">
                  0{i + 1}
                </span>
              </div>
            </div>
            <div>
              <Reveal>
                <h2 className="section-title">{s.title}</h2>
              </Reveal>
              <Reveal delay={0.06}>
                <p className="lede mt-5">{s.long}</p>
              </Reveal>
              <Reveal delay={0.12}>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 rounded-2xl border border-line bg-cloud px-4 py-3 text-sm font-semibold">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-500 text-white">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.18}>
                <Link href="/contact#consultation" className="btn-dark group mt-9">
                  Get started <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>
          </div>
        ))}
      </section>

      <Steps />

      <section className="container-x py-24 sm:py-32">
        <SectionHeading center eyebrow="FAQ" title="Good questions, honest answers" />
        <Reveal delay={0.1} className="mx-auto mt-12 max-w-3xl">
          <FAQ />
        </Reveal>
      </section>

      <CTABanner image={img.carCouple} />
    </>
  );
}
