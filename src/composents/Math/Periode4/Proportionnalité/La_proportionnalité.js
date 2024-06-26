import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Exercice1 from './Exercice1'
import Exercice2 from './Exercice2'

import styled from 'styled-components';

// Import des styles
import { Box } from '@mui/material';

import {
    Container, SectionContainer, ImageContainer, FormulaText, Card, FormulaBox, BodyText, Subtitle, ContinueButton, Container_Progress_Bar, SectionContainer2, FormulaBox2,
    textStyle2, SwipeContainer2, Swipe_Section,NumberDisplay,StyledBox
} from '../../../Styles/MajorStyles'; // Assurez-vous que le chemin est correct
import '../Style.css'
import SegmentedProgressBar from '../progressBar/ProgressBar';

const C1 = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);
    const section5Ref = useRef(null);
    const navigate = useNavigate();
    const [progress, setProgress] = useState(0);
    const [sectionsViewed, setSectionsViewed] = useState(0);
    const totalSections = 5; // Nombre total de sections
        const handleScroll = (event) => {
        const { scrollLeft } = event.target;
        setScrollPosition(scrollLeft);

        // Récupérer les positions de début de chaque section
        const sectionPositions = [
            0, // Position de début de la première section
            section1Ref.current.offsetWidth, // Position de début de la deuxième section
            section1Ref.current.offsetWidth + section2Ref.current.offsetWidth, // Position de début de la troisième section
            section1Ref.current.offsetWidth + section2Ref.current.offsetWidth + section3Ref.current.offsetWidth, // Position de début de la troisième section
            section1Ref.current.offsetWidth + section2Ref.current.offsetWidth + section3Ref.current.offsetWidth + section4Ref.current.offsetWidth
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
    const nextChap = () => {
        navigate("");
    }

    return (
        <Container_Progress_Bar>
            <SegmentedProgressBar totalSegments={totalSections} currentSegment={progress} />
            <StyledBox>
                <SwipeContainer2 onScroll={handleScroll}>
                    <Swipe_Section ref={section1Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <button className="continue-button" >
                                    <FormulaText><strong>  La proportionnalité </strong></FormulaText>
                                </button>
                                <img src={'/images/ines2.png'} alt="Teacher" />
                                <strong>
                                    <Card>
                                        <BodyText>
                                            La proportionnalité en mathématiques est <span style={{ color: 'blue' }}>une relation entre deux grandeurs</span> qui <span style={{ color: '#ff4500' }}>varient de manière cohérente.</span>
                                        </BodyText>
                                    </Card>
                                </strong>
                            </FormulaBox2>
                        </SectionContainer2>


                    </Swipe_Section>
                    <Swipe_Section ref={section2Ref}>
                        <SectionContainer2>
                            <FormulaBox2>

                              <ContinueButton> <strong>Notion </strong></ContinueButton>
                                
                                <FormulaText>
                                    <img src={'/images/Math/periode 4/proportionnalité.PNG'} alt="Teacher" />
                                    <strong>
                                        <NumberDisplay>
                                            <div style={{ display: 'inline' }}>
                                                si deux grandeurs sont <span style={{ color: '#ff4500' }}>proportionnelles</span>,<br />
                                                cela signifie que <span style={{ color: 'blue' }}>lorsque l'une change,</span> l'autre change<span style={{ color: 'blue' }}> de manière correspondante.</span>
                                            </div>
                                        </NumberDisplay>
                                    </strong>
                                </FormulaText>
                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>

                    <Swipe_Section ref={section3Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <FormulaText>
                                    <strong style={{ color: 'rgb(27, 226, 226)' }}>Pour mieu comprendre :</strong><br></br>
                                    <strong> Imagine que tu aimes les glaces et que tu veux partager une glace avec ton ami. Vous avez une grande glace que vous voulez partager équitablement.
                                    </strong>
                                    <img src={'/images/Math/periode 4/glasse.PNG'} alt="glasse" />
                                    <strong>Maintenant, si vous divisez la glace en deux parts égales, chacun de vous aura une moitié de la glace, c'est-à-dire la même quantité. <span style={{ color: '#ff4500' }}>C'est la proportionnalité !</span></strong>
                                </FormulaText>
                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>

                    <Swipe_Section ref={section4Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <BodyText>
                                    <strong style={{ color: 'blue' }}>Exercice explicatif:</strong>
                                </BodyText>
                                <img src={'/images/Math/periode 4/crayon.PNG'} alt="Teacher" />
                                <div style={{ marginBottom: '50px', width: '100%', height: '100%' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <Exercice2 />
                                    </div>
                                </div>
                            </FormulaBox2>
                        </SectionContainer2>
                        <br></br>
                        <br></br>
                    </Swipe_Section>
                    <Swipe_Section ref={section5Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <div style={{ marginBottom: '50px', width: '100%', height: '100%' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <Exercice1 />
                                    </div>
                                </div>
                                <br></br>
                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>
                </SwipeContainer2>
            </StyledBox>
        </Container_Progress_Bar>
    );
}

export default C1;
