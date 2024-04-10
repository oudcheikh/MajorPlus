



import React, { useState, useEffect } from 'react';
import './FractionsCalculator.css';



const FractionAdditionDisplay = () => {
  // Les fractions sont fixes dans cet exemple
  const fraction1 = { numerator: 7, denominator: 5 };
  const fraction2 = { numerator: 3, denominator: 5 };

  // Puisque les dénominateurs sont les mêmes, on peut simplement les additionner
  const resultNumerator = fraction1.numerator + fraction2.numerator;

  return (
    <div className="fractions-calculator">
      <div className="fraction-display">
        {/* Affichage de la première fraction */}
        <div className="fraction">
          <span className="numerator">3</span>
          <hr className="fraction-line" />
          <span className="denominator">4</span>
        </div>
        
        {/* Opérateur Plus */}
        <span className="operator">×</span>
        
        {/* Affichage de la deuxième fraction */}
        <div className="fraction">
          <span className="numerator">5</span>
          <hr className="fraction-line" />
          <span className="denominator">2</span>
        </div>
        
        {/* Signe égal */}
        <span className="equals">=</span>
        
        {/* Affichage du résultat de la somme des numérateurs */}
        <div className="fraction">
          <span className="numerator">3×5</span>
          <hr className="fraction-line" />
          <span className="denominator">2×4</span>
        </div>

{/* Signe égal */}

<span className="equals">=</span>
  {/* Affichage du résultat de la somme des numérateurs */}
  <div className="fraction">
          <span className="numerator">15</span>
          <hr className="fraction-line" />
          <span className="denominator">8</span>
        </div>

      </div>
    </div>
  );
};

export default FractionAdditionDisplay;

