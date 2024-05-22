import React, { useRef, useState, useEffect } from "react";

import { useNavigate } from 'react-router-dom';

import '../../Periode4/progressBar/SegmentedProgressBar.css'
import SegmentedProgressBar from '../../Periode4/progressBar/ProgressBar';
import styled from 'styled-components';
import { Box } from '@mui/material';

import {
  Container, SectionContainer, ImageContainer, Card, BodyText,
  Title, Subtitle, FormulaBox, FormulaText, ContinueButton, Container_Progress_Bar, SectionContainer2, FormulaBox2,
  SwipeContainer2, Swipe_Section,
} from '../../../Styles/MajorStyles';
import Perim from "./Perimetre";
import QCMM4 from "./QCMM4";
import Audio from "./AudioM4";



export const StyledBox = styled.div`
padding-left: 2px;
padding-right:2px;
padding-top: 308%;
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

// App Component
const P3A8 = () => {

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
  const totalSections = 4; // Nombre total de sections




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
  const [showP2A21, setShowP2A21] = useState(false);


  return (
    <Container_Progress_Bar>



      <SegmentedProgressBar totalSegments={totalSections} currentSegment={progress} />

      <StyledBox>
        <SwipeContainer2 onScroll={handleScroll}>

          <Swipe_Section ref={section1Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <button className="continue-button" >
                  <FormulaText><strong> Perimetres et Aires </strong></FormulaText>
                </button>

                <img  src={"/images/Math/periode2/perimetre.png"} alt="Teacher" />


                <Card>
                  <strong>
                    <BodyText>
                      Salut à tous ! Aujourd'hui, nous allons plonger dans un sujet
                      passionnant : <span style={{ color: 'blue' }}>Les perimetres .</span>
                      <br></br>

                    </BodyText>
                  </strong>
                </Card>

              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>


          <Swipe_Section ref={section2Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton> Dèfinition </ContinueButton>

                <img src={"/images/Math/C/C11/divi.png"} alt="Teacher" />




                <strong>Le périmètre</strong>
                < NumberDisplay3>
                  <li>c'est la somme des longueurs de tous les côtés d'une figure géométrique.</li>
                </NumberDisplay3>
                <br></br>


                <strong>L'aire</strong>
                < NumberDisplay3>
                  <li>c'est la mesure de la surface à l'intérieur des limites d'une figure géométrique, exprimée en unités carrées.</li>
                </NumberDisplay3>


                <br></br>
                <strong>Le périmètre d'un carré </strong>

                < NumberDisplay3>
                  <li>c'est est la somme des longueurs de ses quatre côtés,
                    où tous les côtés ont la même longueur. Si "c" représente la longueur d'un côté du carré,
                    alors le périmètre serait égal à 4c.
                  </li>
                </NumberDisplay3>

                <br></br>


                <strong>L'aire d'un carrée</strong>
                < NumberDisplay3>
                  <li>l'aire d'un carré est calculée en multipliant la
                    longueur d'un côté par lui-même (côté * côté) ou en élevant le côté au carré.
                  </li>
                </NumberDisplay3>
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>


          <Swipe_Section ref={section3Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton> Exercice </ContinueButton>


                <SectionContainer style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <ImageContainer>
                        <img src={"images/Images/Prof1.png"} alt="Teacher" style={{ marginTop: "25px" }} />
                      </ImageContainer>

                    </div>
                    {!showP2A21 && (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Perim />
                      </div>

                    )}

                  </div>

                </SectionContainer>

              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>





          <Swipe_Section ref={section4Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton> QCM </ContinueButton>
                <SectionContainer>
        {!showP2A21 && (
            <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>
              <QCMM4 />
            </div>
            </div>
          )}
        
        </SectionContainer>

              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>

        </SwipeContainer2>
      </StyledBox>
    </Container_Progress_Bar>

  );
};

export default P3A8;
