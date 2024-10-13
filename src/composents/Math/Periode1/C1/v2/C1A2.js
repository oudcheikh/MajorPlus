import React, { useState, useEffect, useRef } from "react";
import { Box, Button, Typography, TextField, Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";
import writtenNumber from "written-number";
import ActivityWrapper from "../../../Reusable Components/Slides Content/ActivityWrapper";
import { useAuth } from "../../../../Sign_in/v2/context/AuthContext";
import SuccessDialog from "../../../Reusable Components/Activities/SuccessDialog";
import "../../../../../App.css";
import correctSoundFile from '../../../../sounds/correct.mp3'; 
import incorrectSoundFile from '../../../../sounds/incorrect.mp3'; 
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../../Sign_in/v2/firebase";

import SlideAnimation from './Victoire'



const StyledBox = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
});

const MessageCard = styled(Card)({
    borderRadius: '40px',
    maxWidth: '300px',
    boxShadow: '4px 4px 4px 8px rgba(0.1, 0.1, 0.1, 0.1)',
    padding: '2px',
    marginLeft: '10px',
    marginTop: '-50px',
    marginRight: '10px',
    textAlign: 'center',
    transition: 'transform 0.3s',
    "&:hover": {
        transform: 'scale(1.05)',
    },
});

const ranges = [
    [0, 9],
    [10, 99],
    [100, 999],
    [1000, 9999],
];

const StyledButton = styled(Button)({
    margin: "10px",
    backgroundColor: "#007BFF",
    color: "white",
    "&:hover, &:focus-visible": {
        backgroundColor: "#0056b3",
    },
    borderRadius: "15px",
});

const ButtonContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
});

const imageStyle = {
    width: "50%",
    height: "auto",
    maxWidth: "70%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
};

