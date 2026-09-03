export type Currency = "USD" | "PKR";

const CURRENCY_SYMBOL: Record<Currency, string> = {
  USD: "$",
  PKR: "Rs ",
};

// Fallback only — used when an item hasn't been given a real PKR price yet
// (e.g. Manufacturing/Ecommerce/Hybrid plans, which /pk/pricing doesn't show
// today but might later). Retail plans and all six add-ons have real PKR
// prices set directly in their data files, so this rate is not used for them.
const PKR_FALLBACK_RATE = 285;

export function convertToPkr(usdAmount: number): number {
  return Math.round((usdAmount * PKR_FALLBACK_RATE) / 10) * 10;
}

export function formatAmount(amount: number, currency: Currency): string {
  if (currency === "USD") {
    return `${CURRENCY_SYMBOL.USD}${amount}`;
  }
  return `${CURRENCY_SYMBOL.PKR}${amount.toLocaleString("en-PK")}`;
}
