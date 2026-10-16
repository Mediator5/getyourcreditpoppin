import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, HeartHandshake, Phone, Quote, ScanSearch, Target, TrendingUp } from "lucide-react";
import { HomeHero } from "@/components/HomeHero";
import { Steps } from "@/components/Steps";
import { FAQ } from "@/components/FAQ";
import { LeadForm } from "@/components/LeadForm";
import { CTABanner, Marquee, Photo, SectionHeading } from "@/components/ui";
import { Counter, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { img } from "@/lib/images";
import { services, unlocks } from "@/lib/content";
import { site, testimonials } from "@/lib/site";

export default function Home() {
  return (
    <>
      <HomeHero />

      {/* What we challenge */}
      <div className="relative">
        <p className="container-x mb-4 text-center text-xs font-semibold tracking-[0.2em] text-muted uppercase">
          Negative items we help you challenge
        </p>
        <Marquee />
      </div>

      {/* Why choose us */}
      <section className="container-x py-24 sm:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <Reveal x={-30} y={0}>
              <Photo image={img.family} className="aspect-[4/5] w-[85%] rounded-[2rem] shadow-lift" parallax={40} />
            </Reveal>
            <Reveal delay={0.2} className="absolute right-0 -bottom-10 w-[52%]">
              <Photo image={img.experts} className="aspect-square rounded-[1.75rem] border-8 border-white shadow-lift" sizes="30vw" />
            </Reveal>
            <Reveal delay={0.35} className="absolute top-8 right-4 sm:right-8">
              <div className="rounded-2xl bg-pop-500 px-5 py-4 text-white shadow-glow">
                <div className="text-3xl font-extrabold tracking-tight">
                  <Counter to={82} suffix="%" />
                </div>
                <div className="text-xs font-semibold text-white/85">client success rate</div>
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

      {/* Stat band */}
      <section className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-ink text-white">
            <div className="grain absolute inset-0" />
            <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-pop-500/30 blur-3xl" />
            <div className="relative grid items-center gap-10 p-8 sm:p-14 lg:grid-cols-[1.1fr_1fr]">
              <div>
                <div className="text-7xl font-extrabold tracking-tighter sm:text-8xl">
                  <Counter to={82} suffix="%" className="bg-gradient-to-r from-pop-400 to-pop-500 bg-clip-text text-transparent" />
                </div>
                <p className="mt-4 max-w-md text-2xl leading-snug font-bold tracking-tight sm:text-3xl">
                  of clients who use our services become successful.{" "}
                  <span className="serif-accent text-white/70">Would you love to be one of them?</span>
                </p>
                <Link href="/contact#consultation" className="btn-pop group mt-8">
                  Yes, I&apos;m ready <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="group grid grid-cols-2 gap-4">
                <Photo image={img.newHome} className="h-full min-h-64 rounded-3xl" sizes="25vw" zoom />
                <div className="grid gap-4">
                  <Photo image={img.manSmile} className="aspect-square rounded-3xl" sizes="25vw" />
                  <Photo image={img.heroSmile} className="aspect-square rounded-3xl" sizes="25vw" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Services */}
      <section className="container-x py-24 sm:py-32">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="How our services work"
            title={
              <>
                Leave your credit building <span className="serif-accent text-brand-500">to the experts</span>
              </>
            }
            lede="One team, one plan, every piece of the puzzle — from cleaning up your reports to building the credit that gets you approved."
          />
          <Reveal>
            <Link href="/services" className="btn-ghost group shrink-0">
              All services <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </Link>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <StaggerItem key={s.slug}>
              <Link
                href={`/services#${s.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-soft transition duration-500 hover:-translate-y-2 hover:shadow-lift"
              >
                <div className="relative">
                  <Photo image={s.image} className="aspect-[4/3]" sizes="(min-width:1024px) 25vw, 50vw" zoom />
                  <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold backdrop-blur">
                    0{i + 1}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold tracking-tight">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.short}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                    Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <Steps />

      {/* Financial power */}
      <section className="container-x py-24 sm:py-32">
        <SectionHeading
          center
          eyebrow="What good credit unlocks"
          title={
            <>
              Giving you <span className="serif-accent text-pop-500">financial power</span>
            </>
          }
          lede="Your score affects almost every big move you make. Here's what opens up when your credit is working for you."
        />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {unlocks.map((u, i) => (
            <StaggerItem key={u.title} className={i % 2 ? "lg:mt-12" : ""}>
              <div className="group relative aspect-[3/4] overflow-hidden rounded-[1.75rem] shadow-soft">
                <Photo image={u.image} className="absolute! inset-0" sizes="(min-width:1024px) 25vw, 50vw" zoom />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h3 className="text-xl font-bold tracking-tight">{u.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75 transition-all duration-500 sm:max-h-0 sm:opacity-0 sm:group-hover:max-h-24 sm:group-hover:opacity-100">
                    {u.body}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Consultation */}
      <section id="consultation" className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
        <div className="grain absolute inset-0" />
        <div className="pointer-events-none absolute top-0 left-1/3 h-[30rem] w-[30rem] rounded-full bg-brand-500/30 blur-3xl" />
        <div className="container-x relative grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              dark
              eyebrow="Free credit building consultation"
              title={
                <>
                  Let&apos;s look at your credit <span className="serif-accent text-pop-400">together.</span>
                </>
              }
              lede="Tell us a little about where you are and where you want to be. A real specialist will reach out to schedule your free, no-pressure consultation."
            />
            <Reveal delay={0.1}>
              <ul className="mt-8 space-y-3">
                {["Review of your credit reports", "Honest assessment — no sales pressure", "A clear, personalized next-step plan"].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-white/85">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-mint-500/20 text-mint-500">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-10 flex items-center gap-4">
                <Photo image={img.phoneCall} className="h-16 w-16 rounded-2xl" sizes="64px" />
                <div>
                  <div className="text-sm text-white/60">Prefer to talk now?</div>
                  <a href={site.phoneHref} className="flex items-center gap-2 text-xl font-bold hover:text-pop-400">
                    <Phone className="h-5 w-5" /> {site.phone}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} y={40}>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-lift backdrop-blur-xl sm:p-9">
              <h3 className="text-2xl font-extrabold tracking-tight">Claim your free consultation</h3>
              <p className="mt-1 mb-7 text-sm text-white/60">Takes less than 60 seconds.</p>
              <LeadForm source="Home consultation" dark />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonials — shows automatically once real reviews are added in src/lib/site.ts */}
      {testimonials.length > 0 && (
        <section className="container-x py-24 sm:py-32">
          <SectionHeading center eyebrow="Client feedback" title="Our clients say it best" />
          <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <StaggerItem key={t.name} className="card p-8">
                <Quote className="h-8 w-8 text-pop-500" />
                <p className="mt-5 leading-relaxed">{t.quote}</p>
                <div className="mt-6 font-bold">{t.name}</div>
                {t.detail && <div className="text-sm text-muted">{t.detail}</div>}
              </StaggerItem>
            ))}
          </Stagger>
        </section>
      )}

      {/* FAQ */}
      <section className="container-x py-24 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
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
            <Reveal delay={0.1}>
              <Photo image={img.handshake} className="mt-10 hidden aspect-[5/4] rounded-[2rem] shadow-soft lg:block" parallax={30} />
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <FAQ />
          </Reveal>
        </div>
      </section>

      <CTABanner image={img.familyHug} />
    </>
  );
}
