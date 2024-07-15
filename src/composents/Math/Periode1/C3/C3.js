import React, { useRef, useState } from "react";
import '../../Periode4/progressBar/SegmentedProgressBar.css'
import SegmentedProgressBar from '../../Periode4/progressBar/ProgressBar';
import C3A1 from "./C3A1";
import C3A2 from "./C3A2";
import C3A3 from "./C3A3";
import QCMC3 from "./QCMC3";
import styled from "styled-components";
import Exercice1 from './Exercice1'
import Exercice2 from './Exercice2'

import Exercice from './Exercice'
import {
  imageStyle_Mot_Clé,
  ContinueButton, Container_Progress_Bar, SectionContainer2, FormulaBox2,
  SwipeContainer2, Swipe_Section,
  Beige_NumberDisplay, NumberDisplay, imageStyle_grand,
  Orange_NumberDisplay,
  Violet_NumberDisplay
} from '../../../Styles/MajorStyles';


import { Box } from '@mui/material';
import Table_mesure from "./Table_mesure";
import Acceuil from "../../../_ReusableComponents/Accueil";
import { useNavigate } from "react-router-dom";
const StyledBox = styled(Box)({

});

const C3 = ({index,onComplete}) => {
const navigate=useNavigate()
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

    setSectionsViewed(currentSection + 1);
    setProgress(currentSection + 1)

  };
  const handleFinish = () => {
    console.log("bbbbbbbbbbbbbbbbbbbbbbbbb")
    console.log(index)

    if (onComplete) {
      onComplete(index); 
      console.log("----")
      console.log(onComplete(index))
    }
    navigate('/Step_finale_nchallh'); 
  };
  return (
    <Container_Progress_Bar>
      <SegmentedProgressBar totalSegments={totalSections} currentSegment={progress} />
      <StyledBox>
        <SwipeContainer2 onScroll={handleScroll}>
          <Swipe_Section ref={section1Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <Acceuil titre={"Convertiseur d'unités de longueur"} imgSrc={"/images/Math/C/C3/regleetmatre.png"} altText={"Convertiseur d'unités de longueur"}> </Acceuil>
                <button onClick={handleFinish}>Terminer</button>
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>
          <Swipe_Section ref={section2Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton>Concept clés</ContinueButton>
                <img src={"/images/Math/C/C11/divi.png"} alt="Teacher" style={imageStyle_Mot_Clé} />
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

                <img src={"/images/Math/C/C3/unité.png"} alt="comparaison" />
                <br></br>
                <Orange_NumberDisplay>
                  <strong>N.B<br />
                    Pour pouvoir faire des calculs de mesures, il faut que celles-ci soient toutes dans la même unité.</strong>
                </Orange_NumberDisplay>
                <strong>
                </strong>
                <strong>Exemple :</strong>
                <Beige_NumberDisplay>Pour passer du mètre au centimètre, multiplie par 100.Pour faire l'inverse, divise par 100. </Beige_NumberDisplay>
                <Violet_NumberDisplay>
                  Une autre méthode permet de passer d'une unité à l'autre, elle consiste à créer un tableau de conversion tel que celui-ci :
                </Violet_NumberDisplay>
                <img src={"/images/Math/C/C3/tab3.png"} alt="Teacher" />
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>

          <Swipe_Section ref={section7Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton>🍕Activité 2 </ContinueButton>
                <Table_mesure />
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>
          <Swipe_Section ref={section7Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton>🍕Exercices  </ContinueButton>

                <img src={"/images/Math/C/C3/Exercice.gif"} alt="Teacher" />
                Exercice 1 :
                <Exercice />
                Exercice 2 :
                <Exercice1 />
                Exercice 3:
                <Exercice2 />
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>

          <Swipe_Section ref={section4Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton>🍕Activité 1 </ContinueButton>
                <img src={"/images/train2.png"} alt="Teacher" />
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
                <img src={"/images/Math/C/C3/phone.gif"} alt="Teacher" />
                  <C3A3 />
                </div>
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>

          <Swipe_Section ref={section6Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton>🍕Activité 2 </ContinueButton>
                <img src={"/images/train.png"} alt="Teacher" />
                <C3A2 />
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>

          <Swipe_Section ref={section7Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton>🍕Activité 2 </ContinueButton>
                <QCMC3 />
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>

        </SwipeContainer2>
      </StyledBox>
    </Container_Progress_Bar>

  );
};

export default C3;
