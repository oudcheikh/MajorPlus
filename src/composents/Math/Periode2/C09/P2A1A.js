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
import LinearProgressBar from "../../Reusable Components/ProgressIndicator";
import ScoreComponent from "../../Reusable Components/Animation"; // Assurez-vous que le chemin est correct
import { SnackbarProvider, useSnackbar } from 'notistack';
import IntegrationNotistack from "../../Reusable Components/Snackbar";


function P3A4_1() {
  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState('');
  const [answer1, setAnswer1] = useState('');
  const [isValid, setIsValid] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const [showScoreComponent, setShowScoreComponent] = useState(false); // State to control ScoreComponent visibility
  const [entryTime, setEntryTime] = useState(null);
  const { currentUser } = useAuth();
  const [play] = useSound(correctSound);
  const [play1] = useSound(incorrectSound);
  const totalQuestions = 3;

  useEffect(() => {
    const now = new Date();
    setEntryTime(now);
    generateQuestion();
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
    const quotient = questions.reduce((sum, q) => sum + Math.floor(q.numpieces / q.nomTour), 0);
    const rest = questions.reduce((sum, q) => sum + (q.numpieces % q.nomTour), 0);

    setQuestionsAnswered(prev => prev + 1);

    if (parseInt(answer) === quotient && parseInt(answer1) === rest) {
      setCorrectAnswers(correctAnswers + 1);
      setIsValid(true);
      play();
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
      setIsValid(false);
      play1();
    }

    if (questionsAnswered + 1 < totalQuestions) {
      setTimeout(() => {
        generateQuestion();
      }, 2000);
    } else {
      setIsLastQuestion(true);
    }
  };

  const handleInputChange = (event, setter) => {
    setIsValid(null);
    setter(event.target.value);
  };

  const checkAnswer = () => {
    const allAnswersCorrect = correctAnswers === questionsAnswered;
    return { allAnswersCorrect, totalQuestions: questionsAnswered, correctAnswers, incorrectAnswers };
  };

  const sendActivityData = async () => {
    const endTime = new Date();
    const timeSpent = (endTime - entryTime) / 1000;
    const { allAnswersCorrect } = checkAnswer();

    const activityData = {
      userId: currentUser.uid,
      activityName: "P2A1",
      entryTime: entryTime.toISOString(),
      timeSpent: timeSpent,
      totalQuestions: questionsAnswered,
      correctAnswers,
      incorrectAnswers,
      allAnswersCorrect
    };

    try {
      await addDoc(collection(db, 'users', currentUser.uid, 'activities'), activityData);
      console.log('Activity data sent:', activityData);
    } catch (e) {
      console.error('Error sending activity data:', e);
    }

    setShowScoreComponent(true); // Show the ScoreComponent when "Terminer" is clicked
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
    setShowScoreComponent(false); // Hide the ScoreComponent when resetting
    generateQuestion();
  };

  return (
    <ActivityWrapper
      activityTitle={"P2A1"}
      explanationVideoUrl={"/Videos/your_video_url.mp4"}
      onSubmit={checkAnswer}
      user={currentUser}
      activityName="P2A1"
    >

      <LinearProgressBar currentStep={questionsAnswered} totalSteps={totalQuestions} />
      <Card style={{ minHeight: '400px' }}>
        <CardContent>
          <Box my={2}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={"images/Images/fteacherr1.png"}
                style={{
                  width: '100px',
                  marginBottom: '10px',
                  marginRight: '10px',
                }}
              />
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
                      Sara veut partager ses {q.numpieces} pièces de bonbons avec sa classe de {q.nomTour} élèves. Combien de bonbons chaque élève aura-t-il et quel est le reste ?
                    </Typography>
                  ))}
                </CardContent>
              </Card>
            </div>
          </Box>
          <Box my={2}>
            <form onSubmit={(e) => { e.preventDefault(); handleValidate(); }}>
              <TextField
                label="Nombre de bonbons par élève"
                type="number"
                value={answer}
                onChange={(e) => handleInputChange(e, setAnswer)}
                fullWidth
              />
              <h1></h1>
              <TextField
                label="Reste de bonbons"
                type="number"
                value={answer1}
                onChange={(e) => handleInputChange(e, setAnswer1)}
                fullWidth
              />
              {/* <Button variant="contained" color="primary" type="submit" style={{ marginTop: '10px' }}>
                Répondre
              </Button> */}




              <Box display="flex" justifyContent="center" mt={2}>
                <Button variant="contained" color="primary" type="submit" style={{ marginRight: '10px' }}   disabled={isLastQuestion}>
                  Répondre
                </Button>
                <Button variant="contained" color="primary" disabled={!isLastQuestion} onClick={handleClickOpen} >
                  Terminer
                </Button>
              </Box>
            </form>
          </Box>
          <Box my={2}>
            {/* <Button variant="contained" color="primary" disabled={!isLastQuestion} onClick={handleClickOpen} style={{ marginTop: '10px' }}>
              Terminer
            </Button> */}
          </Box>
          {isValid !== null && (
            <Box mt={2}>
              <Typography variant="body1" style={{ color: isValid ? '#28a745' : '#ff0000', textAlign: 'center' }}>
                {isValid ? "Félicitations! Vous avez donné la bonne réponse!" : "Réponse incorrecte. Essayez encore!"}
              </Typography>
            </Box>
          )}
          {showScoreComponent && <ScoreComponent />} {/* Display ScoreComponent */}
        </CardContent>




      </Card>
    </ActivityWrapper>
  );
}

export default P3A4_1;
