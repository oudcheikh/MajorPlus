import React, { useState, useEffect } from 'react';
import { Button, TextField, Typography, Box, Grid } from '@mui/material';
import useSound from 'use-sound';
import correctSound from '../../../sounds/correct.mp3';
import incorrectSound from '../../../sounds/incorrect.mp3';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReplyIcon from '@mui/icons-material/Reply';
import styled from 'styled-components';
import ActivityWrapper from '../../Reusable Components/Slides Content/ActivityWrapper';
import { useAuth } from '../../../Sign_in/v2/context/AuthContext';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../Sign_in/v2/firebase";

const StyledText = styled.div`
box-sizing: border-box;
width: 100%; 
height: 80%; 
background-color: ${(props) => (props.isActive ? '#FFC107' : '#E1F5FE')};
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

const objects = [
    { name: 'Banane', mass: 170, image: "images/Math/M/imagesM2/Banan.png" },
    { name: 'Pomme', mass: 150, image: "images/Math/M/imagesM2/Pomme.png" },
    { name: 'Orange', mass: 130, image: "images/Math/M/imagesM2/Orange.png" },
    { name: 'Pasteque', mass: 1245, image: "images/Math/M/imagesM2/Pasteque.png" },
];

const TOTAL_QUESTIONS = 7;  // Nombre total de questions

function M2A1() {
    const [objectPair, setObjectPair] = useState([]);
    const [quantities, setQuantities] = useState([]);
    const [answer, setAnswer] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [showCongratulations, setShowCongratulations] = useState(false);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState(0);
    const [questionsAnswered, setQuestionsAnswered] = useState(0);
    const [isLastQuestion, setIsLastQuestion] = useState(false);
    const [entryTime, setEntryTime] = useState(null);
    const { currentUser } = useAuth();
    const [playCorrect] = useSound(correctSound);
    const [playIncorrect] = useSound(incorrectSound);

    useEffect(() => {
        const now = new Date();
        setEntryTime(now);
        generateObjectPair();
    }, []);

    const generateObjectPair = () => {
        const newObjectPair = [...objects].sort(() => 0.5 - Math.random()).slice(0, 2);
        const newQuantities = newObjectPair.map(() => Math.floor(Math.random() * 5) + 1);
        setObjectPair(newObjectPair);
        setQuantities(newQuantities);
        setShowMessage(false);
        setShowCongratulations(false);
        setAnswer('');
    };

    const totalMass = () => {
        return objectPair.reduce((sum, obj, index) => sum + obj.mass * quantities[index], 80);
    };

    const calculateAnswer = () => {
        const calculatedMass = totalMass();
        const userAnswer = parseInt(answer);
        setShowMessage(true);
        if (userAnswer === calculatedMass) {
            setCorrectAnswers(correctAnswers + 1);
            setShowCongratulations(true);
            playCorrect();
        } else {
            setIncorrectAnswers(incorrectAnswers + 1);
            setShowCongratulations(false);
            playIncorrect();
        }

        setQuestionsAnswered(questionsAnswered + 1);
        if (questionsAnswered + 1 >= TOTAL_QUESTIONS) {
            setIsLastQuestion(true);
        } else {
            setTimeout(() => {
                generateObjectPair();
            }, 3000);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        calculateAnswer();
    };

    const checkAnswer = () => {
        const allAnswersCorrect = correctAnswers === TOTAL_QUESTIONS;
        return { allAnswersCorrect, totalQuestions: TOTAL_QUESTIONS, correctAnswers, incorrectAnswers };
    };

    const handleClickOpen = () => {
        sendActivityData();
    };

    const sendActivityData = async () => {
        const endTime = new Date();
        const timeSpent = (endTime - entryTime) / 1000; // Temps passé en secondes
        const { allAnswersCorrect, totalQuestions, correctAnswers, incorrectAnswers } = checkAnswer();

        const activityData = {
            userId: currentUser.uid,
            activityName: "M2A1",
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
            resetActivity();
        } catch (e) {
            console.error('Error sending activity data:', e);
        }
    };

    const resetActivity = () => {
        setCorrectAnswers(0);
        setIncorrectAnswers(0);
        setQuestionsAnswered(0);
        setIsLastQuestion(false);
        generateObjectPair(); // Reset to the first question
    };

    return (
        <ActivityWrapper
            activityTitle={"M2A1"}
            explanationVideoUrl={"/Videos/some_video.mp4"}
            onSubmit={checkAnswer}
            user={currentUser}
            activityName="M2A1"
        >
            <Box m={2}>
                {objectPair.length === 2 ? (
                    <>
                        <Grid container spacing={2} justifyContent="center">
                            {objectPair.map((object, index) => (
                                <Grid item xs={6} sm={4} md={3} key={index} align="center">
                                    <img 
                                        src={object.image} 
                                        alt={object.name} 
                                        style={{ width: '60%', maxHeight: '130px' }} 
                                    />
                                </Grid>
                            ))}
                        </Grid>
                        <Typography variant="body1" sx={{ mt: 2 }}>
                            <StyledText>
                                Avec {quantities[0]} {objectPair[0].name}(s) de {objectPair[0].mass}g, {quantities[1]} {objectPair[1].name}s de {objectPair[1].mass}g, et un panier de 80g, quelle est la masse totale en g? 
                            </StyledText>
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Réponse"
                                type="number"
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                                fullWidth
                                sx={{ mt: 2 }}
                            />
                            <Box display="flex" justifyContent="center" mt={2}>
                                <Button variant="contained" color="primary" type="submit" style={{ marginRight: '10px' }} disabled={showMessage}>
                                    Répondre
                                </Button>
                                <Button variant="contained" color="primary" disabled={!isLastQuestion} onClick={handleClickOpen}>
                                    Terminer
                                </Button>
                            </Box>
                        </form>
                        {showMessage && (
                            <Typography variant="body1" sx={{ mt: 2 }} style={{ color: showCongratulations ? 'green' : 'red' }}>
                                {showCongratulations ? 'Félicitations! Vous avez donné la bonne réponse!' : 'Réponse incorrecte. Essayez encore!'}
                            </Typography>
                        )}
                    </>
                ) : (
                    <Typography variant="body1">
                        Chargement...
                    </Typography>
                )}
            </Box>
        </ActivityWrapper>
    );
}

export default M2A1;
