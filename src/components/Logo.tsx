import Link from "next/link";

export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="lm-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2f6bff" />
          <stop offset="1" stopColor="#173eb3" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="12" fill="url(#lm-g)" />
      <path
        d="M9 27.5l7.2-7.2 4.6 4.6L31 14.7"
        fill="none"
        stroke="#fff"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M24.5 14h7v7" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="31.5" cy="8.5" r="3" fill="#ff6b1a" />
    </svg>
  );
}

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label="Get Your Credit Poppin — home">
      <LogoMark className="h-10 w-10 transition-transform duration-500 group-hover:rotate-[-6deg] group-hover:scale-105" />
      <span className={`leading-none ${dark ? "text-white" : "text-ink"}`}>
        <span className="block text-[0.7rem] font-semibold tracking-[0.18em] uppercase opacity-60">Get Your Credit</span>
        <span className="block text-xl font-extrabold tracking-tight">
          Poppin<span className="text-pop-500">!</span>
        </span>
      </span>
    </Link>
  );
}
