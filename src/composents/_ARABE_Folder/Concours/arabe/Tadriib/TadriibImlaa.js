// Importer React et les hooks nécessaires
import React from 'react';
import Tadriib from './Tadriib'; // Chemin vers votre composant VocabularyTrainer

// Importer les sons
import useSound from 'use-sound';
import correctSound from '../../../../sounds/correct.mp3';
import incorrectSound from '../../../../sounds/incorrect.mp3';

// Importer les données du quiz
import data from './dataArabe.json';



function ConcoursArabe() {


  return (
    <Tadriib
    quizzes={data}
   
      correctSound={correctSound}
      incorrectSound={incorrectSound}
    />
  );
}

export default ConcoursArabe;
