import { formatPrice } from "../utils/currencyUtils";

export const useCurrency = () => {
  const currency = import.meta.env.VITE_POS_CURRENCY || "PKR";

  const formatCurrency = (amount) => formatPrice(amount, currency);

  return { currency, formatCurrency };
};
