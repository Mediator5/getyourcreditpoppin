import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import type { Img } from "@/lib/images";
import { negativeItems } from "@/lib/content";
import { site } from "@/lib/site";
import { Parallax, Reveal } from "./motion";

export function SectionHeading({
  eyebrow,
  title,
  lede,
  center = false,
  dark = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <Reveal>
          <span className={dark ? "eyebrow-dark" : "eyebrow"}>
            <Sparkles className="h-3.5 w-3.5" /> {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className={`section-title mt-5 ${dark ? "text-white" : ""}`}>{title}</h2>
      </Reveal>
      {lede && (
        <Reveal delay={0.1}>
          <p className={`lede mt-5 ${dark ? "text-white/65!" : ""}`}>{lede}</p>
        </Reveal>
      )}
    </div>
  );
}

/** Unsplash photo with graceful fallback, rounded frame and optional parallax. */
export function Photo({
  image,
  className = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  parallax = 0,
  zoom = false,
}: {
  image: Img;
  className?: string;
  sizes?: string;
  priority?: boolean;
  parallax?: number;
  zoom?: boolean;
}) {
  const pic = (
    <Image
      src={`${image.src}?auto=format&fit=crop&w=1600&q=80`}
      alt={image.alt}
      fill
      sizes={sizes}
      priority={priority}
      className={`object-cover ${parallax ? "scale-[1.18]" : ""} ${
        zoom ? "transition-transform duration-[1.2s] ease-out group-hover:scale-110" : ""
      }`}
    />
  );
  return (
    <div className={`img-fallback relative overflow-hidden ${className}`}>
      {parallax ? (
        <Parallax className="absolute inset-0" offset={parallax}>
          {pic}
        </Parallax>
      ) : (
        pic
      )}
    </div>
  );
}

export function Marquee() {
  const items = [...negativeItems, ...negativeItems];
  return (
    <div className="relative overflow-hidden border-y border-line bg-cloud py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-cloud to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-cloud to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-10 motion-reduce:animate-none">
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-10 text-lg font-bold tracking-tight whitespace-nowrap text-ink/70">
            {t}
            <span className="h-2 w-2 rounded-full bg-pop-500" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function CTABanner({
  title = (
    <>
      Ready to get your credit <span className="serif-accent text-pop-400">poppin&apos;?</span>
    </>
  ),
  body = "Book your free, no-obligation consultation today. We'll review your reports with you and map out your next moves.",
  image,
}: {
  title?: ReactNode;
  body?: string;
  image: Img;
}) {
  return (
    <section className="container-x py-20 sm:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-ink px-6 py-14 sm:px-14 sm:py-20">
          <Photo image={image} className="absolute! inset-0 opacity-30" sizes="100vw" parallax={50} />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40" />
          <div className="grain absolute inset-0" />
          <div className="relative max-w-2xl">
            <h2 className="section-title text-white">{title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">{body}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact#consultation" className="btn-pop group">
                Book My Free Consultation <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href={site.phoneHref} className="btn-ghost-dark">
                <Phone className="h-4 w-4" /> {site.phone}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
  image,
}: {
  eyebrow: string;
  title: ReactNode;
  lede: string;
  image: Img;
}) {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24">
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-brand-200/50 blur-3xl" />
      <div className="pointer-events-none absolute top-20 -right-20 h-72 w-72 rounded-full bg-pop-100 blur-3xl" />
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5" /> {eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="display-title mt-6">{title}</h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede mt-6 max-w-xl">{lede}</p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact#consultation" className="btn-pop group">
                Free Consultation <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href={site.phoneHref} className="btn-ghost">
                <Phone className="h-4 w-4" /> {site.phone}
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.1} x={30} y={0}>
          <Photo image={image} priority className="aspect-[4/3] rounded-[2rem] shadow-lift" parallax={30} />
        </Reveal>
      </div>
    </section>
  );
}
