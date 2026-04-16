import { useMemo } from "react";
import { customers as initialCustomers } from "../data";

export const useCustomers = () => {
  const customers = useMemo(() => initialCustomers, []);

  const getCustomerById = (id) => {
    return customers.find((c) => c.id === id);
  };

  return {
    customers,
    getCustomerById,
  };
};
