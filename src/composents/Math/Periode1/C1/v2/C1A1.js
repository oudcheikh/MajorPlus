import React from "react";
import CustomCard from "../CustomCard";
import ActivityWrapper from "../../../Reusable Components/Slides Content/ActivityWrapper";
import Quiz from "../../../Reusable Components/Activities/Quiz";
import SuccessDialog from "../../../Reusable Components/Activities/SuccessDialog";
import { useAuth } from "../../../../Sign_in/v2/context/AuthContext";
const C1A1 = () => {
    const quizRef = React.useRef();
    const [sucessDialogOpen, setSucessDialogOpen] = React.useState(false);
    const { currentUser } = useAuth(); // Récupère l'utilisateur actuel du contexte

    const question = "Quel est le nom correcte pour 3 000 000 ?";
    const options = ["deux cent", "trois mille", "trois million", "milliard"];
    const correctAnswer = "trois million";
    const explanation = "La bonne réponse est trois million car c'est 1 000 000 + 1 000 000 + 1 000 000";

    const checkAnswer = (answer) => {
        if (answer[0] === correctAnswer) {
            handleClickOpen();
            return true;
        }
        return false;
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
                onSubmit={() => checkAnswer(quizRef.current.getSelectedOptions())} 
                user={currentUser} // Passe l'utilisateur actuel comme prop
                activityName="C1A1"
            >
                <Quiz ref={quizRef} question={question} options={options} explanation={explanation} />
            </ActivityWrapper>
            <SuccessDialog open={sucessDialogOpen} onClose={handleClose} />
        </div>
    );
};

export default C1A1;
