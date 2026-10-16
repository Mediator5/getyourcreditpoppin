import Link from "next/link";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { fullAddress, nav, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="grain pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-brand-500/25 blur-3xl" />

      <div className="container-x relative pt-20 pb-28 md:pb-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo dark />
            <p className="mt-6 max-w-sm leading-relaxed text-white/60">
              Oklahoma City&apos;s credit repair and credit building partner. We fight for accurate reports and
              help you build the kind of credit that opens doors.
            </p>
            <Link href="/contact#consultation" className="btn-pop mt-8">
              Book a Free Consultation <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold tracking-wider text-white/40 uppercase">Explore</h3>
            <ul className="mt-5 space-y-3">
              {nav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/75 transition hover:text-pop-400">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold tracking-wider text-white/40 uppercase">Services</h3>
            <ul className="mt-5 space-y-3 text-white/75">
              {["Credit Repair & Disputes", "Credit Building", "Debt & Budget Coaching", "Credit Monitoring", "Home & Auto Readiness"].map(
                (s) => (
                  <li key={s}>
                    <Link href="/services" className="transition hover:text-pop-400">
                      {s}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold tracking-wider text-white/40 uppercase">Get in touch</h3>
            <ul className="mt-5 space-y-4 text-white/75">
              <li>
                <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex gap-3 transition hover:text-white">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-pop-400" />
                  {fullAddress}
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className="flex gap-3 transition hover:text-white">
                  <Phone className="h-5 w-5 shrink-0 text-pop-400" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex gap-3 transition hover:text-white">
                  <Mail className="h-5 w-5 shrink-0 text-pop-400" />
                  {site.email.replace("@", "@\u200B")}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="h-5 w-5 shrink-0 text-pop-400" />
                {site.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-xs leading-relaxed text-white/40">
          <p>
            Disclaimer: Results vary from person to person and are not guaranteed. {site.name} does not promise
            any specific score increase or the removal of accurate, timely and verifiable information. You have the
            right to dispute inaccurate information on your credit report yourself, free of charge, by contacting the
            credit bureaus directly.
          </p>
          <div className="mt-6 flex flex-col justify-between gap-3 sm:flex-row">
            <p>
              © {year} {site.name}. All rights reserved.
            </p>
            <p>Proudly serving Oklahoma City &amp; clients nationwide.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
