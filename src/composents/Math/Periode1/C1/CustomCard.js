import React, { useState } from 'react';
import { Card, CardContent, Typography, RadioGroup, FormControlLabel, Radio, Button, Box } from '@mui/material';
import styled, { css } from 'styled-components';

const CustomCard = ({ question, options, correctAnswer, explanation }) => {
    const [selectedValue, setSelectedValue] = useState('');
    const [isCorrect, setIsCorrect] = useState(null);
    const [showExplanation, setShowExplanation] = useState(false);

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        setIsCorrect(null);
    };

    const handleSubmit = () => {
        setIsCorrect(selectedValue === correctAnswer);
    };

    const handleExplanation = () => {
        setShowExplanation(true);
    };

    const handleBack = () => {
        setShowExplanation(false);
    };

    return (
        <CardContainer>
            <CardInner flipped={showExplanation}>
                <CardFront>
                    <CardContent>
                        <Typography variant="h6" component="div">
                            {question}
                        </Typography>
                        <RadioGroup value={selectedValue} onChange={handleChange}>
                            {options.map((option, index) => (
                                <FormControlLabel key={index} value={option} control={<Radio />} label={option} />
                            ))}
                        </RadioGroup>
                        {isCorrect !== null && (
                            <Typography variant="body1" color={isCorrect ? 'green' : 'red'}>
                                {isCorrect ? 'Correct!' : 'Incorrect'}
                            </Typography>
                        )}
                        <ButtonContainer>
                            <StyledButton 
                                variant="contained" 
                                disabled={!selectedValue} 
                                onClick={handleSubmit}
                                style={{margin: '10px'}}
                            >
                                Submit
                            </StyledButton>
                            <br></br>
                            <StyledButton variant="outlined"style={{margin: '10px'}} onClick={handleExplanation}>
                                Explication
                            </StyledButton>
                        </ButtonContainer>
                    </CardContent>
                </CardFront>
                <CardBack>
                    <CardContent>
                        <Typography variant="h6" component="div">
                        Explication
                        </Typography>
                        <Typography variant="body1">
                            {explanation}
                        </Typography>
                        <ButtonContainer>
                            <StyledButton variant="outlined" onClick={handleBack}>
                                Retour
                            </StyledButton>
                        </ButtonContainer>
                    </CardContent>
                </CardBack>
            </CardInner>
        </CardContainer>
    );
}

const CardContainer = styled.div`
    width: 300px;
    margin: 20px auto;
    perspective: 1000px;
`;

const CardInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    ${({ flipped }) => flipped && css`
        transform: rotateY(180deg);
    `}
`;

const CardFront = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background-color: #d3d3d3; /* Couleur de fond gris plus foncé */
    color: black; /* Texte en noir */
    border: 1px solid #d3d3d3; /* Bordure de la même couleur que le fond */
`;

const CardBack = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transform: rotateY(180deg);
    background-color: #c0c0c0; /* Couleur de fond gris plus foncé */
    color: black; /* Texte en noir */
    border: 1px solid #d3d3d3; /* Bordure de la même couleur que le fond */
`;

const StyledButton = styled(Button)`
    flex: 1;
    margin: 10px 5px; /* Ajouter une marge de 10px en haut et en bas, 5px à gauche et à droite */
    &:hover {
        background-color: #555 !important; /* Couleur de fond gris moyen au survol */
    }
`;

const ButtonContainer = styled(Box)`
    display: flex;
    justify-content: space-between;
    margin-top: 20px; /* Espace entre le groupe de boutons et les éléments au-dessus */
`;

export default CustomCard;
