import React, { useState, useEffect, useRef } from "react";
import { Box, Button, Typography, Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";
import ActivityWrapper from "../../../Reusable Components/Slides Content/ActivityWrapper";
import { useAuth } from "../../../../Sign_in/v2/context/AuthContext";
import correctSoundFile from '../../../../sounds/correct.mp3';
import incorrectSoundFile from '../../../../sounds/incorrect.mp3';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../../Sign_in/v2/firebase";
import { motion } from "framer-motion";
import "../../../../../App.css";
import anime from 'animejs';

const StyledBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '25px',
});

const MessageCard = styled(Card)({
  borderRadius: '40px',
  maxWidth: '300px',
  boxShadow: '4px 4px 4px 8px rgba(0.1, 0.1, 0.1, 0.1)',
  padding: '2px',
  marginLeft: '10px',
  marginTop: '-50px',
  marginRight: '10px',
  textAlign: 'center',
  transition: 'transform 0.3s',
  "&:hover": {
    transform: 'scale(1.05)',
  },
});

const ButtonContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '20px',
});

const numbers = [
  { value: 1000, category: "thousands" },
  { value: 1000000, category: "millions" },
  { value: 1000000000, category: "billions" },
  { value: 500000, category: "thousands" },
  { value: 750000000, category: "billions" },
];

