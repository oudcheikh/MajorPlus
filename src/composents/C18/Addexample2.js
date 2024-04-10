



import React, { useState, useEffect } from 'react';
import './FractionsCalculator.css';

import {
    FormulaText
   } from '../Styles/MajorStyles';

const FractionAdditionDisplay = () => {
  // Les fractions sont fixes dans cet exemple
  const fraction1 = { numerator: 2, denominator: 3 };
  const fraction2 = { numerator: 5, denominator: 4 };

  // Puisque les dénominateurs sont les mêmes, on peut simplement les additionner
  const resultNumerator = fraction1.numerator + fraction2.numerator;

  return (<div>
    <div className="fractions-calculator">
      <div className="fraction-display">
        {/* Affichage de la première fraction */}
        <div className="fraction">
          <span className="numerator">1</span>
          <hr className="fraction-line" />
          <span className="denominator">2</span>
        </div>
        
        <span className="equals">= </span>
        {/* Signe égal */}
        <span className="equals"> 0,5 un demie</span>
        
        {/* Affichage du résultat de la somme des numérateurs */}
       
        </div>

        <br></br>
        <div className="fractions-calculator">
      <div className="fraction-display">
        {/* Affichage de la première fraction */}
        <div className="fraction">
          <span className="numerator">1</span>
          <hr className="fraction-line" />
          <span className="denominator">3</span>
        </div>
        
        <span className="equals">= </span>
        {/* Signe égal */}
        <span className="equals"> 0,33 un tier</span>
        
        </div>
        <br></br>
</div>

<div className="fractions-calculator">
      <div className="fraction-display">
        {/* Affichage de la première fraction */}
        <div className="fraction">
          <span className="numerator">1</span>
          <hr className="fraction-line" />
          <span className="denominator">2</span>
        </div>
        
        <span className="equals">= </span>
        {/* Signe égal */}
        <span className="equals"> 0,5 un demie</span>
        
        {/* Affichage du résultat de la somme des numérateurs */}
       
        </div>

        <br></br>


      </div>
      </div>
      
    </div>
    
  );
};

export default FractionAdditionDisplay;

