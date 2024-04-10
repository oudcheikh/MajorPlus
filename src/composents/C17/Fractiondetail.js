import React from 'react';
import './FractionsCalculator.css'; // Assurez-vous que le chemin est correct

const FractionAdditionDisplay = () => {
  const fraction = { numerator: 7, denominator: 5 };

  return (
    <div className="fractions-calculator">
      <div className="fraction-display">
        <div className="fraction">
          <div className="fraction-part numerator-part">
            <span className="numerator" style={{ color: '#4CAF50' }}> {fraction.numerator}</span>
            <span className="arrow">&#8594;</span>
            <span className="label" style={{ color: '#4CAF50' }}>Numérateur</span>
          </div>
          <div className="fraction-line"></div>
          <div className="fraction-part denominator-part">
            <span className="denominator" style={{ color: '#FF9800' }}>{ fraction.denominator}</span>
            <span className="arrow">&#8594;</span>
            <span className="label" style={{ color: '#FF9800' }}>Dénominateur</span>
          </div>
        </div>
      </div>

      
    </div>

    
  );
};

export default FractionAdditionDisplay;
