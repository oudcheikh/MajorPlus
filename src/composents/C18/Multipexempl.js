import React, { useState, useRef } from 'react';
import { InlineMath } from 'react-katex';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import 'katex/dist/katex.min.css';
import { FormulaText,FormulaText1 } from '../Styles/MajorStyles';
import correctSound from '../sounds/correct.mp3';
import incorrectSound from '../sounds/incorrect.mp3';
import prof1 from './PetiTeacher.png' 
// Définissez ici le style de l'image, si nécessaire
const imageStyle = {
  width: '60%',
  height: 'auto',
  maxWidth: '60%',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto'
};

const FractionToDecimal = () => {
  const [inputValue, setInputValue] = useState('');
  const [fraction, setFraction] = useState({ numerator: 1, denominator: 10 });
  const [isCorrect, setIsCorrect] = useState(null);
  const correctSoundRef = useRef(new Audio(correctSound));
  const incorrectSoundRef = useRef(new Audio(incorrectSound));

  // Génère une nouvelle fraction
  const generateFraction = () => {
    const numerator = Math.floor(Math.random() * 8) + 1; // 1 à 9
    const denominator = 10 ** (Math.floor(Math.random() * 2) + 1); // 10 ou 100
    return { numerator, denominator };
  };

  // Gère le changement de valeur dans le champ de saisie
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // Gère la soumission de la forme
  const handleSubmit = () => {
    const userDecimal = parseFloat(inputValue);
    const correctDecimal = (fraction.numerator / fraction.denominator).toFixed(2);
    
    if(userDecimal.toFixed(2) === correctDecimal) {
      setIsCorrect(true);
      correctSoundRef.current.play(); // Jouer le son correct
    } else {
      setIsCorrect(false);
      incorrectSoundRef.current.play(); // Jouer le son incorrect
    }
  };

  // Réinitialise pour une nouvelle question
  const handleReset = () => {
    setFraction(generateFraction());
    setInputValue('');
    setIsCorrect(null);
  };

  // Convertit la fraction en chaîne pour KaTeX
  const fractionString = `\\frac{${fraction.numerator}}{${fraction.denominator}}`;

  return (<div>
    <img src={prof1} alt="Enseignant" style={imageStyle} />
    <Box sx={{ my: 4, mx: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
<FormulaText> <strong>
        Écris les nombres suivants sous la forme de nombres à virgule. </strong>
        </FormulaText>

      <Box sx={{ display: 'flex', alignItems: 'center' ,marginRight:'20px' }}>
        <FormulaText><strong><InlineMath math={fractionString} style={{ fontSize: '3em', marginRight: 2 }} /></strong></FormulaText>
        <TextField
          id="user-input"
          label="Nombre à virgule"
          variant="outlined"
          value={inputValue}
          onChange={handleChange}
          error={isCorrect === false}
        />
      </Box>

     

      <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Button variant="contained" onClick={handleSubmit} style={{marginLeft:'60px'}}>
          Valider
        </Button>
        <Button variant="contained"  onClick={handleReset} style={{marginRight:'40px'}}>
          Réssaier
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

      {/* Image de l'enseignant */}
     
    </Box>
    </div>
  );
};

export default FractionToDecimal;
