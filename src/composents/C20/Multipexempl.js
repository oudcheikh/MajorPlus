import React, { useState, useRef } from 'react';
import { InlineMath } from 'react-katex';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import 'katex/dist/katex.min.css';
import { FormulaText } from '../Styles/MajorStyles';
import prof1 from './Activity.png';
import correctSound from '../sounds/correct.mp3';
import incorrectSound from '../sounds/incorrect.mp3';

// Définissez ici le style de l'image, si nécessaire
const imageStyle = {
  width: '70%',
  height: 'auto',
  maxWidth: '70%',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto'
};

const FractionToDecimal = () => {
  const [inputValue, setInputValue] = useState('');
  const [fraction, setFraction] = useState({ numerator: 1, denominator: 1 });
  const [isCorrect, setIsCorrect] = useState(null);
  const [question, setQuestion] = useState(generateQuestion());
  const correctSoundRef = useRef(new Audio(correctSound));
  const incorrectSoundRef = useRef(new Audio(incorrectSound));

  // Génère une nouvelle question avec partage inégal
  function generateQuestion() {
    const names = ['Sidi', 'Moussa', 'Fatima', 'Ahmed'];
    const randomName1 = names[Math.floor(Math.random() * names.length)];
    const randomName2 = names.filter(name => name !== randomName1)[Math.floor(Math.random() * 3)];
    const amount = Math.floor(Math.random() * 8) + 1; // Montant de la première part
    const otherAmount = amount * (Math.floor(Math.random() * 3) + 2); // Montant de la deuxième part
    const total = amount + otherAmount; // Total des deux parties
    return {
      description: `${randomName1} a ${amount} parts et ${randomName2} a ${otherAmount} parts. Combien possèdent-ils ensemble ?`,
      total
    };
  };

  // Gère le changement de valeur dans le champ de saisie
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // Gère la soumission de la forme
  const handleSubmit = () => {
    const userAnswer = parseInt(inputValue);
    
    if(userAnswer === question.total) {
      setIsCorrect(true);
      correctSoundRef.current.play(); // Jouer le son correct
    } else {
      setIsCorrect(false);
      incorrectSoundRef.current.play(); // Jouer le son incorrect
    }
  };

  // Réinitialise pour une nouvelle question
  const handleReset = () => {
    setInputValue('');
    setIsCorrect(null);
    setQuestion(generateQuestion());
  };

  // Convertit la fraction en chaîne pour KaTeX
  const fractionString = `\\frac{${fraction.numerator}}{${fraction.denominator}}`;
  
  return (
    <div>
      <img src={prof1} alt="Enseignant" style={imageStyle} />
      <Box sx={{ my: 4, mx: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <FormulaText><strong>{question.description}</strong></FormulaText>

        <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <TextField
            id="user-input"
            label="Nombre"
            variant="outlined"
            value={inputValue}
            onChange={handleChange}
            error={isCorrect === false}
          />
        </Box>

        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Button variant="contained" onClick={handleSubmit} style={{marginLeft: '60px'}}>
            Valider
          </Button>
          <Button variant="contained" onClick={handleReset} style={{marginRight: '40px'}}>
            Réessaier
          </Button>
        </Box>

        <Typography
          sx={{
            mt: 2,
            color: isCorrect ? 'green' : 'red',
            visibility: isCorrect !== null ? 'visible' : 'hidden'
          }}
        >
          {isCorrect ? 'Correct!' : 'Essaie encore!'}
        </Typography>
      </Box>
    </div>
  );
};

export default FractionToDecimal;
