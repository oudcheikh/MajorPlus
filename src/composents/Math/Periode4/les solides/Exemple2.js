import React, { useState } from 'react';
import styled from 'styled-components';
import { Box } from '@mui/material';

import {
    Container, SectionContainer, ImageContainer, FormulaText, Card, FormulaBox, BodyText, Subtitle, ContinueButton
} from '../../../Styles/MajorStyles'; // Assurez-vous que le chemin est correct

// Assurez-vous que ce fichier CSS est dans le même dossier que votre composant
import '../Ex1.css'


const NumberDisplay = styled(Box)(({ isActive }) => ({
    boxSizing: 'border-box',
    width: '100%',
    height: 'auto',
    margin: ' auto',
    padding: '20px',
    backgroundColor: 'FF7F50',
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

function Exmple2() {
    const [inputValue, setInputValue] = useState('');
    const [isValid, setIsValid] = useState(false);
    const[rep,setRep]=useState('')

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleVerification = () => {
        if (inputValue.trim() === '9.42') {
            setRep('réponse correcte')
        } else {
            setRep('réponse incorrecte ')
        }
    };

    const handleReponse = () => {
        setInputValue('9.42');
       
    };

    return (

        <div>

<img src={'/images/Math/periode 4/cercle.PNG'} alt="cercle2" />

            <NumberDisplay >
                
             <span style={{ color: 'blue' }}>Aide: </span> <br></br>
             <div style={{ display: 'inline' }}> - étape1:  calculer la surface de la petite cercle .</div>
             <div style={{ display: 'inline' }}>  -étape2:calculer la surface de la cercle de rayon  2cm</div>
             <div style={{ display: 'inline' }}>  -étape3:faire étape2 - étape1 </div>
           
            </NumberDisplay>

            
           
            <br></br>
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="----"
                />

              
                <button onClick={handleVerification}>Vérifier</button>

                &nbsp; &nbsp;
                <button onClick={handleReponse}>Réponse</button>
              <div>
               <div style={{ display: 'inline' }}> <span style={{ color: 'blue' }}>   {rep}</span>
               </div>
               </div>
             

<div>
    <NumberDisplay2 >
    <div style={{ display: 'inline' }}>   Air cercle1= 3.14*1*1= 3.14cm²</div>
    <div style={{ display: 'inline' }}>   Air cercle2=3.14*2*2=12,56 cm²</div>
    <div style={{ display: 'inline' }}>   Air cercle hachurée=12,56-3.14=9,42cm² </div>
    </NumberDisplay2>
</div>





            </div>

        </div>
    );
}

export default Exmple2;
