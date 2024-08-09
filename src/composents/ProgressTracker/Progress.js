// Progress.jsx
import React, { useState } from 'react';
import ProgressTracker from './ProgressTracker';

const initialState = [
  { title: 'Fractions and Data', status: 'in-progress', isCurrent: true },
  { title: 'Visualizing Fractions', status: 'locked', isCurrent: false },
  { title: 'Introducing Number Lines', status: 'locked', isCurrent: false },
  { title: 'Equivalent Fractions', status: 'locked', isCurrent: false },
];

const Progress = () => {
  const [progress, setProgress] = useState(initialState);

  const handleFinish = (index) => {
    const newProgress = progress.map((item, i) => {
      if (i === index) return { ...item, status: 'completed', isCurrent: false };
      if (i === index + 1) return { ...item, status: 'in-progress', isCurrent: true };
      return item;
    });
    setProgress(newProgress);
  };

  return (
    <div className="app">
      <h1>Learning Progress</h1>
      <ProgressTracker progress={progress} onFinish={handleFinish} />
    </div>
  );
};

export default Progress;
