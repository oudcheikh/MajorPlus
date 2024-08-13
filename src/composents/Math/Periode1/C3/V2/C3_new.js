import React from "react";
import SwipeableScreens from "../../../Reusable Components/Swipeable/SwipeableScreen";
import Exercice from "../Exercice";
import Exercice1 from "../Exercice1";
import Exercice2 from "../Exercice2";
import StepFinale from './StepFinale'
import SwipeSection from "../../../Reusable Components/introduction/SwipeSection"; // Importez le nouveau composant
import { useNavigate } from "react-router-dom";
import C3A1 from '../C3A1'
export default function C1_new({ onFinish }) {
    const question = "Pour passer du mètre au centimètre, multiplie par ?";
    const options = ["100", "10", "1000"];
    const correctAnswer = "100";
    const explanation = "On doit multiplier par 100";

    const introProps = {
        title: "Convertiseur d'unités de longueur",
        imagePath: "/images/Math/C/C1/Po.png",
        content: ['Pour pouvoir faire des calculs de mesures, il faut que celles-ci soient toutes dans la même unité.'],
    };

    const slides = [() => <SwipeSection introProps={introProps} question={question} options={options} correctAnswer={correctAnswer} explanation={explanation} />
      , C3A1
        , Exercice, Exercice1, Exercice2,
        () => <StepFinale onFinish={onFinish} />];

    return <SwipeableScreens slides={slides} currentSegment={0} onFinish={onFinish}></SwipeableScreens>;
}