import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../Periode4/progressBar/SegmentedProgressBar.css'
import SegmentedProgressBar from '../../Periode4/progressBar/ProgressBar';



import Divs from "./Divs";
import QCM11 from "./QCMC11";
import Acceuil from "../../../_ReusableComponents/Accueil";




import {
  NumberDisplay,StyledBox,FormulaText, ContinueButton, Container_Progress_Bar, SectionContainer2, FormulaBox2,
  SwipeContainer2, Swipe_Section,
} from '../../../Styles/MajorStyles';


import Exercice2 from './Exercice2'
import Exercice3 from './Exercice3'
import Exercice5 from './Exercice5'

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
      section1Ref.current.offsetWidth + section2Ref.current.offsetWidth + section3Ref.current.offsetWidth + section4Ref.current.offsetWidth + section5Ref.current.offsetWidth + section6Ref.current.offsetWidth,, //5
      section1Ref.current.offsetWidth + section2Ref.current.offsetWidth + section3Ref.current.offsetWidth + section4Ref.current.offsetWidth + section5Ref.current.offsetWidth + section6Ref.current.offsetWidth + section7Ref.current.offsetWidth,, //5
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

  return (

    <Container_Progress_Bar>
      <SegmentedProgressBar totalSegments={totalSections} currentSegment={progress} />
      <StyledBox>
        <SwipeContainer2 onScroll={handleScroll}>

          <Swipe_Section ref={section1Ref}>
            <SectionContainer2>
              <FormulaBox2>
                 <Acceuil titre={' Les Caractères de divisibilité.'} imgSrc={'/images/Math/C/C11/division.png'} altText={" Les  Caractères de divisibilité."}> </Acceuil>
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
                <ContinueButton > <FormulaText><strong> Divisibilité par 2  </strong></FormulaText>   </ContinueButton >

                <Exercice2 />

              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>

          <Swipe_Section ref={section4Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton > <FormulaText><strong> Divisibilité par 5 </strong></FormulaText>   </ContinueButton >
                <Exercice5 />
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>

          <Swipe_Section ref={section5Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton > <FormulaText><strong> Divisibilité par 5 </strong></FormulaText>   </ContinueButton >
                <Exercice3 />
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>

          <Swipe_Section ref={section6Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton>Activites</ContinueButton>
                <Divs />
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>

          <Swipe_Section ref={section7Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton>QCM</ContinueButton>
                <QCM11 />
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>

        </SwipeContainer2>
      </StyledBox>
    </Container_Progress_Bar>
  );
};

export default P3A8;
