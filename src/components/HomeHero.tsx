"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";
import { ArrowRight, BadgeCheck, Headphones, Phone, ShieldCheck, Star } from "lucide-react";
import { img, type Img } from "@/lib/images";
import { site } from "@/lib/site";
import { ScoreCard } from "./ScoreCard";

const ease = [0.22, 1, 0.36, 1] as const;

function Line({ children, delay }: { children: ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1, ease, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function Tile({ image, className, delay, sizes }: { image: Img; className: string; delay: number; sizes: string }) {
  return (
    <motion.div
      className={`img-fallback relative overflow-hidden rounded-[1.75rem] ${className}`}
      initial={{ clipPath: "inset(100% 0% 0% 0% round 28px)" }}
      animate={{ clipPath: "inset(0% 0% 0% 0% round 28px)" }}
      transition={{ duration: 1.3, ease, delay }}
    >
      <motion.div className="absolute inset-0" initial={{ scale: 1.3 }} animate={{ scale: 1 }} transition={{ duration: 1.8, ease, delay }}>
        <Image
          src={`${image.src}?auto=format&fit=crop&w=1400&q=85`}
          alt={image.alt}
          fill
          priority
          sizes={sizes}
          className="object-cover"
        />
      </motion.div>
    </motion.div>
  );
}

export function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-ink pt-8 pb-20 text-white sm:pt-14 lg:pb-28">
      {/* Atmosphere */}
      <div className="grain pointer-events-none absolute inset-0" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-48 -left-40 h-[38rem] w-[38rem] rounded-full bg-brand-500/35 blur-[120px]"
        animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[-10rem] bottom-[-14rem] h-[34rem] w-[34rem] rounded-full bg-pop-500/25 blur-[120px]"
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
        {/* Copy */}
        <motion.div style={{ opacity: fade }}>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}>
            <span className="eyebrow-dark">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pop-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-pop-400" />
              </span>
              Oklahoma City&apos;s credit repair experts
            </span>
          </motion.div>

          <h1 className="mt-7 text-[2.75rem] leading-[1.02] font-extrabold tracking-[-0.04em] sm:text-6xl lg:text-[4.6rem]">
            <Line delay={0.1}>Poor credit?</Line>
            <Line delay={0.2}>No problem.</Line>
            <Line delay={0.3}>
              Let&apos;s get it <span className="serif-accent pr-2 text-pop-400">poppin&apos;!</span>
            </Line>
          </h1>

          <motion.p
            className="mt-7 max-w-xl text-lg leading-relaxed text-white/70"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.55 }}
          >
            We challenge the inaccurate negatives dragging your score down, help you build strong positive credit and
            coach you all the way to the home, car and life you&apos;ve been working for.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.68 }}
          >
            <Link href="/contact#consultation" className="btn-pop group px-7! py-4! text-base">
              Get My Free Consultation <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a href={site.phoneHref} className="btn-ghost-dark px-7! py-4! text-base">
              <Phone className="h-4 w-4" /> {site.phone}
            </a>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.85 }}
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[img.portraitA, img.manSmile, img.portraitB, img.glasses].map((p) => (
                  <span key={p.src} className="img-fallback relative h-11 w-11 overflow-hidden rounded-full ring-2 ring-ink">
                    <Image src={`${p.src}?auto=format&fit=crop&w=120&h=120&q=70&crop=faces`} alt="" fill sizes="44px" className="object-cover" />
                  </span>
                ))}
              </div>
              <div className="text-sm leading-tight">
                <div className="flex items-center gap-0.5 text-pop-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-white/90">82% of our clients succeed</span>
              </div>
            </div>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-white/70">
              {[
                { icon: ShieldCheck, t: "Trusted advisors" },
                { icon: BadgeCheck, t: "Expert team" },
                { icon: Headphones, t: "24/7 support" },
              ].map(({ icon: Icon, t }) => (
                <li key={t} className="flex items-center gap-1.5">
                  <Icon className="h-4 w-4 text-pop-400" /> {t}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bento of photos */}
        <div className="relative">
          <div className="grid h-[440px] grid-cols-[1.25fr_1fr] grid-rows-2 gap-3 sm:h-[560px] sm:gap-4 lg:h-[620px]">
            <motion.div style={{ y: y2 }} className="row-span-2">
              <Tile image={img.heroLaptop} className="h-full" delay={0.25} sizes="(min-width:1024px) 30vw, 55vw" />
            </motion.div>
            <motion.div style={{ y: y1 }}>
              <Tile image={img.heroCouple} className="h-full" delay={0.45} sizes="(min-width:1024px) 22vw, 45vw" />
            </motion.div>
            <motion.div style={{ y: y1 }}>
              <Tile image={img.keysDoor} className="h-full" delay={0.6} sizes="(min-width:1024px) 22vw, 45vw" />
            </motion.div>
          </div>

          {/* Floating score card */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease, delay: 1 }}
            className="absolute -bottom-10 left-2 text-ink sm:-bottom-8 sm:-left-10"
          >
            <div className="origin-bottom-left scale-[0.78] animate-float motion-reduce:animate-none sm:scale-100">
              <ScoreCard />
            </div>
          </motion.div>

          {/* Floating chip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease, delay: 1.3 }}
            className="absolute top-6 right-3 hidden items-center gap-2.5 rounded-full bg-white py-2 pr-4 pl-2 text-ink shadow-lift sm:flex lg:-right-5"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-mint-500 text-white">
              <BadgeCheck className="h-4 w-4" />
            </span>
            <span className="text-sm font-bold">Free consultation</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
