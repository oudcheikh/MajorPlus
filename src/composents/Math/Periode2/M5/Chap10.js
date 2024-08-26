import React, { useState, useEffect } from 'react';
import { Box, Button, useMediaQuery, useTheme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import RestartAltIcon from '@mui/icons-material/RestartAlt';
import ActivityWrapper from "../../Reusable Components/Slides Content/ActivityWrapper";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../Sign_in/v2/firebase";

import { useAuth } from '../../../Sign_in/v2/context/AuthContext';
import styled from "styled-components";
import useSound from "use-sound";
import correctSound from '../../../sounds/correct.mp3';
import incorrectSound from '../../../sounds/incorrect.mp3';



const ButtonContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  }); 

const StyledText = styled.p`
    padding: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1em;
    font-family: 'Comic Sans MS', sans-serif;
    &:hover {
        transform: scale(1.05);
    }
`;

function CalculateSquareArea() {
    const [play] = useSound(correctSound);
    const [play1] = useSound(incorrectSound);
  
    const [entryTime, setEntryTime] = useState(null);
    const [isAnsweredCorrectly, setIsAnsweredCorrectly] = useState(false);
    const [isLastStep, setIsLastStep] = useState(false);
    const [step, setStep] = useState(1);
    
const [correctAnswers, setCorrectAnswers]=useState(0)

  const [isLastQuestion, setIsLastQuestion] = useState(false);

  
  
      const { currentUser } = useAuth();






    const [sideLength, setSideLength] = useState(10);
    const pixelsPerCm = 30;
    const sideLengthInPx = sideLength * pixelsPerCm;
    const generateNumber=()=>{
        return Math.floor(Math.random() * 11) + 2
    }
    const [sideNumber, setsideNumber] = useState(generateNumber);
    const [ShowCongrats, setShowCongrats] = useState(false);
    const [showX, setShowX] = useState(false);
    const [opVerify, setOpverify] = useState(false);
    

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


    useEffect(() => {
        const now = new Date();
        setEntryTime(now);
    }, []);
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        alignItems: 'center',
        padding: 4,
        maxWidth: isMobile ? '90vw' : 'auto',
        fontFamily: "'Comic Sans MS', sans-serif",
        transition: 'all 0.5s ease',
        boxShadow: '4px 4px 15px rgba(0,0,0,0.2)',

    };

    
    const verify=()=>{
        if (sideNumber == sideLength) {
            setShowCongrats(true);
            setCorrectAnswers(correctAnswers+1)
        }else{
            setShowCongrats(false);
            setShowX(true);
           
            setTimeout(() => {
              setShowX(false); // Hide the "X" element after 2 seconds
            }, 2000);
        }
        console.log(sideNumber);


        
    if (step < 3) {
      setTimeout(() => {
        setStep(prevStep => prevStep + 1);
        reset()
        
      }, 3000);
    } else {
      setIsLastStep(true);

    }


    }


    useEffect(() => {
        // Update originalCount and toAdd with new random values
        setsideNumber(generateNumber);
        setShowCongrats(false);
        
      }, []); 


      const reset = () => {
        setShowCongrats(false);
        setsideNumber(Math.floor(Math.random() * 11) + 2)// Hide the "X" element after 2 seconds
      };




      const checkAnswer = () => {
        const totalQuestions = 3;
        const allAnswersCorrect = correctAnswers === totalQuestions;
        const incorrectAnswers = totalQuestions - correctAnswers;
        return { allAnswersCorrect, totalQuestions, correctAnswers, incorrectAnswers };
      };
      


//   const checkAnswer1 = (event) => {

    
//     // setShowMessage(true);

//     // const isCorrect = parseInt(answer) === questions[currentIndex].answer &&
//     //   parseInt(answer1) === questions[currentIndex].answer1

//     if (
//     //   parseInt(answer) === questions[currentIndex].answer &&
//     //   parseInt(answer1) === questions[currentIndex].answer1
//     ) {
//       setIsAnsweredCorrectly(true);

     
//       play();
//     } else {
//       setIsAnsweredCorrectly(false);
//       setShowCongratulations(false);
//       play1();
//     }


