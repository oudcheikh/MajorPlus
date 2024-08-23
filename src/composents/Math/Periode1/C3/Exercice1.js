import React, { useEffect, useState } from 'react';
import { FormulaText } from '../../../Styles/MajorStyles';
import Modal from '../../../Modals/Modal2';
import './tabStyle.css';
import ActivityWrapper from "../../Reusable Components/Slides Content/ActivityWrapper"; 
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../Sign_in/v2/firebase";
import { useAuth } from '../../../Sign_in/v2/context/AuthContext';
import styled from 'styled-components';
import { Box, Button } from '@mui/material';

const imageStyle = {
    width: "80%",
    height: "auto",
    maxWidth: "70%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
};

export const Orange_NumberDisplay = styled(Box)(({ isActive }) => ({
    boxSizing: "border-box",
    width: "80%",
    height: "auto",
    margin: "20px auto",
    padding: "20px",
    backgroundColor: "beige",
    border: "3px dashed #B3E5FC",
    transition: "background-color 0.4s, transform 0.3s",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "1em",
    fontFamily: "'Comic Sans MS', sans-serif",
    "&:hover": {
        transform: "scale(1.05)",
    },
}));

const ButtonContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
});

function Exercice2() {
    const [réponse, setReponse] = useState("");
    const [showModal, setShowModal] = useState(false);
    const { currentUser } = useAuth();
    const [score, setScore] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState(0);
    const [entryTime, setEntryTime] = useState(null);
    const [terminer, setTerminer] = useState(true);

    useEffect(() => {
        const now = new Date();
        setEntryTime(now);
    }, []);

 

    const sendActivityData = async () => {
        const endTime = new Date();
        const timeSpent = (endTime - entryTime) / 1000;

        const activityData = {
            userId: currentUser.uid,
            activityName: "mesure",
            entryTime: entryTime.toISOString(),
            timeSpent: timeSpent,
            score: score
          
        };

        try {
            await addDoc(collection(db, 'users',currentUser.uid, 'activities'), activityData);
            console.log('Activity data sent:', activityData);
        } catch (e) {
            console.error('Error sending activity data:', e);
        }
    };

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

    const handleInputChange = (index, key, value) => {
        const updatedData = [...tableData];
        updatedData[index][key] = value;
        setTableData(updatedData);
    };

    const checkAnswer = () => {
        setTerminer(false);
        let correct = 0;
        let incorrect = 0;

        const userResponses = tableData.map(row => ({ dm: parseFloat(row.dm), cm: parseFloat(row.cm) }));
        const isValid = userResponses.every(response =>
            !isNaN(response.dm) && !isNaN(response.cm) && response.dm >= 0 && response.cm >= 0
        );

        if (isValid) {
            bonnesReponses.forEach((br, index) => {
                if (userResponses[index].dm === br.dm && userResponses[index].cm === br.cm) {
                    correct += 1;
                } else {
                    incorrect += 1;
                }
            });

            if (correct === bonnesReponses.length) {
                setReponse("Bravo! Toutes les réponses sont correctes.");
                setScore(100);
            } else {
                setReponse(`Désolé, certaines réponses sont incorrectes. ${correct} correct, ${incorrect} incorrect.`);
                setScore(0);
            }

            setCorrectAnswers(correct);
            setIncorrectAnswers(incorrect);
            setShowModal(true);
        } else {
            setReponse("Veuillez entrer des valeurs numériques valides pour les colonnes dm et cm.");
            incorrect = bonnesReponses.length; // Considérer toutes les réponses comme incorrectes
        }

        return {
            allAnswersCorrect: correct === bonnesReponses.length,
            totalQuestions: bonnesReponses.length,
            correctAnswers: correct,
            incorrectAnswers: incorrect,
            score
        };
    };

    

    const handleFinish = () => {
        sendActivityData();
        handleReset();
    };

    const handleReset = () => {
        setTableData([
            { carreaux: '20', dm: '', cm: '' },
            { carreaux: '7', dm: '', cm: '' },
            { carreaux: '33', dm: '', cm: '' },
        ]);
        setReponse('');
        setShowModal(false);
        setScore(0);
        setCorrectAnswers(0);
        setIncorrectAnswers(0);
        setTerminer(true);
    };

    const voir_bonne_reponce = () => {
        const updatedData = tableData.map((row, index) => ({
            ...row,
            dm: bonnesReponses[index].dm.toString(),
            cm: bonnesReponses[index].cm.toString()
        }));
        setTableData(updatedData);
        setReponse('');
    };

    return (
        <div>
            <ActivityWrapper
                activityTitle={"Exercice 2"}
                explanationVideoUrl={"/Videos/number_sorting.mp4"}
                onSubmit={checkAnswer}
                user={currentUser}
                activityName="C3_Exercice2"
            >
             

                <FormulaText>
                    <strong><span>Passer du Km et du hm vers le mètre :</span></strong>
                    <br />

                    <ButtonContainer style={{ position: "relative", left: "100px" }}>
                        <Button variant="contained" onClick={voir_bonne_reponce}>
                            Voir la Correction
                        </Button>
                    </ButtonContainer>

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
                            {tableData.map((row, index) => (
                                <tr key={index}>
                                    <td>{row.carreaux}</td>
                                    <td>
                                        <input
                                            type="number"
                                            value={row.dm}
                                            placeholder='---'
                                            onChange={(e) => handleInputChange(index, 'dm', e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={row.cm}
                                            placeholder='---'
                                            onChange={(e) => handleInputChange(index, 'cm', e.target.value)}
                                        />
                                    </td>
                                </tr>
                            ))}
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
                            style={{ margin: "20px", marginRight: "80px", marginLeft: "1px" }}
                            onClick={checkAnswer}
                            disabled={!terminer}
                        >
                            Répondre
                        </Button>

                        <Button
                            variant="contained"
                            onClick={handleFinish}
                            disabled={terminer}
                        >
                            Terminer
                        </Button>
                    </ButtonContainer>

                    <br />
                    <br />
                </FormulaText>
            </ActivityWrapper>
        </div>
    );
}

export default Exercice2;
