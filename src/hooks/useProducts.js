import { useMemo } from "react";
import { products as initialProducts } from "../data";

export const useProducts = () => {
  const products = useMemo(() => initialProducts, []);

  const getProductById = (id) => {
    return products.find((p) => p.id === id);
  };

  const getLowStockProducts = () => {
    return products.filter((p) => p.stock < 10);
  };

  return {
    products,
    getProductById,
    getLowStockProducts,
  };
};
