import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/silces/authSlice";
import { notify } from "../utils/notifications";

export const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email && password) {
      const isSuccess = await dispatch(loginUser(email, password));

      if (isSuccess) {
        navigate("/dashboard");
      } else {
        notify.error("Invalid Credentials");
      }
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit
  };
};
