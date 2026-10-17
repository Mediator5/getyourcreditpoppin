import Link from "next/link";

/** The official Get Your Credit Poppin mark (vector, transparent background). */
export function LogoMark({ className = "h-11 w-11" }: { className?: string }) {
  return <img src="/brand/logo-mark.svg" alt="" aria-hidden="true" className={className} width={44} height={44} />;
}

/** Mark + wordmark, laid out like the official logo ("GET YOUR" over "CREDIT POPPIN"). */
export function Logo({ dark = false, size = "md" }: { dark?: boolean; size?: "md" | "lg" }) {
  const lg = size === "lg";
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label="Get Your Credit Poppin — home">
      <LogoMark
        className={`${lg ? "h-14 w-14" : "h-11 w-11"} shrink-0 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-[-4deg]`}
      />
      <span className="leading-[1.05] font-extrabold tracking-[0.02em] uppercase">
        <span className={`block ${lg ? "text-base" : "text-[0.8rem]"} ${dark ? "text-white" : "text-ink"}`}>Get Your</span>
        <span className={`block ${lg ? "text-xl" : "text-[1.05rem]"}`}>
          <span className={dark ? "text-brand-400" : "text-brand-700"}>Credit</span>{" "}
          <span className="text-pop-500">Poppin</span>
        </span>
      </span>
    </Link>
  );
}
