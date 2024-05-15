import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../Periode4/progressBar/SegmentedProgressBar.css'
import SegmentedProgressBar from '../../Periode4/progressBar/ProgressBar';

import Test2 from './QCMC12';
import P2A3_1 from './P2A3-1';
import P2A3_2 from './P2A3-2';
import Audio from "./Audio12";



import styled from 'styled-components';
import { Box } from '@mui/material';

import {
    Container, SectionContainer, ImageContainer, Card, BodyText,
    Title, Subtitle, FormulaBox, FormulaText, ContinueButton, Container_Progress_Bar, SectionContainer2, FormulaBox2,
    SwipeContainer2, Swipe_Section,
} from '../../../Styles/MajorStyles';




export const StyledBox = styled.div`
padding-left: 2px;
padding-right:2px;
padding-top: 30px;
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
    backgroundColor: ' orange',
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

const NumberDisplay = styled(Box)(({ isActive }) => ({
    boxSizing: 'border-box',
    width: '100%',
    height: 'auto',
    // margin: '20px auto',
    padding: '5px',
    backgroundColor: ' hsl(210, 75%, 63%);',
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

// App Component
const P2A1B = () => {
    const [section, setSection] = useState(0);
    const [showSections, setShowSections] = useState([true, true, true, true, true, true, true, true]);

    const toggleSection = (index) => {
        const updatedShowSections = [...showSections];
        updatedShowSections[index] = !updatedShowSections[index];
        setShowSections(updatedShowSections);
    };



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
    const totalSections = 7; // Nombre total de sections




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


    const nextChap = () => {
        navigate("/Les_solides");
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



                                <strong> <span style={{ color: 'blue' }}>    les multiples de 3 :</span></strong>


                                <img src={"/images/Math/C/imagesC12/trois.png"} alt="Teacher" />

                                <NumberDisplay>
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
                                    </strong>
                                </NumberDisplay>



                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>


                    <Swipe_Section ref={section5Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>Exemple 2</ContinueButton>

                                <strong> <span style={{ color: 'blue' }}> les diviseurs du nombre 12 : </span></strong>


                                <img src={"/images/Math/C/imagesC12/douze.png"} alt="douze" />

                                <NumberDisplay>
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
                                </NumberDisplay>
                           </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>



                    <Swipe_Section ref={section6Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton> Formules Clés</ContinueButton>

                                <strong> <span style={{ color: 'blue' }}> les diviseurs du nombre 12 : </span></strong>


                                <img src={"/images/Math/C/imagesC12/douze.png"} alt="douze" />

                                <NumberDisplay3>
                                <FormulaText><strong>Multiple</strong> =Un nombre obtenu en multipliant un nombre donné par un autre nombre entier.</FormulaText>
                                </NumberDisplay3>

                                <br>
                                </br>
                                <NumberDisplay3>
                        <FormulaText><strong>Diviseur</strong> = Un nombre par lequel un autre nombre peut être divisé de manière exacte, sans reste.</FormulaText>
                                </NumberDisplay3>
                           </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>


                </SwipeContainer2>
            </StyledBox>
        </Container_Progress_Bar>


    );
}



export default P2A1B;