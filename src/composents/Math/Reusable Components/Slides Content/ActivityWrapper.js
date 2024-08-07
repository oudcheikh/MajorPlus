import React, { useState } from "react";
import ExplanationVideo from "./ExplanationVideo";
import { Button } from "@mui/material";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../Sign_in/v2/firebase"; // Assurez-vous que le chemin est correct
import "./SlideContent.css";

const ActivityWrapper = ({ activityTitle, explanationVideoUrl, children, onSubmit, user, activityName }) => {
    const [showVideo, setShowVideo] = useState(true);
    const [startTime, setStartTime] = useState(null);
    const [entryTime, setEntryTime] = useState(null);

    const startActivity = () => {
        const now = new Date();
        setStartTime(now);
        setEntryTime(now);
        setShowVideo(false);
        console.log("Activity started at: ", now); // Affiche le moment où l'activité commence
    };

    const returnToVideo = async () => {
        const endTime = new Date();
        const timeSpent = (endTime - startTime) / 1000; // Calcul du temps passé en secondes

        // Appeler onSubmit pour obtenir le résultat et le score
        const { allAnswersCorrect, calculatedScore } = onSubmit();

        const activityData = {
            activityName: activityName,
            entryTime: entryTime.toISOString(),
            timeSpent: timeSpent,
            isCompleted: allAnswersCorrect,
            score: calculatedScore,
        };

        console.log("Storing activity data: ", activityData); // Affiche les données à stocker

        await storeActivityData(user.uid, activityData); // Stocke les données dans Firestore

        setShowVideo(true);
    };

    const checkAnswer = async () => {
        if (!user || !user.uid) {
            console.error("User is not defined or does not have a uid");
            return;
        }
        await returnToVideo(); // Appeler returnToVideo pour enregistrer les données
    };

    const storeActivityData = async (userId, activityData) => {
        try {
            // Référence à la sous-collection 'activities' sous chaque utilisateur
            const userActivitiesCollection = collection(db, 'users', userId, 'activities');
            const docRef = await addDoc(userActivitiesCollection, activityData);
            console.log('Document written with ID: ', docRef.id); // Affiche l'ID du document stocké
        } catch (e) {
            console.error('Error adding document: ', e);
        }
    };

    return (
        <div className="main-container">
            <div className="activity-title">{activityTitle}</div>
            {showVideo ? (
                <div className="video-wrapper">
                    <ExplanationVideo videoUrl={explanationVideoUrl} explanationParagraph={["First paragraph", "Second paragraph"]} altText="Video description" />
                    <Button variant="contained" onClick={startActivity}>
                        Start Activity
                    </Button>
                </div>
            ) : (
                <div className="activity-wrapper">
                    <div className="children-wrapper">{children}</div>
                    <div className="button-wrapper">
                        <Button variant="contained" onClick={async () => {
                            await checkAnswer();
                            setShowVideo(true);
                        }}>
                            Retourner a la video
                        </Button>
                        <Button variant="contained" onClick={checkAnswer}>
                            Verifier la correction
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ActivityWrapper;
