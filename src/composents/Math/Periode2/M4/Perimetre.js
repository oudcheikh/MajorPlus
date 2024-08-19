import React, { useState, useEffect } from 'react';
import { Container, Button, Select, MenuItem, Typography, Box } from '@mui/material';
import ActivityWrapper from "../../Reusable Components/Slides Content/ActivityWrapper";
import { useAuth } from "../../../Sign_in/v2/context/AuthContext";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../../Sign_in/v2/firebase";

function PerimeterActivity() {
    const [shape, setShape] = useState('');
    const [selectedShape, setSelectedShape] = useState('');
    const [correctShape, setCorrectShape] = useState('');
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [isLastQuestion, setIsLastQuestion] = useState(false);
    const [entryTime, setEntryTime] = useState(null);
    const [isDisabled, setIsDisabled] = useState(false);
    const { currentUser } = useAuth();

    const shapes = [
        { name: 'carre', path: 'M75 50 H275 V250 H75 V50' },
        { name: 'triangle', path: 'M175 50 L325 250 L25 250 Z' },
        { name: 'cercle', path: 'M175 50 A100 100 0 0 1 175 250 A100 100 0 0 1 175 50' },
        { name: 'rectangle', path: 'M75 100 H275 V200 H75 V100' },
        { name: 'quadrilateral', path: 'M175 50 L325 150 L175 250 L25 150 Z' }
    ];

    useEffect(() => {
        const now = new Date();
        setEntryTime(now);
        generateNewShape();
    }, []);

    const generateNewShape = () => {
        const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
        setShape(randomShape.path);
        setCorrectShape(randomShape.name);
        setSelectedShape('');
        setFeedbackMessage('');
        setIsDisabled(false); // Réactive la sélection pour la nouvelle question
    };

    const handleShapeSelection = () => {
        if (selectedShape === correctShape) {
            setFeedbackMessage('Bravo! Bonne réponse.');
        } else {
            setFeedbackMessage(`Mauvaise réponse. C'est un ${correctShape}.`);
        }

        setIsDisabled(true); // Désactive la sélection après la vérification

        setTimeout(() => {
            if (currentQuestion < 3) {
                nextQuestion();
            } else {
                setIsLastQuestion(true);
            }
        }, 2000);
    };

    const nextQuestion = () => {
        setCurrentQuestion(prev => prev + 1);
        generateNewShape();
    };

    const reset = () => {
        setCurrentQuestion(1);
        setIsLastQuestion(false);
        generateNewShape();
        setFeedbackMessage('');
    };

    const submitActivity = async () => {
        const endTime = new Date();
        const timeSpent = (endTime - entryTime) / 1000;

        const activityData = {
            userId: currentUser.uid,
            activityName: "PerimeterActivity",
            entryTime: entryTime.toISOString(),
            timeSpent: timeSpent,
            totalQuestions: 3,
            correctAnswers: feedbackMessage.includes('Bravo') ? 1 : 0,
            incorrectAnswers: feedbackMessage.includes('Mauvaise') ? 1 : 0,
            allAnswersCorrect: feedbackMessage.includes('Bravo') && currentQuestion === 3,
        };

        try {
            await addDoc(collection(db, 'users', currentUser.uid, 'activities'), activityData);
            console.log('Activity data sent:', activityData);
        } catch (e) {
            console.error('Error sending activity data:', e);
        }

        reset();
    };

    return (
        <ActivityWrapper
            activityTitle={"PerimeterActivity"}
            explanationVideoUrl={"/Videos/your_video_url.mp4"}
            onSubmit={handleShapeSelection}
            user={currentUser}
            activityName="PerimeterActivity"
        >
            <Container maxWidth="md" style={{padding: '20px', borderRadius: '15px' }}>
                <Box margin="20px 0">
                    <svg width="350" height="300">
                        <path d={shape} fill="none" stroke="black" strokeWidth="2"></path>
                    </svg>
                </Box>
                <Box marginBottom="15px">
                    <Typography variant="body2">Sélectionnez la forme :</Typography>
                    <Select 
                        value={selectedShape} 
                        style={{ width: '70%', textAlign: 'center' }}
                        onChange={(e) => setSelectedShape(e.target.value)}
                        disabled={isDisabled} // Désactive la sélection si isDisabled est true
                    >
                        <MenuItem value="carre">Carré</MenuItem>
                        <MenuItem value="triangle">Triangle</MenuItem>
                        <MenuItem value="cercle">Cercle</MenuItem>
                        <MenuItem value="rectangle">Rectangle</MenuItem>
                        <MenuItem value="quadrilateral">Quadrilatéral</MenuItem>
                    </Select>
                </Box>
                <Button variant="contained" color="primary" onClick={handleShapeSelection} disabled={isDisabled}>
                    Vérifier
                </Button>
                {feedbackMessage && (
                    <Typography variant="h6" style={{ marginTop: '20px', color: feedbackMessage.includes('Bravo') ? 'green' : 'red' }}>
                        {feedbackMessage}
                    </Typography>
                )}
                <Button variant="contained" color="primary" disabled={!isLastQuestion} onClick={submitActivity} style={{ marginTop: '20px' }}>
                    Terminer
                </Button>
            </Container>
        </ActivityWrapper>
    );
}

export default PerimeterActivity;
