import React, { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../../Periode4/progressBar/SegmentedProgressBar.css'
import SegmentedProgressBar from '../../Periode4/progressBar/ProgressBar';
import G3A1 from './G3A1';
import G3A2 from './G3A2';
import QCMG3 from './QCMG3';
import Audio from "./AudioG3";
import { Box } from '@mui/material';
import {
  StyledBox, Beige_NumberDisplay, NumberDisplay, FormulaText, Card, FormulaBox, BodyText, Subtitle, ContinueButton, Container_Progress_Bar, SectionContainer2, FormulaBox2,
  SwipeContainer2, Swipe_Section,
} from '../../../Styles/MajorStyles'; // Assurez-vous que le chemin est correct

import Acceuil from "../../../_ReusableComponents/Accueil";
const G3 = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);

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
                <Acceuil titre={"Mesures des Angles"} imgSrc={"/images/Math/G/G2/carree.gif"} altText={"Mesures des Angles"}> </Acceuil>
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>

          <Swipe_Section ref={section2Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton>  Concept clés</ContinueButton>
                <NumberDisplay>
                <strong> Un angle est défini par la rencontre de deux demi-droites ayant une origine commune. La mesure de cet angle est l'écart entre ces deux demi-droites et elle est généralement exprimée en degrés (°).</strong> 
                </NumberDisplay>
                <Beige_NumberDisplay>
                  <FormulaText>
                    <strong>Angle aigu :</strong>
                    Un angle dont la mesure est comprise entre 0° et 90° (non inclus).
                  </FormulaText>
                </Beige_NumberDisplay>
                <Beige_NumberDisplay>
                  <FormulaText>
                    <strong>Angle droit :</strong>
                    Un angle qui mesure exactement 90°.
                  </FormulaText>
                </Beige_NumberDisplay>
                <Beige_NumberDisplay>
                  <FormulaText>
                    <strong>Angle obtus :</strong>
                    Un angle dont la mesure est comprise entre 90° et 180° (non inclus).
                  </FormulaText>
                </Beige_NumberDisplay>

                <Beige_NumberDisplay>
                  <FormulaText>
                    <strong>Angle plat :</strong>
                    Un angle qui mesure exactement 180°.
                  </FormulaText>
                </Beige_NumberDisplay>

                <Beige_NumberDisplay>
                  <FormulaText>
                    <strong>Angle plein :</strong>
                    Un angle qui mesure exactement 360°.
                  </FormulaText>
                </Beige_NumberDisplay>
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>

          <Swipe_Section ref={section3Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton>  Activité</ContinueButton>
                <G3A1 />
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>


          <Swipe_Section ref={section4Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton>  Activité</ContinueButton>
                <G3A2 />
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>

          <Swipe_Section ref={section5Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton> QCM</ContinueButton>
                <QCMG3 />
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>

        </SwipeContainer2>
      </StyledBox>
    </Container_Progress_Bar>
  )
}
export default G3;