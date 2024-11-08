import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardContent,
  Box,
  TextField,
  Typography,
} from "@mui/material";
import useSound from "use-sound";
import correctSound from '../../../sounds/correct.mp3';
import incorrectSound from '../../../sounds/incorrect.mp3';
import ActivityWrapper from "../../Reusable Components/Slides Content/ActivityWrapper";
import { useAuth } from "../../../Sign_in/v2/context/AuthContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../Sign_in/v2/firebase";
import LinearProgressBar from "../../Reusable Components/ProgressIndicator";

function P2A2_1() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const [entryTime, setEntryTime] = useState(null);
  const { currentUser } = useAuth();
  const [play] = useSound(correctSound);
  const [play1] = useSound(incorrectSound);
  const totalQuestions = 3;
  const [questionsAnswered, setQuestionsAnswered] = useState(0);

  const generateQuestions = () => {
    const newQuestions = [
      {
        question:
          "Brahim vient d'acheter une voiture d'occasion à un ami à 785 000 UM. Pour la peinture et la tôlerie, Diallo a dépensé 45 000 UM. Quel est le prix de revient et le bénéfice de Brahim s'il la revend à 1 020 000 UM ?",
        answer: 785000 + 45000,
        answer1: 1020000 - (785000 + 45000),
        hasTwo: true,
        answerLabel: "Le prix de revient",
        answer1Label: "Le bénéfice",
      },
      {
        question:
          "Emma a acheté un ordinateur portable d'occasion pour 350 $, et elle a dépensé 75 $ en réparations. Elle l'a ensuite vendu pour 550 $. Quel est le prix de revient et le bénéfice ?",
        answer: 350 + 75,
        answer1: 550 - (350 + 75),
        hasTwo: true,
        answerLabel: "Le prix de revient",
        answer1Label: "Le bénéfice",
      },
      {
        question:
          "Alex a acheté une bicyclette usagée pour 100 €. Il a dépensé 25 € pour des réparations, puis l'a revendue pour 200 €. Quel est le prix de revient et le bénéfice ?",
        answer: 100 + 25,
        answer1: 200 - (100 + 25),
        hasTwo: true,
        answerLabel: "Le prix de revient",
        answer1Label: "Le bénéfice",
      },
    ];
    setQuestions(newQuestions);
  };

  useEffect(() => {
    const now = new Date();
    setEntryTime(now);
    generateQuestions();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowMessage(true);

    if (
      parseInt(answer) === questions[currentIndex]?.answer &&
      parseInt(answer1) === questions[currentIndex]?.answer1
    ) {
      setShowCongratulations(true);
      play();
    } else {
      setShowCongratulations(false);
      play1();
    }
    setQuestionsAnswered(questionsAnswered + 1);

    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        nextQuestion();
      } else {
        setIsLastQuestion(true);
      }
    }, 2000);
  };

  const nextQuestion = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setShowMessage(false);
    setShowCongratulations(false);
    setAnswer("");
    setAnswer1("");
  };

  const reset = () => {
    setCurrentIndex(0);
    setIsLastQuestion(false);
    setShowMessage(false);
    setShowCongratulations(false);
    setAnswer("");
    setAnswer1("");
    setQuestionsAnswered(0);
  };

  const submitActivity = async () => {
    const endTime = new Date();
    const timeSpent = (endTime - entryTime) / 1000;

    const activityData = {
      userId: currentUser.uid,
      activityName: "P2A2_1",
      entryTime: entryTime.toISOString(),
      timeSpent: timeSpent,
      totalQuestions: questions.length,
      correctAnswers: showCongratulations ? 1 : 0,
      incorrectAnswers: !showCongratulations ? 1 : 0,
      allAnswersCorrect: showCongratulations && currentIndex === questions.length - 1,
    };

    try {
      await addDoc(collection(db, 'users', currentUser.uid, 'activities'), activityData);
      console.log('Activity data sent:', activityData);
    } catch (e) {
      console.error('Error sending activity data:', e);
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
      <LinearProgressBar currentStep={questionsAnswered} totalSteps={totalQuestions} />

      <CardContent>
        <div style={{ position: "relative" }}>
          <img
            src={"images/Math/C/imagesC10/car.png"}
            alt="car"
            style={{
              width: "60%",
              height: "160px",
              marginLeft: "75%",
              marginTop: "155px",
            }}
          />
          <Card
            style={{
              position: "absolute",
              bottom: "-10%",
              left: "30%",
              transform: "translate(-50%, -50%)",
              borderRadius: "10px",
              backgroundColor: "#2196f3",
              padding: "0px",
              color: "#ffffff",
              width: "250px",
            }}
          >
            <CardContent>
              {!showMessage && questions[currentIndex] && (
                <Typography variant="body1" style={{ color: "#ffffff" }}>
                  {questions[currentIndex]?.question}
                </Typography>
              )}

              {showCongratulations && (
                <Typography variant="body1" style={{ color: "#ffffff" }}>
                  Félicitations! Vous avez donné la bonne réponse!
                </Typography>
              )}
              {showMessage && !showCongratulations && (
                <Typography variant="body1" style={{ color: "#ffffff" }}>
                  Réponse incorrecte. Essayez encore!
                </Typography>
              )}
            </CardContent>
          </Card>
        </div>

        <Box my={2}>
          <form onSubmit={handleSubmit}>
            {questions[currentIndex] && (
              <>
                <TextField
                  label={questions[currentIndex]?.answerLabel}
                  type="number"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  fullWidth
                  required
                />
                {questions[currentIndex]?.hasTwo && (
                  <>
                    <h1></h1>
                    <TextField
                      label={questions[currentIndex]?.answer1Label}
                      type="number"
                      value={answer1}
                      onChange={(e) => setAnswer1(e.target.value)}
                      fullWidth
                      required
                    />
                  </>
                )}
              </>
            )}
            <Box display="flex" justifyContent="center" mt={2}>
              <Button
                variant="contained"
                color="primary"
                style={{ marginRight: "10px" }}
                type="submit"
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
          </form>
        </Box>
      </CardContent>
    </ActivityWrapper>
  );
}

export default P2A2_1;
