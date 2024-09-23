import React, { useState, useEffect, useRef } from "react";
import SwipeableViews from "react-swipeable-views";
import Pagination from "./Pagination";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./PaginationStyle.css";
import { Fingerprint, ArrowForward, ArrowBack } from "@mui/icons-material";

const SwipeableScreens = ({ slides = [], currentSegmentIndex = 0, backNavLink = "/" }) => {
    const [index, setIndex] = useState(currentSegmentIndex);
    const navigate = useNavigate();
  

    

    const handleChangeIndex = (newIndex) => {
        setIndex(newIndex);
    };

    const handleBackButton = () => {
        navigate(backNavLink);
    };

    const handleNextSlide = () => {
        setIndex((prevIndex) => Math.min(prevIndex + 1, slides.length - 1));
    };

    const handlePrevSlide = () => {
        setIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    return (
        <div
            
            style={{ position: "relative", height: "100vh",direction: "ltr"  }}
            
        >
            <div className="pagination">
                <IconButton onClick={handleBackButton}>
                    <Fingerprint />
                </IconButton>
                <Pagination dots={slides.length} index={index} onChangeIndex={handleChangeIndex} />
            </div>

            <SwipeableViews index={index} onChangeIndex={handleChangeIndex} style={{ height: "100%" }}>
                {slides.map((SlideComponent, idx) => (
                    <div key={idx} style={{ minHeight: "100%" }}>
                        <SlideComponent />
                    </div>
                ))}
            </SwipeableViews>

            <div style={{ position: "absolute", bottom: "20px", width: "100%", display: "flex", justifyContent: "center", gap: "10px" }}>
                <IconButton
                    onClick={handlePrevSlide}
                    disabled={index === 0}
                    style={{
                        zIndex: 10,
                    }}
                >
                    <ArrowBack />
                </IconButton>

                <IconButton
                    onClick={handleNextSlide}
                    disabled={index === slides.length - 1}
                    style={{
                        zIndex: 10,
                    }}
                >
                    <ArrowForward />
                </IconButton>
            </div>
        </div>
    );
};

export default SwipeableScreens;
