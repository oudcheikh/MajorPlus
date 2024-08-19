import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button, Box as MuiBox, Typography } from "@mui/material";
import ActivityWrapper from "../../Reusable Components/Slides Content/ActivityWrapper";
import { useAuth } from "../../../Sign_in/v2/context/AuthContext";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../../Sign_in/v2/firebase";

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 30vh;
`;

const StyledText = styled.p`
    box-sizing: border-box;
    background-color: ${(props) => (props.isActive ? '#FFC107' : '#E1F5FE')};
    border: ${(props) => (props.isActive ? '3px dashed #FF5722' : '3px dashed #B3E5FC')};
    transition: background-color 0.4s, transform 0.3s;
    cursor: pointer;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1em;
    font-family: 'Comic Sans MS', sans-serif;
    &:hover {
        transform: scale(1.05);
    }
`;

const Box = styled.div`
    width: 180vw;  
    height: 80vw; 
    max-width: 260px;  
    max-height: 260px;  
    border: 4px solid #4CAF50;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
    border-radius: 15px;
    background-color: #FFEB3B;
    margin-bottom: 20px;
`;

const Fraction = styled.div`
    box-sizing: border-box;
    width: 50%; 
    height: 50%; 
    background-color: ${(props) => (props.isActive ? '#FFC107' : '#E1F5FE')};
    border: ${(props) => (props.isActive ? '3px dashed #FF5722' : '3px dashed #B3E5FC')};
    transition: background-color 0.4s, transform 0.3s;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1em;
    font-family: 'Comic Sans MS', sans-serif;
    &:hover {
        transform: scale(1.05);
    }
`;

const ResetButton = styled.button`
    background-color: #4CAF50;
    color: white;
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    font-size: 1.5em;
    cursor: pointer;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        background-color: #45a049;
    }
`;

const FractionActivity = () => {
    const [activeFractions, setActiveFractions] = useState([false, false, false, false]);
    const [isValid, setIsValid] = useState(null);
    const [questionsAnswered, setQuestionsAnswered] = useState(0);
    const [isLastQuestion, setIsLastQuestion] = useState(false);
    const [entryTime, setEntryTime] = useState(null);
    const { currentUser } = useAuth();

    useEffect(() => {
        const now = new Date();
        setEntryTime(now);
    }, []);

    const toggleFraction = (index) => {
        const updatedActiveFractions = [...activeFractions];
        updatedActiveFractions[index] = !updatedActiveFractions[index];
        setActiveFractions(updatedActiveFractions);
    };

    const reset = () => {
        setActiveFractions([false, false, false, false]);
        setIsValid(null);
        setIsLastQuestion(false);
    };

    const handleValidate = () => {
        setQuestionsAnswered(prev => prev + 1);
        const correctAnswer = activeFractions.filter(isActive => isActive).length === 1;
        setIsValid(correctAnswer);

        if (correctAnswer) {
            setIsLastQuestion(true);
        }
    };

    const checkAnswer = () => {
        const totalQuestions = questionsAnswered;
        const allAnswersCorrect = isValid === true;
        return { allAnswersCorrect, totalQuestions, correctAnswers: isValid ? 1 : 0, incorrectAnswers: !isValid ? 1 : 0 };
    };

    const sendActivityData = async () => {
        const endTime = new Date();
        const timeSpent = (endTime - entryTime) / 1000; // Temps passé en secondes
        const { allAnswersCorrect, totalQuestions, correctAnswers, incorrectAnswers } = checkAnswer();

        const activityData = {
            userId: currentUser.uid,
            activityName: "FractionActivity",
            entryTime: entryTime.toISOString(),
            timeSpent: timeSpent,
            totalQuestions,
            correctAnswers,
            incorrectAnswers,
            allAnswersCorrect
        };

        try {
            await addDoc(collection(db, 'activities'), activityData);
            console.log('Activity data sent:', activityData);
        } catch (e) {
            console.error('Error sending activity data:', e);
        }
    };

    const handleClickOpen = () => {
        sendActivityData();
        reset();
    };

    return (
        <ActivityWrapper
            activityTitle={"FractionActivity"}
            explanationVideoUrl={"/Videos/your_video_url.mp4"}
            onSubmit={checkAnswer}
            user={currentUser}
            activityName="FractionActivity"
        >
            <MainContainer>
                <StyledText>Cocher une fraction</StyledText>
                <Box>
                    {activeFractions.map((isActive, index) => (
                        <Fraction
                            key={index}
                            isActive={isActive}
                            onClick={() => toggleFraction(index)}
                        >
                            {isActive && 'Une fraction parmi 4 donc 1/4'}
                        </Fraction>
                    ))}
                </Box>
                <MuiBox my={2}>
                    <Button variant="contained" color="primary" onClick={handleValidate} style={{ marginRight: '10px' }}>
                        Vérifier
                    </Button>
                    <ResetButton onClick={reset}>
                        ↺
                    </ResetButton>
                    <Button variant="contained" color="primary" disabled={!isLastQuestion} onClick={handleClickOpen} style={{ marginLeft: '10px' }}>
                        Terminer
                    </Button>
                </MuiBox>
                {isValid !== null && (
                    <MuiBox mt={2}>
                        <Typography variant="body1" style={{ color: isValid ? '#28a745' : '#ff0000', textAlign: 'center' }}>
                            {isValid ? "Félicitations! Vous avez sélectionné la bonne fraction!" : "Réponse incorrecte. Essayez encore!"}
                        </Typography>
                    </MuiBox>
                )}
            </MainContainer>
        </ActivityWrapper>
    );
}

export default FractionActivity;
