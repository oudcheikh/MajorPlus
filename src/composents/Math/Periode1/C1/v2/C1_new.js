// import React, { useState } from "react";  
// import SwipeableScreens from "../../../Reusable Components/Swipeable/SwipeableScreen";  
// import C1A1 from "./C1A1";  
// import C1A2 from "./C1A2";  
// import SwipeSection from "../../../Reusable Components/introduction/SwipeSection";  
// import Exercice2 from "./Exercice2";  
// import StepFinale from "./StepFinale";  
// import Confetti from 'react-confetti';  

// export default function C1_new({ onFinish }) {  
//     const question = "Que signifie 1 000 000 ?";  
//     const options = ["cent", "mille", "million", "milliard"];  
//     const correctAnswer = "million";  
//     const explanation = "1 000 000 est appelé un million.";  

//     const introProps = {  
//         title: "Les grands nombres :",  
//         imagePath: "/images/Math/C/C1/Po.png",  
//         content: [  
//             '1 00 = <span style={{ color: "#FF7F50" }}>"cent"</span>',   
//             '1 000 = <span style={{ color: "#FF7F50" }}>"mille"</span>',  
//             '1 000 000 = <span style={{ color: "#FF7F50" }}>"million"</span>',   
//             '1 000 000 000 = <span style={{ color: "#FF7F50" }}>"milliard"</span>'  
//         ]  
//     };  

//     const [showConfetti, setShowConfetti] = useState(false); // État pour contrôler le confetti  

//     const handleConfettiClick = () => {  
//         setShowConfetti(true); // Afficher le confetti lorsque le bouton est cliqué  
//     };  

//     const resetConfetti = () => {  
//         setShowConfetti(false); // Réinitialiser l'état si nécessaire  
//     };  

//     const slides = [  
//         () => (  
//             <SwipeSection   
//                 introProps={introProps}   
//                 question={question}   
//                 options={options}   
//                 correctAnswer={correctAnswer}   
//                 explanation={explanation}   
//             />  
//         ),  
//         () => (  
//             <div>  
//                 <C1A2 />  
//                 <button onClick={handleConfettiClick}>Afficher le Confetti</button> {/* Bouton pour afficher le confetti */}  
//             </div>  
//         ),  
//         () => <Exercice2 resetConfetti={resetConfetti} />, // Optional - Reset confetti in Exercice2  
//         () => <StepFinale onFinish={onFinish} resetConfetti={resetConfetti} />,  
//     ];  

//     return (  
//         <div>  
//             {showConfetti && <Confetti />} {/* Affichez le confetti si l'état est vrai */}  
//             <SwipeableScreens slides={slides} currentSegmentIndex={0} />  
//         </div>  
//     );  
// }



import React from "react";
import SwipeableScreens from "../../../Reusable Components/Swipeable/SwipeableScreen";
import C1A1 from "./C1A1";
import C1A2 from "./C1A2";
import SwipeSection from "../../../Reusable Components/introduction/SwipeSection"; // Importez le nouveau composant
import Exercice2 from "./Exercice2";
import { useNavigate } from "react-router-dom";
import StepFinale from "./StepFinale";

export default function C1_new({ onFinish }) {
    const question = "Que signifie 1 000 000 ?";
    const options = ["cent", "mille", "million", "milliard"];
    const correctAnswer = "million";
    const explanation = "1 000 000 est appelé un million.";

    const introProps = {
        title: "Les grands nombres :",
        imagePath: "/images/Math/C/C1/Po.png",
        content: ['1 00 = <span style={{ color: "#FF7F50" }}>"cent"</span>', '1 000 = <span style={{ color: "#FF7F50" }}>"mille"</span>', '1 000 000 = <span style={{ color: "#FF7F50" }}>"million"</span>', '1 000 000 000 = <span style={{ color: "#FF7F50" }}>"milliard"</span>'],
    };

    const slides = [() => <SwipeSection introProps={introProps} question={question} options={options} correctAnswer={correctAnswer} explanation={explanation} />,
        
        
         C1A2, 
         Exercice2,
        () => <StepFinale onFinish={onFinish} />
        ];

    return <SwipeableScreens slides={slides} currentSegment={0} onFinish={onFinish}></SwipeableScreens>;
}