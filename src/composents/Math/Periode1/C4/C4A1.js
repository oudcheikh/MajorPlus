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

const Exercice1 = () => {
  const [addValue, setAddValue] = useState(0);
  const [addResult, setAddResult] = useState(0);
  const [userAddAnswer, setUserAddAnswer] = useState(0);
  const [isAddCorrect, setIsAddCorrect] = useState(null);
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
    const add = Math.floor(Math.random() * 50) + 1;
    const addResult = Math.floor(Math.random() * 100) + 50;
    setAddValue(add);
    setAddResult(addResult);
    setUserAddAnswer(0);
    setIsAddCorrect(null);
  };

  const verifyAnswer = () => {
    const isCorrect = userAddAnswer === addResult - addValue;
    setIsAddCorrect(isCorrect);
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
      activityName: "Exercice1",
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
      activityTitle={"Exercice1"}
      explanationVideoUrl={"/Videos/exercice1.mp4"}
      onSubmit={handleFinalSubmit}
      user={currentUser}
      activityName="Exercice1"
    >
      <Box display="flex" alignItems="center">
        <ImageContainer src="/images/Math/C/C1/pro2.png" alt="Activity" />
        <CardContainer>
          <Typography variant="h6">
            Je pense à un nombre. Je lui ajoute {addValue}, je trouve {addResult}. Quel est ce nombre ?
          </Typography>
        </CardContainer>
      </Box>
      <br />
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <TextField
          variant="outlined"
          type="number"
          value={userAddAnswer}
          onChange={(e) => setUserAddAnswer(parseInt(e.target.value))}
          label="Votre réponse"
          style={{ marginTop: "20px", width: "70%" }}
        />
        {isAddCorrect !== null && (
          <Typography color={isAddCorrect ? 'success.main' : 'error.main'}>
            {isAddCorrect ? 'Correct!' : 'Incorrect.'}
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

export default Exercice1;
