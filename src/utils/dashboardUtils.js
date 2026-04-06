import { DollarSign, Package, AlertTriangle, Users } from "lucide-react";

export const getDashboardStats = (products, customers, sales) => {
    const totalRevenue = sales.reduce((acc, sale) => acc + sale.amount, 0);
    const lowStockCount = products.filter(p => p.stock < 10).length;

    return [
        {
            label: "Total Revenue",
            value: `Rs. ${totalRevenue.toFixed(2)}`,
            icon: DollarSign,
            color: "text-emerald-600",
            bg: "bg-emerald-50",
            link: "View all sales",
        },
        {
            label: "Total Products",
            value: products.length.toString(),
            icon: Package,
            color: "text-blue-600",
            bg: "bg-blue-50",
            link: "Manage inventory",
        },
        {
            label: "Low Stock Items",
            value: lowStockCount.toString(),
            icon: AlertTriangle,
            color: "text-orange-600",
            bg: "bg-orange-50",
            link: "Restock needed",
        },
        {
            label: "Active Customers",
            value: customers.length.toString(),
            icon: Users,
            color: "text-purple-600",
            bg: "bg-purple-50",
            link: "View customers",
        },
    ];
};
