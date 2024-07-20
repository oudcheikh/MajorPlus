import React, { useState } from 'react';
import Level from './Level';
import Connector from './Connector';
import './accueil.css';
import { useNavigate } from 'react-router-dom';

function App({ levels }) {
  const navigate = useNavigate();
  
  const goTo = (path) => {
      navigate(path);
  };
  return (
    <div className="App22">
      <div className="path">
        {levels.map((level, index) => (
          <React.Fragment key={index}>
            <Level
                        key={level.id} // Utilisez level.id comme clé unique
                        title={level.title}
                        status={level.status}
                        backgroundImage={level.backgroundImage}
                        path={level.path}
                        onClick={() => goTo(level.path)}
                        id={level.id}
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
