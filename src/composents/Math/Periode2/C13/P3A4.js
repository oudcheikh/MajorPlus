import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../Periode4/progressBar/SegmentedProgressBar.css'
import SegmentedProgressBar from '../../Periode4/progressBar/ProgressBar';
import Test4 from "./QCMC13";
import P3A4_1 from "./P3A4-1";

import {
  Card, FormulaText, BodyText, ContinueButton, Container_Progress_Bar, SectionContainer2, FormulaBox2, StyledBox, SwipeContainer2, Swipe_Section,
  Maron_NumberDisplay,
  Blue_NumberDisplay,
} from '../../../Styles/MajorStyles';
import Acceuil from '../../../_ReusableComponents/Accueil';

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
  return (
    <Container_Progress_Bar>
      <SegmentedProgressBar totalSegments={totalSections} currentSegment={progress} />
      <StyledBox>
        <SwipeContainer2 onScroll={handleScroll}>
          <Swipe_Section ref={section1Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <Acceuil titre={'les fractions '} imgSrc={"/images/Math/C/imagesC13/fraction (2).png"} altText={"les fractions "}> </Acceuil>
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>

          <Swipe_Section ref={section2Ref}>
            <SectionContainer2>
              <FormulaBox2>

                <ContinueButton>   💡Definition💡</ContinueButton>
                <img src={"/images/Math/C/C11/divi.png"} alt="Teacher" />
                <Blue_NumberDisplay>    Une fraction est une partie d'une unité divisée en parts égales.</Blue_NumberDisplay><br></br>
                <Blue_NumberDisplay>  On utilise les fractions dans des situations de partage.</Blue_NumberDisplay><br></br>
                <Blue_NumberDisplay>  Le numérateur désigne le nombre de part que l'on prend</Blue_NumberDisplay><br></br>
                <Blue_NumberDisplay>  le dénominateur désigne le nombre total de parts.</Blue_NumberDisplay><br></br>

              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>

          <Swipe_Section ref={section3Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton> Exemple</ContinueButton>
                < Maron_NumberDisplay>    Partager le reste d'un gateau sur deux  personnes, à condition que l'un
                  veut prendre le double de l autre.
                  <img
                    src={"/images/Math/C/imagesC13/cake.png"}
                    alt="Teacher"
                    style={{ marginLeft: "40px", marginTop: "25px", width: "140px" }}
                  />
                </Maron_NumberDisplay><br></br>
                <img src={"/images/Math/C/imagesC13/cake1.png"} alt="cake" />
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>

          <Swipe_Section ref={section4Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton>   Concepts Clés </ContinueButton>
                <img src={"/images/Math/C/C11/divi.png"} alt="Teacher" />
                < Maron_NumberDisplay>     <strong>Numérateur</strong>: Le nombre du haut dans une fraction,
                  indiquant combien de parties tu as. </Maron_NumberDisplay><br></br>
                < Maron_NumberDisplay><strong>Dénominateur</strong>: Le nombre du bas dans une fraction,
                  indiquant en combien de parts le tout a été divisé.   </Maron_NumberDisplay>
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
