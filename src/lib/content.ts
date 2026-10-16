import { img } from "./images";

export const services = [
  {
    slug: "credit-repair",
    title: "Credit Repair & Disputes",
    short: "We audit all three bureau reports and challenge inaccurate, unverifiable and outdated items.",
    long: "We pull apart your Experian, Equifax and TransUnion reports line by line, then challenge anything inaccurate, incomplete, outdated or unverifiable — collections, late payments, charge-offs, repossessions, inquiries and more. Every round is tracked so you always know where things stand.",
    points: ["3-bureau report audit", "Custom dispute letters", "Creditor & collector follow-up", "Round-by-round progress updates"],
    image: img.documents,
  },
  {
    slug: "credit-building",
    title: "Credit Building",
    short: "Add positive history the right way so your score has something strong to grow on.",
    long: "Removing negatives is only half the story. We help you add the right mix of positive accounts — secured cards, credit-builder accounts and smart utilization habits — so lenders see a profile that's growing in the right direction.",
    points: ["Positive tradeline strategy", "Utilization game plan", "Thin-file & no-credit help", "Payment-history coaching"],
    image: img.manLaptop,
  },
  {
    slug: "debt-coaching",
    title: "Debt & Budget Coaching",
    short: "A realistic plan to pay down balances, avoid new damage and keep more of your money.",
    long: "Credit and cash flow go hand in hand. We build a simple budget and payoff plan that fits your real life, so you can lower balances, avoid new late payments and stay on track long after your report is cleaned up.",
    points: ["Personal budget blueprint", "Debt payoff order", "Collections negotiation tips", "Habits that protect your score"],
    image: img.coupleKitchen,
  },
  {
    slug: "home-auto-readiness",
    title: "Home & Auto Readiness",
    short: "Get lender-ready for the house, car or business funding you've been working toward.",
    long: "Have a big purchase in mind? We work backwards from your goal — a mortgage, an auto loan, a business line — and prioritize the moves that matter most to lenders so you walk in prepared and confident.",
    points: ["Goal-based action plan", "Mortgage & auto score targets", "Debt-to-income guidance", "Lender-ready checklist"],
    image: img.newHome,
  },
];

export const steps = [
  {
    n: "01",
    title: "Free consultation & credit review",
    body: "We sit down with you (in person, by phone or online), look at your reports together and get clear on your goals.",
  },
  {
    n: "02",
    title: "Your custom game plan",
    body: "We map out exactly what to challenge, what to build and in what order — no cookie-cutter templates.",
  },
  {
    n: "03",
    title: "We go to work. You level up.",
    body: "We handle the disputes and follow-ups while coaching you on the habits that keep your credit poppin'.",
  },
];

export const unlocks = [
  { title: "Homeownership", body: "Qualify for a mortgage and stop paying someone else's.", image: img.keys },
  { title: "Car Financing", body: "Drive off with a better rate and a lower monthly payment.", image: img.cardPayment },
  { title: "Lower Interest", body: "Better credit can mean paying far less on every loan and card.", image: img.charts },
  { title: "Business Funding", body: "Open doors to the capital you need to grow your business.", image: img.businessMan },
];

export const negativeItems = [
  "Collections",
  "Late Payments",
  "Charge-Offs",
  "Hard Inquiries",
  "Repossessions",
  "Medical Bills",
  "Student Loans",
  "Bankruptcies",
  "Judgments",
  "Identity Theft",
];

export const faqs = [
  {
    q: "How long does credit repair take?",
    a: "Every report is different, but most clients start seeing movement within the first 30–90 days as bureaus respond to disputes. Deeper rebuilding usually takes a few months. We'll give you an honest timeline during your free consultation.",
  },
  {
    q: "Can you guarantee my score will go up?",
    a: "No honest company can guarantee a specific score. What we guarantee is the work: a thorough audit, well-built disputes on anything inaccurate or unverifiable, consistent follow-up and a clear plan to build positive credit.",
  },
  {
    q: "What kinds of items can be challenged?",
    a: "Collections, late payments, charge-offs, repossessions, hard inquiries, medical bills, public records and more. If an item is inaccurate, incomplete, outdated or can't be verified, you have the right to dispute it.",
  },
  {
    q: "Will working with you hurt my credit?",
    a: "No. Reviewing your own reports and disputing inaccurate items does not lower your score. We also coach you on habits that protect your score while we work.",
  },
  {
    q: "Do I have to live in Oklahoma City?",
    a: "Not at all. Our office is in Oklahoma City, but we work with clients all over the country by phone, email and video.",
  },
  {
    q: "What does the free consultation include?",
    a: "A no-pressure conversation about your goals, a review of what's on your reports and a recommended plan. There's no cost and no obligation to sign up.",
  },
];
