import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardContent,
  Box,
  TextField,
  Typography,
} from "@mui/material";
import useSound from "use-sound";
import correctSound from '../../../sounds/correct.mp3';
import incorrectSound from '../../../sounds/incorrect.mp3';
import ActivityWrapper from "../../Reusable Components/Slides Content/ActivityWrapper";
import { useAuth } from "../../../Sign_in/v2/context/AuthContext";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../../Sign_in/v2/firebase";

function P2A3_1() {
  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState('');
  const [answer1, setAnswer1] = useState('');
  const [isValid, setIsValid] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const [entryTime, setEntryTime] = useState(null);
  const { currentUser } = useAuth();
  const [play] = useSound(correctSound);
  const [play1] = useSound(incorrectSound);

  useEffect(() => {
    const now = new Date();
    setEntryTime(now);
    generateQuestion(); // Call the function when the component mounts
  }, []);

  const generateQuestion = () => {
    const newQuestions = [
      generateSingleQuestion(),
    ];
    setQuestions(newQuestions);
    setIsValid(null);
    setAnswer('');
    setAnswer1('');
  };

  const generateSingleQuestion = () => {
    const numpieces = Math.floor(Math.random() * 91) + 10;
    const nomTour = Math.floor(Math.random() * 10) + 1;
    return { numpieces, nomTour };
  };

  const handleValidate = () => {
    const longTour = questions.reduce((sum, q) => sum + Math.floor(q.numpieces / q.nomTour), 0);
    const rest = questions.reduce((sum, q) => sum + (q.numpieces % q.nomTour), 0);

    setQuestionsAnswered(prev => prev + 1);

    if (parseInt(answer) === longTour && parseInt(answer1) === rest) {
      setCorrectAnswers(correctAnswers + 1);
      setIsValid(true);
      play();
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
      setIsValid(false);
      play1();
    }

    if (questionsAnswered + 1 < 5) { // Vous pouvez ajuster le nombre de questions ici
      setTimeout(() => {
        generateQuestion();
      }, 3000);
    } else {
      setIsLastQuestion(true);
    }
  };

  const handleInputChange = (event, setter) => {
    setIsValid(null);
    setter(event.target.value);
  };

  const checkAnswer = () => {
    const totalQuestions = questionsAnswered;
    const allAnswersCorrect = correctAnswers === totalQuestions;
    return { allAnswersCorrect, totalQuestions, correctAnswers, incorrectAnswers };
  };

  const sendActivityData = async () => {
    const endTime = new Date();
    const timeSpent = (endTime - entryTime) / 1000; // Temps passé en secondes
    const { allAnswersCorrect, totalQuestions, correctAnswers, incorrectAnswers } = checkAnswer();

    const activityData = {
      userId: currentUser.uid,
      activityName: "P2A3_1",
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

  const handleClickOpen = () => {
    sendActivityData();
    handleReset();
  };

  const handleReset = () => {
    setQuestionsAnswered(0);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
    setIsLastQuestion(false);
    generateQuestion();
  };

  return (
    <ActivityWrapper
      activityTitle={"P2A3_1"}
      explanationVideoUrl={"/Videos/your_video_url.mp4"}
      onSubmit={checkAnswer}
      user={currentUser}
      activityName="P2A3_1"
    >
      <Card style={{ minHeight: '400px' }}>
        <CardContent>
          <img
            src={"/images/Math/periode2/compte.gif"}
            alt="mony"
            style={{
              width: '100px',
              marginBottom: '10px',
              marginRight: '10px',
            }}
          />
          <Box my={2}>
            <Card
              style={{
                borderRadius: '20px',
                backgroundColor: '#1877f2',
                padding: '10px',
              }}
            >
              <CardContent>
                {questions.map((q, index) => (
                  <Typography key={index} variant="body1" style={{ color: '#ffffff' }}>
                    Sidi a {q.numpieces} pièces. Il veut ranger les pièces en {q.nomTour} tours de même hauteur. Quelle sera la longueur de chaque tour et le nombre de pièces restantes ?
                  </Typography>
                ))}
              </CardContent>
            </Card>
          </Box>
          <Box my={2}>
            <form onSubmit={(e) => { e.preventDefault(); handleValidate(); }}>
              <TextField
                label="Longueur de tour"
                type="number"
                value={answer}
                onChange={(e) => handleInputChange(e, setAnswer)}
                fullWidth
              />
              <h1></h1>
              <TextField
                label="Reste"
                type="number"
                value={answer1}
                onChange={(e) => handleInputChange(e, setAnswer1)}
                fullWidth
              />
              <Button variant="contained" color="primary" type="submit" style={{ marginTop: '10px' }}>
                Répondre
              </Button>
            </form>
          </Box>
          <Box my={2}>
            <Button variant="contained" color="primary" disabled={!isLastQuestion} onClick={handleClickOpen} style={{ marginTop: '10px' }}>
              Terminer
            </Button>
          </Box>
          {isValid !== null && (
            <Box mt={2}>
              <Typography variant="body1" style={{ color: isValid ? '#28a745' : '#ff0000', textAlign: 'center' }}>
                {isValid ? "Félicitations! Vous avez donné la bonne réponse!" : "Réponse incorrecte. Essayez encore!"}
              </Typography>
            </Box>
          )}
        </CardContent>
      </Card>
    </ActivityWrapper>
  );
}

export default P2A3_1;
