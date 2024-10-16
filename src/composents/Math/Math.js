import React from 'react';
import { useNavigate } from 'react-router-dom';
//import calculatorIcon from '../../composents/home/Icones/calculator-simple.png'; // Assurez-vous d'avoir le bon chemin
import '../../composents/home/Major.css'; // Importer les styles
import { IconButton } from "@mui/material";

function Accueil() {
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate("/");
};


  const CardButton = ({ title, navigateTo }) => (
    <div className="card full-card" onClick={() => navigate(navigateTo)}>
      <img src={"images/Icones/calculator-simple.png"} alt={title} className="card-icon" />
      <div className="card-content">
        <h2>{title}</h2>
      </div>
    </div>
  );

  return (
    <div className="app-container" style={{ direction: "ltr" }} >

<div style={{ position: "relative", height: "20vh", direction: "ltr" }}>
            <br />

            <div className="pagination">
                <div className="icon-container">
                    <IconButton onClick={handleBackButton} className="home-icon">
                        <i className="fas fa-home" style={{ fontSize: "24px", color: "#339fff" }}></i>
                    </IconButton>
                </div>
               </div>
               <br/>
      <div className="card-grid">
        {/* ProgressTracker */}
        <CardButton title="Periode1" navigateTo="/Periode/1" />
        <CardButton title="Periode2" navigateTo="/Periode2" />
        <CardButton title="Periode3" navigateTo="/Period3" />
        <CardButton title="Periode4" navigateTo="/Periode4" />
       

      </div>
    </div>

    </div>
  );
}

export default Accueil;
