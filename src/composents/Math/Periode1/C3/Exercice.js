import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Box, Button } from '@mui/material';
import ActivityWrapper from "../../Reusable Components/Slides Content/ActivityWrapper";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../Sign_in/v2/firebase";
import { useAuth } from '../../../Sign_in/v2/context/AuthContext';
import correctSoundFile from '../../../sounds/correct.mp3';
import incorrectSoundFile from '../../../sounds/incorrect.mp3';

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

function Exercice() {
    const [tableData, setTableData] = useState([
        { carreaux: '50', dm: '', cm: '' },
        { carreaux: '410', dm: '', cm: '' },
        { carreaux: '30', dm: '', cm: '' }
    ]);

    const [réponse, setReponse] = useState("");
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState(0);
    const [entryTime, setEntryTime] = useState(null);
    const [terminer, setTerminer] = useState(false);
    const { currentUser } = useAuth();

    const correctSound = new Audio(correctSoundFile);
    const incorrectSound = new Audio(incorrectSoundFile);

    useEffect(() => {
        const now = new Date();
        setEntryTime(now);
        console.log("Component mounted: Entry time set.");

        const handleClick = () => {
            console.log("Click detected on 'Voir la vidéo' or other UI element.");
        };

        window.addEventListener("click", handleClick);

        return () => {
            window.removeEventListener("click", handleClick);
        };
    }, []);

    const bonnesReponses = [
        { dm: 500, cm: 5000 },
        { dm: 4100, cm: 41000 },
        { dm: 300, cm: 3000 }
    ];

    const handleInputChange = (index, key, value) => {
        const updatedData = [...tableData];
        updatedData[index][key] = value;
        setTableData(updatedData);
    };

    const handleSubmit = () => {
        console.log("handleSubmit called, validating responses...");

        let correct = 0;
        let incorrect = 0;

        const userResponses = tableData.map(row => ({
            dm: parseFloat(row.dm),
            cm: parseFloat(row.cm)
        }));

        const isValid = userResponses.every(response =>
            !isNaN(response.dm) && !isNaN(response.cm) && response.dm >= 0 && response.cm >= 0
        );

        if (isValid) {
            console.log("User inputs are valid, checking answers...");
            bonnesReponses.forEach((br, index) => {
                if (userResponses[index].dm === br.dm && userResponses[index].cm === br.cm) {
                    correct += 1;
                } else {
                    incorrect += 1;
                }
            });

            if (correct === bonnesReponses.length) {
                console.log("All answers correct, playing correct sound.");
                setReponse("Bravo! Toutes les réponses sont correctes.");
                correctSound.play();  // Le son correct est joué ici
            } else {
                console.log("Some answers incorrect, playing incorrect sound.");
                setReponse(`Désolé, certaines réponses sont incorrectes. ${correct} correct, ${incorrect} incorrect.`);
                incorrectSound.play();  // Le son incorrect est joué ici
            }

            setCorrectAnswers(correct);
            setIncorrectAnswers(incorrect);
        } else {
            console.log("Invalid inputs, playing incorrect sound.");
            setReponse("Veuillez entrer des valeurs numériques valides.");
            incorrectSound.play();  // Le son incorrect est joué ici seulement si les entrées sont invalides
            incorrect = bonnesReponses.length;
        }

        setTerminer(true);

        return {
            allAnswersCorrect: correct === bonnesReponses.length,
            totalQuestions: bonnesReponses.length,
            correctAnswers: correct,
            incorrectAnswers: incorrect,
        };
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
            await addDoc(collection(db, 'activities'), activityData);
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
            { carreaux: '50', dm: '', cm: '' },
            { carreaux: '410', dm: '', cm: '' },
            { carreaux: '30', dm: '', cm: '' }
        ]);
        setReponse('');
        setCorrectAnswers(0);
        setIncorrectAnswers(0);
        setTerminer(false);
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
        <ActivityWrapper
            activityTitle={"Exercice 1"}
            explanationVideoUrl={"/Videos/number_sorting.mp4"} // Assurez-vous que ce bouton est isolé de la logique de validation
            onSubmit={handleSubmit}  // Utilisation de handleSubmit pour la vérification des réponses
            user={currentUser}
            activityName="C3Exercice1"
        >
            <br />
            <strong><span>Passer du m vers le cm et dm :</span></strong>
            <br />

            <ButtonContainer style={{ position: "relative", left: "210px" }}>
                <Button variant="contained" onClick={voir_bonne_reponce}>
                    Voir la Correction
                </Button>
            </ButtonContainer>

            <br />

            <table className="conversion-table">
                <thead>
                    <tr>
                        <th>m</th>
                        <th>(dm)</th>
                        <th>(cm)</th>
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
                    onClick={handleSubmit}
                    disabled={terminer}
                >
                    Répondre
                </Button>

                <Button
                    variant="contained"
                    disabled={!terminer}
                    onClick={handleFinish}
                >
                    Terminer
                </Button>
            </ButtonContainer>

            <br />
            <br />
        </ActivityWrapper>
    );
}

export default Exercice;
