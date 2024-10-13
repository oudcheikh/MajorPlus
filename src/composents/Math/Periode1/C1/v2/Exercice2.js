import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../../Sign_in/v2/firebase";
import { useAuth } from "../../../../Sign_in/v2/context/AuthContext";
import ActivityWrapper from "../../../Reusable Components/Slides Content/ActivityWrapper";
import correctSoundFile from '../../../../sounds/correct.mp3'; 
import incorrectSoundFile from '../../../../sounds/incorrect.mp3'; 
import AnimationComponent from '../../../../AnnimationSVG/Annimation';

const NumberTable = () => {
    const [userInputs, setUserInputs] = useState(Array(12).fill(""));
    const [result, setResult] = useState("");
    const [step, setStep] = useState(1);
    const [randomNumber, setRandomNumber] = useState(generateRandomNumber(1));
    const [entryTime, setEntryTime] = useState(null);
    const { currentUser } = useAuth();
    const [isAnsweredCorrectly, setIsAnsweredCorrectly] = useState(false);
    const [isLastStep, setIsLastStep] = useState(false);

    const correctSound = new Audio(correctSoundFile);
    const incorrectSound = new Audio(incorrectSoundFile);
    const [isSuccess, setIsSeccess]=useState(false)


    useEffect(() => {
        const now = new Date();
        setEntryTime(now);
    }, []); 

    function generateRandomNumber(step) {
        switch (step) {
            case 1:
                return Math.floor(1_000_000 + Math.random() * 9_000_000).toString(); // Nombres de 1 à 9 millions
            case 2:
                return Math.floor(10_000_000 + Math.random() * 90_000_000).toString(); // Nombres de 10 à 99 millions
            case 3:
                return Math.floor(100_000_000 + Math.random() * 900_000_000).toString(); // Nombres de 100 millions à 999 millions
            default:
                return "";
        }
    }
    const handleChange = (index, value) => {
        if (/^\d?$/.test(value)) {
            const newInputs = [...userInputs];
            newInputs[index] = value;
            setUserInputs(newInputs);
        }
    };

    const checkAnswer = () => {
        const formattedNumber = randomNumber.toString().padStart(12, "0").split('');
        const isCorrect = formattedNumber.every((digit, index) => userInputs[index] === digit || userInputs[index] === "");
        setResult(isCorrect ? "Bonne réponse!" : "Mauvaise réponse. Essayez encore.");
        setIsAnsweredCorrectly(isCorrect);

        // Jouer le son correspondant
        if (isCorrect) {
            correctSound.play();
        } else {
            incorrectSound.play();
        }

        if (step < 3) {
            setTimeout(() => {
                setStep(prevStep => prevStep + 1);
                setRandomNumber(generateRandomNumber(step + 1));
                setUserInputs(Array(12).fill(""));
                setResult("");
            }, 3000);
        } else {
            setIsLastStep(true);
        }

        return { allAnswersCorrect: isCorrect, totalQuestions: step, correctAnswers: isCorrect ? 1 : 0, incorrectAnswers: isCorrect ? 0 : 1 };
    };

    const sendActivityData = async () => {
        const endTime = new Date();
        const timeSpent = (endTime - entryTime) / 1000; 
        const { allAnswersCorrect, totalQuestions, correctAnswers, incorrectAnswers } = checkAnswer();

        const activityData = {
            userId: currentUser.uid,
            activityName: "NumberTable",
            entryTime: entryTime.toISOString(),
            timeSpent: timeSpent,
            totalQuestions,
            correctAnswers,
            incorrectAnswers,
            allAnswersCorrect
        };

        try {
            await addDoc(collection(db, 'users',currentUser.uid, 'activities'), activityData);
            console.log('Activity data sent:', activityData);
        } catch (e) {
            console.error('Error sending activity data:', e);
        }
    };

    const handleReset = () => {
        setStep(1);
        setRandomNumber(generateRandomNumber(1));
        setUserInputs(Array(12).fill(""));
        setResult("");
        setIsAnsweredCorrectly(false);
        setIsLastStep(false);
    };

    const handleFinish = () => {
        sendActivityData();
        handleReset();
    };

    const handleValidate = () => {
        checkAnswer();
    };

    return (
        <ActivityWrapper
            activityTitle={"Exercice 2"}
            explanationVideoUrl={"/path/to/video.mp4"}
            user={currentUser}
            onSubmit={checkAnswer}
            activityName="NumberTable"
        >
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100%" }}>
                <img src="/images/Math/C/imgC19/Activity.png" alt="Activity" style={{ width: "50%", height: "auto", maxWidth: "70%", display: "block", marginLeft: "auto", marginRight: "auto" }} />
                <h2 style={{ color: "blue" }}>Compléter le tableau suivant:</h2>
                <h3>Classez les chiffres du nombre : {randomNumber}</h3>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <table style={{ borderCollapse: "collapse", margin: "30px 0", fontSize: "10px", textAlign: "center", width: "90%" }}>
                        <thead>
                            <tr>
                                <th colSpan="3" style={{ padding: "4px", border: "1px solid black", fontSize: "18px", fontFamily: "Arial, sans-serif", color: "black", width: "30px", height: "30px" }}>milliards</th>
                                <th colSpan="3" style={{ padding: "4px", border: "1px solid black", fontSize: "18px", fontFamily: "Arial, sans-serif", color: "black", width: "30px", height: "30px" }}>millions</th>
                                <th colSpan="3" style={{ padding: "4px", border: "1px solid black", fontSize: "18px", fontFamily: "Arial, sans-serif", color: "black", width: "30px", height: "30px" }}>milliers</th>
                                <th colSpan="3" style={{ padding: "4px", border: "1px solid black", fontSize: "18px", fontFamily: "Arial, sans-serif", color: "black", width: "30px", height: "30px" }}>unités</th>
                            </tr>
                            <tr>
                                {["C", "D", "U", "C", "D", "U", "C", "D", "U", "C", "D", "U"].map((header, index) => (
                                    <th key={index} style={{ padding: "4px", border: "1px solid black", fontSize: "18px", fontFamily: "Arial, sans-serif", color: "black", width: "30px", height: "30px" }}>{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {userInputs.map((input, index) => (
                                    <td key={index} style={{ padding: "4px", border: "1px solid black", fontSize: "18px", fontFamily: "Arial, sans-serif", color: "black", width: "30px", height: "30px" }}>
                                        <input style={{ width: "100%", height: "auto", textAlign: "center", padding: "5px", margin: "0", border: "1px solid #ccc", borderRadius: "2px", fontSize: "16px", fontFamily: "Arial, sans-serif", color: "black", boxSizing: "border-box" }} placeholder="-" type="text" value={input} maxLength="1" onChange={(e) => handleChange(index, e.target.value)} />
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <Button variant="contained" color="primary" onClick={handleValidate} style={{ margin: "30px" }}>
                        Répondre
                    </Button>
                    <Button variant="contained" color="primary" disabled={!isLastStep} onClick={handleFinish}>
                        Terminer
                    </Button>
                </div>
                {result && (
                    <p style={{ color: isAnsweredCorrectly ? "green" : "red" }}>
                        {result}
                    </p>
                )}
            </div>


        </ActivityWrapper>
    );
};

export default NumberTable;




// Exercice2.js
// Exercice2.js
// import React, { useState, useEffect } from 'react';
// import ConfettiAnimation from './Victoire';


// const Exercice2 = ({ currentIndex, segmentIndex }) => {
//     const [showAnimation, setShowAnimation] = useState(false);
//     const [windowWidth, setWindowWidth] = useState(window.innerWidth);
//     const [windowHeight, setWindowHeight] = useState(window.innerHeight);
//     const [segment, setSegment] = useState(1);  // Numéro du segment

//     const handleAnimationTrigger = () => {
//         setShowAnimation(true);
//         // Masquer l'animation après 3 secondes
//         setTimeout(() => setShowAnimation(false), 3000);
//         // // Simuler un changement de segment
//         // setSegment(segment + 1);
//     };

//     // Mettre à jour la taille de la fenêtre si elle change
//     useEffect(() => {
// console.log(segmentIndex)


//         const handleResize = () => {
//             setWindowWidth(window.innerWidth);
//             setWindowHeight(window.innerHeight);
//         };

//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     return (
//         <div>
//             <h2>Exercice 2</h2>
//             <button onClick={handleAnimationTrigger}>Déclencher Confetti</button>
//             {showAnimation && (
//                 <ConfettiAnimation
//                     width={windowWidth}
//                     height={windowHeight}
//                     segment={segment}  // Envoyer le numéro de segment
//                 />
//             )}
//         </div>
//     );
// };

// export default Exercice2;



// import React, { useState } from 'react';
// import Confetti from 'react-confetti';

// const SlideComponent = ({ currentIndex, segmentIndex }) => {
//     const[X, setX]=useState(false)





//     // Remplace '2' par l'index du segment où tu veux que les confettis apparaissent
//     const showConfetti = currentIndex === segmentIndex && segmentIndex === 1;
// const valide=true
// const handle=()=>{
//     if(showConfetti && valide){
//         setX( ! X)

//     }
// }

//     return (
//         <div style={{ position: 'relative', minHeight: '100vh' }}>
//             <h1>Segment {segmentIndex + 1}</h1>
//             {/* Si c'est le bon segment, on affiche les confettis */}

//             <button onClick={handle}>ok</button>
//             {X && <Confetti width={window.innerWidth} height={window.innerHeight} />}
//         </div>
//     );
// };

// export default SlideComponent;



// import React, { useState } from 'react';
// import SlideAnimation from './Victoire'

// const SlideComponent = ({ currentIndex, segmentIndex }) => {
//     const [statusConfetti, setStatusConfetti] = useState(false)


//     const handleConfetti = () => {

//         setStatusConfetti(!statusConfetti)

//     }
//     return (
//         <div>

// <h1>Segment {segmentIndex + 1}</h1>
//             <button onClick={handleConfetti}>ok</button>

// <SlideAnimation  currentIndex={currentIndex} segmentIndex={segmentIndex} isActive={statusConfetti}/>

//         </div>

//     )
// };

// export default SlideComponent;
