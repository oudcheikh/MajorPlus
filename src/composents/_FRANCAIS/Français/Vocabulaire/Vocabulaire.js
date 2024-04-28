// Importer React et les hooks nécessaires
import React from 'react';
import VocabularyTrainer from './Testvocabulaire'; // Chemin vers votre composant VocabularyTrainer

// Importer les sons
import useSound from 'use-sound';
import correctSound from '../../../sounds/correct.mp3';
import incorrectSound from '../../../sounds/incorrect.mp3';

// Importer les données du quiz
import vocabularyList from './Famille.json';

// Importer les images
// import chambreImg from '../Vocabulaire/Vocabulaire.png/Famille.png/chambre.jpg';

import chambreImg from'../Vocabulaire/famille/Images/chambre.jpg'
import cousinImg from '../Vocabulaire/famille/Images/cousin.jpg';
import familleImg from '../Vocabulaire/famille/Images/famille.jpg';
import grandMereImg from '../Vocabulaire/famille/Images/grand-mère.jpg';
import grandPereImg from '../Vocabulaire/famille/Images/grand-père.jpg';
import nappeImg from '../Vocabulaire/famille/Images/nappe.jpg';
import parentsImg from '../Vocabulaire/famille/Images/parents.jpg';
import reunionFamilialeImg from '../Vocabulaire/famille/Images/Réunionfamiliale.jpg';
import soeursImg from '../Vocabulaire/famille/Images/soeurs.jpg';
import theImg from '../Vocabulaire/famille/Images/thé.jpg';

// Créez un objet pour passer toutes les images
const images = {
  chambre: chambreImg,
  cousin: cousinImg,
  famille: familleImg,
  "grand-mère": grandMereImg,
  "grand-père": grandPereImg,
  nappe: nappeImg,
  parents: parentsImg,
  Réunionfamiliale: reunionFamilialeImg,
  soeurs: soeursImg,
  thé: theImg
};

function Suj() {
  return (
    <VocabularyTrainer
      vocabularyData={vocabularyList}
      images={images}
      correctSound={correctSound}
      incorrectSound={incorrectSound}
    />
  );
}

export default Suj;
