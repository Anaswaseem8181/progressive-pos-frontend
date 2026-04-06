import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";

export const useLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("admin");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            login(email, role);
            navigate("/dashboard");
        }
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        role,
        setRole,
        handleSubmit
    };
};
