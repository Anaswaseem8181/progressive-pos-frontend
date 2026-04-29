import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerValidation } from "../utils/registerValidation";
import { registerUser } from "../redux/silces/authSlice";
import { useAuth } from "../hooks/useAuth";
import { notify } from "../utils/notifications";

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
        resolver: yupResolver(registerValidation),
    });

    const onSubmit = async (data) => {
        setIsLoading(true);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        dispatch(registerUser(data));
        notify.success("Account created! Let's set up your subscription.");
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
