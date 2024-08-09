// FirstComponent.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const FirstComponent = ({ onFinish }) => {
  const navigate = useNavigate();

  const handleFinish = () => {
    onFinish();
    navigate('/ProgressTracker'); 
  };

  return (
    <div>
      <h1>First Component</h1>
      <button onClick={handleFinish}>Finish</button>
    </div>
  );
};

export default FirstComponent;
