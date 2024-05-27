import React, { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../Math/Periode4/progressBar/SegmentedProgressBar.css'
import SegmentedProgressBar from '../Math/Periode4/progressBar/ProgressBar'


import QCMC1 from './QCMC1';
import Addexemple1 from './Addexemple1';
import Addexemple2 from './Addexample2';
import Multipexempl from './Multipexempl';
import Multipexampl2 from './Multipexampl2';
import Divisionexampl1 from './Divisionexampl1';
import Fractiondetail from './Fractiondetail';



import styled from 'styled-components';
import { Box } from '@mui/material';

import {
  Container, SectionContainer, ImageContainer, FormulaText, Card, FormulaBox, BodyText, Subtitle, ContinueButton, Container_Progress_Bar, SectionContainer2, FormulaBox2,
  SwipeContainer2, Swipe_Section
} from '../Styles/MajorStyles';



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
const NumberDisplay2 = styled(Box)(({ isActive }) => ({
  boxSizing: 'border-box',
  width: '100%',
  height: 'auto',
  margin: '20px auto',
  padding: '20px',
  backgroundColor: 'rgb(248, 248, 227)',
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

const imageStyle = {
  width: '90%', // L'image prendra 80% de la largeur de son parent
  height: 'auto', // La hauteur change automatiquement pour garder les proportions
  maxWidth: '90%', // Assure que l'image ne dépasse pas la largeur de la carte
  display: 'block', // Empêche l'image de prendre plus de place que nécessaire
  marginLeft: 'auto', // Marges automatiques à gauche pour centrer l'image
  marginRight: 'auto' // Marges automatiques à droite pour centrer l'image
};

const C1 = () => {
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
  const totalSections = 5; 




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
                  <FormulaText><strong>  Partages Inégaux </strong></FormulaText>
                </button>
                <div style={{ marginTop: '200px' }}></div>

                <imageStyle> <img src={"/images/Math/C/imgC19/partageInegueau.PNG"} alt="angle" /></imageStyle>



                <Card>

                  <BodyText>

                    Salut! Aujourd'hui, on va parler d'un sujet intéressant :   <strong className="mot_importante">le Partage inégaux</strong>
                  </BodyText>

                </Card>

                <div style={{ marginTop: '100px' }}></div>

              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>


          <Swipe_Section ref={section2Ref}>
            <SectionContainer2>
              <FormulaBox2>
              <ContinueButton> Exemple</ContinueButton>

              <br></br>
                <Card>

                  <FormulaText>
                    <strong>
                      Imagine que tu partages un gâteau avec ta soeur ou ton frére : tu donnes une grande part à toi et une petite à lui

                    </strong>
                  </FormulaText>

                  <img src={"/images/Math/C/imgC19/Choo.png"} alt="Teacher" style={imageStyle} />




                  <FormulaText>
                    <strong>

                      C'est le partage inégal : quand tout le monde ne reçoit pas la même taille de part.
                    </strong>
                  </FormulaText>
                </Card>


              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>



          <Swipe_Section ref={section2Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton>  Parts avec différence</ContinueButton>

                <Card>

                  <img src='/images/Math/C/imgC19/petitInestine.png' alt="Teacher" style={imageStyle} />

                  <FormulaText><strong>
                    Sidi et Moussa possèdent ensemble <span style={{ color: '#FF0000' }}>550 Um</span>.
                    Sidi a <span style={{ color: '#0000FF' }}>210 Um</span> de plus que Moussa.
                    Quelle est la part de chacun ?
                  </strong></FormulaText>
                  <FormulaText><strong>Solution</strong></FormulaText>

                  <FormulaText><strong>
                    J’enlève la différence :<br /><span style={{ color: '#FF0000' }}>550</span> – <span style={{ color: '#0000FF' }}>210</span> = <span style={{ color: '#00FF00' }}>340 Um</span>
                  </strong></FormulaText>
                  <FormulaText><strong>
                    La part de Moussa :<br /> <span style={{ color: '#00FF00' }}>340</span> ÷ 2 = <span style={{ color: '#FFA500' }}>170 Um</span>
                  </strong></FormulaText>
                  <FormulaText><strong>
                    La part de Sidi :<br /> <span style={{ color: '#FFA500' }}>170</span> + <span style={{ color: '#0000FF' }}>210</span> = <span style={{ color: '#FF00FF' }}>380 Um</span>
                  </strong></FormulaText>
                  <FormulaText><strong>
                    Je vérifie :<br /> <span style={{ color: '#FF00FF' }}>380</span> + <span style={{ color: '#FFA500' }}>170</span> = <span style={{ color: '#FF0000' }}>550 Um</span>
                  </strong></FormulaText>


                </Card>


              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>


          <Swipe_Section ref={section3Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton>  un part est un</ContinueButton>
                  <Addexemple2></Addexemple2>
           
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>



          <Swipe_Section ref={section4Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton>  un part est un</ContinueButton>

    <Multipexempl></Multipexempl>

              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>


          <Swipe_Section ref={section5Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton>  un part est un</ContinueButton>

                <Multipexampl2></Multipexampl2>

              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>

        </SwipeContainer2>
      </StyledBox>
    </Container_Progress_Bar>
  )
}



export default C1;
