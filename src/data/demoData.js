import adminDashboard from "../assets/images/demoPageImages/AdminDashboard.png";
import managerDashboard from "../assets/images/demoPageImages/ManagerDashboard.png";
import cashierDashboard from "../assets/images/demoPageImages/CashierDashboard.png";
import productCart from "../assets/images/demoPageImages/ProductCart.png";
import inventory from "../assets/images/demoPageImages/Inventory.png";
// import offlinePWA from "../assets/images/demoPageImages/OfflinePWA.png";
// import customerCRM from "../assets/images/demoPageImages/CustomerCRM.png";
// import reportingEngine from "../assets/images/demoPageImages/ReportingEngine.png";
export const demoScreenshots = [
    {
        id: 1,
        title: "Admin Dashboard",
        description: "High-level overview of total operations, revenue trends, and system configuration metrics.",
        category: "Dashboard",
        imagePath: adminDashboard
    },
    {
        id: 2,
        title: "Manager Activity Stream",
        description: "Real-time monitoring of cashier shifts, inventory alerts, and daily sales milestones.",
        category: "Dashboard",
        imagePath: managerDashboard
    },
    {
        id: 3,
        title: "Cashier Interface",
        description: "Simplified transaction views allowing for rapid customer checkouts.",
        category: "POS",
        imagePath: cashierDashboard
    },
    {
        id: 4,
        title: "Cart & Checkout System",
        description: "Multi-item processing, discount application, and seamless subtotal calculations natively.",
        category: "POS",
        imagePath: productCart
    },
    {
        id: 5,
        title: "Dynamic Inventory Matrix",
        description: "In-depth tracking of variants, barcode generation, and automatic low-stock tiering.",
        category: "Inventory",
        imagePath: inventory
    },
    {
        id: 6,
        title: "Offline PWA Mode",
        description: "The Progressive Web App fallback handling data seamlessly while disconnected from the cloud.",
        category: "Progressive Feature",
        imagePath: adminDashboard
    },
    {
        id: 7,
        title: "Customer Intelligence",
        description: "Built-in CRM analyzing purchase histories and mapping VIP clientele details.",
        category: "Customers",
        imagePath: adminDashboard
    },
    {
        id: 8,
        title: "Sales Analytics Engine",
        description: "Granular reporting charts, exporting to CSV, and long-term business trajectory predictions.",
        category: "Reports",
        imagePath: adminDashboard
    }
];
