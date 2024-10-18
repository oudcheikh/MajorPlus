// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import { Box, Button } from '@mui/material';
// import { FormulaText } from '../../../Styles/MajorStyles';
// import './Style.css';
// import ActivityWrapper from "../../Reusable Components/Slides Content/ActivityWrapper"; 
// import { collection, addDoc } from "firebase/firestore";
// import { db } from "../../../Sign_in/v2/firebase";
// import { useAuth } from '../../../Sign_in/v2/context/AuthContext';

// const imageStyle = {
//     width: "50%",
//     height: "auto",
//     maxWidth: "70%",
//     display: "block",
//     marginLeft: "auto",
//     marginRight: "auto",
// };

// export const Orange_NumberDisplay = styled(Box)(({ isActive }) => ({
//     boxSizing: "border-box",
//     width: "80%",
//     height: "auto",
//     margin: "20px auto",
//     padding: "20px",
//     backgroundColor: "orange",
//     border: "3px dashed #B3E5FC",
//     transition: "background-color 0.4s, transform 0.3s",
//     cursor: "pointer",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     fontSize: "1em",
//     fontFamily: "'Comic Sans MS', sans-serif",
//     "&:hover": {
//         transform: "scale(1.05)",
//     },
// }));

// const ButtonContainer = styled(Box)({
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: '20px',
// });

// function Table_mesure() {
//     const [réponse, setReponse] = useState("");
//     const { currentUser } = useAuth();
//     const [score, setScore] = useState(0);
//     const [correctAnswers, setCorrectAnswers] = useState(0);
//     const [incorrectAnswers, setIncorrectAnswers] = useState(0);
//     const [entryTime, setEntryTime] = useState(null);
//     const [terminer, setTerminer] = useState(true);

//     useEffect(() => {
//         const now = new Date();
//         setEntryTime(now);
//     }, []);

//     const [tableData, setTableData] = useState([
//         { carreaux: '90 ', Km: '', hm: '' },
//         { carreaux: '410', Km: '', hm: '' },
//         { carreaux: '30', Km: '', hm: '' }
//     ]);

//     const bonnesReponses = [
//         { Km: '90000', hm: '9000' },
//         { Km: '410000', hm: '41000' },
//         { Km: '2000', hm: '200' }
//     ];

//     const handleInputChange = (index, key, value) => {
//         const updatedData = [...tableData];
//         updatedData[index][key] = value;
//         setTableData(updatedData);
//     };

//     const handleSubmit = () => {
//         setTerminer(false);
//         let correct = 0;
//         let incorrect = 0;

//         const userResponses = tableData.map(row => ({ Km: parseFloat(row.Km), hm: parseFloat(row.hm) }));
//         const isValid = userResponses.every(response =>
//             !isNaN(response.Km) && !isNaN(response.hm) && response.Km >= 0 && response.hm >= 0
//         );

//         if (isValid) {
//             bonnesReponses.forEach((br, index) => {
//                 if (userResponses[index].Km === parseFloat(br.Km) && userResponses[index].hm === parseFloat(br.hm)) {
//                     correct += 1;
//                 } else {
//                     incorrect += 1;
//                 }
//             });

//             if (correct === bonnesReponses.length) {
//                 setReponse("Bravo! Toutes les réponses sont correctes.");
//                 setScore(100);
//             } else {
//                 setReponse(`Désolé, certaines réponses sont incorrectes. ${correct} correct, ${incorrect} incorrect.`);
//                 setScore(0);
//             }

//             setCorrectAnswers(correct);
//             setIncorrectAnswers(incorrect);
//         } else {
//             setReponse("Veuillez entrer des valeurs numériques valides.");
//             incorrect = bonnesReponses.length; // Considérer toutes les réponses comme incorrectes
//         }

//         return {
//             allAnswersCorrect: correct === bonnesReponses.length,
//             totalQuestions: bonnesReponses.length,
//             correctAnswers: correct,
//             incorrectAnswers: incorrect,
//             score
//         };
//     };

