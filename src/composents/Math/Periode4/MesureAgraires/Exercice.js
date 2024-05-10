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

const NumberDisplay = styled(Box)(({ isActive }) => ({
    boxSizing: 'border-box',
    width: '100%',
    height: 'auto',
    // margin: '20px auto',
    padding: '5px',
    backgroundColor: ' white',
    border: '3px dashed black',
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



const NumberDisplay_green = styled(Box)(({ isActive }) => ({
    boxSizing: 'border-box',
    width: '100%',
    height: 'auto',
    // margin: '20px auto',
    padding: '5px',
    backgroundColor: 'rgb(255, 195, 0)',
    border: '3px dashed black',
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

const NumberDisplay_Orange = styled(Box)(({ isActive }) => ({
    boxSizing: 'border-box',
    width: '100%',
    height: 'auto',
    // margin: '20px auto',
    padding: '5px',
    backgroundColor: ' orange',
    border: '3px dashed black',
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
    const [divActive, setDivActive] = useState(false);


    const activerDiv = () => {
        setDivActive(prevState => !prevState);
    };

    return (

        <div>


            <FormulaText>
                <strong>

                    Malaïnine a divisé son champ en 4 parcelles. Il consacre la plus grande à la culture du mil, la
                    suivante à celle du blé, la troisième au maraîchage et la plus petite à la culture du maïs.


                    <img src={'/images/Math/periode 4/ex1Agr.PNG'} alt="tableau" />



                    <NumberDisplay3>

                        <div style={{ display: 'inline' }}> L' are (1a) est l'unité choisie.</div>
                    </NumberDisplay3>



                </strong>

                <br></br>


                <strong>
                    <div style={{ display: 'inline' }}>(1) Calcule en décamètre carré (dam²) l'aire de cette unité.</div><br></br>
                    <div style={{ display: 'inline' }}>(2) Calcule, en are, les étendues des différentes parcelles et place dans chacune la culture
                        correspondante.</div>
                </strong>

                <br></br>
                <br></br>

                <div>

                    <button onClick={activerDiv}>Voir correction</button>
                </div>

 {divActive && <div>
    
<div>
                    <br></br>
                    <NumberDisplay_Orange>
                        <strong>

                            Pour calculer l'aire en décamètre carré (dam²) d'une unité, nous devons d'abord trouver l'aire en mètres carrés (m²), puis la convertir en dam².
                        </strong>
                    </NumberDisplay_Orange>
                    <br></br>

                    Calcul de l'aire en mètres carrés (m²) :<br></br>
                    <NumberDisplay>

                        <div style={{ display: 'inline' }}><span style={{ color: 'blue' }}>Longueur=</span> 12 dam = 12 * 10 m = 120 m .</div>
                        <div style={{ display: 'inline' }}><span style={{ color: 'blue' }}>Largeur</span> = 8 dam = 8 * 10 m = 80 m .</div>
                        <div style={{ display: 'inline' }}><span style={{ color: 'blue' }}>Aire</span> = Longueur * Largeur = 120 m * 80 m = 9600 m²  .  </div>
                    </NumberDisplay>



                    
                </div>


                <br></br>

                Conversion de l'aire en dam² :<br></br>
                <NumberDisplay>1 dam² = 100 m²  </NumberDisplay>
                <br></br>
                <NumberDisplay><div style={{ display: 'inline' }}> Aire en dam² = 9600 m² / 100 = 96 dam² </div></NumberDisplay>
                <br></br>

                <div style={{ display: 'inline', color: 'red' }}>

                    Maintenant, nous pouvons répartir les cultures sur les parcelles :
                </div>


<br></br>

                <strong>Parcelle de mil :</strong>
                <NumberDisplay>
                    Étant donné que c'est la plus grande parcelle, elle couvre la majorité de l'aire. Supposons qu'elle occupe toute la surface de 96 dam².
                </NumberDisplay>
                <br></br>

                <strong>Parcelle de blé :</strong>
                <NumberDisplay>
                    Il reste 3 parcelles à répartir sur les 96 dam².
                    Si nous supposons que la parcelle de blé est de taille similaire à celle du mil, nous pouvons lui attribuer une surface de 24 dam² (1/4 de l'aire totale).

                </NumberDisplay>


                <br></br>
                <strong>Parcelle de maraîchage :</strong>
                <NumberDisplay>
                    Même logique que pour le blé, nous lui attribuons 24 dam².
                </NumberDisplay>
                <br></br>

                <strong>Parcelle de maïs :</strong>

                <NumberDisplay>
                    La plus petite parcelle, donc ce qui reste après avoir attribué les autres cultures. Soit 24 dam².
                </NumberDisplay>

                <br></br>

                Donc, les étendues des différentes parcelles sont :
                <NumberDisplay_green>
                    Mil : 96 dam²<br></br>
                    Blé : 24 dam²<br></br>
                    Maraîchage : 24 dam²<br></br>
                    Maïs : 24 dam²
                </NumberDisplay_green>

           

</div>}


</FormulaText>
            </div>               
       

    );
}

export default Table_mesure;