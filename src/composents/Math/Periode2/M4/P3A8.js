import React, { useRef, useState, useEffect } from "react";
import '../../Periode4/progressBar/SegmentedProgressBar.css'
import SegmentedProgressBar from '../../Periode4/progressBar/ProgressBar';
import {
  Container, SectionContainer, ImageContainer, Card, BodyText,StyledBox,
  Title, Subtitle, FormulaBox, FormulaText, ContinueButton, Container_Progress_Bar, SectionContainer2, FormulaBox2,
  SwipeContainer2, Swipe_Section,
  Pink_NumberDisplay,
} from '../../../Styles/MajorStyles';
import Perim from "./Perimetre";
import QCMM4 from "./QCMM4";
import Audio from "./AudioM4";
import Acceuil from "../../../_ReusableComponents/Accueil";

const P3A8 = () => {

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
                <Acceuil  titre={"Construction des triangles "}  imgSrc={"/images/Math/periode2/perimetre.png"} altText={"Les perimetres ."} > 
                </Acceuil>
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>

          <Swipe_Section ref={section2Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton> Dèfinition </ContinueButton>
                <img src={"/images/Math/C/C11/divi.png"} alt="Teacher" />
                <strong>Le périmètre</strong>
                < Pink_NumberDisplay>
                  <li>c'est la somme des longueurs de tous les côtés d'une figure géométrique.</li>
                </Pink_NumberDisplay>
                <br></br>

                <strong>L'aire</strong>
                < Pink_NumberDisplay>
                  <li>c'est la mesure de la surface à l'intérieur des limites d'une figure géométrique, exprimée en unités carrées.</li>
                </Pink_NumberDisplay>
                <br></br>
                <strong>Le périmètre d'un carré </strong>
                <Pink_NumberDisplay>
                  <li>c'est est la somme des longueurs de ses quatre côtés,
                    où tous les côtés ont la même longueur. Si "c" représente la longueur d'un côté du carré,
                    alors le périmètre serait égal à 4c.
                  </li>
                </Pink_NumberDisplay>

                <br></br>
                <strong>L'aire d'un carrée</strong>
                < Pink_NumberDisplay>
                  <li>l'aire d'un carré est calculée en multipliant la
                    longueur d'un côté par lui-même (côté * côté) ou en élevant le côté au carré.
                  </li>
                </Pink_NumberDisplay>
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
