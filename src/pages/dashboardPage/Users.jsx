import { Plus } from "lucide-react";
import { motion } from "motion/react";
import { users } from "../../data/index";
import UsersTable from "../../components/dashboardComponents/users/UsersTable";

const Users = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">User Management</h1>
          <p className="text-gray-500 text-sm">Manage staff accounts and permissions.</p>
        </div>
        <button className="bg-emerald-500 text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-100 active:scale-[0.98]">
          <Plus size={18} />
          Add User
        </button>
      </div>

      <UsersTable users={users} />
    </motion.div>
  );
};

export default Users;
