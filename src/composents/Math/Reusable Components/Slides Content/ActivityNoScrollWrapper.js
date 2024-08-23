import React, { useState, useEffect } from "react";
import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../Sign_in/v2/firebase";
import ExplanationVideo from "./ExplanationVideo";
import "./SlideContent.css";

const ActivityNoScrollWrapper = ({ activityTitle, explanationVideoUrl, children, onSubmit, user, activityName }) => {
  const [startTime, setStartTime] = useState(null);
  const [entryTime, setEntryTime] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleBeforeUnload = async (event) => {
      if (entryTime) {
        await sendActivityData();
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [entryTime]);

  const startActivity = () => {
    const now = new Date();
    setStartTime(now);
    setEntryTime(now);
    // Naviguer vers la page d'activité indépendante
    navigate("/activity-page");
  };

  const returnToVideo = async () => {
    await sendActivityData();
    navigate(-1); // Retour à la page précédente (section slide)
  };

  const sendActivityData = async () => {
    const endTime = new Date();
    const timeSpent = (endTime - startTime) / 1000; 

    const { allAnswersCorrect, totalQuestions, correctAnswers, incorrectAnswers } = onSubmit();

    const activityData = {
      activityName,
      entryTime: entryTime.toISOString(),
      timeSpent,
      isCompleted: allAnswersCorrect,
      totalQuestions,
      correctAnswers,
      incorrectAnswers,
    };

    try {
      await addDoc(collection(db, "users", user.uid, "activities"), activityData);
      console.log("Activity data sent:", activityData);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="main-container">
      <div className="activity-title">{activityTitle}</div>
      <div className="video-wrapper">
        <ExplanationVideo videoPath={explanationVideoUrl} explanationParagraph={["Vidéo explicative", "🎥 Regardez la vidéo pour savoir comment réaliser l'activité 🎬"]} altText="Video description" />
        <Box display="flex" justifyContent="center" mt={2}>
          <Button
            variant="contained"
            onClick={startActivity}
            style={{
              backgroundColor: "#007BFF",
              color: "white",
              borderRadius: "8px",
              padding: "10px 20px",
              fontSize: "16px",
              textTransform: "none",
            }}
          >
            Démarrer l'activité
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default ActivityNoScrollWrapper;
