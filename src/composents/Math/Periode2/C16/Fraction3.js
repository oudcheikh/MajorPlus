import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button, Typography } from "@mui/material";
import correctSound from '../../../sounds/correct.mp3';
import incorrectSound from '../../../sounds/incorrect.mp3';
import ActivityWrapper from "../../Reusable Components/Slides Content/ActivityWrapper";
import { useAuth } from "../../../Sign_in/v2/context/AuthContext";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../../Sign_in/v2/firebase";
import LinearProgressBar from "../../Reusable Components/ProgressIndicator";




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
    width: 80vw;
    height: 80vw;
    max-width: 520px;
    max-height: 520px;
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
    width: 25%; 
    height: 25%; 
    background-color: ${(props) => (props.isActive ? '#FFC107' : '#E1F5FE')};
    border: ${(props) => (props.isActive ? '3px dashed #FF5722' : '3px dashed #B3E5FC')};
    transition: background-color 0.4s, transform 0.3s;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1em;
    font-family: 'Comic Sans MS', sans-serif;

    @media (max-width: 767px) { 
        font-size: 0.8em; 
    }
    &:hover {
        transform: scale(1.05);
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80vw;
    max-width: 520px;
    margin-top: 20px;
`;

const ActionButton = styled.button`
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 50%;
    font-size: 1.5em;
    cursor: pointer;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);

    &:hover {
        background-color: #45a049;
    }
`;

const Message = styled.p`
    font-size: 1.2em;
    margin-top: 20px;
    font-family: 'Comic Sans MS', sans-serif;
    text-align: center;
    color: ${(props) => (props.isCorrect ? 'green' : 'red')};

    @media (max-width: 767px) {
        font-size: 1em;
    }
`;

const FractionActivity = () => {
    const TOTAL_FRACTIONS = 16;
    const [activeFractions, setActiveFractions] = useState(Array(TOTAL_FRACTIONS).fill(false));
    const [requiredSelection, setRequiredSelection] = useState(Math.ceil(Math.random() * TOTAL_FRACTIONS));
    const [isCorrect, setIsCorrect] = useState(null);
    const [questionsAnswered, setQuestionsAnswered] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [isLastQuestion, setIsLastQuestion] = useState(false);
    const [entryTime, setEntryTime] = useState(null);
    const { currentUser } = useAuth();
    const totalQuestions = 3;

    useEffect(() => {
        const now = new Date();
        setEntryTime(now);
    }, []);

    const toggleFraction = (index) => {
        const updatedActiveFractions = [...activeFractions];
        updatedActiveFractions[index] = !updatedActiveFractions[index];
        setActiveFractions(updatedActiveFractions);
    };
    const playSound = (src) => {
        const audio = new Audio(src);
        audio.play();
    };

    const checkAnswer = () => {
        setQuestionsAnswered(prev => prev + 1);
        const correctAnswer = activeFractions.filter(val => val).length === requiredSelection;
        setIsCorrect(correctAnswer);

        if (correctAnswer) {
            playSound(correctSound);
        } else {
            playSound(incorrectSound);
        }

        if (currentQuestion < 3) {
            setTimeout(() => {
                setCurrentQuestion(prev => prev + 1);
                resetForNextQuestion();
            }, 2000);
        } else {
            setIsLastQuestion(true);
        }
    };

    const resetForNextQuestion = () => {
        setActiveFractions(Array(TOTAL_FRACTIONS).fill(false));
        setIsCorrect(null);
        setRequiredSelection(Math.ceil(Math.random() * TOTAL_FRACTIONS));
    };

    const submitActivity = () => {
        const endTime = new Date();
        const timeSpent = (endTime - entryTime) / 1000; // Temps passé en secondes
        const correctAnswers = activeFractions.filter(val => val).length === requiredSelection ? 1 : 0;

        const activityData = {
            userId: currentUser.uid,
            activityName: "FractionActivity",
            entryTime: entryTime.toISOString(),
            timeSpent: timeSpent,
            totalQuestions: 3,
            correctAnswers: correctAnswers,
            incorrectAnswers: 3 - correctAnswers,
            allAnswersCorrect: correctAnswers === 3
        };

        addDoc(collection(db, 'activities'), activityData)
            .then(() => console.log('Activity data sent:', activityData))
            .catch((e) => console.error('Error sending activity data:', e));

        resetActivity(); // Reset all states after submitting
    };

    const resetActivity = () => {
        setActiveFractions(Array(TOTAL_FRACTIONS).fill(false));
        setIsCorrect(null);
        setQuestionsAnswered(0);
        setCurrentQuestion(1);
        setIsLastQuestion(false);
        setRequiredSelection(Math.ceil(Math.random() * TOTAL_FRACTIONS));
        setEntryTime(new Date());
        setIsLastQuestion(false)
    };

    return (
        <ActivityWrapper
            activityTitle={"FractionActivity"}
            explanationVideoUrl={"/Videos/your_video_url.mp4"}
            onSubmit={checkAnswer}
            user={currentUser}
            activityName="FractionActivity"
        >
<LinearProgressBar currentStep={questionsAnswered} totalSteps={totalQuestions} />

            <MainContainer>
                <StyledText>
                    Question {currentQuestion}/3: Sélectionnez {requiredSelection} fractions parmi {TOTAL_FRACTIONS}
                </StyledText>
                <Box>
                    {activeFractions.map((isActive, index) => (
                        <Fraction
                            key={index}
                            isActive={isActive}
                            onClick={() => toggleFraction(index)}
                        />
                    ))}
                </Box>
                <ButtonContainer>
                    <ActionButton onClick={checkAnswer}disabled={isLastQuestion}  >&#10004;</ActionButton> {/* Symbole OK */}
                    <Button variant="contained" color="primary" disabled={!isLastQuestion} onClick={submitActivity} style={{ marginLeft: '10px' }}>
                        Terminer
                    </Button>
                </ButtonContainer>
                {isCorrect !== null && (
                    <Message isCorrect={isCorrect}>
                        {isCorrect 
                            ? `🎉 Bravo! 🎉 C'est exactement ${requiredSelection} fractions parmi 16, c'est-à-dire ${requiredSelection}/16.` 
                            : `😞 Désolé, votre sélection représente ${activeFractions.filter(val => val).length}/16 et non ${requiredSelection}/16.`
                        }
                    </Message>
                )}
            </MainContainer>
        </ActivityWrapper>
    );
}

export default FractionActivity;
