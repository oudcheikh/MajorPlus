import React, { useState } from "react";
import ExplanationVideo from "./ExplanationVideo";
import { Button } from "@mui/material";
import "./SlideContent.css";
const ActivityWrapper = ({ activityTitle, explanationVideoUrl, children, onSubmit }) => {
    const [showVideo, setShowVideo] = useState(true);

    const checkAnswer = () => {
        onSubmit();
    };

    return (
        <div className="main-container">
            <div className="activity-title">{activityTitle}</div>
            {showVideo ? (
                <div className="video-wrapper">
                    <ExplanationVideo videoUrl={explanationVideoUrl} explanationParagraph={["First paragraph", "Second paragraph"]} altText="Video description" />

                    <Button variant="contained" onClick={() => setShowVideo(false)}>
                        Start Activity
                    </Button>
                </div>
            ) : (
                <div className="activity-wrapper">
                    <div class="children-wrapper">{children}</div>
                    <div className="button-wrapper">
                        <Button variant="contained" onClick={() => setShowVideo(true)}>
                            Retourner a la video
                        </Button>
                        <Button variant="contained" onClick={() => checkAnswer()}>
                            verfier la correction
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ActivityWrapper;
