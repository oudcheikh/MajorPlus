import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Periode4/progressBar/SegmentedProgressBar.css";
import SegmentedProgressBar from "../../Periode4/progressBar/ProgressBar";
import Exercice2 from "./Exercice2";
import CustomCard from "./CustomCard";
import styled from "styled-components";
import "./C1.css";
// Import des styles
import { Button } from "@mui/material";

import { StyledBox, imageStyle_Important, FormulaText, ContinueButton, Container_Progress_Bar, SectionContainer2, FormulaBox2, SwipeContainer2, Swipe_Section } from "../../../Styles/MajorStyles";

const C1 = ({ index, onComplete }) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const videoRef = useRef(null);
    const [showExercise, setShowExercise] = useState(false);

    const navigate = useNavigate();
    const [progress, setProgress] = useState(0);
    const [sectionsViewed, setSectionsViewed] = useState(0);
    const totalSections = 2; // Nombre total de sections

    const handleScroll = (event) => {
        const { scrollLeft } = event.target;
        setScrollPosition(scrollLeft);

        // Récupérer les positions de début de chaque section
        const sectionPositions = [
            0, // Position de début de la première section
            section1Ref.current.offsetWidth,
            // Position de début de la deuxième section
        ];

        // Trouver la section actuelle en fonction de la position de défilement
        let currentSection = 0;
        for (let i = 0; i < sectionPositions.length; i++) {
            if (scrollLeft >= sectionPositions[i]) {
                currentSection = i;
            }
        }
        setSectionsViewed(currentSection + 1);
        setProgress(currentSection + 1);

        if (currentSection !== 1 && videoRef.current) {
            videoRef.current.pause();
        }
    };

    const handleFinish = () => {
        console.log("c'est de C1", index);
        if (onComplete) {
            onComplete(index);
            navigate("/Step_finale_nchallh");
        }
    };

    const handleShowExercise = () => {
        setShowExercise(true);
    };

    if (showExercise) {
        return (
            <StyledBox>
                <SectionContainer2>
                    <FormulaBox2>
                        <Exercice2 />
                    </FormulaBox2>
                </SectionContainer2>
                <Button variant="contained" color="primary" style={{ display: "block", margin: "80px auto" }} onClick={() => setShowExercise(false)}>
                    Retour
                </Button>
            </StyledBox>
        );
    }
    const question = "Quel est le nom correcte  pour  3 000 000 ?";
    const options = [" deux cent", "trois mille", "trois million", "milliard"];
    const correctAnswer = "trois million";
    const explanation = "La bonne réponse est trois million car c'est 1 000 000 + 1 000 000 + 1 000 000";

    return (
        <Container_Progress_Bar>
            <SegmentedProgressBar totalSegments={totalSections} currentSegment={progress} />
            <StyledBox>
                <SwipeContainer2 onScroll={handleScroll}>
                    <Swipe_Section ref={section1Ref}>
                        <SectionContainer2>
                            <FormulaText>
                                <strong style={{ color: "blueviolet", fontSize: "24px", textAlign: "center", display: "block", marginBottom: "10px" }}> Les grands nombres :</strong>
                                <img src={"/images/Math/C/C1/Po.png"} style={imageStyle_Important} alt="Teacher" />
                                <ul>
                                    <li>
                                        <h4>
                                            1 00 = <span style={{ color: "#FF7F50" }}>"cent"</span>
                                        </h4>
                                    </li>
                                    <li>
                                        <h4>
                                            1 000 = <span style={{ color: "#FF7F50" }}>"mille"</span>
                                        </h4>
                                    </li>
                                    <li>
                                        <h4>
                                            1 000 000 = <span style={{ color: "#FF7F50" }}>"million"</span>
                                        </h4>
                                    </li>
                                    <li>
                                        <h4>
                                            1 000 000 000 = <span style={{ color: "#FF7F50" }}>"milliard"</span>
                                        </h4>
                                    </li>
                                </ul>
                            </FormulaText>
                        </SectionContainer2>
                        <CustomCard question={question} options={options} correctAnswer={correctAnswer} explanation={explanation} />
                    </Swipe_Section>

                    <Swipe_Section ref={section2Ref}>
                        <ContinueButton>Activité 1</ContinueButton>
                        <VideoContainer>
                            <video ref={videoRef} width="90%" height="315" controls>
                                <source src={"/Videos/video.mp4"} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <VideoDescription>
                                <p>Regardez cette vidéo pour comprendre l'activité et comment résoudre les exercices associés.</p>
                            </VideoDescription>
                        </VideoContainer>
                        <Button variant="contained" color="primary" style={{ display: "block", margin: "80px auto" }} onClick={handleShowExercise}>
                            Ouvrir l'activité
                        </Button>
                    </Swipe_Section>
                </SwipeContainer2>
            </StyledBox>
        </Container_Progress_Bar>
    );
};

// Styled Components for video container and description
const VideoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`;

const VideoDescription = styled.div`
    margin-top: 10px;
    text-align: center;
    font-size: 16px;
    color: #555;
`;

export default C1;
