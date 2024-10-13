// // ConfettiAnimation.js
// import React from 'react';
// import Confetti from 'react-confetti';

// const ConfettiAnimation = ({ width, height, onAnimationComplete, segment }) => {
//     return (
//         <div>
//             <Confetti
//                 width={width}
//                 height={height}
//                 numberOfPieces={200} // Vous pouvez ajuster ce nombre
//                 onConfettiComplete={onAnimationComplete}
//             />
//             <p>Segment actuel : {segment}</p> {/* Affiche le numéro de segment */}
//         </div>
//     );
// };

// export default ConfettiAnimation;



import React, { useState } from 'react';
import Confetti from 'react-confetti';

const SlideComponent = ({ currentIndex, segmentIndex ,isActive}) => {
    const[X, setX]=useState(false)





    // Remplace '2' par l'index du segment où tu veux que les confettis apparaissent
    const showConfetti = currentIndex === segmentIndex && segmentIndex === currentIndex;
const valide=true
const handle=()=>{
    if(isActive){
        setX( ! X)

    }
}

    return (
        <div style={{ position: 'relative', minHeight: '10vh' }}>
      <h1>Bravo{}</h1>
            {isActive && <Confetti width={window.innerWidth} height={window.innerHeight} />}
        </div>
    );
};

export default SlideComponent;

