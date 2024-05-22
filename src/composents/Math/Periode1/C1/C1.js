import React, { useRef, useState } from "react";

import { useNavigate } from 'react-router-dom';

import '../../Periode4/progressBar/SegmentedProgressBar.css'
import SegmentedProgressBar from '../../Periode4/progressBar/ProgressBar';
import C1A1 from './C1A1';
import C1A2 from './C1A2';
import C1A3 from './C1A3';
import QCMC1 from './QCMC1';


import styled from 'styled-components';
import Audio from "./Audio1";
import './C1.css';
// Import des styles
import { Box, Typography, CardContent, Grid, Fab, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';

import {
    Container, SectionContainer, ImageContainer, FormulaText, Card, FormulaBox, BodyText, Subtitle, ContinueButton, Container_Progress_Bar, SectionContainer2, FormulaBox2,
    SwipeContainer2, Swipe_Section,
} from '../../../Styles/MajorStyles'; // Assurez-vous que le chemin est correct


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

const NumberDisplay = styled(Box)(({ isActive }) => ({
    boxSizing: 'border-box',
    width: '100%',
    height: 'auto',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: 'FF7F50',
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

const imageStyle = {
    width: '90%', // L'image prendra 80% de la largeur de son parent
    height: 'auto', // La hauteur change automatiquement pour garder les proportions
    maxWidth: '90%', // Assure que l'image ne dépasse pas la largeur de la carte
    display: 'block', // Empêche l'image de prendre plus de place que nécessaire
    marginLeft: 'auto', // Marges automatiques à gauche pour centrer l'image
    marginRight: 'auto' // Marges automatiques à droite pour centrer l'image
};

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
    const totalSections = 8; // Nombre total de sections




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
                                    <FormulaText><strong>  Les grands nombres </strong></FormulaText>
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
                                <imageStyle> <img src={"/images/Math/periode2/grand nombre.png"} alt="angle" /></imageStyle>


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

                                        Salut! Aujourd'hui, on va parler d'un sujet intéressant :   <strong className="mot_importante">Les grands nombres.</strong>
                                    </BodyText>

                                </Card>
                                <br></br> <br></br> <br></br> <br></br>
                               

                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>



                    <Swipe_Section ref={section2Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>Concept clés</ContinueButton>
                                <img src={"/images/Math/C/C11/divi.png"} alt="Teacher" />

                                < Card>
                                    <FormulaText>
                                        <strong>Plus un nombre a de chiffres, plus il est grand.
                                            <br></br>
                                            Ainsi,<br></br>

                                            <NumberDisplay >
                                                <span style={{ color: 'green' }}>100</span> est plus grand que <span style={{ color: 'brown' }}>99.</span>
                                            </NumberDisplay>

                                            <br></br>
                                            On utilise des séparateurs, comme une virgule, pour faciliter la lecture:

                                            <NumberDisplay ><span style={{ color: 'blue' }}>1 000<span style={{ color: 'green' }}>, </span> 10 000</span></NumberDisplay>

                                        </strong>
                                    </FormulaText>
                                </Card>

                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>



                    <Swipe_Section ref={section3Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>Concept clés</ContinueButton>

                                <img src={"/images/Math/C/C11/divi.png"} alt="Teacher" />

                                <FormulaText>
                                    <strong style={{ color: 'blueviolet' }}>Noms des grands nombres :</strong>

                                    <NumberDisplay2 ><strong>1 000 =<span style={{ color: '#FF7F50' }}>"mille"</span></strong></NumberDisplay2>

                                    <NumberDisplay2 ><strong> 1 000 000 =   <span style={{ color: '#FF7F50' }}>"million"</span></strong></NumberDisplay2>
                                    <NumberDisplay2 > <h4>1 000 000 000 =</h4>  <span style={{ color: '#FF7F50' }}>"milliard"</span></NumberDisplay2>


                                </FormulaText>


                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>


                    <Swipe_Section ref={section4Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>Exemple</ContinueButton>

                                <Card>
                                    <FormulaText>
                                        <strong style={{ color: 'maroon' }}>Astuce :Pense à des situations réelles: </strong>
                                        <br></br>
                                        <strong>*une tarte qui contient  des milliers de cerise,</strong>


                                        <img src={'/images/Math/C/C1/i10.png'} alt="tarte" style={imageStyle} />


                                    </FormulaText>




                                </Card>

                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>



                    <Swipe_Section ref={section5Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>Exercice</ContinueButton>


                                <div>
                                    <SectionContainer>
                                        <ImageContainer>
                                            <img src={"images/Math/C/images C18/PetiTeacher.png"} alt="Enseignant" />
                                        </ImageContainer>
                                        <Card>
                                            <BodyText>
                                                <strong style={{ color: 'blue' }}>Écris un nombre et découvre ses détails.</strong>
                                            </BodyText>
                                        </Card>
                                    </SectionContainer>
                                    <br></br>
                                    <br></br>

                                    <div style={{ marginBottom: '50px', width: '100%', height: '100%' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <C1A1 />
                                        </div>
                                        <div className="separator">
                                        </div>
                                    </div>
                                </div>

                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>


                    <Swipe_Section ref={section6Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>Exercice</ContinueButton>

                                <div style={{ marginBottom: '50px', width: '100%' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <ImageContainer>
                                            <img src={"images/Math/C/C1/teacher.png"} alt="Enseignant" />
                                        </ImageContainer>
                                        <C1A2 />
                                    </div>

                                </div>


                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>




                    <Swipe_Section ref={section7Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>Exercice</ContinueButton>

                                <div style={{ marginBottom: '50px', width: '100%' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <ImageContainer>
                                            <img src={"images/Math/C/C1/exercice.png"} alt="Enseignant" />
                                        </ImageContainer>
                                        <C1A3 />
                                    </div>

                                </div>
                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>

                    <Swipe_Section ref={section8Ref}>
                        <SectionContainer2>

                            <FormulaBox2>
                                <ContinueButton>QCM</ContinueButton>

                                <div>
                                    <QCMC1 />
                                </div>
                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>



                </SwipeContainer2>
            </StyledBox>
        </Container_Progress_Bar>
    );
}

export default C1;
