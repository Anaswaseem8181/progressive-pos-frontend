import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { motion } from "motion/react";
import { useAuth } from "../../hooks/useAuth";
import { mockDb } from "../../utils/mockDb";
import UsersTable from "../../components/dashboard/users/UsersTable";
import { StaffModal } from "../../components/dashboard/users/StaffModal";

const Users = () => {
  const { user: currentUser } = useAuth();
  const [staffList, setStaffList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStaff, setEditingStaff] = useState(null);

  const loadStaff = () => {
    if (currentUser?.email) {
      const staff = mockDb.getStaffForAdmin(currentUser.adminEmail || currentUser.email);
      setStaffList(staff);
    }
  };

  useEffect(() => {
    loadStaff();
  }, [currentUser]);

  const handleAddStaff = () => {
    setEditingStaff(null);
    setIsModalOpen(true);
  };

  const handleEditStaff = (staff) => {
    setEditingStaff(staff);
    setIsModalOpen(true);
  };

  const handleDeleteStaff = (email) => {
    if (window.confirm("Are you sure you want to delete this staff member?")) {
      mockDb.deleteUser(email);
      loadStaff();
    }
  };

  const handleSaveStaff = (data) => {
    const newStaff = {
      ...data,
      businessName: currentUser.businessName,
      adminEmail: currentUser.adminEmail || currentUser.email,
    };

    // If editing, preserve the password if not changed
    if (editingStaff && !data.password) {
      newStaff.password = editingStaff.password;
    }

    mockDb.saveUser(newStaff);
    setIsModalOpen(false);
    loadStaff();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Staff Management</h1>
          <p className="text-gray-500 text-sm">Manage staff accounts for {currentUser?.businessName}.</p>
        </div>
        <button
          onClick={handleAddStaff}
          className="bg-emerald-500 text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-100 active:scale-[0.98]"
        >
          <Plus size={18} />
          Add Staff
        </button>
      </div>

      <UsersTable
        users={staffList}
        onEdit={handleEditStaff}
        onDelete={handleDeleteStaff}
      />

      <StaffModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveStaff}
        staff={editingStaff}
      />
    </motion.div>
  );
};

export default Users;
