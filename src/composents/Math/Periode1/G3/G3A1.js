import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ActivityWrapper from "../../Reusable Components/Slides Content/ActivityWrapper";
import { useAuth } from "../../../Sign_in/v2/context/AuthContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../Sign_in/v2/firebase";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const TOTAL_QUESTIONS = 7;

const Card1 = styled.div`
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

const StyledText = styled.p`
    
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
    font-family: 'Comic Sans MS', sans-serif;
`;

const StyledSVG = styled.svg`
    line {
        stroke: #3498db;
        stroke-width: 4;
    }
    text {
        font-weight: bold;
        fill: #e74c3c;
        font-size: 1.5em;
        text-shadow: 2px 2px #ecf0f1;
    }
`;

const StyledButton = styled(Button)`
    padding: 4px 6px;
    margin: 0 2px;
    font-size: 0.8em;
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

const MessageCard = styled(Card1)`
  border-radius: 40px;
  max-width: 300px;
  box-shadow: 4px 4px 4px 8px rgba(0.1, 0.1, 0.1, 0.1);
  padding: 2px;
  margin-left: 10px;
  margin-top: -50px;
  margin-right: 10px;
  text-align: center;
  transition: transform 0.3s;
  &:hover {
      transform: scale(1.05);
  }
`;

const StyledBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

function AngleSorting() {
    const [order, setOrder] = useState([]);
    const [anglesData, setAnglesData] = useState(generateAngles());
    const [message, setMessage] = useState('');
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

    function generateAngles() {
        const angles = [];
        while (angles.length < 5) {
            const newAngle = 20 + Math.floor(Math.random() * 140);
            let isFarEnough = true;
            for (const angle of angles) {
                if (Math.abs(angle.angle - newAngle) < 20) {
                    isFarEnough = false;
                    break;
                }
            }
            if (isFarEnough) {
                angles.push({ id: String.fromCharCode(65 + angles.length), angle: newAngle });
            }
        }
        return angles;
    }

    const handleAngleSelection = (angleType) => {
        if (!order.includes(angleType)) {
            setOrder([...order, angleType]);
        }
    };

    const handleReset = () => {
        setAnglesData(generateAngles());
        setOrder([]);
        setMessage('');
    };

    const checkAnswer = () => {
        const sortedAngles = [...anglesData].sort((a, b) => a.angle - b.angle);
        for (let i = 0; i < sortedAngles.length; i++) {
            if (sortedAngles[i].id !== order[i]) {
                return false;
            }
        }
        return true;
    };

    const handleSubmit = () => {
        const isCorrect = checkAnswer();
        setQuestionsAnswered(questionsAnswered + 1);

        if (isCorrect) {
            setMessage("Bravo! Votre réponse est correcte.");
            setCorrectAnswers(correctAnswers + 1);
        } else {
            setMessage("Désolé! Veuillez réessayer.");
            setIncorrectAnswers(incorrectAnswers + 1);
        }

        if (questionsAnswered + 1 >= TOTAL_QUESTIONS) {
            setIsLastQuestion(true);
        }

        setTimeout(() => {
            setMessage('');
            if (!isLastQuestion) {
                handleReset();
            }
        }, 2000);
    };

    const handleFinalSubmit = async () => {
        const endTime = new Date();
        const timeSpent = (endTime - entryTime) / 1000;

        const activityData = {
            userId: currentUser.uid,
            activityName: "AngleSorting",
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

        handleReset(); // Reset the activity after sending the data
    };

    return (
        <ActivityWrapper
            activityTitle={"AngleSorting"}
            explanationVideoUrl={"/Videos/angle_sorting.mp4"}
            onSubmit={handleFinalSubmit}
            user={currentUser}
            activityName="AngleSorting"
        >
            <StyledBox>
                <img src="/images/Math/C/C1/pro2.png" alt="Activity" style={imageStyle} />
                <MessageCard>
                    <CardContent>
                        <StyledText>Les angles sont ici nommés par leur sommet. Classe-les selon un ordre croissant.</StyledText>
                    </CardContent>
                </MessageCard>
            </StyledBox>
            <Card variant="outlined" style={{ padding: '20px', margin: '20px auto', maxWidth: '100%' }}>
                <CardContent>
                    <StyledSVG width="100%" viewBox="0 0 500 250">
                        {anglesData.map((angleData, index) => {
                            const x = 50 + (index % 3) * 160;
                            const y = index < 3 ? 50 : 150;
                            const endX = x + 70 * Math.cos(Math.PI * angleData.angle / 180);
                            const endY = y - 70 * Math.sin(Math.PI * angleData.angle / 180);
                            return (
                                <React.Fragment key={index}>
                                    <line x1={x} y1={y} x2={x + 70} y2={y} />
                                    <line x1={x} y1={y} x2={endX} y2={y - (endY - y)} />
                                    <text x={x} y={y} dx="-20" dy="5">{angleData.id}</text>
                                </React.Fragment>
                            );
                        })}
                    </StyledSVG>
                   
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2px', marginTop: '2px' }}>
                        {anglesData.map(angleData => (
                            <StyledButton key={angleData.id} variant="contained" color="primary" onClick={() => handleAngleSelection(angleData.id)}>
                                {angleData.id}
                            </StyledButton>
                        ))}
                    </div>
                </CardContent>
                <ButtonContainer>
                    <Button variant="contained" color="primary" onClick={handleSubmit} disabled={order.length < 5}>
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
                <CardContent>
                    <StyledText>Ordre choisi:</StyledText>
                    <Typography align="center">
                        {order.map((angle, index) => (
                            <span key={index}>{angle} {(index !== order.length - 1) && "->"}</span>
                        ))}
                    </Typography>
                    <Typography align="center" color="error">{message}</Typography>
                </CardContent>
            </Card>
        </ActivityWrapper>
    );
}

export default AngleSorting;
