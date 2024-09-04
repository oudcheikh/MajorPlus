/* import React from "react";
import SwipeableScreens from "../../Reusable Components/Swipeable/SwipeableScreen";
import G3A1 from "./G3A1";
import G3A2 from "./G3A2";
import SwipeSection from "../../Reusable Components/introduction/SwipeSection";

import { useNavigate } from "react-router-dom";
import StepFinale from "../C1/v2/StepFinale";

export default function C1_new({ onFinish }) {
    const question1 = "Combien fait 5 × 6 ?";
    const options1 = ["25", "30", "35", "40"];
    const correctAnswer1 = "30";
    const explanation1 = "Multiplier 5 par 6 signifie ajouter 6 cinq fois : 6 + 6 + 6 + 6 + 6 = 30.";


    const introProps = {
        title: "Multiplier des nombres entiers:",
        imagePath: "/images/Math/C/C1/Po.png",
        content: [
            'La multiplication est une addition répétée.',
            'Elle nous permet de combiner plusieurs groupes de la même taille.',
            'Exemple : 3 × 4 = 12',
            'Même avec de grands nombres : 123 × 456.'
        ],
    };

    const slides = [
        () => <SwipeSection introProps={introProps} question={question1} options={options1} correctAnswer={correctAnswer1} explanation={explanation1} />, 
        G3A1, 
        G3A2,() => <StepFinale onFinish={onFinish} />
    ];

    return <SwipeableScreens slides={slides} currentSegment={0} onFinish={onFinish}></SwipeableScreens>;} */