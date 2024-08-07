import React from "react";
import ActivityWrapper from "../../../Reusable Components/Slides Content/ActivityWrapper";
import Quiz from "../../../Reusable Components/Activities/Quiz";
import SuccessDialog from "../../../Reusable Components/Activities/SuccessDialog";
import { useAuth } from "../../../../Sign_in/v2/context/AuthContext";

const C1A1 = () => {
    const quizRef = React.useRef();
    const [sucessDialogOpen, setSucessDialogOpen] = React.useState(false);
    const { currentUser } = useAuth(); // Récupère l'utilisateur actuel du contexte

    const questions = [
        {
            question: "Quel est le nom correct pour 3 000 000 ?",
            options: ["deux cent", "trois mille", "trois million", "milliard"],
            correctAnswer: "trois million",
            explanation: "La bonne réponse est trois million car c'est 1 000 000 + 1 000 000 + 1 000 000"
        },
        {
            question: "Quel est le nom correct pour 1 000 000 ?",
            options: ["cent", "mille", "million", "milliard"],
            correctAnswer: "million",
            explanation: "La bonne réponse est million car c'est 1 000 000"
        },
        {
            question: "Quel est le nom correct pour 500 000 ?",
            options: ["cinq cent mille", "cinq mille", "cinq million", "cinq cent"],
            correctAnswer: "cinq cent mille",
            explanation: "La bonne réponse est cinq cent mille car c'est 500 000"
        },
        {
            question: "Quel est le nom correct pour 2 000 000 ?",
            options: ["deux cent", "deux mille", "deux million", "deux milliard"],
            correctAnswer: "deux million",
            explanation: "La bonne réponse est deux million car c'est 2 000 000"
        }
    ];

    const checkAnswer = () => {
        const selectedOptions = quizRef.current.getSelectedOptions();
        const allAnswersCorrect = questions.every((q, index) => selectedOptions[index] === q.correctAnswer);
        if (allAnswersCorrect) {
            handleClickOpen();
        }
        const calculatedScore = allAnswersCorrect ? 100 : (selectedOptions.filter((option, index) => option === questions[index].correctAnswer).length / questions.length) * 100;
        return { allAnswersCorrect, calculatedScore };
    };

    const handleClickOpen = () => {
        setSucessDialogOpen(true);
    };

    const handleClose = () => {
        setSucessDialogOpen(false);
    };

    return (
        <div>
            <ActivityWrapper 
                activityTitle={"C1A1"} 
                explanationVideoUrl={"/Videos/video.mp4"} 
                onSubmit={checkAnswer} 
                user={currentUser} // Passe l'utilisateur actuel comme prop
                activityName="C1A1"
            >
                <Quiz ref={quizRef} questions={questions} />
            </ActivityWrapper>
            <SuccessDialog open={sucessDialogOpen} onClose={handleClose} />
        </div>
    );
};

export default C1A1;
