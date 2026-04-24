export const rooms = [
  {
    id: "build",
    name: "Build Room",
    tone: "technical",
    color: "from-blue-500/30 to-sky-400/10",
    border: "border-blue-400/40",
    terms: [
      { term: "XFN", definition: "Cross-functional team", weak: "I worked with other teams.", strong: "I led an XFN squad across eng, design, and data to ship in one sprint." },
      { term: "PRD", definition: "Product requirements document", weak: "I wrote requirements.", strong: "I wrote a PRD with scope, constraints, and KPI targets before kickoff." },
      { term: "MVP", definition: "Minimum viable product", weak: "We launched a small version.", strong: "We launched an MVP to validate demand before investing in scale." },
      { term: "KPI", definition: "Key performance indicator", weak: "We tracked important metrics.", strong: "Our primary KPI was activation rate within 7 days." }
    ]
  },
  {
    id: "strategy",
    name: "Strategy Room",
    tone: "prioritization and bets",
    color: "from-violet-500/30 to-purple-400/10",
    border: "border-violet-400/40",
    terms: [
      { term: "OKR", definition: "Objectives and key results", weak: "We had goals.", strong: "The initiative aligned to our OKR to improve retention by 12%." },
      { term: "PMF", definition: "Product-market fit", weak: "Users liked it.", strong: "Repeated usage and referral signals showed improving PMF in SMB." },
      { term: "GTM", definition: "Go-to-market strategy", weak: "We planned launch.", strong: "Our GTM used lifecycle email + in-app prompts to drive trial conversion." },
      { term: "NPS", definition: "Net promoter score", weak: "People seemed happy.", strong: "NPS increased from 21 to 34 after onboarding simplification." }
    ]
  },
  {
    id: "boardroom",
    name: "Boardroom",
    tone: "business outcomes",
    color: "from-slate-400/20 to-zinc-300/5",
    border: "border-slate-300/30",
    terms: [
      { term: "ARR", definition: "Annual recurring revenue", weak: "Revenue went up.", strong: "This feature is projected to add $1.8M ARR in 12 months." },
      { term: "TAM", definition: "Total addressable market", weak: "Big market.", strong: "TAM is $2.4B; we target a $180M SOM in phase one." },
      { term: "CAGR", definition: "Compound annual growth rate", weak: "It's growing fast.", strong: "The segment's 28% CAGR supports aggressive expansion." },
      { term: "ROI", definition: "Return on investment", weak: "The project was worth it.", strong: "Expected ROI is 3.2x based on reduced churn and upsell lift." }
    ]
  },
  {
    id: "growth",
    name: "Growth Room",
    tone: "acquisition and engagement",
    color: "from-emerald-500/30 to-green-400/10",
    border: "border-emerald-400/40",
    terms: [
      { term: "DAU/MAU", definition: "Engagement stickiness ratio", weak: "We got more users.", strong: "We improved DAU/MAU by 18%, showing stronger habit formation." },
      { term: "CAC", definition: "Customer acquisition cost", weak: "Ads are expensive.", strong: "CAC dropped 14% after we tightened audience targeting." },
      { term: "LTV", definition: "Lifetime value", weak: "Users are valuable.", strong: "We increased LTV through improved trial-to-paid conversion and retention." },
      { term: "CVR", definition: "Conversion rate", weak: "More people signed up.", strong: "Signup CVR rose from 5.2% to 7.1% after form simplification." }
    ]
  }
];

