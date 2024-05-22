import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../Periode4/progressBar/SegmentedProgressBar.css'
import SegmentedProgressBar from '../../Periode4/progressBar/ProgressBar';



import Divs from "./Divs";
import QCM11 from "./QCMC11";
import Audio from "./Audio11";




import {
  Container, SectionContainer, ImageContainer, Card, BodyText,
  Title, Subtitle, FormulaBox, FormulaText, ContinueButton, Container_Progress_Bar, SectionContainer2, FormulaBox2,
  SwipeContainer2, Swipe_Section,
} from '../../../Styles/MajorStyles';

import styled from 'styled-components';
import { Box } from '@mui/material';




export const StyledBox = styled.div`
padding-left: 2px;
padding-right:2px;
padding-top: 340%;
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
  backgroundColor: ' white',
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
const P3A8 = () => {


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
      // section1Ref.current.offsetWidth + section2Ref.current.offsetWidth + section3Ref.current.offsetWidth + section4Ref.current.offsetWidth + section5Ref.current.offsetWidth + section6Ref.current.offsetWidth, //6
      // section1Ref.current.offsetWidth + section2Ref.current.offsetWidth + section3Ref.current.offsetWidth + section4Ref.current.offsetWidth + section5Ref.current.offsetWidth + section6Ref.current.offsetWidth + section7Ref.current.offsetWidth,
      // section1Ref.current.offsetWidth + section2Ref.current.offsetWidth + section3Ref.current.offsetWidth + section4Ref.current.offsetWidth + section5Ref.current.offsetWidth + section6Ref.current.offsetWidth + section7Ref.current.offsetWidth + section8Ref.current.offsetWidth,
      // section1Ref.current.offsetWidth + section2Ref.current.offsetWidth + section3Ref.current.offsetWidth + section4Ref.current.offsetWidth + section5Ref.current.offsetWidth + section6Ref.current.offsetWidth + section7Ref.current.offsetWidth + section8Ref.current.offsetWidth + section9Ref.current.offsetWidth,


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
                  <FormulaText><strong> Caractères de divisibilité </strong></FormulaText>
                </button>


                <img src={'/images/Math/C/C11/division.png'} alt="division" />
                <strong>
                  <Card>
                    <BodyText>

                      Salut à tous ! Aujourd'hui, nous allons plonger dans un sujet
                      passionnant :

                      <strong style={{ color: 'orange' }}> Caractères de divisibilité.</strong>
                    </BodyText>

                  </Card>
                </strong>
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>



          <Swipe_Section ref={section2Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton >

                  <FormulaText><strong> Rappel </strong></FormulaText>

                </ContinueButton>


                <img src={'/images/Math/C/C11/divi.png'} alt="division" />
                <strong>
                  <NumberDisplay>
                    On dit qu'un nombre A est divisible par un nombre B si le reste de la  division égale 0
                  </NumberDisplay>

                  <br></br>
                  <NumberDisplay>
                    Un nombre est dvisible par 2 si son chiffre d'unité est paire.
                  </NumberDisplay>
                  <br></br>
                  <NumberDisplay>
                    Un nombre est divisible par 3 si la somme de ces chiffres  est un  multiple de 3
                  </NumberDisplay>

                  <br></br>
                  <NumberDisplay>
                    Un nombre est divisible par 5 si son chiffre des unité est 0 ou 5
                  </NumberDisplay>
                </strong>
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>





          <Swipe_Section ref={section3Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton >
                  <FormulaText><strong> Exemples </strong></FormulaText>
                </ContinueButton>

              

                  <NumberDisplay3>
                    <img src={'/images/Math/C/C11/deux.png'} alt="division" />
                    <strong> 234 est divisible par 2, car 4 est pair </strong>
                  </NumberDisplay3>
                  <br></br><br></br>

                  <NumberDisplay3>
                    <img src={'/images/Math/C/C11/cinq.png'} alt="division" />
                    <strong> 450 est divisible par 5, car chiffre des unities est 0</strong>
                    <strong> 455 est divisible par 5, car chiffre des unities est 5</strong>
                    <strong> 452 n'est pas  divisible par 5, car chiffre des unities est ni 0 , ni 5 </strong>
                  </NumberDisplay3>
                  <br></br><br></br>
                  <NumberDisplay3>
                    <img src={'/images/Math/C/C11/troiss.png'} alt="division" />
                    <strong> 321 est divisible par 3 car 3+2+1=6 et 6 est parmi les multiple de 3 </strong>
                  </NumberDisplay3>

              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>



          <Swipe_Section ref={section4Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton>Activites</ContinueButton>

                <Divs/>
  
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>



          <Swipe_Section ref={section5Ref}>
            <SectionContainer2>
              <FormulaBox2>
              <ContinueButton>QCM</ContinueButton>
                

                <QCM11/>
                  
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>
     
        </SwipeContainer2>
      </StyledBox>
    </Container_Progress_Bar>
  );
};

export default P3A8;
