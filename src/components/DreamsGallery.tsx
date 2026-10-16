import Image from "next/image";
import { dreams } from "@/lib/content";

/** Endless, slow-moving strip of real-life goals. Pauses on hover. */
export function DreamsGallery() {
  const items = [...dreams, ...dreams];
  return (
    <div className="group relative overflow-hidden py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-40" />
      <div className="flex w-max animate-marquee-slow gap-5 pr-5 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {items.map((d, i) => (
          <figure
            key={i}
            className={`img-fallback relative h-[340px] w-[250px] shrink-0 overflow-hidden rounded-[1.75rem] sm:h-[420px] sm:w-[300px] ${
              i % 2 ? "mt-10" : ""
            }`}
          >
            <Image
              src={`${d.image.src}?auto=format&fit=crop&w=700&h=980&q=80`}
              alt={d.image.alt}
              fill
              sizes="300px"
              className="object-cover transition-transform duration-[1.4s] ease-out hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-transparent" />
            <figcaption className="absolute right-5 bottom-5 left-5 text-white">
              <span className="text-[0.7rem] font-semibold tracking-[0.2em] text-pop-400 uppercase">The goal</span>
              <span className="mt-1 block text-2xl leading-tight font-extrabold tracking-tight">{d.label}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
