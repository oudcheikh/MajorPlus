import React  from 'react';
import { useParams } from "react-router-dom";

import { useNavigate } from 'react-router-dom';
import '../../composents/home/Major.css'; 

function Accueil() {
  const navigate = useNavigate();
  const { periodeId } = useParams();
  console.log("Période ID :", periodeId);

  const CardButton = ({ title, navigateTo }) => {
    console.log("Rendering CardButton:", title); // Ajout de log pour le debug
    return (
      <div className="card full-card" onClick={() => navigate(navigateTo)}>
        <img src={"/images/Icones/calculator-simple.png"} alt={title} className="card-icon" />
        <div className="card-content">
          <h2>{title}</h2>
        </div>
      </div>
    );
  };

  return (
    <div className="app-container" style={{ direction: "ltr" }}>
      <div className="card-grid">
      <CardButton title="C1" navigateTo={`/C1_new/${periodeId}/1`} />

      <CardButton title="C2" navigateTo="/C2_new" />
        <CardButton title="C3" navigateTo="/C3_new" />
        <CardButton title="C4" navigateTo="/C4" />
        <CardButton title="C5" navigateTo="/C5A1" />
        <CardButton title="C6" navigateTo="/C6" />
        <CardButton title="C7" navigateTo="/C7" />
        <CardButton title="M2" navigateTo="/M2" />
        <CardButton title="G1" navigateTo="/G1" />
        <CardButton title="G2" navigateTo="/G2" />
        <CardButton title="G3" navigateTo="/G3" />
        <CardButton title="animation" navigateTo="/animation" />
      </div>
    </div>
  );
}

export default Accueil;
