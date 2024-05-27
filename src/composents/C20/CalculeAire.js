import React, { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../Math/Periode4/progressBar/SegmentedProgressBar.css'
import SegmentedProgressBar from '../Math/Periode4/progressBar/ProgressBar'

import QCMC1 from './QCMC1';
import Addexemple1 from './Addexemple1';
import Addexemple2 from './Addexample2';
import Multipexempl from './Multipexempl';
import Multipexampl2 from './Multipexampl2';
import Divisionexampl1 from './Divisionexampl1';
import Fractiondetail from './Fractiondetail';

import styled from 'styled-components';



import { Box } from '@mui/material';

import {
    imageStyle, Container, SectionContainer, ImageContainer, FormulaText, Card, FormulaBox, BodyText, Subtitle, ContinueButton, Container_Progress_Bar, SectionContainer2, FormulaBox2,
    SwipeContainer2, Swipe_Section, NumberDisplay, NumberDisplay2, StyledBox
} from '../Styles/MajorStyles';

const C1 = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);
    const section5Ref = useRef(null);
    const section6Ref = useRef(null);
    const section7Ref = useRef(null);

    const navigate = useNavigate();
    const [progress, setProgress] = useState(0);
    const [sectionsViewed, setSectionsViewed] = useState(0);
    const totalSections = 6;


    const handleScroll = (event) => {
        const { scrollLeft } = event.target;
        setScrollPosition(scrollLeft);


        const sectionPositions = [
            0,
            section1Ref.current.offsetWidth,
            section1Ref.current.offsetWidth + section2Ref.current.offsetWidth,
            section1Ref.current.offsetWidth + section2Ref.current.offsetWidth + section3Ref.current.offsetWidth,
            section1Ref.current.offsetWidth + section2Ref.current.offsetWidth + section3Ref.current.offsetWidth + section4Ref.current.offsetWidth,
            section1Ref.current.offsetWidth + section2Ref.current.offsetWidth + section3Ref.current.offsetWidth + section4Ref.current.offsetWidth + section5Ref.current.offsetWidth, //5
            section1Ref.current.offsetWidth + section2Ref.current.offsetWidth + section3Ref.current.offsetWidth + section4Ref.current.offsetWidth + section5Ref.current.offsetWidth + section6Ref.current.offsetWidth, //6
            section1Ref.current.offsetWidth + section2Ref.current.offsetWidth + section3Ref.current.offsetWidth + section4Ref.current.offsetWidth + section5Ref.current.offsetWidth + section6Ref.current.offsetWidth + section7Ref.current.offsetWidth,
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


    const move = () => {
        navigate("/M3 ");
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
                                    <FormulaText><strong>  Calcule des aires </strong></FormulaText>
                                </button>
                                <div style={{ marginTop: '100px' }}></div>

                             <div style={{marginRight:'20px',marginLeft:'20px'}}>
                             <img src={"/images/Math/C/C20/aire.png"} alt="angle"  />
                             </div>



                                <Card>

                                    <BodyText>

                                        Salut! Aujourd'hui, on va parler d'un sujet intéressant :   <strong className="mot_importante">Calcule des aires.</strong>
                                    </BodyText>

                                </Card>

                                <div style={{ marginTop: '100px' }}></div>

                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>



                    <Swipe_Section ref={section2Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>Concept clés</ContinueButton>

                                <FormulaText>
                                    <strong>

                                        Le calcul des aires, c'est comme mesurer l'espace à l'intérieur de différentes formes, comme des rectangles, des carrés ou des cercles.

                                    </strong>
                                </FormulaText>

                                <img src='/images/Math/C/C20/Aire.png' alt="Teacher" style={imageStyle} />
                                <FormulaText>
                                    <strong>

                                        C'est un peu comme compter combien de petits carrés on peut placer dans une grille de jeu
                                    </strong>
                                </FormulaText>




                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>

                    <Swipe_Section ref={section3Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton> Aire du carré</ContinueButton>


                                <Fractiondetail></Fractiondetail>
                                <FormulaText><strong>
                                    Calcul de l'aire du Carré :<br /> Aire du carré = <span style={{ color: '#0000FF' }}>côté</span> x <span style={{ color: '#0000FF' }}>côté</span><br /> Aire = <span style={{ color: '#FF00FF' }}>c</span> x <span style={{ color: '#FF00FF' }}>c</span>
                                </strong></FormulaText>
                                <FormulaText><strong>
                                    Calcul du Périmètre du Carré :<br /> Périmètre = <span style={{ color: '#00FF00' }}>côté</span> x 4
                                </strong></FormulaText>
                                <FormulaText><strong>
                                    Calcul du Côté du Carré :<br /> Côté = <span style={{ color: '#FFA500' }}>périmètre</span> ÷ 4
                                </strong></FormulaText>




                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>



                    <Swipe_Section ref={section4Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>  Une part est le multiple de l'autre</ContinueButton>
                                <div>

                                    <img src={'/images/petitInestine.png'} alt="Teacher" style={imageStyle} />
                                    <FormulaText><strong>
                                        Sidi et Moussa possèdent ensemble <span style={{ color: '#FF0000' }}>600 Um</span>.
                                        La part de Sidi est le triple de celle de Moussa.
                                        Quelle est la part de chacun ?
                                    </strong></FormulaText>
                                    <FormulaText><strong>Solution</strong></FormulaText>

                                    <FormulaText><strong>
                                        Si la part de Moussa est <span style={{ color: '#0000FF' }}>x Um</span>, alors celle de Sidi est <span style={{ color: '#0000FF' }}>3x Um</span>.<br />
                                        Ensemble : <span style={{ color: '#FF0000' }}>x</span> + <span style={{ color: '#0000FF' }}>3x</span> = <span style={{ color: '#FF0000' }}>600 Um</span>.
                                    </strong></FormulaText>
                                    <FormulaText><strong>
                                        Total des parts :<br /> <span style={{ color: '#0000FF' }}>4x</span> = <span style={{ color: '#FF0000' }}>600 Um</span>.
                                    </strong></FormulaText>
                                    <FormulaText><strong>
                                        La part de Moussa :<br /> <span style={{ color: '#FF0000' }}>600 Um</span> ÷ 4 = <span style={{ color: '#FFA500' }}>150 Um</span>
                                    </strong></FormulaText>
                                    <FormulaText><strong>
                                        La part de Sidi :<br /> <span style={{ color: '#FFA500' }}>150 Um</span> × 3 = <span style={{ color: '#FF00FF' }}>450 Um</span>
                                    </strong></FormulaText>
                                    <FormulaText><strong>
                                        Je vérifie :<br /> <span style={{ color: '#FF00FF' }}>450 Um</span> + <span style={{ color: '#FFA500' }}>150 Um</span> = <span style={{ color: '#FF0000' }}>600 Um</span>
                                    </strong></FormulaText>




                                </div>

                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>



                    <Swipe_Section ref={section5Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton> Activité</ContinueButton>

                                <Addexemple2></Addexemple2>

                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>


                    <Swipe_Section ref={section6Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton> Activité</ContinueButton>

                                <Multipexempl></Multipexempl>

                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>


                    <Swipe_Section ref={section7Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>Activité</ContinueButton>

                                <Multipexampl2></Multipexampl2>

                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>


                </SwipeContainer2>
            </StyledBox>
        </Container_Progress_Bar>
    )
}

export default C1;
