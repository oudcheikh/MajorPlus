import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import '../../Periode4/progressBar/SegmentedProgressBar.css'
import SegmentedProgressBar from '../../Periode4/progressBar/ProgressBar';
import {
  SectionContainer, ImageContainer, BodyText,
  Title, Subtitle, FormulaBox, FormulaText, ContinueButton, Container_Progress_Bar, SectionContainer2, FormulaBox2,
  SwipeContainer2, Swipe_Section,
} from '../../../Styles/MajorStyles';

import Draggable from 'react-draggable';
import { Button, Container, Box, Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import Chap10 from './Chap10';
import P2A4 from './P2A4';
import QCMM5 from './QCMM5';
import Acceuil from "../../../_ReusableComponents/Accueil";

const PlayArea = styled(Box)({
  width: '100%',
  height: 300,
  border: '4px solid #4ECDC4',
  borderRadius: 15,
  boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.2)',
  position: 'relative',
  overflow: 'hidden',
});
const ImageBox = styled(Box)({
  position: 'absolute',
  cursor: 'pointer',
  zIndex: 10,
});
const TargetZone = styled(Box)({
  position: 'absolute',
  bottom: 10,
  height: 2,
  width: '100%',
  backgroundColor: '#FF8E53'
});

const MesurAire = () => {


  const [scrollPosition, setScrollPosition] = useState(0);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);

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
    setSectionsViewed(currentSection + 1);
    setProgress(currentSection + 1)
  };

  
  const targetZones = [
    { id: 1, x: 10, width: 50 },
    { id: 2, x: 70, width: 55 },
    { id: 3, x: 135, width: 60 },
    { id: 4, x: 205, width: 65 },
    { id: 5, x: 280, width: 70 },
  ];

  const [images, setImages] = useState(targetZones.map(zone => ({
    ...zone,
    y: Math.floor(Math.random() * 150),
    height: zone.width,
    color: ['#FF6B6B', '#4ECDC4', '#FFD166', '#8338EC', '#FF9F1C'][zone.id - 1],
  })));

  const [isCorrect, setIsCorrect] = useState(null);

  const onDragStop = (event, data, id) => {
    const newImages = images.map(img => {
      if (img.id === id) {
        return { ...img, x: data.x, y: data.y };
      }
      return img;
    });
    setImages(newImages);
  };

  const verifyOrder = () => {
    for (let i = 0; i < images.length - 1; i++) {
      if (images[i].x + images[i].width > images[i + 1].x || images[i].y + images[i].height < 250) {
        setIsCorrect(false);
        return;
      }
    }
    setIsCorrect(true);
  };
  const [section, setSection] = useState(0);
  const nextSection = () => {
    setSection(prevSection => prevSection + 1);
  };
  const [showSections, setShowSections] = useState([true, true, true, true]);
  return (
    <Container_Progress_Bar>
      <SegmentedProgressBar totalSegments={totalSections} currentSegment={progress} />
      <SwipeContainer2 onScroll={handleScroll}>
        <Swipe_Section ref={section1Ref}>
          <SectionContainer2>
            <FormulaBox2>
  <Acceuil  titre={"Mesure des aires"}  imgSrc={"/images/Math/periode2/mesures des aires.png"}altText={" Mesure des aires."} > </Acceuil>
            </FormulaBox2>
          </SectionContainer2>
        </Swipe_Section>

        <Swipe_Section ref={section2Ref}>
          <ContinueButton>Exercice 1 </ContinueButton>
          <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%', justifyContent: 'center' }}>
              <img src={"/images/Images/Prof1.png"} alt="Enseignant" style={{ maxWidth: '50%', height: 'auto' }} />
              <Card sx={{
                borderRadius: 15,
                backgroundColor: '#2196F3',
                color: 'white',
                width: '70%',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                mb: 1,
                display: 'flex',
                justifyContent: 'center',
                padding: 0.5,
                fontFamily: 'Comic Sans MS, sans-serif'
              }}>
                <CardContent>
                  <Typography variant="body1" align="center">
                    Ordonner les carrés du plus petit aire vers le plus grand sur les bars en bas.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <PlayArea>
              {targetZones.map(zone => (
                <TargetZone
                  key={zone.id}
                  sx={{
                    left: zone.x,
                    width: zone.width,
                  }}
                />
              ))}
              {images.map((img) => (
                <Draggable
                  key={img.id}
                  defaultPosition={{ x: img.x, y: img.y }}
                  onStop={(e, data) => onDragStop(e, data, img.id)}
                  bounds="parent"
                >
                  <ImageBox
                    sx={{ width: img.width, height: img.height, backgroundColor: img.color }}
                  />
                </Draggable>
              ))}
            </PlayArea>
            <Button variant="contained" color="primary" onClick={verifyOrder} sx={{ mt: 2 }}>
              Vérifier
            </Button>
            {isCorrect !== null && (
              <Box mt={2} fontSize="1.4rem" color={isCorrect ? 'green' : 'red'}>
                {isCorrect ? 'L’ordre est correct!' : 'L’ordre est incorrect. Essayez à nouveau!'}
              </Box>
            )}
          </Container>
        </Swipe_Section>

        <Swipe_Section ref={section3Ref}>
          <ContinueButton>Exercice 2 </ContinueButton>
          <Chap10 />
        </Swipe_Section>
        <Swipe_Section ref={section4Ref}>
          <ContinueButton>Exercice 3 </ContinueButton>
          <P2A4 />
        </Swipe_Section>

        <Swipe_Section ref={section5Ref}>
          <ContinueButton>QCM</ContinueButton>
          <QCMM5 />
        </Swipe_Section>
      </SwipeContainer2>
    </Container_Progress_Bar>
  );
};

export default MesurAire;

