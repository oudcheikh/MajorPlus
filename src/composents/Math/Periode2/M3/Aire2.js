import React, { useRef, useState } from "react";

import { useNavigate } from 'react-router-dom';

import '../../Periode4/progressBar/SegmentedProgressBar.css'
import SegmentedProgressBar from '../../Periode4/progressBar/ProgressBar';
import styled from 'styled-components';
import { Box } from '@mui/material';


import Aire1 from './Aire1';
import M3 from './M3';
import QCMM3 from './QCMM3';



import {
    Container, SectionContainer, ImageContainer, Card, BodyText,
    Title, Subtitle, FormulaBox, FormulaText, ContinueButton, Container_Progress_Bar, SectionContainer2, FormulaBox2,
    SwipeContainer2, Swipe_Section,
} from '../../../Styles/MajorStyles';


import Rapporteur from './Rapporteur';


export const StyledBox = styled.div`
padding-left: 2px;
padding-right:2px;
padding-top: 300%;
padding-bottom:2px;
    width: 100%;
    max-width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const NumberDisplay3 = styled(Box)(({ isActive }) => ({
    boxSizing: 'border-box',
    width: '100%',
    height: 'auto',
    // margin: '20px auto',
    padding: '5px',
    backgroundColor: ' pink;',
    border: '3px dashed black',
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
const C1 = () => {

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
            section1Ref.current.offsetWidth + section2Ref.current.offsetWidth + section3Ref.current.offsetWidth + section4Ref.current.offsetWidth, //4
            section1Ref.current.offsetWidth + section2Ref.current.offsetWidth + section3Ref.current.offsetWidth + section4Ref.current.offsetWidth + section5Ref.current.offsetWidth, //5
            

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
                                    <FormulaText><strong>  Mesure des angles </strong></FormulaText>
                                </button>

                                <img     src={"/images/Math/periode2/angle (2).png"} alt="angle" />


                                <Card>
                                    <strong>
                                        <BodyText>
                                            Salut! Aujourd'hui, on va parler d'un sujet intéressant :                                         <br></br>
                                            <span style={{ color: 'blue' }}>  Mesure des angles.   </span>

                                        </BodyText>
                                    </strong>
                                </Card>

                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>


                    <Swipe_Section ref={section2Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>Concept clés</ContinueButton>

                                <img src={"/images/Math/periode2/distance.png"} alt="Teacher" />
                                <div>
                                    <strong>Les grands nombres :</strong>
                                    <NumberDisplay3>
                                        <FormulaText>
                                            Plus un nombre a de chiffres, plus il est grand. Ainsi, "100" est plus grand que "99". On utilise des séparateurs, comme une virgule, pour faciliter la lecture: 1 000, 10 000, etc.
                                        </FormulaText>
                                    </NumberDisplay3>

                                    <br></br>
                                    <strong>Noms des grands nombres :</strong>
                                    <NumberDisplay3>
                                        <FormulaText>
                                            1 000 est un "mille", 1 000 000 est un "million" et 1 000 000 000 est un "milliard".
                                        </FormulaText>

                                    </NumberDisplay3>

                                    <br></br>
                                    <strong>Astuce :</strong>
                                    <NumberDisplay3>
                                        <FormulaText>
                                            Pense à des situations réelles: une ville a des milliers d'habitants, un pays a des millions d'habitants !
                                        </FormulaText>
                                    </NumberDisplay3>
                                </div>
                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>



                    <Swipe_Section ref={section3Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>Exercice</ContinueButton>
                                <div>
                                    <SectionContainer>
                                        <ImageContainer>
                                            <img src={"/images/Math/periode2/angle.png"} alt="Enseignant" />
                                        </ImageContainer>
                                        <Card>
                                            <BodyText>
                                          <strong>  Écris un nombre et découvre ses détails.</strong>  
                                            </BodyText>
                                        </Card>
                                    </SectionContainer>
                                    <br></br>
                                    <br></br>

                                    <div style={{ marginBottom: '50px', width: '100%', height: '100%' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <Aire1 />
                                        </div>
                                        <div className="separator"></div>  </div>
                                </div>
                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>


               




                    <Swipe_Section ref={section5Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>Exercice</ContinueButton>

                                <div style={{ marginBottom: '50px', width: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <ImageContainer>
                            <img  src={"/images/Math/periode2/angle (2).png"}alt="Enseignant" />
                        </ImageContainer>
                        <QCMM3 />
                    </div>
                   
                </div>

                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>


                    <Swipe_Section ref={section4Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton onClick={move}> Appliquer un exercice avec les angles   </ContinueButton>

                                        {/* <M3 /> */}
                                 

                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>

                </SwipeContainer2>
            </StyledBox>
        </Container_Progress_Bar>
    );
}

export default C1;