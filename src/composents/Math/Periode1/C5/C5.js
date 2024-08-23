import React from "react";
import C5A1 from "./C5A1";
import C5A2 from "./C5A2";


import SwipeableScreens from "../../Reusable Components/Swipeable/SwipeableScreen";
import SwipeSection from "../../Reusable Components/introduction/SwipeSection"; // Importez le nouveau composant
import C5A4 from "../C5/C5A4";

export default function C1_new({ onFinish }) {
    const question = "Pour passer du mètre au centimètre, multiplie par ?";
    const options = ["100", "10", "1000"];
    const correctAnswer = "100";
    const explanation = "On doit multiplier par 100";

    const introProps = {
        title: "Convertiseur d'unités de longueur",
        imagePath: "/images/Math/C/C1/Po.png",
        content: ['Pour pouvoir faire des calculs de mesures, il faut que celles-ci soient toutes dans la même unité.'],
    };

    const slides = [() => <SwipeSection introProps={introProps} question={question} options={options} correctAnswer={correctAnswer} explanation={explanation} />
    
        , C5A1, C5A2,C5A4]
        
       

    return <SwipeableScreens slides={slides} currentSegment={0} onFinish={onFinish}></SwipeableScreens>;
}