import React from 'react';
import './SegmentedProgressBar.css';
import { CiHome } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';




const SegmentedProgressBar = ({ totalSegments, currentSegment, setCurrentSegment, progress, setProgress }) => {
  const segments = [];
 
  for (let i = 0; i < totalSegments; i++) {


    segments.push(

      <span
        key={i}
       
        className={`segment ${i < currentSegment ? 'completed' : 'incomplete'}`}
        style={{ width: `${100 / totalSegments}%` }}
        
      />


    );
  }
 
  return (
    <div>
     


      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div>
        <a href="/Periode4">
          <img src="/images/Math/periode 4/house.png" alt="Home" style={{ width: '30px', height: '30px' }} /> 
          {/* <CiHome /> */}
          </a>
        </div>

        <div style={{ flex: 1, marginRight: '2px' }}>
          <div className="segmented-progress-bar">
            {segments}
          </div>
        </div>

      </div>






    </div>

  );
};

export default SegmentedProgressBar;
