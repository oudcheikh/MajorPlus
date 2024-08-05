// src/components/SignOut.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const SignOut = () => {
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            console.log("User signed out successfully");
            navigate("/login");
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    return <button onClick={handleSignOut}>Sign Out</button>;
};

export default SignOut;