export const scenarios = [
  {
    id: "measure-success",
    prompt: "How would you measure success for this feature?",
    idealRoom: "growth",
    hints: ["KPI", "DAU/MAU", "CVR", "retention"]
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
window.TERMS = [
  { room: "Build", term: "XFN", meaning: "Cross-functional team", usage: "The eng/design/PM team you lead to deliver a product or feature." },
  { room: "Build", term: "UX", meaning: "User experience", usage: "The entire experience a user has with your product." },
  { room: "Build", term: "UI", meaning: "User interface", usage: "What the user sees and interacts with." },
  { room: "Build", term: "UXD", meaning: "User experience design", usage: "Wireframes, mockups, and how design pieces work together." },
  { room: "Build", term: "UXR", meaning: "User experience research", usage: "Qualitative and quantitative research into user behavior." },
  { room: "Build", term: "PRD", meaning: "Product requirements document", usage: "What you're building, why, and what it should look like." },
  { room: "Build", term: "MVP", meaning: "Minimum viable product", usage: "Bare-bones version that tests if anyone wants it." },
  { room: "Build", term: "MMP", meaning: "Minimum marketable product", usage: "MVP plus enough polish that someone would pay for it." },
  { room: "Build", term: "MLP", meaning: "Minimum lovable product", usage: "Smallest version users actually love and recommend." },
  { room: "Build", term: "KPI", meaning: "Key performance indicator", usage: "An important metric for your product outcomes." },

  { room: "Strategy", term: "OKR", meaning: "Objectives and key results", usage: "Goal-setting framework: objective plus measurable key results." },
  { room: "Strategy", term: "AoR", meaning: "Area of responsibility", usage: "What you own and are accountable for." },
  { room: "Strategy", term: "POC", meaning: "Point of contact", usage: "The person representing a specific org, team, or function." },
  { room: "Strategy", term: "HC", meaning: "Headcount", usage: "How many team members are staffed or requested." },
  { room: "Strategy", term: "USP", meaning: "Unique selling proposition", usage: "What makes your product different from the competition." },
  { room: "Strategy", term: "PMF", meaning: "Product-market fit", usage: "The moment users actively want and engage with your product." },
  { room: "Strategy", term: "NPS", meaning: "Net promoter score", usage: "Single-question loyalty metric: %promoters minus %detractors." },
  { room: "Strategy", term: "GTM", meaning: "Go-to-market", usage: "The plan for bringing a product to customers." },

  { room: "Boardroom", term: "TAM", meaning: "Total addressable market", usage: "Theoretical max market size if everyone bought from you." },
  { room: "Boardroom", term: "SOM", meaning: "Serviceable obtainable market", usage: "Realistically capturable market in your context." },
  { room: "Boardroom", term: "MRR", meaning: "Monthly recurring revenue", usage: "Monthly subscription-style recurring revenue." },
  { room: "Boardroom", term: "ARR", meaning: "Annual recurring revenue", usage: "Yearly recurring revenue used by many SaaS companies." },
  { room: "Boardroom", term: "YoY", meaning: "Year over year", usage: "Growth compared to the same period last year." },
  { room: "Boardroom", term: "MoM", meaning: "Month over month", usage: "Growth compared to last month." },
  { room: "Boardroom", term: "CAGR", meaning: "Compound annual growth rate", usage: "Compounded multi-period annual growth." },
  { room: "Boardroom", term: "ROI", meaning: "Return on investment", usage: "Profit relative to cost." },

  { room: "Growth", term: "TOFU", meaning: "Top of funnel", usage: "Users first becoming aware of your product." },
  { room: "Growth", term: "MOFU", meaning: "Middle of funnel", usage: "Users beginning to engage and evaluate." },
  { room: "Growth", term: "BOFU", meaning: "Bottom of funnel", usage: "Users near purchase or conversion." },
  { room: "Growth", term: "CAC", meaning: "Customer acquisition cost", usage: "How much you spend to acquire one customer." },
  { room: "Growth", term: "LTV", meaning: "Lifetime value", usage: "Expected total revenue from a user over their lifecycle." },
  { room: "Growth", term: "ARPU", meaning: "Average revenue per user", usage: "Average revenue per user per time period." },
  { room: "Growth", term: "DAU", meaning: "Daily active users", usage: "Unique users per day with minimum interaction threshold." },
  { room: "Growth", term: "MAU", meaning: "Monthly active users", usage: "Unique users per month; often paired with DAU/MAU ratio." },
  { room: "Growth", term: "ROAS", meaning: "Return on ad spend", usage: "Revenue returned per dollar spent on marketing." },
  { room: "Growth", term: "CTR", meaning: "Click-through rate", usage: "Percent of users who click after seeing something." },
  { room: "Growth", term: "CVR", meaning: "Conversion rate", usage: "Percent of users who take the target action." },
  { room: "Growth", term: "CPM", meaning: "Cost per thousand impressions", usage: "What you pay per thousand views." },
  { room: "Growth", term: "CPI", meaning: "Cost per install", usage: "What it costs to get one app install." },
  { room: "Growth", term: "CPA", meaning: "Cost per acquisition", usage: "What it costs to get one conversion." }
];
