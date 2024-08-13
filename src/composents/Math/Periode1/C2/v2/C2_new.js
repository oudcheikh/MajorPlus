import React from "react";

import SwipeableScreens from "../../../Reusable Components/Swipeable/SwipeableScreen";
import Swipe_Section from"../../../Reusable Components/introduction/SwipeSection";



import C2E2 from "./Exercice2_C2";
// import C2A1 from "./C2A1"
import C2A11 from "./C2A11"
import C2E11 from "./C2_Exercice1"
import StepFinale from './StepFinale'

export default function C2_new({onFinish})  {

    const question = "100 est --- à 2000";
    const options = ["Superieur", "inferieure", "égale"];
    const correctAnswer = "inferieure";
    const explanation = "2000 est superieure a 100";

    
    const introProps = {
        title: "Comporer et ordonner des nombres ",
        imagePath: "/images/Math/C/C1/Po.png",
        content: [
            '1   <span style={{ color: "red" }}>< </span> 2 ',
            '1 000 > <span style={{ color: "#FF7F50" }}>500</span>',
            '1 000 000 < <span style={{ color: "#FF7F50" }}>50 000 000</span>',
            

 
        ],
    };

    
    const slides = [

        //  question={question} options={options} correctAnswer={correctAnswer} explanation={explanation}
        () => <Swipe_Section introProps={introProps} question={question} options={options} correctAnswer={correctAnswer} explanation={explanation} />,
      
    //   C2A11,
      C2E11,
    C2E2,
    () => <StepFinale onFinish={onFinish} />

    ];

    return <SwipeableScreens slides={slides} currentSegment={0} onFinish={onFinish}></SwipeableScreens>;
}

