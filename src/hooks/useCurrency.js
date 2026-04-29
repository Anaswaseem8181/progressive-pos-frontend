import { formatPrice } from "../utils/formatPrice";

export const useCurrency = () => {
  const currency = import.meta.env.VITE_POS_CURRENCY || "PKR";

  const formatCurrency = (amount) => formatPrice(amount, currency);

  return { currency, formatCurrency };
};
