import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Question from "../../../Reusable Components/Activities/Question";
import ActivityWrapper from "../../../Reusable Components/Slides Content/ActivityWrapper";
import { useAuth } from "../../../../Sign_in/v2/context/AuthContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../../Sign_in/v2/firebase";

const C4A1 = () => {
    const [questionsData, setQuestionsData] = useState({
        question1: { question: "Je pense à un nombre. Je lui ajoute 25, je trouve 45. Quel est ce nombre ?", answer: "", correctAnswer: "20", isCorrect: false },
        question2: { question: "Je pense à un nombre. Je lui retranche 84, je trouve 25. Quel est ce nombre ?", answer: "", correctAnswer: "109", isCorrect: false },
    });

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const { currentUser } = useAuth();
    const [entryTime, setEntryTime] = useState(null);

    useEffect(() => {
        const now = new Date();
        setEntryTime(now);
    }, []);

    const handleAnswerChange = (value) => {
        const questionKey = `question${currentQuestion + 1}`;
        setQuestionsData((prevData) => ({
            ...prevData,
            [questionKey]: {
                ...prevData[questionKey],
                answer: value,
                isCorrect: value === prevData[questionKey].correctAnswer,
            },
        }));
    };

    const checkAnswer = () => {
        const questionKey = `question${currentQuestion + 1}`;
        const currentData = questionsData[questionKey];
        console.log(currentData);

        if (currentData.answer === currentData.correctAnswer) {
            console.log("correct");
            if (currentQuestion + 1 < Object.keys(questionsData).length) {
                setQuestionsData((prevData) => ({
                    ...prevData,
                    [questionKey]: {
                        ...prevData[questionKey],
                        answer: "", // Reset the input value
                        isCorrect: false, // Reset the isCorrect value
                    },
                }));
                setCurrentQuestion(currentQuestion + 1);
            } else {
                // wrong response
            }
        } else {
            // wrong response
        }
        let correctAnswers = 0;
        let incorrectAnswers = 0;
        Object.keys(questionsData).forEach((key) => {
            if (questionsData[key].answer === questionsData[key].correctAnswer) {
                correctAnswers++;
            } else {
                incorrectAnswers++;
            }
        });
        const totalQuestions = Object.keys(questionsData).length; // Assuming 2 magic squares in the questionnaire
        console.log({
            allAnswersCorrect: correctAnswers === totalQuestions,
            totalQuestions: totalQuestions,
            correctAnswers: correctAnswers,
            incorrectAnswers: incorrectAnswers,
        });

        return {
            allAnswersCorrect: correctAnswers === totalQuestions,
            totalQuestions: totalQuestions,
            correctAnswers: correctAnswers,
            incorrectAnswers: incorrectAnswers,
        };
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

    const questionKey = `question${currentQuestion + 1}`;
    const currentData = questionsData[questionKey];

    return (
        <ActivityWrapper activityTitle={"C4A1"} activityName={"C4A1"} explanationVideoUrl={"Videos/video.mp4"} onSubmit={checkAnswer}>
            <div style={{ padding: "16px", maxWidth: "400px", margin: "0 auto" }}>
                <Question question={currentData.question} value={currentData.answer} onAnswerChange={handleAnswerChange} />
                {currentQuestion + 1 === Object.keys(questionsData).length ? <Button variant="contained" onClick={sendActivityData}>Submit</Button> : <Button variant="contained" onClick={() => setCurrentQuestion(currentQuestion + 1)}>Next</Button>}
            </div>
        </ActivityWrapper>
    );
};
export default C4A1;
