// src/components/SignIn.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignIn = async (event) => {
        event.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("User signed in successfully");
            navigate("/C1_new");
        } catch (error) {
            console.error("Error signing in:", error);
        }
    };

    return (
        <Container maxWidth="sm">
            <Box mt={5}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Sign In
                </Typography>
                <form onSubmit={handleSignIn}>
                    <TextField label="Email" variant="outlined" fullWidth margin="normal" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <TextField label="Password" variant="outlined" type="password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Sign In
                    </Button>
                </form>
                <a style={{ marginTop: "10px" }} onClick={() => navigate("/signup")}>
                    Dont have an account? click here to sign up
                </a>
            </Box>
        </Container>
    );
};

export default SignIn;
