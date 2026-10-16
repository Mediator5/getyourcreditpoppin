"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Clock, MapPin, Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  // Every page opens on a dark hero, so the header starts dark and turns light on scroll.
  const dark = !scrolled && !open;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      {/* Utility bar */}
      <div className="hidden border-b border-white/10 bg-ink text-white/75 md:block">
        <div className="container-x flex h-10 items-center justify-between text-[0.8rem]">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-pop-400" /> {site.address.line1}, {site.address.city}, {site.address.state}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-pop-400" /> {site.hours}
            </span>
          </div>
          <a href={site.phoneHref} className="flex items-center gap-2 font-semibold text-white hover:text-pop-400">
            <Phone className="h-3.5 w-3.5" /> {site.phone}
          </a>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          dark ? "bg-ink" : "border-b border-line/80 bg-white/85 shadow-soft backdrop-blur-xl"
        }`}
      >
        <div className={`container-x flex items-center justify-between transition-all duration-500 ${scrolled ? "h-16" : "h-20"}`}>
          <Logo dark={dark} />

          <nav className={`hidden items-center gap-1 rounded-full border p-1 backdrop-blur transition-colors duration-500 lg:flex ${
              dark ? "border-white/10 bg-white/5" : "border-line bg-white/70"
            }`} aria-label="Main">
            {nav.map((l) => {
              const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`relative rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                    active ? (dark ? "text-ink" : "text-white") : dark ? "text-white/70 hover:text-white" : "text-ink/70 hover:text-ink"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className={`absolute inset-0 -z-10 rounded-full ${dark ? "bg-white" : "bg-ink"}`}
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a href={site.phoneHref} className={`hidden items-center gap-2 px-3 text-sm font-semibold xl:flex ${dark ? "text-white" : "text-ink"}`}>
              <span className={`grid h-9 w-9 place-items-center rounded-full ${dark ? "bg-white/10 text-pop-400" : "bg-brand-50 text-brand-600"}`}>
                <Phone className="h-4 w-4" />
              </span>
              {site.phone}
            </a>
            <span className="hidden sm:block">
              <Link href="/contact#consultation" className="btn-pop px-5! py-2.5! text-sm">
                Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </span>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className={`grid h-11 w-11 place-items-center rounded-full border lg:hidden ${
                dark ? "border-white/15 bg-white/5 text-white" : "border-line bg-white text-ink"
              }`}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100dvh" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-line bg-white lg:hidden"
            >
              <div className="container-x flex flex-col gap-1 py-6">
                {nav.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.06 }}
                  >
                    <Link
                      href={l.href}
                      className="flex items-center justify-between rounded-2xl px-4 py-4 text-2xl font-bold tracking-tight hover:bg-cloud"
                    >
                      {l.label} <ArrowRight className="h-5 w-5 text-muted" />
                    </Link>
                  </motion.div>
                ))}
                <div className="mt-6 grid gap-3">
                  <Link href="/contact#consultation" className="btn-pop w-full">
                    Book a Free Consultation
                  </Link>
                  <a href={site.phoneHref} className="btn-ghost w-full">
                    <Phone className="h-4 w-4" /> Call {site.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
