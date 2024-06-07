import React, { useState, useEffect } from 'react';
import './FractionsCalculator.css';

function FractionDisplay() {
  const [fraction1, setFraction1] = useState({ numerator: 0, denominator: 1 });
  const [fraction2, setFraction2] = useState({ numerator: 0, denominator: 1 });
  const [result, setResult] = useState(null);
  const [animate, setAnimate] = useState(false);

  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

  useEffect(() => {
    const randomNumerator1 = getRandomNumber(1, 10);
    const randomNumerator2 = getRandomNumber(1, 10);
    const commonDenominator = getRandomNumber(2, 10);
    setFraction1({ numerator: randomNumerator1, denominator: commonDenominator });
    setFraction2({ numerator: randomNumerator2, denominator: commonDenominator });
  }, []);

  const calculateResult = () => {
    setAnimate(true);
    setTimeout(() => {
      const numeratorSum = fraction1.numerator + fraction2.numerator;
      setResult({ numerator: numeratorSum, denominator: fraction1.denominator });
      setAnimate(false);
    }, 2000);
  };

  return (
    <div className="fractions-calculator">
      <div className="fraction-display">
        <div className={`fraction ${animate ? 'animate' : ''}`}>
          <span className="numerator">{fraction1.numerator}</span>
          <hr className="fraction-line" />
          <span className="denominator">{fraction1.denominator}</span>
        </div>
        <span className={`operator ${animate ? 'animate' : ''}`}>+</span>
        <div className={`fraction ${animate ? 'animate' : ''}`}>
          <span className="numerator">{fraction2.numerator}</span>
          <hr className="fraction-line" />
          <span className="denominator">{fraction2.denominator}</span>
        </div>
        <span className="equals">=</span>
        <div className="results-container">
        {result && (
          <>
            <div className="fraction unsimplified-result">
              <span className="numerator">{fraction1.numerator} + {fraction2.numerator}</span>
              <hr className="fraction-line" />
              <span className="denominator">{result.denominator}</span>
            </div>
            <span className="equals horizontal-equals">=</span>
            <div className="fraction simplified-result">
              <span className="numerator">{result.numerator}</span>
              <hr className="fraction-line" />
              <span className="denominator">{result.denominator}</span>
            </div>
          </>
        )}
      </div>
      </div>
      <button className="calculate-button" onClick={calculateResult}>Calculer</button>
    </div>
  );
}

export default FractionDisplay;

