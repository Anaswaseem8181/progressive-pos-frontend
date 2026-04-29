import { useProducts } from "../../hooks/useProducts";
import { useCustomers } from "../../hooks/useCustomers";
import { usePOS } from "../../hooks/usePOS";
import { useCurrency } from "../../hooks/useCurrency";
import { useAuth } from "../../hooks/useAuth";
import OrderSuccessModal from "../../components/modals/OrderSuccess/OrderSuccessModal";
import POSProductGrid from "../../components/dashboard/pos/POSProductList";
import POSCartSidebar from "../../components/dashboard/pos/POSCartSidebar";

const POS = () => {
  const { user } = useAuth();
  const { products: initialProducts } = useProducts();
  const { customers } = useCustomers();
  const { formatCurrency } = useCurrency();

  const {
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
    handleCompleteOrder,
    subtotal
  } = usePOS(customers, user);

  return (
    <div className="flex flex-col lg:flex-row gap-8 h-full">
      <POSProductGrid
        products={initialProducts}
        search={search}
        onSearchChange={setSearch}
        onAddToCart={addToCart}
        formatCurrency={formatCurrency}
      />

      <POSCartSidebar
        cart={cart}
        customers={customers}
        selectedCustomerId={selectedCustomerId}
        setSelectedCustomerId={setSelectedCustomerId}
        onUpdateQuantity={updateQuantity}
        onRemoveFromCart={removeFromCart}
        onCompleteOrder={handleCompleteOrder}
        subtotal={subtotal}
        formatCurrency={formatCurrency}
      />

      <OrderSuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        sale={lastSale}
      />
    </div>
  );
};

export default POS;
