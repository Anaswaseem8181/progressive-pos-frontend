import { DollarSign, Package, AlertTriangle, Users, CloudUpload, PackageSearch, Smartphone, WifiOff, TrendingUp, ShieldCheck, Zap, ShoppingCart, LineChart, FileDown, Star } from "lucide-react";

export const products = [
  { id: 1, name: "Chicken", category: "Groceries", price: 800, stock: 57, status: "IN STOCK" },
  { id: 2, name: "Jeans", category: "Clothing", price: 2050, stock: 27, status: "IN STOCK" },
  { id: 3, name: "Shirt", category: "Clothing", price: 1020, stock: 6, status: "LOW STOCK" },
  { id: 4, name: "Milk", category: "Groceries", price: 150, stock: 12, status: "IN STOCK" },
  { id: 5, name: "Bread", category: "Groceries", price: 60, stock: 4, status: "LOW STOCK" },
  { id: 6, name: "Rusk", category: "Groceries", price: 20, stock: 5, status: "LOW STOCK" },
];

export const customers = [
  { id: 1, name: "Walk-in Customer", phone: "000", email: "walkin@example.com", status: "REGULAR" },
  { id: 2, name: "Anas", phone: "0309789", email: "anas@gmail.com", status: "REGULAR" },
  { id: 3, name: "Sarah Khan", phone: "03129", email: "sarah@example.com", status: "VIP" },
];

export const sales = [
  {
    id: 3,
    customer: "Walk-in Customer",
    date: "01/04/2026, 08:38:36",
    amount: 2050,
    billedBy: "MANAGER (ID: 2) - MANAGER",
    items: [{ name: "Jeans", qty: 1, price: 2050 }]
  },
  {
    id: 2,
    customer: "Anas",
    date: "31/03/2026, 14:20:15",
    amount: 1600,
    billedBy: "CASHIER (ID: 3) - CASHIER",
    items: [{ name: "Chicken", qty: 2, price: 800 }]
  },
  {
    id: 1,
    customer: "Walk-in Customer",
    date: "30/03/2026, 11:15:00",
    amount: 1020,
    billedBy: "ADMIN (ID: 1) - ADMIN",
    items: [{ name: "Shirt", qty: 1, price: 1020 }]
  },
];

export const users = [
  { id: 1, username: "admin", role: "ADMIN", email: "admin@example.com" },
  { id: 2, username: "manager", role: "MANAGER", email: "manager@example.com" },
  { id: 3, username: "cashier", role: "CASHIER", email: "cashier@example.com" },
  // { id: 4, username: "cashier2", role: "CASHIER", email: "cashier2@example.com" },
  // { id: 5, username: "cashier", role: "CASHIER", email: "cashier@example.com" },
];
export const topSelling = [
  { name: "Chicken", sold: 23, revenue: 1800 },
  { name: "Jeans", sold: 13, revenue: 26650 },
  { name: "Shirt", sold: 11, revenue: 11220 },
];



export const menuItems = [
  { name: "Dashboard", path: "/dashboard", roles: ["admin", "manager", "cashier"], icon: "LayoutDashboard" },
  { name: "Point of Sale", path: "/pos", roles: ["admin", "manager", "cashier"], icon: "ShoppingCart" },
  { name: "Inventory", path: "/inventory", roles: ["admin"], icon: "Package" },
  { name: "Customers", path: "/customers", roles: ["admin", "manager", "cashier"], icon: "Users" },
  { name: "Reports", path: "/reports", roles: ["admin", "manager"], icon: "BarChart3" },
  { name: "Users", path: "/users", roles: ["admin"], icon: "ShieldCheck" },
  { name: "Settings", path: "/settings", roles: ["admin", "manager", "cashier"], icon: "Settings" },
];

export const features = [
  {
    name: 'Inventory Classification',
    description: 'Track stock levels in real-time. Get alerts when inventory is low and automatically reorder.',
    icon: PackageSearch,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    name: 'Sales Management',
    description: 'Process transactions blazingly fast. Support multiple payment methods and custom customer receipts.',
    icon: TrendingUp,
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    name: 'Offline Capabilities',
    description: 'Keep selling even when the internet goes down. Data syncs automatically once you are back online.',
    icon: WifiOff,
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    name: 'Customer CRM',
    description: 'Build loyalty by tracking customer preferences, purchase history, and contact information seamlessly.',
    icon: Users,
    color: 'bg-orange-100 text-orange-600',
  },
  {
    name: 'Enterprise Security',
    description: 'Role-based access control ensures your staff only sees what they need to see. Data is encrypted and secure.',
    icon: ShieldCheck,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    name: 'Lightning Fast',
    description: 'Built as a Progressive Web App (PWA) to deliver a native-like experience directly in the browser.',
    icon: Zap,
    color: 'bg-yellow-100 text-yellow-600',
  },
];

export const steps = [
  {
    title: 'Add Your Inventory',
    description: 'Quickly import or manually add products with variants, barcodes, and custom pricing fields.',
    icon: FileDown,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    title: 'Process Sales Quickly',
    description: 'Use the lighting-fast, barcode-compatible POS interface to check out customers and send receipts.',
    icon: ShoppingCart,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100',
  },
  {
    title: 'Analyze & Grow',
    description: 'View real-time dashbaords to spot sales trends, manage low stock, and make data-driven decisions.',
    icon: LineChart,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100',
  },
  {
    title: 'Install Anywhere',
    description: 'Install the app directly on your home screen for a native experience without needing an app store.',
    icon: Smartphone, // Lucide icon
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    title: 'Offline Reliability',
    description: 'Keep processing sales and checking inventory even when your internet goes down.',
    icon: WifiOff,
    color: 'text-amber-600',
    bgColor: 'bg-amber-100',
  },
  {
    title: 'Instant Updates',
    description: 'Get the latest features and security patches automatically without manual downloads.',
    icon: Zap,
    color: 'text-rose-600',
    bgColor: 'bg-rose-100',
  },
  {
    title: 'Cloud Sync',
    description: 'Your data stays synchronized across all devices as soon as you are back online.',
    icon: CloudUpload,
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-100',
  }
];

export const testimonials = [
  {
    content: "Honestly, the offline mode saved our business...",
    author: "Sarah Jenkins",
    role: "Owner, Cloud9 Boutique",
    initials: "SJ",
    color: "bg-purple-100 text-purple-700",
    rating: 5
  },
  {
    content: "The analytics are insane...",
    author: "David Chen",
    role: "Manager, TechHaven",
    initials: "DC",
    color: "bg-blue-100 text-blue-700",
    rating: 4
  },
  {
    content: "I've used legacy POS systems...",
    author: "Maria Gonzalez",
    role: "Founder, Daily Goods Co.",
    initials: "MG",
    color: "bg-emerald-100 text-emerald-700",
    rating: 3
  }
];