import { useState, useEffect } from "react";
import { Edit2, Trash2 } from "lucide-react";
import { mergeClasses } from "../../../utils/mergeClasses";
import { ActionDropdown } from "../../ui/ActionDropdown";

const UsersTable = ({ users, onEdit, onDelete }) => {
  const [openDropdownId, setOpenDropdownId] = useState(null);

  useEffect(() => {
    const handleClickOutside = () => setOpenDropdownId(null);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

      {/* Mobile View: Card Layout */}
      <div className="md:hidden divide-y divide-gray-100">
        {users.length === 0 ? (
          <div className="p-8 text-center text-gray-400 text-sm">
            No staff members found.
          </div>
        ) : (
          users.map((user) => (
            <div key={user.email} className="p-4 flex flex-col gap-3 relative">
              <div className="flex justify-between items-start pr-10">
                <div>
                  <h3 className="font-bold text-gray-900">{user.name}</h3>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">{user.email}</p>
                </div>
              </div>

              {/* Action Dropdown (Mobile) */}
              <ActionDropdown
                isOpen={openDropdownId === user.email}
                onToggle={() => setOpenDropdownId(openDropdownId === user.email ? null : user.email)}
                containerClassName="absolute top-4 right-4"
                actions={[
                  {
                    label: "Edit",
                    icon: Edit2,
                    onClick: () => onEdit(user),
                    variant: "default",
                  },
                  {
                    label: "Delete",
                    icon: Trash2,
                    onClick: () => onDelete(user.email),
                    variant: "danger",
                  },
                ]}
              />

              <div className="flex items-center justify-between mt-2 pt-3 border-t border-gray-50">
                <span className={mergeClasses(
                  "px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase",
                  user.role?.toLowerCase() === "admin" ? "bg-blue-50 text-blue-600" :
                    user.role?.toLowerCase() === "manager" ? "bg-purple-50 text-purple-600" : "bg-green-100 text-green-600"
                )}>
                  {user.role}
                </span>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Desktop View: Table Layout */}
      <div className="hidden md:block overflow-x-auto min-h-[300px]">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/50 border-b border-gray-100">
              <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Name</th>
              <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email</th>
              <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Role</th>
              <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {users.length === 0 ? (
              <tr>
                <td colSpan="4" className="px-6 py-8 text-center text-gray-400 text-sm">
                  No staff members found.
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.email} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <span className="text-sm font-bold text-gray-900">{user.name}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-500">{user.email}</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={mergeClasses(
                      "px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase",
                      user.role?.toLowerCase() === "admin" ? "bg-blue-50 text-blue-600" :
                        user.role?.toLowerCase() === "manager" ? "bg-purple-50 text-purple-600" : "bg-green-100 text-green-600"
                    )}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <ActionDropdown
                      isOpen={openDropdownId === user.email}
                      onToggle={() => setOpenDropdownId(openDropdownId === user.email ? null : user.email)}
                      containerClassName="relative inline-block text-left"
                      actions={[
                        {
                          label: "Edit",
                          icon: Edit2,
                          onClick: () => onEdit(user),
                          variant: "default",
                        },
                        {
                          label: "Delete",
                          icon: Trash2,
                          onClick: () => onDelete(user.email),
                          variant: "danger",
                        },
                      ]}
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;
