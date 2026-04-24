/** @typedef {{ term: string, definition: string, weak: string, strong: string }} Term */

/** @type {{ id: string, name: string, tone: string, color: string, border: string, terms: Term[] }[]} */
export const rooms = [
  {
    id: "build",
    name: "Build Room",
    tone: "technical",
    color: "from-blue-500/30 to-sky-400/10",
    border: "border-blue-400/40",
    terms: [
      {
        term: "XFN",
        definition: "Cross-functional team",
        weak: "I worked with other teams.",
        strong: "I led an XFN squad across eng, design, and data to ship in one sprint."
      },
      {
        term: "UX",
        definition: "User experience",
        weak: "We made it nicer to use.",
        strong: "We improved UX by reducing time-to-value in the first session."
      },
      {
        term: "UI",
        definition: "User interface",
        weak: "We changed how it looks.",
        strong: "We tightened UI patterns so actions were predictable and accessible."
      },
      {
        term: "PRD",
        definition: "Product requirements document",
        weak: "I wrote requirements.",
        strong: "I wrote a PRD with scope, constraints, and KPI targets before kickoff."
      },
      {
        term: "MVP",
        definition: "Minimum viable product",
        weak: "We launched a small version.",
        strong: "We launched an MVP to validate demand before investing in scale."
      },
      {
        term: "MMP",
        definition: "Minimum marketable product",
        weak: "We shipped something sellable-ish.",
        strong: "We reached MMP: enough quality and packaging that paid conversion was credible."
      },
      {
        term: "MLP",
        definition: "Minimum lovable product",
        weak: "Users tolerated it.",
        strong: "We aimed for MLP so early adopters would recommend us, not just convert."
      },
      {
        term: "KPI",
        definition: "Key performance indicator",
        weak: "We tracked important metrics.",
        strong: "Our primary KPI was activation rate within 7 days."
      }
    ]
  },
  {
    id: "strategy",
    name: "Strategy Room",
    tone: "prioritization and bets",
    color: "from-violet-500/30 to-purple-400/10",
    border: "border-violet-400/40",
    terms: [
      {
        term: "OKR",
        definition: "Objectives and key results",
        weak: "We had goals.",
        strong: "The initiative aligned to our OKR to improve retention by 12%."
      },
      {
        term: "PMF",
        definition: "Product-market fit",
        weak: "Users liked it.",
        strong: "Repeated usage and referral signals showed improving PMF in SMB."
      },
      {
        term: "NPS",
        definition: "Net promoter score",
        weak: "People seemed happy.",
        strong: "NPS increased from 21 to 34 after onboarding simplification."
      },
      {
        term: "GTM",
        definition: "Go-to-market strategy",
        weak: "We planned launch.",
        strong: "Our GTM used lifecycle email and in-app prompts to drive trial conversion."
      },
      {
        term: "USP",
        definition: "Unique selling proposition",
        weak: "We are different.",
        strong: "Our USP is instant setup versus competitors that need a week of services."
      },
      {
        term: "AoR",
        definition: "Area of responsibility",
        weak: "I own a lot of stuff.",
        strong: "This AoR spans onboarding through first paid invoice; I am accountable for the metric."
      },
      {
        term: "POC",
        definition: "Point of contact",
        weak: "Talk to someone on their side.",
        strong: "Legal’s POC signed off in 48 hours once we narrowed the policy question."
      }
    ]
  },
  {
    id: "boardroom",
    name: "Boardroom",
    tone: "business outcomes",
    color: "from-slate-400/20 to-zinc-300/5",
    border: "border-slate-300/30",
    terms: [
      {
        term: "TAM",
        definition: "Total addressable market",
        weak: "Big market.",
        strong: "TAM is $2.4B; we target a $180M SOM in phase one."
      },
      {
        term: "SOM",
        definition: "Serviceable obtainable market",
        weak: "We can get a slice.",
        strong: "Our SOM assumes enterprise only in NA for the first two years."
      },
      {
        term: "MRR",
        definition: "Monthly recurring revenue",
        weak: "Subscription money went up.",
        strong: "MRR grew 9% MoM after we released annual-plan nudges."
      },
      {
        term: "ARR",
        definition: "Annual recurring revenue",
        weak: "Revenue went up.",
        strong: "This feature is projected to add $1.8M ARR in 12 months."
      },
      {
        term: "YoY",
        definition: "Year over year",
        weak: "It grew versus last time.",
        strong: "Net revenue retention improved 6 points YoY."
      },
      {
        term: "MoM",
        definition: "Month over month",
        weak: "It grew last month.",
        strong: "Paid seats grew 4% MoM; we seasonally adjust for Q4 budget flush."
      },
      {
        term: "CAGR",
        definition: "Compound annual growth rate",
        weak: "It's growing fast.",
        strong: "The segment's 28% CAGR supports aggressive expansion."
      },
      {
        term: "ROI",
        definition: "Return on investment",
        weak: "The project was worth it.",
        strong: "Expected ROI is 3.2x based on reduced churn and upsell lift."
      }
    ]
  },
  {
    id: "growth",
    name: "Growth Room",
    tone: "acquisition and engagement",
    color: "from-emerald-500/30 to-green-400/10",
    border: "border-emerald-400/40",
    terms: [
      {
        term: "CAC",
        definition: "Customer acquisition cost",
        weak: "Ads are expensive.",
        strong: "CAC dropped 14% after we tightened audience targeting."
      },
      {
        term: "LTV",
        definition: "Customer lifetime value",
        weak: "Users are valuable.",
        strong: "We increased LTV through better trial-to-paid conversion and retention."
      },
      {
        term: "ARPU",
        definition: "Average revenue per user",
        weak: "We made more per user.",
        strong: "ARPU rose after we introduced usage-based tiers for power users."
      },
      {
        term: "DAU",
        definition: "Daily active users",
        weak: "More people used it daily.",
        strong: "DAU grew 22% after the habit loop in notifications and empty states."
      },
      {
        term: "MAU",
        definition: "Monthly active users",
        weak: "More people used it monthly.",
        strong: "MAU grew, but we cared more about DAU/MAU as a stickiness signal."
      },
      {
        term: "CTR",
        definition: "Click-through rate",
        weak: "More people clicked.",
        strong: "CTR on the lifecycle email doubled after we clarified the value prop."
      },
      {
        term: "CVR",
        definition: "Conversion rate",
        weak: "More people signed up.",
        strong: "Signup CVR rose from 5.2% to 7.1% after form simplification."
      },
      {
        term: "ROAS",
        definition: "Return on ad spend",
        weak: "Ads paid off.",
        strong: "ROAS held above 2.5x after we reallocated spend to high-intent keywords."
      }
    ]
  }
];

