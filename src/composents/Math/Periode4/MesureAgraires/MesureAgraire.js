import React, { useRef, useState } from 'react';
import Exercice from './Exercice';
import Table_mesures from './Table_mesures';
import Table_mesures2 from './Table_mesures2';

import { useNavigate } from 'react-router-dom';
import '../progressBar/SegmentedProgressBar.css'

import styled from 'styled-components';
import { Box } from '@mui/material';
import {
    ImageContainer, FormulaText, Card, BodyText, Subtitle, ContinueButton
} from '../../../Styles/MajorStyles';
import '../Style.css'
import SegmentedProgressBar from '../progressBar/ProgressBar';



const Container = styled.div`

margin:5px,


    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const StyledBox = styled.div`
padding-left: 5px;
padding-right:5px;
padding-top: 200px;
padding-bottom: 10px;
    width: 100%;
    max-width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SectionContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FormulaBox = styled.div`
    width: 80%;
    max-width: 600px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
`;



export const textStyle = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  color: #444;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;




const SwipeContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-snap-destination: 100%;
  width: 100%;
`;

const Section = styled.div`
  flex-shrink: 0;
  width: 100%;
  scroll-snap-align: start;
  padding: 20px;
`;


const Les_solides = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);
    const navigate = useNavigate();


    const [progress, setProgress] = useState(0);

    const [lastSectionReached, setLastSectionReached] = useState(false);
    const [sectionsViewed, setSectionsViewed] = useState(0);
    const totalSections = 3; // Nombre total de sections
    const progressWidth = (sectionsViewed / totalSections) * 100 + "%";

    const [currentSegment, setCurrentSegment] = useState(0); // État pour suivre le segment actuel

    const totalSegments = 4; // Nombre 




    const handleScroll = (event) => {
        const { scrollLeft } = event.target;
        setScrollPosition(scrollLeft);

        // Récupérer les positions de début de chaque section
        const sectionPositions = [
            0, // Position de début de la première section
            section1Ref.current.offsetWidth, // Position de début de la deuxième section
            section1Ref.current.offsetWidth + section2Ref.current.offsetWidth, // Position de début de la troisième section
            section1Ref.current.offsetWidth + section2Ref.current.offsetWidth + section3Ref.current.offsetWidth, // Position de début de la troisième section
            // Ajouter d'autres positions pour les sections suivantes
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
        // if (currentSection + 1 == 4) {


        //     setLastSectionReached(true)
        // }


    };

   
const nextChap=()=>{
    navigate("/Les_solides");
}

   

  

    return (


        <Container>



    <SegmentedProgressBar totalSegments={totalSections} currentSegment={progress}  />

 


            <StyledBox>

                <SwipeContainer onScroll={handleScroll}>


                    <Section ref={section1Ref}>
                      

                        <SectionContainer>
                            <FormulaBox>

                            
                                <h1>Notion : </h1>
                                <div style={{ marginBottom: '50px', width: '100%', height: '100%' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <Table_mesures />
                                    </div>
                                    <div className="separator"></div>
                                </div>

                               
                            </FormulaBox>
                        </SectionContainer>
                    </Section>



                    <div></div>
                    <Section ref={section2Ref}>
                        {/* Section 3 content */}
                        <SectionContainer>
                            <FormulaBox>
                               
                                    <h1>Allons du m² vers le (ha) ou (ca)  :</h1>
                                
                                <div style={{ marginBottom: '50px', width: '100%', height: '100%' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <Table_mesures2 />
                                    </div>
                                    <div className="separator"></div>
                                </div>

                            
                            </FormulaBox>
                        </SectionContainer>
                     
                    </Section>



                    <Section ref={section3Ref}>




                        {/* Section 4 content */}
                        <SectionContainer>


                            <FormulaBox>
                                <h1>Exercices  applicatif:</h1>
                                <Exercice />
                                <div>
                                    <br />
                                </div>

                                <button className='ButtonSuivant' onClick={nextChap}>j'ai terminé ce chapitre et je passe au suivant</button>
                            </FormulaBox>
                        </SectionContainer>

                        
                    </Section>






                </SwipeContainer>

            </StyledBox>
        </Container>
    );
};

export default Les_solides;