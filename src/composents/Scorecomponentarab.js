import React, { useEffect } from 'react';
import anime from 'animejs';
import { Card } from '@mui/material';
import './Styles/Scorecomponent.css';
import imgsucess from './succes .png';
import imgechec from './echec.png';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const ScoreComponent = ({ score }) => {
  const isSuccess = score >= 50;

  useEffect(() => {
    if (isSuccess) {
      anime({
        targets: '.flower-particle',
        translateX: () => anime.random(-100, 100),
        translateY: [0, anime.random(200, 600)], // الجسيمات تتساقط
        scale: [0, 2],
        opacity: [1, 0],
        easing: 'easeOutExpo',
        duration: anime.random(3000, 5000),
        delay: anime.stagger(10)
      });
    } else {
      anime({
        targets: '.flower-particle',
        translateX: () => anime.random(-100, 100),
        translateY: [0, -anime.random(200, 600)], // الجسيمات ترتفع لترمز للفشل
        scale: [0, 2],
        opacity: [1, 0],
        easing: 'easeInExpo',
        duration: anime.random(3000, 5000),
        delay: anime.stagger(10, {start: 500})
      });
    }
  }, [isSuccess]);

  return (
    <div className="score-container">
      <Card className="score-card" elevation={4}>
        <div className="flower-container">
          {Array.from({ length: 600 }).map((_, i) => (
            <div
              key={i}
              className="flower-particle"
              style={{ backgroundColor: getRandomColor() }}
            />
          ))}
        </div>
        {isSuccess ? (
          <div className="success-animation">
            <p>تهانينا! 🎉</p>
            <img src={imgsucess} alt="Success" className="success-image" />
            <p>نقاطك هي {score}.</p>
          </div>
        ) : (
          <div className="failure-animation">
            <p>للأسف، لم تنجح. 😔</p>
            <img src={imgechec} alt="Failure" className="success-image" />
            <p>حاول مرة أخرى، نقاطك هي {score}.</p>
          </div>
        )}
      </Card>
    </div>
  );
};

export default ScoreComponent;
