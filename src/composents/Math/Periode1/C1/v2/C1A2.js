import React, { useState, useEffect } from "react";
import { Box, Button, Typography, TextField, Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";
import writtenNumber from "written-number";
import ActivityWrapper from "../../../Reusable Components/Slides Content/ActivityWrapper";
import { useAuth } from "../../../../Sign_in/v2/context/AuthContext";
import SuccessDialog from "../../../Reusable Components/Activities/SuccessDialog";
import ReplyIcon from '@mui/icons-material/Reply';
import "../../../../../App.css";

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
    [0, 9], // plage pour progress=0
    [10, 99], // plage pour progress=1
    [100, 999], // plage pour progress=2
    [1000, 9999], // plage pour progress=3
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

const C1A2 = () => {
    const [progress, setProgress] = useState(0);
    const [randomNumber, setRandomNumber] = useState(0);
    const [userInput, setUserInput] = useState("");
    const [isValid, setIsValid] = useState(null); // Initial value set to null
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState(0);
    const { currentUser } = useAuth();
    const [sucessDialogOpen, setSucessDialogOpen] = useState(false);
    const [questionsAnswered, setQuestionsAnswered] = useState(0);

    useEffect(() => {
        getRandomNumber(0);
    }, []);

    const handleValidate = () => {
        const validation = writtenNumber(parseInt(userInput), { lang: "fr" }) === writtenNumber(randomNumber, { lang: "fr" });
        setIsValid(validation);
        if (!validation) {
            setIncorrectAnswers(incorrectAnswers + 1);
        } else {
            setCorrectAnswers(correctAnswers + 1);
        }

        // Mise à jour du compteur de questions répondues
        setQuestionsAnswered(prev => prev + 1);
        setProgress(prevProgress => {
            const newProgress = prevProgress + 1;
            if (newProgress >= 4) {
                handleClickOpen();
            } else {
                getRandomNumber(newProgress);
            }
            return newProgress;
        });

        setUserInput(""); // Réinitialiser le champ d'entrée après chaque validation
    };

    

    const getRandomNumber = (progress) => {
        const min = ranges[progress][0],
            max = ranges[progress][1];
        setRandomNumber(Math.floor(Math.random() * (max - min + 1) + min));
    };

    const handleReset = () => {
        setProgress(0);
        setRandomNumber(0);
        setUserInput("");
        setIsValid(null); // Reset the value to null
        setCorrectAnswers(0);
        setIncorrectAnswers(0);
        setQuestionsAnswered(0);
        getRandomNumber(0);
    };

    const handleInputChange = (event) => {
        setIsValid(null); // Reset the value to null
        setUserInput(event.target.value);
    };

    const checkAnswer = () => {
        const totalQuestions = questionsAnswered;
        const allAnswersCorrect = correctAnswers === totalQuestions;
        return { allAnswersCorrect, totalQuestions, correctAnswers, incorrectAnswers };
    };

    const handleClickOpen = () => {
        sendActivityData();
        setSucessDialogOpen(true);
    };

    const handleClose = () => {
        setSucessDialogOpen(false);
    };

    const sendActivityData = () => {
        // Logique pour envoyer les données à Firestore
        const { allAnswersCorrect, totalQuestions, correctAnswers, incorrectAnswers } = checkAnswer();
        const activityData = {
            activityName: "C1A2",
            totalQuestions,
            correctAnswers,
            incorrectAnswers,
            allAnswersCorrect
        };
        console.log('Sending activity data:', activityData);
        // Ajouter la logique Firebase ici pour envoyer les données
    };

    return (
        <ActivityWrapper
            activityTitle={"C1A2"}
            explanationVideoUrl={"/Videos/number_sorting.mp4"}
            onSubmit={checkAnswer}
            user={currentUser}
            activityName="C1A2"
        >
            <StyledBox>
                <img src="/images/Math/C/C1/Pro2.png" alt="Activity" style={imageStyle} />
                <MessageCard>
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
                    <Button variant="contained" style={{ margin: "20px", marginRight: "80px", marginLeft: "1px" }} onClick={handleValidate}>
                        OK
                    </Button>
                    <Button className="Muifix" variant="contained" onClick={handleReset}>
                        <ReplyIcon className="social-button"></ReplyIcon>
                    </Button>
                </ButtonContainer>
                {isValid === false && <Typography color="error">La réponse est incorrecte. Essayer encore!</Typography>}
                {isValid === true && <Typography color="primary">Bravo, c'est correct !</Typography>}
            </Box>
            <SuccessDialog open={sucessDialogOpen} onClose={handleClose} />
        </ActivityWrapper>
    );
};

export default C1A2;
