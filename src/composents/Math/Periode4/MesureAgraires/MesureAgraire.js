import React, { useRef, useState } from 'react';
import Exercice from './Exercice';
import Table_mesures from './Table_mesures';
import Table_mesures2 from './Table_mesures2';

import { useNavigate } from 'react-router-dom';
import '../progressBar/SegmentedProgressBar.css'


import {
    Container_Progress_Bar,StyledBox2,SectionContainer2,FormulaBox2,
SwipeContainer2,Swipe_Section,
} from '../../../Styles/MajorStyles';
import '../Style.css'
import SegmentedProgressBar from '../progressBar/ProgressBar';
import AccuielMA from './AccuielMA';




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

   
const nextChap=()=>{
    navigate("/Les_solides");
}

   

  

    return (


        <Container_Progress_Bar>



    <SegmentedProgressBar totalSegments={totalSections} currentSegment={progress}  />

 


            <StyledBox2>

                <SwipeContainer2 onScroll={handleScroll}>



                <Swipe_Section ref={section1Ref}>
                      

                      <SectionContainer2>
                          <FormulaBox2>

                          
                           
                              <div style={{ marginBottom: '50px', width: '100%', height: '100%' }}>
                                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                      <AccuielMA />
                                  </div>
                                  <div className="separator"></div>
                              </div>

                             
                          </FormulaBox2>
                      </SectionContainer2>
                  </Swipe_Section>

                    <Swipe_Section ref={section2Ref}>
                      

                        <SectionContainer2>
                            <FormulaBox2>

                            
                                <h1>Notion : </h1>
                                <div style={{ marginBottom: '50px', width: '100%', height: '100%' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <Table_mesures />
                                    </div>
                                    <div className="separator"></div>
                                </div>

                               
                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>



                    <div></div>
                    <Swipe_Section ref={section3Ref}>
                        {/* Section 3 content */}
                        <SectionContainer2>
                            <FormulaBox2>
                               
                                    <h1>Allons du m² vers le (ha) ou (ca)  :</h1>
                                
                                <div style={{ marginBottom: '50px', width: '100%', height: '100%' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <Table_mesures2 />
                                    </div>
                                    <div className="separator"></div>
                                </div>

                            
                            </FormulaBox2>
                        </SectionContainer2>
                     
                    </Swipe_Section>



                    <Swipe_Section ref={section4Ref}>




                        {/* Section 4 content */}
                        <SectionContainer2>


                            <FormulaBox2>
                                <h1>Exercices  applicatif:</h1>
                                <Exercice />
                                <div>
                                    <br />
                                </div>

                                <button className='ButtonSuivant' onClick={nextChap}>j'ai terminé ce chapitre et je passe au suivant</button>
                            </FormulaBox2>
                        </SectionContainer2>

                        
                    </Swipe_Section>



                </SwipeContainer2>

            </StyledBox2>
        </Container_Progress_Bar>
    );
};







export default Les_solides;