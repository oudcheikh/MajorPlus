import React, { useRef, useState } from 'react';

import '../../Periode4/progressBar/SegmentedProgressBar.css'
import SegmentedProgressBar from '../../Periode4/progressBar/ProgressBar';
import Test2 from './QCMC12';
import P2A3_1 from './P2A3-1';
import P2A3_2 from './P2A3-2';
import styled from 'styled-components';
import { Box } from '@mui/material';
import {
    Card, BodyText, FormulaText, ContinueButton, Container_Progress_Bar, SectionContainer2, FormulaBox2, SwipeContainer2, Swipe_Section,
    Blue_NumberDisplay, Maron_NumberDisplay, StyledBox
} from '../../../Styles/MajorStyles';

const P2A1B = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);
    const section5Ref = useRef(null);
    const section6Ref = useRef(null);
    const section7Ref = useRef(null);
    const section8Ref = useRef(null);
    const section9Ref = useRef(null);

    const [progress, setProgress] = useState(0);
    const [sectionsViewed, setSectionsViewed] = useState(0);
    const totalSections = 9; // Nombre total de sections


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
            section1Ref.current.offsetWidth + section2Ref.current.offsetWidth + section3Ref.current.offsetWidth + section4Ref.current.offsetWidth + section5Ref.current.offsetWidth + section6Ref.current.offsetWidth + section7Ref.current.offsetWidth,
            section1Ref.current.offsetWidth + section2Ref.current.offsetWidth + section3Ref.current.offsetWidth + section4Ref.current.offsetWidth + section5Ref.current.offsetWidth + section6Ref.current.offsetWidth + section7Ref.current.offsetWidth + section8Ref.current.offsetWidth,
            section1Ref.current.offsetWidth + section2Ref.current.offsetWidth + section3Ref.current.offsetWidth + section4Ref.current.offsetWidth + section5Ref.current.offsetWidth + section6Ref.current.offsetWidth + section7Ref.current.offsetWidth + section8Ref.current.offsetWidth + section9Ref.current.offsetWidth,
        ];
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
                                <button className="continue-button" >
                                    <FormulaText><strong> les multiples et les diviseurs. </strong></FormulaText>
                                </button>
                                <img src={"/images/Math/C/imagesC12/mult.png"} alt="Teacher" />
                                <Card>
                                    <strong>
                                        <BodyText>
                                            Salut tout le monde ! Aujourd'hui, explorons un concept mathématique clé :<span style={{ color: 'orange' }}>les multiples et les diviseurs.</span>
                                            <br></br>
                                            <span style={{ color: 'blue' }}> Commençons par définir ces termes </span>
                                        </BodyText>
                                    </strong>
                                </Card>
                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>

                    <Swipe_Section ref={section2Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>Les multiples</ContinueButton>
                                <img src={"/images/Math/C/imagesC12/fois.png"} alt="Teacher" />
                                <div>
                                    <Card>
                                        <strong>
                                            <BodyText>
                                                Un multiple résulte de la multiplication d'un nombre par un entier.
                                            </BodyText>
                                        </strong>
                                    </Card>
                                </div>
                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>

                    <Swipe_Section ref={section3Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>les diviseurs</ContinueButton>
                                <div>
                                    <img src={"/images/Math/C/imagesC12/owl3.png"} alt="Teacher" />
                                    <Card>
                                        <strong>
                                            <BodyText>
                                                Un diviseur est un nombre <span style={{ color: 'blue' }}>permettant une division exacte d'un autre </span>, sans reste. Si un nombre est divisible par un autre, ce dernier en est un diviseur.
                                            </BodyText>
                                        </strong>
                                    </Card>
                                </div>
                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>


                    <Swipe_Section ref={section4Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>Exemple 1</ContinueButton>
                                <FormulaText>   <strong> <span style={{ color: 'blue' }}>    les multiples de 3 :</span></strong></FormulaText>
                                <img src={"/images/Math/C/imagesC12/trois.png"} alt="Teacher" />
                                <Blue_NumberDisplay>
                                    <strong>
                                        1*3=3 <br></br>
                                        2*3=6 <br></br>
                                        3*3=9 <br></br>
                                        4*3=12 <br></br>
                                        5*3=15 <br></br>
                                        6*3=18 <br></br>
                                        7*3=21 <br></br>
                                        9*3=27 <br></br>
                                        10*3=30 <br></br>
                                        .<br></br>
                                        .<br></br>
                                        .<br></br>
                                    </strong>
                                </Blue_NumberDisplay>
                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>

                    <Swipe_Section ref={section5Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>Exemple 2</ContinueButton>
                                <FormulaText>    <strong> <span style={{ color: 'blue' }}> les diviseurs du nombre 12 : </span></strong></FormulaText>
                                <img src={"/images/Math/C/imagesC12/douze.png"} alt="douze" />
                                <Blue_NumberDisplay>
                                    <strong>
                                        1<br></br>
                                        2<br></br>
                                        3<br></br>
                                        4<br></br>
                                        6<br></br>
                                        .<br></br>
                                        .<br></br>
                                        .<br></br>
                                    </strong>
                                </Blue_NumberDisplay>
                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>

                    <Swipe_Section ref={section6Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton> Formules Clés</ContinueButton>
                                <img src={"/images/Math/periode2/multiple.png"} alt="douze" />
                                <Maron_NumberDisplay>
                                    <FormulaText><strong>Multiple</strong> =Un nombre obtenu en multipliant un nombre donné par un autre nombre entier.</FormulaText>
                                </Maron_NumberDisplay>
                                <br />
                              
                                <Maron_NumberDisplay>
                                    <FormulaText><strong>Diviseur</strong> = Un nombre par lequel un autre nombre peut être divisé de manière exacte, sans reste.</FormulaText>
                                </Maron_NumberDisplay>
                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>

                    <Swipe_Section ref={section7Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton> Activites</ContinueButton>
                                <div>
                                    <P2A3_1 />
                                </div>
                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>

                    <Swipe_Section ref={section8Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton> Activites</ContinueButton>
                                <div>
                                    <P2A3_2 />
                                </div>
                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>

                    <Swipe_Section ref={section9Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton> QCM</ContinueButton>
                                <div>
                                    <Test2 />
                                </div>
                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>

                </SwipeContainer2>
            </StyledBox>
        </Container_Progress_Bar>
    );
}
export default P2A1B;