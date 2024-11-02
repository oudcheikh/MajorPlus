import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';
import Pagination from './Pagination';
import './PaginationStyle.css';

const SwipeableScreens = ({ slides = [], currentSegmentIndex = 0, backNavLink = `/` }) => {
    const [index, setIndex] = useState(currentSegmentIndex);
    const navigate = useNavigate();
    const { periodeId } = useParams();

    const handleChangeIndex = (newIndex) => {
        setIndex(newIndex);
        console.log(`Segment actuel : ${newIndex + 1}`);
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
        <div style={{ position: 'relative', height: '100vh', direction: 'ltr' }}>
            <div className="pagination">
                <div className="icon-container">
                    <button
                        onClick={handleBackButton}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            outline: 'none',
                        }}
                    >
                        <i className="fas fa-arrow-left" style={{ fontSize: '24px', color: '#339fff' }}></i>
                    </button>
                </div>

                <div className="progress-bar">
                    <Pagination dots={slides.length} index={index} onChangeIndex={handleChangeIndex} />
                </div>
            </div>

            <SwipeableViews index={index} onChangeIndex={handleChangeIndex} style={{ height: '100%' }}>
                {slides.map((SlideComponent, idx) => (
                    <div key={idx} style={{ minHeight: '100%' }}>
                        <SlideComponent currentIndex={index} segmentIndex={idx} />
                    </div>
                ))}
            </SwipeableViews>

            {/* Bouton de navigation gauche, personnalisé */}
            {/* <div
                onClick={handlePrevSlide}
                className="navigation-button"
                style={{ left: '20px' }} // Bouton placé en bas à gauche
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
            </div> */}

            {/* Bouton de navigation droite, personnalisé */}
            {/* <div
                onClick={handleNextSlide}
                className="navigation-button"
                style={{ right: '20px' }} // Bouton placé en bas à droite
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
                </svg>
            </div> */}
        </div>
    );
};

export default SwipeableScreens;
