import React from 'react';
import './SegmentedProgressBar.css';
import { CiHome } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { AiOutlineCheckCircle } from "react-icons/ai";




const SegmentedProgressBar = ({ totalSegments, currentSegment, setCurrentSegment, progress, setProgress }) => {
  const segments = [];
  const navigate = useNavigate();


  const handleSegmentClick = (index) => {
    // Mettre à jour l'état de la progression lorsqu'un segment est cliqué
    setCurrentSegment(index);
  };

  for (let i = 0; i < totalSegments; i++) {


    segments.push(

      <span
        key={i}
       
        className={`segment ${i < currentSegment ? 'completed' : 'incomplete'}`}
        style={{ width: `${100 / totalSegments}%` }}
        
      />


    );
  }
  const handleClick = () => {
    navigate("/Periode4");
  };
  return (
    <div>
      {/* <div className="segmented-progress-bar" style={{ flexDirection: 'row' }}>
   

    <div style={{ width: '100px', height: '30px'}}>
    <img src="/images/Math/periode 4/house.png" alt="house" style={{ width: '50%', height: '50%', objectFit: 'cover' }} />
</div>
  
      {segments}

      <button onClick={handleClick}>X</button>
    </div>
     */}



      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div>
        <a href="/Periode4">
          {/* <img src="/images/Math/periode 4/house.png" alt="Home" style={{ width: '30px', height: '30px' }} /> */}
          <CiHome />
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