//     const sendActivityData = async () => {
//         const endTime = new Date();
//         const timeSpent = (endTime - entryTime) / 1000;

//         const { allAnswersCorrect, totalQuestions, correctAnswers, incorrectAnswers, score } = handleSubmit();

//         const activityData = {
//             userId: currentUser.uid,
//             activityName: "Table_mesure",
//             entryTime: entryTime.toISOString(),
//             timeSpent: timeSpent,
//             totalQuestions,
//             correctAnswers,
//             incorrectAnswers,
//             allAnswersCorrect,
//             score
//         };

//         try {
//             await addDoc(collection(db, 'users',currentUser.uid, 'activities'), activityData);
//             console.log('Activity data sent:', activityData);
//         } catch (e) {
//             console.error('Error sending activity data:', e);
//         }
//     };

//     const handleFinish = () => {
//         sendActivityData();
//         handleReset();
//     };

//     const handleReset = () => {
//         setTableData([
//             { carreaux: '90', Km: '', hm: '' },
//             { carreaux: '410', Km: '', hm: '' },
//             { carreaux: '30', Km: '', hm: '' },
//         ]);
//         setReponse('');
//         setScore(0);
//         setCorrectAnswers(0);
//         setIncorrectAnswers(0);
//         setTerminer(true);
//     };

//     const voir_bonne_reponce = () => {
//         const updatedData = tableData.map((row, index) => ({
//             ...row,
//             Km: bonnesReponses[index].Km.toString(),
//             hm: bonnesReponses[index].hm.toString()
//         }));
//         setTableData(updatedData);
//         setReponse('');
//     };

//     return (
//         <div>
//             <ActivityWrapper
//                 activityTitle={"Exercice de Mesure"}
//                 explanationVideoUrl={"/Videos/number_sorting.mp4"}
//                 onSubmit={handleSubmit}  // Utilisation de handleSubmit ici
//                 user={currentUser}
//                 activityName="C3_Exercice1"
//             >
//                 <FormulaText>
//                     <img src="/images/Math/C/imgC19/Activity.png" alt="Activity" style={imageStyle} />

//                     <strong><span style={{ color: '#FF7F50' }}>Passer du mètre vers le Km et le hm :</span></strong>
//                     <br />
//                     <div className="table-container">
//                         <table>
//                             <thead>
//                                 <tr>
//                                     <th>m</th>
//                                     <th>(Km)</th>
//                                     <th>(hm)</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {tableData.map((row, index) => (
//                                     <tr key={index}>
//                                         <td>{row.carreaux}</td>
//                                         <td>
//                                             <input
//                                                 type="number"
//                                                 value={row.Km}
//                                                 placeholder='---'
//                                                 onChange={(e) => handleInputChange(index, 'Km', e.target.value)}
//                                             />
//                                         </td>
//                                         <td>
//                                             <input
//                                                 type="number"
//                                                 value={row.hm}
//                                                 placeholder='---'
//                                                 onChange={(e) => handleInputChange(index, 'hm', e.target.value)}
//                                             />
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                     <div>
//                         <strong style={{ color: 'blue' }}>
//                             <span>{réponse}</span>
//                         </strong>
//                     </div>
//                     <ButtonContainer>
//                         <Button
//                             variant="contained"
//                             color="primary"
//                             onClick={handleSubmit}
//                             disabled={!terminer}
//                         >
//                             Vérifier
//                         </Button>

//                         <Button
//                             variant="contained"
//                             color="primary"
//                             onClick={handleFinish}
//                             disabled={terminer}
//                             style={{ marginLeft: "20px" }}
//                         >
//                             Terminer
//                         </Button>
//                         <Button
//                             variant="contained"
//                             color="secondary"
//                             onClick={voir_bonne_reponce}
//                             style={{ marginLeft: "20px" }}
//                         >
//                             Voir correction
//                         </Button>
//                     </ButtonContainer>
//                     <br />
//                     <br />
//                 </FormulaText>
//             </ActivityWrapper>
//         </div>
//     );
// }

