import React from "react";
import SwipeableScreens from "../../Reusable Components/Swipeable/SwipeableScreen";
import C5A4 from "./C5A4";
import C1A2 from "./C5A3";
import SwipeSection from "../../Reusable Components/introduction/SwipeSection";
import C5A5 from "./C5A5";
import { useNavigate } from "react-router-dom";
import StepFinale from "./StepFinale";

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
        C5A4, 
        C5A5,() => <StepFinale onFinish={onFinish} />
    ];

    return <SwipeableScreens slides={slides} currentSegment={0} onFinish={onFinish}></SwipeableScreens>;
}
