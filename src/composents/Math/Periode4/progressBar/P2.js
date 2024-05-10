

import React, { useState } from 'react';
import SegmentedProgressBar from './ProgressBar';
import './SegmentedProgressBar.css'; // Import du fichier CSS pour les styles

const App = () => {
  const [progress, setProgress] = useState(0);

  return (
<div>
    <h1>Segmented Progress Bar</h1>
    <div >
   
      <SegmentedProgressBar totalSegments={5} currentSegment={progress} />
    
      <button onClick={() => setProgress(progress + 1)}>Next Segment</button>
    </div>

    </div>

  );
};

export default App;
