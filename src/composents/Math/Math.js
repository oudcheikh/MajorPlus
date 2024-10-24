import React from 'react';
import './MathGrid.css';

import { useNavigate } from 'react-router-dom';
import '../../composents/home/Major.css';
import { IconButton } from "@mui/material";

function MathGrid() {


  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate("/");
  };
  const cards = [
    { title: "Periode1", imageUrl: "/images/cardd1.png", updated: false ,lien:"/Periode/1"},
    { title: "Periode 2", imageUrl: "/images/bulles.png", updated: false ,lien:'/Periode2'},

  ];

  return (
    <div className="math-section">

      <div style={{ width: '100%', textAlign: "left", display: 'block', paddingRight: "40px" }}>
        <h1><strong>Math     
                   <i className="fas fa-home" style={{ fontSize: "24px", color: "#339fff" }}  onClick={handleBackButton}></i>
        </strong></h1>
   
        <br></br> 
      </div>


      <div className="card-grid">
        {cards.map((card, index) => (
          <div key={index} className="card full-card">
            <div className="card-image-wrapper h-48">
              <img src={card.imageUrl} alt={card.title} className="card-image object-contain h-full" onClick={() => navigate(card.lien)}  />
              {card.updated && <span className="badge">UPDATED</span>}
            </div>
            <div className="card-title">{card.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MathGrid;


