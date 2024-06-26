
import React, { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../../Periode4/progressBar/SegmentedProgressBar.css'
import SegmentedProgressBar from '../../Periode4/progressBar/ProgressBar';

import Plus from './Plus';
import QCMC7 from './QCMC7';

import { Box } from '@mui/material';
import {
    StyledBox, Beige_NumberDisplay, Container, SectionContainer, ImageContainer, FormulaText, Card, FormulaBox, BodyText, Subtitle, ContinueButton, Container_Progress_Bar, SectionContainer2, FormulaBox2,
    SwipeContainer2, Swipe_Section,
} from '../../../Styles/MajorStyles'; // Assurez-vous que le chemin est correct

import styled from 'styled-components';
import Acceuil from "../../../_ReusableComponents/Accueil";

const C7 = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);

    const navigate = useNavigate();
    const [progress, setProgress] = useState(0);
    const [sectionsViewed, setSectionsViewed] = useState(0);
    const totalSections = 4; // Nombre total de sections

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

        ];

        // Trouver la section actuelle en fonction de la position de défilement
        let currentSection = 0;
        for (let i = 0; i < sectionPositions.length; i++) {
            if (scrollLeft >= sectionPositions[i]) {
                currentSection = i;
            }
        }

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
                                <Acceuil titre={" l' Addition des grandes nombres"} imgSrc={"/images/Math/C/C7/addition.gif"} altText={"l'addition des grandes nombres"}> </Acceuil>
                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>


                    <Swipe_Section ref={section2Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>Concepts clés🔍</ContinueButton>
                                <br></br>
                                <img src={"/images/Math/C/C11/divi.png"} style={{ width: '50%', height: '10%', marginLeft: '50px' }} alt="attention" />
                                <br></br>
                                <strong>Multiplication :</strong>
                                <Beige_NumberDisplay >
                                    <strong>
                                        Pour additionner des grands nombres, on additionne chiffre par chiffre les chiffres de même rang, en commençant par les unités. Pour poser l'addition, on aligne les nombres sur la droite.
                                        On place les unités sous les unités, les dizaines sous les dizaines... <br></br>
                                        <span style={{ color: 'red' }}> Il ne faut pas oublier de reporter la (ou les) retenue.</span>
                                    </strong>
                                </Beige_NumberDisplay>
                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>

                    <Swipe_Section ref={section3Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>🍕Activites🍕</ContinueButton>
                                <Plus />
                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>



                    <Swipe_Section ref={section4Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>QCM</ContinueButton>
                                <QCMC7 />
                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>


                </SwipeContainer2>

            </StyledBox>
        </Container_Progress_Bar>
    )
}

export default C7;
