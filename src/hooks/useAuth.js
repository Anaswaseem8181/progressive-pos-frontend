import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/silces/authSlice";

export const useAuth = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  return {
    user,
    isAuthenticated: !!user,
    login: (email, role) => dispatch(login({ email, role })),
    logout: () => dispatch(logout()),
  };
};
