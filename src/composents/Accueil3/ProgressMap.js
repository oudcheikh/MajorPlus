// ProgressMap.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ProgressMap.css';

function ProgressMap() {
  return (
    <div className="progress-map">
      <div className="button-container">
        <Link to="/C1" className="progress-button" id="btn1">C1</Link>
        <Link to="/C2" className="progress-button" id="btn2">C2</Link>
        {/* ... add more buttons */}
      </div>
      <svg className="lines">
        <polyline points="20,20 100,20 100,80 200,80,200 1000,200 " />
        {/* ... add more polylines as needed */}
      </svg>
    </div>
  );
}

export default ProgressMap;