const C1A3 = ({ currentIndex, segmentIndex }) => {
  const [randomNumber, setRandomNumber] = useState(
    numbers[Math.floor(Math.random() * numbers.length)]
  );
  const [feedback, setFeedback] = useState("");
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [isAnswering, setIsAnswering] = useState(false);
  const [showCongratsBanner, setShowCongratsBanner] = useState(false);
  const [showIncorrectBanner, setShowIncorrectBanner] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const { currentUser } = useAuth();
  const correctSound = useRef(new Audio(correctSoundFile));
  const incorrectSound = useRef(new Audio(incorrectSoundFile));

  const totalQuestions = 2;
  const [startTime] = useState(Date.now()); // Start time recorded at component mount

  useEffect(() => {
    if (questionsAnswered >= totalQuestions) {
      handleCompleteExercise();
    }
  }, [questionsAnswered]);

  useEffect(() => {
    if (isComplete) {
      anime({
        targets: '.flower-particle',
        translateX: () => anime.random(-100, 100),
        translateY: [0, anime.random(200, 600)],
        scale: [0, 2],
        opacity: [1, 0],
        easing: 'easeOutExpo',
        duration: anime.random(3000, 5000),
        delay: anime.stagger(10),
      });
    }
  }, [isComplete]);

  const handleButtonClick = (category) => {
    setIsAnswering(true);
    if (category === randomNumber.category) {
      setFeedback("Bien joué! Réponse correcte.");
      setCorrectAnswers((prev) => prev + 1);
      correctSound.current.play();
      setShowCongratsBanner(true);
    } else {
      setFeedback(`Oops! Mauvaise réponse. La bonne réponse est : ${randomNumber.category}`);
      setIncorrectAnswers((prev) => prev + 1);
      incorrectSound.current.play();
      setShowIncorrectBanner(true);
    }

    setTimeout(() => {
      setShowCongratsBanner(false);
      setShowIncorrectBanner(false);
      setRandomNumber(numbers[Math.floor(Math.random() * numbers.length)]);
      setQuestionsAnswered((prev) => prev + 1);
      setFeedback("");
      setIsAnswering(false);
    }, 2000);
  };

  const handleCompleteExercise = async () => {
    setIsComplete(true);
    const endTime = Date.now();
    const timeSpent = (endTime - startTime) / 1000; // time spent in seconds

    // Structure des données à envoyer
    const activityData = {
      userId: currentUser.uid,
      activityName: "C1A3",
      totalQuestions,
      correctAnswers,
      incorrectAnswers,
      entryTime: new Date(startTime).toISOString(),
      timeSpent,
      allAnswersCorrect: correctAnswers === totalQuestions,
    };

    try {
      await addDoc(collection(db, "users", currentUser.uid, "activities"), activityData);
      console.log("Activity data sent:", activityData);
    } catch (e) {
      console.error("Error sending activity data:", e);
    }
  };

  const formatNumberWithColors = (num) => {
    const numStr = num.toString();
    const length = numStr.length;

    let billionsPart = "",
      millionsPart = "",
      thousandsPart = "",
      restPart = "";

    if (length > 9) {
      billionsPart = numStr.slice(0, -9); 
      millionsPart = numStr.slice(-9, -6); 
      thousandsPart = numStr.slice(-6, -3); 
      restPart = numStr.slice(-3); 
    } else if (length > 6) {
      millionsPart = numStr.slice(0, -6); 
      thousandsPart = numStr.slice(-6, -3); 
      restPart = numStr.slice(-3); 
    } else if (length > 3) {
      thousandsPart = numStr.slice(0, -3); 
      restPart = numStr.slice(-3); 
    } else {
      restPart = numStr; 
    }

    return (
      <>
        {billionsPart && <span className="billions">{billionsPart},</span>}
        {millionsPart && <span className="millions">{millionsPart},</span>}
        {thousandsPart && <span className="thousands">{thousandsPart},</span>}
        {restPart && <span className="rest">{restPart}</span>}
      </>
    );
  };

  const handleReset = () => {
    setIsComplete(false);
    setQuestionsAnswered(0);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
    setRandomNumber(numbers[Math.floor(Math.random() * numbers.length)]);
    setFeedback("");
    setIsAnswering(false);
  };

  return (
    <ActivityWrapper
      activityTitle={"C1A3"}
      explanationVideoUrl={"/Videos/number_sorting.mp4"}
      user={currentUser}
      activityName="C1A3"
    >
      {isComplete && (
        <>
          <div className="flower-container">
            {Array.from({ length: 600 }).map((_, i) => (
              <div
                key={i}
                className="flower-particle"
                style={{ backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}` }}
              />
            ))}
          </div>
          <Typography variant="h4" style={{ fontWeight: "bold", marginTop: "20px" }}>
            Félicitations! Vous avez terminé l'activité.
          </Typography>
          <Typography variant="body1" style={{ marginTop: "10px" }}>
            Total des bonnes réponses : {correctAnswers}/{totalQuestions}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleReset}
            style={{ marginTop: '20px' }}
          >
            Recommencer l'activité
          </Button>
        </>
      )}

      {!isComplete && (
        <>
          <div className="App" style={{ textAlign: "center", padding: "20px" }}>
          <h2>Quel est ce nombre ?</h2>

          <div className="number-container" style={{ marginBottom: "20px" }}>
            <h1>{formatNumberWithColors(randomNumber.value)}</h1>
          </div>
          </div>
          

          <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
              <div className="buttons-container" style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
                <button onClick={() => handleButtonClick("thousands")} disabled={isAnswering} style={{ padding: "15px", fontSize: "1.2rem", cursor: "pointer" }}>
                  Milliers
                </button>
                <button onClick={() => handleButtonClick("millions")} disabled={isAnswering} style={{ padding: "15px", fontSize: "1.2rem", cursor: "pointer" }}>
                  Millions
                </button>
                <button onClick={() => handleButtonClick("billions")} disabled={isAnswering} style={{ padding: "15px", fontSize: "1.2rem", cursor: "pointer" }}>
                  Milliards
                </button>
              </div>

            {showCongratsBanner && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{ backgroundColor: '#d4edda', color: '#155724', borderRadius: '10px', padding: '15px 25px', marginTop: '20px' }}
              >
                🎉 Bien joué! +1 XP
              </motion.div>
            )}

            {showIncorrectBanner && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{ backgroundColor: '#f8d7da', color: '#721c24', borderRadius: '10px', padding: '15px 25px', marginTop: '20px' }}
              >
                ❌ Oops! Mauvaise réponse. La bonne réponse est : {randomNumber.category}
              </motion.div>
            )}
          </Box>
        </>
      )}
    </ActivityWrapper>
  );
};

export default C1A3;
