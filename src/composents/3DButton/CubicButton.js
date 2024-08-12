import React from 'react';
import './Cube.css';

const CubicButton = () => {
    return (
        <div className="cubic-button">
            <div className="cube large-cube">
                <div className="face face-front">Large Front</div>
                <div className="face face-back">Large Back</div>
                <div className="face face-left">Large Left</div>
                <div className="face face-right">Large Right</div>
                <div className="face face-top">Large Top</div>
                <div className="face face-bottom">Large Bottom</div>
            </div>
            <div className="cube small-cube">
                <div className="face face-front">Small Front</div>
                <div className="face face-back">Small Back</div>
                <div className="face face-left">Small Left</div>
                <div className="face face-right">Small Right</div>
                <div className="face face-top">Small Top</div>
                <div className="face face-bottom">Small Bottom</div>
            </div>
        </div>
    );
};

export default CubicButton;
