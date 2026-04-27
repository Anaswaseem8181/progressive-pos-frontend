import { motion } from "motion/react";
import { useAuth } from "../../hooks/useAuth";
import { useUsers } from "../../hooks/useUsers";
import UsersTable from "../../components/dashboard/staff/staffTable";
import UsersHeader from "../../components/dashboard/staff/staffHeader";
import { StaffModal } from "modals/staff/StaffModal";
import WarningModal from "modals/common/WarningModal";

const Users = () => {
  const { user: currentUser } = useAuth();

  const {
    staffList,
    isModalOpen,
    editingStaff,
    showDeleteModal,
    handleAddStaff,
    handleEditStaff,
    handleDeleteStaff,
    confirmDeleteStaff,
    handleSaveStaff,
    closeModal,
    closeDeleteModal
  } = useUsers(currentUser);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <UsersHeader
        businessName={currentUser?.businessName}
        onAddStaff={handleAddStaff}
      />

      <UsersTable
        users={staffList}
        onEdit={handleEditStaff}
        onDelete={handleDeleteStaff}
      />

      <StaffModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={handleSaveStaff}
        staff={editingStaff}
      />

      <WarningModal
        isOpen={showDeleteModal}
        onClose={closeDeleteModal}
        onConfirm={confirmDeleteStaff}
        title="Delete Staff Member?"
        message={`Are you sure you want to remove this staff member? This will permanently revoke their access to ${currentUser?.businessName}.`}
        confirmText="Delete Staff"
        variant="danger"
      />
    </motion.div>
  );
};

export default Users;
