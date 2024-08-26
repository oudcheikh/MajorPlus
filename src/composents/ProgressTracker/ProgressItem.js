import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ProgressItem.css';

const ProgressItem = ({ title, status, isCurrent, onClick , index}) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (status === 'in-progress') {
      setClicked(true);
      setTimeout(() => {
        onClick();
      }, 300); 
    }
  };

  return (
    <div className={`progress-item ${isCurrent ? 'current' : ''} ${status}`} onClick={handleClick}>
      <div className="icon-container">
    
      <div className={`cube bottom-cube ${status === 'completed' ? 'completed' : ''}`}>
          {status === 'completed' && (
            <img 
              src="/images/accept.png" 
              alt="Completed" 
              className="front-face-icon"
            />
          )}
        </div>
        <button className={`cube top-cube ${clicked ? 'clicked' : ''} ${status === 'completed' ? 'completed' : ''}`} disabled={status === 'locked'}>
          {status === 'completed' ? <img src={"/images/white_cheakMarck.png"} /> : isCurrent ? '⬛' : <img src={"/images/white_lock.png"} alt="lock icon" />}
        </button>
        {isCurrent && <div className="current-indicator"></div>}
      </div>
      <div className={`title title-${index}`}>{title}</div> 
    </div>
  );
};

ProgressItem.propTypes = {
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  isCurrent: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired, 
};
export default ProgressItem;
