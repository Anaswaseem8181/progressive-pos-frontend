import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { menuItems } from "../../data/data";
import * as Icons from "lucide-react";
import { cn } from "../../lib/utils";
import { LogOut, ShoppingCart, Menu, X } from "lucide-react";

const Sidebar = () => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const filteredMenuItems = React.useMemo(() => {
    if (!user?.role) return [];
    return menuItems.filter((item) => item.roles.includes(user.role));
  }, [user?.role]);

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 flex flex-col transition-transform duration-300 z-40",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "md:translate-x-0 md:relative md:z-auto"
        )}
      >
        {/* Logo */}
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center text-white">
            <ShoppingCart size={24} />
          </div>
          <h1 className="text-xl font-bold text-gray-900 tracking-tight">Progressive POS</h1>
        </div>

        {/* Menu (scrollable) */}
        <nav className="flex-1 px-4 space-y-1 mt-4 overflow-y-auto">
          {filteredMenuItems.map((item) => {
            const IconComponent = Icons[item.icon];
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
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
            onClick={logout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

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