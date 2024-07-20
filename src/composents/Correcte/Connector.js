// Connector.js
import React from 'react';
import './Connector.css';

const Connector = ({ completed, inProgress, points }) => {
  return (
    // <svg className="connector" width="200" height="200">
    //   <polyline
    //     points={points}
    //     className={`connector-line ${completed ? 'completed' : inProgress ? 'in-progress' : 'locked'}`}
    //   />
    // </svg>
    <div className='svgDiv'>
    <svg height="300" width="200"  style={{ border: 'none', background: 'none' }}>
    <polyline 
      points="80,40 20,40   20,200  160,200 160,300 "
      style={{ 
        stroke: 'red',
       
        strokeWidth: 5,
        strokeDasharray: '10',
        fill: 'none'
      }} 
    />
  </svg>
  </div>
  );
};

export default Connector;
