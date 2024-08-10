import React from "react";
import SwipeableScreens from "../../../Reusable Components/Swipeable/SwipeableScreen";
import C1A1 from "./C1A1";
import C1A2 from "./C1A2";
import SwipeSection from "../../../Reusable Components/introduction/SwipeSection"; // Importez le nouveau composant

export default function C1_new() {
    const question = "Que signifie 1 000 000 ?";
    const options = ["cent", "mille", "million", "milliard"];
    const correctAnswer = "million";
    const explanation = "1 000 000 est appelé un million.";

    const introProps = {
        title: "Les grands nombres :",
        imagePath: "/images/Math/C/C1/Po.png",
        content: ['1 00 = <span style={{ color: "#FF7F50" }}>"cent"</span>', '1 000 = <span style={{ color: "#FF7F50" }}>"mille"</span>', '1 000 000 = <span style={{ color: "#FF7F50" }}>"million"</span>', '1 000 000 000 = <span style={{ color: "#FF7F50" }}>"milliard"</span>'],
    };

    const slides = [() => <SwipeSection introProps={introProps} question={question} options={options} correctAnswer={correctAnswer} explanation={explanation} />, C1A1, C1A2];

    return <SwipeableScreens slides={slides} currentSegment={0}></SwipeableScreens>;
}
