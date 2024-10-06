import Exercice2 from './Exercice2'
import Exercice3 from './Exercice3'
import Exercice5 from './Exercice5'
import Ex3 from './Ex3'
import Ex5 from './Ex5'

import React from "react";
import SwipeableScreens from "../../Reusable Components/Swipeable/SwipeableScreen";
import SwipeSection from "../../Reusable Components/introduction/SwipeSection";


export default function C1_new({ onFinish }) {
    const question1 = "Un entier est dit divisible par 5 si :";
    const options1 = ["le chiffre des unités est un zéro uniquement", "le chiffre des unités est cinq  uniquement", "le chiffre des unités est un zéro ou cinq", "la somme des chiffres est un multiple de 5"];
    const correctAnswer1 = "le chiffre des unités est un zéro ou cinq";
    const explanation1 = "Un entier est dit divisible par cinq si:Son chiffres des unitès est un 0 ou 5";


    const introProps = {
        title: "Caractéres de divisibilités ",
        imagePath: "/images/Math/C/C1/Po.png",
        content: [
            'Un entier est dit divisible par deux si :Son chiffres des unitès et l un des multiples de 2.',
            'Un entier est dit divisible par Trois  si:la somme de ses chiffres est un multiple de 3',
            'Un entier est dit divisible par cinq si:Son chiffres des unitès est un 0 ou 5',
        ],
    };

    const slides = [
        () => <SwipeSection introProps={introProps} question={question1} options={options1} correctAnswer={correctAnswer1} explanation={explanation1} />, 
        Exercice2, Ex3,Ex5
    ];

    return <SwipeableScreens slides={slides} currentSegment={0} onFinish={onFinish}></SwipeableScreens>;
}

