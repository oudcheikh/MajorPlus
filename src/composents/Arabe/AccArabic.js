import React from 'react';
import { useNavigate } from 'react-router-dom';

import historyIcon from '../../composents/home/Icones/history-book.png'; // Renommé pour éviter un conflit de nom



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

function AcceuilArabic() {
  return (
    <div className="app-container">
    
      <div className="full-width-container">
       
        <Card title="النحو" content="" icon={historyIcon} full navigateTo="/Annahw" />

        <Card title="الاملاء" content="" icon={historyIcon} full navigateTo="/Alimlaa" />
        <Card title="الصرف" content="" icon={historyIcon} full navigateTo="/Assarf" />

      </div>
    </div>
  );
}

export default AcceuilArabic;
