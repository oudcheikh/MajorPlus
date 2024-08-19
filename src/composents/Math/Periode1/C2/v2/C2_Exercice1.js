import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Grid, Card, CardContent } from "@mui/material";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styled from "styled-components";
import useSound from "use-sound";
import correctSound from "../../../../sounds/correct.mp3";
import incorrectSound from "../../../../sounds/incorrect.mp3";
import "../../../../Styles/C2CSS.css";
import ActivityWrapper from "../../../Reusable Components/Slides Content/ActivityWrapper";
import { useAuth } from "../../../../Sign_in/v2/context/AuthContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../../Sign_in/v2/firebase";

// Styled components
const StyledText = styled.p`
  padding: 0px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  font-family: "Comic Sans MS", sans-serif;
  &:hover {
    transform: scale(1.05);
  }
`;

const ResetButton = styled.button`
  border-radius: 5px;
  background-color: #45a05c;
  margin: 15px 0;
  color: white;
  border: none;
  font-family: "Roboto", sans-serif;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const VerifyButton = styled.button`
  border-radius: 5px;
  background-color: #007bff;
  margin: 15px 0;
  color: white;
  border: none;
  font-family: "Roboto", sans-serif;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const FormulaBox = styled.div`
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 20px;
  background-color: white;
`;

const ButtonContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '20px',
});

const C2A1 = () => {
  const [signs] = useState(['>', '=', '<']);
  const [selectedSymbol, setSelectedSymbol] = useState(">");
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [showX, setShowX] = useState(false);
  const [currentAttempt, setCurrentAttempt] = useState(1);
  const [isGameOver, setIsGameOver] = useState(false);
  const { currentUser } = useAuth();
  const [score, setScore] = useState(0);
  const [entryTime, setEntryTime] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [playCorrect] = useSound(correctSound);
  const [playIncorrect] = useSound(incorrectSound);

  useEffect(() => {
    generateQuestion();
    setEntryTime(new Date());
  }, []);

  const generateQuestion = () => {
    const newQuestion = generateNumbers();
    setQuestions([newQuestion]);
    setShowCongratulations(false);
    setShowX(false);
  };

  const generateNumbers = () => {
    const first = Math.floor(Math.random() * 1000000000);
    const last = Math.floor(Math.random() * 1000000000);
    return { first, last };
  };

  const checkAnswer = () => {
    const first = questions[0].first;
    const last = questions[0].last;
    let isCorrect = false;

    if (selectedSymbol === ">" && first > last) {
      isCorrect = true;
    } else if (selectedSymbol === "<" && first < last) {
      isCorrect = true;
    } else if (selectedSymbol === "=" && first === last) {
      isCorrect = true;
    }

    if (isCorrect) {
      setScore(score + 1);
      setShowCongratulations(true);
      playCorrect();
    } else {
      setShowX(true);
      playIncorrect();
    }

    return isCorrect;
  };

  const verify = () => {
    const isCorrect = checkAnswer();

    // Show feedback for 2 seconds before proceeding
    setTimeout(() => {
      if (currentAttempt < 3) {
        setCurrentAttempt(currentAttempt + 1);
        generateQuestion();
      } else {
        setIsGameOver(true);
      }
    }, 2000);
  };

  const sendActivityData = async () => {
    const endTime = new Date();
    const timeSpent = (endTime - entryTime) / 1000;

    const activityData = {
      userId: currentUser.uid,
      activityName: "NumberTable",
      entryTime: entryTime.toISOString(),
      timeSpent: timeSpent,
      totalQuestions: 3,
      correctAnswers: score,
      incorrectAnswers: 3 - score,
      allAnswersCorrect: score === 3,
    };

    try {
      await addDoc(collection(db, 'users',currentUser.uid, 'activities'), activityData);
      console.log('Activity data sent:', activityData);
    } catch (e) {
      console.error('Error sending activity data:', e);
    }
  };

  const resetGame = () => {
    setCurrentAttempt(1);
    setScore(0);
    setIsGameOver(false);
    generateQuestion();
  };

  const handleFinish = () => {
    sendActivityData();
    resetGame();
  };

  const handleSymbolClick = (symbol) => {
    setSelectedSymbol(symbol);
  };

  return (
    <ActivityWrapper
      activityTitle={"Comaraison des nombres"}
      explanationVideoUrl={"/Videos/number_sorting.mp4"}
      onSubmit={null}
      user={currentUser}
      activityName="C2A1"
    >
      <DndProvider backend={HTML5Backend}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100%" }}>
          <img src="/images/Math/C/imgC19/Activity.png" alt="Activity" style={{ width: "50%", height: "auto", maxWidth: "70%", display: "block", marginLeft: "auto", marginRight: "auto" }} />
          <Card elevation={3}>
            <CardContent>
              <StyledText>
                <strong> Mettez la bonne signe</strong>
              </StyledText>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <StyledText>
                    <strong style={{ color: 'blue' }}>{questions[0]?.first}</strong>
                  </StyledText>
                  <FormulaBox className="mainSymb">{selectedSymbol}</FormulaBox>
                  <StyledText>
                    <strong style={{ color: 'blue' }}>{questions[0]?.last}</strong>
                  </StyledText>
                </div>
              </div>

              <Grid container spacing={2} justifyContent="center" style={{ marginTop: '2em' }}>
                <FormulaBox className="symbols" onClick={() => handleSymbolClick("<")}>
                  &#60;
                </FormulaBox>
                <FormulaBox className="symbols" onClick={() => handleSymbolClick("=")}>
                  &#61;
                </FormulaBox>
                <FormulaBox className="symbols" onClick={() => handleSymbolClick(">")}>
                  &#62;
                </FormulaBox>
              </Grid>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                  {showX && <span>Erreur</span>}
                  {showCongratulations && <span>Bravo ! continue</span>}
                </div>
              </div>
              <Grid container spacing={2} justifyContent="center" style={{ marginTop: '2em' }}>
                <ButtonContainer>
                  <Button
                    variant="contained"
                    style={{ margin: "20px", marginRight: "80px", marginLeft: "1px" }}
                    onClick={verify}
                    disabled={isGameOver} // Disable the button if the game is over
                  >
                    Répondre
                  </Button>
                  <Button
                    variant="contained"
                    disabled={!isGameOver} // Enable this button only when the game is over
                    onClick={handleFinish}
                  >
                    Terminer
                  </Button>
                </ButtonContainer>
              </Grid>

              <gird>
                <Box></Box>
              </gird>
            </CardContent>
          </Card>
        </div>
      </DndProvider>
    </ActivityWrapper>
  );
};

export default C2A1;
