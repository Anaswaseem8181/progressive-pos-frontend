import { useState, useEffect, useCallback } from "react";
import { mockDb } from "../utils/mockDb";

export const useUsers = (currentUser) => {
  const [staffList, setStaffList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStaff, setEditingStaff] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [staffToDelete, setStaffToDelete] = useState(null);

  const loadStaff = useCallback(() => {
    if (currentUser?.email) {
      const staff = mockDb.getStaffForAdmin(currentUser.adminEmail || currentUser.email);
      setStaffList(staff);
    }
  }, [currentUser]);

  useEffect(() => {
    loadStaff();
  }, [loadStaff]);

  const handleAddStaff = () => {
    setEditingStaff(null);
    setIsModalOpen(true);
  };

  const handleEditStaff = (staff) => {
    setEditingStaff(staff);
    setIsModalOpen(true);
  };

  const handleDeleteStaff = (email) => {
    setStaffToDelete(email);
    setShowDeleteModal(true);
  };

  const confirmDeleteStaff = () => {
    if (staffToDelete) {
      mockDb.deleteUser(staffToDelete);
      setShowDeleteModal(false);
      setStaffToDelete(null);
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

  const closeModal = () => setIsModalOpen(false);
  const closeDeleteModal = () => setShowDeleteModal(false);

  return {
    staffList,
    isModalOpen,
    editingStaff,
    showDeleteModal,
    staffToDelete,
    handleAddStaff,
    handleEditStaff,
    handleDeleteStaff,
    confirmDeleteStaff,
    handleSaveStaff,
    closeModal,
    closeDeleteModal
  };
};
