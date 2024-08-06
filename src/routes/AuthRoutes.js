import React from "react";
import { Route, Routes } from "react-router-dom";
import SignOut from "../composents/Sign_in/v2/components/signOut";
import SignUp from "../composents/Sign_in/v2/components/SignUp";
import SignIn from "../composents/Sign_in/v2/components/SignIn";

const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signout" element={<SignOut />} />
        </Routes>
    );
};

export default AuthRoutes;
