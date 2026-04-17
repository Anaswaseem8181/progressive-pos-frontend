import { useMemo } from "react";
import { sales as initialSales, topSelling as initialTopSelling } from "../data";


export const useSales = () => {
  const sales = useMemo(() => initialSales, []);
  const topSelling = useMemo(() => initialTopSelling, []);

  const getRecentSales = (limit = 5) => {
    return [...sales].sort((saleA, saleB) => saleB.id - saleA.id).slice(0, limit);
  };

  const getTotalRevenue = () => {
    return sales.reduce((revenueSum, sale) => revenueSum + sale.amount, 0);
  };

  return {
    sales,
    topSelling,
    getRecentSales,
    getTotalRevenue,
  };
};
