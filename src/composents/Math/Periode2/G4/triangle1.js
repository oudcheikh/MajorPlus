import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./TriangleActivity.css"; // You can create a CSS file for styling
import useSound from "use-sound";
import correctSound from "../../../sounds/correct.mp3";
import incorrectSound from "../../../sounds/incorrect.mp3";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../Sign_in/v2/firebase";
import { useAuth } from "../../../Sign_in/v2/context/AuthContext";
import ActivityWrapper from "../../Reusable Components/Slides Content/ActivityWrapper";
import { Box, Button } from "@mui/material";

import LinearProgressBar from "../../Reusable Components/ProgressIndicator";




const TriangleContainer = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 100px;
  margin-left: 0px;
`;
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

const StyledText1 = styled.p`
  padding: 0px 20px;
  display: flex;
  justify-content: center;
  font-size: 1em;
  font-family: "Comic Sans MS", sans-serif;
  &:hover {
    transform: scale(1.05);
  }
`;
const VerifieButton = styled.button`
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
const ResetButton = styled.button`
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

const BandeBox = styled.div`
  width: 200px;
  height: 200px;
  border: 4px solid #4caf50;
  display: flex;
  overflow: hidden;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  background-color:  #cfe1e;
`;

function TriangleActivity1() {
  const [opverify, setOpverify] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [play] = useSound(correctSound);
  const [play1] = useSound(incorrectSound);
  const [step, setStep] = useState(0);
  const [points, setPoints] = useState({ A: 0, B: 0, C: 0 });
  const [showX, setShowX] = useState(false);
  const [etape, setEtape] = useState(0)
  const [attempts, setAttempts] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0)
  const { currentUser } = useAuth();
  const [correctAnswers, setCorrectAnswers] = useState(0)

  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const [entryTime, setEntryTime] = useState(null);
  const [questionsAnswered, setQuestionsAnswered] = useState(0)
  const totalQuestions = 3



  useEffect(() => {
    const now = new Date();
    setEntryTime(now);

  }, []);


  const checkAnswer = () => {
    const allAnswersCorrect = correctAnswers === totalQuestions;
    const incorrectAnswers = totalQuestions - correctAnswers;
    return { allAnswersCorrect, totalQuestions, correctAnswers, incorrectAnswers };
  };


  const [showCongratulations, setShowCongratulations] = useState(false);
  const MEDIATRICE_X =
    points.A && points.B ? (points.A.x + points.B.x) / 2 : null;

  const calculateDistance = (point1, point2) => {
    return Math.sqrt(
      Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2)
    );
  };
  const generateQuestion = () => {
    const newQuestions = [generatenewlength()];
    setQuestions(newQuestions);
    setShowCongratulations(false);
  };
  const generatenewlength = () => {
    let AB, AC, BC;

    do {
      AB = Math.floor(Math.random() * 5) + 1;
      AC = Math.floor(Math.random() * 5) + 1;
      BC = Math.floor(Math.random() * 5) + 1;
    } while (!(AB + AC > BC && AB + BC > AC && AC + BC > AB));

    return { AB, AC, BC };
  };



  const verifyTriangle = () => {

    setAttempts((prevAttempts) => prevAttempts + 1);

    const AB = questions.reduce((sum, q) => sum + Math.floor(q.AB), 0);
    const AC = questions.reduce((sum, q) => sum + Math.floor(q.AC), 0);
    const BC = questions.reduce((sum, q) => sum + Math.floor(q.BC), 0);

    if (
      AB === parseInt((calculateDistance(points.A, points.B) / 37.8).toFixed(0)) &&
      AC === parseInt((calculateDistance(points.A, points.C) / 37.8).toFixed(0)) &&
      BC === parseInt((calculateDistance(points.B, points.C) / 37.8).toFixed(0))
    ) {
      setShowCongratulations(true);
      setCorrectAnswers(correctAnswers + 1)
      play();
      setOpverify(true);
    } else {
      setShowCongratulations(false);
      setOpverify(false);
      setShowX(true);
      play1();
      setTimeout(() => {
        setShowX(false); // Hide the "X" element after 2 seconds
      }, 2000);
    }

    // Vérification du nombre de tentatives pour désactiver le bouton
    if (attempts + 1 >= 3) {
      setIsLastQuestion(true);
    }

    // Gestion des étapes
    if (etape < 3) {
      setEtape((prevEtap) => prevEtap + 1);
      setQuestionsAnswered(questionsAnswered + 1);
      generateQuestion();
    } else {
      setIsLastQuestion(true);
    }
  };

  // const verify = () => {
  //     verifyTriangle();
  // };

  const calculatePerpendicularLine = () => {
    if (points.A && points.B) {
      const middlePointX = (points.A.x + points.B.x) / 2;
      const middlePointY = (points.A.y + points.B.y) / 2;

      const slopeAB = (points.B.y - points.A.y) / (points.B.x - points.A.x);
      const perpendicularSlope = -1 / slopeAB;

      // Calculate two points on the perpendicular line
      const x1 = middlePointX + 50; // Adjust the length of the line as needed
      const y1 = middlePointY + 50 * perpendicularSlope;
      const x2 = middlePointX - 50; // Adjust the length of the line as needed
      const y2 = middlePointY - 50 * perpendicularSlope;

      return (
        <line
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="red"
          strokeDasharray="5"
        />
      );
    }
    return null;
  };

  const calculateParallelLines = () => {
    if (points.A && points.B) {
      const slopeAB = (points.B.y - points.A.y) / (points.B.x - points.A.x);

      // Calculate the length of AB
      const lengthAB = Math.sqrt(
        (points.B.x - points.A.x) ** 2 + (points.B.y - points.A.y) ** 2
      );

      // Calculate the slope for the parallel lines
      const parallelSlope1 = -1 / slopeAB; // Perpendicular slope
      const parallelSlope2 = -1 / slopeAB; // Perpendicular slope

      // Calculate two points on the first parallel line
      const x1_1 = points.A.x - lengthAB / 2;
      const y1_1 = points.A.y - (lengthAB / 2) * parallelSlope1;
      const x2_1 = points.A.x + lengthAB / 2;
      const y2_1 = points.A.y + (lengthAB / 2) * parallelSlope1;

      // Calculate two points on the second parallel line
      const x1_2 = points.B.x - lengthAB / 2;
      const y1_2 = points.B.y - (lengthAB / 2) * parallelSlope2;
      const x2_2 = points.B.x + lengthAB / 2;
      const y2_2 = points.B.y + (lengthAB / 2) * parallelSlope2;

      return (
        <>
          <line
            x1={x1_1}
            y1={y1_1}
            x2={x2_1}
            y2={y2_1}
            stroke="blue"
            strokeDasharray="5"
          />
          <line
            x1={x1_2}
            y1={y1_2}
            x2={x2_2}
            y2={y2_2}
            stroke="green"
            strokeDasharray="5"
          />
        </>
      );
    }
    return null;
  };

  const handlePointClick = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    const newPoints = { ...points };
    const pointName = step === 0 ? "A" : step === 1 ? "B" : "C";
    newPoints[pointName] = { x: offsetX, y: offsetY };
    setPoints(newPoints);
    setStep(step + 1);
  };

  const drawLine = (start, end) => {
    return (
      <line x1={start.x} y1={start.y} x2={end.x} y2={end.y} stroke="black" />
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
  useEffect(() => {
    // This effect will run whenever the 'points' state changes.
    generateQuestion();
  }, []);

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
  const reset = () => {
    setIsLastQuestion(false)
    setQuestionsAnswered(0)
    setEtape(0)
    setAttempts(0)
    if (opverify) {
      generateQuestion();
    }
    setShowCongratulations(false);
    setOpverify(false); // Reset the verification status
    setStep(0);
    setPoints({ A: 0, B: 0, C: 0 });
  };
  const retourner = () => {
    if (step > 0 && step < 4) {
      setStep(step - 1);
      switch (step) {
        case 3:
          setPoints({ ...points, C: 0 });
          break;
        case 2:
          setPoints({ ...points, B: 0 });
          break;
        case 1:
          setPoints({ A: 0, B: 0, C: 0 });
          break;
        default:
          break;
      }
    } else if (step == 0) {
      setPoints({ A: 0, B: 0, C: 0 });
    } else {
      setPoints({ ...points, C: 0 });
      setStep(2)
    }
  };

  const Terminer = () => {
    sendActivityData()
    reset()

  }



  return (

    <ActivityWrapper
      activityTitle={"Construction des triangles"}
      explanationVideoUrl={"/Videos/video.mp4"}
      onSubmit={checkAnswer}
      user={currentUser} // Passe l'utilisateur actuel comme prop
      activityName="Triangles">

      <LinearProgressBar currentStep={questionsAnswered} totalSteps={totalQuestions} />


      <TriangleContainer style={{ display: "flex", alignItems: "center" }}>


        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >


          <img src="/images/Math/C/imgC19/Activity.png" alt="Activity" style={{ width: "50%", height: "auto", maxWidth: "70%", display: "block", marginLeft: "auto", marginRight: "auto" }} />

          <div>
            <BandeBox>
              <div className="triangle-activity">
                <svg
                  width="500"
                  height="500"
                  onClick={handlePointClick}
                  className={`step-${step}`}
                >
                  {points.A && points.B && drawLine(points.A, points.B)}
                  {points.A && step >= 1 && drawCircle(points.A, 3)}
                  {points.B && step >= 2 && drawCircle(points.B, 3)}
                  {points.C && step >= 2 && drawCircle(points.C, 3)}
                  {points.C && drawLine(points.A, points.C)}
                  {points.C && drawLine(points.B, points.C)}

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
                      <line
                        x1={points.A.x}
                        y1={points.A.y}
                        x2={points.B.x}
                        y2={points.B.y}
                        stroke="gray"
                        strokeDasharray="5"
                      />
                      {MEDIATRICE_X && (
                        <>
                          <circle
                            cx={MEDIATRICE_X}
                            cy={(points.A.y + points.B.y) / 2}
                            r="5"
                            fill="gray"
                          />
                        </>
                      )}
                    </>
                  )}
                  {calculatePerpendicularLine()}
                  {calculateParallelLines()}

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
                </svg>
              </div>
            </BandeBox>
          </div>
          <div>
            {" "}
            {/* <ResetButton
            variant="contained"
            type="submit"
            onClick={verify}
            style={{ marginRight: "10px" }}
          >
            Verifier
          </ResetButton> */}
            <VerifieButton style={{ marginRight: "10px" }} onClick={retourner}>
              Retourner
            </VerifieButton>
            {/* <VerifieButton onClick={reset}>Reset</VerifieButton> */}
          </div>



          <Box display="flex" justifyContent="center" mt={2}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={verifyTriangle}
              style={{ marginRight: '10px' }}
              disabled={isLastQuestion} >

              Répondre
            </Button>
            <Button
              variant="contained"
              color="primary"
              disabled={!isLastQuestion}
              onClick={Terminer}
            >
              Terminer
            </Button>

          </Box>

          <div>{showX && <span>✖️</span>}
            {showCongratulations && <span>✅</span>}</div>

          <div>
            <StyledText1>
              <span style={{ marginRight: "10px" }}>
                AB = {!points.A && 0}
                {points.A && points.B &&
                  (calculateDistance(points.A, points.B) / 37.8).toFixed(0)}cm
              </span>
              <span style={{ marginRight: "10px" }}>
                AC = {!points.C && 0}
                {points.A && points.C &&
                  (calculateDistance(points.A, points.C) / 37.8).toFixed(0)}cm
              </span>
              <span>
                BC = {!points.C && 0}
                {points.B && points.C &&
                  (calculateDistance(points.B, points.C) / 37.8).toFixed(0)}cm
              </span>
            </StyledText1>
          </div>

          <div>
            {!points.A && !points.B && !points.C && (
              <div>
                <StyledText>
                  Cliquer pour construire le sommet A de votre triangle ABC.
                </StyledText>
              </div>
            )}

            {questions.map((q, index) => (
              <StyledText>
                <span style={{ marginRight: "10px" }}>AB = {q.AB}cm</span>
                <span style={{ marginRight: "10px" }}>AC = {q.AC}cm</span>
                <span>BC = {q.BC}cm</span>
              </StyledText>
            ))}
          </div>
        </div>


      </TriangleContainer>

    </ActivityWrapper>
  );
}

export default TriangleActivity1;