const C1A2 =  ({ currentIndex, segmentIndex }) => {
    const [progress, setProgress] = useState(0);
    const [randomNumber, setRandomNumber] = useState(0);
    const [userInput, setUserInput] = useState("");
    const [isValid, setIsValid] = useState(null);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState(0);
    const { currentUser } = useAuth();
    const [sucessDialogOpen, setSucessDialogOpen] = useState(false);
    const [questionsAnswered, setQuestionsAnswered] = useState(0);
    const [isLastQuestion, setIsLastQuestion] = useState(false);
    const [entryTime, setEntryTime] = useState(null);

    const correctSound = useRef(new Audio(correctSoundFile));
    const incorrectSound = useRef(new Audio(incorrectSoundFile));

    const [statusConfetti, setStatusConfetti] = useState(false)
    const [ConfettiActive,setConfettiActive]=useState(false)



console.log("cuuuuuuuuuuuur",currentIndex)


    useEffect(() => {
        const now = new Date();
        setEntryTime(now);
    }, []);

    useEffect(() => {
        getRandomNumber(0);
    }, []);

    const handleValidate =() => {



        const validation = writtenNumber(parseInt(userInput), { lang: "fr" }) === writtenNumber(randomNumber, { lang: "fr" });
        setIsValid(validation);
        if (!validation) {
            setIncorrectAnswers(incorrectAnswers + 1);
            incorrectSound.current.play();
        } else {
            setCorrectAnswers(correctAnswers + 1);
            correctSound.current.play();
        }

        setQuestionsAnswered(prev => prev + 1);

        if (progress + 1 < ranges.length) {
            setTimeout(() => {
                setProgress(prevProgress => {
                    const newProgress = prevProgress + 1;
                    getRandomNumber(newProgress);
                    return newProgress;
                });
                setUserInput("");
            }, 3000);
        } else {
            setIsLastQuestion(true);
        }
    };

    const getRandomNumber = (progress) => {
        const min = ranges[progress][0],
            max = ranges[progress][1];
        setRandomNumber(Math.floor(Math.random() * (max - min + 1) + min));
    };

    const handleInputChange = (event) => {
        setIsValid(null);
        setUserInput(event.target.value);
    };

    const checkAnswer = () => {
        const totalQuestions = questionsAnswered;
        const allAnswersCorrect = correctAnswers === totalQuestions;
        return { allAnswersCorrect, totalQuestions, correctAnswers, incorrectAnswers };
    };

    const handleClickOpen = () => {
        sendActivityData();
        setConfettiActive(true)
        setSucessDialogOpen(true);
        handleReset();
    };

    const handleClose = () => {
        setSucessDialogOpen(false);
    };

    const sendActivityData = async () => {
        const endTime = new Date();
        const timeSpent = (endTime - entryTime) / 1000;
        const { allAnswersCorrect, totalQuestions, correctAnswers, incorrectAnswers } = checkAnswer();

        const activityData = {
            userId: currentUser.uid,
            activityName: "C1A2",
            entryTime: entryTime.toISOString(),
            timeSpent: timeSpent,
            totalQuestions,
            correctAnswers,
            incorrectAnswers,
            allAnswersCorrect
        };

        try {
            await addDoc(collection(db, 'users', currentUser.uid, 'activities'), activityData);
            console.log('Activity data sent:', activityData);
        } catch (e) {
            console.error('Error sending activity data:', e);
        }
    };


    const handleReset = () => {
        setProgress(0);
        setRandomNumber(0);
        setUserInput("");
        setIsValid(null);
        setCorrectAnswers(0);
        setIncorrectAnswers(0);
        setQuestionsAnswered(0);
        setIsLastQuestion(false);
        getRandomNumber(0);
    };

        // Fonction pour lire le texte avec SpeechSynthesis API
        const readNumberAloud = (numberText) => {
            const utterance = new SpeechSynthesisUtterance(numberText);
            utterance.lang = "fr-FR"; // Définit la langue à français
            window.speechSynthesis.speak(utterance);
        };
    
        return (
            <ActivityWrapper
                activityTitle={"C1A2"}
                explanationVideoUrl={"/Videos/number_sorting.mp4"}
                onSubmit={checkAnswer}
                user={currentUser}
                activityName="C1A2"
            >
                {ConfettiActive  && <SlideAnimation  currentIndex={currentIndex} segmentIndex={segmentIndex} isActive={true}/>}

                <StyledBox>

                    <img src="/images/Math/C/C1/pro2.png" alt="Activity" style={imageStyle} />
                    {/* Ajout du gestionnaire d'événement onClick sur la carte */}
                    <MessageCard onClick={() => readNumberAloud(writtenNumber(randomNumber, { lang: "fr" }))}>
                        <CardContent>
                            <Typography>
                                Ecrire ce nombre en chiffres : <br></br>
                                <span style={{ fontSize: '1.3em', fontWeight: 'bold', color: '#007BFF' }}>
                                    {writtenNumber(randomNumber, { lang: "fr" })}
                                </span>
                            </Typography>
                        </CardContent>
                    </MessageCard>
                </StyledBox>
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <TextField
                        label="Entrez le chiffre"
                        variant="outlined"
                        type="number"
                        value={userInput}
                        onChange={handleInputChange}
                        style={{ marginTop: "20px", width: "70%" }}
                    />
    
                    <ButtonContainer>
                        <Button
                            variant="contained"
                            style={{ margin: "20px", marginRight: "80px", marginLeft: "1px" }}
                            onClick={handleValidate}
                        >
                            Répondre
                        </Button>
                        <Button
                            variant="contained"
                            disabled={!isLastQuestion}
                            onClick={handleClickOpen}
                        >
                            Terminer
                        </Button>
                    </ButtonContainer>
    
                    {isValid === false && <Typography color="error">La réponse est incorrecte. Essayer encore!</Typography>}
                    {isValid === true && <Typography color="primary">Bravo, c'est correct !</Typography>}
                </Box>


              {/* {ConfettiActive  && <SlideAnimation  currentIndex={currentIndex} segmentIndex={segmentIndex} isActive={true}/>} */}

            </ActivityWrapper>
        );
    };
    
    export default C1A2;
    