// export default Table_mesure;




// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import { Box, Button } from '@mui/material';
// import ActivityWrapper from "../../Reusable Components/Slides Content/ActivityWrapper";
// import { collection, addDoc } from "firebase/firestore";
// import { db } from "../../../Sign_in/v2/firebase";
// import { useAuth } from '../../../Sign_in/v2/context/AuthContext';
// import correctSoundFile from '../../../sounds/correct.mp3';
// import incorrectSoundFile from '../../../sounds/incorrect.mp3';
// import SlideAnimation from '../../../Confetti/Victoire';

// const ButtonContainer = styled(Box)({
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: '20px',
//     width: '100%',
//     maxWidth: '500px',
//     marginLeft: 'auto',
//     marginRight: 'auto',
// });
// const StyledBox = styled(Box)({
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: '20px',
// });
// function Exercice({ currentIndex, segmentIndex }) {

//     const [currentRow, setCurrentRow] = useState(0);
//     const [réponse, setReponse] = useState("");
//     const [correctAnswers, setCorrectAnswers] = useState(0);
//     const [incorrectAnswers, setIncorrectAnswers] = useState(0);
//     const [entryTime, setEntryTime] = useState(null);
//     const [terminer, setTerminer] = useState(false);
//     const { currentUser } = useAuth();

//     const correctSound = new Audio(correctSoundFile);
//     const incorrectSound = new Audio(incorrectSoundFile);
//     const [progressValue, setProgressValue] = useState(0)
//     const [questionsAnswered, setQuestionsAnswered] = useState(0);
//     const [begin, setBegin] = useState(true)

//     const [start, setStart] = useState(true)
//     const [ConfettiActive, setConfettiActive] = useState(false);

//     const totalQuestions = 3;

//     const [tableData, setTableData] = useState([
//         { carreaux: '90 ', Km: '', hm: '' },
//         { carreaux: '410', Km: '', hm: '' },
//         { carreaux: '30', Km: '', hm: '' }
//     ]);

//     const bonnesReponses = [
//         { Km: '90000', hm: '9000' },
//         { Km: '410000', hm: '41000' },
//         { Km: '2000', hm: '200' }
//     ];



//     useEffect(() => {
//         const progressPerQuestion = 100 / totalQuestions;
//         setProgressValue((questionsAnswered) => questionsAnswered * progressPerQuestion);
//         console.log('Progress updated:', questionsAnswered * progressPerQuestion);
//         setProgressValue(questionsAnswered * progressPerQuestion)
//         console.log('Progress updated:', progressValue)

//     }, [questionsAnswered]);




//     useEffect(() => {
//         const now = new Date();
//         setEntryTime(now);

//         const handleClick = () => {
//             console.log("question answ ", questionsAnswered)

//         };

//         window.addEventListener("click", handleClick);

//         return () => {
//             window.removeEventListener("click", handleClick);
//         };
//     }, []);



//     const handleCompleteExercise = () => {


//         handleFinish()
//         setTimeout(() => {
//             setStart(true)
//         }, 5000);
//     };

//     const handleInputChange = (key, value) => {
//         const updatedData = [...tableData];
//         updatedData[currentRow][key] = value;
//         setTableData(updatedData);
//     };

//     const handleSubmit = () => {

//         console.log(currentIndex)

//         console.log(segmentIndex)
//         const userResponse = {
//             dm: parseFloat(tableData[currentRow].dm),
//             cm: parseFloat(tableData[currentRow].cm)
//         };

//         if (isNaN(userResponse.dm) || isNaN(userResponse.cm) || userResponse.dm < 0 || userResponse.cm < 0) {
//             setReponse("Veuillez entrer des valeurs numériques valides.");
//             incorrectSound.play();
//             return;
//         }

