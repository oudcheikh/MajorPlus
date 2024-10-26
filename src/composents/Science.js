import React from 'react';
import { useNavigate } from 'react-router-dom';
// import flaskIcon from '../composents/home/Icones/flask-potion.png'; // Utiliser l'icône flask
import '../composents/home/Major.css';

function Accueil() {
  const navigate = useNavigate();



  const CardButton = ({ title, navigateTo }) => (
    <div className="card full-card" onClick={() => navigate(navigateTo)}>
      <img src={"/images/imagesSience/flask-potion.png"} alt={title} className="card-icon" />
      <div className="card-content">
        <h2>{title}</h2>
      </div>
    </div>
  );

  return (
    <div className="app-container">
      <div style={{ width: '100%', textAlign: "left", display: 'block', paddingRight: "40px" }}>
        <h1><strong>Science
                   <i className="fas fa-home" style={{ fontSize: "24px", color: "#339fff" }}  onClick={() => navigate("/")}></i>
        </strong></h1>
   
        <br></br> 
      </div>

      <div className="card-grid">
        <CardButton title="Equilibre Alimantaire" navigateTo="/EquilibrAlimantaire" />
         <CardButton title="Equilibre Energitique" navigateTo="/EquilibrEnergitique" /> 
       <CardButton title="Desertification" navigateTo="/Desertfication" />
      <CardButton title="Pollution" navigateTo="/Pollution" />
     <CardButton title="L'eau et la Santé" navigateTo="/EauEtSante" />
           <CardButton title="La Vaccination" navigateTo="/Vaccination" />
          <CardButton title="Sida" navigateTo="/Sida" />
      </div>
    </div>
  );
}

export default Accueil;
