import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../Periode4/progressBar/SegmentedProgressBar.css'
import SegmentedProgressBar from '../../Periode4/progressBar/ProgressBar';

import Fraction from './Fraction';
import Fraction1 from './Fraction1';
import Fraction3 from './Fraction3';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
//import teacherImage from '../Images/Prof1.png';
import QCMC16 from './QCMC16';
import Bande from './Bande';

import { ContinueButton } from '../../../Styles/MajorStyles';


import {
    SectionContainer, ImageContainer, BodyText,
    Title, Subtitle, FormulaBox, FormulaText, Container_Progress_Bar, SectionContainer2, FormulaBox2,
    SwipeContainer2, Swipe_Section,
} from '../../../Styles/MajorStyles';

import styled from 'styled-components';
import { Box } from '@mui/material';


export const StyledBox = styled.div`
padding-left: 2px;
padding-right:2px;
padding-top: 4%;
padding-bottom:2px;
    width: 100%;
    max-width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;


const Chap13 = () => {

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
    const totalSections = 5; // Nombre total de sections




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
        <Container maxWidth="md" style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>

            <SegmentedProgressBar totalSegments={totalSections} currentSegment={progress} />

            <StyledBox>
                <SwipeContainer2 onScroll={handleScroll}>



                    <Swipe_Section ref={section1Ref}>
                        <SectionContainer2>
                            <FormulaBox2>
                                <button className="continue-button" >
                                    <FormulaText><strong> Fractions équivalents </strong></FormulaText>
                                </button>

                                <img src={"/images/Math/periode2/equivalent.png"} alt="Teacher" />


                                <Card>
                                    <strong>
                                        <BodyText>
                                            Salut à tous ! Aujourd'hui, nous allons explorer un concept
                                            fascinant en mathématiques :                                         <br></br>
                                            <span style={{ color: 'blue' }}> les fractions     </span>

                                        </BodyText>
                                    </strong>
                                </Card>

                            </FormulaBox2>
                        </SectionContainer2>
                    </Swipe_Section>

                    <Swipe_Section ref={section2Ref}>
                        <SectionContainer2>

                       
                            <Bande />
                           
                        </SectionContainer2>
                    </Swipe_Section>

                    <Swipe_Section ref={section3Ref}>
                        <SectionContainer2>
                            <Card style={{ marginBottom: '20px', width: '100%' }}>

                            <ContinueButton>   Exercice </ContinueButton>
                                <CardContent>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <img src={"images/Images/Prof1.png"} alt="Enseignant" style={{ maxWidth: '50%', height: 'auto' }} />
                                        <Fraction />
                                    </div>
                                </CardContent>
                            </Card>

                        </SectionContainer2>
                    </Swipe_Section>


                    <Swipe_Section ref={section4Ref}>
                        <SectionContainer2>
                       
                            <Card style={{ marginBottom: '20px', width: '100%' }}>
                            <ContinueButton>   Exercice </ContinueButton>
                                <CardContent>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <img src={"images/Images/Prof1.png"} alt="Enseignant" style={{ maxWidth: '50%', height: 'auto' }} />
                                        <Fraction1 />
                                    </div>
                                </CardContent>
                            </Card>

                        </SectionContainer2>
                    </Swipe_Section>


                    <Swipe_Section ref={section5Ref}>
                        <SectionContainer2>
                        


                            <Card style={{ marginBottom: '20px', width: '100%' }}>

                            <ContinueButton>   Exercice </ContinueButton>
                                <CardContent>
                                    <Fraction3 />
                                </CardContent>
                            </Card>

                        </SectionContainer2>
                    </Swipe_Section>


                </SwipeContainer2>
            </StyledBox>
        </Container>










    );
}

export default Chap13;










