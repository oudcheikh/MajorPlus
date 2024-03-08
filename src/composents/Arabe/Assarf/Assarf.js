import React from 'react';
import { useNavigate } from 'react-router-dom';
import verbe from'../Assarf/images/verbe.PNG'
import historyIcon from '../../../composents/home/Icones/history-book.png'; // Assurez-vous d'avoir le bon chemin
import '../../../composents/home/Major.css'; // Importer les styles
import { FormulaTextF } from '../../Styles/MajorStyles';


import {
    Container, SectionContainer, ImageContainer,FormulaText, Card, FormulaBox,BodyText,Subtitle, ContinueButton
  } from '../../Styles/MajorStyles'; // Assurez-vous que le chemin est correct

  
function Accueil() {
  const navigate = useNavigate();

  const passerTeste = () => {
    navigate('/Tadriib')
  }
  const CardButton = ({ title, navigateTo }) => (
    <div className="card full-card" onClick={() => navigate(navigateTo)}>
      <img src={historyIcon} alt={title} className="card-icon" />
      <div className="card-content">
        <h2>{title}</h2>
      </div>
    </div>
  );

  return (
    <div className="app-container">

      <div className="card-grid">

        <CardButton title="  الماضي" navigateTo="/Almadhi" />
        <CardButton title=" المضارع" navigateTo="/Almodharaa" />
        <CardButton title="  الامر" navigateTo="/Alamar" />
      </div>



      <button className="continue-button" onClick={passerTeste}>
        <FormulaTextF>اتدرب</FormulaTextF>
      </button>
    </div>
  );
}

export default Accueil;