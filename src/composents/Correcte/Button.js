import React from 'react';
import './Button.css';  // Importez vos styles CSS

const Button = ({ label, onClick, className }) => (
  <button className={`button ${className}`} onClick={onClick}>
    {label}
  </button>
);

export default Button;
