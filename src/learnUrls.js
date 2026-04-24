/**
 * Stable Wikipedia article paths where they exist; otherwise Wikipedia search.
 * Second link is a generic web search for PM / business context (not logged by us).
 */
const WIKI_ARTICLE = {
  UX: "User_experience",
  UI: "User_interface",
  PRD: "Product_requirements_document",
  MVP: "Minimum_viable_product",
  MMP: "Minimum_marketable_product",
  MLP: "Minimum_lovable_product",
  KPI: "Performance_indicator",
  OKR: "Objectives_and_key_results",
  MoM: "Month-over-month",
  NPS: "Net_Promoter",
  GTM: "Go-to-market",
  USP: "Unique_selling_proposition",
  POC: "Point_of_contact",
  TAM: "Total_addressable_market",
  MRR: "Recurring_revenue",
  ARR: "Annual_recurring_revenue",
  YoY: "Year-over-year",
  CAGR: "Compound_annual_growth_rate",
  ROI: "Return_on_investment",
  CAC: "Customer_acquisition_cost",
  LTV: "Customer_lifetime_value",
  ARPU: "Average_revenue_per_user",
  DAU: "Active_users",
  MAU: "Active_users",
  CTR: "Click-through_rate",
  CVR: "Conversion_rate",
  TOFU: "Marketing_funnel",
  MOFU: "Marketing_funnel",
  BOFU: "Marketing_funnel"
};

function wikiArticleUrl(slug) {
  return `https://en.wikipedia.org/wiki/${slug}`;
}

function wikiSearchUrl(query) {
  return `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(query)}`;
}

function webSearchUrl(query) {
  return `https://www.google.com/search?q=${encodeURIComponent(query)}`;
}

/**
 * @param {string} term - acronym or label
 * @param {string} definition - short expansion
 * @returns {{ wikipedia: string, readMore: string, wikipediaLabel: string }}
 */
export function learnUrlsForTerm(term, definition) {
  const slug = WIKI_ARTICLE[term];
  const wikipedia = slug
    ? wikiArticleUrl(slug)
    : wikiSearchUrl(`${term} ${definition}`.trim());
  const readMore = webSearchUrl(`${term} ${definition} product management`);
  return {
    wikipedia,
    readMore,
    wikipediaLabel: slug ? "Wikipedia" : "Wikipedia (search)"
  };
}
