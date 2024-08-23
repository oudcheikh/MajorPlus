import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ActivityWrapper from "../../Reusable Components/Slides Content/ActivityWrapper";
import { useAuth } from "../../../Sign_in/v2/context/AuthContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../Sign_in/v2/firebase";
import { Button } from "@mui/material";
import { Howl } from 'howler';
import correctSoundFile from '../../../sounds/correct.mp3';
import incorrectSoundFile from '../../../sounds/incorrect.mp3';
import ReplyIcon from '@mui/icons-material/Reply';
import { FormulaText, StyledBox as OriginalStyledBox } from "../../../Styles/MajorStyles";

const TOTAL_QUESTIONS = 7;

const ButtonContainer = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const imageStyle = {
  width: "50%",
  height: "auto",
  maxWidth: "70%",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
};

const TriangleContainer = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 100px;
  margin-left: 0px;
`;

const Card = styled.div`
  background-color: white;
  width: 40%;
  padding: 2px;
  border-radius: 40px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #E1F5FE;
  transition: all 0.3s ease;
  margin :5px;

  &:hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
    transform: translateY(-5px);
  }
`;

const MessageCard = styled(Card)`
  border-radius: 40px;
  max-width: 300px;
  box-shadow: 4px 4px 4px 8px rgba(0.1, 0.1, 0.1, 0.1);
  padding: 2px;
  margin-left: 10px;
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const BandeBox = styled.div`
  width: 300px;
  height: 300px;
  border: 4px solid #4caf50;
  display: flex;
  overflow: hidden;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  background-image: linear-gradient(0deg, transparent 1px, #000 1px, #000 2px, transparent 2px),
                    linear-gradient(90deg, transparent 1px, #000 1px, #000 2px, transparent 1px);
  background-size: 37.8px 37.8px;
  background-color: #cfe1e;
  position: relative;
`;

const StyledBox = styled(OriginalStyledBox)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

