import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Card, CardContent, Grid } from '@mui/material';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styled from "styled-components";
import useSound from "use-sound";
import correctSound from "../../../sounds/correct.mp3";
import incorrectSound from "../../../sounds/incorrect.mp3";
import ActivityWrapper from '../../Reusable Components/Slides Content/ActivityWrapper';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../../Sign_in/v2/firebase';
import { useAuth } from '../../../Sign_in/v2/context/AuthContext';

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

const FormulaBox = styled.div`
  padding: 15px 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 20px;
  background-color: white;
  font-size: 26px;
`;

const FormulaBox1 = styled(FormulaBox)`
  background-color: #f0f0f0;
`;

const FormulaBox12 = styled(FormulaBox)`
  background-color: #a6c9e2;
`;

function C5A2() {
  const [step, setStep] = useState(4);
  const [move, setMove] = useState(0);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [showX, setShowX] = useState(false);
  const [opverify, setOpverify] = useState(false);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const [play] = useSound(correctSound);
  const [play1] = useSound(incorrectSound);
  const [questions, setQuestions] = useState([]);
  const { currentUser } = useAuth();
  const [entryTime, setEntryTime] = useState(null);
  const [firstcase, setFirstcase] = useState(false); 
  const [secondcase, setSecondcase] = useState(true);
  const [thirdcase, setThirdcase] = useState(false);

  useEffect(() => {
    const now = new Date();
    setEntryTime(now);
    generateQuestion();
  }, []);

  const generateQuestion = () => {
    const newQuestions = [];
    for (let i = 0; i < 7; i++) {
      newQuestions.push(generateNumbers());
    }
    setQuestions(newQuestions);
    setShowCongratulations(false);
    setQuestionsAnswered(0);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
  };

  const generateNumbers = () => {
    const getRandomNumber = (exclude) => {
      let num;
      do {
        num = Math.floor(Math.random() * 5) + 1;
      } while (exclude.includes(num) || num <= 0);
      return num;
    };

    let firstnumber, secondnumber, thirdnumber;
    firstnumber = getRandomNumber([]);
    secondnumber = getRandomNumber([firstnumber]);
    thirdnumber = getRandomNumber([firstnumber, secondnumber]);
    const fourthnumber = getRandomNumber([firstnumber, secondnumber, thirdnumber]);

    const first = Math.floor((Math.floor(firstnumber + secondnumber) * thirdnumber) - fourthnumber);
    const second = Math.floor(firstnumber + Math.floor(secondnumber * thirdnumber) - fourthnumber);
    const third = firstnumber + secondnumber * (thirdnumber - fourthnumber);
    const options = [first, second, third];
    const positiveOptions = options.filter(option => option > 0);
    const randomIndex = Math.floor(Math.random() * positiveOptions.length);
    const answer = positiveOptions[randomIndex];

    return { firstnumber, secondnumber, thirdnumber, fourthnumber, first, second, third, answer };
  };

  const VerifieSumbol = () => {
    const currentQuestion = questions[questionsAnswered];
    const first = currentQuestion.first;
    const second = currentQuestion.second;
    const third = currentQuestion.third;
    const answer = currentQuestion.answer;

    if (answer === first && firstcase) {
      setCorrectAnswers(correctAnswers + 1);
      play();
    } else if (answer === second && secondcase) {
      setCorrectAnswers(correctAnswers + 1);
      play();
    } else if (answer === third && thirdcase) {
      setCorrectAnswers(correctAnswers + 1);
      play();
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
      play1();
    }

    setQuestionsAnswered(questionsAnswered + 1);

    if (questionsAnswered + 1 >= 7) {
      setIsLastQuestion(true);
    }
  };

  const handleReset = () => {
    generateQuestion();
    setIsLastQuestion(false);
    setShowCongratulations(false);
    setShowX(false);
    setOpverify(false);
    setMove(0);
    setStep(4);
  };

  const handleFinish = () => {
    sendActivityData();
    handleReset();
  };

  const sendActivityData = async () => {
    const endTime = new Date();
    const timeSpent = (endTime - entryTime) / 1000;
    const activityData = {
      userId: currentUser.uid,
      activityName: "C5A2",
      entryTime: entryTime.toISOString(),
      timeSpent: timeSpent,
      totalQuestions: questionsAnswered,
      correctAnswers: correctAnswers,
      incorrectAnswers: incorrectAnswers,
      allAnswersCorrect: correctAnswers === questionsAnswered
    };

    try {
      await addDoc(collection(db, 'activities'), activityData);
      console.log('Activity data sent:', activityData);
    } catch (e) {
      console.error('Error sending activity data:', e);
    }
  };

  const forward = () => {
    if (step < 4) {
      setStep(step + 1);
      if (move === 0 && step === 1) {
        setFirstcase(true);
        setSecondcase(false);
        setThirdcase(false);
      } else if (move === 2 && step === 3) {
        setThirdcase(true);
        setFirstcase(false);
        setSecondcase(false);
      } else {
        setSecondcase(true);
        setFirstcase(false);
        setThirdcase(false);
      }
    }
  };

  const Backward = () => {
    if ((step - move) > 1) {
      setStep(step - 1);
      if (move === 0 && step === 3) {
        setFirstcase(true);
        setSecondcase(false);
        setThirdcase(false);
      } else if (move === 1 && step === 3) {
        setThirdcase(true);
        setFirstcase(false);
        setSecondcase(false);
      } else {
        setSecondcase(true);
        setFirstcase(false);
        setThirdcase(false);
      }
    }
  };

  const forwardM = () => {
    if ((step - move) > 1) {
      setMove(move + 1);
      if (move === 0 && step === 1) {
        setFirstcase(true);
        setSecondcase(false);
        setThirdcase(false);
      } else if (move === 1 && step === 4) {
        setThirdcase(true);
        setFirstcase(false);
        setSecondcase(false);
      } else {
        setSecondcase(true);
        setFirstcase(false);
        setThirdcase(false);
      }
    }
  };

  const BackwardM = () => {
    if (move > 0) {
      setMove(move - 1);
      if (move === 1 && step === 2) {
        setFirstcase(true);
        setSecondcase(false);
        setThirdcase(false);
      } else if (move === 3 && step === 4) {
        setThirdcase(true);
        setFirstcase(false);
        setSecondcase(false);
      } else {
        setSecondcase(true);
        setFirstcase(false);
        setThirdcase(false);
      }
    }
  };

  return (
    <ActivityWrapper
      activityTitle={"C5A2"}
      explanationVideoUrl={"/Videos/number_sorting.mp4"}
      onSubmit={sendActivityData}
      user={currentUser}
      activityName="C5A2"
    >
      <DndProvider backend={HTML5Backend}>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
          <Card elevation={3}>
            <CardContent>
              <StyledText>Placez des parenthèses dans l'équation suivante pour que le résultat soit:</StyledText>
              <StyledText>
                {questions.length > 0 && (
                  <span>{questions[questionsAnswered].answer}</span>
                )}
              </StyledText>

              <Grid container spacing={1} justifyContent="center" style={{ marginTop: '0em' }}>
                {move === 0 && <FormulaBox12>&#40;</FormulaBox12>}
                <FormulaBox>{questions.length > 0 && questionsAnswered < questions.length && <span>{questions[questionsAnswered].firstnumber}</span>}</FormulaBox>
                {step === 1 && <FormulaBox1>&#41;</FormulaBox1>}
                <FormulaBox>+</FormulaBox>
                {move === 1 && <FormulaBox12>&#40;</FormulaBox12>}
                <FormulaBox>{questions.length > 0 && questionsAnswered < questions.length && <span>{questions[questionsAnswered].secondnumber}</span>}</FormulaBox>
                {step === 2 && <FormulaBox1>&#41;</FormulaBox1>}
                <FormulaBox>&#215;</FormulaBox>
                {move === 2 && <FormulaBox12>&#40;</FormulaBox12>}
                <FormulaBox>{questions.length > 0 && questionsAnswered < questions.length && <span>{questions[questionsAnswered].thirdnumber}</span>}</FormulaBox>
                {step === 3 && <FormulaBox1>&#41;</FormulaBox1>}
                <FormulaBox>-</FormulaBox>
                {move === 3 && <FormulaBox12>&#40;</FormulaBox12>}
                <FormulaBox>{questions.length > 0 && questionsAnswered < questions.length && <span>{questions[questionsAnswered].fourthnumber}</span>}</FormulaBox>
                {step === 4 && <FormulaBox1>&#41;</FormulaBox1>}
              </Grid>

              <Grid container spacing={2} justifyContent="center" style={{ marginTop: '1em' }}>
                <div>
                  <Button variant="contained" color="primary" onClick={VerifieSumbol} disabled={isLastQuestion}>
                    Répondre
                  </Button>
                  <Button variant="contained" color="primary" onClick={handleFinish} disabled={!isLastQuestion}>
                    Terminer
                  </Button>
                </div>
                <div>
                  <Button style={{ marginRight: "1px", marginLeft: "0px" }} onClick={BackwardM}>
                    &#60;
                  </Button>
                  <Button style={{ marginRight: "20px" }} onClick={forwardM}>
                    &#62;
                  </Button>
                  {showX && <span>✖️</span>}
                  {showCongratulations && <span>✅</span>}
                  <Button style={{ marginLeft: "20px" }} onClick={Backward}>
                    &#60;
                  </Button>
                  <Button onClick={forward}>
                    &#62;
                  </Button>
                </div>
              </Grid>

              <div>
                {(showX && secondcase) && (
                  <StyledText>
                    {questions.map((q, index) => (
                      <span key={index}>{q.firstnumber}</span>
                    ))} + &#40;{questions.map((q, index) => (
                      <span key={index}>{q.secondnumber}</span>
                    ))} &#215; {questions.map((q, index) => (
                      <span key={index}>{q.thirdnumber}</span>
                    ))}&#41; - {questions.map((q, index) => (
                      <span key={index}>{q.fourthnumber}</span>
                    ))} = {questions.map((q, index) => (
                      <span key={index}>{q.firstnumber}</span>
                    ))} + &#40;{questions.map((q, index) => (
                      <span key={index}>{Math.floor(q.secondnumber * q.thirdnumber)}</span>
                    ))}&#41; - {questions.map((q, index) => (
                      <span key={index}>{q.fourthnumber}</span>
                    ))} = {questions.map((q, index) => (
                      <span key={index}>{Math.floor(q.firstnumber + q.secondnumber * q.thirdnumber)}</span>
                    ))} - {questions.map((q, index) => (
                      <span key={index}>{q.fourthnumber}</span>
                    ))} = {questions.map((q, index) => (
                      <span key={index}>{Math.floor(q.firstnumber + q.secondnumber * q.thirdnumber - q.fourthnumber)}</span>
                    ))}
                  </StyledText>
                )}
              </div>

              <div>
                {showCongratulations && secondcase && (
                  <StyledText>
                    {questions.map((q, index) => (
                      <span key={index}>{q.firstnumber}</span>
                    ))} + &#40;{questions.map((q, index) => (
                      <span key={index}>{q.secondnumber}</span>
                    ))} &#215; {questions.map((q, index) => (
                      <span key={index}>{q.thirdnumber}</span>
                    ))}&#41; - {questions.map((q, index) => (
                      <span key={index}>{q.fourthnumber}</span>
                    ))} = {questions.map((q, index) => (
                      <span key={index}>{q.firstnumber}</span>
                    ))} + &#40;{questions.map((q, index) => (
                      <span key={index}>{Math.floor(q.secondnumber * q.thirdnumber)}</span>
                    ))}&#41; - {questions.map((q, index) => (
                      <span key={index}>{q.fourthnumber}</span>
                    ))} = {questions.map((q, index) => (
                      <span key={index}>{Math.floor(q.firstnumber + q.secondnumber * q.thirdnumber)}</span>
                    ))} - {questions.map((q, index) => (
                      <span key={index}>{q.fourthnumber}</span>
                    ))} = {questions.map((q, index) => (
                      <span key={index}>{Math.floor(q.firstnumber + q.secondnumber * q.thirdnumber - q.fourthnumber)}</span>
                    ))}
                  </StyledText>
                )}
              </div>
            </CardContent>
          </Card>
        </Box>
      </DndProvider>
    </ActivityWrapper>
  );
}

export default C5A2;
