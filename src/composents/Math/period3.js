import React from 'react';
import { useNavigate } from 'react-router-dom';
//import calculatorIcon from '../../composents/home/Icones/calculator-simple.png'; // Assurez-vous d'avoir le bon chemin
import '../../composents/home/Major.css'; // Importer les styles

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
        <CardButton title="Soustraction et Adition des fractions" navigateTo="/SousEtAddFraction" />
        <CardButton title="Les nombers Decimaux" navigateTo="/NomberDecimaux" />
        <CardButton title="PartageInegaux" navigateTo="/PatageInegaux" />
        <CardButton title="CalculeAire" navigateTo="/CalculeAire" />
      </div>
    </div>
  );
}

export default Acceuil;
