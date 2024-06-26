import React, { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../../Periode4/progressBar/SegmentedProgressBar.css'
import SegmentedProgressBar from '../../Periode4/progressBar/ProgressBar';
import C5A3 from './C5A3';
import C5A4 from './C5A4';
import C5A5 from './C5A5';
import QCMC6 from './QCMC6';
import { Box } from '@mui/material';
import {
    StyledBox, NumberDisplay, Beige_NumberDisplay, Container, SectionContainer, ImageContainer, FormulaText, Card, FormulaBox, BodyText, Subtitle, ContinueButton, Container_Progress_Bar, SectionContainer2, FormulaBox2,
    SwipeContainer2, Swipe_Section,
} from '../../../Styles/MajorStyles'; // Assurez-vous que le chemin est correct

import styled from 'styled-components';
import Acceuil from "../../../_ReusableComponents/Accueil";


const C1 = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);
    const section5Ref = useRef(null);
    const section6Ref = useRef(null);
    const navigate = useNavigate();
    const [progress, setProgress] = useState(0);
    const [sectionsViewed, setSectionsViewed] = useState(0);
    const totalSections = 6; // Nombre total de sections

    const handleScroll = (event) => {
        const { scrollLeft } = event.target;
        setScrollPosition(scrollLeft);

        // Récupérer les positions de début de chaque section
        const sectionPositions = [
            0, // Position de début de la première section
            section1Ref.current.offsetWidth, // Position de début de la deuxième section
            section1Ref.current.offsetWidth + section2Ref.current.offsetWidth, // Position de début de la troisième section
            section1Ref.current.offsetWidth + section2Ref.current.offsetWidth + section3Ref.current.offsetWidth, // Position de début de la troisième section
            section1Ref.current.offsetWidth + section2Ref.current.offsetWidth + section3Ref.current.offsetWidth + section4Ref.current.offsetWidth, //4
            section1Ref.current.offsetWidth + section2Ref.current.offsetWidth + section3Ref.current.offsetWidth + section4Ref.current.offsetWidth + section5Ref.current.offsetWidth, //5
            section1Ref.current.offsetWidth + section2Ref.current.offsetWidth + section3Ref.current.offsetWidth + section4Ref.current.offsetWidth + section5Ref.current.offsetWidth + section6Ref.current.offsetWidth, //6

        ];

        // Trouver la section actuelle en fonction de la position de défilement
        let currentSection = 0;
        for (let i = 0; i < sectionPositions.length; i++) {
            if (scrollLeft >= sectionPositions[i]) {
                currentSection = i;


            }
        }

        // Afficher la section actuelle dans la console
        console.log("Section actuelle :", currentSection + 1);
        setSectionsViewed(currentSection + 1);
        setProgress(currentSection + 1)



    };

    return (
        <Container_Progress_Bar>
            <SegmentedProgressBar totalSegments={totalSections} currentSegment={progress} />
            <StyledBox>
                <SwipeContainer2 onScroll={handleScroll}>

                    <Swipe_Section ref={section1Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <Acceuil titre={" La multiplication"} imgSrc={"/images/Math/C/C6/multip.gif"} altText={" La multiplication"}> </Acceuil>
                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>



                    <Swipe_Section ref={section2Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>Concepts clés🔍</ContinueButton>
                                <br></br>
                                <img src={"/images/Math/C/C11/divi.png"} style={{ width: '50%', height: '10%', marginLeft: '50px', marginReight: '50px' }} alt="attention" />
                                <br></br>
                                <strong>Multiplication :</strong>
                                <Beige_NumberDisplay >
                                    <strong>
                                        La multiplication est une manière rapide d'ajouter le même nombre plusieurs fois.
                                    </strong>
                                </Beige_NumberDisplay>
                                <strong>Exemple 1 :</strong>
                                <Beige_NumberDisplay >
                                    <FormulaText>
                                        <strong> Imaginons que tu as 3 boîtes de crayons, et dans chaque boîte, il y a 4 crayons. Pour trouver le total de crayons, tu peux multiplier : 3 x 4 = 12. Donc, tu as 12 crayons en tout.</strong>
                                    </FormulaText>
                                </Beige_NumberDisplay >
                                <strong>Exemple 2 :</strong>
                                <Beige_NumberDisplay >

                                    <FormulaText>
                                        <strong> Si tu as 5 sacs et chaque sac contient 6 jouets, alors le total de jouets est : 5 x 6 = 30. Tu as donc 30 jouets en tout.</strong>
                                    </FormulaText>
                                </Beige_NumberDisplay >

                                <strong>Astuce :</strong>
                                <NumberDisplay>
                                    <FormulaText>
                                        Quand tu multiplies par 10, tu ajoutes simplement un zéro à la fin du nombre ! Par exemple, 7 x 10 = 70.
                                    </FormulaText>
                                </NumberDisplay>
                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>

                    <Swipe_Section ref={section3Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>🍕Activites🍕</ContinueButton>
                                <C5A3 />
                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>


                    <Swipe_Section ref={section4Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>🍕Activites🍕</ContinueButton>
                                <C5A4 />
                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>

                    <Swipe_Section ref={section5Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>🍕Activites🍕</ContinueButton>
                                <C5A5 />
                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>

                    <Swipe_Section ref={section6Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>QCM</ContinueButton>
                                <QCMC6 />
                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>

                </SwipeContainer2>
            </StyledBox>
        </Container_Progress_Bar>
    );
}

export default C1;
