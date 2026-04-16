import { useMemo } from "react";
import { sales as initialSales, topSelling as initialTopSelling } from "../data";


export const useSales = () => {
  const sales = useMemo(() => initialSales, []);
  const topSelling = useMemo(() => initialTopSelling, []);

  const getRecentSales = (limit = 5) => {
    return [...sales].sort((a, b) => b.id - a.id).slice(0, limit);
  };

  const getTotalRevenue = () => {
    return sales.reduce((acc, sale) => acc + sale.amount, 0);
  };

  return {
    sales,
    topSelling,
    getRecentSales,
    getTotalRevenue,
  };
};
