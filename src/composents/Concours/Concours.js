import React from 'react';
import { useNavigate } from 'react-router-dom';
import rocketIcon from '../../composents/home/Icones/rocket-lunch.png';
import statsIcon from '../../composents/home/Icones/stats.png';
import timeIcon from '../../composents/home/Icones/time-twenty-four.png';
import quiz from '../../composents/home/Icones/quiz.png';
import flask from '../../composents/home/Icones/flask-potion.png';
import historyIcon from '../../composents/home/Icones/history-book.png'; // Renommé pour éviter un conflit de nom
import praying from '../../composents/home/Icones/praying.png';
import Fraçais from '../../composents/home/Icones/language-learning.png';

import calculator from '../../composents/home/Icones/calculator-simple.png';
import '../../composents/home/Major.css';

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


function Concours() {
  return (
    <div className="app-container">
      <div className="card-grid">
        <Card title="Concours Français"  icon={statsIcon} navigateTo="/ConcoursFrançais2005" />
        
       {/* <Card title="Concours 2007" content="Test aléatoire sur tes matières!" icon={quiz} navigateTo="/QuizTest" />
        <Card title="Concours 2008" content="Travailler sur tes points faibles!" icon={rocketIcon} />
        <Card title="Concours 209" content="Travailler sur tes points faibles!" icon={rocketIcon} />
        <Card title="Concours 2010" content="Travailler sur tes points faibles!" icon={rocketIcon} />
        <Card title="Concours 2011" content="Travailler sur tes points faibles!" icon={rocketIcon} />
  
  */}
      </div>
      {/*
      <div className="full-width-container">
        <Card title="Concours 2012" content="" icon={flask} full navigateTo="/Science" />
        <Card title="Concours 2013" content="" icon={calculator} full navigateTo="/Math" />
        <Card title="Concours2014" content="" icon={historyIcon} full navigateTo="/Histoire" />
        <Card title="Concours 2015" content="" icon={praying} full navigateTo="/Islamique" />
        <Card title="Concours 2016" content="" icon={Fraçais} full navigateTo="/Français" />
        <Card title="Concours 2017" content="" icon={Fraçais} full navigateTo="/Concours " />
        <Card title="Concours 2018" content="" icon={Fraçais} full navigateTo="/Concours " />
        <Card title="Concours 2019" content="" icon={Fraçais} full navigateTo="/Concours " />
        <Card title="Concours 2020" content="" icon={Fraçais} full navigateTo="/Concours " />
        <Card title="Concours 2021" content="" icon={Fraçais} full navigateTo="/Concours " />
        <Card title="Concours 2022" content="" icon={Fraçais} full navigateTo="/Concours " />

      </div>
      */}
    </div>
  );
}

export default Concours ;
