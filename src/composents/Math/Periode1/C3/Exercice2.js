import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Box, Button } from '@mui/material';
import { FormulaText } from '../../../Styles/MajorStyles';
import './Style.css';
import ActivityWrapper from "../../Reusable Components/Slides Content/ActivityWrapper"; 
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../Sign_in/v2/firebase";
import { useAuth } from '../../../Sign_in/v2/context/AuthContext';

const imageStyle = {
    width: "50%",
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
    backgroundColor: "orange",
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

function Table_mesure() {
    const [réponse, setReponse] = useState("");
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

    const [tableData, setTableData] = useState([
        { carreaux: '90 ', Km: '', hm: '' },
        { carreaux: '410', Km: '', hm: '' },
        { carreaux: '30', Km: '', hm: '' }
    ]);

    const bonnesReponses = [
        { Km: '90000', hm: '9000' },
        { Km: '410000', hm: '41000' },
        { Km: '2000', hm: '200' }
    ];

    const handleInputChange = (index, key, value) => {
        const updatedData = [...tableData];
        updatedData[index][key] = value;
        setTableData(updatedData);
    };

    const handleSubmit = () => {
        setTerminer(false);
        let correct = 0;
        let incorrect = 0;

        const userResponses = tableData.map(row => ({ Km: parseFloat(row.Km), hm: parseFloat(row.hm) }));
        const isValid = userResponses.every(response =>
            !isNaN(response.Km) && !isNaN(response.hm) && response.Km >= 0 && response.hm >= 0
        );

        if (isValid) {
            bonnesReponses.forEach((br, index) => {
                if (userResponses[index].Km === parseFloat(br.Km) && userResponses[index].hm === parseFloat(br.hm)) {
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
        } else {
            setReponse("Veuillez entrer des valeurs numériques valides.");
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

    const sendActivityData = async () => {
        const endTime = new Date();
        const timeSpent = (endTime - entryTime) / 1000;

        const { allAnswersCorrect, totalQuestions, correctAnswers, incorrectAnswers, score } = handleSubmit();

        const activityData = {
            userId: currentUser.uid,
            activityName: "Table_mesure",
            entryTime: entryTime.toISOString(),
            timeSpent: timeSpent,
            totalQuestions,
            correctAnswers,
            incorrectAnswers,
            allAnswersCorrect,
            score
        };

        try {
            await addDoc(collection(db, 'users',currentUser.uid, 'activities'), activityData);
            console.log('Activity data sent:', activityData);
        } catch (e) {
            console.error('Error sending activity data:', e);
        }
    };

    const handleFinish = () => {
        sendActivityData();
        handleReset();
    };

    const handleReset = () => {
        setTableData([
            { carreaux: '90', Km: '', hm: '' },
            { carreaux: '410', Km: '', hm: '' },
            { carreaux: '30', Km: '', hm: '' },
        ]);
        setReponse('');
        setScore(0);
        setCorrectAnswers(0);
        setIncorrectAnswers(0);
        setTerminer(true);
    };

    const voir_bonne_reponce = () => {
        const updatedData = tableData.map((row, index) => ({
            ...row,
            Km: bonnesReponses[index].Km.toString(),
            hm: bonnesReponses[index].hm.toString()
        }));
        setTableData(updatedData);
        setReponse('');
    };

    return (
        <div>
            <ActivityWrapper
                activityTitle={"Exercice de Mesure"}
                explanationVideoUrl={"/Videos/number_sorting.mp4"}
                onSubmit={handleSubmit}  // Utilisation de handleSubmit ici
                user={currentUser}
                activityName="C3_Exercice1"
            >
                <FormulaText>
                    <img src="/images/Math/C/imgC19/Activity.png" alt="Activity" style={imageStyle} />
                  
                    <strong><span style={{ color: '#FF7F50' }}>Passer du mètre vers le Km et le hm :</span></strong>
                    <br />
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>m</th>
                                    <th>(Km)</th>
                                    <th>(hm)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((row, index) => (
                                    <tr key={index}>
                                        <td>{row.carreaux}</td>
                                        <td>
                                            <input
                                                type="number"
                                                value={row.Km}
                                                placeholder='---'
                                                onChange={(e) => handleInputChange(index, 'Km', e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                value={row.hm}
                                                placeholder='---'
                                                onChange={(e) => handleInputChange(index, 'hm', e.target.value)}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <strong style={{ color: 'blue' }}>
                            <span>{réponse}</span>
                        </strong>
                    </div>
                    <ButtonContainer>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                            disabled={!terminer}
                        >
                            Vérifier
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleFinish}
                            disabled={terminer}
                            style={{ marginLeft: "20px" }}
                        >
                            Terminer
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={voir_bonne_reponce}
                            style={{ marginLeft: "20px" }}
                        >
                            Voir correction
                        </Button>
                    </ButtonContainer>
                    <br />
                    <br />
                </FormulaText>
            </ActivityWrapper>
        </div>
    );
}

export default Table_mesure;
