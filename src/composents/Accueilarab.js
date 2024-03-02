import React from 'react';
import { useNavigate } from 'react-router-dom';
import rocketIcon from '../composents/home/Icones/rocket-lunch.png';
import statsIcon from '../composents/home/Icones/stats.png';
import timeIcon from '../composents/home/Icones/time-twenty-four.png';
import quiz from '../composents/home/Icones/quiz.png';
import flask from '../composents/home/Icones/flask-potion.png';
import historyIcon from '../composents/home/Icones/history-book.png'; // Renommé pour éviter un conflit de nom
import praying from '../composents/home/Icones/praying.png';
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
      <div className="card-grid">
      <Card title="الوقت المستغرق" content="معرفة الوقت المستغرق في كل مادة" icon={timeIcon} />
<Card title="النتائج" content="نتائج الاختبارات حسب المادة" icon={statsIcon} />
<Card title="اختبار اليوم" content="اختبار عشوائي على  موادك" icon={quiz} navigateTo="/QuizTestarab" />


<Card title="تدرب" content="تدرب على نقاط ضعفك" icon={rocketIcon} navigateTo="/PrepaArabe" />
      </div>
      <div className="full-width-container">
       
        <Card title="العربية" content="" icon={historyIcon} full navigateTo="/AcceiulArabic" />

        <Card title="التاريخ" content="" icon={historyIcon} full navigateTo="/Histoire" />
        <Card title="التربية الاسلامية" content="" icon={praying} full navigateTo="/Islamique" />
        
        <Card title="مواضيع كونكور" content="" icon={Fraçais} full navigateTo="/ConcoursArabe " />
      </div>
    </div>
  );
}

export default Acceuil;
