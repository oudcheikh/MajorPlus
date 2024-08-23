import React, { useState, useEffect } from 'react';
import { Button, Card, CardContent, Box, TextField, Typography } from '@mui/material';
import useSound from 'use-sound';
import correctSound from '../../../sounds/correct.mp3';
import incorrectSound from '../../../sounds/incorrect.mp3';
import ActivityWrapper from '../../Reusable Components/Slides Content/ActivityWrapper';
import { useAuth } from '../../../Sign_in/v2/context/AuthContext';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../Sign_in/v2/firebase";

const TOTAL_QUESTIONS = 4;  // Nombre total de questions

function C5A5() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); 
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
      { question: "Combien de secondes y a-t-il dans une heure, 10 heures, et 3 jours ?", answer: 60 * 60 + 10 * 60 * 60 + 3 * 24 * 60 * 60 },
      { question: "Un enfant entre 10 et 15 ans respire environ 20 fois par minute. Combien de fois respire-t-il par jour ?", answer: 20 * 60 * 24 },
      { question: "Sidi gagne 20 000 MRU par mois. Combien gagne-t-il par an ?", answer: 20000 * 12 },
      { question: "Un camionnette peut transporter 1 500 kg de briques. Combien de voyages doit-on faire pour transporter 30 tonnes de briques ?", answer: 30000 / 1500 },
    ];
    setQuestions(newQuestions);
    setShowMessage(false);
    setShowCongratulations(false);
    setAnswer('');
  };

  const calculateAnswer = () => {
    setShowMessage(true);
    if (parseInt(answer) === questions[currentIndex]?.answer) {
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
        handleNewQuestion();
      }, 3000); // Attend 3 secondes avant de passer à la question suivante
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    calculateAnswer();
  };

  const handleNewQuestion = () => {
    setCurrentIndex((currentIndex + 1) % questions.length);
    setShowMessage(false);
    setShowCongratulations(false);
    setAnswer('');
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
    setQuestionsAnswered(0);
    setIsLastQuestion(false);
    setAnswer('');
    setShowMessage(false);
    setShowCongratulations(false);
    generateQuestion();
  };

  const checkAnswer = () => {
    const allAnswersCorrect = correctAnswers === TOTAL_QUESTIONS;
    return { allAnswersCorrect, totalQuestions: TOTAL_QUESTIONS, correctAnswers, incorrectAnswers };
  };

  const handleClickOpen = () => {
    sendActivityData();
    handleReset(); // Réinitialiser l'activité après l'envoi des données
  };

  const sendActivityData = async () => {
    const endTime = new Date();
    const timeSpent = (endTime - entryTime) / 1000; // Temps passé en secondes
    const { allAnswersCorrect, totalQuestions, correctAnswers, incorrectAnswers } = checkAnswer();

    const activityData = {
      userId: currentUser.uid,
      activityName: "C5A5",
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
      activityTitle={"C5A5"}
      explanationVideoUrl={"/Videos/some_video.mp4"}
      onSubmit={checkAnswer}
      user={currentUser}
      activityName="C5A5"
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" my={2} padding={'10px'}>
        <img
          src={"/images/Math/C/C5/pro3.png"}
          alt="enfant"
          style={{
            width: "60%",
            height: "auto",
          }}
        />
        <Card
          style={{
            boxShadow: '4px 4px 4px 8px rgba(0.1, 0.1, 0.1, 0.1)',
            width: "45%",
            borderRadius: '20px',
            backgroundColor: '#1877f2',
            padding: '1px',
            color: '#ffffff',
          }}
        >
          <CardContent>
            {questions[currentIndex] && (
              <>
                <Typography variant="body1" style={{ color: '#ffffff' }}>
                  {questions[currentIndex].question}
                </Typography>
                
              </>
            )}
          </CardContent>
        </Card>
      </Box>
      <Box my={2}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Réponse"
            type="number"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            style={{ width: '80%' }}
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
          {showMessage && (
                  <Typography variant="body1" style={{ marginTop: '10px', color: showCongratulations ? 'green' : 'red' }}>
                    {showCongratulations ? "Félicitations! Vous avez donné la bonne réponse!" : "Réponse incorrecte."}
                  </Typography>
                )}
        </form>
      </Box>
    </ActivityWrapper>
  );
}

export default C5A5;
