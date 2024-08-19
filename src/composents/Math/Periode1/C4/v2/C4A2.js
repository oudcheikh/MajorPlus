import React, { useState, useEffect } from "react";
import { useAuth } from "../../../../Sign_in/v2/context/AuthContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../../Sign_in/v2/firebase";
import { Typography, Button } from "@mui/material";
import MagicSquare from "../../../Reusable Components/Activities/MagicalSquare";
import ActivityWrapper from "../../../Reusable Components/Slides Content/ActivityWrapper";
const C4A2 = () => {
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [completed, setCompleted] = useState(false);
    const { currentUser } = useAuth();
    const [entryTime, setEntryTime] = useState(null);

    useEffect(() => {
        const now = new Date();
        setEntryTime(now);
    }, []);


    const numberOfQuestions = 3;

    const handleVerify = (isCorrect) => {
        if (isCorrect) {
            if (currentQuestion < numberOfQuestions) {
                setCurrentQuestion(currentQuestion + 1);
            } else {
                setCompleted(true);
                alert("Congratulations! You have completed all magic squares.");
            }
        } else {
            alert("Incorrect! Please try again.");
        }
    };

    const checkAnswer = () => {
        const allAnswersCorrect = currentQuestion === numberOfQuestions;
        const totalQuestions = numberOfQuestions;
        const correctAnswers = numberOfQuestions - currentQuestion;
        const incorrectAnswers = currentQuestion - 1;
        return { allAnswersCorrect, totalQuestions, correctAnswers, incorrectAnswers };
    };

    const sendActivityData = async () => {
        const endTime = new Date();
        const timeSpent = (endTime - entryTime) / 1000;
        const { allAnswersCorrect, totalQuestions, correctAnswers, incorrectAnswers } = checkAnswer();

        const activityData = {
            userId: currentUser.uid,
            activityName: "C4A1",
            entryTime: entryTime.toISOString(),
            timeSpent: timeSpent,
            totalQuestions,
            correctAnswers,
            incorrectAnswers,
            allAnswersCorrect,
        };

        try {
            await addDoc(collection(db, "activities"), activityData);
            console.log("Activity data sent:", activityData);
        } catch (e) {
            console.error("Error sending activity data:", e);
        }
    };

    return (
        <ActivityWrapper activityTitle={"C4A2"} activityName={"C4A2"} explanationVideoUrl={"Videos/video.mp4"} onSubmit={sendActivityData}>
            <div style={{ padding: "16px", maxWidth: "300px", margin: "0 auto" }}>
                <Typography variant="h5" gutterBottom>
                    Magic Square {currentQuestion}:
                </Typography>
                {!completed ? (
                    <MagicSquare onVerify={handleVerify} />
                ) : (
                    <Button variant="contained" color="primary" onClick={sendActivityData()}>
                        Finish
                    </Button>
                )}
            </div>
        </ActivityWrapper>
    );
};
export default C4A2;
