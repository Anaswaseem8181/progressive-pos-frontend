const USERS_KEY = "pos_all_users";

// Initialize with demo data if empty
const initializeDb = () => {
  const existing = localStorage.getItem(USERS_KEY);
  if (!existing) {
    const defaultUsers = [
      { 
        email: "admin@gmail.com", 
        password: "admin", 
        name: "Demo Admin", 
        businessName: "Progressive POS", 
        role: "admin",
        adminEmail: "admin@gmail.com",
        currency: "PKR"
      },
      { 
        email: "manager@gmail.com", 
        password: "manager", 
        name: "Demo Manager", 
        businessName: "Progressive POS", 
        role: "manager",
        adminEmail: "admin@gmail.com"
      },
      { 
        email: "cashier@gmail.com", 
        password: "cashier", 
        name: "Demo Cashier", 
        businessName: "Progressive POS", 
        role: "cashier",
        adminEmail: "admin@gmail.com"
      }
    ];
    localStorage.setItem(USERS_KEY, JSON.stringify(defaultUsers));
  }
};

export const mockDb = {
  getUsers: () => {
    initializeDb();
    return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
  },

  saveUser: (user) => {
    const users = mockDb.getUsers();
    // Check if user already exists
    const index = users.findIndex(dbUser => dbUser.email === user.email);
    if (index !== -1) {
      users[index] = { ...users[index], ...user };
    } else {
      users.push(user);
    }
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    return user;
  },

  findUser: (email, password) => {
    const users = mockDb.getUsers();
    return users.find(dbUser => dbUser.email === email && dbUser.password === password);
  },

  getStaffForAdmin: (adminEmail) => {
    const users = mockDb.getUsers();
    // Staff are users whose adminEmail matches the given adminEmail but they are NOT the admin themselves
    // OR just return everyone with that adminEmail if the admin wants to see themselves
    return users.filter(staffMember => staffMember.adminEmail === adminEmail && staffMember.role !== 'admin');
  },

  deleteUser: (email) => {
    const users = mockDb.getUsers();
    const filtered = users.filter(dbUser => dbUser.email !== email);
    localStorage.setItem(USERS_KEY, JSON.stringify(filtered));
  }
};
