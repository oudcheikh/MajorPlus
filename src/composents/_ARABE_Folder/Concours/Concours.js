import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../../../composents/home/Major.css';



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
        <Card title="Concours Français"  icon={"images/Icones/stats.png"} navigateTo="/ConcoursFrançais2005" />
        
      
      </div>
     
    </div>
  );
}

export default Concours ;
