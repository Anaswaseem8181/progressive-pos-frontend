import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../utils/registerSchema";
import { registerUser } from "../redux/silces/authSlice";
import { useAuth } from "../hooks/useAuth";

export const useRegister = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isAuthenticated } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [showCancelModal, setShowCancelModal] = useState(false);

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/dashboard");
        }
    }, [isAuthenticated, navigate]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(registerSchema),
    });

    const onSubmit = async (data) => {
        setIsLoading(true);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        dispatch(registerUser(data));
        navigate("/subscription", { state: { registrationData: data } });
    };

    const handleCancel = () => {
        setShowCancelModal(true);
    };

    const confirmCancel = () => {
        navigate("/");
    };

    const closeCancelModal = () => {
        setShowCancelModal(false);
    };

    return {
        register,
        handleSubmit,
        onSubmit,
        errors,
        isLoading,
        showCancelModal,
        handleCancel,
        confirmCancel,
        closeCancelModal
    };
};