//     if (step < 3) {
//       setTimeout(() => {
//         setStep(prevStep => prevStep + 1);
//         // handleNewQuestion()
        
//       }, 3000);
//     } else {
//       setIsLastStep(true);

//     }

//     return { allAnswersCorrect: isCorrect, totalQuestions: step, correctAnswers: isCorrect ? 1 : 0, incorrectAnswers: isCorrect ? 0 : 1 };
//   };


const sendActivityData = async () => {
    const endTime = new Date();
    const timeSpent = (endTime - entryTime) / 1000;
    const { allAnswersCorrect, totalQuestions, correctAnswers, incorrectAnswers } = checkAnswer();

    const activityData = {
      userId: currentUser.uid,
      activityName: "Mesures d'aires",
      entryTime: entryTime.toISOString(),
      timeSpent: timeSpent,
      totalQuestions,
      correctAnswers,
      incorrectAnswers,
      allAnswersCorrect
    };

    try {
      await addDoc(collection(db, 'activities'), activityData);
      console.log('Activity data sent:', activityData);
    } catch (e) {
      console.error('Error sending activity data:', e);
    }
  };


const terminer =()=>{

sendActivityData()
setIsLastStep(false)
setShowCongrats(false);
setStep(1)
}



    return (


        <ActivityWrapper
        activityTitle={"Mesures d'aires"}
        explanationVideoUrl={"/Videos/number_sorting.mp4"}
        onSubmit={checkAnswer}
        user={currentUser}
        activityName="Mesures d'aires">
        <Box sx={containerStyle}>
            <StyledText variant="h6">Aire d'un carré</StyledText>
            <StyledText variant="body1" gutterBottom>
                Quelle doit etre le mesure du coté  pour que La surface soit {sideNumber*sideNumber}!
            </StyledText>
            <Box
                sx={{
                    width: `${sideLengthInPx}px`,
                    height: `${sideLengthInPx}px`,
                    display: 'grid',
                    gridTemplateColumns: `repeat(${sideLength}, ${pixelsPerCm}px)`,
                    gridTemplateRows: `repeat(${sideLength}, ${pixelsPerCm}px)`,
                    transition: 'all 0.5s ease',
                }}
            >
                {[...Array(sideLength * sideLength)].map((_, idx) => (
                    <Box key={idx} sx={{
                        width: `${pixelsPerCm}px`,
                        height: `${pixelsPerCm}px`,
                        border: '0.5px solid #2196F3',
                    }} />
                ))}
            </Box>
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => setSideLength(prev => Math.max(prev - 1, 2))}
                >
                    <RemoveIcon />
                </Button>
                {/* {!ShowCongrats && 
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={verify}
                >
                    <CheckCircleIcon />
                </Button>
                
} */}
{/* {ShowCongrats && 
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={reset}
                >
                    <RestartAltIcon />
                </Button>
}    */}
<Button
                    variant="outlined"
                    color="primary"
                    onClick={() => setSideLength(prev => Math.min(prev + 1, 12))}
                >
                    <AddIcon />
                </Button>       
            </Box>


            <StyledText variant="body1" gutterBottom>
                Côté = {sideLength} cm
            </StyledText> 


          <ButtonContainer>
        <Button variant="contained" style={{ margin: "20px", marginRight: "80px", marginLeft: "1px" }} onClick={verify} disabled={isLastStep}>
          Répondre
        </Button>
        <Button variant="contained" disabled={!isLastStep} onClick={terminer}> Terminer </Button>
      </ButtonContainer>
          
            {ShowCongrats &&
            <StyledText style={{alignItems:"center", color :'green'}}>
               Réponse  correcte ✅
               

                <span style={{alignItems:"center"}}>{sideNumber}x{sideNumber}={sideNumber*sideNumber}</span>
            </StyledText>

            }
             <div>{showX && <span style={{color:'red'}}>Réponse incorrecte</span>}
          </div>
           
           


        

        </Box>



        </ActivityWrapper>
    );
}

export default CalculateSquareArea;

    