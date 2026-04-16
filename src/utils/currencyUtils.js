/**
 * Formats a numeric price into a string with the currency code.
 * @param {number} amount - The numeric price.
 * @param {string} currency - The currency code (e.g., 'PKR', 'USD'). Defaults to 'PKR'.
 * @returns {string} - Formatted price string.
 */
export const formatPrice = (amount, currency = 'PKR') => {
  if (amount === undefined || amount === null) return "0";
  
  // For prototype, we'll just prepend the currency code
  // Example: PKR 1,500
  return `${currency} ${amount.toLocaleString()}`;
};
