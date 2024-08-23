import React from "react";
import C4A1 from "./C4A1";
import C4A2 from "./C4A2";
import C4A3 from "./C4A3";
import C4A4 from "./C4A4";

import SwipeableScreens from "../../Reusable Components/Swipeable/SwipeableScreen";
import SwipeSection from "../../Reusable Components/introduction/SwipeSection"; // Importez le nouveau composant

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
    
        , C4A1,C4A3,C4A2]
        
       

    return <SwipeableScreens slides={slides} currentSegment={0} onFinish={onFinish}></SwipeableScreens>;
}