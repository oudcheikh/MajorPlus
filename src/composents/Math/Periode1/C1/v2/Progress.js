import React from 'react';
import './style.css';

const Progress = ({ progress,text }) => {
    return (
        <div className="smallprogress-container">
            <div
                className="small-progress-bar"
                style={{ width: `${progress}%` }}
            ></div>
            {/* <span className="smallprogress-text">{`${progress}%`}</span> */}
            <span className="smallprogress-text">{text}</span>
        </div>
    );
};

export default Progress;
