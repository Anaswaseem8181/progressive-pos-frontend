import { Search, Plus, ShoppingCart, Trash2, ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { useProducts } from "../../hooks/useProducts";
import { useCustomers } from "../../hooks/useCustomers";
import { filterProducts } from "../../utils/productUtils";
import { usePOS } from "../../hooks/usePOS";
import { useCurrency } from "../../hooks/useCurrency";
import { cn } from "../../lib/utils";

const POS = () => {
  const { products: initialProducts } = useProducts();
  const { customers } = useCustomers();
  const { cart, search, setSearch, addToCart, removeFromCart, subtotal } = usePOS();
  const { fmt } = useCurrency();

  return (
    <div className="flex flex-col lg:flex-row gap-8 h-full">
      {/* Left: Products */}
      <div className="flex-1 flex flex-col gap-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            <Search size={20} />
          </div>
          <input
            type="text"
            placeholder="Search products by name or category..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all shadow-sm"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 overflow-y-auto pr-2">
          {filterProducts(initialProducts, search)
            .map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1 block">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-xl font-bold text-gray-900 mt-1">
                    {fmt(product.price)}
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span
                    className={cn(
                      "text-xs font-medium",
                      product.stock < 10 ? "text-orange-600" : "text-gray-400",
                    )}
                  >
                    {product.stock} in stock
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all active:scale-95"
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </motion.div>
            ))}
        </div>
      </div>

      {/* Right: Cart */}
      <div className="w-full lg:w-[400px] bg-white rounded-2xl border border-gray-100 shadow-lg flex flex-col overflow-hidden shrink-0">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Current Order
          </h3>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              Customer
            </label>
            <div className="relative">
              <select className="w-full pl-3 pr-10 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none bg-white">
                {customers.map((customer) => (
                  <option key={customer.id}>
                    {customer.name} ({customer.phone})
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                <ChevronDown size={16} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-300 gap-4">
              <ShoppingCart size={64} strokeWidth={1} />
              <p className="font-medium">Cart is empty</p>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between group"
              >
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-gray-800">
                    {item.name}
                  </span>
                  <span className="text-xs text-gray-400">
                    {item.quantity} x {fmt(item.price)}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold text-gray-900">
                    {fmt(item.price * item.quantity)}
                  </span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-300 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-6 bg-gray-50 border-t border-gray-100 space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-500">
              <span>Subtotal</span>
              <span className="font-bold">{fmt(subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>Discount (%)</span>
              <span className="font-bold">0 %</span>
            </div>
          </div>
          <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
            <span className="text-lg font-bold text-gray-900">Total</span>
            <span className="text-3xl font-bold text-emerald-600">
              {fmt(subtotal)}
            </span>
          </div>
          <button
            disabled={cart.length === 0}
            className="w-full bg-emerald-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-100 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none active:scale-[0.98]"
          >
            Complete Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default POS;
