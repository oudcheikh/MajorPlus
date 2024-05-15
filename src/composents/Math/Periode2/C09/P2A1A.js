import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Test3 from './QCMC9';
import P2A1A_1 from './P2A1A-1';
import Audio from "./Audio09";
import '../../Periode4/progressBar/SegmentedProgressBar.css'
import SegmentedProgressBar from '../../Periode4/progressBar/ProgressBar';

import styled from 'styled-components';
import { Box } from '@mui/material';

import {
    Container, SectionContainer, ImageContainer, Card, BodyText,
    Title, Subtitle, FormulaBox, FormulaText, ContinueButton, Container_Progress_Bar, SectionContainer2, FormulaBox2,
    SwipeContainer2, Swipe_Section,
} from '../../../Styles/MajorStyles';


export const StyledBox = styled.div`
padding-left: 2px;
padding-right:2px;
padding-top: 1100px;
padding-bottom:2px;
    width: 100%;
    max-width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const NumberDisplay3 = styled(Box)(({ isActive }) => ({
    boxSizing: 'border-box',
    width: '100%',
    height: 'auto',
    // margin: '20px auto',
    padding: '5px',
    backgroundColor: ' pink',
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

const NumberDisplay = styled(Box)(({ isActive }) => ({
    boxSizing: 'border-box',
    width: '100%',
    height: 'auto',
    // margin: '20px auto',
    padding: '5px',
    backgroundColor: ' hsl(210, 75%, 63%);',
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
const P2A1A = () => {
   
   

    const [scrollPosition, setScrollPosition] = useState(0);
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);
    const section5Ref = useRef(null);
    const section6Ref = useRef(null);
    const section7Ref = useRef(null);
    const section8Ref = useRef(null);


    const navigate = useNavigate();


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

        // Afficher la section actuelle dans la console
        console.log("Section actuelle :", currentSection + 1);
        setSectionsViewed(currentSection + 1);
        setProgress(currentSection + 1)



    };


    const nextChap = () => {
        navigate("/Les_solides");
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
                                    <FormulaText><strong> La Division des nombres </strong></FormulaText>
                                </button>


                                <img src={'/images/Math/C/imagesC09/div.png'} alt="univers" />
                                <strong>
                                    <Card>
                                        <BodyText>

                                            Salut à tous ! Aujourd'hui, nous allons plonger dans un autre sujet passionnant :

                                            <strong style={{ color: 'orange' }}> la division.</strong>
                                        </BodyText>

                                    </Card>
                                </strong>
                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>


                    <Swipe_Section ref={section2Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>
                                    Définition
                                </ContinueButton>


                                <img src={"/images/Math/C/imagesC09/owl4.png"} alt="owl4" />


                                <strong>
                                    <Card>
                                        <BodyText>

                                            La division est une operation qui nous permet de partager les quantités équitablement,
                                            <strong style={{ color: 'blue' }}>comme partager une pizza entre amis ! 😉</strong>
                                        </BodyText>

                                    </Card>
                                </strong>
                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>




                    <Swipe_Section ref={section3Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>
                                    Exemple de division
                                </ContinueButton>

                                <img src={"/images/Math/C/imagesC09/divisionPizza.png"} alt="Teacher" />





                                <div>

                                    <strong>
                                        <Card>
                                            <BodyText>
                                                Partage de pizza de 9 pieces sur 4 personnes, 2 pieces pour chaqun. Le Rest est un piece.
                                            </BodyText>

                                        </Card>
                                    </strong>

                                    <img src={"/images/Math/C/imagesC09/pizza3.png"} alt="pizza" />
                                </div>

                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>



                    <Swipe_Section ref={section4Ref}>
                        <SectionContainer2>
                            <FormulaBox2>

                                <ContinueButton>
                                    Exemple numérique de la division
                                </ContinueButton>

                                <img src={"/images/Math/C/imagesC09/candy.png"} alt="Teacher" />

                                <Card>
                                    <strong>
                                        <BodyText>
                                            Partagez équitabtement 141 bonbons entre 8 enfants. Combien en auront-ils chacun ? Combien en restera-t-il dans le sac ?"
                                        </BodyText>

                                    </strong>

                                </Card>




                                <strong><h2>Solution</h2></strong>
                                <br></br>

                              

                                    <img src={"/images/Math/C/imagesC09/exemple1.png"} alt="Teacher" style={{ width: "170px", marginTop: "20px" }} />

                                    <NumberDisplay3>
                                        <strong>Etape1:</strong>
                                        <strong> chercher combien de 8 dans les deux premiers nombre , de 141(14),14 contient 8 seulment 1 fois. metter 1 dans le quotion et le resultat (8 x 1=8) dans le 2eme cas<br></br>
                                        </strong>
                                    </NumberDisplay3>
                                



                               
                                    <img src={"/images/Math/C/imagesC09/exemple2.png"} alt="Teacher" style={{ width: "170px", marginTop: "40px" }} />
                                
                                    <NumberDisplay3>
                                        <strong>Etape2:</strong>
                                        <strong> 
                                        Soustraction 8 de 14, le resultat est 6, deplacer le 3 eme nombre restant de notre dividende 141(1) et combiner avec 6, deplacer le resultat (61) vers le 3eme cas,
                                        </strong>
                                    </NumberDisplay3>

                                
                                    <img src={"/images/Math/C/imagesC09/exemple.png"} alt="Teacher" style={{ width: "170px", marginTop: "40px" }} />
                               
                                    <NumberDisplay3>
                                        <strong>Etape3:</strong>

                                        <strong> 
                                        De meme chercher combien de 8 dans 61, 61 contient  8 exactement 7 fois,metter 7 dans le quotion  et le resultat (8 x 7=56) dans le dernier cas<br></br>
                                            comme le nombre restant de la soustraction de 61 et 56 inferieur a 8, arreter l operation et
                                            voila votre resultat de division.   
                                         </strong>

                                    </NumberDisplay3>

                              

                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>


                    <Swipe_Section ref={section5Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>Formules clés</ContinueButton>

                                <NumberDisplay>
                                <strong>Dividende</strong> = Signifie le  nombre que tu divises.
                                </NumberDisplay>

<br></br>
                                <NumberDisplay>
                                <strong> Diviseur = Signifie le nombre par lequel tu divises.</strong>
                                </NumberDisplay>

                                <br></br>
                                <NumberDisplay>
                                <strong>  Quotient = Signifie le résultat de la division</strong>
                                </NumberDisplay>

                                <br></br>
                                <NumberDisplay>
                                <strong>Rest = Signifie le rest de la division</strong>
                                </NumberDisplay>


                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>


                    <Swipe_Section ref={section6Ref} >
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>Activité:</ContinueButton>
                                <P2A1A_1 />

                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>


                    <Swipe_Section ref={section7Ref}>
                        <SectionContainer2>

                            <FormulaBox2>
                                <ContinueButton>  QCM  </ContinueButton>
                                <Test3 />
                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>



                </SwipeContainer2>

            </StyledBox>
        </Container_Progress_Bar>

    );
}

export default P2A1A;