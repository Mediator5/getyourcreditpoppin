"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

function ServiceBlock({ index, onActive }: { index: number; onActive: (i: number) => void }) {
  const s = services[index];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" });
  useEffect(() => {
    if (inView) onActive(index);
  }, [inView, index, onActive]);

  return (
    <div ref={ref} className="flex min-h-[70vh] flex-col justify-center py-10 lg:py-0">
      {/* Mobile image */}
      <div className="img-fallback relative mb-8 aspect-[4/3] overflow-hidden rounded-[1.75rem] lg:hidden">
        <Image src={`${s.image.src}?auto=format&fit=crop&w=1000&q=80`} alt={s.image.alt} fill sizes="100vw" className="object-cover" />
      </div>
      <motion.div
        animate={{ opacity: inView ? 1 : 0.35 }}
        transition={{ duration: 0.5 }}
        className="max-lg:opacity-100!"
      >
        <span className="font-serif text-6xl text-pop-600 italic">0{index + 1}</span>
        <h3 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">{s.title}</h3>
        <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted">{s.long}</p>
        <ul className="mt-7 grid max-w-lg gap-3 sm:grid-cols-2">
          {s.points.map((p) => (
            <li key={p} className="flex items-center gap-2.5 text-sm font-semibold">
              <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-500 text-white">
                <Check className="h-3 w-3" />
              </span>
              {p}
            </li>
          ))}
        </ul>
        <Link href={`/services#${s.slug}`} className="group mt-8 inline-flex items-center gap-2 font-semibold text-brand-600">
          Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </div>
  );
}

/** Services list on the right; a pinned photo on the left swaps as each one scrolls into focus. */
export function StickyServices() {
  const [active, setActive] = useState(0);
  const s = services[active];

  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
      <div className="hidden lg:block">
        <div className="sticky top-28 h-[calc(100vh-9rem)] max-h-[720px]">
          <div className="img-fallback relative h-full overflow-hidden rounded-[2.25rem] shadow-lift">
            <AnimatePresence initial={false}>
              <motion.div
                key={s.slug}
                className="absolute inset-0"
                initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease }}
              >
                <motion.div className="absolute inset-0" initial={{ scale: 1.2 }} animate={{ scale: 1 }} transition={{ duration: 1.4, ease }}>
                  <Image
                    src={`${s.image.src}?auto=format&fit=crop&w=1400&q=85`}
                    alt={s.image.alt}
                    fill
                    sizes="50vw"
                    className="object-cover"
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            <div className="absolute right-6 bottom-6 left-6 flex items-end justify-between text-white">
              <AnimatePresence mode="wait">
                <motion.span
                  key={s.slug}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                  className="text-xl font-bold tracking-tight"
                >
                  {s.title}
                </motion.span>
              </AnimatePresence>
              <div className="flex gap-1.5">
                {services.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-500 ${i === active ? "w-8 bg-pop-400" : "w-1.5 bg-white/50"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {services.map((_, i) => (
          <ServiceBlock key={i} index={i} onActive={setActive} />
        ))}
      </div>
    </div>
  );
}
