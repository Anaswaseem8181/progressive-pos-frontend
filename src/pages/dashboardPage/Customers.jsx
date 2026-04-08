import { Plus, Search, Mail, Phone, Edit2, BarChart2 } from "lucide-react";
import { motion } from "motion/react";
import { customers } from "../../data/index";

const Customers = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            Customer Management
          </h1>
          <p className="text-gray-500 text-sm">
            Track your regular customers and their details.
          </p>
        </div>
        <button className="bg-emerald-500 text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-100 active:scale-[0.98]">
          <Plus size={18} />
          New Customer
        </button>
      </div>

      <div className="relative">
        <Search
          size={20}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search customers by name, phone, or email..."
          className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {customers.map((c) => (
          <div
            key={c.id}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold text-lg">
                {c.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{c.name}</h3>
                <div className="flex flex-col gap-1 mt-1">
                  <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
                    <Phone size={12} />
                    {c.phone}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
                    <Mail size={12} />
                    {c.email}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-50 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button className="p-2 text-gray-400 hover:text-emerald-500 transition-colors">
                  <Edit2 size={16} />
                </button>
                <button className="p-2 text-gray-400 hover:text-blue-500 transition-colors">
                  <BarChart2 size={16} />
                </button>
              </div>
              <span className="text-[10px] font-bold text-emerald-600 tracking-widest uppercase">
                {c.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Customers;
