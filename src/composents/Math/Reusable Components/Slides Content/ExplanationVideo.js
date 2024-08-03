import React from "react";
import "./SlideContent.css";

const ExplanationVideo = ({ videoUrl = "none", explanationParagraph = ["Watch the video to learn more"], altText = "alt text" }) => {
    // Ensure explanationParagraph is always an array
    const paragraphs = Array.isArray(explanationParagraph) ? explanationParagraph : [explanationParagraph];

    return (
        <div className="video-wrapper">
            <video controls className="video-container">
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </div>
    );
};
export default ExplanationVideo;