function TriangleActivity1() {
  const [questions, setQuestions] = useState([]);
  const [step, setStep] = useState(0);
  const [points, setPoints] = useState({ A: 0, B: 0, C: 0, D: 0 });
  const [showAnswer, setShowAnswer] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const [entryTime, setEntryTime] = useState(null);
  const { currentUser } = useAuth();

  const correctSound = new Howl({ src: [correctSoundFile] });
  const incorrectSound = new Howl({ src: [incorrectSoundFile] });

  useEffect(() => {
    const now = new Date();
    setEntryTime(now);
    generateQuestion();
  }, []);

  const generateQuestion = () => {
    const number = Math.floor(Math.random() * 5) + 2;
    const questions = [
      `Tracer un carré de côté ${number} cm`,
      `Tracer un rectangle dont la longueur est égale à la largeur multipliée par ${number}`
    ];
    const randomIndex = Math.floor(Math.random() * questions.length);
    const selectedQuestion = questions[randomIndex];
    setQuestions([{ text: selectedQuestion, number }]);
  };

  const roundDecimal = (number) => {
    const integerPart = Math.floor(number);
    const decimalPart = number - integerPart;
    if (decimalPart >= 0.85) return Math.ceil(number);
    if (decimalPart <= 0.15) return Math.floor(number);
    return number;
  };

  const calculateDistance = (point1, point2) => {
    return Math.sqrt(
      Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2)
    );
  };

  const verifyAnswer = () => {
    const number = questions[0].number;
    if (points.A && points.B && points.C && points.D) {
      const ab = roundDecimal((calculateDistance(points.A, points.B) / 37.8).toFixed(1));
      const bc = roundDecimal((calculateDistance(points.B, points.C) / 37.8).toFixed(1));
      const cd = roundDecimal((calculateDistance(points.C, points.D) / 37.8).toFixed(1));
      const da = roundDecimal((calculateDistance(points.D, points.A) / 37.8).toFixed(1));
      const isCorrect = (
        ab === number && bc === number && cd === number && da === number
      );
      setShowAnswer(true);
      if (isCorrect) {
        correctSound.play();
        setCorrectAnswers(correctAnswers + 1);
      } else {
        incorrectSound.play();
        setIncorrectAnswers(incorrectAnswers + 1);
      }
      setQuestionsAnswered(questionsAnswered + 1);
      setTimeout(() => {
        setShowAnswer(false);
        if (questionsAnswered + 1 >= TOTAL_QUESTIONS) {
          setIsLastQuestion(true);
        } else {
          resetCanvas();
          generateQuestion();
        }
      }, 2000);
    }
  };

  const handlePointClick = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    const newPoints = { ...points };
    const pointName = step === 0 ? "A" : step === 1 ? "B" : step === 2 ? "C" : "D";
    newPoints[pointName] = { x: offsetX, y: offsetY };
    setPoints(newPoints);
    setStep(step + 1);
  };

  const drawLine = (start, end, strokeWidth) => {
    return (
      <line
        x1={start.x}
        y1={start.y}
        x2={end.x}
        y2={end.y}
        stroke="black"
        strokeWidth={strokeWidth}
      />
    );
  };

  const drawCircle = (center, radius) => {
    return (
      <circle
        cx={center.x}
        cy={center.y}
        r={radius}
        fill="transparent"
        stroke="black"
      />
    );
  };

  const resetCanvas = () => {
    setPoints({ A: 0, B: 0, C: 0, D: 0 });
    setStep(0);
  };

  const handleFinalSubmit = async () => {
    const endTime = new Date();
    const timeSpent = (endTime - entryTime) / 1000;

    const activityData = {
      userId: currentUser.uid,
      activityName: "TriangleActivity1",
      entryTime: entryTime.toISOString(),
      timeSpent: timeSpent,
      totalQuestions: TOTAL_QUESTIONS,
      correctAnswers,
      incorrectAnswers,
      allAnswersCorrect: correctAnswers === TOTAL_QUESTIONS,
    };

    try {
      await addDoc(collection(db,"users",currentUser.uid, "activities"), activityData);
      console.log("Activity data sent:", activityData);
    } catch (e) {
      console.error("Error sending activity data:", e);
    }

    resetCanvas(); // Reset the activity after sending the data
  };

  return (
    <ActivityWrapper
      activityTitle={"TriangleActivity1"}
      explanationVideoUrl={"/Videos/draw_triangle.mp4"}
      onSubmit={verifyAnswer}
      user={currentUser}
      activityName="TriangleActivity1"
    >
      <TriangleContainer style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <StyledBox>
            <img src="/images/Math/C/C1/pro2.png" alt="Activity" style={imageStyle} />
            <MessageCard>
              {questions.map((q, index) => (
                <FormulaText key={index}>
                  <span>{q.text}</span>
                </FormulaText>
              ))}
            </MessageCard>
          </StyledBox>

          <br />
          <BandeBox>
            <div className="triangle-activity">
              <svg
                width="500"
                height="500"
                onClick={handlePointClick}
                className={`step-${step}`}
              >
                {points.A && step >= 1 && drawCircle(points.A, 2.5)}
                {points.B && step >= 2 && drawCircle(points.B, 2.5)}
                {points.C && step >= 2 && drawCircle(points.C, 2.5)}
                {points.D && step >= 2 && drawCircle(points.D, 2.5)}

                {points.A && points.B && drawLine(points.A, points.B, 3.2)}
                {points.C && drawLine(points.B, points.C, 3.2)}
                {points.C && drawLine(points.B, points.C, 3.2)}
                {points.D && drawLine(points.D, points.C, 3.2)}
                {points.D && drawLine(points.D, points.A, 3.2)}

                {points.A && points.B && step >= 2 && (
                  <>
                    <line
                      x1={points.A.x}
                      y1={points.A.y}
                      x2={points.B.x}
                      y2={points.B.y}
                      stroke="gray"
                      strokeDasharray="5"
                    />
                  </>
                )}

                {points.A && step >= 1 && (
                  <text x={points.A.x} y={points.A.y - 10} textAnchor="middle">
                    A
                  </text>
                )}
                {points.B && step >= 2 && (
                  <text x={points.B.x} y={points.B.y - 10} textAnchor="middle">
                    B
                  </text>
                )}
                {points.C && step >= 2 && (
                  <text x={points.C.x} y={points.C.y - 10} textAnchor="middle">
                    C
                  </text>
                )}
                {points.D && step >= 2 && (
                  <text x={points.D.x} y={points.D.y - 10} textAnchor="middle">
                    D
                  </text>
                )}
              </svg>
            </div>
            <ButtonContainer>
              <Button variant="contained" color="secondary" onClick={resetCanvas} style={{ marginLeft: '10px' }}>
                <ReplyIcon /> Effacer
              </Button>
            </ButtonContainer>
          </BandeBox>

          <ButtonContainer>
            <Button variant="contained" color="primary" onClick={verifyAnswer} disabled={showAnswer}>
              Répondre
            </Button>
            <Button variant="contained" color="secondary" onClick={resetCanvas} style={{ marginLeft: '10px' }}>
              Effacer
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

          <div>
           

            {showAnswer && (
              <FormulaText>
                {correctAnswers === questionsAnswered ? "Parfait ! Vous avez réussi." : "Incorrect. Réessayez !"}
              </FormulaText>
            )}
          </div>
        </div>
      </TriangleContainer>
    </ActivityWrapper>
  );
}

export default TriangleActivity1;
