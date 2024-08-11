import React, { useState, useEffect } from "react";
import ExplanationVideo from "./ExplanationVideo";
import { Button, Box } from "@mui/material";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../Sign_in/v2/firebase"; // Assurez-vous que le chemin est correct
import "./SlideContent.css";
import { getStorage, ref, getDownloadURL } from "firebase/storage"; // Import Firebase functions

const ActivityWrapper = ({ activityTitle, explanationVideoUrl, children, onSubmit, user, activityName }) => {
    const [showVideo, setShowVideo] = useState(true);
    const [startTime, setStartTime] = useState(null);
    const [entryTime, setEntryTime] = useState(null);
    const [questionsAnswered, setQuestionsAnswered] = useState(0);

    useEffect(() => {
        const handleBeforeUnload = async (event) => {
            if (questionsAnswered >= 1) {
                await sendActivityData();
            }
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [questionsAnswered]);

    const startActivity = () => {
        const now = new Date();
        setStartTime(now);
        setEntryTime(now);
        setShowVideo(false);
        console.log("Activity started at: ", now); // Affiche le moment où l'activité commence
    };

    const returnToVideo = async () => {
        await sendActivityData();
        setShowVideo(true);
    };

    const sendActivityData = async () => {
        const endTime = new Date();
        const timeSpent = (endTime - startTime) / 1000; // Calcul du temps passé en secondes

        // Appeler onSubmit pour obtenir le résultat
        const { allAnswersCorrect, totalQuestions, correctAnswers, incorrectAnswers } = onSubmit();

        const activityData = {
            activityName: activityName,
            entryTime: entryTime.toISOString(),
            timeSpent: timeSpent,
            isCompleted: allAnswersCorrect,
            totalQuestions: totalQuestions,
            correctAnswers: correctAnswers,
            incorrectAnswers: incorrectAnswers,
        };

        console.log("Storing activity data: ", activityData); // Affiche les données à stocker

        await storeActivityData(user.uid, activityData); // Stocke les données dans Firestore
    };

    const storeActivityData = async (userId, activityData) => {
        try {
            // Référence à la sous-collection 'activities' sous chaque utilisateur
            const userActivitiesCollection = collection(db, "users", userId, "activities");
            const docRef = await addDoc(userActivitiesCollection, activityData);
            console.log("Document written with ID: ", docRef.id); // Affiche l'ID du document stocké
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    return (
        <div className="main-container">
            <div className="activity-title">{activityTitle}</div>
            {showVideo ? (
                <div className="video-wrapper">
                    <ExplanationVideo videoPath={explanationVideoUrl} explanationParagraph={["Video explicatif", "🎥 Regardez la vidéo pour savoir comment réaliser l'activité 🎬"]} altText="Video description" />
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
                            Start Activity
                        </Button>
                    </Box>
                </div>
            ) : (
                <div className="activity-wrapper">
                    <div className="children-wrapper">{children}</div>
                    <Box display="flex" justifyContent="center" mt={2}>
                        <Button
                            variant="contained"
                            onClick={returnToVideo}
                            style={{
                                borderRadius: "8px",
                                padding: "10px 20px",
                                fontSize: "16px",
                                textTransform: "none",
                            }}
                        >
                            🎬 Voir la vidéo
                        </Button>
                    </Box>
                </div>
            )}
        </div>
    );
};

export default ActivityWrapper;
