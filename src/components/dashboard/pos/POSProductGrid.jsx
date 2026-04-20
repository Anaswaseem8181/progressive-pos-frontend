import React from "react";
import { Search, Plus } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "../../../lib/utils";
import { filterProducts } from "../../../utils/productUtils";

const POSProductGrid = ({ 
  products, 
  search, 
  onSearchChange, 
  onAddToCart, 
  formatCurrency 
}) => {
  return (
    <div className="flex-1 flex flex-col gap-6">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
          <Search size={20} />
        </div>
        <input
          type="text"
          placeholder="Search products by name or category..."
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all shadow-sm"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 overflow-y-auto pr-2 custom-scrollbar">
        {filterProducts(products, search).map((product) => (
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
                {formatCurrency(product.price)}
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
                onClick={() => onAddToCart(product)}
                className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all active:scale-95"
              >
                <Plus size={20} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default POSProductGrid;
