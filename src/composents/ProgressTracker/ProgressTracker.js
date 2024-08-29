import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import ProgressItem from './ProgressItem';
import './ProgressItem.css';
import { ContinueButton } from '../Styles/MajorStyles';

const ProgressTracker = ({ progress, onFinish }) => {
  const navigate = useNavigate();



  const handleClick = (index) => {
    if (progress[index].status === 'in-progress') {
      if (index === 0) {
        navigate('/C1_new');
      } else if (index === 1) {
        navigate('/C2_new');
      }
      else if (index === 2) {
        navigate('/C3_new');
      }
      else if (index === 3) {
        navigate('/C6');
      }
      else if (index === 4) {
        navigate('/G1');
      }
      else if (index === 5) {
        navigate('/M2');
      }
      else if (index === 6) {
        navigate('/C7');
      }
      else if (index === 7) {
        navigate('/Chap13');
      }
      else if (index === 8) {
        navigate('/P3A5');
      }
      else if (index === 9) {
        navigate('/CalculPrix');
      }
      else if (index === 10) {
        navigate('/MesureAires');
      }

      else if (index === 11) {
        navigate('/Triangle');
      }
      
      
    }
  };

  return (
    <div className="app">
      <ContinueButton>Periode 1</ContinueButton>
      <br></br>
      <br></br>


      <br></br>
      <div className="progress-tracker">
        {progress.map((item, index) => (
          <div key={index} className={`progress-item position-${index + 1}`}>
            <ProgressItem
              key={index}
              title={item.title}
              status={item.status}
              isCurrent={item.isCurrent}
              onClick={() => handleClick(index)}
              index={index}
            />
          </div>
        ))}
        {/* Vertical and horizontal connecting lines */}
        <div className="lineP line-1"></div>
        <div className="lineP line-2"></div>
        <div className="lineP line-3"></div>
        <div className="lineP line-4"></div>
        <div className="lineP line-5"></div>
        <div className="lineP line-6"></div>
        <div className="lineP line-7"></div>
        <div className="lineP line-8"></div>
        <div className="lineP line-9"></div>
        <div className="lineP line-10"></div>
        <div className="lineP line-11"></div>


        {/* petit ligns */}

        <div className="lineP line-12"></div>
        <div className="lineP line-13"></div>
        <div className="lineP line-14"></div>
        <div className="lineP line-15"></div>
        <div className="lineP line-16"></div>
        <div className="lineP line-17"></div>
        <div className="lineP line-18"></div>
        <div className="lineP line-19"></div>
        <div className="lineP line-20"></div>
        <div className="lineP line-21"></div>
        <div className="lineP line-22"></div>
        <div className="lineP line-23"></div>
        <div className="lineP line-24"></div>
        <div className="lineP line-25"></div>

        <div className="lineP line-26"></div>
        <div className="lineP line-27"></div>
        <div className="lineP line-28"></div>
        <div className="lineP line-29"></div>



        <div className="rounded-line rounded-line-1"></div>
      </div>
    </div>
  );
};

ProgressTracker.propTypes = {
  progress: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      isCurrent: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onFinish: PropTypes.func.isRequired,
};

export default ProgressTracker;
