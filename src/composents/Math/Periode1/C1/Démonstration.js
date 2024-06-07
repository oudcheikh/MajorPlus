import React, { useState } from 'react';
import styled from 'styled-components';

import { Card } from 'react-bootstrap';


import {
  Box, Button
} from "@mui/material";

const imageStyle = {
  width: '40%',
  height: 'auto',
  maxWidth: '90%',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const imageStyle2 = {
  width: '100%',
  height: 'auto',
  maxWidth: '100%',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const StyledBox = styled(Box)({});

const NumberDisplay2 = styled(Box)(({ isActive }) => ({
  boxSizing: 'border-box',
  width: '300px',  // Largeur fixe
  height: '300px',  // Hauteur fixe
  margin: '20px auto',
  padding: '20px',
  backgroundColor: 'rgb(248, 248, 227)',
  border: '3px dashed #B3E5FC',
  transition: 'background-color 0.4s, transform 0.3s',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center', // Centrer le contenu verticalement
  fontSize: '1em',
  fontFamily: "'Comic Sans MS', sans-serif",
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));


const Démonstration = () => {
  const [step, setStep] = useState(0);
  const [result, setResult] = useState('Taper suivant pour mieux comprendre');
const[Suivant, setSuivant]=useState(true)
const[refaire, setRefaire]=useState(false)
  const images = [
    '/images/Math/C/C1/start.gif',
    '/images/Math/C/C1/chiffre1.png',
    '/images/Math/C/C1/E2.png',
    '/images/Math/C/C1/E3.png',
    '/images/Math/C/C1/E4.png',
    '/images/Math/C/C1/E5.png',
    '/images/Math/C/C1/E6.png',
    '/images/Math/C/C1/E7.png',
    '/images/Math/C/C1/E8.png',
    '/images/Math/C/C1/E9.png',
    '/images/Math/C/C1/E9.png',
    '/images/Math/C/C1/E10.png',
    '/images/Math/C/C1/E11.png',
    '/images/Math/C/C1/E12.png',
    '/images/Math/C/C1/attention.gif',
    '/images/Math/C/C1/E13.png',
    '/images/Math/C/C1/E14.png',
    '/images/Math/C/C1/E14.png',


  ];


  const initialiser=() =>{
    setStep(0)
    setResult('Taper suivant pour mieux comprendre')
    setSuivant(true)
    setRefaire(false)

  }
  const handleNextStep = () => {
    if (step < images.length - 1) {
      setStep(prevStep => prevStep + 1);
    } else {
      setStep(0); // Réinitialiser à la première image ou ajouter une logique personnalisée
    }

    switch (step) {
      case 0:
        setResult('Aujourd hui on va comprendre comment lire ce grand nombre !');
        setStep(1)
        break;
        
      case 1:
        setResult('d abord tu vas commencer par la droite');
        setStep(2)
        break;
      case 2:
        setResult('tu vas regrouper les chiffre 3 par 3');
        setStep(3)
        break;
      case 3:
        setResult('Remplacer les traits rouge par des éspaces');
        setStep(4)
        break;
      case 4:
        setResult('ses éspaces correspond au classes');
        setStep(5)
        break;
      case 5:
        setResult('La classe des millions, la classe des milles et la classe des unités simples');
        setStep(6)
        break;

      case 6:
        setResult('La classe des unités simples avec les unités ,les dizaines et les centaine ');
        setStep(7)
        break;
      case 7:
        setResult('La classe des milles  avec les unités ,les dizaines et les centaine ');
        setStep(8)
        break;
      case 8:
        setResult('La classe des millions  avec les unités ,les dizaines et les centaine ');
        setStep(9)
        break;
      case 9:
        setResult('Nous démarrons maintenant la lecture de ce nombre ');
        setStep(10)
        break;
      case 10:
        setResult('soixante-et-un millions  ');
        setStep(11)
        break;

      case 11:
        setResult('Trente-cinq-mille  ');
        setStep(12)
        break;

      case 12:
        setResult('quatre  ');
        setStep(13)
        break;
      case 13:
        setResult(' attention ! ');
        setStep(14)
        break;

      case 14:
        setResult(' je ne dis pas 4 unités simples ! ');
        setStep(15)
        break;
      case 15:
        setResult(' et voilà ');
        setStep(16)
        break;

      case 16:
        setResult('tu vois c est trés facile !');

        setStep(17)

      default:
        setSuivant(false)
        setRefaire(true)
        break;
    }
  };

  return (
    <div>
      <Card> {result} </Card>
      <img src='/images/PetiTeacher.png' alt='teacher' style={imageStyle} />




      <img src={images[step]} alt={`image ${step}`} style={imageStyle2} />

      <br />


      {
        Suivant &&

        <div>
          <Button variant="contained" color="primary" onClick={handleNextStep}>
            Suivant
          </Button>
        </div>
      }




{
        refaire &&

        <div>
          <Button variant="contained" color="primary" onClick={initialiser}>
            Refaire
          </Button>
        </div>
      }

    </div>
  );
};

export default Démonstration;
