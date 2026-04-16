import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/silces/authSlice";

export const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      const isSuccess = dispatch(loginUser(email, password));

      if (isSuccess) {
        navigate("/dashboard");
      } else {
        alert("Invalid email or password");
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
