import React from 'react';
import './FractionsCalculator.css';

import {
  FormulaText
} from '../Styles/MajorStyles';

const FractionAdditionDisplay = () => {
  // Les valeurs pour l'exemple
  const totalUm = 600;
  const fractionSidi = { numerator: 1, denominator: 3 }; // La part de Sidi est un tiers de celle de Moussa
  const fractionMoussa = { numerator: 2, denominator: 3 }; // La part de Moussa est deux tiers du total

  // Calculs pour les parts
  const partSidi = totalUm * fractionSidi.numerator / fractionSidi.denominator;
  const partMoussa = totalUm * fractionMoussa.numerator / fractionMoussa.denominator;

  return (
    <div>
      <FormulaText><strong>
        Sidi et Moussa possèdent ensemble <span style={{ color: '#FF0000' }}>{totalUm} Um</span>.<br/>
        La part de Sidi est un tiers (<span style={{ color: '#0000FF' }}>{fractionSidi.numerator}/{fractionSidi.denominator}</span>) de celle de Moussa.
        Quelle est la part de chacun ?
      </strong></FormulaText>
      <FormulaText><strong>Solution</strong></FormulaText>
      <FormulaText><strong>
        La part de Moussa : <span style={{ color: '#FFA500' }}>{partMoussa} Um</span>
      </strong></FormulaText>
      <div className="fractions-calculator">
        <div className="fraction-display">
         
         
          {/* Affichage de la part de Moussa */}
          <div className="fraction">
            <span className="numerator" style={{ fontSize: '20px'  }}>{totalUm} UM × {fractionMoussa.numerator}</span>
            <hr className="fraction-line" style={{ fontSize: '20px' }} />
            <span className="denominator" style={{ fontSize: '20px' }}>{fractionMoussa.denominator}</span>
          </div>
          <span className="equals" style={{ fontSize: '20px',  color: '#FFA500' }}>= {partMoussa} UM</span>
        </div>
        
      </div>
      
      <FormulaText><strong>
        La part de Sidi : <span style={{ color: '#FF00FF' }}>{partSidi} Um</span>
      </strong></FormulaText>
      <div className="fractions-calculator">
        <div className="fraction-display">
          {/* Affichage de la part de Sidi */}
          <div className="fraction">
            <span className="numerator" style={{ fontSize: '20px' }}>{totalUm} UM × {fractionSidi.numerator}</span>
            <hr className="fraction-line" style={{ fontSize: '20px' }} />
            <span className="denominator" style={{ fontSize: '20px' }}>{fractionSidi.denominator}</span>
          </div>
          <span className="equals" style={{ fontSize: '20px' , color: '#FF00FF'}}>= {partSidi} UM</span><br></br>
         
        </div>
        
      </div>
      
      <FormulaText><strong>
        Je vérifie :<br/> <span style={{ color: '#FF00FF' }}>{partSidi} Um</span> + <span style={{ color: '#FFA500' }}>{partMoussa} Um</span> = <span style={{ color: '#FF0000' }}>{totalUm} Um</span>
      </strong></FormulaText>
     
     
    </div>
  );
};

export default FractionAdditionDisplay;
