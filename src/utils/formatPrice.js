/**
 * Formats a numeric price into a string with the currency code.
 * @param {number} amount
 * @param {string} currency
 * @returns {string}
 */
export const formatPrice = (amount, currency = 'PKR') => {
  if (amount === undefined || amount === null) return "0";
  
  return `${currency} ${amount.toLocaleString()}`;
};
