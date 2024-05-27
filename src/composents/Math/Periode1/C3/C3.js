import React, { useRef, useState } from "react";

import { useNavigate } from 'react-router-dom';

import '../../Periode4/progressBar/SegmentedProgressBar.css'
import SegmentedProgressBar from '../../Periode4/progressBar/ProgressBar';


import C3A1 from "./C3A1";
import C3A2 from "./C3A2";
import C3A3 from "./C3A3";
import QCMC3 from "./QCMC3";
import styled from "styled-components";
import Audio from "./Audio3";



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



const C3 = () => {





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
                  <FormulaText><strong>Convertiseur d'unités de longueur</strong></FormulaText>
                </button>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>

              <img src={"/images/Math/C/C3/regleetmatre.PNG"} alt="comparaison" />


                <Card>

                  <BodyText>
<strong>
                    <span>
                      Les unités de longueur </span> sont des mesures qui nous permettent d'estimer
                    la distance entre deux points ainsi que la taille de quelque chose ou de quelqu'un.
                    </strong>
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

                <NumberDisplay>
                  <strong>
                    L'unité principale de longueur est le mètre (m). Mais, selon les longueurs à mesurer, tu peux utiliser d'autres unités :
                    le kilomètre (km) : 1 km = 1 000 m ; le centimètre (cm) : 1 m = 100  </strong>
                </NumberDisplay>


                <img src={"/images/Math/C/C3/tab1.png"} alt="Teacher" />
                <img src={"/images/Math/C/C3/tab2.png"} alt="Teacher" />
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>




          <Swipe_Section ref={section3Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton>Convertir des unités </ContinueButton>

                <br></br>
                <NumberDisplay><strong>
                  Parfois, nous avons besoin de changer d'une unité à une autre.
                  C'est comme échanger des pièces de monnaie : 100 centimes font 1 euro. De la même manière, 100 centimètres font 1 mètre.

                </strong>


                  <NumberDisplay>
                    <strong>Astuce :</strong> Pour passer du mètre au centimètre, multiplie par 100. Pour faire l'inverse, divise par 100. Avec les autres unités, les chiffres peuvent être différents, mais l'idée est la même. Avec un peu de pratique, tu maîtriseras rapidement ces conversions !

                  </NumberDisplay>
                  <img src={"/images/Math/C/C3/tab3.png"} alt="Teacher" />


                </NumberDisplay>



              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>




          <Swipe_Section ref={section4Ref}>
            <SectionContainer2>
            <FormulaBox2>
              <ContinueButton>🍕Activité 1 </ContinueButton>

              <div>
              <C3A1 />
              </div>
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>



          <Swipe_Section ref={section5Ref}>
            <SectionContainer2>
            <FormulaBox2>
              <ContinueButton>🍕Activité 2 </ContinueButton>
              <div >

              <img src={"/images/Math/C/C3/cable.png"} alt="Teacher" />
              <C3A3 />

              </div>
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>



          <Swipe_Section ref={section6Ref}>
            <SectionContainer2>
            <FormulaBox2>
              <ContinueButton>🍕Activité 2 </ContinueButton>
              <C3A2/>
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>



          <Swipe_Section ref={section7Ref}>
            <SectionContainer2>
            <FormulaBox2>
              <ContinueButton>🍕Activité 2 </ContinueButton>
              <QCMC3/>
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>

        </SwipeContainer2>
      </StyledBox>
    </Container_Progress_Bar>

  );
};

export default C3;
