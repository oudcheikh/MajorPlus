// src/components/SignUp.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignUp = async (event) => {
        event.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log("User signed up successfully");
            navigate("/dashboard");
        } catch (error) {
            console.error("Error signing up:", error);
        }
    };

    return (
        <form onSubmit={handleSignUp}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignUp;
