import React, {useEffect, useState } from 'react';
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
            await addDoc(collection(db, 'users',currentUser.uid, 'activities'), activityData);
            console.log('Activity data sent:', activityData);
        } catch (e) {
            console.error('Error sending activity data:', e);
        }
    };

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

    // Fonction pour mettre à jour les données du tableau lors de la saisie
    const handleInputChange = (index, key, value) => {
        const updatedData = [...tableData];
        updatedData[index][key] = value;
        setTableData(updatedData);
    };

    const handleSubmit = () => {
        const userResponses = tableData.map(row => ({ dm: parseFloat(row.Km), cm: parseFloat(row.hm) }));
        const isValid = userResponses.every(response => !isNaN(response.Km) && !isNaN(response.hm) && response.km >= 0 && response.hm >= 0);

        if (isValid) {
            const bonnesReponsesKm = bonnesReponses.map(br => br.Km);
            const bonnesReponsesHm = bonnesReponses.map(br => br.hm);
            const userResponsesKm = userResponses.map(ur => ur.Km);
            const userResponsesHm = userResponses.map(ur => ur.hm);

            if (JSON.stringify(userResponsesKm) === JSON.stringify(bonnesReponsesKm) &&
                JSON.stringify(userResponsesHm) === JSON.stringify(bonnesReponsesHm)) {
                const h = "Bravo! Les données sont correctes.";
                // setEchec(false)
                // setVictoire(true)
                setReponse(h);
                setScore(100)
            } else {
                const V = "Désolé, les données ne sont pas correctes.";
                                
                setScore(0)
                setReponse(V);

                // setEchec(true)

                // console.log(victoire)
                // setVictoire(false)
            }
            setScore(score)
        } else {
            setReponse("Veuillez entrer des valeurs numériques valides.");
        }
    };





    const voir_bonne_reponce = () => {
        setReponse('');

        // Afficher les bonnes réponses dans les colonnes "ca" et "ha"
        const updatedData = tableData.map((row, index) => ({
            ...row,
            Km: bonnesReponses[index].Km.toString(),
            hm: bonnesReponses[index].hm.toString()
        }));

        setTableData(updatedData);
    };


    // Fonction pour recommencer
    const handleReset = () => {
        // Réinitialiser les données du tableau
        const initialData = [
            { carreaux: '50', Km: '', hm: '' },
            { carreaux: '410', Km: '', hm: '' },
            { carreaux: '30', Km: '', hm: '' },


        ];
        setTableData(initialData);
        setReponse('')
        setEchec(false)
        setVictoire(false)
    };


    const checkAnswer = () => {
    }

    return (

        <div>


         <ActivityWrapper
                activityTitle={"Exercice 2"}
                explanationVideoUrl={"/Videos/number_sorting.mp4"}
                onSubmit={checkAnswer}
                user={currentUser}
                activityName="C3_Exercice1"
            >


            <FormulaText>


            <img src="/images/Math/C/imgC19/Activity.png" alt="Activity" style={{ width: "50%", height: "auto", maxWidth: "70%", display: "block", marginLeft: "auto", marginRight: "auto" }} />
<Orange_NumberDisplay>
Pour passer du mètre vers le  Km et le hm on doit diviser !
</Orange_NumberDisplay>
                <strong><span style={{ color: '#FF7F50' }}>passer du mètre vers le  Km et le hm  :</span></strong>
                <br />
                <div className="table-container" >
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
                {victoire && <div>
                    <img src={"/images/Math/C/C3/victoire.gif"} alt="tableau" style={{ width: '500px', height: '100px' }} />

                </div>}

                {echec && <div>
                    <img src={"/images/Math/C/C3/echec.gif"} alt="tableau" style={{ width: '500px', height: '100px' }} />

                </div>}
                <div>
                    <button onClick={handleSubmit}>Vérifier</button>
                    &nbsp;

                    <button onClick={handleReset}>Recommencer</button>
                    &nbsp;
                    <button className='bonn-rep' onClick={voir_bonne_reponce}>Voir correction</button>

                </div>

                <br></br>
                <br></br>

            </FormulaText>
            </ActivityWrapper> 
        </div>
    );
}

export default Table_mesure;