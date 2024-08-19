import React from "react";
import SwipeSection from "../../../Reusable Components/introduction/SwipeSection";

const C4Intro = () => {
    const question = "Que signifie 1 000 000 ?";
    const options = ["cent", "mille", "million", "milliard"];
    const correctAnswer = "million";
    const explanation = "1 000 000 est appelé un million.";

    const introProps = {
        title: "Les grands nombres :",
        imagePath: "/images/Math/C/C1/Po.png",
        content: ['1 00 = <span style={{ color: "#FF7F50" }}>"cent"</span>', '1 000 = <span style={{ color: "#FF7F50" }}>"mille"</span>', '1 000 000 = <span style={{ color: "#FF7F50" }}>"million"</span>', '1 000 000 000 = <span style={{ color: "#FF7F50" }}>"milliard"</span>'],
    };
    return (
        <div>
            <SwipeSection introProps={introProps} question={question} options={options} correctAnswer={correctAnswer} explanation={explanation} />
        </div>
    );
};
export default C4Intro;