export const scenarios = [
  {
    id: "measure-success",
    prompt: "How would you measure success for this feature?",
    idealRoom: "growth",
    hints: ["KPI", "DAU", "MAU", "CVR", "retention"]
  },
  {
    id: "opportunity-size",
    prompt: "How big is this opportunity?",
    idealRoom: "boardroom",
    hints: ["TAM", "SOM", "ARR", "CAGR"]
  },
  {
    id: "launch-plan",
    prompt: "How would you launch this product?",
    idealRoom: "strategy",
    hints: ["GTM", "OKR", "NPS", "PMF"]
  },
  {
    id: "delivery-plan",
    prompt: "How would you execute this in 6 weeks?",
    idealRoom: "build",
    hints: ["XFN", "PRD", "MVP", "KPI"]
  }
];

export const onboardingOptions = [
  { id: "build", label: "Build room most days" },
  { id: "strategy", label: "Strategy and planning rooms" },
  { id: "boardroom", label: "Business and executive reviews" },
  { id: "growth", label: "Growth and monetization work" }
];

/** Flat list for flashcards and counts (30 terms). */
export function getAllTerms() {
  return rooms.flatMap((room) =>
    room.terms.map((t) => ({
      ...t,
      roomId: room.id,
      roomName: room.name,
      roomColor: room.color,
      roomBorder: room.border
    }))
  );
}
