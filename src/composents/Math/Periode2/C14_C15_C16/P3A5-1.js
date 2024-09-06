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

import LinearProgressBar from "../../Reusable Components/ProgressIndicator";
import correctSound from '../../../sounds/correct.mp3';
import incorrectSound from '../../../sounds/incorrect.mp3';
import ActivityWrapper from "../../Reusable Components/Slides Content/ActivityWrapper";
import { useAuth } from "../../../Sign_in/v2/context/AuthContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../Sign_in/v2/firebase";


function P3A5_1() {
  
  
  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState('');
  const [answer1, setAnswer1] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [play] = useSound(correctSound)
  const [play1] = useSound(incorrectSound)
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [entryTime, setEntryTime] = useState(null);
  const { currentUser } = useAuth();


  const totalQuestions = 3;


  useEffect(() => {
    const now = new Date();
    setEntryTime(now);
    
  }, []);



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

  };
  const generateQuestion = () => {
    const newQuestions = [
      generateSingleQuestion(),

    ];
    setQuestions(newQuestions);
    setShowMessage(false);
    setShowCongratulations(false);
    setAnswer('');
    setAnswer1('');
  };

  const generateSingleQuestion = () => {
    const numpieces = Math.floor(Math.random() * 10) + 1;
    const nomTour = Math.floor(Math.random() * 10) + 10;
    return { numpieces, nomTour };
  };

  const calculateTotalDistance = () => {
    const longTour = questions.reduce((sum, q) => sum + Math.floor(q.numpieces), 0 );
    const rest = questions.reduce((sum, q) => sum + (q.nomTour), 0); 
    setShowMessage(true);
    if (parseInt(answer) === longTour && parseInt(answer1) === rest) {
      setShowCongratulations(true);
      setQuestionsAnswered(questionsAnswered+1)
      play();
    } else {
      setShowCongratulations(false);
      play1();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    calculateTotalDistance();
    
   
  };
  

  const handleNewQuestion = () => {
    generateQuestion();
  };
  
  useEffect(() => {
    generateQuestion(); // Call the function when the component mounts
  }, []);

  


  return (
    <ActivityWrapper
    activityTitle={"FractionActivity"}
    explanationVideoUrl={"/Videos/your_video_url.mp4"}
    onSubmit={checkAnswer}
    user={currentUser}
    activityName="FractionActivity">

<LinearProgressBar currentStep={questionsAnswered} totalSteps={totalQuestions} />
    <Card style={{ minHeight: '400px' }}>
      <CardContent>
        <Box my={2}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={"/images/Math/periode2/compte.gif"}
              
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
                {!showMessage  && questions.map((q, index) => (
                  <Typography key={index} variant="body1" style={{ color: '#ffffff' }}>
                    Sidi a pris {q.numpieces} pieces d une gateau qui contient {q.nomTour} pieces,idenifier le numerateur et le denomnateur.
                  </Typography>
                ))}
                {showCongratulations && (
                  <Typography variant="body1" style={{ color: '#ffffff' }}>
                    Félicitations! Vous avez donné la bonne réponse!
                  </Typography>
                )}
                {showMessage && !showCongratulations && (
                  <Typography variant="body1" style={{ color: '#ffffff' }}>
                    Réponse incorrecte. Essayez encore!
                  </Typography>
                )}
              </CardContent>
            </Card>
          </div>
        </Box>
        {!showMessage && (
          <Box my={2}>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Numerateur"
                type="number"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                fullWidth
              />
              <h1></h1>
                  <TextField
                    label="Denoimanteur"
                    type="number"
                    value={answer1}
                    onChange={(e) => setAnswer1(e.target.value)}
                    fullWidth
                  />
              <Button variant="contained" color="primary" type="submit" style={{ marginTop: '10px' }}>
                Répondre
              </Button>
            </form>
          </Box>
        )}
        {showMessage && (
          <Box my={2}>
            <Button variant="contained" color="primary" onClick={handleNewQuestion} style={{ marginTop: '10px' }}>
              Générer une nouvelle question
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
    </ActivityWrapper>
  );

};

export default P3A5_1;
