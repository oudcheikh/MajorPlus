import React from 'react';
import './DecimalRuler.css'; // Utilisez votre fichier CSS existant.
import PetiTeacher from './ines2.png';

const Square = () => {
  // Style pour le carré
  const squareStyle = {
    width: '120px', // La largeur sera de 95% de la largeur de son conteneur.
    height: '120px', // La hauteur sera la même que la largeur pour faire un carré.
    maxWidth: '70%', // Assure que le carré ne dépasse pas 70% de la largeur de la carte.
    position: 'relative', // Position relative pour centrer l'image à l'intérieur.
    margin: 'auto', // Centrer le carré horizontalement et verticalement.
    display: 'flex', // Utiliser flex pour centrer l'image à l'intérieur du carré.
    alignItems: 'center', // Aligner l'image verticalement.
    justifyContent: 'center', // Aligner l'image horizontalement.
  };

  const containerStyle = {
    display: 'flex', // Utilise flexbox pour aligner côte à côte
    alignItems: 'center', // Centre les éléments verticalement
    justifyContent: 'center', // Centre le groupe (carré et image) horizontalement dans le conteneur
  };

  return (
    <div style={containerStyle}>
   
    <div className="ruler-container" style={squareStyle}>
    </div>
    <img src={PetiTeacher} alt="Teacher" style={{ maxWidth: '50%', maxHeight: '50%' }} />
    </div>
  );
};

export default Square;
