import React from 'react';
import { useNavigate } from 'react-router-dom';
// import familyIcon from '../../../home/Icones/family.png'; // Chemin de l'image pour "La Famille"
// import schoolIcon from '../../../home/Icones/little-girl.png'; // Chemin de l'image pour "Scolarisation des Filles"
// import travelIcon from '../../../home/Icones/touring.png'; // Chemin de l'image pour "Voyages"
// import lifeIcon from '../../../home/Icones/classroom.png'; // Chemin de l'image pour "La vie et l'ecole"
// import santé from'./HYGIENE_ET_SANTE/images/santé.jpg'
// import maladies from './HYGIENE_ET_SANTE/images/maladies.jpg'



import '../../../home/Major.css'; // Importer les styles

function Accueil() {
  const navigate = useNavigate();

  const CardButton = ({ title, navigateTo, icon }) => (
    <div className="card full-card" onClick={() => navigate(navigateTo)}>
      <img src={icon} alt={title} className="card-icon" />
      <div className="card-content">
        <h2>{title}</h2>
      </div>
    </div>
  );

  return (
    <div className="app-container">
     <div className="card-grid">
        <CardButton title="La Famille" navigateTo="/Vocabulaire" icon={"/images/Icones/family.png"} />
        <CardButton title="Scolarisation des Filles" navigateTo="/Vocabulaireecoleville" icon={"/images/Icones/little-girl.png"} />
        <CardButton title="Voyages" navigateTo="/Vocabulaire" icon={"/images/Icones/touring.png"} />
        <CardButton title="La vie et l'ecole" navigateTo="/Vocabulaireecoleville" icon={"/images/Icones/classroom.png"} />
        <CardButton title="Hygiéne et santé" navigateTo="/Vocabulaireecoleville" icon={"/images/Icones/santé.jpg"} />
        <CardButton title="Santé et maladies" navigateTo="/Vocabulaireecoleville" icon= {"/images/Icones/maladies.jpg"} />
        <CardButton title="La vie et l'ecole" navigateTo="/Vocabulaireecoleville" icon={"/images/Icones/classroom.png"} />
        <CardButton title="La vie et l'ecole" navigateTo="/Vocabulaireecoleville" icon={"/images/Icones/classroom.png"} />
        <CardButton title="La vie et l'ecole" navigateTo="/Vocabulaireecoleville" icon={"/images/Icones/classroom.png"} />
        <CardButton title="La vie et l'ecole" navigateTo="/Vocabulaireecoleville" icon={"/images/Icones/classroom.png"} />
        <CardButton title="La vie et l'ecole" navigateTo="/Vocabulaireecoleville" icon={"/images/Icones/classroom.png"} />
        <CardButton title="La vie et l'ecole" navigateTo="/Vocabulaireecoleville" icon={"/images/Icones/classroom.png"} />
      </div>
    </div>
  );
}

export default Accueil;
