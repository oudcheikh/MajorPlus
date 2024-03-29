import React from 'react';
import { useNavigate } from 'react-router-dom';
//import historyIcon from '../../../../composents/home/Icones/history-book.png'; // Assurez-vous d'avoir le bon chemin
import '../../../../composents/home/Major.css'; // Importer les styles
import { FormulaTextF } from '../../../Styles/MajorStyles';

function Accueil() {
  const navigate = useNavigate();

  const passerTeste = () => {
    navigate('/Tadriib_imlaa')
  }
  const CardButton = ({ title, navigateTo }) => (
    <div className="card full-card" onClick={() => navigate(navigateTo)}>
      <img src={"images/Icones/history-book.png"} alt={title} className="card-icon" />
      <div className="card-content">
        <h2>{title}</h2>
      </div>
    </div>
  );

  return (
    <div className="app-container">

      
<button className="continue-button" onClick={passerTeste}>
        <FormulaTextF>اتدرب</FormulaTextF>
      </button>
      <div><br></br></div>
      <div className="card-grid">

        <CardButton title="الهمزة المتوسطة على الياء" navigateTo="/IM_Chapitre1" />
        <CardButton title="الهمزة المتوسطة على  الواو" navigateTo="/IM_Chapitre2" /> 
        <CardButton title="الهمزة المتوسطة على  الألف" navigateTo="/IM_Chapitre3" /> 
        <CardButton title="الهمزة المتوسطة المفردة على السطر" navigateTo="/IM_Chapitre4" /> 
        <CardButton title="كتابة الهمزة المتطرفة" navigateTo="/IM_Chapitre5" /> 
        </div>



    </div>
  );
}

export default Accueil;
