import React, { useRef, useState, useEffect } from "react";
import '../../Periode4/progressBar/SegmentedProgressBar.css';
import SegmentedProgressBar from '../../Periode4/progressBar/ProgressBar';

import M2A2 from './M2A2';
import M2A1 from './M2A1';

import {
    StyledBox, SectionContainer2, FormulaBox2, ContinueButton
} from '../../../Styles/MajorStyles'; 

import Acceuil from "../../../_ReusableComponents/Accueil";

const M2 = () => {
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);

    const [progress, setProgress] = useState(0);
    const totalSections = 3;

    const handleScroll = () => {
        if (!section1Ref.current || !section2Ref.current || !section3Ref.current) {
            return;
        }

        const sectionPositions = [
            section1Ref.current.offsetTop,
            section2Ref.current.offsetTop,
            section3Ref.current.offsetTop,
        ];

        const scrollPosition = window.scrollY + window.innerHeight / 2;

        let currentSection = 0;
        for (let i = 0; i < sectionPositions.length; i++) {
            if (scrollPosition >= sectionPositions[i]) {
                currentSection = i;
            }
        }

        setProgress(currentSection + 1);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleFinish = () => {
        console.log("Activité terminée");
    };

    return (
        <div className="container_progress_bar">
            <SegmentedProgressBar totalSegments={totalSections} currentSegment={progress} />
            <StyledBox>
                <div ref={section1Ref}>
                    <SectionContainer2>
                       
                            <Acceuil titre={" Mesure des Masses"} imgSrc={"/images/Math/M/imagesM2/masse_.gif"} altText={"  Les mesures des masses"}> </Acceuil>
                       
                    </SectionContainer2>
                </div>

                <div ref={section2Ref}>
                    <SectionContainer2>
                        <FormulaBox2>
                            <ContinueButton>🍕Activités🍕</ContinueButton>
                            <M2A1 />
                        </FormulaBox2>
                    </SectionContainer2>
                </div>

                <div ref={section3Ref}>
                    <SectionContainer2>
                        <FormulaBox2>
                            <ContinueButton>🍕Activités🍕</ContinueButton>
                            <M2A2 />
                        </FormulaBox2>
                    </SectionContainer2>
                </div>

                <button className="finish_button" onClick={handleFinish}>Terminer</button>
            </StyledBox>
        </div>
    );
}

export default M2;
