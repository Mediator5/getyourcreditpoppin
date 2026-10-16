"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, CircleCheck, LoaderCircle, Lock } from "lucide-react";
import { goals, site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

export function LeadForm({
  source = "Website",
  full = false,
  dark = false,
  cta = "Get My Free Consultation",
}: {
  source?: string;
  full?: boolean;
  dark?: boolean;
  cta?: string;
}) {
  const uid = source.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, consent: data.consent === "on", source }),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(json.error || "Something went wrong. Please try again.");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  const label = `mb-1.5 block text-xs font-semibold tracking-wide uppercase ${dark ? "text-white/60" : "text-muted"}`;
  const field = dark ? "field border-white/10! bg-white/5! text-white! placeholder:text-white/40!" : "field";

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === "sent" ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center py-10 text-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.1 }}
              className="grid h-20 w-20 place-items-center rounded-full bg-mint-500/15 text-mint-500"
            >
              <CircleCheck className="h-10 w-10" />
            </motion.div>
            <h3 className={`mt-6 text-2xl font-extrabold tracking-tight ${dark ? "text-white" : ""}`}>You&apos;re all set!</h3>
            <p className={`mt-2 max-w-sm ${dark ? "text-white/70" : "text-muted"}`}>
              Thanks for reaching out. A credit specialist will contact you shortly. Need us sooner? Call{" "}
              <a href={site.phoneHref} className="font-semibold text-pop-500 underline-offset-4 hover:underline">
                {site.phone}
              </a>
              .
            </p>
            <button type="button" onClick={() => setStatus("idle")} className="mt-6 text-sm font-semibold text-brand-500 hover:underline">
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={onSubmit} initial={{ opacity: 1 }} exit={{ opacity: 0, y: -10 }} className="grid gap-4">
            {/* Honeypot — hidden from humans, catches bots */}
            <div className="absolute left-[-9999px]" aria-hidden="true">
              <label>
                Company <input type="text" name="company" tabIndex={-1} autoComplete="off" />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor={`${uid}-first`} className={label}>
                  First name
                </label>
                <input id={`${uid}-first`} name="firstName" required autoComplete="given-name" className={field} placeholder="Jordan" />
              </div>
              <div>
                <label htmlFor={`${uid}-last`} className={label}>
                  Last name
                </label>
                <input id={`${uid}-last`} name="lastName" required autoComplete="family-name" className={field} placeholder="Smith" />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor={`${uid}-email`} className={label}>
                  Email
                </label>
                <input id={`${uid}-email`} name="email" type="email" required autoComplete="email" className={field} placeholder="you@email.com" />
              </div>
              <div>
                <label htmlFor={`${uid}-phone`} className={label}>
                  Phone
                </label>
                <input id={`${uid}-phone`} name="phone" type="tel" required autoComplete="tel" className={field} placeholder="(405) 000-0000" />
              </div>
            </div>

            <div>
              <label htmlFor={`${uid}-goal`} className={label}>
                What&apos;s your #1 goal?
              </label>
              <select id={`${uid}-goal`} name="goal" required defaultValue="" className={`${field} appearance-none`}>
                <option value="" disabled>
                  Choose one…
                </option>
                {goals.map((g) => (
                  <option key={g} value={g} className="text-ink">
                    {g}
                  </option>
                ))}
              </select>
            </div>

            {full && (
              <div>
                <label htmlFor={`${uid}-msg`} className={label}>
                  Tell us a little about your situation <span className="normal-case opacity-70">(optional)</span>
                </label>
                <textarea
                  id={`${uid}-msg`}
                  name="message"
                  rows={4}
                  className={`${field} resize-none`}
                  placeholder="e.g. I have two collections and a late payment I'd like to address…"
                />
              </div>
            )}

            <label className={`flex items-start gap-3 text-xs leading-relaxed ${dark ? "text-white/60" : "text-muted"}`}>
              <input type="checkbox" name="consent" required className="mt-0.5 h-4 w-4 shrink-0 accent-pop-500" />
              I agree to be contacted by {site.name} by phone, text or email about my inquiry. Msg &amp; data rates may
              apply. Reply STOP to opt out.
            </label>

            {status === "error" && (
              <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                {error}
              </p>
            )}

            <button type="submit" disabled={status === "sending"} className="btn-pop group w-full py-4! text-base disabled:opacity-70">
              {status === "sending" ? (
                <>
                  <LoaderCircle className="h-5 w-5 animate-spin" /> Sending…
                </>
              ) : (
                <>
                  {cta} <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>

            <p className={`flex items-center justify-center gap-2 text-xs ${dark ? "text-white/50" : "text-muted"}`}>
              <Lock className="h-3.5 w-3.5" /> 100% free &amp; confidential. No obligation.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
