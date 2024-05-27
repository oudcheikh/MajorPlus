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



import { Box } from '@mui/material';
import {
  Container, SectionContainer, ImageContainer, FormulaText, Card, FormulaBox, BodyText, Subtitle, ContinueButton, Container_Progress_Bar, SectionContainer2, FormulaBox2,
  SwipeContainer2, Swipe_Section,NumberDisplay,NumberDisplay2
} from '../Styles/MajorStyles'

import styled from 'styled-components';
export const textStyle = styled.h2`
      font-family: "Roboto", sans-serif;
      font-size: 20px;
      color: #444;
  
      @media (max-width: 480px) {
          font-size: 18px;
      }
  `;


const StyledBox = styled(Box)({

});



const imageStyle = {
  width: '70%', // L'image prendra 80% de la largeur de son parent
  height: 'auto', // La hauteur change automatiquement pour garder les proportions
  maxWidth: '70%', // Assure que l'image ne dépasse pas la largeur de la carte
  display: 'block', // Empêche l'image de prendre plus de place que nécessaire
  marginLeft: 'auto', // Marges automatiques à gauche pour centrer l'image
  marginRight: 'auto' // Marges automatiques à droite pour centrer l'image
};


const NBdecimeaux = () => {
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
                  <FormulaText><strong>Les Nombere Decimaux </strong></FormulaText>
                </button>
<div style={{marginTop:'100px'}}></div>
                <img src={'/images/Math/periode3/decimeaux.png'} alt="Teacher" />


                <Card>

                  <BodyText>

                    <strong>  Salut à tous ! Aujourd'hui, nous allons plonger dans un sujet
                      passionnant :<span style={{ color: 'blue' }}>Les Nombere Decimaux. </span>     </strong>             </BodyText>
                      <div style={{marginTop:'50px'}}></div>
                </Card>
                <div style={{marginTop:'20px'}}></div>


              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>

          <Swipe_Section ref={section2Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton>Notions</ContinueButton>


                <FormulaText>
                  <strong>
                    Pense à une délicieuse barre de chocolat 🍫 : une barre entière plus la moitié d'une autre.

                  </strong>
                </FormulaText>
                <img src={'/images/Math/C/images C18/CHoo.png'} alt="Teacher" style={imageStyle} />


                <FormulaText>
                  <strong style={{ color: 'green' }}>

                    Cela fait 1 +1/2 en tout, et c'est ça un nombre décimal, un tout et un petit plus !
                  </strong>
                </FormulaText>

                <NumberDisplay2>
                  <FormulaText> <strong> Regarde cette règle : entre les nombres entiers, il y a dix petites marques. Chaque marque ajoute 0.1.  </strong> </FormulaText>

                </NumberDisplay2>


                <NumberDisplay>
                  <FormulaText> <strong> il ya aussi ce qu'on appele les centaines , par example entre 1 et 1,1 il ya dix nomber decimaux, avec un pas de 0.01.  </strong> </FormulaText>

                </NumberDisplay>


                <Addexemple1></Addexemple1>

              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>

          <Swipe_Section ref={section3Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton> Les fractions decimals</ContinueButton>

           <FormulaText><strong>  Voici quelque nombre décimaux remarquable:</strong> </FormulaText>

                <div style={{marginTop:'120px',marginBottom:'60px'}}>
               
                  <Addexemple2></Addexemple2>
                  
                </div>
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>



          <Swipe_Section ref={section4Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton> Les fractions decimals</ContinueButton>



                <div>
                  <Multipexempl></Multipexempl>
                </div>
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>

          <Swipe_Section ref={section5Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton> Les fractions dècimales</ContinueButton>

                <div style={{marginTop:'100px'}}>
                  
                  <Multipexampl2></Multipexampl2>
                </div>
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>


        </SwipeContainer2>
      </StyledBox>
    </Container_Progress_Bar>
  )
}

export default NBdecimeaux;
