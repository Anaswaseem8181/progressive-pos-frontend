import { useState } from "react";
import { calculateCartSubtotal } from "../utils/cartUtils";

export const usePOS = () => {
    const [cart, setCart] = useState([]);
    const [search, setSearch] = useState("");

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

    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    const subtotal = calculateCartSubtotal(cart);

    return {
        cart,
        search,
        setSearch,
        addToCart,
        removeFromCart,
        subtotal
    };
};
