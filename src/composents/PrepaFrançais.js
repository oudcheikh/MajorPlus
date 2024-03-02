import React from 'react';
import { useNavigate } from 'react-router-dom';
import rocketIcon from '../composents/home/Icones/rocket-lunch.png';
import statsIcon from '../composents/home/Icones/stats.png';
import timeIcon from '../composents/home/Icones/time-twenty-four.png';
import quiz from '../composents/home/Icones/quiz.png';
import flask from '../composents/home/Icones/flask-potion.png';
import Fraçais from '../composents/home/Icones/language-learning.png';
import calculator from '../composents/home/Icones/calculator-simple.png';
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
      
      <div className="full-width-container">
        <Card title="Science" content="" icon={flask} full navigateTo="/QuizTest" />
        <Card title="Math" content="" icon={calculator} full navigateTo="/QuizTest" />
        <Card title="Français" content="" icon={Fraçais} full navigateTo="/QuizTest" />
      </div>
    </div>
  );
}

export default Acceuil;
