import React from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import './PaginationStyle.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const PeriodPagination = ({ lien }) => {
    const navigate = useNavigate();

    const handleBackButton = () => {
        navigate('/');
    };

    const goToPrevious = () => {
        console.log("Go to previous clicked, navigating to:", lien);
        navigate(lien);
    };

    return (
        <div style={{ width: '100%', textAlign: "left", display: 'block', paddingRight: "40px" }}>
           {/*  <h1>
                <strong>
                    <i className="fas fa-home" style={{ fontSize: "24px", color: "#339fff" }} onClick={handleBackButton}></i>
                </strong>
            </h1> */}
            <IconButton onClick={handleBackButton} className="arrow-icon" style={{ padding: '0px' }}>
                <i className="fas fa-arrow-left" style={{ fontSize: "24px", color: "#339fff" }}></i>
            </IconButton>

            <br />
        </div>
    );
};

export default PeriodPagination;
