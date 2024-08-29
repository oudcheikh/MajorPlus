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

function StepFinale({ onFinish }) {
    const navigate = useNavigate()



    const handleFinish = () => {
        if (onFinish) {
            onFinish();
        }
        navigate('/ProgressTracker');
    };
    return (


        <div
        >

            <ButtonContainer>
                <Button variant="contained" onClick={handleFinish}  >  Chapitre terminer  </Button>
            </ButtonContainer>
           </div>

    );
}

export default StepFinale;