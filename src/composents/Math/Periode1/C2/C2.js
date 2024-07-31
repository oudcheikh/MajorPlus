import React, { useRef, useState } from "react";

import { useNavigate } from 'react-router-dom';

import '../../Periode4/progressBar/SegmentedProgressBar.css'
import SegmentedProgressBar from '../../Periode4/progressBar/ProgressBar';

import C2A1 from "./C2A1";
import C2E1 from "./C2E1";
import C2E2 from "./C2E2";
import QCMC2 from "./QCMC2";
import styled from "styled-components";
import {
  Orange_NumberDisplay,imageStyle_Mot_Clé, imageStyle_Important,Beige_NumberDisplay,Vert_Fancee_NumberDisplay,middle_Green_NumberDisplay,Green_NumberDisplay,NumberDisplay,
  Card,
  BodyText,
  FormulaText,
  ContinueButton, Container_Progress_Bar, SectionContainer2, FormulaBox2,
  SwipeContainer2, Swipe_Section,
 
} from '../../../Styles/MajorStyles';


import { Box } from '@mui/material';
import Acceuil from "../../../_ReusableComponents/Accueil";
const StyledBox = styled(Box)({

});

const C2 = ({index,onComplete}) => {
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
  const totalSections = 8;

  const handleScroll = (event) => {
    const { scrollLeft } = event.target;
    setScrollPosition(scrollLeft);

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
  
  const handleFinish = () => {
    if (onComplete) {
      onComplete(index);
      navigate('/ProgressMap');
    }
  };


  return (
    <Container_Progress_Bar>
      <SegmentedProgressBar totalSegments={totalSections} currentSegment={progress} />

      <StyledBox>
        <SwipeContainer2 onScroll={handleScroll}>
          <Swipe_Section ref={section1Ref}>
            <SectionContainer2>
              <FormulaBox2>
<Acceuil  titre={' Comparer et ordonner des nombers'} imgSrc={"/images/Math/C/C2/comp1.png"}  altText={"Comparer et ordonner des nombers"}> </Acceuil>
<button onClick={handleFinish}>Terminer</button>

              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>


          <Swipe_Section ref={section2Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton>Concept clés</ContinueButton>
                <img src={"/images/Math/C/C2/compare.png"} style={imageStyle_Important} alt="Teacher" />

            <FormulaText><strong>Comparer des nombres :</strong></FormulaText>    

                <Beige_NumberDisplay>
                  <strong>
                    C'est déterminer lequel est le plus grand, le plus petit ou s'ils sont égaux.
                  </strong>
              </Beige_NumberDisplay>




               
                <Card>
                  <br></br>

                  <FormulaText>
                    <strong> <span style={{ color: 'blue' }}>Astuce : </span>
                    On compare d'abord les parties entières, puis les parties après la virgule pour les nombres décimaux. Les nombres négatifs, c'est comme des températures : plus le chiffre est gros, plus il fait froid !

                    </strong>  </FormulaText> </Card>
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>

          <Swipe_Section ref={section3Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton>Ordonner des nombres</ContinueButton>

               <FormulaText><strong> Ordre croissant </strong></FormulaText>
                <img src={"/images/Math/C/C2/ordonner.png"}  alt="Teacher" />

                <Orange_NumberDisplay>
                  <strong>   L'ordre croissant est une disposition de nombres allant du plus petit au plus grand.</strong>
                </Orange_NumberDisplay>

                <br></br>


                <FormulaText><strong> Ordre dècroissant </strong></FormulaText>
                <img src={"/images/Math/C/C2/decroissant.png"}  alt="Teacher" />

                <Orange_NumberDisplay>
                  <strong>   L'ordre décroissant est une disposition de nombres allant du plus grand au plus petit.</strong>
                </Orange_NumberDisplay>


               
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>


          <Swipe_Section ref={section3Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton>🍕Activité 1🍕</ContinueButton>
                <img src={"/images/train.png"}  alt="Teacher" />

                <C2A1 />

              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>



          <Swipe_Section ref={section4Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton>🍕Activité 2🍕</ContinueButton>
                <img src={"/images/train2.png"}  alt="Teacher" />
                <C2E1 />

              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>


          <Swipe_Section ref={section5Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton>🍕Activité 3🍕</ContinueButton>
                <img  src='/images/Math/C/imgC19/Activity.png' alt="Activity"  />
            <div style={{width:'100%'}}>
            <C2E2 />
            </div>

              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>



          <Swipe_Section ref={section6Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton>QCM</ContinueButton>
                <QCMC2 />

              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>

        </SwipeContainer2>
      </StyledBox></Container_Progress_Bar>
  );
};

export default C2;
