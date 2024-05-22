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


import QCMG4 from "./QCMG4";
import Triangle from "./triangle";
import Triangle1 from "./triangle1";
import "../C14_C15_C16/bend.css";

export const StyledBox = styled.div`
padding-left: 2px;
padding-right:2px;
padding-top: 310%;
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

const P3A6 = () => {


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
                  <FormulaText><strong> Construction des triangles </strong></FormulaText>
                </button>

                <img src={"/images/Math/periode2/T2.png"} alt="Teacher" />


                <Card>
                  <strong>
                    <BodyText>
                      Salut à tous ! Aujourd'hui, nous allons plonger dans un sujet
                      passionnant : :<span style={{ color: 'orange' }}>la construction des triangles.</span>
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
                <ContinueButton> Concept clés </ContinueButton>

                <img style={{display:'center'}} src={"/images/Math/periode2/T1.png"} alt="Teacher" />

<br></br>

                <strong>La règle triangulaire</strong>
                < NumberDisplay3>
                  <li>la somme des longueurs de deux côtés d'un triangle doit être supérieure à la longueur du troisième côté pour que le triangle soit valide.</li>
                </NumberDisplay3>
                <br></br>


                <strong>Plage des longueurs valides</strong>
                < NumberDisplay3>
                  <li>Pour qu'un triangle soit valide, la longueur du troisième côté doit être comprise entre la différence des longueurs des côtés  et leur somme.</li>
                </NumberDisplay3>

              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>

          <Swipe_Section ref={section3Ref}>
          <SectionContainer2>
            <FormulaBox2>
              <>

                <SectionContainer style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}>
                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}>
                    <ContinueButton>Activitè 1</ContinueButton>
                    <Triangle />
                  </div>
                </SectionContainer>
              </>
            </FormulaBox2>

            </SectionContainer2>
          </Swipe_Section>



          <Swipe_Section ref={section4Ref}>
            <FormulaBox2>
              <>

                <SectionContainer style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}>
                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}>

<ContinueButton>Activitè 2 </ContinueButton>
                    <ImageContainer>
                      <img src={"images/Images/inestine.png"} alt="Teacher" style={{ marginTop: "25px" }} />
                    </ImageContainer>
                    {!showP2A21 && (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Triangle1 />
                      </div>
                    )}
                  </div>
                </SectionContainer>
              </>
            </FormulaBox2>
          </Swipe_Section>




          <Swipe_Section ref={section5Ref}>
            <FormulaBox2>
              <>

                <SectionContainer>
                  {!showP2A21 && (
                    <div style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}>
                      <ContinueButton>QCM</ContinueButton>
                      <QCMG4 />
                    </div>
                  )}


                </SectionContainer>
              </>
            </FormulaBox2>
          </Swipe_Section>




        </SwipeContainer2>
      </StyledBox>
    </Container_Progress_Bar>

  );
};

export default P3A6;
