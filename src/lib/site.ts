// Central place for business info. Update once here and it changes site-wide.

export const site = {
  name: "Get Your Credit Poppin",
  shortName: "Credit Poppin",
  tagline: "Poor credit? No problem. Let's get it poppin'.",
  description:
    "Oklahoma City credit repair and credit building experts. We challenge inaccurate negative items, build positive credit, and coach you toward the home, car and life you want. Book a free consultation.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://getyourcreditpoppin.com",
  phone: "405.239.8853",
  phoneHref: "tel:+14052398853",
  email: "getyourcredipoppin@gmail.com",
  address: {
    line1: "3030 NW Expressway, Suite 535",
    city: "Oklahoma City",
    state: "OK",
    zip: "73112",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=3030+NW+Expressway+Suite+535+Oklahoma+City+OK+73112",
  mapsEmbed:
    "https://maps.google.com/maps?q=3030%20NW%20Expressway%2C%20Suite%20535%2C%20Oklahoma%20City%2C%20OK%2073112&z=15&output=embed",
  hours: "Mon – Fri, 9am – 6pm CT",
};

export const fullAddress = `${site.address.line1}, ${site.address.city}, ${site.address.state} ${site.address.zip}`;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const goals = [
  "Remove negative items",
  "Buy a home",
  "Buy or finance a car",
  "Build credit from scratch",
  "Lower my interest rates",
  "Business funding",
  "Something else",
];

/**
 * Client reviews. The section on the home page only shows when this list has
 * entries. Paste real client feedback here (with their permission) — e.g.
 * { quote: "…", name: "Tasha R.", detail: "Bought her first home" }
 */
export const testimonials: { quote: string; name: string; detail?: string }[] = [];
