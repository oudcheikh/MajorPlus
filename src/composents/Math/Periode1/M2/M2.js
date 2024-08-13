import React from "react";
import SwipeableScreens from "../../Reusable Components/Swipeable/SwipeableScreen";
import M2A1 from "./M2A1";
import M2A2 from "./M2A2";
import SwipeSection from "../../Reusable Components/introduction/SwipeSection";
import { useNavigate } from "react-router-dom";

export default function C1_new({ onFinish }) {
    const question1 = "Quelle est l'unité de mesure correspondant à 1000g ?";
    const options1 = ["centigramme", "décagramme", "kilogramme", "hectogramme"];
    const correctAnswer1 = "kilogramme";
    const explanation1 = "1000g est égal à 1 kilogramme (kg).";

    const introProps = {
        title: "Les unités de mesure de la masse:",
        imagePath: "/images/Math/C/C1/Po.png", // Remplacez par le bon chemin d'image
        content: [
            
            'Voici les unités de mesure de la masse :',
            '1. Gramme (g)',
            '2. Décagramme (dag) = 10 grammes',
            '3. Hectogramme (hg) = 100 grammes',
            '4. Kilogramme (kg) = 1000 grammes'
        ],
    };

    const slides = [
        () => <SwipeSection introProps={introProps} question={question1} options={options1} correctAnswer={correctAnswer1} explanation={explanation1} />, 
        M2A1, 
        M2A2
    ];

    return <SwipeableScreens slides={slides} currentSegment={0} onFinish={onFinish}></SwipeableScreens>;
}
