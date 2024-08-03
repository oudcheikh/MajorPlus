import { Button, Dialog } from "@mui/material";
import React from "react";

const SuccessDialog = (props) => {
    const { onClose, open } = props;
    const handleClose = () => {
        onClose();
    };
    return (
        <Dialog open={open} onClose={handleClose}>
            <h1>Success</h1>
            <Button onClick={handleClose}>Close</Button>
        </Dialog>
    );
};

export default SuccessDialog;
