import { useState } from "react";
import { calculateCartSubtotal } from "../utils/cartUtils";
import { mockDb } from "../utils/mockDb";

import { useState } from "react";
import { calculateCartSubtotal } from "../utils/cartUtils";
import { mockDb } from "../utils/mockDb";

export const usePOS = (initialCustomers = [], currentUser = null) => {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCustomerId, setSelectedCustomerId] = useState(initialCustomers[0]?.id || "");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [lastSale, setLastSale] = useState(null);

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, delta) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item,
      ),
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const handleCompleteOrder = () => {
    if (cart.length === 0) return;

    const customer = initialCustomers.find(c => c.id === parseInt(selectedCustomerId));

    const saleData = {
      customer: customer ? customer.name : "Walk-in Customer",
      amount: subtotal,
      billedBy: `${currentUser?.name || "User"} (${currentUser?.role || "Staff"})`,
      items: cart.map(item => ({
        name: item.name,
        qty: item.quantity,
        price: item.price
      }))
    };

    const result = mockDb.saveSale(saleData);
    setLastSale(result);
    setShowSuccessModal(true);
    clearCart();
    return result;
  };

  const subtotal = calculateCartSubtotal(cart);

  return {
    cart,
    search,
    setSearch,
    selectedCustomerId,
    setSelectedCustomerId,
    showSuccessModal,
    setShowSuccessModal,
    lastSale,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    handleCompleteOrder,
    subtotal
  };
};
