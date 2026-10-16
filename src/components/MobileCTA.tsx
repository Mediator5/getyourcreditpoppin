"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CalendarCheck, Phone } from "lucide-react";
import { site } from "@/lib/site";

/** Sticky call / book bar on phones — appears after the visitor scrolls a bit. */
export function MobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/90 p-3 backdrop-blur-xl md:hidden"
          style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
        >
          <div className="grid grid-cols-2 gap-2">
            <a href={site.phoneHref} className="btn-ghost py-3!">
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <Link href="/contact#consultation" className="btn-pop py-3!">
              <CalendarCheck className="h-4 w-4" /> Free Consult
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
