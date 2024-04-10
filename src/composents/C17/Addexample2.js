



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
          <span className="numerator">{fraction1.numerator}</span>
          <hr className="fraction-line" />
          <span className="denominator">{fraction1.denominator}</span>
        </div>
        
        {/* Opérateur Plus */}
        <span className="operator">+</span>
        
        {/* Affichage de la deuxième fraction */}
        <div className="fraction">
          <span className="numerator">{fraction2.numerator}</span>
          <hr className="fraction-line" />
          <span className="denominator">{fraction2.denominator}</span>
        </div>
        
        {/* Signe égal */}
        <span className="equals">=</span>
        
        {/* Affichage du résultat de la somme des numérateurs */}
        <div className="fraction">
          <span className="numerator">{fraction1.numerator}×4</span>
          <hr className="fraction-line" />
          <span className="denominator">{fraction1.denominator}×4</span>
        </div>
        <span className="operator">+</span>
        <div className="fraction">
          <span className="numerator">{fraction2.numerator}×3</span>
          <hr className="fraction-line" />
          <span className="denominator">{fraction2.denominator}×3</span>
        </div>
        </div>

        <br></br>
        <div className="fractions-calculator">
      <div className="fraction-display">
        <span className="equals">=</span>
  {/* Affichage du résultat de la somme des numérateurs */}
  <div className="fraction">
          <span className="numerator">8</span>
          <hr className="fraction-line" />
          <span className="denominator">{12}</span>
          </div>
          <span className="operator">+</span>
          <div className="fraction">
          <span className="numerator">15</span>
          <hr className="fraction-line" />
          <span className="denominator">{12}</span>
</div>
<span className="equals">=</span>
          <div className="fraction">
          <span className="numerator">23</span>
          <hr className="fraction-line" />
          <span className="denominator">{12}</span>
        </div>
        </div>
</div>
      </div>
    </div>
    
  );
};

export default FractionAdditionDisplay;

