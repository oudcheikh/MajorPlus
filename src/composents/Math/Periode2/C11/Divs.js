import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import anime from 'animejs/lib/anime.es.js'; // Importation de la bibliothèque Anime.js
import DivisionComponent from './DivisionEuclid';

const AnimatedCard = styled.div`
  opacity: 0; // Commencez avec une opacité de 0 pour l'effet d'entrée
`;

function AcceuilDiv() {
  const [isCardVisible, setIsCardVisible] = useState(false);

  useEffect(() => {
    // Anime l'entrée de la carte avec un effet de fondu lors du chargement de la page
    anime({
      targets: '.animated-card',
      opacity: 1,
      duration: 5000, // Durée de l'animation en millisecondes
      easing: 'easeInOutSine', // Courbe d'interpolation de l'animation
      delay: 500 // Délai avant le début de l'animation en millisecondes
    });
  }, []);

  return (
    <AnimatedCard className="animated-card">
  
  <DivisionComponent />
    </AnimatedCard>
  );
}

export default AcceuilDiv;
