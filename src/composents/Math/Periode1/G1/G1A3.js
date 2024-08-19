import React, { useState, useEffect } from 'react';
import { Button, Typography, Box } from '@mui/material';
import { Howl } from 'howler';
import correctSoundFile from '../../../sounds/correct.mp3';
import incorrectSoundFile from '../../../sounds/incorrect.mp3';
import ActivityWrapper from '../../Reusable Components/Slides Content/ActivityWrapper';
import { useAuth } from '../../../Sign_in/v2/context/AuthContext';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../Sign_in/v2/firebase";
import { Container, Card, StyledText, Canvas, ContinueButton } from '../../../Styles/MajorStyles';
import Grid from './Gride';

const TOTAL_QUESTIONS = 7;

function Geo1() {
    const [lines, setLines] = useState(null);
    const [drawing, setDrawing] = useState(false);
    const [message, setMessage] = useState('Tracez deux lignes parallèles');
    const [questions, setQuestions] = useState([]);
    const [isCorrect, setIsCorrect] = useState(null);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState(0);
    const [questionsAnswered, setQuestionsAnswered] = useState(0);
    const [isLastQuestion, setIsLastQuestion] = useState(false);
    const [entryTime, setEntryTime] = useState(null);
    const [currentColor, setCurrentColor] = useState(0);
    const colors = ['#FF1744', '#00E676', '#651FFF', '#FF9100', '#E1F5FE'];
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
        newCoordinates();
    }, []);

    const disableScrolling = () => {
        document.body.style.overflow = 'hidden';
    };

    const enableScrolling = () => {
        document.body.style.overflow = '';
    };

    const getRelativeCoordinates = (e) => {
        let clientX, clientY;
        if (e.touches) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }
        const rect = e.currentTarget.getBoundingClientRect();
        return { x: clientX - rect.left, y: clientY - rect.top };
    };

    const calculateDistance = (start, end) => {
        return Math.sqrt(
            (end[0] - start[0]) ** 2 + (end[1] - start[1]) ** 2
        );
    };

    const startLine = (e) => {
        e.preventDefault();
        e.stopPropagation();
        disableScrolling();
        if (e.target.tagName === "BUTTON") return;

        const coords = getRelativeCoordinates(e);
        setLines({ start: [coords.x, coords.y], end: [coords.x, coords.y] });
        setDrawing(true);
    };

    const moveLine = (e) => {
        disableScrolling();
        e.preventDefault();
        e.stopPropagation();
        if (!drawing || !lines) return;

        const coords = getRelativeCoordinates(e);
        setLines((prevLine) => ({ start: prevLine.start, end: [coords.x, coords.y] }));
    };

    const endLine = (e) => {
        e.preventDefault();
        e.stopPropagation();
        enableScrolling();

        if (!drawing || !lines) return;

        const distance = calculateDistance(lines.start, lines.end);
        if (distance < 30) {
            setMessage('La ligne est trop courte. Essayez à nouveau.');
            setLines(null);
        } else {
            if (areParallel()) {
                setMessage(<span style={{ color: 'green' }}>Correct! Repeat.</span>);
                correctSound.play();
                setCorrectAnswers(correctAnswers + 1);
            } else {
                setMessage(<span style={{ color: 'red' }}>Incorrect! The line is not parallel. Repeat.</span>);
                incorrectSound.play();
                setIncorrectAnswers(incorrectAnswers + 1);
            }

            setQuestionsAnswered(questionsAnswered + 1);
            if (questionsAnswered + 1 >= TOTAL_QUESTIONS) {
                setIsLastQuestion(true);
            } else {
                setTimeout(() => {
                    newCoordinates();
                }, 2000);
            }

            setTimeout(() => {
                setMessage('Tracez deux lignes parallèles');
                setLines(null);
            }, 2000);
        }

        setDrawing(false);
    };

    const THRESHOLD = 0.3;

    const newCoordinates = () => {
        const newQuestions = [generateNewCoordinates()];
        setQuestions(newQuestions);
    };

    const generateNewCoordinates = () => {
        const X1 = Math.floor(Math.random() * 100) + 1;
        const Y1 = Math.floor(Math.random() * 100) + 1;
        const X2 = Math.floor(Math.random() * 1000) + 1;
        const Y2 = Math.floor(Math.random() * 1000) + 1;
        return { X1, X2, Y1, Y2 };
    };

    const areParallel = () => {
        const X1 = questions.reduce((sum, q) => sum + Math.floor(q.X1), 0);
        const Y1 = questions.reduce((sum, q) => sum + Math.floor(q.Y1), 0);
        const X2 = questions.reduce((sum, q) => sum + Math.floor(q.X2), 0);
        const Y2 = questions.reduce((sum, q) => sum + Math.floor(q.Y2), 0);

        if (!lines) return false;

        const referenceLine = { start: [X1, Y1], end: [X2, Y2] };

        const deltaY1 = lines.end[1] - lines.start[1];
        const deltaX1 = lines.end[0] - lines.start[0];

        const deltaY2 = referenceLine.end[1] - referenceLine.start[1];
        const deltaX2 = referenceLine.end[0] - referenceLine.start[0];

        const MARGIN = 5;

        if (Math.abs(deltaX1) < MARGIN && Math.abs(deltaX2) < MARGIN) {
            return true;
        }

        if (Math.abs(deltaY1) < MARGIN && Math.abs(deltaY2) < MARGIN) {
            return true;
        }

        if ((Math.abs(deltaX1) < MARGIN || Math.abs(deltaX2) < MARGIN) || (Math.abs(deltaY1) < MARGIN || Math.abs(deltaY2) < MARGIN)) {
            return false;
        }

        const m1 = deltaY1 / deltaX1;
        const m2 = deltaY2 / deltaX2;

        return Math.abs(m1 - m2) <= THRESHOLD;
    };

    const handleFinalSubmit = () => {
        sendActivityData();
    };

    const checkFinalResult = () => {
        const allAnswersCorrect = correctAnswers >= 1;
        return { allAnswersCorrect, totalQuestions: TOTAL_QUESTIONS, correctAnswers, incorrectAnswers };
    };

    const sendActivityData = async () => {
        const endTime = new Date();
        const timeSpent = (endTime - entryTime) / 1000;
        const { allAnswersCorrect, totalQuestions, correctAnswers, incorrectAnswers } = checkFinalResult();

        const activityData = {
            userId: currentUser.uid,
            activityName: "Geo1",
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

        handleReset(); // Reset the activity after sending the data
    };

    const handleReset = () => {
        setIsCorrect(null);
        setQuestions([]);
        setCorrectAnswers(0);
        setIncorrectAnswers(0);
        setQuestionsAnswered(0);
        setIsLastQuestion(false);
        newCoordinates();
    };

    return (
        <ActivityWrapper
            activityTitle={"Geo1"}
            explanationVideoUrl={"/Videos/draw_parallel_lines.mp4"}
            onSubmit={checkFinalResult}
            user={currentUser}
            activityName="Geo1"
        >
            <Box m={2}>

                <br />
                <div className="messageContainer" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <Card>
                        <StyledText>{message}</StyledText>
                    </Card>
                </div>

                <br />
                <br />
                <Canvas
                    onMouseDown={startLine}
                    onMouseMove={moveLine}
                    onMouseUp={endLine}
                    onTouchStart={startLine}
                    onTouchMove={moveLine}
                    onTouchEnd={endLine}
                >
                    <svg style={{ width: '100%', height: '100%' }}>
                        <Grid />
                        {questions.map((q) => (
                            <line
                                key={`${q.X1}-${q.Y1}-${q.X2}-${q.Y2}`}
                                x1={q.X1}
                                y1={q.Y1}
                                x2={q.X2}
                                y2={q.Y2}
                                stroke={colors[currentColor]}
                                strokeWidth="3"
                            />
                        ))}
                        {lines && (
                            <line
                                x1={lines.start[0]}
                                y1={lines.start[1]}
                                x2={lines.end[0]}
                                y2={lines.end[1]}
                                stroke={colors[currentColor]}
                                strokeWidth="3"
                            />
                        )}
                    </svg>
                </Canvas>
                <Box display="flex" justifyContent="center" mt={2} gap={2}>
                    <Button variant="contained" color="primary" onClick={handleFinalSubmit} disabled={!isLastQuestion}>
                        Terminer
                    </Button>
                </Box>
            </Box>
        </ActivityWrapper>
    );
}

export default Geo1;
