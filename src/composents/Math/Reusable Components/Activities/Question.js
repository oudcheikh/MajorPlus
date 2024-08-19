import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const Question = ({ question, onAnswerChange, value }) => {
    const handleChange = (e) => {
        onAnswerChange(e.target.value);
    };

    return (
        <div style={{ marginBottom: "16px" }}>
            <Typography variant="h6" gutterBottom>
                {question}
            </Typography>
            <TextField fullWidth type="email" variant="outlined" value={value} onChange={handleChange} placeholder="Your answer..." />
        </div>
    );
};

export default Question;
