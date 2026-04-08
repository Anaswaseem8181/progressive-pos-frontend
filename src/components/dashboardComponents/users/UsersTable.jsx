import { Edit2, Trash2 } from "lucide-react";
import { cn } from "../../../lib/utils";

const UsersTable = ({ users }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/50 border-b border-gray-100">
              <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Username</th>
              <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email</th>
              <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Role</th>
              <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {users.map((u) => (
              <tr key={u.id} className="hover:bg-gray-50/50 transition-colors group">
                <td className="px-6 py-4">
                  <span className="text-sm font-bold text-gray-900">{u.username}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-500">{u.email}</span>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className={cn(
                    "px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider",
                    u.role === "ADMIN" ? "bg-blue-50 text-blue-600" :
                      u.role === "MANAGER" ? "bg-purple-50 text-purple-600" : "bg-green-100 text-green-600"
                  )}>
                    {u.role}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 text-gray-400 hover:text-emerald-500 transition-colors">
                      <Edit2 size={16} />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
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
  );
};

export default UsersTable;
