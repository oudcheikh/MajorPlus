import React, {useRef, useState } from 'react';
import Exercice1 from '../les solides/Exercice1'
import Cardre from '../les solides/Cadre'
import Pyramides from '../les solides/Pyramides'
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

// Import des styles
import { Box, Typography, CardContent, Grid, Fab, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';

import {
    Container, SectionContainer, ImageContainer, FormulaText, Card, FormulaBox, BodyText, Subtitle, ContinueButton
} from '../../../Styles/MajorStyles'; // Assurez-vous que le chemin est correct


export const textStyle = styled.h2`
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    color: #444;

    @media (max-width: 480px) {
        font-size: 18px;
    }
`;


;



const StyledBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'auto', // Réglez la hauteur sur auto ou une valeur appropriée
    overflow: 'hidden',
});


const SwipeContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-snap-destination: 100%;
  width: 100%;
`;

const Section = styled.div`
  flex-shrink: 0;
  width: 100%;
  scroll-snap-align: start;
  padding: 20px;
`;



const Les_solides = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);
    const navigate = useNavigate();


    const [lastSectionReached, setLastSectionReached] = useState(false);
    const [sectionsViewed, setSectionsViewed] = useState(0);
    const totalSections = 4; // Nombre total de sections
    const progressWidth = (sectionsViewed / totalSections) * 100 + "%";






    const handleScroll = (event) => {
        const { scrollLeft } = event.target;
        setScrollPosition(scrollLeft);

        // Récupérer les positions de début de chaque section
        const sectionPositions = [
            0, // Position de début de la première section
            section1Ref.current.offsetWidth, // Position de début de la deuxième section
            section1Ref.current.offsetWidth + section2Ref.current.offsetWidth, // Position de début de la troisième section
            section1Ref.current.offsetWidth + section2Ref.current.offsetWidth + section3Ref.current.offsetWidth, // Position de début de la troisième section
            // Ajouter d'autres positions pour les sections suivantes
        ];

        // Trouver la section actuelle en fonction de la position de défilement
        let currentSection = 0;
        for (let i = 0; i < sectionPositions.length; i++) {
            if (scrollLeft >= sectionPositions[i]) {
                currentSection = i;


            }
        }

    
        setSectionsViewed(currentSection + 1);
        if (currentSection + 1 == 4) {


            setLastSectionReached(true)
        }


    };

    const fermer = () => {
        setLastSectionReached(false)
    }



    const handleClick = () => {
        navigate("/Periode4");
    };

    return (
        <Container>


            <div className="progressContainer">
                <div className="progress-bar">
                    <div className="progress" style={{ width: progressWidth }}></div>
                </div>

                <button className="backToHomeButton" onClick={handleClick}>
                    X  </button>
            </div>

            <StyledBox>

                <SwipeContainer onScroll={handleScroll}>


                    <Section ref={section1Ref}>






                        <button className="continue-button" >
                            <FormulaText><strong> Les solides </strong></FormulaText>

                        </button>

                        <img src={'/images/Math/periode 4/uniivers.png'} alt="univers" />


                        <SectionContainer>
                            <strong>
                                <Card>

                                    <BodyText>

                                        Notre univers est  <span style={{ color: 'blue' }}>un ensemble d'objet</span> chaque objet admet  <span style={{ color: '#ff4500' }}>sa propre forme</span>
                                        <br></br>
                                        <strong style={{ color: 'orange' }}>Allons-nous découvrir les formes des objets?</strong>
                                    </BodyText>

                                </Card>
                            </strong>
                        </SectionContainer>

                    </Section>


                    <Section ref={section2Ref}>
                        <SectionContainer>


                            <FormulaBox>


                                <button className="continue-button" >
                                    <FormulaText><strong>  Les cube  </strong></FormulaText>

                                </button>


                                <Cardre />
                            </FormulaBox>
                        </SectionContainer>
                    </Section>

                    <Section ref={section3Ref}>
                        <SectionContainer>


                            <FormulaBox>


                                <button className="continue-button" >
                                    <FormulaText><strong> Les pyramides  </strong></FormulaText>

                                </button>
                                <strong><span style={{ color: 'orange' }}>  </span></strong>
                                <div style={{ marginBottom: '50px', width: '100%', height: '100%' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <Pyramides />
                                    </div>
                                    <div className="separator"></div>
                                </div>


                            </FormulaBox>
                        </SectionContainer>
                    </Section >


                    <Section ref={section4Ref}>
                        <SectionContainer>

                            <FormulaBox>

                                <button className="continue-button" >
                                    <FormulaText><strong> Les sphéres  </strong></FormulaText>

                                </button>

                                <strong><span style={{ color: 'orange' }}></span></strong>



                                <Exercice1 />




                                <div>
                                    <br></br>
                                </div>


                            </FormulaBox>
                        </SectionContainer>

                    </Section>


                </SwipeContainer>
            </StyledBox>
        </Container>
    );
}

export default Les_solides;
