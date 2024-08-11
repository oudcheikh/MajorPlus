// // ProgressItem.jsx
// import React from 'react';
// import PropTypes from 'prop-types';
// import './ProgressItem.css';

// const ProgressItem = ({ title, status, isCurrent, onClick }) => {
//   return (
//     <div className={`progress-item ${isCurrent ? 'current' : ''} ${status}`} onClick={onClick}>
//       <div className="icon-container">
//         <div className="cube bottom-cube"></div>
//         <button className={`cube top-cube`} disabled={status === 'locked'}>
//           {status === 'completed' ?  <img src={"/images/checkMark.png"} alt="lock icon"/> : isCurrent ? '⬛' : <img src={"/images/lock.png"} alt="lock icon" />}
//         </button>
//         {isCurrent && <div className="current-indicator"></div>}
//       </div>
//       <div className="title">{title}</div>
//     </div>
//   );
// };

// ProgressItem.propTypes = {
//   title: PropTypes.string.isRequired,
//   status: PropTypes.string.isRequired,
//   isCurrent: PropTypes.bool.isRequired,
//   onClick: PropTypes.func.isRequired,
// };

// export default ProgressItem;



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
      }, 300); // Adjust the delay to match the transition duration
    }
  };

  return (
    <div className={`progress-item ${isCurrent ? 'current' : ''} ${status}`} onClick={handleClick}>
      <div className="icon-container">
        <div className={`cube bottom-cube ${status === 'completed' ? 'completed' : ''}`}></div>
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
