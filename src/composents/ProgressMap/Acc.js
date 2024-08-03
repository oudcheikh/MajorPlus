import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './acc.css';
import Button from './Button.js'
import { ContinueButton } from '../Styles/MajorStyles'


function ProgressMap({ initialState }) {

  const navigate = useNavigate();
  const [progress, setProgress] = useState(initialState);
const goToAccueil=()=>{
  navigate('/Accueil')
  
}
 
  return (
    <div className='app23'>
      <div className='Exercices'>
        <ContinueButton onClick={goToAccueil}>Periode 1 </ContinueButton>

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
     
      </div>
     

    </div>


  );
}
export default ProgressMap;