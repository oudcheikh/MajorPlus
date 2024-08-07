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
            navigate("/Math");
        } catch (error) {
            console.error("Error signing in:", error);
        }
    };

    return (
        <Container maxWidth="sm">
            <Box mt={5}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Connecter vous
                </Typography>
                <form onSubmit={handleSignIn}>
                    <TextField label="Email" variant="outlined" type="Email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <TextField label="Password" variant="outlined" type="password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        se connecter
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default SignIn;
