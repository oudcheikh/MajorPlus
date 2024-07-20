// App.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Level from './Level';
import Connector from './Connector';
import './accueil.css';

function App({ levels }) {
  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
  };

  const connectorPoints = [
    "10,10 80,10",
    "100,100 200,100 150,150",
    "100,100 200,100 150,150",
    "100,100 200,100 150,150", // Example points for the first connector
  //   "100,50 150,50 150,100", // Example points for the second connector
  //   // Add more points as needed
  // 
  ];

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
                points={connectorPoints[index]} // Pass the points for the connector
              />
            )}
           <div className='title1'> title1</div> 
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default App;
