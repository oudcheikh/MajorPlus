



import React, { useState, useEffect } from 'react';
import './FractionsCalculator.css';
import {
   FormulaText
  } from '../Styles/MajorStyles';


const FractionAdditionDisplay = () => {
  // Les fractions sont fixes dans cet exemple
  const fraction1 = { numerator: 7, denominator: 5 };
  const fraction2 = { numerator: 3, denominator: 5 };

  // Puisque les dénominateurs sont les mêmes, on peut simplement les additionner
  const resultNumerator = fraction1.numerator + fraction2.numerator;

  return (
    <div>
         <FormulaText> <strong> Pour diviser une fraction par un 
nombre entier, je multiplie le 
dénominateur de la fraction par ce 
nombre :

 </strong> </FormulaText>
    <div className="fractions-calculator">
      <div className="fraction-display">
        {/* Affichage de la première fraction */}
        <div className="fraction">
          <span className="numerator">3</span>
          <hr className="fraction-line" />
          <span className="denominator">4</span>
        </div>
        
        {/* Opérateur Plus */}
        <span className="operator">:</span>
        
        {/* Affichage de la deuxième fraction */}
        <div className="fraction">
          <span className="numerator">2</span>
       
        </div>
        
        {/* Signe égal */}
        <span className="equals">=</span>
        
        {/* Affichage du résultat de la somme des numérateurs */}
        <div className="fraction">
          <span className="numerator">3</span>
          <hr className="fraction-line" />
          <span className="denominator">4×2</span>
        </div>

{/* Signe égal */}

<span className="equals">=</span>
  {/* Affichage du résultat de la somme des numérateurs */}
  <div className="fraction">
          <span className="numerator">3</span>
          <hr className="fraction-line" />
          <span className="denominator">8</span>
        </div>

      </div>
    </div>
    <FormulaText> <strong> Pour diviser une fraction par un 
nombre entier, je multiplie le 
dénominateur de la fraction par ce 
nombre :
 </strong> </FormulaText>

 <div className="fractions-calculator">
      <div className="fraction-display">
        {/* Affichage de la première fraction */}
        <div className="fraction">
          <span className="numerator">3</span>
         
        </div>
        
        {/* Opérateur Plus */}
        <span className="operator">:</span>
        
        {/* Affichage de la deuxième fraction */}
        <div className="fraction">
          <span className="numerator">2</span>
          <hr className="fraction-line" />
          <span className="denominator">4</span>
        </div>
        
        {/* Signe égal */}
        <span className="equals">=</span>
        
        {/* Affichage du résultat de la somme des numérateurs */}
        <div className="fraction">
          <span className="numerator">3×4</span>
          <hr className="fraction-line" />
          <span className="denominator">3</span>
        </div>

{/* Signe égal */}

<span className="equals">=</span>
  {/* Affichage du résultat de la somme des numérateurs */}
  <div className="fraction">
          <span className="numerator">12</span>
          <hr className="fraction-line" />
          <span className="denominator">3</span>
        </div>

      </div>
    </div>
    <FormulaText> <strong> Pour diviser une fraction par un 
nombre entier, je multiplie le 
dénominateur de la fraction par ce 
nombre :
 </strong> </FormulaText>

 <div className="fractions-calculator">
      <div className="fraction-display">
        {/* Affichage de la première fraction */}
        <div className="fraction">
          <span className="numerator">3</span>
          <hr className="fraction-line" />
          <span className="denominator">5</span>
        </div>
        
        {/* Opérateur Plus */}
        <span className="operator">:</span>
        
        {/* Affichage de la deuxième fraction */}
        <div className="fraction">
          <span className="numerator">2</span>
          <hr className="fraction-line" />
          <span className="denominator">7</span>
        </div>
        
        {/* Signe égal */}
        <span className="equals">=</span>
        
        {/* Affichage du résultat de la somme des numérateurs */}
        <div className="fraction">
          <span className="numerator">3×7</span>
          <hr className="fraction-line" />
          <span className="denominator">5×2</span>
        </div>

{/* Signe égal */}

<span className="equals">=</span>
  {/* Affichage du résultat de la somme des numérateurs */}
  <div className="fraction">
          <span className="numerator">21</span>
          <hr className="fraction-line" />
          <span className="denominator">10</span>
        </div>

      </div>
    </div>
    </div>
  );
};

export default FractionAdditionDisplay;

