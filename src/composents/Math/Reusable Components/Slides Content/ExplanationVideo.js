import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import "./SlideContent.css";
import { getStorage, ref, getDownloadURL } from "firebase/storage"; // Import Firebase functions

const ExplanationVideo = ({ videoPath, explanationParagraph = ["Watch the video to learn more"], altText = "The video could not be loaded." }) => {
    const [videoUrl, setVideoUrl] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null); // Ref to control the video element

    const handlePlayClick = async () => {
        if (!videoUrl && videoPath) {
            setIsLoading(true);

            try {
                const storage = getStorage();
                const videoRef = ref(storage, videoPath);
                const url = await getDownloadURL(videoRef);

                setVideoUrl(url);
                setIsPlaying(true);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching video: ", error);
                setIsLoading(false);
            }
        } else if (videoRef.current) {
            videoRef.current.play();
        }
    };

    // Ensure explanationParagraph is always an array
    const paragraphs = Array.isArray(explanationParagraph) ? explanationParagraph : [explanationParagraph];

    return (
        <div className="video-wrapper">
            <div className="video-container-wrapper">
                <video
                    controls
                    className="video-container"
                    ref={videoRef} // Attach ref to the video element
                    src={videoUrl || undefined} // Set the video URL once fetched
                    preload="none" // Prevent automatic preloading
                    style={{ display: isPlaying ? "block" : "none" }} // Hide video until it's ready to play
                >
                    Your browser does not support the video tag.
                </video>
                {!isPlaying && (
                    <div className="play-button-overlay" onClick={handlePlayClick}>
                        {isLoading ? "Loading..." : "Play Video"}
                    </div>
                )}
            </div>
            {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </div>
        
    );
};

ExplanationVideo.propTypes = {
    videoPath: PropTypes.string, // Path to the video in Firebase Storage
    explanationParagraph: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    altText: PropTypes.string,
};

export default ExplanationVideo;
