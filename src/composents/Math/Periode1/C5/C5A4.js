import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, Card, CardContent } from '@mui/material';
import { useAuth } from '../../../Sign_in/v2/context/AuthContext';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../../Sign_in/v2/firebase';
import ActivityWrapper from '../../Reusable Components/Slides Content/ActivityWrapper';
import useSound from 'use-sound';
import correctSound from '../../../sounds/correct.mp3';
import incorrectSound from '../../../sounds/incorrect.mp3';

function C5A2() {
  const { currentUser } = useAuth();
  const [completeTrays, setCompleteTrays] = useState(4);
  const [userAnswers, setUserAnswers] = useState("");
  const [areCorrect, setAreCorrect] = useState(null);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const [entryTime, setEntryTime] = useState(null);
  const [playCorrect] = useSound(correctSound);
  const [playIncorrect] = useSound(incorrectSound);

  useEffect(() => {
    const now = new Date();
    setEntryTime(now);
    generateNumbers();
  }, []);

  const generateNumbers = () => {
    setCompleteTrays(Math.floor(Math.random() * 10) + 1);
    setUserAnswers("");
    setAreCorrect(null);
  };

  const checkAnswer = () => {
    const correctAnswer = completeTrays * 12;
    const isCorrect = parseInt(userAnswers) === correctAnswer;

    if (isCorrect) {
      playCorrect();
      setTimeout(() => {
        setAreCorrect(true);
        setCorrectAnswers(prev => prev + 1);
      }, 500); // Affiche le message après le son
    } else {
      playIncorrect();
      setTimeout(() => {
        setAreCorrect(false);
        setIncorrectAnswers(prev => prev + 1);
      }, 500); // Affiche le message après le son
    }

    setQuestionsAnswered(prev => {
      const next = prev + 1;
      if (next >= 7) {
        setIsLastQuestion(true);
      } else {
        setTimeout(generateNumbers, 1000); // Génère la nouvelle question après un petit délai
      }
      return next;
    });
  };

  const handleReset = () => {
    generateNumbers();
    setQuestionsAnswered(0);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
    setIsLastQuestion(false);
  };

  const sendActivityData = async () => {
    if (!currentUser || !currentUser.uid) {
      console.error('User is not logged in.');
      return;
    }

    const endTime = new Date();
    const timeSpent = (endTime - entryTime) / 1000;
    const activityData = {
      userId: currentUser.uid,
      activityName: "C5A2",
      entryTime: entryTime.toISOString(),
      timeSpent: timeSpent,
      totalQuestions: questionsAnswered,
      correctAnswers: correctAnswers,
      incorrectAnswers: incorrectAnswers,
      allAnswersCorrect: correctAnswers === questionsAnswered
    };

    try {
      await addDoc(collection(db, 'activities'), activityData);
      console.log('Activity data sent:', activityData);
    } catch (e) {
      console.error('Error sending activity data:', e);
    }
  };

  const handleFinish = () => {
    sendActivityData();
    handleReset();
  };

  return (
    <ActivityWrapper
      activityTitle={"C5A2 - Œufs"}
      explanationVideoUrl={"/Videos/number_sorting.mp4"}
      onSubmit={sendActivityData}
      user={currentUser}
      activityName="C5A2"
    >
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h6" gutterBottom>Exercice 2</Typography>
            <img src={"/images/Math/C/C5/oeuf.png"} alt="Œufs" style={{width:'60%'}} />
            <br></br>
            <br></br>
            <br></br>
            <Typography variant="body1" gutterBottom>
              Il reste sur le comptoir de la boutique {completeTrays} plateaux d'œufs complets. Combien d'œufs reste-t-il ?
            </Typography>
            <TextField
              variant="outlined"
              type="number"
              value={userAnswers}
              onChange={e => setUserAnswers(e.target.value)}
              label="Votre réponse"
              fullWidth
            />
            <Box mt={2}>
              <Button variant="contained" color="primary" onClick={checkAnswer} disabled={isLastQuestion}>
                Répondre
              </Button>
              <Button variant="contained" color="primary" onClick={handleFinish} disabled={!isLastQuestion}>
                Terminer
              </Button>
            </Box>
            {areCorrect !== null && (
              <Typography color={areCorrect ? 'success.main' : 'error.main'}>
                {areCorrect ? 'Bravo, c\'est correct!' : 'Désolé, ce n\'est pas correct.'}
              </Typography>
            )}
          </CardContent>
        </Card>
      </Box>
    </ActivityWrapper>
  );
}

export default C5A2;
