import Exercice2 from './Exercice2'
import Exercice3 from './Exercice3'
import Exercice5 from './Exercice5'

import React from "react";
import SwipeableScreens from "../../Reusable Components/Swipeable/SwipeableScreen";
import SwipeSection from "../../Reusable Components/introduction/SwipeSection";


export default function C1_new({ onFinish }) {
    const question1 = "Combien fait 5 × 6 ?";
    const options1 = ["25", "30", "35", "40"];
    const correctAnswer1 = "30";
    const explanation1 = "Multiplier 5 par 6 signifie ajouter 6 cinq fois : 6 + 6 + 6 + 6 + 6 = 30.";


    const introProps = {
        title: "Caractéres de divisibilités ",
        imagePath: "/images/Math/C/C11/serveau.png",
        content: [
            'Un entier est dit divisible par deux si :Son chiffres des unitès et l un des multiples de 2.',
            'Un entier est dit divisible par Trois  si:la somme de ses chiffres est un multiple de 3',
            'Un entier est dit divisible par cinq si:Son chiffres des unitès est un 0 ou 5',
            'Même avec de grands nombres : 123 × 456.'
        ],
    };

    const slides = [
        () => <SwipeSection introProps={introProps} question={question1} options={options1} correctAnswer={correctAnswer1} explanation={explanation1} />, 
        Exercice2, Exercice3,Exercice5
    ];

    return <SwipeableScreens slides={slides} currentSegment={0} onFinish={onFinish}></SwipeableScreens>;
}

