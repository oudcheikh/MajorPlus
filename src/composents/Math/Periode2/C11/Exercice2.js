import React, { useState } from 'react';
import { Beige_NumberDisplay, FormulaText, Orange_NumberDisplay, Violet_NumberDisplay } from '../../../Styles/MajorStyles';
import Modal2 from '../../../Modals/Modal2';
import './Style.css';
import '../../Periode1/C3/tabStyle.css'

function Table_mesure() {
    const [réponse, setReponse] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [modalImg, setModalImg] = useState("");
    const [modalAlt, setModalAlt] = useState("");

    const [tableData, setTableData] = useState([
        { carreaux: '122', Réponse: '' },
        { carreaux: '410', Réponse: '' },
        { carreaux: '75', Réponse: '' }
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
        setShowModal(true);
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

    return (
        <div className="avv">
            <FormulaText>

                <img src={'/images/Math/C/C11/deux.png'} alt="division" />
                <strong> <Orange_NumberDisplay>Un entier est dit divisible par deux si:
                    <span>Son chiffres des unitès et l'un des multiples de 2</span>
                </Orange_NumberDisplay></strong>
                <strong style={{ color: 'blue' }}>Exemple: </strong><br></br><br></br>

                <strong> 234 est divisible par 2, car 4 est pair </strong>
                <br></br><br></br>

                <strong><span className="x">Répondre par vrai ou Faux :</span></strong>
                <br />
                <div className="table-container">
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
                </div>
                <div>
                    <strong style={{ color: 'blue' }}>
                        <span>{réponse}</span>
                    </strong>
                </div>
                <div>
                    <button onClick={handleSubmit}>Vérifier</button>&nbsp;
                    <button onClick={handleReset}>Recommencer</button>&nbsp;
                    <button className='bonn-rep' onClick={voir_bonne_reponce}>Voir correction</button>
                </div>
                <br />
                <br />
            </FormulaText>
            <Modal2
                show={showModal}
                handleClose={handleCloseModal}
                imgSrc={modalImg}
                altText={modalAlt}
            />
        </div>
    );
}

export default Table_mesure;
