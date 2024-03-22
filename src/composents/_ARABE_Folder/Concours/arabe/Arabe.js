   

// Importer React et les hooks nécessaires
import React from 'react';


import ExerciceList from'./dataArabe.json'


import ConcoursArabe from './ConcoursArabe';


import   '../../../Styles/MajorStyles';


function Arabe() {
  return (
    <ConcoursArabe   
    quizzes={ExerciceList}
    
    />
  );
}


export default Arabe;

 