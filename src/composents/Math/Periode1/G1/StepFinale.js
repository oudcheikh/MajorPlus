import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ButtonContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
});

    const StepFinale = ({ onFinish }) =>{
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


        <div>

            <ButtonContainer>

                <Button variant="contained" onClick={handleFinish}  >  G1  Terminer  </Button>



            </ButtonContainer>


        </div>

    );
}

export default StepFinale;