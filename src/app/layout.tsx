import type { Metadata, Viewport } from "next";
import "@fontsource-variable/plus-jakarta-sans";
import "@fontsource/instrument-serif/400-italic.css";
import "lenis/dist/lenis.css";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCTA } from "@/components/MobileCTA";
import { MotionProvider } from "@/components/motion";
import { SmoothScroll } from "@/components/SmoothScroll";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Credit Repair & Credit Building in Oklahoma City`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "credit repair Oklahoma City",
    "credit building",
    "fix my credit",
    "credit score help",
    "remove collections",
    "Get Your Credit Poppin",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
    images: [{ url: "https://images.unsplash.com/photo-1602780765205-532dc7f6ded3?w=1200&h=630&fit=crop", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#0a1023",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: site.name,
  url: site.url,
  telephone: "+1-405-239-8853",
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "US",
  },
  areaServed: "US",
  description: site.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <SmoothScroll />
        <MotionProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <MobileCTA />
        </MotionProvider>
      </body>
    </html>
  );
}
