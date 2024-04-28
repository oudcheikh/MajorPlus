import React, { useState } from 'react';
import styled from 'styled-components';
import { Box } from '@mui/material';

// Assurez-vous que ce fichier CSS est dans le même dossier que votre composant
import './Ex1.css'
import {
    Container, SectionContainer, ImageContainer, FormulaText, Card, FormulaBox, BodyText, Subtitle, ContinueButton
} from '../../Styles/MajorStyles'; // Assurez-vous que le chemin est correct


// Définir un composant styled-components pour le conteneur
const NumberDisplay2 = styled(Box)(({ isActive }) => ({
    boxSizing: 'border-box',
    width: '100%',
    height: 'auto',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: 'white',
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
    backgroundColor: 'orange',
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
function Exercice2() {



    return (
        <div>
            <BodyText>
                <strong>  Amina a acheté <span style={{ color: 'blue' }}>3 boîtes de crayons de couleur </span> pour <span style={{ color: 'blue' }}>6 €.<span></span> 
                <br></br>
                <span style={{ color: 'orange' }}>Combien coûteront 5 boîtes de crayons de couleur ?</span>
                </span>

                </strong>
            </BodyText>
            

            <BodyText>
          <strong>- 3 boîtes de crayons de couleur coûtent 6 €<br></br>
          <br></br>
          Pour trouver le prix de 1 boîte de crayons de couleur:
          <span style={{ color: 'blue' }}>   nous divisons le prix total par le nombre de boîtes </span>
          
          <NumberDisplay3>
          Prix par boite=6/3=2€
          </NumberDisplay3>
          
          Maintenant, pour trouver le prix de 5 boîtes de crayons de couleur, nous multiplions le prix par boîte par le nombre de boîtes :
         
        
           
          
           <NumberDisplay3>
           Prix total pour 5 boites=2*5=10 €
          </NumberDisplay3>
          </strong> 
          </BodyText>
            <br></br>
        </div>

    );
}

export default Exercice2;
