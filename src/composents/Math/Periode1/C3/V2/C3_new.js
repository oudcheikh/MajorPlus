import React from "react";

import SwipeableScreens from "../../../Reusable Components/Swipeable/SwipeableScreen";
import Swipe_Section from "../../../Reusable Components/introduction/Swipe_Section"; 

import C2E1 from "../C2E1";
import C2E2 from "../C2E2";

export default function C3_new({onFinish})  {

    const question = "100 est --- à 2000";
    const options = ["Superieur", "inferieure", "égale"];
    const correctAnswer = "inferieure";
    const explanation = "2000 est superieure a 100";

    
    const introProps = {
        title: "Comporer et ordonner des nombres ",
        imageSrc: "/images/Math/C/C1/Po.png",
        content: [
            '1   <span style={{ color: "red" }}>< </span> 2 ',
            '1 000 > <span style={{ color: "#FF7F50" }}>500</span>',
            '1 000 000 < <span style={{ color: "#FF7F50" }}>50 000 000</span>',
            
        ],
    };

    
    const slides = [

        //  question={question} options={options} correctAnswer={correctAnswer} explanation={explanation}
        () => <Swipe_Section introProps={introProps} question={question} options={options} correctAnswer={correctAnswer} explanation={explanation} />,
      , 

     C2E1,
    C2E2 

    ];



    return <SwipeableScreens slides={slides} currentSegment={0} onFinish={onFinish}></SwipeableScreens>;
}

