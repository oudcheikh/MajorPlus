import React from 'react';
import { useNavigate } from 'react-router-dom';
// import rocketIcon from '../composents/home/Icones/rocket-lunch.png';
// import statsIcon from '../composents/home/Icones/stats.png';
// import timeIcon from '../composents/home/Icones/time-twenty-four.png';
// import quiz from '../composents/home/Icones/quiz.png';
// import flask from '../composents/home/Icones/flask-potion.png';
// import Fraçais from '../composents/home/Icones/language-learning.png';
// import calculator from '../composents/home/Icones/calculator-simple.png';
import '../composents/home/Major.css';


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
      <div className="card-grid">
        <Card title="Temps passé" content="Savoir le temps passé sur chaque matière" icon={"images/Icones/time-twenty-four.png"} />
        <Card title="Résultats" content="Résultats des quiz par matière" icon={"images/Icones/stats.png"} />
        <Card title="Quiz du jour" content="Test aléatoire sur tes matières!" icon={"images/Icones/quiz.png"} navigateTo="/QuizTest" />
        <Card title="S'entraîner" content="S'entraîner sur tes points faibles!" icon={"images/Icones/rocket-lunch.png"} navigateTo="/PrepaFrançais" />
      </div>
      <div className="full-width-container">
        <Card title="Science" content="" icon={"images/Icones/flask-potion.png"} full navigateTo="/Science" />
        <Card title="Math" content="" icon={"images/Icones/calculator-simple.png"} full navigateTo="/Math" />
        <Card title="Français" content="" icon={"images/Icones/language-learning.png"} full navigateTo="/Français" />
        <Card title="Concours" content="" icon={"images/Icones/language-learning.png"} full navigateTo="/Concours " />
      </div>
    </div>
  );
}

export default Acceuil;
