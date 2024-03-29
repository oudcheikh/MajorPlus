import React from 'react';
import { useNavigate } from 'react-router-dom';
//import historyIcon from '../../../../composents/home/Icones/history-book.png'; // Assurez-vous d'avoir le bon chemin
import '../../../../composents/home/Major.css'; // Importer les styles
import { FormulaTextF } from '../../../Styles/MajorStyles';

function Accueil() {
  const navigate = useNavigate();

  const passerTeste = () => {
    navigate('/Tadriib')
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
      <div>
        <br></br>
      </div>
      <div className="card-grid">

        <CardButton title=" المعرب والمبني" navigateTo="/C1_Almoaarab" />
        <CardButton title=" بناء الفعل الماضي على الفتح" navigateTo="/Chapitre2" />
        <CardButton title="بناء الفعل الماضي على الضم والسكون" navigateTo="/Chapitre3" />
        <CardButton title="بناء الفعل المضارع" navigateTo="/Chapitre4" />
        <CardButton title=" فعل الأمر  " navigateTo="/Chapitre5" />
        <CardButton title=" النكرة والمعرفة " navigateTo="/Chapitre6" />
        <CardButton title="  الفاعل " navigateTo="/Chapitre7" />
        <CardButton title="  المبتدأ والخبر " navigateTo="/Chapitre8" />
        <CardButton title=" أنواع الخبر " navigateTo="/Chapitre9" />
        <CardButton title="كان وأخواتها " navigateTo="/Chapitre10" />
        <CardButton title="إن وأخواتها " navigateTo="/Chapitre11" />
        <CardButton title="ظن وأخواتها " navigateTo="/Chapitre12" />
        <CardButton title="الأفعال الناصبة لمفعولين" navigateTo="/Chapitre13" />
        <CardButton title="اسم الفاعل " navigateTo="/Chapitre14" />
        <CardButton title="عمل اسم الفاعل  " navigateTo="/Chapitre15" />
        <CardButton title=" اسم المفعول " navigateTo="/Chapitre16" />
        <CardButton title="عمل اسم المفعول" navigateTo="/Chapitre17" />
        <CardButton title="ظرف الزمان" navigateTo="/Chapitre18" />
        <CardButton title="ظرف  المكان" navigateTo="/Chapitre19" />
        <CardButton title="  التمييز" navigateTo="/Chapitre20" />
        <CardButton title="  المفعول لأجله" navigateTo="/Chapitre21" />
        <CardButton title="البدل" navigateTo="/Chapitre22" />
        <CardButton title="  التوكيدُاللفظي " navigateTo="/Chapitre23" />
        <CardButton title="  التوكيد المعنوي " navigateTo="/Chapitre24" />
        <CardButton title=" النعت الحقيقي " navigateTo="/Chapitre25" />
        <CardButton title=" النعت السببي" navigateTo="/Chapitre26" />
        <CardButton title="  العطف" navigateTo="/Chapitre27" />
        <CardButton title="  المفعولُ المُطلق" navigateTo="/Chapitre28" />
        <CardButton title=" المفعول معه" navigateTo="/Chapitre29" />
        <CardButton title="  المنادي" navigateTo="/Chapitre30" />
        <CardButton title="  الاستثناء بالا" navigateTo="/Chapitre31" />
        <CardButton title="   الاستثناء بغير وسوى" navigateTo="/Chapitre32" />
        <CardButton title="الاستثناء بخلا وعدا وحاشا" navigateTo="/Chapitre33" />
      </div>



      
    </div>
  );
}

export default Accueil;
