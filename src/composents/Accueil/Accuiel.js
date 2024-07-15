import React, { useState } from 'react';
import Level from './Level';
import Connector from './Connector';
import './accueil.css';
const levelsData = [
    { title: 'Level 1', path: '/exercice1', status: 'in-progress', backgroundImage: 'path_to_image1' },
    { title: 'Level 2', path: '/exercice2', status: 'locked', backgroundImage: 'path_to_image2' },
    // Ajoutez d'autres niveaux ici
  ];
  
  function App() {
    const [levels, setLevels] = useState(levelsData);
  
    const handleComplete = (index) => {
      const newLevels = [...levels];
      newLevels[index].status = 'completed';
      if (newLevels[index + 1]) {
        newLevels[index + 1].status = 'in-progress';
      }
      setLevels(newLevels);
    };
  return (

    <div className="application">
      <div className="path">
        {levels.map((level, index) => (
          <React.Fragment key={index}>
            <Level
              title={level.title}
              status={level.status}
              onComplete={() => handleComplete(index)}
            />
            {index < levels.length - 1 && (
              <Connector
                completed={levels[index].status === "completed"}
                inProgress={levels[index + 1].status === "in-progress"}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default App;
