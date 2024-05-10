import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Exercice1 from './Exercice1'
import Exercice2 from './Exercice2'

import styled from 'styled-components';

// Import des styles
import { Box } from '@mui/material';

import {
    Container, SectionContainer, ImageContainer, FormulaText, Card, FormulaBox, BodyText, Subtitle, ContinueButton
} from '../../../Styles/MajorStyles'; // Assurez-vous que le chemin est correct
import '../Style.css'

export const textStyle = styled.h2`
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    color: #444;

    @media (max-width: 480px) {
        font-size: 18px;
    }
`;




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



const C1 = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);
    const section5Ref = useRef(null);
    const navigate = useNavigate();


    const [lastSectionReached, setLastSectionReached] = useState(false);
    const [sectionsViewed, setSectionsViewed] = useState(0);
    const totalSections = 5; // Nombre total de sections
    const progressWidth = (sectionsViewed / totalSections) * 100 + "%";






    const handleScroll = (event) => {
        const { scrollLeft } = event.target;
        setScrollPosition(scrollLeft);

        // Récupérer les positions de début de chaque section
        const sectionPositions = [
            0, // Position de début de la première section
            section1Ref.current.offsetWidth, // Position de début de la deuxième section
            section1Ref.current.offsetWidth + section2Ref.current.offsetWidth, // Position de début de la troisième section
            section1Ref.current.offsetWidth + section2Ref.current.offsetWidth + section3Ref.current.offsetWidth, // Position de début de la Quatrieme  section
            section1Ref.current.offsetWidth + section2Ref.current.offsetWidth + section3Ref.current.offsetWidth+ section4Ref.current.offsetWidth
            // Ajouter d'autres positions pour les sections suivantes
        ];

        // Trouver la section actuelle en fonction de la position de défilement
        let currentSection = 0;

        for (let i = 0; i < sectionPositions.length; i++) {
            if (scrollLeft >= sectionPositions[i]) {
                currentSection = i;

            }
        }
        console.log("Section actuelle :", currentSection + 1);

        setSectionsViewed(currentSection + 1);
        if (currentSection + 1 == 5) {


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

                        <SectionContainer>

                        <FormulaBox>
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
                            </FormulaBox>
                        </SectionContainer>


                    </Section>


                    <Section ref={section2Ref}>

                        <SectionContainer>
                            <FormulaBox>

                            <button className="continue-button" >
                                <FormulaText><strong>  Notion </strong></FormulaText>

                            </button>
                               
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
                            


                            </FormulaBox>
                        </SectionContainer>


                    </Section>

                    <Section ref={section3Ref}>
                        <SectionContainer>
                        <FormulaBox>

                                <FormulaText>
                                    <strong style={{ color: 'rgb(27, 226, 226)' }}>Pour mieu comprendre :</strong><br></br>
                                    <strong> Imagine que tu aimes les glaces et que tu veux partager une glace avec ton ami. Vous avez une grande glace que vous voulez partager équitablement.
                                    </strong>
                                    <img src={'/images/Math/periode 4/glasse.PNG'} alt="glasse" />
                                    <strong>Maintenant, si vous divisez la glace en deux parts égales, chacun de vous aura une moitié de la glace, c'est-à-dire la même quantité. <span style={{ color: '#ff4500' }}>C'est la proportionnalité !</span></strong>


                                </FormulaText>
                                </FormulaBox>
                        </SectionContainer>
                    </Section>


                    <Section ref={section4Ref}>
                        <SectionContainer>

                        <FormulaBox>


                                <BodyText>
                                    <strong style={{ color: 'blue' }}>Exercice explicatif:</strong>
                                </BodyText>

                                <img src={'/images/Math/periode 4/crayon.PNG'} alt="Teacher" />

                                
                                <div style={{ marginBottom: '50px', width: '100%', height: '100%' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Exercice2 />
                            </div>
                           
                        </div>


                                </FormulaBox>
                        </SectionContainer>
                        <br></br>
                        <br></br>

                       
                    </Section>


                    <Section ref={section5Ref}>

                        <SectionContainer>



                        <FormulaBox>




                            <div style={{ marginBottom: '50px', width: '100%', height: '100%' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Exercice1 />
                                </div>
                            </div>


                            <br></br>


                            </FormulaBox>

                        </SectionContainer>
                       
                    </Section>


                </SwipeContainer>
            </StyledBox>
        </Container>
    );
}

export default C1;
