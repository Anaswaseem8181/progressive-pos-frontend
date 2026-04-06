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
      const { email, role } = action.payload;

      const name = email.split("@")[0] || "User";

      const user = {
        id: Math.random().toString(36).substr(2, 9),
        name: name.charAt(0).toUpperCase() + name.slice(1),
        email,
        role,
      };

      state.user = user;
      localStorage.setItem("pos_user", JSON.stringify(user));
    },

    logout: (state) => {
      state.user = null;
      localStorage.removeItem("pos_user");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
