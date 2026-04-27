import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { menuItems } from "../../data";
import * as Icons from "lucide-react";
import { mergeClasses } from "../../utils/mergeClasses";
import { LogOut, ShoppingCart, Menu, X } from "lucide-react";
import WarningModal from "modals/common/WarningModal";
import { notify } from "../../utils/notifications";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const { user, logout } = useAuth();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleConfirmLogout = () => {
    logout();
    notify.success("Logged out successfully");
  };

  const filteredMenuItems = React.useMemo(() => {
    if (!user?.role) return [];
    return menuItems.filter((item) => item.roles.includes(user.role));
  }, [user?.role]);

  return (
    <>
      <aside
        className={mergeClasses(
          "fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 flex flex-col transition-transform duration-300 z-40",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "md:translate-x-0 md:relative md:z-auto"
        )}
      >
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center text-white">
              <ShoppingCart size={24} />
            </div>
            <h1 className="text-xl font-bold text-gray-900 tracking-tight">
              {user?.businessName || "Progressive POS"}
            </h1>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-1 mt-4 overflow-y-auto">
          {filteredMenuItems.map((item) => {
            const IconComponent = Icons[item.icon];
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  mergeClasses(
                    "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-emerald-500 text-white shadow-md shadow-emerald-100"
                      : "text-gray-600 hover:bg-gray-50 hover:text-emerald-600"
                  )
                }
                onClick={() => setIsOpen(false)} // close on mobile after click
              >
                {IconComponent && <IconComponent size={20} />}
                {item.name}
              </NavLink>
            );
          })}
        </nav>

        {/* User Info & Logout */}
        <div className="p-4 border-t border-gray-100">
          <div className="px-4 py-4 mb-2">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
              User
            </p>
            <p className="text-sm font-semibold text-gray-900">{user?.name}</p>
            <p className="text-xs text-emerald-600 font-medium capitalize">{user?.role}</p>
          </div>
          <button
            onClick={() => setShowLogoutModal(true)}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      <WarningModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleConfirmLogout}
        title="Confirm Logout"
        message="Are you sure you want to end your session? You will need to login again to access your dashboard."
        confirmText="Logout"
        variant="danger"
      />

      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;