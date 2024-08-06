import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = () => {
    const { currentUser } = useAuth();

    if (!currentUser) {
        console.log("User not authenticated");

        return <Navigate to="/signin" />;
    }
    console.log(currentUser);

    return <Outlet />;
};

export default ProtectedRoute;
