import React, { useRef, useState, useEffect } from "react";

import { useNavigate } from 'react-router-dom';

import '../../Periode4/progressBar/SegmentedProgressBar.css'
import SegmentedProgressBar from '../../Periode4/progressBar/ProgressBar';
import {
  Container, SectionContainer, ImageContainer, Card, BodyText,
  Title, Subtitle, FormulaBox, FormulaText, ContinueButton, Container_Progress_Bar, SectionContainer2, FormulaBox2,
  SwipeContainer2, Swipe_Section,StyledBox,
  Pink_NumberDisplay
} from '../../../Styles/MajorStyles';
import QCMG5 from "./QCMG5";
import Droit from "./Droit";
import Acceuil from "../../../_ReusableComponents/Accueil";

const P3A7 = () => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
 
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

    setSectionsViewed(currentSection + 1);
    setProgress(currentSection + 1)
  };

  const [showP2A21, setShowP2A21] = useState(false);
  return (
    <Container_Progress_Bar>
      <SegmentedProgressBar totalSegments={totalSections} currentSegment={progress} />
      <StyledBox>
        <SwipeContainer2 onScroll={handleScroll}>

          <Swipe_Section ref={section1Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <Acceuil  titre={"la construction des droites remerquables "} imgSrc={"/images/Math/periode2/droite.gif"} altText={"la construction des droites remerquables "}> </Acceuil>
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>

          <Swipe_Section ref={section2Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton> Concept clés </ContinueButton>

                <img src={"/images/Math/C/C11/divi.png"} alt="Teacher" />

                <strong>Le mediatrice</strong>
                < Pink_NumberDisplay>
                  <li>La médiatrice est une droite perpendiculaire au segment reliant les deux extrémités d'un segment, coupant celui-ci en deux parties égales.</li>
                </Pink_NumberDisplay>
                <br></br>

                <strong>Droite perpendiculaire</strong>
                < Pink_NumberDisplay>
                  <li> Une droite perpendiculaire est une ligne qui forme un angle de 90 degrés (angle droit) par rapport à une autre ligne ou un plan.</li>
                </Pink_NumberDisplay>

              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>

          <Swipe_Section ref={section3Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton> Concept clés </ContinueButton>

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
                        <img src={"images/Images/inestine.png"} alt="Teacher" style={{ marginTop: "25px" }} />
                      </ImageContainer>

                    </div>
                    {!showP2A21 && (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Droit />
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
                <ContinueButton> QCM</ContinueButton>

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
                        <QCMG5 />
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

export default P3A7;
