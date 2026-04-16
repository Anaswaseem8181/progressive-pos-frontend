import { formatPrice } from "../utils/currencyUtils";

/**
 * Returns the current POS currency code from environment variables and a pre-bound formatPrice function.
 * Falls back to 'PKR' if no currency is set.
 *
 * Usage:
 *   const { currency, fmt } = useCurrency();
 *   <span>{fmt(product.price)}</span>   // => "PKR 1,500"
 */
export const useCurrency = () => {
  // Use POS currency from .env (defaults to PKR)
  const currency = import.meta.env.VITE_POS_CURRENCY || "PKR";

  const fmt = (amount) => formatPrice(amount, currency);

  return { currency, fmt };
};
