import React from 'react';
import { useNavigate } from 'react-router-dom';


//import statsIcon from '../../../../home/Icones/stats.png'
import '../../../../../composents/home/Major.css';

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


function ConcoursFrançais2005() {
  return (
    <div className="app-container">
      <div className="card-grid">
        
        <Card title="Compréhension"  icon={"images/Icones/stats.png"} navigateTo="/Orth2005" />
        
      </div>
    
    </div>
  );
}

export default ConcoursFrançais2005 ;
