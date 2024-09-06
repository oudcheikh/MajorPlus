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


function P2A3_2() {
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
  const totalQuestions = 5;


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
    const exclusionList = [29, 11, 13, 17, 23, 13, 19];
    let randomNumber;

    do {
      randomNumber = Math.floor(Math.random() * 21) + 10;
    } while (exclusionList.includes(randomNumber));

    return { randomNumber };
  };

  const generateProductcom = (number) => {
    const combinations = [];
    for (let a = 2; a <= Math.sqrt(number); a++) {
      if (number % a === 0) {
        const b = number / a;
        combinations.push([a, b]);
      }
    }
    return combinations;
  };

  let lastInnerArray = [];
  const singleQuestionResult = questions.reduce((sum, q) => sum + Math.floor(q.randomNumber), 0);
  const x = generateProductcom(singleQuestionResult);
  for (const innerArray of x) {
    const firstNumber = innerArray[0];
    const secondNumber = innerArray[1];
    lastInnerArray = [firstNumber, secondNumber];
  }

  const handleValidate = () => {
    setQuestionsAnswered(prev => prev + 1);
    setIsValid((parseInt(answer) * parseInt(answer1) === lastInnerArray[0] * lastInnerArray[1]));
    if (isValid) {
      setCorrectAnswers(correctAnswers + 1);
      play();
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
      play1();
    }

    if (questionsAnswered + 1 < 5) { // Ajustez le nombre de questions si nécessaire
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
      activityName: "P2A3_2",
      entryTime: entryTime.toISOString(),
      timeSpent: timeSpent,
      totalQuestions,
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
      activityTitle={"P2A3_2"}
      explanationVideoUrl={"/Videos/your_video_url.mp4"}
      onSubmit={checkAnswer}
      user={currentUser}
      activityName="P2A3_2"
    >
      <LinearProgressBar currentStep={questionsAnswered} totalSteps={totalQuestions} />

      <Card style={{ minHeight: '400px' }}>
        <CardContent>
          <Box my={2}>
            <img
              src={"/images/Math/C/imagesC12/owl2.png"}
              alt="owl"
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
                    La maîtresse veut ranger tous les élèves de la classe, qui contient {q.randomNumber} élèves. Comment pourrais-tu les placer de manière à ce que chaque rang contienne le même nombre d'élèves ?
                  </Typography>
                ))}
              </CardContent>
            </Card>
          </Box>
          <Box my={2}>
            <form onSubmit={(e) => { e.preventDefault(); handleValidate(); }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <TextField
                  label="Nombre d'élèves par rang"
                  type="number"
                  value={answer}
                  onChange={(e) => handleInputChange(e, setAnswer)}
                  style={{ marginRight: '10px' }}
                  required
                />
                <span style={{ fontSize: '18px', marginRight: '10px' }}>×</span>
                <TextField
                  label="Nombre de rangs"
                  type="number"
                  value={answer1}
                  onChange={(e) => handleInputChange(e, setAnswer1)}
                  required
                  style={{ marginLeft: '10px' }}
                />
              </div>
              {/* <Button variant="contained" color="primary" type="submit" style={{ marginTop: '10px' }}>
                Répondre
              </Button> */}

              <Box display="flex" justifyContent="center" mt={2}>
                <Button variant="contained" color="primary" type="submit" style={{ marginRight: '10px' }} disabled={isLastQuestion}>
                  Répondre
                </Button>
                <Button variant="contained" color="primary" disabled={!isLastQuestion} onClick={handleClickOpen} >
                  Terminer
                </Button>
              </Box>
            </form>
          </Box>
          {/* <Box my={2}>
            <Button variant="contained" color="primary" disabled={!isLastQuestion} onClick={handleClickOpen} style={{ marginTop: '10px' }}>
              Terminer
            </Button>
          </Box> */}
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

export default P2A3_2;
