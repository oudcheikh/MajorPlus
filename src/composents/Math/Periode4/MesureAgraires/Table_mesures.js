import React, { useState } from 'react';
import styled from 'styled-components';
import { Box } from '@mui/material';
import Exemple1 from '../les solides/Exemple1'

import {
    Container, SectionContainer, ImageContainer, FormulaText, Card, FormulaBox, BodyText, Subtitle, ContinueButton
} from '../../../Styles/MajorStyles'; // Assurez-vous que le chemin est correct

// Assurez-vous que ce fichier CSS est dans le même dossier que votre composant
import '../Ex1.css'

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
        { carreaux: '1 (ha)', longueur: '' },
        { carreaux: '1(a)', longueur: '' },
        { carreaux: '1(ca)', longueur: '' },
        { carreaux: '3(ha)', longueur: '' },
        { carreaux: '59(ca)', longueur: '' },
        { carreaux: '100(ca)', longueur: '' },

    ]);

    const bonnesReponses = [10000, 100, 1,30000,59,100];

    // Fonction pour mettre à jour les données du tableau lors de la saisie
    const handleInputChange = (index, key, value) => {
        const updatedData = [...tableData];
        updatedData[index][key] = value;
        setTableData(updatedData);
    };

    // Fonction de vérification
    const handleSubmit = () => {
        // Vérifier si les données de l'utilisateur correspondent aux bonnes réponses
        const userResponses = tableData.map(row => parseInt(row.longueur));
        const isValid = userResponses.every(response => !isNaN(response) && response >= 0);

        if (isValid) {
            if (JSON.stringify(userResponses) === JSON.stringify(bonnesReponses)) {
                const h = "Bravo! Les données sont correctes.";
                setReponse(h);
            } else {
                const V = "Désolé, les données ne sont pas correctes.";
                setReponse(V);
            }
        } else {
            // Si les réponses de l'utilisateur ne sont pas valides, afficher un message d'erreur
            setReponse("Veuillez entrer des valeurs numériques valides.");
        }
    };





    const voir_bonne_reponce = () => {
        setReponse('')
        // Afficher les bonnes réponses dans la colonne "Longueur en cm"
        const updatedData = tableData.map((row, index) => ({
            ...row,
            longueur: bonnesReponses[index].toString() // Mettre à jour avec la bonne réponse
        }));

        setTableData(updatedData);
        console.log(updatedData)


    }



    // Fonction pour recommencer
    const handleReset = () => {
        // Réinitialiser les données du tableau
        const initialData = [
            { carreaux: '1 (ha)', longueur: '' },
            { carreaux: '1(a)', longueur: '' },
            { carreaux: '1(ca)', longueur: '' },
            { carreaux: '3(ha)', longueur: '' },
            { carreaux: '59(ca)', longueur: '' },
            { carreaux: '100(ca)', longueur: '' },

        ];
        setTableData(initialData);
        setReponse('')
    };





    return (

        <div>


            <FormulaText>


                <NumberDisplay3>
                    <div style={{ display: 'inline' }}> (a)=are</div>
                    <div style={{ display: 'inline' }}> (ha)=hectare</div>
                    <div style={{ display: 'inline' }}> (ca)=  centiare</div>

                </NumberDisplay3>

                <img src={'/images/Math/periode 4/tableau.PNG'} alt="tableau" />


                <NumberDisplay2>
                    <div style={{ display: 'inline' }}>   1(ha)=1 × 10,000 = 10,000  (m²).</div>
                    <div style={{ display: 'inline' }}>   1(a)=1 × 100 =100  (m²).</div>
                    <div style={{ display: 'inline' }}>   1(ca)=1 (m²).</div>
                </NumberDisplay2>

            </FormulaText>


            <FormulaText>

                <strong><span style={{ color: '#FF7F50' }}>Complète le tableau suivant:</span></strong>
                <br />
                <table>
                    <thead>
                        <tr>
                            <th>---</th>
                            <th>(m²)</th>

                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index}>
                                <td>{row.carreaux}</td>
                                <td>
                                    <input
                                        type="number"
                                        value={row.longueur}
                                        placeholder='---'
                                        onChange={(e) => handleInputChange(index, 'longueur', e.target.value)}
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

                <FormulaText style={{ color: 'blue' }}>On remarque que :</FormulaText>
               

                <br></br>
                <br></br>








            </FormulaText>
        </div>
    );
}

export default Table_mesure;