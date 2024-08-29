import React from "react";
import SwipeableScreens from "../../Reusable Components/Swipeable/SwipeableScreen";
import SwipeSection from "../../Reusable Components/introduction/SwipeSection";

import { useNavigate } from "react-router-dom";
// import StepFinale from "../../Reusable Components/StepFinale";
import Chap10 from './Chap10'
import P2A4 from './P2A4'
import Exercice1 from'./Exercice1'

export default function MesuresAires({ onFinish }) {
    const question = "Que signifie 1 000 000 ?";
    const options = ["cent", "mille", "million", "milliard"];
    const correctAnswer = "million";
    const explanation = "1 000 000 est appelé un million.";


    const introProps = {
        title: "Les Mesures d'Aires :",
        imagePath: "/images/Math/C/C1/Po.png",
        content: ['1 00 = <span style={{ color: "#FF7F50" }}>"cent"</span>', '1 000 = <span style={{ color: "#FF7F50" }}>"mille"</span>', '1 000 000 = <span style={{ color: "#FF7F50" }}>"million"</span>', '1 000 000 000 = <span style={{ color: "#FF7F50" }}>"milliard"</span>'],
   
    };

   const slides = [() => <SwipeSection introProps={introProps} question={question} options={options} correctAnswer={correctAnswer} explanation={explanation} />,


        P2A4,Exercice1,Chap10,
       

        // , () => <StepFinale onFinish={onFinish} />  
        
        ];

    return <SwipeableScreens slides={slides} currentSegment={0} onFinish={onFinish}></SwipeableScreens>;
}