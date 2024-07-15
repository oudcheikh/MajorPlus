import React from 'react';
import { useNavigate } from 'react-router-dom';
// import flask from '../composents/home/Icones/arabic-language.png';
// import calculator from '../composents/home/Icones/eiffel-tower.png';
import '../composents/home/Major.css';
import Accueilarab from '../composents/_ARABE_Folder/Accueilarab';
import Acceuilfrançais from './Acceuilfrançais';

const Card = ({ title, content, icon, full, navigateTo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (navigateTo) {
      navigate(navigateTo);
    }
  };

  return (
    <div className={`card ${full ? 'full-card' : ''}`} onClick={handleClick}>
      {icon && <img src={icon} alt={title} className="card-icon" />}
      <div className="card-content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

function Acceuil() {
  return (
    <div className="app-container">

      <div className="full-width-container">
        <Card title="اللغة العربية " content="" icon={"images/Icones/arabic-language.png"} full navigateTo="/Accueilarab" />
        <Card title="Français" content="" icon={"images/Icones/eiffel-tower.png"} full navigateTo="/Acceuilfrançais" />
        <Card title="Sign_in" content="" icon={"images/Icones/eiffel-tower.png"} full navigateTo="Sign_in" />
        <Card title="Accueil" content="" icon={"images/Icones/eiffel-tower.png"} full navigateTo="ProgressMap"/>
        <Card title="ProgressMap" content="" icon={"images/Icones/eiffel-tower.png"} full navigateTo="Step_finale_nchallh"/>

        <Card title="trajectoire" content="" icon={"images/Icones/eiffel-tower.png"} full navigateTo="ProgressMap3"/>

      </div>
    </div>
  );
}

export default Acceuil;
