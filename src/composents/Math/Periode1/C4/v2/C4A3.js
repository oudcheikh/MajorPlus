import React, { useState, useRef, useEffect } from "react";
import ActivityWrapper from "../../../Reusable Components/Slides Content/ActivityWrapper";
import Quiz from "../../../Reusable Components/Activities/Quiz";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const C4A3 = () => {
    const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
    const [quizzes, setQuizzes] = useState([
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Lisbon"],
            correctAnswer: "Paris",
            explanation:
                "Paris is the capital of France and is known for its art, fashion, and culture.",
            isCorrect: false,
        },
        {
            question: "What is the largest planet in our Solar System?",
            options: ["Earth", "Mars", "Jupiter", "Venus"],
            correctAnswer: "Jupiter",
            explanation:
                "Jupiter is the largest planet in our Solar System and is known for its Great Red Spot.",
            isCorrect: false,
        },
        {
            question: "What element does 'O' represent on the periodic table?",
            options: ["Oxygen", "Osmium", "Oganesson", "Oxide"],
            correctAnswer: "Oxygen",
            explanation:
                "Oxygen is a chemical element with symbol O and atomic number 8.",
            isCorrect: false,
        },
        // Add more quizzes here
    ]);

    const [isVerified, setIsVerified] = useState(false);

    const handleVerify = (isCorrect) => {
        setIsVerified(isCorrect);

        setQuizzes((prevQuizzes) => {
            const updatedQuizzes = [...prevQuizzes];
            updatedQuizzes[currentQuizIndex].isCorrect = isCorrect;
            return updatedQuizzes;
        });
    };

    const handleNextQuiz = () => {
        if (isVerified && currentQuizIndex < quizzes.length - 1) {
            setCurrentQuizIndex(currentQuizIndex + 1);
            setIsVerified(false);
        }
    };

    const handleFinish = () => {
        alert("Quiz finished! Congratulations!");
        // Additional logic for finishing the quiz, such as redirecting or displaying a summary, can go here.
    };

    return (
        <ActivityWrapper>
            <Box>
                <Quiz
                    question={quizzes[currentQuizIndex].question}
                    options={quizzes[currentQuizIndex].options}
                    correctAnswer={quizzes[currentQuizIndex].correctAnswer}
                    explanation={quizzes[currentQuizIndex].explanation}
                    onVerify={handleVerify}
                />
                {currentQuizIndex < quizzes.length - 1 ? (
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNextQuiz}
                        style={{ marginTop: "20px" }}
                    >
                        Next Quiz
                    </Button>
                ) : (
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleFinish}
                        disabled={isVerified}
                        style={{ marginTop: "20px" }}
                    >
                        Finish
                    </Button>
                )}
            </Box>
        </ActivityWrapper>
    );
};
export default C4A3;
