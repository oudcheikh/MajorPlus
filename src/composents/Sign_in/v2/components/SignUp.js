import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { TextField, Button, Container, Typography, Box, Alert } from "@mui/material";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [address, setAddress] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSignUp = async (event) => {
        event.preventDefault();
        setError(null); // Reset error message
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log("User signed up successfully");
            navigate("/signin"); // Redirige vers la page de connexion après une inscription réussie
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <Container maxWidth="sm">
            <Box mt={5}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Créer votre compte
                </Typography>
                {error && <Alert severity="error">{error}</Alert>}
                <form onSubmit={handleSignUp}>
                    <TextField
                        label="Prénom"
                        variant="outlined"
                        type="Prénom"
                        fullWidth
                        margin="normal"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <TextField
                        label="Nom"
                        variant="outlined"
                        type="Nom"
                        fullWidth
                        margin="normal"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <TextField
                        label="Date de naissance"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                    />
                    <TextField
                        label="Adresse"
                        variant="outlined"
                        type="Adresse"
                        fullWidth
                        margin="normal"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        type="Email"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        fullWidth
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        S'inscrir
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default SignUp;