import React, { useState, useEffect, useRef } from "react";
import { Box, Button, Typography, TextField, Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";
import writtenNumber from "written-number";
import ActivityWrapper from "../../../Reusable Components/Slides Content/ActivityWrapper";
import { useAuth } from "../../../../Sign_in/v2/context/AuthContext";
import "../../../../../App.css";
import correctSoundFile from '../../../../sounds/correct.mp3';
import incorrectSoundFile from '../../../../sounds/incorrect.mp3';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../../Sign_in/v2/firebase";
import SlideAnimation from '../../../../Confetti/Victoire';
import { motion } from "framer-motion"; // Importer framer-motion

const StyledBox = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '25px',
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

const BannerBox = styled(Box)({
    backgroundColor: '#d4edda',
    color: '#155724',
    borderRadius: '10px',
    padding: '15px 25px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    marginTop: '20px',
});

const IncorrectBannerBox = styled(Box)({
    backgroundColor: '#f8d7da',
    color: '#721c24',
    borderRadius: '10px',
    padding: '15px 25px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    marginTop: '20px',
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
    const [begin, setBegin] = useState(true);
    const [showCongratsBanner, setShowCongratsBanner] = useState(false);
    const [showIncorrectBanner, setShowIncorrectBanner] = useState(false);
    const [isAnswering, setIsAnswering] = useState(false); // État pour désactiver l'input pendant la validation

    const totalQuestions = 4;

    const handleCompleteExercise = () => {
        setBegin(false);
        handleClickOpen();
        setTimeout(() => {
            setBegin(true);
        }, 5000);
    };

    useEffect(() => {
        const progressPerQuestion = 100 / totalQuestions;
        setProgressValue(questionsAnswered * progressPerQuestion);
    }, [questionsAnswered]);

    useEffect(() => {
        const now = new Date();
        setEntryTime(now);
    }, []);

    useEffect(() => {
        getRandomNumber(0);
    }, []);

    const handleValidate = () => {
        setIsAnswering(true); // Désactiver l'input pendant la validation de la réponse

        const validation = writtenNumber(parseInt(userInput), { lang: "fr" }) === writtenNumber(randomNumber, { lang: "fr" });
        setIsValid(validation);
        if (!validation) {
            setIncorrectAnswers(incorrectAnswers + 1);
            incorrectSound.current.play();
            setShowIncorrectBanner(true); // Affiche la bannière incorrecte

            // Cache la bannière incorrecte après 2 secondes
            setTimeout(() => {
                setShowIncorrectBanner(false);
                setIsAnswering(false); // Réactiver l'input après la validation de la réponse incorrecte
                proceedToNextQuestion(); // Passer à la question suivante
            }, 2000);
        } else {
            setCorrectAnswers(correctAnswers + 1);
            correctSound.current.play();
            setShowCongratsBanner(true); // Affiche la bannière de félicitations

            // Cache la bannière après 2 secondes
            setTimeout(() => {
                setShowCongratsBanner(false);
                setIsAnswering(false); // Réactiver l'input après la validation
                proceedToNextQuestion(); // Passer à la question suivante après la disparition de l'animation
            }, 2000);
        }

        setQuestionsAnswered((prev) => {
            const updated = prev + 1;
            return updated;
        });
    };

    const proceedToNextQuestion = () => {
        if (progress + 1 < ranges.length) {
            setProgress(prevProgress => {
                const newProgress = prevProgress + 1;
                getRandomNumber(newProgress);
                return newProgress;
            });
            setUserInput("");
        } else {
            setIsLastQuestion(true);
            handleCompleteExercise();
        }
    };

    const getRandomNumber = (progress) => {
        const min = ranges[progress][0];
        const max = ranges[progress][1];
        setRandomNumber(Math.floor(Math.random() * (max - min + 1) + min));
    };

    const handleInputChange = (event) => {
        // Permettre uniquement des nombres entiers positifs
        const value = event.target.value;
        if (/^\d*$/.test(value)) {
            setUserInput(value);
            setIsValid(null); // Réinitialiser la validation lors de la modification de l'input
        }
    };

    const handleClickOpen = () => {
        sendActivityData();
        if (correctAnswers >= 3) {
            setConfettiActive(true);
        }
        setSucessDialogOpen(true);
        handleReset();
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
        setConfettiActive(false);
    };

    // Ajout de la fonction handleSpeak pour lire le nombre à voix haute
    const handleSpeak = () => {
        const utterance = new SpeechSynthesisUtterance(writtenNumber(randomNumber, { lang: "fr" }));
        utterance.lang = 'fr-FR';

        // Essayer de trouver une voix féminine en français
        const voices = window.speechSynthesis.getVoices();
        const femaleVoice = voices.find(voice => voice.lang === 'fr-FR' && voice.name.toLowerCase().includes('female'));

        if (femaleVoice) {
            utterance.voice = femaleVoice;
        }

        window.speechSynthesis.speak(utterance);
    };

    return (
        <ActivityWrapper
            activityTitle={"C1A2"}
            explanationVideoUrl={"/Videos/number_sorting.mp4"}
            onSubmit={handleValidate}
            user={currentUser}
            activityName="C1A2"
            progress={progressValue}
            text={"C1A2"}
        >
            {ConfettiActive && <SlideAnimation currentIndex={currentIndex} segmentIndex={segmentIndex} isActive={true} correectAnsw={correctAnswers} />}


            {!begin && (
                <StyledBox>
                    <img src="/images/Math/C/C1/pro2.png" alt="Activity" style={{ width: '30%', height: 'auto' }} />
                </StyledBox>
            )}

            {begin && (
                <div>
                    <StyledBox>
                        <img src="/images/Math/C/C1/pro2.png" alt="Activity" style={{ width: '30%', height: 'auto' }} />

                        <MessageCard onClick={handleSpeak} className="message-card">
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
                            type="text"
                            value={userInput}
                            onChange={handleInputChange}
                            disabled={isAnswering} // Désactiver l'input pendant la réponse
                            style={{ marginTop: "10px", width: "70%" }}
                        />
                        <ButtonContainer>
                            {!isLastQuestion && (
                                <Button
                                    variant="contained"
                                    onClick={handleValidate}
                                    className="button-click-effect"
                                    style={{ margin: "10px" }}
                                    disabled={isAnswering} // Désactiver le bouton pendant la réponse
                                >
                                    Répondre
                                </Button>
                            )}
                        </ButtonContainer>

                        {/* Bannière avec framer-motion lorsque la réponse est correcte */}
                        {showCongratsBanner && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <BannerBox>
                                    <span role="img" aria-label="confetti" style={{ fontSize: "2rem" }}>🎉</span>
                                    <Typography variant="h6" style={{ fontWeight: "bold" }}>Correct!</Typography>
                                    <Typography variant="body1" style={{ fontWeight: "bold", color: "#28a745" }}>+15 XP</Typography>
                                </BannerBox>
                            </motion.div>
                        )}

                        {/* Bannière avec framer-motion lorsque la réponse est incorrecte */}
                        {showIncorrectBanner && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <IncorrectBannerBox>
                                    <span role="img" aria-label="cross" style={{ fontSize: "2rem" }}>❌</span>
                                    <Typography variant="h6" style={{ fontWeight: "bold" }}>Non, la bonne réponse est :</Typography>
                                    <Typography variant="body1" style={{ fontWeight: "bold", color: "#d9534f" }}>
                                        {randomNumber}
                                    </Typography>
                                </IncorrectBannerBox>
                            </motion.div>
                        )}
                    </Box>
                </div>
            )}
        </ActivityWrapper>
    );
};

export default C1A2;
