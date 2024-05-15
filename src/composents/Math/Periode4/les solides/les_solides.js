import React, { useRef, useState } from 'react';
import Exercice1 from '../les solides/Exercice1'
import Cardre from '../les solides/Cadre'
import Pyramides from '../les solides/Pyramides'
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

// Import des styles

import {
    Container, ImageContainer, FormulaText, Card, FormulaBox, BodyText, Subtitle, ContinueButton, Container_Progress_Bar, SectionContainer2, FormulaBox2,
    textStyle2, SwipeContainer2, Swipe_Section,
} from '../../../Styles/MajorStyles'; // Assurez-vous que le chemin est correct
import SegmentedProgressBar from '../progressBar/ProgressBar';


export const StyledBox = styled.div`
padding-left: 2px;
padding-right:2px;
padding-top: 300px;
padding-bottom:2px;
    width: 100%;
    max-width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Les_solides = () => {




    const [scrollPosition, setScrollPosition] = useState(0);
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);
    const navigate = useNavigate();


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



    };


    const nextChap = () => {
        navigate("");
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
                                    <FormulaText><strong> Les solides </strong></FormulaText>
                                </button>
                                <img src={'/images/Math/periode 4/uniivers.png'} alt="univers" />
                                <strong>
                                    <Card>
                                    <BodyText>
                                            Notre univers est  <span style={{ color: 'blue' }}>un ensemble d'objet</span> chaque objet admet  <span style={{ color: '#ff4500' }}>sa propre forme</span>
                                            <br></br>
                                            <strong style={{ color: 'orange' }}>Allons-nous découvrir les formes des objets?</strong>
                                        </BodyText>

                                    </Card>
                                </strong>
                            </FormulaBox2>
                     </SectionContainer2>

                    </Swipe_Section>




                    <Swipe_Section  ref={section2Ref}>
                        <SectionContainer2>


                            <FormulaBox2>


                                <button className="continue-button" >
                                    <FormulaText><strong>  Les cube  </strong></FormulaText>

                                </button>


                                <Cardre />
                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>

                  



                    <Swipe_Section ref={section3Ref}>
                        <SectionContainer2>


                            <FormulaBox2>


                                <button className="continue-button" >
                                    <FormulaText><strong> Les pyramides  </strong></FormulaText>

                                </button>
                                <strong><span style={{ color: 'orange' }}>  </span></strong>
                                <div style={{ marginBottom: '50px', width: '100%', height: '100%' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <Pyramides />
                                    </div>
                                    <div className="separator"></div>
                                </div>


                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section >



                    <Swipe_Section ref={section4Ref}>
                        <SectionContainer2>

                            <FormulaBox2>

                                <button className="continue-button" >
                                    <FormulaText><strong> Les sphéres  </strong></FormulaText>

                                </button>

                                <strong><span style={{ color: 'orange' }}></span></strong>



                                <Exercice1 />




                                <div>
                                    <br></br>
                                </div>


                            </FormulaBox2>
                        </SectionContainer2>

                    </Swipe_Section>


                </SwipeContainer2>
            </StyledBox>
        </Container_Progress_Bar>





    );
}

export default Les_solides;
