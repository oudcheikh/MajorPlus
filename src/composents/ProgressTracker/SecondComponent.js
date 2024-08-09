// SecondComponent.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SecondComponent = ({ onFinish }) => {
  const navigate = useNavigate();

  const handleFinish = () => {
    onFinish();
    navigate('/ProgressTracker'); // Navigate back to progress page after finishing
  };

  return (
    <div>
      <h1>Second Component</h1>
      <button onClick={handleFinish}>Finish</button>
    </div>
  );
};

export default SecondComponent;
