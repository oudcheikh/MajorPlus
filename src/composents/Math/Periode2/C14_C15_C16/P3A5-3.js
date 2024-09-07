import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button,Box, Typography } from "@mui/material";
import correctSound from '../../../sounds/correct.mp3';
import incorrectSound from '../../../sounds/incorrect.mp3';
import ActivityWrapper from "../../Reusable Components/Slides Content/ActivityWrapper";
import { useAuth } from "../../../Sign_in/v2/context/AuthContext";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../../Sign_in/v2/firebase";
import LinearProgressBar from "../../Reusable Components/ProgressIndicator";



const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 30vh;
`;

const FormulaBox2 = styled.div`
  padding: 20px;
  border: 2px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  margin-top: 20px;
`;

const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const SymbContainers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  margin-right: 10px;
`;

const FormulaBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #000;
  padding: 10px;
  margin: 5px;
  border-radius: 8px;
  background-color: #fff;
  cursor: pointer;
  width: 50px;
  height: 50px;
`;

const DescContainers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ResetButton = styled(Button)`
  background-color: #f44336;
  color: #fff;
  margin-right: 10px;
  &:hover {
    background-color: #d32f2f;
  }
`;

const VerifieButton = styled(Button)`
  background-color: #4caf50;
  color: #fff;
  margin-left: 10px;
  &:hover {
    background-color: #388e3c;
  }
`;

const FractionBande = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${(props) => (props.isActive ? "#007bff" : "#e0e0e0")};
  margin-right: 2px;
`;

const BandeBox = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

const Message = styled.p`
  font-size: 1.2em;
  margin-top: 20px;
  font-family: 'Comic Sans MS', sans-serif;
  text-align: center;
  color: ${(props) => (props.isCorrect ? 'green' : 'red')};
`;

const P3A53 = () => {
  const [questions, setQuestions] = useState([{ first: 5, last: 7 }]);
  const [selectedSymbol, setSelectedSymbol] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [showX, setShowX] = useState(false);
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const [entryTime, setEntryTime] = useState(null);
  const { currentUser } = useAuth();
  const [questionsAnswered,setQuestionsAnswered]=useState(0)
const totalQuestions=3





  useEffect(() => {
    const now = new Date();
    setEntryTime(now);
  }, []);

  const handleSymbolClick = (symbol) => {
    setSelectedSymbol(symbol);
  };

  const verify = () => {
    const correctSymbol =
      questions[0].first > questions[0].last
        ? ">"
        : questions[0].first < questions[0].last
        ? "<"
        : "=";




    if (selectedSymbol === correctSymbol) {
      setShowCongratulations(true);
      setShowX(false);
      setTimeout(() => {
        if (currentQuestion < 3) {
          nextQuestion();
        } else {
          setIsLastQuestion(true);
        }
      }, 2000);
    } else {
      setShowX(true);
      setShowCongratulations(false);
      setTimeout(() => {
        if (currentQuestion < 3) {
          nextQuestion();
        } else {
          setIsLastQuestion(true);
        }
      }, 2000);
    }

    setQuestionsAnswered(questionsAnswered+1)
  };


  const nextQuestion = () => {
    setCurrentQuestion(prev => prev + 1);
    setQuestions([{ first: Math.ceil(Math.random() * 10), last: Math.ceil(Math.random() * 10) }]);
    setSelectedSymbol("");
    setShowX(false);
    setShowCongratulations(false);
  };

  const reset = () => {
    setSelectedSymbol("");
    setShowX(false);
    setShowCongratulations(false);
    setQuestions([{ first: 5, last: 7 }]);
    setCurrentQuestion(1);
    setIsLastQuestion(false);
    setQuestionsAnswered(0)
    
  };

  const submitActivity = async () => {
    const endTime = new Date();
    const timeSpent = (endTime - entryTime) / 1000;

    const activityData = {
      userId: currentUser.uid,
      activityName: "P3A5-3",
      entryTime: entryTime.toISOString(),
      timeSpent: timeSpent,
      totalQuestions: 3,
      correctAnswers: showCongratulations ? 1 : 0,
      incorrectAnswers: showX ? 1 : 0,
      allAnswersCorrect: showCongratulations && !showX,
    };

    try {
      await addDoc(collection(db, 'users',currentUser.uid,'activities'), activityData);
      console.log('Activity data sent:', activityData);
    } catch (e) {
      console.error('Error sending activity data:', e);
    }

    reset();
  };

  return (
    <ActivityWrapper
      activityTitle={"P3A5-3"}
      explanationVideoUrl={"/Videos/your_video_url.mp4"}
      onSubmit={verify}
      user={currentUser}
      activityName="P3A5-3"
    >

<LinearProgressBar currentStep={questionsAnswered} totalSteps={totalQuestions} />

      <MainContainer>
        <FormulaBox2>
          <SectionContainer>
            <SymbContainers>
              <FormulaBox onClick={() => handleSymbolClick(">")}>&#62;</FormulaBox>
              <FormulaBox onClick={() => handleSymbolClick("<")}>&#60;</FormulaBox>
              <FormulaBox onClick={() => handleSymbolClick("=")}>&#61;</FormulaBox>
            </SymbContainers>

            {/* <DescContainers>
              <Typography>sup</Typography>
              <Typography>Inf</Typography>
              <Typography>Egale</Typography>
            </DescContainers> */}
          </SectionContainer>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <FormulaBox>
                <div className="frac">
                  <span>{questions[0].first}</span>
                  <span className="symbol">/</span>
                  <span className="bottom">12</span>
                </div>
              </FormulaBox>

              <FormulaBox className="mainSymb">{selectedSymbol}</FormulaBox>

              <FormulaBox>
                <div className="frac1">
                  <span>{questions[0].last}</span>
                  <span className="symbol">/</span>
                  <span className="bottom">12</span>
                </div>
              </FormulaBox>
            </div>

            {/* <div style={{ marginTop: "20px" }}>
              * <ResetButton variant="contained" type="submit" onClick={verify} style={{ marginRight: "25px" }}>
              //   Verifier
              // </ResetButton> 
              <VerifieButton style={{ marginLeft: "25px" }} onClick={reset}>
                Reset
              </VerifieButton>
            </div> */}

            {(showCongratulations || showX) && (
              <Message isCorrect={showCongratulations}>
                {showCongratulations ? "Bravo! Bonne réponse." : "Mauvaise réponse. Essayez encore."}
              </Message>
            )}
          </div>
        </FormulaBox2>
        {/* <Button variant="contained" color="primary" disabled={!isLastQuestion} onClick={submitActivity} style={{ marginTop: "20px" }}>
          Terminer
        </Button> */}


        <Box display="flex" justifyContent="center" mt={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={verify}
                    style={{ marginRight: '10px' }}
                    disabled={isLastQuestion}
                  >
                    Répondre
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={!isLastQuestion}
                    onClick={submitActivity}
                  >
                    Terminer
                  </Button>

                </Box>
      </MainContainer>
    </ActivityWrapper>
  );
};

export default P3A53;
