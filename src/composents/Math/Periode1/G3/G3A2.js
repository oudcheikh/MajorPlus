import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import { Card, StyledText } from '../../../Styles/MajorStyles';
import ActivityWrapper from "../../Reusable Components/Slides Content/ActivityWrapper";
import { useAuth } from "../../../Sign_in/v2/context/AuthContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../Sign_in/v2/firebase";
import styled from 'styled-components';

const TOTAL_QUESTIONS = 7;

const StyledBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

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

const AngleActivity = () => {
  const [angle, setAngle] = useState(8);
  const [message, setMessage] = useState("Glissez le slider pour ouvrir l'angle");
  const [messageColor, setMessageColor] = useState("#000");
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const [entryTime, setEntryTime] = useState(null);
  const { currentUser } = useAuth();

  useEffect(() => {
    const now = new Date();
    setEntryTime(now);
  }, []);

  const getTextPosition = (radius, angle) => {
    const halfAngle = angle / 2;
    const distance = angle < 90 ? radius + 40 : radius + 20;
    const position = polarToCartesian(100, 100, distance, halfAngle);
    return position;
  };

  const handleSliderChange = (event, newValue) => {
    setAngle(newValue);
  };

  const disableScroll = (e) => {
    e.preventDefault();
  };

  const handleSliderStart = () => {
    document.body.style.overflowX = 'hidden';
    window.addEventListener('touchmove', disableScroll, { passive: false });
    window.addEventListener('mousemove', disableScroll, { passive: false });
  };

  const handleSliderEnd = () => {
    document.body.style.overflowX = '';
    window.removeEventListener('touchmove', disableScroll);
    window.removeEventListener('mousemove', disableScroll);
  };

  const verifyAngle = () => {
    let typeAngle = "";
    let description = "";
    let color = "#000";

    if (angle <= 80) {
      typeAngle = "aigu";
      description = "Un angle aigu mesure moins de 90 degrés.";
      color = "#4CAF50";
      setCorrectAnswers(correctAnswers + 1);
    } else if (angle >= 85 && angle <= 95) {
      typeAngle = "droit";
      description = "Un angle droit mesure exactement 90 degrés.";
      color = "#2196F3";
      setCorrectAnswers(correctAnswers + 1);
    } else if (angle >= 100) {
      typeAngle = "obtus";
      description = "Un angle obtus mesure plus de 90 degrés mais moins de 180 degrés.";
      color = "#F44336";
      setIncorrectAnswers(incorrectAnswers + 1);
    }

    setMessage(`Vous avez formé un angle ${typeAngle}. ${description}`);
    setMessageColor(color);
    setQuestionsAnswered(questionsAnswered + 1);

    if (questionsAnswered + 1 >= TOTAL_QUESTIONS) {
      setIsLastQuestion(true);
    }
  };

  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

  const describeArc = (x, y, radius, startAngle, endAngle) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    const d = [
      "M", start.x, start.y, 
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
      "L", x, y,
      "Z"
    ].join(" ");
    return d;
  };

  const resetAngle = () => {
    setAngle(8);
    setMessage("Glissez le slider pour ouvrir l'angle");
  };

  const handleFinalSubmit = async () => {
    const endTime = new Date();
    const timeSpent = (endTime - entryTime) / 1000;

    const activityData = {
      userId: currentUser.uid,
      activityName: "AngleActivity",
      entryTime: entryTime.toISOString(),
      timeSpent: timeSpent,
      totalQuestions: TOTAL_QUESTIONS,
      correctAnswers,
      incorrectAnswers,
      allAnswersCorrect: correctAnswers === TOTAL_QUESTIONS,
    };

    try {
      await addDoc(collection(db, "activities"), activityData);
      console.log("Activity data sent:", activityData);
    } catch (e) {
      console.error("Error sending activity data:", e);
    }

    resetAngle(); // Reset the activity after sending the data
  };

  const radius = 60;

  return (
    <ActivityWrapper
      activityTitle={"AngleActivity"}
      explanationVideoUrl={"/Videos/angle_activity.mp4"}
      onSubmit={handleFinalSubmit}
      user={currentUser}
      activityName="AngleActivity"
    >
      <StyledBox>
        <img src="/images/Math/C/C1/pro2.png" alt="Activity" style={imageStyle} />
        <Card>
          <StyledText>Formez un angle et découvrez s'il est aigu, droit ou obtus!</StyledText>
        </Card>
      </StyledBox>
      <br />
      <div style={{ position: 'relative', width: '200px', height: '200px', margin: '40px auto' }}>
        <svg width="200" height="200" viewBox="0 0 200 200" style={{ position: 'absolute', top: '0', left: '0' }}>
          <path d={describeArc(100, 100, radius, 0, angle)} fill="red" />
          {angle > 0 && (
            <text x={getTextPosition(radius, angle).x} y={getTextPosition(radius, angle).y} fill="white" dy=".3em" textAnchor="middle">
              {angle}°
            </text>
          )}
        </svg>
        <div style={{ 
            position: 'absolute', 
            bottom: '50%', 
            left: '50%',
            width: '6px',
            height: '70%',
            marginLeft: '-2px',
            borderRadius: '2px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
            transformOrigin: 'bottom',
            transition: 'none',
            backgroundColor: '#2193b0',
            top: '50%', 
            transform: 'translate(-50%, -100%)'
          }}
        ></div>
        <div
          style={{
            position: 'absolute', 
            bottom: '50%', 
            left: '50%',
            width: '6px',
            height: '70%',
            marginLeft: '-2px',
            borderRadius: '2px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
            transformOrigin: 'bottom',
            transition: 'none',
            backgroundColor: '#2193b0',
            top: '50%',
            transform: `translate(-50%, -100%) rotate(${angle}deg)`
          }}
        ></div>
      </div>
      <br />
      <Card>
        <StyledText style={{ color: messageColor }}>{message}</StyledText>
      </Card>
      <div style={{ width: '80%', marginTop: '20px' }}>
        <StyledText>Angle actuel: {angle}°</StyledText>
        <Slider
          value={angle}
          min={0}
          max={180}
          onChange={handleSliderChange}
          onMouseDown={handleSliderStart}
          onMouseUp={handleSliderEnd}
          onTouchStart={handleSliderStart}
          onTouchEnd={handleSliderEnd}
        />
      </div>
      <br />
      <ButtonContainer>
        <Button variant="contained" color="primary" onClick={verifyAngle} disabled={isLastQuestion}>
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

export default AngleActivity;
