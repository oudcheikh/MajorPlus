import React, { useState } from 'react';
import styled from 'styled-components';
import { Box } from '@mui/material';
import { FormulaText, Violet_NumberDisplay, Beige_NumberDisplay } from '../../../Styles/MajorStyles';
import './Style.css'

function Table_mesure() {
    // Définir un état local pour stocker les données du tableau
    const [réponse, setReponse] = useState("")
    const [tableData, setTableData] = useState([
        { carreaux: '50', ca: '', ha: '' },
        { carreaux: '410', ca: '', ha: '' },
        { carreaux: '30', ca: '', ha: '' },
        { carreaux: '0.33', ca: '', ha: '' },
        { carreaux: '5.9', ca: '', ha: '' },
        { carreaux: '100', ca: '', ha: '' },

    ]);

    const bonnesReponses = [
        { ca: 10000, ha: 10 },
        { ca: 100, ha: 1 },
        { ca: 1, ha: 30000 },
        { ca: 30000, ha: 59 },
        { ca: 59, ha: 100 },
        { ca: 100, ha: 100 }
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
        const userResponses = tableData.map(row => ({ ca: parseFloat(row.ca), ha: parseFloat(row.ha) }));
        const isValid = userResponses.every(response => !isNaN(response.ca) && !isNaN(response.ha) && response.ca >= 0 && response.ha >= 0);

        if (isValid) {
            const bonnesReponsesCa = bonnesReponses.map(br => br.ca);
            const bonnesReponsesHa = bonnesReponses.map(br => br.ha);
            const userResponsesCa = userResponses.map(ur => ur.ca);
            const userResponsesHa = userResponses.map(ur => ur.ha);

            if (JSON.stringify(userResponsesCa) === JSON.stringify(bonnesReponsesCa) &&
                JSON.stringify(userResponsesHa) === JSON.stringify(bonnesReponsesHa)) {
                const h = "Bravo! Les données sont correctes.";
                setReponse(h);
            } else {
                const V = "Désolé, les données ne sont pas correctes.";
                setReponse(V);
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
            ca: bonnesReponses[index].ca.toString(),
            ha: bonnesReponses[index].ha.toString()
        }));

        setTableData(updatedData);
    };


    // Fonction pour recommencer
    const handleReset = () => {
        // Réinitialiser les données du tableau
        const initialData = [
            { carreaux: '50', ca: '', ha: '' },
            { carreaux: '410', ca: '', ha: '' },
            { carreaux: '30', ca: '', ha: '' },
            { carreaux: '0.33', ca: '', ha: '' },
            { carreaux: '5.9', ca: '', ha: '' },
            { carreaux: '100', ca: '', ha: '' },

        ];
        setTableData(initialData);
        setReponse('')
    };





    return (

        <div>


            <FormulaText>

            <strong><span style={{ color: '#FF7F50' }}>Les sous_multiples du mètre:</span></strong>

            <img src={"/images/Math/C/C3/V1.png"}  alt="tableau" style={{ width: '500px', height: '100px' }} />


            <Beige_NumberDisplay>
                    <strong>
                        <div style={{ display: 'inline' }}>   1(dm)=0.1 m</div><br></br>
                        <div style={{ display: 'inline' }}>   1(cm)=0.01 m</div><br></br>
                        <div style={{ display: 'inline' }}>   1(dm)=0.001 m</div>

                    </strong>
                </Beige_NumberDisplay>

                <Violet_NumberDisplay>
                    Pour aller du métre cube (m) au sous_multiple on doit multiplier
                </Violet_NumberDisplay>

          
<br/><br/><br/>

                <strong><span style={{ color: '#FF7F50' }}>Les multiples du mètre:</span></strong>


                <img src={"/images/Math/C/C3/V2.png"}  alt="tableau" style={{ width: '500px', height: '100px' }} />



                <Beige_NumberDisplay>
                    <strong>
                        <div style={{ display: 'inline' }}>   1(Km)=1 000 m</div><br></br>
                        <div style={{ display: 'inline' }}>   1(hm)=100 m</div><br></br>
                        <div style={{ display: 'inline' }}>   1(dm)=10 m</div>

                    </strong>
                </Beige_NumberDisplay>
                <Violet_NumberDisplay>
                    Pour aller du métre cube (m) au multiple on doit diviser.
                </Violet_NumberDisplay>

          


                

            </FormulaText>



            {/* <FormulaText>

                <strong><span style={{ color: '#FF7F50' }}>Complète le tableau suivant:</span></strong>
                <br />
                <div className="table-container" >
                <table>
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
                                        value={row.ca}
                                        placeholder='---'
                                        onChange={(e) => handleInputChange(index, 'ca', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        value={row.ha}
                                        placeholder='---'
                                        onChange={(e) => handleInputChange(index, 'ha', e.target.value)}
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
                    <button onClick={handleSubmit}>Vérifier</button>
                    &nbsp;

                    <button onClick={handleReset}>Recommencer</button>
                    &nbsp;
                    <button className='bonn-rep' onClick={voir_bonne_reponce}>Voir correction</button>

                </div>

                <br></br>
                <br></br>

            </FormulaText> */}

          
        </div>
    );
}

export default Table_mesure;