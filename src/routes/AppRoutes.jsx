import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/Dashboard";
import Landing from "../pages/Landing";
import DemoPage from "../pages/DemoPage";
import POS from "../pages/POS";
import Inventory from "../pages/Inventory";
import Customers from "../pages/Customers";
import Reports from "../pages/Reports";
import Users from "../pages/Users";
import MainLayout from "../components/layout/MainLayout";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/demo" element={<DemoPage />} />
      <Route path="/login" element={<Login />} />

      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={
          <ProtectedRoute roles={["admin", "manager", "cashier"]}>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/pos" element={
          <ProtectedRoute roles={["admin", "manager", "cashier"]}>
            <POS />
          </ProtectedRoute>
        } />
        <Route path="/inventory" element={
          <ProtectedRoute roles={["admin", "manager"]}>
            <Inventory />
          </ProtectedRoute>
        } />
        <Route path="/customers" element={
          <ProtectedRoute roles={["admin", "manager", "cashier"]}>
            <Customers />
          </ProtectedRoute>
        } />
        <Route path="/reports" element={
          <ProtectedRoute roles={["admin", "manager"]}>
            <Reports />
          </ProtectedRoute>
        } />
        <Route path="/users" element={
          <ProtectedRoute roles={["admin"]}>
            <Users />
          </ProtectedRoute>
        } />
      </Route>

      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};
