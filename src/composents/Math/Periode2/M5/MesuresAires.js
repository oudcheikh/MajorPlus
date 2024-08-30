/* import React from "react";
import SwipeableScreens from "../../Reusable Components/Swipeable/SwipeableScreen";
import SwipeSection from "../../Reusable Components/introduction/SwipeSection";

import { useNavigate } from "react-router-dom";
// import StepFinale from "../../Reusable Components/StepFinale";
import Chap10 from './Chap10'
import P2A4 from './P2A4'
import Exercice1 from'./Exercice1'

export default function MesuresAires({ onFinish }) {
    const question = "Les mesures d'aire sont utilisées pour déterminer la superficie d'une surface ou d'une forme";
    const options = ["vrai", "faux"];
    const correctAnswer = "vrai";
    const explanation = "Les mesures d'aire sont utilisées pour déterminer la superficie d'une surface ou d'une forme";


    const introProps = {
        title: "Les Mesures d'Aires :",
        imagePath: "/images/Math/C/C1/Po.png",
        content: ['Centimètre carré (cm²) : Utilisé pour des surfaces plus petites', 'Kilomètre carré (km²) : Utilisé pour mesurer des surfaces très grandes, comme des régions géographiques.', 'Hectare (ha) : 1 hectare = 10 000 m². Utilisé pour mesurer des terres agricoles.'],
   
    };

   const slides = [() => <SwipeSection introProps={introProps} question={question} options={options} correctAnswer={correctAnswer} explanation={explanation} />,


        P2A4,Exercice1,Chap10,
       

        // , () => <StepFinale onFinish={onFinish} />  
        
        ];

    return <SwipeableScreens slides={slides} currentSegment={0} onFinish={onFinish}></SwipeableScreens>;
} */