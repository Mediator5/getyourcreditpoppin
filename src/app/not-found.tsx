import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <div className="text-8xl font-extrabold tracking-tighter text-brand-500">404</div>
      <h1 className="mt-4 text-3xl font-extrabold tracking-tight">This page isn&apos;t poppin&apos;.</h1>
      <p className="lede mt-3">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <Link href="/" className="btn-pop mt-8">
        <ArrowLeft className="h-4 w-4" /> Back home
      </Link>
    </section>
  );
}
