import React, { useState, useEffect } from "react";
import { Grid, TextField, Button, Typography } from "@mui/material";

const MagicSquare = ({ onVerify, lockedValuesCount = 4 }) => {
    const generateInitialValues = () => {
        const initialValues = Array(9).fill("");
        const lockedIndices = new Set();

        // Randomly select indices to lock
        while (lockedIndices.size < lockedValuesCount) {
            const randomIndex = Math.floor(Math.random() * 9);
            lockedIndices.add(randomIndex);
        }

        // Fill these indices with random numbers (1-9)
        lockedIndices.forEach((index) => {
            initialValues[index] = Math.floor(Math.random() * 9) + 1;
        });

        return initialValues;
    };

    const [values, setValues] = useState(generateInitialValues());

    const handleChange = (index, newValue) => {
        const newValues = [...values];
        if (!values[index]) {
            // Only allow change if the input is not locked
            newValues[index] = newValue;
            setValues(newValues);
        }
    };

    const verifyMagicSquare = () => {
        const rows = [
            [values[0], values[1], values[2]],
            [values[3], values[4], values[5]],
            [values[6], values[7], values[8]],
        ];
        const cols = [
            [values[0], values[3], values[6]],
            [values[1], values[4], values[7]],
            [values[2], values[5], values[8]],
        ];
        const diagonals = [
            [values[0], values[4], values[8]],
            [values[2], values[4], values[6]],
        ];

        const sum = (arr) => arr.reduce((a, b) => a + parseInt(b || 0, 10), 0);
        const targetSum = sum(rows[0]);

        const allSumsEqual = rows.every((row) => sum(row) === targetSum) && cols.every((col) => sum(col) === targetSum) && diagonals.every((diag) => sum(diag) === targetSum);

        onVerify(allSumsEqual);
    };

    return (
        <div style={{ padding: "16px", maxWidth: "200px", margin: "0 auto" }}>
            <Typography variant="h6" gutterBottom>
                Fill the Magical Square:
            </Typography>
            <Grid container spacing={1}>
                {values.map((value, index) => (
                    <Grid item xs={4} key={index}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            value={value}
                            onChange={(e) => handleChange(index, e.target.value)}
                            inputProps={{ style: { textAlign: "center" } }}
                            disabled={!!value} // Disable input if it has an initial value
                        />
                    </Grid>
                ))}
            </Grid>
            <Button variant="contained" color="primary" onClick={verifyMagicSquare} style={{ marginTop: "16px" }}>
                Verify
            </Button>
        </div>
    );
};

export default MagicSquare;
