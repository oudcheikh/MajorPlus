import React from "react";
import SwipeableScreens from "../../Reusable Components/Swipeable/SwipeableScreen";
import G1A1 from "./G1A1";
import G1A2 from "./G1A2";
import G1A4 from "./G1A4";

import SwipeSection from "../../Reusable Components/introduction/SwipeSection";
import G1A3 from "./G1A3";
import { useNavigate } from "react-router-dom";
import StepFinale from "./StepFinale";

export default function C1_new({ onFinish }) {
    const question1 = "Quelles lignes sont parallèles ?";
    const options1 = ["Lignes qui se croisent", " ne se croisent jamais", " se touchent à angle droit", "Lignes courbes"];
    const correctAnswer1 = " ne se croisent jamais";
    const explanation1 = "Les lignes parallèles sont des lignes qui se trouvent dans le même plan mais qui ne se rencontrent jamais, peu importe jusqu'où elles sont prolongées.";

    const introProps = {
        title: "Lignes Parallèles et Perpendiculaires",
        imagePath: "/images/Math/C/C1/Po.png",
        content: [
            'Les lignes parallèles ne se rencontrent jamais, peu importe leur longueur.',
            'Les lignes perpendiculaires se croisent à un angle droit, c’est-à-dire 90 degrés.',
            'Exemples de lignes parallèles : les rails d’un chemin de fer.',
            'Exemples de lignes perpendiculaires : les coins d’un carré ou d’un rectangle.'
        ],
    };

    const slides = [
        () => <SwipeSection introProps={introProps} question={question1} options={options1} correctAnswer={correctAnswer1} explanation={explanation1} />, 
        G1A2,
        G1A3,
        G1A4,() => <StepFinale onFinish={onFinish} />
    ];

    return <SwipeableScreens slides={slides} currentSegment={0} onFinish={onFinish}></SwipeableScreens>;
}
