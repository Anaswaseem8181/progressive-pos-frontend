import React, { useState } from "react";
import { Plus, Edit2, Trash2, Search } from "lucide-react";
import { motion } from "motion/react";
import { useProducts } from "../../hooks/useProducts";
import { mergeClasses } from "../../utils/mergeClasses";
import { useCurrency } from "../../hooks/useCurrency";
import WarningModal from "modals/common/WarningModal";
import { notify } from "../../utils/notifications";

const Inventory = () => {
  const { products } = useProducts();
  const { formatCurrency } = useCurrency();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  const handleDeleteClick = (product) => {
    setProductToDelete(product);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    console.log("Deleting product:", productToDelete?.name);
    setShowDeleteModal(false);
    setProductToDelete(null);
    notify.success("Product removed from inventory");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Inventory Management</h1>
          <p className="text-gray-500 text-sm">Manage your products and stock levels.</p>
        </div>
        <button className="bg-emerald-500 text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-100 active:scale-[0.98]">
          <Plus size={18} />
          Add Product
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-50 flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Product</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Category</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Price</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Stock</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Status</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <span className="text-sm font-bold text-gray-900">{product.name}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-500 font-medium">{product.category}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-bold text-gray-900">{formatCurrency(product.price)}</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={mergeClasses("text-sm font-bold", product.stock < 10 ? "text-orange-600" : "text-gray-900")}>
                      {product.stock}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={mergeClasses(
                      "px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider",
                      product.status === "IN STOCK" ? "bg-emerald-50 text-emerald-600" : "bg-orange-50 text-orange-600"
                    )}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-gray-400 hover:text-emerald-500 transition-colors">
                        <Edit2 size={16} />
                      </button>
                      <button
                        onClick={() => handleDeleteClick(product)}
                        className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <WarningModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={confirmDelete}
        title="Delete Product?"
        message={`Are you sure you want to delete "${productToDelete?.name}"? This will remove it from your inventory and POS system.`}
        confirmText="Delete Product"
        variant="danger"
      />
    </motion.div>
  );
};

export default Inventory;
