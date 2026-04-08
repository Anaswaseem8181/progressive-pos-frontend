import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboardPage/Dashboard";
import Landing from "../pages/Landing";
import DemoPage from "../pages/DemoPage";
import POS from "../pages/dashboardPage/POS";
import Inventory from "../pages/dashboardPage/Inventory";
import Customers from "../pages/dashboardPage/Customers";
import Reports from "../pages/dashboardPage/Reports";
import Users from "../pages/dashboardPage/Users";
import Settings from "../pages/dashboardPage/Settings";
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
        <Route path="/settings" element={
          <ProtectedRoute roles={["admin", "manager", "cashier"]}>
            <Settings />
          </ProtectedRoute>
        } />
      </Route>

      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};
