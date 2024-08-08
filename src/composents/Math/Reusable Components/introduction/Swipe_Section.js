import React from "react";
import CustomCard from "../../Periode1/C1/CustomCard";
import IntroSlide from "./IntroSlide"; // Assurez-vous d'importer IntroSlide correctement

const Swipe_Section = ({ introProps, question, options, correctAnswer, explanation }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", height: "100%", padding: "20px" }}>
            <IntroSlide {...introProps} />
            <div style={{ marginTop: "20px" }}>
                <CustomCard question={question} options={options} correctAnswer={correctAnswer} explanation={explanation} />
            </div>
           
        </div>
    );
};

export default Swipe_Section;
