import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { Photo } from "@/components/ui";
import { ClipReveal, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { img } from "@/lib/images";
import { fullAddress, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us — Free Credit Consultation",
  description: `Book a free credit consultation with ${site.name}. Visit us at ${fullAddress}, call ${site.phone} or send us a message.`,
};

export default function ContactPage() {
  const cards = [
    { icon: Phone, label: "Call us", value: site.phone, href: site.phoneHref },
    { icon: Mail, label: "Email us", value: site.email.replace("@", "@\u200B"), href: `mailto:${site.email}` },
    { icon: MapPin, label: "Visit us", value: fullAddress, href: site.mapsUrl },
    { icon: Clock, label: "Office hours", value: site.hours },
  ];

  return (
    <>
      <section id="consultation" className="relative scroll-mt-20 overflow-hidden bg-ink pt-10 pb-24 text-white sm:pt-16">
        <div className="grain pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-brand-500/30 blur-[120px]" />
        <div className="pointer-events-none absolute -right-32 bottom-[-10rem] h-[28rem] w-[28rem] rounded-full bg-pop-500/20 blur-[120px]" />

        <div className="container-x relative grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Reveal>
              <span className="eyebrow-dark">
                <Sparkles className="h-3.5 w-3.5" /> Free consultation
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="display-title mt-6">
                Let&apos;s get your credit <span className="serif-accent text-pop-400">poppin&apos;.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
                Fill out the form and a credit specialist will reach out to schedule your free, no-obligation
                consultation. Prefer to talk now? Give us a call.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="relative mt-10 hidden lg:block">
                <ClipReveal delay={0.2} className="aspect-[5/4] overflow-hidden rounded-[2rem] shadow-lift">
                  <Photo image={img.phoneStudio} className="h-full" />
                </ClipReveal>
                <div className="absolute -right-6 -bottom-6 rounded-2xl bg-white p-4 text-ink shadow-lift">
                  <div className="text-xs font-semibold text-muted uppercase">Your consultation is</div>
                  <div className="text-lg font-extrabold">Free &amp; confidential</div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} y={40}>
            <div className="card p-6 text-ink shadow-lift sm:p-10">
              <h2 className="text-2xl font-extrabold tracking-tight">Book your free consultation</h2>
              <p className="mt-1 mb-8 text-sm text-muted">All fields except the message are required.</p>
              <LeadForm source="Contact page" full cta="Send My Request" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-24">
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, label, value, href }) => {
            const inner = (
              <>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-500 group-hover:bg-pop-500 group-hover:text-ink">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="mt-5 text-xs font-semibold tracking-wide text-muted uppercase">{label}</div>
                <div className="mt-1 font-bold break-words">{value}</div>
              </>
            );
            return (
              <StaggerItem key={label} className="h-full">
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="card group block h-full p-6 transition duration-500 hover:-translate-y-1 hover:shadow-lift"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="card group h-full p-6">{inner}</div>
                )}
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal delay={0.1}>
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-line shadow-soft">
            <iframe
              title={`Map to ${site.name}`}
              src={site.mapsEmbed}
              className="h-[420px] w-full grayscale-[30%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
