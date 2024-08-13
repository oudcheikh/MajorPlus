import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Box } from '@mui/material';
import { FormulaText, Violet_NumberDisplay, Beige_NumberDisplay } from '../../../Styles/MajorStyles';
import './Style.css'
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
function Table_mesure() {
    // Définir un état local pour stocker les données du tableau
    const [réponse, setReponse] = useState("")
    const [victoire, setVictoire] = useState(false)
    const [echec, setEchec] = useState(false)
    const { currentUser } = useAuth();
    const [score, setScore] = useState(0);
    const [entryTime, setEntryTime] = useState(null);



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
            await addDoc(collection(db, 'activities'), activityData);
            console.log('Activity data sent:', activityData);
        } catch (e) {
            console.error('Error sending activity data:', e);
        }
    };






    const [tableData, setTableData] = useState([
        { carreaux: '50', dm: '', cm: '' },
        { carreaux: '410', dm: '', cm: '' },
        { carreaux: '30', dm: '', cm: '' }

    ]);

    const bonnesReponses = [
        { dm: 500, cm: 5000 },
        { dm: 4100, cm: 41000 },
        { dm: 300, cm: 3000 }

    ];

    // Fonction pour mettre à jour les données du tableau lors de la saisie
    const handleInputChange = (index, key, value) => {
        const updatedData = [...tableData];
        updatedData[index][key] = value;
        setTableData(updatedData);
    };

    // Fonction de vérification
    const handleSubmit = () => {

        setScore(0); 
        console.log("score",score)
        // Vérifier si les données de l'utilisateur correspondent aux bonnes réponses
        const userResponses = tableData.map(row => ({ dm: parseFloat(row.dm), cm: parseFloat(row.cm) }));
        const isValid = userResponses.every(response => !isNaN(response.dm) && !isNaN(response.cm) && response.dm >= 0 && response.cm >= 0);

        if (isValid) {
            const bonnesReponsesDm = bonnesReponses.map(br => br.dm);
            const bonnesReponsesCm = bonnesReponses.map(br => br.cm);
            const userResponsesDm = userResponses.map(ur => ur.dm);
            const userResponsesCm = userResponses.map(ur => ur.cm);

            if (JSON.stringify(userResponsesDm) === JSON.stringify(bonnesReponsesDm) &&
                JSON.stringify(userResponsesCm) === JSON.stringify(bonnesReponsesCm)) {
                const h = "Bravo! Les données sont correctes.";
                // setEchec(false)
                // setVictoire(true)
                setReponse(h);

                setScore(100)

            } else {
                const V = "Désolé, les données ne sont pas correctes.";
                setReponse(V);
                setScore(0)



                // setEchec(true)

                // console.log(victoire)
                // setVictoire(false)
            }
        } else {

            setReponse("Veuillez entrer des valeurs numériques valides");
        }
    };


    const verifier = () => {
        handleSubmit()
        sendActivityData()
    }


    const voir_bonne_reponce = () => {
        setReponse('');

        // Afficher les bonnes réponses dans les colonnes "ca" et "ha"
        const updatedData = tableData.map((row, index) => ({
            ...row,
            dm: bonnesReponses[index].dm.toString(),
            cm: bonnesReponses[index].cm.toString()
        }));

        setTableData(updatedData);
    };


    // Fonction pour recommencer
    const handleReset = () => {
        // Réinitialiser les données du tableau
        const initialData = [
            { carreaux: '50', dm: '', cm: '' },
            { carreaux: '410', dm: '', cm: '' },
            { carreaux: '30', dm: '', cm: '' },


        ];
        setTableData(initialData);
        setReponse('')
        setEchec(false)
        setVictoire(false)
        setScore(0)
    };





    const checkAnswer = () => {
    }

    return (


        <ActivityWrapper
            activityTitle={"Exercice 1"}
            explanationVideoUrl={"/Videos/number_sorting.mp4"}
            onSubmit={checkAnswer}
            user={currentUser}
            activityName="C3Ecercice1"
        >




            <img src={"/images/mesure.png"} alt="comparaison" style={imageStyle} />
            <br></br>
            <Orange_NumberDisplay>
                <strong>N.B<br />
                    Pour passer du mètre au centimètre, multiplie par 100.Pour faire l'inverse, on divise par 100.</strong>
            </Orange_NumberDisplay>


            <FormulaText>

                <strong><span style={{ color: '#FF7F50' }}>passer du mètre vers le  dm et le cm  :</span></strong>
                <br />
                <div className="table-container" >
                    <table>
                        <thead>
                            <tr>
                                <th></th>
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
                </div>
                <div>
                    <strong style={{ color: 'blue' }}>
                        <span>{réponse}</span>
                    </strong>

                </div>
                {victoire && <div>
                    <img src={"/images/Math/C/C3/victoire.gif"} alt="tableau" style={{ width: '500px', height: '100px' }} />

                </div>}

                {echec && <div>
                    <img src={"/images/Math/C/C3/echec.gif"} alt="tableau" style={{ width: '500px', height: '100px' }} />

                </div>}
                <div>
                    <button onClick={verifier}>Vérifier</button>
                    &nbsp;

                    <button onClick={handleReset}>Recommencer</button>
                    &nbsp;
                    <button className='bonn-rep' onClick={voir_bonne_reponce}>Voir correction</button>

                </div>


                <br></br>
                <br></br>

            </FormulaText>
        </ActivityWrapper>

    );
}

export default Table_mesure;