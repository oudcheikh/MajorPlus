import React, { useRef, useState } from "react";

import { useNavigate } from 'react-router-dom';

import '../../Periode4/progressBar/SegmentedProgressBar.css'
import SegmentedProgressBar from '../../Periode4/progressBar/ProgressBar';


import Audio from "./Audio5";
import C5A1 from "./C5A1";
import C5A2 from "./C5A2";
import TestC5 from "./QCMC5";
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




const C5 = () => {
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
  const totalSections = 6; // Nombre total de sections




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
                  <FormulaText><strong>  Convertiseur d'unités de longueur. </strong></FormulaText>
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
                <imageStyle> <img src={"/images/Math/C/C5/parenthése.png"} alt="angle" /></imageStyle>


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
                      passionnant :<span style={{ color: 'blue' }}>Convertiseur d'unités de longueur. </span>     </strong>             </BodyText>

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

                <img src={"/images/Math/C/C5/periorite.png"} alt="Teacher" />


                <NumberDisplay >

                  <strong>
                    <span>il y a alors un ordre précis à respecter :
                      on commence toujours par les calculs <span style={{ color: 'green' }}>entre parenthèses</span>, puis les <span style={{ color: 'green' }}>puissances,</span>
                      <span style={{ color: 'red' }}>les multiplications ou les divisions</span>  et enfin pour terminer les  <span style={{ color: 'orange' }}>additions ou soustractions.</span> </span>

                  </strong>

                </NumberDisplay>




              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>





          <Swipe_Section ref={section3Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton>Concepts clés🔍</ContinueButton>


                <FormulaText>
                  <strong>
                    Les parenthéses sont trés important dans une équation mathématique
                    <br></br>
                    <br></br>
                    Exemple :
                    <NumberDisplay >


                      <span style={{ color: 'green' }}>4+5*2=14</span>
                      <span style={{ color: 'brown' }}>(4+5)*2=14</span>


                    </NumberDisplay>

                  </strong>
                </FormulaText>

                Exemple 1 :
                < NumberDisplay2>

                  <FormulaText>
                    <strong>
                      L'expression 5 + 2 x 3, normalement, on multiplie d'abord, donc le résultat serait 11. Mais si on met des parenthèses : (5 + 2) x 3, alors on fait l'addition en premier, et le résultat devient 21.

                    </strong>
                  </FormulaText>

                </NumberDisplay2>

                <strong>Exemple 2 :
                <NumberDisplay2>
                  <FormulaText>
                    Pour 2 + 4 + 3 x 2, normalement, on multiplie d'abord, donc le résultat serait 14. Mais avec des parenthèses : (2 + 4 + 3) x 2, on fait toutes les additions en premier, et le résultat devient 18.
                  </FormulaText>

                </NumberDisplay2></strong>

              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>


          <Swipe_Section ref={section4Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton>🍕Activites🍕</ContinueButton>

          <C5A1/>

          </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>





          <Swipe_Section ref={section5Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton>🍕Activites🍕</ContinueButton>
                <img src={'/images/Math/C/C11/deux.png'} alt="Exercice" />
                <C5A2/>

          </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>






          <Swipe_Section ref={section6Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton>QCM</ContinueButton>

                <TestC5/>

          </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>

        </SwipeContainer2>
      </StyledBox>
    </Container_Progress_Bar>
  );
};

export default C5;
