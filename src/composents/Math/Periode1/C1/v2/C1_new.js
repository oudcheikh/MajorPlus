import React from "react";
import SwipeableScreens from "../../../Reusable Components/Swipeable/SwipeableScreen";
import C1A1 from "./C1A1";
import C1A2 from "./C1A2";
import Swipe_Section from "../../../Reusable Components/introduction/Swipe_Section"; // Importez le nouveau composant
import { useNavigate } from "react-router-dom";

export default function C1_new({onFinish}) {
    const question = "Que signifie 1 000 000 ?";
    const options = ["cent", "mille", "million", "milliard"];
    const correctAnswer = "million";
    const explanation = "1 000 000 est appelé un million.";

    const introProps = {
        title: "Les grands nombres :",
        imageSrc: "/images/Math/C/C1/Po.png",
        content: [
            '1 00 = <span style={{ color: "#FF7F50" }}>"cent"</span>',
            '1 000 = <span style={{ color: "#FF7F50" }}>"mille"</span>',
            '1 000 000 = <span style={{ color: "#FF7F50" }}>"million"</span>',
            '1 000 000 000 = <span style={{ color: "#FF7F50" }}>"milliard"</span>',
        ],
    };


    const slides = [
        () => <Swipe_Section introProps={introProps} question={question} options={options} correctAnswer={correctAnswer} explanation={explanation} />,
        () => <C1A1 onFinish={onFinish} />, 
        C1A2 
    ];

    return <SwipeableScreens slides={slides} currentSegment={0} onFinish={onFinish}></SwipeableScreens>;
}
