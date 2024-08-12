import React from "react";
import { FormulaText } from "../../../Styles/MajorStyles";

const imageStyle_Important = {
    width: "70%", // Augmentez la largeur de l'image
    height: "auto", // Maintenir le ratio d'aspect
    display: "block",
    margin: "10px auto",
};


const listStyle = {
    textAlign: "left",
    paddingLeft: "40px", // Ajout de padding pour bien aligner les puces
    listStyleType: "disc", // Style de liste avec des puces
};

const IntroSlide = ({ title, imageSrc, content }) => {
    return (
        <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div style={{ padding: "20px", textAlign: "center" }}>
                <strong style={{ color: "blueviolet", fontSize: "30px", textAlign: "center", display: "block", marginBottom: "10px" }}>
                    {title}
                </strong>
                <img src={imageSrc} style={imageStyle_Important} alt="Illustration" />
                <FormulaText>
                    <ul style={listStyle}>
                        {content.map((item, index) => (
                            <li key={index}>
                                <h4 dangerouslySetInnerHTML={{ __html: item }}></h4>
                            </li>
                        ))}

                        
                    </ul>
                </FormulaText>
            </div>
        </div>
    );
};

export default IntroSlide;
