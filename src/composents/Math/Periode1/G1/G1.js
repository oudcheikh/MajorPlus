import React, { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../../Periode4/progressBar/SegmentedProgressBar.css'
import SegmentedProgressBar from '../../Periode4/progressBar/ProgressBar';

import G1A2 from './G1A2';
import G1A1 from './G1A1';
import G1A3 from './G1A3';
import G1A4 from './G1A4';
import QCMG1 from './QCMG1';


import { Box } from '@mui/material';
import {
    Container, SectionContainer, ImageContainer, FormulaText, Card, FormulaBox, BodyText, Subtitle, ContinueButton, Container_Progress_Bar, SectionContainer2, FormulaBox2,
    SwipeContainer2, Swipe_Section,
} from '../../../Styles/MajorStyles'; // Assurez-vous que le chemin est correct

import styled from 'styled-components';
export const textStyle = styled.h2`
        font-family: "Roboto", sans-serif;
        font-size: 20px;
        color: #444;
    
        @media (max-width: 480px) {
            font-size: 18px;
        }
    `;


const StyledBox = styled(Box)({

});


const NumberDisplay2 = styled(Box)(({ isActive }) => ({
    boxSizing: 'border-box',
    width: '100%',
    height: 'auto',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: 'rgb(248, 248, 227)',
    border: '3px dashed #B3E5FC',
    transition: 'background-color 0.4s, transform 0.3s',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '1em',
    fontFamily: "'Comic Sans MS', sans-serif",
    '&:hover': {
        transform: 'scale(1.05)',
    },
}));

const G1 = () => {

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

    const navigate = useNavigate();


    const [progress, setProgress] = useState(0);


    const [sectionsViewed, setSectionsViewed] = useState(0);
    const totalSections = 7; // Nombre total de sections




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
            section1Ref.current.offsetWidth + section2Ref.current.offsetWidth + section3Ref.current.offsetWidth + section4Ref.current.offsetWidth + section5Ref.current.offsetWidth + section6Ref.current.offsetWidth + section7Ref.current.offsetWidth,
            


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
                                    <FormulaText><strong> Droites parallèles et perpendiculaires </strong></FormulaText>
                                </button>
                                <br>
                                </br>
                                <br>
                                </br>
                                <br>
                                </br>
                                <br>
                                </br>
                                <br>
                                </br>
                                <br>
                                </br>
                                <imageStyle> <img src={"/images/Math/G1/parallele.gif"} alt="angle" /></imageStyle>


                                <br>
                                </br><br>
                                </br>
                                <br>
                                </br>
                                <br>
                                </br>
                                <br>
                                </br>
                                <Card>

                                    <BodyText>

                                        <strong>  Salut à tous ! Aujourd'hui, nous allons plonger dans un sujet
                                            passionnant :<span style={{ color: 'blue' }}> les droites parallèles et perpendiculaires</span>     </strong>             </BodyText>

                                </Card>
                                <br></br> <br></br> <br></br> <br></br>


                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>



                    <Swipe_Section ref={section2Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>Concepts clés🔍</ContinueButton>



                                <br></br>

                                <img src={"/images/Math/C/C11/divi.png"} alt="attention" />


                                <strong>Droites  parallèles</strong>
                                <NumberDisplay2 >
                                    <strong>
                                        <FormulaText>Une droite parallèle à une autre est une droite qui, dans un même plan, ne coupe jamais l'autre droite, quelle que soit la distance à laquelle elles sont prolongées.</FormulaText>
                                    </strong>
                                </NumberDisplay2>

                                <strong> Droites perpendiculaires</strong>
                                <NumberDisplay2 >
                                    <strong>
                                        <FormulaText> Une droite perpendiculaire est une ligne qui forme un angle de 90 degrés (angle droit) par rapport à une autre ligne ou un plan.</FormulaText>
                                    </strong>
                                </NumberDisplay2>

                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>

                    <Swipe_Section ref={section3Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>🍕Activitè 1 🍕</ContinueButton>


                                <G1A2 />

                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>


                    <Swipe_Section ref={section4Ref}>
                        <SectionContainer2>
                                <G1A1 />
                        </SectionContainer2>
                    </Swipe_Section>


                    <Swipe_Section ref={section5Ref}>
                        <SectionContainer2>
                               


                                <G1A3 />

                        </SectionContainer2>
                    </Swipe_Section>

                    <Swipe_Section ref={section6Ref}>
                        <SectionContainer2>
                                <G1A4 /> 
                        </SectionContainer2>
                    </Swipe_Section>

                    <Swipe_Section ref={section7Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>QCM</ContinueButton>


                                <QCMG1/> 

                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>



                </SwipeContainer2>
            </StyledBox>
        </Container_Progress_Bar>
    )
}
export default G1;