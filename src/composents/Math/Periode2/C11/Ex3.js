import React, { useState, useEffect } from "react";
import "../../Exercice.css"; 
import useSound from "use-sound";
import correctSound from "../../../sounds/correct.mp3";
import incorrectSound from "../../../sounds/incorrect.mp3";
import ActivityWrapper from "../../Reusable Components/Slides Content/ActivityWrapper";
import { useAuth } from "../../../Sign_in/v2/context/AuthContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../Sign_in/v2/firebase";
import LinearProgressBar from "../../Reusable Components/ProgressIndicator";
import { Box, Button } from "@mui/material";

export const imageStyle = {
  width: "40%",
  height: "50%",
  maxWidth: "90%",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
};

function Ligne({ chiffre, onReponseChange, animationClass }) {
  return (
    <table className={`conversion-table ${animationClass}`}>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Réponse</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{chiffre}</td>
          <td>
            <Button
              variant="contained"
              color="primary"
              onClick={() => onReponseChange("oui")} 
              style={{ marginRight: "10px" }}
            >
              Oui
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => onReponseChange("non")} 
            >
              Non
            </Button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

function Exercice() {
  const [tableData] = useState(["23451", "6357", "9870"]); 
  const [currentRowIndex, setCurrentRowIndex] = useState(0); 
  const [reponse, setReponse] = useState(""); 
  const [feedback, setFeedback] = useState(""); 
  const [results, setResults] = useState([]); 
  const [animationClass, setAnimationClass] = useState(""); 
  const [score, setScore] = useState(0); 
  const [questionsAnswered, setQuestionsAnswered] = useState(0); 
  const [isLastQuestion, setIsLastQuestion] = useState(false); 
  const [entryTime, setEntryTime] = useState(null); 
  const { currentUser } = useAuth(); 
  const [playCorrect] = useSound(correctSound);
  const [playIncorrect] = useSound(incorrectSound);
  const totalQuestions = tableData.length; 

  useEffect(() => {
    setEntryTime(new Date());
  }, []);

  
  const handleReponseChange = (value) => {
    setReponse(value);
    setFeedback(""); 
  };


  const handleCheckReponse = () => {
    if (!reponse) {
      setFeedback("Veuillez choisir une réponse avant de continuer."); 
      return;
    }

    const number = parseInt(tableData[currentRowIndex], 10); 
    const isDivisibleBy2 = number % 3 === 0; 
    let message;

    if (
      (reponse.toLowerCase() === "oui" && isDivisibleBy2) ||
      (reponse.toLowerCase() === "non" && !isDivisibleBy2)
    ) {
      message = "Correct!";
      setScore(score + 1);
      playCorrect();
    } else {
      message = "Incorrect, essayez encore.";
      playIncorrect();
    }

    setQuestionsAnswered(questionsAnswered + 1);
    setResults((prevResults) => [
      ...prevResults,
      { chiffre: number, userReponse: reponse, message },
    ]);

    setAnimationClass("fade-out"); 

    setTimeout(() => {
      if (currentRowIndex < tableData.length - 1) {
        setCurrentRowIndex((prevIndex) => prevIndex + 1);
        setReponse(""); 
        setFeedback(""); 
        setAnimationClass("fade-in"); 

        setTimeout(() => {
          setAnimationClass(""); 
        }, 500);
      } else {
        setFeedback("Exercice terminé!");
        setIsLastQuestion(true);
      }
    }, 500); 
  };

 
  const reset = () => {
    setCurrentRowIndex(0);
    setIsLastQuestion(false);
    setResults([]);
    setScore(0); 
    setQuestionsAnswered(0); 
    setFeedback(""); 
    setReponse(""); 
    setAnimationClass(""); 
  };


  const handleSubmit = async () => {
    const endTime = new Date();
    const timeSpent = (endTime - entryTime) / 1000; 

    const activityData = {
      userId: currentUser.uid,
      activityName: "P2A2_1",
      entryTime: entryTime.toISOString(),
      timeSpent: timeSpent,
      totalQuestions: totalQuestions,
      correctAnswers: score,
      incorrectAnswers: totalQuestions - score,
      allAnswersCorrect: score === totalQuestions,
    };

    try {
      await addDoc(
        collection(db, "users", currentUser.uid, "activities"),
        activityData
      );
      console.log("Activity data sent:", activityData);
    } catch (e) {
      console.error("Error sending activity data:", e);
    }

    reset(); 
  };

  return (
    <ActivityWrapper
      activityTitle={"P2A2_1"}
      explanationVideoUrl={"/Videos/your_video_url.mp4"}
      onSubmit={handleSubmit}
      user={currentUser}
      activityName="P2A2_1"
    >
      <LinearProgressBar
        currentStep={questionsAnswered}
        totalSteps={totalQuestions}
      />

      <div>
        <img
          src={"/images/ines2.png"}
          alt="division"
          style={imageStyle}
        />
        <h2>Exercice: Divisibilité par 3</h2>

       
        <Ligne
          chiffre={tableData[currentRowIndex]}
          onReponseChange={handleReponseChange} 
          animationClass={animationClass}
        />

       
        {feedback && <p>{feedback}</p>}

       
        <Box display="flex" justifyContent="center" mt={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCheckReponse} 
            disabled={isLastQuestion}
            style={{ marginRight: "10px" }}
          >
            Répondre
          </Button>
          <Button
            variant="contained"
            color="primary"
            disabled={!isLastQuestion}
            onClick={handleSubmit} 
          >
            Terminer
          </Button>
        </Box>
      </div>
    </ActivityWrapper>
  );
}

export default Exercice;
