import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, Card, CardContent, Grid } from '@mui/material';
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

const Exercice3 = () => {
  const [values, setValues] = useState(new Array(9).fill(""));
  const [isMagic, setIsMagic] = useState(null);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const [entryTime, setEntryTime] = useState(null);
  const { currentUser } = useAuth();

  useEffect(() => {
    reset();
    const now = new Date();
    setEntryTime(now);
  }, []);

  const handleChange = (index) => (event) => {
    let newValues = [...values];
    newValues[index] = event.target.value;
    setValues(newValues);
  };

  const checkMagic = () => {
    const nums = values.map((value) => parseInt(value, 10));
    const sum = nums[0] + nums[1] + nums[2]; 

    for (let i = 0; i < 9; i += 3) {
      if (nums[i] + nums[i + 1] + nums[i + 2] !== sum) {
        setIsMagic(false);
        setIncorrectAnswers(incorrectAnswers + 1);
        setQuestionsAnswered(questionsAnswered + 1);
        return;
      }
    }
    
    for (let i = 0; i < 3; ++i) {
      if (nums[i] + nums[i + 3] + nums[i + 6] !== sum) {
        setIsMagic(false);
        setIncorrectAnswers(incorrectAnswers + 1);
        setQuestionsAnswered(questionsAnswered + 1);
        return;
      }
    }

    if (nums[0] + nums[4] + nums[8] !== sum || nums[2] + nums[4] + nums[6] !== sum) {
      setIsMagic(false);
      setIncorrectAnswers(incorrectAnswers + 1);
      setQuestionsAnswered(questionsAnswered + 1);
      return;
    }

    setIsMagic(true);
    setCorrectAnswers(correctAnswers + 1);
    setQuestionsAnswered(questionsAnswered + 1);

    if (questionsAnswered + 1 >= 7) {
      setIsLastQuestion(true);
    } else {
      setTimeout(reset, 3000);
    }
  };

  const reset = () => {
    let newValues = new Array(9).fill("");
    for (let i = 0; i < 4; ++i) {
      let position, number;
      do {
        position = Math.floor(Math.random() * 9);
        number = Math.floor(Math.random() * 9) + 1;
      } while (newValues[position] !== "");
      newValues[position] = number.toString();
    }
    setValues(newValues);
    setIsMagic(null);
  };

  const handleFinalSubmit = async () => {
    const endTime = new Date();
    const timeSpent = (endTime - entryTime) / 1000;

    const activityData = {
      userId: currentUser.uid,
      activityName: "Exercice3",
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

    reset(); 
  };

  return (
    <ActivityWrapper
      activityTitle={"Exercice3"}
      explanationVideoUrl={"/Videos/exercice3.mp4"}
      onSubmit={handleFinalSubmit}
      user={currentUser}
      activityName="Exercice3"
    >
      <Box display="flex" alignItems="center">
        <ImageContainer src="/images/Math/C/C1/pro2.png" alt="Activity" />
        <CardContainer>
          <Typography variant="h6">
            Un carré "magique" est un carré où les sommes des nombres en colonne, en ligne et en diagonale sont égales.
            Complète le carré magique suivant :
          </Typography>
        </CardContainer>
      </Box>
      <br />
      <Grid container spacing={1} justifyContent="center">
        {[...Array(9)].map((_, index) => (
          <Grid item xs={4} key={index}>
            <TextField 
              variant="outlined" 
              type="number" 
              value={values[index]} 
              onChange={handleChange(index)} 
              inputProps={{ min: "1", max: "9", step: "1" }}
            />
          </Grid>
        ))}
      </Grid>
      <ButtonContainer>
        <Button variant="contained" color="primary" onClick={checkMagic}>
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
      {isMagic !== null && (
        <Typography variant="h6" color={isMagic ? "success.main" : "error.main"}>
          {isMagic ? "C'est un carré magique !" : "Ce n'est pas un carré magique."}
        </Typography>
      )}
    </ActivityWrapper>
  );
};

export default Exercice3;
