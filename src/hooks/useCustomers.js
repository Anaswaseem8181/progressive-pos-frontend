import { useState } from "react";
import { customers as initialCustomers } from "../data";
import { notify } from "../utils/notifications";

export const useCustomers = () => {
  const [customers, setCustomers] = useState(initialCustomers);

  const getCustomerById = (id) => {
    return customers.find((customer) => customer.id === id);
  };

  const addCustomer = (customerData) => {
    try {
      const newCustomer = {
        ...customerData,
        id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
        status: "REGULAR", // Default status for new customers
      };

      setCustomers((prevCustomers) => [newCustomer, ...prevCustomers]);
      return true;
    } catch (error) {
      console.error("Failed to add customer:", error);
      notify.error("Failed to add customer");
      return false;
    }
  };

  return {
    customers,
    getCustomerById,
    addCustomer,
  };
};
