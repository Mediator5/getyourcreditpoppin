import Link from "next/link";
import { ArrowRight, Check, HeartHandshake, Phone, Quote, ScanSearch, Target, TrendingUp } from "lucide-react";
import { HomeHero } from "@/components/HomeHero";
import { Steps } from "@/components/Steps";
import { FAQ } from "@/components/FAQ";
import { LeadForm } from "@/components/LeadForm";
import { DreamsGallery } from "@/components/DreamsGallery";
import { StickyServices } from "@/components/StickyServices";
import { CTABanner, Marquee, Photo, SectionHeading } from "@/components/ui";
import { ClipReveal, Counter, Reveal, ScrollWords, Stagger, StaggerItem } from "@/components/motion";
import { img } from "@/lib/images";
import { unlocks } from "@/lib/content";
import { site, testimonials } from "@/lib/site";

export default function Home() {
  return (
    <>
      <HomeHero />

      {/* What we challenge */}
      <div className="pt-6">
        <p className="container-x mb-4 text-center text-xs font-semibold tracking-[0.2em] text-muted uppercase">
          Negative items we help you challenge
        </p>
        <Marquee />
      </div>

      {/* Why choose us */}
      <section className="container-x py-24 sm:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="relative pb-12 lg:order-2">
            <ClipReveal className="ml-auto aspect-[4/5] w-[86%] overflow-hidden rounded-[2rem] shadow-lift">
              <Photo image={img.kitchenCouple} className="h-full" />
            </ClipReveal>
            <ClipReveal delay={0.25} direction="right" className="absolute bottom-0 left-0 aspect-square w-[46%] overflow-hidden rounded-[1.75rem] border-8 border-white shadow-lift">
              <Photo image={img.paperwork} className="h-full" sizes="25vw" />
            </ClipReveal>
            <Reveal delay={0.5} className="absolute top-8 left-2 sm:left-6">
              <div className="rounded-2xl bg-pop-500 px-5 py-4 text-ink shadow-glow">
                <div className="text-3xl font-extrabold tracking-tight">
                  <Counter to={82} suffix="%" />
                </div>
                <div className="text-xs font-semibold text-ink/75">client success rate</div>
              </div>
            </Reveal>
          </div>

          <div>
            <SectionHeading
              eyebrow="Why choose us"
              title={
                <>
                  Real people. Real plans. <span className="serif-accent text-brand-500">Real progress.</span>
                </>
              }
              lede="Bad credit isn't a life sentence — and you shouldn't have to fight it alone. We treat every client like family, explain every step in plain English and stay in your corner until the job is done."
            />
            <Stagger className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                { icon: ScanSearch, t: "Line-by-line audits", b: "All three bureaus, every account, every detail." },
                { icon: Target, t: "Goal-based plans", b: "Built around the home, car or funding you want." },
                { icon: HeartHandshake, t: "Judgment-free help", b: "Wherever you're starting from, we've seen it." },
                { icon: TrendingUp, t: "Progress you can see", b: "Clear updates after every dispute round." },
              ].map(({ icon: Icon, t, b }) => (
                <StaggerItem key={t} className="card group p-5 transition duration-500 hover:-translate-y-1 hover:shadow-lift">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-500 group-hover:bg-brand-500 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-bold tracking-tight">{t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{b}</p>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.1}>
              <Link href="/about" className="btn-dark group mt-10">
                Meet the team <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Dreams gallery */}
      <section className="pb-24 sm:pb-32">
        <div className="container-x mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Who we help"
            title={
              <>
                Real people. <span className="serif-accent text-pop-600">Real goals.</span>
              </>
            }
            lede="Everyone who walks through our door has something they're working toward. Better credit is how we get you there."
          />
          <Reveal>
            <Link href="/contact#consultation" className="btn-pop group shrink-0">
              Start with your goal <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
        <DreamsGallery />
      </section>

      {/* Manifesto + stats */}
      <section className="relative overflow-hidden bg-ink py-24 text-white sm:py-36">
        <div className="grain absolute inset-0" />
        <div className="pointer-events-none absolute top-1/3 -left-40 h-[30rem] w-[30rem] rounded-full bg-brand-500/25 blur-[120px]" />
        <div className="container-x relative">
          <ScrollWords
            className="max-w-5xl text-3xl leading-[1.2] font-bold tracking-tight sm:text-5xl lg:text-[3.6rem]"
            highlight={["change", "approved"]}
            text="Your credit score is not who you are. It's a number — and numbers change. We fight for accurate reports, build habits that last and stay in your corner until you're approved."
          />

          <Stagger className="mt-20 grid gap-5 md:grid-cols-[1.2fr_1fr_1fr]">
            <StaggerItem className="relative overflow-hidden rounded-[1.75rem] bg-pop-500 p-8 text-ink">
              <div className="text-7xl font-extrabold tracking-tighter">
                <Counter to={82} suffix="%" />
              </div>
              <p className="mt-3 max-w-xs text-lg font-semibold">of clients who use our services become successful.</p>
              <Link href="/contact#consultation" className="mt-6 inline-flex items-center gap-2 font-bold underline-offset-4 hover:underline">
                Be one of them <ArrowRight className="h-4 w-4" />
              </Link>
            </StaggerItem>
            <StaggerItem className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
              <div className="text-7xl font-extrabold tracking-tighter">
                <Counter to={3} />
              </div>
              <p className="mt-3 text-lg font-semibold">credit bureaus audited</p>
              <p className="mt-2 text-sm text-white/60">Experian, Equifax &amp; TransUnion — every line, every account.</p>
            </StaggerItem>
            <StaggerItem className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
              <div className="text-7xl font-extrabold tracking-tighter">
                <Counter to={24} />
                <span className="text-pop-400">/7</span>
              </div>
              <p className="mt-3 text-lg font-semibold">support when you need it</p>
              <p className="mt-2 text-sm text-white/60">Questions don&apos;t keep office hours — neither do we.</p>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* Services — pinned image */}
      <section className="container-x pt-24 sm:pt-32">
        <SectionHeading
          eyebrow="How our services work"
          title={
            <>
              Leave your credit building <span className="serif-accent text-brand-500">to the experts</span>
            </>
          }
          lede="One team, one plan, every piece of the puzzle — from cleaning up your reports to building the credit that gets you approved."
        />
        <div className="mt-8 lg:mt-4">
          <StickyServices />
        </div>
      </section>

      <div className="h-16 sm:h-24" />
      <Steps />

      {/* Financial power — bento */}
      <section className="container-x py-24 sm:py-32">
        <SectionHeading
          center
          eyebrow="What good credit unlocks"
          title={
            <>
              Giving you <span className="serif-accent text-pop-600">financial power</span>
            </>
          }
          lede="Your score affects almost every big move you make. Here's what opens up when your credit is working for you."
        />
        <div className="mt-14 grid auto-rows-[260px] gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[280px]">
          {unlocks.map((u, i) => {
            const span = ["sm:col-span-2 lg:row-span-2", "sm:col-span-2", "", ""][i];
            return (
              <ClipReveal key={u.title} delay={i * 0.12} className={`group relative overflow-hidden rounded-[1.75rem] ${span}`}>
                <Photo image={u.image} className="absolute! inset-0" sizes="(min-width:1024px) 50vw, 100vw" zoom />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                  <h3 className={`font-extrabold tracking-tight ${i === 0 ? "text-3xl sm:text-4xl" : "text-2xl"}`}>{u.title}</h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/80">{u.body}</p>
                </div>
                <span className="absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition-all duration-500 group-hover:rotate-[-45deg] group-hover:bg-pop-500 group-hover:text-ink">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </ClipReveal>
            );
          })}
        </div>
      </section>

      {/* Consultation */}
      <section id="consultation" className="container-x scroll-mt-24 pb-24 sm:pb-32">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-ink text-white">
          <div className="grain absolute inset-0" />
          <div className="relative grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[380px] lg:min-h-full">
              <ClipReveal direction="left" className="absolute inset-0">
                <Photo image={img.yellowLaptop} className="h-full" sizes="(min-width:1024px) 45vw, 100vw" />
              </ClipReveal>
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-ink" />
              <div className="absolute right-6 bottom-6 left-6 lg:right-auto">
                <div className="inline-flex items-center gap-3 rounded-2xl bg-ink/75 p-3 pr-5 backdrop-blur-md">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-pop-500 text-ink">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs text-white/70">Prefer to talk now?</div>
                    <a href={site.phoneHref} className="text-lg font-bold hover:text-pop-400">
                      {site.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-7 sm:p-12 lg:p-14">
              <Reveal>
                <span className="eyebrow-dark">Free credit building consultation</span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="section-title mt-5 text-white">
                  Let&apos;s look at your credit <span className="serif-accent text-pop-400">together.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <ul className="mt-6 mb-9 flex flex-wrap gap-x-6 gap-y-2">
                  {["Credit report review", "No sales pressure", "A clear next-step plan"].map((t) => (
                    <li key={t} className="flex items-center gap-2 text-sm text-white/80">
                      <Check className="h-4 w-4 text-mint-500" /> {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.15}>
                <LeadForm source="Home consultation" dark />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials — shows automatically once real reviews are added in src/lib/site.ts */}
      {testimonials.length > 0 && (
        <section className="container-x pb-24 sm:pb-32">
          <SectionHeading center eyebrow="Client feedback" title="Our clients say it best" />
          <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <StaggerItem key={t.name} className="card p-8">
                <Quote className="h-8 w-8 text-pop-600" />
                <p className="mt-5 leading-relaxed">{t.quote}</p>
                <div className="mt-6 font-bold">{t.name}</div>
                {t.detail && <div className="text-sm text-muted">{t.detail}</div>}
              </StaggerItem>
            ))}
          </Stagger>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-cloud py-24 sm:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Questions & answers"
              title={
                <>
                  Work with a committed <span className="serif-accent text-brand-500">credit builder</span> company
                </>
              }
              lede="Straight answers to the questions we hear most. Don't see yours? Just ask — we're happy to help."
            />
            <ClipReveal className="mt-10 hidden aspect-[5/4] overflow-hidden rounded-[2rem] shadow-soft lg:block">
              <Photo image={img.consultation} className="h-full" />
            </ClipReveal>
          </div>
          <Reveal delay={0.1}>
            <FAQ />
          </Reveal>
        </div>
      </section>

      <CTABanner image={img.movingCouch} />
    </>
  );
}
