
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import '../../Periode4/progressBar/SegmentedProgressBar.css'
import SegmentedProgressBar from '../../Periode4/progressBar/ProgressBar';
import {
Card, BodyText,FormulaText, ContinueButton, Container_Progress_Bar, SectionContainer2, FormulaBox2, SwipeContainer2, Swipe_Section, StyledBox
} from '../../../Styles/MajorStyles';

import Test1 from './QCMC10';
import P2A2_1 from './P2A2-1';
import P2A2_2 from './P2A2-2';

const App = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);
    const section5Ref = useRef(null);
    const section6Ref = useRef(null);
    const section7Ref = useRef(null);
    const section8Ref = useRef(null);

    const navigate = useNavigate();
    const [progress, setProgress] = useState(0);
    const [sectionsViewed, setSectionsViewed] = useState(0);
    const totalSections = 8; // Nombre total de sections
    const handleScroll = (event) => {
        const { scrollLeft } = event.target;
        setScrollPosition(scrollLeft);

        const sectionPositions = [
            0, 
            section1Ref.current.offsetWidth, 
            section1Ref.current.offsetWidth + section2Ref.current.offsetWidth, // Position de début de la troisième section
            section1Ref.current.offsetWidth + section2Ref.current.offsetWidth + section3Ref.current.offsetWidth, // Position de début de la troisième section
            section1Ref.current.offsetWidth + section2Ref.current.offsetWidth + section3Ref.current.offsetWidth + section4Ref.current.offsetWidth, //4
            section1Ref.current.offsetWidth + section2Ref.current.offsetWidth + section3Ref.current.offsetWidth + section4Ref.current.offsetWidth + section5Ref.current.offsetWidth, //5
            section1Ref.current.offsetWidth + section2Ref.current.offsetWidth + section3Ref.current.offsetWidth + section4Ref.current.offsetWidth + section5Ref.current.offsetWidth + section6Ref.current.offsetWidth, //6
            section1Ref.current.offsetWidth + section2Ref.current.offsetWidth + section3Ref.current.offsetWidth + section4Ref.current.offsetWidth + section5Ref.current.offsetWidth + section6Ref.current.offsetWidth + section7Ref.current.offsetWidth,
            section1Ref.current.offsetWidth + section2Ref.current.offsetWidth + section3Ref.current.offsetWidth + section4Ref.current.offsetWidth + section5Ref.current.offsetWidth + section6Ref.current.offsetWidth + section7Ref.current.offsetWidth + section8Ref.current.offsetWidth,
        ];

        let currentSection = 0;
        for (let i = 0; i < sectionPositions.length; i++) {
            if (scrollLeft >= sectionPositions[i]) {
                currentSection = i;
            }
        }
        setSectionsViewed(currentSection + 1);
        setProgress(currentSection + 1)
    };

    const [showP2A21, setShowP2A21] = useState(false);

    return (
        <Container_Progress_Bar>

            <SegmentedProgressBar totalSegments={totalSections} currentSegment={progress} />
            <StyledBox  >
                <SwipeContainer2 onScroll={handleScroll}>
                    <Swipe_Section ref={section1Ref}>
                        <SectionContainer2>
                            <FormulaBox2 style={{ backgroundColor: '#d8e8fa ' }}>
                                <button className="continue-button" >
                                    <FormulaText><strong>Calcul du Prix </strong></FormulaText>
                                </button>
                                <img src={"/images/Math/periode2/calcgif.gif"} alt="Teacher" />
                                <Card>
                                    <strong>
                                        <BodyText>
                                            Salut! Aujourd'hui, on va parler d'un sujet intéressant :<span style={{ color: 'orange' }}>comment calculer le prix de vente,</span>
                                            <span style={{ color: 'blue' }}>la perte </span><span style={{ color: 'green' }}> et le bénéfice.</span>
                                            <br></br>
                                        </BodyText>
                                    </strong>
                                </Card>
                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>

                    <Swipe_Section ref={section2Ref}>
                        <SectionContainer2>
                            <FormulaBox2  >
                                <button className="continue-button" >
                                    <FormulaText><strong>Les Bases </strong></FormulaText>
                                </button>
                                <img src={"/images/Math/periode2/prixVente.png"} alt="Teacher" />
                                <Card>
                                    <strong>
                                        <BodyText>
                                            Le <strong>prix de vente</strong> est le montant pour lequel tu vends quelque chose. Simple, non? 😉
                                        </BodyText>
                                    </strong>
                                </Card>

                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>

                    <Swipe_Section ref={section3Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>💰 Bénéfice 💰 </ContinueButton>
                                <img src={"/images/Math/periode2/benifice.png"} alt="Teacher" />
                                <Card>
                                    <BodyText>
                                        <strong>  C'est la différence entre le total des ventes et le total des achats/frais/ charges.On parle de bénéfice lorsque la différence est positive.
                                        </strong>
                                    </BodyText>
                                </Card>
                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>

                    <Swipe_Section ref={section4Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>😞Perte😞</ContinueButton>
                                <img src={"/images/Math/periode2/perte.png"} alt="Teacher" />
                                <Card>
                                    <BodyText>
                                        Si tu vends ton produit moins cher que ce qu'il t'a coûté, alors tu es en perte.
                                    </BodyText>
                                </Card>
                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>

                    <Swipe_Section ref={section5Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>Formules </ContinueButton>
                                <img src={"/images/Math/periode2/aaa.png"} alt="Teacher" />
                                <blue_vert_d_eau>
                                    <FormulaText><strong>Bénéfice</strong> = Prix de vente - Prix d'achat</FormulaText>
                                </blue_vert_d_eau>
                                <br></br>
                                <blue_vert_d_eau>
                                    <FormulaText><strong>Perte</strong> = Prix d'achat - Prix de vente</FormulaText>
                                </blue_vert_d_eau>
                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>

                    <Swipe_Section ref={section6Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>Exercice </ContinueButton>

                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <Test1 />
                                </div>
                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>

                    <Swipe_Section ref={section7Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>Exercice </ContinueButton>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <P2A2_1 />
                                </div>
                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>

                    <Swipe_Section ref={section8Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>Exercice </ContinueButton>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <P2A2_2 />
                                </div>
                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>
                </SwipeContainer2>

            </StyledBox>
        </Container_Progress_Bar>
    );
}
export default App;