import React, { useState } from 'react';
import styled from 'styled-components';
import { Box } from '@mui/material';
import Exemple1 from '../les solides/Exemple1'

import {
    Container, SectionContainer, ImageContainer, FormulaText, Card, FormulaBox, BodyText, Subtitle, ContinueButton
} from '../../../Styles/MajorStyles'; // Assurez-vous que le chemin est correct

// Assurez-vous que ce fichier CSS est dans le même dossier que votre composant
import './Style2.css'

// Définir un composant styled-components pour le conteneur
const NumberDisplay2 = styled(Box)(({ isActive }) => ({
    boxSizing: 'border-box',
    width: '100%',
    height: 'auto',
    // margin: '20px auto',
    padding: '2px',
    backgroundColor: 'rgb(248, 248, 227)',
    border: '3px dashed #B3E5FC',
    transition: 'background-color 0.4s, transform 0.3s',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '1em',
    fontFamily: "'Comic Sans MS', sans-serif",
    '&:hover': {
        transform: 'scale(1.05)',
    },
}));

const NumberDisplay3 = styled(Box)(({ isActive }) => ({
    boxSizing: 'border-box',
    width: '100%',
    height: 'auto',
    // margin: '20px auto',
    padding: '5px',
    backgroundColor: ' rgb(205, 205, 241)',
    border: '3px dashed #B3E5FC',
    transition: 'background-color 0.4s, transform 0.3s',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '1em',
    fontFamily: "'Comic Sans MS', sans-serif",
    '&:hover': {
        transform: 'scale(1.05)',
    },
}));


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


                <NumberDisplay3>


                    Pour aller du métre cube (m²) au hectare(ha)  ou  centiare(ca) on doit diviser

                </NumberDisplay3>

                <img src={'/images/Math/periode 4/tableau.PNG'} alt="tableau" />


                <NumberDisplay2>
                    <strong>
                    <div style={{ display: 'inline' }}>   1(m²)=1/10 000 = 0,0001 (ha).</div><br></br>
                    <div style={{ display: 'inline' }}>   1(m²)=1 /100 =0,01  (a).</div><br></br>
                    <div style={{ display: 'inline' }}>   1(m²)=1/1=1 (ca).</div>

                    </strong>
                </NumberDisplay2>

            </FormulaText>



            <FormulaText>

                <strong><span style={{ color: '#FF7F50' }}>Complète le tableau suivant:</span></strong>
                <br />
                <table>
                    <thead>
                        <tr>
                            <th>m²</th>
                            <th>(ca)</th>
                            <th>(ha)</th>

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








            </FormulaText>
        </div>
    );
}

export default Table_mesure;