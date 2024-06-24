import React, { useState } from 'react';
import { FormulaText } from '../../../Styles/MajorStyles';
import Modal from '../../../Modals/Modal2'
import './Style.css';


function Table_mesure() {
    const [réponse, setReponse] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [modalImg, setModalImg] = useState("");
    const [modalAlt, setModalAlt] = useState("");

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
                setModalImg('/images/Modals/Congrats.gif');
                setModalAlt("Bravo! Les données sont correctes.");
                console.log("Bravo! Les données sont correctes.");
            } else {
                setReponse("Désolé, les données ne sont pas correctes.");
                setModalImg('/images/Modals/triste.gif');
                setModalAlt("Désolé, les données ne sont pas correctes.");
                
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
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <FormulaText>
                <strong><span style={{ color: '#FF7F50' }}>passer du Km et le hm vers le mètre :</span></strong>
                <br />
                <div className="table-container">
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
                <div>
                    <button onClick={handleSubmit}>Vérifier</button>&nbsp;
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
        </div>
    );
}

export default Table_mesure;
