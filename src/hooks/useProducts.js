import { useMemo } from "react";
import { products as initialProducts } from "../data";

export const useProducts = () => {
  const products = useMemo(() => initialProducts, []);

  const getProductById = (id) => {
    return products.find((product) => product.id === id);
  };

  const getLowStockProducts = () => {
    return products.filter((product) => product.stock < 10);
  };

  return {
    products,
    getProductById,
    getLowStockProducts,
  };
};
