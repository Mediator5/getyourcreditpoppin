import { CalendarCheck, ClipboardList, Rocket } from "lucide-react";
import { steps } from "@/lib/content";
import { GrowLine, Stagger, StaggerItem } from "./motion";
import { SectionHeading } from "./ui";

const icons = [CalendarCheck, ClipboardList, Rocket];

export function Steps() {
  return (
    <section className="relative overflow-hidden bg-brand-600 py-24 text-white sm:py-32">
      <div className="grain absolute inset-0" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[30rem] w-[60rem] -translate-x-1/2 rounded-full bg-brand-400/40 blur-3xl" />
      <div className="container-x relative">
        <SectionHeading
          center
          dark
          eyebrow="Simple process"
          title={
            <>
              Credit building in <span className="serif-accent text-pop-400">3 easy steps</span>
            </>
          }
          lede="No confusing jargon and no guesswork. Here's exactly how we work together."
        />

        <div className="relative mt-16">
          <GrowLine className="absolute top-10 right-[16%] left-[16%] hidden h-px bg-gradient-to-r from-pop-400 via-white/60 to-pop-400 md:block" />
          <Stagger className="grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => {
              const Icon = icons[i];
              return (
                <StaggerItem key={s.n} className="relative text-center">
                  <div className="relative mx-auto grid h-20 w-20 place-items-center rounded-3xl bg-white text-brand-600 shadow-lift">
                    <Icon className="h-8 w-8" />
                    <span className="absolute -top-2 -right-2 grid h-8 w-8 place-items-center rounded-full bg-pop-500 text-xs font-bold text-ink">
                      {s.n}
                    </span>
                  </div>
                  <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur transition duration-500 hover:-translate-y-1 hover:bg-white/10">
                    <h3 className="text-xl font-bold tracking-tight">{s.title}</h3>
                    <p className="mt-3 leading-relaxed text-white/70">{s.body}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
