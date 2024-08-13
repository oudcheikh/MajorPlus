import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Box, Button } from '@mui/material';
import ActivityWrapper from "../../../Reusable Components/Slides Content/ActivityWrapper";
import { useAuth } from "../../../../Sign_in/v2/context/AuthContext";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../../Sign_in/v2/firebase";
import { useNavigate } from 'react-router-dom';

const ButtonContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
});



function Table_mesure({ onFinish }) {
    const { currentUser } = useAuth();
    const navigate = useNavigate()


    const checkAnswer = () => {
    }


    const handleFinish = () => {
        if (onFinish) {
            onFinish();
        }
        navigate('/ProgressTracker');
    };
    return (


        <div >

            <ButtonContainer>
            <Button variant="contained" onClick={handleFinish}  >  C2  Terminer  </Button>
            </ButtonContainer>
        </div>

    );
}

export default Table_mesure;