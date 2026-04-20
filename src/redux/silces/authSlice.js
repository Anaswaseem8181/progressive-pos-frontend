import { createSlice } from "@reduxjs/toolkit";

const savedUser = localStorage.getItem("pos_user");

const initialState = {
  user: savedUser ? JSON.parse(savedUser) : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, role, businessName, currency, name, storeAddress, contactNumber } = action.payload;

      const user = {
        id: action.payload.id || Math.random().toString(36).substr(2, 9),
        name: name || (email.split("@")[0].charAt(0).toUpperCase() + email.split("@")[0].slice(1)),
        email,
        role,
        businessName: businessName || "Progressive POS",
        currency: currency || "PKR",
        storeAddress: storeAddress || "123 Tech Avenue, Silicon Valley",
        contactNumber: contactNumber || "+1 (555) 000-1234"
      };

      state.user = user;
      localStorage.setItem("pos_user", JSON.stringify(user));
    },

    logout: (state) => {
      state.user = null;
      localStorage.removeItem("pos_user");
    },

    updateCurrency: (state, action) => {
      if (state.user) {
        state.user.currency = action.payload;
        localStorage.setItem("pos_user", JSON.stringify(state.user));
      }
    },
  },
});

export const { login, logout, updateCurrency } = authSlice.actions;


import { mockDb } from "../../utils/mockDb";

export const registerUser = (userData) => (dispatch) => {
  const newAdmin = {
    ...userData,
    role: "admin",
    currency: userData.currency || "PKR",
    adminEmail: userData.email,
  };
  mockDb.saveUser(newAdmin);
};

export const loginUser = (email, password) => (dispatch) => {
  const userFound = mockDb.findUser(email, password);

  if (userFound) {
    dispatch(login(userFound));
    return true;
  }
  return false;
};

export default authSlice.reducer;
