import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './acc.css';
import { EdgesensorHigh } from '@mui/icons-material';
import Button from './Button.js'
import { ContinueButton } from '../Styles/MajorStyles'


function ProgressMap({ initialState }) {

  const navigate = useNavigate();
  const [progress, setProgress] = useState(initialState);




  return (
    <div className='app23'>
      <div className='Exercices'>
        <ContinueButton>Periode 1 </ContinueButton>
      </div>
     
      <div className='mesBoutons'>
        {progress.buttons.map((button, index) => (
          <React.Fragment key={index}>
            <Button
            
            ClassTitre={button.ClassTitre}
              className={button.title}
              key={button.id} 
              title={button.title}
              status={button.status}
              path={button.path}
              rong={button.id} 
              chapitre={button.chapitre}
            
            />
          
          </React.Fragment>

        ))}
     
        {/* {progress.lines.map((line, index) => (
          <React.Fragment key={index}>


             <svg width={line.svgWidth} height={line.svgHight} className={line.svgClass}   style={{ border: 'none', background: 'none' }}  >
              <polyline
                className={`polyline ${progress.lines[index].status}`}
                points={line.points}
              />
            </svg>


          </React.Fragment>
        ))} */}
      </div>
     

    </div>


  );
}
export default ProgressMap;