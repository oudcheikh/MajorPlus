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
    margin: '20px auto',
    padding: '20px',
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
    margin: '20px auto',
    padding: '20px',
    backgroundColor: 'rgb(130, 198, 130)',
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


function Cadre() {
    // Définir un état local pour stocker les données du tableau
    const [réponse, setReponse] = useState("")
    const [tableData, setTableData] = useState([
        { carreaux: 'faces', longueur: '' },
        { carreaux: 'sommets', longueur: '' },
        { carreaux: 'arétes', longueur: '' },

    ]);

    const bonnesReponses = [6,8,12];

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
            { carreaux: 'faces', longueur: '' },
            { carreaux: 'sommets', longueur: '' },
            { carreaux: 'arétes', longueur: '' },

        ];
        setTableData(initialData);
        setReponse('')
    };





    return (

        <div>


            <FormulaText>

                <img src={'/images/Math/periode 4/alimentee.png'} alt="alimente" />
               
<NumberDisplay2>
Un cube est un objet solide avec six faces qui sont toutes des carrés de taille égale
</NumberDisplay2>

            </FormulaText>


            <FormulaText>

                <strong><span style={{ color: '#FF7F50' }}>Complète le tableau suivant:</span></strong>
                <br />
                <table>
                    <thead>
                        <tr>
                            <th>---</th>
                            <th>Nombre</th>
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

                <FormulaText  style={{ color: 'blue' }}>On remarque que :</FormulaText>
                <NumberDisplay3>
faces+ sommets=arrétes+2
</NumberDisplay3>

                <br></br>
                <br></br>








            </FormulaText>
        </div>
    );
}

export default Cadre;