import React from 'react';
import { useNavigate } from 'react-router-dom';
//import calculatorIcon from '../../composents/home/Icones/calculator-simple.png'; // Assurez-vous d'avoir le bon chemin
import '../../composents/home/Major.css'; // Importer les styles

function Accueil() {
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
        {/* ProgressTracker */}
        <CardButton title="Periode1" navigateTo="/ProgressTracker" />
        <CardButton title="Periode2" navigateTo="/Periode2" />
        <CardButton title="Periode3" navigateTo="/Period3" />
        <CardButton title="Periode4" navigateTo="/Periode4" />
       

      </div>
    </div>
  );
}

export default Accueil;