//         const isCorrect = userResponse.dm === bonnesReponses[currentRow].dm && userResponse.cm === bonnesReponses[currentRow].cm;
//         if (isCorrect) {
//             setReponse("Bravo! La réponse est correcte.");
//             correctSound.play();
//             setCorrectAnswers(correctAnswers + 1);
//             console.log("correct aNSW", correctAnswers)

//         } else {
//             setReponse(" réponse est incorrecte");
//             incorrectSound.play();
//             setIncorrectAnswers(incorrectAnswers + 1);
//         }



//         setQuestionsAnswered((prev) => {
//             const updated = prev + 1;
//             console.log('Questions answered:', updated); // Log pour vérifier
//             return updated;
//         });

//         // Move to the next row if there is one, or mark the exercise as finished
//         if (currentRow < tableData.length - 1) {
//             setCurrentRow(currentRow + 1);
//         } else {
//             setTerminer(true);

//             handleCompleteExercise()
//             setStart(false)
//         }
//     };
//     const sendActivityData = async () => {
//         const endTime = new Date();
//         const timeSpent = (endTime - entryTime) / 1000;

//         const activityData = {
//             userId: currentUser.uid,
//             activityName: "Exercice1_C2",
//             entryTime: entryTime.toISOString(),
//             timeSpent: timeSpent,
//             totalQuestions: bonnesReponses.length,
//             correctAnswers,
//             incorrectAnswers,
//             allAnswersCorrect: correctAnswers === bonnesReponses.length,
//         };

//         try {
//             await addDoc(collection(db, 'users', currentUser.uid, 'activities'), activityData);
//             console.log('Activity data sent:', activityData);
//         } catch (e) {
//             console.error('Error sending activity data:', e);
//         }

//     }

//     const handleReset = () => {
//         setTableData([
//             { carreaux: '90', Km: '', hm: '' },
//             { carreaux: '410', Km: '', hm: '' },
//             { carreaux: '30', Km: '', hm: '' },
//         ]);


//         setCurrentRow(0);
//         setReponse('');
//         setCorrectAnswers(0);
//         setIncorrectAnswers(0);
//         setTerminer(false);
//         setProgressValue(0);
//         setBegin(true)
//         setQuestionsAnswered(0)
//     };
//     const handleFinish = async () => {
//         sendActivityData()
//         console.log(correctAnswers)
//         if (correctAnswers >= 2) {
//             setConfettiActive(true);
//         }
//         handleReset();
//     };



//     return (
//         <ActivityWrapper
//             activityTitle={"Exercice 1"}
//             explanationVideoUrl={"/Videos/number_sorting.mp4"}
//             user={currentUser}
//             activityName="C3Exercice1"
//             progress={progressValue} text={"C1A2"}
//         >




//             {ConfettiActive && <SlideAnimation currentIndex={currentIndex} segmentIndex={segmentIndex} isActive={true} correectAnsw={correctAnswers} />}


//             {!start && <StyledBox>
//                 <img src="/images/succes_.png" alt="Activity" style={{ width: '60%', height: 'auto' }} />
//             </StyledBox>
//             }

//             {start && <div>
//                 <StyledBox>
//                     <img src="/images/serveau.png" alt="Activity" style={{ width: '30%', height: 'auto' }} />
//                 </StyledBox>
//                 <strong><span>Passer du m vers le cm et dm :</span></strong>
//                 <br />

//                 <table className="conversion-table">
//                     <thead>
//                         <tr>
//                             <th>cm</th>
//                             <th>(dm)</th>
//                             <th>(m)</th>

//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td>{tableData[currentRow].carreaux}</td>
//                             <td>
//                                 <input
//                                     type="number"
//                                     value={tableData[currentRow].dm}
//                                     placeholder='---'
//                                     onChange={(e) => handleInputChange('dm', e.target.value)}
//                                 />
//                             </td>
//                             <td>
//                                 <input
//                                     type="number"
//                                     value={tableData[currentRow].cm}
//                                     placeholder='---'
//                                     onChange={(e) => handleInputChange('cm', e.target.value)}
//                                 />
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>
//                 <div>
//                     <strong style={{ color: 'blue' }}>
//                         <span>{réponse}</span>
//                     </strong>
//                 </div>

