import React from 'react';
import { useNavigate } from 'react-router-dom';

// import historyIcon from '../composents/home/Icones/history-book.png'; // Renommé pour éviter un conflit de nom
// import praying from '../composents/home/Icones/praying.png';

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
       
        <Card title="التاريخ" content="" icon={"images/Icones/history-book.png"} full navigateTo="/QuizTestarab" />
        <Card title="التربية الاسلامية" content="" icon={"images/Icones/praying.png"} full navigateTo="/QuizTestarab" />
        
       
      </div>
    </div>
  );
}

export default Acceuil;
