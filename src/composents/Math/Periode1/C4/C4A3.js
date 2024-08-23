import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, Card } from '@mui/material';
import styled from 'styled-components';
import ActivityWrapper from "../../Reusable Components/Slides Content/ActivityWrapper";
import { useAuth } from "../../../Sign_in/v2/context/AuthContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../Sign_in/v2/firebase";
import { FormulaText, StyledBox } from "../../../Styles/MajorStyles";

const ButtonContainer = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.img`
  width: 150px;
  height: auto;
  margin-right: 20px;
`;

const CardContainer = styled(Card)`
  background-color: white;
  width: 100%;
  padding: 20px;
  border-radius: 40px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #E1F5FE;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
    transform: translateY(-5px);
  }
`;

const Exercice2 = () => {
  const [subValue, setSubValue] = useState(0);
  const [subResult, setSubResult] = useState(0);
  const [userSubAnswer, setUserSubAnswer] = useState(0);
  const [isSubCorrect, setIsSubCorrect] = useState(null);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const [entryTime, setEntryTime] = useState(null);
  const { currentUser } = useAuth();

  useEffect(() => {
    generateNewValues();
    const now = new Date();
    setEntryTime(now);
  }, []);

  const generateNewValues = () => {
    const sub = Math.floor(Math.random() * 50) + 1;
    const subResult = Math.floor(Math.random() * 50) + 50;
    setSubValue(sub);
    setSubResult(subResult);
    setUserSubAnswer(0);
    setIsSubCorrect(null);
  };

  const verifyAnswer = () => {
    const isCorrect = userSubAnswer === subResult + subValue;
    setIsSubCorrect(isCorrect);
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
    }
    setQuestionsAnswered(questionsAnswered + 1);
    if (questionsAnswered + 1 >= 7) {
      setIsLastQuestion(true);
    } else {
      setTimeout(generateNewValues, 3000);
    }
  };

  const handleFinalSubmit = async () => {
    const endTime = new Date();
    const timeSpent = (endTime - entryTime) / 1000;

    const activityData = {
      userId: currentUser.uid,
      activityName: "Exercice2",
      entryTime: entryTime.toISOString(),
      timeSpent: timeSpent,
      totalQuestions: 7,
      correctAnswers,
      incorrectAnswers,
      allAnswersCorrect: correctAnswers === 7,
    };

    try {
      await addDoc(collection(db, "activities"), activityData);
      console.log("Activity data sent:", activityData);
    } catch (e) {
      console.error("Error sending activity data:", e);
    }

    generateNewValues();
  };

  return (
    <ActivityWrapper
      activityTitle={"Exercice2"}
      explanationVideoUrl={"/Videos/exercice2.mp4"}
      onSubmit={handleFinalSubmit}
      user={currentUser}
      activityName="Exercice2"
    >
      <Box display="flex" alignItems="center">
        <ImageContainer src="/images/Math/C/C1/pro2.png" alt="Activity" />
        <CardContainer>
          <Typography variant="h6">
            Je pense à un nombre. Je lui retranche {subValue}, je trouve {subResult}. Quel est ce nombre ?
          </Typography>
        </CardContainer>
      </Box>
      <br />
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <TextField
          variant="outlined"
          type="number"
          value={userSubAnswer}
          onChange={(e) => setUserSubAnswer(parseInt(e.target.value))}
          label="Votre réponse"
          style={{ marginTop: "20px", width: "70%" }}
        />
        {isSubCorrect !== null && (
          <Typography color={isSubCorrect ? 'success.main' : 'error.main'}>
            {isSubCorrect ? 'Correct!' : 'Incorrect.'}
          </Typography>
        )}
      </Box>
      <ButtonContainer>
        <Button variant="contained" color="primary" onClick={verifyAnswer}>
          Répondre
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleFinalSubmit}
          style={{ marginLeft: "20px" }}
          disabled={!isLastQuestion}
        >
          Terminer
        </Button>
      </ButtonContainer>
    </ActivityWrapper>
  );
};

export default Exercice2;
