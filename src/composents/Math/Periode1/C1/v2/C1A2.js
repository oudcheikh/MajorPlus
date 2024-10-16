import React, { useState, useEffect, useRef } from "react";
import { Box, Button, Typography, TextField, Card, CardContent } from "@mui/material";
import { margin, styled } from "@mui/system";
import writtenNumber from "written-number";
import ActivityWrapper from "../../../Reusable Components/Slides Content/ActivityWrapper";
import { useAuth } from "../../../../Sign_in/v2/context/AuthContext";
import SuccessDialog from "../../../Reusable Components/Activities/SuccessDialog";
import "../../../../../App.css";
import correctSoundFile from '../../../../sounds/correct.mp3';
import incorrectSoundFile from '../../../../sounds/incorrect.mp3';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../../Sign_in/v2/firebase";
import Progress from './Progress';
import SlideAnimation from '../../../../Confetti/Victoire';

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

const ButtonContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
});

const C1A2 = ({ currentIndex, segmentIndex }) => {
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
    const [progressValue, setProgressValue] = useState(0);
    const correctSound = useRef(new Audio(correctSoundFile));
    const incorrectSound = useRef(new Audio(incorrectSoundFile));
    const [ConfettiActive, setConfettiActive] = useState(false);
    const [begin, setBegin] = useState(true)
   
    const totalQuestions = 4;


    const handleCompleteExercise = () => {
        setBegin(false)
         handleClickOpen();
        setTimeout(() => {
            setBegin(true)
        }, 5000); 
    };





    useEffect(() => {
        const progressPerQuestion = 100 / totalQuestions;
        setProgressValue((questionsAnswered) => questionsAnswered * progressPerQuestion);
        console.log('Progress updated:', questionsAnswered * progressPerQuestion);
        setProgressValue(questionsAnswered * progressPerQuestion)
        console.log('Progress updated:', progressValue)

    }, [questionsAnswered]); // La progression sera mise à jour à chaque fois qu'une question est répondue

    useEffect(() => {
        const now = new Date();
        setEntryTime(now);
    }, []);

    useEffect(() => {
        getRandomNumber(0);
    }, []);

    const handleValidate = () => {
        const validation = writtenNumber(parseInt(userInput), { lang: "fr" }) === writtenNumber(randomNumber, { lang: "fr" });
        setIsValid(validation);
        if (!validation) {
            setIncorrectAnswers(incorrectAnswers + 1);
            incorrectSound.current.play();
        } else {
            setCorrectAnswers(correctAnswers + 1);
            correctSound.current.play();
        }

        setQuestionsAnswered((prev) => {
            const updated = prev + 1;
            console.log('Questions answered:', updated); // Log pour vérifier
            return updated;
        });

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
            handleCompleteExercise()
            
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

    const handleClickOpen = () => {
        sendActivityData();
        if (correctAnswers >= 3) {
            setConfettiActive(true);
        }
        setSucessDialogOpen(true);
        handleReset();
    };

    const handleClose = () => {
        setSucessDialogOpen(false);
    };

    const sendActivityData = async () => {
        const endTime = new Date();
        const timeSpent = (endTime - entryTime) / 1000;
        const totalQuestions = questionsAnswered;
        const allAnswersCorrect = correctAnswers === totalQuestions;

        const activityData = {
            userId: currentUser.uid,
            activityName: "C1A2",
            entryTime: entryTime.toISOString(),
            timeSpent,
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

    return (
        <ActivityWrapper
            activityTitle={"C1A2"}
            explanationVideoUrl={"/Videos/number_sorting.mp4"}
            onSubmit={handleValidate}
            user={currentUser}
            activityName="C1A2"
            progress={progressValue} text={"C1A2"}
        >
            {ConfettiActive && <SlideAnimation currentIndex={currentIndex} segmentIndex={segmentIndex} isActive={true} correectAnsw={correctAnswers} />}

            {/* <div >
                <Progress progress={progressValue} text={"C1A2"} />
            </div> */}
            

            {!begin && <StyledBox>
                <img src="/images/Math/C/C1/pro2.png" alt="Activity" style={{ width: '30%', height: 'auto' }} />
            </StyledBox>
            }


            {begin && <div>
                <StyledBox>
                    <img src="/images/Math/C/C1/pro2.png" alt="Activity" style={{ width: '30%', height: 'auto' }} />

                    <MessageCard>
                        <CardContent>
                            <Typography>
                                Ecrire ce nombre en chiffres : <br />
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
                        {!isLastQuestion && (
                            <Button
                                variant="contained"
                                onClick={handleValidate}
                                style={{ margin: "20px" }}
                            >
                                Répondre
                            </Button>
                        )}
                    </ButtonContainer>


                    {isValid === false && <Typography color="error">La réponse est incorrecte. Essayer encore!</Typography>}
                    {isValid === true && <Typography color="primary">Bravo, c'est correct !</Typography>}
                </Box>
            </div>}
        </ActivityWrapper>
    );
};

export default C1A2;
