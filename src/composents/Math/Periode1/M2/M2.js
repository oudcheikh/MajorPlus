import React, { useRef, useState } from "react";
import '../../Periode4/progressBar/SegmentedProgressBar.css'
import SegmentedProgressBar from '../../Periode4/progressBar/ProgressBar';

import M2A2 from './M2A2'
import QCMC6 from './QCMM2';
//import teacher from '../Images/teacher.png'
import M2A1 from './M2A1';
import M2A3 from './M2A3';

import {
    StyledBox,Beige_NumberDisplay,   Container, SectionContainer, ImageContainer, FormulaText, Card, FormulaBox, BodyText, Subtitle, ContinueButton, Container_Progress_Bar, SectionContainer2, FormulaBox2,
    SwipeContainer2, Swipe_Section,
} from '../../../Styles/MajorStyles'; 

import Acceuil from "../../../_ReusableComponents/Accueil";

const M2 = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);
    const section5Ref = useRef(null);
    const section6Ref = useRef(null);

    const [progress, setProgress] = useState(0);
    const [sectionsViewed, setSectionsViewed] = useState(0);
    const totalSections = 6;

    const handleScroll = (event) => {
        const { scrollLeft } = event.target;
        setScrollPosition(scrollLeft);

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
                                <Acceuil titre={" Mesure des Masses"} imgSrc={"/images/Math/M/imagesM2/masse_.gif"} altText={"  Les mesures des masses"}> </Acceuil>
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
                                <strong>Unité de mesure :</strong>
                                <Beige_NumberDisplay >
                                    <strong>
                                        <FormulaText>L'unité de base pour la mesure de la masse dans le Système International est le kilogramme (kg). D'autres unités dérivées incluent le gramme (g) qui est égal à 1/1000 de kilogramme.</FormulaText>
                                    </strong>
                                </Beige_NumberDisplay>

                                <strong>Conversion:</strong>
                                <Beige_NumberDisplay >
                                    <strong>
                                        <FormulaText> 1 kilogramme (kg) est équivalent à 1000 grammes (g), 1 gramme (g) est équivalent à 1000 milligrammes (mg).</FormulaText>
                                    </strong>
                                </Beige_NumberDisplay>

                                <strong>Balance:</strong>
                                <Beige_NumberDisplay >
                                    <strong>
                                        <FormulaText>C'est un outil utilisé pour mesurer la masse d'un objet. Les balances modernes peuvent être numériques et donner une lecture directe de la masse, tandis que les balances traditionnelles utilisent un ensemble de poids pour équilibrer et déterminer la masse de l'objet.</FormulaText>
                                    </strong>
                                </Beige_NumberDisplay>

                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>

                    <Swipe_Section ref={section3Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>🍕Activites🍕</ContinueButton>
                                <M2A1 />

                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>

                    <Swipe_Section ref={section4Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>🍕Activites🍕</ContinueButton>
                                <M2A2 />

                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>

                    <Swipe_Section ref={section5Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>🍕Activites🍕</ContinueButton>

                                <img src={'/images/Math/C/C11/deux.png'} alt="division" />
                                <br></br> <br></br> <br></br><br></br> <br></br> <br></br>
                                <M2A3 />

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
export default M2;
