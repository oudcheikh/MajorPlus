import React, { useRef, useState } from "react";

import { useNavigate } from 'react-router-dom';

import '../../Periode4/progressBar/SegmentedProgressBar.css'
import SegmentedProgressBar from '../../Periode4/progressBar/ProgressBar';

import C2A1 from "./C2A1";
import C2E1 from "./C2E1";
import C2E2 from "./C2E2";
import QCMC2 from "./QCMC2";
import styled from "styled-components";
import Audio from "./Audio2";



import {
  Container,
  SectionContainer,
  ImageContainer,
  Card,
  BodyText,
  Title,
  Subtitle,
  FormulaBox,
  FormulaText,
  ContinueButton, Container_Progress_Bar, SectionContainer2, FormulaBox2,
  SwipeContainer2, Swipe_Section,
} from '../../../Styles/MajorStyles';


import { Box } from '@mui/material';
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







const C2 = () => {

  
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
                  <FormulaText><strong>  Comparer et ordonner des nombers</strong></FormulaText>
                </button>


                <imageStyle> <img src={"/images/Math/C/C2/compare.png"} alt="comparaison" /></imageStyle>


                <Card>

                  <BodyText>

                    Salut à tous ! Aujourd'hui, nous allons plonger dans un sujet
                    passionnant :  <strong className="mot_importante"> Comparer et ordonner des nombers.</strong>
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
                <strong>Comparer des nombres :</strong>
                < NumberDisplay> <strong>C'est déterminer lequel est le plus grand, le plus petit ou s'ils sont égaux. On compare d'abord les parties entières, puis les parties après la virgule pour les nombres décimaux. Les nombres négatifs, c'est comme des températures : plus le chiffre est gros, plus il fait froid !
                </strong> </NumberDisplay>
                <br></br>
                <strong>Ordonner des nombres :</strong>
                <NumberDisplay>
                <strong>   L'ordre croissant est une disposition de nombres allant du plus petit au plus grand.</strong>
                </NumberDisplay>
                <NumberDisplay>
                <strong>  L'ordre décroissant est une disposition de nombres allant du plus grand au plus petit.</strong>
                </NumberDisplay>
                <Card>
                  <br></br>

                  <FormulaText>
                <strong> <span style={{color:'blue'}}>Astuce : </span>
                 Pour t'aider, 
                imagine une ligne de nombres. Placer les nombres dessus pour voir leur ordre. Avec de la pratique, tout deviendra facile !
               </strong>  </FormulaText> </Card>
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>


          <Swipe_Section ref={section3Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton>🍕Activité 1🍕</ContinueButton>
                <C2A1/>

                </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>



          <Swipe_Section ref={section4Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton>🍕Activité 2🍕</ContinueButton>
                <C2E1/>

                </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>


          <Swipe_Section ref={section5Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton>🍕Activité 3🍕</ContinueButton>
                <C2E2/>

                </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>



          <Swipe_Section ref={section6Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton>QCM</ContinueButton>
                <QCMC2/>

                </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>

        </SwipeContainer2>
      </StyledBox></Container_Progress_Bar>
  );
};

export default C2;
