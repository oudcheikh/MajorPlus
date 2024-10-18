
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

    const [currentRow, setCurrentRow] = useState(0);
    const [réponse, setReponse] = useState("");
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState(0);
    const [entryTime, setEntryTime] = useState(null);
    const [terminer, setTerminer] = useState(false);
    const { currentUser } = useAuth();

    const correctSound = new Audio(correctSoundFile);
    const incorrectSound = new Audio(incorrectSoundFile);
    const [progressValue, setProgressValue] = useState(0)
    const [questionsAnswered, setQuestionsAnswered] = useState(0);
    const [begin, setBegin] = useState(true)

    const [start, setStart] = useState(true)
    const [ConfettiActive, setConfettiActive] = useState(false);

    const totalQuestions = 3;
    const [tableData, setTableData] = useState([
        { carreaux: '20 ', dm: '', cm: '' },
        { carreaux: '7 ', dm: '', cm: '' },
        { carreaux: '33 ', dm: '', cm: '' }
    ]);

    const bonnesReponses = [
        { dm: 0.2, cm: 0.02 },
        { dm: 0.7, cm: 0.07 },
        { dm: 0.33, cm: 0.033 }
    ];


    useEffect(() => {
        const progressPerQuestion = 100 / totalQuestions;
        setProgressValue((questionsAnswered) => questionsAnswered * progressPerQuestion);
        console.log('Progress updated:', questionsAnswered * progressPerQuestion);
        setProgressValue(questionsAnswered * progressPerQuestion)
        console.log('Progress updated:', progressValue)

    }, [questionsAnswered]);




    useEffect(() => {
        const now = new Date();
        setEntryTime(now);

        const handleClick = () => {
            console.log("question answ ", questionsAnswered)

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
            dm: parseFloat(tableData[currentRow].dm),
            cm: parseFloat(tableData[currentRow].cm)
        };

        if (isNaN(userResponse.dm) || isNaN(userResponse.cm) || userResponse.dm < 0 || userResponse.cm < 0) {
            setReponse("Veuillez entrer des valeurs numériques valides.");
            incorrectSound.play();
            return;
        }

        const isCorrect = userResponse.dm === bonnesReponses[currentRow].dm && userResponse.cm === bonnesReponses[currentRow].cm;
        if (isCorrect) {
            setReponse("Bravo! La réponse est correcte.");
            correctSound.play();
            setCorrectAnswers(correctAnswers + 1);
            console.log("correct aNSW", correctAnswers)

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
    const sendActivityData = async () => {
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
            { carreaux: '20', dm: '', cm: '' },
            { carreaux: '7', dm: '', cm: '' },
            { carreaux: '33', dm: '', cm: '' },
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
            activityTitle={"Exercice 1"}
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
                    <img src="/images/serveau.png" alt="Activity" style={{ width: '30%', height: 'auto' }} />
                </StyledBox>
                <strong><span>Passer du m vers le cm et dm :</span></strong>
                <br />

                <table className="conversion-table">
                    <thead>
                        <tr>
                            <th>cm</th>
                            <th>(dm)</th>
                            <th>(m)</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{tableData[currentRow].carreaux}</td>
                            <td>
                                <input
                                    type="number"
                                    value={tableData[currentRow].dm}
                                    placeholder='---'
                                    onChange={(e) => handleInputChange('dm', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    value={tableData[currentRow].cm}
                                    placeholder='---'
                                    onChange={(e) => handleInputChange('cm', e.target.value)}
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

