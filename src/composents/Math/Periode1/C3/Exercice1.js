import React, {useEffect, useState } from 'react';
import { FormulaText } from '../../../Styles/MajorStyles';
import Modal from '../../../Modals/Modal2'
import './Style.css';
import ActivityWrapper from "../../Reusable Components/Slides Content/ActivityWrapper"; 
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../Sign_in/v2/firebase";

import { useAuth } from '../../../Sign_in/v2/context/AuthContext';
import styled from 'styled-components';
import { Box } from '@mui/material';


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
function Table_mesure() {
    const [réponse, setReponse] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [modalImg, setModalImg] = useState("");
    const [modalAlt, setModalAlt] = useState("");
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

    const handleSubmit = () => {
        const userResponses = tableData.map(row => ({ dm: parseFloat(row.dm), cm: parseFloat(row.cm) }));
        const isValid = userResponses.every(response => !isNaN(response.dm) && !isNaN(response.cm) && response.dm >= 0 && response.cm >= 0);

        if (isValid) {
            const bonnesReponsesDm = bonnesReponses.map(br => br.dm);
            const bonnesReponsesCm = bonnesReponses.map(br => br.cm);
            const userResponsesDm = userResponses.map(ur => ur.dm);
            const userResponsesCm = userResponses.map(ur => ur.cm);

            if (JSON.stringify(userResponsesDm) === JSON.stringify(bonnesReponsesDm) &&
                JSON.stringify(userResponsesCm) === JSON.stringify(bonnesReponsesCm)) {
                setReponse("Bravo! Les données sont correctes.");
                // setModalImg('/images/Modals/Congrats.gif');
                // setModalAlt("Bravo! Les données sont correctes.");
                // console.log("Bravo! Les données sont correctes.");
                setScore(100)
            } else {
                setReponse("Désolé, les données ne sont pas correctes.");
                setScore(0)
                // setModalImg('/images/Modals/triste.gif');
                // setModalAlt("Désolé, les données ne sont pas correctes.");
                
            }
            setShowModal(true);
        } else {
            setReponse("Veuillez entrer des valeurs numériques valides pour les colonnes dm et cm.");
            setModalImg('/images/Modals/triste.gif');
            setModalAlt("Veuillez entrer des valeurs numériques valides");
            setShowModal(true);
           
        }
    };

    const voir_bonne_reponce = () => {
        setReponse('');
        const updatedData = tableData.map((row, index) => ({
            ...row,
            dm: bonnesReponses[index].dm.toString(),
            cm: bonnesReponses[index].cm.toString()
        }));
        setTableData(updatedData);
    };

    const handleReset = () => {
        const initialData = [
            { carreaux: '50', dm: '', cm: '' },
            { carreaux: '410', dm: '', cm: '' },
            { carreaux: '30', dm: '', cm: '' },
        ];
        setTableData(initialData);
        setReponse('');
        setShowModal(false);
        setScore(0)
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const  checkAnswer =()=>{
    }

const verifier =()=>{
    handleSubmit()
    sendActivityData()

}


    return (
        <div>

<ActivityWrapper
      activityTitle={"Exercice 2"}
      explanationVideoUrl={"/Videos/number_sorting.mp4"}
      onSubmit={checkAnswer}
      user={currentUser}
      activityName="C3_Exercice2"
    >




<img  src={"/images/Math/C/C3/regleetmatre.png"} alt="mesure" style={imageStyle} />
            <br></br>
{/* <beige_NumberDisplay>                <strong>N.B<br />
                    Pour passer du mètre au centimètre, multiplie par 100.Pour faire l'inverse, on divise par 100.</strong>
            </beige_NumberDisplay> */}

<Orange_NumberDisplay>
<strong>Pour passer du centimètre au  mètre et dicametre on divise par 10 et 100 .</strong>
</Orange_NumberDisplay>

            <FormulaText>
                <strong><span style={{ color: '#FF7F50' }}>passer du Km et le hm vers le mètre :</span></strong>
                <br />
                <div className="table-container">
                    <table>
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
                </div>
                <div>
                    <strong style={{ color: 'blue' }}>
                        <span>{réponse}</span>
                    </strong>
                </div>
                <div>
                    <button onClick={verifier}>Vérifier</button>&nbsp;
                    <button onClick={handleReset}>Recommencer</button>&nbsp;
                    <button className='bonn-rep' onClick={voir_bonne_reponce}>Voir correction</button>
                </div>
                <br />
                <br />
            </FormulaText>
            <Modal
                show={showModal}
                handleClose={handleCloseModal}
                imgSrc={modalImg}
                altText={modalAlt}
            />

            </ActivityWrapper>
        </div>
    );
}

export default Table_mesure;
