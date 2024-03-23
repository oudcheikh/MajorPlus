// FractionComponent.js
import React from 'react';
import './FractionsCalculator.css';

const FractionComponent = ({ numerator, denominator }) => (
  <div className="fraction">
    <span className="numerator">{numerator}</span>
    <div className="fraction-bar" />
    <span className="denominator">{denominator}</span>
  </div>
);

export default FractionComponent;
