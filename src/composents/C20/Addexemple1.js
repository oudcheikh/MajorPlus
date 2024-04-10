import React from 'react';
import './DecimalRuler.css';
import PetiTeacher from './PetiTeacher.png'
const DecimalRuler = () => {
// Création d'un tableau pour les marques de 1 à 1.1 avec des incréments de 0.01
const marks = Array.from({ length: 11 }, (_, i) => (1 + i * 0.01).toFixed(2));



  const imageStyle = {
    width: '95%', // La largeur de l'image sera de 95% de la largeur de son conteneur
    height: 'auto', // La hauteur change automatiquement pour garder les proportions
    maxWidth: '70%', // Assure que l'image ne dépasse pas 70% de la largeur de la carte
    display: 'block', // L'image est affichée en tant que block pour permettre les marges
    marginLeft: '90px', // La marge à gauche de 5px décale l'image vers la droite
    marginRight: 'auto', // Marge automatique à droite pour aligner l'image si nécessaire
    marginBottom: '-300px', // La marge en bas de 30px décale l'image vers le bas
  };
  

  return (<div>

    <img src={PetiTeacher} alt="Teacher" style={imageStyle} /> 
    <div className="ruler-container">
    
      {marks.map((mark, index) => (
        <div key={index} className={`mark-container ${index % 10 === 0 ? 'whole-mark' : 'decimal-mark'}`}>
          <div className="number">{mark}</div>
          <div className={`line ${index % 10 === 0 ? 'long-line' : ''}`}></div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default DecimalRuler;
