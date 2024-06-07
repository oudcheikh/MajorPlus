import React, { useState } from 'react';
import styled from 'styled-components';
import { Box } from '@mui/material';
import { FormulaText, Violet_NumberDisplay, Beige_NumberDisplay } from '../../../Styles/MajorStyles';
import './Style.css'

function Table_mesure() {
    // Définir un état local pour stocker les données du tableau
    const [réponse, setReponse] = useState("")
    const [victoire, setVictoire] = useState(false)
    const [echec, setEchec] = useState(false)

    const [tableData, setTableData] = useState([
        { carreaux: '90 ', Km: '', hm: '' },
        { carreaux: '410', Km: '', hm: '' },
        { carreaux: '30', Km: '', hm: '' }

    ]);

    const bonnesReponses = [
        { Km: '90000', hm: '9000' },
        {  Km: '410000', hm: '41000' },
        {  Km: '2000', hm: '200' }

    ];

    // Fonction pour mettre à jour les données du tableau lors de la saisie
    const handleInputChange = (index, key, value) => {
        const updatedData = [...tableData];
        updatedData[index][key] = value;
        setTableData(updatedData);
    };

    // Fonction de vérification
    const handleSubmit = () => {
        // Vérifier si les données de l'utilisateur correspondent aux bonnes réponses
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
                setEchec(false)
                setVictoire(true)
                setReponse(h);
            } else {
                const V = "Désolé, les données ne sont pas correctes.";
                setReponse(V);

                setEchec(true)

                console.log(victoire)
                setVictoire(false)
            }
        } else {
            // Si les réponses de l'utilisateur ne sont pas valides, afficher un message d'erreur
            setReponse("Veuillez entrer des valeurs numériques valides pour les colonnes ca et ha.");
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





    return (

        <div>






            <FormulaText>

                <strong><span style={{ color: '#FF7F50' }}>passer du mètre vers le  dm et le cm  :</span></strong>
                <br />
                <div className="table-container" >
                    <table>
                        <thead>
                            <tr>
                                <th></th>
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
        </div>
    );
}

export default Table_mesure;