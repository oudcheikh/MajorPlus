import React from "react";
import CustomCard from "../CustomCard";
import ActivityWrapper from "../../../Reusable Components/Slides Content/ActivityWrapper";
import Quiz from "../../../Reusable Components/Activities/Quiz";
import SuccessDialog from "../../../Reusable Components/Activities/SuccessDialog";
const C1A1 = () => {
    const quizRef = React.useRef();
    const [sucessDialogOpen, setSucessDialogOpen] = React.useState(false);

    const question = "Quel est le nom correcte  pour  3 000 000 ?";
    const options = ["deux cent", "trois mille", "trois million", "milliard"];
    const correctAnswer = "trois million";
    const explanation = "La bonne réponse est trois million car c'est 1 000 000 + 1 000 000 + 1 000 000";

    const checkAnswer = (answer) => {
        if (answer[0] === correctAnswer) {
            handleClickOpen();
            return true;
        }
    };
    const handleClickOpen = () => {
        setSucessDialogOpen(true);
    };

    const handleClose = (value) => {
        setSucessDialogOpen(false);
    };

    return (
        <div>
            <ActivityWrapper activityTitle={"C1A1"} explanationVideoUrl={"/Videos/video.mp4"} onSubmit={() => checkAnswer(quizRef.current.getSelectedOptions())}>
                <Quiz ref={quizRef} question={question} options={options} explanation={explanation} />
            </ActivityWrapper>
            <SuccessDialog open={sucessDialogOpen} onClose={handleClose} />
        </div>
    );
};

export default C1A1;
