import React from 'react';
import { useNavigate } from 'react-router-dom';
//import calculatorIcon from '../../composents/home/Icones/calculator-simple.png'; // Assurez-vous d'avoir le bon chemin
import '../../../composents/home/Major.css'; // Importer les styles

function Acceuil() {
  const navigate = useNavigate();

  const CardButton = ({ title, navigateTo }) => (
    <div className="card full-card" onClick={() => navigate(navigateTo)}>
      <img src={"images/Icones/calculator-simple.png"} alt={title} className="card-icon" />
      <div className="card-content">
        <h2>{title}</h2>
      </div>
    </div>
  );

  return (
    <div className="app-container">
      <div className="card-grid">
        <CardButton title="La proportionnalité" navigateTo="/La_proportionnalité" />
        <CardButton title="Les solides" navigateTo="/Les_solides" />
        <CardButton title="Les mesures agraires " navigateTo="/Les_mesures_Agrairs" />
        
        <CardButton title="livre " navigateTo="/Book" />
 
      </div>
    </div>
  );
}

export default Acceuil;
 