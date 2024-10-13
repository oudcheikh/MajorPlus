import React, { useState, useEffect } from 'react'; 
import Confetti from 'react-confetti';

const SlideComponent = ({ currentIndex, segmentIndex, isActive }) => {
    const [X, setX] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        if (isActive) {
            setShowConfetti(true);
            // Arrête l'animation des confettis après 5 secondes (5000 ms)
            const timer = setTimeout(() => {
                setShowConfetti(false);
            }, 5000);

            // Nettoie le timeout si le composant est démonté ou si l'animation est annulée
            return () => clearTimeout(timer);
        }
    }, [isActive]);

    const handle = () => {
        if (isActive) {
            setX(!X);
        }
    };

    return (
        <div style={{ position: 'relative', minHeight: '10vh' }}>
            <h1>Bravo</h1>
            {isActive && showConfetti && (
                <Confetti 
                    width={window.innerWidth} 
                    height={window.innerHeight} 
                    numberOfPieces={500}   // Augmente le nombre de confettis
                    gravity={0.2}          // Ajuste la vitesse de chute
                    confettiSource={{ x: 0, y: 0, w: window.innerWidth, h: 50 }}  // Zone de lancement des confettis
                />
            )}
        </div>
    );
};

export default SlideComponent;
