import React, { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../../Periode4/progressBar/SegmentedProgressBar.css'
import SegmentedProgressBar from '../../Periode4/progressBar/ProgressBar';
import C4A1 from './C4A1';
import C4A2 from './C4A2';
import C4A3 from './C4A3';
import C4A4 from './C4A4';
import QCMC4 from './QCMC4';

import {
    FormulaText,
    ContinueButton, Container_Progress_Bar, SectionContainer2, FormulaBox2,
    SwipeContainer2, Swipe_Section, imageStyle_Mot_Clé, NumberDisplay
} from '../../../Styles/MajorStyles';

import styled from "styled-components";
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
    const section7Ref = useRef(null);
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
                                <Acceuil titre={"Ajouter et retrancher "} imgSrc={"/images/Math/C/C4/addition.png"} altText={"Ajouter et retrancher."}> </Acceuil>
                           
                           <button onClick={handleFinish}>Terminer</button>
                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>


                    <Swipe_Section ref={section2Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>Concept clés</ContinueButton>
                                <img src={"/images/Math/C/C11/divi.png"} alt="Teacher" style={imageStyle_Mot_Clé} />
                                <FormulaText> <strong style={{ color: 'blue' }}>Ajouter :</strong></FormulaText>
                                <NumberDisplay>
                                    <strong>
                                        C'est combiner des nombres. Si tu as 3 pommes et que tu en prends 2 de plus, tu as alors 3 + 2 = 5 pommes. </strong>
                                </NumberDisplay>
                                <FormulaText> <strong style={{ color: 'blue' }}>Retrancher :</strong></FormulaText>
                                <NumberDisplay>
                                    <strong>
                                        C'est enlever une quantité d'un nombre. Si tu as 5 pommes et que tu en manges 2, il te reste 5 - 2 = 3 pommes.
                                    </strong>
                                </NumberDisplay>
                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>

                    <Swipe_Section ref={section3Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>🍕Activité</ContinueButton>
                                <img style={{ width: '70%', height: '10%', marginLeft: '40px' }} src={"/images/Math/C/C4/SS.png"} alt="addition" />
                                <C4A4 />
                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>

                    <Swipe_Section ref={section4Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>🍕Activité</ContinueButton>
                                <img style={{ width: '70%', height: '10%', marginLeft: '40px' }} src={"/images/Math/C/C4/zero.png"} alt="addition" />
                                <C4A1 />
                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>


                    <Swipe_Section ref={section5Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>🍕Activité</ContinueButton>
                                <img style={{ width: '70%', height: '10%', marginLeft: '40px' }} src={"/images/Math/C/C4/un.png"} alt="addition" />
                                <C4A2 />
                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>

                    <Swipe_Section ref={section6Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>🍕Activité</ContinueButton>
                                <img style={{ width: '70%', height: '10%', marginLeft: '40px' }} src={"/images/Math/C/C4/neuf.png"} alt="addition" />
                                <C4A3 />
                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>

                    <Swipe_Section ref={section7Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <ContinueButton>QCM</ContinueButton>
                                <QCMC4 />
                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>

                </SwipeContainer2>
            </StyledBox>
        </Container_Progress_Bar>
    );
}

export default C2;
