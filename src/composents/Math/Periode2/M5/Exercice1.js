import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import { Button, Container, Box, Card, CardContent, Typography } from '@mui/material';

import ActivityWrapper from "../../Reusable Components/Slides Content/ActivityWrapper";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../Sign_in/v2/firebase";

import { useAuth } from '../../../Sign_in/v2/context/AuthContext';
import styled from "styled-components";
import useSound from "use-sound";
import correctSound from '../../../sounds/correct.mp3';
import incorrectSound from '../../../sounds/incorrect.mp3';

const ButtonContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '20px',
});

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

function Exercice1() {
  const [play] = useSound(correctSound);
  const [play1] = useSound(incorrectSound);

  const [entryTime, setEntryTime] = useState(null);

  const [isAnsweredCorrectly, setIsAnsweredCorrectly] = useState(false);
  const [isLastStep, setIsLastStep] = useState(false);
  const [step, setStep] = useState(1);

  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const { currentUser } = useAuth();
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const [resetKey, setResetKey] = useState(0); // Clé de réinitialisation

  useEffect(() => {
    const now = new Date();
    setEntryTime(now);
  }, [resetKey]); // Ajout de resetKey pour redémarrer l'activité

  const targetZones = [
    { id: 1, x: 10, width: 50 },
    { id: 2, x: 70, width: 55 },
    { id: 3, x: 135, width: 60 },
    { id: 4, x: 205, width: 65 },
    { id: 5, x: 280, width: 70 },
  ];

  const [images, setImages] = useState(() => 
    targetZones.map(zone => ({
      ...zone,
      y: Math.floor(Math.random() * 150),
      height: zone.width,
      color: ['#FF6B6B', '#4ECDC4', '#FFD166', '#8338EC', '#FF9F1C'][zone.id - 1],
    }))
  );

  const [isCorrect, setIsCorrect] = useState(null);

  const sendActivityData = async () => {
    const endTime = new Date();
    const timeSpent = (endTime - entryTime) / 1000;
    const { allAnswersCorrect, totalQuestions, correctAnswers, incorrectAnswers } = checkAnswer();

    const activityData = {
      userId: currentUser.uid,
      activityName: "NumberTable",
      entryTime: entryTime.toISOString(),
      timeSpent: timeSpent,
      totalQuestions,
      correctAnswers,
      incorrectAnswers,
      allAnswersCorrect
    };

    try {
      await addDoc(collection(db, 'activities'), activityData);
      console.log('Activity data sent:', activityData);
    } catch (e) {
      console.error('Error sending activity data:', e);
    }
  };

  const checkAnswer = () => {
    const totalQuestions = 1;
    const allAnswersCorrect = correctAnswers === totalQuestions;
    const incorrectAnswers = totalQuestions - correctAnswers;
    return { allAnswersCorrect, totalQuestions, correctAnswers, incorrectAnswers };
  };

  const resetExercise = () => {
    setCorrectAnswers(0);
    setIsAnsweredCorrectly(false);
    setIsLastStep(false);
    setStep(1);
    setIsLastQuestion(false);

    const newTargetZones = [
      { id: 1, x: 10, width: 50 },
      { id: 2, x: 70, width: 55 },
      { id: 3, x: 135, width: 60 },
      { id: 4, x: 205, width: 65 },
      { id: 5, x: 280, width: 70 },
    ];

    setImages(newTargetZones.map(zone => ({
      ...zone,
      y: Math.floor(Math.random() * 150),
      height: zone.width,
      color: ['#FF6B6B', '#4ECDC4', '#FFD166', '#8338EC', '#FF9F1C'][zone.id - 1],
    })));
    
    setIsCorrect(null);
    setEntryTime(new Date());

    // Forcer le re-rendu en changeant la clé
    setResetKey(prevKey => prevKey + 1);
  };

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
    setIsLastQuestion(true);

    for (let i = 0; i < images.length - 1; i++) {
      if (images[i].x + images[i].width > images[i + 1].x || images[i].y + images[i].height < 250) {
        setIsCorrect(false);
        return;
      }
    }

    setIsCorrect(true);
    setCorrectAnswers(1);
  };

  const terminer = () => {
    sendActivityData();
    resetExercise(); // Réinitialiser l'exercice après l'envoi des données
  };

  return (
    <ActivityWrapper
      key={resetKey} // Utiliser resetKey pour forcer le re-rendu
      activityTitle={"Mesures d'aires"}
      explanationVideoUrl={"/Videos/number_sorting.mp4"}
      onSubmit={checkAnswer}
      user={currentUser}
      activityName="Mesures d'aires"
    >
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
          {images.map((img, index) => (
            <Draggable
              key={`${img.id}-${index}`}
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
        {isCorrect !== null && (
          <Box mt={2} fontSize="1.4rem" color={isCorrect ? 'green' : 'red'}>
            {isCorrect ? 'L’ordre est correct!' : 'L’ordre est incorrect. Essayez à nouveau!'}
          </Box>
        )}
      </Container>

      <ButtonContainer>
        <Button variant="contained" style={{ margin: "20px", marginRight: "80px", marginLeft: "1px" }} onClick={verifyOrder} disabled={isLastQuestion}>
          Répondre
        </Button>
        <Button variant="contained" disabled={!isLastQuestion} onClick={terminer}> Terminer </Button>
      </ButtonContainer>
    </ActivityWrapper>
  );
}

export default Exercice1;