//                 <ButtonContainer>
//                     <Button
//                         variant="contained"
//                         style={{ margin: "20px 140px " }}
//                         onClick={handleSubmit}
//                         disabled={terminer}
//                     >
//                         Répondre
//                     </Button>


//                 </ButtonContainer>
//             </div>
//             }

//             <br />
//             <br />
//         </ActivityWrapper>
//     );
// }

// export default Exercice;




import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Box, Button } from '@mui/material';
import ActivityWrapper from "../../Reusable Components/Slides Content/ActivityWrapper";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../Sign_in/v2/firebase";
import { useAuth } from '../../../Sign_in/v2/context/AuthContext';
import correctSoundFile from '../../../sounds/correct.mp3';
import incorrectSoundFile from '../../../sounds/incorrect.mp3';
import SlideAnimation from '../../../Confetti/Victoire';
import './tabStyle.css';
const ButtonContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '20px',
    width: '100%',
    maxWidth: '500px',
    marginLeft: 'auto',
    marginRight: 'auto',
});
const StyledBox = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
});
function Exercice({ currentIndex, segmentIndex }) {
    const [tableData, setTableData] = useState([
        { carreaux: '120', km: '', hm: '' },
        { carreaux: '9', km: '', hm: '' },
        { carreaux: '21', km: '', hm: '' }
    ]);
    const [currentRow, setCurrentRow] = useState(0); 
    const [réponse, setReponse] = useState("");
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState(0);
    const [entryTime, setEntryTime] = useState(null);
    const [terminer, setTerminer] = useState(false);
    const { currentUser } = useAuth();

    const correctSound = new Audio(correctSoundFile);
    const incorrectSound = new Audio(incorrectSoundFile);
    const [progressValue,setProgressValue]=useState(0)
    const [questionsAnswered, setQuestionsAnswered] = useState(0);
    const [begin,setBegin]=useState(true)

    const [start, setStart]=useState(true)
    const [ConfettiActive, setConfettiActive] = useState(false);

    const totalQuestions = 3;

    useEffect(() => {
        const progressPerQuestion = 100 / totalQuestions;
        setProgressValue((questionsAnswered) => questionsAnswered * progressPerQuestion);
        console.log('Progress updated:', questionsAnswered * progressPerQuestion);
        setProgressValue(questionsAnswered * progressPerQuestion)
        console.log('Progress updated:', progressValue)

    }, [questionsAnswered]);

    const bonnesReponses = [
        { Km: 0.12, hm: 1.2 },
        { Km: 0.009, hm: 0.09 },
        { Km: 0.021, hm: 0.21 }
    ];

  

    useEffect(() => {
        const now = new Date();
        setEntryTime(now);

        const handleClick = () => {
            console.log("question answ ",questionsAnswered)
        
        };

        window.addEventListener("click", handleClick);

        return () => {
            window.removeEventListener("click", handleClick);
        };
    }, []);



    const handleCompleteExercise = () => {
        
      
        handleFinish()
        setTimeout(() => {
            setStart(true)
        }, 5000); 
    };

    const handleInputChange = (key, value) => {
        const updatedData = [...tableData];
        updatedData[currentRow][key] = value;
        setTableData(updatedData);
    };

    const handleSubmit = () => {

        console.log(currentIndex)

        console.log(segmentIndex)
        const userResponse = {
            km: parseFloat(tableData[currentRow].km),
            hm: parseFloat(tableData[currentRow].hm)
        };

        if (isNaN(userResponse.km) || isNaN(userResponse.hm) || userResponse.km < 0 || userResponse.hm < 0) {
            setReponse("Veuillez entrer des valeurs numériques valides.");
            incorrectSound.play();
            return;
        }

        const isCorrect = userResponse.km === bonnesReponses[currentRow].Km && userResponse.hm === bonnesReponses[currentRow].hm;
        if (isCorrect) {
            setReponse("Bravo! La réponse est correcte.");
            correctSound.play();
            setCorrectAnswers(correctAnswers + 1);
            console.log("correct aNSW",correctAnswers)

        } else {
            setReponse(" réponse est incorrecte");
            incorrectSound.play();
            setIncorrectAnswers(incorrectAnswers + 1);
        }


       
        setQuestionsAnswered((prev) => {
            const updated = prev + 1;
            console.log('Questions answered:', updated); // Log pour vérifier
            return updated;
        });

        // Move to the next row if there is one, or mark the exercise as finished
        if (currentRow < tableData.length - 1) {
            setCurrentRow(currentRow + 1);
        } else {
            setTerminer(true);
        
            handleCompleteExercise()
            setStart(false)
        }
    };
    const sendActivityData= async ()=>{
        const endTime = new Date();
        const timeSpent = (endTime - entryTime) / 1000;

        const activityData = {
            userId: currentUser.uid,
            activityName: "Exercice1_C2",
            entryTime: entryTime.toISOString(),
            timeSpent: timeSpent,
            totalQuestions: bonnesReponses.length,
            correctAnswers,
            incorrectAnswers,
            allAnswersCorrect: correctAnswers === bonnesReponses.length,
        };

        try {
            await addDoc(collection(db, 'users', currentUser.uid, 'activities'), activityData);
            console.log('Activity data sent:', activityData);
        } catch (e) {
            console.error('Error sending activity data:', e);
        }

    }

    const handleReset = () => {
        setTableData([
            { carreaux: '120', km: '', hm: '' },
            { carreaux: '9', km: '', hm: '' },
            { carreaux: '21', km: '', hm: '' }
        ]);
        setCurrentRow(0);
        setReponse('');
        setCorrectAnswers(0);
        setIncorrectAnswers(0);
        setTerminer(false);
        setProgressValue(0);
         setBegin(true)
         setQuestionsAnswered(0)
    };
    const handleFinish = async () => {
        sendActivityData()
        console.log(correctAnswers)
        if (correctAnswers >= 2) {
            setConfettiActive(true);
        }
        handleReset();
    };

  

    return (
        <ActivityWrapper
            activityTitle={"Exercice 3"}
            explanationVideoUrl={"/Videos/number_sorting.mp4"}
            user={currentUser}
            activityName="C3Exercice1"
            progress={progressValue} text={"C1A2"}
        >




{ConfettiActive && <SlideAnimation currentIndex={currentIndex} segmentIndex={segmentIndex} isActive={true} correectAnsw={correctAnswers} />}


{!start && <StyledBox>

                <img src="/images/succes_.png" alt="Activity" style={{ width: '60%', height: 'auto' }} />
            </StyledBox>
            }

    {start && <div>
        <StyledBox>
                <img src="/images/Math/C/imgC19/Activity.png" alt="Activity" style={{ width: '30%', height: 'auto' }} />
            </StyledBox>
            <strong><span>Passer du m vers le km et hm :</span></strong>
            <br />

            <table className="conversion-table">
                <thead>
                    <tr>
                        <th>m</th>
                        <th>(km)</th>
                        <th>(hm)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{tableData[currentRow].carreaux}</td>
                        <td>
                            <input
                                type="number"
                                value={tableData[currentRow].km}
                                placeholder='---'
                                onChange={(e) => handleInputChange('km', e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                value={tableData[currentRow].hm}
                                placeholder='---'
                                onChange={(e) => handleInputChange('hm', e.target.value)}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
          <div>
                <strong style={{ color: 'blue' }}>
                    <span>{réponse}</span>
                </strong>
            </div>

            <ButtonContainer>
                <Button
                    variant="contained"
                    style={{ margin: "20px 140px " }}
                    onClick={handleSubmit}
                    disabled={terminer}
                >
                    Répondre
                </Button>

               
            </ButtonContainer>
            </div>
}
   
            <br />
            <br />
        </ActivityWrapper>
    );
}

export default Exercice;

