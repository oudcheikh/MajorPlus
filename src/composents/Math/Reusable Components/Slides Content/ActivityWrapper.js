import React, { useState, useEffect } from "react";
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

    const checkAnswer = async () => {
        if (!user || !user.uid) {
            console.error("User is not defined or does not have a uid");
            return;
        }

        const endTime = new Date();
        const timeSpent = (endTime - startTime) / 1000; // Calcul du temps passé en secondes

        const activityData = {
            userId: user.uid,
            activityName: activityName,
            entryTime: entryTime.toISOString(),
            timeSpent: timeSpent
        };

        console.log("Storing activity data: ", activityData); // Affiche les données à stocker

        await storeActivityData(activityData); // Stocke les données dans Firestore

        onSubmit(); // Appel de la fonction de soumission après le stockage des données
    };

    const storeActivityData = async (activityData) => {
        try {
            const docRef = await addDoc(collection(db, 'activities'), activityData);
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
                        <Button variant="contained" onClick={() => setShowVideo(true)}>
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
