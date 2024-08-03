import React, { useState } from "react";
import ActivityWrapper from "../../../Reusable Components/Slides Content/ActivityWrapper";
import SuccessDialog from "../../../Reusable Components/Activities/SuccessDialog";
import Exercice2 from "./Exercice2";

import writtenNumber from "written-number";

const ranges = [
    [0, 9], // plage pour progress=0
    [10, 99], // plage pour progress=1
    [100, 999], // plage pour progress=2
    [1000, 9999], // plage pour progress=3
    [10000, 99999], // plage pour progress=4
];

const C1A2 = () => {
    const activityRef = React.useRef();
    const [sucessDialogOpen, setSucessDialogOpen] = React.useState(false);
    const [progress, setProgress] = useState(0);
    const [randomNumber, setRandomNumber] = useState(0);
    const [userInput, setUserInput] = useState("");
    const [isValid, setIsValid] = useState(true);
    const [showNextButton, setShowNextButton] = useState(false);
    const [, setOpen] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState(null);
    const [score, setScore] = useState(0);

    const checkAnswer = (answer) => {
        activityRef.current.checkAnswer();
        return true;
    };
    const handleClickOpen = () => {
        setSucessDialogOpen(true);
    };

    const handleClose = (value) => {
        setSucessDialogOpen(false);
    };

    const handleNumberClick = (number) => {
        setIsValid(true);
        setUserInput(userInput + number);
        setSelectedNumber(number);
    };

    const handleValidate = () => {
        const validation = writtenNumber(parseInt(userInput), { lang: "fr" }) === writtenNumber(randomNumber, { lang: "fr" });
        setIsValid(validation);
        if (!validation) {
            setUserInput("");
        } else {
            setScore(score + 4); // Increase score by 4 for correct answer
            setShowNextButton(true);
        }
    };

    const handleNextQuestion = () => {
        if (progress < 4) {
            setProgress(progress + 1);
            getRandomNumber(progress + 1);
        } else {
            setOpen(true);
        }
        setShowNextButton(false);
        setUserInput("");
        setSelectedNumber(null);
    };

    const getRandomNumber = (progress) => {
        const min = ranges[progress][0],
            max = ranges[progress][1];
        setRandomNumber(Math.floor(Math.random() * (max - min + 1) + min));
    };

    const handleReset = () => {
        setProgress(0);
        setRandomNumber(0);
        setUserInput("");
        setIsValid(true);
        setShowNextButton(false);
        setOpen(false);
        setSelectedNumber(null);
        setScore(0);
        getRandomNumber(0);
    };

    return (
        <div>
            <ActivityWrapper activityTitle={"C1A2"} explanationVideoUrl={"/Videos/video.mp4"} onSubmit={() => checkAnswer()}>
                <Exercice2 ref={activityRef} />
            </ActivityWrapper>
            <SuccessDialog open={sucessDialogOpen} onClose={handleClose} />
        </div>
    );
};

export default C1A2;
