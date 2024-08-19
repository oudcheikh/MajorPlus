import React, { useState, useEffect } from 'react';
import { Button, Card, CardContent, Box, TextField, Typography } from '@mui/material';
import useSound from 'use-sound';
import correctSound from '../../../sounds/correct.mp3';
import incorrectSound from '../../../sounds/incorrect.mp3';
import ActivityWrapper from '../../Reusable Components/Slides Content/ActivityWrapper';
import { useAuth } from '../../../Sign_in/v2/context/AuthContext';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../Sign_in/v2/firebase";

const TOTAL_QUESTIONS = 7;  // Nombre total de questions

const C5A4 = () => {
  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const [entryTime, setEntryTime] = useState(null);
  const { currentUser } = useAuth();
  const [playCorrect] = useSound(correctSound);
  const [playIncorrect] = useSound(incorrectSound);

  useEffect(() => {
    const now = new Date();
    setEntryTime(now);
    generateQuestion();
  }, []);

  const generateQuestion = () => {
    const newQuestions = [
      generateSingleQuestion(),
      generateSingleQuestion(),
      generateSingleQuestion(),
    ];
    setQuestions(newQuestions);
    setShowMessage(false);
    setShowCongratulations(false);
    setAnswer('');
  };

  const generateSingleQuestion = () => {
    const numJumps = Math.floor(Math.random() * 10) + 1;
    const jumpDistance = Math.floor(Math.random() * 10) + 1;
    return { numJumps, jumpDistance };
  };

  const calculateTotalDistance = () => {
    const totalDistance = questions.reduce((sum, q) => sum + q.numJumps * q.jumpDistance, 0);
    setShowMessage(true);
    if (parseInt(answer) === totalDistance) {
      setCorrectAnswers(correctAnswers + 1);
      setShowCongratulations(true);
      playCorrect();
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
      setShowCongratulations(false);
      playIncorrect();
    }

    setQuestionsAnswered(questionsAnswered + 1);
    if (questionsAnswered + 1 >= TOTAL_QUESTIONS) {
      setIsLastQuestion(true);
    } else {
      setTimeout(() => {
        generateQuestion();
      }, 3000); // Attend 3 secondes avant de passer à la question suivante
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    calculateTotalDistance();
  };

  const handleReset = () => {
    setQuestionsAnswered(0);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
    setIsLastQuestion(false);
    setAnswer('');  // Réinitialise le champ de texte
    generateQuestion();  // Recommence avec la première question
  };

  const checkAnswer = () => {
    const allAnswersCorrect = correctAnswers === TOTAL_QUESTIONS;
    return { allAnswersCorrect, totalQuestions: TOTAL_QUESTIONS, correctAnswers, incorrectAnswers };
  };

  const handleClickOpen = () => {
    sendActivityData();
    handleReset(); // Réinitialiser l'activité après avoir envoyé les données
  };

  const sendActivityData = async () => {
    const endTime = new Date();
    const timeSpent = (endTime - entryTime) / 1000; // Temps passé en secondes
    const { allAnswersCorrect, totalQuestions, correctAnswers, incorrectAnswers } = checkAnswer();

    const activityData = {
      userId: currentUser.uid,
      activityName: "C5A4",
      entryTime: entryTime.toISOString(),
      timeSpent: timeSpent,
      totalQuestions,
      correctAnswers,
      incorrectAnswers,
      allAnswersCorrect
    };

    try {
      await addDoc(collection(db, 'users',currentUser.uid, 'activities'), activityData);
      console.log('Activity data sent:', activityData);
    } catch (e) {
      console.error('Error sending activity data:', e);
    }
  };

  return (
    <ActivityWrapper
      activityTitle={"C5A4"}
      explanationVideoUrl={"/Videos/kangaroo_jump.mp4"}
      onSubmit={checkAnswer}
      user={currentUser}
      activityName="C5A4"
    >
      <Card style={{ minHeight: '400px' }}>
        <CardContent>
          <Box my={2}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={"/images/Math/C/imagesC6/kangaro.png"}
                alt="kangaroo"
                style={{
                  width: '100px',
                  marginBottom: '10px',
                  marginRight: '10px',
                }}
              />
              <Card
                style={{
                  margin: '20px',
                  
                  borderRadius: '40px',
                  maxWidth: '300px',
                  boxShadow: '4px 4px 4px 8px rgba(0.1, 0.1, 0.1, 0.1)',
                  padding: '2px',
                  marginLeft: '10px',
                  marginTop: '-50px',
                  marginRight: '10px',
                  textAlign: 'center',
                  transition: 'transform 0.3s',
                  "&:hover": {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <CardContent>
                  {questions.map((q, index) => (
                    <Typography key={index} variant="body1">
                      J'ai sauté {q.numJumps} fois sur {q.jumpDistance} mètres.
                    </Typography>
                  ))}
                  {!showMessage && (
                    <Typography variant="body1">
                      Quelle est la distance totale parcourue ?
                    </Typography>
                  )}
                
                </CardContent>
              </Card>
            </div>
          </Box>
          <Box my={2}>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Réponse"
                type="number"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                fullWidth
              />
              <Box display="flex" justifyContent="center" mt={2}>
                <Button 
                  variant="contained" 
                  color="primary" 
                  type="submit" 
                  style={{ marginRight: '10px' }}
                  disabled={showMessage}
                >
                  Répondre
                </Button>
                <Button 
                  variant="contained" 
                  color="primary" 
                  disabled={!isLastQuestion}
                  onClick={handleClickOpen}
                >
                  Terminer
                </Button>
              </Box>
            </form>
            {showCongratulations && (
                    <Typography variant="body1" style={{ color: 'green' }}>
                      Bravo! Bonne réponse!
                    </Typography>
                  )}
                  {showMessage && !showCongratulations && (
                    <Typography variant="body1" style={{ color: 'red' }}>
                      Mauvaise réponse. 
                    </Typography>
                  )}
          </Box>
        </CardContent>
      </Card>
    </ActivityWrapper>
  );
}

export default C5A4;
