import React, { useState, useEffect } from "react";
import "./Exercice.css"; // Ensure this CSS file is created for animations
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
  const handleInputChange = (e) => {
    const value = e.target.value;
    onReponseChange(value); // Pass the input value to the parent component
  };

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
            <input
              type="text"
              className="small-input"
              placeholder="oui/non"
              onChange={handleInputChange}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

function Exercice() {
  const [tableData] = useState(["50", "410", "30"]); // Numbers to check
  const [currentRowIndex, setCurrentRowIndex] = useState(0); // Index of the current row
  const [reponse, setReponse] = useState(""); // User response
  const [feedback, setFeedback] = useState(""); // Feedback message
  const [results, setResults] = useState([]); // Array to store results
  const [animationClass, setAnimationClass] = useState(""); // State for managing animations
  const [score, setScore] = useState(0); // User score
  const [questionsAnswered, setQuestionsAnswered] = useState(0); // Count of questions answered
  const [isLastQuestion, setIsLastQuestion] = useState(false); // State to check if it's the last question
  const [entryTime, setEntryTime] = useState(null); // Time when activity started
  const { currentUser } = useAuth();
  const [playCorrect] = useSound(correctSound);
  const [playIncorrect] = useSound(incorrectSound);
  const totalQuestions = tableData.length; // Total number of questions

  useEffect(() => {
    setEntryTime(new Date()); // Set the start time when the component mounts
  }, []);

  // Function to check if the number is divisible by 2
  const handleCheckReponse = () => {
    const number = parseInt(tableData[currentRowIndex], 10); // Get the current number
    const isDivisibleBy2 = number % 2 === 0; // Check if divisible by 2
    let message;

    // Check the user's response
    if (
      (reponse.toLowerCase() === "oui" && isDivisibleBy2) ||
      (reponse.toLowerCase() === "non" && !isDivisibleBy2)
    ) {
      message = "Correct!"; // Correct answer
      setScore(score + 1);
      playCorrect();
    } else {
      message = "Incorrect, essayez encore."; // Incorrect answer
      playIncorrect();
    }

    // Update answered questions count
    setQuestionsAnswered(questionsAnswered + 1);

    // Store the result
    setResults((prevResults) => [
      ...prevResults,
      { chiffre: number, userReponse: reponse, message },
    ]);

    // Apply exit animation before moving to the next line
    setAnimationClass("fade-out");

    setTimeout(() => {
      if (currentRowIndex < tableData.length - 1) {
        // Move to the next line
        setCurrentRowIndex((prevIndex) => prevIndex + 1);
        setReponse(""); // Reset response
        setFeedback(""); // Reset feedback message
        setAnimationClass("fade-in"); // Apply entry animation

        // Reset animation classes after animation
        setTimeout(() => {
          setAnimationClass("");
        }, 500);
      } else {
        setFeedback("Exercice terminé!"); // End the exercise
        setIsLastQuestion(true);
      }
    }, 500); // Duration of exit animation
  };

  // Function to reset the activity
  const reset = () => {
    setCurrentRowIndex(0); // Start from the first line
    setIsLastQuestion(false);
    setResults([]); // Clear results
    setScore(0); // Reset score
    setQuestionsAnswered(0); // Reset answered questions count
    setFeedback(""); // Clear feedback
    setReponse(""); // Clear user input
    setAnimationClass(""); // Reset animation
  };

  // Function to handle the submission of activity data to Firestore
  const handleSubmit = async () => {
    const endTime = new Date();
    const timeSpent = (endTime - entryTime) / 1000; // Time spent in seconds

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
      await addDoc(collection(db, "users", currentUser.uid, "activities"), activityData);
      console.log("Activity data sent:", activityData);
    } catch (e) {
      console.error("Error sending activity data:", e);
    }

    reset(); // Reset the exercise after submitting
  };

  return (
    <ActivityWrapper
      activityTitle={"P2A2_1"}
      explanationVideoUrl={"/Videos/your_video_url.mp4"}
      onSubmit={handleSubmit}
      user={currentUser}
      activityName="P2A2_1"
    >
      <LinearProgressBar currentStep={questionsAnswered} totalSteps={totalQuestions} />

      <div>
       
        <img src={'/images/Math/C/C11/serveau.png'} alt="division" style={imageStyle} />
        <h2>Exercice: Divisibilité par 2</h2>
        {/* Display the current line with animation */}
        <Ligne
          chiffre={tableData[currentRowIndex]}
          onReponseChange={(value) => setReponse(value)}
          animationClass={animationClass}
        />

        {/* Display feedback message */}
        {feedback && <p>{feedback}</p>}

        {/* Buttons */}
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
