"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, BadgeCheck, Clock, Headphones, Phone, ShieldCheck, Star } from "lucide-react";
import { img } from "@/lib/images";
import { site } from "@/lib/site";
import { ScoreCard } from "./ScoreCard";

const ease = [0.22, 1, 0.36, 1] as const;

const words = ["Poor", "credit?", "No", "problem."];

export function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section ref={ref} className="relative overflow-hidden pt-6 pb-20 sm:pt-12 lg:pb-28">
      {/* ambient blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 h-[34rem] w-[34rem] rounded-full bg-brand-200/60 blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-40 right-[-12rem] h-[30rem] w-[30rem] rounded-full bg-pop-100 blur-3xl"
        animate={{ scale: [1.05, 1, 1.05] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        {/* Copy */}
        <div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}>
            <span className="eyebrow">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pop-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-pop-500" />
              </span>
              Oklahoma City&apos;s credit repair experts
            </span>
          </motion.div>

          <h1 className="display-title mt-6 lg:text-[4.5rem]">
            <span className="block">
              {words.map((w, i) => (
                <motion.span
                  key={w}
                  className="mr-[0.25em] inline-block"
                  initial={{ opacity: 0, y: 40, rotate: 4 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ duration: 0.8, ease, delay: 0.1 + i * 0.08 }}
                >
                  {w}
                </motion.span>
              ))}
            </span>
            <motion.span
              className="relative mt-1 inline-block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.45 }}
            >
              Let&apos;s get it <span className="serif-accent text-pop-500">poppin&apos;!</span>
              <svg viewBox="0 0 300 20" className="absolute -bottom-3 left-0 w-full" aria-hidden>
                <motion.path
                  d="M3 14 C 60 4, 140 4, 297 12"
                  fill="none"
                  stroke="#ff6b1a"
                  strokeWidth="5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 1.1, ease }}
                />
              </svg>
            </motion.span>
          </h1>

          <motion.p
            className="lede mt-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.6 }}
          >
            We challenge the inaccurate negatives dragging your score down, help you build strong positive credit and
            coach you all the way to the home, car and life you&apos;ve been working for.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.72 }}
          >
            <Link href="/contact#consultation" className="btn-pop group px-7! py-4! text-base">
              Get My Free Consultation <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a href={site.phoneHref} className="btn-ghost px-7! py-4! text-base">
              <Phone className="h-4 w-4" /> {site.phone}
            </a>
          </motion.div>

          <motion.ul
            className="mt-10 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3"
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.85 } } }}
          >
            {[
              { icon: ShieldCheck, t: "Trusted Advisors" },
              { icon: BadgeCheck, t: "Expert Professionals" },
              { icon: Headphones, t: "24/7 Support" },
            ].map(({ icon: Icon, t }) => (
              <motion.li
                key={t}
                variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                className="flex items-center gap-2.5 text-sm font-semibold"
              >
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-white text-brand-500 shadow-soft">
                  <Icon className="h-4.5 w-4.5" />
                </span>
                {t}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Visual */}
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.1, ease, delay: 0.15 }}
            className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-lift sm:aspect-[5/5.4]"
          >
            <motion.div style={{ y: imgY }} className="img-fallback absolute -inset-y-16 inset-x-0">
              <Image
                src={`${img.heroWoman.src}?auto=format&fit=crop&w=1400&q=80`}
                alt={img.heroWoman.alt}
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-[60%_center]"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
            <div className="absolute right-5 bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-white/15 p-3 text-white backdrop-blur-md">
              <div className="flex -space-x-2">
                {[img.heroSmile, img.manSmile, img.couple].map((p) => (
                  <span key={p.src} className="img-fallback relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-white/80">
                    <Image src={`${p.src}?auto=format&fit=crop&w=120&h=120&q=70`} alt="" fill sizes="36px" className="object-cover" />
                  </span>
                ))}
              </div>
              <div className="text-sm leading-tight">
                <div className="flex items-center gap-0.5 text-pop-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-semibold">82% of our clients succeed</span>
              </div>
            </div>
          </motion.div>

          {/* Floating score card */}
          <motion.div
            style={{ y: cardY }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.6 }}
            className="absolute top-10 -left-4 sm:-left-12"
          >
            <div className="animate-float motion-reduce:animate-none">
              <ScoreCard />
            </div>
          </motion.div>

          {/* Floating chip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease, delay: 1.2 }}
            className="absolute top-1/2 -right-3 hidden items-center gap-3 rounded-2xl bg-ink px-4 py-3 text-white shadow-lift sm:-right-8 sm:flex"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-pop-500">
              <Clock className="h-4.5 w-4.5" />
            </span>
            <span className="text-sm leading-tight">
              <span className="block font-bold">Free consultation</span>
              <span className="text-white/60">No obligation</span>
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
