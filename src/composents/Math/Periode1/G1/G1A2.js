import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { Howl } from 'howler';
import correctSoundFile from '../../../sounds/correct.mp3';
import incorrectSoundFile from '../../../sounds/incorrect.mp3';
import ActivityWrapper from '../../Reusable Components/Slides Content/ActivityWrapper';
import { useAuth } from '../../../Sign_in/v2/context/AuthContext';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../Sign_in/v2/firebase";

const TOTAL_QUESTIONS = 7;

const Card = styled.div`
  background-color: white;
  width: 90%;
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

const StyledText = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 80%;
  transition: background-color 0.4s, transform 0.3s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  font-family: 'Comic Sans MS', sans-serif;

  &:hover {
    transform: scale(1.05);
  }
`;

const lineStyle = { stroke: "black", strokeWidth: "2", strokeLinecap: "round" };

function QuizComponent() {
  const [lineRelation, setLineRelation] = useState(null);
  const [userAnswer, setUserAnswer] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [lineVariation, setLineVariation] = useState(null);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const [entryTime, setEntryTime] = useState(null);
  const { currentUser } = useAuth();

  const correctSound = new Howl({
    src: [correctSoundFile]
  });

  const incorrectSound = new Howl({
    src: [incorrectSoundFile]
  });

  useEffect(() => {
    generateLines(); // Génère les lignes initiales dès le chargement du composant
    const now = new Date();
    setEntryTime(now);

    // Disable scrolling when component mounts
    disableScrolling();

    // Re-enable scrolling when component unmounts
    return () => {
      enableScrolling();
    };
  }, []);

  const disableScrolling = () => {
    window.addEventListener('scroll', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });
  };

  const enableScrolling = () => {
    window.removeEventListener('scroll', preventScroll);
    window.removeEventListener('touchmove', preventScroll);
  };

  const preventScroll = (e) => {
    e.preventDefault();
  };

  const generateLines = () => {
    setUserAnswer(null);
    setShowAnswer(false);
    const randomChoice = Math.floor(Math.random() * 3);
    const randomVariation = Math.floor(Math.random() * 3);
    setLineRelation(randomChoice === 0 ? "parallel" : randomChoice === 1 ? "perpendicular" : "none");
    setLineVariation(randomVariation);
  };

  const checkAnswer = (answer) => {
    setUserAnswer(answer);
    setShowAnswer(true);

    if (answer === lineRelation) {
      setCorrectAnswers(correctAnswers + 1);
      correctSound.play();
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
      incorrectSound.play();
    }

    setQuestionsAnswered(questionsAnswered + 1);
    if (questionsAnswered + 1 >= TOTAL_QUESTIONS) {
      setIsLastQuestion(true);
    }
  };

  const renderLines = () => {
    if (lineRelation === null || lineVariation === null) {
      return null;
    }

    switch (lineRelation) {
      case "parallel":
        return renderParallelLines();
      case "perpendicular":
        return renderPerpendicularLines();
      case "none":
        return renderNoRelationLines();
      default:
        return null;
    }
  };

  const renderParallelLines = () => {
    switch (lineVariation) {
      case 0:  // Horizontales
        return (
          <svg width="200" height="100">
            <line x1="10" y1="40" x2="190" y2="40" {...lineStyle} />
            <line x1="10" y1="60" x2="190" y2="60" {...lineStyle} />
          </svg>
        );
      case 1:  // Verticales
        return (
          <svg width="200" height="100">
            <line x1="80" y1="10" x2="80" y2="90" {...lineStyle} />
            <line x1="120" y1="10" x2="120" y2="90" {...lineStyle} />
          </svg>
        );
      case 2:  // Inclinées
        return (
          <svg width="200" height="100">
            <line x1="30" y1="30" x2="170" y2="30" {...lineStyle} />
            <line x1="30" y1="70" x2="170" y2="70" {...lineStyle} />
          </svg>
        );
      default:
        return null;
    }
  };

  const renderPerpendicularLines = () => {
    switch (lineVariation) {
      case 0:  // Standard
        return (
          <svg width="200" height="100">
            <line x1="10" y1="50" x2="100" y2="50" {...lineStyle} />
            <line x1="100" y1="10" x2="100" y2="90" {...lineStyle} />
          </svg>
        );
      case 1:  // Inversé
        return (
          <svg width="200" height="100">
            <line x1="50" y1="10" x2="50" y2="90" {...lineStyle} />
            <line x1="10" y1="50" x2="190" y2="50" {...lineStyle} />
          </svg>
        );
      case 2:  // Inclinées
        return (
          <svg width="200" height="200">
            <line x1="30" y1="30" x2="170" y2="70" {...lineStyle} />
            <line x1="170" y1="70" x2="130" y2="210" {...lineStyle} />
          </svg>
        );
      default:
        return null;
    }
  };

  const renderNoRelationLines = () => {
    switch (lineVariation) {
      case 0:  // Ligne sans relation particulière
        return (
          <svg width="200" height="100">
            <line x1="10" y1="10" x2="190" y2="10" {...lineStyle} />
            <line x1="10" y1="90" x2="190" y2="50" {...lineStyle} />
          </svg>
        );
      case 1:
        return (
          <svg width="200" height="100">
            <line x1="100" y1="10" x2="100" y2="90" {...lineStyle} transform="rotate(30 100 50)" />
            <line x1="10" y1="50" x2="190" y2="50" {...lineStyle} transform="rotate(30 100 50)" />
          </svg>
        );
      case 2:
        return (
          <svg width="200" height="100">
            <line x1="50" y1="10" x2="150" y2="90" {...lineStyle} />
            <line x1="150" y1="10" x2="50" y2="90" {...lineStyle} />
          </svg>
        );
      default:
        return null;
    }
  };

  const handleNextButtonClick = () => {
    generateLines();
    setShowAnswer(false);
  };

  const handleFinalSubmit = () => {
    sendActivityData();
  };

  const checkFinalResult = () => {
    const allAnswersCorrect = correctAnswers >= 1;
    return { allAnswersCorrect, totalQuestions: TOTAL_QUESTIONS, correctAnswers, incorrectAnswers };
  };

  const sendActivityData = async () => {
    const endTime = new Date();
    const timeSpent = (endTime - entryTime) / 1000;
    const { allAnswersCorrect, totalQuestions, correctAnswers, incorrectAnswers } = checkFinalResult();

    const activityData = {
      userId: currentUser.uid,
      activityName: "QuizComponent",
      entryTime: entryTime.toISOString(),
      timeSpent: timeSpent,
      totalQuestions,
      correctAnswers,
      incorrectAnswers,
      allAnswersCorrect
    };

    try {
      await addDoc(collection(db, 'activities'), activityData);
      console.log('Activity data sent:', activityData);
    } catch (e) {
      console.error('Error sending activity data:', e);
    }

    handleReset(); // Reset the activity after sending the data
  };

  const handleReset = () => {
    setUserAnswer(null);
    setShowAnswer(false);
    setQuestionsAnswered(0);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
    setIsLastQuestion(false);
    generateLines();
  };

  return (
    <ActivityWrapper
      activityTitle={"QuizComponent"}
      explanationVideoUrl={"/Videos/quiz_explanation.mp4"}
      onSubmit={checkFinalResult}
      user={currentUser}
      activityName="QuizComponent"
    >
      <div style={{ textAlign: 'center' }}>
        <Card>
          <br />
          <Card>
            <StyledText> Ces deux lignes sont-elles parallèles, perpendiculaires ou d'une autre relation ?</StyledText>
          </Card>
          <br />
          <br />
          <div style={{ marginBottom: '20px' }}>
            {renderLines()}
          </div>

          <div>
            {["parallel", "perpendicular", "none"].map((answer) => (
              <Button
                key={answer}
                variant="contained"
                color="primary"
                onClick={() => checkAnswer(answer)}
                style={{ margin: '5px', padding: answer === "none" ? '10px' : undefined }}
                disabled={showAnswer}
              >
                {answer === "parallel" ?
                  <span style={{ fontSize: '24px' }}>∥</span>
                  : answer === "perpendicular" ?
                    <span style={{ fontSize: '24px' }}>⊥</span>
                    : "Autre"}
              </Button>
            ))}
          </div>

          {showAnswer && (
            <div style={{ marginTop: '20px' }}>
              {userAnswer === lineRelation ? (
                <span style={{ color: 'green' }}><StyledText>Correct!</StyledText></span>
              ) : (
                <span style={{ color: 'red' }}><StyledText>Faux! La réponse correcte est {lineRelation}</StyledText></span>
              )}
            </div>
          )}

          <br />
          <Button
            variant="contained"
            color="secondary"
            onClick={handleNextButtonClick}
            style={{ marginTop: '20px' }}
            disabled={!showAnswer}
          >
            Suivant
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleFinalSubmit}
            style={{ marginTop: '20px',marginLeft:'20px' }}
            disabled={!isLastQuestion}
          >
            Terminer
          </Button>
        </Card>
      </div>
    </ActivityWrapper>
  );
}

export default QuizComponent;
