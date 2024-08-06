// src/components/SignOut.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Button } from "@mui/material";

const SignOut = () => {
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            console.log("User signed out successfully");
            navigate("/signin");
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    return (
        <Button variant="contained" color="secondary" onClick={handleSignOut}>
            Sign Out
        </Button>
    );
};

export default SignOut;
