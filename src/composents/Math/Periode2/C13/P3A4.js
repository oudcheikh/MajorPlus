import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../Periode4/progressBar/SegmentedProgressBar.css'
import SegmentedProgressBar from '../../Periode4/progressBar/ProgressBar';



import Test4 from "./QCMC13";

import P3A4_1 from "./P3A4-1";
import Audio from "./Audio13";




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
padding-top: 265%;
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
  backgroundColor: ' rgb(202, 166, 100);',
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

const P2A1A = () => {




  const [scrollPosition, setScrollPosition] = useState(0);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);


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
                  <FormulaText><strong> Les Fractions </strong></FormulaText>
                </button>

                <img src={"/images/Math/C/imagesC13/fraction (2).png"} alt="Teacher" />


                <Card>
                  <strong>
                    <BodyText>
                      Salut à tous ! Aujourd'hui, nous allons explorer un concept
                      fascinant en mathématiques :                                         <br></br>
                      <span style={{ color: 'blue' }}> les fractions     </span>

                    </BodyText>
                  </strong>
                </Card>

              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>


          <Swipe_Section ref={section2Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton>   💡Definition💡</ContinueButton>

                <img src={"/images/Math/C/C11/divi.png"} alt="Teacher" />


                < NumberDisplay>    Une fraction est une partie d'une unité divisée en parts égales.</NumberDisplay><br></br>
                < NumberDisplay>  On utilise les fractions dans des situations de partage.</NumberDisplay><br></br>
                < NumberDisplay>  Le numérateur désigne le nombre de part que l'on prend</NumberDisplay><br></br>
                < NumberDisplay>  le dénominateur désigne le nombre total de parts.</NumberDisplay><br></br>

              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>




          <Swipe_Section ref={section3Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton> Exemple</ContinueButton>
                < NumberDisplay3>    Partager le reste d'un gateau sur deux  personnes, à condition que l'un
                  veut prendre le double de l autre.
                  <img
                    src={"/images/Math/C/imagesC13/cake.png"}
                    alt="Teacher"
                    style={{ marginLeft: "40px", marginTop: "25px", width: "140px" }}
                  />
                </NumberDisplay3><br></br>
                <img src={"/images/Math/C/imagesC13/cake1.png"} alt="cake" />
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>


          <Swipe_Section ref={section4Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton>   Concepts Clés </ContinueButton>

                <img src={"/images/Math/C/C11/divi.png"} alt="Teacher" />
                < NumberDisplay3>     <strong>Numérateur</strong>: Le nombre du haut dans une fraction,
                  indiquant combien de parties tu as. </NumberDisplay3><br></br>

                < NumberDisplay3><strong>Dénominateur</strong>: Le nombre du bas dans une fraction,
                  indiquant en combien de parts le tout a été divisé.   </NumberDisplay3>

              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>


          <Swipe_Section ref={section5Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton>Activites </ContinueButton>
                <div>
                  <P3A4_1 />
                </div>
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>




          <Swipe_Section ref={section6Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton>QCM </ContinueButton>
                <div>
                <Test4 />
                </div>
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>



        </SwipeContainer2>
      </StyledBox>
    </Container_Progress_Bar>
  );
};

export default P2A1A;
