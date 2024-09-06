import React, { useState, useEffect } from 'react';
import { Beige_NumberDisplay, FormulaText, Orange_NumberDisplay, Violet_NumberDisplay } from '../../../Styles/MajorStyles';
import Modal2 from '../../../Modals/Modal2';
import './Style.css';


import { Box, Button } from '@mui/material';
import ActivityWrapper from "../../Reusable Components/Slides Content/ActivityWrapper";
import { useAuth } from "../../../Sign_in/v2/context/AuthContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../Sign_in/v2/firebase";
import LinearProgressBar from "../../Reusable Components/ProgressIndicator";
import '../../Periode1/C3/tabStyle.css'


export const imageStyle = {
    width: "60%",
    height: "50%",
    maxWidth: "90%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
};
function Table_mesure() {
    const [réponse, setReponse] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [modalImg, setModalImg] = useState("");
    const [modalAlt, setModalAlt] = useState("");

    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState(0);
    const [questionsAnswered, setQuestionsAnswered] = useState(0);
    const [isLastQuestion, setIsLastQuestion] = useState(false);

    const [entryTime, setEntryTime] = useState(null);

    const { currentUser } = useAuth();


    useEffect(() => {
        const now = new Date();
        setEntryTime(now);
        // generateQuestion();
    }, []);
    const [tableData, setTableData] = useState([
        { carreaux: '100', Réponse: '' },
        { carreaux: '105', Réponse: '' },
        { carreaux: '76', Réponse: '' }
    ]);

    const bonnesReponses = [
        { Réponse: 'vrai' },
        { Réponse: 'vrai' },
        { Réponse: 'faux' }
    ];

    const handleInputChange = (index, key, value) => {
        const updatedData = [...tableData];
        updatedData[index][key] = value;
        setTableData(updatedData);
    };

    const handleSubmit = () => {
        const userResponses = tableData.map(row => ({ Réponse: row.Réponse }));
        const bonnesReponsesRep = bonnesReponses.map(br => br.Réponse);
        const userResponsesRep = userResponses.map(ur => ur.Réponse);

        if (JSON.stringify(userResponsesRep) === JSON.stringify(bonnesReponsesRep)) {
            setReponse("Bravo! Les données sont correctes.");
            setModalImg('/images/Modals/Congrats.gif');
            setModalAlt("Bravo! Les données sont correctes.");
        } else {
            setReponse("Désolé, les données ne sont pas correctes.");
            setModalImg('/images/Modals/triste.gif');
            setModalAlt("Désolé, les données ne sont pas correctes.");
        }
        // setShowModal(true);
        setIsLastQuestion(true)
    };

    const voir_bonne_reponce = () => {
        setReponse('');
        const updatedData = tableData.map((row, index) => ({
            ...row,
            Réponse: bonnesReponses[index].Réponse
        }));
        setTableData(updatedData);
    };

    const handleReset = () => {
        const initialData = [
            { carreaux: '122', Réponse: '' },
            { carreaux: '410', Réponse: '' },
            { carreaux: '75', Réponse: '' }
        ];
        setTableData(initialData);
        setReponse('');
        setShowModal(false);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };


    const checkAnswer = () => {
        const allAnswersCorrect = correctAnswers === questionsAnswered;
        return { allAnswersCorrect, totalQuestions: questionsAnswered, correctAnswers, incorrectAnswers };
    };

    const sendActivityData = async () => {
        const endTime = new Date();
        const timeSpent = (endTime - entryTime) / 1000;
        const { allAnswersCorrect } = checkAnswer();

        const activityData = {
            userId: currentUser.uid,
            activityName: "Division par 5",
            entryTime: entryTime.toISOString(),
            timeSpent: timeSpent,
            totalQuestions: 1,
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

        // setShowScoreComponent(true); // Show the ScoreComponent when "Terminer" is clicked
    };


    const finish = () => {
        sendActivityData()
        handleReset()
    }



    return (
        <ActivityWrapper
            activityTitle={"division par  5 "}
            explanationVideoUrl={"/Videos/your_video_url.mp4"}
            onSubmit={checkAnswer}
            user={currentUser}
            activityName="division par5 ">

            <Box>
                <FormulaText>
                    <img src={'/images/Math/C/C11/cinq.png'} alt="division" style={imageStyle} />

                    
                    <strong> <Orange_NumberDisplay>Un entier est dit divisible par cinq si:
                        <span>Son chiffres des unitès est un 0 ou 5</span>
                    </Orange_NumberDisplay></strong>
                    <strong style={{ color: 'blue' }}>Exemple: </strong><br></br><br></br>

                    <strong>
                        <li>450 est divisible par 5, car chiffre des unities est 0</li> <br />
                        <li> 455 est divisible par 5, car chiffre des unities est 5</li><br />
                        <li>  452 n'est pas  divisible par 5, car chiffre des unities est ni 0 , ni 5 </li></strong>
                    <br></br><br></br>

                    <strong><span className="x">Répondre par vrai ou Faux :</span></strong>
                    <br />
                    {/* <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Réponse</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row, index) => (
                                <tr key={index}>
                                    <td>{row.carreaux}</td>
                                    <td>
                                        <input
                                            type="text"
                                            className="small-input"
                                            value={row.Réponse}
                                            placeholder='---'
                                            onChange={(e) => handleInputChange(index, 'Réponse', e.target.value)}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div> */}

                    <table className="conversion-table">
                        <thead>
                            <tr>
                                <th>Nombre </th>
                                <th>réponse</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row, index) => (
                                <tr key={index}>
                                    <td>{row.carreaux}</td>
                                    <td>
                                        <input
                                            type="text"
                                            className="small-input"
                                            value={row.Réponse}
                                            placeholder='---'
                                            onChange={(e) => handleInputChange(index, 'Réponse', e.target.value)}
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


                    <Box display="flex" justifyContent="center" mt={2}>
                        <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginRight: '10px' }} disabled={isLastQuestion}>
                            Répondre
                        </Button>
                        <Button variant="contained" color="primary" disabled={!isLastQuestion}
                            onClick={finish}
                        >
                            Terminer
                        </Button>
                    </Box>
                    {/* <div>
                        <button onClick={handleSubmit}>Vérifier</button>&nbsp;
                        <button onClick={handleReset}>Recommencer</button>&nbsp;
                        <button className='bonn-rep' onClick={voir_bonne_reponce}>Voir correction</button>
                    </div> */}
                    <br />
                    <br />
                </FormulaText>
                <Modal2
                    show={showModal}
                    handleClose={handleCloseModal}
                    imgSrc={modalImg}
                    altText={modalAlt}
                />
            </Box>
        </ActivityWrapper>
    );
}

export default Table_mesure;
