import React, { useState, useEffect } from 'react';
import { Button, TextField, Typography, Box, Grid } from '@mui/material';
import { Howl } from 'howler';
import correctSoundFile from '../../../sounds/correct.mp3';
import incorrectSoundFile from '../../../sounds/incorrect.mp3';

import ActivityWrapper from '../../Reusable Components/Slides Content/ActivityWrapper';
import { useAuth } from '../../../Sign_in/v2/context/AuthContext';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../Sign_in/v2/firebase";

const objects = [
    { name: 'eau', massPerLiter: 1000, image: "images/Math/M/imagesM2/Leau.png" },
    { name: ' lait', massPerLiter: 1030, image: "images/Math/M/imagesM2/Milk.png" },
    { name: ' gasoil', massPerLiter: 830, image: "images/Math/M/imagesM2/gasoil.png" }, 
    { name: ' pétrole', massPerLiter: 900, image: "images/Math/M/imagesM2/Oil.png" },
];

const TOTAL_QUESTIONS = objects.length;

function M2A1() {
    const [currentObjectIndex, setCurrentObjectIndex] = useState(0);
    const [volume, setVolume] = useState(1);
    const [userAnswer, setUserAnswer] = useState('');
    const [isCorrect, setIsCorrect] = useState(null);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState(0);
    const [questionsAnswered, setQuestionsAnswered] = useState(0);
    const [isLastQuestion, setIsLastQuestion] = useState(false);
    const [entryTime, setEntryTime] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const { currentUser } = useAuth();

    const correctSound = new Howl({
        src: [correctSoundFile]
    });

    const incorrectSound = new Howl({
        src: [incorrectSoundFile]
    });

    useEffect(() => {
        const now = new Date();
        setEntryTime(now);
        setVolume(Math.floor(Math.random() * 10) + 1);
    }, [currentObjectIndex]);

    const convertToGrams = (input) => {
        const units = ['mg', 'cg', 'dg', 'g', 'dag', 'hg', 'kg'];
        const conversionRates = [0.001, 0.01, 0.1, 1, 10, 100, 1000];
        let total = 0;

        input.split(' ').forEach(part => {
            const value = parseFloat(part);
            const unit = part.match(/[a-z]+/i);

            if (unit && units.includes(unit[0])) {
                total += value * conversionRates[units.indexOf(unit[0])];
            }
        });

        return total;
    };

    const validateInput = (input) => {
        const unitPattern = /[a-z]+/i;
        const hasUnit = unitPattern.test(input);
        const hasNumber = /\d/.test(input);
        const hasSpace = /\s/.test(input);

        // Allow inputs without a space if they have both a number and unit (e.g., "1kg", "1000g")
        if (hasUnit && hasNumber && !hasSpace && input.match(/^\d+[a-z]+$/i)) {
            setErrorMessage('');
            return true;
        }

        if (!hasUnit || !hasNumber) {
            setErrorMessage("Veuillez inclure un nombre et une unité (par exemple, '4kg' ou '988g').");
            return false;
        }

        if (!hasSpace && input.split(' ').length === 1) {
            setErrorMessage("Veuillez séparer les unités et les nombres par un espace si vous utilisez plusieurs unités (par exemple, '1kg 200g').");
            return false;
        }

        setErrorMessage('');
        return true;
    };

    const checkAnswer = () => {
        if (!validateInput(userAnswer)) {
            setIsCorrect(null);
            return;
        }

        const correctAnswer = volume * objects[currentObjectIndex].massPerLiter;
        const convertedAnswer = convertToGrams(userAnswer);
        setIsCorrect(Math.abs(convertedAnswer - correctAnswer) < 10);
        if (Math.abs(convertedAnswer - correctAnswer) < 10) {
            setCorrectAnswers(correctAnswers + 1);
            correctSound.play();
        } else {
            setIncorrectAnswers(incorrectAnswers + 1);
            incorrectSound.play();
        }

        setQuestionsAnswered(questionsAnswered + 1);
        if (questionsAnswered + 1 >= TOTAL_QUESTIONS) {
            setIsLastQuestion(true);
        } else {
            setTimeout(() => {
                handleNewQuestion();
            }, 3000); // Wait for 3 seconds before moving to the next question
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        checkAnswer();
    };

    const handleNewQuestion = () => {
        setCurrentObjectIndex((currentObjectIndex + 1) % objects.length);
        setIsCorrect(null);
        setUserAnswer('');
        setVolume(Math.floor(Math.random() * 10) + 1);
    };

    const handleReset = () => {
        setCurrentObjectIndex(0);
        setIsCorrect(null);
        setUserAnswer('');
        setCorrectAnswers(0);
        setIncorrectAnswers(0);
        setQuestionsAnswered(0);
        setIsLastQuestion(false);
        setVolume(Math.floor(Math.random() * 10) + 1);
    };

    const checkFinalResult = () => {
        const allAnswersCorrect = correctAnswers === TOTAL_QUESTIONS;
        return { allAnswersCorrect, totalQuestions: TOTAL_QUESTIONS, correctAnswers, incorrectAnswers };
    };

    const handleFinalSubmit = () => {
        sendActivityData();
    };

    const sendActivityData = async () => {
        const endTime = new Date();
        const timeSpent = (endTime - entryTime) / 1000; // Time spent in seconds
        const { allAnswersCorrect, totalQuestions, correctAnswers, incorrectAnswers } = checkFinalResult();

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
            await addDoc(collection(db, 'users',currentUser.uid, 'activities'), activityData);
            console.log('Activity data sent:', activityData);
        } catch (e) {
            console.error('Error sending activity data:', e);
        }

        handleReset();  // Reset the activity after sending the data
    };

    return (
        <ActivityWrapper
            activityTitle={"M2A1"}
            explanationVideoUrl={"/Videos/liquid_conversion.mp4"}
            onSubmit={checkFinalResult}
            user={currentUser}
            activityName="M2A1"
        >
            <Box m={2}>
                <img 
                    src={objects[currentObjectIndex].image} 
                    alt={objects[currentObjectIndex].name} 
                    style={{ width: '50%', maxHeight: '150px', objectFit: 'contain' }} 
                />

                <Typography variant="body1" sx={{ mt: 2 }}>
                    Si tu as {volume} litre(s) du {objects[currentObjectIndex].name}, combien cela pèserait-il en kg, hg, dag et g ?
                </Typography>
                
                <form onSubmit={handleSubmit}>
                    <TextField 
                        variant="outlined" 
                        label="Ta réponse (ex: 1kg 200g)" 
                        type='object'
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)} 
                        style={{width:'100%'}}
                        sx={{ mt: 2 }}
                        error={!!errorMessage}
                        helperText={errorMessage}
                    />
                    <Box display="flex" justifyContent="center" mt={2} gap={2}>
                        <Button variant="contained" color="primary" type="submit" disabled={isCorrect !== null}>
                            Répondre
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleFinalSubmit} disabled={!isLastQuestion}>
                            Terminer
                        </Button>
                    </Box>
                </form>

                {isCorrect !== null && (
                    <Typography variant="body1" sx={{ mt: 2, color: isCorrect ? 'green' : 'red' }}>
                        {isCorrect ? 'Correct!' : 'Incorrect. Essaye encore.'
                        }
                    </Typography>
                )}
            </Box>
        </ActivityWrapper>
    );
}

export default M2A1;
