import React from "react";
import ActivityWrapper from "../../../Reusable Components/Slides Content/ActivityWrapper";
import Quiz from "../../../Reusable Components/Activities/Quiz";
import SuccessDialog from "../../../Reusable Components/Activities/SuccessDialog";
import { useAuth } from "../../../../Sign_in/v2/context/AuthContext";
import { useNavigate } from "react-router-dom";

const C1A1 =({ onFinish }) => {
    const quizRef = React.useRef();
    const [sucessDialogOpen, setSucessDialogOpen] = React.useState(false);
    const { currentUser } = useAuth(); // Récupère l'utilisateur actuel du contexte

    const navigate = useNavigate();


    const questions = [
        {
            question: "Quel sont les outils de comparaison ?",
            options: ["> < =", "< > $ =", " '=' uniquement", "< > uniquement"],
            correctAnswer: "> < =",
            explanation: "La bonne réponse est '> < =' "
        },
        {
            question: "Choisir la bonne réponse ?",
            options: ["100>2000", "mille", "4>-4", "1000>1000"],
            correctAnswer: "4>-4",
            explanation: "un entier positis est superieure à un entier négatif"
        },
        {
            question: "Deux entiers égaux signifier qu'ils admettent le meme nombre de chiffres ?",
            options: ["vrai", "faux"],
            correctAnswer: "faux",
            explanation: "8000 >1000 malgré qu'ils ont le meme nimbre de chiffres"
        },
        {
            question: "Les entiers positifs sont toujours superieures au entiers négatifs",
            options: ["vrai","faux"],
            correctAnswer: "vrai",
            explanation: "Les entiers positifs sont superieurs à 0 et les entiers négatifs sont inférieures à 0"
        }
    ];


    const handleFinish = () => {
        if (onFinish) {
            onFinish(); 
        }
        navigate('/ProgressTracker'); 
    };
    const checkAnswer = () => {
        const selectedOptions = quizRef.current.getSelectedOptions();
        const allAnswersCorrect = questions.every((q, index) => selectedOptions[index] === q.correctAnswer);
        if (allAnswersCorrect) {
            handleClickOpen();
            handleFinish();

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
                activityTitle={"C2A1"} 
                explanationVideoUrl={"/Videos/video.mp4"} 
                onSubmit={checkAnswer} 
                user={currentUser} // Passe l'utilisateur actuel comme prop
                activityName="C2A1"
            >

             <Quiz ref={quizRef} questions={questions} />
            </ActivityWrapper>
            <SuccessDialog open={sucessDialogOpen} onClose={handleClose} />



        </div>
    );
};

export default C1A1;
