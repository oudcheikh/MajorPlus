import React, { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../../Periode4/progressBar/SegmentedProgressBar.css'
import SegmentedProgressBar from '../../Periode4/progressBar/ProgressBar';

import Geo from "./Geo";
import QCMG2 from './QCMG2';
import Audio from "./AudioG2";
import { Box } from '@mui/material';

import {
NumberDisplay,  StyledBox,Container, SectionContainer, ImageContainer, FormulaText, Card, FormulaBox, BodyText, Subtitle, ContinueButton, Container_Progress_Bar, SectionContainer2, FormulaBox2,
  SwipeContainer2, Swipe_Section,
} from '../../../Styles/MajorStyles'; // Assurez-vous que le chemin est correct

import styled from 'styled-components';
import Acceuil from "../../../_ReusableComponents/Accueil";

const G2 = () => {
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
                <Acceuil titre={"Construction Gèometirque"} imgSrc={"/images/Math/G/G2/carree.gif"} altText={" Salut à tous ! Aujourd'hui, nous allons plonger dans un sujet passionnant :la Construction Gèometirque"}> </Acceuil>
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>

          <Swipe_Section ref={section2Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton>  <strong>parallélogramme</strong></ContinueButton>
                <NumberDisplay>
                  <imageStyle> <img src={"/images/Math/G/G2/parallelogramme.gif"} alt="parallelogramme" /></imageStyle>
                  <FormulaText>
                    <strong>
                      1. Tracez [AB].<br />
                      2. À partir de A et B, tracez deux droites parallèles avec l'angle donné pour former C et D.<br />
                      3. Reliez C et D pour fermer le parallélogramme.<br />
                    </strong>
                  </FormulaText>
                </NumberDisplay>
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>

          <Swipe_Section ref={section3Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton>  <strong>carré</strong></ContinueButton>
                <NumberDisplay>
                  <imageStyle> <img src={"/images/Math/G/G2/carree.gif"} alt="angle" /></imageStyle>
                  <FormulaText>
                    <strong>
                      1. Tracez [AB].<br />
                      2. Érigez les médiatrices en A et B pour former C et D.<br />
                      3. Reliez C et D.<br />
                    </strong>
                  </FormulaText>
                </NumberDisplay>
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>



          <Swipe_Section ref={section4Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton>   <strong> Rectangle</strong></ContinueButton>
                <NumberDisplay>
                  <imageStyle> <img src={"/images/Math/G/G2/1AWm.gif"} alt="angle" /></imageStyle>
                  <FormulaText>
                    <strong>
                      1. Tracez [AB] et [BC] perpendiculaires entre elles.<br />
                      2. À partir de B, tracez une droite parallèle à [AB].<br />
                      3. À partir de C, tracez une droite parallèle à [BC] pour rencontrer la précédente en D.<br />
                      4. Reliez A et D.
                    </strong>
                  </FormulaText>
                </NumberDisplay>
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>

          <Swipe_Section ref={section5Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton> 
              <strong> 🍕Activites🍕</strong></ContinueButton>
                <Geo />
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>


          <Swipe_Section ref={section6Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton><strong> QCM</strong></ContinueButton>
                <QCMG2 />
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>

        </SwipeContainer2>
      </StyledBox>
    </Container_Progress_Bar >

  );
};

export default G2;