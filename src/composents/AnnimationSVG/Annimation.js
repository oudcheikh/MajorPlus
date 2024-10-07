import React, { useEffect } from 'react';
import anime from 'animejs';
import './annimation.css';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const AnimationComponent = ({ isSuccess }) => {
  useEffect(() => {
    if (isSuccess) {
      // Animation pour le succès
      anime({
        targets: '.flower-particle',
        translateX: () => anime.random(-100, 100),
        translateY: [0, anime.random(200, 600)],
        scale: [0, 2],
        opacity: [1, 0],
        easing: 'easeOutExpo',
        duration: anime.random(3000, 5000),
        delay: anime.stagger(10),
      });
    } else {
      // Animation pour l'échec
      anime({
        targets: '.flower-particle',
        translateX: () => anime.random(-100, 100),
        translateY: [0, -anime.random(200, 600)],
        scale: [0, 2],
        opacity: [1, 0],
        easing: 'easeInExpo',
        duration: anime.random(3000, 5000),
        delay: anime.stagger(10, { start: 500 }),
      });
    }
  }, [isSuccess]);

  return (
    <div className="flower-container">
      {Array.from({ length: 600 }).map((_, i) => (
        <div
          key={i}
          className="flower-particle"
          style={{ backgroundColor: getRandomColor() }}
        />
      ))}
    </div>
  );
};

export default AnimationComponent;
