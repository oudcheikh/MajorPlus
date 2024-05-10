import React, { useState } from 'react';
import styled from 'styled-components';
import { Box } from '@mui/material';
import Exemple1 from'../les solides/Exemple1'
import Exemple2 from'../les solides/Exemple2'

import {
   FormulaText
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

function TableauComponent() {
  // Définir un état local pour stocker les données du tableau
  const [réponse, setReponse] = useState("")
  const [tableData, setTableData] = useState([
    { carreaux: 'faces', longueur: '' },
    { carreaux: 'sommets', longueur: '' },
    { carreaux: 'arétes', longueur: '' },

  ]);

  const [divActive, setDivActive] = useState(false);
  const [div1Active, setdiv1Active] = useState(false);
  const [div2Active, setdiv2Active] = useState(false);
  // Bonnes réponses
  const bonnesReponses = [0,0,0];

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


  // Fonction pour activer le div
  const activerDiv = () => {
    setDivActive(prevState => !prevState);
  };


const div1ActiveButton=()=>{
  
  setdiv1Active(prevState => !prevState)
  setdiv2Active(false)
}

const div2ActiveButton =()=>{
  
  setdiv1Active(false)
  setdiv2Active(prevState => !prevState)
}

  return (

    <div>


<img src={'/images/Math/periode 4/ballonr.PNG'} alt="ballon" />

<strong>

    <NumberDisplay2>
        <div style={{ display: 'inline' }}>
    
            un ballon est de forme   <span style={{ color: '#ff4500' }}>sphérique</span>,<br />
          C'est-à-dire qu'il est arrondi de tous les côtés, sans angles ou arêtes saillantes.
  
      </div>

    </NumberDisplay2>
    </strong>

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
        <br></br>
        <br></br>



        <button onClick={activerDiv}>
          Execrcer
        </button>
        <br></br>
        {
          divActive && <div>
            <button  onClick={div1ActiveButton}>
              Exercice1
            </button>
            &nbsp; &nbsp;

            <button onClick={div2ActiveButton}>
              Exercice2
            </button>
          </div>
        }





   {div1Active &&    <div >
     <Exemple1 />
         </div>
        } 


{div2Active &&     <div >

<Exemple2 />

       


        </div>

      }





      </FormulaText>
    </div>
  );
}

export default TableauComponent;
